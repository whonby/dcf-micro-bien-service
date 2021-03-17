
<template>
  <div>
     <div  align="left" style="cursor:pointer;">
    <button class="btn btn-danger" @click.prevent="afficherModalListeExecution">Page Précédente</button>
    
        </div> 
    <div id="modificationObservation" class="modal hide tailleModal">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modification Observation de Agent Cf{{editObservation.id}}</h3>
      </div>
      <div class="modal-body">
       <table class="table table-bordered table-striped">
        <tr>
          <td>
              <div class="control-group">
            <label class="control-label">Numero Ordre Paiement</label>
            <div class="controls">
              <input type="text" v-model="detailOp.numero_ordre_paiement"   class="span6"  />
            </div>
          </div>
          </td>
          <td>
              <div class="control-group">
            <label class="control-label">Date Observation</label>
            <div class="controls">
              <input type="date" v-model="editObservation.date_observation_agent_cf" class="span6"  />
            </div>
          </div>
          </td>
        </tr>
         <tr>
           <td colspan="2">
            
             <div class="control-group">
            <label class="control-label">Observation</label>
            <div class="controls">
               <textarea name="" id="" cols="30" rows="10" v-model="editObservation.observation_agent_cf" class="span12"></textarea>
            </div>
          </div>
           </td>
         </tr>
         <tr>
          <td colspan="2">
              <div class="control-group">
            <label class="control-label">Nom et Prénoms Agent cf</label>
            <div class="controls">
              <input type="text" v-model="editObservation.nom_agent_id" class="span12"  />
            </div>
          </div>
          </td>
         </tr>
       </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modificationObservationAgentCf()"
          class="btn btn-primary"
          href="#"
          
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
     <div id="exampleModal12" class="modal hide tailleModal">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Observation de Agent Cf</h3>
      </div>
      <div class="modal-body">
       <table class="table table-bordered table-striped">
        <tr>
          <td>
              <div class="control-group">
            <label class="control-label">Numero Ordre Paiement</label>
            <div class="controls">
              <input type="text" v-model="detailOp.numero_ordre_paiement"   class="span6"  />
            </div>
          </div>
          </td>
          <td>
              <div class="control-group">
            <label class="control-label">Date Observation</label>
            <div class="controls">
              <input type="date" v-model="formData.date_observation_agent_cf" class="span6"  />
            </div>
          </div>
          </td>
        </tr>
         <tr>
           <td colspan="2">
            
             <div class="control-group">
            <label class="control-label">Observation</label>
            <div class="controls">
               <textarea name="" id="" cols="30" rows="10" v-model="formData.observation_agent_cf" class="span12"></textarea>
            </div>
          </div>
           </td>
         </tr>
         <tr>
          <td colspan="2">
              <div class="control-group">
            <label class="control-label">Nom et Prénoms Agent cf</label>
            <div class="controls">
              <input type="text" v-model="formData.nom_agent_id" class="span12"  />
            </div>
          </div>
          </td>
         </tr>
       </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterUniteAdministrativeLocal()"
          class="btn btn-primary"
          href="#"
          
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
      <div style="font-size:30px;text-align:center;text-decoration:underline;font-weight:bold;">
          <p >SERVICE REALITE FAIT</p>
        </div>
            
            <br>
             <table class="table table-bordered table-striped">
        
             <td style="width:60%">

       
          </td>
            <td style="width:0%;font-weight:bolder;color:#000">
<div  align="right" style="cursor:pointer;">
    <button class="btn btn-success" @click.prevent="afficherModalAjouterTitre" style="font-weight:bolder;color:#fff;font-size:20px"><i class="icon icon-plus"> AJOUTER SERVICE REALITE FAIT</i></button>
    
        </div> 
       
          </td>
           <!-- <td style="width:0px">
