numeroOrdre
<template>

<div class="container-fluid">
      <hr />
      <div  align="left" style="cursor:pointer;">
    <button class="btn btn-danger" @click.prevent="pagePrecedent">Page Précédente</button>
    
        </div> 
      <div class="row-fluid">
        <div class="span12">
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Ajouter Demande d'engagement</h5>
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
                                                        <select v-model="formData.mode" class="span" style="border:1px solid #000">
                                                            <option></option>
                                                            <option value="Budget Général">Budget Général</option>
                                                            <option value="Compte Spécial du Trésor">Compte Spécial du Trésor</option>

                                                        </select>
                                                    </div>
                                                </div>
                        </td>
                       <td colspan="2">
              <div class="control-group">
                <label class="control-label">Numéro Démande <code style="color:red;font-size:16px">*</code></label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData.numero_demande"
                    class="span"
                    
                  />
                  <code style="color:red;font-size:12px" v-if="formData.numero_demande==''">Veuillez renseigner ce champ</code>

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
                   :value="libelleSection(idSection(formData.ligne_economique_id))"
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
                   :value="libelleProgramme(idProgramme(formData.ligne_economique_id))"
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
                   :value="libelleAction(idAction(formData.ligne_economique_id))"
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
                   :value="libelleActivite(idActivite(formData.ligne_economique_id))"
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
            </td>
                     </tr>
                     <tr>
                       <td>
                                <label>Unité Administrative <code style="color:red;font-size:16px">*</code>
                                </label>
                                <model-list-select style="border:1px solid #000"
                                                   class="wide"
                                                   :list="listeDesUa"
                                                   v-model="formData.ua_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder=""
                                >

                                </model-list-select>
                                 <code style="color:red;font-size:12px" v-if="formData.ua_id==''">Veuillez renseigner ce champ</code>
                            </td>
                           
                             <td>
                <div class="control-group">
                  <label class="control-label">Grande nature de dépense <code style="color:red;font-size:16px">*</code></label>
                  <div class="controls">
                    <select v-model="formData.grd_nature_id" class="span" style="border:1px solid #000">
                      <option
                        v-for="gdenature in grandes_natures"
                        :key="gdenature.id"
                        :value="gdenature.id"
                      >{{gdenature.libelle}}</option>
                    </select>
                     <code style="color:red;font-size:12px" v-if="formData.grd_nature_id==''">Veuillez renseigner ce champ</code>
                  </div>
                </div>
              </td>
               <td>
                <div class="control-group">
                  <label class="control-label">Ligne économique <code style="color:red;font-size:16px">*</code></label>
                  <div class="controls">
                    <select v-model="formData.ligne_economique_id" class="span" style="border:1px solid #000">
                      <option
                        v-for="ligneeco in ligneEconomique(formData.ua_id,formData.grd_nature_id)"
                        :key="ligneeco.id"
                        :value="ligneeco.economique_id"
                      >{{libelleLigneEconomique(ligneeco.economique_id)}}</option>
                    </select>
                    <code style="color:red;font-size:12px" v-if="formData.ligne_economique_id==''">Veuillez renseigner ce champ</code>
                  </div>
                </div>
              </td>
               <td>
                            <div class="control-group">
                                                    <label class="control-label">Type de procédure <code style="color:red;font-size:16px">*</code></label>
                                                    <div class="controls">
                                                        <select v-model="formData.type_procedure_id" class="span" style="border:1px solid #000">
                                                            <option></option>
                                                            <option value="Engagement par Bon de Commande">Engagement par Bon de Commande </option>
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
                        <a data-toggle="tab" href="#ENGAGEMENT">TYPE D'ENGAGEMENT</a>
                      </li>
                       
                     
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                    <div id="ENGAGEMENT" class="tab-pane active">
                  <table class="table table-bordered table-striped">
          <tr>
             <td colspan="">
                <div class="control-group">
                  <label class="control-label">Type d'engagement</label>
                  <div class="controls">
                    <select v-model="formData.type_engagement_id" class="span" style="border:1px solid #000">
                      <option value=""></option>
                      <option value="Marche">Marche</option>
                      <option value="Régie davances-reservation des crédit">Régie d'avances-reservation des crédit</option>
                      <option value="Régularisation d'ordre de paiement">Régularisation d'ordre de paiement(Op)</option>
                      <option value="Régularisation avances de trésorerie">Régularisation avances de trésorerie(AT)</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </div>
                </div>
              </td>
              
          <td colspan="">
                <div class="control-group">
                  <label class="control-label">Numéro du Marché{{cumulMarche(formData2.numero_marche)}}</label>
                  <div class="controls">
                   
                     <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData2.numero_marche"
                    class="span"
                   
                    v-on:keyup="rechercheListeMarche()"
                    placeholder=""
                  />
                  </div>
                </div>
              </td>
          <td>
              <div class="control-group">
                <label class="control-label">Unité administrative</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   :value="libelleUa(formData2.ua)"
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
            </td>   
               
             
         
          </tr>
          <tr>
            <td colspan="2">
              <div class="control-group">
                <label class="control-label">Objet de marché</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   :value="libelleMarche(formData2.objet_marche)"
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
            </td>
           <td colspan="">
              <div class="control-group">
                <label class="control-label">Montant du marché</label>
                <div class="controls">
                  <!-- <input
                    type="text"
                    style="border:1px solid #000"
                   :value="formData2.montant_marché"
                    class="span"
                    readonly
                  /> -->
                  <money v-model="formData2.montant_marché" readOnly  style="text-align:left;color:red"  class="span"></money>
                </div>
              </div>
              
            </td>
          </tr>
          <tr>
            <td>
              <div class="control-group">
                <label class="control-label">Réf.Engagement juridique</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData.ref_juridique"
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
                   v-model="formData.numero_op_at"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
            <td colspan="">
              <div class="control-group">
                <label class="control-label">Autre</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData.autre_type_engagement"
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
                              
                               <select v-model="formData.mode_paiement_id" class="span" style="border:1px solid #000">
                    
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
                   v-model="formData.Référence_bancaires"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
             <td colspan="">
                <div class="control-group">
                  <label class="control-label">Auteur(Bénéficiaire ou fournisseur)</label>
                  <div class="controls">
                    <select v-model="formData5.Auteur_id" class="span" style="border:1px solid #000">
                     
                      <option value="2">Fournisseur</option>
                      <option value="3">Unite administrative</option>
                      <option value="5">Personnel</option>
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
                   :value=" Numero_CC(formData2.Numéro_cc_fournisseur)"
                    class="span"
                    v-if="formData5.Auteur_id==2"
                 readonly
                    placeholder="Saisir le numero cc"
                  />
                   
                   <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData2.numero_cc_autre1"
                    class="span"
                    v-if="formData5.Auteur_id==3"
                  />
                   <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData2.numero_cc_autre"
                    class="span"
                    v-if="formData5.Auteur_id==4"
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
                   :value="Numero_Nom_Entreprise(formData2.numero_cc_fournisseur_nom)"
                    class="span"
                    v-if="formData5.Auteur_id==2"
                    readonly
                  />
                  <!-- <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData2.numero_ordre"
                    class="span"
                     v-if="formData2.Auteur_id==3"
                  /> -->
                  <model-list-select style="border:1px solid #000"
                                                   class="wide"
                                                   :list="listeDesUa"
                                                   v-model="formData2.uaBeneficiaire_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder=""
                                                   v-if="formData5.Auteur_id==3"
                                >

                                </model-list-select>
                  <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData2.nom_autre"
                    class="span"
                     v-if="formData5.Auteur_id==4"
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
                   :value="Numero_adresse_Entreprise(formData2.numero_cc_fournisseur_adresse)"
                    class="span"
                    v-if="formData5.Auteur_id==2"
                    readonly
                  />
                  <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData2.numero_cc_ua_adresse"
                    class="span"
                    v-if="formData5.Auteur_id==3"
                  />
                  <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData2.numero_cc_autre_adresse"
                    class="span"
                    v-if="formData5.Auteur_id==4"
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
                   v-model="formData.numero_ordre"
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
                   v-model="formData.numero_ordre"
                    class="span"
                    
                  /> -->
                  <money v-model="formData.montant_tresor" style="text-align:left;color:red"  class="span"></money>
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
                   v-model="formData.numero_ordre"
                    class="span"
                    
                  /> -->
                  <money v-model="formData.montant_don" style="text-align:left;color:red"  class="span"></money>
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
                   v-model="formData.numero_ordre"
                    class="span"
                    
                  /> -->
                  <money v-model="formData.montant_emprunt" style="text-align:left;color:red"  class="span"></money>
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
                   v-model="formData.objet_depense"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
            <!-- <td>
                             <div class="control-group">
                            <label class="control-label">Bailleur</label>
                            
                             <select v-model="formData.bailler_id" class="span">
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
                                                   v-model="formData.bailler_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder=""
                                >

                                </model-list-select>
                            </td>
                     </tr>
                     <tr>
                        <!-- <td colspan="">
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
              
            </td> -->
            <td colspan="4">
               <div class="" align="right">
                   <button  
                        @click.prevent="afficherModalAjouterService"
                       class="btn  btn-success">
                <span style="font-size:14px;font-weight:bold">  <i class="icon icon-plus-sign" >Ajouter Nature de la pièces</i></span>
       
                </button>

                   </div><br>
           <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     <th style="font-size:14px;font-weight:bold">Numero Ordre</th>
                    <th style="font-size:14px;font-weight:bold">Nature de la pièce</th>
                   <th style="font-size:14px;font-weight:bold">Reference</th>
                   <th style="font-size:14px;font-weight:bold">Date de la pièce</th>
                   <th style="font-size:14px;font-weight:bold">Fichier joint</th>
                    <th style="font-size:14px;font-weight:bold">Action</th>
                  </tr>
                </thead>
                <tbody v-if="this.formData.type_procedure_id=='Engagement par Bon de Commande'">
                  <tr class="odd gradeX" v-for="(type) in listePieceJustificative(formData.numero_demande)" :key="type.id">
                    <td style="width:20%"
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{type.numero_ordre || 'Non renseigné'}}</td>
                    <td style="width:30%"
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{listePieceJustifica(type.libelle) || 'Non renseigné'}}</td>
                    <td style="width:20%"
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{type.reference || 'Non renseigné'}}</td>
                    <td style="width:15%"
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{formaterDate(type.date_piece) || 'Non renseigné'}}</td>
<td>
  <a v-if="afficheFichierJoint(type.numero_demande_engagement,type.numero_ordre)" :href="afficheFichierJoint(type.numero_demande_engagement,type.numero_ordre)" class="btn btn-default" target="_blank">
                                <span class=""><i class="icon-book"></i>
                                </span>
                            </a>
