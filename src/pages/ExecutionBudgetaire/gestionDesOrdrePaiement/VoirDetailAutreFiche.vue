recupBanque1
<template>
  <div>
    <div align="left" style="cursor: pointer">
      <button
        class="btn btn-danger"
        @click.prevent="afficherModalListeExecution"
      >
        Page Précédente
      </button>
    </div>
    <div id="modificationObservation" class="modal hide tailleModal">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modification Observation de l'Agent Cf</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
            <td>
              <div class="control-group">
                <label class="control-label">Numero Ordre Paiement</label>
                <div class="controls">
                  <input
                    type="text"
                    v-model="detailOp.numero_ordre_paiement"
                    class="span6"
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Date Observation</label>
                <div class="controls">
                  <input
                    type="date"
                    v-model="editObservation.date_observation_agent_cf"
                    class="span6"
                  />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <div class="control-group">
                <label class="control-label">Observation</label>
                <div class="controls">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    v-model="editObservation.observation_agent_cf"
                    class="span12"
                  ></textarea>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <div class="control-group">
                <label class="control-label">Nom et Prénoms Agent cf</label>
                <div class="controls">
                  <input
                    type="text"
                    v-model="editObservation.nom_agent_id"
                    class="span12"
                  />
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
          >Modifier</a
        >
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
                  <input
                    type="text"
                    v-model="detailOp.numero_ordre_paiement"
                    class="span6"
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Date Observation</label>
                <div class="controls">
                  <input
                    type="date"
                    v-model="formData.date_observation_agent_cf"
                    class="span6"
                  />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <div class="control-group">
                <label class="control-label">Observation</label>
                <div class="controls">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    v-model="formData.observation_agent_cf"
                    class="span12"
                  ></textarea>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <div class="control-group">
                <label class="control-label">Nom et Prénoms Agent cf</label>
                <div class="controls">
                  <input
                    type="text"
                    v-model="formData.nom_agent_id"
                    class="span12"
                  />
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
          >Valider</a
        >
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <br />

    <!-- debut des op direct -->
    <div v-if="detailOp.type_ordre_paiement == 1">
      <p
        style="
          font-size: 13px;
          text-align: center;
          text-decoration: underline;
          font-weight: bold;
        "
      >
        DETAIL ORDRE DE PAIEMENT DIRECT
      </p>

      <table class="table table-bordered table-striped" id="Nature_section">
        <thead>
          <tr>
            <th>Exercice</th>

            <th>Type op</th>

            <th>Numéro op</th>
            <th>Section</th>

            <th>Programme</th>

            <th>Ua</th>
            <th>Activite</th>
            <th>ligne Economique</th>
            <th>Entreprise</th>
            <th>Compte Fournisseur</th>
            <th>Banque</th>

            <th>Numero du Marche</th>
          </tr>
        </thead>

        <tbody>
          <tr class="odd gradeX">
            <td>{{ detailOp.exercice || "Non renseigné" }}</td>

            <td v-if="detailOp.type_ordre_paiement == 1">OP Direct</td>

            <td style="color:red">{{ detailOp.numero_ordre_paiement || "Non renseigné" }}</td>

            <td>{{ AfficheSectionLibelle(detailOp.section_id) }}</td>

            <td>{{ AfficheProgrammeLibelle(detailOp.programme_id) }}</td>

            <td>{{ AfficheUaLibelle(detailOp.unite_administrative_id) }}</td>

            <td>{{ AfficheActiviteLibelle(detailOp.activite_id) }}</td>

            <td>
              {{ AfficheLigneEconoLibelle(detailOp.ligne_economique_id) }}
            </td>

            <td>{{ AfficheEntrepriseLibelle(detailOp.entreprise_id) }}</td>

            <td>{{ recupCompte2(recupCompte1)}}</td>

            <td>{{ recupBanquee2(recupBanquee1)}}</td>

            <td>{{ AfficheNumeroMarcheLibelle(detailOp.marche_id) }}</td>
          </tr>
        </tbody>
      </table>
      <table class="table table-bordered table-striped" id="Nature_section">
        <thead>
          <tr>
            
            <th>Type financement</th>
            <th>Source Financement</th>
            <th>Montant Op</th>
            <th>Mode Paiement</th>
            <th>Nom et prenoms cf</th>
            <th>famille motif</th>
            <th>Motif</th>

            <th>Decision cf</th>
            <th>Date decision</th>
          </tr>
        </thead>

        <tbody>
          
          <td> {{ AfficheTypeFinancementLibelle(detailOp.type_financement_id) }} </td>
          <td> {{ AfficheSourceFinancementLibelle(detailOp.source_financement_id) }} </td>
          <td> {{ formatageSomme(parseFloat(detailOp.montant_ordre_paiement)) }} </td>
          <td> {{ AfficheModePaiementLibelle(detailOp.mode_paiement_id) }} </td>
          <td>{{recupererNomDuControleurF(recupererIdUser(recupererIdServiceCF(detailOp.unite_administrative_id)))}}</td>
           <td> {{ AfficheFamilleMotifLibelle(detailOp.famille_motif) }} </td>
           <td> {{ AfficheMotifLibelle(detailOp.motif) }} </td>

           <td v-if="detailOp.decision_cf==8"> Visé </td>
           <td v-if="detailOp.decision_cf==9"> Visé avec Observation </td>
           <td v-if="detailOp.decision_cf==2"> Différé</td>
           <td v-if="detailOp.decision_cf==3"> Rejété </td>
           <td v-if="detailOp.decision_cf==0"> Attente </td>

           <td> {{formaterDate(detailOp.date_decision_cf) }} </td>
        </tbody>
      </table>
      <table class="table table-bordered table-striped" id="Nature_section">
        <thead>
          <tr>
            <th>Action</th>
            <th>Sous Budget</th>
            <th>Autres Motif</th>
            <th>Observation</th>
            <th>Autres Depense</th>
            <th>Compte fournisseur</th>

            <th>Adresse</th>
            
          </tr>
        </thead>


        <tbody>
          <td>{{ AfficheActionLibelle(detailOp.action_id) }}</td>
          <td>{{ AfficheSousBudgetLibelle(detailOp.sous_budget_id) }}</td>
          <td>{{ detailOp.autre_motif}}</td>
          <td>{{ detailOp.observation}}</td>
          <td>{{ detailOp.odjet_autre_depense}}</td>
          <td>{{ detailOp.compte_autre_depense}}</td>
          <td>{{ detailOp.adresse}}</td>
        </tbody>
      </table>
    </div>
    <!-- fin des op direct -->


