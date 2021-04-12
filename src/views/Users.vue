<template>
  <div class="users">
    <div class="container mt-5">
      <div class="row">
        <div class="col d-flex align-items-center flex-column">
          <h1>
            Personal informations
          </h1>
          <div class="InfoPerso">
            <p>Prénom : {{this.$store.state.InfoPerso.prenom}} </p>
            <p>Nom : {{this.$store.state.InfoPerso.nom}} </p>
            <p>Téléphone : {{this.$store.state.InfoPerso.tele}} </p>
            <p>CIN : {{this.$store.state.InfoPerso.cin}} </p>
            <p>Photo : {{this.$store.state.InfoPerso.photo}} </p>
            <p>Passport N° : {{this.$store.state.InfoPerso.passport}} </p>
            <p>Adresse : {{this.$store.state.InfoPerso.adresse}} </p>
            <p>Ville : {{this.$store.state.InfoPerso.ville}} </p>
            <p>Pays : {{this.$store.state.InfoPerso.pays}} </p>
            <p>Région : {{this.$store.state.InfoPerso.region}} </p>
          </div>
        </div>
        <div class="col d-flex align-items-center flex-column">
          <h1>
            Professionnal informations
          </h1>
          <div class="InfoProf">
            <p>CNSS N° : {{this.$store.state.InfoProf.cnss}}</p>
            <p>N° Téléphone (Psote) : {{this.$store.state.InfoProf.telePoste}}</p>
            <p>Email Professionnel : {{this.$store.state.InfoProf.email}}</p>
            <p>Employeur : {{this.$store.state.InfoProf.employeur}}</p>
            <p>Addresse Travail : {{this.$store.state.InfoProf.adresseTravail}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