</td>
                    <td  style="width:15%">
                      <button class="btn btn-danger" @click="supprimerPieceJustificative(type.id)">
                        <span>
                          <i class="icon icon-trash"> Supprimer</i>
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
                <tbody v-if="this.formData.type_procedure_id=='Engagement direct'">
                  <tr class="odd gradeX" v-for="(type) in listePieceJustificativeDefinitive(formData.numero_demande)" :key="type.id">
                    <td style="width:20%"
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{type.numero_ordre || 'Non renseigné'}}</td>
                    <td style="width:30%"
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{listePieceJustifica(type.libelle) || 'Non renseigné'}}</td>
                    <td style="width:20%"
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{type.reference || 'Non renseigné'}}</td>
                    <td style="width:15%"
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{formaterDate(type.date_piece) || 'Non renseigné'}}</td>
<td>
  <a v-if="afficheFichierJoint(type.numero_demande_engagement,type.numero_ordre)" :href="afficheFichierJoint(type.numero_demande_engagement,type.numero_ordre)" class="btn btn-default" target="_blank">
                                <span class=""><i class="icon-book"></i>
                                </span>
                            </a>
</td>
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
                   :value="libelleActivite(idActivite(formData.ligne_economique_id))"
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
                    :value="libelleLigneEconomique(formData.ligne_economique_id)"
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
                   v-model="formData.numero_ordre"
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
                   v-model="formData.numero_ordre"
                    class="span"
                    
                  /> -->
                   <money v-model="formData.montant_tresor" readOnly style="text-align:left;color:red"  class="span"></money>
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
                   v-model="formData.numero_ordre"
                    class="span"
                    
                  /> -->
                   <money v-model="formData.montant_don" readOnly style="text-align:left;color:red"  class="span"></money>
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
                   v-model="formData.numero_ordre"
                    class="span"
                    
                  /> -->
                   <money v-model="formData.montant_emprunt" readOnly style="text-align:left;color:red"  class="span"></money>
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
                   v-model="formData.numero_ordre"
                    class="span"
                    
                  /> -->
                  <money :value="CreditAutorise(formData.ligne_economique_id)"  readOnly  style="text-align:left;color:red"  class="span"></money>
                  <money :value="calculCumul"  readOnly  style="text-align:left;color:red"  class="span"></money>
                  <money :value="MontantDisponible"  readOnly  style="text-align:left;color:red"  class="span"></money>

                   <!-- <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData.numero_ordre"
                    class="span"
                    
                  /> -->
                  <!-- <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData.numero_ordre"
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
                   v-model="formData.numero_ordre"
                    class="span"
                    
                  /> -->
                  <money :value="CreditAutoriseTresor(formData.ligne_economique_id)" readOnly style="text-align:left;color:red"  class="span"></money>
                  <money v-model="formData.montant_tresor"  style="text-align:left;color:red"  class="span"></money>
                  <money :value="calculCumultresor"  style="text-align:left;color:red"  class="span"></money>
                  <!-- <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData.numero_ordre"
                    class="span"
                    
                  />
                  <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData.numero_ordre"
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
                   v-model="formData.numero_ordre"
                    class="span"
                    
                  /> -->
                  <money :value="CreditAutoriseDon(formData.ligne_economique_id)" readOnly  style="text-align:left;color:red"  class="span"></money>
                  <money v-model="formData2.montant_don"  style="text-align:left;color:red"  class="span"></money>
                  <money v-model="formData2.montant_don3"  style="text-align:left;color:red"  class="span"></money>
                  <!-- <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData.numero_ordre"
                    class="span"
                    
                  />
                  <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData.numero_ordre"
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
                   v-model="formData.numero_ordre"
                    class="span"
                    
                  /> -->
                  <money :value="CreditAutoriseEmprunt(formData.ligne_economique_id)" readOnly  style="text-align:left;color:red"  class="span"></money>
                  <money v-model="formData2.montant_emprunt2"  style="text-align:left;color:red"  class="span"></money>
                  <money v-model="formData2.montant_emprunt3"  style="text-align:left;color:red"  class="span"></money>
                  <!-- <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData.numero_ordre"
                    class="span"
                    
                  /> -->
                  <!-- <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData.numero_ordre"
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
                   v-model="formData.dateSignatureSC"
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
                   v-model="formData.codeSignatureSC"
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
                          @click.prevent="ajouterFonctionGroupe" v-if="formData.numero_demande!='' && formData.ua_id!='' && formData.grd_nature_id!='' && formData.ligne_economique_id!=''"
                        >Valider</a>
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

      <div id="exampleModal" class="modal hide taille">
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
              <input v-if="(formData.type_procedure_id=='Engagement par Bon de Commande')"
                type="text"
               :value="numeroOrdre(formData.numero_demande)"
                class="span5"
                placeholder="Saisir le libellé"
                readonly
              />
              <input v-if="(formData.type_procedure_id=='Engagement direct')"
                type="text"
               :value="numeroOrdreDefinitive(formData.numero_demande)"
                class="span5"
                placeholder="Saisir le libellé"
                readonly
              />
            </div>
          </div>
            </td>
            <td>
              <div class="control-group">
                                                    <label class="control-label">Nature de la pièce <code style="color:red;font-size:16px">*</code></label>
                                                    <div class="controls">
                                                        <select v-model="formData1.libelle" class="span5" style="border:1px solid #000">
                                                            <option></option>
                                                            <option
                        v-for="typeFact in typeFactures"
                        :key="typeFact.id"
                        :value="typeFact.id"
                      >{{typeFact.libelle}}</option>
                                                        </select>
                                                        <code style="color:red;font-size:12px" v-if="formData1.libelle.length>0">Veuillez renseigner ce champ</code>
                                                    </div>
                                                </div>
              
            </td>
            <td>
              <div class="control-group">
            <label class="control-label">Reference de la pièce <code style="color:red;font-size:16px">*</code></label>
            <div class="controls">
              <input
                type="text"
                v-model="formData1.reference"
                class="span5"
                placeholder="Saisir la reference"
              />
              <code style="color:red;font-size:12px" v-if="formData1.reference==''">Veuillez renseigner ce champ</code>
            </div>
          </div>
            </td>
           
          </tr>
          <tr>
             <td>
              <div class="control-group">
            <label class="control-label">Date de la pièce <code style="color:red;font-size:16px">*</code></label>
            <div class="controls">
              <input
                type="date"
                v-model="formData1.date_piece"
                class="span5"
                
              />
               <code style="color:red;font-size:12px" v-if="formData1.date_piece==''">Veuillez renseigner ce champ</code>
            </div>
          </div>
            </td>
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
            <td>
                <div class="control-group">
                <label class="control-label">Exonéré</label>
                <div class="controls">
                  <select v-model="formData9.exonere" class="span5">
                  
                    <option value="0">Oui</option>
                     <option value="1">Non</option>
                  </select>
                
                </div>
              </div>
              </td>
          </tr>
           
         
      </table>
       
      </div>    
 
  <div>
    <div class="modal-footer">
      <a
                          class="btn btn-primary"
                          @click.prevent="AjoutePieceJustific" v-if="formData1.reference !='' && formData1.date_piece !=''"
                        >Valider</a>
        
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
        <div align="left">

      <button class="btn btn-info"  @click.prevent="apercuFacture">Aperçu de la facture</button>


                            </div>

   <table class="table table-bordered table-striped" >
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#BONCOMMANDE" v-if="formData1.libelle == 8 && formData.type_procedure_id=='Engagement par Bon de Commande'">  Facture Proforma</a>
                      </li>
                      <li class="active">
                        <a data-toggle="tab" href="#FACTUREDEFINITIVE" v-if="formData1.libelle == 1 && formData.type_procedure_id=='Engagement direct'">  Facture Definitive</a>
                      </li>
                      
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                    <div id="FACTUREDEFINITIVE" class="tab-pane active">

