FonctionDon
<template>
  <div class="container-fluid">
    
    <div id="Bailleurdemande" class="modal hide">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter Bailleur</h3>
              </div>
              <div class="modal-body">
                <table class="table table-bordered table-striped">
                 
       <tr>
            <td>
                          <div class="control-group">
                            <label class="control-label"
                              >Type Financement 
                             </label
                            >
                            <div class="controls">
                             
                             <!-- <model-list-select
                                style="border: 1px solid #000"
                                class="wide"
                                :list="types_financements"
                                v-model="BailleurDmd.type_financement"
                                option-value="id"
                                option-text="libelle"
                                placeholder=""
                               
                              >
                              </model-list-select> -->
                              <select
                    v-model="BailleurDmd.type_financement"
                    class="span"
                    style="border: 1px solid #000"
                  >
                    <option></option>
                    <option
                      v-for="typeFact in BailleurLierLien"
                      :key="typeFact"
                      :value="typeFact"
                    >
                      {{ libelleTypeFinancement(typeFact) }}
                    </option>
                  </select>
                            </div>
                          </div>
                        </td>
                  
            </tr>
            <tr>
              <td>
                          <div class="control-group">
                            <label class="control-label"
                              >Source Financement
                             </label
                            >
                            <div class="controls">
                             
                     <select
                    v-model="BailleurDmd.type_financement"
                    class="span"
                    style="border: 1px solid #000"
                  >
                    <option></option>
                    <option
                      v-for="typeFact in BailleurSource"
                      :key="typeFact"
                      :value="typeFact"
                    >
                      {{libelleSourceFinancement(typeFact)}}
                    </option>
                  </select>
                           
                            
                            </div>
                          </div>
                        </td>
            </tr>
            
          </table>              
          </div>
           <div class="modal-footer"> 
             <button 
              @click.prevent="ajouterBudgetaireLocal" class="btn btn-primary"
              href="#">Valider</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
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
                  <!-- <input
                    type="text"
                    v-model="FormDataFacture.designation"
                    class="span12"
                  /> -->
                  <textarea
                style="border:1px solid #000"
                  v-model="FormDataFacture.designation"
                  class="span12"
                  rows="2"
                  placeholder="Saisir le texte"
                ></textarea>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="control-group">
                <label class="control-label">Quantite</label>
                <div class="controls">
                  <!-- <input
                    type="number"
                    v-model="FormDataFacture.quantite"
                    class="span"
                  /> -->
                   <money
                     v-model="FormDataFacture.quantite"
                    style="text-align: left; color: red"
                    class="span"
                  ></money>
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
                class="span"
                
              /> -->
                  <money
                    v-model="FormDataFacture.prix_unitaire"
                    style="text-align: left; color: red"
                    class="span"
                  ></money>
                </div>
              </div>
            </td>
             <td>
                <div class="control-group">
                <label class="control-label">exonéré</label>
                <div class="controls">
                  <select v-model="FormDataFacture.exonere" class="span">
                  
                    <option value="0">Oui</option>
                     <option value="1">Non</option>
                  </select>
                
                </div>
              </div>
              </td>
           
          </tr>
          <tr>
             <td>
              <div class="control-group">
                <label class="control-label">Montant Ht</label>
                <div class="controls">
                 
                  <money
                    :value="MontantFactureHt"
                    style="text-align: left; color: red"
                    class="span"
                  ></money>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Taux</label>
                <div class="controls">
 <input type="text" 
                         class="span"
                        :value="afficherEnorere"
                         readonly
                  />

                </div>
              </div>
            </td>
              <td >
              <div class="control-group">
                <label class="control-label" >Montant Tva</label>
                <div class="controls">
                 
<money :value="montantTva"  readonly  style="text-align:left;color:red;font-size:16px"  class="span"></money>
                </div>
              </div>
            </td>
            
          </tr>
          <tr>
          <td>
              <div class="control-group">
                <label class="control-label">Montant TTC</label>
                <div class="controls">
                  <!-- <input
                type="text"
                :value="MontantFactureHt"
                class="span"
                readonly
              /> -->
                  <money
                    :value="MontantFactureTTC"
                    style="text-align: left; color: red"
                    class="span"
                  ></money>
                </div>
              </div>
            </td>
            </tr>
        </table>
      </div>
      <div class="modal-footer">
        <a @click.prevent="ajouterFacture()" class="btn btn-primary" href="#"
          >Valider</a
        >
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>

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
                  <input
                   
                    type="text"
                    :value="numeroOrdre(formData.numero_demande)"
                    class="span"
                    placeholder="Saisir le libellé"
                    readonly
                  />
                 
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label"
                  >Nature de la pièce
                  <code style="color: red; font-size: 16px">*</code></label
                >
                <div class="controls">
                  <select
                    v-model="formData1.libelle"
                    class="span"
                    style="border: 1px solid #000"
                  >
                    <option></option>
                    <option
                      v-for="typeFact in typeFactures"
                      :key="typeFact.id"
                      :value="typeFact.id"
                    >
                      {{ typeFact.libelle }}
                    </option>
                  </select>
                  <code
                    style="color: red; font-size: 12px"
                    v-if="formData1.libelle.length > 0"
                    >Veuillez renseigner ce champ</code
                  >
                </div>
              </div>
            </td>
            
          </tr>
          <tr>
            <td>
              <div class="control-group">
                <label class="control-label"
                  >Reference de la pièce
                  <code style="color: red; font-size: 16px">*</code></label
                >
                <div class="controls">
                  <input
                    type="text"
                    v-model="formData1.reference"
                    class="span"
                    placeholder="Saisir la reference"
                  />
                  <code
                    style="color: red; font-size: 12px"
                    v-if="formData1.reference == ''"
                    >Veuillez renseigner ce champ</code
                  >
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label"
                  >Date de la pièce
                  <code style="color: red; font-size: 16px">*</code></label
                >
                <div class="controls">
                  <input
                    type="date"
                    v-model="formData1.date_piece"
                    class="span"
                  />
                  <code
                    style="color: red; font-size: 12px"
                    v-if="formData1.date_piece == ''"
                    >Veuillez renseigner ce champ</code
                  >
                </div>
              </div>
            </td>
            
            <!-- <td>
              <div class="control-group">
                <label class="control-label">Exonéré</label>
                <div class="controls">
                  <select v-model="formData9.exonere" class="span">
                    <option value="0">Oui</option>
                    <option value="1">Non</option>
                  </select>
                </div>
              </div>
            </td> -->
          </tr>
          <tr>
            <td colspan="">
              <div class="control-group">
                <label class="control-label">Pièces justificatives </label>
                <div class="controls">
                  <input
                    type="file"
                    style="border: 1px solid #000"
                    @change="OnchangeFichier"
                    class="span"
                  />
                  <code v-if="info_pdf">Le fichier doit etre un pdf</code>
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
            @click.prevent="AjoutePieceJustific"
            
            >Valider</a
          >

          <a data-dismiss="modal" class="btn" href="#">Fermer</a>
        </div>
        
      </div>
    </div>

    <hr />
    <!-- <div align="left" style="cursor: pointer">
      <button class="btn btn-danger" @click.prevent="pagePrecedent">
        Page Précédente
      </button>
    </div> -->
    <div class="row-fluid">
      <div class="span12">
        <div class="widget-box">
          <div class="widget-title">
            <span class="icon">
              <i class="icon-th"></i>
            </span>
            <h5>Ajouter Dossier Liquidation</h5>
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
                      <a data-toggle="tab" href="#INFORMATIONUA"
                        >INFORMATION SUR UA</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="widget-content tab-content">
                  <!--ongle identification-->
                  <div id="INFORMATIONUA" class="tab-pane active">
                    <table class="table table-bordered table-striped">
                      <!-- <tr>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Mode</label>
                            <div class="controls">
                              <select
                                v-model="formData.mode"
                                class="span"
                                style="border: 1px solid #000"
                              >
                                <option></option>
                                <option value="Budget Général">
                                  Budget Général
                                </option>
                                <option value="Compte Spécial du Trésor">
                                  Compte Spécial du Trésor
                                </option>
                              </select>
                            </div>
                          </div>
                        </td>
                     
                       
                        <td>
                          <div class="control-group">
                            <label class="control-label">Exercice</label>
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000; font-size: 15px"
                                :value="anneeAmort"
                                class="span"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                      </tr> -->
                      <tr>
                         <td colspan="">
                          <label
                            >Numero de la Demande
                            <code style="color: red; font-size: 16px">*</code>
                          </label>
                          <model-list-select
                            style="border: 1px solid #000"
                            class="wide"
                            :list="gettersDemandeEngagement"
                            v-model="formData123.dmd_engagement_id"
                            option-value="id"
                            option-text="numero_demande"
                            placeholder=""
                          >
                          </model-list-select>
                         
                          
                        </td>
                        
                        <td>
                          <div class="control-group">
                            <label class="control-label">Numéro Liquidation</label>
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000; font-size: 15px"
                                v-model="formData1122.numero"
                                class="span"
                                
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Date Liquidation</label>
                            <div class="controls">
                              <input
                                type="date"
                                style="border: 1px solid #000; font-size: 15px"
                                v-model="formData1122.date"
                                class="span"
                                

                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="control-group">
                            <label class="control-label"
                              >Ministère/Institution</label
                            >
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                :value="libelleSection(recupererIdSectionDansDemandeEngagement(formData123.dmd_engagement_id))"
                                class="span"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label"
                              >Programme/Dotation</label
                            >
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                :value="libelleProgramme(recupererProgrammeDansDemandeEngagement(formData123.dmd_engagement_id))"
                                class="span"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                        <td colspan="2">
                          <div class="control-group">
                            <label class="control-label">Action</label>
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                :value="libelleAction(recupererActionDansDemandeEngagement(formData123.dmd_engagement_id))"
                                 
                                
                                class="span"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                       
                      </tr>
                      
                           <tr>
                        <td >
                          <div class="control-group">
                            <label class="control-label"
                              >Unite administrative</label
                            >
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                :value="libelleUa(recupererUniteAdministrativeDansDemandeEngagement(formData123.dmd_engagement_id))"
                                class="span"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                       
                        <td colspan="3">
                          <div class="control-group">
                            <label class="control-label">Libelle Activite</label>
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                :value="libelleActivite(recupererCodeActiviteDansDemandeEngagement(formData123.dmd_engagement_id))"
                        
                                                        class="span"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                       
                      </tr>
                     
                      <tr>
                        <td >
                          <div class="control-group">
                            <label class="control-label"
                              >Grande nature de dépense</label
                            >
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                :value="libelleGrandNature(recupererGrandeNatureDansDemandeEngagement(formData123.dmd_engagement_id))"
                                class="span"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                       
                        <td colspan="3">
                          <div class="control-group">
                            <label class="control-label">Ligne économique</label>
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                :value="libelleEconomique(recupererLigneEconomiqueDansDemandeEngagement(formData123.dmd_engagement_id))"
                                 
                                
                                class="span"
                                readonly
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
                      <a data-toggle="tab" href="#ENGAGEMENT"
                        >INFORMATIONS SUR L'ENGAGEMENT</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="widget-content tab-content">
                  <!--ongle identification-->
                  <div id="ENGAGEMENT" class="tab-pane active">
                    <table class="table table-bordered table-striped">