<div  align="right" style="cursor:pointer;">
    <button class="btn btn-danger"  style="font-weight:bolder;color:#fff;font-size:20px"><i class="icon icon-plus"> VOIR FICHE SERVICE REALITE FAIT</i></button>
    
        </div> 
       
          </td>  -->
          <td >
                                              <router-link :to="{ name: 'ficheServiceRealiteFait', params: { id: detailOp.id }}"
                class="btn btn-danger" title="Editer Fiche de controle">
                  <span class="" style="font-weight:bolder;color:#fff;font-size:20px"><i class=" icon-print"></i>  VOIR FICHE SERVICE REALITE FAIT</span>
                   </router-link>
                    </td>
          <td >
                                              <router-link :to="{ name: 'FicheAnnexe', params: { id: detailOp.id }}"
                class="btn btn-info" title="Editer Fiche de controle">
                  <span class="" style="font-weight:bolder;color:#fff;font-size:20px"><i class=" icon-print"></i>  VOIR FICHE ANNEXE</span>
                   </router-link>
                    </td>
            </table>
   <table class="table table-bordered table-striped" id="Nature_section">
                <thead>
                  <tr>
                    <th style="width:15%">NUMERO ORDRE PAIEMENT</th>
                    
                    <th style="width:10%">DATE OBSERVATION</th>
                   <th style="width:60%">OBSERVATION</th>
                   <th style="width:10%">NOM ET PRENOMS AGENT CF</th>
                    <th style="width:5%">Action</th>
                  </tr>
                </thead>
           
                <tbody>
                  <tr class="odd gradeX" v-for="(type) in listeServiceRealiteFait(detailOp.id)" :key="type.id">
                    <td
                      @dblclick="afficherModalModifierUniteAdministrative(type.id)"
                    >{{afficheNumeroOP(type.op_definitif_id) || 'Non renseigné'}}</td>
                     <td
                      @dblclick="afficherModalModifierUniteAdministrative(type.id)"
                    >{{type.date_observation_agent_cf || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierUniteAdministrative(type.id)"
                    >{{type.observation_agent_cf || 'Non renseigné'}}</td>
 <td
                      @dblclick="afficherModalModifierUniteAdministrative(type.id)"
                    >{{type.nom_agent_id || 'Non renseigné'}}</td>
                    <td>
                      <button class="btn btn-danger" @click="supprimerServiceRealiteFaitOp(type.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
     
              <notifications  />
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import jsPDF from 'jspdf'
import 'jspdf-autotable'
// import {partition} from "../../Repositories/Repository"
// import { ModelListSelect } from "vue-search-select";
// import "vue-search-select/dist/VueSearchSelect.css";
// import {admin,dcf,cf,noDCfNoAdmin} from "../../Repositories/Auth"
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
        page:0,
        size:10,
        active_el:0,
      formData: {
        code: "",
        libelle: "",
        section_id: "",
        localisationgeo_id: "",
        type_ua_id: "",
        date_creation: "",
       
        servicegest_id:"",
        nature_section_id:""
      },
      editObservation:{},
      editUniteAdministrative: {
        code: "",
        libelle: "",
        section_id: "",
        localisationgeo_id: "",
        type_ua_id: "",
        date_creation: "",
        servicegest_id:"",
        nature_section_id:""
      },
      json_fields: {
        TYPE_UNIT_ADMINISTRATIVE: "typeua.libelle",
        SECTION: "secti.nom_section",
        SERVICE_GESTIONNAIRE: "servivegest.libelle",
        LOCALISATION_GEO: "localgeo.libelle",
        CODE: "code",
        LIBELLE: "libelle",
        DATE_CREATION: "date_creation"
      },
      search: ""
    };
  },
  