<div v-if="detailOp.type_ordre_paiement==2 ||detailOp.type_ordre_paiement==3 || detailOp.type_ordre_paiement == 4">
    <p
      style="
        font-size: 13px;
        text-align: center;
        text-decoration: underline;
        font-weight: bold;
      "
    >
      DETAIL ORDRE DE PAIEMENT PROVISOIRE
    </p>

    <table class="table table-bordered table-striped" id="Nature_section">
      <thead>
        <tr>
          <th>Exercice</th>

          <th>Type op</th>

          <th>Numéro op</th>
          <th>Section</th>

          <th>Programme</th>

          <th>Ua</th>
          <th>Activite</th>
          <th>ligne Economique</th>
          <th>Entreprise</th>
            <th>Compte Fournisseur</th>
            <th>Banque</th>

          <th>Numero du Marche</th>
        </tr>
      </thead>

      <tbody>
         <tr class="odd gradeX">

            <td>{{ detailOp.exercice || "Non renseigné" }}</td>
             <td v-if="detailOp.type_ordre_paiement == 2 || detailOp.type_ordre_paiement == 3 ||
              detailOp.type_ordre_paiement == 4">OP Provisoire</td>
               
               

<template v-if="detailOp.id_op_provisoire == null">
 <td  style="color:red">
{{ detailOp.numero_ordre_paiement || "Non renseigné" }}
               </td>
              
             </template>
              <template v-else>
               
              <td style="color:red">
{{ afficheNumeroOP(afficheNumeroOPAnnulation(detailOp.numero_ordre_paiement)) || "Non renseigné" }}
              </td>
             </template>



            <td>{{ AfficheSectionLibelle(detailOp.section_id) }}</td>

            <td>{{ AfficheProgrammeLibelle(detailOp.programme_id) }}</td>

            <td>{{ AfficheUaLibelle(detailOp.unite_administrative_id) }}</td>

            <td>{{ AfficheActiviteLibelle(detailOp.activite_id) }}</td>

            <td>
              {{ AfficheLigneEconoLibelle(detailOp.ligne_economique_id) }}
            </td>

            <td>{{ AfficheEntrepriseLibelle(detailOp.entreprise_id) }}</td>

            <td>{{ recupCompte2(recupCompte1)}}</td>

            <td>{{ recupBanquee2(recupBanque1)}}</td>

            <td>{{ AfficheNumeroMarcheLibelle(detailOp.marche_id) }}</td>
         </tr>
      </tbody>
    </table>
    <table class="table table-bordered table-striped" id="Nature_section">
      <thead>
        <tr>
         
          <th>type financement</th>
          <th>Source Financement</th>
          <th>Montant Op</th>
          <th>Mode Paiement</th>
          <th>Nom et prenoms cf</th>
          <th>famille motif</th>
          <th>Motif</th>

          <th>Decision cf</th>
          <th>Date decision</th>
        </tr>
      </thead>

      <tbody>
        
          <td> {{ AfficheTypeFinancementLibelle(detailOp.type_financement_id) }} </td>
          <td> {{ AfficheSourceFinancementLibelle(detailOp.source_financement_id) }} </td>
          <td> {{ formatageSomme(parseFloat(detailOp.montant_ordre_paiement)) }} </td>
          <td> {{ AfficheModePaiementLibelle(detailOp.mode_paiement_id) }} </td>
           <td>{{recupererNomDuControleurF(recupererIdUser(recupererIdServiceCF(detailOp.unite_administrative_id)))}}</td>
           <td> {{ AfficheFamilleMotifLibelle(detailOp.famille_motif) }} </td>
           <td> {{ AfficheMotifLibelle(detailOp.motif) }} </td>
           <td v-if="detailOp.decision_cf==8"> Visé </td>
           <td v-if="detailOp.decision_cf==9"> Visé avec Observation </td>
           <td v-if="detailOp.decision_cf==2"> Différé</td>
           <td v-if="detailOp.decision_cf==3"> Rejété </td>
           <td v-if="detailOp.decision_cf==0"> Attente </td>
           <td> {{formaterDate(detailOp.date_decision_cf) }} </td>
      </tbody>
    </table>
    <table class="table table-bordered table-striped" id="Nature_section">
      <thead>
        <tr>
          <th>Action</th>
          <th>Sous Budget</th>
          <th>Autres Motif</th>
          <th>Observation</th>
          <th>Autres Depense</th>
          <th>Compte fournisseur</th>

          <th>Adresse</th>
          <!-- <th style="width:60%">Date decision</th>
                   <th style="width:10%">Action</th>
                    <th style="width:5%">Sous Budget</th>
                     <th style="width:10%">Autres Motif</th>
                   <th style="width:60%">Observation</th>
                   <th style="width:10%">Autres Depense</th>
                    <th style="width:5%">Compte fournisseur</th> -->
        </tr>
      </thead>

      <tbody>
         <td>{{ AfficheActionLibelle(detailOp.action_id) }}</td>
          <td>{{ AfficheSousBudgetLibelle(detailOp.sous_budget_id) }}</td>
          <td>{{ detailOp.autre_motif}}</td>
          <td>{{ detailOp.observation}}</td>
          <td>{{ detailOp.odjet_autre_depense}}</td>
          <td>{{ detailOp.compte_autre_depense}}</td>
          <td>{{ detailOp.adresse}}</td>
      </tbody>
    </table>

    </div>

    <div v-if="detailOp.type_ordre_paiement==3 || detailOp.type_ordre_paiement == 4">
      <p  style="
        font-size: 13px;
        text-align: center;
        text-decoration: underline;
        font-weight: bold;
      ">DETAIL ORDRE DE PAIEMENT ANNULATION</p>
  
    <table class="table table-bordered table-striped" id="Nature_section">
      <thead>
        <tr>
          <th>Exercice</th>
          <th>Type op</th>
          <th>Numéro op</th>
         <th>Nom et prenoms cf</th>
          <th>famille motif</th>
          <th>Motif</th>