<tr>
                        
 <td >
                          <div class="control-group">
                            <label class="control-label"
                              >Procédures de Dépense </label
                            >
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                :value="conversionMajiscule(libelleProcedureDepense(recupererProcedureDepenseDansDemandeEngagement(formData123.dmd_engagement_id)))"
                                class="span"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                        
                        
                         <td >
                          <div class="control-group">
                            <label class="control-label"
                              >Type Procedures </label
                            >
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                :value="libelletypeProcedure(recuperertypeProcedureDansDemandeEngagement(formData123.dmd_engagement_id))"
                                class="span"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                      
                        <td colspan="2" >
                          <div class="control-group">
                            <label class="control-label"
                              >Type d'engagement  </label
                            >
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                :value="conversionMajiscule(libelleTypeDepense(recupererTypeEngagementDansDemandeEngagement(formData123.dmd_engagement_id)))"
                                class="span"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                      
                      
                      <tr >
                        
                       
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label">Numéro du Marché</label>
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                :value="recupererNumeroMarche(recupererMarcheDansDemandeEngagement(formData123.dmd_engagement_id))"
                                 
                                
                                class="span"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                       
                         <td colspan="">
                          <div class="control-group">
                            <label class="control-label"
                              >Montant Avenant</label
                            >
                           
                            <div class="controls">
                             
                              <money
                               :value="MontantAvenant(recupererMarcheDansDemandeEngagement(formData123.dmd_engagement_id))"
                                readOnly
                                style="text-align: left; color: red"
                                class="span"
                              ></money>
                             
                            </div>
                          </div>
                        </td>
                         <td colspan="">
                          <div class="control-group">
                            <label class="control-label"
                              >Montant de base du marché</label
                            >
                          
                            <div class="controls">
                             
                              <money
                                :value="montantMarche(recupererMarcheDansDemandeEngagement(formData123.dmd_engagement_id))"
                                readOnly
                                style="text-align: left; color: red"
                                class="span"
                              ></money>
                             
                            </div>
                          </div>
                        </td>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label"
                              >Montant global Marche(Av+Mont marché)</label
                            >
                            
                            <div class="controls">
                             
                              <money
                                :value="MontantGlobal1"
                                readOnly
                                style="text-align: left; color: red"
                                class="span"
                              ></money>
                             
                            </div>
                          </div>
                        </td>
                      </tr>
                     
                       <tr>

                        <td colspan="4">
                          <div class="control-group">
                            <label class="control-label">Objet de la depense</label>
                           
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                :value="recupererObjetDepenseDansDemandeEngagement(formData123.dmd_engagement_id)"
                                class="span"
                                readonly
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
                            <label class="control-label"
                              >Mode de paiement</label
                            >
                            <div class="controls">
                             
                               <input
                                type="text"
                                style="border: 1px solid #000"
                                :value="recupererLibelleModePaiement(recupererIdModePaiementDansDemandeEngagement(formData123.dmd_engagement_id))"
                                
                                class="span"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                        
                        <td colspan="2">
                          <div class="control-group">
                            <label class="control-label"
                              >Référence bancaires du fournissuer ou poste
                              comptable assignataire</label
                            >
                            <div class="controls">
                              <input
                                v-if="formData.type_engagement_id != 'AD'"
                                type="text"
                                style="border: 1px solid #000"
                                :value="
                                  recupereLeNumeroCompte(
                                    recupereLeNumeroCompteid(
                                      formData2.numero_marche
                                    )
                                  )
                                "
                                class="span"
                                readonly
                              />
                              <input
                                v-if="formData.type_engagement_id == 'AD'"
                                type="text"
                                style="border: 1px solid #000"
                                v-model="formData2.compte_bancaire"
                                class="span"
                                readonly
                              />
                              <!-- <input
                                type="text"
                                style="border: 1px solid #000"
                                :value="FonctionEntreprise"
                                 v-if="formData123.typeDossier1 != 0"
                                
                                class="span"
                                readonly
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
                      <a data-toggle="tab" href="#tab1"
                        >REFERENCE DU FOURNISSEUR OU BENEFICIAIRE</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="widget-content tab-content">
                  <!--ongle identification-->
                  <div id="tab1" class="tab-pane active">
                    <table class="table table-bordered table-striped">
                      <tr>
                        
                        <td colspan="2">
                          <div class="control-group">
                            <label class="control-label">Nom</label>
                            <div class="controls">
                           
                            <input
                                type="text"
                                style="border: 1px solid #000"
                                :value="recupererIdEntrepriseDansDemandeEngagement(this.formData123.dmd_engagement_id)"
                                 
                                class="span"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label" >Numéro CC</label>
                            <div class="controls">
                            
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                :value="FonctionEntreprise"
                                
                                class="span"
                                readonly
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
                                style="border: 1px solid #000"
                                :value="FonctionEntreprise"
                                
                                class="span"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label">Montant Engagé</label>

                            <div class="controls">
                             
                  <money
                  
                                :value="recupererMontantTotalDansDemandeEngagement(formData123.dmd_engagement_id)"
                                readOnly
                                style="text-align: left; color: red"
                                class="span"
                              ></money>
                             
                              
                              <code style="color: red; font-size: 12px"
                                >MONTANT A PAYE:
                                {{
                                  parseFloat(formData2.montant_marché) -
                                  parseFloat(
                                    cumulMarche(formData2.numero_marche)
                                  )
                                }}</code
                              ><br /><br />
                             
                            </div>
                          </div>
                        </td>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label">Trésor</label>
                            <div class="controls">
                              <money
                  
                                :value="recupererTresorDansDemandeEngagement(formData123.dmd_engagement_id)"
                                readOnly
                                style="text-align: left; color: red"
                                class="span"
                              ></money>
                             
                            </div>
                          </div>
                        </td>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label">Don</label>
                            <div class="controls">
                             
                    <money
                 
                                :value="recupererDonDansDemandeEngagement(this.formData123.dmd_engagement_id)"
                                readOnly
                                style="text-align: left; color: red"
                                class="span"
                              ></money>
                            
                            </div>
                          </div>
                        </td>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label">Emprunt</label>
                            <div class="controls">
                              <money
                  
                                :value="recupererEmpruntDansDemandeEngagement(this.formData123.dmd_engagement_id)"
                                readOnly
                                style="text-align: left; color: red"
                                class="span"
                              ></money>
                            
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="4">
                          <div class="control-group">
                            <label class="control-label"
                              >Objet de la dépense</label
                            >
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                v-model="formData.objet_depense"
                                class="span"
                              />
                            </div>
                          </div>
                        </td>
                        
                      </tr>
                      
                    </table>
                  </div>
                </div>
