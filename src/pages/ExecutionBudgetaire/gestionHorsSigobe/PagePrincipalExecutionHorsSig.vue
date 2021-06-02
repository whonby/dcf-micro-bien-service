
<template>
  <div>
    
    <div  align="left" style="cursor:pointer;">
    <button class="btn btn-danger" @click.prevent="afficherModalListePersonnel">Page Précédente</button>
    
        </div> 
        <br>
         <br>
        <div class="widget-title" style="color:#fff!important;font-size:15px"> <a href="#" data-toggle="collapse"> <span class="icon"><i class="icon-home" ></i></span>
            <h5 style="text-align: center;font-size:25px">CONTROLE D'EXECUTION : {{idUniteAdministrative(marcheid)}}</h5>
            </a> </div>
  
        <div class="widget-box collapsible">
         
           
          
          <div >
              
        <div>
       <div class="widget-title" style="background-color: #fff;color:#000!important;font-size:15px;"> 
            <h5 style="background-color: #fff!important;color:#000!important;font-size:15px;">ORDRE DE PAIEMENT </h5>
            
             
    
       <!-- <button   class="btn  btn-info" style="font-size:15px; margin-left:15%" v-on:click="clickBoutonEnAttente()"> <span  style="font-size:20px;"  >En Attente ({{NombreDemandeEnAttenteEd(marcheid)}})</span></button>
         <button   class="btn  btn-warning" style="font-size:15px; margin-left:7%" v-on:click="clickBoutonDiffere()"> <span  style="font-size:20px;"  >Différé ({{NombreDemandeDiffereEd(marcheid)}})</span></button>
       <button   class="btn  btn-danger" style="font-size:15px; margin-left:7%" v-on:click="clickBoutonRejete()"> <span   style="font-size:20px;" >Réjeté ({{NombreDemandeRejeteEd(marcheid)}})</span></button>
      <button   class="btn  btn-success" style="font-size:15px; margin-left:7%" v-on:click="clickBoutonVisé()"> <span  style="font-size:20px;"  >Visé ({{NombreDemandeViseEd(marcheid)}})</span></button>
      <button   class="btn  btn-success" style="font-size:15px; margin-left:7%" v-on:click="clickBoutonViséObservation()"> <span  style="font-size:20px;"  >Visé avec Observation ({{NombreDemandeViseObservationEd(marcheid)}})</span></button> 
     -->
     <button   class="btn  btn-info" style="font-size:15px; margin-left:15%" v-on:click="clickBoutonEnAttente()"> <span  style="font-size:20px;"  >En Attente </span></button>
         <button   class="btn  btn-warning" style="font-size:15px; margin-left:7%" v-on:click="clickBoutonDiffere()"> <span  style="font-size:20px;"  >Différé</span></button>
       <button   class="btn  btn-danger" style="font-size:15px; margin-left:7%" v-on:click="clickBoutonRejete()"> <span   style="font-size:20px;" >Réjeté </span></button>
      <button   class="btn  btn-success" style="font-size:15px; margin-left:7%" v-on:click="clickBoutonVisé()"> <span  style="font-size:20px;"  >Visé </span></button>
      <button   class="btn  btn-success" style="font-size:15px; margin-left:7%" v-on:click="clickBoutonViséObservation()"> <span  style="font-size:20px;"  >Visé avec Observation</span></button> 
    
            </div>
              <br>
            <br>
             <div>
