
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
              <h5>Ajouter Ordre Paiement Definitive</h5>
              <!-- <div align="right">
                Search:
                <input type="search" placeholder />
              </div>-->
            </div>
 <table class="table table-bordered table-striped">
   <tr>
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
            <td>
                            <div class="control-group">
                                                    <label class="control-label">Type Ordre paiement <code style="color:red;font-size:16px">*</code></label>
                                                    <div class="controls">
                                                        <input
                    type="text"
                    style="border:1px solid #000;font-size:15px"
                   v-model="formData78.typeOp"
                    class="span"
                    readonly
                  />
                                                        
                                                    </div>
                                                </div>
                        </td>
          <td>
              <div class="control-group">
                <label class="control-label">Numéro Ordre paiement Provisoire<code style="color:red;font-size:16px">*</code></label>
                
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000;font-size:15px"
                   v-model="formData.numero_ordre_anulation"
                   v-on:keyup="rechercheListeMarche()"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">{{detailOpProvisoire.type_financement_id}}Numéro OP Provisoire{{detailOpProvisoire.recupererIdprovisoire}}<code style="color:red;font-size:16px">*</code></label>
                
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000;font-size:15px"
                   :value="recupererNumeroOPProvisoire(detailOpProvisoire.recupererId)"
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Numéro OP Définitive<code style="color:red;font-size:16px">*</code></label>
                
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000;font-size:15px"
                   v-model="formData.numero_Op_Definitive"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Date OP définitive<code style="color:red;font-size:16px">*</code></label>
                
                <div class="controls">
                  <input
                    type="date"
                    style="border:1px solid #000;font-size:15px"
                   v-model="formData.date_op_definitif"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
   </tr>
  
   </table>
            <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#INFORMATIONUA">IMPUTATION BUDGETAIRE</a>
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
                <label class="control-label">Section</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   :value="libelleSection(detailOpProvisoire.section_id)"
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
                   :value="libelleProgramme(detailOpProvisoire.programme_id)"
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
                    style="border:1px solid #000"
                   :value="libelleAction(detailOpProvisoire.action_id)"
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
                                 <input
                    type="text"
                    style="border:1px solid #000"
                   :value="libelleUniteAdministrative(detailOpProvisoire.unite_administrative_id)"
                    class="span"
                    readonly
                  />
                                <!-- <model-list-select style="border:1px solid #000"
                                                   class="wide"
                                                   :list="listeDesUa"
                                                   v-model="idUa(this.libelleLigneEconomiqueParent(this.recupererIdLigneEconomique(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId))))"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder=""
                                >

                                </model-list-select>
                                 <code style="color:red;font-size:12px" v-if="idUa(this.libelleLigneEconomiqueParent(this.recupererIdLigneEconomique(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId))))==''">Veuillez renseigner ce champ</code> -->
                            </td>
                           
                             <td>
                <div class="control-group">
                  <label class="control-label">Activité<code style="color:red;font-size:16px">*</code></label>
                  <div class="controls">
                     <input
                    type="text"
                    style="border:1px solid #000"
                   :value="libelleAction(detailOpProvisoire.activite_id)"
                    class="span"
                    readonly
                  />
                    <!-- <select v-model="idAction(this.libelleLigneEconomiqueParent(this.recupererIdLigneEconomique(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId))))" class="span" style="border:1px solid #000">
                     <option
                        v-for="typeFact in filtrerActivite(idUa(this.libelleLigneEconomiqueParent(this.recupererIdLigneEconomique(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId)))))"
                        :key="typeFact[0].id"
                        :value="typeFact[0].activite_id"
                      >{{NomActivite(typeFact[0].activite_id)}}</option>
                    </select>
                     <code style="color:red;font-size:12px" v-if="idAction(this.libelleLigneEconomiqueParent(this.recupererIdLigneEconomique(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId))))==''">Veuillez renseigner ce champ</code> -->
                  </div>
                </div>
              </td>
               <td>
                <div class="control-group">
                  <label class="control-label">Sous Bugdet</label>
                  <div class="controls">
                    <input
                    type="text"
                    style="border:1px solid #000"
                   :value="recupererLibelleSousBudget(detailOpProvisoire.sous_budget_id)"
                                      class="span"
                    readonly
                  />
                    <!-- <select v-model="recupererIdSousBudget(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId))" class="span" style="border:1px solid #000">
                     <option></option>
                      <option
                        v-for="gdenature in RecupererSousBudget(idUa(this.libelleLigneEconomiqueParent(this.recupererIdLigneEconomique(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId)))),idAction(this.libelleLigneEconomiqueParent(this.recupererIdLigneEconomique(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId)))))"
                        :key="gdenature.id"
                        :value="gdenature.id"
                      >{{gdenature.activite_enfant}}</option>
                    </select> -->
                     
                  </div>
                </div>
              </td>
              <td>
                 <template v-if="comparaison(this.detailOpProvisoire.activite_id)==this.detailOpProvisoire.activite_id">
                        

                      
              <div class="control-group">
                <label class="control-label">Classification Economique</label>
                <div class="controls">
                 
 <!-- <select v-model="recupererIdLigneEconomique(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId))" class="span" style="border:1px solid #000" >
                     <option></option>
                     <option
                        v-for="typeFact in afficheLesSousBudgetLigneBudgetaire(idAction(this.libelleLigneEconomiqueParent(this.recupererIdLigneEconomique(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId)))),recupererIdSousBudget(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId)))"
                        :key="typeFact.id"
                        :value="typeFact.ligneeconomique_id"
                      >{{libelleLigneEconomique(typeFact.ligneeconomique_id)}}</option>
                  </select> -->
               <input
                    type="text"
                    style="border:1px solid #000"
                   :value="libelleLigneEconomique(detailOpProvisoire.ligne_economique_id)"
                                      class="span"
                    readonly
                  />
                 
                </div>
              </div>
              
                     
                    
                     

                     </template>
                    <template v-else>
                        

                      
              <div class="control-group">
                <label class="control-label">Classification Economique</label>
                <div class="controls">
                 
 
                 <!-- <select v-model="recupererIdLigneEconomique(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId))" class="span" style="border:1px solid #000" >
                    <option></option>
                     <option
                        v-for="typeFact in RecupererlibelleLigneEconomique(idUa(this.libelleLigneEconomiqueParent(this.recupererIdLigneEconomique(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId)))),idAction(this.libelleLigneEconomiqueParent(this.recupererIdLigneEconomique(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId)))))"
                        :key="typeFact.id"
                        :value="typeFact.ligneeconomique_id"
                      >{{libelleLigneEconomique(typeFact.ligneeconomique_id)}}</option>
                  </select> -->
