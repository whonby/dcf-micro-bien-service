
<template>

<div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Fiche Matériel et Mobilier</h5>
             
            </div>

            <div class="table-responsive text-nowrap">
                
                     <div class="widget-title">
                      
                    <ul class="nav nav-tabs">
                     <li class="active"><a data-toggle="tab" href="#IDENT1">Identification</a></li>
        
                      
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                  <div id="IDENT1" class="tab-pane active">
        <table class="table table-bordered table-striped">
            <tr>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Unité Administrative</label>
                  <div class="controls">
                    <select  class="span" v-model="formData.uniteadministrative ">
                      <option></option>                     
                      <option
                        v-for="typeUniteA in afficherUAParDroitAccess"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                       <!-- <input
                type="text"
                :value="libelleUa(getterUa_idImo)"
                class="span5"
                readonly
              /> -->
                  </div>
                </div>
                      </td>
                      <td>
                          <div class="control-group">
                  <label class="control-label" style="font-size:14px">Marque</label>
                
                  <div class="controls">
                    <input
                      type="text"
                    v-model="formData.numidentification "
                      class="span"
                      
                    />
                  </div>
                  </div>
                      </td>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Modele</label>
                  <div class="controls">
                   <div class="controls">
                    <input
                      type="text"
                    v-model="formData.numimmatriculation"
                      class="span"
                      
                    />
                  </div>
                </div>
                </div>
                      </td>
                     
                  </tr>
                  <tr>
                       <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">N° Série</label>
                  <div class="controls">
                   <div class="controls">
                    <input
                      type="text"
                    v-model="formData.durevie"
                      class="span"
                      
                    />
                  </div>
                </div>
                </div>
                      </td>
                       <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Imputation comptable</label>
                  <div class="controls">
                    <select  class="span" v-model="formData.immobilisation">
                      <option></option>                     
                       <option
                        v-for="typeUniteA in lesClassDe3"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.code}}-{{typeUniteA.libelle}}</option>
                    </select>
                  </div>
                </div>
                      </td>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Duré de vie</label>
                  <div class="controls">
                   <div class="controls">
                    <input
                      type="text"
                    v-model="formData.durevie"
                      class="span"
                      
                    />
                  </div>
                </div>
                </div>
                      </td>
                  </tr>
        </table>
      </div>
                     
                  </div>
                  
                  
                
              <table class="table table-bordered table-striped">
                  
                <div class="widget-box">
                  <div class="widget-title">
                      
                   
                  </div>
                  
                  <br />
                  <div align="right">
                    <div class="controls">
                      <div data-toggle="buttons-checkbox" class="btn-group">
                        <a
                          class="btn btn-primary"
                          @click.prevent="AjouterVehicule"
                        >Valider</a>
                        <a
                          @click.prevent="afficherModalListePersonnel()"
                          class="btn"
                          href="#"
                        >Fermer</a>
                      </div>
                    </div>
                  </div>
                </div>
              </table>
            </div>
          </div>
        </div>
      </div>
     <notifications  />
    </div>

</template>

<script>

import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import {admin,dcf,cf} from '../../../../../Repositories/Auth';
// // import { ModelListSelect } from "vue-search-select";
// // import "vue-search-select/dist/VueSearchSelect.css";
export default {
  // components: {
  //   ModelListSelect
  // },
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ],
formData:{

},
      search: ""
    };
  },