<div class="widget-box collapsible">
    <div class="widget-title" style="background-color: #fff;color:#000!important;font-size:15px; margin-left:80px"> <a href="#PROVISOIRE" data-toggle="collapse"> <span class="icon"><i class=" icon-chevron-down" style="color:#000!important;"></i></span>
            <h5 style="color:#fff!important;font-size:15px;background-color: #537ea1;">OP PROVISOIRE ({{NombreDemandeEnAttenteOpProvisoire(marcheid)}}) :</h5>             <h5 style="color:#000!important;font-size:15px;margin-left:10%">EN ATTENTE ({{NombreOpProvisoireEnAttente(marcheid)}})</h5>            <h5 style="color:#000!important;font-size:15px;margin-left:10%">DIFFERE ({{NombreOpProvisoireDifere(marcheid)}})</h5>            <h5 style="color:#000!important;font-size:15px;margin-left:10%">REJETE ({{NombreOpProvisoireRejete(marcheid)}})</h5>  <h5 style="color:#000!important;font-size:15px;margin-left:10%">VISE({{NombreOpProvisoireVise(marcheid)}})</h5> <h5 style="color:#000!important;font-size:15px;margin-left:10%">VISE OB ({{NombreOpProvisoireViseO(marcheid)}})</h5>
            </a> 
            </div>
            <br>
            <br>
            <div class="collapse" id="PROVISOIRE" style="font-size:15px; margin-left:110px" v-if="editMandat.test==0"><TableauOpProvisoire :macheid="marcheid"></TableauOpProvisoire></div>
              <div class="collapse" id="PROVISOIRE" style="font-size:15px; margin-left:110px" v-if="editMandat.test==2"><TableauOpProvisoireDiffere :macheid="marcheid"></TableauOpProvisoireDiffere></div>
              <div class="collapse" id="PROVISOIRE" style="font-size:15px; margin-left:110px" v-if="editMandat.test==3"><TableauOpProvisoireRejete :macheid="marcheid"></TableauOpProvisoireRejete></div>
               <div class="collapse" id="PROVISOIRE" style="font-size:15px; margin-left:110px" v-if="editMandat.test==4"><TableauOpProvisoireVise :macheid="marcheid"></TableauOpProvisoireVise></div>
                <div class="collapse" id="PROVISOIRE" style="font-size:15px; margin-left:110px" v-if="editMandat.test==5"><TableauOpProvisoireViseO :macheid="marcheid"></TableauOpProvisoireViseO></div>
           
            <!-- DEBUT LIQUIDATION -->
            <div class="widget-title" style="background-color: #fff;color:#000!important;font-size:15px; margin-left:80px"> <a href="#ANNULATION" data-toggle="collapse"> <span class="icon"><i class=" icon-chevron-down" style="color:#000!important;"></i></span>
            <h5 style="color:#fff!important;font-size:15px;background-color: #537ea1;">OP ANNULATION ({{NombreDemandeEnAttenteOpAnnulation(marcheid)}}) :</h5> <h5 style="color:#000!important;font-size:15px;margin-left:10%">EN ATTENTE ({{NombreOpAnnulationEnAttente(marcheid)}})</h5>            <h5 style="color:#000!important;font-size:15px;margin-left:10%">DIFFERE ({{NombreOpAnnulationDifere(marcheid)}})</h5>            <h5 style="color:#000!important;font-size:15px;margin-left:10%">REJETE ({{NombreOpAnnulationRejete(marcheid)}})</h5>  <h5 style="color:#000!important;font-size:15px;margin-left:10%">VISE({{NombreOpAnnulationVise(marcheid)}})</h5> <h5 style="color:#000!important;font-size:15px;margin-left:10%">VISE OB ({{NombreOpAnnulationViseO(marcheid)}})</h5>
            </a> 
            </div>
            <br>
            <br>
               <!-- <div class="collapse" id="ANNULATION" style="font-size:15px; margin-left:110px" ><TableauOpAnnulation :macheid="marcheid"></TableauOpAnnulation></div> -->
             <!-- <div class="collapse" id="LIQUIDATION" style="font-size:15px; margin-left:110px"><TableauOpDefinitive :macheid="marcheid"></TableauOpDefinitive></div> -->
              <div class="collapse" id="ANNULATION" style="font-size:15px; margin-left:110px" v-if="editMandat.test==0"><TableauOpAnnulation :macheid="marcheid"></TableauOpAnnulation></div>
              <div class="collapse" id="ANNULATION" style="font-size:15px; margin-left:110px" v-if="editMandat.test==2"><TableauOpAnnulationDiffere :macheid="marcheid"></TableauOpAnnulationDiffere></div>
              <div class="collapse" id="ANNULATION" style="font-size:15px; margin-left:110px" v-if="editMandat.test==3"><TableauOpAnnulationRejete :macheid="marcheid"></TableauOpAnnulationRejete></div>
               <div class="collapse" id="ANNULATION" style="font-size:15px; margin-left:110px" v-if="editMandat.test==4"><TableauOpAnnulationVise :macheid="marcheid"></TableauOpAnnulationVise></div>
                <div class="collapse" id="ANNULATION" style="font-size:15px; margin-left:110px" v-if="editMandat.test==5"><TableauOpAnnulationViseO :macheid="marcheid"></TableauOpAnnulationViseO></div>
            <br>
            
             <!-- DEBUT MANDAT -->
             
            <div class="widget-title" style="background-color: #fff;color:#000!important;font-size:15px; margin-left:80px"> <a href="#DEFINITIF" data-toggle="collapse"> <span class="icon"><i class=" icon-chevron-down" style="color:#000!important;"></i></span>
            <h5 style="color:#fff!important;font-size:15px;background-color: #537ea1;">OP DEFINITIF ({{NombreDemandeEnAttenteOpDefinitif(marcheid)}}):</h5><h5 style="color:#000!important;font-size:15px;margin-left:12%">EN ATTENTE ({{NombreOpDefinitifEnAttente(marcheid)}})</h5>            <h5 style="color:#000!important;font-size:15px;margin-left:10%">DIFFERE ({{NombreOpDefinitifDifere(marcheid)}})</h5>            <h5 style="color:#000!important;font-size:15px;margin-left:10%">REJETE ({{NombreOpDefinitifRejete(marcheid)}})</h5>  <h5 style="color:#000!important;font-size:15px;margin-left:10%">VISE({{NombreOpDefinitifVise(marcheid)}})</h5> <h5 style="color:#000!important;font-size:15px;margin-left:10%">VISE OB ({{NombreOpDefinitifViseO(marcheid)}})</h5>
            </a> 
           
            
            </div>
            <br>
          
             <div class="collapse" id="DEFINITIF" style="font-size:15px; margin-left:110px" v-if="editMandat.test==0"><TableauOpDefinitive :macheid="marcheid"></TableauOpDefinitive></div>
              <div class="collapse" id="DEFINITIF" style="font-size:15px; margin-left:110px" v-if="editMandat.test==2"><TableauOpDefinitiveDiffere :macheid="marcheid"></TableauOpDefinitiveDiffere></div>
              <div class="collapse" id="DEFINITIF" style="font-size:15px; margin-left:110px" v-if="editMandat.test==3"><TableauOpDefinitiveRejete :macheid="marcheid"></TableauOpDefinitiveRejete></div>
               <div class="collapse" id="DEFINITIF" style="font-size:15px; margin-left:110px" v-if="editMandat.test==4"><TableauOpDefinitiveVise :macheid="marcheid"></TableauOpDefinitiveVise></div>
                <div class="collapse" id="DEFINITIF" style="font-size:15px; margin-left:110px" v-if="editMandat.test==5"><TableauOpDefinitiveViseO :macheid="marcheid"></TableauOpDefinitiveViseO></div>
    <br>
              <!-- <div class="collapse" id="DEFINITIF" style="font-size:15px; margin-left:110px"><TableauOpDefinitive :macheid="marcheid"></TableauOpDefinitive></div> -->
             
    
         <div class="widget-title" style="background-color: #fff;color:#000!important;font-size:15px; margin-left:80px"> <a href="#OPDIRECT" data-toggle="collapse"> <span class="icon"><i class=" icon-chevron-down" style="color:#000!important;"></i></span>
            <h5 style="color:#fff!important;font-size:15px;background-color: #537ea1;">OP DIRECT ({{NombreDemandeEnAttenteOpDirect(marcheid)}}) :</h5> <h5 style="color:#000!important;font-size:15px;margin-left:12%">EN ATTENTE ({{NombreOpDirectEnAttente(marcheid)}})</h5>            <h5 style="color:#000!important;font-size:15px;margin-left:10%">DIFFERE ({{NombreOpDirectDifere(marcheid)}})</h5>            <h5 style="color:#000!important;font-size:15px;margin-left:10%">REJETE ({{NombreOpDirectRejete(marcheid)}})</h5>  <h5 style="color:#000!important;font-size:15px;margin-left:10%">VISE({{NombreOpDirectVise(marcheid)}})</h5> <h5 style="color:#000!important;font-size:15px;margin-left:10%">VISE OB ({{NombreOpDirectViseO(marcheid)}})</h5>
            </a> 
            </div>
            <br>
           <br>
              <div class="collapse" id="OPDIRECT" style="font-size:15px; margin-left:110px" v-if="editMandat.test==0"><TableauOpDirect :macheid="marcheid"></TableauOpDirect></div>
              <div class="collapse" id="OPDIRECT" style="font-size:15px; margin-left:110px" v-if="editMandat.test==2"><TableauOpDirectDiffere :macheid="marcheid"></TableauOpDirectDiffere></div>
              <div class="collapse" id="OPDIRECT" style="font-size:15px; margin-left:110px" v-if="editMandat.test==3"><TableauOpDirectRejete :macheid="marcheid"></TableauOpDirectRejete></div>
               <div class="collapse" id="OPDIRECT" style="font-size:15px; margin-left:110px" v-if="editMandat.test==4"><TableauOpDirectVise :macheid="marcheid"></TableauOpDirectVise></div>
                <div class="collapse" id="OPDIRECT" style="font-size:15px; margin-left:110px" v-if="editMandat.test==5"><TableauOpDirectViseO :macheid="marcheid"></TableauOpDirectViseO></div>
    
    </div>

             </div>
             
         
    
             </div>
          </div>
          
         
         
        </div>
    

  </div>
