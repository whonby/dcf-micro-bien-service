
<template>
  <div>
    <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                 <th style="font-size:14px;font-weight:bold">N°demande</th>
                   <!-- <th style="font-size:14px;font-weight:bold">Type de procedure</th> -->
                   <th style="font-size:14px;font-weight:bold">Procédures dérogatoires </th>
                    <th style="font-size:14px;font-weight:bold">Objet de la depense</th>
                     <th style="font-size:14px;font-weight:bold">Montant Engagé</th>
                     <th style="font-size:14px;font-weight:bold">Decision CF</th>
                     <th style="font-size:14px;font-weight:bold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(type) in listeDemandeParUa(macheid)" :key="type.id">
                    <td style="color:#000 !important;font-weight:bold !important" @dblclick="afficherModalModifierTypeTexte(type.id)">{{type.numero_demande || 'Non renseigné'}}</td>
                    <!-- <td style="color:#000 !important;font-weight:bold !important" @dblclick="afficherModalModifierTypeTexte(type.id)">{{type.type_procedure_id || 'Non renseigné'}}</td> -->
                     <td style="color:#000 !important;font-weight:bold !important" @dblclick="afficherModalModifierTypeTexte(type.id)">{{type.type_engagement_id || 'Non renseigné'}}</td>
                    <td style="color:#000 !important;font-weight:bold !important" @dblclick="afficherModalModifierTypeTexte(type.id)">{{type.objet_depense || 'Non renseigné'}}</td>
                    <td style="color:#000 !important;font-weight:bold !important" @dblclick="afficherModalModifierTypeTexte(type.id)">{{formatageSomme(parseFloat(type.total_general)) || 'Non renseigné'}}</td>
                  <td >
                        <button v-if="type.decision_cf == 8"  class="btn  btn-success" >                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="type.decision_cf == 2" class="btn  btn-warning" >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="type.decision_cf == 3" class="btn  btn-danger" >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                       <button v-else-if="type.decision_cf == 9"  class="btn  btn-success" >                        
                     
                      <span>Visé avec observation</span>
                      
                      </button>
                     <button v-else class="btn  btn-info" >                        
                     
                      
                       <span>Attente</span>
                      
                    
                      </button>
                    </td>
                   <td>
                      <button class="btn btn-danger" @click="supprimerDemandeEngagement(type.id)">
                        <span>
                          <i class="icon icon-trash"></i> Supprimer
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
  </div>
</template>
  
<script>
import { mapGetters,mapActions } from "vuex";
import { formatageSomme } from "@/Repositories/Repository";
export default {
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
    ...mapGetters("uniteadministrative", ["typeTextes"]),

 ...mapGetters("bienService", ["gettersDemandeEngagement","gettersnomPieceJustificative","modepaiements","gettersCotationPersonnaliser","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots","villes","communes","pays","modePassations", "procedurePassations","getterDossierCandidats","marches","gettersPersonnaliserRapportJugement",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","selectionner_candidats",
                "getActeEffetFinancierPersonnaliserContrat", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
 
     listeDemandeParUa() {
      return id => {
        if (id != null && id != "") {
           return this.gettersDemandeEngagement.filter(qtreel => qtreel.ua_id == id);

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

