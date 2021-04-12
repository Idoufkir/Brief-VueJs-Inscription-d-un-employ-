<template>
  <div class="home">
    <div class="container mt-5">
      <div class="row">
        <div class="col-12 d-flex align-items-center flex-column">
          <h1>
            Les infos Personnelles :
          </h1>
         <PersInfo />

        </div><br><br>

        <div class="col-12 d-flex align-items-center flex-column partie-2">
          <h1>
            Les infos Professionnelles :
          </h1>
          <ProInfo />

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PersInfo from "../components/InfoPerso"
import ProInfo from "../components/InfoProf"

export default {
  name: 'Home',
  components: {
    PersInfo,
    ProInfo
  }
}
</script>
<style>
.partie-2{
  margin-top: 50px;
}
</style>