<table class="table table-bordered table-striped">
  
    <tr>
       <label
                            class="control-label"
                            style="
                              font-size: 14px;
                              font-weight: bold;
                              text-align: center;
                            "
                            
                            >VOIR FACTURE</label
                          >
                           <div
                            class=""
                            align="right"
                            
                          >
                            <button
                              @click.prevent="afficherModalAjouterFacture"
                              class="btn btn-success"
                            >
                              <span>
                                <i class="icon icon-plus-sign"
                                  >AJOUTER FACTURE </i
                                ></span
                              >
                            </button>
                          </div>
                          <table 
                            class="table table-bordered table-striped"
                           
                          >
                          <thead>
                             <tr>
                          <th>Designation</th>
                          <th>Quantité</th>
                          <th>Prix unitaire</th>
                          <th>Total</th>
                          <th style="width: 10px">Supprimer</th>
                        </tr>
                            </thead>
 <tbody>
                        <tr
                          class="odd gradeX"
                          v-for="(type) in listeFacturePiece12(recuperationNumeroDemande(
                            formData123.dmd_engagement_id
                          ))"
                          :key="type.id"
                        >
                          <td @dblclick="afficherModalModifierFacture(type.id)">
                            {{ type.designation || "Non renseigné" }}
                          </td>
                          <td
                            style="text-align: center; font-weight: bold"
                            @dblclick="afficherModalModifierFacture(type.id)"
                          >
                            {{ type.quantite || "Non renseigné" }}
                          </td>
                          <td
                            style="text-align: center; font-weight: bold"
                            @dblclick="afficherModalModifierFacture(type.id)"
                          >
                            {{
                              formatageSomme(parseFloat(type.prix_unitaire)) ||
                              "Non renseigné"
                            }}
                          </td>
                          <td
                            style="text-align: center; font-weight: bold"
                            @dblclick="afficherModalModifierFacture(type.id)"
                          >
                            {{
                              formatageSomme(
                                parseFloat(type.total_facture_ht)
                              ) || "Non renseigné"
                            }}
                          </td>
                          <td>
                            <button
                              class="btn btn-danger"
                              @click="supprimerDossierFacture(type.id)"
                            >
                              <span>
                                <i class="icon icon-trash"></i>
                              </span>
                            </button>
                          </td>
                        </tr>
                      <tr>
                          <td></td>
                          <td></td>
                          <td
                            style="
                              color: red;
                              font-size: 14px;
                              text-align: center;
                              font-weight: bold;
                            "
                          >
                            Montant Ht
                          </td>
                          <td
                            style="
                              color: red;
                              font-size: 14px;
                              text-align: center;
                              font-weight: bold;
                            "
                          >
                            {{
                              formatageSomme(
                                parseFloat(
                                  SommeDesDmdParBonCommande(
                                    formData.numero_demande
                                  )
                                )
                              )
                            }}
                          </td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td
                            style="
                              color: red;
                              font-size: 14px;
                              text-align: center;
                              font-weight: bold;
                            "
                          >
                            Taux
                          </td>
                          <td
                            style="
                              color: red;
                              font-size: 14px;
                              text-align: center;
                              font-weight: bold;
                            "
                          >
                                    
                            {{ RecuperereTaux(formData.numero_demande) }}
                          </td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td
                            style="
                              color: red;
                              font-size: 14px;
                              text-align: center;
                              font-weight: bold;
                            "
                          >
                            TVA
                          </td>
                          <td
                            style="
                              color: red;
                              font-size: 14px;
                              text-align: center;
                              font-weight: bold;
                            "
                          >
                                    
                            {{parseFloat(SommeDesDmdParBonCommande(formData.numero_demande))*parseFloat(RecuperereTaux(formData.numero_demande)) }}
                          </td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td
                            style="
                              color: red;
                              font-size: 14px;
                              text-align: center;
                              font-weight: bold;
                            "
                          >
                            Montant Ttc
                          </td>
                          <td
                            style="
                              color: red;
                              font-size: 14px;
                              text-align: center;
                              font-weight: bold;
                            "
                          >
                            {{
                              formatageSomme(
                                parseFloat(
                                  parseFloat(
                                    parseFloat(SommeDesDmdParBonCommande(formData.numero_demande))*parseFloat(RecuperereTaux(formData.numero_demande))
                                  ) +
                                    parseFloat(
                                       parseFloat(
                                  SommeDesDmdParBonCommande(
                                    formData.numero_demande
                                  )
                                )
                                    )
                                )
                              )
                            }}
                          </td>
                          <td></td>
                        </tr>
                        </tbody>
                            </table>
                         

    </tr>
  </table>
  <table class="table table-bordered table-striped" >
  
    <tr>
       <label
                            class="control-label"
                            style="
                              font-size: 14px;
                              font-weight: bold;
                              text-align: center;
                            "
                            
                            >Liste des Bailleurs</label
                          >
                           <div
                            class=""
                            align="right"
                            
                          >
                            <button
                              @click.prevent="afficherModalAjouteBailleurDemANDE"
                              class="btn btn-success"
                            >
                              <span>
                                <i class="icon icon-plus-sign"
                                  >AJOUTER BAILLEUR </i
                                ></span
                              >
                            </button>
                          </div>
                          <table 
                            class="table table-bordered table-striped"
                           
                          >
                          <thead>
                             <tr>
                          <th>Type financement</th>
                          <th>Sous Financement</th>
                        
                          <th style="width: 10px">Supprimer</th>
                        </tr>
                            </thead>
 <tbody>
                        <tr
                          class="odd gradeX"
                          v-for="(type) in BailleurDmdEngagements12(recuperationNumeroDemande(formData123.dmd_engagement_id))"
                          :key="type.id"
                        >
                          <td @dblclick="afficherModalModifierFacture(type.id)">
                            {{libelleTypeFinancement(type.type_financement) || "Non renseigné" }}
                          </td>
                          <td
                            style="text-align: center; font-weight: bold"
                            @dblclick="afficherModalModifierFacture(type.id)"
                          >
                            {{libelleSourceFinancement(type.source_financement) || "Non renseigné" }}
                          </td>
                         
                          
                          <td>
                            <button
                              class="btn btn-danger"
                              @click="supprimerBailleurDmdEngagements(type.id)"
                            >
                              <span>
                                <i class="icon icon-trash"></i>
                              </span>
                            </button>
                          </td>
                        </tr>

                        </tbody>
                            </table>
                          
    </tr>
  </table>
   <table class="table table-bordered table-striped">
                      <tr>
                        <td colspan="">
                         
                          <label
                            class="control-label"
                            style="
                              font-size: 14px;
                              font-weight: bold;
                              text-align: center;
                            "
                            
                            >LISTE DES PIECES </label
                          >

                          <div
                            class=""
                            align="right"
                            
                          >
                            <button
                              @click.prevent="afficherModalAjouterService"
                              class="btn btn-success"
                            >
                              <span>
                                <i class="icon icon-plus-sign"
                                  >AJOUTER PIECE</i
                                ></span
                              >
                            </button>
                          </div>

 <table 
                            class="table table-bordered table-striped"
                            
                          >
                            <thead>
                              <tr></tr>
                              <tr>
                                <th style="font-size: 14px; font-weight: bold">
                                  Numero Ordre
                                </th>
                                <th style="font-size: 14px; font-weight: bold">
                                  Nature de la pièce
                                </th>
                                <th style="font-size: 14px; font-weight: bold">
                                  Reference
                                </th>
                                <th style="font-size: 14px; font-weight: bold">
                                  Date de la pièce
                                </th>
                                 <th style="font-size: 14px; font-weight: bold">
                                 Action
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr
                                class="odd gradeX"
                                v-for="type in listePieceJustificative13(recuperationNumeroDemande(formData123.dmd_engagement_id))"
                                :key="type.id"
                              >
                                <td
                                  style="width:20%,text-align:center"
                                  @dblclick="
                                    afficherModalModifierTypeTexte(type.id)
                                  "
                                >
                                  {{ type.numero_ordre || "Non renseigné" }}
                                </td>
                                <td
                                  style="width: 30%"
                                  @dblclick="
                                    afficherModalModifierTypeTexte(type.id)
                                  "
                                >
                                  {{
                                    listePieceJustifica(type.libelle) ||
                                    "Non renseigné"
                                  }}
                                </td>
                                <td
                                  style="width: 20%"
                                  @dblclick="
                                    afficherModalModifierTypeTexte(type.id)
                                  "
                                >
                                  {{ type.reference || "Non renseigné" }}
                                </td>
                                <td
                                  style="width: 15%"
                                  @dblclick="
                                    afficherModalModifierTypeTexte(type.id)
                                  "
                                >
                                  {{
                                    formaterDate(type.date_piece) ||
                                    "Non renseigné"
                                  }}
                                </td>
                                 <td>
                            <button
                              class="btn btn-danger"
                              @click="supprimerPieceJustificative(type.id)"
                            >
                              <span>
                                <i class="icon icon-trash"></i>
                              </span>
                            </button>
                          </td>
                              </tr>
                            </tbody>
                          </table>
                         
                        </td>
                      </tr>
                    </table>
                <div class="widget-title">
                  <ul class="nav nav-tabs">
                    <li class="active">
                      <a data-toggle="tab" href="#tab1"
                        >IMPUTATION BUDGETAIRE</a
                      >
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
                                style="border: 1px solid #000"
                                :value="libelleActivite(recupererCodeActiviteDansDemandeEngagement(formData123.dmd_engagement_id))"
                                class="span"
                                readonly
                              />
                             
                              
                            </div>
                          </div>
                        </td>
                        <td colspan="3">
                          <div class="control-group">
                            <label class="control-label">Ligne Economique</label>
                            <div class="controls">
                              <input 
                                type="text"
                                style="border: 1px solid #000"
                                :value="libelleEconomique(recupererLigneEconomiqueDansDemandeEngagement(formData123.dmd_engagement_id))"
                                class="span"
                                readonly
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
                              <money   
                                :value="recupererMontantTotalDansDemandeEngagement(formData123.dmd_engagement_id)"
                                readOnly
                                style="text-align: left; color: red"
                                class="span"
                              ></money>
                              
                            </div>
                          </div>
                        </td>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label">Trésor</label>
                            <div class="controls">
                              <money
                 
                                :value="recupererTresorDansDemandeEngagement(formData123.dmd_engagement_id)"
                                readOnly
                                style="text-align: left; color: red"
                                class="span"
                              ></money>
                              
                            
                            </div>
                          </div>
                        </td>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label">Don</label>
                            <div class="controls">
                              <money
                 
                                :value="recupererDonDansDemandeEngagement(formData123.dmd_engagement_id)"
                                readOnly
                                style="text-align: left; color: red"
                                class="span"
                              ></money>
                             
                             
                            </div>
                          </div>
                        </td>
                        <td colspan="2">
                          <div class="control-group">
                            <label class="control-label">Emprunt</label>
                            <div class="controls">
                              <money
                
                                :value="recupererEmpruntDansDemandeEngagement(formData123.dmd_engagement_id)"
                                readOnly
                                style="text-align: left; color: red"
                                class="span"
                              ></money>
                             
                              <!-- <money
                                v-model="formData.montant_emprunt"
                                readOnly
                                style="text-align: left; color: red"
                                class="span"
                              ></money> -->
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="">
                          <div class="control-group">
                            <label
                              class="control-label"
                              title="Situation des crédits"
                              >Situation crédits</label
                            >
                          </div>
                          <div class="control-group">
                            <label class="control-label"
                              >Crédit Autorisés</label
                            >
                          </div>
                          <div class="control-group">
                            <label
                              class="control-label"
                              title="Cumul des demande"
                              >Cumul</label
                            >
                          </div>
                          <div class="control-group">
                            <label class="control-label">Disponible</label>
                          </div>
                        </td>
                        
                        <td colspan="" >
                          <div class="control-group">
                            <label class="control-label">Total général</label>
                            <div class="controls">
                              
                              
                               <money
            
                                :value="CreditAutorise(recupererUniteAdministrativeDansDemandeEngagement(formData123.dmd_engagement_id),recupererLigneEconomiqueDansDemandeEngagement(formData123.dmd_engagement_id))"
                                readOnly
                                style="text-align: left; color: red"
                                class="span"
                              ></money>
                              
                               <money
                              
                                :value="calculCumulAUtres78"
                                readOnly
                                style="text-align: left; color: red"
                                class="span"
                              ></money>
                              

                               <money
                               
                                :value="MontantDisponible45"
                                readOnly
                                style="text-align: left; color: red"
                                class="span"
                              ></money>
                            </div>
                          </div>
                        </td>
                        
                        <td colspan="" >
                          <div class="control-group">
                            <label class="control-label">Trésor</label>
                            <div class="controls">
                            
                             
                               <money
                             
                                :value="
                                  CreditAutoriseTresor(
                                    recupererUniteAdministrativeDansDemandeEngagement(formData123.dmd_engagement_id),recupererLigneEconomiqueDansDemandeEngagement(formData123.dmd_engagement_id)
                                  )
                                "
                                readOnly
                                style="text-align: left; color: red"
                                class="span"
                              ></money>
                             
                               <money
                               
                                :value="recupererTresorDansDemandeEngagement(this.formData123.dmd_engagement_id)"
                                style="text-align: left; color: red"
                                class="span"
                                readOnly
                              ></money>
                              
                              <money
                              
                                :value="calculCumultresorAutre"
                                style="text-align: left; color: red"
                                class="span"
                                  readOnly
                              ></money>
                            </div>
                          </div>
                        </td>
                        
                              
                              
                             
                      
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label">Don</label>
                            <div class="controls">
                             <money
                            
                                :value="
                                  CreditAutoriseDon(
                                   recupererUniteAdministrativeDansDemandeEngagement(formData123.dmd_engagement_id),recupererLigneEconomiqueDansDemandeEngagement(formData123.dmd_engagement_id)
                                  )
                                "
                                readOnly
                                style="text-align: left; color: red"
                                class="span"
                              ></money>
                             
                             
                              <money
                             
                                :value="recupererDonDansDemandeEngagement(formData123.dmd_engagement_id)"
                                style="text-align: left; color: red"
                                class="span"
                                  readOnly
                              ></money>
                              
                             <money
                           
                             
                                v-model="formData2.montant_don3"
                                style="text-align: left; color: red"
                                class="span"
                                  readOnly
                              ></money>
                            </div>
                          </div>
                        </td>
                        <td colspan="" >
                          <div class="control-group">
                            <label class="control-label">Emprunt</label>
                            <div class="controls">
                             
                              <money
                             
                                :value="
                                  CreditAutoriseEmprunt(
                                    this.recupererUniteAdministrativeDansDemandeEngagement(this.formData123.dmd_engagement_id),this.recupererLigneEconomiqueDansDemandeEngagement(this.formData123.dmd_engagement_id)
                                  )
                                "
                                readOnly
                                style="text-align: left; color: red"
                                class="span"
                              ></money>
                             
                              <money
                             
                                v-model="formData2.montant_emprunt2"
                                style="text-align: left; color: red"
                                class="span"
                                readOnly
                              ></money>
                              
                              
                             
                              
                              <money
                              
                                v-model="formData2.montant_emprunt3"
                                style="text-align: left; color: red"
                                class="span"
                                readOnly
                              ></money>
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
                      <a data-toggle="tab" href="#tab1"
                        >LE GESTIONNAIRE DE CREDIT</a
                      >
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
                                style="border: 1px solid #000"
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
                                style="border: 1px solid #000"
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
                        @click.prevent="ajouterFonctionGroupe"
                       
                        >Valider</a
                      >
                      <a
                        @click.prevent="afficherModalListePersonnel()"
                        class="btn"
                        href="#"
                        >Fermer</a
                      >
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
    <notifications />

    

    

  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { admin, dcf, noDCfNoAdmin } from "@/Repositories/Auth";

