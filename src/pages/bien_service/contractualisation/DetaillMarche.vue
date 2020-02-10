
<template>
    
<div>
        <div class="container-fluid">
            <h4 v-if="marcheDetail(marcheid)" >Detail Marche : {{marcheDetail(marcheid).objet}}  <button class="btn btn-danger btn-large" v-if="marcheDetail(marcheid).attribue==0">Marché en cours de passation</button>
                <button class="btn btn-success btn-large" v-else>Marché attribué</button></h4>
            <hr />

            <div class="widget-box">
                <div class="widget-content">
                    <div class="widget-content nopadding">
                        <table class="table table-striped table-bordered" v-if="detail_marche">
                            <thead>
                            <tr>
                                <th>Objet marché</th>
                                <th>Reference marché</th>
                                <th>Montant marché</th>
                                <th>Type de marché</th>
                                <th>Unite administrative</th>
                                <th>Exercice Budgetaire</th>
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
                                    {{detail_marche.exo_id}}
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
                                <li class="active"><a data-toggle="tab" href="#tab01">Bailleur</a></li>
                                <li class=""><a data-toggle="tab" href="#tab1">Offre</a></li>
                                <li class=""><a data-toggle="tab" href="#tab2">Liste des lots</a></li>
                                <li class=""><a data-toggle="tab" href="#tab3">Contratualisation</a></li>
                                <!-- <li class=""><a data-toggle="tab" href="#tab4">Facture</a></li> -->
                            </ul>
                        </div>
                        <div class="widget-content tab-content">


                            <div id="tab01" class="tab-pane active">
                                <div class="span4"></div>
                                <div class="span4"></div>
                                <div class="span4" align="right">
                                    <a href="#addBailleurMarche" data-toggle="modal" class="btn btn-success" align="rigth">Ajouter</a></div>
                                <h4>Liste des bailleurs du marché</h4>

                                <table class="table table-bordered table-striped" v-if="marcheid">
                                    <thead>
                                    <tr>
                                        <th>Bailleur</th>
                                        <th>Type finanncement</th>
                                        <th>Montant</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr class="odd gradeX" v-for="appelOffre in listeBailleurMarche(marcheid)"
                                        :key="appelOffre.id">
                                        <td @dblclick="editeMarcheBailleur(appelOffre.id)">
                                            {{appelOffre.bailleur.libelle || 'Non renseigné'}}</td>
                                        <td @dblclick="editeMarcheBailleur(appelOffre.id)">
                                            {{appelOffre.typeFinnancement.libelle || 'Non renseigné'}}</td>
                                        <td @dblclick="editeMarcheBailleur(appelOffre.id)">
                                            {{appelOffre.montant || 'Non renseigné'}}</td>
                                        <div class="btn-group">
                                            <button @click.prevent="supprimerMarcheBailleur(appelOffre.id)"  class="btn btn-danger ">
                                                <span class=""><i class="icon-trash"></i></span></button>
                                        </div>

                                    </tr>
                                    </tbody>
                                </table>


                                <div id="addBailleurMarche" class="modal hide" aria-hidden="true" style="display: none;">
                                    <div class="modal-header">
                                        <button data-dismiss="modal" class="close" type="button">×</button>
                                        <h3>Ajouter bailleur </h3>
                                    </div>
                                    <div class="modal-body">

                                        <form action="#" method="get" v-if="marcheid">
                                            <label>Bailleur</label>
                                            <div class="controls">
                                                <select v-model="formBailleur.bailleur_id" class="span" >
                                                    <option v-for="varText in sources_financements" :key="varText.id"
                                                            :value="varText.id">{{varText.libelle}}</option>
                                                </select>
                                            </div>
                                            <label>Type finnancement <code>*</code> </label>
                                            <div class="controls">

                                                <select v-model="formBailleur.type_finnancement_id" class="span">
                                                    <option v-for="varText in types_financements" :key="varText.id"
                                                            :value="varText.id">{{varText.libelle}}</option>
                                                </select>
                                            </div>
                                            <div class="control-group">
                                                <label class="control-label">Montant <code>*</code> :</label>
                                                <div class="controls">
                                                    <input type="text" class="span5" placeholder="Libelle lot" v-model="formBailleur.montant">
                                                </div>
                                                <div class="controls">
                                                    <code>Reste bailleur : {{parseFloat(detail_marche.montant_marche)-montantBailleurMarcheCompare(marcheid)}}</code>
                                                    <code v-if="montantBailleurMarcheCompare(marcheid)>=parseFloat(detail_marche.montant_marche)">
                                                        Le montant total des bailleurs ne toi etre supperier au montant du marche
                                                    </code>
                                                </div>
                                            </div>
                                        </form>
                                        <div class="modal-footer">
                                            <button @click.prevent="ajouterBailleur" class="btn btn-primary" v-if="montantBailleurMarcheCompare(marcheid)<=parseFloat(detail_marche.montant_marche)">Valider</button>
                                            <button data-dismiss="modal" class="btn" href="#">Fermer</button>
                                        </div>
                                    </div>
                                </div>

                                <div id="editBailleuMarche" class="modal hide" aria-hidden="true" style="display: none;">
                                    <div class="modal-header">
                                        <button data-dismiss="modal" class="close" type="button">×</button>
                                        <h3>Modification </h3>
                                    </div>
                                    <div class="modal-body">

                                        <form action="#" method="get" v-if="marcheid">
                                            <label>Bailleur</label>
                                            <div class="controls">
                                                <select v-model="edit_bailleur_marche.bailleur_id" class="span" >
                                                    <option v-for="varText in sources_financements" :key="varText.id"
                                                            :value="varText.id">{{varText.libelle}}</option>
                                                </select>
                                            </div>
                                            <label>Type finnancement <code>*</code> </label>
                                            <div class="controls">

                                                <select v-model="edit_bailleur_marche.type_finnancement_id" class="span">
                                                    <option v-for="varText in types_financements" :key="varText.id"
                                                            :value="varText.id">{{varText.libelle}}</option>
                                                </select>
                                            </div>
                                            <div class="control-group">
                                                <label class="control-label">Montant <code>*</code> :</label>
                                                <div class="controls">
                                                    <input type="text" class="span5" placeholder="Libelle lot" v-model="edit_bailleur_marche.montant">
                                                </div>
                                            </div>
                                        </form>
                                        <div class="modal-footer">
                                            <button @click.prevent="modificationBailleurMarche" class="btn btn-primary">Modification</button>
                                            <button data-dismiss="modal" class="btn" href="#">Fermer</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div id="tab1" class="tab-pane">
                                <div class="span4"></div>
                                <div class="span4"></div>
                                <div class="span4" align="right">
                                    <a href="#myAlert" data-toggle="modal" class="btn btn-success" align="rigth">Ajouter</a></div>
                                   <h4>Liste des offres</h4>
                                <table class="table table-bordered table-striped" v-if="marcheid">
                                    <thead>
                                    <tr>

                                        <th>Reference appel</th>
                                        <th> Type procedure</th>
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
                                            {{formaterDate(appelOffre.date_emission) || 'Non renseigné'}}</td>
                                        <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{formaterDate(appelOffre.date_limite) || 'Non renseigné'}}</td>
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
                                        <div class="span4" align="right">
                                            <a href="#addLot" data-toggle="modal"
                                                                            class="btn btn-info">Ajouter lot</a></div>
                                        <table class="table table-bordered table-striped" v-if="marcheid">
                                            <thead>
                                            <tr>
                                                <th>Numero lot </th>
                                                <th>Libellé</th>
                                                <th>Montant</th>
                                                <th>Offre</th>
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
                                                    {{lot_marche.appel_offre.ref_appel || 'Non renseigné'}}
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
              <li class=""><a data-toggle="tab" href="#tab22">Ouverture</a></li>
              <li class=""><a data-toggle="tab" href="#tab32">Analyse</a></li>
               <li class=""><a data-toggle="tab" href="#tab33">Demande ANO</a></li>
                <li class=""><a data-toggle="tab" href="#tab34">Avis DMP</a></li>
                 <li class=""><a data-toggle="tab" href="#tab35">Avis Bailleur</a></li>
                 <!-- <li class=""><a data-toggle="tab" href="#tab36">Observation Bailleur</a></li> -->
                 <li class=""><a data-toggle="tab" href="#tab37" title="Acte effet financier">Actes</a></li>

            

            

            </ul>
          </div>

          <div class="widget-content tab-content">


            <div id="tab12" class="tab-pane active">
          <div class="span6"></div>

                <div class="span6" align="right">
                    <button class="btn btn-success" @click="isFormulaireDossierCand" v-if="isButtunAddDossierCandidat">Ajouter dossier candidat</button>
                 <!--   <button class="btn btn-warning" v-if="isOffreTechniqueFinancier">Add Offre technique</button>
                    <button data-toggle="modal" class="btn btn-info" v-if="isOffreTechniqueFinancier">Add Offre financiere</button>-->
                </div>

             <div v-if="isButtunAddDossierCandidat">
                 <h4>Liste des dossiers candidats</h4>
                 <table class="table table-bordered table-striped" v-if="marcheid">
                     <thead>
                     <tr>
                         <th>Numero dossier</th>
                         <th>Type candidat</th>
                         <th>Raison social </th>
                         <th>Date naissance</th>
                         <th>Telephone</th>
                         <th>Adresse</th>
                         <th>Email</th>
                         <th>Appel Offre</th>
                         <th>Procedure</th>
                         <!--<th v-if="selectionAttributionMarche(marcheid)">Decision</th>-->
                         <th>Action</th>
                     </tr>
                     </thead>
                     <tbody>
                     <tr class="odd gradeX" v-for="(appelOffre, index) in dossierCandidature(marcheid)"
                         :key="appelOffre.id">
                         <td @click="afficheBouttonTechFin(index)">
                             {{appelOffre.numero_dossier || 'Non renseigné'}}</td>
                         <td @click="afficheBouttonTechFin(index)">
                             {{appelOffre.type_candidat || 'Non renseigné'}}</td>
                         <td @click="afficheBouttonTechFin(index)">
                             {{appelOffre.nom_cand || 'Non renseigné'}}</td>
                         <td @click="afficheBouttonTechFin(index)">
                             {{formaterDate(appelOffre.date_nais_cand) || 'Non renseigné'}}</td>
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

                         <div class="btn-group">
                             <button   class="btn  " title="Detail" @click.prevent="isDetailDossierCandi(appelOffre.id)">
                                 <span class=""><i class="icon-folder-open" ></i></span></button>
                             <a href="#offreT" data-toggle="modal" @click.prevent="modaleOffreTechnique(appelOffre.id)"  class="btn" title="Offre technique">
                                 <span class=""><i class="icon-wrench"></i></span></a>
                             <a href="#offreF" data-toggle="modal" @click.prevent="modaleOffreFinnanciere(appelOffre.id)"  class="btn  " title="Offre financière">
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
                    <div class="span6" align="left">
                        Selectionner l'entreprise:
                        <model-list-select style="background-color: rgb(255,255,255);"
                                           class="wide"
                                           :list="entreprises"
                                           v-model="search"
                                           option-value="id"
                                           option-text="raison_sociale"
                                            :search-change="recherche()"
                                           placeholder="Selectionner l'entreprise"
                        >

                        </model-list-select>
                        <hr>
                       <!-- <input type="text" placeholder="Recherche ..." v-on:keyup="recherche" class="span6" v-model="search">-->
                    </div>

                    <table class="table table-bordered table-striped">
                        <tbody>
                        <tr class="odd gradeX">

                            <td>
                                <div class="control-group">
                                    <label class="control-label">registre de commerce</label>
                                    <div class="controls">
                                        <input type="text" class="" placeholder="Registre de commerce" v-model="formDossierCadidature.reg_com">
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div class="control-group">
                                    <label class="control-label">Numero de compte contribuable</label>
                                    <div class="controls">
                                        <input type="text" class="" placeholder="Situation Geographique" v-model="formDossierCadidature.numero_cc">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Raison social</label>
                                    <div class="controls">
                                        <input type="text" class="" placeholder="Raison social" v-model="formDossierCadidature.nom_cand">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Email</label>
                                    <div class="controls">
                                        <input type="text" class="" placeholder="Email" v-model="formDossierCadidature.email_cand">
                                    </div>
                                </div>
                            </td>
                        </tr>


                        <tr class="odd gradeX">
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Telephone</label>
                                    <div class="controls">
                                        <input type="text" class="" placeholder="Telphone" v-model="formDossierCadidature.telephone_cand">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Address </label>
                                    <div class="controls">
                                        <input type="text" class="" placeholder="Adresse" v-model="formDossierCadidature.adresse_post">
                                    </div>
                                </div>
                            </td>

                            <td>

                                <div class="control-group">
                                    <label class="control-label">Numero de dossier</label>
                                    <div class="controls">
                                        <input type="text" class="" placeholder="Numero dossier" v-model="formDossierCadidature.numero_dossier">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Type candidat</label>
                                    <div class="controls">
                                        <input type="text" class="" placeholder="Type Candidat" v-model="formDossierCadidature.type_candidat">
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
                                    <label class="control-label">Accord groupe</label>
                                    <div class="controls">
                                        <input type="text" class="" placeholder="Accord Groupe" v-model="formDossierCadidature.accord_group">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Cautionnement prov</label>
                                    <div class="controls">
                                        <input type="text" class="" placeholder="Cautionnement" v-model="formDossierCadidature.cautionnement_prov">
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div class="control-group">
                                    <label class="control-label">Pouv habil signataire</label>
                                    <div class="controls">
                                        <input type="text" class="" placeholder="Pouv Hile Signature" v-model="formDossierCadidature.pouv_habil_signataire">
                                    </div>
                                </div>
                            </td>


                        </tr>


                        <tr class="odd gradeX">

                            <td>
                                <div class="control-group">
                                    <label class="control-label">Attestion banc</label>
                                    <div class="controls">
                                        <input type="text" class="" placeholder="Attestation banc" v-model="formDossierCadidature.attest_banc">
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div class="control-group">
                                    <label class="control-label">Formulaire proo techn</label>
                                    <div class="controls">
                                        <input type="text" class="" placeholder="Formul propo tech" v-model="formDossierCadidature.formul_propo_tech">
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div class="control-group">
                                    <label class="control-label">Fiche rsgnt </label>
                                    <div class="controls">
                                        <input type="text" class="" placeholder="Fiche renseignement" v-model="formDossierCadidature.fiche_rsgnt_cand">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Piece admin</label>
                                    <div class="controls">
                                        <input type="text" class="" placeholder="Piece Admin" v-model="formDossierCadidature.piece_admin">
                                    </div>
                                </div>
                            </td>
                        </tr>


                        <tr class="odd gradeX">
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Fiche rsgnt nombre groupe</label>
                                    <div class="controls">
                                        <input type="text" class="" placeholder="Fiche renseignement nombre groupe" v-model="formDossierCadidature.fiche_rsgnt_mbre_group">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Atcdent marche non exe</label>
                                    <div class="controls">
                                        <input type="text" class="" placeholder="Atcent marche non exe" v-model="formDossierCadidature.atcdent_marche_non_exe">
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div class="control-group">
                                    <label class="control-label">Org travau site</label>
                                    <div class="controls">
                                        <input type="text" class="" placeholder="Org travau" v-model="formDossierCadidature.org_travau_site">
                                     </div>
                                </div>
                            </td>

                            <td>
                                <div class="control-group">
                                    <label class="control-label">Metch real travau</label>
                                    <div class="controls">
                                        <input type="text" class="" placeholder="Meth real travau" v-model="formDossierCadidature.meth_real_travau">
                                    </div>
                                </div>
                            </td>

                        </tr>

                        <tr class="odd gradeX">

                            <td>
                                <label>Procedure de passation</label>
                                <div class="controls">
                                    <select v-model="formDossierCadidature.procedure_passation_id" class="span" disabled>
                                        <option v-for="varText in procedurePassations" :key="varText.id"
                                                :value="varText.id">{{varText.libelle}}</option>
                                    </select>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Date de naissance</label>
                                    <div class="controls">
                                          <input type="date" class="" placeholder="" v-model="formDossierCadidature.date_nais_cand">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Capacite financiere</label>
                                    <div class="controls">
                                        <input type="text" class="" placeholder="Capacite financiere" v-model="formDossierCadidature.capacite_financiere">
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div class="control-group">
                                    <div class="controls">
                                        <label class="control-label">Prog mobilisation</label>
                                        <input type="Text" class="" placeholder="Programme mobilisation" v-model="formDossierCadidature.prog_mobilisation">
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="control-group">
                                    <label class="control-label">CAA moyen acc entre</label>
                                    <div class="controls">
                                        <input type="text" class="" placeholder="CAA moyen ac entre" v-model="formDossierCadidature.caa_moyen_ac_entre">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Capacite finanancier</label>
                                    <div class="controls">
                                        <input type="text" class="" placeholder="Capacite financement" v-model="formDossierCadidature.capacite_financement">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Capacite techn exp</label>
                                    <div class="controls">
                                        <input type="text" class="" placeholder="Capacite tech exp" v-model="formDossierCadidature.capacite_tech_exp">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Montant offre financiere</label>
                                    <div class="controls">
                                        <input type="text" class="" placeholder="Mont offre financiere" v-model="formDossierCadidature.mt_offre_financiere">
                                    </div>
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
                            <h5>Nom du candidat : {{detail_dossier_candidature.nom_cand}} {{detail_dossier_candidature.prenom_cand}}  Numero dossier :{{detail_dossier_candidature.numero_dossier}} </h5>
                            <button class="btn" title="Affiche la liste des candidats" @click="NotisFormulaireDossierCand" v-if="!isButtunAddDossierCandidat"><span class=""><i class="icon-eye-open"></i></span></button></div>
                        <div class="widget-content nopadding">
                            <table class="table table-bordered table-striped">
                                <thead>
                                <tr>
                                    <th>Numero dossier</th>
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
                                    <td>{{detail_dossier_candidature.numero_dossier || "Non renseigne"}}</td>
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
                                    <!-- <th>Capacite financement</th> -->
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
                                    <!-- <td>{{detail_offre_technique.capacite_financement || "Non renseigne"}}</td> -->
                                    <td>{{detail_offre_technique.capacite_tech_exp || "Non renseigne"}}</td>
                                    <td>{{detail_offre_technique.meth_real_travau || "Non renseigne"}}</td>
                                    <td>{{detail_offre_technique.accord_groupe || "Non renseigne"}}</td>
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
                                  
                                    <th>Quantite</th>
                                    <th>Prix unitaire</th>
                                    <th>Montant total ht </th>
                                    <th>Montant total ttc </th>
                                    <th>Action </th>
                                </tr>
                                </thead>

                                <tr>
                                    <td>{{detail_offre_finnancier.designation || "Non renseigne"}}</td>
                                    <!-- <td>{{detail_offre_finnancier.unite || "Non renseigne"}}</td> -->
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



     <!--- debut ajout fournisseur que information n'exist pas dans la base  --->

 <div id="addFournisseurDosntBase" class="modal hide gdmodelfour">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>ajouter nouveau fournisseur</h3>
            </div>
     <!--@submit.prevent="ajouterNouveauFournisseurLocal(selectionAttributionMarche(marcheid).dossierFavorable.ano_dmp_bailleur.annalyse_d_m_p.demande_ano.annalyse_dossier.dossier_candidature.reg_com)"-->
     <!--v-if="selectionAttributionMarche(marcheid).dossierFavorable.ano_dmp_bailleur!=undefined"-->
            <div class="modal-body" >
                <form action="#" method="get" class="form-horizontal"  enctype="multipart/form-data">
                                <div class="row-fluid">
                                    <div class="span6">
                                        <div class="widget-box">
                                            <div class="widget-content nopadding">

                                                <div class="control-group">
                                                    <label class="control-label">Raison social :</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Raison social" v-model="formFournisseur.raison_sociale">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Sigle :</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Sigle" v-model="formFournisseur.sigle">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Secteur activite</label>
                                                    <div class="controls">
                                                        <select v-model="formFournisseur.secteur_activite_id">
                                                            <option></option>
                                                            <option v-for="item in secteur_activites" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Numero compte contribuable :</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Numero compte contribuable" v-model="formFournisseur.numero_cc">
                                                    </div>
                                                </div>
                                                <div class="control-group" >
                                                    <label class="control-label">Numero de registe de commerce:</label>
                                                    <div class="controls" v-if="selectionAttributionMarche(marcheid)">
                                                        <!--v-model="selectionAttributionMarche(marcheid).dossierFavorable.ano_dmp_bailleur.annalyse_d_m_p.demande_ano.annalyse_dossier.dossier_candidature.reg_com"-->
                                                        <input type="text" disabled class="span11" placeholder="Numero de registe de commerce" >
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Capitale social:</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Capitale social" v-model="formFournisseur.capitale_sociale">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Banque:</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Banque"  v-model="formFournisseur.banque">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Telephone:</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Telephone" v-model="formFournisseur.telephone">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Email:</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Email" v-model="formFournisseur.email">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Pays:</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Pays" v-model="formFournisseur.pays">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Ville:</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Ville" v-model="formFournisseur.ville">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Adresse:</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11"  placeholder="Adresse" v-model="formFournisseur.adresse">
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="span6">
                                        <div class="widget-box">
                                            <div class="widget-content nopadding">
                                                <div class="control-group">
                                                    <label class="control-label">Form juridique:</label>
                                                    <div class="controls">
                                                        <select v-model="formFournisseur.forme_juridique">
                                                            <option></option>
                                                            <option value="SNC">Société en Nom Collectif</option>
                                                            <option value="SCS">Société en Commandite Simple</option>
                                                            <option value="SP">Société en Participation</option>
                                                            <option value="SARL">Société à Responsabilité Limitée </option>
                                                            <option value="SRLU">Société à Responsabilité Limitée Unipersonnelle</option>
                                                            <option value="SA">Société Anonyme</option>
                                                            <option value="SAU">Société Anonyme Unipersonnelle </option>
                                                            <option value="GIE">Groupement d’intérêt Economique</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Centre import :</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Centre import" v-model="formFournisseur.centre_impot">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Service assiette :</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Service assiette" v-model="formFournisseur.service_assiette_impot">
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="widget-box">
                                            <div class="widget-content nopadding">
                                                <div class="control-group">
                                                    <label class="control-label">Imatriculation CNPS:</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Imatriculation CNPS" v-model="formFournisseur.immatriculation_cnps">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Date enregistrement CNPS :</label>
                                                    <div class="controls">
                                                        <input type="date" class="span11" placeholder="Date enregistrement CNPS" v-model="formFournisseur.date_enregistrement_cnps">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Nombre travailleur Permanent :</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Nombre travailleur Permanant" v-model="formFournisseur.nbre_travailleur_permanent">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Nombre travailleur horaire :</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Nombre travailleur horaire" v-model="formFournisseur.nbre_travailleur_horaire">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Nombre travailleur journalier :</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Nombre travailleur journalier" v-model="formFournisseur.nbre_travailleur_journalier">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-actions">
                                            <button type="submit" class="btn btn-success">Enregistrement</button>
                                        </div>
                                    </div>
                                </div>

                            </form>
            </div>
            <!-- <div class="modal-footer">
                <a
                        @click.prevent="ajoutObservationBailleurLocal"
                        class="btn btn-primary"
                        href="#"

                >Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div> -->
        </div>

              <!--  fin ajout founisseur --->





            <div id="tab21" class="tab-pane">
