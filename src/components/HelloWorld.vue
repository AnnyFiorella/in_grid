<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://github.com/vuejs/vue-cli/tree/dev/docs" target="_blank">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>