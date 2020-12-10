
<template>
    <div class="container-fluid">

         <div class="row-fluid">
                <div class="span12">
                    <div class="widget-box">
                        <div class="widget-title">
                            <ul class="nav nav-tabs">
                               <li class="active"><a data-toggle="tab" href="#marcheExecution"> Réparation en Exécution <span class="badge badge" ></span></a></li>
 
                            </ul>
                        </div>
                        <div class="widget-content tab-content">


                         <div id="marcheExecution" class="tab-pane active">
                             <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Réparation en Exécution</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search"  v-model="search" />
              </div> -->
            </div>



              <table class="table table-bordered table-striped">
                <thead>
                <tr>
                    <th>Année</th>
                      <th>UA</th>
                    <th>Véhicule</th>
                    <th>Panne Signalé</th>
                    <th>Date Signal</th>
                    <th>Date Envoi</th>
                    <th>Garage</th>
                    <th>Montant de réparation</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody v-if="afficheReparationVehiculeEnExecution.length>0">
                 
                        <tr class="odd gradeX" v-for="marche in 
                afficheReparationVehiculeEnExecution"
                 :key="marche.id">
                  <td>
                   {{marche.anneebudgetaire || 'Non renseigné'}}</td>
                 <td>
                   {{marche.ua_id || 'Non renseigné'}}</td>
                 <td>
                   {{marche.vehicule_id || 'Non renseigné'}}</td>
                 <td >
                   {{marche.acte_id || 'Non renseigné'}}</td>
                  <td>
                   {{marche.date_signal || 'Non renseigné'}}</td>
                    <td>
                   {{marche.date_envoi || 'Non renseigné'}}</td>
                   
                     <td>
                   {{marche.entreprise_id || 'Non renseigné'}}</td>
                     <td>
                   {{marche.acte_id || 'Non renseigné'}}</td>
                 
           
                   <td >
                        <router-link :to="{ name: 'ExecutionLotInvestissement', params: { id: marche.id }}"
                 class="btn btn-inverse " title="Execution du marche">
        <span class=""><i class=" icon-fast-forward"></i></span>
    </router-link>
                   </td>
               
                       </tr>
                        <tr>
                     
                      <td>
                          
                      </td>
                      
                       <td>
                          
                      </td>
                      <td>
                          
                      </td>
                      <td>
                          
                      </td>
                      <td>
                          
                      </td>
                       <td>
                          
                      </td>
                       <td>
                          
                      </td>
                       <td style="font-weight:bold;"> Total Marché
                      </td>
                       <!-- <td  style="text-align: center;color:red;font-weight:bold;">
                           {{formatageSomme(parseFloat(montantMarcheInvestissement))}}
                           
                      </td> -->
                      
                       
                      <td>
                          
                      </td>
                      
                    </tr>
                </tbody>
              </table>

                           <!-- <div class="row-fluid vld-parent"  align="center" style="margin:10px ">
                             <loading :active="true"
                                      :can-cancel="false"
                                      :is-full-page="fullPage"></loading> -->
<!--                             <clip-loader :loading="getterLoadinMarche" :color="color" :size="size_pul"></clip-loader>-->
<!--                             <pulse-loader :loading="getterLoadinMarche" :color="color" :size="size_pul"></pulse-loader>-->
                           <!-- </div> -->

                        </div>
 
                    </div>

                </div>
            </div>
        </div>

   

    </div>
</template>

<script>
//import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
//import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
 import { mapGetters, mapActions } from "vuex";
 import { formatageSomme } from "../../../../../Repositories/Repository";
  import {admin,dcf,noDCfNoAdmin} from "../../../../../Repositories/Auth";

export default {
  name:'type facture',
  components: {
    //PulseLoader,
   // ClipLoader,

  },
  data() {
    return {
      isLoading: false,
      fullPage: false,
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }

        // {
        //   name: "alertMe",
        //   icon: "add_alert",
        //   class: ""
        // }
      ],
      color: '#3AB982',
      height: '35px',
      width: '4px',
      margin: '2px',
      radius: '2px',
      size_pul:"20px",
    //   json_fields: {
    //     CODE: "code",
    //     libelle: "libelle"
    //   },

      formData: {
           
        
      },
        editActeEffetFinancier:{
         
        },
        formEffetFinancier:{
            
        },

      editMarche: {
           
                 
      },
      
//       editActeEffetFinancier:{
// cause_resiliation:"",
// date_resiliation:""
//       },
      indicateur_test:1,
      search: ""
    };
  },

  computed: {

     admin:admin,
      dcf:dcf,
      noDCfNoAdmin:noDCfNoAdmin,
     ...mapGetters("bienService", ['mandats','getMandatPersonnaliserVise','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
     'acteEffetFinanciers','montantPlanification','montantContratualisation','afficheContratualisation','affichePlanifier',
     'nombremarchesExecute',
     'AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
      "printMarcheNonAttribue","procedurePassations","typeTypeProcedures",
     "montantComtratualisation","text_juridiques", "gettersOuverturePersonnaliser",
       "typeActeEffetFinanciers","getterLoadinMarche"]),
     ...mapGetters("uniteadministrative",['uniteAdministratives',"budgetGeneral",
      "getPersonnaliseBudgetGeneral","groupUa","groupgranNatureInvestissement","getPersonnaliseBudgetGeneralParInvestissement",
      "montantBudgetGeneral","ReparationVehicules"]),
       ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
 ...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires']),
   ...mapGetters("gestionMarche", ['entreprises']),
   ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements', 
  'types_financements']) ,

  ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),

