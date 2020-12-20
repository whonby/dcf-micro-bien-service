valeurAcquisitionMateriel
<template>
  <div class="container-fluid">
   <table class="table table-bordered table-striped">
  <tr>
    <td>
      <label class="control-label">Unite Administrative</label>
       <!-- <select  class="span5" v-model="formData.uAdministrative_id">
                      <option></option>                     
                      <option
                        v-for="typeUniteA in uniteAdministratives"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select> -->
                     <model-list-select style="background-color: rgb(233,233,233);"
                                                       class="wide"
                                                       :list="filtre_unite_admin"
                                                       v-model="formData.uAdministrative_id"
                                                       option-value="id"
                                                       option-text="libelle"
                                                       placeholder="Unité administrative"
                                    >

                                    </model-list-select>
    </td>
  </tr>
</table>
     <!-- <h3 style="text-align:center">TABLEAU DE BORD : COMPTABILITES DES MATIERES</h3> -->
    <div class="quick-actions_homepage">
      <ul class="quick-actions">

        <div class="quick-actions_homepage">
      
                            <ul class="quick-actions" style="margin: 0px !important;"> 

<li class="bg_lb span3"> <a href="#" style="color:black;"><h4>VALEUR </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(valeurAcquisitionMateriel(formData.uAdministrative_id))+parseFloat(valeurAcquisitionVehicule(formData.uAdministrative_id)))}}</span><h4>D'ACQUISITION</h4></a> </li>

        <li class="bg_lb span3"> <a href="#" style="color:black;"><h4>VALEUR </h4> <i class="icon-inbox"></i><span class="label label-success" style="font-size:15px">{{formatageSomme(parseFloat(valeurAcquisitionMateriel(formData.uAdministrative_id))+parseFloat(valeurAcquisitionVehicule(formData.uAdministrative_id)))}}</span><h4>NETTE COMPTABLE</h4>  </a> </li>
                <li class="bg_lr span3"> <a href="#" style="color:black;"><h4>TAUX</h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{((parseFloat(valeurAcquisitionMateriel(formData.uAdministrative_id))+parseFloat(valeurAcquisitionVehicule(formData.uAdministrative_id)))/(parseFloat(valeurAcquisitionMateriel(formData.uAdministrative_id))+parseFloat(valeurAcquisitionVehicule(formData.uAdministrative_id)))*100).toFixed(2)}}%</span><h4>D'USURE</h4></a> </li>
<li class="bg_lr span3"> <a href="#" style="color:black;"><h4>TAUX</h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">0%</span><h4>EQUIPEMENT</h4></a> </li>
  
    <li class="bg_lr span3"> <router-link :to="{name: ''}" tag="a"  style="color:black;"><h4>TAUX</h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">0%</span><h4> REPARATION</h4>  </router-link> </li>
    
                            </ul>
      
      

 
 
      
    </div> 
          <!-- <h1 style="text-align:center;margin:0 auto;color:red">EN COURS DE DEVELOPPEMENT TABLEAU DE BORD COMPTABILITE DES MATIERES</h1> -->
      </ul>
    </div>

    <div class="quick-actions_homepage">
      <ul class="quick-actions"></ul>
    </div>
    <div class="quick-actions_homepage">
      <ul class="quick-actions"></ul>
    </div>
  </div>
</template>
  
<script>
import { mapGetters } from "vuex";

import {formatageSomme} from '../../src/Repositories/Repository';
import {admin,dcf,cf,noDCfNoAdmin} from '../../src/Repositories/Auth';
import {  ModelListSelect } from 'vue-search-select'
    import 'vue-search-select/dist/VueSearchSelect.css'
export default {
  components: {
    
    ModelListSelect,
     
  },
  name:'TableauBordImmo',
  data() {
    return{
      formData :{


      },
      
       
search:""
        }
     
  },

  computed: {
    ...mapGetters("SuiviImmobilisation", [
    
      "immobilisations",
      "ficheArticle"
     
      
    ]),
     ...mapGetters('parametreGenerauxAdministratif', ['getterplanOrganisationUa']) ,
    admin:admin,
      dcf:dcf,
      cf:cf,
      noDCfNoAdmin:noDCfNoAdmin,
 ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),

    ...mapGetters("personnelUA", ["personnaliseActeurDepense","acte_personnels","all_acteur_depense","acteur_depenses","personnaFonction","fonctions"]),

 ...mapGetters("uniteadministrative", ["getvehicules","uniteAdministratives","directions","servicesua","uniteZones"]),
  
  filtre_unite_admin() {
                if(this.noDCfNoAdmin){
                    let colect=[];
                    let vM=this
                    this.uniteAdministratives.filter(item=>{
                        
                        if(vM.getterUniteAdministrativeByUser.length>0){
                            let val= vM.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.id)
                            if (val!=undefined){
                                colect.push(item)
                                return item
                            }
                        }

                    })
                    return colect
                }
                return this.uniteAdministratives
            },
valeurAcquisitionMateriel() {
      
        if (this.noDCfNoAdmin ){
            let colect=[];
            this.ficheArticle.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
               
            })
            return id => {
        if (id != null && id != "") {
          return colect.filter(element => element.ua_id == id ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.prix_unitaire), 0).toFixed(0);
        }
        return 0
      };
      
          }
         
         // return this.ficheArticle.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.prix_unitaire), 0).toFixed(0);
          return id => {
        if (id != null && id != "") {
          return this.ficheArticle.filter(element => element.ua_id == id ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.prix_unitaire), 0).toFixed(0);
        }
        return 0
      };
     
    },
    valeurAcquisitionVehicule() {
      
        if (this.noDCfNoAdmin ){
            let colect=[];
            this.getvehicules.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
               
            })
            return id => {
        if (id != null && id != "") {
          return colect.filter(element => element.ua_id == id ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.prix_unitaire), 0).toFixed(0);
        }
        return 0
      };
          }
             return id => {
        if (id != null && id != "") {
          return this.getvehicules.filter(element => element.ua_id == id ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.prix_unitaire), 0).toFixed(0);
        }
        return 0
      };
         // return this.getvehicules.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.prix_unitaire), 0).toFixed(0);
       
     
    },
  },
  methods: {
    formatageSomme: formatageSomme,
  }
};
</script>



<style>
.deplaceCar1 {
  margin: 0 50px;
}
.deplaceCar {
  margin: 0 120px;
}
</style>
