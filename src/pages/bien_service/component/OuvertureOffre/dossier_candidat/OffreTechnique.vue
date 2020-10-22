<template>
<div>

  <div align="right">
    <a href="#ajouter_offre_fin" data-toggle="modal" class="btn btn-primary">Ajouter</a>
  </div>
  <div class="widget-box" >
    <div class="widget-content nopadding">
      <table class="table table-bordered table-striped">
        <thead>
        <tr>
          <th>N°LOT</th>
          <th>Programme mobilisation</th>
          <th>Capacite financiere </th>
          <th>CAA Moyenne</th>
          <th>Capacite téchnique </th>
          <th title="methodologie de realisation de travaux">Methode real.trvx </th>
          <th>Accord groupe</th>
          <th title="Pouvoir de signature">P.Signature</th>
          <th>Caution</th>
          <th>Registe de commerce</th>
          <th>Observation</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="offre in listeOffreTechniqueLotCandidat(dossier_candidature.id)" :key="offre.id">
          <td @click="afficheEdite(offre.id)">N°{{offre.numero_lot}}</td>
          <td @click="afficheEdite(offre.id)">{{offre.prog_mobilisation}}</td>
          <td @click="afficheEdite(offre.id)">{{offre.capacite_financiere}} </td>
          <td @click="afficheEdite(offre.id)">{{offre.caa_moyen_ac_entre}} </td>
          <td @click="afficheEdite(offre.id)">{{offre.capacite_tech_exp}} </td>
          <td @click="afficheEdite(offre.id)">{{offre.meth_real_travau}}</td>
          <td @click="afficheEdite(offre.id)">{{offre.accord_groupe}}</td>
          <td @click="afficheEdite(offre.id)">{{offre.pouv_habil_signataire}}</td>
          <td @click="afficheEdite(offre.id)">{{offre.cautionnement_prov}}</td>
          <td @click="afficheEdite(offre.id)">{{offre.reg_com}}</td>
          <td @click="afficheEdite(offre.id)" v-if="offre.observation" style="background: green;color: #fff">CONFORME</td>
          <td @click="afficheEdite(offre.id)" v-if="!offre.observation" style="background: red;color: #fff">NON CONFORME</td>
          <td>
            <button @click.prevent="supprimerchnique(offre.id)"  class="btn btn-danger ">
              <span class=""><i class="icon-trash"></i></span></button>
          </td>
        </tr>
        </tbody>

      </table>
    </div>
  </div>

