<template>
  <div id="app" >

    <AppNav/>

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>

    <router-view/>

  </div>
</template>

<script>
// @ is an alias to /src
import AppNav from '@/components/AppNav.vue'

export default {
  components: {
    AppNav
  }
}
</script>