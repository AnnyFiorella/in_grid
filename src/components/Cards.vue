<template>
  <v-container  grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 mb-5
        v-for="material in materials"
        :key="material.title">
        <v-card color="grey lighten-2" class="elevation-7">
          <v-container fluid grid-list-lg>
            <v-layout row>
              <v-flex xs3>
                <div>
                <v-card-media v-if="!material.canned"
                :src="material.src"
                height="300px">    
                 </v-card-media>
                 <v-card-media  v-else
                :src="material.src"
                height="471px">    
                 </v-card-media>
                </div>
               </v-flex>
      <!-- seccion 2 -->
               <v-flex xs4 >
                <v-flex xs11 >
                  <div class="pl-5 pr-5 py-4">
                  <div class ="title-styles" v-text="material.title"></div>
                <v-flex>
                <div class= "mt-5 px-2 py-1 bg-orange subtitle-styles white--text">Cod. Material:
                  <span class="font-general white--text ml-4" v-text="material.cod_material"></span>
                </div>
                <div class ="subtitle-styles white mt-2 pa-1" >Cod. Programa:
                  <span class="ml-3" v-text="material.cod_program"></span>
                </div>
                  <!-- enlatados-->
               
                <div class ="subtitle-styles px-1 pt-5" v-if="material.canned">  
                    <p class="text-orange underline">Vigencia: </p> 
                    <p class="line-heigth2">Inicio:<span class="ml-2" v-text="material.startValidity"></span></p>
                    <p class="line-heigth2">Fin:<span class="ml-4" v-text="material.endValidity"></span></p>  
                </div> 
                </v-flex>
                </div>
              </v-flex>
            </v-flex>
      <!-- seccion 3 -->
            <v-flex xs5 class="outline">
              <v-layout justify-end class="pr-2">               
                  <!-- <img :src="card.url" :alt="card.title">                                            -->
                <img class="mr-2" src="../assets/images/edit.svg"> 
                <img src="../assets/images/candado-open.svg">                         
              </v-layout>
              <div class="py-3 pl-4 pr-1 line-heigth">                    
                <div class ="subtitle-styles">
                  <span class="underline">Duración:<br></span> <span class="font-general" v-text="material.duration"></span>
                </div> 
                <hr class= "line-card mb-3"> 
                <v-layout row>
                  <v-flex >                   
                    <div class ="subtitle-styles">
                      <span class="underline">Tipo:<br></span> <span class="font-general" v-text="material.material_type"></span>
                    </div>
                  </v-flex> 
                  <v-flex xs6> 
                    <div class ="subtitle-styles">
                      <span class="underline">Género:<br></span> <span class="font-general" v-text="material.genre"></span>
                    </div>
                  </v-flex>  
                </v-layout>                   
                <hr class= "line-card mb-3">
                  <v-layout row>
                  <v-flex >                   
                    <div class ="subtitle-styles">
                      <span class="underline">Centro de Costo:<br></span> 
                      <span class="text-orange">(<span class="text-orange" v-text="material.num_center"></span>)</span>
                      <span class="font-general" v-text="material.cost_center"></span>
                    </div>
                  </v-flex> 
                  <!-- enlatados -->
                  <v-flex xs6> 
                    <div class ="subtitle-styles" v-if ="material.canned">
                      <span class="underline">Clasificación:<br></span> 
                       <span class="text-orange" v-text="material.num_classification"></span>
                      <span class="text-orange">- </span><span class="font-general" v-text="material.classification"></span>
                    </div>
                  </v-flex>  
                </v-layout>
                <div v-if ="material.canned">
                  <hr class= "line-card mb-3">
                  <v-layout row >               
                  <v-flex>                     
                    <div class ="subtitle-styles">
                      <span class="underline">Precio por pasada:<br></span> 
                      $<span class="font-general" v-text="material.broadcastPrice"></span>
                    </div>
                  </v-flex> 
                  <v-flex xs6> 
                    <div class ="subtitle-styles">
                      <span class="underline">Saldo de Pasadas:<br></span> 
                      <span class="font-general" v-text="material.broadcastCredit"></span>
                    </div>
                  </v-flex>               
                  </v-layout>    
                  <hr class= "line-card mb-3">
                  <div> 
                    <div class ="subtitle-styles">
                      <span class="underline">Actores:<br></span> 
                      <p class="line-heigth2">
                        <v-icon small class="text-orange">star</v-icon> <span class="font-general" v-text="material.main_actors[0]"></span>
                      </p>
                      <p class="line-heigth2">
                        <v-icon small class="text-orange">star</v-icon> <span class="font-general" v-text="material.main_actors[1]"></span>
                      </p>  
                    </div>
                  </div>                  
                </div>                  
              </div>
              </v-flex>    
            </v-layout>
          </v-container>
        </v-card>
      </v-flex> 
    </v-layout>
  </v-container>
</template>

<script>

export default {
  data() {
    return {
      materials: []
    };
  },
  created() {
    this.fetchMaterials();
  },
  methods: {
    fetchMaterials() {
      this.axios
        .get("https://griddb.herokuapp.com/material")
        .then(res => {
         
          this.materials = res.data;
        })
        .catch(err => console.log(err));
    }
  }
};

</script>