import { ModelListSelect } from "vue-search-select";
import moment from "moment";
// import facture from '../Facture/facture.vue'
import { formatageSomme } from "@/Repositories/Repository";
import "vue-search-select/dist/VueSearchSelect.css";
export default {
  components: {
    ModelListSelect,
    //  facture
  },
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add",
        },
      ],
      liste: [],
 options2: [
    { id: "0", libelle: " " },
        { id: "1", libelle: " DEMANDE ENGAGEMENT" },
        { id: " Lquidation", libelle: "LIQUIDATION" },
        { id: "Bon DE Commande", libelle: "BON DE COMMANDE" },
        { id: "Mandat", libelle: "MANDAT" },
      ],
     
      info_pdf: false,
      BailleurDmd:{},
      formData1122:{},
      formData: {
        numero_demande: "",
        ligne_economique_id: "",
        ua_id: "",
        grd_nature_id: "",
       
      },
formData123:{
  typeDossier1:0
},
      editpiece: {},
      formData100:{},
      formData5: {
        Auteur_id: "2",
      },
      formData9: {
        exonere: 1,
      },
      formData1: {
        date_piece: "",
        reference: "",
        libelle: "",
      },
      formData8: {},
      formData2: {
        numero_marche: "",
      },
      FormDataFacture: {},
      message_mandater: "",
    };
  },

  created() {},
  computed: {
    admin: admin,
    dcf: dcf,
    noDCfNoAdmin: noDCfNoAdmin,
    ...mapGetters("Utilisateurs", [
      "getterUtilisateur",
      "getterAffectation",
      "getterUniteAdministrativeByUser",
    ]),
    ...mapGetters("personnelUA", [
      "FichierJoinDmdEngagement",
      "salairesActeur",
      "personnaliseActeurDepense",
      "personnaFonction",
      "afficheNombrePersonnelRecuActeNormination",
      "fonctionBudgetaire",
      "type_salaries",
      "type_contrats",
      "acte_personnels",
      "type_acte_personnels",
      "fonctions",
      "grades",
      "niveau_etudes",
      "nbr_acteur_actredite_taux",
      "all_acteur_depense",
      "personnaliseActeurFinContrat",
      "totalActeurEnctivite",
      "totalActeurDepense",
      "totalActeurAccredite",
      "tauxActeurAccredite",
      "totalActeurNonAccredite",
      "affichePersonnelRecuActeNormination",
    ]),
    ...mapGetters("uniteadministrative", [
      "budgetGeneral",
      "fonctionsua",
      "servicesua",
      "directions",
      "uniteZones",
      "uniteAdministratives",
      "getPersonnaliseBudgetGeneralParPersonnel",
    ]),
    // ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires"]),
    ...mapGetters("parametreGenerauxBudgetaire", ["plans_budgetaires"]),
    ...mapGetters("SuiviImmobilisation", ["services"]),

    ...mapGetters("bienService", [
      "gettersBailleurDmdEngagements",
      "gettersProcedureTypeDepense",
      "avenants",
      "gettersProcedureDroitCommuns",
      "gettersProcedureDerogatoires",
      "gettersDossierLiquidation",
      "gettersDossierAutreDepense",
      "gettersDossierMandat",
      "gettersDossierFacturePiece",
      "typeFactures",
      "gettersDemandeEngagement",
      "gettersnomPieceJustificative",
      "modepaiements",
      
      "gettersCotationPersonnaliser",
      "typeCandidat",
      "acteDepense",
      "getMarchePersonnaliser",
      "appelOffres",
      "lots",
      "villes",
      "communes",
      "pays",
      "modePassations",
      "procedurePassations",
      "getterDossierCandidats",
      "marches",
      "gettersPersonnaliserRapportJugement",
      "getterOffreFinanciers",
      "gettersOffreTechniques",
      "getterLettreInvitation",
      "getterMandate",
      "getterCojos",
      "conditions",
      "getterAnalyseDossiers",
      "typeAnalyses",
      "getterDemandeAno",
      "documentProcedures",
      "getterAnalyseDMP",
      "getterAnoDMPBailleur",
      "getterObseravtionBailleurs",
      "obseravtionBailleurs",
      "typeActeEffetFinanciers",
      "analyseDossiers",
      "text_juridiques",
      "livrables",
      "selectionner_candidats",
      "getActeEffetFinancierPersonnaliserContrat",
      "acteEffetFinanciers",
      "personnaliseGetterMarcheBailleur",
      "getterMembreCojo",
      "getterProceVerballe",
    ]),
    ...mapGetters("gestionMarche", [
      "groupeVille",
      "entreprises",
      "banques",
      "comptes",
      "getCompte",
      "getEntreptise",
      "getPersonnaliseAgence",
      "agenceBanques",
    ]),
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "structureActe",
      "planActe",
    ]),
    ...mapGetters("parametreGenerauxActivite", [
      "structures_activites",
      "plans_activites",
      "afficheNiveauAction",
      "afficheNiveauActivite",
    ]),
    ...mapGetters("parametreGenerauxAdministratif", [
      "taux",
      "sections",
      "type_Unite_admins",
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "afficheNiveauPlanProg",
      "exercices_budgetaires",
      "afficheLocalisationGeoNiveau5",
    ]),
    ...mapGetters("parametreGenerauxSourceDeFinancement", [
      "sources_financements","types_financements"
    ]),
    
     BailleurSource() {
      //return (id) => {
  
        let objet = this.budgetGeneral.filter((qtreel) => qtreel.ua_id == this.formData.ua_id && qtreel.ligne_economique_id == this.formData.typefinancement_id && qtreel.actived == 1 );
        //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.sourcefinancement_id);
          });
          let unique = [...new Set(array_exercie)];
          console.log(unique);
          if (unique.length == 0) {
            return [];
          }
          return unique;
        }
        return [];
    // };
    },
    // BailleurSource() {
    
    //    return (id,id1) => {
    //     if (id != null && id != "" && id1 != null && id1 != "") {
    //       return this.budgetGeneral.filter((qtreel) => qtreel.ua_id == id && qtreel.typefinancement_id == id1 && qtreel.actived == 1 );

    //     }
    //   };
    // },