<div class="widget-content nopadding">
                      <div class="" align="right" v-if="formData1.libelle == 1 && formData.type_procedure_id=='Engagement direct'">
                   <button 
                        @click.prevent="afficherModalAjouterFacture"
                       class="btn  btn-success">
                <span >  <i class="icon icon-plus-sign">Ajouter Facture</i></span>
       
                </button>
                

                   </div>
                      <div id="printMe">
              <table class="table table-bordered table-striped" v-if="formData1.libelle == 1 && formData.type_procedure_id=='Engagement direct'">
                <thead>
                  <tr>
                    <th>Designation</th>
                    <th>Quantité</th>
                    <th>Prix unitaire</th>
                     <th>Total</th>
                   <th style="width:10px">Supprimer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(type, index) in listeFacturePiece(formData.numero_demande)" :key="type.id">
                    <td 
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{type.designation || 'Non renseigné'}}</td>
                    <td style="text-align:center;font-weight:bold;"
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{type.quantite || 'Non renseigné'}}</td>
                    <td style="text-align:center;font-weight:bold;"
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{formatageSomme(parseFloat(type.prix_unitaire)) || 'Non renseigné'}}</td>
<td style="text-align:center;font-weight:bold;"
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{formatageSomme(parseFloat(type.total_facture_ht)) || 'Non renseigné'}}</td>
                    <td>
                      <button class="btn btn-danger" @click="supprimerDossierFacture(type.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">Montant Ht</td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">{{formatageSomme(parseFloat(SommeDesDmdParBonCommande(formData.numero_demande)))}}</td>
                 <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">Taux</td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">{{afficherEnorere}}</td>
                  <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">Tva</td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">{{formatageSomme(parseFloat(parseFloat((SommeDesDmdParBonCommande(formData.numero_demande)))*afficherEnorere))}} </td>
                  <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">Montant Ttc</td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">{{formatageSomme(parseFloat(parseFloat((SommeDesDmdParBonCommande(formData.numero_demande)))+parseFloat((SommeDesDmdParBonCommande(formData.numero_demande)*afficherEnorere))))}} </td>
                  <td></td>
                  </tr>
                </tbody>
              </table>
                   </div>
                    </div>
                    </div>
                    <div id="BONCOMMANDE" class="tab-pane active">
                  <div class="widget-content nopadding">
                      <div class="" align="right" v-if="formData1.libelle == 8 && formData.type_procedure_id=='Engagement par Bon de Commande'">
                   <button 
                        @click.prevent="afficherModalAjouterFacture"
                       class="btn  btn-success">
                <span >  <i class="icon icon-plus-sign">Ajouter Facture</i></span>
       
                </button>
                

                   </div>
                   <div id="printMe">
              <table class="table table-bordered table-striped" v-if="formData1.libelle == 8 && formData.type_procedure_id=='Engagement par Bon de Commande'">
                <thead>
                  <tr>
                    <th>Designation</th>
                    <th>Quantité</th>
                    <th>Prix unitaire</th>
                     <th>Total</th>
                   <th style="width:10px">Supprimer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(type, index) in listeFacturePiece(formData.numero_demande)" :key="type.id">
                    <td 
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{type.designation || 'Non renseigné'}}</td>
                    <td style="text-align:center;font-weight:bold;"
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{type.quantite || 'Non renseigné'}}</td>
                    <td style="text-align:center;font-weight:bold;"
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{formatageSomme(parseFloat(type.prix_unitaire)) || 'Non renseigné'}}</td>
<td style="text-align:center;font-weight:bold;"
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{formatageSomme(parseFloat(type.total_facture_ht)) || 'Non renseigné'}}</td>
                    <td>
                      <button class="btn btn-danger" @click="supprimerDossierFacture(type.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">Montant Ht</td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">{{formatageSomme(parseFloat(SommeDesDmdParBonCommande(formData.numero_demande)))}}</td>
                 <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">Taux</td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">{{afficherEnorere}}</td>
                  <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">Tva</td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">{{formatageSomme(parseFloat(parseFloat((SommeDesDmdParBonCommande(formData.numero_demande)))*afficherEnorere))}} </td>
                  <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">Montant Ttc</td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">{{formatageSomme(parseFloat(parseFloat((SommeDesDmdParBonCommande(formData.numero_demande)))+parseFloat((SommeDesDmdParBonCommande(formData.numero_demande)*afficherEnorere))))}} </td>
                  <td></td>
                  </tr>
                </tbody>
              </table>
                   </div>
              </div>
                    </div>
               
                    
                 

                      
                      
      </div>
         


       </div>
     
              </table>
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
   






   <div id="exampleModal1" class="modal hide tailles">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Facture</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
             <td colspan="3">
              <div class="control-group">
            <label class="control-label">Désignation</label>
            <div class="controls">
              <input
                type="text"
                v-model="FormDataFacture.designation"
                class="span12"
                
              />
            </div>
          </div>
            </td>
          </tr>
           <tr>
           
            <td>
              <div class="control-group">
            <label class="control-label">Quantite</label>
            <div class="controls">
              <input
                type="number"
                v-model="FormDataFacture.quantite"
                class="span4"
                
              />
            </div>
          </div>
            </td>
            <td>
              <div class="control-group">
            <label class="control-label">Prix Unitaire</label>
            <div class="controls">
              <!-- <input
                type="number"
                v-model="FormDataFacture.prix_unitaire"
                class="span4"
                
              /> -->
              <money v-model="FormDataFacture.prix_unitaire"  style="text-align:left;color:red"  class="span4"></money>
            </div>
          </div>
            </td>
            <td>
              <div class="control-group">
            <label class="control-label">Total</label>
            <div class="controls">
              <!-- <input
                type="text"
                :value="MontantFactureHt"
                class="span4"
                readonly
              /> -->
               <money :value="MontantFactureHt"  style="text-align:left;color:red"  class="span4"></money>
            </div>
          </div>
            </td>
          </tr>
          
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterFacture()"
          class="btn btn-primary"
          href="#"
          
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>







    <!-- apercu facture -->



    




              <div id="ApercuFacture" class="modal hide ApercuFacture1">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Aperçu Facture</h3>
      </div>
      <div>
       <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Designation</th>
                    <th>Quantité</th>
                    <th>Prix unitaire</th>
                     <th>Total</th>
                   
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(type, index) in listeFacturePiece(formData.numero_demande)" :key="type.id">
                    <td 
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{type.designation || 'Non renseigné'}}</td>
                    <td style="text-align:center;font-weight:bold;"
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{type.quantite || 'Non renseigné'}}</td>
                    <td style="text-align:center;font-weight:bold;"
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{formatageSomme(parseFloat(type.prix_unitaire)) || 'Non renseigné'}}</td>
<td style="text-align:center;font-weight:bold;"
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{formatageSomme(parseFloat(type.total_facture_ht)) || 'Non renseigné'}}</td>
                    
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">Montant Ht</td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">{{formatageSomme(parseFloat(SommeDesDmdParBonCommande(formData.numero_demande)))}}</td>
                
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">Taux</td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">{{afficherEnorere}}</td>
                  
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">Tva</td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">{{formatageSomme(parseFloat(parseFloat((SommeDesDmdParBonCommande(formData.numero_demande)))*afficherEnorere))}} </td>
                  
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">Montant Ttc</td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">{{formatageSomme(parseFloat(parseFloat((SommeDesDmdParBonCommande(formData.numero_demande)))+parseFloat((SommeDesDmdParBonCommande(formData.numero_demande)*afficherEnorere))))}} </td>
                  
                  </tr>
                </tbody>
              </table>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
      </div>
      
    </div>
    </div>


































