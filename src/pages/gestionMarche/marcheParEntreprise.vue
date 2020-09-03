reference_marche
<template>
  <div>


   
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
        
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Marché par Entreprise</h5>
             
            </div>
            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                                            
                                            <th>Raison Sociale </th>
                                           
                                            <th>Secteur d'activité</th>
                                           
                                            <th>Régime d'Imposition</th>
                                            <th>Forme Juridique</th>
                                            
                                            <th>Action</th>
                                        </tr>
                </thead>
                <tbody>
                   <tr class="odd gradeX" v-for="marche in 
                afficheEntrepriseAuMoinUnMarche"
                 :key="marche[0].id">
                  <td>{{afficheRaisonSocial(marche[0].entreprise_id) || 'Non renseigné'}}</td>
                    <td>{{afficheLibelleSecteurActivite(afficheIdSecteurActivite(marche[0].entreprise_id)) || 'Non renseigné'}}</td>
                     <td>{{afficheLibelleRegimeImposition(afficheIdRegimeImposition(marche[0].entreprise_id)) || 'Non renseigné'}}</td>
                      <td>{{afficheLibelleFormeJuridique(afficheIdFormeJuridique(marche[0].entreprise_id)) || 'Non renseigné'}}</td>

                         
                            <td>
                             <router-link :to="{ name: 'detailMarcheParEntreprise', params: { id: marche[0].entreprise_id }}"
                class="btn btn-default " title="historique execution Marche">
                  <span class=""><i class="  icon-folder-open"></i></span>
                   </router-link> 
                         </td>
                         
                   </tr>
                </tbody>
              </table>
              
            </div>
          </div>
        </div>



      </div>
    </div>

    
    
  </div>
</template>
  
<script>
 import { mapGetters, mapActions } from "vuex";
//  import { formatageSomme } from "../../../src/Repositories/Repository";
//  import {admin,dcf,noDCfNoAdmin} from '../../../src/Repositories/Auth';
export default {
  
  data() {
    return {
    

      
     
    };
  },

  computed: {
     ...mapGetters("bienService", ["groupeEntreprise",'mandats','getMandatPersonnaliserVise','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
     'acteEffetFinanciers','montantPlanification','montantContratualisation','afficheContratualisation','affichePlanifier',
     'nombremarchesExecute',
     'AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
      "printMarcheNonAttribue","procedurePassations","typeTypeProcedures",
     "montantComtratualisation","text_juridiques", "gettersOuverturePersonnaliser", "typeActeEffetFinanciers"]),


     ...mapGetters("uniteadministrative",['getterligneExempter','uniteAdministratives',"budgetGeneral",
      "getPersonnaliseBudgetGeneral","groupUa","groupgranNature","getPersonnaliseBudgetGeneralParBienService",
      "montantBudgetGeneral", ]),
       ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
 ...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires',"grandes_natures"]),
   ...mapGetters("gestionMarche", ['entreprises','secteur_activites']),
   ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements', 
  'types_financements']) ,

  ...mapGetters("Utilisateurs", ["user","getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
...mapGetters("parametreGenerauxAdministratif", ["getterformeJuridique","getterregimeImpositions","getterplan_pays"]),
    anneeAmort() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },
    afficheAnneeDuMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.exo_id;
      }
      return 0
        }
      };
    },
afficheEntrepriseAuMoinUnMarche(){
    return this.groupeEntreprise.filter(items=> items[0].entreprise_id != null && this.afficheAnneeDuMarche(items[0].marche_id)== this.anneeAmort);
},

 afficheRaisonSocial() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.raison_sociale;
      }
      return 0
        }
      };
    },
afficheIdSecteurActivite() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.secteur_activite_id;
      }
      return 0
        }
      };
    },
    afficheLibelleSecteurActivite() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.secteur_activites.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },

    afficheIdFormeJuridique() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.forme_juridique;
      }
      return 0
        }
      };
    },
    afficheLibelleFormeJuridique() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterformeJuridique.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },

    afficheIdRegimeImposition() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.regime_impossition;
      }
      return 0
        }
      };
    },
    afficheLibelleRegimeImposition() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterregimeImpositions.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
  },
  methods: {
    ...mapActions("bienService", ['ajouterMarche','modifierMarche','modifierMarcheBascule',
    'supprimerMarche','modifierActeEffetFinancier',"getMarche","getActeEffetFinancier"
     
    ]),
    
    
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