<th>Autres Motif</th>
          <th>Decision cf</th>
          <th>Date decision</th>
        </tr>
      </thead>

      <tbody>
         <tr class="odd gradeX">

            <td>{{ detailOp.exercice || "Non renseigné" }}</td>
             <td v-if="detailOp.type_ordre_paiement == 3 || detailOp.type_ordre_paiement == 4">OP Annulation</td>
             <template v-if="detailOp.id_op_Annulation==0">
 <td  style="color:red">
{{ detailOp.numero_ordre_paiement || "Non renseigné" }}
               </td>
              
             </template>
              <template v-else>
               
              <td style="color:red">
{{ afficheNumeroOP(detailOp.id_op_Annulation) || "Non renseigné" }}
              </td>
             </template>
            
              
 <td>{{recupererNomDuControleurF(recupererIdUser(recupererIdServiceCF(detailOp.unite_administrative_id)))}}</td>
           <td> {{ AfficheFamilleMotifLibelle(detailOp.famille_motif) }} </td>
           <td> {{ AfficheMotifLibelle(detailOp.motif) }} </td>
           <td>{{ detailOp.autre_motif}}</td>
           <td v-if="detailOp.decision_cf==8"> Visé </td>
           <td v-if="detailOp.decision_cf==9"> Visé avec Observation </td>
           <td v-if="detailOp.decision_cf==2"> Différé</td>
           <td v-if="detailOp.decision_cf==3"> Rejété </td>
           <td v-if="detailOp.decision_cf==0"> Attente </td>
           <td> {{ formaterDate(detailOp.date_decision_cf) }} </td>
         </tr>
      </tbody>
    </table>
   
    </div>
   

