<template>
  <div>

    <div align="right">
      <div class="widget-content">
        <a href="" @click="isFormulaireDossierCand" v-if="isButtunAddDossierCandidat" data-toggle="modal" class="btn btn-success" >Ajouter</a>
      </div>
    </div>

    <div v-if="isButtunAddDossierCandidat">
      <table class="table table-bordered table-striped" v-if="marcheid">
        <thead>
        <tr>

          <th>Numéro dossier</th>
          <th>Type candidat</th>
          <th>Raison sociale </th>  
          <th>Téléphone</th>
          <th>Adresse</th>
          <th>Email</th>
          <th>Appel Offre</th>
          <th>Procédure</th>
          <th style="">Etat d'enrégistrement</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        <tr class="odd gradeX" v-for="(appelOffre, index) in dossierCandidature(marcheid)"
            :key="appelOffre.id">
          <td @click="afficheBouttonTechFin(index)">
            {{appelOffre.numero_dossier || 'Non renseigné'}}</td>
          <td @click="afficheBouttonTechFin(index)">
            {{afficheCandidat(appelOffre.type_candidat_id) || 'Non renseigné'}}</td>
          <td @click="afficheBouttonTechFin(index)">
            {{afficheNomEntreprise(appelOffre.entreprise_id) || 'Non renseigné'}}</td>
          <td @click="afficheBouttonTechFin(index)">
            {{appelOffre.telephone_cand || 'Non renseigné'}}</td>
          <td @click="afficheBouttonTechFin(index)">
            {{appelOffre.adresse_post || 'Non renseigné'}}</td>
          <td @dblclick="afficheBouttonTechFin(index)">
            {{appelOffre.email_cand || 'Non renseigné'}}</td>
          <td @click="afficheBouttonTechFin(index)">
            {{appelOffre.appel_offre.objet_appel || 'Non renseigné'}}</td>
          <td @click="afficheBouttonTechFin(index)">
            {{appelOffre.procdure_passation.libelle || 'Non renseigné'}}</td>
          <!-- <td @click="afficheBouttonTechFin(index)" style="background: green;color:#fff" v-if="etatEnregistreOffreTechnique(appelOffre.id)">
           Dossier Complet
            </td> -->
          <td @click.prevent="isDetailDossierCandi(appelOffre.id)" style="background: red;color:#fff" v-if="!etatEnregistreOffreTechnique(appelOffre.id)">
           Dossier complet, Veuillez enregistrer l'offre  financière
          </td>
          <div class="btn-group">
            <button   class="btn  " title="Detail" @click.prevent="isDetailDossierCandi(appelOffre.id)">
              <span class=""><i class="icon-folder-open" ></i></span>
            </button>

            <button @click.prevent="supprimerDossierCandidat(appelOffre.id)"  class="btn btn-danger " title="Supprimer">
              <span class=""><i class="icon-trash"></i>Supprimer</span></button>

          </div>

        </tr>
        </tbody>
      </table>
    </div>










    <!--ajouter de dossier candidature-->
    <div v-if="isFormulaireDossierCandidature">
      <h6><button class="btn btn-success"
                  @click="NotisFormulaireDossierCand"
                  v-if="!isButtunAddDossierCandidat">Afficher la liste des dossiers des soumissionnaires</button></h6>
<h5>Formulaire d'enregistrement du dossier du soumissionnaire</h5>
      <table class="table table-bordered table-striped">
        <tr class="odd gradeX" >
          <td width="">
            <div align="left" >
              <div class="control-group">
                <label class="control-label">Entreprise.</label>
                <div class="controls">
                  <select v-model="formDossierCadidature.entreprise_id">
                    <option value=""></option>
                    <option v-for="varText in afficherCandidatSelectionner(marcheid)" :key="varText.id"
                            :value="varText.entreprise_id">{{afficheNomEntreprise(varText.entreprise_id)}}</option>
                  </select>

                </div>
              </div>
              <hr>
              <!-- <input type="text" placeholder="Recherche ..." v-on:keyup="recherche" class="span6" v-model="search">-->
            </div>
          </td>

        </tr>
        <tr class="odd gradeX">

          <td>
            <div class="control-group">
              <label class="control-label">Registre de commerce</label>
              <div class="controls">
                <input type="text" class="span" placeholder="Registre de commerce" :value="afficherRegistreCommerceEntreprise(formDossierCadidature.entreprise_id)">
              </div>
            </div>
          </td>

          <td>
            <div class="control-group">
              <label class="control-label">Numéro de compte contribuable</label>
              <div class="controls">
                <input type="text" class="span" placeholder="Compte contribuable" :value="afficherNumeroContribuableEntreprise(formDossierCadidature.entreprise_id)">
              </div>
            </div>
          </td>
          <td>
            <div class="control-group">
              <label class="control-label">Raison sociale</label>
              <div class="controls">
                <input type="text" class="span" placeholder="Raison social" :value="afficheNomEntreprise(formDossierCadidature.entreprise_id)">
              </div>
            </div>
          </td>
          <td>
            <div class="control-group">
              <label class="control-label">Email</label>
              <div class="controls">
                <input type="text" class="span" placeholder="Email" :value="afficherEmailEntreprise(formDossierCadidature.entreprise_id)">
              </div>
            </div>
          </td>
        </tr>

        <tr class="odd gradeX">
          <td>
            <div class="control-group">
              <label class="control-label">Téléphone</label>
              <div class="controls">
                <input type="text" class="span" placeholder="Téléphone" :value="afficherTelephoneEntreprise(formDossierCadidature.entreprise_id)">
              </div>
            </div>
          </td>
          <td>
            <div class="control-group">
              <label class="control-label">Adresse </label>
              <div class="controls">
                <input type="text" class="span" placeholder="Adresse" :value="afficherAdressEntreprise(formDossierCadidature.entreprise_id)">
              </div>
            </div>
          </td>

          <td>
            <div class="control-group">
              <label class="control-label">Numéro du dossier</label>
              <div class="controls">
                <input type="text" readonly class="span" placeholder="Numero dossier" v-model="formDossierCadidature.numero_dossier">
              </div>
            </div>
          </td>
          <td>
            <div class="control-group">
              <label class="control-label">Type candidat</label>
              <div class="controls">

                <select v-model="formDossierCadidature.type_candidat_id" class="span" >
                  <option v-for="varText in typeCandidat" :key="varText.id"
                          :value="varText.id">{{varText.libelle}}</option>
                </select>

              </div>
            </div>
          </td>
        </tr>

        <tr class="odd gradeX">
          <td>
            <label>Appel Offre</label>
            <div class="controls">
              <select hidden v-model="formDossierCadidature.appel_offre_id" class="span" disabled>
                <option v-for="varText in listeAppelOffre(marcheid)" :key="varText.id"
                        :value="varText.id">{{varText.ref_appel}}</option>
              </select>
            </div>
          </td>
          <td>
            <div class="control-group">
              <label class="control-label">Accord de groupement</label>
              <div class="controls">
                <select v-model="formDossierCadidature.accord_group" class="span">
                    <option value="oui">OUI</option>
                    <option  value="non">NON</option>
                </select>
              </div>
            </div>
          </td>
          <td>
            <div class="control-group">
              <label class="control-label">Cautionnement provisoire</label>
              <div class="controls">
                <select v-model="formDossierCadidature.cautionnement_prov" class="span">
                  <option value=""></option>
                  <option value="oui">OUI</option>
                  <option  value="non">NON</option>
                </select>
<!--                <input type="text" class="span" placeholder="Cautionnement" v-model="formDossierCadidature.cautionnement_prov">-->
              </div>
            </div>
          </td>

          <td>
            <div class="control-group">
              <label class="control-label">Pouvoir de signature</label>
              <div class="controls">
<!--                <input type="text" class="span" placeholder="Pouv Hile Signature" v-model="formDossierCadidature.pouv_habil_signataire">-->

                <select v-model="formDossierCadidature.pouv_habil_signataire" class="span">
                  <option value=""></option>
                  <option value="oui">OUI</option>
                  <option  value="non">NON</option>
                </select>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="3" v-if="formDossierCadidature.accord_group=='oui'">
            <!--            <input type="text" class="span12" readonly placeholder="Numero dossier" v-model="formDossierCadidature.nom_cand">-->
           <h3>Nom Groupement : {{formDossierCadidature.nom_cand}}</h3> {{formDossierCadidature.nom_cand}}
          </td>
        </tr>
      </table>
      <div class="span12"  v-if="formDossierCadidature.accord_group=='oui'">
        <h6>VEILLEZ RENSEIGNER LES ENTREPRISES</h6>
        <table class="table">
          <tbody>
          <tr>
            <td>
              <label>ENTREPRSE </label>
              <model-list-select style="background-color: #fff;"
                                 class="wide"
                                 :list="entreprises"
                                 v-model="nom_structure"
                                 option-value="id"
                                 option-text="raison_sociale"
                                 placeholder="Entreprise"
              >

              </model-list-select>

            </td>

            <td>
              <hr>
              <button class="btn btn-danger" @click.prevent="addStructure()">
                Ajouter
              </button>
            </td>
          </tr>
          <tr class="odd gradeX" v-for="appelOffre in structure"
              :key="'APM'+appelOffre">

            <td>
              {{appelOffre.raison_sociale || 'Non renseigné'}}
            </td>
            <div class="btn-group">
              <button class="btn btn-link" title="Supprimer" @click.prevent="supprimeStructureSelectionner(appelOffre.id)">
                <span class=""><i class="icon-trash"></i></span>
              </button>

            </div>

          </tr>
          </tbody>
        </table>

      </div>
      <a @click.prevent="ajouterDossierCandidature" class="btn btn-primary"
         href="#">Enregistrer dossier du soumissionnaire</a>
<!--      <div class="widget-content tab-content">-->


<!--        <div id="tab00001" class="tab-pane active">-->

<!--        </div>-->

<!--        <div id="tab00007" class="tab-pane">-->
<!--          <table class="table table-bordered table-striped">-->

<!--            <tr class="odd gradeX">-->

<!--              <td>-->
<!--                <div class="control-group">-->
<!--                  <label class="control-label">Attestion banc</label>-->
<!--                  <div class="controls">-->
<!--                    <input type="text" class="span" placeholder="Attestation banc" v-model="formDossierCadidature.attest_banc">-->
<!--                  </div>-->
<!--                </div>-->
<!--              </td>-->

<!--              <td>-->
<!--                <div class="control-group">-->
<!--                  <label class="control-label">Formulaire proo techn</label>-->
<!--                  <div class="controls">-->
<!--                    <input type="text" class="span" placeholder="Formul propo tech" v-model="formDossierCadidature.formul_propo_tech">-->
<!--                  </div>-->
<!--                </div>-->
<!--              </td>-->

<!--              <td>-->
<!--                <div class="control-group">-->
<!--                  <label class="control-label">Fiche de renseignement </label>-->
<!--                  <div class="controls">-->
<!--                    <input type="text" class="span" placeholder="Fiche renseignement" v-model="formDossierCadidature.fiche_rsgnt_cand">-->
<!--                  </div>-->
<!--                </div>-->
<!--              </td>-->
<!--              <td>-->
<!--                <div class="control-group">-->
<!--                  <label class="control-label">Pièce administratif</label>-->
<!--                  <div class="controls">-->
<!--                    <input type="text" class="span" placeholder="Piece Admin" v-model="formDossierCadidature.piece_admin">-->
<!--                  </div>-->
<!--                </div>-->
<!--              </td>-->
<!--            </tr>-->