</template>
<script>

    import {mapGetters,mapActions} from 'vuex'
    import {admin,dcf,noDCfNoAdmin} from "@/Repositories/Auth"
    
    import {  ModelListSelect } from 'vue-search-select'
    import moment from 'moment';
    // import facture from '../Facture/facture.vue'
    import { formatageSomme } from "@/Repositories/Repository";
    import 'vue-search-select/dist/VueSearchSelect.css'
    export default {
components: {
    
     ModelListSelect,
    //  facture
     
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
                formData:{
                 numero_demande:"",
                 ligne_economique_id:"",
                 ua_id:"",
                 grd_nature_id:"",

                },
                
                editpiece:{},
                formData5:{
                  Auteur_id:"2"
                },
                formData9:{
                exonere : 1
                },
 formData1:{
              date_piece:"" ,
              reference:""  ,
              libelle:""
                },
                formData8:{},
                formData2:{
                 numero_marche:""
                },
                FormDataFacture:{},
                message_mandater:""
            };
        },

        created() {
          
        },
        computed: {
           admin:admin,
      dcf:dcf,
      noDCfNoAdmin:noDCfNoAdmin,
 ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
            ...mapGetters('personnelUA', ["FichierJoinDmdEngagement","salairesActeur","personnaliseActeurDepense","personnaFonction","afficheNombrePersonnelRecuActeNormination","fonctionBudgetaire","type_salaries","type_contrats","acte_personnels","type_acte_personnels","fonctions","grades","niveau_etudes",
                "nbr_acteur_actredite_taux","all_acteur_depense","personnaliseActeurFinContrat",
                "totalActeurEnctivite","totalActeurDepense","totalActeurAccredite","tauxActeurAccredite","totalActeurNonAccredite","affichePersonnelRecuActeNormination"]),
             ...mapGetters("uniteadministrative", ["budgetGeneral","fonctionsua","servicesua","directions","uniteZones","uniteAdministratives","getPersonnaliseBudgetGeneralParPersonnel"]),
            // ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires"]),
            ...mapGetters("parametreGenerauxBudgetaire", ["plans_budgetaires"]),
 ...mapGetters("SuiviImmobilisation", ["services"]),

...mapGetters("bienService", ["gettersDossierMandat","gettersDossierFacturePiece","typeFactures","gettersDemandeEngagement","gettersnomPieceJustificative","modepaiements","gettersCotationPersonnaliser","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots","villes","communes","pays","modePassations", "procedurePassations","getterDossierCandidats","marches","gettersPersonnaliserRapportJugement",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","selectionner_candidats",
                "getActeEffetFinancierPersonnaliserContrat", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
 ...mapGetters("gestionMarche", [ 'groupeVille','entreprises','banques','comptes','getCompte', 'getEntreptise','getPersonnaliseAgence','agenceBanques']),
   ...mapGetters('parametreGenerauxFonctionnelle', ['structureActe','planActe']),
...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
   ...mapGetters("parametreGenerauxAdministratif", [
      "taux",
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

cumulMarche() {
      return id => {
        if (id != null && id != "") {
           return this.gettersDossierMandat.filter(qtreel => this.numeroMarche(qtreel.demande_engagement_id) == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_engage), 0).toFixed(0);

        }
      };
    },

numeroMarche() {
      return (id) => {
        if (id != null && id != "" ) {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_marche;
      }
      return ""
        }
      };
    },
ListeDesMarcheAtribuer() {
      return (id) => {
        if (id != null && id != "") {
           return this.listedesMarcheUa.filter(qtreel => qtreel.ua_id == id);

        }
      };
    },
listedesMarcheUa() {
      


        if (this.noDCfNoAdmin){
            let colect=[];
            this.acteEffetFinanciers.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
                
            })
            return colect
        }

return this.acteEffetFinanciers

    },






ListeDesMarcheAttribuer() {
      return (id) => {
        if (id != null && id != "") {
           return this.acteEffetFinanciers.filter(qtreel => qtreel.ua_id == id);

        }
      };
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

montantTva() {
      const val =   parseFloat(this.totalMontantHT) * parseFloat(this.afficherEnorere2);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
afficherEnorere(){
if(this.formData9.exonere == 0){
  return 0
}
else {
  return this.tauxArrondit
  
}
},
       SommeDesDmdParBonCommande() {
      return id => {
        if (id != null && id != "") {
           return this.gettersDossierFacturePiece.filter(qtreel => qtreel.numero_dmd == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_facture_ht), 0).toFixed(0);

        }
      };
    },
      listeFacturePiece() {
      return id => {
        if (id != null && id != "") {
           return this.gettersDossierFacturePiece.filter(qtreel => qtreel.numero_dmd == id);

      
        }
      };
    },
MontantFactureHt() {
      const val =  parseFloat(this.FormDataFacture.prix_unitaire) * parseFloat(this.FormDataFacture.quantite);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
     listePieceJustifica() {
      return (id) => {
        if (id != null && id != "" ) {
           const qtereel = this.typeFactures.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return ""
        }
      };
    },
      afficheFichierJoint() {
      return (id,id2) => {
        if (id != null && id != "" && id2 != null && id2 != "") {
           const qtereel = this.FichierJoinDmdEngagement.find(qtreel => qtreel.numero_demande_engagement == id && qtreel.	numero_fichier == id2);

      if (qtereel) {
        return qtereel.fichier;
      }
      return ""
        }
      };
    },
calculCumultresor() { 
      const val = parseFloat(this.CreditAutoriseTresor(this.formData.ligne_economique_id)) - parseFloat(this.formData.montant_tresor) ;
      return parseFloat(val).toFixed(0);
      
    },

 calculCumul() { 
      const val = parseFloat(this.TotalGeneralDemandeEngagement) + parseFloat(this.CumulDemande(this.formData.ligne_economique_id)) ;
      return parseFloat(val).toFixed(0);
      
    },

      MontantDisponible() { 
      const val = parseFloat(this.CreditAutorise(this.formData.ligne_economique_id)) - parseFloat(this.calculCumul) ;
      return parseFloat(val).toFixed(0);
      
    },
CumulDemande: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.gettersDemandeEngagement.filter(normeEquipe => normeEquipe.ligne_economique_id == id && normeEquipe.decision_cf == 8 || normeEquipe.ligne_economique_id == id && normeEquipe.decision_cf == 9).reduce(function(total,currentVal){
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
    libelleMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_marche.concat('  ',qtereel.objet)
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
    objetMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },
    Numero_CC() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_cc
      }
      return 0
        }
      };
    },
    Numero_Nom_Entreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.raison_sociale
      }
      return 0
        }
      };
    },
    Numero_adresse_Entreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.	adresse
      }
      return 0
        }
      };
    },

    libelleUa() {
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
      const val = parseFloat(this.formData.montant_tresor) + parseFloat(this.formData.montant_don) + parseFloat(this.formData.montant_emprunt);
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
           return this.gettersnomPieceJustificative.filter(qtreel => qtreel.numero_demande_engagement == id && qtreel.etat_piece=="proforma").length + 1 ;

      
        }
      };
    },
    numeroOrdreDefinitive() {
      
      return id => {
        if (id != null && id != "") {
           return this.gettersnomPieceJustificative.filter(qtreel => qtreel.numero_demande_engagement == id && qtreel.etat_piece=="definitive").length + 1 ;

      
        }
      };
    },

    listePieceJustificative() {
      return id => {
        if (id != null && id != "") {
           return this.gettersnomPieceJustificative.filter(qtreel => qtreel.numero_demande_engagement == id && qtreel.etat_piece=="proforma" );

      
        }
      };
    },
    listePieceJustificativeDefinitive() {
      return id => {
        if (id != null && id != "") {
           return this.gettersnomPieceJustificative.filter(qtreel => qtreel.numero_demande_engagement == id && qtreel.etat_piece=="definitive" );

      
        }
      };
    },
    idEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.numero_marche == id);

      if (qtereel) {
        return qtereel.entreprise_id
      }
      return 0
        }
      };
    },
    idActeeffect() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.numero_marche == id);

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
      "ajouterDemandeEngagement",
      "ajouterDossierFacture",
      "modifierDossierFacture",
      "supprimerDossierFacture"
     
    ]),
      ...mapActions('personnelUA', ["ajouterFichierJointDmd"]),

