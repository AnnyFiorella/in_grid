<template>
  <v-card flat extended>
      <v-toolbar class="pt-3 pb-3" color="white" flat fixed>
        <v-toolbar-title>
          <img :width="55" src="../assets/images/logo.png">
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="nav-bg"
          v-for="item in items"
          :key="item.title"
        >
          <v-btn :to="item.url" flat class="white--text nav-text pl-3 pr-3" item>{{ item.title }}</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-toolbar flat extended extension-height="110">
      </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: 'AppNav',
  props: {
    msg: String
  },
  data: () => ({
    items: [
      { url: '/', title: 'Materiales'},
      { url: '/programs', title: 'Programas'},
      { url: '/segments', title: 'Segmentos'},
      { url: '/support', title: 'Soporte'},
      { url: '/grid', title: 'Parrilla'},
      { url: '/views', title: 'Vistas'},
      { url: '/exit', title: 'Salida'}
    ]
  })
};
</script>