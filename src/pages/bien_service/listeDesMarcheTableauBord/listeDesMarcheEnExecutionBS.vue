affichertypeMarcheID
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
              <h5>Liste des marchés en executions</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search" placeholder="Saisie code ou libelle" v-model="search" />
              </div> -->
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                 <tr>
                <th>Ann&eacute;e</th>
                 <th title="unite administrative">UA</th>
                      <th>Type marche</th>
                   
                    <!-- <th>Activit&eacute;</th> -->
                    <th>Imputation</th>
                       <th>Objet march&eacute;</th>
                        <!-- <th>Reference march&eacute;</th>  -->
                                    <th>Montant réel</th>
                                <th>Etat du marché</th>
                                <th colspan="4">Action</th>
                </tr>
                </thead>
                <tbody>
                 <tr class="odd gradeX" v-for="marche in 
                afficherExecutionPAU"
                 :key="marche.id">

                 <template v-if="afficherCodeTypeMarche(afficherDifferentTypeMarche(marche.marche_id)) == 4 || afficherCodeTypeMarche(afficherDifferentTypeMarche(marche.marche_id)) == 1">

                    <td>
                   {{afficherAnneeBudget(marche.marche_id) || 'Non renseigné'}}</td>
                 <td>
                   {{afficherUniteAdministrative(afficherIdUniteAdministrative(marche.marche_id)) || 'Non renseigné'}}</td>
                 
                  <td>
                   {{ELibelle(E(marche.marche_id))|| 'Non renseigné'}}</td>
                  <!-- <td>
                   {{afficheractivite(afficherIdactivite(marche.marche_id))|| 'Non renseigné'}}</td> -->
                    <td>
                   {{afficherImputationMarche(marche.marche_id)|| 'Non renseigné'}}</td>
                    <!-- <td>
                  {{marche.afficheEconomique.code || 'Non renseigné'}}- {{marche.afficheEconomique.libelle || 'Non renseigné'}}</td> -->
                     <td>
                   {{afficherObjetMarche(marche.marche_id) || 'Non renseigné'}}</td>
                     <!-- <td>
                   {{afficherReferenceMarche(marche.marche_id)|| 'Non renseigné'}}</td> -->
                   <!-- <td>
                   {{marche.numero_marche || 'Non renseigné'}}</td> -->
                     <td style="text-align: center;">
                   {{formatageSomme(parseFloat(marche.montant_act)) || 'Non renseigné'}}</td>
                  
                    <td>
                     <button 
                      v-if="afficherAttributMarche(marche.marche_id) == 2"  class="btn  btn-warning">
                <span >EX</span>
       
                </button>
                 
                 </td>
        
<td>
   <router-link :to="{ name: 'CycleDeVie', params: { id: marche.marche_id }}"
                                    class="btn btn-inverse " title="Cycle de vie du marche">
                           <span class=""><i class=" icon-calendar"></i></span>
                       </router-link> 
</td>

                     <div class="btn-group">
 
                
             
            </div>
                 </template>
                 
                   </tr>
                </tbody>
              </table>
              
            </div>
          </div>
        </div>
      </div>
    </div>

    
    <!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
  </div>
</template>
  
<script>
import { mapGetters} from "vuex";
 import { formatageSomme } from "../../../../src/Repositories/Repository";
 import {admin,dcf,noDCfNoAdmin} from "../../../../src/Repositories/Auth"
export default {
  name:'typetext',
  data() {
    return {
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
      
      search: ""
    };
  },

  computed: {
     ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),

     ...mapGetters("bienService", ['mandats','getMandatPersonnaliserVise','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
     'acteEffetFinanciers','montantPlanification','montantContratualisation','afficheContratualisation','affichePlanifier',
     'nombremarchesExecute',
     'AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
      "printMarcheNonAttribue","procedurePassations","typeTypeProcedures",
     "montantComtratualisation","text_juridiques", "gettersOuverturePersonnaliser", "typeActeEffetFinanciers"]),


     ...mapGetters("uniteadministrative",['getterligneExempter','uniteAdministratives',"budgetGeneral",
      "getPersonnaliseBudgetGeneral","groupUa","groupgranNature","getPersonnaliseBudgetGeneralParBienService",
      "montantBudgetGeneral","jointureUaChapitreSection" , ]),
       ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
 ...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires']),
   ...mapGetters("gestionMarche", ['entreprises']),
   admin:admin,
      dcf:dcf,
      noDCfNoAdmin:noDCfNoAdmin,
   ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements', 
  'types_financements']) ,