</template>
  
<script>
    // Demande engagement direct


// liquidation Engagement Directe,




import TableauOpProvisoire from "./DossierOpProvisoire/TableauOpProvisoire"
import TableauOpProvisoireVise from "./DossierOpProvisoire/TableauOpProvisoireVise"
import TableauOpProvisoireDiffere from "./DossierOpProvisoire/TableauOpProvisoireDiffere"
import TableauOpProvisoireRejete from "./DossierOpProvisoire/TableauOpProvisoireRejete"
import TableauOpProvisoireViseO from "./DossierOpProvisoire/TableauOpProvisoireViseO"




import TableauOpDirect from "./DossierOpDirect/TableauOpDirect"
import TableauOpDirectVise from "./DossierOpDirect/TableauOpDirectVise"
import TableauOpDirectDiffere from "./DossierOpDirect/TableauOpDirectDiffere"
import TableauOpDirectRejete from "./DossierOpDirect/TableauOpDirectRejete"
import TableauOpDirectViseO from "./DossierOpDirect/TableauOpDirectViseO"


import TableauOpAnnulation from "./DossierOpAnnulation/TableauOpAnnulation"
import TableauOpAnnulationVise from "./DossierOpAnnulation/TableauOpAnnulationVise"
import TableauOpAnnulationDiffere from "./DossierOpAnnulation/TableauOpAnnulationDiffere"
import TableauOpAnnulationRejete from "./DossierOpAnnulation/TableauOpAnnulationRejete"
import TableauOpAnnulationViseO from "./DossierOpAnnulation/TableauOpAnnulationViseO"




