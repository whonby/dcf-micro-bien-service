
<template>

<div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Modification Demande d'engagement</h5>
              <!-- <div align="right">
                Search:
                <input type="search" placeholder />
              </div>-->
            </div>

            <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#INFORMATIONUA">INFORMATION SUR UA</a>
                      </li>
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                    <div id="INFORMATIONUA" class="tab-pane active">
                  
          <table class="table table-bordered table-striped">
                 <tr>
                    <td>
                            <div class="control-group">
                                                    <label class="control-label">Mode</label>
                                                    <div class="controls">
                                                        <select v-model="detail.mode" class="span" style="border:1px solid #000">
                                                            <option></option>
                                                            <option value="Budget Général">Budget Général</option>
                                                            <option value="Compte Spécial du Trésor">Compte Spécial du Trésor</option>

                                                        </select>
                                                    </div>
                                                </div>
                        </td>
                       <td colspan="2">
              <div class="control-group">
                <label class="control-label">Numéro Démande</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="detail.numero_demande"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Exercice</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000;font-size:15px"
                   :value="anneeAmort"
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
            </td>
          
                     </tr>
                      <tr>
                        <td>
              <div class="control-group">
                <label class="control-label">Ministère/Institution</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   :value="libelleSection(idSection(detail.ligne_economique_id))"
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Programme/Dotation</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   :value="libelleProgramme(idProgramme(detail.ligne_economique_id))"
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Action</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   :value="libelleAction(idAction(detail.ligne_economique_id))"
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
            </td>
             <td colspan="2">
              <div class="control-group">
                <label class="control-label">Activité</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   :value="libelleActivite(idActivite(detail.ligne_economique_id))"
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
            </td>
                     </tr>
                     <tr>
                       <td>
                                <label>Unité Administrative
                                </label>
                                <model-list-select style="border:1px solid #000"
                                                   class="wide"
                                                   :list="listeDesUa"
                                                   v-model="detail.ua_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder=""
                                >

                                </model-list-select>
                            </td>
                             <td>
                <div class="control-group">
                  <label class="control-label">Grande nature de dépense</label>
                  <div class="controls">
                    <select v-model="detail.grd_nature_id" class="span" style="border:1px solid #000">
                      <option
                        v-for="gdenature in grandes_natures"
                        :key="gdenature.id"
                        :value="gdenature.id"
                      >{{gdenature.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
               <td>
                <div class="control-group">
                  <label class="control-label">Ligne économique</label>
                  <div class="controls">
                    <select v-model="detail.ligne_economique_id" class="span" style="border:1px solid #000">
                      <option
                        v-for="ligneeco in ligneEconomique(detail.ua_id,detail.grd_nature_id)"
                        :key="ligneeco.id"
                        :value="ligneeco.economique_id"
                      >{{libelleLigneEconomique(ligneeco.economique_id)}}</option>
                    </select>
                  </div>
                </div>
              </td>
             
               <td>
                            <div class="control-group">
                                                    <label class="control-label">Type de procédure</label>
                                                    <div class="controls">
                                                        <select v-model="detail.type_procedure_id" class="span" style="border:1px solid #000">
                                                            <option></option>
                                                            <option value="Engagement par Bien de Commande">Engagement par Bien de Commande </option>
                                                            <option value="Engagement direct">Engagement direct</option>

                                                        </select>
                                                    </div>
                                                </div>
                        </td>
                     </tr>
                    
                    
          </table>
                    </div>
                  </div>
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#ENGAGEMENT" v-if="detail.mode==1">TYPE D'ENGAGEMENT DIRECT</a>
                      </li>
                       
                     
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                    <div id="ENGAGEMENT" class="tab-pane active" v-if="detail.mode==1">
                  <table class="table table-bordered table-striped">
          <tr>
             <td colspan="">
                <div class="control-group">
                  <label class="control-label">Type d'engagement</label>
                  <div class="controls">
                    <select v-model="detail.type_engagement_id" class="span" style="border:1px solid #000">
                      <option value="Marche">Marche</option>
                      <option value="Régie d'avances-reservation des crédit">Régie d'avances-reservation des crédit</option>
                      <option value="Régularisation d'ordre de paiement">Régularisation d'ordre de paiement(Op)</option>
                      <option value="Régularisation avances de trésorerie">Régularisation avances de trésorerie(AT)</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </div>
                </div>
              </td>
               <td>
              <div class="control-group">
                <label class="control-label">Réf.Engagement juridique</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="detail.ref_juridique"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">N°OP/AT</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="detail.numero_op_at"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
         
          </tr>
          <tr>
            <td colspan="3">
              <div class="control-group">
                <label class="control-label">Autre</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="detail.autre_type_engagement"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
          </tr>
           </table>
                    </div>
                  </div>
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#tab1">MODE DE PAIEMENT</a>
                      </li>
                       
                     
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                    <div id="tab1" class="tab-pane active">
                      <table class="table table-bordered table-striped">
                        <tr>
                          <td>
                         <div class="control-group">
                            <label class="control-label">Mode de paiement</label>
                            <div class="controls">
                              
                               <select v-model="detail.mode_paiement_id" class="span" style="border:1px solid #000">
                    
                     <option
                        v-for="typeFact in modepaiements"
                        :key="typeFact.id"
                        :value="typeFact.id"
                      >{{typeFact.libelle}}</option>
                  </select>
                            </div>
                          </div>
                        </td>
                          <td colspan="">
              <div class="control-group">
                <label class="control-label">Référence bancaires du fournissuer ou poste comptable assignataire</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="detail.Référence_bancaires"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
             <td colspan="">
                <div class="control-group">
                  <label class="control-label">Auteur(Bénéficiaire ou fournisseur)</label>
                  <div class="controls">
                    <select v-model="detail5.Auteur_id" class="span" style="border:1px solid #000">
                     
                      <option value="2">Fournisseur</option>
                      <option value="3">Unite administrative</option>
                      <option value="4">Autre</option>
                      
                    </select>
                  </div>
                </div>
              </td>
                        </tr>
                      </table>
                  
          
                    </div>
                  </div>
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#tab1">REFERENCE DU FOURNISSEUR OU BENEFICIAIRE</a>
                      </li>
                       
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                    <div id="tab1" class="tab-pane active">
                   <table class="table table-bordered table-striped">
                     <tr>
                       <td colspan="">
              <div class="control-group">
                <label class="control-label">Numéro CC</label>
                <div class="controls">
                 
                   <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="detail2.Numéro_cc_fournisseur"
                    class="span"
                    v-if="detail5.Auteur_id==2"
                    v-on:keyup="rechercheMembreCojo()"
                    placeholder="Saisir le numero cc"
                  />
                   <code v-if="message_mandater && detail5.Auteur_id==2" >{{message_mandater}}</code>
                   <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="detail2.numero_cc_autre1"
                    class="span"
                    v-if="detail5.Auteur_id==3"
                  />
                   <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="detail2.numero_cc_autre"
                    class="span"
                    v-if="detail5.Auteur_id==4"
                  />
                </div>
              </div>
              
            </td>
            <td colspan="2">
              <div class="control-group">
                <label class="control-label">Nom</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="detail2.numero_cc_fournisseur_nom"
                    class="span"
                    v-if="detail5.Auteur_id==2"
                    readonly
                  />
                  <!-- <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="detail2.numero_ordre"
                    class="span"
                     v-if="detail2.Auteur_id==3"
                  /> -->
                  <model-list-select style="border:1px solid #000"
                                                   class="wide"
                                                   :list="listeDesUa"
                                                   v-model="detail2.uaBeneficiaire_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder=""
                                                   v-if="detail5.Auteur_id==3"
                                >

                                </model-list-select>
                  <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="detail2.nom_autre"
                    class="span"
                     v-if="detail5.Auteur_id==4"
                  />
                </div>
              </div>
              
            </td>
            <td colspan="">
              <div class="control-group">
                <label class="control-label">Adresse</label>
                <div class="controls">
                   <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="detail2.numero_cc_fournisseur_adresse"
                    class="span"
                    v-if="detail5.Auteur_id==2"
                    readonly
                  />
                  <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="detail2.numero_cc_ua_adresse"
                    class="span"
                    v-if="detail5.Auteur_id==3"
                  />
                  <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="detail2.numero_cc_autre_adresse"
                    class="span"
                    v-if="detail5.Auteur_id==4"
                  />
                </div>
              </div>
              
            </td>
                     </tr>
                     <tr>
                      
            <td colspan="">
              <div class="control-group">
                <label class="control-label">Total général</label>
                <div class="controls">
                  <!-- <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="detail.numero_ordre"
                    class="span"
                    
                  /> -->
                  <money :value="TotalGeneralDemandeEngagement"  readOnly  style="text-align:left;color:red"  class="span"></money>
                </div>
              </div>
              
            </td>
            <td colspan="">
              <div class="control-group">
                <label class="control-label">Trésor</label>
                <div class="controls">
                  <!-- <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="detail.numero_ordre"
                    class="span"
                    
                  /> -->
                  <money v-model="detail.montant_tresor" style="text-align:left;color:red"  class="span"></money>
                </div>
              </div>
              
            </td>
             <td colspan="">
              <div class="control-group">
                <label class="control-label">Don</label>
                <div class="controls">
                  <!-- <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="detail.numero_ordre"
                    class="span"
                    
                  /> -->
                  <money v-model="detail.montant_don" style="text-align:left;color:red"  class="span"></money>
                </div>
              </div>
              
            </td>
             <td colspan="">
              <div class="control-group">
                <label class="control-label">Emprunt</label>
                <div class="controls">
                  <!-- <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="detail.numero_ordre"
                    class="span"
                    
                  /> -->
                  <money v-model="detail.montant_emprunt" style="text-align:left;color:red"  class="span"></money>
                </div>
              </div>
              
            </td>
                     </tr>
                     <tr>
                        <td colspan="3">
              <div class="control-group">
                <label class="control-label">Objet de la dépense</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="detail.objet_depense"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
            <!-- <td>
                             <div class="control-group">
                            <label class="control-label">Bailleur</label>
                            
                             <select v-model="detail.bailler_id" class="span">
                                <option
                                  v-for="fam in sources_financements"
                                  :key="fam.id"
                                  :value="fam.id"
                                >{{fam.libelle}}</option>
                              </select>
                          </div>
                        </td>  -->
                        <td>
                                <label>Bailleur
                                </label>
                                <model-list-select style="border:1px solid #000"
                                                   class="wide"
                                                   :list="sources_financements"
                                                   v-model="detail.bailler_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder=""
                                >

                                </model-list-select>
                            </td>
                     </tr>
                     <tr>
                        <td colspan="">
              <div class="control-group">
                <label class="control-label">Pièces justificatives </label>
                <div class="controls">
                  <input
                    type="file"
                    style="border:1px solid #000"
                   @change="OnchangeFichier"
                    class="span"
                    
                  />
                  <code v-if="info_pdf">Le fichier doit etre un pdf</code>
                </div>
              </div>
              
            </td>
            <td colspan="3">
               <div class="" align="right">
                   <button 
                        @click.prevent="afficherModalAjouterService"
                       class="btn  btn-success">
                <span >  <i class="icon icon-plus-sign">Ajouter Nature de la pièces</i></span>
       
                </button>

                   </div><br>
           <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     <th>Numero Ordre</th>
                    <th>Nature de la pièce</th>
                   <th>Reference</th>
                   <th>Date de la pièce</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(type) in listePieceJustificative(detail.numero_demande)" :key="type.id">
                    <td style="width:20%"
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{type.numero_ordre || 'Non renseigné'}}</td>
                    <td style="width:30%"
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{type.libelle || 'Non renseigné'}}</td>
                    <td style="width:20%"
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{type.reference || 'Non renseigné'}}</td>
                    <td style="width:15%"
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{type.date_piece || 'Non renseigné'}}</td>

                    <td  style="width:15%">
                      <button class="btn btn-danger" @click="supprimerPieceJustificative(type.id)">
                        <span>
                          <i class="icon icon-trash"> Supprimer</i>
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
             <!-- <td colspan="">
              <div class="control-group">
                <label class="control-label">Pièces justificatives (2)</label>
                <div class="controls">
                  <input
                    type="file"
                    style="border:1px solid #000"
                   
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td> -->
             <!-- <td colspan="">
              <div class="control-group">
                <label class="control-label">Pièces justificatives (3)</label>
                <div class="controls">
                  <input
                    type="file"
                    style="border:1px solid #000"
                   
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td> -->
             <!-- <td colspan="">
              <div class="control-group">
                <label class="control-label">Pièces justificatives (4)</label>
                <div class="controls">
                  <input
                    type="file"
                    style="border:1px solid #000"
                   
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td> -->
                     </tr>
                   </table>
                   
                    </div>
                  </div>

                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#tab1">IMPUTATION BUDGETAIRE</a>
                      </li>
                       
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                    <div id="tab1" class="tab-pane active">
                  
          <table class="table table-bordered table-striped">