<!--            <tr class="odd gradeX">-->
<!--              <td>-->
<!--                <div class="control-group">-->
<!--                  <label class="control-label">Fiche renseignement nombre groupe</label>-->
<!--                  <div class="controls">-->
<!--                    <input type="text" class="span" placeholder="Fiche renseignement nombre groupe" v-model="formDossierCadidature.fiche_rsgnt_mbre_group">-->
<!--                  </div>-->
<!--                </div>-->
<!--              </td>-->
<!--              <td>-->
<!--                <div class="control-group">-->
<!--                  <label class="control-label">Antécédent marche non exe</label>-->
<!--                  <div class="controls">-->
<!--                    <input type="text" class="span" placeholder="Atcent marche non exe" v-model="formDossierCadidature.atcdent_marche_non_exe">-->
<!--                  </div>-->
<!--                </div>-->
<!--              </td>-->

<!--              <td>-->
<!--                <div class="control-group">-->
<!--                  <label class="control-label">Org travau site</label>-->
<!--                  <div class="controls">-->
<!--                    <input type="text" class="span" placeholder="Org travau" v-model="formDossierCadidature.org_travau_site">-->
<!--                  </div>-->
<!--                </div>-->
<!--              </td>-->

<!--              <td>-->
<!--                <div class="control-group">-->
<!--                  <label class="control-label">Metch real travau</label>-->
<!--                  <div class="controls">-->
<!--                    <input type="text" class="span" placeholder="Meth real travau" v-model="formDossierCadidature.meth_real_travau">-->
<!--                  </div>-->
<!--                </div>-->
<!--              </td>-->

<!--            </tr>-->




<!--            <tr class="odd gradeX">-->

<!--              <td>-->
<!--                <label>Procedure de passation</label>-->
<!--                <div class="controls">-->
<!--                  <input-->
<!--                      type="text"-->
<!--                      :value="afficherLibelleTypeProcedure(afficherTypeProcedureId(marcheid))"-->
<!--                      class="span"-->
<!--                      readonly-->
<!--                  />-->
<!--                </div>-->
<!--              </td>-->
<!--              <td>-->
<!--                <div class="control-group">-->
<!--                  <label class="control-label">Date de naissance</label>-->
<!--                  <div class="controls">-->
<!--                    <input type="date" class="span" placeholder="" v-model="formDossierCadidature.date_nais_cand">-->
<!--                  </div>-->
<!--                </div>-->
<!--              </td>-->
<!--              <td>-->
<!--                <div class="control-group">-->
<!--                  <label class="control-label">Capacite financiere</label>-->
<!--                  <div class="controls">-->
<!--                    <input type="text" class="span" placeholder="Capacite financiere" v-model="formDossierCadidature.capacite_financiere">-->
<!--                  </div>-->
<!--                </div>-->
<!--              </td>-->

<!--              <td>-->
<!--                <div class="control-group">-->
<!--                  <div class="controls">-->
<!--                    <label class="control-label">Prog mobilisation</label>-->
<!--                    <input type="Text" class="span" placeholder="Programme mobilisation" v-model="formDossierCadidature.prog_mobilisation">-->
<!--                  </div>-->
<!--                </div>-->
<!--              </td>-->
<!--            </tr>-->

<!--            <tr class="odd gradeX">-->
<!--              <td>-->
<!--                <div class="control-group">-->
<!--                  <label class="control-label">CAA moyen acc entre</label>-->
<!--                  <div class="controls">-->
<!--                    <input type="text" class="span" placeholder="CAA moyen ac entre" v-model="formDossierCadidature.caa_moyen_ac_entre">-->
<!--                  </div>-->
<!--                </div>-->
<!--              </td>-->
<!--              <td>-->
<!--                <div class="control-group">-->
<!--                  <label class="control-label">Capacite finanancier</label>-->
<!--                  <div class="controls">-->
<!--                    <input type="text" class="span" placeholder="Capacite financement" v-model="formDossierCadidature.capacite_financement">-->
<!--                  </div>-->
<!--                </div>-->
<!--              </td>-->
<!--              <td>-->
<!--                <div class="control-group">-->
<!--                  <label class="control-label">Capacite techn exp</label>-->
<!--                  <div class="controls">-->
<!--                    <input type="text" class="span" placeholder="Capacite tech exp" v-model="formDossierCadidature.capacite_tech_exp">-->
<!--                  </div>-->
<!--                </div>-->
<!--              </td>-->
<!--              <td>-->
<!--                <div class="control-group">-->
<!--                  <label class="control-label">Montant offre financiere</label>-->
<!--                  <div class="controls">-->
<!--                    <input type="text" class="span" placeholder="Mont offre financiere" v-model="formDossierCadidature.mt_offre_financiere">-->
<!--                  </div>-->
<!--                </div>-->
<!--              </td>-->
<!--            </tr>-->


<!--          </table>-->
<!--        </div>-->

<!--       -->

<!--      </div>-->



















    </div>

<!--Liste des candidats -->
    <div v-if="isDetailDossierCandidature">

      <!--contratualisation-->
      <!--dossier candidature-->
      <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
        <h5>Nom du candidat : {{detail_dossier_candidature.nom_cand}} {{detail_dossier_candidature.prenom_cand}}  Numero dossier :{{detail_dossier_candidature.numero_dossier}} </h5>
        <button class="btn" title="Affiche la liste des candidats" @click="NotisFormulaireDossierCand" v-if="!isButtunAddDossierCandidat"><span class=""><i class="icon-eye-open"></i></span></button>
      </div>


      <CandidatDP :detail_dossier_candidature="detail_dossier_candidature"></CandidatDP>

      <div class="widget-title">
        <ul class="nav nav-tabs">
          <li class="active"><a data-toggle="tab" href="#offre_tech">OFFRE FINANCIERE</a></li>
          <!-- <li class=""><a data-toggle="tab" href="#offre_fin">OFFRE FINANCIERE</a></li> -->
        </ul>
      </div>

      <div class="widget-content tab-content">
        <!-- <div id="offre_tech" class="tab-pane active">
         
          <OffreTechniqueDP :dossier_candidature="detail_dossier_candidature"></OffreTechniqueDP>
        </div> -->
        <div id="offre_fin" class="tab-pane active">
         
          <OffreFinanciereDP :dossier_candidature="detail_dossier_candidature"></OffreFinanciereDP>
        </div>

      </div>


 
    </div>

    <div id="modificationDossierCandidatModal" class="modal hide grdirModalActeEffet">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modification dossier candidatnnnn</h3> 
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tbody>
          <tr class="odd gradeX">

            <td>
              <div class="control-group">
                <label class="control-label">Registre de commerce</label>
                <div class="controls">
                  <input type="text" class="" placeholder="Registre de commerce" :value="afficherRegistreCommerceEntreprise(editDossierCadidature.entreprise_id)">
                </div>
              </div>
            </td>

            <td>
              <div class="control-group">
                <label class="control-label">Numéro de compte contribuable</label>
                <div class="controls">
                  <input type="text" class="" placeholder="Situation Geographique" :value="afficherNumeroContribuableEntreprise(editDossierCadidature.entreprise_id)">
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Raison sociale</label>
                <div class="controls">
                  <input type="text" class="" placeholder="Raison social" :value="afficheNomEntreprise(editDossierCadidature.entreprise_id)">
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Email</label>
                <div class="controls">
                  <input type="text" class="" placeholder="Email" :value="afficherEmailEntreprise(editDossierCadidature.entreprise_id)">
                </div>
              </div>
            </td>
          </tr>


          <tr class="odd gradeX">
            <td>
              <div class="control-group">
                <label class="control-label">Téléphone</label>
                <div class="controls">
                  <input type="text" class="" placeholder="Telphone" :value="afficherTelephoneEntreprise(editDossierCadidature.entreprise_id)">
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Adresse </label>
                <div class="controls">
                  <input type="text" class="" placeholder="Adresse" :value="afficherAdressEntreprise(editDossierCadidature.entreprise_id)">
                </div>
              </div>
            </td>

            <td>

              <div class="control-group">
                <label class="control-label">Numéro de dossier</label>
                <div class="controls">
                  <input type="text" class="" placeholder="Numero dossier" v-model="editDossierCadidature.numero_dossier">
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Type candidat</label>
                <div class="controls">

                  <select  v-model="editDossierCadidature.type_candidat_id" class="span" >
                    <option v-for="varText in typeCandidat" :key="varText.id"
                            :value="varText.id">{{varText.libelle}}</option>
                  </select>

                </div>
              </div>
            </td>




          </tr>


          <tr class="odd gradeX">
            <td>
              <label>Appel d'Offre</label>
              <div class="controls">
                <select hidden v-model="editDossierCadidature.appel_offre_id" class="span" disabled>
                  <option v-for="varText in listeAppelOffre(marcheid)" :key="varText.id"
                          :value="varText.id">{{varText.ref_appel}}</option>
                </select>
              </div>
            </td>
              <td>
            <div class="control-group">
              <label class="control-label">Accord de groupement</label>
              <div class="controls">
                <select v-model="editDossierCadidature.accord_group" class="span">
                    <option value="oui">OUI</option>
                    <option  value="non">NON</option>
                </select>
              </div>
            </div>
          </td>
            <td>
              <div class="control-group">
                <label class="control-label">Cautionnement provisoire</label>
                <div class="controls">
                  <input type="text" class="" placeholder="Cautionnement" v-model="editDossierCadidature.cautionnement_prov">
                </div>
              </div>
            </td>

            <td> 
              <div class="control-group">
                <label class="control-label">Pouvoir de signature</label>
                <div class="controls">
                  <input type="text" class="" placeholder="Pouv Hile Signature" v-model="editDossierCadidature.pouv_habil_signataire">
                </div>
              </div>
            </td>


          </tr>


          <tr class="odd gradeX">

            <td>
              <div class="control-group">
                <label class="control-label">Attestion banc</label>
                <div class="controls">
                  <input type="text" class="" placeholder="Attestation banc" v-model="editDossierCadidature.attest_banc">
                </div>
              </div>
            </td>

            <td>
              <div class="control-group">
                <label class="control-label">Formulaire proo techn</label>
                <div class="controls">
                  <input type="text" class="" placeholder="Formul propo tech" v-model="editDossierCadidature.formul_propo_tech">
                </div>
              </div>
            </td>

            <td>
              <div class="control-group">
                <label class="control-label">Fiche de renseignement </label>
                <div class="controls">
                  <input type="text" class="" placeholder="Fiche renseignement" v-model="editDossierCadidature.fiche_rsgnt_cand">
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Pièce administrative</label>
                <div class="controls">
                  <input type="text" class="" placeholder="Piece Admin" v-model="editDossierCadidature.piece_admin">
                </div>
              </div>
            </td>
          </tr>


          <tr class="odd gradeX">
            <td>
              <div class="control-group">
                <label class="control-label">Fiche rsgnt nombre groupe</label>
                <div class="controls">
                  <input type="text" class="" placeholder="Fiche renseignement nombre groupe" v-model="editDossierCadidature.fiche_rsgnt_mbre_group">
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Attécédent marché non exe</label>
                <div class="controls">
                  <input type="text" class="" placeholder="Atcent marche non exe" v-model="editDossierCadidature.atcdent_marche_non_exe">
                </div>
              </div>
            </td>

            <td>
              <div class="control-group">
                <label class="control-label">Org travau site</label>
                <div class="controls">
                  <input type="text" class="" placeholder="Org travau" v-model="editDossierCadidature.org_travau_site">
                </div>
              </div>
            </td>

            <td>
              <div class="control-group">
                <label class="control-label">Metch real travau</label>
                <div class="controls">
                  <input type="text" class="" placeholder="Meth real travau" v-model="editDossierCadidature.meth_real_travau">
                </div>
              </div>
            </td>

          </tr>

          <tr class="odd gradeX">

            <td>
              <label>Procédure de passation</label>
              <div class="controls">
                <select v-model="editDossierCadidature.procedure_passation_id" class="span" disabled>
                  <option v-for="varText in procedurePassations" :key="varText.id"
                          :value="varText.id">{{varText.libelle}}</option>
                </select>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Date de naissance</label>
                <div class="controls">
                  <input type="date" class="" placeholder="" v-model="editDossierCadidature.date_nais_cand">
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Capacité financière</label>
                <div class="controls">
                  <input type="text" class="" placeholder="Capacite financiere" v-model="editDossierCadidature.capacite_financiere">
                </div>
              </div>
            </td>

            <td>
              <div class="control-group">
                <div class="controls">
                  <label class="control-label">Prog mobilisation</label>
                  <input type="Text" class="" placeholder="Programme mobilisation" v-model="editDossierCadidature.prog_mobilisation">
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div class="control-group">
                <label class="control-label">CAA moyen acc entre</label>
                <div class="controls">
                  <input type="text" class="" placeholder="CAA moyen ac entre" v-model="editDossierCadidature.caa_moyen_ac_entre">
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Capacité financière</label>
                <div class="controls">
                  <input type="text" class="" placeholder="Capacite financement" v-model="editDossierCadidature.capacite_financement">
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Capacité techn exp</label>
                <div class="controls">
                  <input type="text" class="" placeholder="Capacite tech exp" v-model="editDossierCadidature.capacite_tech_exp">
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Montant offre financière</label>
                <div class="controls">
                  <input type="text" class="" placeholder="Mont offre financiere" v-model="editDossierCadidature.mt_offre_financiere">
                </div>
              </div>
            </td>
          </tr>
       
          </tbody>
      
        </table>
      </div>
         <div class="span12"  v-if="editDossierCadidature.accord_group=='oui'">

        <table class="table">
          <tbody>
          <tr>
            <td>
              <label>ENTREPRISE </label>
              <model-list-select style="background-color: #fff;"
                                 class="wide"
                                 :list="entreprises"
                                 v-model="editDossierCadidature.nom_structure"
                                 option-value="id"
                                 option-text="raison_sociale"
                                 placeholder="Entreprise"
              >

              </model-list-select>

            </td>

            <td>
              <hr>
              <button class="btn btn-danger" @click.prevent="addStructure1()">
                Ajouter
              </button>
            </td>
          </tr>
          <tr class="odd gradeX" v-for="appelOffre in structure"
              :key="'APM'+appelOffre">

            <td>
              {{appelOffre.raison_sociale || 'Non renseigné'}}
            </td>
            <div class="btn-group">
              <button class="btn btn-link" title="Supprimer" @click.prevent="supprimeStructureSelectionner(appelOffre.id)">
                <span class=""><i class="icon-trash"></i></span>
              </button>
         
            </div>

          </tr>
          </tbody>
        </table>

      </div>
      

      <div class="modal-footer">
        <a data-dismiss="modal" class="btn btn-primary" @click.prevent="modificationDossierCandidatLocal" href="#">Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Annuler</a> </div>
    </div>

 
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {formatageSomme} from "@/Repositories/Repository";
import moment from "moment";
//import CandidatDP from "@/pages/bien_service/component/OuvertureOffre/dossier_candidat/CandidatDP";
import OffreFinanciereDP from "@/pages/bien_service/component/OuvertureOffre/dossier_candidat/OffreFinanciereDP";
 import CandidatDP from "../../../component/OuvertureOffre/dossier_candidat/CandidatDP"