import TableauOpDefinitive from "./DossierOpDefinitif/TableauOpDefinitive"
import TableauOpDefinitiveVise from "./DossierOpDefinitif/TableauOpDefinitiveVise"
import TableauOpDefinitiveDiffere from "./DossierOpDefinitif/TableauOpDefinitiveDiffere"
import TableauOpDefinitiveRejete from "./DossierOpDefinitif/TableauOpDefinitiveRejete"
import TableauOpDefinitiveViseO from "./DossierOpDefinitif/TableauOpDefinitiveViseO"

import { mapGetters, mapActions } from "vuex";


export default {
  components:{
    // Demande engagement direct
   
   
  TableauOpProvisoire,
TableauOpProvisoireVise,
TableauOpProvisoireDiffere,
TableauOpProvisoireRejete,
TableauOpProvisoireViseO,



  TableauOpDirect,
TableauOpDirectVise,
TableauOpDirectDiffere,
TableauOpDirectRejete,
TableauOpDirectViseO,


TableauOpAnnulation,
TableauOpAnnulationVise,
TableauOpAnnulationDiffere,
TableauOpAnnulationRejete,
TableauOpAnnulationViseO,


TableauOpDefinitive,
TableauOpDefinitiveVise,
TableauOpDefinitiveDiffere,
TableauOpDefinitiveRejete,
TableauOpDefinitiveViseO,
    
   
  
 
  
   
  },
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ],
      
      search: "",
      editMandat:{
        test:0,
        test1:0
      }
    };
  },