<tr>
   <td colspan="3">
              <div class="control-group">
                <label class="control-label">Activité</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   :value="libelleActivite(idActivite(detail.ligne_economique_id))"
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
            </td>
            <td colspan="2">
              <div class="control-group">
                <label class="control-label">Ligne</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                    :value="libelleLigneEconomique(detail.ligne_economique_id)"
                    readonly
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
</tr>
 <tr>
                      
            <td colspan="">
              <div class="control-group">
                <label class="control-label">Total général</label>
                <div class="controls">
                  <!-- <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="detail.numero_ordre"
                    class="span"
                    
                  /> -->
                  <money :value="TotalGeneralDemandeEngagement"  readOnly  style="text-align:left;color:red"  class="span"></money>
                </div>
              </div>
              
            </td>
            <td colspan="">
              <div class="control-group">
                <label class="control-label">Trésor</label>
                <div class="controls">
                  <!-- <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="detail.numero_ordre"
                    class="span"
                    
                  /> -->
                   <money v-model="detail.montant_tresor" readOnly style="text-align:left;color:red"  class="span"></money>
                </div>
              </div>
              
            </td>
             <td colspan="">
              <div class="control-group">
                <label class="control-label">Don</label>
                <div class="controls">
                  <!-- <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="detail.numero_ordre"
                    class="span"
                    
                  /> -->
                   <money v-model="detail.montant_don" readOnly style="text-align:left;color:red"  class="span"></money>
                </div>
              </div>
              
            </td>
             <td colspan="2">
              <div class="control-group">
                <label class="control-label">Emprunt</label>
                <div class="controls">
                  <!-- <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="detail.numero_ordre"
                    class="span"
                    
                  /> -->
                   <money v-model="detail.montant_emprunt" readOnly style="text-align:left;color:red"  class="span"></money>
                </div>
              </div>
              
            </td>
                     </tr>
                     <tr>
                  <td colspan="">
              <div class="control-group">
                <label class="control-label" title="Situation des crédits">Situation crédits</label>
                
              </div>
              <div class="control-group">
                <label class="control-label">Crédit Autorisés</label>
                
              </div>
              <div class="control-group">
                <label class="control-label" title="Cumul des demande">Cumul</label>
                
              </div>
              <div class="control-group">
                <label class="control-label">Disponible</label>
                
              </div>
            </td>   
            <td colspan="">
              <div class="control-group">
                <label class="control-label">Total général</label>
                <div class="controls">
                  <!-- <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="detail.numero_ordre"
                    class="span"
                    
                  /> -->
                  <money :value="CreditAutorise(detail.ligne_economique_id)"  readOnly  style="text-align:left;color:red"  class="span"></money>
                  <money :value="calculCumul"  readOnly  style="text-align:left;color:red"  class="span"></money>
                  <money :value="MontantDisponible"  readOnly  style="text-align:left;color:red"  class="span"></money>

                   <!-- <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="detail.numero_ordre"
                    class="span"
                    
                  /> -->
                  <!-- <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="detail.numero_ordre"
                    class="span"
                    
                  /> -->
                </div>
              </div>
              
            </td>
            <td colspan="">
              <div class="control-group">
                <label class="control-label">Trésor</label>
                <div class="controls">
                  <!-- <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="detail.numero_ordre"
                    class="span"
                    
                  /> -->
                  <money :value="CreditAutoriseTresor(detail.ligne_economique_id)" readOnly style="text-align:left;color:red"  class="span"></money>
                  <money v-model="detail.montant_tresor"  style="text-align:left;color:red"  class="span"></money>
                  <money :value="calculCumultresor"  style="text-align:left;color:red"  class="span"></money>
                  <!-- <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="detail.numero_ordre"
                    class="span"
                    
                  />
                  <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="detail.numero_ordre"
                    class="span"
                    
                  /> -->
                </div>
              </div>
              
            </td>
             <td colspan="">
              <div class="control-group">
                <label class="control-label">Don</label>
                <div class="controls">
                  <!-- <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="detail.numero_ordre"
                    class="span"
                    
                  /> -->
                  <money :value="CreditAutoriseDon(detail.ligne_economique_id)" readOnly  style="text-align:left;color:red"  class="span"></money>
                  <money v-model="detail2.montant_don"  style="text-align:left;color:red"  class="span"></money>
                  <money v-model="detail2.montant_don3"  style="text-align:left;color:red"  class="span"></money>
                  <!-- <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="detail.numero_ordre"
                    class="span"
                    
                  />
                  <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="detail.numero_ordre"
                    class="span"
                    
                  /> -->
                </div>
              </div>
              
            </td>
             <td colspan="">
              <div class="control-group">
                <label class="control-label">Emprunt</label>
                <div class="controls">
                  <!-- <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="detail.numero_ordre"
                    class="span"
                    
                  /> -->
                  <money :value="CreditAutoriseEmprunt(detail.ligne_economique_id)" readOnly  style="text-align:left;color:red"  class="span"></money>
                  <money v-model="detail2.montant_emprunt2"  style="text-align:left;color:red"  class="span"></money>
                  <money v-model="detail2.montant_emprunt3"  style="text-align:left;color:red"  class="span"></money>
                  <!-- <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="detail.numero_ordre"
                    class="span"
                    
                  /> -->
                  <!-- <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="detail.numero_ordre"
                    class="span"
                    
                  /> -->
                </div>
              </div>
              
            </td>
             
                     </tr>
          </table>
                    </div>
                  </div>
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#tab1">LE GESTIONNAIRE DE CREDIT</a>
                      </li>
                       
                     
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                    <div id="tab1" class="tab-pane active">
                  
           <table class="table table-bordered table-striped">
