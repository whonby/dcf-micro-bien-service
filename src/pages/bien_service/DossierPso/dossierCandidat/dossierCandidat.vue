reg_com
entreprises
marcheid
search
listeAppelOffre
addLot
marche_id
macheid
isDetailDossierCandi
<template>
    <div>

                
                <!-- <h4>Liste des offres</h4> -->
                <table class="table table-bordered table-striped" v-if="macheid">
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
                       
                         <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                  <tr class="odd gradeX" v-for="(appelOffre, index) in dossierCandidature(macheid)"
                         :key="appelOffre.id">
                         <td @click="afficheBouttonTechFin(index)">
                             {{appelOffre.numero_dossier || 'Non renseigné'}}</td>
                         <td @click="afficheBouttonTechFin(index)">
                             {{afficheCandidat(appelOffre.type_candidat_id) || 'Non renseigné'}}</td>
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
                                 <span class=""><i class="icon-folder-open" ></i></span>
                             </button>
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

              
     
<!-- debut ajout acte effet financier --->



<div id="ajouterDossierCandidat" class="modal hide grdirModalActeEffet">
             <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter Dossier Candidat</h3>
            </div>
            <div class="modal-body ">

                    <table class="table table-bordered table-striped ">
                        <tr>
                            <td>
                                 <div class="control-group" >
                                    <label class="control-label"> Selectionner l'entreprise:</label>
                                    <div class="controls">
                                        
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
                                    </div>
                                </div>
                            </td>
                             <td>
                                <div class="control-group">
                                    <label class="control-label">registre de commerce</label>
                                    <div class="controls">
                                        <input type="text" class="span12" placeholder="Registre de commerce" v-model="formDossierCadidature.reg_com">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Numero de compte contribuable</label>
                                    <div class="controls">
                                        <input type="text" class="span12" placeholder="Situation Geographique" v-model="formDossierCadidature.numero_cc">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Raison social</label>
                                    <div class="controls">
                                        <input type="text" class="span12" placeholder="Raison social" v-model="formDossierCadidature.nom_cand">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Email</label>
                                    <div class="controls">
                                        <input type="text" class="span12" placeholder="Email" v-model="formDossierCadidature.email_cand">
                                    </div>
                                </div>
                            </td>
                            
                        </tr>
                          <tr>
                            
                             <td>
                                <div class="control-group">
                                    <label class="control-label">Telephone</label>
                                    <div class="controls">
                                        <input type="text" class="span12" placeholder="Telphone" v-model="formDossierCadidature.telephone_cand">
                                    </div>
                                </div>
                            </td>
                             <td>
                                <div class="control-group">
                                    <label class="control-label">Address </label>
                                    <div class="controls">
                                        <input type="text" class="span12" placeholder="Adresse" v-model="formDossierCadidature.adresse_post">
                                    </div>
                                </div>
                            </td>

                            <td>

                                <div class="control-group">
                                    <label class="control-label">Numero de dossier</label>
                                    <div class="controls">
                                        <input type="text" readonly class="span12" placeholder="Numero dossier" v-model="formDossierCadidature.numero_dossier">
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
                            <td>
                                <label>Appel Offre</label>
                                <div class="controls">
                                   <input type="text" readonly   class="span12" :value="affichierReferenceOffre(macheid)">
                                </div>
                            </td>
                            </tr>
                            <tr>
                            
                            
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Accord groupe</label>
                                    <div class="controls">
                                        <input type="text" class="span12" placeholder="Accord Groupe" v-model="formDossierCadidature.accord_group">
                                    </div>
                                </div>
                            </td>
                                
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Cautionnement prov</label>
                                    <div class="controls">
                                        <input type="text" class="span12" placeholder="Cautionnement" v-model="formDossierCadidature.cautionnement_prov">
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div class="control-group">
                                    <label class="control-label">Pouv habil signataire</label>
                                    <div class="controls">
                                        <input type="text" class="span12" placeholder="Pouv Hile Signature" v-model="formDossierCadidature.pouv_habil_signataire">
                                    </div>
                                </div>
                            </td>
                             <td>
                                <div class="control-group">
                                    <label class="control-label">Attestion banc</label>
                                    <div class="controls">
                                        <input type="text" class="span12" placeholder="Attestation banc" v-model="formDossierCadidature.attest_banc">
                                    </div>
                                </div>
                            </td>
                             <td>
                                <div class="control-group">
                                    <label class="control-label">Formulaire proo techn</label>
                                    <div class="controls">
                                        <input type="text" class="span12" placeholder="Formul propo tech" v-model="formDossierCadidature.formul_propo_tech">
                                    </div>
                                </div>
                            </td>
                           
                            </tr>
                           
                            <tr>
                             <td>
                                <div class="control-group">
                                    <label class="control-label">Fiche rsgnt </label>
                                    <div class="controls">
                                        <input type="text" class="span12" placeholder="Fiche renseignement" v-model="formDossierCadidature.fiche_rsgnt_cand">
                                    </div>
                                </div>
                            </td>

                            
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Piece admin</label>
                                    <div class="controls">
                                        <input type="text"  class="span12" placeholder="Piece Admin" v-model="formDossierCadidature.piece_admin">
                                    </div>
                                </div>
                            </td>
                             <td>
                                <div class="control-group">
                                    <label class="control-label">Fiche rsgnt nombre groupe</label>
                                    <div class="controls">
                                        <input type="text"  class="span12" placeholder="Fiche renseignement nombre groupe" v-model="formDossierCadidature.fiche_rsgnt_mbre_group">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Atcdent marche non exe</label>
                                    <div class="controls">
                                        <input type="text"  class="span12" placeholder="Atcent marche non exe" v-model="formDossierCadidature.atcdent_marche_non_exe">
                                    </div>
                                </div>
                            </td>   
                           <td>
                                <div class="control-group">
                                    <label class="control-label">Org travau site</label>
                                    <div class="controls">
                                        <input type="text" class="span12" placeholder="Org travau" v-model="formDossierCadidature.org_travau_site">
                                     </div>
                                </div>
                            </td>

                           
                        </tr>
                        <tr>
                               <td>
                                <div class="control-group">
                                    <label class="control-label">Metch real travau</label>
                                    <div class="controls">
                                        <input type="text" class="span12" placeholder="Meth real travau" v-model="formDossierCadidature.meth_real_travau">
                                    </div>
                                </div>
                            </td>
                             <td>
                                <label>Procedure de passation</label>
                                <div class="controls">
                                    <input type="text" class="span12" :value="afficherLibelleTypeProcedure(affichierPassationMarche(macheid))" readonly>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Date de naissance</label>
                                    <div class="controls">
                                          <input type="date"  class="span12" placeholder="" v-model="formDossierCadidature.date_nais_cand">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Capacite financiere</label>
                                    <div class="controls">
                                        <input type="text"  class="span12" placeholder="Capacite financiere" v-model="formDossierCadidature.capacite_financiere">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <div class="controls">
                                        <label class="control-label">Prog mobilisation</label>
                                        <input type="Text" class="span12" placeholder="Programme mobilisation" v-model="formDossierCadidature.prog_mobilisation">
                                    </div>
                                </div>
                            </td>
                            
                        </tr>
                        
                        <tr>
                             <td>
                                <div class="control-group">
                                    <label class="control-label">CAA moyen acc entre</label>
                                    <div class="controls">
                                        <input type="text" class="span12" placeholder="CAA moyen ac entre" v-model="formDossierCadidature.caa_moyen_ac_entre">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Capacite finanancier</label>
                                    <div class="controls">
                                        <input type="text" class="span12" placeholder="Capacite financement" v-model="formDossierCadidature.capacite_financement">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Capacite techn exp</label>
                                    <div class="controls">
                                        <input type="text" class="span12" placeholder="Capacite tech exp" v-model="formDossierCadidature.capacite_tech_exp">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Montant offre financiere</label>
                                    <div class="controls">
                                        <input type="text" class="span12" placeholder="Mont offre financiere" v-model="formDossierCadidature.mt_offre_financiere">
                                    </div>
                                </div>
                            </td>
                        </tr>
                        
                    </table>  

                   

                
            </div>
            <div class="modal-footer">
                <a  
                @click.prevent="ajouterDossierCandidature"
                        class="btn btn-primary"
                        href="#"
                >Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
        </div>