created() {
            this.marcheid=this.$route.params.id

         
},
  computed: {
   ...mapGetters("bienService", ["gettersgestionOrdrePaiement","gettersBonCommande","gettersDossierLiquidation","gettersDemandeEngagement","gettersnomPieceJustificative","modepaiements","gettersCotationPersonnaliser","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots","villes","communes","pays","modePassations", "procedurePassations","getterDossierCandidats","marches","gettersPersonnaliserRapportJugement",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","selectionner_candidats",
                "getActeEffetFinancierPersonnaliserContrat", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
    ...mapGetters("uniteadministrative", [
      "directions",
      "servicesua",
      "fonctionsua",
      "getPersonnaliseBudgetGeneral",
      "montantBudgetGeneral",
      "uniteZones",
      "getPersonnaliseBudgetGeneralParTransfert",
      "uniteAdministratives",
      "jointureUaChapitreSection",
      "budgetEclate",
      "GroupeUaReceptrice",
      "transferts",
      "groupeUniteAdministrativeBudgetEclate",
      "groupeUaSousBudget"
      // "chapitres",
      // "sections"
    ]),
NombreOpDefinitifEnAttente() {
      return id => {
        if (id != null && id != "") {
           return this.gettersgestionOrdrePaiement.filter(qtreel1 =>qtreel1.unite_administrative_id == id && qtreel1.diff_op == null && qtreel1.decision_cf==0 &&  qtreel1.type_ordre_paiement==4 ).length;

        }
      };
    },
    NombreOpDefinitifDifere() {
      return id => {
        if (id != null && id != "") {
           return this.gettersgestionOrdrePaiement.filter(qtreel1 =>qtreel1.unite_administrative_id == id && qtreel1.diff_op == null && qtreel1.decision_cf==2 &&  qtreel1.type_ordre_paiement==4 ).length;

        }
      };
    },
     NombreOpDefinitifRejete() {
      return id => {
        if (id != null && id != "") {
           return this.gettersgestionOrdrePaiement.filter(qtreel1 =>qtreel1.unite_administrative_id == id && qtreel1.diff_op == null && qtreel1.decision_cf==3 &&  qtreel1.type_ordre_paiement==4 ).length;

        }
      };
    },
     NombreOpDefinitifVise() {
      return id => {
        if (id != null && id != "") {
           return this.gettersgestionOrdrePaiement.filter(qtreel1 =>qtreel1.unite_administrative_id == id && qtreel1.diff_op == null && qtreel1.decision_cf==8 &&  qtreel1.type_ordre_paiement==4 ).length;

        }
      };
    },
     NombreOpDefinitifViseO() {
      return id => {
        if (id != null && id != "") {
           return this.gettersgestionOrdrePaiement.filter(qtreel1 =>qtreel1.unite_administrative_id == id && qtreel1.diff_op == null && qtreel1.decision_cf==9 &&  qtreel1.type_ordre_paiement==4 ).length;

        }
      };
    },


NombreOpDirectEnAttente() {
      return id => {
        if (id != null && id != "") {
           return this.gettersgestionOrdrePaiement.filter(qtreel1 =>qtreel1.unite_administrative_id == id && qtreel1.diff_op == null && qtreel1.decision_cf==0 &&  qtreel1.type_ordre_paiement==1 ).length;

        }
      };
    },
    NombreOpDirectDifere() {
      return id => {
        if (id != null && id != "") {
           return this.gettersgestionOrdrePaiement.filter(qtreel1 =>qtreel1.unite_administrative_id == id && qtreel1.diff_op == null && qtreel1.decision_cf==2 &&  qtreel1.type_ordre_paiement==1 ).length;

        }
      };
    },
     NombreOpDirectRejete() {
      return id => {
        if (id != null && id != "") {
           return this.gettersgestionOrdrePaiement.filter(qtreel1 =>qtreel1.unite_administrative_id == id && qtreel1.diff_op == null && qtreel1.decision_cf==3 &&  qtreel1.type_ordre_paiement==1 ).length;

        }
      };
    },
     NombreOpDirectVise() {
      return id => {
        if (id != null && id != "") {
           return this.gettersgestionOrdrePaiement.filter(qtreel1 =>qtreel1.unite_administrative_id == id && qtreel1.diff_op == null && qtreel1.decision_cf==8 &&  qtreel1.type_ordre_paiement==1 ).length;

        }
      };
    },
     NombreOpDirectViseO() {
      return id => {
        if (id != null && id != "") {
           return this.gettersgestionOrdrePaiement.filter(qtreel1 =>qtreel1.unite_administrative_id == id && qtreel1.diff_op == null && qtreel1.decision_cf==9 &&  qtreel1.type_ordre_paiement==1 ).length;

        }
      };
    },






 NombreOpAnnulationEnAttente() {
      return id => {
        if (id != null && id != "") {
           return this.gettersgestionOrdrePaiement.filter(qtreel1 =>qtreel1.unite_administrative_id == id && qtreel1.diff_op == null && qtreel1.decision_cf==0 &&  qtreel1.type_ordre_paiement==3 ).length;

        }
      };
    },
    NombreOpAnnulationDifere() {
      return id => {
        if (id != null && id != "") {
           return this.gettersgestionOrdrePaiement.filter(qtreel1 =>qtreel1.unite_administrative_id == id && qtreel1.diff_op == null && qtreel1.decision_cf==2 &&  qtreel1.type_ordre_paiement==3 ).length;

        }
      };
    },
     NombreOpAnnulationRejete() {
      return id => {
        if (id != null && id != "") {
           return this.gettersgestionOrdrePaiement.filter(qtreel1 =>qtreel1.unite_administrative_id == id && qtreel1.diff_op == null && qtreel1.decision_cf==3 &&  qtreel1.type_ordre_paiement==3 ).length;

        }
      };
    },
     NombreOpAnnulationVise() {
      return id => {
        if (id != null && id != "") {
           return this.gettersgestionOrdrePaiement.filter(qtreel1 =>qtreel1.unite_administrative_id == id && qtreel1.diff_op == null && qtreel1.decision_cf==8 &&  qtreel1.type_ordre_paiement==3 ).length;

        }
      };
    },
     NombreOpAnnulationViseO() {
      return id => {
        if (id != null && id != "") {
           return this.gettersgestionOrdrePaiement.filter(qtreel1 =>qtreel1.unite_administrative_id == id && qtreel1.diff_op == null && qtreel1.decision_cf==9 &&  qtreel1.type_ordre_paiement==3 ).length;

        }
      };
    },
















     idUniteAdministrative() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },
    NombreOpProvisoireEnAttente() {
      return id => {
        if (id != null && id != "") {
           return this.gettersgestionOrdrePaiement.filter(qtreel1 =>qtreel1.unite_administrative_id == id && qtreel1.diff_op == null && qtreel1.decision_cf==0 &&  qtreel1.type_ordre_paiement==2 ).length;

        }
      };
    },
    NombreOpProvisoireDifere() {
      return id => {
        if (id != null && id != "") {
           return this.gettersgestionOrdrePaiement.filter(qtreel1 =>qtreel1.unite_administrative_id == id && qtreel1.diff_op == null && qtreel1.decision_cf==2 &&  qtreel1.type_ordre_paiement==2 ).length;

        }
      };
    },
     NombreOpProvisoireRejete() {
      return id => {
        if (id != null && id != "") {
           return this.gettersgestionOrdrePaiement.filter(qtreel1 =>qtreel1.unite_administrative_id == id && qtreel1.diff_op == null && qtreel1.decision_cf==3 &&  qtreel1.type_ordre_paiement==2 ).length;

        }
      };
    },
     NombreOpProvisoireVise() {
      return id => {
        if (id != null && id != "") {
           return this.gettersgestionOrdrePaiement.filter(qtreel1 =>qtreel1.unite_administrative_id == id && qtreel1.diff_op == null && qtreel1.decision_cf==8 &&  qtreel1.type_ordre_paiement==2 ).length;

        }
      };
    },
     NombreOpProvisoireViseO() {
      return id => {
        if (id != null && id != "") {
           return this.gettersgestionOrdrePaiement.filter(qtreel1 =>qtreel1.unite_administrative_id == id && qtreel1.diff_op == null && qtreel1.decision_cf==9 &&  qtreel1.type_ordre_paiement==2 ).length;

        }
      };
    },
      NombreDemandeEnAttenteOpProvisoire() {
      return id => {
        if (id != null && id != "") {
    //        return this.gettersgestionOrdrePaiement.filter(qtreel1.diff_op == null  && qtreel1.unite_administrative_id == id  && qtreel1.decision_cf==0 ).length;
           return this.gettersgestionOrdrePaiement.filter(qtreel => qtreel.unite_administrative_id == id && qtreel.diff_op == null &&  qtreel.type_ordre_paiement==2 ).length;

        }
      };
    },

        NombreDemandeEnAttenteOpAnnulation() {
      return id => {
        if (id != null && id != "") {
    //        return this.gettersgestionOrdrePaiement.filter(qtreel1.diff_op == null  && qtreel1.unite_administrative_id == id  && qtreel1.decision_cf==0 ).length;
           return this.gettersgestionOrdrePaiement.filter(qtreel => qtreel.unite_administrative_id == id && qtreel.diff_op == null &&  qtreel.type_ordre_paiement==3 ).length;

        }
      };
    },
        NombreDemandeEnAttenteOpDirect() {
      return id => {
        if (id != null && id != "") {
    //        return this.gettersgestionOrdrePaiement.filter(qtreel1.diff_op == null  && qtreel1.unite_administrative_id == id  && qtreel1.decision_cf==0 ).length;
           return this.gettersgestionOrdrePaiement.filter(qtreel => qtreel.unite_administrative_id == id && qtreel.diff_op == null &&  qtreel.type_ordre_paiement==1 ).length;

        }
      };
    },
        NombreDemandeEnAttenteOpDefinitif() {
      return id => {
        if (id != null && id != "") {
    //        return this.gettersgestionOrdrePaiement.filter(qtreel1.diff_op == null  && qtreel1.unite_administrative_id == id  && qtreel1.decision_cf==0 ).length;
           return this.gettersgestionOrdrePaiement.filter(qtreel => qtreel.unite_administrative_id == id && qtreel.diff_op == null &&  qtreel.type_ordre_paiement==4 ).length;

        }
      };
    },
     NombreDemandeEnAttenteEd() {
      return id => {
        if (id != null && id != "") {
    //        return this.gettersgestionOrdrePaiement.filter(qtreel1.diff_op == null  && qtreel1.unite_administrative_id == id  && qtreel1.decision_cf==0 ).length;
           return this.gettersgestionOrdrePaiement.filter(qtreel => qtreel.unite_administrative_id == id && qtreel.diff_op == null &&  qtreel.decision_cf==0 ).length;

        }
      };
    },
         NombreDemandeDiffereEd() {
      return id => {
        if (id != null && id != "") {
    //        return this.gettersgestionOrdrePaiement.filter(qtreel1.diff_op == null  && qtreel1.unite_administrative_id == id  && qtreel1.decision_cf==0 ).length;
           return this.gettersgestionOrdrePaiement.filter(qtreel => qtreel.unite_administrative_id == id && qtreel.diff_op == null &&  qtreel.decision_cf==2 ).length;

        }
      };
    },
 NombreDemandeRejeteEd() {
      return id => {
        if (id != null && id != "") {
    //        return this.gettersgestionOrdrePaiement.filter(qtreel1.diff_op == null  && qtreel1.unite_administrative_id == id  && qtreel1.decision_cf==0 ).length;
           return this.gettersgestionOrdrePaiement.filter(qtreel => qtreel.unite_administrative_id == id && qtreel.diff_op == null &&  qtreel.decision_cf==3 ).length;

        }
      };
    },
   NombreDemandeViseEd() {
      return id => {
        if (id != null && id != "") {
    //        return this.gettersgestionOrdrePaiement.filter(qtreel1.diff_op == null  && qtreel1.unite_administrative_id == id  && qtreel1.decision_cf==0 ).length;
           return this.gettersgestionOrdrePaiement.filter(qtreel => qtreel.unite_administrative_id == id && qtreel.diff_op == null &&  qtreel.decision_cf==8 ).length;

        }
      };
    },
    NombreDemandeViseObservationEd() {
      return id => {
        if (id != null && id != "") {
    //        return this.gettersgestionOrdrePaiement.filter(qtreel1.diff_op == null  && qtreel1.unite_administrative_id == id  && qtreel1.decision_cf==0 ).length;
           return this.gettersgestionOrdrePaiement.filter(qtreel => qtreel.unite_administrative_id == id && qtreel.diff_op == null &&  qtreel.decision_cf==9).length;

        }
      };
    },

AfficheTypeProcedure() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.type_procedure_id;
      }
      return 0
        }
      };
    },
    idUa() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.ua_id;
      }
      return 0
        }
      };
    },

