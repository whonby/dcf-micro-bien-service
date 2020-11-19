
<template>
  <div >
    <div id="ModalDecompte" class="modal hide grdirModalActeEffet" >
    <div class="modal-header">
      <button data-dismiss="modal" class="close" type="button">×</button>
      <h3>Information sur l'attribution de l'acte : Lot N° </h3>
    </div>

    <div class="widget-title">
      <ul class="nav nav-tabs">
       
        <li class="active"><a data-toggle="tab" href="#financ">INFORMATION DECOMPTE</a></li>
      </ul>
    </div>
    <div class="widget-content tab-content">

      <div id="financ" class="tab-pane active">
  <ul class="nav nav-tabs">
        <li class="active"><a data-toggle="tab" href="#MARCHE">INFO ENTREPRISE</a></li>
        <li class=""><a data-toggle="tab" href="#DEMARRAGE">INFO MARCHE</a></li>
        <li class=""><a data-toggle="tab" href="#DECOMPTE">INFO DECOMPTE</a></li>
      </ul>
      <div class="widget-content tab-content">
<div id="DECOMPTE" class="tab-pane">
         <table class="table table-bordered table-striped">
           <tr>
              <td>

              <div class="control-group">
              <label class="control-label">N°décompte</label>
                <div class="controls">
                  <input
                      type="number"
                      
                     
                      class="span"
                      
                  />
                </div>
              </div>
            </td>
           
             <td >
              <div class="control-group">
                <label class="control-label" >Date décompte</label>
                <div class="controls">
                  <input
                      type="date"

                      
                      class="span"
                      
                  />
                </div>
              </div>
            </td>
            <td>

              <div class="control-group">
                <label class="control-label">Montant Acompte HTVA</label>
                <div class="controls">
                  <input type="text" 
                         class="span"
                         readonly
                  />
                </div>
              </div>
            </td>
            
             
           </tr>
            <tr>
               <td >
              <div class="control-group">
                <label class="control-label" > Retenue d'avance</label>
                <div class="controls">
                  <input
                      type="text"
                       
                    readonly
                      class="span"
                     
                  />

                </div>
              </div>
            </td>
             <td >
              <div class="control-group">
                <label class="control-label" > Retenue de garantie</label>
                <div class="controls">
                  <input
                      type="text"
                      

                      class="span"
                      readonly
                  />

                </div>
              </div>
            </td>
            
             <td colspan="">
              <div class="control-group">
                <label class="control-label" >Retenue de pénalité</label>
                <div class="controls">
                  <input
                      type="text"
                       

                      class="span12"
                      readonly
                  />

                </div>
              </div>
            </td>
           </tr>
         </table>
        
      </div>
      <div id="MARCHE" class="tab-pane active">
         <table class="table table-bordered table-striped">
           <tr>
              <td>

              <div class="control-group">
                <label class="control-label">Nom de l'Entreprise</label>
                <div class="controls">
                  <input
                      type="text"
                      :value="NomEntreprise(IdEntreprise(macheid))"
                      
                      class="span"
                      readonly
                  />
                </div>
              </div>
            </td>
           
             <td >
              <div class="control-group">
                <label class="control-label" >Adresse</label>
                <div class="controls">
                  <input
                      type="text"
                     :value="AdresseEmailEntreprise(IdEntreprise(macheid))"
                      
                      class="span"
                      readonly
                  />
                </div>
              </div>
            </td>
            <td >
              <div class="control-group">
                <label class="control-label" > N°de compte Contribuable</label>
                <div class="controls">
                  <input
                      type="text"
                       
                      :value="ContribuableEntreprise(IdEntreprise(macheid))"
                      class="span"
                      readonly
                  />

                </div>
              </div>
            </td>
             
           </tr>
            <tr>
            
            
             <td colspan="3">
              <div class="control-group">
                <label class="control-label" >Objet</label>
                <div class="controls">
                  <input
                      type="text"
                       
                      :value="libelleObjet(macheid)"
                      class="span12"
                      readonly
                  />

                </div>
              </div>
            </td>
           </tr>
         </table>
        
      </div>
      <div id="DEMARRAGE" class="tab-pane">
         <table class="table table-bordered table-striped">
           <tr>
             <td >
              <div class="control-group">
                <label class="control-label" >N°de Marché</label>
                <div class="controls">
                  <input
                      type="text"  
                      :value="NumeroMarche(macheid)"
                      
                      class="span"
                      readonly
                  />

                </div>
              </div>
            </td>
              <td>
              <div class="control-group">
                <label class="control-label">Date d'Approbation du marché</label>
                <div class="controls">


                  <input type="text" 
                         class="span"
                         :value="dateApprobation(macheid)"
                         readonly
                  />

                </div>
              </div>
            </td>
             <td>
               <div class="control-group">
                <label class="control-label" >Imputation Budgétaire</label>
                <div class="controls">
                  <input
                      type="text"
                      
                      :value="Imputation(idParent(macheid))"
                      class="span"
                      readonly
                  />

                </div>
              </div>
             </td>
             <td >
              <div class="control-group">
                <label class="control-label" >Montant initial du marché HT</label>
                <div class="controls">
                  <input
                      type="number"
                       :value="montantHtMarche(macheid)"

                      class="span"
                      readonly
                  />

                </div>
              </div>
            </td>
           </tr>
             <tr>
             <td >
              <div class="control-group">
                <label class="control-label" >Montant total du marché TTC</label>
                <div class="controls">
                  <input
                      type="text"  
                        :value="montantTTCMarche(macheid)"
                      step='100'
                      class="span"
                      readonly
                  />

                </div>
              </div>
            </td>
              <td>
              <div class="control-group">
                <label class="control-label">PART Bailleur</label>
                <div class="controls">


                  <input type="text" 
                         class="span"
                         
                  />

                </div>
              </div>
            </td>
             <td>
               <div class="control-group">
                <label class="control-label" >PART ETAT</label>
                <div class="controls">
                  <input
                      type="text"
                       style="text-align:left;color:red"

                      class="span"
                      readonly
                  />

                </div>
              </div>
             </td>
             <!-- <td >
              <div class="control-group">
                <label class="control-label" >Montant initial du marché HT</label>
                <div class="controls">
                  <input
                      type="number"
                       style="text-align:left;color:red"

                      class="span"
                      readonly
                  />

                </div>
              </div>
            </td> -->
           </tr>
         </table>
      </div>
       
      
      </div>
      </div>


    </div>

    <div class="modal-footer">
      <a  @click.prevent="ajouterModalActeEffetFinancierLocal"
          class="btn btn-primary"
          href="#"
      >Valider</a>
      <a data-dismiss="modal" class="btn" href="#">Fermer</a>
    </div>
  </div>
    

    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
         
          <div class="widget-box">
         
            <!-- <div class="widget-title"> -->

               
   <table class="table table-bordered table-striped" v-if="macheid">
     <thead>
          <tr> 
         <th style="width:10%;">  </th>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <th style="width:30%" colspan="3" >Retenues </th>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" ></td>
          <td style="width:10%" colspan="1" ></td>
          <td style="width:10%" colspan="1" > </td>
          </tr>
       
       <tr> 
         <th style="width:10%;">DECOMPTE  </th>
          <td style="width:10%" colspan="1" >Date </td>
          <td style="width:10%" colspan="1" >Acompte HTVA </td>
          <td style="width:10%" colspan="1" >d'Avance </td>
          <td style="width:10%" colspan="1" >de Garantie </td>
          <td style="width:10%" colspan="1" >de Penalités </td>
          <td style="width:10%" colspan="1" >Net HTVA </td>
          <td style="width:10%" colspan="1" > Net TTC</td>
          <td style="width:10%" colspan="1" > Etat(TVA 18%)</td>
          <td style="width:10%" colspan="1" >Bailleur(100% HTVA) </td>
       </tr>
       
       <tr>
          <th style="width:10%"></th>
           <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
       </tr>
          
    
       <tr>
          <th  style="width:10%"></th>
           <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
       
           
       </tr>
      <tr>
       <th  style="width:10%"> </th>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
      
       </tr>
      <tr>
        <th  style="width:10%"></th>
           <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
        
       </tr>
       <tr>
        <th  style="width:10%"></th>
           <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
        
       </tr>
       <tr>
        <th  style="width:20%" colspan="2"> CUMULS </th>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
        
       </tr>
       <tr>
        <th  style="width:20%" colspan="2">%CUMULS  </th>
           
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
          <td style="width:10%" colspan="1" > </td>
       
       </tr>
      

     </thead>
     
   </table>
   
 
            <!-- <div v-else> -->
              <!-- <p style="text-align:center;font-size:20px;color:red;">Aucune Unite Administrative</p> -->
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>

    <fab :actions="fabActions" @cache="afficherModalAjouterpaiementPersonnel" main-icon="apps" bg-color="green"></fab>
        <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterpaiementPersonnel()">Open</button>
  <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
  <notifications  />
  </div>
