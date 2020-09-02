
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
              <h5>Listes des marches</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search" placeholder="Saisie code ou libelle" v-model="search" />
              </div> -->
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Année</th>
                      <th>UA</th>
                    <th>Type marché</th>
                    <th>Mode de passation</th>
                    <th>Activité</th>
                    <th>Imputation</th>
                    <!-- <th>Ligne Budgetaire</th> -->
                    <th>Objet marché</th>
                    <th>Reference marché</th>
                     <th>Statut</th>
                    <th>Montant prévu</th>
                    <th>Montant réel</th>
                    <th title="mouvement du marché">Mvt marché</th>
                    <th>Etat En cours</th>
                    <th>Cycle de vie</th>
                   <th colspan="3">Action</th>
                  </tr>
                </thead>
                <tbody>
                   <tr class="odd gradeX" v-for="marche in 
                filtre_unite_admin"
                 :key="marche.id">
                  <td>
                   {{marche.exo_id || 'Non renseigné'}} </td>
                 <td>
                   {{marche.objetUniteAdministrative.libelle || 'Non renseigné'}}</td>
                 <td>
                   {{ELibelle(marche.type_marche_id) || 'Non renseigné'}}</td>
                 <td style="text-align: center">
                   {{marche.procedure_passation.code || 'Non renseigné'}}</td>
                  <td>
                   {{marche.afficheActivite.libelle || 'Non renseigné'}}</td>
                    <td>
                   {{marche.imputation || 'Non renseigné'}}</td>
                    <!-- <td>
                  {{marche.afficheEconomique.code || 'Non renseigné'}}- {{marche.afficheEconomique.libelle || 'Non renseigné'}}</td> -->
                     <td>
                   {{marche.objet || 'Non renseigné'}} </td>
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
                   {{formatageSomme(parseFloat(recupererMontantReel(marche.id))) || 'Non renseigné'}}</td>
                   <td>
                      <span v-if="marche.mvtmarche == 1">Hors PPM</span>
                      <span v-else>PPM</span>
                    </td>
           <td>
                     <button 
                      v-if="marche.attribue == 2"  class="btn  btn-warning">
                <span title="MARCHE EN EXERCUTER" style="">EX</span>
       
                </button>
                <button 
                      v-else-if="marche.attribue == 1"  class="btn  btn-success">
                <span title=" MARCHE EN COURS DE CONTRATUALISATION">CT</span>
       
                </button>
                 <button 
                      v-else-if="marche.attribue == 3"  class="btn  btn-info">
                <span title="MARCHE RESILIE" >RE</span>
       
                </button>
                 <button v-else-if="marche.attribue == 5" class="btn  btn-inverse">
              
                <span title="MARCHE EN TERMINE">TE</span>
                </button>
                   <button v-else-if="marche.attribue == 7" class="btn  btn">
              
                <span title="MARCHE SUSPENDU">SU</span>
                </button>
 <button v-else class="btn  btn-danger">
              
                <span title="MARCHE EN PLANIFICATION">PL</span>
                </button>
                   </td>
  
                   <td v-if="marche.attribue == 2 || marche.attribue == 5">
                        <router-link :to="{ name: 'CycleDeVie', params: { id: marche.id }}"
                 class="btn btn-inverse " title="Cycle de vie du marche">
        <span class=""><i class=" icon-calendar"></i></span>
    </router-link>
                   </td>
                   <td v-else></td>
                   <td>
                    
                      <router-link :to="{ name: 'DetailMarchePs', params: { id: marche.id }}"
                class="btn btn-default " title="historique la contratualisation">
                  <span class=""><i class=" icon-folder-open"></i></span>
                    </router-link>
                   </td>
                   <td>
                     <router-link :to="{ name: 'detailExecution', params: { id: marche.id }}"
                class="btn btn-default " title="historique execution Marche">
                  <span class=""><i class="  icon-random"></i></span>
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
                     
                       <td>
                          
                      </td>
                       <td style="font-weight:bold;"> Total Marché
                      </td>
                       <td  style="text-align: center;color:red;font-weight:bold;">
                           {{formatageSomme(parseFloat(montantMarche))}}
                           
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
   
   montantMarche(){
  return this.filtre_unite_admin.reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.montant_marche), 0)
},
   
   filtre_unite_admin() {
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
            return colect.filter(element => this.recupererCodeTypeMarche(element.type_marche_id) == 4 || this.recupererCodeTypeMarche(element.type_marche_id) == 1)
           
        }

 return this.printMarcheNonAttribue.filter(element => this.recupererCodeTypeMarche(element.type_marche_id) == 1 || this.recupererCodeTypeMarche(element.type_marche_id) == 4)
       
          

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