<!--Ajouter offre technique-->
  <div id="ajouter_offre_fin" class="modal hide grdirModalActeEffet" >
    <div class="modal-header">
      <button data-dismiss="modal" class="close" type="button">×</button>
      <h3>Ajouter l'offre technique</h3>
    </div>
    <div class="modal-body" >
      <div class="widget-box" >
        <table class="table table-bordered table-striped">
          <tr>
            <td>
              <div class="control-group">
                <label>Offre</label>
                <div class="controls">
                  <input v-if="listeAppelOffre(dossier_candidature.marche_id)" type="text" class="span" placeholder="Offre"
                         v-model="listeAppelOffre(dossier_candidature.marche_id).ref_appel" disabled>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label>Lot</label>
                <div class="controls">
                  <select v-model="formchnique.marche_id" class="span" >
                    <option v-for="varText in listeLot(dossier_candidature.marche_id,dossier_candidature.id)" :key="varText.id"
                            :value="varText.id">LOT N°{{varText.numero_lot}} {{varText.objet}}</option>
                  </select>
                </div>
              </div>
            </td>
          </tr>
        </table>

        <table class="table table-bordered table-striped">

          <tr>


            <td>
              <div class="control-group">
                <label class="control-label">Accord groupement :</label>
                <div class="controls">
                  <select v-model="formchnique.accord_groupe" class="span">
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
                  <input v-if="formchnique.accord_groupe=='OUI'" type="text" class="span" placeholder="Attest banc"
                         v-model="formchnique.fiche_rsgnt_mbre_groupe">
                  <input v-if="formchnique.accord_groupe=='NON'" type="text" class="span" placeholder="Attest banc"
                         v-model="formchnique.fiche_rsgnt_mbre_groupe" disabled>
                  <input v-if="formchnique.accord_groupe=='N/A'" type="text" class="span" placeholder="Attest banc"
                         v-model="formchnique.fiche_rsgnt_mbre_groupe" disabled>
                  <input v-if="!formchnique.accord_groupe" type="text" class="span" placeholder="Attest banc"
                         v-model="formchnique.fiche_rsgnt_mbre_groupe" disabled>
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
                <label class="control-label">Cautionnement provisoire :</label>
                <div class="controls">
                  <select v-model="formchnique.cautionnement_prov" class="span">
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
                  <select v-model="formchnique.attest_banc" class="span">
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
                <label class="control-label">Fiche technique :</label>
                <div class="controls">
                  <select v-model="formchnique.formil_propo_tech" class="span">
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

                  <select v-model="formchnique.atcdent_marche_non_exe" class="span">
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
                  <select v-model="formchnique.org_travau_site" class="span">
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

                  <select v-model="formchnique.meth_real_travau" class="span">
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

                  <select v-model="formchnique.prog_mobilisation" class="span">
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

                  <select v-model="formchnique.capacite_financiere" class="span">
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
                <label class="control-label">CAA moyen TTC :</label>
                <div class="controls">
                 <input type="number" class="span" placeholder="Caa moyen ac"
                        v-model="formchnique.caa_moyen_ac_entre">

                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Expérience spécique :</label>
                <div class="controls">
                <!--  <input type="text" class="span" placeholder="Capacite techn exp" v-model="formchnique.capacite_techn_exp">-->
                  <select v-model="formchnique.capacite_tech_exp" class="span">
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
                  <select v-model="formchnique.experience_generale" class="span">
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
                  <select v-model="formchnique.personnel" class="span">
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
                  <select v-model="formchnique.materiel" class="span">
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
                  <select v-model="formchnique.lettre_soumission_pouvoir_signature" class="span">
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
                  <select v-model="formchnique.reg_com" class="span">
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
                  <select v-model="formchnique.garantie_soumission" class="span">
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
                  <select v-model="formchnique.delai_execution" class="span">
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
                  <select v-model="formchnique.validation" class="span">
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
                <label class="control-label">Observation :</label>
                <div class="controls">
                  <!--  <input type="text" class="span" placeholder="Capacite techn exp" v-model="formchnique.capacite_techn_exp">-->
                  <select v-model="formchnique.observation" class="span">
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
      <button @click.prevent="ajouterOffreT" class="btn btn-primary">Ajouer</button>
      <a data-dismiss="modal" class="btn" href="#">Cancel</a> </div>
  </div>


  <div id="edit_offre_technique" class="modal hide grdirModalActeEffet" >
    <div class="modal-header">
      <button data-dismiss="modal" class="close" type="button">×</button>
      <h3>Modification l'offre technique</h3>
    </div>
    <div class="modal-body" >
      <div class="widget-box" >
        <table class="table table-bordered table-striped">
          <tr>
            <td>
              <div class="control-group">
                <label>Offre</label>
                <div class="controls">
                  <input v-if="listeAppelOffre(dossier_candidature.marche_id)" type="text" class="span" placeholder="Offre"
                         v-model="listeAppelOffre(dossier_candidature.marche_id).ref_appel" disabled>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label>Lot</label>
                <div class="controls">
                  <select v-model="editer.marche_id" class="span" >
                    <option v-for="varText in listeLotMarche(dossier_candidature.marche_id)" :key="varText.id"
                            :value="varText.id">LOT N°{{varText.numero_lot}} {{varText.objet}}</option>
                  </select>
                </div>
              </div>
            </td>
          </tr>
        </table>

        <table class="table table-bordered table-striped">

          <tr>


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
      <button @click.prevent="editeOffreT" class="btn btn-primary">Modification</button>
      <a data-dismiss="modal" class="btn" href="#">Cancel</a> </div>
  </div>
  <!--Fin ajout affre technique-->
</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {formatageSomme} from "@/Repositories/Repository";

