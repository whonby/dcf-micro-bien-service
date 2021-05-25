
<template>
  <div>
    <br>
    
    <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                  <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Execice</th>
                 <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">N°demande</th>
                   <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Type Engagement </th>
                    <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Objet de la depense</th>
                    <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Tresor</th>
                    <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Don</th>
                    <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Emprunt</th>
                     <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Montant Engagé</th>
                     <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Decision CF</th>
                     <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff" colspan="2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  
                </tbody>
              </table>
  </div>
</template>
  
<script>
import { mapGetters,mapActions } from "vuex";
import { formatageSomme } from "@/Repositories/Repository";
// import { ModelListSelect } from "vue-search-select";
// import "vue-search-select/dist/VueSearchSelect.css";
export default {
  //  components: {
  //   ModelListSelect
  // },
  name:'',
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ],
      json_fields: {
        CODE: "code",
        LIBELLE: "libelle"
      },
      search: ""
    };
  },
props:["macheid"],
  computed: {
    ...mapGetters("uniteadministrative", ["uniteAdministratives"]),

 ...mapGetters("bienService", ["gettersDemandeEngagement","gettersnomPieceJustificative","modepaiements","gettersCotationPersonnaliser","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots","villes","communes","pays","modePassations", "procedurePassations","getterDossierCandidats","marches","gettersPersonnaliserRapportJugement",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","selectionner_candidats",
                "getActeEffetFinancierPersonnaliserContrat", "gettersProcedureTypeDepense","acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
 
recupererLibelleTypeDepense() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersProcedureTypeDepense.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle_depense
      }
      return 0
        }
      };
    },

 
     listeDemandeParUa() {
      return id => {
        if (id != null && id != "") {
           return this.gettersDemandeEngagement.filter(qtreel => qtreel.ua_id == id && qtreel.type_procedure_id==1 && qtreel.decision_cf==0 );

        }
      };
    },
 
 },
  methods: {
   ...mapActions("bienService", [
      "ajouterPieceJustificative",
      "modifierPieceJustificative",
      "supprimerPieceJustificative",
      "ajouterDemandeEngagement",
      "supprimerDemandeEngagement",
      "modifierDemandeEngagement"
     
    ]),
    ExporterEnExel(){
      this.$refs.excel.click()
    },
    formatageSomme:formatageSomme,
   
    afficherModalModifierTypeTexte(id) {

      this.$router.push({
        path: "/ModifierDemandeEngagement/" + id
      });
    },
  
  }
};
</script>

