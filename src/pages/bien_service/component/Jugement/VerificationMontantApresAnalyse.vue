
<template>
<div>
  <div class="row-fluid" >
    <div class="span12" align="right">
      <button class="btn btn-default" @click="generateReport()"><i class="icon-print"></i></button>
    </div>

  </div>
  <div v-for="item in lot" :key="item.id" class="widget-content" id="analyse">
    <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>

      <div class="span8"><h5>LOT N°{{ item.numero_lot }} / {{item.objet}}
      </h5> </div>

     
          
<!--      <div class="span2"><button @click.prevent="supprimerAnalyseDossierMultiple(item.id)"  class="btn btn-danger " title="Supprimer">-->
<!--        <span class=""><i class="icon-trash"></i></span></button></div>-->
    </div>
    <div class="widget-box" v-for="effetFinancier in AffichierOffreFinanciere(item.id)"
         :key="effetFinancier.id">
      <h6> {{afficheNomEntreprise(afficherNumeroDossierCandidat1(effetFinancier.dossier_candidat_id)) || 'Non renseigné'}}</h6>
      <table class="table table-bordered table-striped" v-if="macheid">
        <thead>
        <tr>
          <th>Offre</th>
          <th>Prix de l'offre lu en FCFA TTC</th>
          <th>Erreurs de calcul </th>
          <th>Prix de l'offre corrigé en FCFA TTC</th>


        </tr>
        </thead>
        <tbody>
        <tr class="odd gradeX" >

          <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
            Offre financière</td>
          <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)" style="text-align:center;font-size:14px">
            {{formatageSommeSansFCFA(parseFloat(effetFinancier.hist_montant_ttc)) || 'Non renseigné'}}</td>
          <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)" style="text-align:center;font-size:14px">
            {{effetFinancier.Erreurs_sur_montant_ttc || 'Non renseigné'}}</td>

          <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)"  style="text-align:center;font-size:14px;background: green;color: white">
            {{formatageSommeSansFCFA(parseFloat(effetFinancier.montant_total_ttc)) || 'Non renseigné'}}</td>

        </tr>
        </tbody>
      </table>
      <table class="table table-bordered table-striped">
        <thead>
        <tr>
          <th>Offre</th>
          <th>Structure Emetrice</th>
          <th>Montant </th>
          <th>Delai de validation de l'offre</th>
          <th>Delai de livraison ou d'execution proposé </th>
          <th>Rabais offert</th>
          <th>Presence Echantillons</th>
          <th>Conclusion</th>

        </tr>
        </thead>
        <tbody>
        <tr v-for="offre in listeOffreTechniqueLotCandidat(effetFinancier.dossier_candidat_id,item.id)" :key="offre.id">
          <td @click="afficheEdite(offre.id)">Offre Technique</td>
          <td @click="afficheEdite(offre.id)">{{offre.structure_emetrice}}</td>
          <td @click="afficheEdite(offre.id)">{{offre.montant}} </td>
          <td @click="afficheEdite(offre.id)">{{offre.delai_validite_offre}} </td>
          <td @click="afficheEdite(offre.id)">{{offre.delai_execution}} </td>
          <td @click="afficheEdite(offre.id)">{{offre.rabai_offert}}</td>
          <td @click="afficheEdite(offre.id)">{{offre.presence_echantillons}}</td>
          <td @click="afficheEdite(offre.id)" v-if="offre.observation==1" style="background: green;color: white">CONFORME </td>
          <td @click="afficheEdite(offre.id)" v-else-if="offre.observation==0" style="background: red;color: white">NON CONFORME</td>
          <td @click="afficheEdite(offre.id)" v-else style="background: blue;color: white">ANALYE EN COURS</td>
        </tr>
        </tbody>

      </table>
    </div>

  </div>

  <div id="ModalModification" class="modal hide grdirModalActeEffet" >
    <div class="modal-header">
      <button data-dismiss="modal" class="close" type="button">×</button>
      <h3>Information  sur Offre Financiere</h3>
    </div>

    <div class="widget-title">
      <ul class="nav nav-tabs">
        <li class="active"><a data-toggle="tab" href="#tab8888">Information Sur Offre Financiere</a></li>
        <!-- <li class=""><a data-toggle="tab" href="#tab00050">Informations financières</a></li> -->
      </ul>
    </div>
    <div class="widget-content tab-content">

      <div id="tab8888" class="tab-pane active">
  <table class="table table-bordered table-striped">
    <tr>
      <td>
         <div class="control-group">
              <label class="control-label">Soumissionnaire</label>
              <div class="controls">
                <input type="text" class="span" readonly :value="afficherNumeroDossierCandidat1(EditOffreFinanciere.dossier_candidat_id)">
              </div>
            </div>
      </td>
    </tr>
    <tr>
      <td>
         <div class="control-group">
              <label class="control-label">Prix de l'offre lu en FCFA TTC</label>
              <div class="controls">
                <input type="number" class="span" readonly v-model="EditOffreFinanciere.hist_montant_ttc">
              </div>
            </div>
      </td>
    </tr>
     <tr>
      <td>
         <div class="control-group">
              <label class="control-label">Prix de l'offre corrigé en FCFA TTC</label>
              <div class="controls">
                <input type="number" class="span" placeholder="Montant TTC" v-model="EditOffreFinanciere.montant_total_ttc">
              </div>
            </div>
      </td>
    </tr>
    <tr>
      <td>
         <div class="control-group">
              <label class="control-label">Erreurs de calcul</label>
              <div class="controls">
                <input type="number" class="span" readonly :value="Erreursdecalcul">
              </div>
            </div>
      </td>
    </tr>
   
  </table>
      </div>
    </div>

    <div class="modal-footer">
      <a  @click.prevent="ModifierOfficeFinancier" 
          class="btn btn-primary"
          href="#"
      >Valider</a>
      <a data-dismiss="modal" class="btn" href="#">Fermer</a>
    </div>
  </div>
  <notifications  />
  <!---->


    <div id="edit_offre_technique" class="modal hide grdirModalActeEffet" >
        <div class="modal-header">
            <button data-dismiss="modal" class="close" type="button">×</button>
            <h3>Analyse de l'offre technique</h3>
        </div>
        <div class="modal-body" >
            <div class="widget-box">


                        <table class="table table-bordered table-striped">

                          <tr>
                            <td>
                              <div class="control-group">
                                <label class="control-label">Numero de lot :</label>
                                <div class="controls">

                                  <input type="text" class="span" :value="'Lot N° '+editer.numero_lot" disabled>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="control-group">
                                <label class="control-label">Soumisionnaire :</label>
                                <div class="controls">

                                  <input type="text" class="span" :value="afficheNomEntreprise(afficherNumeroDossierCandidat1(editer.dossier_candidat_id))" disabled>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="control-group">
                                <label class="control-label">Accord groupement :</label>
                                <div class="controls">
                                  <select v-model="editer.accord_groupe" class="span">
                                    <option value=""></option>
                                    <option value="OUI">OUI</option>
                                    <option value="NON">NON</option>
                                    <option value="N/A">NON APPLICABLE</option>
                                  </select>

                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="control-group">
                                <label class="control-label">Fiche de renseignement nombre de groupe :</label>
                                <div class="controls">
                                  <input v-if="editer.accord_groupe=='OUI'" type="text" class="span" placeholder="Attest banc"
                                         v-model="editer.fiche_rsgnt_mbre_groupe">
                                  <input v-if="editer.accord_groupe=='NON'" type="text" class="span" placeholder="Attest banc"
                                         v-model="editer.fiche_rsgnt_mbre_groupe" disabled>
                                  <input v-if="editer.accord_groupe=='N/A'" type="text" class="span" placeholder="Attest banc"
                                         v-model="editer.fiche_rsgnt_mbre_groupe" disabled>
                                  <input v-if="!editer.accord_groupe" type="text" class="span" placeholder="Attest banc"
                                         v-model="editer.fiche_rsgnt_mbre_groupe" disabled>
                                  <!-- <select v-model="formLot.fiche_rsgnt_mbre_groupe" class="span">
                                     <option value=""></option>
                                     <option value="OUI">OUI</option>
                                     <option value="NON">NON</option>
                                     <option value="N/A">NON APPLICABLE</option>
                                   </select>-->
                                </div>
                              </div>
                            </td>


                            <td>
                              <div class="control-group">
                                <label class="control-label">Fiche technique :</label>
                                <div class="controls">
                                  <select v-model="editer.formil_propo_tech" class="span">
                                    <option value=""></option>
                                    <option value="OUI">OUI</option>
                                    <option value="NON">NON</option>
                                    <option value="N/A">NON APPLICABLE</option>
                                  </select>
                                  <!--<input type="text" class="span" placeholder="Piece Admin" v-model="formchnique.formil_propo_tech">-->
                                </div>
                              </div>
                            </td>

                          </tr>
                          <tr>

                            <td>

                              <div class="control-group">
                                <label class="control-label">Antécédent des marchés non Execute :</label>
                                <div class="controls">
                                  <!--  <input type="text" class="span" placeholder="Org travau" v-model="formchnique.atcdent_marche_non_exe">-->

                                  <select v-model="editer.atcdent_marche_non_exe" class="span">
                                    <option value=""></option>
                                    <option value="OUI">OUI</option>
                                    <option value="NON">NON</option>
                                    <option value="N/A">NON APPLICABLE</option>
                                  </select>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="control-group">
                                <label class="control-label">Planning d'execution des travaux :</label>
                                <div class="controls">
                                  <!-- <input type="text" class="span" placeholder="Meth real travau" v-model="formchnique.org_travau_site">-->
                                  <select v-model="editer.org_travau_site" class="span">
                                    <option value=""></option>
                                    <option value="OUI">OUI</option>
                                    <option value="NON">NON</option>
                                    <option value="N/A">NON APPLICABLE</option>
                                  </select>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="control-group">
                                <label class="control-label">Methode de réalisation des travaux:</label>
                                <div class="controls">
                                  <!-- <input type="text" class="span" placeholder="Prog mobilisation" v-model="formchnique.meth_real_travau">-->

                                  <select v-model="editer.meth_real_travau" class="span">
                                    <option value=""></option>
                                    <option value="OUI">OUI</option>
                                    <option value="NON">NON</option>
                                    <option value="N/A">NON APPLICABLE</option>
                                  </select>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="control-group">
                                <label class="control-label">Programme mobilisation :</label>
                                <div class="controls">
                                  <!-- <input type="text" class="span" placeholder="Prog mobilisation" v-model="formchnique.prog_mobilisation">-->

                                  <select v-model="editer.prog_mobilisation" class="span">
                                    <option value=""></option>
                                    <option value="OUI">OUI</option>
                                    <option value="NON">NON</option>
                                    <option value="N/A">NON APPLICABLE</option>
                                  </select>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="control-group">
                                <label class="control-label">Capacite de financement :</label>
                                <div class="controls">
                                  <!--  <input type="text" class="span" placeholder="Capacite financiere" v-model="formchnique.capacite_financiere">-->

                                  <select v-model="editer.capacite_financiere" class="span">
                                    <option value=""></option>
                                    <option value="OUI">OUI</option>
                                    <option value="NON">NON</option>
                                    <option value="N/A">NON APPLICABLE</option>
                                  </select>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="control-group">
                                <label class="control-label">CAA moyen :</label>
                                <div class="controls">
                                  <input type="text" class="span" placeholder="Caa moyen ac"
                                         v-model="editer.caa_moyen_ac_entre">

                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="control-group">
                                <label class="control-label">Expérience spécique :</label>
                                <div class="controls">
                                  <!--  <input type="text" class="span" placeholder="Capacite techn exp" v-model="formchnique.capacite_techn_exp">-->
                                  <select v-model="editer.capacite_tech_exp" class="span">
                                    <option value=""></option>
                                    <option value="OUI">OUI</option>
                                    <option value="NON">NON</option>
                                    <option value="N/A">NON APPLICABLE</option>
                                  </select>

                                </div>
                              </div>

                            </td>
                            <td>
                              <div class="control-group">
                                <label class="control-label">Expérience Général :</label>
                                <div class="controls">
                                  <!--  <input type="text" class="span" placeholder="Capacite techn exp" v-model="formchnique.capacite_techn_exp">-->
                                  <select v-model="editer.experience_generale" class="span">
                                    <option value=""></option>
                                    <option value="OUI">OUI</option>
                                    <option value="NON">NON</option>
                                    <option value="N/A">NON APPLICABLE</option>
                                  </select>

                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="control-group">
                                <label class="control-label">Personnel :</label>
                                <div class="controls">
                                  <!--  <input type="text" class="span" placeholder="Capacite techn exp" v-model="formchnique.capacite_techn_exp">-->
                                  <select v-model="editer.personnel" class="span">
                                    <option value=""></option>
                                    <option value="OUI">OUI</option>
                                    <option value="NON">NON</option>
                                    <option value="N/A">NON APPLICABLE</option>
                                  </select>

                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="control-group">
                                <label class="control-label">Matériel :</label>
                                <div class="controls">
                                  <!--  <input type="text" class="span" placeholder="Capacite techn exp" v-model="formchnique.capacite_techn_exp">-->
                                  <select v-model="editer.materiel" class="span">
                                    <option value=""></option>
                                    <option value="OUI">OUI</option>
                                    <option value="NON">NON</option>
                                    <option value="N/A">NON APPLICABLE</option>
                                  </select>

                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>

                            <td>
                              <div class="control-group">
                                <label class="control-label">Lettre de Soumission et pouvoir de signature :</label>
                                <div class="controls">
                                  <!--  <input type="text" class="span" placeholder="Capacite techn exp" v-model="formchnique.capacite_techn_exp">-->
                                  <select v-model="editer.lettre_soumission_pouvoir_signature" class="span">
                                    <option value=""></option>
                                    <option value="OUI">OUI</option>
                                    <option value="NON">NON</option>
                                    <option value="N/A">NON APPLICABLE</option>
                                  </select>

                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="control-group">
                                <label class="control-label">Registre de commerce :</label>
                                <div class="controls">
                                  <!--  <input type="text" class="span" placeholder="Capacite techn exp" v-model="formchnique.capacite_techn_exp">-->
                                  <select v-model="editer.reg_com" class="span">
                                    <option value=""></option>
                                    <option value="OUI">OUI</option>
                                    <option value="NON">NON</option>
                                    <option value="N/A">NON APPLICABLE</option>
                                  </select>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="control-group">
                                <label class="control-label">Garantie de soumission :</label>
                                <div class="controls">
                                  <!--  <input type="text" class="span" placeholder="Capacite techn exp" v-model="formchnique.capacite_techn_exp">-->
                                  <select v-model="editer.garantie_soumission" class="span">
                                    <option value=""></option>
                                    <option value="OUI">OUI</option>
                                    <option value="NON">NON</option>
                                    <option value="N/A">NON APPLICABLE</option>
                                  </select>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="control-group">
                                <label class="control-label">Délai d'exécution :</label>
                                <div class="controls">
                                  <!--  <input type="text" class="span" placeholder="Capacite techn exp" v-model="formchnique.capacite_techn_exp">-->
                                  <select v-model="editer.delai_execution" class="span">
                                    <option value=""></option>
                                    <option value="OUI">OUI</option>
                                    <option value="NON">NON</option>
                                    <option value="N/A">NON APPLICABLE</option>
                                  </select>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="control-group">
                                <label class="control-label">Validation de l'offre :</label>
                                <div class="controls">
                                  <!--  <input type="text" class="span" placeholder="Capacite techn exp" v-model="formchnique.capacite_techn_exp">-->
                                  <select v-model="editer.validation" class="span">
                                    <option value=""></option>
                                    <option value="OUI">OUI</option>
                                    <option value="NON">NON</option>
                                    <option value="N/A">NON APPLICABLE</option>
                                  </select>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="control-group">
                                <label class="control-label">Cautionnement provisoire :</label>
                                <div class="controls">
                                  <select v-model="editer.cautionnement_prov" class="span">
                                    <option value=""></option>
                                    <option value="OUI">OUI</option>
                                    <option value="NON">NON</option>
                                    <option value="N/A">NON APPLICABLE</option>
                                  </select>
                                  <!--<input type="text" class="span" placeholder="Cautionnement prov" v-model="formchnique.cautionnement_prov">-->
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="control-group">
                                <label class="control-label">Attestation bancaire:</label>
                                <div class="controls">
                                  <select v-model="editer.attest_banc" class="span">
                                    <option value=""></option>
                                    <option value="OUI">OUI</option>
                                    <option value="NON">NON</option>
                                    <option value="N/A">NON APPLICABLE</option>
                                  </select>
                                  <!-- <input type="text" class="span" placeholder="Pouv habil" v-model="formchnique.attest_banc">-->
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="control-group">
                                <label class="control-label">Observation :</label>
                                <div class="controls">
                                  <!--  <input type="text" class="span" placeholder="Capacite techn exp" v-model="formchnique.capacite_techn_exp">-->
                                  <select v-model="editer.observation" class="span">
                                    <option value=""></option>
                                    <option value="1">CONFORME</option>
                                    <option value="0">NON CONFORME</option>
                                  </select>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </table>
            </div>
        </div>

        <div class="modal-footer">
            <button @click.prevent="editeOffreT" class="btn btn-primary">Valider</button>
            <a data-dismiss="modal" class="btn" href="#">Cancel</a> </div>
    </div>