<div v-if="detailOp.type_ordre_paiement==4">
      <p  style="
        font-size: 13px;
        text-align: center;
        text-decoration: underline;
        font-weight: bold;
      ">DETAIL ORDRE DE PAIEMENT DEFINITIF</p>
    
    <table class="table table-bordered table-striped" id="Nature_section">
      <thead>
        <tr>
          <th>Exercice</th>

          <th>Type op</th>

          <th>Numéro op</th>
           <th>Nom et prenoms cf</th>
          <th>famille motif</th>
          <th>Motif</th>
          <th>Autres Motif</th>
          <th>Decision cf</th>
          <th>Date decision</th>
        </tr>
      </thead>

      <tbody>

         <tr class="odd gradeX">

            <td>{{ detailOp.exercice || "Non renseigné" }}</td>
             <td v-if="detailOp.type_ordre_paiement == 4">OP Definitf</td>
              <td style="color:red">{{ detailOp.numero_ordre_paiement || "Non renseigné" }}</td>
 <td>{{recupererNomDuControleurF(recupererIdUser(recupererIdServiceCF(detailOp.unite_administrative_id)))}}</td>
           <td> {{ AfficheFamilleMotifLibelle(detailOp.famille_motif) }} </td>
           <td> {{ AfficheMotifLibelle(detailOp.motif) }} </td>
           <td>{{ detailOp.autre_motif}}</td>
           <td v-if="detailOp.decision_cf==8"> Visé </td>
           <td v-if="detailOp.decision_cf==9"> Visé avec Observation </td>
           <td v-if="detailOp.decision_cf==2"> Différé</td>
           <td v-if="detailOp.decision_cf==3"> Rejété </td>
           <td v-if="detailOp.decision_cf==0"> Attente </td>
           <td> {{ formaterDate(detailOp.date_decision_cf) }} </td>
           
         </tr>
      </tbody>
    </table>
   
</div>


<div v-if="detailOp.type_ordre_paiement == 1 && detailOp.diff_op_personnel == null  || detailOp.type_ordre_paiement == 4 && detailOp.diff_op_personnel == null">
      <p style="
        font-size: 13px;
        text-align: center;
        text-decoration: underline;
        font-weight: bold;
      ">SERVICE REALITE FAIT</p>
    <br />
    <table class="table table-bordered table-striped">
      <td style="width: 60%"></td>
      <td style="width: 0%; font-weight: bolder; color: #000">
        <div align="right" style="cursor: pointer">
          <button
            class="btn btn-success"
            @click.prevent="afficherModalAjouterTitre"
            style="font-weight: bolder; color: #fff"
          >
            <i class="icon icon-plus"> AJOUTER SERVICE REALITE FAIT</i>
          </button>
        </div>
      </td>
      <!-- <td style="width:0px">
