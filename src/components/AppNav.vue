<template>
<div>
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
      <v-toolbar flat extended>
      </v-toolbar>
  </v-card>
  </div>
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
      { url: '/programs', title: 'Programs'},
      { url: '/segments', title: 'Segments'},
      { url: '/support', title: 'Support'},
      { url: '/grid', title: 'Grid'},
      { url: '/views', title: 'Views'},
      { url: '/exit', title: 'Exit'}
    ]
  })
};
</script>