</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {formatageSommeSansFCFA} from "@/Repositories/Repository";

export default {
name: "ActEffeFinanciere",
  props:["macheid"],
  data(){
    return{
      lot:"",
      formBailleur:{},
      editBailleur:"",
      EditOffreFinanciere:{
        
      },
      nom_candidata:"",
      dossier_candidat_id:"",
     marche_lot:"",
      infoLot:"",
        editer:""
    }
  },
  created(){
    this.lot=this.getMarchePersonnaliser.filter(item=>item.parent_id==this.macheid)


  },
  computed:{

    ...mapGetters("bienService", [ "typeMarches","gettersCotationPersonnaliser","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots",
      "modePassations", "procedurePassations","getterDossierCandidats","marches",
      "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation",
      "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
      "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
      "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables",
      "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
    ...mapGetters('personnelUA', ['acteur_depenses']),


    ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises','banques','comptes','getCompte']),
    ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
      'types_financements']) ,

    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),
    ...mapGetters('parametreGenerauxFonctionnelle', ['structureActe',
      'planActe']),
    dossierCandidature: function () {
      return marcheid => {
        if (marcheid != "") {
          //  console.log("Marche dossier candidat")
          return this.getterDossierCandidats.filter(idmarche => idmarche.appel_offre.marche_id == marcheid)
        }
      }
    },
    listeOffreTechniqueLotCandidat(){
      return (id,macheid)=>{
        if(id!=""){
          return this.gettersOffreTechniques.filter(item=>{
            if(item.dossier_candidat_id==id && item.marche_id == macheid){
              return item
            }
          })
        }
      }
    },
      afficherNumeroDuLot(){
          return id =>{
              if(id!=null && id!=""){
                  let varObjetListeMembrecojo = this.getMarchePersonnaliser.find(idmache =>idmache.id==id)
                  return varObjetListeMembrecojo.numero_lot
              }
              return null
          }
      },
Erreursdecalcul() {

      const val = parseFloat(this.EditOffreFinanciere.montant_total_ttc) - parseFloat(this.EditOffreFinanciere.hist_montant_ttc);
      return parseFloat(val).toFixed(0);
    },

    AffichierOffreFinanciere: function () {
      return (macheid) => {
        if (macheid != "") {
          // console.log("Marche leste acte effect finnancier")
          return this.getterOffreFinanciers.filter(idmarche => idmarche.marche_id == macheid)
        }
      }
    },

analyseByLot(){
      return id=>{
        return this.getterAnalyseDossiers.filter(item=>{
          if (item.marche_id==id && item.rang_analyse==1)
             return item
        })
      }
    },

afficherNumeroDossierCandidat1() {
      return id => {
        if (id != null && id != "") {
          const qtereel = this.getterDossierCandidats.find(qtreel => qtreel.id == id);

          if (qtereel) {
            return qtereel.entreprise_id;
          }
          return null
        }
      };
    },


    afficheNomEntreprise() {
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
    enregistreIdActe() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.id;
      }
      return 0
        }
      };
    },

  },

  methods:{
    ...mapActions("bienService", [
      "supprimerDossierCandidat","ajouterOffreTechnique","modifierOffreTechnique",
      "supprimerchnique","ajouterOffreFinancier","modifierOffreFinancier","supprimerOffreFinancier",
      "ajouterLettreInvitation",

    ]),
      afficheEdite(index){
          this.$('#edit_offre_technique').modal({
              backdrop: 'static',
              keyboard: false
          });

          this.editer= this.gettersOffreTechniques.find(item=>item.id==index);
      },

afficherModalModifierActeEffetFinancier(id){
      this.$('#ModalModification').modal({
        backdrop: 'static',
        keyboard: false
      });
      this.EditOffreFinanciere= this.getterOffreFinanciers.find(item=>item.id==id);
    },

ModifierOfficeFinancier(){

var nouvelObjet = {
        
        id:this.EditOffreFinanciere.id,
        Erreurs_sur_montant_ttc:this.Erreursdecalcul,
        montant_total_ttc:this.EditOffreFinanciere.montant_total_ttc
        
      };
               
               this.modifierOffreFinancier(nouvelObjet)
  
            },
    afficheModaleActe(index){
      this.$('#ajouterBailleur').modal({
        backdrop: 'static',
        keyboard: false
      });
        if ( this.analyseByLot(index).length>0){
          this.nom_candidata=this.afficheNomEntreprise(this.afficherNumeroDossierCandidat1(this.analyseByLot(index)[0].dossier_candidat_id)),
              this.dossier_candidat_id=this.analyseByLot(index)[0].dossier_candidat_id
        }
    this.marche_lot=index
      this.infoLot=this.getMarchePersonnaliser.find(item=>item.id==index)
      //  this.edite_analyse_dossier = this.listeAnalyseDossier(this.macheid)[index];
    },

    formatageSommeSansFCFA:formatageSommeSansFCFA,
      editeOffreT(){
          let objet={
              id:this.editer.id,
              numero_lot:this.afficherNumeroDuLot(this.editer.marche_id),
              accord_groupe:this.editer.accord_groupe,
              cautionnement_prov:this.editer.cautionnement_prov,
              pouv_habil_signataire:this.editer.pouv_habil_signataire,
              peice_admin:this.editer.pouv_habil_signataire,
              reg_com:this.editer.reg_com,
              attest_banc:this.editer.attest_banc,
              formil_propo_tech:this.editer.formil_propo_tech,
              fiche_rsgnt_mbre_groupe:this.editer.fiche_rsgnt_mbre_groupe,
              atcdent_marche_non_exe:this.editer.atcdent_marche_non_exe,
              org_travau_site:this.editer.org_travau_site,
              meth_real_travau:this.editer.meth_real_travau,
              prog_mobilisation:this.editer.prog_mobilisation,
              capacite_financiere:this.editer.capacite_financiere,
              caa_moyen_ac_entre:this.editer.caa_moyen_ac_entre,
              capacite_techn_exp:this.editer.capacite_techn_exp,
              dossier_candidat_id:this.editer.dossier_candidat_id,
              experience_generale:this.editer.experience_generale,
              personnel:this.editer.personnel,
              materiel:this.editer.materiel,
              observation:this.editer.observation,
              lettre_soumission_pouvoir_signature:this.editer.lettre_soumission_pouvoir_signature,
              garantie_soumission:this.editer.garantie_soumission,
              delai_execution:this.editer.delai_execution,
              validation:this.editer.validation,
              marche_id:this.editer.marche_id,
              appel_offre_id:this.editer.appel_offre_id
          }
          this.modifierOffreTechnique(objet)
          this.$('#edit_offre_technique').modal('hide');
      },
    generateReport(){
      this.$htmlToPaper('analyse');
    }

  }
}
</script>

<style scoped>



.grdirModalActeEffet{
    width: 88% !important;
    margin: 0 -42% !important;
}
</style>