<div align="right">
                <div class="widget-content">

                    <a href="#ajouterLettreInvitation" data-toggle="modal" class="btn btn-warning">Ajouter</a>

                </div>

</div>
       <h4> Liste des lettres invitations</h4>
                <table class="table table-bordered table-striped" v-if="marcheid">
                    <thead>
                    <tr>

                        <th>Date lettre</th>
                        <th>Ref lettre </th>
                        <th>Destinataire</th>
                        <th> Objet de la lettre</th>
                        <th>Date cojo</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="odd gradeX" v-for="(appelOffre, index) in lettreInvitationAMarche(marcheid)"
                        :key="appelOffre.id">
                        <td @click="afficheBouttonTechFinInvitation(index)">
                           {{formaterDate(appelOffre.date_lettre) || 'Non renseigné'}}</td>
                        <td @click="afficheBouttonTechFinInvitation(index)">
                            {{appelOffre.ref_lettre || 'Non renseigné'}}</td>
                        <td @click="afficheBouttonTechFinInvitation(index)">
                            {{appelOffre.destination || 'Non renseigné'}}</td>

                         <td @click="afficheBouttonTechFinInvitation(index)">
                            {{appelOffre.objet_lettre || 'Non renseigné'}}</td>

                        <td @click="afficheBouttonTechFinInvitation(index)">
                            {{formaterDate(appelOffre.date_cojo )|| 'Non renseigné'}}</td>
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
                <h4> liste des mandates</h4>
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
                            {{formaterDate(appelOffre.date_id) || 'Non renseigné'}}</td>
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

              <div id="tab22" class="tab-pane">
                  <div align="right">
                      <div class="widget-content">

                          <a href="#ajouterCojo" data-toggle="modal" class="btn btn-warning" >Ajouter </a>

                      </div>

                  </div>
                  <h4> Infomation sur la cojo</h4>
                  <table class="table table-bordered table-striped" v-if="marcheid">
                      <thead>
                      <tr>

                          <th>Date Composition</th>
                          <th>Date invitation</th>
                          <th>Numero dossier Appel Offre</th>
                          <th>Nmbr particiapnt</th>

                          <th>Action</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr class="odd gradeX" v-for="(appelOffre, index) in listeCojo(marcheid)"
                          :key="appelOffre.id">
                          <!--<td listeMembreCojo @click="afficheBouttonTechCojo(index)">
                              {{appelOffre.controleur_finnancier || 'Non renseigné'}}</td>
                          <td @click="afficheBouttonTechCojo(index)">
                              {{appelOffre.dmp || 'Non renseigné'}}</td>
                          <td @click="afficheBouttonTechCojo(index)">
                              {{appelOffre.autorite_contractante || 'Non renseigné'}}</td>-->
                          <td @click="afficheBouttonTechCojo(index)">
                              {{formaterDate(appelOffre.date_composition) || 'Non renseigné'}}
                          </td>
                          <td @click="afficheBouttonTechCojo(index)">
                              {{formaterDate(appelOffre.date_invitation) || 'Non renseigné'}}</td>
                          <td @click="afficheBouttonTechCojo(index)">
                              {{appelOffre.num_dossier_appel_offre || 'Non renseigné'}}</td>
                          <td @click="afficheBouttonTechCojo(index)">
                              {{appelOffre.nbr_participant || 'Non renseigné'}}</td>

                          <td @click="afficheBouttonTechCojo(index)">
                              {{appelOffre.lettre_invitation.ref_lettre || 'Non renseigné'}}</td>
                          <div class="btn-group">
                              <button @click.prevent="supprimerCojo(appelOffre.id)"  class="btn btn-danger " title="Supprimer">
                                  <span class=""><i class="icon-trash"></i></span></button>

                          </div>

                      </tr>
                      </tbody>
                  </table>
                  <div class="">
                      <div class="span9" >
                         <h4>Liste des membres de la cojo</h4>
                      </div>
                      <div class="span3" align="right">
                          <a href="#ajouter_membre_cojo" data-toggle="modal" class="btn btn-warning" >Ajouter un autre membre </a>
                      </div>
                      <table class="table table-bordered table-striped" v-if="marcheid">
                          <thead>
                          <tr>
                              <th>Matricule</th>
                              <th>Nom et prenom</th>
                              <th>Role</th>
                              <th>Action</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr class="odd gradeX" v-for="appelOffre in listeMembreCojo"
                              :key="appelOffre.id">
                              <td @click="afficheModaleMembreCojo(appelOffre.id)">
                                  {{appelOffre.matricule|| 'Non renseigné'}}
                              </td>
                              <td @click="afficheModaleMembreCojo(appelOffre.id)">
                                  {{appelOffre.nom_prenom || 'Non renseigné'}}</td>
                              <td @click="afficheModaleMembreCojo(appelOffre.id)">
                                  {{appelOffre.role || 'Non renseigné'}}</td>
                              <div class="btn-group">
                                  <button @click.prevent="supprimerMembreCojo(appelOffre.id)"  class="btn btn-danger " title="Supprimer">
                                      <span class=""><i class="icon-trash"></i></span></button>
                              </div>

                          </tr>
                          </tbody>
                      </table>
                  </div>
            </div>


            <div id="tab32" class="tab-pane">

                <div align="right">
                    <div class="widget-content">

                        <a href="#ajouterMP" data-toggle="modal" class="btn btn-warning">Ajouter</a>

                    </div>

                </div>
                <h4>Liste des dossiers analyses</h4>
                <table class="table table-bordered table-striped" v-if="marcheid">
                    <thead>
                    <tr>
                        <th>Numero dossier</th>
                        <th>Dossier candidat </th>
                        <th>Date Analyse </th>
                        <th>Rang d'analyse</th>
                        <th>Note</th>
                        <th>Type d'analyse</th>
                        <th>Controller finnancier</th>
                        <th>Autorite contractante</th>
                        <th>DMP</th>
                        <th>Numero dossier APPEL offre</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="odd gradeX" v-for="(appelOffre, index) in listeAnalyseDossier(marcheid)"
                        :key="appelOffre.id">
                        <td @click="afficheAnnalyseDossier(index)">
                            {{appelOffre.dossier_candidature.numero_dossier || 'Non renseigné'}}</td>
                        <td @click="afficheAnnalyseDossier(index)">
                            {{appelOffre.dossier_candidature.nom_cand || 'Non renseigné'}}</td>
                        <td @click="afficheAnnalyseDossier(index)">
                            {{formaterDate(appelOffre.date_analyse) || 'Non renseigné'}}</td>
                        <td @click="afficheAnnalyseDossier(index)">
                            {{appelOffre.rang_analyse || 'Non renseigné'}}</td>
                            <td @click="afficheAnnalyseDossier(index)">
                            {{appelOffre.note_analyse || 'Non renseigné'}}</td>
                        <td @click="afficheAnnalyseDossier(index)">
                            {{appelOffre.type_analyse.libelle || 'Non renseigné'}}</td>
                        <td @click="afficheAnnalyseDossier(index)">
                            {{appelOffre.cojo.controleur_finnancier || 'Non renseigné'}}</td>
                        <td @click="afficheAnnalyseDossier(index)">
                            {{appelOffre.cojo.autorite_contractante || 'Non renseigné'}}</td>
                        <td @click="afficheAnnalyseDossier(index)">
                            {{appelOffre.cojo.num_dossier_appel_offre || 'Non renseigné'}}</td>
                        <td @click="afficheAnnalyseDossier(index)">
                            {{appelOffre.cojo.dmp || 'Non renseigné'}}</td>
                        <div class="btn-group">
                            <button @click.prevent="supprimerAnalyseDossier(appelOffre.id)"  class="btn btn-danger " title="Supprimer">
                                <span class=""><i class="icon-trash"></i></span></button>

                        </div>

                    </tr>
                    </tbody>
                </table>
              </div>








       <div id="tab33" class="tab-pane">
                <div align="right">
                    <div class="widget-content">

                        <a href="#ajouterDemandeAno" data-toggle="modal" class="btn btn-warning">Ajouter</a>

                    </div>

                </div>
                <h4> Liste des demandes d'ANO</h4>
                <table class="table table-bordered table-striped" v-if="marcheid">
                    <thead>
                    <tr>
                        <th>Numero dossier Candidat</th>
                        <th>Rang Analyse</th>
                        <th>Reference offre </th>
                        <th>Date demande</th>
                        <th>Numero courrier</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>

                    <tr class="odd gradeX" v-for="demande in demandeAno(marcheid)"
                        :key="demande.id" >
                        <td @click="afficheDemandeDAO(demande.id)">
                            {{demande.annalyse_dossier.dossier_candidature.numero_dossier || 'Non renseigné'}}</td>
                        <td @click="afficheDemandeDAO(demande.id)">
                            {{demande.annalyse_dossier.rang_analyse || 'Non renseigné'}}</td>
                        <td @click="afficheDemandeDAO(demande.id)">
                            {{demande.ref_marche || 'Non renseigné'}}</td>
                        <td @click="afficheDemandeDAO(demande.id)">
                            {{formaterDate(demande.date_demande) || 'Non renseigné'}}</td>
                        <td @click="afficheDemandeDAO(demande.id)">
                            {{demande.num_courrier || 'Non renseigné'}}</td>
                       
                        <div class="btn-group">
                            <button @click.prevent="supprimerDemandeAno(demande.id)"  class="btn btn-danger " title="Supprimer">
                                <span class=""><i class="icon-trash"></i></span>
                            </button>
                        </div>


                    </tr>
                    </tbody>
                </table>

              </div>


