
<template>
  <div>
    <br>
    
        
                
                  <!-- <div class="controls span6">
                    <model-list-select
                  style="background-color: #fff; border: 2px solid #000"
                  class="wide"
                  :list="uniteAdministratives"
                  v-model="uniteAdministrative_id"
                  option-value="id"
                  option-text="libelle"
                  placeholder="TOUTES LES UNITES ADMINISTRATIVES"
                >
                </model-list-select>
                  </div> -->
                
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
                  <tr class="odd gradeX" v-for="(type) in listeDemandeParUa(macheid)" :key="type.id">
                    <td style="color:#000 !important;font-weight:bold !important" @dblclick="afficherModalModifierTypeTexte(type.id)">{{type.exercice || 'Non renseigné'}}</td>
                    <td style="color:#000 !important;font-weight:bold !important" @dblclick="afficherModalModifierTypeTexte(type.id)">{{type.numero_demande || 'Non renseigné'}}</td>
                     <td style="color:#000 !important;font-weight:bold !important" @dblclick="afficherModalModifierTypeTexte(type.id)">{{recupererLibelleTypeDepense(type.type_engagement_id) || 'Non renseigné'}}</td>
                    <td style="color:#000 !important;font-weight:bold !important" @dblclick="afficherModalModifierTypeTexte(type.id)">{{type.objet_depense || 'Non renseigné'}}</td>
                     <td style="color:#000 !important;font-weight:bold !important;text-align:center" @dblclick="afficherModalModifierTypeTexte(type.id)">{{formatageSomme(parseFloat(type.montant_tresor)) || 'Non renseigné'}}</td>
                      <td style="color:#000 !important;font-weight:bold !important;text-align:center" @dblclick="afficherModalModifierTypeTexte(type.id)">{{formatageSomme(parseFloat(type.montant_don)) || 'Non renseigné'}}</td>
                       <td style="color:#000 !important;font-weight:bold !important;text-align:center" @dblclick="afficherModalModifierTypeTexte(type.id)">{{formatageSomme(parseFloat(type.montant_emprunt ))|| 'Non renseigné'}}</td>
                    <td style="color:#000 !important;font-weight:bold !important;text-align:center" @dblclick="afficherModalModifierTypeTexte(type.id)">{{formatageSomme(parseFloat(type.total_general)) || 'Non renseigné'}}</td>
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
                      <router-link :to="{ name: 'VoirModaliteExecution', params: { id: type }}"
                class="btn btn-Success " title="">
                  <span class=""><i class="icon-eye-open" style="font-weight: bold;"> Detail</i></span>
                   </router-link> 
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