<div id="modificationModal" class="modal hide grdirModalActeEffet">
           <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modification Dossier Candidat</h3>
            </div>
            <div class="modal-body">

                <table class="table table-bordered table-striped">
                
                           <tr>
                            <td>
                                 <div class="control-group" >
                                    <label class="control-label"> Selectionner l'entreprise:</label>
                                    <div class="controls">
                                        
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
                                    </div>
                                </div>
                            </td>
                             <td>
                                <div class="control-group">
                                    <label class="control-label">registre de commerce</label>
                                    <div class="controls">
                                        <input type="text" class="span12" placeholder="Registre de commerce" v-model="editDossierCadidature.reg_com">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Numero de compte contribuable</label>
                                    <div class="controls">
                                        <input type="text" class="span12" placeholder="Situation Geographique" v-model="editDossierCadidature.numero_cc">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Raison social</label>
                                    <div class="controls">
                                        <input type="text" class="span12" placeholder="Raison social" v-model="editDossierCadidature.nom_cand">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Email</label>
                                    <div class="controls">
                                        <input type="text" class="span12" placeholder="Email" v-model="editDossierCadidature.email_cand">
                                    </div>
                                </div>
                            </td>
                            
                        </tr>
                          <tr>
                            
                             <td>
                                <div class="control-group">
                                    <label class="control-label">Telephone</label>
                                    <div class="controls">
                                        <input type="text" class="span12" placeholder="Telphone" v-model="editDossierCadidature.telephone_cand">
                                    </div>
                                </div>
                            </td>
                             <td>
                                <div class="control-group">
                                    <label class="control-label">Address </label>
                                    <div class="controls">
                                        <input type="text" class="span12" placeholder="Adresse" v-model="editDossierCadidature.adresse_post">
                                    </div>
                                </div>
                            </td>

                            <td>

                                <div class="control-group">
                                    <label class="control-label">Numero de dossier</label>
                                    <div class="controls">
                                        <input type="text" readonly class="span12" placeholder="Numero dossier" v-model="editDossierCadidature.numero_dossier">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Type candidat</label>
                                    <div class="controls">

                                         <select v-model="editDossierCadidature.type_candidat_id" class="span" >
                                        <option v-for="varText in typeCandidat" :key="varText.id"
                                                :value="varText.id">{{varText.libelle}}</option>
                                    </select>
                                     
                                    </div>
                                </div>
                            </td>
                            <td>
                                <label>Appel Offre</label>
                                <div class="controls">
                                   <input type="text" readonly   class="span12" :value="affichierReferenceOffre(macheid)">
                                </div>
                            </td>
                            </tr>
                            <tr>
                            
                            
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Accord groupe</label>
                                    <div class="controls">
                                        <input type="text" class="span12" placeholder="Accord Groupe" v-model="editDossierCadidature.accord_group">
                                    </div>
                                </div>
                            </td>
                                
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Cautionnement prov</label>
                                    <div class="controls">
                                        <input type="text" class="span12" placeholder="Cautionnement" v-model="editDossierCadidature.cautionnement_prov">
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div class="control-group">
                                    <label class="control-label">Pouv habil signataire</label>
                                    <div class="controls">
                                        <input type="text" class="span12" placeholder="Pouv Hile Signature" v-model="editDossierCadidature.pouv_habil_signataire">
                                    </div>
                                </div>
                            </td>
                             <td>
                                <div class="control-group">
                                    <label class="control-label">Attestion banc</label>
                                    <div class="controls">
                                        <input type="text" class="span12" placeholder="Attestation banc" v-model="editDossierCadidature.attest_banc">
                                    </div>
                                </div>
                            </td>
                             <td>
                                <div class="control-group">
                                    <label class="control-label">Formulaire proo techn</label>
                                    <div class="controls">
                                        <input type="text" class="span12" placeholder="Formul propo tech" v-model="editDossierCadidature.formul_propo_tech">
                                    </div>
                                </div>
                            </td>
                           
                            </tr>
                           
                            <tr>
                             <td>
                                <div class="control-group">
                                    <label class="control-label">Fiche rsgnt </label>
                                    <div class="controls">
                                        <input type="text" class="span12" placeholder="Fiche renseignement" v-model="editDossierCadidature.fiche_rsgnt_cand">
                                    </div>
                                </div>
                            </td>

                            
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Piece admin</label>
                                    <div class="controls">
                                        <input type="text"  class="span12" placeholder="Piece Admin" v-model="editDossierCadidature.piece_admin">
                                    </div>
                                </div>
                            </td>
                             <td>
                                <div class="control-group">
                                    <label class="control-label">Fiche rsgnt nombre groupe</label>
                                    <div class="controls">
                                        <input type="text"  class="span12" placeholder="Fiche renseignement nombre groupe" v-model="editDossierCadidature.fiche_rsgnt_mbre_group">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Atcdent marche non exe</label>
                                    <div class="controls">
                                        <input type="text"  class="span12" placeholder="Atcent marche non exe" v-model="editDossierCadidature.atcdent_marche_non_exe">
                                    </div>
                                </div>
                            </td>   
                           <td>
                                <div class="control-group">
                                    <label class="control-label">Org travau site</label>
                                    <div class="controls">
                                        <input type="text" class="span12" placeholder="Org travau" v-model="editDossierCadidature.org_travau_site">
                                     </div>
                                </div>
                            </td>

                           
                        </tr>
                        <tr>
                               <td>
                                <div class="control-group">
                                    <label class="control-label">Metch real travau</label>
                                    <div class="controls">
                                        <input type="text" class="span12" placeholder="Meth real travau" v-model="editDossierCadidature.meth_real_travau">
                                    </div>
                                </div>
                            </td>
                             <td>
                                <label>Procedure de passation</label>
                                <div class="controls">
                                    <input type="text" class="span12" :value="afficherLibelleTypeProcedure(affichierPassationMarche(macheid))" readonly>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Date de naissance</label>
                                    <div class="controls">
                                          <input type="date"  class="span12" placeholder="" v-model="editDossierCadidature.date_nais_cand">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Capacite financiere</label>
                                    <div class="controls">
                                        <input type="text"  class="span12" placeholder="Capacite financiere" v-model="editDossierCadidature.capacite_financiere">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <div class="controls">
                                        <label class="control-label">Prog mobilisation</label>
                                        <input type="Text" class="span12" placeholder="Programme mobilisation" v-model="editDossierCadidature.prog_mobilisation">
                                    </div>
                                </div>
                            </td>
                            
                        </tr>
                        
                        <tr>
                             <td>
                                <div class="control-group">
                                    <label class="control-label">CAA moyen acc entre</label>
                                    <div class="controls">
                                        <input type="text" class="span12" placeholder="CAA moyen ac entre" v-model="editDossierCadidature.caa_moyen_ac_entre">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Capacite finanancier</label>
                                    <div class="controls">
                                        <input type="text" class="span12" placeholder="Capacite financement" v-model="editDossierCadidature.capacite_financement">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Capacite techn exp</label>
                                    <div class="controls">
                                        <input type="text" class="span12" placeholder="Capacite tech exp" v-model="editDossierCadidature.capacite_tech_exp">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Montant offre financiere</label>
                                    <div class="controls">
                                        <input type="text" class="span12" placeholder="Mont offre financiere" v-model="editDossierCadidature.mt_offre_financiere">
                                    </div>
                                </div>
                            </td>
                        </tr>
                </table>


              


            </div>
             <div class="modal-footer">
                <a
                        
                        class="btn btn-primary"
                        href="#"

                >Modifier</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
        </div>

