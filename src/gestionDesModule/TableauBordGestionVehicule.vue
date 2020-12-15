<template>
 
     <div>

       
       <!-- <h4 style="text-align:center">GESTION DES VEHICULES</h4>
       <br>
       <br>
       <table class="table table-bordered table-striped">
           <tr>
                 <td>
                    <div class="control-group">
                  <label class="control-label" style="font-size:14px">Année Budgétaire</label>
                  <div class="controls">
                    <select  class="span5" v-model="formData.ua_id ">
                      <option></option>                     
                      
                    </select>
                  </div>
                </div>
                 </td>
                 <td>
                    <div class="control-group">
                  <label class="control-label" style="font-size:14px">unité administrative</label>
                  <div class="controls">
                    <select  class="span5" v-model="formData.uniteadministrative ">
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
                  <label class="control-label" style="font-size:14px">Immatriculation</label>
                  <div class="controls">
                    <select  class="span5" v-model="formData.ua_id ">
                      <option></option>                     
                      
                    </select>
                  </div>
                </div>
                 </td>
           </tr>
       </table>
       <div class="row-fluid">
       
       
      <div class="span4">
        <div class="widget-box">
          <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
            <h5>VEHICULES ENREGISTREES</h5>
          </div>
           <div class="widget-content"> 
            <h1 style="text-align:center;color:red;font-size:50px;padding:6% 6%">{{nbreEntreprise}}</h1>
            
            </div>
        </div>
      </div>
      
      <div class="span4">
        <div class="widget-box">
          <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
            <h5>VEHICULES ENREGISTREES</h5>
          </div>
           <div class="widget-content"> 
            <h1 style="text-align:center;color:red;font-size:50px;padding:6% 6%">{{nbreEntreprise}}</h1>
            
            </div>
        </div>
      </div>
      <div class="span4">
        <div class="widget-box">
          <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
            <h5>VEHICULES EN REPARATION</h5>
          </div>
           <div class="widget-content"> 
            <h1 style="text-align:center;color:red;font-size:50px;padding:6% 6%">{{nbreEntreprise}}</h1>
            
            </div>
        </div>
      </div>
    </div>
    
    <div class="row-fluid">
      <div class="span4">
        <div class="widget-box">
          <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
            <h5>COÛT DES VEHICULES REPARES</h5>
          </div>
          <div class="widget-content"> 
               <h1 style="text-align:center;color:red;font-size:50px;padding:6% 6%">{{0}}</h1>
            
          </div>
        </div>
      </div>
      
      <div class="span4">
        <div class="widget-box">
          <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
            <h5>COÛT DES VEHICULES EN COURS DE REPARATION</h5>
          </div>
          <div class="widget-content"> 
               <h1 style="text-align:center;color:red;font-size:50px;padding:6% 6%">{{0}}</h1>
            
          </div>
        </div>
      </div>
     
    </div>
    <div class="row-fluid">
      <div class="span4">
        <div class="widget-box">
          <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
            <h5>NOMBRE DE VEHICULE EN REPARATION</h5>
          </div>
          <div class="widget-content"> 
               <h1 style="text-align:center;color:red;font-size:50px;padding:6% 6%">{{0}}</h1>
            
          </div>
        </div>
      </div>
      <div class="span4">
        <div class="widget-box">
          <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
            <h5>NOMBRE DE VEHICULE AMORTI</h5>
          </div>
          <div class="widget-content"> 
               <h1 style="text-align:center;color:red;font-size:50px;padding:6% 6%">{{EntrepriseSantionner}}</h1>
            
          </div>
        </div>
      </div>
      <div class="span4">
        <div class="widget-box">
          <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
            <h5>NOMBRE DE VEHICULE EN REPARATION</h5>
          </div>
          <div class="widget-content"> 
               <h1 style="text-align:center;color:red;font-size:50px;padding:6% 6%">{{EntrepriseSantionner}}</h1>
            
          </div>
        </div>
      </div> 
     
    </div> -->
    
     </div>

</template>


<script>
import { mapGetters, mapActions } from "vuex";
import {formatageSomme} from '../../src/Repositories/Repository';
import {admin,dcf,cf} from '../../src/Repositories/Auth';
import moment from "moment";
export default {
  data(){
    return{

      budgetGeneralCharge:"",
      formData:{}

    }
  },

   
  computed:{
 ...mapGetters("bienService", ["getFacturePersonnaliser","personnaliseGetterMarcheBailleur","modepaiements",'mandats','getMandatPersonnaliserVise','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
     'acteEffetFinanciers','montantPlanification','montantContratualisation','afficheContratualisation','affichePlanifier',
     'nombremarchesExecute',
     'AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
      "printMarcheNonAttribue","procedurePassations","typeTypeProcedures",
     "montantComtratualisation","text_juridiques", "gettersOuverturePersonnaliser", "typeActeEffetFinanciers"]),

   ...mapGetters('personnelUA', ['acteur_depenses',"paiementPersonnel"]),
   ...mapGetters("SuiviImmobilisation", ["Transmissions","EtatImmobilisations","TypeEnergie","marqueVehicules","ModeleVehicules","TypeEntretien","TypeVehicule","TypeReparation"]),
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
ExerciceEnCours() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return "EXERCICE NON ACTIVE"
    },
nbreEntreprise(){
return this.entreprises.length;
},
EntrepriseNonSantionner() {
              
                return this.entreprises.filter(idm=>idm.active===1).length

            },
            EntrepriseSantionner() {
                
                return this.entreprises.filter(idm=>idm.active===0).length

            },
  },
created() {
            this.marcheid=this.$route.params.id
            console.log(this.marcheid)
   this.detail_marche = this.gestionModules.find(
       idmarche => idmarche.id == this.$route.params.id
   )
  
},
  methods:{
...mapActions('parametreGenerauxAdministratif', [ 'ajouterExerciceBudgetaire',
    'supprimerExerciceBudgetaire', 'modifierExerciceBudgetaire',"EncoursExerciceBudgetaire"]),   

     
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },

EncoursExerciceLocal (id) {
      this.EncoursExerciceBudgetaire(id)

    },
 formatageSomme:formatageSomme
  }
}
</script>
<style>

</style>