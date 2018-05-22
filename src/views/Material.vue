<template>
  <div class="material">
    <Cards></Cards>
    <!-- <Card msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Cards from '@/components/Cards.vue'

export default {
  name: 'material',
  components: {
    Cards
  }
}
</script>
