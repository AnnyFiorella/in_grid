<template>
  <v-container  grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 mb-5
        v-for="card in cards"
        :key="card.title">
        <v-card color="grey lighten-2" class="elevation-7">
          <v-container fluid grid-list-lg>
            <v-layout row>
              <v-flex xs3>
                <div>
                <v-card-media v-if="!card.canned"
                :src="card.src"
                height="300px">    
                 </v-card-media>
                 <v-card-media  v-else
                :src="card.src"
                height="450px">    
                 </v-card-media>
                </div>
               </v-flex>
      <!-- seccion 2 -->
               <v-flex xs4 >
                <v-flex xs11 >
                  <div class="pl-5 pr-5 py-4">
                  <div class ="title-styles" v-text="card.title"></div>
                <v-flex>
                <div class= "mt-5 px-2 py-1 bg-orange subtitle-styles white--text">Cod. Material:
                  <span class="font-general white--text ml-4" v-text="card.materialCode"></span>
                </div>
                <div class ="subtitle-styles white mt-2 pa-1" >Cod. Programa:
                  <span class="ml-3" v-text="card.programCode"></span>
                </div>
                  <!-- enlatados-->
               
                <div class ="subtitle-styles px-1 pt-5" v-if="card.canned">  
                    <p class="text-orange underline line-heigth2">Vigencia: </p> 
                    <p>Inicio: <span class="ml-3" v-text="card.startValidity"></span></p>
                    <p>Fin: <span class="ml-3" v-text="card.endValidity"></span></p>  
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
                  <span class="underline">Duración:<br></span> <span class="font-general" v-text="card.duration"></span>
                </div> 
                <hr class= "line-card mb-3"> 
                <v-layout row>
                  <v-flex >                   
                    <div class ="subtitle-styles">
                      <span class="underline">Tipo:<br></span> <span class="font-general" v-text="card.materialType"></span>
                    </div>
                  </v-flex> 
                  <v-flex xs6> 
                    <div class ="subtitle-styles">
                      <span class="underline">Género:<br></span> <span class="font-general" v-text="card.genre"></span>
                    </div>
                  </v-flex>  
                </v-layout>                   
                <hr class= "line-card mb-3">
                  <v-layout row>
                  <v-flex >                   
                    <div class ="subtitle-styles">
                      <span class="underline">Centro de Costo:<br></span> 
                      <span class="text-orange" v-text="card.numberCenter"></span>
                      <span class="font-general" v-text="card.center"></span>
                    </div>
                  </v-flex> 
                  <!-- enlatados -->
                  <v-flex xs6> 
                    <div class ="subtitle-styles" v-if ="card.canned">
                      <span class="underline">Clasificación:<br></span> 
                       <span class="text-orange" v-text="card.numberClasification"></span>
                      <span class="font-general" v-text="card.clasification"></span>
                    </div>
                  </v-flex>  
                </v-layout>
                <div v-if ="card.canned">
                  <hr class= "line-card mb-3">
                  <v-layout row >               
                  <v-flex>                     
                    <div class ="subtitle-styles">
                      <span class="underline">Precio por pasada:<br></span> 
                      $<span class="font-general" v-text="card.broadcastPrice"></span>
                    </div>
                  </v-flex> 
                  <v-flex xs6> 
                    <div class ="subtitle-styles">
                      <span class="underline">Saldo de Pasadas:<br></span> 
                      <span class="font-general" v-text="card.broadcastCredit"></span>
                    </div>
                  </v-flex>               
                  </v-layout>    
                  <hr class= "line-card mb-3">
                  <div> 
                    <div class ="subtitle-styles">
                      <span class="underline">Actores:<br></span> 
                      <span class="font-general" v-text="card.stars"></span>
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
  data: () => ({
    cards: [
      { 
        canned:false,
        title: "América Noticias: Primera Edición",
        src:
          "https://cde.americatv.com.pe/minisites/an-primera-edicion-360x227-316522.jpg",
        materialCode: 123,
        programCode: 321,
        duration: "2h 30min",
        materialType: "Periodístico",
        materialClasification: "Publico General",
        genre: "Genero1",
        center: "Nombre del centro",
        numberCenter: "(32)",
        // url: "./images/logo.png",
      },
      {
        canned:true,
        title: "Rapidos y Furiosos: sin control",
        src:
          "https://s.s-bol.com/imgbase0/imagebase3/large/FC/9/3/1/4/1002004006554139.jpg",
        materialCode: 125,
        programCode: 320,
        duration: "2h 30min",
        materialType: "Periodistico",
        materialClasification: "Publico General",
        genre: "Genero1",
        center: "Nombre del centro",
        numberCenter: "(32)",
        clasification: "Mayores de 14",
        numberClasification: "(14)",
        broadcastPrice:2000,
        broadcastCredit:3,
        stars:"Vin Diesel, Paul Walker",
        startValidity:"22/01/2018",
        endValidity:"23/05/2018",
      }
    ]
  })
};
</script>