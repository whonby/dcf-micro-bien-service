
<template>
  <div>
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
            <div class="quick-actions_homepage " >
              <ul class="quick-actions">
                
                 <li class="bg_lb" title="Nombre Global d'équipement">
          <a href="#">
            <i class="icon-th-large"></i>
            <span class="label label-important">{{nombreTotalEquipement}}</span> Nbre Global d'équipement prévue
          </a>
        </li> 
         <li class="bg_ly" title="Nombres d'equipement Restant">
          <a href="#">
            <i class=" icon-list-alt"></i>
            <span class="label label-success">{{SommeEquipementPrevue}}</span>Nbre Equipement Restant
          </a>
        </li>
         <li class="bg_ly" title="Nombre d'equipement Réalise">
          <a href="#">
            <i class=" icon-list-alt"></i>
            <span class="label label-success">{{SommeEquipementRealise}}</span> Nbre Equipement Réalise
          </a>
        </li> 
        <li class="bg_lg" title="Taux équipement  réalisé">
          <a href="#">
            <i class="icon-th"></i>
            <span class="label label-warning">{{tauxEquipementRealise}}%</span>Taux équipement  réalisé
          </a>
        </li>
         <li class="bg_lg">
          <a href="#">
            <i class="icon-th"></i>
            <span class="label label-warning">{{tauxEquipementPrevue}}%</span>Taux équipement Restant
          </a>
        </li>
        <!-- <li class="bg_lr" title="Taux équipement Réalisé par type UA" v-show="typeUniteAdmin_id.length !== 0">
                  <a href="#">
                    Taux équipement Réalisé par
                   
                    <i class="icon-th"></i>
                   <span class="label label-success">{{TauxEquipementRealiseParTypeUniteAdministrative(typeUniteAdmin_id)}}%</span>  {{nomTypeUniteAdministrative(typeUniteAdmin_id)}}
                  </a>
                </li> -->
                  <li class="bg_ls" title="Taux équipement Réalisé par UA"  v-show="uniteadmin_id.length !== 0" >
                  <a href="#">
                    Taux équipement Réalisé par 
                   
                    <i class="icon-th"></i>
                    <span class="label label-important">{{TauxEquipementRealiseParUniteAdministrative(uniteadmin_id)}}%</span>  {{nomUniteAdministrative(uniteadmin_id)}}         </a>
                </li>
                     <li class="bg_lo" title="Taux équipement Réalisé par UA"  v-show="uniteadmin_id.length !== 0" >
                  <a href="#">
                    Montant des besoins restant pour
                   
                    <i class="icon-th"></i>
                    <span class="label label-success">{{(MontantbesoinRestantParUniteAdministrative(uniteadmin_id))}}</span>  {{nomUniteAdministrative(uniteadmin_id)}}         </a>
                </li>
              </ul>
            </div>
          
          <div class="widget-box">
           
 <div class="widget-title">
             
              <!-- <div align="right" class="deplaceme">
               
                 <div class="span3 depla">
                  <model-list-select
                    v-model="typeUniteAdmin_id"
                    style="background-color: rgb(222, 222, 222);"
                    :list="type_Unite_admins"
                    option-value="id"
                    option-text="libelle"
                    placeholder="Type Unite Admin"
                  ></model-list-select>
                   
                </div>
              </div> -->
                 <div align="right" class="deplaceme">
                <div class="span3 ">
                 
                   <model-list-select
                    v-model="uniteadmin_id"
                    style="background-color: rgb(222, 222, 222);"
                    :list="uniteAdministratives"
                    option-value="id"
                    option-text="libelle"
                    placeholder="Unite Administrative"
                  ></model-list-select>
                </div>
              </div>
            </div>
            <br>
             
              <download-excel
            class="btn btn-default pull-right"
            style="cursor:pointer;"
            :fields="json_fields"
            title="Liste des Immobilisations"
            :data="SuiviImmo"
            name="Liste des Immobilisations"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel>
             <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des Immobilisations</h5>
              
                 
            </div>
            <div class="table-responsive text-nowrap" v-if="familles.length && services.length ">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <!-- <th>Classe</th> 
                    <th>type equipement</th>  -->
                    <th>Famille</th>
                    <th>Quantité requise</th>
                    <th>Quantité afféctée</th>
                    <th>Quantité Restant</th>
                    <th>Prix Unitaire</th>
                    <th>Total Actuel</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="immobilisat in SuiviImmo" :key="immobilisat.id">

                    <!-- <template v-if="SuiviImmo.filter(immo => immo.exoBudgetaire.encours == 1)"> -->
                       
                    <!-- <td
                      @dblclick="afficherModalModifierImmobilisation(immobilisat.id)"
                    >{{immobilisat.BesoinImmobilisation.famille.code || 'Non renseigné'}}</td>   -->
                    <!-- <td
                      @dblclick="afficherModalModifierImmobilisation(immobilisat.id)"
                    >{{immobilisat.BesoinImmobilisation.famille.reletion__equipement.libelle || 'Non renseigné'}}</td> -->
                    <td
                      @dblclick="afficherModalModifierImmobilisation(immobilisat.id)"
                    >{{immobilisat.familleImmo.libelle || 'Non renseigné'}}</td> 
                    <td
                      @dblclick="afficherModalModifierImmobilisation(immobilisat.id)"
                    >{{immobilisat.qte_reel || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierImmobilisation(immobilisat.id)"
                    >{{immobilisat.qte_affecte || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierImmobilisation(immobilisat.id)"
                    >{{immobilisat.qte_actuel }}</td>
                    <td
                      @dblclick="afficherModalModifierImmobilisation(immobilisat.id)"
                    >{{formatageSomme(immobilisat.prixUnitaire) || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierImmobilisation(immobilisat.id)"
                    >{{formatageSomme(immobilisat.total_actuel) || 'Non renseigné'}}</td>
                    <!-- </template>
                    <template v-else>
                    <p style="text-align:center;font-size:20px;color:red;">Aucune Immobilisations</p> -->
                    <!-- </template> -->
                    <td>
                      <router-link
                        :to="{name : 'Detailimmobilisation', params: {id_immobilisation:immobilisat.id}}"
                        class="btn btn-default"
                        title="Detail Immobilisation"
                      >
                        <span>
                          <i class="icon icon-folder-open"></i>
                        </span>
                      </router-link>
                       <router-link
                        :to="{name : 'amortissement', params: {id:immobilisat.id}}"
                        class="btn btn-default"
                        title="Amortissement"
                      >
                        <span>
                          <i class="icon  icon-plus"></i>
                        </span>
                      </router-link>
                   
                      <button class="btn btn-danger" @click="supprimerImmobilisation(immobilisat.id)"  title="Supprimer ">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <!-- <div v-if="filtre_immobilisation.length"></div>
              <div v-else>
                <p style="text-align:center;font-size:20px;color:red;">Aucune Immobilisations</p>
              </div>-->
            </div>
            <div v-else>
              <p style="text-align:center;font-size:20px;color:red;">Pas d'Immobilisation</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <fab :actions="fabActions" @cache="afficherModalAjouterImmobilisation" main-icon="apps" bg-color="green"></fab>
     <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterImmobilisation()">Open</button>
   <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import { formatageSomme } from "../../../Repositories/Repository";
import { ModelListSelect } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";
import "vue-search-select/dist/VueSearchSelect.css";
export default {
  name: 'listeImmobilisationParUa',
   components: {
    ModelListSelect
  },
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
      json_fields: {
        TYPE_IMMOBILISATION: "type_immo",
        FAMILLE: "BesoinImmobilisation.famille.reletion__equipement.libelle",
        TYPE_UNITE_ADMINISTRATIVE: "typeUniteAdministrative.libelle",
        UNITE_ADMINISTRATIVE: "uniteAdminist.libelle",
        NUMERO_IDENTIFICATION: "identification",
        ETAT_IMMOBILISATION: "etat_immobilisation",
        DATE_ACQUISITION: "date_acquisition",
        DATE_MISE_SERVICE: "date_mise_service",
        NUMERO_FACTURE: "numero_facture",
        QUANTITE_REEL: "qte_reel",
        QUANTITE_AFFECTE: "qte_affecte",
        QUANTITE_ACTUEL: "qte_actuel",
        PRIX_UNITAIRE: "prixUnitaire",
        TOTAL_ACTUEL: "total_actuel",
        TOTAL_REEL: "total_reel",
        DUREE: "duree",
        NUMERO_CC: "numero_CC",
        MATRICULE_ACTEUR: "acteurDepense.matricule",
        ANNEE_BUDGETAIRE: "exoBudgetaire.annee",
        SERVICE: "serviceImmo.libelle",
        NATURE_BIEN: "nature_bien",
        NATURE_ENTRE: "nature_dentree",
        MONTANT_EVALUATION: "montant_evaluation",
        DATE_EVALUATION: "date_evaluation",
        MONTANT_CESSION: "montant_cession",
        DATE_CESSION: "date_cession",
        CAUSE_INACTIVITE: "cause_inactivite",
        TVA: "TVA_id",
        MONTANT_AMORTISSEMENT: "montant_amortissement_anterieur",
        DATE_AORTISSEMENT: "date_amortissement_anterieur"
      },
      formData: {},

      editImmobilisation: {},

      search: "",
      typeUniteAdmin_id: "",
      uniteadmin_id:"",
    };
  },

  created() {
    this.formData = this.SuiviImmo.find(
      immobilisat => immobilisat.id == this.$route.params.id
    );

    //console.log(this.$router);
  },
  computed: {
    ...mapGetters("SuiviImmobilisation", [
      "SuiviImmo",
      "familles",
      "services",
      // "besoinImmobilisations",
      "personBesoinImmo",

      // "tauxbesoinimmoUa",
      "SommeEquipementPrevue",
      "SommeEquipementActuel",
      
      "nombreTotalEquipement",
      "SommeEquipementRealise",
      "tauxEquipementPrevue",
      "tauxEquipementRealise",
      "tauxEquipementPrevue"
      
      // "getPersonnaliseImmobilisation",
     
      // "getPersonnaliseSuivImmo"
    ]),
     ...mapGetters("parametreGenerauxAdministratif", ["type_Unite_admins"]),
     ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires"]),
     ...mapGetters("uniteadministrative", ["uniteAdministratives"]),

     // nombre enregistrement par type unite administrative 

    // nombre enregistrement par  unite administrative
//  filtre_SuiviImmo() {
      
//       return this.SuiviImmo.filter(immo => immo.exoBudgetaire.encours == 1);
//     },

nbreEquipementPrevueParUa(){
  return uniteadmin_id => {
    if(uniteadmin_id !=""){
  
        
    return this.personBesoinImmo.filter(element => element.uniteAdminist.id == uniteadmin_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.historiqueqte), 0).toFixed(2); 
      
    }
    return 0
  }
},

nbreEquipementRealiseParUa(){
  return uniteadmin_id => {
    if(uniteadmin_id !=""){
  
        
    return this.SuiviImmo.filter(element => element.uniteAdminist.id == uniteadmin_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.qte_affecte), 0).toFixed(2); 
      
    }
    
  }
},

TauxEquipementRealiseParUniteAdministrative() {
 
      return uniteadmin_id => {
         if(uniteadmin_id !=""){
    const val = parseFloat((this.nbreEquipementRealiseParUa(uniteadmin_id))/this.nbreEquipementPrevueParUa(uniteadmin_id)*100 ).toFixed(2); 
    if (isNaN(val)) return null;
    return val;
    }
    
 }

    },






MontantbesoinRestantParUniteAdministrative(){
  return uniteadmin_id => {
    if(uniteadmin_id !=""){
    const montant = this.personBesoinImmo.filter(element => element.uniteAdminist.id == uniteadmin_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_total), 0).toFixed(2); 
      if(isNaN(montant)) return null
      return montant

    }
  }
}, 




// TauxEquipementPrevueParUniteAdministrative() {
 
//       return uniteadmin_id => {
//         if(uniteadmin_id !=""){
//     const val = parseFloat(100-this.TauxEquipementRealiseParUniteAdministrative(uniteadmin_id)).toFixed(2);
//     if (isNaN(val)) return null;
//   return val;
//     }
//   return 0
   
//  }

//     },
    // afficher le nom unite administrative
      nomUniteAdministrative(){
  return uniteadmin_id =>{
    if(uniteadmin_id !=""){
      var ObjetUA = this.uniteAdministratives.find(element => element.id == uniteadmin_id)
      return ObjetUA.libelle
    }
  }
    },
  
    //taux equipement par type unite administrative

nbreEquipementPrevueParTypeUa(){
  return typeUniteAdmin_id => {
    if(typeUniteAdmin_id !=""){
  
        
    return this.personBesoinImmo.filter(element => element.typeUniteAdmin.id == typeUniteAdmin_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.historiqueqte), 0).toFixed(2); 
      
    }
    return 0
  }
},

nbreEquipementRealiseParTypeUa(){
  return typeUniteAdmin_id => {
    if(typeUniteAdmin_id !=""){
  
        
    return this.SuiviImmo.filter(element => element.typeUniteAdministrative.id == typeUniteAdmin_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.qte_affecte), 0).toFixed(2); 
      
    }
    return 0
  }
},


// TauxEquipementRealiseParTypeUniteAdministrative() {
 
//       return typeUniteAdmin_id => {
//          if(typeUniteAdmin_id !=""){
//     const val = parseFloat((this.nbreEquipementRealiseParTypeUa(typeUniteAdmin_id))/this.nbreEquipementPrevueParTypeUa(typeUniteAdmin_id)*100).toFixed(2);
//   if (isNaN(val)) return null;
//   return val;
//          }
//          return 0
//  }

//     },

//  nomTypeUniteAdministrative(){
//   return typeUniteAdmin_id =>{
//     if(typeUniteAdmin_id !=""){
//       var ObjetUA = this.type_Unite_admins.find(element => element.id == typeUniteAdmin_id)
//       return ObjetUA.libelle
//     }
    
//   }
//     },

// TauxEquipementParUniteAdministrative() {
 
//       return uniteadmin_id => {
//     const val = parseFloat((1 / this.nbreUniteAdministrative(uniteadmin_id)) * 100 );
//   if (isNaN(val)) return null;
//   return val;
   
//  }

//     },

    

  },
  methods: {
    ...mapActions("SuiviImmobilisation", [
      "getAllImmobilisation",

      "supprimerImmobilisation"
    ]),

    //afiicher modal ajouter
    afficherModalAjouterImmobilisation() {
      this.$router.push({
        name: "AjouterImmobilisation"
      });
    },

    formatageSomme: formatageSomme,
    // fonction pour vider l'input ajouter
    ajouterImmobilisationLocal() {
      this.ajouterImmobilisation(this.formData);

      this.formData = {
        code: "",
        type_immo: "",
        designation: "",
        identification: "",
        etat_immobilisation: "",
        date_acquisition: "",
        date_mise_service: "",
        numero_facture: "",
        quantite: "",
        Prix_unitaire: "",
        famille_id: "",
        valeur_origine: "",
        duree: "",
        numero_CC: "",
        acteur_depense_id: "",
        exercice_budgetaire_id: "",
        service_id: "",
        nature_bien: "",
        nature_dentree: "",
        unite_id: "",
        TVA_id: "",
        montant_evaluation: "",
        date_evaluation: "",
        montant_cession: "",
        date_cession: "",
        cause_inactivite: "",
        montant_amortissement_anterieur: "",
        date_amortissement_anterieur: ""
      };
    },
    // afficher modal de modification
    afficherModalModifierImmobilisation(id) {
      this.$router.push({
        path: "/Modifier_immobilisation/" + id
      });
    },
    afficherFenetreAmortissement(id) {
      this.$router.push({
        path: "/amortissement/" + id
      });
    },
     afficherFenetreSimulationAmortissement(id) {
      this.$router.push({
        path: "/simulationAmortissement/" + id
      });
    },
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
    ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>
