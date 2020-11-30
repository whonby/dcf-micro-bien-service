
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
              <h5>Fiche Véhicule</h5>
             
            </div>

            <div class="table-responsive text-nowrap">
                
                     <div class="widget-title">
                      
                    <ul class="nav nav-tabs">
                     <li class="active"><a data-toggle="tab" href="#IDENT">Identification</a></li>
        
                      
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                  <div id="IDENT" class="tab-pane active">
        <table class="table table-bordered table-striped">
            <tr>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">unité administrative</label>
                  <div class="controls">
                    <select  class="span" v-model="detail.uniteadministrative ">
                      <option></option>                     
                      <option
                        v-for="typeUniteA in afficherUAParDroitAccess"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                  </div>
                </div>
                      </td>
                      <td>
                          <div class="control-group">
                  <label class="control-label" style="font-size:14px">N°Identification</label>
                
                  <div class="controls">
                    <input
                      type="text"
                    v-model="detail.numidentification "
                      class="span"
                      
                    />
                  </div>
                  </div>
                      </td>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">N°Immatriculation</label>
                  <div class="controls">
                   <div class="controls">
                    <input
                      type="text"
                    v-model="detail.numimmatriculation"
                      class="span"
                      
                    />
                  </div>
                </div>
                </div>
                      </td>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Immobilisation</label>
                  <div class="controls">
                    <select  class="span" v-model="detail.immobilisation">
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
                    v-model="detail.durevie"
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
                      
                    <ul class="nav nav-tabs">
                     <li class="active"><a data-toggle="tab" href="#Techniques">Informations Techniques</a></li>
        <li class=""><a data-toggle="tab" href="#Informations">Autres Informations</a></li>
        
                      
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                  <div id="Techniques" class="tab-pane active">
         <table class="table table-bordered table-striped">
               <tr>
                     
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Type véhicule</label>
                  <div class="controls">
                    <select  class="span" v-model="detail.typevehicule">
                      <option></option>                     
                      <option
                        v-for="typeUniteA in TypeVehicule"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                  </div>
                </div>
                      </td>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Marque</label>
                  <div class="controls">
                    <select  class="span" v-model="detail.marque">
                      <option></option>                     
                      <option
                        v-for="typeUniteA in marqueVehicules"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                  </div>
                </div>
                      </td>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Modèle</label>
                  <div class="controls">
                    <select  class="span" v-model="detail.modele">
                      <option></option>                     
                      <option
                        v-for="typeUniteA in fonctionModele(detail.marque)"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                  </div>
                </div>
                      </td>
                       <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Energie</label>
                  <div class="controls">
                    <select  class="span" v-model="detail.energie">
                      <option></option>                     
                      <option
                        v-for="typeUniteA in TypeEnergie"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                  </div>
                </div>
                      </td>
                  </tr>
                    <tr>
                     
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">N°de chassis</label>
                  <div class="controls">
                     <input
                      type="text"
                    v-model="detail.numchassis"
                      class="span"
                      
                    />
                  </div>
                </div>
                      </td>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">N°série</label>
                  <div class="controls">
                    <input
                      type="text"
                    v-model="detail.numserie"
                      class="span"
                      
                    />
                  </div>
                </div>
                      </td>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Couleur</label>
                  <div class="controls">
                    <input
                      type="text"
                    v-model="detail.couleur"
                      class="span"
                      
                    />
                  </div>
                </div>
                      </td>
                       <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Transmission</label>
                  <div class="controls">
                    
                      
                      <select  class="span" v-model="detail.transmission">
                      <option></option>  
                                          
                       <option
                        v-for="typeUniteA in Transmissions"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>                    
                      
                   
                  </div>
                </div>
                      </td>
                  </tr>
            <tr>
                     
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Nombre de portes</label>
                  <div class="controls">
                    <input
                      type="number"
                    v-model="detail.nombreportes"
                      class="span"
                      
                    />
                  </div>
                </div>
                      </td>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Nombre de place</label>
                  <div class="controls">
                   <input
                      type="number"
                    v-model="detail.nombreplace"
                      class="span"
                      
                    />
                  </div>
                </div>
                      </td>
                       <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Puissance</label>
                  <div class="controls">
                   <input
                      type="text"
                    v-model="detail.puissance"
                      class="span"
                      
                    />
                  </div>
                </div>
                      </td>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Etat véhicule</label>
                  <div class="controls">
                    <select  class="span" v-model="detail.etatvehicule">
                      <option></option>                     
                      <option
                        v-for="typeUniteA in EtatImmobilisations"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                  </div>
                </div>
                      </td>
                  </tr>
        </table>
      </div>
                      <div id="Informations" class="tab-pane ">
        
         <table class="table table-bordered table-striped">
             <tr>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Date d'Immatriculation</label>
                  <div class="controls">
                   <input
                      type="date"
                    v-model="detail.dateImmatriculation"
                      class="span"
                      
                    />
                  </div>
                </div>
                      </td>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Date de mise en circulation</label>
                  <div class="controls">
                   <input
                      type="date"
                     v-model="detail.datemisecirculation"
                      class="span"
                      
                    />
                  </div>
                </div>
                      </td>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Garantie constructeur</label>
                  <div class="controls">
                    <input
                      type="date"
                     v-model="detail.garantieconstructeur"
                      class="span"
                      
                    />
                  </div>
                </div>
                      </td>
                     
                  </tr>
            <tr>
               <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Garantie concessionnaire</label>
                  <div class="controls">
                   <input
                      type="date"
                     v-model="detail.garantieconcessionnaire"
                      class="span"
                      
                    />
                  </div>
                </div>
                      </td>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Responsable actuel</label>
                  <div class="controls">
                    <select  class="span" v-model="detail.responsableactuel">
                      <option></option>                     
                      
                    </select>
                  </div>
                </div>
                      </td>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Valeur vénale</label>
                  <div class="controls">
                   <input
                      type="text"
                    v-model="detail.valeurvenal"
                      class="span"
                      
                    />
                  </div>
                </div>
                      </td>
                      <!-- <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">unité administrative</label>
                  <div class="controls">
                    <select  class="span">
                      <option></option>                     
                      
                    </select>
                  </div>
                </div>
                      </td>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">unité administrative</label>
                  <div class="controls">
                    <select  class="span">
                      <option></option>                     
                      
                    </select>
                  </div>
                </div>
                      </td> -->
                  </tr>
        </table>
        
      </div>
     
                  </div>

                  <div class="widget-title">
                      
                    <ul class="nav nav-tabs">
                     <li class="active"><a data-toggle="tab" href="#Expiration">Expiration</a></li>
        <!-- <li class=""><a data-toggle="tab" href="#DEMARRAGE">INFO MARCHE</a></li>
        <li class=""><a data-toggle="tab" href="#DECOMPTE">INFO DECOMPTE</a></li>
                       -->
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                  <div id="Expiration" class="tab-pane active">
         <table class="table table-bordered table-striped">
            <tr>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Votre assurance expirere le</label>
                  <div class="controls">
                    <input
                      type="date"
                    v-model="detail.votreassuranceexpirere"
                      class="span"
                      
                    />
                  </div>
                </div>
                      </td>
                      <td>
                          <div class="control-group">
                  <label class="control-label" style="font-size:14px">Votre admimission temporaire expirera le</label>
                
                  <div class="controls">
                    <input
                      type="date"
                    v-model="detail.votreadmimissiontemporaire"
                      class="span"
                      
                    />
                  </div>
                  </div>
                      </td>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Date de relevé</label>
                  <div class="controls">
                   <div class="controls">
                    <input
                      type="date"
                    v-model="detail.datereleve"
                      class="span"
                      
                    />
                  </div>
                </div>
                </div>
                      </td>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Votre controle technique expirera le</label>
                  <div class="controls">
                    <input
                      type="date"
                    v-model="detail.votrecontroletechnique"
                      class="span"
                      
                    />
                  </div>
                </div>
                      </td>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Dernier relevé kilométrique</label>
                  <div class="controls">
                    <input
                      type="number"
                    v-model="detail.dernierrelevkilometrique"
                      class="span"
                      
                    />
                  </div>
                </div>
                      </td>
                  </tr>
        </table>
      </div>
                    
                  </div>
                  <br />
                  <div align="right">
                    <div class="controls">
                      <div data-toggle="buttons-checkbox" class="btn-group">
                        <a
                          class="btn btn-primary"
                          @click.prevent="AjouterVehicule"
                        >Modifier</a>
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
detail:{

},
      search: ""
    };
  },