<input
                    type="text"
                    style="border:1px solid #000"
                   :value="libelleLigneEconomique(detailOpProvisoire.ligne_economique_id)"
                                      class="span"
                    readonly
                  />
                </div>
              </div>
                       
            
                     

                     </template>
              </td>
               
               
                     </tr>
                  
          </table>
                    </div>
                  </div>
                  <table class="table table-bordered table-striped">
                    <tr>
                      <td>
                        <div class="control-group">
                <label class="control-label">Type de depense</label>
                <div class="controls">
                <input
                  :value="recupererTypeDepense(this.detailOpProvisoire.recupererId)"
                    type="text"
                    style="border:1px solid #000"
                   
                    class="span"
                    
                  />
 
                 <!-- <select v-model="formData.typedepense" class="span" style="border:1px solid #000" >
                    <option value="1">Marché</option>
                     <option value="2">Autres</option>

                  </select> -->

                </div>
              </div>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </table>
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#ENGAGEMENT">REFERENCES DU CREANCIER</a>
                        
                      </li>
                       
                     
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                    <div id="ENGAGEMENT" class="tab-pane active">
                       <table
                      class="table table-bordered table-striped"
                      v-if="recupererTypeDepense(this.detailOpProvisoire.recupererId)=='Personnel'"
                      
                    >
                   <tr>
                        
                        <td>
                      <div class="control-group">
                        <label class="control-label">Béneficiaire</label>
                        <div class="controls">
                          <select
                            v-model="detailOpProvisoire.auteur_perso_id"
                            class="span"
                            style="border: 1px solid #000"
                          >
                            <option value="0"></option>
                            <option v-for="depense in PersonnelParUA(this.formData.unite_administrative_id)" :key="depense.id" 
               :value="depense.id">{{depense.matricule}} =>{{depense.nom}} {{depense.prenom}}</option>
                          </select>
                        </div>
                      </div>
                    </td>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label">Banque</label>

                            <div class="controls">
                              <input
                                :value="libelleBanque(Recup_Banque(detailOpProvisoire.auteur_perso_id))"
                                type="text"
                                style="border: 1px solid #000"
                                class="span"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label">Compte Bancaires</label>

                            <div class="controls">
                              <input
                              :value="Recup_Numero_cOMPTE(detailOpProvisoire.auteur_perso_id)"
                                type="text"
                                style="border: 1px solid #000"
                                class="span"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <label
                            >Mois Paiement
                            <code style="color: red; font-size: 16px">*</code>
                          </label>
                           <select
                            v-model="detailOpProvisoire.Mois_paiement"
                            class="span"
                            style="border: 1px solid #000"
                          >
                          <option value="0"></option>
                            <option value="Janvier">Janvier</option>
                           <option value="Février">Février</option>
                           <option value="Mars">Mars</option>
                           <option value="Avril">Avril</option>
                           <option value="Mai">Mai</option>
                           <option value="Juin">Juin</option>
                           <option value="Juillet">Juillet</option>
                           <option value="Août">Août</option>
                           <option value="Septembre">Septembre</option>
                           <option value="Octobre">Octobre</option>
                           <option value="Novembre">Novembre</option>
                           <option value="Dcembre">Dcembre</option>
                          </select>
                         
                        </td>
                   </tr>
                   <tr>
                     <td colspan="4">
                          <div class="control-group">
                            <label class="control-label">Objet </label>

                            <div class="controls">
                              <input
                                v-model="detailOpProvisoire.odjet_autre_depense"
                                type="text"
                                style="border: 1px solid #000"
                                class="span"
                              />
                            </div>
                          </div>
                        </td>
                   </tr>
                    </table>
                      <table class="table table-bordered table-striped" v-if="recupererTypeDepense(this.detailOpProvisoire.recupererId)=='Autres'">
          <tr>
             
              <td colspan="">
                <div class="control-group">
                  <label class="control-label" >NOM</label>
                 
                  <div class="controls">
                   
                     <input
               v-model="detailOpProvisoire.nom_autre_depense"
                    type="text"
                    style="border:1px solid #000"
                  
                    class="span"
                   
            readonly
                   
                  />
                
                  </div>
                </div>
              </td>
              <td colspan="">
                <div class="control-group">
                  <label class="control-label" >COMPTE CONTRIBUABLE</label>
                 
                  <div class="controls">
                   
                     <input
                    v-model="detailOpProvisoire.compte_autre_depense"
                    type="text"
                    style="border:1px solid #000"
                  
                    class="span"
                   
                    readonly
                    
                  />
                
                  </div>
                </div>
              </td>
               <td colspan="">
                <div class="control-group">
                  <label class="control-label" >ADRESSE</label>
                 
                  <div class="controls">
                   
                     <input
                     v-model="detailOpProvisoire.adresse"
                    type="text"
                    style="border:1px solid #000"
                   
                    class="span"
                   readonly
                   
                   
                  />
                
                  </div>
                </div>
              </td>
         
          <td colspan="">
                <div class="control-group">
                  <label class="control-label" >REFERENCES BANCAIRES</label>
                 
                  <div class="controls">
                   
                     <input
                     
                    type="text"
                    style="border:1px solid #000"
                    v-model="detailOpProvisoire.reference_autre_depense"
                    class="span"
                  
                    
                  />
                
                  </div>
                </div>
              </td>
         
               
             
         
          </tr>
          
          
           </table>
                  <table class="table table-bordered table-striped" v-if="recupererTypeDepense(this.detailOpProvisoire.recupererId)=='Marche'">
          <tr>
             
              <td colspan="">
                <div class="control-group">
                  <label class="control-label" >NOM</label>
                 
                  <div class="controls">
                   
                     <input
                     readonly
                    type="text"
                    style="border:1px solid #000"
                   :value="Numero_Nom_Entreprise(detailOpProvisoire.entreprise_id)"
                    class="span"
                   
            
                   
                  />
                
                  </div>
                </div>
              </td>
              <td colspan="">
                <div class="control-group">
                  <label class="control-label" >COMPTE CONTRIBUABLE</label>
                 
                  <div class="controls">
                   
                     <input
                     readonly
                    type="text"
                    style="border:1px solid #000"
                  :value="Numero_CC(detailOpProvisoire.entreprise_id)"
                    class="span"
                   
                    
                    
                  />
                
                  </div>
                </div>
              </td>
               <td colspan="">
                <div class="control-group">
                  <label class="control-label" >ADRESSE</label>
                 
                  <div class="controls">
                   
                     <input
                     readonly
                    type="text"
                    style="border:1px solid #000"
                   :value="Numero_adresse_Entreprise(detailOpProvisoire.entreprise_id)"
                    class="span"
                   
                   
                   
                  />
                
                  </div>
                </div>
              </td>
         
          <td colspan="">
                <div class="control-group">
                  <label class="control-label" >REFERENCES BANCAIRES</label>
                 
                  <div class="controls">
                   
                     <input
                     
                    type="text"
                    style="border:1px solid #000"
                   :value="libelleBanque(detailOpProvisoire.entreprise_id)"
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
                        <a data-toggle="tab" href="#tab1">REFERENCES DU REGLEMENT</a>
                      </li>
                       
                     
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                    <div id="tab1" class="tab-pane active">
                      <table class="table table-bordered table-striped" v-if="recupererTypeDepense(this.detailOpProvisoire.recupererId)=='Autres'">
                        <tr>
                         
                          <td colspan="3">
                         <div class="control-group">
                            <label class="control-label">OBJET DE LA DEPENSE</label>
                            <div class="controls">
                              
                      <input
               
                    type="text"
                    style="border:1px solid #000"
                 v-model="detailOpProvisoire.odjet_autre_depense"
                    class="span"
                 
                  />
                            </div>
                          </div>
                        </td>
                        </tr>
                        <tr>
                          <td>
                         <div class="control-group">
                            <label class="control-label">LIVRABLES</label>
                            <div class="controls">
                              
                      <input
                 v-model="detailOpProvisoire.livrable_autre_depense"
                    type="text"
                    style="border:1px solid #000"
                   
                    class="span"
                    
                  />
                            </div>
                          </div>
                        </td>
                          <td colspan="">
              <div class="control-group">
                <label class="control-label">BENEFICIAIRES</label>
                <div class="controls">
                  <input
                  v-model="detailOpProvisoire.beneficiaire_autre_depense"
                    type="text"
                    style="border:1px solid #000"
                   
                    class="span"
                    
                  />
                  .
                </div>
              </div>
              
            </td>
                 <td colspan="">
              <div class="control-group">
                <label class="control-label">GEOLOCALISATION</label>
                <div class="controls">
                  <input
                   v-model="detailOpProvisoire.geo_autre_depense"
                    type="text"
                    style="border:1px solid #000"
                   
                    class="span"
                    
                  />
                  
                </div>
              </div>
              
            </td>
                        </tr>
                        <tr>
                          <td>
                         <div class="control-group">
                            <label class="control-label">DUREE DE REALISATION</label>
                            <div class="controls">
                              
                      <input
                   v-model="detailOpProvisoire.dure_autre_depense"
                    type="text"
                    style="border:1px solid #000"
                   
                    class="span"
                  
                  />
                            </div>
                          </div>
                        </td>
                          <td colspan="">
              <div class="control-group">
                <label class="control-label">MONTANT EN CHIFFRES</label>
                <div class="controls">
                  <!-- <input
                  
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData2.montant_engage"
                    class="span"
                    readonly
                  /> -->
                   <money v-model="detailOpProvisoire.montant_ordre_paiement"    style="text-align:left;color:red"  class="span"></money>
                </div>
              </div>
              
            </td>
                 <td colspan="">
              <div class="control-group">
                <label class="control-label">MODE DE REGLEMENT</label>
                <div class="controls">
                  <!-- <select v-model="formData.mode_paiement_id" class="span" style="border:1px solid #000">
                    
                     <option
                        v-for="typeFact in modepaiements"
                        :key="typeFact.id"
                        :value="typeFact.id"
                      >{{typeFact.libelle}}</option>
                  </select> -->
                   <input
                  :value="recupererLibelleModePaiement(detailOpProvisoire.mode_paiement_id)"
                    type="text"
                    style="border:1px solid #000"
                   
                    class="span"
                  readonly
                  />
                </div>
              </div>
              
            </td>
                        </tr>
                      </table>
                      <table class="table table-bordered table-striped" v-if="recupererTypeDepense(this.detailOpProvisoire.recupererId)=='Marche'">
                        <tr>
                          <td>
                         <div class="control-group">
                            <label class="control-label">Numero Marche</label>
                            <div class="controls">
                              
                      <input
               
                    type="text"
                    style="border:1px solid #000"
                   :value="NumeroMarche1(detailOpProvisoire.marche_id)"
                    class="span"
                    
                   readonly
                  />
                  <!-- <code v-if="message_mandater" style="font-size:25px">{{message_mandater}}</code> -->
                            </div>
                          </div>
                        </td>
                          <td colspan="3">
                         <div class="control-group">
                            <label class="control-label">OBJET DE LA DEPENSE</label>
                            <div class="controls">
                              
                      <input
               
                    type="text"
                    style="border:1px solid #000"
                  :value="objetMarche(detailOpProvisoire.marche_id)"
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
                            <label class="control-label">LIVRABLES</label>
                            <div class="controls">
                              
                      <input
                  
                    type="text"
                    style="border:1px solid #000"
                   :value="livrable(detailOpProvisoire.marche_id)"
                    class="span"
                    readonly
                  />
                            </div>
                          </div>
                        </td>
                          <td colspan="2">
              <div class="control-group">
                <label class="control-label">BENEFICIAIRES</label>
                <div class="controls">
                  <input
                  
                    type="text"
                    style="border:1px solid #000"
                   :value="libelleUniteAdministrative(detailOpProvisoire.unite_administrative_id)"
                    class="span"
                    readonly
                  />
                  
                </div>
              </div>
              
            </td>
                 <td colspan="">
              <div class="control-group">
                <label class="control-label">GEOLOCALISATION</label>
                <div class="controls">
                  <input
                  
                    type="text"
                    style="border:1px solid #000"
                   :value="geolocalisation(detailOpProvisoire.marche_id)"
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
                            <label class="control-label">DUREE DE REALISATION (En Jours)</label>
                            <div class="controls">
                              
                      <input
                  
                    type="text"
                    style="border:1px solid #000"
                   :value="recupererDureMarche(detailOpProvisoire.marche_id)"
                    class="span"
                    readonly
                  />
                            </div>
                          </div>
                        </td>
                          <td colspan="">
              <div class="control-group">
                <label class="control-label">MONTANT DU MARCHE</label>
                <div class="controls">
                  <!-- <input
                  
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData2.montant_engage"
                    class="span"
                    readonly
                  /> -->
                   <money :value="recupererMontantMarche(detailOpProvisoire.marche_id)"  readOnly  style="text-align:left;color:red"  class="span"></money>
                </div>
              </div>
              
            </td>
            <td colspan="">
              <div class="control-group">
                <label class="control-label">MONTANT ENGAGE</label>
                <div class="controls">
                  <!-- <input
                  
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData2.montant_engage"
                    class="span"
                    readonly
                  /> -->
                   <money v-model="detailOpProvisoire.montant_ordre_paiement"    style="text-align:left;color:red"  class="span"></money>
                </div>
              </div>
              
            </td>
                 <td colspan="">
              <div class="control-group">
                <label class="control-label">MODE DE REGLEMENT</label>
                <div class="controls">
                  <!-- <select v-model="formData.mode_paiement_id" class="span" style="border:1px solid #000">
                    
                     <option
                        v-for="typeFact in modepaiements"
                        :key="typeFact.id"
                        :value="typeFact.id"
                      >{{typeFact.libelle}}</option>
                  </select> -->
                  <input
                  :value="recupererLibelleModePaiement(detailOpProvisoire.mode_paiement_id)"
                    type="text"
                    style="border:1px solid #000"
                   
                    class="span"
                  readonly
                  />
                </div>
              </div>
              
            </td>
                        </tr>
                      </table>
                      
                        <!-- <tr>
                          <td colspan="3"> 
