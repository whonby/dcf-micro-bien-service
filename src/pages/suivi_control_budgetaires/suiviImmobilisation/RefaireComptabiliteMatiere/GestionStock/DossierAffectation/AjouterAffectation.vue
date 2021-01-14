
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
              <h5>Fiche d'Affectation</h5>
             
            </div>

            <div class="table-responsive text-nowrap">
                
                     <div class="widget-title">
                      
                    <ul class="nav nav-tabs">
                     <li class="active"><a data-toggle="tab" href="#IDENT">Identification</a></li>
        
                      
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                  <div id="IDENT" class="tab-pane active">
        <table class="table table-bordered table-striped">
            <tr>
              <td colspan="">
                    <div class="control-group">
                  <label class="control-label">Unité d'administrative</label>
                  <div class="controls">
                    
                     <input
                type="text"
              :value="detail_Stock.uAdministrative_id"
                class="span"
                
              />
                  </div>
                </div>
                 </td>
                   
                      <td colspan="">
                    <div class="control-group">
                  <label class="control-label">Unité d'administrative</label>
                  <div class="controls">
                    
                     <input
                type="text"
              v-model="formData3.numero_marche"
                class="span"
                
              />
                  </div>
                </div>
                 </td>
                 <td colspan="">
                    <div class="control-group">
                  <label class="control-label">Famille</label>
                  <div class="controls">
                    
                     <input
                type="text"
              v-model="formData3.numero_marche"
                class="span"
                
              />
                  </div>
                </div>
                 </td>
                      
                    
                  </tr>
                  <tr>
                     <td colspan="">
                    <div class="control-group">
                  <label class="control-label" >Marque</label>
                  <div class="controls">
                    <input
                type="text"
              v-model="formData3.numero_facture"
                class="span"
                
              />
                  </div>
                </div>
                 </td>
                    <td colspan="">
                    <div class="control-group">
                  <label class="control-label" >Modele</label>
                  <div class="controls">
                    <input
                type="text"
              v-model="formData3.numero_facture"
                class="span"
                
              />
                  </div>
                </div>
                 </td>  
             <td colspan="">
                    <div class="control-group">
                  <label class="control-label" >Couleur</label>
                  <div class="controls">
                    <input
                type="text"
              v-model="formData3.numero_facture"
                class="span"
                
              />
                  </div>
                </div>
                 </td> 
                            
            
            
                  </tr>
                  <tr>
                    <td>
              <div class="control-group">
            <label class="control-label">Article</label>
            <div class="controls">
                              <select   class="span" v-model="formData3.famill_id">
                                <option></option>
                                <option v-for="typeUniteA in afficheListeArticleParFamille(formData7.famill_id)"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id">
                                   
                      {{typeUniteA.libelle}}
                                </option>
                                  </select>
                                  
            </div>
          </div>
            </td>
                    <td>
               <div class="control-group">
            <label class="control-label">Quantité Récu</label>
            <div class="controls">
                              <input
                type="text"
              v-model="formData3.quantitestock"
                class="span"
                
              />
                  
            </div>
          </div>
            </td>
            <td>
                     <div class="control-group">
             <label class="control-label">Type de bien corporel</label>
              <div class="controls">
                 <!-- <select  class="span" v-model="formData.typestockage">
                      <option></option>                     
                     <option value="1">Matériel</option> 
                     <option value="2">Véhicule</option> 
                     <option value="3">Mobilier</option>
                     <option value="4">Immobilier</option> 
                     <option value="5">Gros Travaux</option> 
                     
                    </select> -->
                     <input
                type="text"
            :value="afficheLibelleTypeBien(AfficheTypeDeBien(formData7.famill_id))"
                class="span"
                readonly
              />
              </div>
            </div>
                            </td>
                  </tr>
                   <br/>
                 <br/>
                  <br/>
        </table>
      </div>
                     
                  </div>
                  
                 
                  
              <table class="table table-bordered table-striped">
                  
                <div class="widget-box">
                  <div class="widget-title">
                      
                    <ul class="nav nav-tabs">
                     <li class="active"><a data-toggle="tab" href="#materiel"  v-if="AfficheTypeDeBien(famille_id) == 5">Fiche Matériel</a></li>
        <li class="active"><a data-toggle="tab" href="#vehicule"  v-if="AfficheTypeDeBien(formData7.famill_id) == 9">Fiche Véhicule</a></li>
         <li class="active"><a data-toggle="tab" href="#Mobilier"  v-if="AfficheTypeDeBien(famille_id) == 7">Fiche Mobilier</a></li>
        <li class="active"><a data-toggle="tab" href="#Immobilier"  v-if="AfficheTypeDeBien(famille_id) == 11">Fiche Immobilier</a></li>
        <li class="active"><a data-toggle="tab" href="#Travaux"  v-if="AfficheTypeDeBien(famille_id) == 12">Fiche Gros Travaux</a></li>
                      
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <div id="Immobilier" class="tab-pane active" v-if="AfficheTypeDeBien(famille_id) == 11">
                      <table class="table table-bordered table-striped" >
                        <tr>
                          <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">District</label>
                  <div class="controls">
                    <select  class="span" >
                      <option></option>                     
                     
                    </select>
                  </div>
                </div>
                      </td>
                       <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Region</label>
                  <div class="controls">
                    <select  class="span" >
                      <option></option>                     
                     
                    </select>
                  </div>
                </div>
                      </td>
                       <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Département</label>
                  <div class="controls">
                    <select  class="span" >
                      <option></option>                     
                     
                    </select>
                  </div>
                </div>
                      </td>
                       <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Commune</label>
                  <div class="controls">
                    <select  class="span" >
                      <option></option>                     
                     
                    </select>
                  </div>
                </div>
                      </td>

                        </tr>
                        <tr>
                           <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Quartier</label>
                  <div class="controls">
                    <select  class="span" >
                      <option></option>                     
                     
                    </select>
                  </div>
                </div>
                      </td>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Lot</label>
                  <div class="controls">
                    <input
                      type="text"
                    
                      class="span"
                      
                    />
                  </div>
                </div>
                      </td>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Ilot</label>
                  <div class="controls">
                    <input
                      type="text"
                    
                      class="span"
                      
                    />
                  </div>
                </div>
                      </td>
                       <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Type foncier</label>
                  <div class="controls">
                    <select  class="span" >
                      <option></option>                     
                     
                    </select>
                  </div>
                </div>
                      </td>
                       
                        </tr>
                        <tr>
                          <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Surface du terrain</label>
                  <div class="controls">
                    <input
                      type="text"
                    
                      class="span"
                      
                    />
                  </div>
                </div>
                      </td>
                          
                          <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Type Propriete</label>
                  <div class="controls">
                    <select  class="span" >
                      <option></option>                     
                     
                    </select>
                  </div>
                </div>
                      </td>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Niveau</label>
                  <div class="controls">
                    <input
                      type="text"
                    
                      class="span"
                      
                    />
                  </div>
                </div>
                      </td>
                        </tr>
                        </table>
                      </div>
                    <!--ongle identification-->
                    <div id="Mobilier" class="tab-pane active" v-if="AfficheTypeDeBien(famille_id) == 7">
                       <table class="table table-bordered table-striped" >
               <tr>
                     
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Désignation du bien</label>
                  <div class="controls">
                    <input
                      type="text"
                    v-model="formData.designation"
                      class="span"
                      
                    />
                  </div>
                </div>
                      </td>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Matiere</label>
                  <div class="controls">
                   <input
                      type="text"
                   v-model="formData1.matiere"
                      class="span"
                      
                    />
                  </div>
                </div>
                      </td>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Couleur</label>
                  <div class="controls">
                     <input
                      type="text"
                    v-model="formData1.couleur"
                      class="span"
                      
                    />
                  </div>
                </div>
                      </td>
                      
                  </tr>
                    <tr>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Revêtement</label>
                  <div class="controls">
                    <input
                      type="text"
                   v-model="formData1.revetement"
                      class="span"
                      
                    />
                  </div>
                </div>
                      </td>
                       <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Dimension</label>
                  <div class="controls">
                    <input
                      type="text"
                   v-model="formData1.dimension"
                      class="span"
                      
                    />
                  </div>
                </div>
                      </td>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Prix Unitaire</label>
                  <div class="controls">
                    <input
                      type="text"
                  v-model="formData1.prix_unitaire"
                      class="span"
                      
                    />
                  </div>
                </div>
                      </td> 
                     
                  </tr>
            
                      
        </table>
                    </div>
                  <div id="materiel" class="tab-pane active" v-if="AfficheTypeDeBien(famille_id) == 5">
         <table class="table table-bordered table-striped" >
               <tr>
                     
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Marque Matériel</label>
                  <div class="controls">
                    <select  class="span" v-model="formData1.marque_id">
                      <option></option>                     
                      <option
                        v-for="typeUniteA in AfficheModelMaterielMobilier"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                  </div>
                </div>
                      </td>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Modele Matériel</label>
                  <div class="controls">
                    <select  class="span" v-model="formData1.model_id">
                      <option></option>                     
                      <option
                        v-for="typeUniteA in afficheModeleParMarque(formData1.marque_id)"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                  </div>
                </div>
                      </td>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">N°Série</label>
                  <div class="controls">
                     <input
                      type="text"
                    v-model="formData1.numero_serie"
                      class="span"
                      
                    />
                  </div>
                </div>
                      </td>
                       <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">N° Matricule</label>
                  <div class="controls">
                    <input
                      type="text"
                    v-model="formData1.numero_matricule"
                      class="span"
                      
                    />
                  </div>
                </div>
                      </td>
                  </tr>
                    <tr>
                     
                       <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Imputation comptable</label>
                  <div class="controls">
                     <input
                      type="text"
                 :value="libelleImputationBudgetaire(recupererCodeImputationBudgetaire(recupererIdEquipement(famille_id)))"
                      class="span"
                      readonly
                    />
                    <!-- <select  class="span" v-model="formData1.immobilisation">
                      <option></option>                     
                       <option
                        v-for="typeUniteA in lesClassDe3"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.code}}-{{typeUniteA.libelle}}</option>
                    </select> -->
                  </div>
                </div>
                      </td>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Prix Unitaire</label>
                  <div class="controls">
                    <input
                      type="text"
                    v-model="formData1.prix_unitaire"
                      class="span"
                      
                    />
                  </div>
                </div>
                      </td> 
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Durée de vie</label>
                  <div class="controls">
                    <input
                      type="text"
                    :value="dureDeVie(famille_id)"
                      class="span"
                      readonly
                    />
                  </div>
                </div>
                      </td>
                       <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Autre Information</label>
                  <div class="controls">
                    <input
                      type="text"
                    v-model="formData1.autreinfo"
                      class="span"
                      
                    />
                  </div>
                </div>
                      </td>
                  </tr>
            
                      
        </table>
      </div>
                      <div id="vehicule" class="tab-pane active" v-if="AfficheTypeDeBien(formData7.famill_id) == 9">
        
         <!-- <table class="table table-bordered table-striped">
            <tr> -->
                      <!-- <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Unité Administrative</label>
                  <div class="controls">
                    <select  class="span" v-model="formData.uniteadministrative ">
                      <option></option>                     
                      <option
                        v-for="typeUniteA in afficherUAParDroitAccess"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                      
                  </div>
                </div>
                      </td> -->
                      <!-- <td>
                          <div class="control-group">
                  <label class="control-label" style="font-size:14px">N°Identification</label>
                
                  <div class="controls">
                    <input
                      type="text"
                    v-model="formData.numidentification "
                      class="span"
                      
                    />
                  </div>
                  </div>
                      </td> -->
                      <!-- <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">N°Immatriculation</label>
                  <div class="controls">
                   <div class="controls">
                    <input
                      type="text"
                    v-model="formData.numimmatriculation"
                      class="span"
                      
                    />
                  </div>
                </div>
                </div>
                      </td> -->
                      <!-- <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Imputation comptable</label>
                  <div class="controls"> -->
                    <!-- <select  class="span" v-model="formData.immobilisation">
                      <option></option>                     
                       <option
                        v-for="typeUniteA in lesClassDe3"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.code}}-{{typeUniteA.libelle}}</option>
                    </select> -->
                    <!-- <input
                      type="text"
                 :value="libelleImputationBudgetaire(recupererCodeImputationBudgetaire(recupererIdEquipement(formData7.famill_id)))"
                      class="span"
                      readonly
                    /> -->
                  <!-- </div>
                </div>
                      </td> -->
                      <!-- <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Duré de vie</label>
                  <div class="controls">
                   <div class="controls"> -->
                    <!-- <input
                      type="text"
                    v-model="formData.durevie"
                      class="span"
                      
                    /> -->
                    <!-- <input
                      type="text"
                    :value="dureDeVie(formData7.famill_id)"
                      class="span"
                      readonly
                    />
                  </div>
                </div>
                </div>
                      </td>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Prix unitaire</label>
                  <div class="controls">
                   <div class="controls">
                    <input
                      type="text"
                    v-model="formData.prixunitaire"
                      class="span"
                      
                    />
                  </div>
                </div>
                </div>
                      </td>
                  </tr>
        </table> -->
        <table class="table table-bordered table-striped">
                  
                <div class="widget-box">
                  <div class="widget-title">
                      
                    <ul class="nav nav-tabs">
                     <li class="active"><a data-toggle="tab" href="#Techniques">Informations Techniques</a></li>
        <li class=""><a data-toggle="tab" href="#Informations">Autres Informations</a></li>
        
                      
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                  <div id="Techniques" class="tab-pane active">
         <table class="table table-bordered table-striped">
           <tr>
           <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">N°Immatriculation</label>
                  <div class="controls">
                   <div class="controls">
                    <input
                      type="text"
                    v-model="formData.numimmatriculation"
                      class="span"
                      
                    />
                  </div>
                </div>
                </div>
                      </td>
                     
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Duré de vie</label>
                  <div class="controls">
                   <div class="controls">
                    <!-- <input
                      type="text"
                    v-model="formData.durevie"
                      class="span"
                      
                    /> -->
                    <input
                      type="text"
                    :value="dureDeVie(formData7.famill_id)"
                      class="span"
                      readonly
                    />
                  </div>
                </div>
                </div>
                      </td>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Prix unitaire</label>
                  <div class="controls">
                   <div class="controls">
                    <input
                      type="text"
                    v-model="formData.prixunitaire"
                      class="span"
                      
                    />
                  </div>
                </div>
                </div>
                      </td>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Marque</label>
                  <div class="controls">
                    <select  class="span" v-model="formData.marque">
                      <option></option>                     
                      <option
                        v-for="typeUniteA in AfficheModelMaterielVehicule"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                  </div>
                </div>
                      </td>
                  </tr>
               <tr>
                     
                      <!-- <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Type véhicule</label>
                  <div class="controls">
                    <select  class="span" v-model="formData.typevehicule">
                      <option></option>                     
                      <option
                        v-for="typeUniteA in TypeVehicule"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                  </div>
                </div>
                      </td> -->
                      
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Modèle</label>
                  <div class="controls">
                    <select  class="span" v-model="formData.modele">
                      <option></option>                     
                      <option
                        v-for="typeUniteA in fonctionModele(formData.marque)"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                  </div>
                </div>
                      </td>
                       <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Energie</label>
                  <div class="controls">
                    <select  class="span" v-model="formData.energie">
                      <option></option>                     
                      <option
                        v-for="typeUniteA in TypeEnergie"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                  </div>
                </div>
                      </td>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">N°de chassis</label>
                  <div class="controls">
                     <input
                      type="text"
                    v-model="formData.numchassis"
                      class="span"
                      
                    />
                  </div>
                </div>
                      </td>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">N°série</label>
                  <div class="controls">
                    <input
                      type="text"
                    v-model="formData.numserie"
                      class="span"
                      
                    />
                  </div>
                </div>
                      </td>
                  </tr>
                    <tr>
                     
                      
                      
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Couleur</label>
                  <div class="controls">
                    <input
                      type="text"
                    v-model="formData.couleur"
                      class="span"
                      
                    />
                  </div>
                </div>
                      </td>
                       <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Transmission</label>
                  <div class="controls">
                    <select  class="span" v-model="formData.transmission">
                      <option></option>  
                                          
                       <option
                        v-for="typeUniteA in Transmissions"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                  </div>
                </div>
                      </td>
                       <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Nombre de portes</label>
                  <div class="controls">
                    <input
                      type="number"
                    v-model="formData.nombreportes"
                      class="span"
                      
                    />
                  </div>
                </div>
                      </td>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Nombre de place</label>
                  <div class="controls">
                   <input
                      type="number"
                    v-model="formData.nombreplace"
                      class="span"
                      
                    />
                  </div>
                </div>
                      </td>
                  </tr>
            <tr>
                     
                     
                      
                       <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Puissance</label>
                  <div class="controls">
                   <input
                      type="text"
                    v-model="formData.puissance"
                      class="span"
                      
                    />
                  </div>
                </div>
                      </td>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Etat véhicule</label>
                  <div class="controls">
                    <select  class="span" v-model="formData.etatvehicule">
                      <option></option>                     
                      <option
                        v-for="typeUniteA in EtatImmobilisations"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                  </div>
                </div>
                      </td>
                  </tr>
        </table>
      </div>
                      <div id="Informations" class="tab-pane ">
        
         <table class="table table-bordered table-striped">
             <tr>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Date d'Immatriculation</label>
                  <div class="controls">
                   <input
                      type="date"
                    v-model="formData.dateImmatriculation"
                      class="span"
                      
                    />
                  </div>
                </div>
                      </td>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Date de mise en circulation</label>
                  <div class="controls">
                   <input
                      type="date"
                     v-model="formData.datemisecirculation"
                      class="span"
                      
                    />
                  </div>
                </div>
                      </td>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Garantie constructeur</label>
                  <div class="controls">
                    <input
                      type="date"
                     v-model="formData.garantieconstructeur"
                      class="span"
                      
                    />
                  </div>
                </div>
                      </td>
                     
                  </tr>
            <tr>
               <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Garantie concessionnaire</label>
                  <div class="controls">
                   <input
                      type="date"
                     v-model="formData.garantieconcessionnaire"
                      class="span"
                      
                    />
                  </div>
                </div>
                      </td>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Responsable actuel</label>
                  <div class="controls">
                    <select  class="span" v-model="formData.responsableactuel">
                      <option></option>                     
                      
                    </select>
                  </div>
                </div>
                      </td>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Valeur vénale</label>
                  <div class="controls">
                   <input
                      type="text"
                    v-model="formData.valeurvenal"
                      class="span"
                      
                    />
                  </div>
                </div>
                      </td>
                      <!-- <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">unité administrative</label>
                  <div class="controls">
                    <select  class="span">
                      <option></option>                     
                      
                    </select>
                  </div>
                </div>
                      </td>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">unité administrative</label>
                  <div class="controls">
                    <select  class="span">
                      <option></option>                     
                      
                    </select>
                  </div>
                </div>
                      </td> -->
                  </tr>
        </table>
        
      </div>
     
                  </div>

                  <!-- <div class="widget-title">
                      
                    <ul class="nav nav-tabs">
                     <li class="active"><a data-toggle="tab" href="#Expiration">Expiration</a></li>
       
                      
                     
                    </ul>
                  </div> -->
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                  <div id="Expiration" class="tab-pane">
         <table class="table table-bordered table-striped">
            <tr>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Votre assurance expirere le</label>
                  <div class="controls">
                    <input
                      type="date"
                    v-model="formData.votreassuranceexpirere"
                      class="span"
                      
                    />
                  </div>
                </div>
                      </td>
                      <td>
                          <div class="control-group">
                  <label class="control-label" style="font-size:14px">Votre admimission temporaire expirera le</label>
                
                  <div class="controls">
                    <input
                      type="date"
                    v-model="formData.votreadmimissiontemporaire"
                      class="span"
                      
                    />
                  </div>
                  </div>
                      </td>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Date de relevé</label>
                  <div class="controls">
                   <div class="controls">
                    <input
                      type="date"
                    v-model="formData.datereleve"
                      class="span"
                      
                    />
                  </div>
                </div>
                </div>
                      </td>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Votre controle technique expirera le</label>
                  <div class="controls">
                    <input
                      type="date"
                    v-model="formData.votrecontroletechnique"
                      class="span"
                      
                    />
                  </div>
                </div>
                      </td>
                      <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Dernier relevé kilométrique</label>
                  <div class="controls">
                    <input
                      type="number"
                    v-model="formData.dernierrelevkilometrique"
                      class="span"
                      
                    />
                  </div>
                </div>
                      </td>
                  </tr>
        </table>
      </div>
                    
                  </div>
                 
                </div>
              </table>
      </div>
     
                  </div>

                 
                  <br />
                  <div align="right">
                    <div class="controls">
                      <div data-toggle="buttons-checkbox" class="btn-group">
                        <a
                          class="btn btn-primary"
                          @click.prevent="AjouterVehicule"
                        >Valider</a>
                        <a
                          @click.prevent="afficherModalListePersonnel()"
                          class="btn"
                          href="#"
                        >Fermer</a>
                      </div>
                    </div>
                  </div>
                </div>
              </table>
            </div>
          </div>
        </div>
      </div>
     <notifications  />
    </div>