<!--  debut modal ajout demande ano   -->

            <div id="tab34" class="tab-pane">
                <div align="right">
                    <div class="widget-content">
                        <a href="#ajouterDmp" data-toggle="modal" class="btn btn-warning">Ajouter</a>
                    </div>

                </div>
                <h4>Liste Analyse DMP</h4>
                <table class="table table-bordered table-striped" v-if="marcheid">
                    <thead>
                    <tr>
                        <th>Reference Dmp</th>
                        <th>Numero dossier candidat</th>
                        <th>Date avis</th>
                        <th>Decision </th>
                        <th>Observation</th>
                        <!-- <th>Document procedure</th> -->
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="odd gradeX" v-for="document in listeAnalyseDPM(marcheid)"
                        :key="document.id">

                        <td @click="afficheAnalyseDMP(document.id)">
                            {{document.ref_dmp || 'Non renseigné'}}</td>

                        <td @click="afficheAnalyseDMP(document.id)">
                            {{document.demande_ano.annalyse_dossier.dossier_candidature.numero_dossier || 'Non renseigné'}}</td>
                        <td @click="afficheAnalyseDMP(document.id)">
                            {{formaterDate(document.date_avis_bail) || 'Non renseigné'}}</td>
                        
                        <td @click="afficheAnalyseDMP(document.id)">

                            <button class="btn btn-success btn-mini" v-if="document.avis_bail==1">Non objection</button>
                            <button class="btn btn-danger btn-mini" v-else>Objection</button>
                        </td>

                        <td @click="afficheAnalyseDMP(document.id)">
                            {{document.observation || 'Non renseigné'}}</td>

                        <!-- <td @click="afficheAnalyseDMP(document.id)">
                            {{document.document_procedure.libelle_doc || 'Non renseigné'}}</td> -->
                        <div class="btn-group">
                            <button @click.prevent="supprimerAnalyseDMP(document.id)"  class="btn btn-danger " title="Supprimer">
                                <span class=""><i class="icon-trash"></i></span></button>

                        </div>

                    </tr>
                    </tbody>
                </table>

              </div>


<!--- debut analyse dmp  --->








<!-- fin analyse dmp  -->

<!--- debut analyse dmp   --->

<!--  fin modification analyse dmp ---->







               <div id="tab35" class="tab-pane">
                <div align="right">
                    <div class="widget-content">

                        <a href="#ajouterAnoDMPBAILLEURModal" data-toggle="modal" class="btn btn-warning">Ajouter</a>

                    </div>

                </div>
                
                <h4> Liste avis bailleur</h4>
                <table class="table table-bordered table-striped" v-if="marcheid">
                    <thead>
                    <tr>
                        <!-- <th>Reference offre</th> -->
                        
                        <th>Date </th>
                        <th>Reference offre </th>
                        <th>Avis</th>
                        <th>Numero courrier dmp</th>
                        <th>Observation</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="odd gradeX" v-for="anoBailleur in listeAnoDMPBailleur(marcheid)"
                        :key="anoBailleur.id">
                        <!-- <td @click="afficheAnoDPMBailleurModale(anoBailleur.id)">
                            {{anoBailleur.annalyse_d_m_p.demande_ano.annalyse_dossier.dossier_candidature.numero_dossier || 'Non renseigné'}}</td> -->
                        <td @click="afficheAnoDPMBailleurModale(anoBailleur.id)">
                            {{formaterDate(anoBailleur.date_ano_dmp) || 'Non renseigné'}}</td>
                        <td @click="afficheAnoDPMBailleurModale(anoBailleur.id)">
                            {{anoBailleur.appel_offre.ref_appel || 'Non renseigné'}}</td>


                         <td @click="afficheAnoDPMBailleurModale(anoBailleur.id)">
                            <button class="btn btn-success btn-mini" v-if="anoBailleur.avis_bail== 1">Non objection</button>
                            <button class="btn btn-danger btn-mini" v-else>Objection</button>
                        </td>

                        <td @click="afficheAnoDPMBailleurModale(anoBailleur.id)">
                            {{anoBailleur.numero_courie || 'Non renseigné'}}</td>

                             <td @click="afficheAnoDPMBailleurModale(anoBailleur.id)">
                            {{anoBailleur.observations_bailleur || 'Non renseigné'}}</td>

                        <div class="btn-group">
                            <button @click.prevent="supprimerAnoDMPBailleur(anoBailleur.id)"  class="btn btn-danger " title="Supprimer">
                                <span class=""><i class="icon-trash"></i></span></button>

                        </div>

                    </tr>
                    </tbody>
                </table>

              </div>

annalyse_d_m_p




                <div id="tab36" class="tab-pane">
                <div align="right">
                    <div class="widget-content">

                        <a href="#ajouterObservationBailleur" data-toggle="modal" class="btn btn-warning">Ajouter</a>

                    </div>

                </div>
                <h4> Liste obseravtion bailleur</h4>
                <table class="table table-bordered table-striped" v-if="marcheid">
                    <thead>
                    <tr>

                        <th>Document procedure</th>
                        <!-- <th>ANO DMP bailleur</th> -->
                        <th>Numero dossier candidat</th>
                        <th>Date</th>
                        <th>Avis</th>
                        <th>Observation </th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="odd gradeX" v-for="(observationBailleur,index) in listeObservationBailleurANODMP(marcheid)"
                        :key="observationBailleur.id">

                         <td @click="afficherModalObservationBailleur(index)">
                            {{observationBailleur.document_procedure.libelle_doc || 'Non renseigné'}}</td>

                             <!-- <td @click="afficherModalObservationBailleur(observationBailleur.id)">
                            {{observationBailleur.ano_dmp_bailleur_id || 'Non renseigné'}}</td> -->
                           <td @click="afficherModalObservationBailleur(index)">
                          <!--  {{observationBailleur.ano_dmp_bailleur.annalyse_d_m_p.demande_ano.annalyse_dossier.dossier_candidature.numero_dossier || 'Non renseigné'}}--></td>
                        <td @click="afficherModalObservationBailleur(index)">
                            {{formaterDate(observationBailleur.date_avis_baill) || 'Non renseigné'}}</td>
                        <td @click="afficherModalObservationBailleur(index)">
                            <button class="btn btn-success btn-mini" v-if="observationBailleur.avis_bail==1">Non objection</button>
                            <button class="btn btn-danger btn-mini" v-else>Objection</button>
                        </td>
                        <td @click="afficherModalObservationBailleur(index)">
                            {{observationBailleur.observations_bailleur || 'Non renseigné'}}</td>
                       
                        <div class="btn-group">
                            <button @click.prevent="supprimerObseravtionBailleur(observationBailleur.id)"  class="btn btn-danger " title="Supprimer">
                                <span class=""><i class="icon-trash"></i></span>
                            </button>
                        </div>

                    </tr>
                    </tbody>
                </table>

              </div>

             