props:["macheid"],
 created() {
            this.marcheid=this.$route.params.id
   this.detail_Facture = this.getFacturePersonnaliser.find(
       idmarche => idmarche.id == this.$route.params.id
         )
      
},
  computed: {
  ...mapGetters("bienService", ["getFacturePersonnaliser","personnaliseGetterMarcheBailleur","modepaiements",'mandats','getMandatPersonnaliserVise','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
     'acteEffetFinanciers','montantPlanification','montantContratualisation','afficheContratualisation','affichePlanifier',
     'nombremarchesExecute',
     'AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
      "printMarcheNonAttribue","procedurePassations","typeTypeProcedures",
     "montantComtratualisation","text_juridiques", "gettersOuverturePersonnaliser", "typeActeEffetFinanciers"]),

   ...mapGetters('personnelUA', ['acteur_depenses',"paiementPersonnel"]),
   ...mapGetters("SuiviImmobilisation", ["getterUa_idImo","Transmissions","EtatImmobilisations","TypeEnergie","marqueVehicules","ModeleVehicules","TypeEntretien","TypeVehicule","TypeReparation"]),
    //...mapGetters("SuiviImmobilisation", ["getterUa_idImo","familles","AffectationVehicules","Transmissions","EtatImmobilisations","TypeEnergie","marqueVehicules","ModeleVehicules","TypeEntretien","TypeVehicule","TypeReparation"]),
   ...mapGetters('uniteadministrative',[
    "plans_programmes",
 "uniteAdministratives",
 "afficheNiveauAction",
 "afficheNiveauActivite",
 "derniereNivoPlanBudgetaire",
 "getPersonnaliseBudgetGeneralParPersonnel",
   "decomptefactures",
   
   ]),

   ...mapGetters('parametreGenerauxAdministratif',[

 "sections",
 "type_Unite_admins",
 "plans_programmes",
 "natures_sections",
 "grandes_natures",
 "afficheNiveauPlanProg",
 "exercices_budgetaires",
 "taux"
   ]),

   ...mapGetters('parametreGenerauxFonctionnelle',[

      "plans_fonctionnels",
 "afficheNiveauPlanFonctionnel"
   ]),
 
...mapGetters('parametreGenerauxActivite',[ 'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

...mapGetters('parametreGenerauxBudgetaire',["plans_budgetaires","derniereNivoPlanBudgetaire"]),
...mapGetters("gestionMarche", ['secteur_activites', 'entreprises','banques','comptes','getCompte']),
   admin:admin,
dcf:dcf,
cf:cf,
...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
     
   afficherUAParDroitAccess() {
       // const st = this.search.toLowerCase();
        if (this.cf){
            let colect=[];
            this.uniteAdministratives.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
             return colect;
          
        }

        return this.uniteAdministratives;
        //return this.uniteAdministratives
            // return (
            //     items.secti.nom_section.toLowerCase().includes(st) ||
            //     items.libelle.toLowerCase().includes(st)
            // );
        

    },
    libelleUa() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
             lesClassDe3() { 
const isClassDe3 = (code) => code.charAt(0) == "2"; 
return this.derniereNivoPlanBudgetaire.filter(x => isClassDe3(x.code));
 },
 fonctionModele() {
      return id => {
        if (id != null && id != "") {
           return this.ModeleVehicules.filter(qtreel => qtreel.marque_id == id);
      
        }
      };
    },
    

 anneeAmort() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },
  },
  methods: {
    
     ...mapActions("uniteadministrative", [
      "ajouterNouveauVehicule"
      ]),
      afficherModalListePersonnel(){
                this.$router.push({ name: 'ListeVehicules' })
            },
      afficherModalListeExecution(){
                window.history.back();
            },
     AjouterVehicule() {
      
      
      var objetNew ={
        ...this.formData,
        anneebudgetaire:this.anneeAmort,
        uniteadministrative:this.getterUa_idImo
      }
      this.ajouterNouveauVehicule(objetNew);
    
      this.formData = {
        uniteadministrative:"",
        numidentification:"",
        numimmatriculation:"",
        immobilisation:"",
        typevehicule:"",
        marque:"",
        modele:"",
        energie:"",
        	numchassis:"",
        numserie:"",
        couleur:"",
        transmission:"",
        nombreportes:"",
        nombreplace:"",
        puissance:"",
        etatvehicule:"",
        votreassuranceexpirere:"",
        
      };
    },
   
 formaterDate(date) {
            return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },
    afficherModalAjouterpaiementPersonnel() {
      this.$("#ModalDecompte").modal({
        backdrop: "static",
        keyboard: false
      });
    }
  }
};
</script>
<style scoped>

.grdirModalActeEffet{
  width: 92%;
  margin: 0 -43%;
}
th{
  text-align:left;
}
</style>
