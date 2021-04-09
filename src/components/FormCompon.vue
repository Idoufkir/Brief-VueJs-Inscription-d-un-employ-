<template>
    <form id="form-comp" v-on:submit.prevent="submit">
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
                <input v-model.trim="photo" type="text" :class="{'is-invalid': validationStatus($v.photo)}" class="form-control">
                <div v-if="!$v.photo.required"  class="invalid-feedback">Photo est requis</div>
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
                <label class="col-form-label col-form-label-md"><b>Pays </b><span class="text-danger">* : </span></label><br>
                <select v-model.trim="pays" name="" id="" :class="{'is-invalid': validationStatus($v.pays)}">
                    <option value="">Selection le pays</option>
                </select>
                <div v-if="!$v.pays.required"  class="invalid-feedback">Pays est requis</div>
            </div>
            <div class="col-4 form-group">
                <label class="col-form-label col-form-label-md"><b>Ville </b><span class="text-danger">* : </span></label><br>
                <select v-model.trim="ville" name="" id="" :class="{'is-invalid': validationStatus($v.ville)}">
                    <option value="">Selection la ville</option>
                </select>
                <div v-if="!$v.ville.required"  class="invalid-feedback">Ville est requis</div>
            </div>  <br><br><br><br>
            <div class="col-12 form-group text-center">
                <button type="submit" class="btn btn-vue   btn-md col-3">Submit</button>
            </div>
        </div>
    </form>
</template>
<script>
import { required } from 'vuelidate/lib/validators'
export default {
    name: 'CompForm',
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
            pays: ''
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
        pays: {required}
    },
    methods: {

        validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error : false;
        },

        submit: function() {

            this.$v.$touch();
            if (this.$v.$pendding || this.$v.$error) return;

            alert('Data Submit!');

        }
    }
}
</script>
<style>
.btn-vue{
    background: #53B985;
    color: #31485D;
    font-weight: bold;
}
</style>