<tr>
   <td colspan="">
              <div class="control-group">
                <label class="control-label">Date</label>
                <div class="controls">
                  <input
                    type="date"
                    style="border:1px solid #000"
                   v-model="detail.dateSignatureSC"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
             <td colspan="">
              <div class="control-group">
                <label class="control-label">Code GC</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="detail.dateSignatureSC"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
</tr>
<!-- <tr>
  <td>
    <div class="control-group">
                <label class="control-label">specimen de signature</label>
                <div class="controls">
                  <textarea
                    type="text"
                    style="border:1px solid #000"
                  rows="5"
                  ></textarea>
                </div>
              </div>
  </td>
</tr> -->
           </table>
                    </div>
                  </div>
<div align="right">
                    <div class="controls">
                      <div data-toggle="buttons-checkbox" class="btn-group">
                        <a
                          class="btn btn-primary"
                          @click.prevent="ajouterFonctionGroupe"
                        >Modifier</a>
                        <a
                          @click.prevent="afficherModalListePersonnel()"
                          class="btn"
                          href="#"
                        >Fermer</a>
                      </div>
                    </div>
                  </div>
                  
                  <br />
                  
                </div>
              </table>
            </div>
          </div>
        </div>
      </div>
      <notifications/>

      <div id="exampleModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter pièces justificatives</h3>
      </div>
      <div class="modal-body">
      <table class="table table-bordered table-striped">
          
          <tr>
            <td>
              <div class="control-group">
            <label class="control-label">Numéro ordre</label>
            <div class="controls">
              <input
                type="text"
               :value="numeroOrdre(detail.numero_demande)"
                class="span5"
                placeholder="Saisir le libellé"
                readonly
              />
            </div>
          </div>
            </td>
          </tr>
           <tr>
            <td>
              <div class="control-group">
            <label class="control-label">Nature de la pièce</label>
            <div class="controls">
              <input
                type="text"
                v-model="detail1.libelle"
                class="span5"
                placeholder="Saisir le libellé"
              />
            </div>
          </div>
            </td>
          </tr>
           <tr>
            <td>
              <div class="control-group">
            <label class="control-label">Reference de la pièce</label>
            <div class="controls">
              <input
                type="text"
                v-model="detail1.reference"
                class="span5"
                placeholder="Saisir la reference"
              />
            </div>
          </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="control-group">
            <label class="control-label">Date de la pièce</label>
            <div class="controls">
              <input
                type="date"
                v-model="detail1.date_piece"
                class="span5"
                
              />
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
          
          @click.prevent="AjoutePieceJustific"
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>





    <div id="ModifierexampleModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier pièces justificatives</h3>
      </div>
      <div class="modal-body">
      <table class="table table-bordered table-striped">
          
          <tr>
            <td>
              <div class="control-group">
            <label class="control-label">Numéro ordre</label>
            <div class="controls">
              <input
                type="text"
               v-model="editpiece.numero_ordre"
                class="span5"
                placeholder="Saisir le libellé"
                readonly
              />
            </div>
          </div>
            </td>
          </tr>
            <tr>
            <td>
              <div class="control-group">
            <label class="control-label">Nature de la pièce</label>
            <div class="controls">
              <input
                type="text"
                v-model="editpiece.libelle"
                class="span5"
                placeholder="Saisir le libellé"
              />
            </div>
          </div>
            </td>
          </tr>
           <tr>
            <td>
              <div class="control-group">
            <label class="control-label">Reference de la pièce</label>
            <div class="controls">
              <input
                type="text"
                v-model="editpiece.reference"
                class="span5"
                placeholder="Saisir la reference"
              />
            </div>
          </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="control-group">
            <label class="control-label">Date de la pièce</label>
            <div class="controls">
              <input
                type="date"
                v-model="editpiece.date_piece"
                class="span5"
                
              />
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
          
          @click.prevent="modifierTypeTexteLocal"
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
   
    </div>


































