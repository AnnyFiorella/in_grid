<template>
  <v-container  grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 mb-5
        v-for="card in cards"
        :key="card.title">
        <v-card color="grey lighten-2" class="black--text elevation-7">
          <v-container fluid grid-list-lg>
            <v-layout row>
              <v-flex xs3>
                <v-card-media
                  :src="card.src"
                  height="250px">    
                </v-card-media>
              </v-flex>
              <v-flex xs4 >
                <v-flex xs11 >
                  <div class="px-5 py-4">
                    <div class ="title-styles" v-text="card.title"></div>
                    <div class= "mt-5 px-2 py-1 bg-orange subtitle-styles white--text">Cod. Material:
                      <span class="font-general white--text ml-4" v-text="card.materialCode"></span>
                    </div>
                    <div class ="subtitle-styles white mt-2 pa-1" >Cod. Programa:
                      <span class="ml-3" v-text="card.programCode"></span>
                    </div>
                  </div>
                </v-flex>
              </v-flex>  
              <!-- segunda parte -->
              <v-flex xs5>
                <v-layout justify-end class="outline pr-2"> 
                  <img :src="card.url">                 
                  <!-- <img src="../assets/images/edit.svg"> 
                  <img src="../assets/images/candado-open.svg">                            -->
                </v-layout>
                <div class="pa-3 outline">                    
                  <div class ="subtitle-styles">
                    <span class="underline">Duración:<br></span> <span class="font-general black--text" v-text="card.duration"></span>
                  </div> 
                  <hr class= "line-card"> 
                  <v-layout row>
                    <v-flex >                   
                      <div class ="subtitle-styles">
                        <span class="underline">Tipo:<br></span> <span class="font-general black--text" v-text="card.materialType"></span>
                      </div>
                    </v-flex> 
                    <v-flex xs6> 
                      <div class ="subtitle-styles">
                        <span class="underline">Género:<br></span> <span class="font-general black--text" v-text="card.genre"></span>
                      </div>
                    </v-flex>  
                  </v-layout>                   
                  <hr class= "line-card">
                  <div class ="subtitle-styles">
                    <span class="underline">Centro de Costo:<br></span> <span class="font-general black--text" v-text="card.center"></span>
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
        title: "América Noticias: Primera Edición",
        src: "https://cde.americatv.com.pe/minisites/an-primera-edicion-360x227-316522.jpg",
        materialCode: 123,
        programCode: 321,
        duration: "2h 30min",
        materialType: "Periodístico",
        materialClasification: "Publico General",
        genre: "Genero1",
        center: "(32)Nombre del centro",
         url: 'assets/images/logo.png',
      },
      {
        title: "Rapidos y Furiosos: sin control",
        src: "http://cdn-static.denofgeek.com/sites/denofgeek/files/styles/main_wide/public/2017/04/fast-and-furious-8.jpg?itok=vgmJwfIs",
        materialCode: 125,
        programCode: 320,
        duration: "2h 30min",
        materialType: "Periodistico",
        materialClasification: "Publico General",
        genre: "Genero1",
        center: "(32)Nombre del centro"
      }
    ]
  })
};
</script>