<div  align="right" style="cursor:pointer;">
    <button class="btn btn-danger"  style="font-weight:bolder;color:#fff;font-size:20px"><i class="icon icon-plus"> VOIR FICHE SERVICE REALITE FAIT</i></button>
    
        </div> 
       
          </td>  -->
      <td>
        <router-link
          :to="{ name: 'ficheServiceRealiteFait', params: { id: detailOp.id } }"
          class="btn btn-danger"
          title="Editer Fiche de controle"
        >
          <span
            class=""
            style="font-weight: bolder; color: #fff"
            ><i class="icon-print"></i> IMPRIMER FICHE RSF && FICHE ANNEXE RSF</span
          >
        </router-link>
      </td>
      <!-- <td>
        <router-link
          :to="{ name: 'FicheAnnexe', params: { id: detailOp.id } }"
          class="btn btn-info"
          title="Editer Fiche de controle"
        >
          <span
            class=""
            style="font-weight: bolder; color: #fff"
            ><i class="icon-print"></i> VOIR FICHE ANNEXE</span
          >
        </router-link>
      </td> -->
    </table>
    <table class="table table-bordered table-striped" id="Nature_section">
      <thead>
        <tr>
          <th>NUMERO ORDRE PAIEMENT</th>

          <th style="width: 10%">DATE OBSERVATION</th>
          <th style="width: 60%">OBSERVATION</th>
          <th style="width: 10%">NOM ET PRENOMS AGENT CF</th>
          <th style="width: 5%">Action</th>
        </tr>
      </thead>

      <tbody>
        <tr
          class="odd gradeX"
          v-for="type in listeServiceRealiteFait(detailOp.id)"
          :key="type.id"
        >
          <td @dblclick="afficherModalModifierUniteAdministrative(type.id)">
            {{ afficheNumeroOP(type.op_definitif_id) || "Non renseigné" }}
          </td>
          <td @dblclick="afficherModalModifierUniteAdministrative(type.id)">
            {{ type.date_observation_agent_cf || "Non renseigné" }}
          </td>
          <td @dblclick="afficherModalModifierUniteAdministrative(type.id)">
            {{ type.observation_agent_cf || "Non renseigné" }}
          </td>
          <td @dblclick="afficherModalModifierUniteAdministrative(type.id)">
            {{ type.nom_agent_id || "Non renseigné" }}
          </td>
          <td>
            <button
              class="btn btn-danger"
              @click="supprimerServiceRealiteFaitOp(type.id)"
            >
              <span>
                <i class="icon icon-trash"></i>
              </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    </div>
<!-- <div v-if="detailOp.type_ordre_paiement == 1 && detailOp.diff_op_personnel == null  || detailOp.type_ordre_paiement == 4 && detailOp.diff_op_personnel == null"> -->
<div v-if="detailOp.type_ordre_paiement == 1 && detailOp.diff_op_personnel == null  || detailOp.type_ordre_paiement == 4 && detailOp.diff_op_personnel == null || detailOp.type_ordre_paiement == 2 && detailOp.diff_op_personnel == null">

   <table class="table table-bordered table-striped">
      <td style="width: 90%"></td>
      
     
      <td>
        <router-link
          :to="{ name: 'AjouterDecompteActuelle', params: { id: detailOp.id } }"
          class="btn btn-success"
          title="Editer Fiche de controle"
        >
          <span
            class=""
            style="font-weight: bolder; color: #fff"
            >
            <i class="icon icon-plus"> AJOUTER DECOMPTE</i>
          </span >
        </router-link>
      </td>
    
    </table>
    <div class="row-fluid">
      <div class="span12">
        <div class="widget-box">
          <div class="widget-title">
            <ul class="nav nav-tabs">
              <li class="active">
                <a data-toggle="tab" href="#tab2078"
                  >Decomptes Année en cours
                  <span class="badge badge"></span></a
                >
              </li>

             <li>
                <a data-toggle="tab" href="#tab100">
                  Decomptes Anterieur
                  <span class="badge badge-important">
                    </span
                  ></a
                >
              </li>
              
            </ul>


          </div>
          <div class="widget-content tab-content">
<div id="tab2078" class="tab-pane active">
   <listeDecompte
                      :macheid="detailOp.marche_id"
                    ></listeDecompte>

 </div>
