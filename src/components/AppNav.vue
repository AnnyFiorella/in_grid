<template>
  <v-card flat>
    <v-container fluid>
      <v-layout row child-flex wrap>
        <!-- Logo -->
        <div>
          <img :width="55" src="../assets/images/logo.png">
        </div>
        <!-- Menu -->
        <div style="flex-basis: 10%">
          <v-toolbar class="bg-nav">
            <!-- <v-spacer></v-spacer> -->
            <v-toolbar-items class="white--text">
              <v-btn flat>Materiales</v-btn>
              <v-btn flat>Programas</v-btn>
              <v-btn flat>Segmentos</v-btn>
              <v-btn flat>Soporte</v-btn>
              <v-btn flat>Parrilla</v-btn>
              <v-btn flat>Vistas</v-btn>
              <v-btn flat>Salir</v-btn>
            </v-toolbar-items>
          </v-toolbar>
        </div>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'AppNav',
  props: {
    msg: String
  }
}
</script>