pagePrecedent(){
                window.history.back()
            },
 genererEnPdf(){
  this.$htmlToPaper('printMe');
},

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
      if(this.formData.type_procedure_id=='Engagement par Bon de Commande'){
 this.intitule=this.anneeAmort + "" + this.formData.numero_demande
      var nouvelObjetProforma = {
        
        	numero_ordre:this.numeroOrdre(this.formData.numero_demande),
      numero_demande_engagement:this.formData.numero_demande,
      numero_dmd_combine:this.intitule,
      libelle:this.formData1.libelle,
      reference:this.formData1.reference,
      date_piece:this.formData1.date_piece,
      etat_piece:"proforma"
      };
    
      this.ajouterPieceJustificative(nouvelObjetProforma)
      this.ajouterFichierJoin()
   this.$('#exampleModal').modal('hide');
       this.formData1 = {
        
        numero_demande_engagement:"",
      numero_dmd_combine:"",
      libelle:"",
      reference:"",
      date_piece:"",
      };
      }
     else{
        this.intitule=this.anneeAmort + "" + this.formData.numero_demande
      var nouvelObjetdefinitive = {
        
        	numero_ordre:this.numeroOrdreDefinitive(this.formData.numero_demande),
      numero_demande_engagement:this.formData.numero_demande,
      numero_dmd_combine:this.intitule,
      libelle:this.formData1.libelle,
      reference:this.formData1.reference,
      date_piece:this.formData1.date_piece,
      etat_piece:"definitive"
      };
    
      this.ajouterPieceJustificative(nouvelObjetdefinitive)
      this.ajouterFichierJoin()
   this.$('#exampleModal').modal('hide');
       this.formData1 = {
        numero_demande_engagement:"",
      numero_dmd_combine:"",
      libelle:"",
      reference:"",
      date_piece:"",
      };
     }
    },