<!--- fin modifier acte effet financier  -->
  <notifications/>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import { formatageSomme } from '../../../../../src/Repositories/Repository';
import moment from 'moment';
import {  ModelListSelect } from 'vue-search-select'
import 'vue-search-select/dist/VueSearchSelect.css'
export default {
    components:{
           
            
            ModelListSelect,
        },
    data(){
        return{
        
         formDossierCadidature:{
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
              capacite_financement:"",
          },
          editDossierCadidature:{
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
              capacite_financement:"",
          },
            isFormulaireDossierCandidature:false,
                isDetailDossierCandidature:false,
                isButtunAddDossierCandidat:true,
                
search:""
        }
    },
    props:["macheid"],
    created(){},

       computed: {

            ...mapGetters("bienService", [ "typeTypeProcedures","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots",
                "modePassations", "procedurePassations","getterDossierCandidats","marches",
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
 dossierCandidature(){
                return  id=>{
                    if (id!="") {
                        
                        return this.getterDossierCandidats.filter( idmarche => idmarche.appel_offre.marche_id == id)
                    }
                }

                
            },



        //   dossierCandidature: function () {
        //         return macheid => {
        //             if (macheid != "") {
        //               //  console.log("Marche dossier candidat")
        //                 return this.getterDossierCandidats.filter(idmarche => idmarche.appel_offre.marche_id == macheid)
        //             }
        //         }
        //     },
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
      affichierPassationMarche() {
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
     affichierReferenceOffre() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.appelOffres.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.ref_appel;
      }
      return 0
        }
      };
    },
     affichierReferenceOffreId() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.appelOffres.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.id;
      }
      return 0
        }
      };
    },