<div class="control-group">
                <label class="control-label">MONTANT EN LETTRES</label>
                <div class="controls">
                  <input
                  
                    type="text"
                    style="border:1px solid #000"
                  
                    class="span"
                    readonly
                  />
                  
                </div>
              </div>
                          </td>
                          </tr> -->
                          <table class="table table-bordered table-striped">
                           <tr>
                       <td colspan="">
                           <label class="control-label" style="font-size:14px;font-weight:bold;text-align:center">Pièce Justificative Provisoire</label>
 <!-- <div class="" align="right" >
                   <button 
                        @click.prevent="afficherModalAjouterService"
                       class="btn  btn-success">
                <span >  <i class="icon icon-plus-sign">Ajouter pièces Justificative</i></span>
       
                </button>

                   </div> -->
<table class="table table-bordered table-striped" >
                <thead>
                  <tr>
                     <th style="font-size:14px;font-weight:bold">Numero Ordre</th>
                    <th style="font-size:14px;font-weight:bold">Nature de la pièce</th>
                   <th style="font-size:14px;font-weight:bold">Reference</th>
                   <th style="font-size:14px;font-weight:bold">Date de la pièce</th>
                  
                    
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(type) in listePieceJustificative(recupererNumeroOPProvisoire(detailOpProvisoire.recupererIdprovisoire))" :key="type.id">
                    <td style="width:20%,text-align:center"
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

                    
                  </tr>
                </tbody>
              </table>

