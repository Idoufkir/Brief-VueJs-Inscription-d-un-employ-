<template>
        <div class="col-md-9 h-100 d-flex justify-content-center align-items-center">
          <div class="col-md-12 rounded px-5 py-4 shadow bg-white text-left">


    <form id="form-comp" v-on:submit.prevent="submit" @submit="addInfoPerso">
        <div class="row">
            <div class="col-4 form-group text">
                <label class="col-form-label col-form-label-md"><b>Prénom </b><span class="text-danger">* :</span></label>
                <input v-model.trim="prenom" type="text" :class="{'is-invalid': validationStatus($v.prenom)}" class="form-control">
                <div v-if="!$v.prenom.required"  class="invalid-feedback">Prénom est requis</div>
            </div>
            <div class="col-4 form-group">
                <label class="col-form-label col-form-label-md"><b>Nom </b><span class="text-danger">* :</span></label>
                <input v-model.trim="nom" type="text" :class="{'is-invalid': validationStatus($v.nom)}" class="form-control">
                <div v-if="!$v.nom.required"  class="invalid-feedback">Nom est requis</div>
            </div>
            <div class="col-4 form-group">
                <label class="col-form-label col-form-label-md"><b>Téléphone </b><span class="text-danger">* :</span></label>
                <input v-model.trim="tele" type="text" :class="{'is-invalid': validationStatus($v.tele)}" class="form-control">
                <div v-if="!$v.tele.required"  class="invalid-feedback">N° Télé est requis</div>
            </div>
            <div class="col-4 form-group">
                <label class="col-form-label col-form-label-md"><b>CIN </b><span class="text-danger">* : </span></label>
                <input v-model.trim="cin" type="text" :class="{'is-invalid': validationStatus($v.cin)}" class="form-control">
                <div v-if="!$v.cin.required"  class="invalid-feedback">N° CIN est requis</div>
            </div>
            <div class="col-4 form-group">
                <label class="col-form-label col-form-label-md"><b>Photo </b><span class="text-danger">* : </span></label>
                <input  type="file" :class="{'is-invalid': validationStatus($v.photo)}" class="form-control">
            </div>
            <div class="col-4 form-group">
                <label class="col-form-label col-form-label-md"><b>Passeport N° </b><span class="text-danger">* : </span></label>
                <input v-model.trim="passport" type="text" :class="{'is-invalid': validationStatus($v.passport)}" class="form-control">
                <div v-if="!$v.passport.required"  class="invalid-feedback">N° Passport est requis</div>
            </div>
            <div class="col-4 form-group">
                <label class="col-form-label col-form-label-md"><b>Adresse </b><span class="text-danger">* : </span></label>
                <input v-model.trim="adresse" type="text" :class="{'is-invalid': validationStatus($v.adresse)}" class="form-control">
                <div v-if="!$v.adresse.required"  class="invalid-feedback">Adresse est requis</div>
            </div>
            <div class="col-4 form-group">
                <label class="col-form-label col-form-label-md" ><b>Pays </b><span class="text-danger">* : </span></label><br>
                <select v-model.trim="pays" name="country" class="countries" id="countryId" :class="{'is-invalid': validationStatus($v.pays)}">
                    <option value="">Selection le pays</option>
                </select>
                <div v-if="!$v.pays.required"  class="invalid-feedback">Pays est requis</div>
            </div>
            <div class="col-4 form-group">
                <label class="col-form-label col-form-label-md"><b>Région </b><span class="text-danger">* : </span></label><br>
                <select v-model.trim="region" name="state" class="states" id="stateId" :class="{'is-invalid': validationStatus($v.region)}">
                    <option value="">Selection la Région</option>
                </select>
                <div v-if="!$v.region.required"  class="invalid-feedback">Région est requis</div>
            </div>
            <div class="col-4 form-group">
                <label class="col-form-label col-form-label-md"><b>Ville </b><span class="text-danger">* : </span></label><br>
                <select v-model.trim="ville" name="city" class="cities" id="cityId" :class="{'is-invalid': validationStatus($v.ville)}">
                    <option value="">Selection la ville</option>
                </select>
                <div v-if="!$v.ville.required"  class="invalid-feedback">Ville est requis</div>
            </div><br><br><br><br>
            <div class="col-12 form-group text-center">
                <button type="submit" class="btn btn-vue   btn-md col-3">Submit</button>
            </div>
        </div>
    </form>
              </div>
        </div>
</template>
<script>
import { required } from 'vuelidate/lib/validators'
export default {
    name: 'InfoPerso',
    data: function() {
        return {
            prenom: '',
            nom: '',
            tele: '',
            cin: '',
            photo: '',
            passport: '',
            adresse: '',
            ville: '',
            pays: '',
            region: ''
        }
    },
    validations: {
        prenom: {required},
        nom: {required},
        tele: {required},
        cin: {required},
        photo: {required},
        passport: {required},
        adresse: {required},
        ville: {required},
        pays: {required},
        region: {required}
    },
    methods: {

        validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error : false;
        },

        submit: function() {

            this.$v.$touch();
            if (this.$v.$pendding || this.$v.$error) return;

            alert("Informations personnelles est ajoutées !!")

        },
        addInfoPerso(e){
            e.preventDefault();
            this.$store.state.InfoPerso = {
                prenom: this.prenom,
                nom: this.nom,
                tele: this.tele,
                cin: this.cin,
                photo: this.photo,
                passport: this.passport,
                adresse: this.adresse,
                ville: this.ville,
                pays: this.pays,
                region: this.region
            }
            // alert("Informations personnelles est ajoutées !!")
        }
    }
}
</script>

<style scoped>
</style>