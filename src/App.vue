<template>
  <div id="app">
    <header class="header">
      <h1 class="page-title">#movienow</h1>
    </header>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
#app {
  background: #363232;
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.container {
  width: 1140px;
  margin: 0 auto;
  padding: 40px 0;
  min-height: calc(100vh - 98px);
}
.header {
  background: rgba(250, 40, 40, 0.98);
}
.page-title {
  font-size: 48px;
  line-height: 48px;
  text-align: center;
  letter-spacing: 0.21em;
  text-transform: uppercase;
  color: #000;
  padding: 35px 0 15px;
}
.navigation {
  border-bottom: 1px solid #c4c4c4;
  margin-bottom: 40px;
  padding-bottom: 20px;
}
.nav {
  display: flex;
}
</style>