rechercheListeMarche(){
      // console.log(this.formMandater.matricule_m)

      let objetMandater=this.acteEffetFinanciers.filter(item=>item.numero_marche==this.formData2.numero_marche)
      // console.log(objetMandater)
      if(objetMandater!=undefined){
        if (objetMandater.length==1){
          let acteur= this.acteEffetFinanciers.find(item=>item.numero_marche==this.formData2.numero_marche)
          this.formData2.numero_cc_fournisseur_nom=acteur.entreprise_id,
          this.formData2.numero_cc_fournisseur_adresse=acteur.entreprise_id,
         this.formData2.Numéro_cc_fournisseur=acteur.entreprise_id,
         this.formData2.objet_marche=acteur.marche_id,
         this.formData2.ua=acteur.ua_id,
         this.formData2.montant_marché=acteur.montant_act
          this.message_mandater=" "

        }
        else{
          this.message_mandater="Ce Numero cc  n'existe pas dans notre base de donnée "
          this.formData2.numero_cc_fournisseur_nom=""
        }
      }
      if(this.formData2.numero_marche==""){
        this.formData2.numero_cc_fournisseur_nom==""
          this.formData2.numero_cc_fournisseur_adresse==""
         this.formData2.Numéro_cc_fournisseur==""
         this.formData2.objet_marche=="",
         this.formData2.ua==""
        this.message_mandater=" "
      }
    },