loading(){
  if(this.afficheReparationVehiculeEnExecution.length>0){
    return false
  }
  return true
},
// pour tous les marches en investissement
   afficheReparationVehiculeEnExecution() {
       // const st = this.search.toLowerCase();
        if (this.noDCfNoAdmin){
            let colect=[];
            this.ReparationVehicules.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(element => this.recupererEtatMarche(this.recupererIdMarcheDansActe(element.acte_id)) == 2)
           
        }
           return  this.ReparationVehicules.filter(element => this.recupererEtatMarche(this.recupererIdMarcheDansActe(element.acte_id)) == 2)
       
    },

recupererIdMarcheDansActe() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getActeEffetFinancierPersonnaliser45.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.marche_id;
      }
      return 0
        }
      };
    },
    recupererEtatMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.attribue;
      }
      return 0
        }
      };
    },
    nombreJourTraitementCalucle(){
   let date = new Date();
        let aaaa = date.getFullYear();
        let gg = date.getDate();
        let mm = (date.getMonth() + 1);
        let moi;
        let jour;
        if (gg < 10)
        {
            jour = "0" + gg;
        }else{
            jour = gg
        }


        if (mm < 10)
        {
            moi = "0" + mm;
        }else{
            moi=mm;
        }


        let cur_day = aaaa + "-" + moi + "-" + jour;

        return cur_day


    
    // return cur_day + " " + hours + ":" + minutes + ":" + seconds;
   },









  },
  
  methods: {
    ...mapActions("bienService", ['ajouterMarche','modifierMarche','modifierMarcheBascule',
    'supprimerMarche','modifierActeEffetFinancier',"getMarche","getActeEffetFinancier"
     
    ]),
      modifierModalResiliation(){
      var nouvelObjet1 = {
      ...this.editActeEffetFinancier,
      indicateur_resilie :this.indicateur_test,
        date_resiliation:this.editActeEffetFinancier.date_resiliation,
        	cause_resiliation:this.editActeEffetFinancier.cause_resiliation
       };
       
      let marcheObjet = this.marches.find(marche=>marche.id==this.editActeEffetFinancier.marche_id)
         marcheObjet.attribue = 3

    this.modifierMarche(marcheObjet)
     this.modifierActeEffetFinancier(nouvelObjet1)
      this.getMarche()
      this.getActeEffetFinancier()
    //   let marcheObjet=this.marches.find(marche=>marche.id==this.editActeEffetFinancier.marche_id)
    // marcheObjet.attribue = 3
    //   //  this.modifierQuantiteEnStock2(objetPourModifierQuantiteEnStock2)
    //  this.modifierMarche(marcheObjet)

      
      this.$('#exampleModal').modal('hide');
    },
      afficherModalMarcheResilier(index) {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editActeEffetFinancier = this.afficheMarchExecuter[index];
    },
    //afiicher modal ajouter
    afficherModalAjoutTypaPrestation() {
      this.$("#exampleModal1").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterModalTypePrestationLocal(){
      
       var nouvelObjet = {
      ...this.formData,
      imputation :this.ImputationBudget,
      exo_id : this.anneeAmort
       };
this.ajouterMarche(nouvelObjet)
this.formData = {
            objet:"",
            livrable:"",
            reference_marche:"",
            montant_marche:"",
                type_marche_id:"",
                type_financement:"",
                source_financement:"",
                Bénéficiaire:"",
                Nature_des_prix:"",
                unite_administrative_id:"",
                imputation:"",
                	activite_id:""
}

    },
    formatageSomme:formatageSomme,
    // afficher modal de modification
    afficherModalModifierTypePrestation(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editMarche = this.marches[index];
    },
    // fonction pour vider l'input modification
    modifierModalTypeprestationLocal(){
       var nouvelObjet = {
      ...this.editMarche,
      imputation :this.ImputationBudgetModifier,
      exo_id : this.anneeAmort,
      activite_id:this.editMarche.activite_id,
      economique_id:this.editMarche.economique_id
       };
      this.modifierMarche(nouvelObjet)
      this.$('#modificationModal').modal('hide');
    },
    


    // afficher modification de l'acte a effet financier

        afficherModalModifierActeEffetFinancier(index){
    this.$('#modifierActeEF').modal({
        backdrop: 'static',
        keyboard: false
    });
    this.editActeEffetFinancier = this.afficheMarchExecuter[index]
}, 

modifierModalActeEffetFinancierLocal(index){
    
    if ( confirm( "Voulez-vous basculer en Contractualisation ?") ) {
   
     this.editActeEffetFinancier = this.afficheMarchExecuter[index]
    
      let marcheObjet = this.marches.find(marche=>marche.id==this.editActeEffetFinancier.marche_id)
         marcheObjet.attribue = 1

    this.modifierMarcheBascule(marcheObjet)
} else {
    // Code à éxécuter si l'utilisateur clique sur "Annuler" 
}
    
     
    
},

  modifierModalActeEffetFinancierLocal2(index){
    if ( confirm( "Voulez-vous basculer en Execution ?") ) {
   
     this.editActeEffetFinancier = this.afficheMarcheEnCoursContratualisation[index]
    
      let marcheObjet = this.marches.find(marche=>marche.id==this.editActeEffetFinancier.id)
         marcheObjet.attribue = 2

    this.modifierMarcheBascule(marcheObjet)
} else {
    // Code à éxécuter si l'utilisateur clique sur "Annuler" 
}
   
   
},
    // alert() {
    //   console.log("ok");
    // },
     ExporterEnExel(){
      this.$refs.excel.click()
    }
  }

};
</script>

<style scoped>
.taillModal{
  width: 1080px;
   margin: 0 -25%;
   
}
.taillMarche{
  width: 96%;
   margin: 0 -48%;
   
}
.grdirModalActeEffet{
     width: 1200px;
 margin: 0 -530px;
 height: 550px;

}
</style>
