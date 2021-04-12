import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);
 
export default new Vuex.Store({
 state: {
    InfoPerso : {
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
     },
     InfoProf : {
         cnss: '',
         officePhone: '',
         email: '',
         emp: '',
         jobAdr: ''
     }
 },
 getters: {},
 mutations: {},
 actions: {}
});