<!--- debut modal ajout observation bailleur -->


 <div id="ajouterObservationBailleur" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter obseravtion bailleur</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">


                             <div class="control-group">
                        <label class="control-label">Document Procedure</label>
                        <div class="controls">
                          <select v-model="formObservation.document_procedure_id" class="span">
                                <option v-for="varText in documentProcedures" :key="varText.id"
                                        :value="varText.id">{{varText.libelle_doc}}</option>
                            </select>
                        
                        </div>
                    </div>

                     <div class="control-group">
                        <label class="control-label">ANO DMP bailleur </label>
                        <div class="controls">
                           <select v-model="formObservation.ano_dmp_bailleur_id" class="span">
                                <option v-for="varText in listeAnoDMPBailleur(marcheid)" :key="varText.id"
                                        :value="varText.id">{{varText.annalyse_d_m_p.demande_ano.annalyse_dossier.dossier_candidature.numero_dossier}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Date </label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="formObservation.date_avis_baill"
                                    class="span"
                                    placeholder="Saisir le libelle_type"
                            />
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Avis</label>
                        <div class="controls">
                            <select v-model="formObservation.avis_bail" class="span">
                                <option value="1">Non objection</option>
                                <option value="2">Objection</option>
                            </select>
                                
                            
                        </div>
                    </div>

                    <div class="control-group">
                        <label class="control-label">Observation</label>
                        <div class="controls">
                            <textarea  v-model="formObservation.observations_bailleur"
                                    class="span"
                                    placeholder="Saisir l'observation"
                            ></textarea>
                        </div>
                    </div>

                    

                </form>
            </div>
            <div class="modal-footer">
                <a
                        @click.prevent="ajoutObservationBailleurLocal"
                        class="btn btn-primary"
                        href="#"

                >Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
        </div>
<!-- fin obseravtion bailleur -->



<!--- debut modification observation bailleur  -->

<div id="modifierObservationBailleur" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier obseravtion bailleur</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">
                        <div class="control-group">
                        <label class="control-label">Document Procedure</label>
                        <div class="controls">
                          <select v-model="editObservation1.document_procedure_id" class="span">
                                <option v-for="varText in documentProcedures" :key="varText.id"
                                        :value="varText.id">{{varText.libelle_doc}}</option>
                            </select>
                        
                        </div>
                    </div>
                     <div class="control-group">
                        <label class="control-label">ANO DMP bailleur </label>
                        <div class="controls">
                           <select v-model="editObservation1.ano_dmp_bailleur_id" class="span">
                                <option v-for="varText in listeAnoDMPBailleur(marcheid)" :key="varText.id"
                                        :value="varText.id">{{varText.annalyse_d_m_p.demande_ano.annalyse_dossier.dossier_candidature.numero_dossier}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Date </label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="editObservation1.date_avis_baill"
                                    class="span"
                                    placeholder="Saisir le libelle_type"
                            />
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Avis</label>
                        <div class="controls">
                            <select v-model="editObservation1.avis_bail" class="span">
                                <option value="1">Non objection</option>
                                <option value="2">Objection</option>
                            </select>
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Observation</label>
                        <div class="controls">
                            <textarea  v-model="editObservation1.observations_bailleur"
                                    class="span"
                                    placeholder="Saisir l'observation"
                            ></textarea>
                        </div>
                    </div>

                   

                </form>
            </div>
            <div class="modal-footer">
                <a
                        @click.prevent="modifierObservationBailleurLocal"
                        class="btn btn-primary"
                        href="#"

                >Modifier</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
        </div>

<!---fin modification observation bailleur   -->






            <div id="tab37" class="tab-pane">
                <div align="right">
                    <div class="widget-content">
                        <a href="#ajouterActeEffetFinancier" data-toggle="modal" class="btn btn-warning" v-show="selectionAttributionMarche(marcheid).entrepriseInfo!=''">Ajouter</a>
                    </div>



                </div>
                <h4> Liste acte effet financier </h4>
                <table class="table table-bordered table-striped" v-if="marcheid">
                    <thead>
                    <tr>

                        <th>Reference acte</th>
                        <th>Libelle acte</th>
                        <th>Montant acte</th>
                        <th>Type acte</th>
                        <th>Objet marche.</th>
                        <th>text juridique</th>
                        <th>Imputation</th>
                        <th>Entreprise</th>
                       
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="odd gradeX" v-for=" (effetFinancier, index) in listeActeEffectFinnancier(marcheid)"
                        :key="effetFinancier.id">
                        
                              <td @click="afficherModalModifierActeEffetFinancier(index)">
                            {{effetFinancier.reference_act || 'Non renseigné'}}</td>
                            <td @click="afficherModalModifierActeEffetFinancier(index)">
                            {{effetFinancier.libelle_act || 'Non renseigné'}}</td>
                             <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
                            {{formatageSomme(parseFloat(effetFinancier.montant_act ))|| 'Non renseigné'}}</td>
                              <td @click="afficherModalModifierActeEffetFinancier(index)">
                            {{effetFinancier.id_type_acte_effet_fin || 'Non renseigné'}}</td>
                             <td @click="afficherModalModifierActeEffetFinancier(index)">
                            {{effetFinancier.marche.objet || 'Non renseigné'}}</td>
                             <td @click="afficherModalModifierActeEffetFinancier(index)">
                            {{effetFinancier.text_juridique.libelle_text || 'Non renseigné'}}</td>
                             <td @click="afficherModalModifierActeEffetFinancier(index)">
                            {{effetFinancier.marche.imputation || 'Non renseigné'}}</td>
                              <td @click="afficherModalModifierActeEffetFinancier(index)">
                            {{effetFinancier.varObjetEntreprise.raison_sociale || 'Non renseigné'}}</td>
<td>
      <div class="btn-group">
                            <button @click.prevent="supprimerActeEffetFinancier(effetFinancier.id)"  class="btn btn-danger " title="Supprimer">
                                <span class=""><i class="icon-trash"></i></span>
                            </button>
                        </div>
</td>
                    </tr>
                    </tbody>
                </table>

              </div>



<!-- debut ajout acte effet financier --->



<div id="ajouterActeEffetFinancier" class="modal hide grdirModalActeEffet">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter acte effet financier</h3>
            </div>
            <div class="modal-body">

                    <table class="table table-bordered table-striped">
                        <tr>
                            <td>
                        <div class="control-group">
                        <label class="control-label">Type acte effet financier.</label>
                        <div class="controls">
                          <select v-model="formEffetFinancier.type_act_effet_id" class="span">
                                <option v-for="varText in typeActeEffetFinanciers" :key="varText.id"
                                        :value="varText.id">{{varText.libelle}}</option>
                            </select>
                        
                        </div>
                    </div>
                            </td>
                                    <td>
                     <div class="control-group">
                        <label class="control-label">Entreprise </label>
                        <div class="controls" v-if="selectionAttributionMarche(marcheid).entrepriseInfo!=''">
                            <input
                                    type="text"
                                    v-model="selectionAttributionMarche(marcheid).entrepriseInfo.raison_sociale"
                                    class="span"
                                    placeholder="Saisir le libelle acte "
                                    disabled
                            />
                        </div>
                    </div>
                            </td>

                            <td>


                        <div class="control-group">
                        <label class="control-label">Text juridique </label>
                        <div class="controls">
                           <select v-model="formEffetFinancier.text_juridique_id" class="span">
                                <option v-for="varText in text_juridiques" :key="varText.id"
                                        :value="varText.id">{{varText.libelle_text}}</option>
                            </select>
                        </div>
                    </div>
                            </td>

                              <td>
                        <div class="control-group">
                        <label class="control-label">Ano bailleur dmp.</label>
                        <div class="controls">
                          <select v-model="formEffetFinancier.ano_bailleur_id" class="span">
                                <option v-for="varText in getterAnoDMPBailleur" :key="varText.id"
                                        :value="varText.id">{{varText.ref_ano_dmp}}</option>
                            </select>
                        
                        </div>
                    </div>
                            </td>
                           
                       
                           </tr>
                        <tr>
                   
                            <td>
                    <div class="control-group">
                        <label class="control-label">Numero du marche</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="formEffetFinancier.numero_marche"
                                    class="span"
                                    placeholder="Saisir le libelle acte "
                            />
                        </div>
                    </div>

                            </td>
                        
                   
                            <td>

                    <div class="control-group">
                        <label class="control-label">Code acte </label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="formEffetFinancier.code_act"
                                    class="span"
                                    placeholder="Saisir le code acte"
                            />
                        </div>
                    </div>
                            </td>
                            <td colspan="2">
                    <div class="control-group">
                        <label class="control-label">Libelle acte</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="formEffetFinancier.libelle_act"
                                    class="span"
                                    placeholder="Saisir le libelle acte "
                            />
                        </div>
                    </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                    <div class="control-group">
                        <label class="control-label">Reference acte</label>
                        <div class="controls">
                            <input type="text" v-model="formEffetFinancier.reference_act"
                                    class="span"
                                    placeholder="refence acte"
                            />
                        </div>
                    </div>
                            </td>
                            <td>
                     <div class="control-group">
                        <label class="control-label">Incidence financiere</label>
                        <div class="controls">
                            <input type="text" v-model="formEffetFinancier.incidence_financiere"
                                    class="span"
                                    placeholder="incidence"
                            />
                        </div>
                    </div>
                            </td>
                            <td>

                     <div class="control-group">
                        <label class="control-label">Montant acte</label>
                        <div class="controls">
                            <input type="text" v-model="formEffetFinancier.montant_act"
                                    class="span"
                                    placeholder="refence acte"
                            />
                        </div>
                    </div>
                            </td>
                        </tr>
                        <tr>

                            <td>
                     <div class="control-group">
                        <label class="control-label" title="date de signature attributaire">Date SA</label>
                        <div class="controls">
                            <input type="date" v-model="formEffetFinancier.date_attributaire"
                                    class="span"
                                    placeholder=""
                            />
                        </div>
                    </div>
                            </td>


                                    <td>
                     <div class="control-group">
                        <label class="control-label" title="date ordre de service ">Date OS</label>
                        <div class="controls">
                            <input type="date" v-model="formEffetFinancier.date_odre_service"
                                    class="span"
                                    placeholder=""
                            />
                        </div>
                    </div>
                            </td>


                                         <td>
                     <div class="control-group">
                        <label class="control-label" title=" ">Date fin execution</label>
                        <div class="controls">
                            <input type="date" v-model="formEffetFinancier.date_fin_exe"
                                    class="span"
                                    placeholder=""
                            />
                        </div>
                    </div>
                            </td>
                        </tr>
                        <tr>

                                            <td>
                     <div class="control-group">
                        <label class="control-label" title=" ">Durée d'execution(jrs)</label>
                        <div class="controls">
                            <input type="date" v-model="formEffetFinancier.duree"
                                    class="span"
                                    placeholder=""
                            />
                        </div>
                    </div>
                            </td>


                                             <td>
                     <div class="control-group">
                        <label class="control-label" title=" ">Date de reception</label>
                        <div class="controls">
                            <input type="date" v-model="formEffetFinancier.date_reception"
                                    class="span"
                                    placeholder=""
                            />
                        </div>
                    </div>
                            </td>
                        </tr>

                    </table>  

                   

                
            </div>
            <div class="modal-footer">
                <a
                        @click.prevent="ajouterModalActeEffetFinancierLocal(selectionAttributionMarche(marcheid).entrepriseInfo.id)"
                        class="btn btn-primary"
                        href="#"

                >Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
        </div>
<!--- fin ajout acte effet financier  -->








<!-- debut modifier acte effet financier --->



<div id="modifierActeEF" class="modal hide grdirModalActeEffet">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier acte effet financier</h3>
            </div>
            <div class="modal-body">

                    <table class="table table-bordered table-striped">
                        <tr>
                            <td>
                        <div class="control-group">
                        <label class="control-label">Type acte effet financier.</label>
                        <div class="controls">
                          <select v-model="editActeEffetFinancier.type_act_effet_id" class="span">
                                <option v-for="varText in typeActeEffetFinanciers" :key="varText.id"
                                        :value="varText.id">{{varText.libelle}}</option>
                            </select>
                        
                        </div>
                    </div>
                            </td>
                                    <td>
                     <div class="control-group">
                        <label class="control-label">Entreprise </label>
                        <div class="controls" v-if="selectionAttributionMarche(marcheid).entrepriseInfo!=''">
                            <input
                                    type="text"
                                    v-model="selectionAttributionMarche(marcheid).entrepriseInfo.raison_sociale"
                                    class="span"
                                    placeholder="Saisir le libelle acte "
                                    disabled
                            />
                        </div>
                    </div>
                            </td>

                            <td>


                        <div class="control-group">
                        <label class="control-label">Text juridique </label>
                        <div class="controls">
                           <select v-model="editActeEffetFinancier.text_juridique_id" class="span">
                                <option v-for="varText in text_juridiques" :key="varText.id"
                                        :value="varText.id">{{varText.libelle_text}}</option>
                            </select>
                        </div>
                    </div>
                            </td>

                              <!-- <td>
                        <div class="control-group">
                        <label class="control-label">Ano bailleur dmp.</label>
                        <div class="controls">
                          <select v-model="editActeEffetFinancier.ano_bailleur_id" class="span">
                                <option v-for="varText in getterAnoDMPBailleur" :key="varText.id"
                                        :value="varText.id">{{varText.ref_ano_dmp}}</option>
                            </select>
                        
                        </div>
                    </div>
                            </td> -->
                           
                       
                           </tr>
                        <tr>
                   
                            <td>
                    <div class="control-group">
                        <label class="control-label">Numero du marche</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="editActeEffetFinancier.numero_marche"
                                    class="span"
                                    placeholder="Saisir le libelle acte "
                            />
                        </div>
                    </div>

                            </td>
                        
                   
                            <td>

                    <div class="control-group">
                        <label class="control-label">Code acte </label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="editActeEffetFinancier.code_act"
                                    class="span"
                                    placeholder="Saisir le code acte"
                            />
                        </div>
                    </div>
                            </td>
                            <td colspan="2">
                    <div class="control-group">
                        <label class="control-label">Libelle acte</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="editActeEffetFinancier.libelle_act"
                                    class="span"
                                    placeholder="Saisir le libelle acte "
                            />
                        </div>
                    </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                    <div class="control-group">
                        <label class="control-label">Reference acte</label>
                        <div class="controls">
                            <input type="text" v-model="editActeEffetFinancier.reference_act"
                                    class="span"
                                    placeholder="refence acte"
                            />
                        </div>
                    </div>
                            </td>
                            <td>
                     <div class="control-group">
                        <label class="control-label">Incidence financiere</label>
                        <div class="controls">
                            <input type="text" v-model="editActeEffetFinancier.incidence_financiere"
                                    class="span"
                                    placeholder="incidence"
                            />
                        </div>
                    </div>
                            </td>
                            <td>

                     <div class="control-group">
                        <label class="control-label">Montant acte</label>
                        <div class="controls">
                            <input type="text" v-model="editActeEffetFinancier.montant_act"
                                    class="span"
                                    placeholder="refence acte"
                            />
                        </div>
                    </div>
                            </td>
                            <td>
                     <div class="control-group">
                        <label class="control-label">Type</label>
                        <div class="controls">
                            <input type="text" v-model="editActeEffetFinancier.type_doc_modifie"
                                    class="span"
                                    placeholder="refence acte"
                            />
                        </div>
                    </div>
                            </td>
                        </tr>

                    </table>

                   

                
            </div>
             <div class="modal-footer">
                <a
                        @click.prevent="modifierModalActeEffetFinancierLocal"
                        class="btn btn-primary"
                        href="#"

                >Modifier</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
        </div>

<!--- fin modifier acte effet financier  -->








<!--modification ano  -->


 <div id="ajouterAnoDMP" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier ano dmp</h3>
      </div>
      <div class="modal-body">
       <form class="form-horizontal">
          <div class="control-group">
            <label class="control-label">Date ano</label>
            <div class="controls">
              <input
                type="date"
                v-model="editAno.date_ano_dmp"
                class="span"
                placeholder=""
              />
            </div>
          </div>
            <div class="control-group">
            <label class="control-label">reference ano dmp</label>
            <div class="controls">
              <input
                type="text"
                v-model="editAno.ref_ano_dmp"
                class="span"
                placeholder="Saisir le ref ano dmp"
              />
            </div>
          </div>
         
           <div class="control-group">
            <label class="control-label">Numero courrier</label>
            <div class="controls">
              <input
                type="text"
                v-model="editAno.numero_courie"
                class="span"
                placeholder="Saisir le numero du courrier"
              />
            </div>
          </div>
         </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ModifierAnoDmpLocal"
          class="btn btn-primary"
          href="#"
         
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>

<!--  fin modification ano --->


          </div>
        </div>



                            </ul>
                      
                             




                            </div>


                      <!-- debut item de facture  --->

                               <div id="tab4" class="tab-pane">
                                <div class="widget-box">
                                    <div class="widget-title">
                                   <span class="icon">
                                   <i class="icon-th"></i>
                                      </span>
                                        <h5>Liste des factures</h5>
                                        <div align="right">
                                            Search:
                                            <input type="search" placeholder 
                                            v-model="search" />
                                        </div>
                                    </div>
                                    <div class="widget-content nopadding">
                                        <div class="span4"></div>
                                        <div class="span4"></div>
                                        <div class="span4" align="right">
                                            <a href="#exampleModal" data-toggle="modal"
                                         class="btn btn-info">Ajouter facture</a></div>
                                <table class="table table-bordered table-striped" 
                                v-if="marcheid">
                                     <thead>
                                   <tr>
            
                              <th>acte_depense</th> 
                                 <th>type_facture</th>
                                <th>numero_facture</th>
                             <th>objet_facture</th>
                           <th>montant_facture</th>
                           <th>ligne_budgetaire</th>
                            <th>prix_unitaire</th>
                                <th>prix_propose_ht</th>
                           <th>prix_propose_ttc</th>

                             <th>Action</th>
                                     </tr>
                                    </thead>
                                        <tbody>

                                        <tr class="odd gradeX" v-for="(facture_joint, index) in factures"
                                                :key="facture_joint.id">
                                                <td @dblclick="afficherModalmodifierfacture(index)">
                                                    {{facture_joint.numero_facture || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalmodifierfacture(index)">
                                                    {{facture_joint.code_acte_depense || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalmodifierfacture(index)">
                                                    {{facture_joint.id_type_facture || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalmodifierfacture(index)">
                                                    {{facture_joint.objet_facture || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalmodifierfacture(index)">
                                                    {{facture_joint.ligne_budgetaire || 'Non renseigné'}}
                                                </td>
                                                <td @dblclick="afficherModalmodifierfacture(index)">
                                                    {{facture_joint.montant_facture || 'Non renseigné'}}
                                                </td>
                                                <td @dblclick="afficherModalmodifierfacture(index)">
                                                    {{facture_joint.prix_unitaire || 'Non renseigné'}}
                                                </td>
                                                <td @dblclick="afficherModalmodifierfacture(index)">
                                                    {{facture_joint.prix_propose_ht || 'Non renseigné'}}
                                                </td>
                                                <td @dblclick="afficherModalmodifierfacture(index)">
                                                    {{facture_joint.prix_propose_ttc || 'Non renseigné'}}
                                                </td>

                                                <div class="btn-group">
                                                    <button @click.prevent="supprimerFacture(facture_joint.id)"  class="btn btn-danger ">
                                                        <span class=""><i class="icon-trash"></i></span></button>

                                                </div>

                                            </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            </div>

                      <!---  fin item de facture -->

                      <!-- debut form de facture  -->
                      <div id="exampleModal" class="modal hide taillemodal">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Facture</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
              <td>
              <div class="control-group">
                <label class="control-label">numero_facture</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formDataFacture.numero_facture"
                    class="span"
                    
                  />
                </div>
              </div>
               </td>
            <!-- <td>
              
              <div class="control-group">
                <label class="control-label">acte_depense</label>
                <div class="controls">
                  <select v-model="formDataFacture.code_acte_depense" >
                     <select v-model="formDataFacture.id_type_facture" class="span">
                 <option v-for="fature in typeFactures" :key="fature.id"
                      :value="fature.id">{{fature.libelle}}</option>
                            </select>
                  </select>
                </div>
              </div>
            </td> -->
            <td>
              
              <div class="control-group">
                <label class="control-label">type facture</label>
                <div class="controls">
                  
                    <select v-model="formDataFacture.id_type_facture" class="span">
                 <option v-for="fature in typeFactures" :key="fature.id"
                      :value="fature.id">{{fature.libelle}}</option>
                            </select>
                 
                </div>
              </div>
            </td>
            

           
          </tr>
          <tr>
             <td>
              <div class="control-group">
                <label class="control-label">objet_facture</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formDataFacture.objet_facture"
                    class="span"
                    
                  />
                </div>
              </div>
               </td>
              <td>
              
              <div class="control-group">
                <label class="control-label">ligne_budgetaire</label>
                <div class="controls">
                   <input
                type="text"
                
                class="span5"
                placeholder="Saisir le Imputation"
                readonly
              />
              </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">montant_facture</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formDataFacture.montant_facture"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
            
            

          </tr>
          <tr>
               <td>
              <div class="control-group">
                <label class="control-label">prix_unitaire</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formDataFacture.prix_unitaire"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">prix_propose_ht</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formDataFacture.prix_propose_ht"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">prix_propose_ttc</label>
                <div class="controls">
                  <input
                    type="text"
                    v-model="formDataFacture.prix_propose_ttc"
                   
                    class="span"
                   
                  />
                </div>
              </div>
             
            </td>
            
            
           
                 
          </tr>
         
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterStockLocal"
          class="btn btn-primary"
          href="#"
           
        >Valider</a> 
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>

                      <!-- fin form de facture  -->


                      <!-- debut form modification facture -->

                       <div id="modififacture" class="modal hide taillemodal">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier Facture</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
         <tr>
              <td>
              <div class="control-group">
                <label class="control-label">numero_facture</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="editFacture.numero_facture"
                    class="span"
                    
                  />
                </div>
              </div>
               </td>
            <!-- <td>
              
              <div class="control-group">
                <label class="control-label">acte_depense</label>
                <div class="controls">
                  <select v-model="editFacture.code_acte_depense" >
                    <option value>Sélectionner</option>
                    <option></option>
                  </select>
                </div>
              </div>
            </td> -->
            <td>
              
              <div class="control-group">
                <label class="control-label">type facture</label>
                <div class="controls">
                  <select v-model="editFacture.id_type_facture" >
                    <option value>Sélectionner</option>
                    <option></option>
                  </select>
                </div>
              </div>
            </td>
            

           
          </tr>
          <tr>
             <td>
              <div class="control-group">
                <label class="control-label">objet_facture</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="editFacture.objet_facture"
                    class="span"
                    
                  />
                </div>
              </div>
               </td>
              <td>
              
              <div class="control-group">
                <label class="control-label">ligne_budgetaire</label>
                <div class="controls">
                  <select v-model="editFacture.ligne_budgetaire" >
                    <option value>Sélectionner</option>
                    <option></option>
                  </select>
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">montant_facture</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="editFacture.montant_facture"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
            
            

          </tr>
          <tr>
               <td>
              <div class="control-group">
                <label class="control-label">prix_unitaire</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="editFacture.prix_unitaire"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">prix_propose_ht</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="editFacture.prix_propose_ht"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">prix_propose_ttc</label>
                <div class="controls">
                  <input
                    type="text"
                    v-model="editFacture.prix_propose_ttc"
                   
                    class="span"
                   
                  />
                </div>
              </div>
             
            </td>
            
            
           
                 
          </tr>
        </table>
      </div>
      <div class="modal-footer">
        <a class="btn btn-primary" @click.prevent="modifierFactureLocal(editFacture)">Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>


                      <!---fin form modification facture --->


                        </div>
                        <div class="modal-footer">
        
        <a data-dismiss="modal" class="btn btn-danger" @click.prevent="retourListeEntreprise" href="#">Voir Tableau Marché</a>
       
      </div>
  
                    </div>

                </div>
            </div>
        </div>

<!-- Ajouter appel offres --->
        <div id="myAlert" class="modal hide tlg" aria-hidden="true" style="display: none;">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter  offre</h3>
            </div>
            
            <div class="modal-body">
                <div class="widget-box">
                    <form action="#" method="get">
                        <table class="table table-bordered table-striped" >
                            <tr>
                            <td>
                        <div class="control-group">
                            <label class="control-label">Type de procedure <code>*</code> :</label>
                            <div class="controls">
                                <input type="text" class="span" placeholder="Type appel" v-model="formData.type_appel" disabled>
                            </div>
                        </div>
                            </td>

                            <td colspan="2" width="250">
                        <div class="control-group">
                            <label class="control-label">Reference  offre <code>*</code> :</label>
                            <div class="controls">
                                <input type="text" class="span5" placeholder="Reference d'appel" v-model="formData.ref_appel">
                            </div>
                        </div>
                            </td>
                            </tr>

                            <tr>
                            <td colspan="3" width="">
                        <div class="control-group">
                            <label class="control-label">Objet  offre :</label>
                            <div class="controls">
                                 <textarea  v-model="formData.objet_appel"  class="textarea_editor span8" rows="3" placeholder="Entre le  text ..."></textarea>
                    
                            </div>
                        </div>
                            </td>
                            </tr>

                            <tr>
                                <td>
                        <div class="control-group">
                            <div class="controls">
                                <label>Date emission <code>*</code></label>
                                <input type="date" class="span" placeholder="Date emision" v-model="formData.date_emission">
                            </div>
                        </div>
                                </td>
                                <td>

                        <div class="control-group">
                            <div class="controls">
                                <label>Date limite <code>*</code></label>
                                <input type="date" class="span" placeholder="Date limite" v-model="formData.date_limite" :min="formData.date_emission">
                            </div>
                        </div>
                        </td>
                        <td >

                        <div class="control-group">
                            <label class="control-label">Imputation :</label>
                            <div class="controls">
                                <input type="text" class="span" placeholder="Imputation" v-model="formData.imputation" disabled>
                            </div>
                        </div>
                        </td>
                        </tr>
                        </table>
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
                 <table class="table table-bordered table-striped" > 

                    <tr>

                       <td>
                        <div class="control-group">
                            <label class="control-label">Type de procedure  :</label>
                            <div class="controls">
                                <input type="text" class="span" placeholder="" v-model="edite_appel_offre.type_appel">
                            </div>
                        </div>
                            </td>

                                <td colspan="2" width="250">
                        <div class="control-group">
                            <label class="control-label">Reference  offre  :</label>
                            <div class="controls">
                                <input type="text" class="span5" placeholder="Reference d'appel" v-model="edite_appel_offre.ref_appel">
                            </div>
                        </div>
                            </td>
                    </tr>


                                   <tr>
                            <td colspan="3" width="">
                        <div class="control-group">
                            <label class="control-label">Objet  offre :</label>
                            <div class="controls">
                                 <textarea   v-model="edite_appel_offre.objet_appel"  class="textarea_editor span7" rows="3" placeholder="Entre le  text ..."></textarea>
                    
                            </div>
                        </div>
                            </td>
                            </tr>

                            <tr>
                             <td>
                        <div class="control-group">
                            <div class="controls">
                                <label>Date emission </label>
                                <input type="date" class="span" placeholder="Date emision" v-model="edite_appel_offre.date_emission">
                            </div>
                        </div>
                                </td>

                                 <td colspan="2">

                        <div class="control-group">
                            <div class="controls">
                                <label>Date limite </label>
                                <input type="date" class="span3" placeholder="Date limite" v-model="edite_appel_offre.date_limite">
                            </div>
                        </div>
                        </td>
                            </tr>
                            <tr>



         <td>
              
                        <div class="control-group">
                             <label>Financement</label>
                            <div class="controls">
                                <input type="text" class="span" placeholder="Financement" v-model="edite_appel_offre.financement">
                            </div>
                        </div>
         </td>
         <td>
                        <div class="control-group">
                          <label>Nom bailleur</label>
                            <div class="controls">
                                <input type="text" class="span" placeholder="Nom bailleurs" v-model="edite_appel_offre.nom_bailleurs">
                            </div>
                        </div>
         </td>
         
         <td>
                        
                        <div class="control-group">
                            <label>Imputation</label>
                            <div class="controls">
                                <input type="text" class="span" placeholder="Imputation" v-model="edite_appel_offre.imputation">
                            </div>
                        </div>
         </td>
                            </tr>
                 </table>
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
        <div id="addLot" class="modal hide" aria-hidden="true" style="display: none;">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter lot </h3>
            </div>
            <div class="modal-body">
                <div class="widget-box">
                    <form action="#" method="get" v-if="marcheid">

                 <table class="table table-bordered table-striped"> 
                     <tr>
                         <td>
                        <div class="control-group">
                        <label>Offre</label>
                        <div class="controls">
                            <select v-model="formLot.appel_offre_id" class="span" disabled>
                                <option v-for="varText in listeAppelOffre(marcheid)" :key="varText.id"
                                        :value="varText.id">{{varText.ref_appel}}</option>
                            </select>
                        </div>
                        </div>
                         </td>

                         <td>

                         <div class="control-group">
            
                            <label class="control-label">Numero lot <code>*</code> :</label>
                           <div class="control-group">
                       <input type="text" class="span" placeholder="Numero lo" v-model="formLot.numero_lot">
                            </div>
                        </div>

                             <!-- <div class="control-group">
                         <label>Mode de passation <code>*</code> </label>
                        <div class="controls">

                            <select v-model="formLot.mode_passation_id" class="span">
                                <option v-for="varText in modePassations" :key="varText.id"
                                        :value="varText.id">{{varText.libelle}}</option>
                            </select>
                        </div>
                             </div> -->
                         </td>
                     </tr>
                     <tr>
                         
                         <td colspan="2">

                        <div class="control-group">

                            <label class="control-label">Libellé lot <code>*</code> :</label>

                            <div class="controls">
                                <input type="text" class="span5" row="2" placeholder="Libellé lot"  v-model="formLot.libelle_lot">
                            </div>
                        </div>
                         </td>
                     </tr>
                     <tr>
                         <td colspan="3">
                        <div class="control-group">

                        
                            <label class="control-label">Montant lot <code>*</code> :</label>

                            <div class="controls">
                                <input type="text" class="span5" placeholder="Montant lot" v-model="formLot.montant_lot">
                            </div>
                        </div>
                         </td>
                     </tr>
                 </table>

                        
                       

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

                     <table class="table table-bordered table-striped"> 

                         <tr>
                         

                       <td>
                        <div class="control-group">
                        <label>Offre</label>
                        <div class="controls">
                            <select v-model="edite_lot.appel_offre_id" class="span" disabled>
                                <option v-for="varText in listeAppelOffre(marcheid)" :key="varText.id"
                                        :value="varText.id">{{varText.ref_appel}}</option>
                            </select>
                        </div>
                        </div>
                         </td>



                            <td>
                        <div class="control-group">
                            <label class="control-label">Numero lot :</label>
                            <div class="controls">
                                <input type="text" class="span5" placeholder="Numero lo" v-model="edite_lot.numero_lot">
                            </div>
                        </div>
                            </td>
                         </tr>
                         <tr>
                             <td colspan="2">
                        <div class="control-group">
                            <label class="control-label">Libellé lot :</label>
                            <div class="controls">
                                <input type="text" class="span5" placeholder="Libellé lot" v-model="edite_lot.libelle_lot">
                            </div>
                        </div>
                             </td>
                         </tr>
                         <tr>
                             <td colspan="3">
                        <div class="control-group">
                            <label class="control-label">Montant lot :</label>
                            <div class="controls">
                                <input type="text" class="span5" placeholder="Montant lot" v-model="edite_lot.montant_lot">
                            </div>
                        </div>
                             </td>
                         </tr>
                     </table>
                        
                        <!-- <label>Mode de passation</label>
                        <div class="controls">
                            <select v-model="edite_lot.mode_passation_id" class="span">
                                <option v-for="varText in modePassations" :key="varText.id"
                                        :value="varText.id">{{varText.libelle}}</option>
                            </select>
                        </div> -->

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
        <div id="offreT" class="modal hide tailleModalOffre2">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter l'offre technique</h3>
            </div>
            <div class="modal-body">
                <div class="widget-box">
                    <table class="table table-bordered table-striped">
                        <tr>
                            <td>
 <div class="control-group">
                            <label>Liste lot</label>
                            <div class="controls">
                                <select v-model="formOffreTechnique.numero_lot" class="span">
                                    <option v-for="varText in listeLots(marcheid)" :key="varText.numero_lot"
                                            :value="varText.id">{{varText.numero_lot}}-{{varText.libelle_lot}}</option>
                                </select>
                            </div>
                        </div>
                            </td>
                            <td>
                                  <div class="control-group">
                            <label class="control-label">Accord groupe :</label>
                            <div class="controls">
                                <input type="text" class="span" placeholder="Accord groupe" v-model="formOffreTechnique.accord_groupe">
                            </div>
                        </div>
                            </td>
                            <td>
                                 <div class="control-group">
                            <label class="control-label">Cautionnement prov :</label>
                            <div class="controls">
                                <input type="text" class="span" placeholder="Cautionnement prov" v-model="formOffreTechnique.cautionnement_prov">
                            </div>
                        </div>
                            </td>
                            <td>
                                 <div class="control-group">
                            <label class="control-label">Attest banc:</label>
                            <div class="controls">
                                <input type="text" class="span" placeholder="Pouv habil" v-model="formOffreTechnique.attest_banc">
                            </div>
                        </div>
                            </td>
                            <td>
                                  <div class="control-group">
                            <label class="control-label">Formil propo tech :</label>
                            <div class="controls">
                                <input type="text" class="span" placeholder="Piece Admin" v-model="formOffreTechnique.formil_propo_tech">
                            </div>
                        </div>
                            </td>
                            <td>
                                
                            </td>
                        </tr>
                             <tr>
                            <td>
<div class="control-group">
                            <label class="control-label">Fiche rsgnt nombre groupe :</label>
                            <div class="controls">
                                <input type="text" class="span" placeholder="Attest banc" v-model="formOffreTechnique.fiche_rsgnt_mbre_groupe">
                            </div>
                        </div>
                            </td>
                            <td>
                                 
                        <div class="control-group">
                            <label class="control-label">Atcdent marche non exe :</label>
                            <div class="controls">
                                <input type="text" class="span" placeholder="Org travau" v-model="formOffreTechnique.atcdent_marche_non_exe">
                            </div>
                        </div>
                            </td>
                            <td>
                                <div class="control-group">
                            <label class="control-label">Org travau site :</label>
                            <div class="controls">
                                <input type="text" class="span" placeholder="Meth real travau" v-model="formOffreTechnique.org_travau_site">
                            </div>
                        </div>
                            </td>
                            <td>
                                 <div class="control-group">
                            <label class="control-label">Meth real travau:</label>
                            <div class="controls">
                                <input type="text" class="span" placeholder="Prog mobilisation" v-model="formOffreTechnique.meth_real_travau">
                            </div>
                        </div>
                            </td>
                            <td>
                               <div class="control-group">
                            <label class="control-label">Prog mobilisation :</label>
                            <div class="controls">
                                <input type="text" class="span" placeholder="Prog mobilisation" v-model="formOffreTechnique.prog_mobilisation">
                            </div>
                        </div> 
                            </td>
                           
                        </tr>
                        <tr>
                             <td>
                                <div class="control-group">
                            <label class="control-label">Capacite financiere :</label>
                            <div class="controls">
                                <input type="text" class="span" placeholder="Capacite financiere" v-model="formOffreTechnique.capacite_financiere">
                            </div>
                        </div>
                            </td>
                            <td>
                                 <div class="control-group">
                            <label class="control-label">CAA moyen ac entre :</label>
                            <div class="controls">
                                <input type="text" class="span" placeholder="Caa moyen ac" v-model="formOffreTechnique.caa_moyen_ac_entre">
                            </div>
                        </div>
                            </td>
                            <td>
                                <div class="control-group">
                            <label class="control-label">Capacite techn expe :</label>
                            <div class="controls">
                                <input type="text" class="span" placeholder="Capacite techn exp" v-model="formOffreTechnique.capacite_techn_exp">
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
        <div id="offreF" class="modal hide modaloffreFin">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter l'offre financière</h3>
            </div>
            <div class="modal-body">
                   <table class="table table-bordered table-striped">
         
            <tr>
              <td>
                <div class="control-group">
              
                  <label>Liste lot</label>
                                <div class="controls">
                                    <select v-model="formOffreFinanciere.numero_lot" class="span">
                                        <option v-for="varText in listeLots(marcheid)" :key="varText.numero_lot"
                                                :value="varText.id">{{varText.numero_lot}}</option>
                                    </select>
                                </div>
                </div>
              </td>
              <td colspan="2">
                <div class="control-group">
                    <label class="control-label">Designation :</label>
                            <div class="controls">
                                <input type="text"  readonly   class="span6" placeholder="Designation" :value="libelleLot">
                            </div>
                </div>
              </td>
               
            </tr>
            <tr>
                <td>
              
              <div class="control-group">
                            <label class="control-label">Quantite :</label>
                            <div class="controls">
                                <input type="number" class="span" placeholder="quantite" v-model="formOffreFinanciere.quantite">
                            </div>
                        </div>
              
              </td>
              <td>
              
                <div class="control-group">
                            <label class="control-label">Prix unitaire :</label>
                            <div class="controls">
                                <input type="number" class="span" placeholder="prix unitaire" v-model="formOffreFinanciere.prix_unitaire">
                            </div>
                        </div>
              </td>
              <td>
                  <div class="control-group">
                            <label class="control-label">Taux</label>
                            <div class="controls">
                                <input type="text" readonly  class="span" :value="affcherTauxEnCours">
                                 <input
                    type="hidden"
                    :value="tauxArrondit"
                   
                    class="span3"
                   
                  />
                            </div>
                        </div>
              </td>
              
              
            </tr>
            <tr>
              <td>
                  <div class="control-group">
                  <label class="control-label">Tva</label>
                  <div class="controls">
                    <input type="number" readonly :value="montantTva" class="span" />
                  </div>
                </div>
              </td>
              <td>
                <div class="control-group">
                            <label class="control-label">Montant total ht :</label>
                            <div class="controls">
                                <input type="text"   readonly  class="span" placeholder="Montant total HT" :value="montantHT">
                            </div>
                        </div>
              </td>
              <td>
                <div class="control-group">
                            <label class="control-label">Montant totat ttc :</label>
                            <div class="controls">
                                <input type="text"  readonly  class="span" placeholder="Montant total ttc" :value="montantHTt">
                            </div>
                        </div>
              </td>
              
            </tr>
          
        </table>
                
            </div>
            <div class="modal-footer">
                <button @click.prevent="ajouterOffreF()" class="btn btn-primary">Ajouer</button>
                <!--<a data-dismiss="modal" class="btn btn-primary" href="#" @click.prevent="ajouterOffreF()"> Ajouter</a>-->
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
                        <label class="control-label">Offre</label>
                        <div class="controls">
                            <select v-model="formLettre.appel_offre_id" class="span" disabled>
                                <option v-for="plans in listeAppelOffre(marcheid)" :key="plans.id"
                                        :value="plans.id">{{plans.ref_appel}}</option>
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
                        <label class="control-label">Destinataire</label>
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
          <label class="control-label">Objet de lettre:</label>
            <div class="controls">
              <textarea  v-model="formLettre.objet_lettre"  class=" span" rows="" placeholder="Enter text ..."></textarea>
            </div>
          
        </div>




                     <!-- <div class="control-group">
                        <label class="control-label">Objet </label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="formLettre.objet_lettre"
                                    class="span"
                                    placeholder="Saisir "
                            />
                        </div>
                    </div> -->


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

                   <div class="control-group">
                   <label class="control-label">Fichier joint:</label>
                    <div class="controls">
                     <input type="file" id="file"  @change="onFichierChange" />
              </div>
            </div>
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
                        <label class="control-label">Offre</label>
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
                        <label class="control-label">Destination</label>
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

                    <!--
                    54ABN5
                    AMP45
                    54ABN5
                    AR458
                    -->
                    <div class="control-group">
                        <label class="control-label">Matricule</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="formMandater.matricule_m"
                                    class="span"
                                    placeholder="Matricule" v-on:keyup="rechercheMandater()"
                            />
                            <code v-if="message_mandater">{{message_mandater}}</code>
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Nom</label>
                        <div class="controls">
                            <input type="text"
                                    v-model="formMandater.nom_mandat"
                                    class="span"
                                    placeholder="Nom mandater"
                            />
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Prenom</label>
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

                     <div class="control-group">
                   <label class="control-label">Fichier joint:</label>
                    <div class="controls">
                     <input type="file" id="file"  @change="onFichierChange" />
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
                        <label class="control-label">Matricule :</label>
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
                        <label class="control-label">Nom mandater :</label>
                        <div class="controls">
                            <input type="text"
                                   v-model="editer_mandater.nom_mandat"
                                   class="span"
                                   placeholder="Nom mandater"
                            />
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Prenom :</label>
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

        <!--Mandater-->
        <div id="ajouterCojo" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter Cojo</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">
                    <div class="control-group">
                        <label class="control-label">Numero dossier APPEL OFFRE</label>
                        <div class="controls">
                            <input disabled
                                   type="text"
                                   v-model="formDataCojo.num_dossier_appel_offre"
                                   class="span"
                            />
                        </div>
                    </div>

                    <div class="control-group">
                        <label class="control-label">Lettre Invitation</label>
                        <div class="controls">
                            <select v-model="formDataCojo.lettre_invitation_id" class="span" disabled>
                                <option v-for="plans in lettreInvitationAMarche(marcheid)" :key="plans.id"
                                        :value="plans.id">{{plans.ref_lettre}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="control-group">
                        <label class="control-label">Date invitation</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="formDataCojo.date_invitation"
                                    class="span"
                                       disabled
                            />
                        </div>
                    </div>
                    <div class="control-group">
                          <label class="control-label">Controleur finnancier</label>
                        <div class="controls">
                            <input disabled
                                    type="text"
                                    v-model="formDataCojo.controleur_finnancier"
                                    class="span"
                                    placeholder="Controller Finnancier"
                            />
                        </div>
                    </div>
                   <!-- <div class="control-group">
                        <label class="control-label">Condition</label>
                        <div class="controls">
                            <select v-model="formDataCojo.condition_id" class="span">
                                <option v-for="plans in conditions" :key="plans.id"
                                        :value="plans.id">{{plans.libelle}}</option>
                            </select>
                        </div>
                    </div>-->


                    <div class="control-group">
                        <label class="control-label">Date composition</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="formDataCojo.date_composition"
                                    class="span"
                 :min="formDataCojo.date_invitation"
                            />
                        </div>
                    </div>




                    <div class="control-group">
                        <label class="control-label">NBR participant</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="formDataCojo.nbr_participant"
                                    class="span"
                            />
                        </div>
                    </div>


                </form>
            </div>
            <div class="modal-footer">
                <a data-dismiss="modal" class="btn btn-primary" @click.prevent="ajouterCojoMarche()" href="#">Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Cancel</a> </div>
        </div>

        <div id="modificationCojo" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modification de cojo</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">


                    <div class="control-group">
                        <label class="control-label">Numero dossier APPEL OFFRE</label>
                        <div class="controls">
                            <input disabled
                                    type="text"
                                    v-model="edite_cojo.num_dossier_appel_offre"
                                    class="span"
                            />
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Lettre Invitation</label>
                        <div class="controls">
                            <select v-model="edite_cojo.lettre_invitation_id" class="span" disabled>
                                <option v-for="plans in lettreInvitationAMarche(marcheid)" :key="plans.id"
                                        :value="plans.id">{{plans.ref_lettre}}</option>
                            </select>
                        </div>
                    </div>


                    <div class="control-group">
                        <label class="control-label">Date invitation</label>
                        <div class="controls">
                            <input disabled
                                   type="date"
                                   v-model="edite_cojo.date_invitation"
                                   class="span"

                            />
                        </div>
                    </div>


                    <div class="control-group">
                        <label class="control-label">Date composition</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="edite_cojo.date_composition"
                                    class="span"

                            />
                        </div>
                    </div>

                    <div class="control-group">
                        <label class="control-label">NBR participant</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="edite_cojo.nbr_participant"
                                    class="span"
                            />
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <a data-dismiss="modal" class="btn btn-primary" @click.prevent="modificationCojo()" href="#">Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Cancel</a> </div>
        </div>
        <!--Fin mandater-->

        <!--Analyse dossier-->
        <div id="ajouterMP" class="modal hide grdirModalAnalyse">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter dossier analyse</h3>
            </div>

                <table class="table table-bordered table-striped">
                        <tr>
                            <td>
                        <div class="control-group">
                        <label class="control-label">Reference offre</label>
                        <div class="controls">
                            <select v-model="formAnalyseDossier.appel_offre_id" class="span" disabled>
                                <option v-for="plans in listeAppelOffre(marcheid)" :key="plans.id"
                                        :value="plans.id">{{plans.ref_appel}}</option>
                            </select>
                        </div>
                    </div>
                            </td>
                                    <td>
                     <div class="control-group">
                        <label class="control-label">Dossier candidat</label>
                        <div class="controls">
                            <select v-model="formAnalyseDossier.dossier_candidat_id" class="span">
                                <option v-for="plans in dossierCandidature(marcheid)" :key="plans.id"
                                        :value="plans.id">{{plans.nom_cand}}</option>
                            </select>
                        </div>
                    </div>
                            </td>

                            <td>


                       
                    <div class="control-group">
                        <label class="control-label">Ouverture</label>
                        <div class="controls">
                            <select v-model="formAnalyseDossier.cojo_id" class="span">
                                <option v-for="plans in listeCojo(marcheid)" :key="plans.id"
                                        :value="plans.id">{{plans.controleur_finnancier}}</option>
                            </select>
                        </div>
                    </div>
                            </td>

                              <td>
                        <div class="control-group">
                        <label class="control-label">Type analyse</label>
                        <div class="controls">
                            <select v-model="formAnalyseDossier.type_analyse_id" class="span">
                                <option v-for="plans in typeAnalyses" :key="plans.id"
                                        :value="plans.id">{{plans.libelle}}</option>
                            </select>
                        </div>
                    </div>
                            </td>
                           
                       
                           </tr>
                           
                        <tr>
                   
                            <td>
                     <div class="control-group">
                        <label class="control-label">Note</label>
                        <div class="controls">
                            <input type="text"
                                   v-model="formAnalyseDossier.note_analyse"
                                   class="span"
                                   placeholder="Saisir la note"
                            />
                        </div>
                    </div>

                            </td>
                        
                   
                            <td>

                    <div class="control-group">
                        <label class="control-label">Rang</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="formAnalyseDossier.rang_analyse"
                                    class="span"
                                    placeholder="Rang d'analyse"
                            />
                        </div>
                    </div>
                            </td>
                            <td colspan="">
                    <div class="control-group">
                        <label class="control-label">Date</label>
                        <div class="controls">
                            <input type="date"
                                   v-model="formAnalyseDossier.date_analyse"
                                   class="span"
                                   placeholder="date"
                            />
                        </div>
                    </div>
                            </td>

                                  <td>
                    <div class="control-group">
                        <label class="control-label">Decision</label>
                        <div class="controls">
                            <select v-model="formAnalyseDossier.decision" >
                                <option value="1">Non objection</option>
                                <option value="2">Objection</option>
                            </select>
                        </div>
                    </div>
                            </td>
                        </tr>
                        <tr>
                      
                            <td colspan="4">
                     <div class="control-group">
          <label class="control-label">Obseravtion:</label>
            <div class="controls">
              <textarea  v-model="formAnalyseDossier.motif" :readonly="afficherMotifAnalyse"  class="textarea_editor span10" rows="4" placeholder="Entrer le text ..."></textarea>
            </div>
          
        </div>
                            </td>
                           
                      
                        </tr>

                    </table>
            
            <div class="modal-footer">
                <a data-dismiss="modal" class="btn btn-primary" @click.prevent="ajouterAnalyseD()" href="#">Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Cancel</a> </div>
        </div>


        <div id="modificationAajouterAnalys01" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modification du dossier Analyse</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">


                    <div class="control-group">
                        <label class="control-label">Dossier candidat</label>
                        <div class="controls">
                            <select v-model="edite_analyse_dossier.dossier_candidat_id" class="span">
                                <option v-for="plans in dossierCandidature(marcheid)" :key="plans.id"
                                        :value="plans.id">{{plans.nom_cand}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="control-group">
                        <label class="control-label">Cojo</label>
                        <div class="controls">
                            <select v-model="edite_analyse_dossier.cojo_id" class="span">
                                <option v-for="plans in listeCojo(marcheid)" :key="plans.id"
                                        :value="plans.id">{{plans.controleur_finnancier}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Type analyse</label>
                        <div class="controls">
                            <select v-model="edite_analyse_dossier.type_analyse_id" class="span">
                                <option v-for="plans in typeAnalyses" :key="plans.id"
                                        :value="plans.id">{{plans.libelle}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="control-group">
                        <label class="control-label">Rang analyse :</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="edite_analyse_dossier.rang_analyse"
                                    class="span"
                                    placeholder="Rang d'analyse"
                            />
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Date :</label>
                        <div class="controls">
                            <input type="date"
                                   v-model="edite_analyse_dossier.date_analyse"
                                   class="span"
                                   placeholder=""
                            />
                        </div>
                    </div>

                     <div class="control-group">
                        <label class="control-label">Note</label>
                        <div class="controls">
                            <input type="text"
                                   v-model="edite_analyse_dossier.note_analyse"
                                   class="span"
                                   placeholder=""
                            />
                        </div>
                    </div>


                    <div class="control-group">
                        <label class="control-label">Decision</label>
                        <div class="controls">
                            <select   v-model="edite_analyse_dossier.decision" >
                                <option value="1">Non objection</option>
                                <option value="2">Objection</option>
                            </select>
                        </div>
                    </div>

                   


                </form>
            </div>
            <div class="modal-footer">
                <a data-dismiss="modal" class="btn btn-primary" @click.prevent="modificationDossierAnalyse()" href="#">Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Cancel</a> </div>
        </div>
        <!--Fin cojo-->

        <!--  debut modal ajout demande ano   -->


        <div id="ajouterDemandeAno" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter demande ANO</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">


                 <div class="control-group">
                        <label class="control-label">reference offre</label>
                        <div class="controls">
                            <input disabled
                                    type="text"
                                    v-model="formDemande.ref_marche	"
                                    class="span"
                                    placeholder="Saisir le ref marche"
                            />
                        </div>
                    </div>


                    <!-- <div class="control-group">
                        <label class="control-label">Dossier candidat</label>
                        <div class="controls">
                            <select v-model="formDemande.analyse_dossier_id" class="span">
                                <option v-for="plans in listeAnalyseDossier(marcheid)" :key="plans.id"
                                        :value="plans.id">{{plans.dossier_candidature.numero_dossier}} - {{plans.dossier_candidature.nom_cand}} {{plans.dossier_candidature.prenom_cand}} </option>
                            </select>
                        </div>
                    </div> -->


                     <div class="control-group">
                        <label class="control-label">Numero du courrier</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="formDemande.num_courrier"
                                    class="span"
                                    placeholder="Saisir le numero du courrier"
                            />
                        </div>
                    </div>

                    <div class="control-group">

                        <label class="control-label">Date de demande</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="formDemande.date_demande"
                                    class="span"
                                    placeholder="Saisir le libelle_type"
                            />
                        </div>
                    </div>

                    <div class="control-group">

                        <label class="control-label">Avis</label>
                        <div class="controls">
                           <select v-model="formDemande.avis_ano" class="span">

                               <option value="1"> Objection</option>
                               <option value="2"> Non objection</option>
                           </select>
                        </div>
                    </div>

                  <div class="control-group">
          <label class="control-label">Observation:</label>
            <div class="controls">

              <textarea  v-model="formDemande.observations_ano" :readonly="motifDemandeAno"  class="textarea_editor" rows="" placeholder="Entrer  le text ..."></textarea>
            </div>
          
        </div>

         <div class="control-group">
              <label class="control-label">Fichier joint:</label>
              <div class="controls">
                <input type="file" id="file"  @change="onFichierChange" />
              </div>
            </div>

                </form>
            </div>
            <div class="modal-footer">
                <a
                        @click.prevent="ajouterDemandeAnoLocal()"
                        class="btn btn-primary"
                        href="#"

                >Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
        </div>


        <div id="modifDemandeAno" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modification ANO</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">

                     <div class="control-group">
                        <label class="control-label">reference marché</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="edite_demande_dao.ref_marche	"
                                    class="span"
                                    placeholder="Saisir le ref marche"
                            />
                        </div>
                    </div>

                    <div class="control-group">
                        <label class="control-label">Dossier candidat</label>
                        <div class="controls">
                            <select v-model="edite_demande_dao.analyse_dossier_id" class="span">
                                <option v-for="plans in listeAnalyseDossier(marcheid)" :key="plans.id"
                                        :value="plans.id">{{plans.dossier_candidature.numero_dossier}} - {{plans.dossier_candidature.nom_cand}} {{plans.dossier_candidature.prenom_cand}} </option>
                            </select>
                        </div>
                    </div>

                    <div class="control-group">
                        <label class="control-label">Numero du courrier</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="edite_demande_dao.num_courrier"
                                    class="span"
                                    placeholder="Saisir le numero du courrier"
                            />
                        </div>
                    </div>

                    <div class="control-group">

                        <label class="control-label">Date de demande</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="edite_demande_dao.date_demande"
                                    class="span"
                                    placeholder="Saisir le libelle_type"
                            />
                        </div>
                    </div>
                   

                    

                </form>
            </div>
            <div class="modal-footer">
                <a
                        @click.prevent="editDemandeDAO()"
                        class="btn btn-primary"
                        href="#"

                >Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
        </div>
        <!---  fin modal ajout demande ano  -->

        <!--Annalyse DMP-->
        <div id="ajouterDmp" class="modal hide tailDMP">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter avis dmp</h3>
            </div>
            <div class="modal-body">
                <table class="table table-bordered table-striped">
         
            <tr>
              <td>
                 <div class="control-group">
                        <label class="control-label">Reference d'offre</label>
                        <div class="controls">
                        <input type="text" :value="afficherIdMarche(detail_marche.id)" class="span4" readonly>
                        </div>
                    </div>
              </td>
               <td>
                <div class="control-group">
                        <label class="control-label">Reference courrier</label>
                        <div class="controls">
                        <input type="text" :value="recupererNumeroCourier" class="span4" readonly>
                        </div>
                    </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="control-group">
                  <label class="control-label">Avis</label>
                  <div class="controls">
                    <select v-model="formAnalyseDMP.avis_bail" class="span4">
                      <option value="0" >Objection</option>
                       <option value="1" >Non objection</option>
                    </select>
                  </div>
                </div>
              </td>
             
               <td>
                 <div class="control-group">
                        <label class="control-label">Date avis</label>
                        <div class="controls">
                        <input type="date" v-model="formAnalyseDMP.date_avis_bail" class="span4">
                        </div>
                    </div>
              </td>
            </tr>
            <tr>
            <td colspan="2">
                <div class="control-group">
                        <label class="control-label">Observation</label>
                        <div class="controls">
                       
                        <textarea v-model="formAnalyseDMP.observation" rows="2" class="span8" :readonly="verrouObjection">

                        </textarea>
                        </div>
                    </div>
              </td>
            </tr>
                </table>
            </div>
            <div class="modal-footer">
                <a @click.prevent="ajouterAnalyseDMPB"
                        class="btn btn-primary"
                        href="#"
                >Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
        </div>

        <div id="editeDMP" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifie Analyse DMP</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">

                     <div class="control-group">
                        <label class="control-label">Reference Dmp</label>
                        <div class="controls">
                        <input type="text" v-model="edite_analyse_dpm.ref_dmp" class="span">
                        </div>
                    </div>

                     <div class="control-group">
                        <label class="control-label">Demande ANO</label>
                        <div class="controls">
                            <select v-model="edite_analyse_dpm.demande_ano_id" class="span">
                                <option v-for="varText in demandeAno(marcheid)" :key="varText.id"
                                        :value="varText.id">{{varText.annalyse_dossier.dossier_candidature.numero_dossier}}</option>
                            </select>
                        </div>
                    </div>

                      <div class="control-group">
                        <label class="control-label">Decision</label>
                        <div class="controls">
                          <select v-model="edite_analyse_dpm.avis_bail" class="span">
                                <option value="1">Objection</option>
                                <option value="2">Non objection</option>
                            </select>
                        </div>
                    </div>

                    <div class="control-group">
                        <label class="control-label">Date avis</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="edite_analyse_dpm.date_avis_bail"
                                    class="span"
                                    placeholder="Saisir le libelle_type"
                            />  
                        </div>
                    </div>
                  

                    <div class="control-group">
                        <label class="control-label">Observation</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="edite_analyse_dpm.observation"
                                    class="span"
                                    placeholder="Saisir le libelle_type"
                            />
                        </div>
                    </div>
                   
                    <!-- <div class="control-group">
                        <label class="control-label">document procedure</label>
                        <div class="controls">
                            <select v-model="edite_analyse_dpm.document_procedure_id" class="span">
                                <option v-for="varText in documentProcedures" :key="varText.id"
                                        :value="varText.id">{{varText.libelle_doc}}</option>
                            </select>
                        </div>
                    </div> -->   

                </form>
            </div>
            <div class="modal-footer">
                <a @click.prevent="modficationsAnalyseDMP"
                   class="btn btn-primary"
                   href="#"
                >Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
        </div>
        <!--Fin annalyse-->

        <!--- debut ano -->


        <div id="ajouterAnoDMPBAILLEURModal" class="modal hide tlAviBailleur">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter avis bailleur</h3>
            </div>
            
              
                <table class="table table-bordered table-striped">
                        <tr>
                            <td>
                        <div class="control-group">
                        <label class="control-label">Reference offre</label>
                        <div class="controls">
                            <select v-model="formAno.appel_offre_id" class="span" disabled>
                                <option v-for="plans in listeAppelOffre(marcheid)" :key="plans.id"
                                        :value="plans.id">{{plans.ref_appel}}</option>
                            </select>
                        </div>
                    </div>
                            </td>

                            <td>
                     <div class="control-group">
                        <label class="control-label">Avis DMP</label>
                        <div class="controls">
                            <input type="text" :value="recuperationDeAvisDmp" readonly class="span">
                        </div>
                    </div>
                            </td>

                            <td colspan="">


                     <div class="control-group">
                        <label class="control-label">Reference du  courrier </label>
                        <div class="controls">
                            <input
                                    type="text"
                                  v-model="formAno.numero_courie"  
                                    class="span"
                                    placeholder="saisir la reference du courrier"
                            />
                        </div>
                    </div>
                            </td>
                           
                       
                           </tr>
                           
                        <tr>
                   
                            <td>
                      <div class="control-group">
                       <label class="control-label">Avis bailleur</label>
                       <div class="controls">
                       <select v-model="formAno.avis_bail" class="span">
                           <option value="1">Non objection</option>
                            <option value="2">Objection</option>
                           </select> 
                       </div>
                    </div>

                            </td>
                        
                   
                            <td>

                      <div class="control-group">
                        <label class="control-label">Date avis</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="formAno.date_ano_dmp"
                                    class="span"
                                    placeholder=""
                            />
                        </div>
                    </div>
                            </td>
                            <td>
                                
                 <div class="control-group">
              <label class="control-label">Fichier joint:</label>
              <div class="controls">
                <input type="file" id="file"  @change="onFichierChange" />
              </div>
            </div>
                            </td>
                      

                     
                        </tr>
                        <tr>
                      
                            <td colspan="4">
                     <div class="control-group">
          <label class="control-label">Observation:</label>
            <div class="controls">
              <textarea  v-model="formAno.observations_bailleur" :readonly="afficherMotifBailleur"  class="textarea_editor span10" rows="4" placeholder="Entrer le text ..."></textarea>
            </div>
          
        </div>
                            </td>
                           
                      
                        </tr>

                    </table>


            <div class="modal-footer">
                <a
                        @click.prevent="ajouterAnoDMPBailleurLocal"
                        class="btn btn-primary"
                        href="#"

                >Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
        </div>

        <!--- fin ano  -->

        <!---->
        
        <div id="editeAnoDmpBailleurModal" class="modal hide tlAviBailleur">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Edite ano DMP Bailleur</h3>
            </div>
                    <table class="table table-bordered table-striped">
                        <tr>
                            <td>

                     <div class="control-group">
                        <label class="control-label">reference ano dmp</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="edite_ano_bailleur_dmp.ref_ano_dmp	"
                                    class="span"
                                    placeholder="Saisir le ref marche"
                            />
                        </div>
                    </div>
                            </td>
                   
                   

                    <!-- <div class="control-group">
                        <label class="control-label">Analyse DMP</label>
                        <div class="controls">
                            <select v-model="edite_ano_bailleur_dmp.analyse_dmp_id" class="span">
                                <option v-for="varText in listeAnalyseDPM(marcheid)" :key="varText.id"
                                        :value="varText.id">{{varText.demande_ano.annalyse_dossier.dossier_candidature.numero_dossier}}</option>
                            </select>
                        </div>
                    </div> -->
                      <td colspan="2">


                     <div class="control-group">
                        <label class="control-label">Numero courrier DMP</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    
                                    class="span5"
                                    placeholder="Saisir le numero du courrier"
                            />
                        </div>
                    </div>
                            </td>
                        </tr>
                        <tr>
                           <td>
                      <div class="control-group">
                       <label class="control-label">Avis bailleur</label>
                       <div class="controls">
                       <select v-model="edite_ano_bailleur_dmp.avis_bail" class="span">
                           <option value="1">Non objection</option>
                            <option value="2">Objection</option>
                           </select> 
                       </div>
                    </div>

                            </td>
                            <td>

                     <div class="control-group">
                        <label class="control-label">Date ano</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="edite_ano_bailleur_dmp.date_ano_dmp"
                                    class="span"
                                    placeholder="Saisir le libelle_type"
                            />
                        </div>
                    </div>
                            </td>
                                 <td>
                                
                 <div class="control-group">
              <label class="control-label">Fichier joint:</label>
              <div class="controls">
                <input type="file" id="file"  @change="onFichierChange" />
              </div>
            </div>
                            </td>
                        </tr>
                         <tr>
                      
                            <td colspan="4">
                     <div class="control-group">
            <label class="control-label">Motif:</label>
            <div class="controls">
              <textarea  v-model="edite_ano_bailleur_dmp.observations_bailleur" :readonly="afficherMotifBailleur"  class="textarea_editor span10" rows="4" placeholder="Enter text ..."></textarea>
              </div>
          
        </div>
                            </td>
                           
                      
                        </tr>
                    </table>


              
            <div class="modal-footer">
                <a
                        @click.prevent="editeAnoDMPBailleurLocal"
                        class="btn btn-primary"
                        href="#"

                >Modifier</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
        </div>



    <div id="ajouter_membre_cojo" class="modal hide" aria-hidden="true" style="display: none;">
        <div class="modal-header">
            <button data-dismiss="modal" class="close" type="button">×</button>
            <h3>Ajouter un autre membre de la cojo </h3>
        </div>
        <div class="modal-body">
            <div class="widget-box">
                <form action="#" method="get" v-if="marcheid">
                    <table class="table table-bordered table-striped">
                        <tr>
                            <td>
                                <div class="control-group">
                                    <label>Matricule</label>
                                    <div class="controls">
                                        <input type="text" class="span" placeholder="Matricule " v-model="formDataMembreCojo.matricule" v-on:keyup="rechercheMembreCojo()" >
                                        <code v-if="message_mandater">{{message_mandater}}</code>
                                    </div>
                                </div>
                            </td>

                            <td>

                                <div class="control-group">

                                    <label class="control-label">Nom et prenom <code>*</code> :</label>
                                    <div class="control-group">
                                        <input type="text" class="span" placeholder="Numero lo" v-model="formDataMembreCojo.nom_prenom">


                                    </div>
                                </div>

                            </td>
                        </tr>
                        <tr>

                            <td colspan="2">

                                <div class="control-group">

                                    <label class="control-label span5">Role <code>*</code> :</label>

                                    <div class="controls">
                                        <select class="span4" v-model="formDataMembreCojo.role">
                                            <option></option>
                                            <option value="Autorité contractante">Autorité contractante</option>
                                            <option value="DMP">Direction des marchés publique</option>
                                            <option value="Béneficiare">Béneficiaire</option>
                                            <option value="Rapporteur">Rapporteur</option>
                                            <option value="Service technique">Service technique</option>
                                            <option value="Autre">Autre</option>
                                        </select>

                                    </div>
                                </div>
                            </td>
                        </tr>

                    </table>




                </form>
            </div>
        </div>
        <div class="modal-footer">
            <a class="btn btn-primary" @click.prevent="ajouterMembreCojoM()">Ajouter</a>
            <a data-dismiss="modal" class="btn btn-inverse" href="#">Cancel</a>
        </div>
    </div>

    <div id="modification_membre_cojo" class="modal hide" aria-hidden="true" style="display: none;">
        <div class="modal-header">
            <button data-dismiss="modal" class="close" type="button">×</button>
            <h3>modification  </h3>
        </div>
        <div class="modal-body">
            <div class="widget-box">
                <form action="#" method="get" v-if="marcheid">
                    <table class="table table-bordered table-striped">
                        <tr>
                            <td>
                                <div class="control-group">
                                    <label>Matricule</label>
                                    <div class="controls">
                                        <input type="text" class="span" placeholder="Matricule " v-model="edite_membre_cojo.matricule"  >
                                        <code v-if="message_mandater">{{message_mandater}}</code>
                                    </div>
                                </div>
                            </td>

                            <td>

                                <div class="control-group">

                                    <label class="control-label">Nom et prenom <code>*</code> :</label>
                                    <div class="control-group">
                                        <input type="text" class="span" placeholder="Numero lo" v-model="edite_membre_cojo.nom_prenom">


                                    </div>
                                </div>

                            </td>
                        </tr>
                        <tr>

                            <td colspan="2">

                                <div class="control-group">

                                    <label class="control-label span5">Role <code>*</code> :</label>

                                    <div class="controls">
                                        <select class="span4" v-model="edite_membre_cojo.role">
                                            <option></option>
                                            <option value="Controller finnancier">Controller finnancier</option>
                                            <option value="Autorité contractante">Autorité contractante</option>
                                            <option value="DMP">Direction des marchés publique</option>
                                            <option value="Béneficiare">Béneficiaire</option>
                                            <option value="Rapporteur">Rapporteur</option>
                                            <option value="Service technique">Service technique</option>
                                            <option value="Autre">Autre</option>
                                        </select>

                                    </div>
                                </div>
                            </td>
                        </tr>

                    </table>




                </form>
            </div>
        </div>
        <div class="modal-footer">
            <a class="btn btn-primary" @click.prevent="editeMembreCojoM()">Ajouter</a>
            <a data-dismiss="modal" class="btn btn-inverse" href="#">Cancel</a>
        </div>
    </div>

        <!---->
        <!--Fin contratualisation-->
 
</div>

</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    import moment from 'moment';
    //import {getterDossierCandidats} from "../../../vuex/modules/fabrice/bienService/Getters";
    import {  ModelListSelect } from 'vue-search-select'
    import 'vue-search-select/dist/VueSearchSelect.css'
import { formatageSomme } from "../../../../src/Repositories/Repository";
    export default {
        name: 'compte',
        components:{
            ModelListSelect,

        },
        data() {
            return {
                fabActions: [
                    {
                        name: "cache",
                        icon: "add"
                    }

                ],
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
                formAnalyseDossier:{
                    date_analyse:"",
                    appel_offre_id:"",
                    note_analyse:"",
                    rang_analyse:"",
                    decision:"",
                    dossier_candidat_id:"",
                    type_analyse_id: "",
                    cojo_id:"",
                    motif:""

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
            isFormulaireDossierCandidature:false,
                isDetailDossierCandidature:false,
                isButtunAddDossierCandidat:true,
          formDossierCadidature:{
              secteur_activite_id:"",
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
              capacite_financement:"",

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
             //type_doc_modifie:"",
             livrable_id:"",
             text_juridique_id:"",
             type_act_effet_id:"",
             analyse_dossier_id:"",
             entreprise_id:"",
             marche_id:"",
             numero_marche:""
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

editFacture:{
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
             //type_doc_modifie:"",
             livrable_id:"",
             text_juridique_id:"",
             type_act_effet_id:"",
             analyse_dossier_id:"",
             entreprise_id:"",
             marche_id:"",
             numero_marche:""

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
    analyse_dossier_id:""

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
	appel_offre_id:""
   // analyse_dmp_id:""
},

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
                formLettre: {
                    appel_offre_id:"",
                    fichier_joint:"",
                    objet_lettre:"",
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
                    //mode_passation_id:""
                },
                message_mandater:'',
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
            ...mapGetters("bienService", [ 'acteDepense',"getMarchePersonnaliser","appelOffres","lots",
                "modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers", "factures", "typeFactures",
                "getPersonnaliserFacture", "personnaliseGetterMarcheBailleur","getterMembreCojo"]),
            ...mapGetters('personnelUA', ['acteur_depenses']),


                ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises']),
            ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
                'types_financements']) ,
                
    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),
            
            
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

// afficher le moti de demande ano
 motifDemandeAno(){
     return this.formDemande.avis_ano == 1
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
      const val =  parseFloat(this.formOffreFinanciere.prix_unitaire) * parseFloat(this.formOffreFinanciere.quantite);
      
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
            montantBailleurMarche(){
                return  marche_id=>{
                    if (marche_id!="") {
                        let initialValue = 0;
                        let ObjetMontant =this.personnaliseGetterMarcheBailleur.filter( idmarche => idmarche.marche_id == marche_id).reduce(function (total, currentValue) {
                            return total + parseFloat(currentValue.montant) ;
                        }, initialValue);
                        return ObjetMontant;
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

            // afficher le champ motif dynanmique
afficherMotifAnalyse(){
    return this.formAnalyseDossier.decision  =="1"
},

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

            listeActeEffetFinancier(){
                return marche_id =>{
                    if(marche_id !=""){
                       // console.log("Marche liste accteEffet")
                        return this.getActeEffetFinancierPersonnaliser.filter(identreprise =>identreprise.id == marche_id)
                    }
                }
            },
            dossierCandidature: function () {
                return marcheid => {
                    if (marcheid != "") {
                      //  console.log("Marche dossier candidat")
                        return this.getterDossierCandidats.filter(idmarche => idmarche.appel_offre.marche_id == marcheid)
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
                      console.log(Objet)
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
                   // console.log("Marche liste analyse dossier")
                    return this.getterAnalyseDossiers.filter(idmarche => idmarche.dossier_candidature.appel_offre.marche_id == marcheid)
                }
            }
        },

            demandeAno: function () {
                return marcheid => {
                    if (marcheid != "") {
                        //console.log("Marche demande ano")
                        return this.getterDemandeAno.filter(idmarche => idmarche.annalyse_dossier.dossier_candidature.appel_offre.marche_id == marcheid)
                    }
                }
            },
            listeAnalyseDPM: function () {
                return marcheid => {
                    if (marcheid != "") {
                       // console.log("Marche liste analyse dpm")
                        return this.getterAnalyseDMP.filter(idmarche => idmarche.demande_ano.annalyse_dossier.dossier_candidature.appel_offre.marche_id == marcheid)
                    }
                }



                
            },


    //          ImputationBudget() {
      
    //   const norme = this.getPersonnaliserFacture.find(normeEquipe => normeEquipe.afficheEconomique.id == this.formData.economique_id);

    //   if (norme) {
    //     return norme.codebudget;
    //   }
    //   return 0
    // },
            listeAnoDMPBailleur: function () {
                return marcheid => {
                    if (marcheid != "") {
                       // console.log("Marche dmp bailleur")
                        return this.getterAnoDMPBailleur.filter(idmarche => idmarche.id == marcheid)
                    }
                }
            },

            listeAnalyseDMPFavorable: function () {
                return marcheid => {
                    if (marcheid != "") {
                       // console.log("Marche analyse DMP Favorable")
                        return this.getterAnalyseDMP.filter(idmarche => {
                            if(idmarche.demande_ano.annalyse_dossier.dossier_candidature.appel_offre.marche_id == marcheid && idmarche.avis_bail==1){
                             return idmarche
                            }
                        })
                    }
                }
            },
            listeObservationBailleurANODMP: function () {
                return marcheid => {
                    if (marcheid != "") {
                       // console.log("Marche observation bailleur ANODMP")
                        return this.getterObseravtionBailleurs.filter(idmarche => idmarche.id == marcheid)
                    }
                }
            },
            selectionAttributionMarche: function () {
                return marcheid => {
                    if (marcheid != "") {
                        //console.log("Marche attribution marche")

                        let marcherEnAction=this.getterObseravtionBailleurs.filter(idmarche => idmarche.ano_dmp_bailleur.annalyse_d_m_p.demande_ano.annalyse_dossier.dossier_candidature.appel_offre.marche_id == marcheid)
                       let marcherFavaroble=marcherEnAction.filter(idmarche=>idmarche.avis_bail==1).length

                     


                        //Recherche le candidat qui a le plus gros score parmie les admin
                         if(marcherFavaroble>1){


                             //prendre le max et min score du premier candidat
                           /*  let min = marcherEnAction[0].ano_dmp_bailleur.annalyse_d_m_p.demande_ano.annalyse_dossier.rang_analyse
                             let max = marcherEnAction[0].ano_dmp_bailleur.annalyse_d_m_p.demande_ano.annalyse_dossier.rang_analyse;*/
                              let min=1;
                              let max=4;
                            //parcourie le tableau pour recupere le maxi et le minimun en conparant les valeur max et min du premie selectionner
                             for (let i = 1, len=marcherEnAction.length; i < len; i++) {
                                 let v = marcherEnAction[i].id;
                                 min = (v < min) ? v : min;
                                 max = (v > max) ? v : max;
                             }
                          //   console.log(min)

                             marcherEnAction= marcherEnAction.filter(idmarche=>idmarche.id==max)
                             //console.log(marcherEnAction)
                         }



                        // console.log(marcherEnAction)



                            let infoEntreprise="";
                             if(marcherEnAction.length!=0){
                                 const rcm=marcherEnAction[0].id
                                 marcherEnAction=marcherEnAction.find(idm=>idm.id==marcherEnAction[0].id)
                                 infoEntreprise=this.entreprises.find(entrep=>entrep.numero_rc==rcm)

                                 if (infoEntreprise==undefined)
                                     infoEntreprise=""

                             }else{
                                 marcherEnAction=""
                             }



                         const objetRetour={
                             entrepriseInfo:infoEntreprise,
                             dossierFavorable:marcherEnAction
                         }
                   // console.log(objetRetour)
                        return objetRetour
                    }
                }
            },

            /*listeActeEffectFinnancier:function () {
                return marcheid => {
                  if(marcheid !=""){
                      console.log("iiiiiiii"
                          const  objet=this.getActeEffetFinancierPersonnaliser.filter(idmarche => idmarche.marche.id == marcheid)
                      console.log(objet)
                        return this.getActeEffetFinancierPersonnaliser.filter(idmarche => idmarche.marche.id == marcheid)
                    }
                }
            },*/
            listeActeEffectFinnancier: function () {
                return marcheid => {
                    if (marcheid != "") {
                       // console.log("Marche leste acte effect finnancier")
                        return this.getActeEffetFinancierPersonnaliser.filter(idmarche => idmarche.marche_id == marcheid)
                    }
                }
            },



        },
        methods: {
            ...mapActions("bienService", [
                'ajouterAppelOffre','modifierAppelOffre',"supprimerAppelOffre","modifierAppelOffre",
                "ajouterLot","modifierLot","supprimerLot","ajouterDossierCandidat","getDossierCandidat",
                "modifierDossierCandidat","supprimerDossierCandidat","ajouterOffreTechnique","modifierOffreTechnique",
                "supprimerOffreTechnique","ajouterOffreFinancier","modifierOffreFinancier","supprimerOffreFinancier",
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
                "ajouterMarcherBailleur","supprimerMarcheBailleur","ajouterMembreCojo","modificationMembreCojo","supprimerMembreCojo"

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


    onFichierChange(e){
      this.formLettre.fichier_joint = e.target.files[0]
     // console.log(onFichierChange);
    },
//     onFichierChange(e){
// this.formMandater.fichier_joint = e.target.files[0]

//     },

// afficher modal modifier facture
afficherModalmodifierfacture(index){
    this.$('#modififacture').modal({
        backdrop: "static",
        keyboard:false
    })
    this.editFacture = this.factures[index]
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
    this.modifierFacture(this.editFacture)
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
                let entre=this.entreprises.find(item=>item.id==this.search);
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
                this.ajouterLettreInvitation(this.formLettre)
                this.formLettre= {
                    appel_offre_id:"",
                    fichier_joint:"",
                        date_lettre:"",
                        ref_lettre:"",
                        destination:"",
                }
            },
            ajouterAnalyseD(){
              this.ajouterAnalyseDossier(this.formAnalyseDossier)
                this.formAnalyseDossier={
                        date_analyse:"",
                        appel_offre_id:"",
                        rang_analyse:"",
                        decision:"",
                        motif:"",
                        note_analyse:"",
                        dossier_candidat_id:"",
                        type_analyse_id: "",
                        cojo_id:""
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


                 var nouvelObjet = {
      ...this.formOffreFinanciere,
      montant_total_ht :this.montantHT,
       montant_total_ttc :this.montantHTt,
        	taux :this.affcherTauxEnCours,
         	tva :this.montantTva,
designation:this.libelleLot,
dossier_candidat_id : this.edite_offre_financiere.id
       };
                // console.log(this.edite_offre_financiere.id)
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
                this.formFournisseur.raison_sociale=this.formDossierCadidature.nom_cand
                this.formFournisseur.numero_cc= this.formDossierCadidature.numero_cc
                this.formFournisseur.numero_rc=this.formDossierCadidature.reg_com
                this.formFournisseur.telephone=this.formDossierCadidature.telephone_cand
                this.formFournisseur.adresse=this.formDossierCadidature.adresse_post
                this.formFournisseur.email=this.formDossierCadidature.email_cand
                this.formFournisseur.complet=0

           // console.log(this.formFournisseur)
              let ent=  this.entreprises.find(item=>item.numero_rc==this.formFournisseur.numero_rc)

                if(ent==undefined){
                    this.ajouterEntreprise(this.formFournisseur)
                }
                this.ajouterDossierCandidat(this.formDossierCadidature)

                this.formDossierCadidature={
                    type_candidat:"",
                        numero_cc:"",
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
            ajouterDemandeAnoLocal(){
                this.ajouterDemandeAno(this.formDemande)
                this.formDemande={
                        date_demande:"",
                        ref_marche:"",
                        num_courrier:"",
                        analyse_dossier_id:""

                }
            },

            // vider l'input de acte  effet financier
ajouterModalActeEffetFinancierLocal(entreprise_id){
              //  console.log(this.formEffetFinancier)
    this.formEffetFinancier.marche_id=this.marcheid
    this.formEffetFinancier.entreprise_id=entreprise_id
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
            // type_doc_modifie:"",
             livrable_id:"",
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
    this.editActeEffetFinancier = this.acteEffetFinanciers[index]
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
modifierModalActeEffetFinancierLocal(entreprise_id){
    this.editActeEffetFinancier.entreprise_id=entreprise_id
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
             var nouvelObjet = {
        ...this.formAnalyseDMP,
        ref_dmp: this.detail_marche.id,
        ref_courier: this.recupererNumeroCourier,
      
      

      };
                //console.log(this.formAnalyseDMP)
            this.ajouterAnalyseDMP(nouvelObjet)
            this.formAnalyseDMP={
                     ref_dmp:"",
                    demande_ano_id:"",
                    observation:"",
                    avis_bail:"",
                    date_avis_bail:""
            }
        },ajouterAnoDMPBailleurLocal(){  
            // var nouvelObjet = {
            //     ...this.formAno,
            //      ref_ano_dmp: this.recuperationDeAvisDmp
            // }
            
               this.ajouterAnoDMPBailleur(this.formAno)
                this.formAno={
                    date_ano_dmp:"",
                        avis_bail:"",
                        observations_bailleur:"",
                        ref_ano_dmp:"",
                        numero_courie:"",
                        	appel_offre_id:""
                        //analyse_dmp_id:""
                }
            },
            modaleOffreTechnique(index){
               let objet= this.getterDossierCandidats.find(item=>item.id=index);
                this.formOffreTechnique={
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
                this.edite_offre_financiere=this.getterDossierCandidats.find(item=>item.id=index);
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
               // console.log(this.detail_offre_finnancier)

            },
            // afficher modal de modification

            afficherModalModifierActeDepense(index){
                this.$('#modificationModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });

                this.edite_appel_offre = this.appelOffres[index];
            },
            afficheDemandeDAO(index){

                this.$('#modifDemandeAno').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.edite_demande_dao=this.getterDemandeAno.find(
                    demandeAno => demandeAno.id == index
                )
            },
            afficheAnalyseDMP(index){

                this.$('#editeDMP').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.edite_analyse_dpm=this.getterAnalyseDMP.find(
                    annalyseDP => annalyseDP.id == index
                )
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

            editDemandeDAO(){
                this.modifierDemandeAno(this.edite_demande_dao)
                this.$('#modifDemandeAno').modal('hide');
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
                this.$('#editeDMP').modal('hide');
            },

            editeAnoDMPBailleurLocal(){
                this.modifierAnoDMPBailleur(this.edite_ano_bailleur_dmp)
                this.$('#editeAnoDmpBailleurModal').modal('hide');
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
            // formatage de date
            formaterDate(date) {
              return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },

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
    .gdmodelfour
    {
 width: 1000px;
 margin: 0 -580px;
 height: 500px;
    }
    .grdirModalActeEffet
    {

 width: 1000px;
 margin: 0 -530px;
 height: 500px;

    }
    .grdirModalAnalyse{
         width: 1000px;
 margin: 0 -530px;
 height: 450px;
    }
    .tlAviBailleur{
  width: 1000px;
 margin: 0 -530px;
 height: 450px;

    }

    .tlg{
    width: 900px;
 margin: 0 -450px;
 height: 500px; 
    }
    .sommecolor{
        background-color: red;
        color:red;
        font-size: 120%;
        text-align: center;
        font-weight:bold;
    }
    .modaloffreFin{
width: 850px;
 margin: 0 -480px;
    }
    .tailDMP{
        width: 850px;
 margin: 0 -490px;
    }
    .tailleModalOffre{
           width: 1200px;
 margin: 0 -490px;
    }
     .tailleModalOffre2{
           width: 1300px;
 margin: 0 -690px;
    }
</style>
