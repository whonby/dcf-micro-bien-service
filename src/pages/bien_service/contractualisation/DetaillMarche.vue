<template>
    <div>


        <div class="container-fluid">
            <h4 v-if="detail_marche">Detail Marche : {{detail_marche.objet}} </h4>
            <hr />

            <div class="widget-box">
                <div class="widget-content">
                    <div class="widget-content nopadding">
                        <table class="table table-striped table-bordered" v-if="detail_marche">
                            <thead>
                            <tr>
                                <th>Objet marche</th>
                                <th>Reference marche</th>
                                <th>Montant marche</th>
                                <th>Type de marche</th>
                                <th>Unite administrative</th>
                                <th>Exercie Budgetaire</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td class="taskDesc">{{detail_marche.objet}}</td>
                                <td class="taskStatus">{{detail_marche.reference_marche}}</td>
                                <td class="taskOptions">
                                    {{detail_marche.montant_marche}}
                                </td>
                                <td class="taskOptions">
                                    {{detail_marche.type_marche.libelle}}
                                </td>
                                <td class="taskOptions">
                                    {{detail_marche.objetUniteAdministrative.libelle}}
                                </td>
                                <td class="taskOptions">
                                    Ok
                                </td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div class="row-fluid">
                <div class="span3">

                </div>
            </div>
            <div class="row-fluid">
                <div class="span12">



                    <div class="widget-box">
                        <div class="widget-title">
                            <ul class="nav nav-tabs">
                                <li class="active"><a data-toggle="tab" href="#tab1">Appel Offre</a></li>
                                <li class=""><a data-toggle="tab" href="#tab2">Liste des lots</a></li>
                                <li class=""><a data-toggle="tab" href="#tab3">Contratualisation</a></li>
                            </ul>
                        </div>
                        <div class="widget-content tab-content">
                            <div id="tab1" class="tab-pane active">
                                <div class="span4"></div>
                                <div class="span4"></div>
                                <div class="span4" align="right">
                                    <a href="#myAlert" data-toggle="modal" class="btn btn-success" align="rigth">Ajouter</a></div>

                                <table class="table table-bordered table-striped" v-if="marcheid">
                                    <thead>
                                    <tr>

                                        <th>Reference appel</th>
                                        <th> Type apple</th>
                                        <th>Financement</th>
                                        <th>Nom bailleur</th>
                                        <th>Date emmission</th>
                                        <th>Date limite</th>
                                        <th>Objet appel</th>
                                        <th>Imputation</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr class="odd gradeX" v-for="(appelOffre, index) in listeAppelOffre(marcheid)"
                                        :key="appelOffre.id">
                                        <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{appelOffre.ref_appel || 'Non renseigné'}}</td>
                                        <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{appelOffre.type_appel || 'Non renseigné'}}</td>
                                        <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{appelOffre.financement || 'Non renseigné'}}</td>
                                        <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{appelOffre.nom_bailleurs || 'Non renseigné'}}</td>
                                        <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{appelOffre.date_emission || 'Non renseigné'}}</td>
                                        <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{appelOffre.date_limite || 'Non renseigné'}}</td>
                                        <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{appelOffre.objet_appel || 'Non renseigné'}}</td>
                                        <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{appelOffre.imputation || 'Non renseigné'}}</td>
                                        <div class="btn-group">
                                            <button @click.prevent="supprimerAppelOffre(appelOffre.id)"  class="btn btn-danger ">
                                                <span class=""><i class="icon-trash"></i></span></button>

                                        </div>

                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div id="tab2" class="tab-pane">
                                <div class="widget-box">
                                    <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
                                        <h5>Liste des Lots</h5>
                                        <div align="right">
                                            Search:
                                            <input type="search" placeholder v-model="search" />
                                        </div>
                                    </div>
                                    <div class="widget-content nopadding">
                                        <div class="span4"></div>
                                        <div class="span4"></div>
                                        <div class="span4" align="right"><a href="#myModal2" data-toggle="modal"
                                                                            class="btn btn-info">Ajouter lot</a></div>
                                        <table class="table table-bordered table-striped" v-if="marcheid">
                                            <thead>
                                            <tr>
                                                <th>Procedure passation</th>
                                                <th>appel offre</th>
                                                <th>Nom </th>
                                                <th>Prenom</th>
                                                <th>Date naissance</th>
                                                <th>Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr class="odd gradeX" v-for="(lot_marche, index) in listeLots(marcheid)"
                                                :key="lot_marche.id">
                                                <td @dblclick="afficherModaleModifier(index)">
                                                    {{lot_marche.numero_lot || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModaleModifier(index)">
                                                    {{lot_marche.libelle_lot || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModaleModifier(index)">
                                                    {{lot_marche.montant_lot || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModaleModifier(index)">
                                                    {{lot_marche.mode_passation.libelle || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModaleModifier(index)">
                                                    {{lot_marche.appel_offre.objet_appel || 'Non renseigné'}}
                                                </td>

                                                <div class="btn-group">
                                                    <button @click.prevent="supprimerLot(lot_marche.id)"  class="btn btn-danger ">
                                                        <span class=""><i class="icon-trash"></i></span></button>

                                                </div>

                                            </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            </div>
                            <div id="tab3" class="tab-pane">
                                   
                            <ul class="nav nav-tabs">


                <div class="widget-box">
          <div class="widget-title">
            <ul class="nav nav-tabs">
              <li class="active"><a data-toggle="tab" href="#tab12">Dossier candidat</a></li>
              <li class=""><a data-toggle="tab" href="#tab21">Lettre invitation</a></li>
              <li class=""><a data-toggle="tab" href="#tab31">Mandate</a></li>
              <li class=""><a data-toggle="tab" href="#tab22">Cojo</a></li>
              <li class=""><a data-toggle="tab" href="#tab32">Dossier analyse</a></li>
            </ul>
          </div>

          <div class="widget-content tab-content">


            <div id="tab12" class="tab-pane active">
          <div class="span6"></div>

                <div class="span6" align="right">
                    <button class="btn btn-success" @click="isFormulaireDossierCand" v-if="isButtunAddDossierCandidat">Add dossier candidat</button>
                 <!--   <button class="btn btn-warning" v-if="isOffreTechniqueFinancier">Add Offre technique</button>
                    <button data-toggle="modal" class="btn btn-info" v-if="isOffreTechniqueFinancier">Add Offre financiere</button>-->
                </div>

             <div v-if="isButtunAddDossierCandidat">
                 <h4>Liste des dossiers candidats</h4>
                 <table class="table table-bordered table-striped" v-if="marcheid">
                     <thead>
                     <tr>

                         <th>Type candidat</th>
                         <th>Nom </th>
                         <th>Prenom</th>
                         <th>Date naissance</th>
                         <th>Telephone</th>
                         <th>Adresse</th>
                         <th>Email</th>
                         <th>Situation Geo</th>
                         <th>Appel Offre</th>
                         <th>Procedure</th>
                         <th>Action</th>
                     </tr>
                     </thead>
                     <tbody>
                     <tr class="odd gradeX" v-for="(appelOffre, index) in dossierCandidature(marcheid)"
                         :key="appelOffre.id">
                         <td @click="afficheBouttonTechFin(index)">
                             {{appelOffre.type_candidat || 'Non renseigné'}}</td>
                         <td @click="afficheBouttonTechFin(index)">
                             {{appelOffre.nom_cand || 'Non renseigné'}}</td>
                         <td @click="afficheBouttonTechFin(index)">
                             {{appelOffre.prenom_cand || 'Non renseigné'}}</td>
                         <td @click="afficheBouttonTechFin(index)">
                             {{appelOffre.date_nais_cand || 'Non renseigné'}}</td>
                         <td @click="afficheBouttonTechFin(index)">
                             {{appelOffre.telephone_cand || 'Non renseigné'}}</td>
                         <td @click="afficheBouttonTechFin(index)">
                             {{appelOffre.adresse_post || 'Non renseigné'}}</td>
                         <td @dblclick="afficheBouttonTechFin(index)">
                             {{appelOffre.email_cand || 'Non renseigné'}}</td>
                         <td @click="afficheBouttonTechFin(index)">
                             {{appelOffre.situation_geo || 'Non renseigné'}}</td>
                         <td @click="afficheBouttonTechFin(index)">
                             {{appelOffre.appel_offre.objet_appel || 'Non renseigné'}}</td>
                         <td @click="afficheBouttonTechFin(index)">
                             {{appelOffre.procdure_passation.libelle || 'Non renseigné'}}</td>
                         <div class="btn-group">
                             <button   class="btn  " title="Detail" @click.prevent="isDetailDossierCandi(appelOffre.id)">
                                 <span class=""><i class="icon-folder-open" ></i></span></button>
                             <a href="#offreT" data-toggle="modal" @click.prevent="modaleOffreTechnique(index)"  class="btn" title="Offre technique">
                                 <span class=""><i class="icon-wrench"></i></span></a>
                             <a href="#offreF" data-toggle="modal" @click.prevent="modaleOffreFinnanciere(index)"  class="btn  " title="Offre financière">
                                 <span class=""><i class=" icon-money"></i></span></a>
                             <button @click.prevent="supprimerDossierCandidat(appelOffre.id)"  class="btn btn-danger " title="Supprimer">
                                 <span class=""><i class="icon-trash"></i></span></button>

                         </div>

                     </tr>
                     </tbody>
                 </table>
             </div>





                <!--ajouter de dossier candidature-->
                <div v-if="isFormulaireDossierCandidature">
                    <h6><button class="btn btn-success" @click="NotisFormulaireDossierCand" v-if="!isButtunAddDossierCandidat">Afficher la liste des candidat</button></h6>
                    <table class="table table-bordered table-striped">
                        <tbody>
                        <tr class="odd gradeX">
                            <td>
                                <div class="control-group">
                                <div class="controls">
                                    <input type="text" class="" placeholder="Type Candidat" v-model="formDossierCadidature.type_candidat">
                                </div>
                            </div>
                            </td>
                            <td>
                                <div class="control-group">
                                <div class="controls">
                                    <input type="text" class="" placeholder="Nom " v-model="formDossierCadidature.nom_cand">
                                </div>
                            </div>
                            </td>

                            <td>
                                <div class="control-group">
                                    <div class="controls">
                                        <input type="text" class="" placeholder="Prenom" v-model="formDossierCadidature.prenom_cand">
                                    </div>
                                </div>
                            </td>

                            <td>

                                <div class="control-group">
                                    <div class="controls">
                                        Date de naissance  <input type="date" class="" placeholder="" v-model="formDossierCadidature.date_nais_cand">
                                    </div>
                                </div>
                            </td>

                        </tr>


                        <tr class="odd gradeX">
                            <td>
                                <div class="control-group">
                                    <div class="controls">
                                        <input type="text" class="" placeholder="Telphone" v-model="formDossierCadidature.telephone_cand">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <div class="controls">
                                        <input type="text" class="" placeholder="Adresse" v-model="formDossierCadidature.adresse_post">
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div class="control-group">
                                    <div class="controls">
                                        <input type="text" class="" placeholder="Situation Geographique" v-model="formDossierCadidature.situation_geo">
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div class="control-group">
                                    <div class="controls">
                                        <input type="text" class="" placeholder="Email" v-model="formDossierCadidature.email_cand">
                                    </div>
                                </div>
                            </td>

                        </tr>


                        <tr class="odd gradeX">
                            <td>
                                <div class="control-group">
                                    <div class="controls">
                                        <input type="text" class="" placeholder="Accord Groupe" v-model="formDossierCadidature.accord_group">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <div class="controls">
                                        <input type="text" class="" placeholder="Cautionnement" v-model="formDossierCadidature.cautionnement_prov">
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div class="control-group">
                                    <div class="controls">
                                        <input type="text" class="" placeholder="Pouv Hile Signature" v-model="formDossierCadidature.pouv_habil_signataire">
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div class="control-group">
                                    <div class="controls">
                                        <input type="text" class="" placeholder="Piece Admin" v-model="formDossierCadidature.piece_admin">
                                    </div>
                                </div>
                            </td>

                        </tr>


                        <tr class="odd gradeX">
                            <td>
                                <div class="control-group">
                                    <div class="controls">
                                        <input type="text" class="" placeholder="Registre de commerce" v-model="formDossierCadidature.reg_com">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <div class="controls">
                                        <input type="text" class="" placeholder="Attestation banc" v-model="formDossierCadidature.attest_banc">
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div class="control-group">
                                    <div class="controls">
                                        <input type="text" class="" placeholder="Formul propo tech" v-model="formDossierCadidature.formul_propo_tech">
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div class="control-group">
                                    <div class="controls">
                                        <input type="text" class="" placeholder="Fiche renseignement" v-model="formDossierCadidature.fiche_rsgnt_cand">
                                    </div>
                                </div>
                            </td>

                        </tr>


                        <tr class="odd gradeX">
                            <td>
                                <div class="control-group">
                                    <div class="controls">
                                        <input type="text" class="" placeholder="Fiche renseignement nombre groupe" v-model="formDossierCadidature.fiche_rsgnt_mbre_group">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <div class="controls">
                                        <input type="text" class="" placeholder="Atcent marche non exe" v-model="formDossierCadidature.atcdent_marche_non_exe">
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div class="control-group">
                                    <div class="controls">
                                        <input type="text" class="" placeholder="Org travau" v-model="formDossierCadidature.org_travau_site">
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div class="control-group">
                                    <div class="controls">
                                        <input type="text" class="" placeholder="Meth real travau" v-model="formDossierCadidature.meth_real_travau">
                                    </div>
                                </div>
                            </td>

                        </tr>

                        <tr class="odd gradeX">
                            <td>
                                <label>Appel Offre</label>
                                <div class="controls">
                                    <select v-model="formDossierCadidature.appel_offre_id" class="span">
                                        <option v-for="varText in listeAppelOffre(marcheid)" :key="varText.id"
                                                :value="varText.id">{{varText.objet_appel}}</option>
                                    </select>
                                </div>
                            </td>
                            <td>
                                <label>Procedure de passation</label>
                                <div class="controls">

                                    <select v-model="formDossierCadidature.procedure_passation_id" class="span">
                                        <option v-for="varText in procedurePassations" :key="varText.id"
                                                :value="varText.id">{{varText.libelle}}</option>
                                    </select>
                                </div>
                            </td>


                        </tr>
                        <a @click.prevent="ajouterDossierCandidature" class="btn btn-primary"
                           href="#">Enregistre dossier candidature</a>
                        </tbody>
                    </table>
                </div>

                <!--Detail dossier candidat  -->
                <div v-if="isDetailDossierCandidature">
                    <h6 v-if="detail_dossier_candidature">
                      </h6>


                    <div class="widget-box" v-if="detail_dossier_candidature">
                        <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                            <h5>Dossier du candidat : {{detail_dossier_candidature.nom_cand}} {{detail_dossier_candidature.prenom_cand}}</h5>
                            <button class="btn" title="Affiche la liste des candidats" @click="NotisFormulaireDossierCand" v-if="!isButtunAddDossierCandidat"><span class=""><i class="icon-eye-open"></i></span></button></div>
                        <div class="widget-content nopadding">
                            <table class="table table-bordered table-striped">
                                <thead>
                                <tr>
                                    <th>Type candidat</th>
                                    <th>Telephone </th>
                                    <th>adresse </th>
                                    <th>Situation geographique</th>
                                    <th>Email</th>
                                    <th>Meth reat traveau</th>
                                    <th>Accord groupe</th>
                                    <th>Pauv habil signataire</th>
                                    <th>Caution</th>
                                    <th>Registe de commerce</th>
                                </tr>
                                </thead>

                                <tr>
                                    <td>{{detail_dossier_candidature.type_candidat || "Non renseigne"}}</td>
                                    <td>{{detail_dossier_candidature.telephone_cand || "Non renseigne"}}</td>
                                    <td>{{detail_dossier_candidature.adresse_post || "Non renseigne"}}</td>
                                    <td>{{detail_dossier_candidature.situation_geo || "Non renseigne"}}</td>
                                    <td>{{detail_dossier_candidature.email_cand || "Non renseigne"}}</td>
                                    <td>{{detail_dossier_candidature.meth_real_travau || "Non renseigne"}}</td>
                                    <td>{{detail_dossier_candidature.accord_group || "Non renseigne"}}</td>
                                    <td>{{detail_dossier_candidature.pouv_habil_signataire || "Non renseigne"}}</td>
                                    <td>{{detail_dossier_candidature.cautionnement_prov || "Non renseigne"}}</td>
                                    <td>{{detail_dossier_candidature.reg_com || "Non renseigne"}}</td>

                                </tr>


                            </table>
                        </div>
                    </div>
                    <div class="widget-box" v-if="detail_offre_technique">
                        <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                            <h5>Offre technique du candidat</h5>
                            </div>
                        <div class="widget-content nopadding">
                            <table class="table table-bordered table-striped">
                                <thead>
                                <tr>
                                    <th>Programme mobilisation</th>
                                    <th>Capacite financiere </th>
                                    <th>CAA Moyenn</th>
                                    <th>Capacite financement</th>
                                    <th>Capacite technique exper </th>
                                    <th>Meth reat traveau</th>
                                    <th>Accord groupe</th>
                                    <th>Pauv habil signataire</th>
                                    <th>Caution</th>
                                    <th>Registe de commerce</th>
                                    <th>Action</th>
                                </tr>
                                </thead>

                                <tr>
                                    <td>{{detail_offre_technique.prog_mobilisation || "Non renseigne"}}</td>
                                    <td>{{detail_offre_technique.capacite_financiere || "Non renseigne"}}</td>
                                    <td>{{detail_offre_technique.caa_moyen_ac_entre || "Non renseigne"}}</td>
                                    <td>{{detail_offre_technique.capacite_financiere || "Non renseigne"}}</td>
                                    <td>{{detail_offre_technique.capacite_tech_exp || "Non renseigne"}}</td>
                                    <td>{{detail_offre_technique.meth_real_travau || "Non renseigne"}}</td>
                                    <td>{{detail_offre_technique.accord_group || "Non renseigne"}}</td>
                                    <td>{{detail_offre_technique.pouv_habil_signataire || "Non renseigne"}}</td>
                                    <td>{{detail_offre_technique.cautionnement_prov || "Non renseigne"}}</td>
                                    <td>{{detail_offre_technique.reg_com || "Non renseigne"}}</td>
                                    <td><button @click.prevent="supprimerOffreTechnique(detail_offre_technique.id)"  class="btn btn-danger " title="Supprimer">
                                        <span class=""><i class="icon-trash"></i></span></button></td>
                                </tr>


                            </table>
                        </div>
                    </div>

                    <div class="widget-box" v-if="detail_offre_finnancier">
                        <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                            <h5>Offre financiere</h5>
                        </div>
                        <div class="widget-content nopadding">
                            <table class="table table-bordered table-striped">
                                <thead>
                                <tr>
                                    <th>Designation</th>
                                    <th>Unite </th>
                                    <th>Quantite</th>
                                    <th>Prix unitaire</th>
                                    <th>Montant total ht </th>
                                    <th>Montant total ttc </th>
                                    <th>Action </th>
                                </tr>
                                </thead>

                                <tr>
                                    <td>{{detail_offre_finnancier.designation || "Non renseigne"}}</td>
                                    <td>{{detail_offre_finnancier.unite || "Non renseigne"}}</td>
                                    <td>{{detail_offre_finnancier.quantite || "Non renseigne"}}</td>
                                    <td>{{detail_offre_finnancier.prix_unitaire || "Non renseigne"}}</td>
                                    <td>{{detail_offre_finnancier.montant_total_ht || "Non renseigne"}}</td>
                                    <td>{{detail_offre_finnancier.montant_total_ttc || "Non renseigne"}}</td>
                                    <td><button @click.prevent="supprimerOffreFinancier(detail_offre_finnancier.id)"  class="btn btn-danger " title="Supprimer">
                                        <span class=""><i class="icon-trash"></i></span></button></td>
                                </tr>


                            </table>
                        </div>
                    </div>
                </div>
                <!--fin dossier candidat-->


              </div>

            <div id="tab21" class="tab-pane">
<div align="right">
                <div class="widget-content">

                    <a href="#ajouterLettreInvitation" data-toggle="modal" class="btn btn-warning">Ajouter</a>

                </div>

</div>
                <table class="table table-bordered table-striped" v-if="marcheid">
                    <thead>
                    <tr>

                        <th>Date lettre</th>
                        <th>Ref lettre </th>
                        <th>Destination</th>
                        <th>Date cojo</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="odd gradeX" v-for="(appelOffre, index) in lettreInvitationAMarche(marcheid)"
                        :key="appelOffre.id">
                        <td @click="afficheBouttonTechFinInvitation(index)">
                            {{appelOffre.date_lettre || 'Non renseigné'}}</td>
                        <td @click="afficheBouttonTechFinInvitation(index)">
                            {{appelOffre.ref_lettre || 'Non renseigné'}}</td>
                        <td @click="afficheBouttonTechFinInvitation(index)">
                            {{appelOffre.destination || 'Non renseigné'}}</td>
                        <td @click="afficheBouttonTechFinInvitation(index)">
                            {{appelOffre.date_cojo || 'Non renseigné'}}</td>
                        <div class="btn-group">
                            <button @click.prevent="supprimerLettreInvitation(appelOffre.id)"  class="btn btn-danger " title="Supprimer">
                                <span class=""><i class="icon-trash"></i></span></button>

                        </div>

                    </tr>
                    </tbody>
                </table>
            </div>

            <div id="tab31" class="tab-pane">
                <div align="right">
                    <div class="widget-content">

                        <a href="#ajouterMantater" data-toggle="modal" class="btn btn-warning">Ajouter</a>

                    </div>

                </div>
                <table class="table table-bordered table-striped" v-if="marcheid">
                    <thead>
                    <tr>

                        <th>Date </th>
                        <th>Matricule </th>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="odd gradeX" v-for="(appelOffre, index) in listeMantater(marcheid)"
                        :key="appelOffre.id">
                        <td @click="afficheBouttonTechFinMandater(index)">
                            {{appelOffre.date_id || 'Non renseigné'}}</td>
                        <td @click="afficheBouttonTechFinMandater(index)">
                            {{appelOffre.matricule_m || 'Non renseigné'}}</td>
                        <td @click="afficheBouttonTechFinMandater(index)">
                            {{appelOffre.nom_mandat || 'Non renseigné'}}</td>
                        <td @click="afficheBouttonTechFinMandater(index)">
                            {{appelOffre.prenom_nom || 'Non renseigné'}}</td>
                        <div class="btn-group">
                            <button @click.prevent="supprimerMandater(appelOffre.id)"  class="btn btn-danger " title="Supprimer">
                                <span class=""><i class="icon-trash"></i></span></button>

                        </div>

                    </tr>
                    </tbody>
                </table>

              </div>

              <div id="tab22" class="tab-pane"> <img src="img/demo/demo-image2.jpg" alt="demo-image">
              <p>And is full of waffle to It has multiple paragraphs and is full of waffle to pad out the comment. Usually, you just wish these sorts of comments would come to an end.multiple paragraphs and is full of waffle to pad out the comment.</p>
            </div>

            <div id="tab32²" class="tab-pane">
              <p>And is full of waffle to It has multiple paragraphs and is full of waffle to pad out the comment. Usually, you just wish these sorts of comments would come to an end.multiple paragraphs and is full of waffle to pad out the comment. </p>
              <img src="img/demo/demo-image3.jpg" alt="demo-image">
              </div>

          </div>
        </div>



                            </ul>
                      
                             




                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

<!-- Ajouter appel offres --->
        <div id="myAlert" class="modal hide" aria-hidden="true" style="display: none;">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter Appel offre</h3>
            </div>
            <div class="modal-body">
                <div class="widget-box">
                    <form action="#" method="get">
                        <div class="control-group">

                            <div class="controls">
                                <input type="text" class="span5" placeholder="Reference d'appel" v-model="formData.ref_appel">
                            </div>
                        </div>
                        <div class="control-group">

                            <div class="controls">
                                <input type="text" class="span5" placeholder="Type appel" v-model="formData.type_appel">
                            </div>
                        </div>
                        <div class="control-group">

                            <div class="controls">
                                <input type="text" class="span5" placeholder="Financement" v-model="formData.financement">
                            </div>
                        </div>
                        <div class="control-group">

                            <div class="controls">
                                <input type="text" class="span5" placeholder="Nom bailleurs" v-model="formData.nom_bailleurs">
                            </div>
                        </div>
                        <div class="control-group">
                            <div class="controls">
                                <label>Date emission</label>
                                <input type="date" class="span5" placeholder="Date emision" v-model="formData.date_emission">
                            </div>
                        </div>

                        <div class="control-group">
                            <div class="controls">
                                <label>Date limite</label>
                                <input type="date" class="span5" placeholder="Date limite" v-model="formData.date_limite">
                            </div>
                        </div>
                        <div class="control-group">
                            <div class="controls">
                                <input type="text" class="span5" placeholder="Objet appel offre" v-model="formData.objet_appel">
                            </div>
                        </div>
                        <div class="control-group">
                            <div class="controls">
                                <input type="text" class="span5" placeholder="Imputation" v-model="formData.imputation">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="modal-footer">  <a @click.prevent="ajouter" class="btn btn-primary"
                                           href="#">Valider</a> <a data-dismiss="modal" class="btn" href="#">Cancel</a> </div>
        </div>

        <!-- Fin ajouter appel offres --->

        <!--<fab :actions="fabActions" @cache="afficherModalAjouterActeDepense" main-icon="apps" bg-color="green"></fab>-->
        <notifications  />
        <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
        <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterActeDepense()">Open</button>

        <!-- Modification appel offres --->

        <div id="modificationModal" class="modal hide taillemodal">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modification appel offre</h3>
            </div>
            <div class="modal-body">
                <div class="widget-box">
                    <form action="#" method="get">
                        <div class="control-group">

                            <div class="controls">
                                <input type="text" class="span7" placeholder="Reference d'appel" v-model="edite_appel_offre.ref_appel">
                            </div>
                        </div>
                        <div class="control-group">

                            <div class="controls">
                                <input type="text" class="span7" placeholder="Type appel" v-model="edite_appel_offre.type_appel">
                            </div>
                        </div>
                        <div class="control-group">

                            <div class="controls">
                                <input type="text" class="span7" placeholder="Financement" v-model="edite_appel_offre.financement">
                            </div>
                        </div>
                        <div class="control-group">

                            <div class="controls">
                                <input type="text" class="span7" placeholder="Nom bailleurs" v-model="edite_appel_offre.nom_bailleurs">
                            </div>
                        </div>
                        <div class="control-group">
                            <div class="controls">
                                <label>Date emission</label>
                                <input type="date" class="span7" placeholder="Date emision" v-model="edite_appel_offre.date_emission">
                            </div>
                        </div>

                        <div class="control-group">
                            <div class="controls">
                                <label>Date limite</label>
                                <input type="date" class="span7" placeholder="Date limite" v-model="edite_appel_offre.date_limite">
                            </div>
                        </div>
                        <div class="control-group">
                            <div class="controls">
                                <input type="text" class="span7" placeholder="Objet appel offre" v-model="edite_appel_offre.objet_appel">
                            </div>
                        </div>
                        <div class="control-group">
                            <div class="controls">
                                <input type="text" class="span7" placeholder="Imputation" v-model="edite_appel_offre.imputation">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <a class="btn btn-primary" @click.prevent="modfications()">Modifier</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
        </div>

        <!-- Modification fin appel offres --->

        <!--Gestion de Lot-->
        <div id="myModal2" class="modal hide" aria-hidden="true" style="display: none;">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter lot </h3>
            </div>
            <div class="modal-body">
                <div class="widget-box">
                    <form action="#" method="get" v-if="marcheid">
                        <div class="control-group">

                            <div class="controls">
                                <input type="text" class="span5" placeholder="Numero lo" v-model="formLot.numero_lot">
                            </div>
                        </div>
                        <div class="control-group">

                            <div class="controls">
                                <input type="text" class="span5" placeholder="Libelle lot" v-model="formLot.libelle_lot">
                            </div>
                        </div>
                        <div class="control-group">

                            <div class="controls">
                                <input type="text" class="span5" placeholder="Montant lot" v-model="formLot.montant_lot">
                            </div>
                        </div>
                        <label>Appel Offre</label>
                        <div class="controls">
                            <select v-model="formLot.appel_offre_id" class="span">
                                <option v-for="varText in listeAppelOffre(marcheid)" :key="varText.id"
                                        :value="varText.id">{{varText.objet_appel}}</option>
                            </select>
                        </div>
                        <label>Mode de passation</label>
                        <div class="controls">

                            <select v-model="formLot.mode_passation_id" class="span">
                                <option v-for="varText in modePassations" :key="varText.id"
                                        :value="varText.id">{{varText.libelle}}</option>
                            </select>
                        </div>

                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <a class="btn btn-primary" @click.prevent="ajouterL()">Ajouter</a>
                <a data-dismiss="modal" class="btn btn-inverse" href="#">Cancel</a>
            </div>
        </div>
        <!--Fin gestion de lot-->

        <div id="modificationModal1" class="modal hide taillemodal">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modification de lot</h3>
            </div>
            <div class="modal-body">
                <div class="widget-box">
                    <form action="#" method="get">
                        <div class="control-group">

                            <div class="controls">
                                <input type="text" class="span5" placeholder="Numero lo" v-model="edite_lot.numero_lot">
                            </div>
                        </div>
                        <div class="control-group">

                            <div class="controls">
                                <input type="text" class="span5" placeholder="Libelle lot" v-model="edite_lot.libelle_lot">
                            </div>
                        </div>
                        <div class="control-group">

                            <div class="controls">
                                <input type="text" class="span5" placeholder="Montant lot" v-model="edite_lot.montant_lot">
                            </div>
                        </div>
                        <label>Appel Offre</label>
                        <div class="controls">
                            <select v-model="edite_lot.appel_offre_id" class="span">
                                <option v-for="varText in listeAppelOffre(marcheid)" :key="varText.id"
                                        :value="varText.id">{{varText.objet_appel}}</option>
                            </select>
                        </div>
                        <label>Mode de passation</label>
                        <div class="controls">

                            <select v-model="edite_lot.mode_passation_id" class="span">
                                <option v-for="varText in modePassations" :key="varText.id"
                                        :value="varText.id">{{varText.libelle}}</option>
                            </select>
                        </div>

                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <a class="btn btn-primary" @click.prevent="modficationsLot()">Modifier</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
        </div>


        <!--contratualisation-->
        <!--dossier candidature-->
        <div id="offreT" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter l'offre technique</h3>
            </div>
            <div class="modal-body">
                <div class="widget-box">
                    <form action="#" method="get">
                        <div class="control-group">

                            <div class="controls">
                                <input type="text" class="span5" placeholder="Numero lot" v-model="formOffreTechnique.numero_lot">
                            </div>
                        </div>
                        <div class="control-group">

                            <div class="controls">
                                <input type="text" class="span5" placeholder="Accord groupe" v-model="formOffreTechnique.accord_groupe">
                            </div>
                        </div>
                        <div class="control-group">
                            <div class="controls">
                                <input type="text" class="span5" placeholder="Cautionnement prov" v-model="formOffreTechnique.cautionnement_prov">
                            </div>
                        </div>
                        <div class="control-group">
                            <div class="controls">
                                <input type="text" class="span5" placeholder="Pouv habil" v-model="formOffreTechnique.attest_banc">
                            </div>
                        </div>
                        <div class="control-group">
                            <div class="controls">
                                <input type="text" class="span5" placeholder="Piece Admin" v-model="formOffreTechnique.formil_propo_tech">
                            </div>
                        </div>
                        <div class="control-group">
                            <div class="controls">
                                <input type="text" class="span5" placeholder="Attest banc" v-model="formOffreTechnique.fiche_rsgnt_mbre_groupe">
                            </div>
                        </div>
                        <div class="control-group">
                            <div class="controls">
                                <input type="text" class="span5" placeholder="Org travau" v-model="formOffreTechnique.atcdent_marche_non_exe">
                            </div>
                        </div>
                        <div class="control-group">
                            <div class="controls">
                                <input type="text" class="span5" placeholder="Meth real travau" v-model="formOffreTechnique.org_travau_site">
                            </div>
                        </div>
                        <div class="control-group">
                            <div class="controls">
                                <input type="text" class="span5" placeholder="Prog mobilisation" v-model="formOffreTechnique.meth_real_travau">
                            </div>
                        </div>

                        <div class="control-group">
                            <div class="controls">
                                <input type="text" class="span5" placeholder="Prog mobilisation" v-model="formOffreTechnique.prog_mobilisation">
                            </div>
                        </div>
                        <div class="control-group">
                            <div class="controls">
                                <input type="text" class="span5" placeholder="Capacite financiere" v-model="formOffreTechnique.capacite_financiere">
                            </div>
                        </div>
                        <div class="control-group">
                            <div class="controls">
                                <input type="text" class="span5" placeholder="Caa moyen ac" v-model="formOffreTechnique.caa_moyen_ac_entre">
                            </div>
                        </div>
                        <div class="control-group">
                            <div class="controls">
                                <input type="text" class="span5" placeholder="Capacite techn exp" v-model="formOffreTechnique.capacite_techn_exp">
                            </div>
                        </div>

                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <a data-dismiss="modal" class="btn btn-primary" href="#" @click.prevent="ajouterOffreT()">Ajouter</a>
                <a data-dismiss="modal" class="btn" href="#">Cancel</a> </div>
        </div>
        <div id="offreF" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter l'offre financière</h3>
            </div>
            <div class="modal-body">
                <div class="widget-box">
                    <form action="#" method="get">
                        <div class="control-group">

                            <div class="controls">
                                <input type="text" class="span5" placeholder="numero lot" v-model="formOffreFinanciere.numero_lot">
                            </div>
                        </div>
                        <div class="control-group">

                            <div class="controls">
                                <input type="text" class="span5" placeholder="Designation" v-model="formOffreFinanciere.designation">
                            </div>
                        </div>
                        <div class="control-group">
                            <div class="controls">
                                <input type="text" class="span5" placeholder="quantite" v-model="formOffreFinanciere.quantite">
                            </div>
                        </div>
                        <div class="control-group">
                            <div class="controls">
                                <input type="text" class="span5" placeholder="prix unitaire" v-model="formOffreFinanciere.prix_unitaire">
                            </div>
                        </div>
                        <div class="control-group">
                            <div class="controls">
                                <input type="text" class="span5" placeholder="Montant total HT" v-model="formOffreFinanciere.montant_total_ht">
                            </div>
                        </div>
                        <div class="control-group">
                            <div class="controls">
                                <input type="text" class="span5" placeholder="Montant total ttc" v-model="formOffreFinanciere.montant_total_ttc">
                            </div>
                        </div>



                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <a data-dismiss="modal" class="btn btn-primary" href="#" @click.prevent="ajouterOffreF()"> Ajouter</a>
                <a data-dismiss="modal" class="btn" href="#">Cancel</a> </div>
        </div>
        <!--Fin dossier candidature ajouterMantater-->

           <!--Lettre d'invitation-->
        <div id="ajouterLettreInvitation" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter lettre d'invitation</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">


                    <div class="control-group">
                        <label class="control-label">Appel d'offre</label>
                        <div class="controls">
                            <select v-model="formLettre.appel_offre_id" class="span">
                                <option v-for="plans in listeAppelOffre(marcheid)" :key="plans.id"
                                        :value="plans.id">{{plans.objet_appel}}</option>
                            </select>
                        </div>
                    </div>


                    <div class="control-group">
                        <label class="control-label">Date lettre</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="formLettre.date_lettre"
                                    class="span"
                                    placeholder="Saisir le nom_bailleur"
                            />
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Refernece lettre</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="formLettre.ref_lettre"
                                    class="span"
                                    placeholder="Saisir l"
                            />
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Destinantion</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="formLettre.destination"
                                    class="span"
                                    placeholder="Saisir "
                            />
                        </div>
                    </div>


                    <div class="control-group">
                        <label class="control-label">Date cojo</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="formLettre.date_cojo"
                                    class="span"
                                    placeholder="Saisir email bailleur"
                            />
                        </div>
                    </div>
                    <!-- <div class="control-group">
                         <label class="control-label">Appel d'offre</label>
                         <div class="controls">
                             <input
                                     type="text"
                                     v-model="formData.appel_offre"
                                     class="span"
                                     placeholder="saisir le contact"
                             />
                         </div>
                     </div>-->
                </form>
            </div>
            <div class="modal-footer">
                <a data-dismiss="modal" class="btn btn-primary" @click.prevent="ajouterLettreInv()" href="#">Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Cancel</a> </div>
        </div>
        <div id="modificationLettreInvitation" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modification lettre invitation</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">


                    <div class="control-group">
                        <label class="control-label">Appel d'offre</label>
                        <div class="controls">
                            <select v-model="edite_lettre_invitation.appel_offre_id" class="span">
                                <option v-for="plans in listeAppelOffre(marcheid)" :key="plans.id"
                                        :value="plans.id">{{plans.objet_appel}}</option>
                            </select>
                        </div>
                    </div>


                    <div class="control-group">
                        <label class="control-label">Date lettre</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="edite_lettre_invitation.date_lettre"
                                    class="span"
                                    placeholder="Saisir le nom_bailleur"
                            />
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Refernece lettre</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="edite_lettre_invitation.ref_lettre"
                                    class="span"
                                    placeholder="Saisir l"
                            />
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Destinantion</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="edite_lettre_invitation.destination"
                                    class="span"
                                    placeholder="Saisir "
                            />
                        </div>
                    </div>


                    <div class="control-group">
                        <label class="control-label">Date cojo</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="edite_lettre_invitation.date_cojo"
                                    class="span"
                                    placeholder=""
                            />
                        </div>
                    </div>
                    <!-- <div class="control-group">
                         <label class="control-label">Appel d'offre</label>
                         <div class="controls">
                             <input
                                     type="text"
                                     v-model="formData.appel_offre"
                                     class="span"
                                     placeholder="saisir le contact"
                             />
                         </div>
                     </div>-->
                </form>
            </div>
            <div class="modal-footer">
                <a data-dismiss="modal" class="btn btn-primary" @click.prevent="modificationLettreInvitation()" href="#">Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Cancel</a> </div>
        </div>
        <!--Fin lettre d'invitation-->

        <!--Mandater-->
        <div id="ajouterMantater" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter mandater</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">


                    <div class="control-group">
                        <label class="control-label">Lettre Invitation</label>
                        <div class="controls">
                            <select v-model="formMandater.lettre_invitation_id" class="span">
                                <option v-for="plans in lettreInvitationAMarche(marcheid)" :key="plans.id"
                                        :value="plans.id">{{plans.ref_lettre}}</option>
                            </select>
                        </div>
                    </div>


                    <div class="control-group">
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="formMandater.matricule_m"
                                    class="span"
                                    placeholder="Matricule"
                            />
                        </div>
                    </div>
                    <div class="control-group">
                        <div class="controls">
                            <input type="text"
                                    v-model="formMandater.nom_mandat"
                                    class="span"
                                    placeholder="Nom mandater"
                            />
                        </div>
                    </div>
                    <div class="control-group">
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="formMandater.prenom_nom"
                                    class="span"
                                    placeholder="Prenom "
                            />
                        </div>
                    </div>


                    <div class="control-group">
                        <label class="control-label">Date</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="formMandater.date_id"
                                    class="span"

                            />
                        </div>
                    </div>

                </form>
            </div>
            <div class="modal-footer">
                <a data-dismiss="modal" class="btn btn-primary" @click.prevent="ajouterMandaterA()" href="#">Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Cancel</a> </div>
        </div>
        <div id="modificationMantater" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modification de mandater</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">


                    <div class="control-group">
                        <label class="control-label">Lettre Invitation</label>
                        <div class="controls">
                            <select v-model="editer_mandater.lettre_invitation_id" class="span">
                                <option v-for="plans in lettreInvitationAMarche(marcheid)" :key="plans.id"
                                        :value="plans.id">{{plans.ref_lettre}}</option>
                            </select>
                        </div>
                    </div>


                    <div class="control-group">
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="editer_mandater.matricule_m"
                                    class="span"
                                    placeholder="Matricule"
                            />
                        </div>
                    </div>
                    <div class="control-group">
                        <div class="controls">
                            <input type="text"
                                   v-model="editer_mandater.nom_mandat"
                                   class="span"
                                   placeholder="Nom mandater"
                            />
                        </div>
                    </div>
                    <div class="control-group">
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="editer_mandater.prenom_nom"
                                    class="span"
                                    placeholder="Prenom "
                            />
                        </div>
                    </div>


                    <div class="control-group">
                        <label class="control-label">Date</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="editer_mandater.date_id"
                                    class="span"

                            />
                        </div>
                    </div>

                </form>
            </div>
            <div class="modal-footer">
                <a data-dismiss="modal" class="btn btn-primary" @click.prevent="modificationMandater()" href="#">Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Cancel</a> </div>
        </div>
        <!--Fin mandater-->
        <!--Fin contratualisation-->
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    //import {getterDossierCandidats} from "../../../vuex/modules/fabrice/bienService/Getters";


    export default {
        name: 'compte',
        data() {
            return {
                fabActions: [
                    {
                        name: "cache",
                        icon: "add"
                    }

                ],
                editer_mandater:"",
                edite_lettre_invitation:"",
                detail_dossier_candidature:"",
                detail_offre_technique:"",
                detail_offre_finnancier:"",
                detail_marche:"",
                marcheid:"",
                appel_offre_marche:"",
               formLot:{
                   numero_lot:"",
                   libelle_lot:"",
                   montant_lot:"",
                   marche_id:"",
                   appel_offre_id:"",
                   mode_passation_id:""
               }
               ,formMandater:{
                    lettre_invitation_id:"",
                    date_id:"",
                    nom_mandat:"",
                    prenom_nom:""
                },
            isFormulaireDossierCandidature:false,
                isDetailDossierCandidature:false,
                isButtunAddDossierCandidat:true,
          formDossierCadidature:{
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

          },
         formOffreTechnique:{
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
                formLettre: {
                    appel_offre_id:"",
                    date_lettre:"",
                    ref_lettre:"",
                    destination:"",
                },
                edite_appel_offre: "",
                search: "",
                edite_lot:{
                    numero_lot:"",
                    libelle_lot:"",
                    montant_lot:"",
                    marche_id:"",
                    appel_offre_id:"",
                    mode_passation_id:""
                },
                isOffreTechniqueFinancier:false
            };
        },
created() {
            this.marcheid=this.$route.params.id
   this.detail_marche = this.getMarchePersonnaliser.find(
       idmarche => idmarche.id == this.$route.params.id
   )
  /*  this.appel_offre_marche=this.appelOffres.filter( idmarche => idmarche.marche.id == this.$route.params.id)
    console.log(this.appel_offre_marche)*/
},
        computed: {
            ...mapGetters("bienService", [ 'acteDepense',"getMarchePersonnaliser","appelOffres",
                "lots","modePassations", "procedurePassations","getterDossierCandidats",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","getterMandate"]),
            listeAppelOffre(){
                return  marche_id=>{
                    if (marche_id!="") {
                        return this.appelOffres.filter( idmarche => idmarche.marche.id == marche_id)
                    }
                }

            },
            listeLots(){
                return  marche_id=>{
                    if (marche_id!="") {
                       // let listeLotMarche =this.lots.filter( idmarche => idmarche.marche.id == marche_id)
                       // const searchTerm = this.search.toLowerCase();
                        //return this.lots.filter( idmarche => idmarche.marche.id == marche_id)
                        return this.lots.filter( idmarche => idmarche.marche.id == marche_id)
                    }
                }
            },
            dossierCandidature: function () {
                return marcheid => {
                    if (marcheid != "") {
                        return this.getterDossierCandidats.filter(idmarche => idmarche.appel_offre.marche_id == marcheid)
                    }
                }
            },
            lettreInvitationAMarche: function () {
                return marcheid => {
                    if (marcheid != "") {
                        return this.getterLettreInvitation.filter(idmarche => idmarche.appel_offre.marche_id == marcheid)
                    }
                }
            },
            listeMantater: function () {
                return marcheid => {
                    if (marcheid != "") {
                        return this.getterMandate.filter(idmarche => idmarche.lettre_invitation.appel_offre.marche_id == marcheid)
                    }
                }
            }
            // filtre_equipement() {
            //   const st = this.search.toLowerCase();
            //   return this.equipements.filter(type => {
            //     return (

            //       type.libelle.toLowerCase().includes(st)
            //     );
            //   });
            // }
//             acteDepenseFiltre(){

//      const searchTerm = this.search.toLowerCase();

// return this.acteDepense.filter((item) => {

//      return item.matricule.toLowerCase().includes(searchTerm)





//    }
// )
//    }


        },
        methods: {
            ...mapActions("bienService", [
                'ajouterAppelOffre','modifierAppelOffre',"supprimerAppelOffre","modifierAppelOffre",
                "ajouterLot","modifierLot","supprimerLot","ajouterDossierCandidat","getDossierCandidat",
                "modifierDossierCandidat","supprimerDossierCandidat","ajouterOffreTechnique","modifierOffreTechnique",
                "supprimerOffreTechnique","ajouterOffreFinancier","modifierOffreFinancier","supprimerOffreFinancier",
                "ajouterLettreInvitation",
                "modifierLettreInvitation","supprimerLettreInvitation","getMandater","ajouterMandater","modifierMandater","supprimerMandater"
            ]),
            // formatageSomme: formatageSomme,
            ajouterBudgetaireLocal(){
                 this.$("#myModal").modal({
                    backdrop: "static",
                    keyboard: false
                });
            },


            //afiicher modal ajouter
            afficherModalAjouterActeDepense() {
                this.$("#exampleModal").modal({
                    backdrop: "static",
                    keyboard: false
                });
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
                        mode_passation_id:""
                }
            },
            ajouterLettreInv(){
                this.ajouterLettreInvitation(this.formLettre)
                this.formLettre= {
                    appel_offre_id:"",
                        date_lettre:"",
                        ref_lettre:"",
                        destination:"",
                }
            },
            ajouterOffreT(){
                this.formOffreTechnique.dossier_candidat_id=this.edite_offre_technique.id
              this.ajouterOffreTechnique(this.formOffreTechnique)
                this.formOffreTechnique={
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
            ajouterOffreF(){
                console.log(this.edite_offre_financiere.id)
                this.formOffreFinanciere.dossier_candidat_id=this.edite_offre_financiere.id
                this.ajouterOffreFinancier(this.formOffreFinanciere)
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
            ajouterMandaterA(){
               this.ajouterMandater(this.formMandater)
                this.formMandater={
                      lettre_invitation_id:"",
                        date_id:"",
                        nom_mandat:"",
                        prenom_nom:""
                }
            },
            ajouterDossierCandidature(){
                this.ajouterDossierCandidat(this.formDossierCadidature)
                this.formDossierCadidature={
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

                }
                this.NotisFormulaireDossierCand()
            },

            modaleOffreTechnique(index){
              this.edite_offre_technique=this.getterDossierCandidats[index]
            },
            modaleOffreFinnanciere(index){
                this.edite_offre_financiere=this.getterDossierCandidats[index]
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
                this.detail_offre_finnancier=this.getterOffreFinanciers.find(offre => offre.dossier_candidature.id ==id)
                this.detail_offre_technique =this.gettersOffreTechniques.find(offre =>offre.dossier_candidature.id ==id)
                console.log(this.detail_offre_finnancier)

            },
            // afficher modal de modification

            afficherModalModifierActeDepense(index){
                this.$('#modificationModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });

                this.edite_appel_offre = this.appelOffres[index];
            },

            afficherModaleModifier(index){
                this.$('#modificationModal1').modal({
                    backdrop: 'static',
                    keyboard: false
                });

             this.edite_lot = this.lots[index];
                //this.edite_lot.appel_offre_id=this.edite_lot.
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
            modfications(){
                this.modifierAppelOffre(this.edite_appel_offre)
                this.$('#modificationModal').modal('hide');
            },

            modficationsLot(){
                this.modifierLot(this.edite_lot)
                this.$('#modificationModal1').modal('hide');
            },


            // eslint-disable-next-line no-unused-vars
            afficheBouttonTechFin(index){
             this.isOffreTechniqueFinancier=true
            },
            afficheBouttonTechFinInvitation(index){
                this.$('#modificationLettreInvitation').modal({
                    backdrop: 'static',
                    keyboard: false
                });

                this.edite_lettre_invitation = this.getterLettreInvitation[index];
            },
            modificationLettreInvitation(){
                this.modifierLettreInvitation(this.edite_lettre_invitation)
            },
            // formaterDate(date) {
            //   return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            // },

            ExporterEnExel(){
                this.$refs.excel.click()
            }
        }
    };
</script>
<style scoped>
    .taillemodal {
        width: 800px;
        margin: 0 -380px;
    }
    .sommecolor{
        background-color: red;
        color:red;
        font-size: 120%;
        text-align: center;
        font-weight:bold;
    }
</style>
