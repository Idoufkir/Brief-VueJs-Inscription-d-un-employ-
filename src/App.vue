<template>
  <div id="app" class="h-100">
    <div class="container-fluid h-100">
      <div class="row h-100">
            <div class="col-4">
              <Header />
            </div>
            <div class="col-8">
           <router-view/>
            </div>
      </div>
    </div>
  </div>
</template>

<script>

import Header from "./components/Header.vue"
// import Home from './views/Home.vue'


export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.row {
  padding-left: 0;

}

</style>
