<template>
  <div class="material" data-app>
    <Headboard></Headboard>
    <Cards></Cards>
  </div>
</template>

<script>
// @ is an alias to /src
import Cards from '@/components/Cards.vue'
import Headboard from '@/components/Headboard.vue'

export default {
  name: 'material',
  components: {
    Cards,
    Headboard
  }
}
</script>