</template>

<script>

import { mapGetters, mapActions } from "vuex";
import moment from "moment";
// import { formatageSomme } from '../../../../../../Repositories/Repository';
import {admin,dcf,cf} from "../../../../../../Repositories/Auth"
// import AjouterFicheVehicule from '../../gestionDesVehicules/grpeVehicule/AjouterFicheVehicule'
// import ficheMateriel from '../../../suiviImmobilisation/RefaireComptabiliteMatiere/FicheMateriel/ficheMateriel'
// import { ModelListSelect } from "vue-search-select";
// import "vue-search-select/dist/VueSearchSelect.css";
export default {
  components: {
//    ModelListSelect
  },
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ],
      formData7:{

},
formData:{

},
famille_id:"",
formData3:{

},
formData1:{

},
      search: ""
    };
  },
props:["macheid"],
 created() {
            this.marcheid=this.$route.params.id
   this.detail_Stock = this.GestionStockageArticles.find(
       idmarche => idmarche.id == this.$route.params.id
         )
      
},
  computed: {
  ...mapGetters("bienService", ["getFacturePersonnaliser","personnaliseGetterMarcheBailleur","modepaiements",'mandats','getMandatPersonnaliserVise','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
     'acteEffetFinanciers','montantPlanification','montantContratualisation','afficheContratualisation','affichePlanifier',
     'nombremarchesExecute',
     'AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
      "printMarcheNonAttribue","procedurePassations","typeTypeProcedures",
     "montantComtratualisation","text_juridiques", "gettersOuverturePersonnaliser", "typeActeEffetFinanciers"]),

   ...mapGetters('personnelUA', ['acteur_depenses',"paiementPersonnel"]),
   ...mapGetters("SuiviImmobilisation", ["Typebiengrpecorporels","equipements","articles","familles","AffectationVehicules","Transmissions","EtatImmobilisations","TypeEnergie","marqueVehicules","ModeleVehicules","TypeEntretien","TypeVehicule","TypeReparation"]),
   ...mapGetters('uniteadministrative',[
    "plans_programmes",
 "uniteAdministratives",
 "afficheNiveauAction",
 "afficheNiveauActivite",
 "derniereNivoPlanBudgetaire",
 "getPersonnaliseBudgetGeneralParPersonnel",
   "decomptefactures",
   "getvehicules",
   "GestionStockageArticles"
   
   ]),

   ...mapGetters('parametreGenerauxAdministratif',[

 "sections",
 "type_Unite_admins",
 "plans_programmes",
 "natures_sections",
 "grandes_natures",
 "afficheNiveauPlanProg",
 "exercices_budgetaires",
 "taux"
   ]),

   ...mapGetters('parametreGenerauxFonctionnelle',[

      "plans_fonctionnels",
 "afficheNiveauPlanFonctionnel"
   ]),

...mapGetters('parametreGenerauxActivite',[ 'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

...mapGetters('parametreGenerauxBudgetaire',["plans_budgetaires","derniereNivoPlanBudgetaire"]),
...mapGetters("gestionMarche", ['secteur_activites', 'entreprises','banques','comptes','getCompte']),
   admin:admin,
dcf:dcf,
cf:cf,
...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
      ...mapGetters('personnelUA', ["acteur_depenses","personnaFonction","afficheNombrePersonnelRecuActeNormination","fonctionBudgetaire","type_salaries","type_contrats","acte_personnels","type_acte_personnels","fonctions","grades","niveau_etudes",
                "nbr_acteur_actredite_taux","all_acteur_depense","personnaliseActeurFinContrat","personnaliseActeurDepense",
                "totalActeurEnctivite","totalActeurDepense","totalActeurAccredite","tauxActeurAccredite","totalActeurNonAccredite","personnaliseActeurDepense","affichePersonnelRecuActeNormination"]),
     


dependDuGroupe() {
      return id => {
        if (id != null && id != "") {
           return  this.familles.filter(qtreel => qtreel.equipemt_id == id);

        }
      };
    },





imputationComptable() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_budgetaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code;
      }
      return 
        }
      };
    },