<div id="tab100" class="tab-pane">
   <GroupeParAnneeDecompte
                      :macheid="detailOp.marche_id"
                    ></GroupeParAnneeDecompte>

 </div>
</div>
          </div>
        

  </div>
  </div>
  </div>
    <notifications />



















































    
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import jsPDF from "jspdf";
import "jspdf-autotable";
 import {formatageSomme} from "@/Repositories/Repository"

 //import HistoriqueDecompteFacture from "@/pages/Hors_sib/dossierDecompte/HistoriqueDecompteFacture.vue"
 import listeDecompte from "./Decompte/listeDecompte.vue";
 import GroupeParAnneeDecompte from "./Decompte/GroupeParAnneeDecompte.vue";
// import { ModelListSelect } from "vue-search-select";
// import "vue-search-select/dist/VueSearchSelect.css";
import {admin,dcf,noDCfNoAdmin} from "@/Repositories/Auth"
export default {
  components: {
   listeDecompte,
   GroupeParAnneeDecompte
    //ModelListSelect
  },
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add",
        },
      ],
      page: 0,
      size: 10,
      active_el: 0,
      formData: {
        code: "",
        libelle: "",
        section_id: "",
        localisationgeo_id: "",
        type_ua_id: "",
        date_creation: "",

        servicegest_id: "",
        nature_section_id: "",
      },
      editObservation: {},
      editUniteAdministrative: {
        code: "",
        libelle: "",
        section_id: "",
        localisationgeo_id: "",
        type_ua_id: "",
        date_creation: "",
        servicegest_id: "",
        nature_section_id: "",
      },
      json_fields: {
        TYPE_UNIT_ADMINISTRATIVE: "typeua.libelle",
        SECTION: "secti.nom_section",
        SERVICE_GESTIONNAIRE: "servivegest.libelle",
        LOCALISATION_GEO: "localgeo.libelle",
        CODE: "code",
        LIBELLE: "libelle",
        DATE_CREATION: "date_creation",
      },
      search: "",
    };
  },

  created() {
    this.marcheid = this.$route.params.id;
    this.detailOp = this.gettersgestionOrdrePaiement.find(
      (idmarche) => idmarche.id == this.$route.params.id
    );
  },
  computed: {
    ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetEclate",
      "decomptefactures"

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
      "structures_geographiques",
    ]),
    ...mapGetters("parametreGenerauxFonctionnelle", ["plans_fonctionnels"]),

    ...mapGetters("Utilisateurs", [
      "getterAffectionServiceCF",
      "getterUtilisateur",
      "getterAffectation",
      "getterUniteAdministrativeByUser",
    ]),
    ...mapGetters("bienService", [
      "gettersServiceRealiteFaitOp",
      "gettersgestionOrdrePaiement",
      "getFacturePersonnaliser",
      "getterActeEffetFinanciers",
      "modepaiements",
      "mandats",
      "getActeEffetFinancierPersonnaliser45",
      "getActeEffetFinancierPersonnaliser",
      "acteEffetFinanciers",
      "montantPlanification",
      "montantContratualisation",
      "afficheContratualisation",
      "affichePlanifier",
      "nombremarchesExecute",
      "avenants",
      "getMandatPersonnaliserVise",
      "AfficheMarcheNonAttribue",
      "nombreTotalMarche",
      "marches",
      "typeMarches",
      "getMarchePersonnaliser",
      "printMarcheNonAttribue",
      "procedurePassations",
      "typeTypeProcedures",
      "montantComtratualisation",
      "text_juridiques",
      "gettersOuverturePersonnaliser",
      "typeActeEffetFinanciers",
      "personnaliseGetterMarcheBailleur",
      "getterMandate",
      "getActeEffetFinancierPersonnaliserContrat",
      "getterCojos",
      "getterDemandeAno",
      "getterAnoDMPBailleur",
      "motifDecisions"
    ]),

    ...mapGetters("personnelUA", ["acteur_depenses", "paiementPersonnel"]),

    ...mapGetters("uniteadministrative", [
      "plans_programmes",
      "uniteAdministratives",
      "afficheNiveauAction",
      "afficheNiveauActivite",
      "derniereNivoPlanBudgetaire",
      "getPersonnaliseBudgetGeneralParPersonnel",
      "budgetEclate",
      "getSousBudget"
    ]),

    ...mapGetters("parametreGenerauxAdministratif", [
      "sections",
      "type_Unite_admins",
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "afficheNiveauPlanProg",
      "exercices_budgetaires",
      "localisations_geographiques",
    ]),
    ...mapGetters("parametreGenerauxSourceDeFinancement", [
      "sources_financements",
      "types_financements",
    ]),
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "plans_fonctionnels",
      "afficheNiveauPlanFonctionnel",
    ]),

    ...mapGetters("parametreGenerauxActivite", [
      "plans_activites",
      "afficheNiveauAction",
      "afficheNiveauActivite",
    ]),

    ...mapGetters("parametreGenerauxBudgetaire", [
      "plans_budgetaires",
      "derniereNivoPlanBudgetaire",
    ]),
    ...mapGetters("gestionMarche", [
      "entreprises",
      "secteur_activites",
      "banques",
      "comptes",
      "getCompte",
    ]),
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "structuresDecision",
      "plans_Decision",
      
    ]),
    admin: admin,
    dcf: dcf,
    noDCfNoAdmin: noDCfNoAdmin,
    listeDesUa() {
      if (this.noDCfNoAdmin) {
        let colect = [];
        this.uniteAdministratives.filter((item) => {
          let val = this.getterUniteAdministrativeByUser.find(
            (row) => row.unite_administrative_id == item.id
          );
          if (val != undefined) {
            colect.push(item);
            return item;
          }
        });
        return colect;
      }

      return this.uniteAdministratives;
    },
    afficheIdEntreprise() {
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
    AfficheMontantMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.montant_marche;
      }
      return "Non renseigné"
        }
      };
    },
    afficheObjetMarche() {
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
    afficherStatusSib() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.sib;
      }
      return 0
        }
      };
    },
    afficheMarcheDecompte() {
      return id => {
        if (id != null && id != "") {
          return this.decomptefactures.filter(
            element => element.uniteadministrative_id == id 
          );
        }
      };
    },
    decompteParExercice(){
      return (marche_id,exercice)=>{
          let objet=this.afficheMarcheDecompte(this.detailOp.unite_administrative_id)
          if(objet.length>0){
              return objet.filter(item=>item.exercicebudget==exercice && item.diff_decompte==1)
          }
          return []
      }
      },
   arrayExerciceDecompte(){
           return (marche_id)=>{
               let objet=this.afficheMarcheDecompte(marche_id)
             //  let vm=this
               let array_exercie=[]
               if(objet.length>0){


                   objet.forEach(function (val) {
                       array_exercie.push(val.exercicebudget)
                   })
                   let unique = [...new Set(array_exercie)]
                  // console.log(unique)
                   if (unique.length==1){
   return []
                   }
                   return unique
               }
               return []
           }
      },
    //fonction Lega le 18/03/2021