</template>
  
/ <script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
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

      search: ""
    };
  },
props:["macheid"],
  computed: {
  ...mapGetters("bienService", ["modepaiements",'mandats','getMandatPersonnaliserVise','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
     'acteEffetFinanciers','montantPlanification','montantContratualisation','afficheContratualisation','affichePlanifier',
     'nombremarchesExecute',
     'AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
      "printMarcheNonAttribue","procedurePassations","typeTypeProcedures",
     "montantComtratualisation","text_juridiques", "gettersOuverturePersonnaliser", "typeActeEffetFinanciers"]),

   ...mapGetters('personnelUA', ['acteur_depenses',"paiementPersonnel"]),
   
   ...mapGetters('uniteadministrative',[
    "plans_programmes",
 "uniteAdministratives",
 "afficheNiveauAction",
 "afficheNiveauActivite",
 "derniereNivoPlanBudgetaire",
 "getPersonnaliseBudgetGeneralParPersonnel"
   
   
   ]),

   ...mapGetters('parametreGenerauxAdministratif',[

 "sections",
 "type_Unite_admins",
 "plans_programmes",
 "natures_sections",
 "grandes_natures",
 "afficheNiveauPlanProg",
 "exercices_budgetaires"
   ]),

   ...mapGetters('parametreGenerauxFonctionnelle',[

      "plans_fonctionnels",
 "afficheNiveauPlanFonctionnel"
   ]),

...mapGetters('parametreGenerauxActivite',[ 'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

...mapGetters('parametreGenerauxBudgetaire',["plans_budgetaires","derniereNivoPlanBudgetaire"]),
...mapGetters("gestionMarche", ['secteur_activites', 'entreprises','banques','comptes','getCompte']),
    

// separateur(){
//  const euro = new Intl.NumberFormat('fr-FR', {
//   style: 'currency',
//   currency: 'EUR',
//   minimumFractionDigits: 2
// })
// },
   
    idParent() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.parent_id;
      }
      return 0
        }
      };
    },
     Imputation() {
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
    montantHtMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.montant_act_ht;
      }
      return 0
        }
      };
    },
    montantTTCMarche() {
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
    dateApprobation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return this.formaterDate(qtereel.date_approbation);
      }
      return 0
        }
      };
    },
     NumeroMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.numero_marche;
      }
      return 0
        }
      };
    },
     IdEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.entreprise_id;
      }
      return 0
        }
      };
    },   
    NomEntreprise() {
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
    AdresseEmailEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.telephone.concat(' - ', qtereel.email);
      }
      return 0
        }
      };
    },  
    ContribuableEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_cc;
      }
      return 0
        }
      };
    },    
    libelleObjet() {
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
  },
  methods: {
    ...mapActions("personnelUA", [
      "getpaiementPersonnel",
      "ajouterpaiementPersonnel",
      "modifierpaiementPersonnel",
      "supprimerpaiementPersonnel"
    ]),
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
