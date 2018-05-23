const express = require('express');
const router = express.Router();

// hace llamado al esquema material
const Material = require('../models/Material');

// ruta que devuelve la información del material según el Id 
router.get('/:id', (req, res, next) => {
    Material.findById(req.params.id, function(err, material){
        if(err){
            res.status(500).json({message:'Se ha producido un error al obtener el material'})
        }
        else{
            res.json(material);
        }        
    })
});

// ruta que obtiene los datos almacenados en el esquema Material
router.get('/', (req, res) => {
    Material.find(function (err, materials) {
        if(err) {            
            res.status(500).send({message: 'Error al listar los materiales'})
        }
        else {
            res.json(materials);
        }
    })
});

// ruta que agrega datos al esquema material por metodo POST 

router.post('/',(req, res) => {
    const material = new Material(req.body);
    material.save()
    .then(material => {
        res.status(201).json({message: ' El material ha sido agregado satisfactoriamente'})
    })
    .catch(err => {
        res.status(400).send({message: 'Se ha producido un error al agregar el material '})
    });
});

// actualiza datos al esquema usuario por el método PUT / recibe como parametro el id del material
router.put('/:id', (req, res, next) => {
    Material.findById(req.params.id, function (err, material){
        if(!material) {
            return res.status(404).send('No se ha encontrado el usuario');
        } else {
            material.name = req.body.name;
            material.cod_material = req.body.cod_material;
            material.cod_program = req.body.cod_program;
            material.duration = req.body.duration;
            material.classification = req.body.classification;
            material.cost_center = req.body.cost_center;
            material.genre = req.body.genre

            material.save()
            .then(material => {
                res.status(200).json('Material Actualizado completamente');
            })
            .catch(err => {
                res.status(400).send('Se ha producido un error al actualizar los datos del material');
            });
        }
    })
});

// elimina el dato usuario de la base de datos por el método PUT que recibe como parametro el id del usuario
router.delete('/:id', (req, res, next) => {
    Material.findByIdAndRemove(req.params.id, function (err, material) {
        if(err) {            
            res.status(400).send('Se ha producido un error al eliminar el material');
        }
        else{
            res.json('Materiaal eliminado satisfactoriamente');            
        }
    });
});

module.exports = router;