<label class="control-label" style="font-size:14px;font-weight:bold;text-align:center">Pièce Justificative Définitive</label>

                           <div class="" align="right">
                   <button 
                        @click.prevent="afficherModalAjouterService"
                       class="btn  btn-success">
                <span >  <i class="icon icon-plus-sign">Ajouter pièces</i></span>
       
                </button>

                   </div>
                    
 <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <tr>
                     <th style="font-size:14px;font-weight:bold">Numero Ordre</th>
                    <th style="font-size:14px;font-weight:bold">Nature de la pièce</th>
                   <th style="font-size:14px;font-weight:bold">Reference</th>
                   <th style="font-size:14px;font-weight:bold">Date de la pièce</th>
                    
                  </tr>
                </thead>
                <tbody>
                   <tr class="odd gradeX" v-for="(type) in listePieceJustificativeOpDefinitive(formData.numero_Op_Definitive)" :key="type.id">
                    <td style="width:20%,text-align:center"
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
                        <a data-toggle="tab" href="#tab1">Source de Financement</a>
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
                <label class="control-label">Type de Financement {{detailOpProvisoire.recupererId}} <code style="color:red;font-size:16px">*</code></label>
                <div class="controls">
                  <!-- <model-list-select style="border:1px solid #000"
                                                   class="wide"
                                                   :list="types_financements"
                                                   v-model="formData.type_financement_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   
                                                   placeholder=""
                                >

                                </model-list-select> -->
                                  <input
                  :value="RecupererLibelleTypeFinancement(detailOpProvisoire.type_financement_id)"
                    type="text"
                    style="border:1px solid #000"
                   
                    class="span"
                  
                  />
                </div>
              </div>
               <!-- <code style="color:red;font-size:12px" v-if="formData.type_financement_id==''">Veuillez renseigner ce champ</code> -->
                  </td>
              
            
            <td>
                                <label>Bailleur
                                </label>
                                <!-- <model-list-select style="border:1px solid #000"
                                                   class="wide"
                                                   :list="sources_financements"
                                                   v-model="formData.bailler_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder=""
                                >

                                </model-list-select> -->
                                 <input
                  :value="RecupererLibellSourceFinancement(detailOpProvisoire.source_financement_id)"
                    type="text"
                    style="border:1px solid #000"
                   
                    class="span"
                  
                  />
                            </td>
           
                     </tr>
                   
                  
                   </table>
                   
                    </div>
                  </div>

                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#tab1">SITUATION DES CREDITS</a>
                      </li>
                       
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                    <div id="tab1" class="tab-pane active">
                  
          <table class="table table-bordered table-striped">

 
                     <tr>
                    
            <td colspan="">
              <template v-if="this.comparaison(this.detailOpProvisoire.activite_id)==this.detailOpProvisoire.activite_id">
              <div class="control-group">
                <label class="control-label">Crédits autorisés (A)</label>
                <div class="controls">
                 
                  <money :value="CreditAutoriseSousBudget(detailOpProvisoire.sous_budget_id,detailOpProvisoire.ligne_economique_id)"  readOnly  style="text-align:left;color:red"  class="span"></money>
                 
                
  
                </div>
              </div>
              </template>
               <template v-else>
                  <div class="control-group">
                <label class="control-label">Crédits autorisés (A)</label>
                <div class="controls">
                 
                  <money :value="CreditAutorise(detailOpProvisoire.unite_administrative_id,detailOpProvisoire.ligne_economique_id)"  readOnly  style="text-align:left;color:red"  class="span"></money>
                 
                 
                </div>
              </div>
              </template>
             
              
            </td>
            <td colspan="">
              <template v-if="this.comparaison(this.detailOpProvisoire.activite_id)==this.detailOpProvisoire.activite_id">
                <div class="control-group">
                <label class="control-label">Engagements antérieurs (B)</label>
                <div class="controls">
                 
                  <money :value="parseFloat(this.EngagementsantérieursSousBudget(detailOpProvisoire.sous_budget_id,detailOpProvisoire.ligne_economique_id))" readOnly style="text-align:left;color:red"  class="span"></money>
                
                </div>
              </div>
                </template>
              <template v-else>
                <div class="control-group">
                <label class="control-label">Engagements antérieurs (B)</label>
                <div class="controls">
                 
                  <money :value="this.EngagementsantérieursUa(detailOpProvisoire.unite_administrative_id,this.detailOpProvisoire.ligne_economique_id)" readOnly style="text-align:left;color:red"  class="span"></money>
                
                </div>
              </div>
                </template>
             
              
            </td>
             <td colspan="">
              <div class="control-group">
                <label class="control-label">Engagement actuel (C)</label>
                <div class="controls">
                
                  <money :value="detailOpProvisoire.montant_ordre_paiement" readOnly  style="text-align:left;color:red"  class="span"></money>
                  
                </div>
              </div>
              
            </td>
            <td colspan="">
              <template v-if="this.comparaison(this.detailOpProvisoire.activite_id)==this.detailOpProvisoire.activite_id">
                <div class="control-group">
                <label class="control-label">Cumul engagements(D)1(B+C)</label>
                <div class="controls">
                 
                  <money :value="(parseFloat(this.EngagementsantérieursSousBudget(this.detailOpProvisoire.sous_budget_id,this.detailOpProvisoire.ligne_economique_id)-parseFloat(this.recupererEngageMarche(this.detailOpProvisoire.recupererIdprovisoire))))+(detailOpProvisoire.montant_ordre_paiement)" readOnly style="text-align:left;color:red"  class="span"></money>
                
                </div>
              </div>
                </template>
              <template v-else>
                <div class="control-group">
                <label class="control-label">Cumul engagements(D)(B+C)</label>
                <div class="controls">
                 
                  <money :value="(EngagementsantérieursUa(this.idUa(this.libelleLigneEconomiqueParent(this.recupererIdLigneEconomique(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId)))),this.recupererIdLigneEconomique(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId))))+parseFloat(detailOpProvisoire.montant_ordre_paiement)" readOnly style="text-align:left;color:red"  class="span"></money>
                
                </div>
              </div>
                </template>
             
              
            </td>
             <template v-if="comparaison(this.idActivite(this.libelleLigneEconomiqueParent(this.recupererIdLigneEconomique(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId)))))==this.idActivite(this.libelleLigneEconomiqueParent(this.recupererIdLigneEconomique(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId))))">
                <div class="control-group">
               <label class="control-label">Disponible budgétaire (A - D)</label>
                <div class="controls">
                 
                  <money :value="(CreditAutorise(this.idUa(this.libelleLigneEconomiqueParent(this.recupererIdLigneEconomique(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId)))),this.recupererIdLigneEconomique(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId))))-(parseFloat(this.EngagementsantérieursSousBudget(this.recupererIdSousBudget(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId)),this.recupererIdLigneEconomique(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId))))-parseFloat(this.recupererEngageMarche(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId))))+(detailOpProvisoire.montant_ordre_paiement)" readOnly style="text-align:left;color:red"  class="span"></money>
                
                </div>
              </div>
                </template>
              <template v-else>
                <div class="control-group">
               <label class="control-label">Disponible budgétaire (A - D)</label>
                <div class="controls">
                 
                  <money :value="(CreditAutorise(this.idUa(this.libelleLigneEconomiqueParent(this.recupererIdLigneEconomique(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId)))),this.recupererIdLigneEconomique(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId))))-(EngagementsantérieursUa(this.idUa(this.libelleLigneEconomiqueParent(this.recupererIdLigneEconomique(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId)))),this.recupererIdLigneEconomique(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId))))+parseFloat(detailOpProvisoire.montant_ordre_paiement)" readOnly style="text-align:left;color:red"  class="span"></money>
                
                </div>
              </div>
                </template>
             
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
                     <td>
                       <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#INFORMATIONUA">SIGNATURE GESTIONNAIRE DE CREDITS</a>
                      </li>
                    </ul>
                  </div>
                  <div class="control-group">
                <label class="control-label">Date</label>
                <div class="controls">
                  <input
                    type="date"
                    style="border:1px solid #000"
                  v-model="formData.gestionnaire_credit_date"
                    class="span"
                    
                  />
                </div>
              </div>
               <div class="control-group">
                <label class="control-label">Nom</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                  v-model="formData.gestionnaire_credit_non"
                    class="span"
                    
                  />
                </div>
              </div>
              <div class="control-group">
                <label class="control-label">Fonction</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                  v-model="formData.gestionnaire_credit_fonction"
                    class="span"
                  
                  />
                </div>
              </div>
              
                     </td>
                     <td colspan="2">
                       <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#INFORMATIONUA">VISA CONTRÔLEUR FINANCIER</a>
                      </li>
                    </ul>
                  </div>
                   <div class="control-group">
                <label class="control-label">Date</label>
                <div class="controls">
                  <input
                    type="date"
                    style="border:1px solid #000"
                  
                    class="span"
                   
                  />
                </div>
              </div>
               <div class="control-group">
                <label class="control-label">Nom</label>
                <div class="controls">
                   <input type="text" class="span"  
                   :value="recupererNomDuControleurF(recupererIdUser(recupererIdServiceCF(idUa(this.libelleLigneEconomiqueParent(this.recupererIdLigneEconomique(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId)))))))"
                    readonly/>
                </div>
              </div>
              <div class="control-group">
                <label class="control-label">Visa</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                  
                    class="span"
                    
                  />
                </div>
              </div>
                     </td>
                     <td>
                       <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#INFORMATIONUA">VISA AGENT COMPTABLE</a>
                      </li>
                    </ul>
                  </div>
                   <div class="control-group">
                <label class="control-label">Date</label>
                <div class="controls">
                  <input
                    type="date"
                    style="border:1px solid #000"
                  
                    class="span"
                    
                  />
                </div>
              </div>
               <div class="control-group">
                <label class="control-label">Nom</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                  
                    class="span"
                    
                  />
                </div>
              </div>
              <div class="control-group">
                <label class="control-label">Signature</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                  
                    class="span"
                    
                  />
                </div>
              </div>
                     </td>
                      <td>
                       <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#INFORMATIONUA">ACQUIT LIBERATOIRE</a>
                      </li>
                    </ul>
                  </div>
                   <div class="control-group">
                <label class="control-label">Date</label>
                <div class="controls">
                  <input
                    type="date"
                    style="border:1px solid #000"
                  
                    class="span"
                    
                  />
                </div>
              </div>
               <div class="control-group">
                <label class="control-label">Nom</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                  
                    class="span"
                    
                  />
                </div>
              </div>
              <div class="control-group">
                <label class="control-label">Signature</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                  
                    class="span"
                    
                  />
                </div>
              </div>
                     </td>
                   </tr>
           </table>
                    </div>
                  </div>