//import OffreTechnique from "@/pages/bien_service/component/OuvertureOffre/dossier_candidat/OffreTechnique";
//import OffreTechniqueDP from "@/pages/bien_service/component/OuvertureOffre/dossier_candidat/OffreTechniqueDP";
import {  ModelListSelect } from 'vue-search-select'
import 'vue-search-select/dist/VueSearchSelect.css'
export default {
name: "DossierCandidat",
  props:["macheid"],
  components:{
    CandidatDP,
    OffreFinanciereDP,
    //OffreTechnique,
   // OffreTechniqueDP,
    ModelListSelect
  },
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ],
      nom_structure:"",
      structure:[],
      structure_id:[],
      demande:{},
      acteEffetActive:"",
      formFournisseur : {
        numero_cc: "",
        numero_rc: "",
        raison_sociale: "",
        telephone:"",
        email:"",
        adresse:"",
      },
      formAnalyseDMP:{
        //document_procedure_id:"",
        demande_ano_id:"",
        observation:"",
        avis_bail:"",
        ref_dmp:"",
        date_avis_bail:""
      },
      edite_analyse_dossier:"",
      edite_cojo:"",
      editer_mandater:"",
      edite_lettre_invitation:"",
      detail_dossier_candidature:"",
      detail_offre_technique:"",
      detail_offre_finnancier:"",
      detail_marche:"",
      marcheid:"",
      appel_offre_marche:"",
      edite_demande_dao:"",
      edite_analyse_dpm:"",
      formLot:{
        numero_lot:"",
        libelle_lot:"",
        montant_lot:"",
        marche_id:"",
        appel_offre_id:"", 
        // mode_passation_id:""
      }
      ,
      formBailleur:{
        type_finnancement_id:"",
        montant:0,
        marche_id:"",
        bailleur_id:"",
      },
      edit_bailleur_marche:""
      ,formMandater:{
        lettre_invitation_id:"",
        date_id:"",
        fichier_joint:"",
        nom_mandat:"",
        prenom_nom:"",
        matricule_m:""
      },
      edite_pv:"",
      formAnalyseDossier:{
        date_analyse:"",
        appel_offre_id:"",
        note_analyse:"",
        rang_analyse:"",
        // decision:"",
        dossier_candidat_id:"",
        type_analyse_id: "",
        cojo_id:"",
        // motif:""
      },
      affiche_bouton_ajouter_cojo:false,
      idcojo:"",
      formDataCojo:{
        lettre_invitation_id:"",
        condition_id:'',
        controleur_finnancier:"",
        dmp:"",
        autorite_contractante:"",
        date_invitation:"",
        date_composition:"",
        num_dossier_appel_offre:"",
        nbr_participant:"",
        matricule:""
      },
      modification_offre_finnancier_recupere:{
        id:"",
        numero_lot:"",
        designation:"",
        unite:"",
        prix_unitaire:"",
        montant_total_ht:"",
        montant_total_ttc:"",
        taux:"",
        tva:"",
        dossier_candidat_id:"",
        quantite:""
      },
      isFormulaireDossierCandidature:false,
      isDetailDossierCandidature:false,
      isButtunAddDossierCandidat:true,
      formDossierCadidature:{
        secteur_activite_id:"",
        type_candidat_id:"",
        numero_cc:"",
        type_candidat:"",
        diff:1,
        dif_fin:0,
        nom_cand:"",
        prenom_cand:"",
        marche_id:"",
        date_nais_cand:"",
        telephone_cand:"",
        adresse_post:"",
        situation_geo:"",
        email_cand:"",
        procedure_passation_id:"",
        appel_offre_id:"",
        accord_group:"non",
        cautionnement_prov:"",
        pouv_habil_signataire:"",
        piece_admin:"",
        reg_com:"",
        attest_banc:"",
        formul_propo_tech:"",
        fiche_rsgnt_cand:"",
        fiche_rsgnt_mbre_group:"",
        atcdent_marche_non_exe:"",
        org_travau_site:"",
        meth_real_travau:"",
        prog_mobilisation:"",
        capacite_financiere:"",
        caa_moyen_ac_entre:"",
        capacite_tech_exp:"",
        mt_offre_financiere:"",
        numero_dossier:"",
        entreprise_id:"",
        capacite_financement:"",
      },
      editDossierCadidature:{
        nom_structure:"",
        secteur_activite_id:"",
        type_candidat_id:"",
        numero_cc:"",
        type_candidat:"", 
        nom_cand:"",
        prenom_cand:"",
        date_nais_cand:"",
        telephone_cand:"",
        adresse_post:"",
        situation_geo:"",
        email_cand:"",
        procedure_passation_id:"",
        appel_offre_id:"",
        accord_group:"",
        cautionnement_prov:"",
        pouv_habil_signataire:"",
        piece_admin:"",
        reg_com:"",
        attest_banc:"",
        formul_propo_tech:"",
        fiche_rsgnt_cand:"",
        fiche_rsgnt_mbre_group:"",
        atcdent_marche_non_exe:"",
        org_travau_site:"",
        meth_real_travau:"",
        prog_mobilisation:"",
        capacite_financiere:"",
        caa_moyen_ac_entre:"",
        capacite_tech_exp:"",
        mt_offre_financiere:"",
        numero_dossier:"",
        marche_id:"",
        capacite_financement:"",
      },
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
      },
      formEffetFinancier:{
        code_act:"",
        libelle_act:"",
        reference_act:"",
        objet_act:"",
        incidence_financiere:"",
        montant_act:"",
        date_attributaire:"",
        date_reception:"",
        duree:"",
        date_fin_exe:"",
        date_odre_service:"",
        autorite_approbation:"",
        date_approbation:"",
        livrable_id:"",
        text_juridique_id:"",
        type_act_effet_id:"",
        analyse_dossier_id:"",
        entreprise_id:"",
        marche_id:"",
        numero_marche:"",
        ano_bailleur_id:""
      },
      formDataFacture:{
        prix_propose_ttc:"",
        prix_propose_ht:"",
        prix_unitaire:"",
        montant_facture:"",
        ligne_budgetaire:"",
        objet_facture:"",
        id_type_facture:"",
        code_acte_depense:"",
        numero_facture:"",
      },
      editActeEffetFinancier:{
        code_act:"",
        libelle_act:"",
        reference_act:"",
        objet_act:"",
        incidence_financiere:"",
        montant_act:"",
        date_attributaire:"",
        date_reception:"",
        duree:"",
        date_fin_exe:"",
        date_odre_service:"",
        autorite_approbation:"",
        date_approbation:"",
        livrable_id:"",
        text_juridique_id:"",
        type_act_effet_id:"",
        analyse_dossier_id:"",
        entreprise_id:"",
        marche_id:"",
        numero_marche:"",
        ano_bailleur_id:""
      },
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
      formDemande:{
        date_demande:"",
        ref_marche:"",
        num_courrier:"",
        analyse_dossier_id:"",
        proce_verbal_jugement_offre_id:""
      },
      editMarche: {
        id:"",
        attribue:"",
        numero_marche:""
      },
      editDemandeAno:{
        date_demande:"",
        ref_marche:"",
        num_courrier:""
      },
      formObservation:{
        date_avis_baill:"",
        avis_bail:"",
        observations_bailleur:"",
        ano_dmp_bailleur_id:"",
        document_procedure_id:""
      },
      editObservation1:{
        date_avis_baill:"",
        avis_bail:"",
        observations_bailleur:"",
        ano_dmp_bailleur_id:"",
        document_procedure_id:""
      },
      edite_membre_cojo:"",
      formAno:{
        date_ano_dmp:"",
        observations_bailleur:"",
        avis_bail:"",
        ref_ano_dmp:"",
        numero_courie:"",
        appel_offre_id:"",
        analyse_dmp_id:""
      },
      avis_dmp:"",
      editAno:{
        date_ano_dmp:"",
        ref_ano_dmp:"",
        numero_courie:""
      },
      editDemamnde:{
        date_demande:"",
        ref_marche:"",
        num_courrier:""
      },
      formPv:{
        ref_pv:"",
        fichier_joint_pv:"",
      },
      editDossier:{
        type_candidat:"",
        nom_cand:"",
        prenom_cand:"",
        date_nais_cand:"",
        telephone_cand:"",
        adresse_post:"",
        situation_geo:"",
        email_cand:"",
        procedure_passation_id:"",
        appel_offre_id:"",
      },
      edite_ano_bailleur_dmp:"",
      edite_offre_technique:"",
      edite_offre_financiere:"",
      formData: {
        ref_appel:"",
        type_appel:"",
        financement:"",
        nom_bailleurs:"",
        date_emission:"",
        date_limite:"",
        objet_appel:"",
        imputation:"",
        marche_id:"",
      },
      formDataMembreCojo: {
        matricule:"",
        type_appel:"",
        nom_prenom:"",
        role:"",
        cojo_id:"",
      },
      edit_offre_technique_recupere:"",
      formLettre: {
        appel_offre_id:"",
        objet_lettre:"",
        date_lettre:"",
        ref_lettre:"",
        destination:"",
        date_cojo:""
      },
      edite_appel_offre: "",
      search: "",
      edite_lot:{
        numero_lot:"",
        libelle_lot:"",
        montant_lot:"",
        marche_id:"",
        appel_offre_id:"",
        //mode_passation_id:""
      },
      message_mandater:'',
      ischniqueFinancier:false,
      namePDF: "",
      fichierPDF: "",
      imagePDF:"",
      selectedFile:"",
      resultaAnalysePv:[],
      resultaFinalCandidat:[],
      entreprise_vainqueur:"",
      registrecc_vainqueur:"",
      identreprise_vainqueur:"",
      message_setion_vainqueur:"",
      info_avis_bailleur:"",
      namePDFDemandeAno: "",
      fichierPDFDemandeAno: "",
      imagePDFDemandeAno:"",
      selectedFileDemandeAno:"",
    };
  },
  created() {
    this.marcheid=this.$route.params.id
    this.detail_marche = this.getMarchePersonnaliser.find(
        idmarche => idmarche.id == this.$route.params.id
    )

    console.log(this.afficherCandidatSelectionner(this.marcheid))
    /*  this.appel_offre_marche=this.appelOffres.filter( idmarche => idmarche.marche.id == this.$route.params.id)
      console.log(this.appel_offre_marche)*/
  },
  computed: {
    ...mapGetters("bienService", ["gettersCotationPersonnaliser","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots",
      "modePassations", "procedurePassations","getterDossierCandidats","marches","gettersEntreprisePreselectionner",
      "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation",
      "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
      "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
      "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables",
      "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
    ...mapGetters('personnelUA', ['acteur_depenses']),
    ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises']),
    ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
      'types_financements']) ,

    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),


    afficherCandidatSelectionner() {
      return id => {
        if (id != null && id != "") {
          let vm=this
          let collection=[]
        let  objet_personnel=this.gettersEntreprisePreselectionner.filter(qtreel => qtreel.marche_id == id);



          objet_personnel.forEach(function (value) {
            let objet_candidat=vm.getterDossierCandidats.find(item=>{
              if(item.entreprise_id==value.entreprise_id && item.marche_id == value.marche_id){
                return item
              }
            })

           if(objet_candidat==undefined){
             collection.push(value)
           }
          })
           return collection
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

    // afficher registre de commerce de l'entreprise

    afficherRegistreCommerceEntreprise() {
      return id => {
        if (id != null && id != "") {
          const qtereel = this.entreprises.find(qtreel => qtreel.id == id);
          if (qtereel) {
            return qtereel.numero_cc;
          }
          return 0
        }
      };
    },

    // afficher numero de contribuable entreprise


    afficherNumeroContribuableEntreprise() {
      return id => {
        if (id != null && id != "") {
          const qtereel = this.entreprises.find(qtreel => qtreel.id == id);
          if (qtereel) {
            return qtereel.numero_rc;
          }
          return 0
        }
      };
    },

/// afficher l'email de l'entreprise
    afficherEmailEntreprise() {
      return id => {
        if (id != null && id != "") {
          const qtereel = this.entreprises.find(qtreel => qtreel.id == id);
          if (qtereel) {
            return qtereel.email;
          }
          return 0
        }
      };
    },
    afficherIdEntreprise() {
      return id => {
        if (id != null && id != "") {
          const qtereel = this.entreprises.find(qtreel => qtreel.id == id);
          if (qtereel) {
            return qtereel.id;
          }
          return 0
        }
      };
    },


    afficherTelephoneEntreprise() {
      return id => {
        if (id != null && id != "") {
          const qtereel = this.entreprises.find(qtreel => qtreel.id == id);
          if (qtereel) {
            return qtereel.telephone;
          }
          return 0
        }
      };
    },

// afficher l'adresse de l'entreprise
    afficherAdressEntreprise() {
      return id => {
        if (id != null && id != "") {
          const qtereel = this.entreprises.find(qtreel => qtreel.id == id);
          if (qtereel) {
            return qtereel.adresse;
          }
          return 0
        }
      };
    },






    //            afficheRef() {
    //   return id => {
    //     if (id != null && id != "") {
    //        const qtereel = this.appelOffres.find(qtreel => qtreel.id == id);
    //   if (qtereel) {
    //     return qtereel.ref_appel;
    //   }
    //   return 0
    //     }
    //   };
    // },
    afficheCandidat() {
      return id => {
        if (id != null && id != "") {
          const qtereel = this.typeCandidat.find(qtreel => qtreel.id == id);
          if (qtereel) {
            return qtereel.libelle;
          }
          return 0
        }
      };
    },
// calculons le nombre de jours pour acteur depense
    nombreDejourCalcule(){
      let vM=this;
      const acteAffet = vM.formEffetFinancier
      if(acteAffet.date_odre_service == acteAffet.date_fin_exe &&  acteAffet.date_fin_exe !=="" && acteAffet.date_odre_service !=="") return 1
      if(acteAffet.date_fin_exe =="" && acteAffet.date_odre_service =="") return null
      var dateF = new Date(acteAffet.date_fin_exe).getTime()
      var dateO = new Date(acteAffet.date_odre_service).getTime()
      var resultat = dateF - dateO
      var diffJour =  resultat / (1000 * 3600 * 24)
      if(isNaN(diffJour)) return null
      if(parseFloat(diffJour) < 0 ) return "durée invalide"
      vM.formEffetFinancier.duree=diffJour
      return  diffJour;

    },
    nombreDejourCalculeModification(){
      let vM=this;
      const acteAffet = vM.editActeEffetFinancier
      if(acteAffet.date_odre_service == acteAffet.date_fin_exe &&  acteAffet.date_fin_exe !=="" && acteAffet.date_odre_service !=="") return 1
      if(acteAffet.date_fin_exe =="" && acteAffet.date_odre_service =="") return null
      var dateF = new Date(acteAffet.date_fin_exe).getTime()
      var dateO = new Date(acteAffet.date_odre_service).getTime()
      var resultat = dateF - dateO
      var diffJour =  resultat / (1000 * 3600 * 24)
      if(isNaN(diffJour)) return null
      if(parseFloat(diffJour) < 0 ) return "durée invalide"
      vM.formEffetFinancier.duree=diffJour
      return  diffJour;

    },
    getDateFinExécutionValue(){
      return !this.formEffetFinancier.date_odre_service !=""
    },
    getDateFinExécutionValueMod(){
      return !this.editActeEffetFinancier.date_odre_service !=""
    },
    verrouObjection(){
      return this.formAnalyseDMP.avis_bail == "1";
    },

    recupererNumeroCourier() {

      const norme = this.getterDemandeAno.find(normeEquipe => normeEquipe.ref_marche == this.detail_marche.reference_marche);
      if (norme) {
        return norme.num_courrier;
      }
      return ""
    },
    // affichage de l'avis DMP
    recuperationDeAvisDmp(){

      let numero = this.getterAnalyseDMP.find(numeroDmp => numeroDmp.avis_bail == 1)
      if(numero) {
        if(numero.avis_bail==1){
          return "non objection"
        }else{
          return "objection"
        }

      }
      return null
    },
    afficherIdMarche() {
      return id => {
        if (id != null && id != "") {
          const qtereel = this.marches.find(qtreel => qtreel.id == id);
          if (qtereel) {
            return qtereel.reference_marche;
          }
          return 0
        }
      };
    },

    marcheDetail(){
      return  marche_id=>{
        if (marche_id!="") {
          const vM=this;
          // console.log("Marche detail")
          let Objet=this.marches.find(idmarche => idmarche.id == marche_id)
          if(Objet!=undefined){
            vM.formData.type_appel=Objet.procedure_passation.type_procedure.libelle;
            vM.formData.imputation=Objet.imputation;
            vM.formDossierCadidature.procedure_passation_id=Objet.procedure_passation.id;
            vM.formDemande.ref_marche=Objet.reference_marche
          }
          return  this.marches.find(idmarche => idmarche.id == marche_id
          )
        }
      }
    },
    libelleLot() {
      const typeUniteA = this.lots.find(typeUa=> typeUa.id == this.formOffreFinanciere.numero_lot);
      if (typeUniteA) {
        return typeUniteA.libelle_lot;

      }
      return ""
    },
    affcherTauxEnCours() {

      const norme = this.taux.find(normeEquipe => normeEquipe.encours == 1);
      if (norme) {
        return norme.libelle;
      }
      return 0
    },
    tauxArrondit() {

      const norme = this.taux.find(normeEquipe => normeEquipe.encours == 1);
      if (norme) {
        return norme.arrondit;
      }
      return 0
    },
    montantHT() {
      let val;
      if(this.formOffreFinanciere.prix_unitaire!="" &&this.formOffreFinanciere.quantite!=""){
        val =  parseFloat(this.formOffreFinanciere.prix_unitaire) * parseFloat(this.formOffreFinanciere.quantite);
      }
      if (val) {
        return parseInt(val).toFixed(0);
      }

      return 0
    },
    montantTva() {
      const val =   parseFloat(this.montantHT) * parseFloat(this.tauxArrondit);

      if (val) {
        return parseInt(val).toFixed(0);
      }

      return 0
    },
    montantHTt() {
      const val = parseFloat(this.montantHT) + parseFloat(this.montantTva);

      if (val) {
        return parseInt(val).toFixed(0);
      }

      return 0
    },
    montantHTEdite() {
      let val;
      if(this.modification_offre_finnancier_recupere.prix_unitaire!="" && this.modification_offre_finnancier_recupere.quantite!=""){
        val =  parseFloat(this.modification_offre_finnancier_recupere.prix_unitaire) * parseFloat(this.modification_offre_finnancier_recupere.quantite);
      }
      if (val) {
        return parseInt(val).toFixed(0);
      }
      return 0
    },
    montantTvaEdite() {
      const val =   parseFloat(this.montantHTEdite) * parseFloat(this.tauxArrondit);
      if (val) {
        return parseInt(val).toFixed(0);
      }
      return 0
    },
    montantHTtEdite() {
      const val = parseFloat(this.montantHTEdite) + parseFloat(this.montantTvaEdite);
      if (val) {
        return parseInt(val).toFixed(0);
      }
      return 0
    },
    //afficher le motif avis bailleur
    afficherMotifBailleur(){
      return this.formAno.avis_bail =="1";
    },
    listeBailleurMarche(){
      return  marche_id=>{
        if (marche_id!="") {
          // console.log("MarcheBailleur")
          return this.personnaliseGetterMarcheBailleur.filter( idmarche => idmarche.marche_id == marche_id)
        }
      }
    },
    montantBailleurMarcheCompare(){
      return  marche_id=>{
        if (marche_id!="") {
          let initialValue = 0;
          let vM=this;
          //  let montantSaisie=parseFloat(vM.formBailleur.montant)
          let ObjetMontant =this.personnaliseGetterMarcheBailleur.filter( idmarche => idmarche.marche_id == marche_id).reduce(function (total, currentValue) {
            return total + parseFloat(currentValue.montant) ;
          }, initialValue);
          let montantConbiner=parseFloat(vM.formBailleur.montant) + parseFloat(ObjetMontant)
          return parseFloat(montantConbiner);
        }
      }
    }
    ,
    listeAppelOffre(){
      return  marche_id=>{
        if (marche_id!="") {
          //console.log("Marche appel offre")
          const vM=this;
          let Objet=this.appelOffres.find( idmarche => idmarche.marche_id == marche_id)
          // console.log("Marche appel offre 10")
          if(Objet!=undefined){
            vM.formDossierCadidature.appel_offre_id=Objet.id;
            vM.formAnalyseDossier.appel_offre_id = Objet.id;
            vM.formLot.appel_offre_id=Objet.id;
            vM.formAno.appel_offre_id = Objet.id
            vM.formLettre.appel_offre_id=Objet.id;
            vM.formDataCojo.num_dossier_appel_offre=Objet.ref_appel;
          }
          // console.log(Objet)
          return this.appelOffres.filter( idmarche => idmarche.marche_id == marche_id)
        }
      }
    },

    // isButtunAddDossierCandidat(){
    //     return id =>{
    //         if(id!=null && id!=""){
    //             let elementActive = this.gettersCotationPersonnaliser.find(item => item.marche_id==id && item.entreprise_id==null)
    //             return elementActive
    //         }
    //     }
    // },
    listeLots(){
      return  marche_id=>{
        if (marche_id!="") {
          //console.log("Marche lots")
          // let listeLotMarche =this.lots.filter( idmarche => idmarche.marche.id == marche_id)
          // const searchTerm = this.search.toLowerCase();
          //return this.lots.filter( idmarche => idmarche.marche.id == marche_id)
          return this.lots.filter( idmarche => idmarche.marche_id == marche_id)
        }
      }

    },

    //         listeAppelOffreLibelle() {
    //   return id => {
    //     if (id != null && id != "") {
    //        const qtereel = this.appelOffres.find(qtreel => qtreel.id == id);

    //   if (qtereel) {
    //     return qtereel.ref_appel;
    //   }
    //   return 0
    //     }
    //   };
    // },

    //         affichierAppelOffreid() {
    //   return id => {
    //     if (id != null && id != "") {
    //        const qtereel = this.appelOffres.find(qtreel => qtreel.marche_id == id);

    //   if (qtereel) {
    //     return qtereel.id;
    //   }
    //   return 0
    //     }
    //   };
    // },
    listePV(){
      return marche_id=>{
        if(marche_id!=""){
          let objet=this.getterProceVerballe.filter(item=>item.appel_offre.marche_id==marche_id);
          // console.log("PV est en cour10")
          return objet
        }
      }
    },
    listePVDemandePV(){
      return marche_id=>{
        if(marche_id!=""){
          return this.getterProceVerballe.find(item=>{
            if(item.appel_offre.marche_id==marche_id && item.avie==null ){
              let vM=this;
              vM.formDemande.proce_verbal_jugement_offre_id=item.id
              return item;
            }
          });
        }
      }
    },
    avisPv(){
      return reference=>{
        if(reference!=""){
          let info=this.getterProceVerballe.find(item=>item.reference==reference);
          if(info.avie==null){
            return null
          }else{
            return info.avie
          }
        }
        return null;
      }
    }
    ,
    dossierCandidature: function () {
      return marcheid => {
        if (marcheid != "") {
          console.log("Guei Roland")
          return this.getterDossierCandidats.filter(idmarche => idmarche.marche_id == marcheid && idmarche.diff==1 && idmarche.dif_fin==0)
        }
      }
    },
    lettreInvitationAMarche: function () {
      return marcheid => {
        if (marcheid != "") {
          //console.log("Marche lettre inviation marche")
          return this.getterLettreInvitation.filter(idmarche => idmarche.appel_offre.marche_id == marcheid)
        }
      }
    },
    listeMantater: function () {
      return marcheid => {
        if (marcheid != "") {
          let vM =this;
          let Objet =this.getterMandate.find(idmarche => idmarche.lettre_invitation.appel_offre.marche_id == marcheid);
          console.log("Ok c'est la vie")
          if(Objet!=undefined){
            vM.formDataCojo.lettre_invitation_id=Objet.lettre_invitation_id
            vM.formDataCojo.controleur_finnancier=Objet.nom_mandat+" "+Objet.prenom_nom
            vM.formDataCojo.matricule=Objet.matricule_m
            vM.formDataCojo.date_invitation=Objet.lettre_invitation.date_lettre
          }
          return this.getterMandate.filter(idmarche => idmarche.lettre_invitation.appel_offre.marche_id == marcheid)
        }
      }
    }
    ,
    listeCojo: function () {
      return marcheid => {
        if (marcheid != "") {
          let Objet=  this.getterCojos.find(idmarche => idmarche.lettre_invitation.appel_offre.marche_id == marcheid);
          let vM=this;
          if(Objet!=undefined){
            vM.idcojo=Objet.id
          }
          return this.getterCojos.filter(idmarche => idmarche.lettre_invitation.appel_offre.marche_id == marcheid)
        }
      }
    },
    listeMembreCojo: function (){
      let vM=this;
      if( vM.idcojo!=""){
        return this.getterMembreCojo.filter(idmem=>idmem.cojo_id==vM.idcojo);
      }
      return null;
    },
    listeAnalyseDossier: function () {
      return marcheid => {
        if (marcheid != "") {
          let objet= this.getterAnalyseDossiers.filter(idmarche => idmarche.dossier_candidature.appel_offre.marche_id == marcheid)
          return objet;
        }
      }
    },
    demandeAno: function () {
      return marcheid => {
        if (marcheid != "") {
          let obje=this.getterDemandeAno.filter(idmarche => idmarche.proce_verbal_offre.appel_offre.marche_id == marcheid)
          return obje
        }
      }
    },
    demandeAnoAnalyseDMP: function () {
      return marcheid => {
        if (marcheid != "") {
          // console.log("Marche demande ano AnalyseDmp marche_id")
          let obje=this.getterDemandeAno.find(idmarche => {
            if(idmarche.proce_verbal_offre.appel_offre.marche_id == marcheid && idmarche.proce_verbal_offre.avie==null){
              let vM=this;
              vM.formAnalyseDMP.demande_ano_id=idmarche.id;
              return idmarche;
            }
          })
          // console.log("Marche demande 41000000")
          return obje
        }
      }
    },
    listeAnalyseDPM: function () {
      return marcheid => {
        if (marcheid != "") {
          // console.log("Marche liste analyse dpm")
          let objet=this.getterAnalyseDMP.filter(idmarche => idmarche.demande_ano.proce_verbal_offre.appel_offre.marche_id == marcheid)
          // console.log("ok c'est la vie 010101")
          return objet;
        }
      }
    },
    analyseDMPValider(){
      return marcheid=>{
        if(marcheid != ""){
          let objet=this.getterAnalyseDMP.find(item=>{
            if(item.demande_ano.proce_verbal_offre.appel_offre.marche_id == marcheid && item.avis_bail==1 ){
              let vM=this;
              // console.log("OK AnalyseDMP")
              vM.formAno.analyse_dmp_id=item.id;
              vM.avis_dmp="Non objection"
              return item;
            }
          })
          return objet;
        }
      }
    },
    listeAnoDMPBailleur: function () {
      return marcheid => {
        if (marcheid != "") {
          //  console.log("Marche dmp bailleur")
          let objet=this.getterAnoDMPBailleur.filter(idmarche => idmarche.annalyse_d_m_p.demande_ano.proce_verbal_offre.appel_offre.marche_id == marcheid)
          //console.log("Marche dmp bailleru 7474")
          return objet
        }
      }
    },
    selectionAttributionMarche: function () {
      return marcheid => {
        if (marcheid != "") {
          let vM=this;
          let marcherEnAction=this.getterAnoDMPBailleur.filter(idmarche => idmarche.annalyse_d_m_p.demande_ano.proce_verbal_offre.appel_offre.marche_id == marcheid)
          let marcherFavaroble=marcherEnAction.find(idmarche=>idmarche.avis_bail==1);
          let marcherObjetction=marcherEnAction.find(idmarche=>idmarche.avis_bail==0);
          console.log(marcherFavaroble)
          if (marcherFavaroble!=undefined){
            vM.entreprise_vainqueur=""
            console.log("1411111")
            vM.info_avis_bailleur="Non objection";
            vM.formEffetFinancier.ano_bailleur_id=marcherFavaroble.id
            let resulta=this.getterAnalyseDossiers.filter(item=>item.reference_pv==marcherFavaroble.annalyse_d_m_p.demande_ano.proce_verbal_offre.reference);
            console.log(resulta)
            //vM.resultaFinalCandidat=resulta
            let entreprise;
            if (resulta.length>0){
              resulta.sort(function (a, b) {
                return a.note_analyse - b.note_analyse;
              }).reverse()
              entreprise=resulta.find(item=>item.reference_pv==marcherFavaroble.annalyse_d_m_p.demande_ano.proce_verbal_offre.reference)
              console.log("111111")
              console.log(entreprise)
              console.log("222222")
              return entreprise;
            }
            return null
          }
          if(marcherObjetction!=undefined){
            vM.message_setion_vainqueur="Le dossier a été rejete"
          }else{
            vM.message_setion_vainqueur="Assuré vous d'avoir terminé tous les étape précedente"
          }
          return null
        }
      }
    },
    listeActeEffectFinnancier: function () {
      return marcheid => {
        if (marcheid != "") {
          // console.log("Marche leste acte effect finnancier")
          return this.getActeEffetFinancierPersonnaliser.filter(idmarche => idmarche.marche_id == marcheid)
        }
      }
    },





    afficherTypeProcedureId() {
      return id => {
        if (id != null && id != "") {
          const qtereel = this.marches.find(qtreel => qtreel.id == id);

          if (qtereel) {
            return qtereel.procedure_passation_id;
          }
          return 0
        }
      };
    },



    afficherLibelleTypeProcedure() {
      return id => {
        if (id != null && id != "") {
          const qtereel = this.procedurePassations.find(qtreel => qtreel.id == id);

          if (qtereel) {
            return qtereel.code;
          }
          return 0
        }
      };
    },
    listeOffreFinancier(){
      return idoffrefine => {
        if (idoffrefine != "") {
          // console.log("Marche leste acte effect finnancier")
          return this.getterOffreFinanciers.find(item=>item.id==idoffrefine)
        }
      }
    },
    etatEnregistreOffreTechnique(){
      return id=>{
        let nbr=this.gettersOffreTechniques.filter(item=>item.dossier_candidat_id==id).length
        let nbr_offre_fin=this.getterOffreFinanciers.filter(item=>item.dossier_candidat_id==id).length
       // console.log(this.gettersOffreTechniques)
        if(nbr!=0 && nbr_offre_fin!=0){
          return true
        }
        return false
      }
    },

    listechnique(){
      return idoffre => {
        if (idoffre != "") {
          return this.gettersOffreTechniques.find(item=>item.id==idoffre)
        }
      }
    }
  },
  methods: {
    ...mapActions("bienService", [
      'ajouterAppelOffre','modifierAppelOffre',"supprimerAppelOffre","modifierAppelOffre",
      "ajouterLot","modifierLot","supprimerLot","ajouterDossierCandidat","getDossierCandidat",
      "modifierDossierCandidat","supprimerDossierCandidat","ajouterOffreTechnique","modifierOffreTechnique",
      "supprimerchnique","ajouterOffreFinancier","modifierOffreFinancier","supprimerOffreFinancier",
      "ajouterLettreInvitation",
      "modifierLettreInvitation","supprimerLettreInvitation","getMandater","ajouterMandater",
      "modifierMandater","supprimerMandater","ajouterCojo","modifierCojo","supprimerCojo","ajouterAnalyseDossier",
      "modifierAnalyseDossier","supprimerAnalyseDossier","ajouterDemandeAno",
      "modifierDemandeAno","supprimerDemandeAno","ajouterAnalyseDMP","modifierAnalyseDMP",
      "supprimerAnalyseDMP","ajouterAnoDMPBailleur","modifierAnoDMPBailleur","supprimerAnoDMPBailleur"
      , "modifierObservationBaileur","ajouterObseravtionBailleur" , "supprimerObseravtionBailleur",
      "ajouterFournisseur", "ajouterActeEffetFinancier", "modifierActeEffetFinancier",
      "supprimerActeEffetFinancier","modifierMarche","supprimerFacture","modifierFacture",
      "ajouterFacture"
      , "modifierObservationBaileur","ajouterObseravtionBailleur","supprimerObseravtionBailleur",
      "ajouterFournisseur", "ajouterActeEffetFinancier",
      "modifierActeEffetFinancier","supprimerActeEffetFinancier","modifierMarche","modificationMarcheBailleur",
      "ajouterMarcherBailleur","supprimerMarcheBailleur","ajouterMembreCojo",
      "modificationMembreCojo","supprimerMembreCojo","getProceVerbal",
      "ajouterProceVerbal","supprimerProceVerbal","modificationProceVerbalOffre","getAnalyseDossier","getDemandeAno","getAnalyseDMP","getAnoDMPBailleur","getActeEffetFinancier"
    ]),
    ...mapActions('gestionMarche', ['getEntreprise',"ajouterEntreprise","supprimerEntreprise","modifierEntreprise","ajouterSanction"]),
    //
    ajouterBudgetaireLocal(){
      this.$("#myModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    formatageSomme: formatageSomme,
    ajouterStockLocal(){
      this.ajouterFacture(this.formDataFacture)
      this.formDataFacture ={
        prix_propose_ttc:"",
        prix_propose_ht:"",
        prix_unitaire:"",
        montant_facture:"",
        ligne_budgetaire:"",
        objet_facture:"",
        id_type_facture:"",
        code_acte_depense:"",
        numero_facture:"",
      }
    },
    // infoPVAffiche(ref){
    //     this.resultaAnalysePv=[]
    //     let resulta=this.getterAnalyseDossiers.filter(item=>item.reference_pv==ref);
    //     this.resultaAnalysePv=this.resultaAnalysePv.concat(resulta)
    //     if (this.resultaAnalysePv.length>0){
    //         this.resultaAnalysePv.sort(function (a, b) {
    //             return a.note_analyse - b.note_analyse;
    //         }).reverse()
    //     }
    //     //console.log(this.resultaAnalysePv)
    // },
    onFichierChange(e){
      this.formLettre.fichier_joint = e.target.files[0]
      // console.log(onFichierChange); edit_offre_technique_recupere
    },
    afficheModificationOffreFinancier(index){
      this.$('#modificationOffre').modal({
        backdrop: "static",
        keyboard:false
      })
      console.log(index)
      //let objet = this.getterOffreFinanciers.find(item=>item.id==index);
      this.modification_offre_finnancier_recupere={
        id:index.id,
        numero_lot:index.numero_lot,
        designation:index.designation,
        unite:index.unite,
        prix_unitaire:index.prix_unitaire,
        montant_total_ht:index.montant_total_ht,
        montant_total_ttc:index.montant_total_ttc,
        taux:index.taux,
        tva:index.tva,
        quantite:index.quantite,
        dossier_candidat_id:index.dossier_candidat_id
      }
      console.log(this.modification_offre_finnancier_recupere)
    },
    afficheModificationchnique(index){
      this.$('#modificationOffreT').modal({
        backdrop: "static",
        keyboard:false
      })
      console.log(index)
      this.edit_offre_technique_recupere=index;
    },
    afficheModaleMembreCojo(index){
      this.$('#modification_membre_cojo').modal({
        backdrop: "static",
        keyboard:false
      })
      this.edite_membre_cojo = this.getterMembreCojo.find(item=>item.id==index);
    },
    editeMembreCojoM(){
      this.modificationMembreCojo(this.edite_membre_cojo)
      this.$('#modification_membre_cojo').modal('hide');
    },
    modifierFactureLocal(){
      this.$('#modififacture').modal('hide');
    },
    rechercheMandater(){
      // console.log(this.formMandater.matricule_m)
      let objetMandater=this.acteur_depenses.filter(item=>item.acteur_depense.matricule==this.formMandater.matricule_m)
      // console.log(objetMandater)
      if(objetMandater!=undefined){
        if (objetMandater.length==1){
          let acteur= this.acteur_depenses.find(item=>item.acteur_depense.matricule==this.formMandater.matricule_m)
          this.formMandater.prenom_nom=acteur.acteur_depense.prenom
          this.formMandater.nom_mandat=acteur.acteur_depense.nom
          this.message_mandater=""
        }
        else{
          this.message_mandater="Cette n'existe pas dans notre base de donnée "
        }
      }
      if(this.formMandater.matricule_m==""){
        this.formMandater.prenom_nom=""
        this.formMandater.nom_mandat=""
        this.message_mandater=""
      }
    },
    rechercheMembreCojo(){
      // console.log(this.formMandater.matricule_m)
      let objetMandater=this.acteur_depenses.filter(item=>item.acteur_depense.matricule==this.formDataMembreCojo.matricule)
      // console.log(objetMandater)
      if(objetMandater!=undefined){
        if (objetMandater.length==1){
          let acteur= this.acteur_depenses.find(item=>item.acteur_depense.matricule==this.formDataMembreCojo.matricule)
          this.formDataMembreCojo.nom_prenom=acteur.acteur_depense.nom +" "+acteur.acteur_depense.prenom
          this.message_mandater=" "
        }
        else{
          this.message_mandater="Cette n'existe pas dans notre base de donnée "
          this.formDataMembreCojo.nom_prenom=""
        }
      }
      if(this.formDataMembreCojo.matricule==""){
        this.formDataMembreCojo.nom_prenom=""
        this.message_mandater=" "
      }
    }
    ,
    recherche() {
      // console.log(this.search)
      let entre=this.gettersCotationPersonnaliser.find(item=>item.id==this.search);
      if (entre!=undefined){
        if(this.search!=""){
          this.formDossierCadidature.telephone_cand=entre.telephone
          this.formDossierCadidature.adresse_post=entre.adresse
          this.formDossierCadidature.nom_cand=entre.raison_sociale
          this.formDossierCadidature.reg_com=entre.numero_rc
          this.formDossierCadidature.email_cand=entre.email
          this.formDossierCadidature.numero_cc=entre.numero_cc
          this.formDossierCadidature.secteur_activite_id=entre.secteur_activite_id
        }
      }
    },
    retourListeEntreprise(){
      this.$router.push({ name: 'marche' })
    },
    //afiicher modal ajouter
    afficherModalAjouterActeDepense() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    ajouterMembreCojoM(){
      this.formDataMembreCojo.cojo_id=this.idcojo
      this.ajouterMembreCojo(this.formDataMembreCojo)
      this.formDataMembreCojo= {
        matricule:"",
        type_appel:"",
        nom_prenom:"",
        role:"",
        cojo_id:"",
      }
    },
    ajouterBailleur(){
      this.formBailleur.marche_id=this.marcheid
      this.ajouterMarcherBailleur(this.formBailleur)
      this.formBailleur={
        type_finnancement_id:"",
        montant:0,
        marche_id:"",
        bailleur_id:"",
      }
    },
    // fonction pour vider l'input ajouter
    ajouter(){
      this.formData.marche_id=this.marcheid
      this.ajouterAppelOffre(this.formData)
      this.formData = {
        ref_appel:"",
        type_appel:"",
        financement:"",
        nom_bailleurs:"",
        date_emission:"",
        date_limite:"",
        objet_appel:"",
        imputation:"",
        marche_id:"",
      }
    },
    ajouterL(){
      this.formLot.marche_id=this.marcheid
      this.ajouterLot(this.formLot)
      this.formLot={
        numero_lot:"",
        libelle_lot:"",
        montant_lot:"",
        marche_id:"",
        appel_offre_id:"",
        //mode_passation_id:""
      }
    },
    ajouterLettreInv(){
      const formData = new FormData();
      formData.append('fichier', this.selectedFile, this.selectedFile.name);
      formData.append('appel_offre_id', this.formLettre.appel_offre_id);
      formData.append('destination', this.formLettre.destination);
      formData.append('ref_lettre', this.formLettre.ref_lettre);
      formData.append('date_lettre', this.formLettre.date_lettre);
      formData.append('date_cojo', this.formLettre.date_cojo);
      let config = {
        header : {
          'Content-Type' : 'multipart/form-data'
        }
      }
      this.ajouterLettreInvitation(formData,config)
      this.formLettre= {
        appel_offre_id:"",
        fichier_joint:"",
        date_lettre:"",
        ref_lettre:"",
        destination:"",
        date_cojo:""
      }
    },
    ajouterAnalyseD(){
      this.ajouterAnalyseDossier(this.formAnalyseDossier)
      this.formAnalyseDossier={
        date_analyse:"",
        appel_offre_id:"",
        rang_analyse:"",
        //  decision:"",
        // motif:"",
        note_analyse:"",
        dossier_candidat_id:"",
        type_analyse_id: "",
        cojo_id:""
      }
    },
    ajouterOffreT(){
      this.formchnique.dossier_candidat_id=this.edite_offre_technique.id
      this.ajouterOffreTechnique(this.formchnique)
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
    editeOffreT(){
      this.modifierOffreTechnique(this.edit_offre_technique_recupere)
      this.$('#modificationOffreT').modal('hide');
    },
    ajouterOffreF(){
      var nouvelObjet = {
        ...this.formOffreFinanciere,
        montant_total_ht :this.montantHT,
        montant_total_ttc :this.montantHTt,
        taux :this.affcherTauxEnCours,
        tva :this.montantTva,
        marche_id:this.marcheid,
        designation:"",
        //  appel_offre_id :this.affichierAppelOffreid(this.marcheid),
        dossier_candidat_id : this.edite_offre_financiere.id
      };
      // console.log(this.edite_offre_financiere.id) editeOffreT
      // this.formOffreFinanciere.dossier_candidat_id=this.edite_offre_financiere.id
      this.ajouterOffreFinancier(nouvelObjet)
      this.formOffreFinanciere={
        numero_lot:"",
        designation:"",
        unite:"",
        quantite:"",
        prix_unitaire:"",
        montant_total_ht:"",
        montant_total_ttc:"",
      }
    },
    modificationOffreFin(){
      this.modification_offre_finnancier_recupere.montant_total_ht=this.montantHTEdite
      this.modification_offre_finnancier_recupere.marche_id=this.marcheid
      this.modification_offre_finnancier_recupere.montant_total_ttc=this.montantHTtEdite
      this.modification_offre_finnancier_recupere.taux=this.affcherTauxEnCourse
      this.modification_offre_finnancier_recupere.tva=this.affcherTauxEnCours
      this.modifierOffreFinancier(this.modification_offre_finnancier_recupere)
      this.$('#modificationOffre').modal('hide');
    },
    ajouterMandaterA(){
      this.ajouterMandater(this.formMandater)
      this.formMandater={
        lettre_invitation_id:"",
        date_id:"",
        fichier_joint:"",
        nom_mandat:"",
        prenom_nom:"",
        matricule_m:""
      }
    },
    ajouterCojoMarche(){
      this.ajouterCojo(this.formDataCojo)
      this.formDataCojo={
        lettre_invitation_id:"",
        condition_id:'',
        controleur_finnancier:"",
        dmp:"",
        autorite_contractante:"",
        date_invitation:"",
        date_composition:"",
        num_dossier_appel_offre:"",
        nbr_participant:""
      }
    },
    ajouterDossierCandidature(){

      var nouvelObjet ={
        ...this.formDossierCadidature,
        marche_id:this.marcheid,
        entreprise_id:this.afficherIdEntreprise(this.formDossierCadidature.entreprise_id),
        procedure_passation_id: this.afficherTypeProcedureId(this.marcheid),

        nom_cand:this.afficheNomEntreprise(this.formDossierCadidature.entreprise_id),
        email_cand:this.afficherEmailEntreprise(this.formDossierCadidature.entreprise_id),
        telephone_cand:this.afficherTelephoneEntreprise(this.formDossierCadidature.entreprise_id),
        adresse_post:this.afficherAdressEntreprise(this.formDossierCadidature.entreprise_id),
        numero_cc:this.afficherRegistreCommerceEntreprise(this.formDossierCadidature.entreprise_id),
        reg_com:this.afficherNumeroContribuableEntreprise(this.formDossierCadidature.entreprise_id)
      }
      // this.formFournisseur.raison_sociale=this.formDossierCadidature.nom_cand
      // this.formFournisseur.numero_cc= this.formDossierCadidature.numero_cc
      // this.formFournisseur.numero_rc=this.formDossierCadidature.reg_com
      // this.formFournisseur.telephone=this.formDossierCadidature.telephone_cand
      // this.formFournisseur.adresse=this.formDossierCadidature.adresse_post
      // this.formFournisseur.email=this.formDossierCadidature.email_cand
      // this.formFournisseur.id=this.formDossierCadidature.entreprise_id

      //this.formFournisseur.complet=0

      // console.log(this.formFournisseur)
      //   let ent=  this.entreprises.find(item=>item.numero_rc==this.formFournisseur.numero_rc)
      //     if(ent==undefined){
      //         this.ajouterEntreprise(this.formFournisseur)
      //     }
      this.ajouterDossierCandidat(nouvelObjet)
      this.formDossierCadidature={
        type_candidat_id:"",
        numero_cc:"",
        nom_cand:"",
        prenom_cand:"",
        diff:1,
        dif_fin:0,
        date_nais_cand:"",
        telephone_cand:"",
        adresse_post:"",
        situation_geo:"",
        email_cand:"",
        procedure_passation_id:"",
        appel_offre_id:"",
        accord_group:"",
        cautionnement_prov:"",
        pouv_habil_signataire:"",
        piece_admin:"",
        reg_com:"",
        entreprise_id:"",
        attest_banc:"",
        formul_propo_tech:"",
        fiche_rsgnt_cand:"",
        fiche_rsgnt_mbre_group:"",
        atcdent_marche_non_exe:"",
        org_travau_site:"",
        meth_real_travau:"",
        prog_mobilisation:"",
        capacite_financiere:"",
        caa_moyen_ac_entre:"",
        capacite_tech_exp:"",
        mt_offre_financiere:"",
      }
      this.NotisFormulaireDossierCand()
    },
// vider l'input
    // modification de dossier candidat
    modificationDossierCandidatLocal(){
      var nouvelObjet ={
        ...this.editDossierCadidature,
        marche_id:this.marcheid,

        procedure_passation_id:this.afficherTypeProcedureId(this.marcheid),
        entreprise_id:this.afficherIdEntreprise(this.editDossierCadidature.entreprise_id),
        nom_cand:this.afficheNomEntreprise(this.editDossierCadidature.entreprise_id),
        email_cand:this.afficherEmailEntreprise(this.editDossierCadidature.entreprise_id),
        telephone_cand:this.afficherTelephoneEntreprise(this.editDossierCadidature.entreprise_id),
        adresse_post:this.afficherAdressEntreprise(this.editDossierCadidature.entreprise_id),
        numero_cc:this.afficherRegistreCommerceEntreprise(this.editDossierCadidature.entreprise_id),
        reg_com:this.afficherNumeroContribuableEntreprise(this.editDossierCadidature.entreprise_id)
      }
      // this.formFournisseur.raison_sociale=this.editDossierCadidature.nom_cand
      // this.formFournisseur.numero_cc= this.editDossierCadidature.numero_cc
      // this.formFournisseur.numero_rc=this.editDossierCadidature.reg_com
      // this.formFournisseur.telephone=this.editDossierCadidature.telephone_cand
      // this.formFournisseur.adresse=this.editDossierCadidature.adresse_post
      // this.formFournisseur.email=this.editDossierCadidature.email_cand
      // this.formFournisseur.complet=0
      // let entre = this.entreprises.find(item =>item.numero_rc==this.formFournisseur.numero_rc)
      //   if(entre==undefined){
      //       this.modifierEntreprise(this.formFournisseur)
      //   }
      this.modifierDossierCandidat(nouvelObjet)
      this.$('#modificationDossierCandidatModal').modal('hide');
    },
    ajouterModalActeEffetFinancierLocal(rcm){
      /* var nouvelObjet = {
           ...this.formEffetFinancier,
           duree: this.nombreDejourCalcule
       }*/
      let entreprisePremier=this.entreprises.find(item=>item.numero_rc==rcm)
      //  console.log(this.formEffetFinancier)
      this.formEffetFinancier.marche_id=this.marcheid
      this.formEffetFinancier.entreprise_id=entreprisePremier.id
      this.ajouterActeEffetFinancier(this.formEffetFinancier)
      let marcheObjet=this.marches.find(marche=>marche.id==this.marcheid)
      marcheObjet.attribue=1
      marcheObjet.numero_marche=this.formEffetFinancier.numero_marche
      // console.log(marcheObjet)
      this.modifierMarche(marcheObjet)
      this.formEffetFinancier = {
        code_act:"",
        libelle_act:"",
        reference_act:"",
        objet_act:"",
        incidence_financiere:"",
        montant_act:"",
        date_attributaire:"",
        date_reception:"",
        duree:"",
        date_fin_exe:"",
        date_odre_service:"",
        livrable_id:"",
        autorite_approbation:"",
        date_approbation:"",
        text_juridique_id:"",
        type_act_effet_id:"",
        analyse_dossier_id:"",
        entreprise_id:"",
        marche_id:"",
        numero_marche:""
      }
    },
    afficherModalModifierActeEffetFinancier(index){
      this.$('#modifierActeEF').modal({
        backdrop: 'static',
        keyboard: false
      });
      this.editActeEffetFinancier = this.acteEffetFinanciers.find(item=>item.id==index)
    },
    afficherModificationPV(index){
      this.$('#modificationPV').modal({
        backdrop: 'static',
        keyboard: false
      });
      this.edite_pv = this.getterProceVerballe.find(item=>item.id==index);
    }  ,
    modificationProceVerbal(){
      const formData = new FormData();
      formData.append('reference', this.edite_pv.reference);
      formData.append('id', this.edite_pv.id);
      formData.append('appel_offre_id', this.edite_pv.appel_offre_id);
      console.log(formData)
      if ( this.selectedFile!==""){
        formData.append('fichier', this.selectedFile, this.selectedFile.name);
      }
      let config = {
        header : {
          'Content-Type' : 'multipart/form-data'
        }
      }
      this.modificationProceVerbalOffre(formData,config)
      this.$('#modificationPV').modal('hide');
      this.getAnalyseDossier()
      this.getDemandeAno()
      this.getAnalyseDMP()
      this.getAnoDMPBailleur()
    },
    modificationBailleurMarche(){
      this.modificationMarcheBailleur(this.edit_bailleur_marche)
      this.$('#editBailleuMarche').modal('hide');
    },
    editeMarcheBailleur(index){
      this.$('#editBailleuMarche').modal({
        backdrop: 'static',
        keyboard: false
      });
      this.edit_bailleur_marche = this.personnaliseGetterMarcheBailleur.find(item=>item.id==index)
      //  console.log(this.edit_bailleur_marche)
    },
// vider l'input
    modifierModalActeEffetFinancierLocal(){
      // this.editActeEffetFinancier.entreprise_id=entreprise_id
      this.modifierActeEffetFinancier(this.editActeEffetFinancier)
      this.$('#modifierActeEF').modal('hide');
    },
    // afficherModalAjoutObservationBailleur(){
    //     this.$('#ajouterObservationBailleur')
    // },
    ajoutObservationBailleurLocal(){
      this.ajouterObseravtionBailleur(this.formObservation)
      this.formObservation = {
        date_avis_bail:"",
        avis_bail:"",
        observations_bail:"",
        ano_dmp_bailleur_id:"",
        document_procedure_id:""
      }

    },
    afficherModalObservationBailleur(index){
      this.$('#modifierObservationBailleur').modal({
        backdrop: 'static',
        keyboard: false
      });
      this.editObservation1 = this.getterObseravtionBailleurs[index]
    },
    // vider l'input
    modifierObservationBailleurLocal(){
      this.modifierObservationBaileur(this.editObservation1)
      this.$('#modifierObservationBailleur').modal('hide');
    },




    ajouterAnalyseDMPB(){
      /*        var nouvelObjet = {
         ...this.formAnalyseDMP,
         ref_dmp: this.detail_marche.id,
         ref_courier: this.recupererNumeroCourier,
       };*/
      console.log(this.formAnalyseDMP)
      this.ajouterAnalyseDMP(this.formAnalyseDMP)
      this.formAnalyseDMP={
        ref_dmp:"",
        demande_ano_id:"",
        observation:"",
        avis_bail:"",
        date_avis_bail:""
      }
    },

    modalOffreTechnique(index){
      //console.log("ooool")
      let objet= this.getterDossierCandidats.find(item=>item.id=index);
      this.formchnique={
        numero_lot:"",
        accord_groupe:objet.accord_group,
        cautionnement_prov:objet.cautionnement_prov,
        pouv_habil_signataire:objet.pouv_habil_signataire,
        peice_admin:objet.piece_admin,
        reg_com:objet.reg_com,
        attest_banc:objet.attest_banc,
        formil_propo_tech:objet.formil_propo_tech,
        fiche_rsgnt_mbre_groupe:objet.fiche_rsgnt_mbre_groupe,
        atcdent_marche_non_exe:objet.atcdent_marche_non_exe,
        org_travau_site:objet.org_travau_site,
        meth_real_travau:objet.meth_real_travau,
        prog_mobilisation:objet.prog_mobilisation,
        capacite_financiere:objet.capacite_financiere,
        caa_moyen_ac_entre:objet.caa_moyen_ac_entre,
        capacite_techn_exp:objet.capacite_tech_exp,
        dossier_candidat_id:objet.id,
      }
      this.edite_offre_technique=this.getterDossierCandidats.find(item=>item.id=index);
    },
    modaleOffreFinnanciere(index){
      this.edite_offre_financiere="";
      let objet=this.getterDossierCandidats.filter(item=>item.id==index)
      console.log(objet)
      this.edite_offre_financiere=this.getterDossierCandidats.find(item=>item.id==index);
      console.log(this.edite_offre_financiere)
    },
    isFormulaireDossierCand(){
      this.isFormulaireDossierCandidature=true
      this.isButtunAddDossierCandidat=false
      this.isDetailDossierCandidature=false
    },
    NotisFormulaireDossierCand(){
      this.isFormulaireDossierCandidature=false
      this.isButtunAddDossierCandidat=true
      this.isDetailDossierCandidature=false
    },
    isDetailDossierCandi(id){
      this.isDetailDossierCandidature=true,
          this.isButtunAddDossierCandidat=false
      this.isButtunAddDossierCandidat=false
      this.detail_dossier_candidature=this.getterDossierCandidats.find(dossier=>dossier.id==id)
      this.detail_offre_finnancier=this.getterOffreFinanciers.find(offre =>offre.dossier_candidat_id==id)
      this.detail_offre_technique =this.gettersOffreTechniques.find(offre =>offre.dossier_candidat_id==id)
      // console.log(this.detail_offre_finnancier)
    },
    // afficher modal de modification
    afficherModalModifierActeDepense(index){
      this.$('#modificationModal').modal({
        backdrop: 'static',
        keyboard: false
      });
      this.edite_appel_offre = this.appelOffres.find(item=>item.id==index);
    },
    afficheDemandeDAO(index){
      this.$('#modifDemandeAno').modal({
        backdrop: 'static',
        keyboard: false
      });
      this.edite_demande_dao=this.getterDemandeAno.find(
          demandeAno => demandeAno.id == index
      )
      console.log(this.edite_demande_dao)
    },
    afficheAnalyseDMP(index){
      this.$('#editeDMP').modal({
        backdrop: 'static',
        keyboard: false
      });
      this.edite_analyse_dpm=this.getterAnalyseDMP.find(
          annalyseDP => annalyseDP.id == index
      )
      console.log(this.edite_analyse_dpm)
    },
// vider l'input de nnouveau fournisseur
    ajouterNouveauFournisseurLocal(registeCommerce){
      this.formFournisseur.numero_rc=registeCommerce
      /*this.ajouterEntreprise(this.formFournisseur)
      this.formFournisseur = {
           numero_cc: "",
                      numero_rc: "",
                      raison_sociale: "",
                      sigle: "",
                      secteur_activite_id: "",
                      activite_principale: "",
                      pays: "",
                      ville: "",
                      forme_juridique:"",
                      centre_impot:"",
                      regime_imposition:"",
                      capitale_sociale:"",
                      immatriculation_cnps:"",
                      date_enregistrement_cnps:"",
                      telephone:"",
                      email:"",
                      nbre_travailleur_permanent:"",
                      nbre_travailleur_journalier:"",
                      service_assiette_impot:"",
                      adresse:"",
                      banque:""
      }*/
    },
    afficheAnoDPMBailleurModale(index){
      this.$('#editeAnoDmpBailleurModal').modal({
        backdrop: 'static',
        keyboard: false
      });
      this.edite_ano_bailleur_dmp=this.getterAnoDMPBailleur.find(
          resp => resp.id == index
      )
    },
    afficheAnnalyseDossier(index){
      this.$('#modificationAajouterAnalys01').modal({
        backdrop: 'static',
        keyboard: false
      });
      this.edite_analyse_dossier = this.listeAnalyseDossier(this.marcheid)[index];
    },
    afficherModaleModifier(index){
      this.$('#modificationModal1').modal({
        backdrop: 'static',
        keyboard: false
      });
      this.edite_lot = this.listeLots(this.marcheid)[index];
      //this.edite_lot.appel_offre_id=this.edite_lot.
    },
    afficheBouttonTechCojo(index){
      this.$('#modificationCojo').modal({
        backdrop: 'static',
        keyboard: false
      });
      this.edite_cojo = this.getterCojos[index];
      //this.edite_lot.appel_offre_id=this.edite_lot. modifierDemandeAno
    },
    afficheBouttonTechFinMandater(index){
      this.$('#modificationMantater').modal({
        backdrop: 'static',
        keyboard: false
      });
      this.editer_mandater = this.getterMandate[index];
    },
    modificationMandater(){
      this.modifierMandater(this.editer_mandater)
      this.$('#modificationMantater').modal('hide');
    },
    modificationDossierAnalyse(){
      this.modifierAnalyseDossier(this.edite_analyse_dossier)
      this.$('#modificationAajouterAnalys01').modal('hide');
    },
    modfications(){
      this.modifierAppelOffre(this.edite_appel_offre)
      this.$('#modificationModal').modal('hide');
    },
    modificationCojo(){
      this.modifierCojo(this.edite_cojo)
      this.$('#modificationModal').modal('hide');
    },
    modficationsLot(){

      this.modifierLot(this.edite_lot)
      this.$('#modificationModal1').modal('hide');
    },
    modficationsAnalyseDMP(){
      this.modifierAnalyseDMP(this.edite_analyse_dpm)
      this.getProceVerbal();
      this.getAnoDMPBailleur()
      this.$('#editeDMP').modal('hide');
    },
    editeAnoDMPBailleurLocal(){
      const formData = new FormData();
      formData.append('date_ano_dmp', this.edite_ano_bailleur_dmp.date_ano_dmp);
      formData.append('avis_bail', this.edite_ano_bailleur_dmp.avis_bail);
      formData.append('observations_bailleur', this.edite_ano_bailleur_dmp.observations_bailleur);
      formData.append('ref_ano_dmp', this.edite_ano_bailleur_dmp.ref_ano_dmp);
      formData.append('analyse_dmp_id', this.edite_ano_bailleur_dmp.analyse_dmp_id);
      formData.append('appel_offre_id', this.edite_ano_bailleur_dmp.appel_offre_id);
      formData.append('id', this.edite_ano_bailleur_dmp.id);
      console.log(formData)
      if ( this.selectedFile!==""){
        formData.append('fichier', this.selectedFile, this.selectedFile.name);
      }
      let config = {
        header : {
          'Content-Type' : 'multipart/form-data'
        }
      }
      this.modifierAnoDMPBailleur(formData,config)
      this.$('#editeAnoDmpBailleurModal').modal('hide');
      this.getProceVerbal()
      this.getActeEffetFinancier()
    },
// afficher modification demande ano
    /* afficherModalModifierDemandeAno(index){
        this.$('#modificationDemandeAno').modal({
           backdrop:'static',
         keyboard:false
      })
      },*/
    // eslint-disable-next-line no-unused-vars
    afficheBouttonTechFin(index){
      this.ischniqueFinancier=true
      this.$('#modificationDossierCandidatModal').modal({
        backdrop:'static',
        keyboard:false
      });
      this.editDossierCadidature = this.dossierCandidature(this.marcheid)[index];
    },
    afficheBouttonTechFinInvitation(index){
      this.$('#modificationLettreInvitation').modal({
        backdrop: 'static',
        keyboard: false
      });
      this.edite_lettre_invitation = this.getterLettreInvitation.find(item=>item.id==index);
    },
    modificationLettreInvitation(){
      const formData = new FormData();
      formData.append('appel_offre_id', this.edite_lettre_invitation.appel_offre_id);
      formData.append('destination', this.edite_lettre_invitation.destination);
      formData.append('ref_lettre', this.edite_lettre_invitation.ref_lettre);
      formData.append('date_lettre', this.edite_lettre_invitation.date_lettre);
      formData.append('date_cojo', this.edite_lettre_invitation.date_cojo);
      formData.append('id', this.edite_lettre_invitation.id);
      console.log(this.edite_lettre_invitation.id)
      let config = {
        header : {
          'Content-Type' : 'multipart/form-data'
        }
      }
      if ( this.selectedFile!==""){
        formData.append('fichier', this.selectedFile, this.selectedFile.name);
      }
      this.modifierLettreInvitation(formData,config)
    },
    // formatage de date
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
    ExporterEnExel(){
      this.$refs.excel.click()
    }
    ,
    OnchangeFichier(e) {
      const files = e.target.files;
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile)
      Array.from(files).forEach(file => this.addFichierPDF(file));
    },
    addFichierPDF(file) {
      let reader = new FileReader();
      let vm = this;
      reader.onload = e => {
        vm.imagePDF = "pdf.png";
        vm.namePDF = file.name;
        vm.fichierPDF = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    ajouterPV(){
      const formData = new FormData();
      formData.append('fichier', this.selectedFile, this.selectedFile.name);
      formData.append('appel_offre_id', this.formLot.appel_offre_id);
      let config = {
        header : {
          'Content-Type' : 'multipart/form-data'
        }
      }
      //console.log(formData)
      this.ajouterProceVerbal(formData,config);
    },
    OnchangeFichierDemandeAno(e) {
      const files = e.target.files;
      this.selectedFileDemandeAno = event.target.files[0];
      console.log(this.selectedFileDemandeAno)
      Array.from(files).forEach(file => this.addFichierPDFDemandeAno(file));
    },
    addFichierPDFDemandeAno(file) {
      let reader = new FileReader();
      let vm = this;
      reader.onload = e => {
        vm.imagePDFDemandeAno = "pdf.png";
        vm.namePDFDemandeAno = file.name;
        vm.fichierPDFDemandeAno = e.target.result;
      };
      reader.readAsDataURL(file);
    }
    ,
    ajouterDemandeAnoLocal(){
      const formData = new FormData();
      formData.append('fichier', this.selectedFileDemandeAno, this.selectedFileDemandeAno.name);
      formData.append('proce_verbal_jugement_offre_id', this.formDemande.proce_verbal_jugement_offre_id);
      formData.append('date_demande', this.formDemande.date_demande);
      formData.append('ref_marche', this.formDemande.ref_marche);
      formData.append('num_courrier', this.formDemande.num_courrier);
      let config = {
        header : {
          'Content-Type' : 'multipart/form-data'
        }
      }
      console.log(formData)
      this.ajouterDemandeAno(formData,config)
      this.formDemande={
        date_demande:"",
        ref_marche:"",
        num_courrier:"",
        analyse_dossier_id:"",
        proce_verbal_jugement_offre_id:""
      }
    },
    editDemandeDAO(){
      //console.log(this.edite_demande_dao)
      const formData = new FormData();
      formData.append('proce_verbal_jugement_offre_id', this.edite_demande_dao.proce_verbal_jugement_offre_id);
      formData.append('date_demande', this.edite_demande_dao.date_demande);
      formData.append('ref_marche', this.edite_demande_dao.ref_marche);
      formData.append('num_courrier', this.edite_demande_dao.num_courrier);
      formData.append('id', this.edite_demande_dao.id);
      console.log(formData)
      if ( this.selectedFileDemandeAno!==""){
        formData.append('fichier', this.selectedFileDemandeAno, this.selectedFileDemandeAno.name);
      }
      let config = {
        header : {
          'Content-Type' : 'multipart/form-data'
        }
      }
      this.modifierDemandeAno(formData,config)
      this.getAnalyseDMP()
      this.getAnoDMPBailleur()
      this.$('#modifDemandeAno').modal('hide');
    }, 
    ajouterAnoDMPBailleurLocal(){
      const formData = new FormData();
      formData.append('fichier', this.selectedFile, this.selectedFile.name);
      formData.append('date_ano_dmp', this.formAno.date_ano_dmp);
      formData.append('avis_bail', this.formAno.avis_bail);
      formData.append('observations_bailleur', this.formAno.observations_bailleur);
      formData.append('ref_ano_dmp', this.formAno.ref_ano_dmp);
      formData.append('numero_courie', this.formAno.numero_courie);
      formData.append('appel_offre_id', this.formAno.appel_offre_id);
      formData.append('analyse_dmp_id', this.formAno.analyse_dmp_id);
      let config = {
        header : {
          'Content-Type' : 'multipart/form-data'
        }
      }
      this.ajouterAnoDMPBailleur(formData,config)
      this.formAno={
        date_ano_dmp:"",
        avis_bail:"",
        observations_bailleur:"",
        ref_ano_dmp:"",
        numero_courie:"",
        appel_offre_id:"",
        analyse_dmp_id:""
      }
    },
     addStructure1(){
      if(this.editDossierCadidature.nom_structure=="")
        return ""
      let isStructureExist=this.structure.find(item=>item.id==this.editDossierCadidature.nom_structure)
      if (isStructureExist!=undefined)
        return ""
      let objet=this.entreprises.find(item=>item.id==this.editDossierCadidature.nom_structure)
      this.structure_id.unshift(objet.id)
      this.structure.unshift(objet)
      console.log(this.structure)
      this.nom_structure=""

      //this.formDossierCadidature.nom_cand
    },
    addStructure(){
      if(this.nom_structure=="")
        return ""
      let isStructureExist=this.structure.find(item=>item.id==this.nom_structure)
      if (isStructureExist!=undefined)
        return ""
      let objet=this.entreprises.find(item=>item.id==this.nom_structure)
      this.structure_id.unshift(objet.id)
      this.structure.unshift(objet)
      console.log(this.structure)
      this.nom_structure=""

      //this.formDossierCadidature.nom_cand
    },
    supprimeStructureSelectionner(id){
      this.structure= this.structure.filter(item=>item.id!=id)
      this.structure_id=this.structure_id.filter(item=>item!=id)
      console.log(this.structure_id)
    }
  },
  watch: {
    structure:function (value) {
      let vm=this
     // formDossierCadidature.entreprise_id
     // let objet=this.entreprises.find(item=>item.id==vm.formDossierCadidature.entreprise_id)
      //let objet=this.
      vm.formDossierCadidature.nom_cand=""
      if(value.length>0){
        let objet=this.entreprises.find(item=>item.id==vm.formDossierCadidature.entreprise_id)
        vm.formDossierCadidature.nom_cand=objet.raison_sociale
        value.forEach(function (val) {
          vm.formDossierCadidature.nom_cand=vm.formDossierCadidature.nom_cand+ " / "+ val.raison_sociale
        })
      }
    }
  }
}
</script>
<style scoped>
.grdirModalActeEffet{
  width: 88%;
  margin: 0 -42%;
}

</style>