// BailleurLierLien() {
//       return (id,id1) => {
//         if (id != null && id != "" && id1 != null && id1 != "") {
//           return this.budgetGeneral.filter((qtreel) => qtreel.ua_id == id && qtreel.economique_id == id1 && qtreel.actived == 1 );

//         }
//       };
//     },,
    BailleurLierLien() {
      //return (id) => {
        
        let objet = this.budgetGeneral.filter((qtreel) => qtreel.ua_id == this.formData.ua_id && qtreel.economique_id == this.formData.ligne_economique_id && qtreel.actived == 1 );
        //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.typefinancement_id);
          });
          let unique = [...new Set(array_exercie)];
          console.log(unique);
          if (unique.length == 0) {
            return [];
          }
          return unique;
        }
        return [];
    // };
    },
afficheObjetDeLaDepense(){
  if(this.formData2.numero_marche!=""){
    return this.objetMarche(this.formData2.numero_marche)
  }
  else if(this.formData2.autre_depense_id !=""){
    return this.objetAutreDepense(this.formData2.autre_depense_id)
  }
  else{
    return ""
  }
},
objetAutreDepense() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersDossierAutreDepense.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.objet;
          }
          return 0;
        }
      };
    },
    recuperationNumeroDemande() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersDemandeEngagement.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.numero_demande;
          }
          return 0;
        }
      };
    },
libelleTypeFinancement() {
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
    libelleSourceFinancement() {
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
BailleurDmdEngagements(){
  return (id) => {
        if (id != null && id != "") {
          return this.gettersBailleurDmdEngagements.filter(
            (qtreel) =>
              qtreel.numero_dmd_engag == id 
          );
        }
      };
},

listePieceJustificative13() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersnomPieceJustificative.filter(
            (qtreel) =>
              qtreel.numero_demande_engagement == id 
          );
        }
      };
    },

    listePieceJustificative1() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersnomPieceJustificative.filter(
            (qtreel) =>
              qtreel.numero_demande_engagement == id 
          );
        }
      };
    },
    RecuperereTaux() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersDossierFacturePiece.find((qtreel) => qtreel.numero_dmd == id);

          if (qtereel) {
            return qtereel.taux;
          }
          return 0;
        }
      };
    },
afficheListePersonne(){

return this.acte_personnels.filter(item=>item.unite_administrative_id==this.formData.ua_id)
 
 
},
conversionMajiscule() {
      return (libelle) => {
        if (!libelle) return null;
        return libelle.toLocaleUpperCase();
      };
    },
libelleTypeProcedure() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersProcedureDerogatoires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },
libelleTypeDepense() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersProcedureTypeDepense.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle_depense
      }
      return 0
        }
      };
    },



AfficheParDroitCommun() {
      //return (id) => {
        
        let objet = this.gettersProcedureTypeDepense.filter(item=>item.Procedures_depenses_id==this.formData.Procedures_depenses_id);
        //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.modalites_execution_id);
          });
          let unique = [...new Set(array_exercie)];
          console.log(unique);
          if (unique.length == 0) {
            return [];
          }
          return unique;
        }
        return [];
    // };
    },
afficheProcedureDepense() {
      return (id,id2) => {
        if (id != null && id != "" && id2 != null && id2 != "") {
          return this.gettersProcedureTypeDepense.filter(qtreel => qtreel.Procedures_depenses_id == id && qtreel.modalites_execution_id == id2);

  
        }
      };
    },
    
afficheModaliteExecution() {
      return id => {
        if (id != null && id != "") {
          return this.gettersProcedureTypeDepense.filter(qtreel => qtreel.Procedures_depenses_id == id);

  
        }
      };
    },
recupereridTypeDepense() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersProcedureTypeDepense.find(qtreel => qtreel.code_depense == id);

      if (qtereel) {
        return qtereel.id
      }
      return 0
        }
      };
    },




    NumeroLiquidation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDossierLiquidation.find(qtreel => qtreel.dmd_engagement_id == id);

      if (qtereel) {
        return qtereel.numero_liquidation
      }
      return 0
        }
      };
    },
     MontantGlobal1(){
      return parseFloat(this.montantMarche(this.recupererMarcheDansDemandeEngagement(this.formData123.dmd_engagement_id)))+parseFloat(this.MontantAvenant(this.recupererMarcheDansDemandeEngagement(this.formData123.dmd_engagement_id)))
    },
     MontantGlobal(){
      return parseFloat(this.montantMarche(this.formData2.numero_marche))+parseFloat(this.MontantAvenant(this.formData2.numero_marche))
    },
    MontantGlobalAutres(){
      return parseFloat(this.montantMarche(this.recupererMarcheDansDemandeEngagement(this.formData123.dmd_engagement_id)))+parseFloat(this.MontantAvenant(this.formData2.numero_marche))
    },
     montantMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.montant_act
      }
      return 0
        }
      };
    },
    // ObjetMarche() {
    //   return id => {
    //     if (id != null && id != "") {
    //        const qtereel = this.marches.find(qtreel => qtreel.id == id);

    //   if (qtereel) {
    //     return qtereel.objet
    //   }
    //   return 0
    //     }
    //   };
    // },
    MontantAvenant() {
      return id => {
        if (id != null && id != "") {
           return this.avenants.filter(qtreel => qtreel.marche_id == id).reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.montant_avenant),
              0
            )
            .toFixed(0);

        }
      };
    },
    fonctionSection(){
        if(this.formData123.typeDossier1==1){
          return this.libelleSection(this.idSection(this.formData.activite_id))
        }
        else if(this.formData123.typeDossier1==0){
          return ""
        }
        else{
return this.libelleSection(this.recupererIdSectionDansDemandeEngagement(this.formData123.dmd_engagement_id))
        }
    },
   
    ProgrammeDotation(){
        if(this.formData123.typeDossier1==1){
          return this.libelleProgramme(this.idProgramme(this.formData.activite_id))
        }
        else if(this.formData123.typeDossier1==0){
          return ""
        }
        else{
return this.libelleProgramme(this.recupererProgrammeDansDemandeEngagement(this.formData123.dmd_engagement_id))
        }
    },
   
    FonctionAction(){
        if(this.formData123.typeDossier1==1){
          return this.libelleAction(this.idAction(this.formData.activite_id))
        }
        else if(this.formData123.typeDossier1==0){
          return ""
        }
        else{
return this.libelleAction(this.recupererActionDansDemandeEngagement(this.formData123.dmd_engagement_id))
        }
    },
    libelleGrandNature() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.grandes_natures.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    FonctionUniteAdministrative(){
        if(this.formData123.typeDossier1==1){
          return ""
        }
        else if(this.formData123.typeDossier1==0){
          return ""
        }
        else{

return this.libelleUa(this.recupererUniteAdministrativeDansDemandeEngagement(this.formData123.dmd_engagement_id))
        }
    },
    FonctionGrandeNature(){
        if(this.formData123.typeDossier1==1){
          return ""
        }
        else if(this.formData123.typeDossier1==0){
          return ""
        }
        else{

return this.libelleGrandNature(this.recupererGrandeNatureDansDemandeEngagement(this.formData123.dmd_engagement_id))
        }
    },
    FonctionProcedureDepense(){
        if(this.formData123.typeDossier1==1){
          return ""
        }
        else if(this.formData123.typeDossier1==0){
          return ""
        }
        else{

return this.conversionMajiscule(this.libelleProcedureDepense(this.recupererProcedureDepenseDansDemandeEngagement(this.formData123.dmd_engagement_id)))
        }
    },
    libelleProcedureDepense() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersProcedureDroitCommuns.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    recupererProcedureDepenseDansDemandeEngagement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.Procedures_depenses_id
      }
      return 0
        }
      };
    },


FonctionTypeEngagement(){
        if(this.formData123.typeDossier1==1){
          return ""
        }
        else if(this.formData123.typeDossier1==0){
          return ""
        }
        else{

return this.conversionMajiscule(this.libelleTypeDepense(this.recupererTypeEngagementDansDemandeEngagement(this.formData123.dmd_engagement_id)))
        }
    },
   
    recupererTypeEngagementDansDemandeEngagement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.type_engagement_id
      }
      return 0
        }
      };
    },






FonctiontypeProcedure(){
        if(this.formData123.typeDossier1==1){
          return ""
        }
        else if(this.formData123.typeDossier1==0){
          return ""
        }
        else{

return this.libelletypeProcedure(this.recuperertypeProcedureDansDemandeEngagement(this.formData123.dmd_engagement_id))
        }
    },
    libelletypeProcedure() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersProcedureDerogatoires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    recuperertypeProcedureDansDemandeEngagement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.type_procedure_id
      }
      return 0
        }
      };
    },












    recupererGrandeNatureDansDemandeEngagement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.grd_nature_id
      }
      return 0
        }
      };
    },


 FonctionLigneEconomique(){
        if(this.formData123.typeDossier1==1){
          return ""
        }
        else if(this.formData123.typeDossier1==0){
          return ""
        }
        else{

return this.libelleLigneEconomique(this.recupererLigneEconomiqueDansDemandeEngagement(this.formData123.dmd_engagement_id))
        }
    },
    recupererObjetDepenseDansDemandeEngagement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.objet_depense
      }
      return 0
        }
      };
    },
    FonctionObjetDepense(){
        if(this.formData123.typeDossier1==1){
          return ""
        }
        else if(this.formData123.typeDossier1==0){
          return ""
        }
        else{

return this.recupererObjetDepenseDansDemandeEngagement(this.formData123.dmd_engagement_id)
        }
    },
     FonctionModePaiement(){
        if(this.formData123.typeDossier1==1){
          return ""
        }
        else if(this.formData123.typeDossier1==0){
          return ""
        }
        else{

return this.recupererLibelleModePaiement(this.recupererIdModePaiementDansDemandeEngagement(this.formData123.dmd_engagement_id))
        }
    },
    FonctionEntreprise(){
        if(this.formData123.typeDossier1==1){
          return ""
        }
        else if(this.formData123.typeDossier1==0){
          return ""
        }
        else{

return this.recupererIdEntrepriseDansDemandeEngagement(this.formData123.dmd_engagement_id)
        }
    },
