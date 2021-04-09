<template>
  <div id="app" class="h-100">
    <div class="container-fluid h-100">
      <div class="row h-100">
        <div class="col-md-3 vue-bg h-100 d-flex justify-content-center align-items-center">
          <h1>Atelier VueJs : "Inscription d'un employé".</h1>
          <a href="https://github.com/Idoufkir" target="_blank">
          <img alt="Idoufkir" src="./assets/idoufkir.png" width="50%">
          </a>
        </div>
        <div class="col-md-9 h-100 d-flex justify-content-center align-items-center">
          <div class="col-md-8 rounded px-5 py-4 shadow bg-white text-left">
            <CompForm />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import CompForm from './components/FormCompon.vue'
export default {
  name: 'App',
  components: {
    CompForm
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
.vue-bg{
    background-image: url("../public/background1.jpeg");
}
.vue-bg h1{
  margin-top: -150%;
}
.vue-bg img{
  margin-top: -270%;
  margin-left: -300%;
}

</style>