</template>
<script>

    import {mapGetters,mapActions} from 'vuex'
    import {admin,dcf,noDCfNoAdmin} from "@/Repositories/Auth"
    import {  ModelListSelect } from 'vue-search-select'
    import 'vue-search-select/dist/VueSearchSelect.css'
    export default {
components: {
    
     ModelListSelect,
     
  },
        data() {
            return {
                fabActions: [
                    {
                        name: 'cache',
                        icon: 'add'
                    },

                ],
                liste:[],
                
          info_pdf:false,
                detail:{
                 
                },
                
                editpiece:{},
                detail5:{
                  Auteur_id:"2"
                },
 detail1:{
                 
                },
                detail2:{
                 
                },
                message_mandater:""
            };
        },

        created() {
          
            this.detail=this.gettersDemandeEngagement.find(item=>item.id==this.$route.params.id)
            
            
        },
        computed: {
           admin:admin,
      dcf:dcf,
      noDCfNoAdmin:noDCfNoAdmin,
 ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
            ...mapGetters('personnelUA', ["salairesActeur","personnaliseActeurDepense","personnaFonction","afficheNombrePersonnelRecuActeNormination","fonctionBudgetaire","type_salaries","type_contrats","acte_personnels","type_acte_personnels","fonctions","grades","niveau_etudes",
                "nbr_acteur_actredite_taux","all_acteur_depense","personnaliseActeurFinContrat",
                "totalActeurEnctivite","totalActeurDepense","totalActeurAccredite","tauxActeurAccredite","totalActeurNonAccredite","affichePersonnelRecuActeNormination"]),
             ...mapGetters("uniteadministrative", ["budgetGeneral","fonctionsua","servicesua","directions","uniteZones","uniteAdministratives","getPersonnaliseBudgetGeneralParPersonnel"]),
            // ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires"]),
            ...mapGetters("parametreGenerauxBudgetaire", ["plans_budgetaires"]),
 ...mapGetters("SuiviImmobilisation", ["services"]),

...mapGetters("bienService", ["gettersDossierMandat","gettersDemandeEngagement","gettersnomPieceJustificative","modepaiements","gettersCotationPersonnaliser","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots","villes","communes","pays","modePassations", "procedurePassations","getterDossierCandidats","marches","gettersPersonnaliserRapportJugement",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","selectionner_candidats",
                "getActeEffetFinancierPersonnaliserContrat", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
 ...mapGetters("gestionMarche", [ 'groupeVille','entreprises','banques','comptes','getCompte', 'getEntreptise','getPersonnaliseAgence','agenceBanques']),
   ...mapGetters('parametreGenerauxFonctionnelle', ['structureActe','planActe']),
...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
   ...mapGetters("parametreGenerauxAdministratif", [
      
      "sections",
      "type_Unite_admins",
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "afficheNiveauPlanProg",
      "exercices_budgetaires",
      "afficheLocalisationGeoNiveau5"
    ]),
      ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements']),
calculCumultresor() { 
      const val = parseFloat(this.CreditAutoriseTresor(this.detail.ligne_economique_id)) - parseFloat(this.detail.montant_tresor) ;
      return parseFloat(val).toFixed(0);
      
    },

 calculCumul() { 
      const val = parseFloat(this.TotalGeneralDemandeEngagement) + parseFloat(this.CumulDemande(this.detail.ligne_economique_id)) ;
      return parseFloat(val).toFixed(0);
      
    },

      MontantDisponible() { 
      const val = parseFloat(this.CreditAutorise(this.detail.ligne_economique_id)) - parseFloat(this.calculCumul) ;
      return parseFloat(val).toFixed(0);
      
    },
CumulDemande: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.gettersDemandeEngagement.filter(normeEquipe => normeEquipe.ligne_economique_id == id).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.total_general)
                        },valInite);
                    }
                }
            },
      CreditAutorise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.economique_id == id && qtreel.actived==1);

      if (qtereel) {
       
           return qtereel.Dotation_Initiale;
      }
      return ""
        }
      };
    },
    CreditAutoriseTresor() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.economique_id == id && qtreel.actived==1 && qtreel.typefinancement_id==14);

      if (qtereel) {
       
           return qtereel.Dotation_Initiale;
      }
      return 0
        }
      };
    },
    CreditAutoriseDon() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.economique_id == id && qtreel.actived==1 && qtreel.typefinancement_id==13);

      if (qtereel) {
       
           return qtereel.Dotation_Initiale;
      }
      return 0
        }
      };
    },
    CreditAutoriseEmprunt() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.economique_id == id && qtreel.actived==1 && qtreel.typefinancement_id==15);

      if (qtereel) {
       
           return qtereel.Dotation_Initiale;
      }
      return 0
        }
      };
    },
    anneeAmort() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },
    libelleAction() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_activites.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code
      }
      return 0
        }
      };
    },
    libelleActivite() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_activites.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat('  ',qtereel.libelle)
      }
      return 0
        }
      };
    },
     libelleProgramme() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_programmes.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat('  ',qtereel.libelle)
      }
      return 0
        }
      };
    },
    libelleSection() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sections.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code_section.concat('  ',qtereel.nom_section)
      }
      return 0
        }
      };
    },