//     recupererMontantTotalDansDemandeEngagement(this.formData123.dmd_engagement_id)(){
//         if(this.formData123.typeDossier1==1){
//           return ""
//         }
//         else if(this.formData123.typeDossier1==0){
//           return ""
//         }
//         else{

// return this.recupererMontantTotalDansDemandeEngagement(this.formData123.dmd_engagement_id)
//         }
//     },
    recupererMontantTotalDansDemandeEngagement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.total_general
      }
      return 0
        }
      };
    },
//      recupererTresorDansDemandeEngagement(this.formData123.dmd_engagement_id)(){
//         if(this.formData123.typeDossier1==1){
//           return ""
//         }
//         else if(this.formData123.typeDossier1==0){
//           return ""
//         }
//         else{

// return this.recupererTresorDansDemandeEngagement(this.formData123.dmd_engagement_id)
//         }
//     },
    recupererTresorDansDemandeEngagement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.montant_tresor
      }
      return 0
        }
      };
    },
     FonctionEmprunt(){
        if(this.formData123.typeDossier1==1){
          return ""
        }
        else if(this.formData123.typeDossier1==0){
          return ""
        }
        else{

return this.recupererEmpruntDansDemandeEngagement(this.formData123.dmd_engagement_id)
        }
    },
    recupererEmpruntDansDemandeEngagement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.montant_emprunt
      }
      return 0
        }
      };
    },
//      FonctionDon(){
//         if(this.formData123.typeDossier1==1){
//           return ""
//         }
//         else if(this.formData123.typeDossier1==0){
//           return ""
//         }
//         else{

// return this.recupererDonDansDemandeEngagement(this.formData123.dmd_engagement_id)
//         }
//     },
    recupererDonDansDemandeEngagement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.montant_don
      }
      return 0
        }
      };
    },
    recupererLibelleModePaiement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.modepaiements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },
    recupererIdEntrepriseDansDemandeEngagement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.entreprise_id
      }
      return 0
        }
      };
    },
    recupererIdModePaiementDansDemandeEngagement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.mode_paiement_id
      }
      return 0
        }
      };
    },
     FonctionIdMarche(){
        if(this.formData123.typeDossier1==1){
          return ""
        }
        else if(this.formData123.typeDossier1==0){
          return ""
        }
        else{

return this.recupererNumeroMarche(this.recupererMarcheDansDemandeEngagement(this.formData123.dmd_engagement_id))
        }
    },
     recupererNumeroMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.numero_marche
      }
      return 0
        }
      };
    },
    FonctionMontantAvenant(){
        if(this.formData123.typeDossier1==1){
          return ""
        }
        else if(this.formData123.typeDossier1==0){
          return ""
        }
        else{

return this.MontantAvenant(this.recupererMarcheDansDemandeEngagement(this.formData123.dmd_engagement_id))
        }
    },
//      montantMarche(this.recupererMarcheDansDemandeEngagement(this.formData123.dmd_engagement_id))(){
//         if(this.formData123.typeDossier1==1){
//           return ""
//         }
//         else if(this.formData123.typeDossier1==0){
//           return ""
//         }
//         else{

// return this.montantMarche(this.recupererMarcheDansDemandeEngagement(this.formData123.dmd_engagement_id))
//         }
//     },
    recupererMarcheDansDemandeEngagement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.marche_id
      }
      return 0
        }
      };
    },
    FonctionLibelleEconomique(){
        if(this.formData123.typeDossier1==1){
          return ""
        }
        else if(this.formData123.typeDossier1==0){
          return ""
        }
        else{

return this.libelleEconomique(this.recupererLigneEconomiqueDansDemandeEngagement(this.formData123.dmd_engagement_id))
        }
    },
    libelleEconomique() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.plans_budgetaires.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.code.concat("  ", qtereel.libelle);
          }
          return 0;
        }
      };
    },
    recupererLigneEconomiqueDansDemandeEngagement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.ligne_economique_id
      }
      return 0
        }
      };
    },

 FonctionProcedureDroitCommun(){
        if(this.formData123.typeDossier1==1){
          return ""
        }
        else if(this.formData123.typeDossier1==0){
          return ""
        }
        else{

return this.recupererProcedureDroitCommunDansDemandeEngagement(this.formData123.dmd_engagement_id)
        }
    },
    recupererProcedureDroitCommunDansDemandeEngagement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.type_procedure_id
      }
      return 0
        }
      };
    },
 FonctionIdEntreprise(){
        if(this.formData123.typeDossier1==1){
          return ""
        }
        else if(this.formData123.typeDossier1==0){
          return ""
        }
        else{

return this.recupererIdEntreprise(this.formData123.dmd_engagement_id)
        }
    },
    recupererIdEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.entreprise_id
      }
      return 0
        }
      };
    },
    
     recupererCodeActiviteDansDemandeEngagement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.activite_id
      }
      return 0
        }
      };
    },
      recupererUniteAdministrativeDansDemandeEngagement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.ua_id
      }
      return 0
        }
      };
    },
    recupererActionDansDemandeEngagement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.action_id
      }
      return 0
        }
      };
    },
     recupererProgrammeDansDemandeEngagement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.programme_id
      }
      return 0
        }
      };
    },
      recupererIdSectionDansDemandeEngagement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.section_id
      }
      return 0
        }
      };
    },
     veifEquipementExist() {
      return this.formData123.typeDossier1 != 1;
    },
recuppererLeDernierNiveau() {
      
           return this.plans_budgetaires.filter(qtreel => this.recupererStructure(qtreel.structure_budgetaire_id) == 6 );

      
       
    },
recuppererLeDernierNiveauActivite() {
      
           return this.plans_activites.filter(qtreel => this.recupererStructureActivite_id(qtreel.structure_activites_id) == 2 );

      
       
    },
    recupererStructureActivite_id() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.structures_activites.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.niveau
      }
      return 0
        }
      };
    },
recupererStructure() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.structures_budgetaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.niveau
      }
      return 0
        }
      };
    },
    recupereLeNumeroCompte() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.comptes.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.rib;
          }
          return "";
        }
      };
    },
    recupereIdEntreprise() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.acteEffetFinanciers.find(
            (qtreel) => qtreel.marche_id == id
          );

          if (qtereel) {
            return qtereel.entreprise_id;
          }
          return "";
        }
      };
    },
    recupereLeNumeroCompteid() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.acteEffetFinanciers.find(
            (qtreel) => qtreel.marche_id == id
          );

          if (qtereel) {
            return qtereel.compte_id;
          }
          return "";
        }
      };
    },

    cumulMontantMarche() {
      const val =
        parseFloat(this.TotalGeneralDemandeEngagement) +
        parseFloat(this.cumulMarche(this.formData2.numero_marche));

      if (val) {
        return parseInt(val).toFixed(0);
      }

      return 0;
    },

    cumulReservation() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersDossierMandat
            .filter(
              (qtreel) =>
                this.numeroReservation(qtreel.demande_engagement_id) == id
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.montant_engage),
              0
            )
            .toFixed(0);
        }
      };
    },

    numeroReservation() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersDemandeEngagement.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.numero_op_systeme;
          }
          return "";
        }
      };
    },

    cumulMarche() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersDossierMandat
            .filter(
              (qtreel) => this.numeroMarche(qtreel.demande_engagement_id) == id
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.montant_engage),
              0
            )
            .toFixed(0);
        }
      };
    },

    numeroMarche() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersDemandeEngagement.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.numero_marche;
          }
          return "";
        }
      };
    },
    ListeDesMarcheAtribuer() {
      return (id) => {
        if (id != null && id != "") {
          return this.listedesMarcheUa.filter((qtreel) => qtreel.ua_id == id);
        }
      };
    },
    listedesMarcheUa() {
      if (this.noDCfNoAdmin) {
        let colect = [];
        this.acteEffetFinanciers.filter((item) => {
          let val = this.getterUniteAdministrativeByUser.find(
            (row) => row.unite_administrative_id == item.ua_id
          );
          if (val != undefined) {
            colect.push(item);
            return item;
          }
        });
        return colect;
      }

      return this.acteEffetFinanciers;
    },

    ListeDesMarcheAttribuer() {
      return (id) => {
        if (id != null && id != "") {
          return this.acteEffetFinanciers.filter(
            (qtreel) => qtreel.ua_id == id
          );
        }
      };
    },

    affcherTauxEnCours() {
      const norme = this.taux.find((normeEquipe) => normeEquipe.encours == 1);

      if (norme) {
        return norme.libelle;
      }
      return 0;
    },
    tauxArrondit() {
      const norme = this.taux.find((normeEquipe) => normeEquipe.encours == 1);

      if (norme) {
        return norme.arrondit;
      }
      return 0;
    },