<div align="right">
                    <div class="controls">
                      <div data-toggle="buttons-checkbox" class="btn-group">
                        <a
                          class="btn btn-primary"
                          @click.prevent="AjouterOrdrePaiement" 
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
             
              <input
                type="text"
               :value="numeroOrdreDefinitive(detailOpProvisoire.numero_Op_Definitive)"
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
                        <a data-toggle="tab" href="#BONCOMMANDE" v-if="formData.type_ordre_paiement==2">  Facture Proforma</a>
                      </li>
                      <li class="active">
                        <a data-toggle="tab" href="#FACTUREDEFINITIVE">  Facture Definitive</a>
                      </li>
                      
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                    <div id="FACTUREDEFINITIVE" class="tab-pane active">

<div class="widget-content nopadding">
                      <div class="" align="right">
                   <button 
                        @click.prevent="afficherModalAjouterFacture"
                       class="btn  btn-success">
                <span >  <i class="icon icon-plus-sign">Ajouter Facture</i></span>
       
                </button>
                

                   </div>
                      <div id="printMe">
              <table class="table table-bordered table-striped">
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
                  <tr class="odd gradeX" v-for="(type, index) in listeFacturePiece(formData.numero_Op_Definitive)" :key="type.id">
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
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">{{formatageSomme(parseFloat(SommeDesDmdParBonCommande(recupererNumeroOPProvisoire(detailOpProvisoire.recupererIdprovisoire))))}}</td>
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
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">{{formatageSomme(parseFloat(parseFloat((SommeDesDmdParBonCommande(recupererNumeroOPProvisoire(detailOpProvisoire.recupererIdprovisoire))))*afficherEnorere))}} </td>
                  <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">Montant Ttc</td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">{{formatageSomme(parseFloat(parseFloat((SommeDesDmdParBonCommande(recupererNumeroOPProvisoire(detailOpProvisoire.recupererIdprovisoire))))+parseFloat((SommeDesDmdParBonCommande(recupererNumeroOPProvisoire(detailOpProvisoire.recupererIdprovisoire))*afficherEnorere))))}} </td>
                  <td></td>
                  </tr>
                </tbody>
              </table>
                   </div>
                    </div>
                    </div>
                    <div id="BONCOMMANDE" class="tab-pane active">
                  <div class="widget-content nopadding">
                      <div class="" align="right" v-if="formData.type_ordre_paiement==2">
                   <button 
                        @click.prevent="afficherModalAjouterFacture"
                       class="btn  btn-success">
                <span >  <i class="icon icon-plus-sign">Ajouter Facture</i></span>
       
                </button>
                

                   </div>
                   <div id="printMe">
              <table class="table table-bordered table-striped" v-if="formData.type_ordre_paiement==2">
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
                  <tr class="odd gradeX" v-for="(type, index) in listeFacturePiece(formData.numero_Op_Definitive)" :key="type.id">
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
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">{{formatageSomme(parseFloat(SommeDesDmdParBonCommande(formData.numero_Op_Definitive)))}}</td>
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
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">{{formatageSomme(parseFloat(parseFloat((SommeDesDmdParBonCommande(formData.numero_Op_Definitive)))*afficherEnorere))}} </td>
                  <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">Montant Ttc</td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">{{formatageSomme(parseFloat(parseFloat((SommeDesDmdParBonCommande(formData.numero_Op_Definitive)))+parseFloat((SommeDesDmdParBonCommande(formData.numero_Op_Definitive)*afficherEnorere))))}} </td>
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

    </div>


































</template>
<script>

    import {mapGetters,mapActions} from 'vuex'
    import {admin,dcf,noDCfNoAdmin} from "@/Repositories/Auth"
    
    // import {  ModelListSelect } from 'vue-search-select'
    import moment from 'moment';
    // import facture from '../Facture/facture.vue'
    import { formatageSomme } from "@/Repositories/Repository";
    //import 'vue-search-select/dist/VueSearchSelect.css'
    export default {
components: {
    
    
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
                 unite_administrative_id:"",
                 activite_id:"",
                 ligne_economique_id:"",
                 typedepense:1,
                
                },
                formData3:{},
                detailOpProvisoire:{
                  numero_Op_Definitive:"",
                },
                editpiece:{},
                formData5:{
                  Auteur_id:"2"
                },
                formData9:{
                exonere : 1
                },
                formData45:{},
                formData7:{},
 formData1:{
              date_piece:"" ,
              reference:""  ,
              libelle:""
                },
                formData8:{},
                formData2:{
                 numeromarche:""
                },
                  formData78:{
                  typeOp:"OP définitif"
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
  ...mapGetters("Utilisateurs", ["getterAffectionServiceCF","getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
            ...mapGetters('personnelUA', ["FichierJoinDmdEngagement","salairesActeur","personnaliseActeurDepense","personnaFonction","afficheNombrePersonnelRecuActeNormination","fonctionBudgetaire","type_salaries","type_contrats","acte_personnels","type_acte_personnels","fonctions","grades","niveau_etudes",
                "nbr_acteur_actredite_taux","all_acteur_depense","personnaliseActeurFinContrat",
                "totalActeurEnctivite","totalActeurDepense","totalActeurAccredite","tauxActeurAccredite","totalActeurNonAccredite","affichePersonnelRecuActeNormination"]),
             ...mapGetters("uniteadministrative", ["budgetEclate","groupeLigneEconomiqueBudget","getSousBudget","groupeActiviteBudget","budgetGeneral","fonctionsua","servicesua","directions","uniteZones","uniteAdministratives","getPersonnaliseBudgetGeneralParPersonnel"]),
            // ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires"]),
            ...mapGetters("parametreGenerauxBudgetaire", ["plans_budgetaires"]),
 ...mapGetters("SuiviImmobilisation", ["services"]),

...mapGetters("bienService", ["gettersgestionOrdrePaiement","gettersgestionOrdrePaiementAnnulation","gettersDossierAutreDepense","gettersDossierMandat","gettersDossierFacturePiece","typeFactures","gettersDemandeEngagement","gettersnomPieceJustificative","modepaiements","gettersCotationPersonnaliser","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots","villes","communes","pays","modePassations", "procedurePassations","getterDossierCandidats","marches","gettersPersonnaliserRapportJugement",
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
      ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',"types_financements"]),
//  Engagementsantérieurs(){

// if(this.comparaison(this.idActivite(this.libelleLigneEconomiqueParent(this.recupererIdLigneEconomique(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId))))) !=  this.idActivite(this.libelleLigneEconomiqueParent(this.recupererIdLigneEconomique(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId))))){
 
  
// }
// else{
// return this.
// }
//     },
PersonnelParUA() {
      return (id) => {
        if (id != null && id != "") {
          return this.personnaliseActeurDepense.filter(
            (qtreel) =>
              qtreel.unite_administrative_id == id 
          );
        }
      };
    },


Recup_Banque() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getCompte.find(
            (qtreel) => qtreel.acteur_depense_id == id
          );

          if (qtereel) {
            return qtereel.banq_id;
          }
          return 0;
        }
      };
    },
    idCompte() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getCompte.find(
            (qtreel) => qtreel.rib == id
          );

          if (qtereel) {
            return qtereel.id;
          }
          return 0;
        }
      };
    },
Recup_Numero_cOMPTE() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getCompte.find(
            (qtreel) => qtreel.acteur_depense_id == id
          );

          if (qtereel) {
            return qtereel.rib;
          }
          return 0;
        }
      };
    },
tailleOpEnregistrer(){
  return this.gettersgestionOrdrePaiement.length + 1
},


CalculCumulAnterieureSousBudget(){
  return parseFloat(this.EngagementsantérieursSousBudget(this.recupererIdSousBudget(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId)),this.recupererIdLigneEconomique(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId))))-parseFloat(this.recupererEngageMarche(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId)))
},
CalculCumulAnterieureUniteAdministrative(){
  return parseFloat(this.EngagementsantérieursUa(this.idUa(this.libelleLigneEconomiqueParent(this.recupererIdLigneEconomique(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId)))),this.recupererIdLigneEconomique(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId))))-parseFloat(this.recupererEngageMarche(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId)))
},


CalculCumulEngagementSousBudget(){
  return parseFloat(this.EngagementsantérieursSousBudget(this.recupererIdSousBudget(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId)),this.recupererIdLigneEconomique(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId))))
},
CalculCumulEngagementUniteAdministrative(){
  return parseFloat(this.EngagementsantérieursUa(this.idUa(this.libelleLigneEconomiqueParent(this.recupererIdLigneEconomique(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId)))),this.recupererIdLigneEconomique(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId))))},