created() {
            this.marcheid=this.$route.params.id
   this.detailOp = this.gettersgestionOrdrePaiement.find(
       idmarche => idmarche.id == this.$route.params.id
         )
  
},
    computed: {
    ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetEclate",
      
      // "chapitres",
      // "sections"
    ]),
    ...mapGetters("parametreGenerauxAdministratif", [
      "chapitres",
      "sections",
      "type_Unite_admins",
      "services_gestionnaires",
      "structures_administratives",
      "localisations_geographiques",
      "afficheServiceGestionnaireNiveau4",
      "afficheLocalisationGeoNiveau5",
      "natures_sections",
      "structures_geographiques"
    ]),
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "plans_fonctionnels"
     
    ]),
     
      ...mapGetters("Utilisateurs", ["getterAffectionServiceCF","getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
    ...mapGetters("bienService", ["gettersServiceRealiteFaitOp","gettersgestionOrdrePaiement","getFacturePersonnaliser","getterActeEffetFinanciers","modepaiements",'mandats','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
                'acteEffetFinanciers','montantPlanification','montantContratualisation','afficheContratualisation','affichePlanifier',
                'nombremarchesExecute',"avenants","getMandatPersonnaliserVise",
                'AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
                "printMarcheNonAttribue","procedurePassations","typeTypeProcedures",
                "montantComtratualisation","text_juridiques", "gettersOuverturePersonnaliser",
                "typeActeEffetFinanciers","personnaliseGetterMarcheBailleur","getterMandate",
                "getActeEffetFinancierPersonnaliserContrat","getterCojos","getterDemandeAno","getterAnoDMPBailleur"]),

            ...mapGetters('personnelUA', ['acteur_depenses',"paiementPersonnel"]),

            ...mapGetters('uniteadministrative',[
                "plans_programmes",
                "uniteAdministratives",
                "afficheNiveauAction",
                "afficheNiveauActivite",
                "derniereNivoPlanBudgetaire",
                "getPersonnaliseBudgetGeneralParPersonnel",
                "budgetEclate"


            ]),

            ...mapGetters('parametreGenerauxAdministratif',[

                "sections",
                "type_Unite_admins",
                "plans_programmes",
                "natures_sections",
                "grandes_natures",
                "afficheNiveauPlanProg",
                "exercices_budgetaires",
                "localisations_geographiques"
            ]),
...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements']),
            ...mapGetters('parametreGenerauxFonctionnelle',[

                "plans_fonctionnels",
                "afficheNiveauPlanFonctionnel"
            ]),

            ...mapGetters('parametreGenerauxActivite',[ 'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

            ...mapGetters('parametreGenerauxBudgetaire',["plans_budgetaires","derniereNivoPlanBudgetaire"]),
...mapGetters('gestionMarche', ['entreprises',"secteur_activites",'banques','comptes','getCompte',]),
  ...mapGetters('parametreGenerauxFonctionnelle', ['structuresDecision',
  'plans_Decision']),
  
  listeServiceRealiteFait() {
      return id => {
        if (id != null && id != "") {
           return this.gettersServiceRealiteFaitOp.filter(qtreel => qtreel.op_definitif_id == id);
        }
      };
    },
    afficheNumeroOP() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_ordre_paiement
      }
      return 0
        }
      };
    },
  },
  methods: {
    ...mapActions("bienService", [
      "ajouterServiceRealiteFaitOp",
      "modifierServiceRealiteFaitOp",
      "supprimerServiceRealiteFaitOp",
      
    ]),
       afficherModalListeExecution(){
                window.history.back();
            },
 afficherModalAjouterTitre() {
      this.$("#exampleModal12").modal({
        backdrop: "static",
        keyboard: false
      });
    },
genererEnPdf(){
  var doc = new jsPDF('landscape')
  // doc.autoTable({ html: this.natures_sections })
   doc.setFontSize(8)
  doc.text(115,10,"LISTE DES UNITES ADMINISTRATIVES")
  doc.autoTable({ html: '#Nature_section'}),
  
doc.save('UniteAdministrative.pdf')
return 0
},

     
      getDataPaginate(index){
          this.active_el = index;
          this.page=index
      },
      precedent(){
          this.active_el--
          this.page --
      },
      suivant(){
          this.active_el++
          this.page ++
      },
    afficherModalAjouterUniteAdministrative() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterUniteAdministrativeLocal() {
      
      var nouvelObjet = {
        
        op_definitif_id: this.detailOp.id,
         observation_agent_cf: this.formData.observation_agent_cf,
         date_observation_agent_cf: this.formData.date_observation_agent_cf,
         nom_agent_id: this.formData.nom_agent_id
       
      };
      this.ajouterServiceRealiteFaitOp(nouvelObjet);
this.$("#exampleModal12").modal('hide');
     this.formData={
observation_agent_cf:"",
date_observation_agent_cf:""
     }
    },
    // fonction pour vider l'input modifier
    modificationObservationAgentCf() {
      
      var nouvelObjet = {
        id:this.editObservation.id,
        op_definitif_id: this.detailOp.id,
         observation_agent_cf: this.editObservation.observation_agent_cf,
         date_observation_agent_cf: this.editObservation.date_observation_agent_cf,
         nom_agent_id: this.editObservation.nom_agent_id
       
      };
      this.modifierServiceRealiteFaitOp(nouvelObjet);
this.$("#modificationObservation").modal('hide');
     
    },
    // afficher modal de modification
    afficherModalModifierUniteAdministrative(id) {
      this.$("#modificationObservation").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editObservation = this.gettersServiceRealiteFaitOp.find(items=>items.id==id);
    },
    alert() {
      console.log("ok");
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
<style>

.tailleModal{
  width: 53%;
  margin: 0 -28%;
}

</style>