MontantFactureTTC() {
      const val =
        parseFloat(this.MontantFactureHt) +
        parseFloat(this.montantTva);

      if (val) {
        return parseInt(val).toFixed(0);
      }

      return 0;
    },
    montantTva() {
      const val =
        parseFloat(this.FormDataFacture.prix_unitaire) * parseFloat(this.afficherEnorere);

      if (val) {
        return parseInt(val).toFixed(0);
      }

      return 0;
    },
    afficherEnorere() {
      if (this.FormDataFacture.exonere == 0) {
        return 0;
      } else {
        return this.tauxArrondit;
      }
    },
    

    SommeDesDmdParBonCommande() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersDossierFacturePiece
            .filter((qtreel) => qtreel.numero_dmd == id)
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.total_facture_ht),
              0
            )
            .toFixed(0);
        }
      };
    },
    listeFacturePiece() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersDossierFacturePiece.filter(
            (qtreel) => qtreel.numero_dmd == id
          );
        }
      };
    },
     listeFacturePiece12() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersDossierFacturePiece.filter(
            (qtreel) => qtreel.numero_dmd == id
          );
        }
      };
    },
    BailleurDmdEngagements12(){
  return (id) => {
        if (id != null && id != "") {
          return this.gettersBailleurDmdEngagements.filter(
            (qtreel) =>
              qtreel.numero_dmd_engag == id 
          );
        }
      };
},
 
    
    MontantFactureHt() {
      const val =
        parseFloat(this.FormDataFacture.prix_unitaire) *
        parseFloat(this.FormDataFacture.quantite);

      if (val) {
        return parseInt(val).toFixed(0);
      }

      return 0;
    },
    listePieceJustifica() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.typeFactures.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.libelle;
          }
          return "";
        }
      };
    },
    afficheFichierJoint() {
      return (id, id2) => {
        if (id != null && id != "" && id2 != null && id2 != "") {
          const qtereel = this.FichierJoinDmdEngagement.find(
            (qtreel) =>
              qtreel.numero_demande_engagement == id &&
              qtreel.numero_fichier == id2
          );

          if (qtereel) {
            return qtereel.fichier;
          }
          return "";
        }
      };
    },
    calculCumultresorAutre() {
      const val =
        parseFloat(
          this.CreditAutoriseTresor(this.recupererUniteAdministrativeDansDemandeEngagement(this.formData123.dmd_engagement_id),this.recupererLigneEconomiqueDansDemandeEngagement(this.formData123.dmd_engagement_id))
        ) - parseFloat(this.recupererTresorDansDemandeEngagement(this.formData123.dmd_engagement_id));
      return parseFloat(val).toFixed(0);
    },
    
    calculCumultresor() {
      const val =
        parseFloat(
          this.CreditAutoriseTresor(this.formData.ua_id,this.formData.ligne_economique_id)
        ) - parseFloat(this.formData.montant_tresor);
      return parseFloat(val).toFixed(0);
    },
calculCumulDon() {
      const val =
        parseFloat(
          this.CreditAutoriseDon(this.formData.ua_id,this.formData.ligne_economique_id)
        ) - parseFloat(this.formData.montant_tresor);
      return parseFloat(val).toFixed(0);
    },
    calculCumul() {
      const val =
        parseFloat(this.TotalGeneralDemandeEngagement) +
        parseFloat(this.CumulDemande(this.formData.ua_id,this.formData.ligne_economique_id));
      return parseFloat(val).toFixed(0);
    },
calculCumulAUtres78() {
      const val =
        parseFloat(this.recupererMontantTotalDansDemandeEngagement(this.formData123.dmd_engagement_id)) +
        parseFloat(this.CumulDemande(this.recupererUniteAdministrativeDansDemandeEngagement(this.formData123.dmd_engagement_id),this.recupererLigneEconomiqueDansDemandeEngagement(this.formData123.dmd_engagement_id)));
      return parseFloat(val).toFixed(0);
    },
    MontantDisponible45() {
      const val =
        parseFloat(this.CreditAutorise(this.recupererUniteAdministrativeDansDemandeEngagement(this.formData123.dmd_engagement_id),this.recupererLigneEconomiqueDansDemandeEngagement(this.formData123.dmd_engagement_id))) -
        parseFloat(this.calculCumulAUtres78);
      return parseFloat(val).toFixed(0);
    },
    MontantDisponible() {
      const val =
        parseFloat(this.CreditAutorise(this.formData.ua_id,this.formData.ligne_economique_id)) -
        parseFloat(this.calculCumul);
      return parseFloat(val).toFixed(0);
    },
    CumulDemande: function () {
      return (id,id1) => {
        if (id != "",id1 != "") {
          let valInite = 0;
          return this.gettersDemandeEngagement
            .filter(
              (normeEquipe) =>
                (normeEquipe.ua_id == id && normeEquipe.ligne_economique_id == id1 &&
                  normeEquipe.decision_cf == 8) ||
                (normeEquipe.ua_id == id && normeEquipe.ligne_economique_id == id1 &&
                  normeEquipe.decision_cf == 9)
            )
            .reduce(function (total, currentVal) {
              return total + parseFloat(currentVal.total_general);
            }, valInite);
        }
      };
    },
    CreditAutorise() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          const qtereel = this.budgetGeneral.find(
            (qtreel) => qtreel.ua_id == id  && qtreel.economique_id == id1 && qtreel.actived == 1 
          );

          if (qtereel) {
            return qtereel.Dotation_Initiale;
          }
          return "";
        }
      };
    },
    CreditAutoriseTresor() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          const qtereel = this.budgetGeneral.find(
            (qtreel) =>qtreel.ua_id == id &&
              qtreel.economique_id == id1 &&
              qtreel.actived == 1 &&
              qtreel.typefinancement_id == 14
          );

          if (qtereel) {
            return qtereel.Dotation_Initiale;
          }
          return 0;
        }
      };
    },
    CreditAutoriseDon() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          const qtereel = this.budgetGeneral.find(
            (qtreel) =>qtreel.ua_id == id &&
              qtreel.economique_id == id1 &&
              qtreel.actived == 1 &&
              qtreel.typefinancement_id == 13
          );

          if (qtereel) {
            return qtereel.Dotation_Initiale;
          }
          return 0;
        }
      };
    },
    CreditAutoriseEmprunt() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          const qtereel = this.budgetGeneral.find(
            (qtreel) =>qtreel.ua_id == id &&
              qtreel.economique_id == id1 &&
              qtreel.actived == 1 &&
              qtreel.typefinancement_id == 15
          );

          if (qtereel) {
            return qtereel.Dotation_Initiale;
          }
          return 0;
        }
      };
    },
    anneeAmort() {
      const norme = this.exercices_budgetaires.find(
        (normeEquipe) => normeEquipe.encours == 1
      );

      if (norme) {
        return norme.annee;
      }
      return 0;
    },
    libelleAction() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.plans_activites.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.code;
          }
          return 0;
        }
      };
    },
    libelleActivite() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.plans_activites.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.code.concat("  ", qtereel.libelle);
          }
          return 0;
        }
      };
    },
    libelleProgramme() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.plans_programmes.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.code.concat("  ", qtereel.libelle);
          }
          return 0;
        }
      };
    },
    libelleSection() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.sections.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.code_section.concat("  ", qtereel.nom_section);
          }
          return 0;
        }
      };
    },
    libelleMarche() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.marches.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.objet;
          }
          return 0;
        }
      };
    },
    libelleLigneEconomique() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.plans_budgetaires.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.code.concat("  ", qtereel.libelle);
          }
          return 0;
        }
      };
    },
    idSection() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.budgetGeneral.find(
            (qtreel) => qtreel.activite_id == id
          );

          if (qtereel) {
            return qtereel.section_id;
          }
          return 0;
        }
      };
    },
    idProgramme() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.budgetGeneral.find(
            (qtreel) => qtreel.activite_id == id
          );

          if (qtereel) {
            return qtereel.program_id;
          }
          return 0;
        }
      };
    },
    idActivite() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.budgetGeneral.find(
            (qtreel) => qtreel.economique_id == id
          );

          if (qtereel) {
            return qtereel.activite_id;
          }
          return 0;
        }
      };
    },
    objetMarche() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.marches.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.objet;
          }
          return 0;
        }
      };
    },
    Numero_CC() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.entreprises.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.numero_cc;
          }
          return 0;
        }
      };
    },
    Numero_Nom_Entreprise() {
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
    Numero_adresse_Entreprise() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.entreprises.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.adresse;
          }
          return 0;
        }
      };
    },

    libelleUa() {
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
    idAction() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.budgetGeneral.find(
            (qtreel) => qtreel.activite_id == id
          );

          if (qtereel) {
            return qtereel.action_id;
          }
          return 0;
        }
      };
    },
    libelleUniteAdministrative() {
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
    TotalGeneralDemandeEngagement() {
      const val =
        parseFloat(this.formData.montant_tresor) +
        parseFloat(this.formData.montant_don) +
        parseFloat(this.formData.montant_emprunt);
      return parseFloat(val).toFixed(0);
    },

    ligneEconomique() {
      return (id, id2) => {
        if (id != null && id != "" && id2 != null && id2 != "") {
          return this.budgetGeneral.filter(
            (qtreel) =>
              qtreel.ua_id == id &&
              qtreel.gdenature_id == id2 &&
              qtreel.actived == 1
          );
        }
      };
    },
    numeroOrdre() {
      return (id) => {
        if (id != null && id != "") {
          return (
            this.gettersnomPieceJustificative.filter(
              (qtreel) =>
                qtreel.numero_demande_engagement == id &&
                qtreel.etat_piece == "proforma"
            ).length + 1
          );
        }
      };
    },
    numeroOrdreDefinitive() {
      return (id) => {
        if (id != null && id != "") {
          return (
            this.gettersnomPieceJustificative.filter(
              (qtreel) =>
                qtreel.numero_demande_engagement == id &&
                qtreel.etat_piece == "definitive"
            ).length + 1
          );
        }
      };
    },

    listePieceJustificative() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersnomPieceJustificative.filter(
            (qtreel) =>
              qtreel.numero_demande_engagement == id &&
              qtreel.etat_piece == "proforma"
          );
        }
      };
    },
    listePieceJustificativeDefinitive() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersnomPieceJustificative.filter(
            (qtreel) =>
              qtreel.numero_demande_engagement == id &&
              qtreel.etat_piece == "definitive"
          );
        }
      };
    },
    idEntreprise() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.acteEffetFinanciers.find(
            (qtreel) => qtreel.numero_marche == id
          );

          if (qtereel) {
            return qtereel.entreprise_id;
          }
          return 0;
        }
      };
    },

    idAutreDepense() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersDossierAutreDepense.find(
            (qtreel) => qtreel.reference == id
          );

          if (qtereel) {
            return qtereel.id;
          }
          return 0;
        }
      };
    },
    idActeeffect() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.acteEffetFinanciers.find(
            (qtreel) => qtreel.numero_marche == id
          );

          if (qtereel) {
            return qtereel.id;
          }
          return 0;
        }
      };
    },
    ua_DemandeEngaement() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersDemandeEngagement.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.ua_id;
          }
          return 0;
        }
      };
    },
    Objet_DemandeEngaement() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersDemandeEngagement.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.objet_depense;
          }
          return 0;
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
      "supprimerDossierFacture",
     "ajouterBonCommandes",
     "ajouterDossierMandat",
     "ajouterDossierLiquidation",
      "ModifierDateEffetFinancier",
      "modifierMarche2",
      "ajouterBailleurDmdEngagements",
      "modifierBailleurDmdEngagements",
      "supprimerBailleurDmdEngagements"
    ]),
    ...mapActions("personnelUA", ["ajouterFichierJointDmd"]),