rechercheMembreCojo(){
      // console.log(this.formMandater.matricule_m)

      let objetMandater=this.entreprises.filter(item=>item.numero_cc==this.formData2.Numéro_cc_fournisseur)
      // console.log(objetMandater)
      if(objetMandater!=undefined){
        if (objetMandater.length==1){
          let acteur= this.entreprises.find(item=>item.numero_cc==this.formData2.Numéro_cc_fournisseur)
          this.formData2.numero_cc_fournisseur_nom=acteur.raison_sociale,
          this.formData2.numero_cc_fournisseur_adresse=acteur.adresse,
         this.formData2.entrprise_id=acteur.id,
          this.message_mandater=" "

        }
        else{
          this.message_mandater="Ce Numero cc  n'existe pas dans notre base de donnée "
          this.formData2.numero_cc_fournisseur_nom=""
        }
      }
      if(this.formData2.Numéro_cc_fournisseur==""){
        this.formData2.numero_cc_fournisseur_nom=""
        this.message_mandater=" "
      }
    },





    ajouterFichierJoin () {
      if(this.formData.type_procedure_id=='Engagement par Bon de Commande'){
const formData = new FormData();
                this.intitule = this.anneeAmort + "" + this.formData.numero_demande
                formData.append('fichier', this.selectedFile, this.selectedFile.name);
    
                formData.append('numero_dmd_combine', this.intitule);
                formData.append('numero_demande_engagement', this.formData.numero_demande);
                 formData.append('numero_fichier', this.numeroOrdre(this.formData.numero_demande));
                 formData.append('etat_piece','proforma')
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
                this.ajouterFichierJointDmd(formData,config)
                
      }
                else{
                  const formData = new FormData();
                this.intitule = this.anneeAmort + "" + this.formData.numero_demande
                formData.append('fichier', this.selectedFile, this.selectedFile.name);
    
                formData.append('numero_dmd_combine', this.intitule);
                formData.append('numero_demande_engagement', this.formData.numero_demande);
                 formData.append('numero_fichier', this.numeroOrdre(this.formData.numero_demande));
                 formData.append('etat_piece','definitive')
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
                this.ajouterFichierJointDmd(formData,config)
                
                }
               

            },

