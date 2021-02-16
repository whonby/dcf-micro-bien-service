
<template>
   <div>
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th style=" font-weight: bold;">N°demande</th>
                    <th>Type de procedure</th>
                    <!-- <th>Mode de paiement</th> -->
                    
                    <!-- <th>Nom fournisseur</th> -->
                    <th>Object de la depense</th>
                    <th>Montant Tresor</th>
                     <th>Montant Don</th>
                      <th>Montant Emprunt</th>
                      <th>Total</th>
                      <th>Fichier Joint</th>
                       <th>Nature de la Pièce</th>
                       <th>Voir Etape</th>
                       <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(type, index) in listeDesDmdParEngagementDirect(macheid)" :key="type.id">
                    <td style="color:red;font-weight: bold;"
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{type.numero_dmd_combine || 'Non renseigné'}}</td>
                     <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{type.type_procedure_id || 'Non renseigné'}}</td>
                     <!-- <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{type.mode_paiement_id || 'Non renseigné'}}</td> -->
                     <!-- <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{type.nom_autre || 'Non renseigné'}}</td> -->
                    <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{type.objet_depense || 'Non renseigné'}}</td>
                     <td style="text-align:center"
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{formatageSomme(parseFloat(type.montant_tresor)) || 0}}</td>
                    <td style="text-align:center"
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{formatageSomme(parseFloat(type.montant_don)) || 0}}</td>
                     <td style="text-align:center"
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{formatageSomme(parseFloat(type.montant_emprunt)) || 0}}</td>
                     <td style="text-align:center;font-weight: bold;"
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{formatageSomme(parseFloat(type.total_general)) || 0}}</td>
                    
                    
                    <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >
                    <a v-if="afficheFichierJoint(type.numero_demande)" :href="afficheFichierJoint(type.numero_demande)" class="btn btn-default" target="_blank">
                                <span class=""><i class="icon-book"></i>
                                </span>
                            </a>
                    
                    </td>
                     <td style="text-align:center"  >
                       

 <ul>
<!--         <li v-for="item in tachePrevuePasMarche(activites.id)" :key="'TACHE'+item.id">{{item.libelle}}</li>-->
         <span v-for="(type2) in ListePieceJustificative(type.numero_demande)" :key="type2.id" class="by label">{{type2.libelle}} ({{type2.reference}})</span>

     </ul>


                       </td>                     
                    <td>
                      <router-link :to="{ name: 'procedureEngaementDirect', params: { id: type.id }}"
                class="btn btn-Success " title="">
                  <span class="" ><i class="  icon-eye-open" style="font-weight: bold;"> Voir Procédure</i></span>
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
                   <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">Total</td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">{{formatageSomme(parseFloat(SommeDesDmdParEngagementDirect(macheid)))}}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
             
            </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import { formatageSomme } from "@/Repositories/Repository";
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
      json_fields: {
        CODE: "code",
        LIBELLE: "libelle"
      },
      formData: {
        code: "",
        libelle: ""
      },
      editTypeTexte: {
        code: "",
        libelle: ""
      },
      search: ""
    };
  },
 props:["macheid"],
  computed: {
    ...mapGetters("bienService", ["gettersDemandeEngagement","gettersnomPieceJustificative","modepaiements","gettersCotationPersonnaliser","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots","villes","communes","pays","modePassations", "procedurePassations","getterDossierCandidats","marches","gettersPersonnaliserRapportJugement",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","selectionner_candidats",
                "getActeEffetFinancierPersonnaliserContrat", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
   
 ...mapGetters("personnelUA", ["FichierJoinDmdEngagement","all_acteur_depense","personnaliseActeurDepense","acteur_depenses","personnaFonction"]),
    
  afficheFichierJoint() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.FichierJoinDmdEngagement.find(qtreel => qtreel.numero_demande_engagement == id);

      if (qtereel) {
        return qtereel.fichier;
      }
      return ""
        }
      };
    },

ListePieceJustificative() {
      return id => {
        if (id != null && id != "") {
           return this.gettersnomPieceJustificative.filter(qtreel => qtreel.numero_demande_engagement == id);

        }
      };
    },
  

   listeDesDmdParEngagementDirect() {
      return id => {
        if (id != null && id != "") {
           return this.gettersDemandeEngagement.filter(qtreel => qtreel.ua_id == id && qtreel.type_procedure_id == "Engagement direct");

        }
      };
    },
      SommeDesDmdParEngagementDirect() {
      return id => {
        if (id != null && id != "") {
           return this.gettersDemandeEngagement.filter(qtreel => qtreel.ua_id == id && qtreel.type_procedure_id == "Engagement direct").reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.	total_general), 0).toFixed(0);

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
      "supprimerDemandeEngagement"
     
    ]),
    formatageSomme:formatageSomme
  }
};
</script>
