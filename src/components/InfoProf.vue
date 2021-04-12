<template>
        <div class="col-md-9 h-100 d-flex justify-content-center align-items-center">
          <div class="col-md-12 rounded px-5 py-4 shadow bg-white text-left">


    <form id="form-comp" v-on:submit.prevent="submit" @submit="addInfoProf">
        <div class="row">
            <div class="col-4 form-group text">
                <label class="col-form-label col-form-label-md"><b>E-mail Professionnel </b><span class="text-danger">* :</span></label>
                <input v-model.trim="email" type="text" :class="{'is-invalid': validationStatus($v.email)}" class="form-control">
                <div v-if="!$v.email.required"  class="invalid-feedback">E-mail est requis</div>
            </div>
            <div class="col-4 form-group">
                <label class="col-form-label col-form-label-md"><b>Employeur </b><span class="text-danger">* :</span></label>
                <input v-model.trim="employeur" type="text" :class="{'is-invalid': validationStatus($v.employeur)}" class="form-control">
                <div v-if="!$v.employeur.required"  class="invalid-feedback">Employeur est requis</div>
            </div>
            <div class="col-4 form-group">
                <label class="col-form-label col-form-label-md"><b>N° Téléphone (Poste)</b><span class="text-danger">* :</span></label>
                <input v-model.trim="telePoste" type="text" :class="{'is-invalid': validationStatus($v.telePoste)}" class="form-control">
                <div v-if="!$v.telePoste.required"  class="invalid-feedback">N° Télé (Poste) est requis</div>
            </div>
            <div class="col-4 form-group">
                <label class="col-form-label col-form-label-md"><b>N° CNSS </b><span class="text-danger">* : </span></label>
                <input v-model.trim="cnss" type="text" :class="{'is-invalid': validationStatus($v.cnss)}" class="form-control">
                <div v-if="!$v.cnss.required"  class="invalid-feedback">N° CNSS est requis</div>
            </div>
            <div class="col-4 form-group">
                <label class="col-form-label col-form-label-md"><b>Adresse de travail </b><span class="text-danger">* : </span></label>
                <input v-model.trim="adresseTravail" type="text" :class="{'is-invalid': validationStatus($v.adresseTravail)}" class="form-control">
                <div v-if="!$v.adresseTravail.required"  class="invalid-feedback">Adresse de travail est requis</div>
            </div>
            <br><br><br><br>
            <div class="col-12 form-group text-center">
                <button type="submit" class="btn btn-vue btn-md col-3">Soumettre</button>
            </div>
        </div>
    </form>
              </div>
        </div>
        
</template>
<script>
import { required } from 'vuelidate/lib/validators'
export default {
    name: 'InfoProf',
    data: function() {
        return {
            email: '',
            employeur: '',
            telePoste: '',
            cnss: '',
            adresseTravail: ''
        }
    },
    validations: {
        email: {required},
        employeur: {required},
        telePoste: {required},
        cnss: {required},
        adresseTravail: {required}
    },
    methods: {

        validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error : false;
        },

        submit: function() {

            this.$v.$touch();
            if (this.$v.$pendding || this.$v.$error) return;

            alert("Informations Professionnelles est ajoutées !!")

        },
        addInfoProf(e){
            e.preventDefault();
            this.$store.state.InfoProf = {
                email: this.email,
                employeur: this.employeur,
                telePoste: this.telePoste,
                cnss: this.cnss,
                adresseTravail: this.adresseTravail
            }

        }
    }
}
</script>

<style scoped>
</style>