CalculBisponibleBudgetSousBudget(){
  return parseFloat(this.CreditAutoriseSousBudget(this.recupererIdSousBudget(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId)),this.recupererIdLigneEconomique(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId))))-parseFloat(this.CalculCumulEngagementSousBudget)
},
CalculBisponibleBudgetUniteAdministrative(){
  return parseFloat(this.CreditAutorise(this.idUa(this.libelleLigneEconomiqueParent(this.recupererIdLigneEconomique(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId)))),this.recupererIdLigneEconomique(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId))))-parseFloat(this.CalculCumulEngagementUniteAdministrative)},












      EngagementsantérieursUa() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
           return this.gettersgestionOrdrePaiement.filter(qtreel => qtreel.unite_administrative_id == id && qtreel.ligne_economique_id == id1 && qtreel.decision_cf==8).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);

        }
      };
    },
    EngagementsantérieursSousBudget() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
           return this.gettersgestionOrdrePaiement.filter(qtreel => qtreel.sous_budget_id == id && qtreel.ligne_economique_id == id1 && qtreel.decision_cf==8).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);

        }
      };
    },

recupererIdOpProvisoire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiement.find(qtreel => qtreel.numero_ordre_paiement == id);

      if (qtereel) {
        return qtereel.id;
      }
      return 0
        }
      };
    },
recupererIdAnnulation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiementAnnulation.find(qtreel => qtreel.numero_op_annulation == id);

      if (qtereel) {
        return qtereel.id;
      }
      return 0
        }
      };
    },

listePieceJustificativeOpDefinitive() {
      return id => {
        if (id != null && id != "") {
           return this.gettersnomPieceJustificative.filter(qtreel => qtreel.numero_op_definitive == id && qtreel.etat_piece=="definitive" );

      
        }
      };
    },
recupererIdEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.entreprise_id;
      }
      return 0
        }
      };
    },

recuperernom_autre_depense() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.nom_autre_depense;
      }
      return 0
        }
      };
    },


recuperercompte_autre_depense() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.compte_autre_depense;
      }
      return 0
        }
      };
    },
    
recupereradresse() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.adresse;
      }
      return 0
        }
      };
    },
    
recupererreference_autre_depense() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.reference_autre_depense;
      }
      return 0
        }
      };
    },



recupererodjet_autre_depense() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.odjet_autre_depense;
      }
      return 0
        }
      };
    },
recupererMonant_autre_depense() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.montant_ordre_paiement;
      }
      return 0
        }
      };
    },
recupererlivrable_autre_depense	() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.livrable_autre_depense	;
      }
      return 0
        }
      };
    },
    
recupererbeneficiaire_autre_depense() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.beneficiaire_autre_depense	;
      }
      return 0
        }
      };
    },
    
recuperergeo_autre_depense	() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.geo_autre_depense	;
      }
      return 0
        }
      };
    },
    RecupereridSourceFinancement	() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sources_financements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.id	;
      }
      return 0
        }
      };
    },
    RecupererLibellSourceFinancement	() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sources_financements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle	;
      }
      return 0
        }
      };
    },
    RecupererLibelleTypeFinancement	() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.types_financements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle	;
      }
      return 0
        }
      };
    },
    RecupereridTypeFinancement	() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.type_financement_id	;
      }
      return 0
        }
      };
    },
recupererdure_autre_depense	() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.dure_autre_depense	;
      }
      return 0
        }
      };
    },

recupererModePaiement	() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.mode_paiement_id	;
      }
      return 0
        }
      };
    },
    
recupererEngageMarche	() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiement.find(qtreel => qtreel.numero_ordre_paiement == id);

      if (qtereel) {
        return qtereel.montant_ordre_paiement	;
      }
      return 0
        }
      };
    },
recupererLibelleModePaiement	() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.modepaiements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle	;
      }
      return 0
        }
      };
    },
    recupererIdMarcheUa	() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.unite_administrative_id	;
      }
      return 0
        }
      };
    },
    
    recupererDureMarche	() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.duree	;
      }
      return 0
        }
      };
    },
    recupererMontantMarche	() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.montant_act;
      }
      return 0
        }
      };
    },
recupererIdMarche	() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.marche_id	;
      }
      return 0
        }
      };
    },
      recupererNomTypeDepense(){
  if(this.recupererTypeDepense(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId)) == 2){
    return "Autres"
  }
  else if(this.recupererTypeDepense(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId)) == 1){
    return "Marche"
  }
  else{
return "Personnel"
  }
},
recupererTypeDepense() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.typedepense;
      }
      return 0
        }
      };
    },
    
recupererIdSousBudget() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiement.find(qtreel => qtreel.numero_ordre_paiement == id);

      if (qtereel) {
        return qtereel.sous_budget_id;
      }
      return 0
        }
      };
    },
    recupererLibelleSousBudget() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getSousBudget.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.activite_enfant;
      }
      return 0
        }
      };
    },
recupererNumeroOPProvisoire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_ordre_paiement;
      }
      return 0
        }
      };
    },

recupererIdLigneEconomique() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiement.find(qtreel => qtreel.numero_ordre_paiement == id);

      if (qtereel) {
        return qtereel.ligne_economique_id;
      }
      return 0
        }
      };
    },





Disponiblebudgétaire() { 
      const val = parseFloat(this.CreditAutoriseTresor(this.recupererIdLigneEconomique(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId)))) + parseFloat(this.Cumulengagements) ;
      return parseFloat(val).toFixed(0);
      
    },
Cumulengagements() { 
      const val = parseFloat(this.Engagementsantérieurs) + parseFloat(this.recupererEngageMarche(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId)));
      return parseFloat(val).toFixed(0);
      
    },





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

//  fonctionPourVideLeChamp(){
   
// if(this.comparaison(this.idAction(this.libelleLigneEconomiqueParent(this.recupererIdLigneEconomique(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId)))))==this.idAction(this.libelleLigneEconomiqueParent(this.recupererIdLigneEconomique(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId))))){
 
//  return this.CreditAutoriseSousBudget(this.recupererIdSousBudget(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId)),this.recupererIdLigneEconomique(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId)))
  
// }
// else{

// }
    // },
CreditAutoriseSousBudget() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
           const qtereel = this.budgetEclate.find(qtreel => qtreel.sous_budget_id == id && qtreel.ligneeconomique_id==id1);

      if (qtereel) {
        return qtereel.dotation
      }
      return 0
        }
      };
    },
CreditAutorise() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
           const qtereel = this.budgetEclate.find(qtreel => qtreel.uniteadministrative_id == id && qtreel.ligneeconomique_id==id1);

      if (qtereel) {
        return qtereel.dotation
      }
      return 0
        }
      };
    },

      RecupererlibelleLigneEconomique() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.activite_id==id1 && qtreel.sous_budget_id==0);

      
        }
      };
    },
    libelleLigneEconomiqueParent() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetEclate.find(qtreel => qtreel.ligneeconomique_id== id);

      if (qtereel) {
        return qtereel.ligne_budgetaire_parent_id
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
      afficheLesSousBudgetLigneBudgetaire() {
      return (id1,id) => {
        if (id1 != null && id1 != "" && id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.activite_id==id1 && qtreel.sous_budget_id==id);

     
      
        }
      };
    },
      comparaison() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getSousBudget.find(qtreel => qtreel.activite_parent_id == id);

      if (qtereel) {
        return qtereel.activite_parent_id
      }
      return 0
        }
      };
    },
      RecupererSousBudget() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
           return this.getSousBudget.filter(qtreel => qtreel.unite_administrative_id == id && qtreel.activite_parent_id==id1 && qtreel.execice==this.anneeAmort);

     
      
        }
      };
    },
   
filtrerActivite() {
      return (id) => {
        if (id != null && id != "") {
           return this.groupeActiviteBudget.filter(qtreel => qtreel[0].ua_id == id && qtreel[0].actived==1 && qtreel[0].exercicebudget_id==this.anneeAmort);

      
        }
      };
    },
recupereLeNumeroCompte() {
      return (id) => {
        if (id != null && id != "" ) {
           const qtereel = this.comptes.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.rib;
      }
      return ""
        }
      };
    },