libelleLigneEconomique() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_budgetaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat('  ',qtereel.libelle)
      }
      return 0
        }
      };
    },
    idSection() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.economique_id == id);

      if (qtereel) {
        return qtereel.section_id
      }
      return 0
        }
      };
    },
    idProgramme() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.economique_id == id);

      if (qtereel) {
        return qtereel.program_id
      }
      return 0
        }
      };
    },
    idActivite() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.economique_id == id);

      if (qtereel) {
        return qtereel.activite_id
      }
      return 0
        }
      };
    },
    idAction() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.economique_id == id);

      if (qtereel) {
        return qtereel.action_id
      }
      return 0
        }
      };
    },
    libelleUniteAdministrative() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },
listeDesUa() {
      


        if (this.noDCfNoAdmin){
            let colect=[];
            this.uniteAdministratives.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
                
            })
            return colect
        }

return this.uniteAdministratives

       

    },
     TotalGeneralDemandeEngagement() { 
      const val = parseFloat(this.detail.montant_tresor) + parseFloat(this.detail.montant_don) + parseFloat(this.detail.montant_emprunt);
      return parseFloat(val).toFixed(0);
      
    },
    ligneEconomique() {
      return (id,id2) => {
        if (id != null && id != "" && id2 != null && id2 != "") {
           return this.budgetGeneral.filter(qtreel => qtreel.ua_id == id && qtreel.gdenature_id == id2 && qtreel.actived==1);

      
        }
      };
    },
    numeroOrdre() {
      return id => {
        if (id != null && id != "") {
           return this.gettersnomPieceJustificative.filter(qtreel => qtreel.numero_demande_engagement == id).length + 1 ;

      
        }
      };
    },

    listePieceJustificative() {
      return id => {
        if (id != null && id != "") {
           return this.gettersnomPieceJustificative.filter(qtreel => qtreel.numero_demande_engagement == id);

      
        }
      };
    },
    idMandat() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDossierMandat.find(qtreel => qtreel.demande_engagement_id == id);

      if (qtereel) {
        return qtereel.id
      }
      return 0
        }
      };
    },
        },

