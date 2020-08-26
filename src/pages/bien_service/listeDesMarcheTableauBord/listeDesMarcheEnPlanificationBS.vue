
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
              <h5>Liste des marchés en planification</h5>
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
                      <th>Type de marché</th>
                   
                    <th>Activité</th>
                    <th>Imputation</th>
                       <th>Objet du marché</th>
                        <th>Référence du marché</th> 
                        <th>Statut</th>
                                    <th>Montant prévu</th>
                                <th>Etat du marché</th>
                                <th colspan="2">Action</th>
                </tr>
                </thead>
                <tbody>
                   <tr class="odd gradeX" v-for="marche in 
                afficherPlanificationPA"
                 :key="marche.id">
                  <td>
                   {{marche.exo_id || 'Non renseigné'}}</td>
                 <td>
                   {{afficherUniteAdministrative(marche.unite_administrative_id) || 'Non renseigné'}}</td>

                 <td>
                   {{ELibelle(marche.type_marche_id) || 'Non renseigné'}}</td>
                  <td>
                   {{afficheractivite(marche.activite_id) || 'Non renseigné'}}</td>
                    <td>
                   {{marche.imputation || 'Non renseigné'}}</td>
                    <!-- <td>
                  {{marche.afficheEconomique.code || 'Non renseigné'}}- {{marche.afficheEconomique.libelle || 'Non renseigné'}}</td> -->
                     <td>
                   {{marche.objet || 'Non renseigné'}}</td>
                     <td>
                   {{marche.reference_marche || 'Non renseigné'}}</td>
                    <td>

                         <span v-if="marche.economique_id == CodeExempte(marche.economique_id) ">Exemptée procedure</span>
                         <span v-else>Ligne à marché</span>
                       </td>
                   <!-- <td>
                   {{marche.numero_marche || 'Non renseigné'}}</td> -->
                     <td style="text-align: center;">
                   {{formatageSomme(parseFloat(marche.montant_marche)) || 'Non renseigné'}}</td>
                  
<td>
                     <button 
                      v-if="marche.attribue == 0"  class="btn  btn-danger">
                <span >PL</span>
       
                </button>
                 
                   </td>

<td>
    <router-link :to="{ name: 'DetailMarchePs', params: { id: marche.id }}"
                class="btn btn-default " title="Detail marche">
                  <span class=""><i class=" icon-folder-open"></i></span>
                   </router-link>
</td>
<td>
   <router-link :to="{ name: 'CycleDeVie', params: { id: marche.id }}"
                 class="btn btn-inverse " title="Cycle de vie du marche">
        <span class=""><i class=" icon-calendar"></i></span>
    </router-link>
</td>
                  <!-- <td>
                     <router-link :to="{ name: 'CycleDeVie', params: { id: marche.id }}"
                                    class="btn btn-inverse " title="Cycle de vie du marche">
                           <span class=""><i class=" icon-calendar"></i></span>
                       </router-link>
                  </td> -->

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
                     
                      <td>
                          
                      </td>
                       <td style="font-weight:bold;"> Total Marché
                      </td>
                       <td  style="text-align: center;color:red;font-weight:bold;">
                           {{formatageSomme(parseFloat(montantEnPlanification))}}
                           
                      </td>
                       <td>
                          
                      </td>
                        <td>
                          
                      </td>
                      
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
   montantEnPlanification(){
  return this.afficherPlanificationPA.reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.montant_marche), 0)
},
   
 afficherPlanificationPA() {
       // const st = this.search.toLowerCase();
        if (this.noDCfNoAdmin){
            let colect=[];
            this.printMarcheNonAttribue.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(element => element.attribue == 0 && this.recupererCodeTypeMarche(element.type_marche_id) == 4 || element.attribue == 0 && this.recupererCodeTypeMarche(element.type_marche_id) == 1)
            // return colect.filter(items => {
            //     return (
            //         items.secti.nom_section.toLowerCase().includes(st) ||
            //         items.libelle.toLowerCase().includes(st)
            //     );
            // }); 
        }

        return this.printMarcheNonAttribue.filter(element => element.attribue == 0 && this.recupererCodeTypeMarche(element.type_marche_id) == 4 || element.attribue == 0 && this.recupererCodeTypeMarche(element.type_marche_id) == 1)
            // return (
            //     items.secti.nom_section.toLowerCase().includes(st) ||
            //     items.libelle.toLowerCase().includes(st)
            // );
        

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