recupereLeNumeroCompteid() {
      return (id) => {
        if (id != null && id != "" ) {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.entreprise_id == id);

      if (qtereel) {
        return qtereel.compte_id;
      }
      return ""
        }
      };
    },

cumulMontantMarche() {
      const val =   parseFloat(this.TotalGeneralDemandeEngagement) + parseFloat(this.cumulMarche(this.formData2.numero_marche));
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },

cumulReservation() {
      return id => {
        if (id != null && id != "") {
           return this.gettersDossierMandat.filter(qtreel => this.numeroReservation(qtreel.demande_engagement_id) == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_engage), 0).toFixed(0);

        }
      };
    },

numeroReservation() {
      return (id) => {
        if (id != null && id != "" ) {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_Op_Definitive_systeme;
      }
      return ""
        }
      };
    },

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
           return this.listedesMarcheUa.filter(qtreel => qtreel.unite_administrative_id == id);

        }
      };
    },
listedesMarcheUa() {
      


        if (this.noDCfNoAdmin){
            let colect=[];
            this.acteEffetFinanciers.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
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
           return this.acteEffetFinanciers.filter(qtreel => qtreel.unite_administrative_id == id);

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
           return this.gettersDossierFacturePiece.filter(qtreel => qtreel.numero_op_hors_sib == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_facture_ht), 0).toFixed(0);

        }
      };
    },
      listeFacturePiece() {
      return id => {
        if (id != null && id != "") {
           return this.gettersDossierFacturePiece.filter(qtreel => qtreel.numero_op_hors_sib == id && qtreel.etat_acticle=="definitive");

      
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
           const qtereel = this.FichierJoinDmdEngagement.find(qtreel => qtreel.numero_ordrepaiement == id && qtreel.	numero_fichier == id2);

      if (qtereel) {
        return qtereel.fichier;
      }
      return ""
        }
      };
    },
calculCumultresor() { 
      const val = parseFloat(this.CreditAutoriseTresor(this.recupererIdLigneEconomique(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId)))) - parseFloat(this.formData.montant_tresor) ;
      return parseFloat(val).toFixed(0);
      
    },

 calculCumul() { 
      const val = parseFloat(this.TotalGeneralDemandeEngagement) + parseFloat(this.CumulDemande(this.recupererIdLigneEconomique(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId)))) ;
      return parseFloat(val).toFixed(0);
      
    },

      MontantDisponible() { 
      const val = parseFloat(this.CreditAutorise(this.recupererIdLigneEconomique(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId)))) - parseFloat(this.calculCumul) ;
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
    //   CreditAutorise() {
    //   return id => {
    //     if (id != null && id != "") {
    //        const qtereel = this.budgetGeneral.find(qtreel => qtreel.economique_id == id && qtreel.actived==1);

    //   if (qtereel) {
       
    //        return qtereel.Dotation_Initiale;
    //   }
    //   return ""
    //     }
    //   };
    // },
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
     NomActivite() {
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
    idUa() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.economique_id == id);

      if (qtereel) {
        return qtereel.ua_id
      }
      return 0
        }
      };
    },
    NumeroMarche1() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_marche
      }
      return 'Non renseigné'
        }
      };
    },
    objetMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.objet
      }
      return 'Non renseigné'
        }
      };
    },
    geolocalisation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.sous_prefecture_id
      }
      return 'Non renseigné'
        }
      };
    },
    livrable() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.livrable
      }
      return 'Non renseigné'
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
        return qtereel.adresse
      }
      return 0
        }
      };
    },
