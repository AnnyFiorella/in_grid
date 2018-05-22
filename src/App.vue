<template>
  <div id="app" >

    <div id="nav">
      <router-link to="/" class="mycolor">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/material">Material</router-link>
    </div>

    <!-- <v-app id="">
      <div>
        <v-btn color="error">Success</v-btn>
        <v-btn color="error">Error</v-btn>
        <v-btn color="warning">Warning</v-btn>
        <v-btn color="info">Info</v-btn>
      </div>
    </v-app> -->

    <router-view/>
  </div>
</template>

<style>
/*
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} 
*/
</style>
