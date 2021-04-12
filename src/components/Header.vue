<template>

    <div class="col-12 vue-bg h-100 d-flex justify-content-center align-items-center">
              <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
        <h1>Atelier VueJs : "Inscription d'un employé".</h1>
          <a href="https://github.com/Idoufkir" target="_blank">
          <img alt="Idoufkir" src="../assets/idoufkir.png" width="50%">
          </a>
          <div class="navlink">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <router-link to="/" class="nav-link" aria-current="page" ><b>Formulaire</b></router-link>
          </li><br>
          <li class="nav-item">
            <router-link to="/users" class="nav-link" ><b>Afficher les utilisateurs</b></router-link>
          </li>
        </ul>
        </div>
    </div>
</template>

<script>

export default {
    name : "Header"
}
</script>
<style>
.btn-vue{
    background: #53B985;
    color: #31485D;
    font-weight: bold;
}
.vue-bg{
    background-image: url("../../public/background1.jpeg");
}
.vue-bg h1{
  margin-top: -120%;
}
.vue-bg img{
  margin-top: -270%;
  margin-left: -300%;
}
.navlink a{
    color: white;
  text-decoration: none;
  list-style-type: none;
  margin-left: -800%;
  padding: 0;
}
</style>