export default {
name: "OffreTechnique",
  props:["dossier_candidature"],
  data() {
    return {

      formchnique:{
        numero_lot:"",
        accord_groupe:"",
        cautionnement_prov:"",
        pouv_habil_signataire:"",
        peice_admin:"",
        reg_com:"",
        attest_banc:"",
        formil_propo_tech:"",
        fiche_rsgnt_mbre_groupe:"",
        atcdent_marche_non_exe:"",
        org_travau_site:"",
        meth_real_travau:"",
        prog_mobilisation:"",
        capacite_financiere:"",
        caa_moyen_ac_entre:"",
        capacite_techn_exp:"",
        dossier_candidat_id:"",
        experience_generale:"",
        personnel:"",
        materiel:"",
        observation:"",
        lettre_soumission_pouvoir_signature:"",
        garantie_soumission:"",
        delai_execution:"",
        validation:"",
        marche_id:"",
        appel_offre_id:""
      },
      editer:"",
      formOffreFinanciere:{
        numero_lot:"",
        designation:"",
        unite:"",
        quantite:"",
        prix_unitaire:"",
        montant_total_ht:"",
        montant_total_ttc:"",
        dossier_candidat_id:"",
      },

    };
  },
  created() {
    console.log(this.dossier_candidature)
  },
  computed:{
    ...mapGetters("bienService", ["gettersCotationPersonnaliser","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots",
      "modePassations", "procedurePassations","getterDossierCandidats","marches",
      "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation",
      "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
      "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
      "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables",
      "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
    listeAppelOffre(){
      return  marche_id=>{
        if (marche_id!="") {
          //console.log("Marche appel offre")
          return this.appelOffres.find( idmarche => idmarche.marche_id == marche_id)
        }
      }
    },
listeOffreTechniqueLotCandidat(){
      return id=>{
        if(id!=""){
          return this.gettersOffreTechniques.filter(item=>item.dossier_candidat_id==id)
        }
      }
},
    listeLotMarche(){
      return marche_id=>{
        return this.getMarchePersonnaliser.filter(item=>item.parent_id==marche_id)
      }
    },
    listeLot(){
      return (marche_id,candidat_id)=>{
        if(marche_id!=""){
          let seft=this;

          let lot_marche=this.getMarchePersonnaliser.filter(item=>item.parent_id==marche_id)
          let collection=[];

          if (lot_marche.length>0){

            lot_marche.forEach(function (value) {
              let objet=seft.gettersOffreTechniques.find(item=>{
                if(item.marche_id==value.id && item.dossier_candidat_id==candidat_id){
                  return item
                }
              })
              if(objet==undefined){
                collection.push(value)
              }
            })
            return collection
          }
          return null
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
    }
  },
  methods:{
    ...mapActions("bienService", [
       "supprimerDossierCandidat","ajouterOffreTechnique","modifierOffreTechnique",
      "supprimerchnique","ajouterOffreFinancier","modifierOffreFinancier","supprimerOffreFinancier",
      "ajouterLettreInvitation",

    ]),
    formatageSomme:formatageSomme,
    ajouterOffreT(){
      let lot_marche=this.getMarchePersonnaliser.find(item=>item.id==this.formchnique.marche_id)
      this.formchnique.numero_lot=lot_marche.numero_lot
      this.formchnique.dossier_candidat_id=this.dossier_candidature.id
      this.ajouterOffreTechnique(this.formchnique)
      this.$('#ajouter_offre_fin').modal('hide');
      this.formchnique={
        numero_lot:"",
        accord_groupe:"",
        cautionnement_prov:"",
        pouv_habil_signataire:"",
        peice_admin:"",
        reg_com:"",
        attest_banc:"",
        formil_propo_tech:"",
        fiche_rsgnt_mbre_groupe:"",
        atcdent_marche_non_exe:"",
        org_travau_site:"",
        meth_real_travau:"",
        prog_mobilisation:"",
        capacite_financiere:"",
        caa_moyen_ac_entre:"",
        capacite_techn_exp:"",
        dossier_candidat_id:"",
      }

    },
    afficheEdite(index){
      this.$('#edit_offre_technique').modal({
        backdrop: 'static',
        keyboard: false
      });
      this.editer= this.gettersOffreTechniques.find(item=>item.id==index);
    },
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
  }
}
</script>

<style scoped>

.grdirModalActeEffet{
  width: 88%;
  margin: 0 -42%;
}

</style>