libelleBanque() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.banques.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
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
      const val = parseFloat(this.formData.montant_tresor) + parseFloat(this.formData.montant_don) + parseFloat(this.formData.montant_emprunt);
      return parseFloat(val).toFixed(0);
      
    },
    
    ligneEconomique() {
      return (id,id2) => {
        if (id != null && id != "" && id2 != null && id2 != "") {
           return this.budgetGeneral.filter(qtreel => qtreel.unite_administrative_id == id && qtreel.gdenature_id == id2 && qtreel.actived==1);

      
        }
      };
    },
    numeroOrdre() {
      
      return id => {
        if (id != null && id != "") {
           return this.gettersnomPieceJustificative.filter(qtreel => qtreel.numero_op_hors_sib == id && qtreel.etat_piece=="proforma").length + 1 ;

      
        }
      };
    },
    numeroOrdreDefinitive() {
      
      return id => {
        if (id != null && id != "") {
           return this.gettersnomPieceJustificative.filter(qtreel => qtreel.numero_op_hors_sib == id && qtreel.etat_piece=="definitive").length + 1 ;

      
        }
      };
    },

    listePieceJustificative() {
      return id => {
        if (id != null && id != "") {
           return this.gettersnomPieceJustificative.filter(qtreel => qtreel.numero_op_hors_sib == id && qtreel.etat_piece=="proforma" );

      
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
    

     idAutreDepense() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDossierAutreDepense.find(qtreel => qtreel.reference == id);

      if (qtereel) {
        return qtereel.id
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
   
   

    afficherAttributMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.attribue;
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
      "supprimerDossierFacture",
      "modifierGestionOrdrePaiement",
      "ajouterGestionOrdrePaiement"
     
    ]),
      ...mapActions('personnelUA', ["ajouterFichierJointDmd"]),
 
pagePrecedent(){
                window.history.back()
            },
 genererEnPdf(){
  this.$htmlToPaper('printMe');
},

afficherModalListePersonnel(){
                this.$router.push({ name: 'ListeDesOrdresPaiement' })
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
      
      var nouvelObjetdefinitive = {
        
        	numero_ordre:this.numeroOrdreDefinitive(this.detailOpProvisoire.numero_Op_Definitive),
      numero_op_definitive:this.detailOpProvisoire.numero_Op_Definitive,
      // numero_Op_Definitive_combine:this.intitule,
      // libelle:this.formData1.libelle,
      reference:this.formData1.reference,
      date_piece:this.formData1.date_piece,
      etat_piece:"definitive",
      // numero_op_hors_sib:this.detailOpProvisoire.numero_Op_Definitive
      };
    
      this.ajouterPieceJustificative(nouvelObjetdefinitive)
      this.ajouterFichierJoin()
   this.$('#exampleModal').modal('hide');
       this.formData1 = {
        numero_op_definitive:"",
      numero_Op_Definitive_combine:"",
      libelle:"",
      reference:"",
      date_piece:"",
      };
     
    },



rechercheListeMarche(){
       let objetMandater=this.gettersgestionOrdrePaiement.filter(item=>item.numero_ordre_paiement==this.formData.numero_ordre_anulation && item.decision_cf==8 && item.type_ordre_paiement==2 || item.numero_ordre_paiement==this.formData.numero_ordre_anulation && item.decision_cf==9 && item.type_ordre_paiement==2)
      if(objetMandater!=undefined){
        if (objetMandater.length==1){
           let acteur= this.gettersgestionOrdrePaiement.find(item=>item.numero_ordre_paiement==this.formData.numero_ordre_anulation)
         this.detailOpProvisoire.recupererId=acteur.id,
          this.detailOpProvisoire.recupererIdprovisoire=acteur.numero_ordre_paiement,
         	
         this.detailOpProvisoire.recuperer_typeop=acteur.type_ordre_paiement,
         this.detailOpProvisoire.section_id=acteur.section_id,
          this.detailOpProvisoire.programme_id=acteur.programme_id,
         this.detailOpProvisoire.action_id=acteur.action_id,
         this.detailOpProvisoire.unite_administrative_id=acteur.unite_administrative_id,
         this.detailOpProvisoire.activite_id=acteur.activite_id,
         this.detailOpProvisoire.livrable_id=acteur.livrable_id,
         this.detailOpProvisoire.type_ordre_paiement=acteur.type_ordre_paiement,
          this.detailOpProvisoire.sous_budget_id=acteur.sous_budget_id,
         this.detailOpProvisoire.ligne_economique_id=acteur.ligne_economique_id,
         this.detailOpProvisoire.entreprise_id=acteur.entreprise_id,
         this.detailOpProvisoire.marche_id=acteur.marche_id,

          
         this.detailOpProvisoire.montant_ordre_paiement=acteur.montant_ordre_paiement,
         this.detailOpProvisoire.mode_paiement_id=acteur.mode_paiement_id,
         this.detailOpProvisoire.type_financement_id=acteur.type_financement_id,
         this.detailOpProvisoire.source_financement_id=acteur.source_financement_id,
         this.detailOpProvisoire.gestionnaire_credit_date=acteur.gestionnaire_credit_date,
         this.detailOpProvisoire.typedepense=acteur.typedepense,
         this.detailOpProvisoire.nom_autre_depense=acteur.nom_autre_depense,
         this.detailOpProvisoire.compte_autre_depense=acteur.compte_autre_depense,
         this.detailOpProvisoire.adresse=acteur.adresse,
         this.detailOpProvisoire.reference_autre_depense=acteur.reference_autre_depense,
         this.detailOpProvisoire.odjet_autre_depense=acteur.odjet_autre_depense,
         this.detailOpProvisoire.livrable_autre_depense=acteur.livrable_autre_depense,
         this.detailOpProvisoire.beneficiaire_autre_depense=acteur.beneficiaire_autre_depense,
         this.detailOpProvisoire.geo_autre_depense=acteur.geo_autre_depense,
         this.detailOpProvisoire.dure_autre_depense=acteur.dure_autre_depense
          this.message_mandater=" "

        }
        else{
         this.message_mandater="Numero du marche n'existe pas"
        //     this.detailOpProvisoire.section_id="",
        //   this.detailOpProvisoire.programme_id="",
        //  this.detailOpProvisoire.action_id="",
        //  this.detailOpProvisoire.unite_administrative_id="",
        //  this.detailOpProvisoire.activite_id="",
        //  this.detailOpProvisoire.livrable_id="",

        //   this.detailOpProvisoire.sous_budget_id="",
        //  this.detailOpProvisoire.ligne_economique_id="",
        //  this.detailOpProvisoire.entreprise_id="",
        //  this.detailOpProvisoire.marche_id="",

        //   this.detailOpProvisoire.livrable_id="",
        //  this.detailOpProvisoire.montant_ordre_paiement="",
        //  this.detailOpProvisoire.mode_paiement_id="",
        //  this.detailOpProvisoire.type_financement_id="",
        //  this.detailOpProvisoire.source_financement_id="",
        //  this.detailOpProvisoire.gestionnaire_credit_date=""
        }
      }
   if(this.detailOpProvisoire.numero_ordre_paiement==""){
       this.detailOpProvisoire.section_id="",
        this.detailOpProvisoire.programme_id="",
         this.detailOpProvisoire.action_id="",
         this.detailOpProvisoire.unite_administrative_id="",
         this.detailOpProvisoire.activite_id="",
         this.detailOpProvisoire.livrable_id="",

          this.detailOpProvisoire.sous_budget_id="",
         this.detailOpProvisoire.ligne_economique_id="",
         this.detailOpProvisoire.entreprise_id="",
         this.detailOpProvisoire.marche_id="",

          this.detailOpProvisoire.livrable_id="",
         this.detailOpProvisoire.montant_ordre_paiement="",
         this.detailOpProvisoire.mode_paiement_id="",
         this.detailOpProvisoire.type_financement_id="",
         this.detailOpProvisoire.source_financement_id="",
         this.detailOpProvisoire.gestionnaire_credit_date="",
         this.detailOpProvisoire.nom_autre_depense=""
         this.detailOpProvisoire.compte_autre_depense=""
         this.detailOpProvisoire.adresse=""
         this.detailOpProvisoire.reference_autre_depense=""
         this.detailOpProvisoire.odjet_autre_depense=""
         this.detailOpProvisoire.livrable_autre_depense=""
         this.detailOpProvisoire.beneficiaire_autre_depense=""
         this.detailOpProvisoire.geo_autre_depense=""
         this.detailOpProvisoire.dure_autre_depense=""
      }
    },












    ajouterFichierJoin () {
    
                  const formData = new FormData();
                //this.intitule = this.anneeAmort + "" + this.detailOpProvisoire.numero_Op_Definitive
                formData.append('fichier', this.selectedFile, this.selectedFile.name);
    
                // formData.append('numero_Op_Definitive_combine', this.intitule);
                // formData.append('numero_ordrepaiement', this.detailOpProvisoire.numero_Op_Definitive);
                 formData.append('numero_op_hors_sib',this.detailOpProvisoire.numero_Op_Definitive),
                 formData.append('numero_fichier', this.numeroOrdre(this.detailOpProvisoire.numero_Op_Definitive));
                 formData.append('etat_piece','definitive')
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
                this.ajouterFichierJointDmd(formData,config)
                
                
               

            },

ajouterFacture(){
            
              var nouvelObjetdefinitive = {
        ...this.FormDataFacture,
          total_facture_ht:this.MontantFactureHt,
        //	numero_Op_Definitive_engagement:this.intitule,
          numero_op_hors_sib:this.detailOpProvisoire.numero_Op_Definitive,
          etat_acticle:"definitive"
      };
    
      this.ajouterDossierFacture(nouvelObjetdefinitive)
       this.FormDataFacture={
    designation:"",
    quantite:"0",
    prix_unitaire:"0",
    total_facture_ht:"0"
  }
  
              
            },


AjouterOrdrePaiement(){
 
this.intitule=this.anneeAmort +"-"+ this.tailleOpEnregistrer + "-" + this.formData.numero_Op_Definitive
  var nouvelObjetOrdrePaiement = {
           exercice:this.anneeAmort,
       // id:this.recupererIdOpProvisoire(this.recupererNumeroOPProvisoire(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId))),
        numero_ordre_paiement:this.intitule,
        date_op_definitif:this.formData.date_op_definitif,
       
        	type_ordre_paiement:4,
            date_op_annulation:this.formData.date_op_annulation,
id_op_provisoire:this.detailOpProvisoire.recupererId,
          section_id:this.detailOpProvisoire.section_id,
           programme_id:this.detailOpProvisoire.programme_id,
        	unite_administrative_id:this.detailOpProvisoire.unite_administrative_id,
          action_id:this.detailOpProvisoire.action_id,
          sous_budget_id:this.detailOpProvisoire.sous_budget_id,
          activite_id:this.detailOpProvisoire.activite_id,
           ligne_economique_id:this.detailOpProvisoire.ligne_economique_id,
           	typedepense:this.detailOpProvisoire.typedepense,

mode_paiement_id:this.detailOpProvisoire.mode_paiement_id,
           entreprise_id:this.detailOpProvisoire.entreprise_id,
          marche_id:this.detailOpProvisoire.marche_id,
          type_financement_id:this.detailOpProvisoire.type_financement_id,
                  source_financement_id:this.detailOpProvisoire.source_financement_id,
          montant_ordre_paiement:this.detailOpProvisoire.montant_ordre_paiement,
           
        	
         
          gestionnaire_credit_non:this.detailOpProvisoire.gestionnaire_credit_non,
           gestionnaire_credit_date:this.detailOpProvisoire.gestionnaire_credit_date,
        	gestionnaire_credit_fonction:this.detailOpProvisoire.gestionnaire_credit_fonction,

          controleur_financier_id:this.recupererIdUser(this.recupererIdServiceCF(this.detailOpProvisoire.unite_administrative_id)),
     nom_autre_depense:this.detailOpProvisoire.nom_autre_depense,
     	compte_autre_depense:this.detailOpProvisoire.compte_autre_depense,
       adresse:this.detailOpProvisoire.adresse,
       reference_autre_depense:this.detailOpProvisoire.reference_autre_depense,
       odjet_autre_depense:this.detailOpProvisoire.odjet_autre_depense,
       livrable_autre_depense:this.detailOpProvisoire.livrable_autre_depense,
       beneficiaire_autre_depense:this.detailOpProvisoire.beneficiaire_autre_depense,
       geo_autre_depense:this.detailOpProvisoire.geo_autre_depense,
       dure_autre_depense:this.detailOpProvisoire.dure_autre_depense
      };
    
      this.ajouterGestionOrdrePaiement(nouvelObjetOrdrePaiement)
       this.formData2={
     exercice:this.anneeAmort,
        	numero_oP_provisoire:"",
          

         
          controleur_financier_id:this.recupererIdUser(this.recupererIdServiceCF(this.idUa(this.libelleLigneEconomiqueParent(this.recupererIdLigneEconomique(this.recupererNumeroOPProvisoire(this.detailOpProvisoire.recupererId)))))),
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
formatageSomme:formatageSomme,








            
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