props:["macheid"],
 created() {
         
            this.detail=this.getvehicules.find(item=>item.id==this.$route.params.id)
            
           
        },
  computed: {
  ...mapGetters("bienService", ["getFacturePersonnaliser","personnaliseGetterMarcheBailleur","modepaiements",'mandats','getMandatPersonnaliserVise','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
     'acteEffetFinanciers','montantPlanification','montantContratualisation','afficheContratualisation','affichePlanifier',
     'nombremarchesExecute',
     'AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
      "printMarcheNonAttribue","procedurePassations","typeTypeProcedures",
     "montantComtratualisation","text_juridiques", "gettersOuverturePersonnaliser", "typeActeEffetFinanciers"]),

   ...mapGetters('personnelUA', ['acteur_depenses',"paiementPersonnel"]),
   ...mapGetters("SuiviImmobilisation", ["EtatImmobilisations","TypeEnergie","marqueVehicules","ModeleVehicules","TypeEntretien","TypeVehicule","TypeReparation","Transmissions"]),
   ...mapGetters('uniteadministrative',[
    "plans_programmes",
 "uniteAdministratives",
 "afficheNiveauAction",
 "afficheNiveauActivite",
 "derniereNivoPlanBudgetaire",
 "getPersonnaliseBudgetGeneralParPersonnel",
   "decomptefactures",
   "getvehicules"
   
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
     anneeAmort() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },
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
  },
  methods: {
    
     ...mapActions("uniteadministrative", [
      "ajouterNouveauVehicule",
      "modifierVehicule"
      ]),
      afficherModalListePersonnel(){
                this.$router.push({ name: 'ListeVehicules' })
            },
      afficherModalListeExecution(){
                window.history.back();
            },
     AjouterVehicule() {
      var NouvelObjet =  {

        ...this.detail,
        uniteadministrative:this.detail.uniteadministrative,
        numidentification:this.detail.numidentification,
        numimmatriculation:this.detail.numimmatriculation,
        immobilisation:this.detail.immobilisation,
        typevehicule:this.detail.typevehicule,
        marque:this.detail.marque,
        modele:this.detail.modele,
        energie:this.detail.energie,
        numchassis:this.detail.numchassis,
        numserie:this.detail.numserie,
        couleur:this.detail.couleur,
        transmission:this.detail.transmission,
        nombreportes:this.detail.nombreportes,
        nombreplace:this.detail.nombreplace,
        puissance:this.detail.puissance,
        etatvehicule:this.detail.etatvehicule,
        votreassuranceexpirere:this.detail.votreassuranceexpirere,
        anneebudgetaire:this.anneeAmort,
        durevie:this.detail.durevie
      };
      
      this.modifierVehicule(NouvelObjet);
    this.$router.push({ name: 'ListeVehicules' })
     
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
