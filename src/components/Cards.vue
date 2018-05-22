<template>
<v-container>
  <v-layout column>
    <v-flex xs12 sm6
    >
      <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex xs12
              v-for="card in cards"
              v-bind="{ [`xs${card.flex}`]: true }"
              :key="card.title"
            >
            
            <v-card color="grey lighten-2" class="black--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                   <v-flex xs3>
                    <v-card-media
                      :src="card.src"
                      height="250px"
                      >
                    </v-card-media>
                  </v-flex>
                  <v-flex xs4>
                    <div>
                      <div class="headline black--text" v-text="card.title"></div>
                      <div><span class="black--text" v-text="card.materialCode"></span></div>
                      <div><span class="black--text" v-text="card.programCode"></span></div>
                    </div>
                  </v-flex>
                  <v-flex xs4>
                    <div>
                      <div class="headline black--text" v-text="card.duration"></div>
                      <div class="headline black--text" v-text="card.materialType"></div>
                      <div class="headline black--text" v-text="card.materialClasification"></div>
                      <div class="headline black--text" v-text="card.genre"></div>
                      <div class="headline black--text" v-text="card.center"></div>                     
                    </div>
                  </v-flex>
                 
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
           
          </v-layout>
      </v-container>
      
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        title: "América Noticias: Primera Edicion",
        src: "https://cde.americatv.com.pe/minisites/an-primera-edicion-360x227-316522.jpg",
        materialCode:123,
        programCode:321,
        // duration: 2h 30min,
        // materialType:Periodistico,
        // materialClasification:Publico General,
        // genre: Genero1,
        // center: Nombre del centro,
        flex: 12
      },
      {
        title: "Rapidos y Furiosos: sin control",
        src: "http://cdn-static.denofgeek.com/sites/denofgeek/files/styles/main_wide/public/2017/04/fast-and-furious-8.jpg?itok=vgmJwfIs",
        materialCode:125,
        programCode:320,
        flex: 12
      }
    ]
  })
};
</script>