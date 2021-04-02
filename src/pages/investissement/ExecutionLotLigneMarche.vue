
<template>
  <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                 <tr>
                     <th>N°Lot</th>
                     <th>Objet marché</th>
                     <th>UA</th>
                    <th>Type marché</th>
                    <th>Activité</th>
                    <th>Imputation</th>
                    <th>Ligne Budgétaire</th>
                    
                    <th>Référence marché</th>
                   
                    <th>Montant Réel (FCFA)</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="marche in 
                  listeDesLotExecution(detail_marche.id)"
                 :key="marche.id">
                  <td>
                   {{marche.numero_lot || 'Non renseigné'}}</td>
                 <td>
                   {{marche.objet || 'Non renseigné'}}</td>
                 <td>
                   {{afficherlibelleUa(marche.unite_administrative_id) || 'Non renseigné'}}</td>

                 <td>
                   {{affichertypeMarche(marche.type_marche_id) || 'Non renseigné'}}</td>
                     <td>
                   {{afficherlibelleActivite(marche.activite_id) || 'Non renseigné'}}</td>
                    <td>
                   {{marche.imputation || 'Non renseigné'}}</td>
                    <td>
                  {{afficherCodeEtLibellePlanEconomique(marche.economique_id) || 'Non renseigné'}}</td>
                     
                     <td>
                   {{marche.reference_marche || 'Non renseigné'}}</td>
                  
                     <td style="text-align: center;color:#000000;font-weight:bold;">
                   {{formatageSommeSansFCFA(parseFloat(afficheMontantReelMarche(marche.id))) || 'Non renseigné'}}</td>
                 



<div class="btn-group" v-if="afficherStatusSib(marche.id)==0">

               
<router-link :to="{ name: 'detailExecution', params: { id: marche.id }}"
                class="btn btn-default " title="Detail execution Marche">
                  <span class=""><i class="  icon-random"></i></span>
                   </router-link> 

          

              <button @click.prevent="supprimerMarche(marche.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i></span></button>
             
            </div>
<div class="btn-group" v-if="afficherStatusSib(marche.id)==1">

               
<router-link :to="{ name: 'detailExecutionHorsSib', params: { id: marche.id }}"
                class="btn btn-primary " title="Detail execution Marche Gestion Hors Sib">
                  <span class=""><i class="  icon-random"></i> Détail exécution</span>
                   </router-link> 

          <router-link :to="{ name: 'ListeImageMarche', params: { id: marche.id }}"
                class="btn btn-info " title="Liste Image">
                  <span class=""><i class="icon-camera"></i> Caméra</span>
                   </router-link> 

<router-link :to="{ name: 'AjouterTacheParMarche', params: { id: marche.id }}"
                class="btn btn-inverse " title="Voir Tâche Prévue">
                  <span class=""><i class="icon-eye-open"></i> Voir Tâche Prévue</span>
                   </router-link> 
              <button @click.prevent="supprimerMarche(marche.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i> Supprimer</span></button>
             
            </div>

                     

                       </tr>
                       <tr>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td style="font-weight:bold;">Total</td>
                         <td style="text-align: center;color:red;font-weight:bold;">{{formatageSommeSansFCFA(parseFloat(afficherSommeMarcheExecution(detail_marche.id)))}}</td>
                         <td></td>

                       </tr>
                </tbody>
              </table>
              
            </div>
</template>
  