NombreDemandeEnAttenteBonCmd() {
      return id => {
        if (id != null && id != "") {
           return this.gettersDemandeEngagement.filter(qtreel => qtreel.ua_id == id && qtreel.type_procedure_id==7 && qtreel.decision_cf==0 ).length;

        }
      };
    },
    NombreDemandeDiffereBonCmd() {
      return id => {
        if (id != null && id != "") {
           return this.gettersDemandeEngagement.filter(qtreel => qtreel.ua_id == id && qtreel.type_procedure_id==7 && qtreel.decision_cf==2 ).length;

        }
      };
    },
    NombreDemandeRejeteBonCmd() {
      return id => {
        if (id != null && id != "") {
           return this.gettersDemandeEngagement.filter(qtreel => qtreel.ua_id == id && qtreel.type_procedure_id==7 && qtreel.decision_cf==3 ).length;

        }
      };
    },
    NombreDemandeViseBonCmd() {
      return id => {
        if (id != null && id != "") {
           return this.gettersDemandeEngagement.filter(qtreel => qtreel.ua_id == id && qtreel.type_procedure_id==7 && qtreel.decision_cf==8).length;

        }
      };
    },
    NombreDemandeViseObservationBonCmd() {
      return id => {
        if (id != null && id != "") {
           return this.gettersDemandeEngagement.filter(qtreel => qtreel.ua_id == id && qtreel.type_procedure_id==7 && qtreel.decision_cf==9 ).length;

        }
      };
    },
  },
  methods: {
    ...mapActions("uniteadministrative", [
      "getAllNoteService",
      "ajouterNoteService",
      "modifierNoteService",
      "supprimerNoteService"
    ]),
  clickBoutonEnAttente: function() {
            this.editMandat.test = 0;
        },
        clickBoutonDiffere: function() {
            this.editMandat.test = 2;
        },
        clickBoutonRejete: function() {
            this.editMandat.test = 3;
        },
        clickBoutonVisé: function() {
            this.editMandat.test = 4;
        },
          clickBoutonViséObservation: function() {
            this.editMandat.test = 5;
        },

      
 afficherModalListePersonnel(){
                window.history.back()
            },
  }
};
</script>