ajouterFacture(){
  if(this.formData.type_procedure_id=='Engagement par Bon de Commande'){
this.intitule=this.anneeAmort + "" + this.formData.numero_demande
              var nouvelObjetproforma = {
        ...this.FormDataFacture,
          total_facture_ht:this.MontantFactureHt,
        	numero_dmd_engagement:this.intitule,
          numero_dmd:this.formData.numero_demande,
          etat_acticle:"proforma"
      };
    
      this.ajouterDossierFacture(nouvelObjetproforma)
       this.FormDataFacture={
    designation:"",
    quantite:"0",
    prix_unitaire:"0",
    total_facture_ht:"0"
  }
  }
  else{
    this.intitule=this.anneeAmort + "" + this.formData.numero_demande
              var nouvelObjetdefinitive = {
        ...this.FormDataFacture,
          total_facture_ht:this.MontantFactureHt,
        	numero_dmd_engagement:this.intitule,
          numero_dmd:this.formData.numero_demande,
          etat_acticle:"definitive"
      };
    
      this.ajouterDossierFacture(nouvelObjetdefinitive)
       this.FormDataFacture={
    designation:"",
    quantite:"0",
    prix_unitaire:"0",
    total_facture_ht:"0"
  }
  }
              
            },
AjouterDemandeEngagement() {
  this.intitule=this.anneeAmort + "" + this.formData.numero_demande
      if(this.formData5.Auteur_id == 2){
        
var nouvelObjet1 = {
        ...this.formData,
        numero_dmd_combine:this.intitule,
        	programme_id:this.idProgramme(this.formData.ligne_economique_id),
     action_id:this.idAction(this.formData.ligne_economique_id),
     	activite_id:this.idActivite(this.formData.ligne_economique_id),
     	nom_autre:this.formData2.numero_cc_fournisseur_nom,
     total_general:this.TotalGeneralDemandeEngagement,
    exercice:this.anneeAmort,
    section_id:this.idSection(this.formData.ligne_economique_id),
    uaBeneficiaire_id:this.formData.uaBeneficiaire_id,
    	entreprise_id:this.idEntreprise(this.formData2.numero_marche),
           numero_marche:this.formData2.numero_marche
            
      };
    
      this.ajouterDemandeEngagement(nouvelObjet1)
      
      }
      else if(this.formData5.Auteur_id == 3){
        
var nouvelObjet2 = {
        ...this.formData,
        numero_dmd_combine:this.intitule,
        	programme_id:this.idProgramme(this.formData.ligne_economique_id),
     action_id:this.idAction(this.formData.ligne_economique_id),
     	activite_id:this.idActivite(this.formData.ligne_economique_id),
     	nom_autre:this.libelleUniteAdministrative(this.formData2.uaBeneficiaire_id),
     total_general:this.TotalGeneralDemandeEngagement,
    exercice:this.anneeAmort,
    section_id:this.idSection(this.formData.ligne_economique_id),
    uaBeneficiaire_id:this.formData.uaBeneficiaire_id,
    	entreprise_id:this.formData2.entrprise_id
      };
    
      this.ajouterDemandeEngagement(nouvelObjet2)
      
      }
      else if(this.formData5.Auteur_id == 4){
        
var nouvelObjet3 = {
        ...this.formData,
        numero_dmd_combine:this.intitule,
        	programme_id:this.idProgramme(this.formData.ligne_economique_id),
     action_id:this.idAction(this.formData.ligne_economique_id),
     	activite_id:this.idActivite(this.formData.ligne_economique_id),
     	nom_autre:this.formData2.nom_autre,
       adresse:this.formData2.numero_cc_autre_adresse,
       numero_cc_autre:this.formData2.numero_cc_autre,
     total_general:this.TotalGeneralDemandeEngagement,
    exercice:this.anneeAmort,
    section_id:this.idSection(this.formData.ligne_economique_id),
    uaBeneficiaire_id:this.formData.uaBeneficiaire_id,
    	entreprise_id:this.formData2.entrprise_id
      };
    
      this.ajouterDemandeEngagement(nouvelObjet3)
      
      }
    },
    
ajouterFonctionGroupe(){
  //  this.ajouterFichierJoin()
  this.AjouterDemandeEngagement()
  this.formData={
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
  this.formData2={
    Numéro_cc_fournisseur:"",
    numero_cc_autre1:"",
    numero_cc_autre:""
  }
 
},


  afficherModalAjouterFacture() {
      this.$("#exampleModal1").modal({
        backdrop: "static",
        keyboard: false
      });
    },
      afficherModalAjouterService() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },

apercuFacture() {
      this.$("#ApercuFacture").modal({
        backdrop: "static",
        keyboard: false
      });
    },


    formaterDate(date) {
              return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },
formatageSomme:formatageSomme





            
}


    };
</script>

<style scoped>
.taille{
  width: 80%;
  margin: 0 -40%;
  height: 50%;
}
.tailles{
   width: 64%;
  margin: 0 -30%;
  
}
.ApercuFacture1{
 width: 64%;
  margin: 0 -30%;
  
  border: 2px solid #000;

}
</style>