<script>
import { mapGetters, mapActions } from "vuex";
// import afficheMarcheGeneral from "./afficheMarcheGeneral"
// import afficheMarcheGeneralHorsSib from "./afficheMarcheGeneralHorsSib"
// import AfficheMarcheBienEtFourniture from "./AfficheMarcheBienEtFourniture"
// import AfficheMarcheBienEtFournitureHorsSib from "./AfficheMarcheBienEtFournitureHorsSib"
import { formatageSommeSansFCFA ,formatageSomme} from "../../../src/Repositories/Repository";
export default {
  components:{
    // afficheMarcheGeneral,
    // afficheMarcheGeneralHorsSib,
    // AfficheMarcheBienEtFourniture,
    // AfficheMarcheBienEtFournitureHorsSib
  },
  name:'typetext',
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
        
      ],
      
      formData: {
        code: "",
        libelle: ""
      },
      editTypeTexte: {
        code: "",
        libelle: ""
      },
      search: ""
    };
  },

  computed: {
      ...mapGetters("bienService", ["getActeEffetFinancierPersonnaliser45",'acteEffetFinanciers','marches','typeMarches', 'getMarchePersonnaliser',
     "montantMarche", "printMarcheNonAttribue","procedurePassations","typeTypeProcedures","montantMarcheReel"]),

     ...mapGetters("uniteadministrative",['uniteAdministratives',"budgetGeneral",
      "getPersonnaliseBudgetGeneral","groupUa","groupgranNature","getPersonnaliseBudgetGeneralParBienService",
      "montantBudgetGeneral", ]),
       ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
 ...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires']),
   ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),

afficheractivite() {

      return id => {
       
        if (id != null && id != "") {
           const qtereel = this.afficheNiveauActivite.find(qtreel => qtreel.id == id);

      if (qtereel!=undefined) {
        
        return qtereel.libelle;
      }
      return 0
        }
      };
    },

afficherTypeMarcheLibelle() {
       
      return id => {
        if (id != null && id != "") {
           const qtereel = this.typeMarches.find(qtreel => qtreel.id == id);

      if (qtereel!=undefined) {
        
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
afficherUniteAdministrative() {
       
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel!=undefined) {
        
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
afficherSommeMarcheExecution() {
      return id => {
        if (id != null && id != "") {
           return this.acteEffetFinanciers.filter(qtreel => qtreel.marchegeneral_id == id).reduce((prec, cur) => parseFloat(prec)+ parseFloat(cur.montant_act), 0);

      
      
        }
      };
    },
afficherStatusSib() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.sib;
      }
      return 0
        }
      };
    },
affichertypeMarcheEx() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.typeMarches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code_type_marche;
      }
      return 0
        }
      };
    },
    afficheMontantReelMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.montant_act;
      }
      return 0
        }
      };
    },
listeDesLotExecution() {
       // const st = this.search.toLowerCase();
        if (this.noDCfNoAdmin){
            let colect=[];
            this.getMarchePersonnaliser.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
         return id => {
        if (id != null && id != "") {
          return this.colect.filter(
            element => element.parent_id == id  && element.attribue == 2 && this.afficherCodetypeMarche(element.type_marche_id) == 3 || element.type_marche_id == 1 && element.parent_id == id  && element.attribue == 2
          );
        }
      };
            
          
        }
  return id => {
        if (id != null && id != "") {
          return this.getMarchePersonnaliser.filter(
element => element.parent_id == id  && element.attribue == 2 && this.afficherCodetypeMarche(element.type_marche_id) == 3 || element.type_marche_id == 1 && element.parent_id == id  && element.attribue == 2
          );
        }
      };
       
    },
     afficherCodetypeMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.typeMarches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code_type_marche;
      }
      return 0
        }
      };
    },
     affichertypeMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.typeMarches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
afficherlibelleUa() {
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
    afficherlibelleActivite() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_activites.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    afficherCodeEtLibellePlanEconomique(){
  return id =>{
        if(id!=null && id!=""){
          const objet = this.plans_budgetaires.find(item => item.id==id)
          if(objet) return objet.code.concat("    ", objet.libelle)
        }
        return null
      }
},
  },
  created() {
            this.marcheid=this.$route.params.id
   this.detail_marche = this.getMarchePersonnaliser.find(
       idmarche => idmarche.id == this.$route.params.id
   )
  /*  this.appel_offre_marche=this.appelOffres.filter( idmarche => idmarche.marche.id == this.$route.params.id)
    console.log(this.appel_offre_marche)*/
},
  methods: {
    ...mapActions("uniteadministrative", [
      "getAllTypeTextes",
      "getAllNombreTypeText",
      "ajouterTypeTexte",
      "modifierTypeTexte",
      "supprimerTypeTexte"
    ]),
   formatageSommeSansFCFA:formatageSommeSansFCFA,
   formatageSomme:formatageSomme,
    alert() {
      console.log("ok");
    },
    
ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>

