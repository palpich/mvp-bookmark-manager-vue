<template>
  <div id="app">
    <div class="main">
      <div class="header">
        <h1>Закладки</h1>
        <router-link to="/new">+</router-link>
      </div>
      <router-view />
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

.header
  display: flex
  align-items: center
  justify-content: space-between
  padding: 0 18px
  & > a
    font-size: 24px
    font-weight: bold
    color: #2c3e50
    text-decoration: none
    transition: .3s
    &:hover
      color: #58a5ff
</style>
