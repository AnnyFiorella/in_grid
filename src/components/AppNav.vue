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
          <v-toolbar class="nav-bg">
            <v-toolbar-items >
              <!-- <router-link to="/">Home</router-link> -->
              <router-link to="/" tag="v-btn" class="white--text nav-text pl-3 pr-3">Materiales</router-link>
              <router-link to="/programs" tag="v-btn" class="white--text nav-text pl-3 pr-3">Programas</router-link>
              <router-link to="/segments" tag="v-btn" class="white--text nav-text pl-3 pr-3">Segmentos</router-link>
              <router-link to="/support" tag="v-btn" class="white--text nav-text pl-3 pr-3">Soporte</router-link>
              <router-link to="/grid" tag="v-btn" class="white--text nav-text pl-3 pr-3">Parrilla</router-link>
              <router-link to="/views" tag="v-btn" class="white--text nav-text pl-3 pr-3">Vistas</router-link>
              <router-link to="/exit" tag="v-btn" class="white--text nav-text pl-3 pr-3">Salir</router-link>
              <!-- <v-btn flat class="white--text nav-text pl-3 pr-3"></v-btn> Falta agregar el flat al router-link -->
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