recupererNomDuControleurF() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterUtilisateur.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.name;
      }
      return 0
        }
      };
    },
recupererIdUser() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterAffectionServiceCF.find(qtreel => qtreel.servicecf_id == id && qtreel.date_fin==null);

      if (qtereel) {
        return qtereel.user_id;
      }
      return 0
        }
      };
    },
 recupererIdServiceCF() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterAffectation.find(qtreel => qtreel.unite_administrative_id == id   && qtreel.date_fin==null);

      if (qtereel) {
        return qtereel.servicecf_id;
      }
      return 0
        }
      };
    },
    AfficheSectionLibelle() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.sections.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.nom_section;
          }
          return 0;
        }
      };
    },

    AfficheProgrammeLibelle() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.plans_programmes.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },

    AfficheUaLibelle() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.uniteAdministratives.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },

    AfficheActiviteLibelle() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.plans_activites.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },

    AfficheLigneEconoLibelle() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.plans_budgetaires.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },

    AfficheEntrepriseLibelle() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.entreprises.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.raison_sociale;
          }
          return 0;
        }
      };
    },


    recupCompte1(){
    
          const qtereel = this.getterActeEffetFinanciers.find((qtreel) => qtreel.entreprise_id == this.detailOp.entreprise_id);

          if (qtereel) {
            return qtereel.compte_id;
          }
          return 0;
        
     
    },  

    recupCompte2(){
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.comptes.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.rib;
          }
          return 0;
        }
      };
    },

     recupBanquee1(){
          const qtereel = this.getterActeEffetFinanciers.find((qtreel) => qtreel.entreprise_id == this.detailOp.entreprise_id);
          if (qtereel) {
            return qtereel.banq_id;
          }
          return 0;
    },

     recupBanquee2(){
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.banques.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },

    AfficheNumeroMarcheLibelle() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.marches.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.numero_marche;
          }
          return 0;
        }
      };
    },

    AfficheTypeFinancementLibelle() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.types_financements.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },

       AfficheSourceFinancementLibelle() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.sources_financements.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },

    AfficheModePaiementLibelle() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.modepaiements.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },

       AfficheFamilleMotifLibelle() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.motifDecisions.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },

     AfficheMotifLibelle() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.motifDecisions.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },

AfficheActionLibelle() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.plans_activites.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },

    
AfficheSousBudgetLibelle() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getSousBudget.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.activite_enfant;
          }
          return 0;
        }
      };
    },

    //fin des fonctions Lega  

    listeServiceRealiteFait() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersServiceRealiteFaitOp.filter(
            (qtreel) => qtreel.op_definitif_id == id
          );
        }
      };
    },
    afficheNumeroOPAnnulation() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find(
            (qtreel) => qtreel.numero_ordre_paiement == id
          );

          if (qtereel) {
            return qtereel.id_op_provisoire;
          }
          return 0;
        }
      };
    },
  

    afficheNumeroOP() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.numero_ordre_paiement;
          }
          return 0;
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
     ...mapActions('uniteadministrative',[

 "ModifierDecompteFacture",
 "supprimerDecompteFacture"
   
   
   ]),
    afficherModalListeExecution() {
      window.history.back();
    },
    afficherModalAjouterTitre() {
      this.$("#exampleModal12").modal({
        backdrop: "static",
        keyboard: false,
      });
    },
    genererEnPdf() {
      var doc = new jsPDF("landscape");
      // doc.autoTable({ html: this.natures_sections })
      doc.setFontSize(8);
      doc.text(115, 10, "LISTE DES UNITES ADMINISTRATIVES");
      doc.autoTable({ html: "#Nature_section" }),
        doc.save("UniteAdministrative.pdf");
      return 0;
    },

    getDataPaginate(index) {
      this.active_el = index;
      this.page = index;
    },
    precedent() {
      this.active_el--;
      this.page--;
    },
    suivant() {
      this.active_el++;
      this.page++;
    },
    afficherModalAjouterUniteAdministrative() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false,
      });
    },
    // fonction pour vider l'input ajouter
    ajouterUniteAdministrativeLocal() {
      var nouvelObjet = {
        op_definitif_id: this.detailOp.id,
        observation_agent_cf: this.formData.observation_agent_cf,
        date_observation_agent_cf: this.formData.date_observation_agent_cf,
        nom_agent_id: this.formData.nom_agent_id,
      };
      this.ajouterServiceRealiteFaitOp(nouvelObjet);
      this.$("#exampleModal12").modal("hide");
      this.formData = {
        observation_agent_cf: "",
        date_observation_agent_cf: "",
      };
    },
    // fonction pour vider l'input modifier
    modificationObservationAgentCf() {
      var nouvelObjet = {
        id: this.editObservation.id,
        op_definitif_id: this.detailOp.id,
        observation_agent_cf: this.editObservation.observation_agent_cf,
        date_observation_agent_cf: this.editObservation
          .date_observation_agent_cf,
        nom_agent_id: this.editObservation.nom_agent_id,
      };
      this.modifierServiceRealiteFaitOp(nouvelObjet);
      this.$("#modificationObservation").modal("hide");
    },
    // afficher modal de modification
    afficherModalModifierUniteAdministrative(id) {
      this.$("#modificationObservation").modal({
        backdrop: "static",
        keyboard: false,
      });

      this.editObservation = this.gettersServiceRealiteFaitOp.find(
        (items) => items.id == id
      );
    },
    alert() {
      console.log("ok");
    },

    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
    formatageSomme:formatageSomme,
    ExporterEnExel() {
      this.$refs.excel.click();
    },
  },
};
</script>
<style>
.tailleModal {
  width: 53%;
  margin: 0 -28%;
}
td{
  font-size:14px;
}
th{
  font-size:14px;
}
</style>