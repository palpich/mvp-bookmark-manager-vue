<template>
  <div id="app">
    <div class="main">
      <h1>Закладки</h1>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

div {
  box-sizing: border-box;
}
</style>

<style lang="sass" scoped>
h1
  text-transform: uppercase
  text-align: left

.main
  max-width: 800px
  margin: 0 auto
</style>
