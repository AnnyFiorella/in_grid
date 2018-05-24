<template>
  <v-container class="mb-5" grid-list-md>
    <v-layout row>
      <!-- Título de la vista -->
      <v-flex>
        <v-btn class="bg-gray ml-0 pr-5 pl-5 title-views" large depressed>Lista de Materiales</v-btn>
      </v-flex>

      <!-- Probando el date picker -->
      <v-flex>
        <v-menu
          ref="menu2"
          :close-on-content-click="false"
          v-model="menu2"
          :nudge-right="40"
          :return-value.sync="date"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px"
        >
          <v-text-field
            slot="activator"
            v-model="date"
            label="Picker without buttons"
            prepend-icon="event"
            readonly
          ></v-text-field>
          <v-date-picker class="bg-gray" v-model="date" @input="$refs.menu2.save(date)"></v-date-picker>

        </v-menu>
      </v-flex>

      <!-- Calendario y buscador -->
      <v-flex>
        <v-layout>
          <v-flex text-xs-right>
            <div class="mt-1 mr-3">
              <img src="../assets/images/calendario.svg">  
            </div>
          </v-flex>
          <v-flex>
            <div class="mt-1">
              <v-text-field
                append-icon="search"
                label="Buscar..."
                color="deep-orange"
                clearable
                solo     
              ></v-text-field>
            </div>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>

    <!-- Botón de nuevo -->
    <v-layout row>
      <v-flex text-xs-right>
        <v-btn class="bg-orange white--text subtitle-styles mr-0 pr-3 pl-3">NUEVO</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Headboard',
  props: {
    msg: String
  },
  data: () => ({
    date: null,
    menu: false,
    modal: false,
    menu2: false
  })


  // data: () => ({
  //   date: null,
  //   dateFormatted: null,
  //   menu1: false
  // }),

  // computed: {
  //   computedDateFormatted () {
  //     return this.formatDate(this.date)
  //   }
  // },

  // watch: {
  //   date (val) {
  //     this.dateFormatted = this.formatDate(this.date)
  //   }
  // },

  // methods: {
  //   formatDate (date) {
  //     if (!date) return null

  //     const [year, month, day] = date.split('-')
  //     return `${month}/${day}/${year}`
  //   },
  //   parseDate (date) {
  //     if (!date) return null

  //     const [month, day, year] = date.split('/')
  //     return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
  //   }
  // }
}
</script>