methods: {
    ...mapActions("bienService", [
      "ajouterPieceJustificative",
      "modifierPieceJustificative",
      "supprimerPieceJustificative",
      "modifierDemandeEngagement",
      "modifierDossierMandat"
     
    ]),
      ...mapActions('personnelUA', ["ajouterFichierJointDmd","modifieFichierJointDmd"]),

afficherModalListePersonnel(){
                this.$router.push({ name: 'ListeUaExecutionBudgetaire' })
            },


      
   OnchangeFichier(e) {
                const files = e.target.files;
                this.selectedFile = event.target.files[0];
                Array.from(files).forEach(file => this.addFichierPDF(file));
            },
            addFichierPDF(file) {
                if (!file.type.match("application/pdf")) {
                    this.info_pdf=true;
                    console.log(`${file.name} le fichier doit etre un PDF`);
                    return;
                }
                this.info_pdf=false;
                let reader = new FileReader();
                let vm = this;
                reader.onload = e => {
                    vm.imagePDF = "pdf.png";
                    vm.namePDF = file.name;
                    vm.fichierPDF = e.target.result;
                };
                reader.readAsDataURL(file);
            },
    afficherModalModifierTypeTexte(id) {
      this.$("#ModifierexampleModal").modal({
        backdrop: "static",
        keyboard: false
      });

     
      this.editpiece = this.gettersnomPieceJustificative.find(item=>item.id==id);
    },
    // fonction pour vider l'input modification
    modifierTypeTexteLocal() {
      this.modifierPieceJustificative(this.editpiece);
this.$("#ModifierexampleModal").modal('hide');
      // this.editTypeTexte = {
      //   code: "",
      //   libelle: ""
      // };
       
    },
    AjoutePieceJustific() {
      this.intitule=this.anneeAmort + "" + this.detail.numero_demande
      var nouvelObjet = {
        
        	numero_ordre:this.numeroOrdre(this.detail.numero_demande),
      numero_demande_engagement:this.detail.numero_demande,
      numero_dmd_combine:this.intitule,
      libelle:this.detail1.libelle,
      reference:this.detail1.reference,
      date_piece:this.detail1.date_piece
      };
    
      this.ajouterPieceJustificative(nouvelObjet)
      
   this.$('#exampleModal').modal('hide');
       this.detail1 = {
        
        libelle: ""
      };
    },
rechercheMembreCojo(){
      // console.log(this.formMandater.matricule_m)

      let objetMandater=this.entreprises.filter(item=>item.numero_cc==this.detail2.Numéro_cc_fournisseur)
      // console.log(objetMandater)
      if(objetMandater!=undefined){
        if (objetMandater.length==1){
          let acteur= this.entreprises.find(item=>item.numero_cc==this.detail2.Numéro_cc_fournisseur)
          this.detail2.numero_cc_fournisseur_nom=acteur.raison_sociale,
          this.detail2.numero_cc_fournisseur_adresse=acteur.adresse,
         this.detail2.entrprise_id=acteur.id,
          this.message_mandater=" "

        }
        else{
          this.message_mandater="Ce Numero cc  n'existe pas dans notre base de donnée "
          this.detail2.numero_cc_fournisseur_nom=""
        }
      }
      if(this.detail2.Numéro_cc_fournisseur==""){
        this.detail2.numero_cc_fournisseur_nom=""
        this.message_mandater=" "
      }
    },





    ajouterFichierJoin () {
                const detail = new detail();
                this.intitule=this.anneeAmort + "" + this.detail.numero_demande
                detail.append('fichier', this.selectedFile, this.selectedFile.name);
    
    detail.append('numero_dmd_combine', this.intitule);
                detail.append('numero_demande_engagement', this.detail.numero_demande);
                 
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
                this.ajouterFichierJointDmd(detail,config)
                
               

            },


AjouterDemandeEngagement() {
  this.intitule=this.anneeAmort + "" + this.detail.numero_demande
      if(this.detail5.Auteur_id == 2){
        
var nouvelObjet1 = {
        ...this.detail,
        numero_dmd_combine:this.intitule,
        	programme_id:this.idProgramme(this.detail.ligne_economique_id),
     action_id:this.idAction(this.detail.ligne_economique_id),
     	activite_id:this.idActivite(this.detail.ligne_economique_id),
     	nom_autre:this.detail2.numero_cc_fournisseur_nom,
     total_general:this.TotalGeneralDemandeEngagement,
    exercice:this.anneeAmort,
    section_id:this.idSection(this.detail.ligne_economique_id),
    uaBeneficiaire_id:this.detail.uaBeneficiaire_id,
    	entreprise_id:this.detail2.entrprise_id
      };
    var nouvelObjet7 = {
        
        id:this.idMandat(this.detail.id),
    	montant_engage:this.TotalGeneralDemandeEngagement
      };
      this.modifierDemandeEngagement(nouvelObjet1)
      this.modifierDossierMandat(nouvelObjet7)
      }
      else if(this.detail5.Auteur_id == 3){
        
var nouvelObjet2 = {
        ...this.detail,
        numero_dmd_combine:this.intitule,
        	programme_id:this.idProgramme(this.detail.ligne_economique_id),
     action_id:this.idAction(this.detail.ligne_economique_id),
     	activite_id:this.idActivite(this.detail.ligne_economique_id),
     	nom_autre:this.libelleUniteAdministrative(this.detail2.uaBeneficiaire_id),
     total_general:this.TotalGeneralDemandeEngagement,
    exercice:this.anneeAmort,
    section_id:this.idSection(this.detail.ligne_economique_id),
    uaBeneficiaire_id:this.detail.uaBeneficiaire_id,
    	entreprise_id:this.detail2.entrprise_id
      };
    
       var nouvelObjet8 = {
        
        id:this.idMandat(this.detail.id),
    	montant_engage:this.TotalGeneralDemandeEngagement
      };
      this.modifierDemandeEngagement(nouvelObjet2)
      this.modifierDossierMandat(nouvelObjet8)
      }
      else if(this.detail5.Auteur_id == 4){
        
var nouvelObjet3 = {
        ...this.detail,
        numero_dmd_combine:this.intitule,
        	programme_id:this.idProgramme(this.detail.ligne_economique_id),
     action_id:this.idAction(this.detail.ligne_economique_id),
     	activite_id:this.idActivite(this.detail.ligne_economique_id),
     	nom_autre:this.detail2.nom_autre,
       adresse:this.detail2.numero_cc_autre_adresse,
       numero_cc_autre:this.detail2.numero_cc_autre,
     total_general:this.TotalGeneralDemandeEngagement,
    exercice:this.anneeAmort,
    section_id:this.idSection(this.detail.ligne_economique_id),
    uaBeneficiaire_id:this.detail.uaBeneficiaire_id,
    	entreprise_id:this.detail2.entrprise_id
      };
    
     var nouvelObjet9 = {
        
        id:this.idMandat(this.detail.id),
    	montant_engage:this.TotalGeneralDemandeEngagement
      };
      this.modifierDemandeEngagement(nouvelObjet3)
      this.modifierDossierMandat(nouvelObjet9)
      }
    },
    
ajouterFonctionGroupe(){
   this.ajouterFichierJoin()
  this.AjouterDemandeEngagement()
  this.detail={
mode:"",
numero_demande:"",
ligne_economique_id:"",
ua_id:"",
grd_nature_id:"",
type_procedure_id:"",
autre_type_engagement:"",
numero_op_at:"",
ref_juridique:"",
type_engagement_id:"",
Référence_bancaires:"",
mode_paiement_id:"",
montant_don:"",
montant_emprunt:"",
montant_tresor:""
  }
  this.detail2={
    Numéro_cc_fournisseur:"",
    numero_cc_autre1:"",
    numero_cc_autre:""
  }
 
},



      afficherModalAjouterService() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
}


    };
</script>

