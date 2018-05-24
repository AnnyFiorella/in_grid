<template>
  <div id="app" >
    <AppNav></AppNav>
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