ajouterBudgetaireLocal () {
  var objet={
    ...this.BailleurDmd,
    numero_dmd_engag:this.formData.numero_demande
  }
      this.ajouterBailleurDmdEngagements(objet)

        this.BailleurDmd = {
              
             
            
        }
    },
    pagePrecedent() {
      window.history.back();
    },
    genererEnPdf() {
      this.$htmlToPaper("printMe");
    },

    // afficherModalListePersonnel() {
    //   this.$router.push({ name: "ListeUaExecutionBudgetaire" });
    // },

    OnchangeFichier(e) {
      const files = e.target.files;
      this.selectedFile = event.target.files[0];
      Array.from(files).forEach((file) => this.addFichierPDF(file));
    },
    addFichierPDF(file) {
      if (!file.type.match("application/pdf")) {
        this.info_pdf = true;
        console.log(`${file.name} le fichier doit etre un PDF`);
        return;
      }
      this.info_pdf = false;
      let reader = new FileReader();
      let vm = this;
      reader.onload = (e) => {
        vm.imagePDF = "pdf.png";
        vm.namePDF = file.name;
        vm.fichierPDF = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    afficherModalModifierTypeTexte(id) {
      this.$("#ModifierexampleModal").modal({
        backdrop: "static",
        keyboard: false,
      });

      this.editpiece = this.gettersnomPieceJustificative.find(
        (item) => item.id == id
      );
    },
    // fonction pour vider l'input modification
    modifierTypeTexteLocal() {
      this.modifierPieceJustificative(this.editpiece);
      this.$("#ModifierexampleModal").modal("hide");
      // this.editTypeTexte = {
      //   code: "",
      //   libelle: ""
      // };
    },
    AjouterDemandeEngagement() {
     
        var nouvelObjet = {
        
        dmd_engagement_id: this.formData123.dmd_engagement_id,
        
        numero_liquidation:this.formData1122.numero,
        date_liquidation:this.formData1122.date
      };
      this.ajouterDossierLiquidation(nouvelObjet);
    
      
     
    },
    AjoutePieceJustific() {
      if (this.formData.type_procedure_id == 7) {
        this.intitule = this.anneeAmort + "" + this.formData.numero_demande;
        var nouvelObjetProforma = {
          numero_ordre: this.numeroOrdre(this.formData.numero_demande),
          numero_demande_engagement: this.formData.numero_demande,
          numero_dmd_combine: this.intitule,
          libelle: this.formData1.libelle,
          reference: this.formData1.reference,
          date_piece: this.formData1.date_piece,
          etat_piece: "proforma",
        };

        this.ajouterPieceJustificative(nouvelObjetProforma);
        this.ajouterFichierJoin();
        this.$("#exampleModal").modal("hide");
        this.formData1 = {
          numero_demande_engagement: "",
          numero_dmd_combine: "",
          libelle: "",
          reference: "",
          date_piece: "",
        };
      } else {
        this.intitule = this.anneeAmort + "" + this.formData.numero_demande;
        var nouvelObjetdefinitive = {
          numero_ordre: this.numeroOrdreDefinitive(
            this.formData.numero_demande
          ),
          numero_demande_engagement: this.formData.numero_demande,
          numero_dmd_combine: this.intitule,
          libelle: this.formData1.libelle,
          reference: this.formData1.reference,
          date_piece: this.formData1.date_piece,
          etat_piece: "definitive",
        };

        this.ajouterPieceJustificative(nouvelObjetdefinitive);
        this.ajouterFichierJoin();
        this.$("#exampleModal").modal("hide");
        this.formData1 = {
          numero_demande_engagement: "",
          numero_dmd_combine: "",
          libelle: "",
          reference: "",
          date_piece: "",
        };
      }
    },

    
    ajouterFichierJoin() {
      if (this.formData.type_procedure_id == 7) {
        const formData = new FormData();
        this.intitule = this.anneeAmort + "" + this.formData.numero_demande;
        formData.append("fichier", this.selectedFile, this.selectedFile.name);

        formData.append("numero_dmd_combine", this.intitule);
        formData.append(
          "numero_demande_engagement",
          this.formData.numero_demande
        );
        formData.append(
          "numero_fichier",
          this.numeroOrdre(this.formData.numero_demande)
        );
        formData.append("etat_piece", "proforma");
        let config = {
          header: {
            "Content-Type": "multipart/form-data",
          },
        };
        this.ajouterFichierJointDmd(formData, config);
      } else {
        const formData = new FormData();
        this.intitule = this.anneeAmort + "" + this.formData.numero_demande;
        formData.append("fichier", this.selectedFile, this.selectedFile.name);

        formData.append("numero_dmd_combine", this.intitule);
        formData.append(
          "numero_demande_engagement",
          this.formData.numero_demande
        );
        formData.append(
          "numero_fichier",
          this.numeroOrdre(this.formData.numero_demande)
        );
        formData.append("etat_piece", "definitive");
        let config = {
          header: {
            "Content-Type": "multipart/form-data",
          },
        };
        this.ajouterFichierJointDmd(formData, config);
      }
    },

    ajouterFacture() {
      if (this.formData.type_procedure_id == 7) {
        this.intitule = this.anneeAmort + "" + this.formData.numero_demande;
        var nouvelObjetproforma = {
          ...this.FormDataFacture,
          total_facture_ht: this.MontantFactureHt,
          numero_dmd_engagement: this.intitule,
          numero_dmd: this.formData.numero_demande,
          etat_acticle: "proforma",
           taux:this.afficherEnorere,
            montant_ttc:this.MontantFactureTTC,
        };

        this.ajouterDossierFacture(nouvelObjetproforma);
        this.FormDataFacture = {
          designation: "",
          quantite: "0",
          prix_unitaire: "0",
          total_facture_ht: "0",
        };
      } else {
        this.intitule = this.anneeAmort + "" + this.formData.numero_demande;
        var nouvelObjetdefinitive = {
          ...this.FormDataFacture,
          total_facture_ht: this.MontantFactureHt,
          numero_dmd_engagement: this.intitule,
          numero_dmd: this.formData.numero_demande,
          etat_acticle: "definitive",
           taux:this.afficherEnorere,
           exonere:this.FormDataFacture.exonere,
             montant_ttc:this.MontantFactureTTC,
        };

        this.ajouterDossierFacture(nouvelObjetdefinitive);
        this.FormDataFacture = {
          designation: "",
          quantite: "0",
          prix_unitaire: "0",
          total_facture_ht: "0",
        };
      }
    },
  

    ajouterFonctionGroupe() {
      //  this.ajouterFichierJoin()
      this.AjouterDemandeEngagement();
      this.formData = {
        mode: "",
        numero_demande: "",
        ligne_economique_id: "",
        ua_id: "",
        grd_nature_id: "",
        type_procedure_id: "",
        autre_type_engagement: "",
        numero_op_at: "",
        ref_juridique: "",
        type_engagement_id: "",
        Référence_bancaires: "",
        mode_paiement_id: "",
        montant_don: "",
        montant_emprunt: "",
        montant_tresor: "",
      };
      this.formData2 = {
        Numéro_cc_fournisseur: "",
        numero_cc_autre1: "",
        numero_cc_autre: "",
      };
    },

 afficherModalAjouteBailleurDemANDE() {
      this.$("#Bailleurdemande").modal({
        backdrop: "static",
        keyboard: false,
      });
    },
    afficherModalAjouterFacture() {
      this.$("#exampleModal1").modal({
        backdrop: "static",
        keyboard: false,
      });
    },
    afficherModalAjouterService() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false,
      });
    },

    apercuFacture() {
      this.$("#ApercuFacture").modal({
        backdrop: "static",
        keyboard: false,
      });
    },
 afficherModalListePersonnel(){
                window.history.back()
            },
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
    formatageSomme: formatageSomme,
  },
};
</script>

<style scoped>
.taille {
  width: 60%;
  margin: 0 -40%;
  height: 50%;
}
.tailles {
  width: 64%;
  margin: 0 -30%;
}
.ApercuFacture1 {
  width: 64%;
  margin: 0 -30%;

  border: 2px solid #000;
}
</style>