lettreInvitationAMarche: function () {
                return id => {
                    if (id != "") {
                        //console.log("Marche lettre inviation marche")
                        return this.getterLettreInvitation.filter(idmarche => idmarche.appel_offre.marche_id == id)
                    }
                }
            },

      
      },

      methods:{ 

          ...mapActions("bienService", [
               "ajouterDossierCandidat",
                "supprimerDossierCandidat","modifierDossierCandidat"
            
            ]),
 isDetailDossierCandi(id){
                this.isDetailDossierCandidature=true,
                    this.isButtunAddDossierCandidat=false
                this.isButtunAddDossierCandidat=false
                this.detail_dossier_candidature=this.getterDossierCandidats.find(dossier=>dossier.id==id)
                this.detail_offre_finnancier=this.getterOffreFinanciers.find(offre => offre.dossier_candidature.id ==id)
                this.detail_offre_technique =this.gettersOffreTechniques.find(offre =>offre.dossier_candidature.id ==id)
               // console.log(this.detail_offre_finnancier)
            },
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

 ajouterDossierCandidature(){
                // this.formFournisseur.raison_sociale=this.formDossierCadidature.nom_cand
                // this.formFournisseur.numero_cc= this.formDossierCadidature.numero_cc
                // this.formFournisseur.numero_rc=this.formDossierCadidature.reg_com
                // this.formFournisseur.telephone=this.formDossierCadidature.telephone_cand
                // this.formFournisseur.adresse=this.formDossierCadidature.adresse_post
                // this.formFournisseur.email=this.formDossierCadidature.email_cand
                // this.formFournisseur.complet=0
           // console.log(this.formFournisseur)
            // nouveauObjet1={
            //         ...this.formFournisseur,
                   
            //     raison_sociale:this.formFournisseur.nom_cand,
            //     numero_cc: this.formFournisseur.numero_cc,
            //     numero_rc:this.formFournisseur.reg_com,
            //     telephone:this.formFournisseur.telephone_cand,
            //     adresse:this.formFournisseur.adresse_post,
            //     email:this.formFournisseur.email_cand,
            //    }
            //   let ent=  this.entreprises.find(item=>item.numero_rc==this.formFournisseur.numero_rc)
            //     if(ent==undefined){
            //         this.ajouterEntreprise(nouveauObjet1)
            //     }
              var  nouveauObjet={
                    ...this.formDossierCadidature,
                    appel_offre_id:this.affichierReferenceOffreId(this.macheid),
                    procedure_passation_id:this.affichierPassationMarche(this.macheid),
                raison_sociale:this.formDossierCadidature.nom_cand,
                numero_cc: this.formDossierCadidature.numero_cc,
                numero_rc:this.formDossierCadidature.reg_com,
                telephone:this.formDossierCadidature.telephone_cand,
                adresse:this.formDossierCadidature.adresse_post,
                email:this.formDossierCadidature.email_cand,
               }
                this.ajouterDossierCandidat(nouveauObjet)
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
             modificationDossierCandidatLocal(){
                  var  nouveauObjet={
                    ...this.editDossierCadidature,
                    appel_offre_id:this.affichierReferenceOffreId(this.macheid),
                    procedure_passation_id:this.affichierPassationMarche(this.macheid),
                raison_sociale:this.formDossierCadidature.nom_cand,
                numero_cc: this.formDossierCadidature.numero_cc,
                numero_rc:this.formDossierCadidature.reg_com,
                telephone:this.formDossierCadidature.telephone_cand,
                adresse:this.formDossierCadidature.adresse_post,
                email:this.formDossierCadidature.email_cand,
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
                  this.modifierDossierCandidat(nouveauObjet)
                  this.$('#modificationDossierCandidatModal').modal('hide');
            },
        afficheBouttonTechFin(index){
                this.$('#modificationModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.editDossierCadidature = this.dossierCandidature(this.macheid)[index];
            },








            ajouterLettreInv(){
                const formData = new FormData();
                formData.append('fichier', this.selectedFile, this.selectedFile.name);
                formData.append('appel_offre_id', this.affichierAppelOffreid(this.macheid));
                formData.append('destination', this.formLettre.destination);
                formData.append('ref_lettre', this.formLettre.ref_lettre);
                formData.append('date_lettre', this.formLettre.date_lettre);
                formData.append('date_cojo', this.formLettre.date_cojo);
                formData.append('objet_lettre', this.formLettre.objet_lettre);
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
           







 modfications(){
                this.modifierAppelOffre(this.edite_appel_offre)
                this.$('#modifierActeEF').modal('hide');
            },
    


formatageSomme:formatageSomme,

 formaterDate(date) {
              return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },
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
      }
}
</script>

<style scoped>
.grdirModalActeEffet{
     width: 1600px;
 margin: 0 -830px;


}
</style>