GroupeEquipement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.equipements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return this.imputationComptable(qtereel.code).concat("    ", qtereel.libelle);
      }
      return 
        }
      };
    },





AfficheTypeDeBien() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.familles.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.type_bien;
      }
      return 
        }
      };
    },

  afficheLibelleTypeBien() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },



libelleImputationBudgetaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_budgetaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code;
      }
      return 
        }
      };
    },
recupererIdEquipement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.familles.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.equipemt_id;
      }
      return 
        }
      };
    },
    dureDeVie() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.familles.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.dureVie;
      }
      return 
        }
      };
    },
recupererCodeImputationBudgetaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.equipements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code;
      }
      return 
        }
      };
    },

 afficheListeArticleParFamille() {
      return id => {
        if (id != null && id != "") {
           return this.articles.filter(qtreel => qtreel.famille_id == id);

      
    
        }
      };
    },



libelleArticle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.familles.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 
        }
      };
    },





     AfficheModelMaterielMobilier() {
      
           return this.marqueVehicules.filter(qtreel => qtreel.typecorporel == 1);
      
       
    },
    AfficheModelMaterielVehicule() {
      
           return this.marqueVehicules.filter(qtreel => qtreel.typecorporel == 2);
      
       
    },
 afficheModeleParMarque() {
      return id => {
        if (id != null && id != "") {
           return this.ModeleVehicules.filter(qtreel => qtreel.marque_id == id);

      
    
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


      quantiteGlobal() {
      const val = parseFloat(this.quantiteEnStock(this.formData.famille_id)) + parseFloat(this.quantiteRecuFacture(this.formData.articleRecu_id));
      return parseFloat(val).toFixed(0);
    },
     
     
     
     libelleFamilleEquipement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.familles.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 
        }
      };
    },
               lesClassDe3() { 
const isClassDe3 = (code) => code.charAt(0)== "6" && code.charAt(1)== "1" && code.charAt(2)== "4"; 
return this.derniereNivoPlanBudgetaire.filter(x => isClassDe3(x.code));
 },
     
     affichePersonnel() {
      return id => {
        if (id != null && id != "") {
           return this.AffectationVehicules.filter(qtreel => qtreel.vehicule_id == id && qtreel.etat_veh==1);
      
        }
      };
    },
    NomPersonnel() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.personnaliseActeurDepense.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.nom.concat("  ", qtereel.prenom);
      }
      return 0
        }
      };
    },
    libellemarqueVehicules() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marqueVehicules.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
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
        return qtereel.libelle;
      }
      return 0
        }
      };
    },

     marcheTypeFournitureParUa() {
      return id => {
        if (id != null && id != "") {
           return this.marches.filter(qtreel => qtreel.unite_administrative_id == id && qtreel.type_marche_id==1 && this.validationMandatParcf(qtreel.id) == 8);
      
        }
      };
    },
    validationMandatParcf() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.mandats.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.decision_cf;
      }
      return 0
        }
      };
    },
    afficheNumeroFacture() {
      return id => {
        if (id != null && id != "") {
           return this.getFacturePersonnaliser.filter(qtreel => qtreel.marche_id == id);
      
        }
      };
    },
    MontantFacture() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.prix_propose_ht;
      }
      return 0
        }
      };
    },
    DateFacture() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.date_facture;
      }
      return 0
        }
      };
    },
       AfficheQuantiteArticle() {
      return id => {
        if (id != null && id != "") {
           return this.getFacturePersonnaliser.filter(qtreel => qtreel.designation == id);
      
        }
      };
    },
    AfficheArticleAcquisition() {
      return id => {
        if (id != null && id != "") {
           return this.getFacturePersonnaliser.filter(qtreel => qtreel.id == id);
      
        }
      };
    },
    AfficheArticleEnStock() {
      return id => {
        if (id != null && id != "") {
           return this.GestionStockageArticles.filter(qtreel => qtreel.uAdministrative_id == id);
      
        }
      };
    },
    quantiteEnStock() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.GestionStockageArticles.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.quantitestock;
      }
      return 0
        }
      };
    },
    RecupereridEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getActeEffetFinancierPersonnaliser45.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.entreprise_id;
      }
      return 0
        }
      };
    },
    RecupererNomEntreprise() {
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
    // quantiteRecuFacture() {
      
    //        const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.famill_id == id);

    //   if (qtereel) {
    //     return qtereel.quantitestock;
    //   }
    //   return 0
       
    // },
    
   afficherUAParDroitAccess() {
    
        if (this.cf){
            let colect=[];
            this.uniteAdministratives.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
             return colect;
          
        }

        return this.uniteAdministratives;
       
    },
 










 fonctionModele() {
      return id => {
        if (id != null && id != "") {
           return this.ModeleVehicules.filter(qtreel => qtreel.marque_id == id);
      
        }
      };
    },
prixUnitaire() {
      
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.designation == id);

      if (qtereel) {
        return qtereel.prix_unitaire;
      }
      return 0
        }
         else if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.prix_unitaire1;
      }
      return 0
        }
        else if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.prix_unitaire2;
      }
      return 0
        }
        else if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.prix_unitaire3;
      }
      return 0
        }
        else if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.prix_unitaire4;
      }
      return 0
        }
        else if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.prix_unitaire5;
      }
      return 0
        }
        else if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.prix_unitair6;
      }
      return 0
        }
        else if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.prix_unitaire7;
      }
      return 0
        }
        else if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.prix_unitaire8;
      }
      return 0
        }
        else if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.prix_unitaire9;
      }
      return 0
        }
        else if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.prix_unitaire10;
      }
      return 0
        }
       
      };
      
      
    },

    quantiteRecuFacture() {
      
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.quantite;
      }
      return 0
        }
         else if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.quantite1;
      }
      return 0
        }
        else if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.quantite2;
      }
      return 0
        }
        else if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.quantite3;
      }
      return 0
        }
        else if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.quantite4;
      }
      return 0
        }
        else if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.quantite5;
      }
      return 0
        }
        else if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.quantite6;
      }
      return 0
        }
        else if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.quantite7;
      }
      return 0
        }
        else if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.quantite8;
      }
      return 0
        }
        else if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.quantite9;
      }
      return 0
        }
        else if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.quantite10;
      }
      return 0
        }
       
      };
      
      
    },
  },
  methods: {
    
     ...mapActions("uniteadministrative", [
      "ajouterStockArticle",
      "ajouterNouveauVehicule"
      ]),
      ...mapActions("SuiviImmobilisation", [
     
      "ajouterFicheArticle",
      
    ]),
      afficherModalListePersonnel(){
                this.$router.push({ name: 'gestionStockCorporels' })
            },
      afficherModalListeExecution(){
                window.history.back();
            },
     AjouterVehicule() {
      

if(this.AfficheTypeDeBien(this.formData7.famill_id) == 9){
 var objetNew ={
        ...this.formData,
        anneebudgetaire:this.anneeAmort,
        uniteadministrative:this.formData3.uAdministrative_id,
        fournisseur_id:this.formData3.fournisseur_id,
          numero_marche:this.formData3.numero_marche,
          numero_facture:this.formData3.numero_facture,
          durevie:this.dureDeVie(this.formData7.famill_id),
      }
      var nouveauObjet2 ={
        
        uAdministrative_id:this.formData3.uAdministrative_id,
        quantitestock:this.formData3.quantitestock,
        famill_id:this.formData7.famill_id,
        marque_id:this.formData.marque,
        model_id:this.formData.modele,
       histo_qte:this.formData3.quantitestock,
      }
      this.ajouterNouveauVehicule(objetNew);
    this.ajouterStockArticle(nouveauObjet2)
      this.formData = {
        uniteadministrative:"",
        numidentification:"",
        numimmatriculation:"",
        immobilisation:"",
        typevehicule:"",
        marque:"",
        modele:"",
        energie:"",
        numchassis:"",
        numserie:"",
        couleur:"",
        transmission:"",
        nombreportes:"",
        nombreplace:"",
        puissance:"",
        etatvehicule:"",
        votreassuranceexpirere:"",
        
      };
 
}
else{
  var nouveauObjet ={
        ...this.formData1,
        ua_id:this.formData3.uAdministrative_id,
        marche_id:this.formData1.marche_id,
        type_bien:this.AfficheTypeDeBien(this.formData7.famill_id),
          fournisseur_id:this.formData3.fournisseur_id,
          numero_marche:this.formData3.numero_marche,
          numero_facture:this.formData3.numero_facture,
          article_id:this.formData3.famill_id,
          durevie:this.dureDeVie(this.formData7.famill_id),
          famille_article_id:this.formData3.famill_id
      }
      var nouveauObjet1 ={
        
        uAdministrative_id:this.formData3.uAdministrative_id,
        quantitestock:this.formData3.quantitestock,
        famill_id:this.formData3.famill_id,
        marque_id:this.formData1.marque_id,
        model_id:this.formData1.model_id,
       histo_qte:this.formData3.quantitestock,
      }
      this.ajouterFicheArticle(nouveauObjet);
      this.ajouterStockArticle(nouveauObjet1)
    
      this.formData1 = {
        ua_id:"",
        article_id:"",
        model_id:"",
        numero_serie:"",
        numero_matricule:"",
        prix_unitaire:"",
          durevie:"",
          marque_id:"",
          immobilisation:"",
          autreinfo:""
       
      };
      this.formData = {
        
        fournisseur_id:"",
        numero_marche:"",
        numero_facture:"",
        famill_id:"",
        quantitestock:"",
        typestockage:""
      }
      this.famille_id=""
     
}




     
    },
   
 formaterDate(date) {
            return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },
    afficherModalAjouterpaiementPersonnel() {
      this.$("#ModalDecompte").modal({
        backdrop: "static",
        keyboard: false
      });
    }
  }
};
</script>
<style scoped>

.grdirModalActeEffet{
  width: 92%;
  margin: 0 -43%;
}
th{
  text-align:left;
}
</style>