afficherAttributMarche() {
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
 afficherImputationMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.imputation;
      }
      return 0
        }
      };
    },
    afficherObjetMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.objet;
      }
      return 0
        }
      };
    },
    afficherNumeroMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_marche;
      }
      return 0
        }
      };
    },
E() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.type_marche_id;
      }
      return 0
        }
      };
    },
affichertypeMarcheID() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.type_marche_id;
      }
      return 0
        }
      };
    },

  afficherIdUniteAdministrative() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.unite_administrative_id;
      }
      return 0
        }
      };
    },
   afficherUniteAdministrative() {
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
   afficheractivite() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.afficheNiveauActivite.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
   montantEnContratualisation(){
  return this.afficherContratualisationParUA.reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.montant_marche), 0)
},

afficherDifferentTypeMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.type_marche_id;
      }
      return 0
        }
      };
    },
afficherCodeTypeMarche() {
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


    afficherAnneeBudget() {
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
   afficherExecutionPAU() {
       // const st = this.search.toLowerCase();


        if (this.noDCfNoAdmin){
            let colect=[];
            this.getActeEffetFinancierPersonnaliser45.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(element => this.afficherAttributMarche(element.marche_id) == 2 && this.affichertypeMarcheEx(this.affichertypeMarcheID(element.marche_id)) == 4 &&  element.difference_personnel_bienService == 2||this.afficherAttributMarche(element.marche_id) == 2 && this.affichertypeMarcheEx(this.affichertypeMarcheID(element.marche_id)) == 1 && element.difference_personnel_bienService == 2) 
           
        }

        return this.getActeEffetFinancierPersonnaliser45.filter(element => this.afficherAttributMarche(element.marche_id) == 2 && this.affichertypeMarcheEx(this.affichertypeMarcheID(element.marche_id)) == 4 &&  element.difference_personnel_bienService == 2||this.afficherAttributMarche(element.marche_id) == 2 && this.affichertypeMarcheEx(this.affichertypeMarcheID(element.marche_id)) == 1 && element.difference_personnel_bienService == 2)
            
        

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
     ELibelle() {
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
    CodeExempte() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterligneExempter.find(qtreel => qtreel.economique_id == id);

      if (qtereel) {
        return qtereel.economique_id;
      }
      return 0
        }
      };
    },
    recupererCodeTypeMarche() {
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
    recupererMontantReel() {
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
  },
  methods: {
  
   modifierModalActeEffetFinancierLocal2(index){
   
    if ( confirm( "Avez-vous terminé les etapes avant de migrer en execution svp ?") ) {
this.editActeEffetFinancier = this.afficheMarcheEnCoursContratualisation[index]
 if(this.recupererDateMiseService(this.editActeEffetFinancier.id) == null || this.recupererDateMiseService(this.editActeEffetFinancier.id) == "" ){
 
      alert("Etapes Non Terminé,Vérifier la date de mise en service svp")
    }
     else if ( confirm( "Voulez-vous basculer en Execution ?") ) {
   
     this.editActeEffetFinancier = this.afficheMarcheEnCoursContratualisation[index]
    
      let marcheObjet = this.marches.find(marche=>marche.id==this.editActeEffetFinancier.id)
         marcheObjet.attribue = 2

    this.modifierMarcheBascule(marcheObjet)
} 
else{
 // Code à éxécuter si l'utilisateur clique sur "Annuler" 
}
    }
  
},

  BoutonDeSuppensionMarche(index){
   
   if ( confirm( "Etes-vous sur de suspendre le marché ?") ) {
   
     this.editMarche = this.afficheMarcheEnCoursContratualisation[index];
    
      let marcheObjet = this.marches.find(marche=>marche.id==this.editMarche.id)
         marcheObjet.attribue = 7

    this.modifierMarcheBascule(marcheObjet)
} 
else{
 // Code à éxécuter si l'utilisateur clique sur "Annuler" 
}
    },
 
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

