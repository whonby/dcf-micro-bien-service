<template>
    <div>
     {{macheid}}
        <div class="row-fluid" >
      <div class="span3" v-for="item in afficheImageParMarche(macheid)" :key="item.id">
        <div class="widget-box">
          <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
            <h5>{{item.observation}} <code>{{item.libelle}}</code></h5>
          </div>
          <div class="widget-content"> <img v-bind:src="AffichePhoto(item.id)" name="aboutme" class="avatar1"></div>
        </div>
      </div>
      
      
    </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';


export default {
   
    data(){
        return{
           fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ],
   
       editLiquidation: {},
search:""
        }
    },
    props:["macheid"],
    created(){},

              computed: {
            ...mapGetters("bienService", ["getterImageMarche",'modepaiements','getMandatPersonnaliserVise','getMandatPersonnaliser','choixprocedure','acteDepense',"getMarchePersonnaliser","appelOffres","getFacturePersonnaliser",
                "lots","modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","typeFactures",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","motifDecisions",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers",'getEngagementPersonnaliser',"engagements","getEngagementPersonnaliser1","mandats","avenants","getterActeEffetFinanciers"]),

                ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises',"comptes","banques"]),

           
 
   
  ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetGeneral",
      "getPersonnaliseBudgetGeneral",
      "groupUa",
      "getPersonnaliseBudgetGeneralParBienService",
      "groupgranNature", "montantBudgetGeneral","realiteServiceFait","liquidation"
      // "montantBudgetGeneral"
      // "chapitres",
      // "sections"
       
    ]),
     ...mapGetters('parametreGenerauxFonctionnelle', ['structuresDecision', 
  'plans_Decision']),

  afficheNomUtilisateur(){
  let objLinea = localStorage.getItem("Users");
let objJson = JSON.parse(objLinea);
return objJson.name

},
AffichePhoto() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterImageMarche.find(qtreel => qtreel.id == id);

      if (qtereel) {
        
   let url=process.env.VUE_APP_BIEN_SERVICE_URL
        return url+'/imagemarches/'+qtereel.fichier;
      }
      return "Pas d'image "
        }
      };
    },
afficheImageParMarche() {
      return id => {
        if (id != null && id != "") {
          return this.getterImageMarche.filter(
            element => element.marche_id == id 
          );
        }
      };
    },
      },
 
      methods:{ 

          ...mapActions('bienService',[  "ajouterAvenant",
      "modifierAvenant",
      "supprimerAvenant",]),
 ...mapActions("uniteadministrative", [
     "getAllServiceua",
      "ajouterService",
      "modifierService",
      "supprimerService",
      "modifierLiquidation",
                "supprimerLiquidation"
      // "ajouterHistoriqueBudgetGeneral"
    ]),
...mapActions("SuiviImmobilisation", [
       "ajouterImmobilisation",
       "modifierImmobilisation",
       "modifierStock",
       "ajouterHistotorisqueAffectionService",
       "modifierDemandeMateriel"
      
     
    ]),

      }
}
</script>

<style scoped>
.grdirModalActeEffet{
     width: 1200px;
 margin: 0 -530px;
 height: 550px;

}
.tailgrand{
  width: 50%;
  margin: 0 -25%;
}
.tailAvenant{
  width: 75%;
   margin: 0 -40%;
}
.avatar1 {
  
  width: 50%;
  height: 50%;
  
}
</style>