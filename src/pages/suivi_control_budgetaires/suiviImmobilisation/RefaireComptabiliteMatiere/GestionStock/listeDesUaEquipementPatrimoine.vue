
<template>

<div>
  <div  align="left" style="cursor:pointer;">
    <button class="btn btn-danger" @click.prevent="afficherModalListePersonnel">Page Précédente</button>
    
        </div> 
<div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>GESTION DU PATRIMOINE </h5>
             
            </div>
<table class="table table-bordered table-striped">
                    <thead>
                      <tr>
                         <th>Unite Administrative</th>
                     
                    </tr>
                    </thead>
                    <tbody>
                       <td style="text-align: center;font-size:25px"
                   
                    >{{afficherUniteAdministrative(detail_Ua.uAdministrative_id) || 'Non renseigné'}}</td>
                 
                    </tbody> 
                </table> 
            <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                     <li class="active">
                        <a data-toggle="tab" href="#EntreeEnStock" v-if="recupereTypeBienParCode(recupereTypeBien(detail_Ua.famill_id)) == '01'">{{recupereTypeBienParLibelle(recupereTypeBienParCode(recupereTypeBien(detail_Ua.famill_id)))}}</a>
                      </li>
                       <li class="">
                        <a data-toggle="tab" href="#Affectation" v-if="recupereTypeBienParCode(recupereTypeBien(detail_Ua.famill_id)) == '02'">{{recupereTypeBienParLibelle(recupereTypeBienParCode(recupereTypeBien(detail_Ua.famill_id)))}}</a>
                      </li>
                       <li class="">
                        <a data-toggle="tab" href="#Reparation" v-if="recupereTypeBienParCode(recupereTypeBien(detail_Ua.famill_id)) == '03'">{{recupereTypeBienParLibelle(recupereTypeBienParCode(recupereTypeBien(detail_Ua.famill_id)))}}</a>
                      </li>
                        <li class="">
                        <a data-toggle="tab" href="#SortiePatrimoine" v-if="recupereTypeBienParCode(recupereTypeBien(detail_Ua.famill_id)) == '04'">{{recupereTypeBienParLibelle(recupereTypeBienParCode(recupereTypeBien(detail_Ua.famill_id)))}}</a>
                      </li>
                       <li class="">
                        <a data-toggle="tab" href="#Inventaire" v-if="recupereTypeBienParCode(recupereTypeBien(detail_Ua.famill_id)) == '05'">{{recupereTypeBienParLibelle(recupereTypeBienParCode(recupereTypeBien(detail_Ua.famill_id)))}}</a>
                      </li>
                      <li class="">
                        <a data-toggle="tab" href="#Inventaire" v-if="recupereTypeBienParCode(recupereTypeBien(detail_Ua.famill_id)) == '06'">{{recupereTypeBienParLibelle(recupereTypeBienParCode(recupereTypeBien(detail_Ua.famill_id)))}}</a>
                      </li>
                      <li class="">
                        <a data-toggle="tab" href="#Inventaire" v-if="recupereTypeBienParCode(recupereTypeBien(detail_Ua.famill_id)) == '07'">{{recupereTypeBienParLibelle(recupereTypeBienParCode(recupereTypeBien(detail_Ua.famill_id)))}}</a>
                      </li>
                      <li class="">
                        <a data-toggle="tab" href="#Inventaire" v-if="recupereTypeBienParCode(recupereTypeBien(detail_Ua.famill_id)) == '08'">{{recupereTypeBienParLibelle(recupereTypeBienParCode(recupereTypeBien(detail_Ua.famill_id)))}}</a>
                      </li>
                      <li class="">
                        <a data-toggle="tab" href="#Inventaire" v-if="recupereTypeBienParCode(recupereTypeBien(detail_Ua.famill_id)) == '09'">{{recupereTypeBienParLibelle(recupereTypeBienParCode(recupereTypeBien(detail_Ua.famill_id)))}}</a>
                      </li>
                      <li class="">
                        <a data-toggle="tab" href="#Inventaire" v-if="recupereTypeBienParCode(recupereTypeBien(detail_Ua.famill_id)) == '10'">{{recupereTypeBienParLibelle(recupereTypeBienParCode(recupereTypeBien(detail_Ua.famill_id)))}}</a>
                      </li>
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">


          <div class="tab-pane active"  v-if="recupereTypeBienParCode(recupereTypeBien(detail_Ua.famill_id)) == '01'">
            <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     
                    
                    
                     <th>Famille</th>
                     <th>Marque</th>
                     <th>Model</th>
                    <!-- <th>Quantité Initiale</th>  -->
                    <th title="quantite en stock">Quantité Actuelle</th>
                    
                   
                    <!-- <th style="width:10%">Action</th> -->
                  </tr>
                </thead>
                <tbody>
                     <tr
                    class="odd gradeX"
                    v-for="stock in listeDesEquipementPar01(detail_Ua.uAdministrative_id)"
                    :key="stock.id"
                  >

                    <!-- <td
                      @dblclick="afficherModalModifierStock(index)"
                    >{{stock.typeuniteAdminist.libelle || 'Non renseigné'}}</td>  -->
                    <!-- <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleUniteAdministrative(stock.uAdministrative_id)	 || 'Non renseigné'}}</td> -->
                     <!-- <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleTypeEquipement(stock.typeequipe_id) || 'Non renseigné'}}</td>  -->
                    <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleFamilleEquipement(stock.famill_id) || 'Non renseigné'}}</td>
                     <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleMarque(stock.marque_id) || 'Non renseigné'}}</td>
                     <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleModelle(stock.model_id) || 'Non renseigné'}}</td>
                    
                    <td style="text-align: center;"
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{stock.quantitestock || 'Non renseigné'}}</td>
                  
                    <td>
                        <!-- <button class="btn btn-inverse" @click="afficherModalStock(index)" title="ajouter quantite entrant">
                        <span>
                          <i class=" icon-edit"></i>
                        </span>
                      </button> -->
                      <!-- <button class="btn btn-danger" @click="supprimerStockArticle(stock.id)">
                        <span>
                          <i class="icon icon-trash"></i> Supprimer
                        </span>
                      </button> -->
                    </td>
                  </tr>
                   <!-- <tr
                   
                  >
                <td></td>
                <td></td>
                <td></td>
                      <td style="font-weight:bold;">Total</td>
                   <td  style="text-align: center;color:red;font-weight:bold;">{{nombreDeQuantiteEnStock(uniteAdministrative_id) || 0 }}</td>
                    <td style="text-align: center;color:red;font-weight:bold;"></td>
                     <td style="text-align: center;color:red;font-weight:bold;"></td>
                     <td style="text-align: center;color:red;font-weight:bold;"></td>
                   
                  </tr> -->
                </tbody>
              </table>
            
             </div>
          <div id="Affectation" class="tab-pane active"  v-if="recupereTypeBienParCode(recupereTypeBien(detail_Ua.famill_id)) == '02'">
         
            <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     
                    
                    
                     <th>Famille</th>
                     <th>Marque</th>
                     <th>Model</th>
                    <!-- <th>Quantité Initiale</th>  -->
                    <th title="quantite en stock">Quantité Actuelle</th>
                    
                   
                    <!-- <th style="width:10%">Action</th> -->
                  </tr>
                </thead>
                <tbody>
                     <tr
                    class="odd gradeX"
                    v-for="stock in listeDesEquipementPar02(detail_Ua.uAdministrative_id)"
                    :key="stock.id"
                  >

                    <!-- <td
                      @dblclick="afficherModalModifierStock(index)"
                    >{{stock.typeuniteAdminist.libelle || 'Non renseigné'}}</td>  -->
                    <!-- <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleUniteAdministrative(stock.uAdministrative_id)	 || 'Non renseigné'}}</td> -->
                     <!-- <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleTypeEquipement(stock.typeequipe_id) || 'Non renseigné'}}</td>  -->
                    <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleFamilleEquipement(stock.famill_id) || 'Non renseigné'}}</td>
                     <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleMarque(stock.marque_id) || 'Non renseigné'}}</td>
                     <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleModelle(stock.model_id) || 'Non renseigné'}}</td>
                    
                    <td style="text-align: center;"
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{stock.quantitestock || 'Non renseigné'}}</td>
                  
                    <td>
                        <!-- <button class="btn btn-inverse" @click="afficherModalStock(index)" title="ajouter quantite entrant">
                        <span>
                          <i class=" icon-edit"></i>
                        </span>
                      </button> -->
                      <!-- <button class="btn btn-danger" @click="supprimerStockArticle(stock.id)">
                        <span>
                          <i class="icon icon-trash"></i> Supprimer
                        </span>
                      </button> -->
                    </td>
                  </tr>
                   <!-- <tr
                   
                  >
                <td></td>
                <td></td>
                <td></td>
                      <td style="font-weight:bold;">Total</td>
                   <td  style="text-align: center;color:red;font-weight:bold;">{{nombreDeQuantiteEnStock(uniteAdministrative_id) || 0 }}</td>
                    <td style="text-align: center;color:red;font-weight:bold;"></td>
                     <td style="text-align: center;color:red;font-weight:bold;"></td>
                     <td style="text-align: center;color:red;font-weight:bold;"></td>
                   
                  </tr> -->
                </tbody>
              </table>
            
           
             </div>
 <div id="" class="tab-pane active"  v-if="recupereTypeBienParCode(recupereTypeBien(detail_Ua.famill_id)) == '03'">
    <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     
                    
                    
                     <th>Famille</th>
                     <th>Marque</th>
                     <th>Model</th>
                    <!-- <th>Quantité Initiale</th>  -->
                    <th title="quantite en stock">Quantité Actuelle</th>
                    
                   
                    <!-- <th style="width:10%">Action</th> -->
                  </tr>
                </thead>
                <tbody>
                     <tr
                    class="odd gradeX"
                    v-for="stock in listeDesEquipementPar03(detail_Ua.uAdministrative_id)"
                    :key="stock.id"
                  >

                    <!-- <td
                      @dblclick="afficherModalModifierStock(index)"
                    >{{stock.typeuniteAdminist.libelle || 'Non renseigné'}}</td>  -->
                    <!-- <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleUniteAdministrative(stock.uAdministrative_id)	 || 'Non renseigné'}}</td> -->
                     <!-- <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleTypeEquipement(stock.typeequipe_id) || 'Non renseigné'}}</td>  -->
                    <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleFamilleEquipement(stock.famill_id) || 'Non renseigné'}}</td>
                     <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleMarque(stock.marque_id) || 'Non renseigné'}}</td>
                     <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleModelle(stock.model_id) || 'Non renseigné'}}</td>
                    
                    <td style="text-align: center;"
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{stock.quantitestock || 'Non renseigné'}}</td>
                  
                    <td>
                        <!-- <button class="btn btn-inverse" @click="afficherModalStock(index)" title="ajouter quantite entrant">
                        <span>
                          <i class=" icon-edit"></i>
                        </span>
                      </button> -->
                      <!-- <button class="btn btn-danger" @click="supprimerStockArticle(stock.id)">
                        <span>
                          <i class="icon icon-trash"></i> Supprimer
                        </span>
                      </button> -->
                    </td>
                  </tr>
                   <!-- <tr
                   
                  >
                <td></td>
                <td></td>
                <td></td>
                      <td style="font-weight:bold;">Total</td>
                   <td  style="text-align: center;color:red;font-weight:bold;">{{nombreDeQuantiteEnStock(uniteAdministrative_id) || 0 }}</td>
                    <td style="text-align: center;color:red;font-weight:bold;"></td>
                     <td style="text-align: center;color:red;font-weight:bold;"></td>
                     <td style="text-align: center;color:red;font-weight:bold;"></td>
                   
                  </tr> -->
                </tbody>
              </table>
   
    </div>
<div id="" class="tab-pane active"  v-if="recupereTypeBienParCode(recupereTypeBien(detail_Ua.famill_id)) == '04'">
  <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     
                    
                    
                     <th>Famille</th>
                     <th>Marque</th>
                     <th>Model</th>
                    <!-- <th>Quantité Initiale</th>  -->
                    <th title="quantite en stock">Quantité Actuelle</th>
                    
                   
                    <!-- <th style="width:10%">Action</th> -->
                  </tr>
                </thead>
                <tbody>
                     <tr
                    class="odd gradeX"
                    v-for="stock in listeDesEquipementPar04(detail_Ua.uAdministrative_id)"
                    :key="stock.id"
                  >

                    <!-- <td
                      @dblclick="afficherModalModifierStock(index)"
                    >{{stock.typeuniteAdminist.libelle || 'Non renseigné'}}</td>  -->
                    <!-- <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleUniteAdministrative(stock.uAdministrative_id)	 || 'Non renseigné'}}</td> -->
                     <!-- <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleTypeEquipement(stock.typeequipe_id) || 'Non renseigné'}}</td>  -->
                    <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleFamilleEquipement(stock.famill_id) || 'Non renseigné'}}</td>
                     <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleMarque(stock.marque_id) || 'Non renseigné'}}</td>
                     <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleModelle(stock.model_id) || 'Non renseigné'}}</td>
                    
                    <td style="text-align: center;"
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{stock.quantitestock || 'Non renseigné'}}</td>
                  
                    <td>
                        <!-- <button class="btn btn-inverse" @click="afficherModalStock(index)" title="ajouter quantite entrant">
                        <span>
                          <i class=" icon-edit"></i>
                        </span>
                      </button> -->
                      <!-- <button class="btn btn-danger" @click="supprimerStockArticle(stock.id)">
                        <span>
                          <i class="icon icon-trash"></i> Supprimer
                        </span>
                      </button> -->
                    </td>
                  </tr>
                   <!-- <tr
                   
                  >
                <td></td>
                <td></td>
                <td></td>
                      <td style="font-weight:bold;">Total</td>
                   <td  style="text-align: center;color:red;font-weight:bold;">{{nombreDeQuantiteEnStock(uniteAdministrative_id) || 0 }}</td>
                    <td style="text-align: center;color:red;font-weight:bold;"></td>
                     <td style="text-align: center;color:red;font-weight:bold;"></td>
                     <td style="text-align: center;color:red;font-weight:bold;"></td>
                   
                  </tr> -->
                </tbody>
              </table>
            
   </div>
 <div id="" class="tab-pane active"  v-if="recupereTypeBienParCode(recupereTypeBien(detail_Ua.famill_id)) == '05'">
   <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     
                    
                    
                     <th>Famille</th>
                     <th>Marque</th>
                     <th>Model</th>
                    <!-- <th>Quantité Initiale</th>  -->
                    <th title="quantite en stock">Quantité Actuelle</th>
                    
                   
                    <!-- <th style="width:10%">Action</th> -->
                  </tr>
                </thead>
                <tbody>
                     <tr
                    class="odd gradeX"
                    v-for="stock in listeDesEquipementPar05(detail_Ua.uAdministrative_id)"
                    :key="stock.id"
                  >

                    <!-- <td
                      @dblclick="afficherModalModifierStock(index)"
                    >{{stock.typeuniteAdminist.libelle || 'Non renseigné'}}</td>  -->
                    <!-- <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleUniteAdministrative(stock.uAdministrative_id)	 || 'Non renseigné'}}</td> -->
                     <!-- <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleTypeEquipement(stock.typeequipe_id) || 'Non renseigné'}}</td>  -->
                    <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleFamilleEquipement(stock.famill_id) || 'Non renseigné'}}</td>
                     <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleMarque(stock.marque_id) || 'Non renseigné'}}</td>
                     <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleModelle(stock.model_id) || 'Non renseigné'}}</td>
                    
                    <td style="text-align: center;"
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{stock.quantitestock || 'Non renseigné'}}</td>
                  
                    <td>
                        <!-- <button class="btn btn-inverse" @click="afficherModalStock(index)" title="ajouter quantite entrant">
                        <span>
                          <i class=" icon-edit"></i>
                        </span>
                      </button> -->
                      <!-- <button class="btn btn-danger" @click="supprimerStockArticle(stock.id)">
                        <span>
                          <i class="icon icon-trash"></i> Supprimer
                        </span>
                      </button> -->
                    </td>
                  </tr>
                   <!-- <tr
                   
                  >
                <td></td>
                <td></td>
                <td></td>
                      <td style="font-weight:bold;">Total</td>
                   <td  style="text-align: center;color:red;font-weight:bold;">{{nombreDeQuantiteEnStock(uniteAdministrative_id) || 0 }}</td>
                    <td style="text-align: center;color:red;font-weight:bold;"></td>
                     <td style="text-align: center;color:red;font-weight:bold;"></td>
                     <td style="text-align: center;color:red;font-weight:bold;"></td>
                   
                  </tr> -->
                </tbody>
              </table>
            
    </div>

        <div id="" class="tab-pane active"  v-if="recupereTypeBienParCode(recupereTypeBien(detail_Ua.famill_id)) == '06'">
          <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     
                    
                    
                     <th>Famille</th>
                     <th>Marque</th>
                     <th>Model</th>
                    <!-- <th>Quantité Initiale</th>  -->
                    <th title="quantite en stock">Quantité Actuelle</th>
                    
                   
                    <!-- <th style="width:10%">Action</th> -->
                  </tr>
                </thead>
                <tbody>
                     <tr
                    class="odd gradeX"
                    v-for="stock in listeDesEquipementPar06(detail_Ua.uAdministrative_id)"
                    :key="stock.id"
                  >

                    <!-- <td
                      @dblclick="afficherModalModifierStock(index)"
                    >{{stock.typeuniteAdminist.libelle || 'Non renseigné'}}</td>  -->
                    <!-- <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleUniteAdministrative(stock.uAdministrative_id)	 || 'Non renseigné'}}</td> -->
                     <!-- <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleTypeEquipement(stock.typeequipe_id) || 'Non renseigné'}}</td>  -->
                    <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleFamilleEquipement(stock.famill_id) || 'Non renseigné'}}</td>
                     <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleMarque(stock.marque_id) || 'Non renseigné'}}</td>
                     <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleModelle(stock.model_id) || 'Non renseigné'}}</td>
                    
                    <td style="text-align: center;"
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{stock.quantitestock || 'Non renseigné'}}</td>
                  
                    <td>
                        <!-- <button class="btn btn-inverse" @click="afficherModalStock(index)" title="ajouter quantite entrant">
                        <span>
                          <i class=" icon-edit"></i>
                        </span>
                      </button> -->
                      <!-- <button class="btn btn-danger" @click="supprimerStockArticle(stock.id)">
                        <span>
                          <i class="icon icon-trash"></i> Supprimer
                        </span>
                      </button> -->
                    </td>
                  </tr>
                   <!-- <tr
                   
                  >
                <td></td>
                <td></td>
                <td></td>
                      <td style="font-weight:bold;">Total</td>
                   <td  style="text-align: center;color:red;font-weight:bold;">{{nombreDeQuantiteEnStock(uniteAdministrative_id) || 0 }}</td>
                    <td style="text-align: center;color:red;font-weight:bold;"></td>
                     <td style="text-align: center;color:red;font-weight:bold;"></td>
                     <td style="text-align: center;color:red;font-weight:bold;"></td>
                   
                  </tr> -->
                </tbody>
              </table>
            
           </div>
        <div id="" class="tab-pane active"  v-if="recupereTypeBienParCode(recupereTypeBien(detail_Ua.famill_id)) == '07'">

          <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     
                    
                    
                     <th>Famille</th>
                     <th>Marque</th>
                     <th>Model</th>
                    <!-- <th>Quantité Initiale</th>  -->
                    <th title="quantite en stock">Quantité Actuelle</th>
                    
                   
                    <!-- <th style="width:10%">Action</th> -->
                  </tr>
                </thead>
                <tbody>
                     <tr
                    class="odd gradeX"
                    v-for="stock in listeDesEquipementPar07(detail_Ua.uAdministrative_id)"
                    :key="stock.id"
                  >

                    <!-- <td
                      @dblclick="afficherModalModifierStock(index)"
                    >{{stock.typeuniteAdminist.libelle || 'Non renseigné'}}</td>  -->
                    <!-- <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleUniteAdministrative(stock.uAdministrative_id)	 || 'Non renseigné'}}</td> -->
                     <!-- <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleTypeEquipement(stock.typeequipe_id) || 'Non renseigné'}}</td>  -->
                    <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleFamilleEquipement(stock.famill_id) || 'Non renseigné'}}</td>
                     <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleMarque(stock.marque_id) || 'Non renseigné'}}</td>
                     <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleModelle(stock.model_id) || 'Non renseigné'}}</td>
                    
                    <td style="text-align: center;"
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{stock.quantitestock || 'Non renseigné'}}</td>
                  
                    <td>
                        <!-- <button class="btn btn-inverse" @click="afficherModalStock(index)" title="ajouter quantite entrant">
                        <span>
                          <i class=" icon-edit"></i>
                        </span>
                      </button> -->
                      <!-- <button class="btn btn-danger" @click="supprimerStockArticle(stock.id)">
                        <span>
                          <i class="icon icon-trash"></i> Supprimer
                        </span>
                      </button> -->
                    </td>
                  </tr>
                   <!-- <tr
                   
                  >
                <td></td>
                <td></td>
                <td></td>
                      <td style="font-weight:bold;">Total</td>
                   <td  style="text-align: center;color:red;font-weight:bold;">{{nombreDeQuantiteEnStock(uniteAdministrative_id) || 0 }}</td>
                    <td style="text-align: center;color:red;font-weight:bold;"></td>
                     <td style="text-align: center;color:red;font-weight:bold;"></td>
                     <td style="text-align: center;color:red;font-weight:bold;"></td>
                   
                  </tr> -->
                </tbody>
              </table>
            
        </div>
        <div id="" class="tab-pane active"  v-if="recupereTypeBienParCode(recupereTypeBien(detail_Ua.famill_id)) == '08'">
          <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     
                    
                    
                     <th>Famille</th>
                     <th>Marque</th>
                     <th>Model</th>
                    <!-- <th>Quantité Initiale</th>  -->
                    <th title="quantite en stock">Quantité Actuelle</th>
                    
                   
                    <!-- <th style="width:10%">Action</th> -->
                  </tr>
                </thead>
                <tbody>
                     <tr
                    class="odd gradeX"
                    v-for="stock in listeDesEquipementPar08(detail_Ua.uAdministrative_id)"
                    :key="stock.id"
                  >

                    <!-- <td
                      @dblclick="afficherModalModifierStock(index)"
                    >{{stock.typeuniteAdminist.libelle || 'Non renseigné'}}</td>  -->
                    <!-- <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleUniteAdministrative(stock.uAdministrative_id)	 || 'Non renseigné'}}</td> -->
                     <!-- <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleTypeEquipement(stock.typeequipe_id) || 'Non renseigné'}}</td>  -->
                    <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleFamilleEquipement(stock.famill_id) || 'Non renseigné'}}</td>
                     <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleMarque(stock.marque_id) || 'Non renseigné'}}</td>
                     <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleModelle(stock.model_id) || 'Non renseigné'}}</td>
                    
                    <td style="text-align: center;"
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{stock.quantitestock || 'Non renseigné'}}</td>
                  
                    <td>
                        <!-- <button class="btn btn-inverse" @click="afficherModalStock(index)" title="ajouter quantite entrant">
                        <span>
                          <i class=" icon-edit"></i>
                        </span>
                      </button> -->
                      <!-- <button class="btn btn-danger" @click="supprimerStockArticle(stock.id)">
                        <span>
                          <i class="icon icon-trash"></i> Supprimer
                        </span>
                      </button> -->
                    </td>
                  </tr>
                   <!-- <tr
                   
                  >
                <td></td>
                <td></td>
                <td></td>
                      <td style="font-weight:bold;">Total</td>
                   <td  style="text-align: center;color:red;font-weight:bold;">{{nombreDeQuantiteEnStock(uniteAdministrative_id) || 0 }}</td>
                    <td style="text-align: center;color:red;font-weight:bold;"></td>
                     <td style="text-align: center;color:red;font-weight:bold;"></td>
                     <td style="text-align: center;color:red;font-weight:bold;"></td>
                   
                  </tr> -->
                </tbody>
              </table>
            
        </div>
        <div id="" class="tab-pane active"  v-if="recupereTypeBienParCode(recupereTypeBien(detail_Ua.famill_id)) == '09'">
          <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     
                    
                    
                     <th>Famille</th>
                     <th>Marque</th>
                     <th>Model</th>
                    <!-- <th>Quantité Initiale</th>  -->
                    <th title="quantite en stock">Quantité Actuelle</th>
                    
                   
                    <!-- <th style="width:10%">Action</th> -->
                  </tr>
                </thead>
                <tbody>
                     <tr
                    class="odd gradeX"
                    v-for="stock in listeDesEquipementPar09(detail_Ua.uAdministrative_id)"
                    :key="stock.id"
                  >

                    <!-- <td
                      @dblclick="afficherModalModifierStock(index)"
                    >{{stock.typeuniteAdminist.libelle || 'Non renseigné'}}</td>  -->
                    <!-- <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleUniteAdministrative(stock.uAdministrative_id)	 || 'Non renseigné'}}</td> -->
                     <!-- <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleTypeEquipement(stock.typeequipe_id) || 'Non renseigné'}}</td>  -->
                    <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleFamilleEquipement(stock.famill_id) || 'Non renseigné'}}</td>
                     <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleMarque(stock.marque_id) || 'Non renseigné'}}</td>
                     <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleModelle(stock.model_id) || 'Non renseigné'}}</td>
                    
                    <td style="text-align: center;"
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{stock.quantitestock || 'Non renseigné'}}</td>
                  
                    <td>
                        <!-- <button class="btn btn-inverse" @click="afficherModalStock(index)" title="ajouter quantite entrant">
                        <span>
                          <i class=" icon-edit"></i>
                        </span>
                      </button> -->
                      <!-- <button class="btn btn-danger" @click="supprimerStockArticle(stock.id)">
                        <span>
                          <i class="icon icon-trash"></i> Supprimer
                        </span>
                      </button> -->
                    </td>
                  </tr>
                   <!-- <tr
                   
                  >
                <td></td>
                <td></td>
                <td></td>
                      <td style="font-weight:bold;">Total</td>
                   <td  style="text-align: center;color:red;font-weight:bold;">{{nombreDeQuantiteEnStock(uniteAdministrative_id) || 0 }}</td>
                    <td style="text-align: center;color:red;font-weight:bold;"></td>
                     <td style="text-align: center;color:red;font-weight:bold;"></td>
                     <td style="text-align: center;color:red;font-weight:bold;"></td>
                   
                  </tr> -->
                </tbody>
              </table>
            
        </div>
        <div id="" class="tab-pane active"  v-if="recupereTypeBienParCode(recupereTypeBien(detail_Ua.famill_id)) == '10'">
          <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     
                    
                    
                     <th>Famille</th>
                     <th>Marque</th>
                     <th>Model</th>
                    <!-- <th>Quantité Initiale</th>  -->
                    <th title="quantite en stock">Quantité Actuelle</th>
                    
                   
                    <!-- <th style="width:10%">Action</th> -->
                  </tr>
                </thead>
                <tbody>
                     <tr
                    class="odd gradeX"
                    v-for="stock in listeDesEquipementPar10(detail_Ua.uAdministrative_id)"
                    :key="stock.id"
                  >

                    <!-- <td
                      @dblclick="afficherModalModifierStock(index)"
                    >{{stock.typeuniteAdminist.libelle || 'Non renseigné'}}</td>  -->
                    <!-- <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleUniteAdministrative(stock.uAdministrative_id)	 || 'Non renseigné'}}</td> -->
                     <!-- <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleTypeEquipement(stock.typeequipe_id) || 'Non renseigné'}}</td>  -->
                    <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleFamilleEquipement(stock.famill_id) || 'Non renseigné'}}</td>
                     <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleMarque(stock.marque_id) || 'Non renseigné'}}</td>
                     <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleModelle(stock.model_id) || 'Non renseigné'}}</td>
                    
                    <td style="text-align: center;"
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{stock.quantitestock || 'Non renseigné'}}</td>
                  
                    <td>
                        <!-- <button class="btn btn-inverse" @click="afficherModalStock(index)" title="ajouter quantite entrant">
                        <span>
                          <i class=" icon-edit"></i>
                        </span>
                      </button> -->
                      <!-- <button class="btn btn-danger" @click="supprimerStockArticle(stock.id)">
                        <span>
                          <i class="icon icon-trash"></i> Supprimer
                        </span>
                      </button> -->
                    </td>
                  </tr>
                   <!-- <tr
                   
                  >
                <td></td>
                <td></td>
                <td></td>
                      <td style="font-weight:bold;">Total</td>
                   <td  style="text-align: center;color:red;font-weight:bold;">{{nombreDeQuantiteEnStock(uniteAdministrative_id) || 0 }}</td>
                    <td style="text-align: center;color:red;font-weight:bold;"></td>
                     <td style="text-align: center;color:red;font-weight:bold;"></td>
                     <td style="text-align: center;color:red;font-weight:bold;"></td>
                   
                  </tr> -->
                </tbody>
              </table>
            
        </div>
        </div>
      </div>
      
        <!-- <fab :actions="fabActions" @cache="afficherModalAjouterBesoinImmobilisation" main-icon="apps" bg-color="green"></fab>
    <notifications  />
      <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
     <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterBesoinImmobilisation()">Open</button>
 
  -->
 
              </table>
 
  </div>


    </div>

              
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import { formatageSomme } from '../../../../../Repositories/Repository';
import {admin,dcf,noDCfNoAdmin} from "../../../../../Repositories/Auth"
import moment from 'moment';
export default {
    data(){
        return{
          formData3:{
        acteur_id:"",
        ua_id:"",
          unitezone_id:"",
          fonction_id:"",
          article_id:"",
          qte:"",
          dure_vie:"",
          etatimmo_id:""
      },
      formData :{

      },
      direct:"",
       valideService:{
motif:"",
date_motif:""
      },
      valideDirecteur:{
        article_id:"",
motif:"",
date_motif_directeur:"",
cause_directeur:""
      },
       formData2:{
        famillearticle_id :"",
        qte_affecte:"",
        date_mise_service:"",
        identification:"",
        type_immo:"",
        nature_dentree:"",
        nature_bien:"",
        etat_immobilisation:"",
        cause_inactivite:"",

      },
      editService:{},
search:""
        }
    },
    props:["macheid"],
    created() {
            this.marcheid=this.$route.params.id
   this.detail_Ua = this.GestionStockageArticles.find(
       idmarche => idmarche.id == this.$route.params.id
   )
  
},

       computed: {
  admin:admin,
      dcf:dcf,
      noDCfNoAdmin:noDCfNoAdmin,
     ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
            ...mapGetters("bienService", [ "gettersCotations","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots",
                "modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
            ...mapGetters('personnelUA', ['acteur_depenses','personnaFonction','acte_personnels',"fonctions"]),


                ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises','banques','comptes','getCompte']),
            ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
                'types_financements']) ,
                
    ...mapGetters("parametreGenerauxAdministratif", ["getterplanOrganisationUa","exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),
       ...mapGetters('parametreGenerauxFonctionnelle', ['structureActe', 
  'planActe']),
 ...mapGetters("uniteadministrative", [
      "directions",
      "servicesua",
      "fonctionsua",
      "getPersonnaliseBudgetGeneral",
      "montantBudgetGeneral",
      "uniteZones",
      "getPersonnaliseBudgetGeneralParTransfert",
      "uniteAdministratives",
      "groupStockArticle",
      "groupStockParUA",
      "GestionStockageArticles"
      // "chapitres",
      // "sections"
    ]),
   ...mapGetters("SuiviImmobilisation", ["services","AffectationUaBiens","ficheArticle",
    "trieUaImmobilisation",
      "equipements",
      "familles",
      "articles",
      "SommeQuantiteNonCouvert",
      "getAfficheArticle",
      "getPersoStock",
      "stockageArticles",
      "groupUatypeNorme",
      "groupUaNorme",
      "groupUaNormeFamille",
      "normeEquipements",
      "groupUaNormeEquipe",
      "groupUaNormeFonction",
      "getPersoNormeArticle",
      "services",
      "besoinEquipement",
      "afficherDirection",
      "afficherService",
      "afficherFonction",
      "type_Unite_admins",
      "getPersoListeDesNorme",
      "normeImmo",
      "getPersonnaliseNormeEquipement",
      "afficherDemandeParService",
      "natureEntres",
      "EtatImmobilisations",
      "causeInactivite",
      "immobilisations",
      "afficheRegroupeEquipementCouvert",
      "demandeMateriel",
      "getterUa_idImo",
   "marqueVehicules",
     "ModeleVehicules",
     "Typebiengrpecorporels"
   ]),

recupereTypeBien() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.familles.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.type_bien;
      }
      return 0
        }
      };
    },
recupereTypeBienParCode() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code;
      }
      return 0
        }
      };
    },
recupereTypeBienParLibelle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.code == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },





PrixUnitaireParModel() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.ficheArticle.find(qtreel => qtreel.model_id == id);

      if (qtereel) {
        return qtereel.prix_unitaire;
      }
      return 0
        }
      };
    },
    libelleModelle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.ModeleVehicules.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    listeDesEquipementPar01() {
      return id => {
        if (id != null && id != "") {
           return this.GestionStockageArticles.filter(qtreel => qtreel.uAdministrative_id == id && this.recupereTypeBienParCode(this.recupereTypeBien(this.detail_Ua.famill_id)) == '01');

        }
      };
    },
listeDesEquipementPar03() {
      return id => {
        if (id != null && id != "") {
           return this.GestionStockageArticles.filter(qtreel => qtreel.uAdministrative_id == id && this.recupereTypeBienParCode(this.recupereTypeBien(this.detail_Ua.famill_id)) == '03');

        }
      };
    },
listeDesEquipementPar04() {
      return id => {
        if (id != null && id != "") {
           return this.GestionStockageArticles.filter(qtreel => qtreel.uAdministrative_id == id && this.recupereTypeBienParCode(this.recupereTypeBien(this.detail_Ua.famill_id)) == '04');

        }
      };
    },
    listeDesEquipementPar05() {
      return id => {
        if (id != null && id != "") {
           return this.GestionStockageArticles.filter(qtreel => qtreel.uAdministrative_id == id && this.recupereTypeBienParCode(this.recupereTypeBien(this.detail_Ua.famill_id)) == '05');

        }
      };
    },
    listeDesEquipementPar06() {
      return id => {
        if (id != null && id != "") {
           return this.GestionStockageArticles.filter(qtreel => qtreel.uAdministrative_id == id && this.recupereTypeBienParCode(this.recupereTypeBien(this.detail_Ua.famill_id)) == '06');

        }
      };
    },
    listeDesEquipementPar07() {
      return id => {
        if (id != null && id != "") {
           return this.GestionStockageArticles.filter(qtreel => qtreel.uAdministrative_id == id && this.recupereTypeBienParCode(this.recupereTypeBien(this.detail_Ua.famill_id)) == '07');

        }
      };
    },
    listeDesEquipementPar08() {
      return id => {
        if (id != null && id != "") {
           return this.GestionStockageArticles.filter(qtreel => qtreel.uAdministrative_id == id && this.recupereTypeBienParCode(this.recupereTypeBien(this.detail_Ua.famill_id)) == '08');

        }
      };
    },
    listeDesEquipementPar09() {
      return id => {
        if (id != null && id != "") {
           return this.GestionStockageArticles.filter(qtreel => qtreel.uAdministrative_id == id && this.recupereTypeBienParCode(this.recupereTypeBien(this.detail_Ua.famill_id)) == '09');

        }
      };
    },
listeDesEquipementPar10() {
      return id => {
        if (id != null && id != "") {
           return this.GestionStockageArticles.filter(qtreel => qtreel.uAdministrative_id == id && this.recupereTypeBienParCode(this.recupereTypeBien(this.detail_Ua.famill_id)) == '10');

        }
      };
    },

 libelleFamilleEquipement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.familles.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },

TotalArticle() {
      return id => {
        if (id != null && id != "") {
           return this.AffectationUaBiens.filter(element => element.ua_mettrice_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.quantite), 0).toFixed(0);

        }
        //return this.listeDesStockGlobalUa.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.quantitestock), 0).toFixed(0);
      };
     
    },
LibelleModel() {
      return id => {
        if (id != null && id != "") {
           return this.GestionStockageArticles.filter(qtreel => qtreel.uAdministrative_id == id && qtreel.famill_id == this.editService.famille_id);

        }
      };
    },
listedesarticleenstock() {
      return id => {
        if (id != null && id != "") {
           return this.groupStockArticle.filter(qtreel => qtreel[0].uAdministrative_id == id && qtreel[0].famill_id == this.editService.famille_id);

        }
      };
    },



lispersonnelParUa() {
      return id => {
        if (id != null && id != "") {
           return this.acte_personnels.filter(qtreel => qtreel.unite_administrative_id == id);

        }
      };
    },

afficherQuantiteEnStock() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.GestionStockageArticles.find(qtreel => qtreel.model_id== id);

      if (qtereel) {
        return qtereel.quantitestock;
      }
      return 0
        }
      };
    },
    libelleMarque() {
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
    libelleModel() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.ModeleVehicules.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
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
      return 'Non renseigné'
        }
      };
    },
  
listeArticleTransfert() {
      return id => {
        if (id != null && id != "") {
           return this.AffectationUaBiens.filter(qtreel => qtreel.ua_mettrice_id == id);

        }
      };
    },
 
 afficheService() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.servicesua.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.serviceua_id;
      }
      return 0
        }
      };
    },
 afficheServiceLibelle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.services.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },


 anneeAmortissement() {
      const val = parseInt(this.exerciceBudgetaireEnCours) + parseInt(this.afficherDureeVieFamille(this.editService.famille_id));
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },












afficheLeBesoinDemande() {
      
      return id => {
        if (id != null && id != "") {
          return this.normeImmo.filter(element => element.fonction_id == id);
        }
      };
    },



  afficherUniteAdministrative() {
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
// verifierLaNorme(){
//     let normeInitial=parseFloat(this.afficheNormeFamille)
//       let qteDemande=parseFloat( this.formData.quantite)
//        if(normeInitial < qteDemande){
//         alert("La norme doit etre superieure a la qte demande")
//       }
// },


 


CoutMoyen() {
 return id => {
    if(id !=""){
      
    const val = parseFloat((this.getAfficheArticle.filter(element => element.famillearticle_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ttc), 0).toFixed(2))/this.getAfficheArticle.filter(element => element.famillearticle_id == id).length).toFixed(0); 
    if (isNaN(val)) return null;
    return val;
  
 }
  }
    },

 montantTotalarticlesModifier() {
   if(this.editBesoinImmo.famillearticle_id !=""){
      const val = parseFloat(this.editBesoinImmo.quantite) * parseFloat(this.CoutMoyen(this.editBesoinImmo.famillearticle_id));
        if (isNaN(val)) return null;
     return parseFloat(val).toFixed(0);
    }
    return null

},
 montantTotalarticles() {
   if(this.editService.famille_id !=""){
      const val = parseFloat(this.formData.quantite) * parseFloat(this.CoutMoyen(this.editService.famille_id));
        if (isNaN(val)) return null;
     return parseFloat(val).toFixed(0);
    }
    return null

},

 deverouFonctionDirectionService() {
      return this.formData.uniteadmin_id == "";
    },
afficheActeurDepense() {
      return id => {
        if (id != null && id != "") {
          return this.personnaFonction.filter(element => element.fonctionActeur.id == id);
        }
      };
    },

// afficheActeurDepense() {
//       return id => {
//         if (id != null && id != "") {
//            const qtereel = this.all_acteur_depense.find(qtreel => qtreel.fonction.id == this.formData.fonction_id);

//       if (qtereel) {
//         return qtereel.matricule.concat('  ', qtereel.nom,'  ',qtereel.prenom)
//       }
//       return 0
//         }
//       };
//     },
 fonctionDynamiquesParUa() {
      return id => {
        if (id != null && id != "") {
          return this.all_acteur_depense.filter(element => element.uniteZone_id == id);
        }
      };
    },
auteurParUaDynamiques() {
      
      return id => {
        if (id != null && id != "") {
          return this.personnaFonction.filter(element => element.uniteZone_id == id);
        
        }
        
      };
    },
 familleNormeDynamiques() {
      
      return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseNormeEquipement.filter(element => element.direction_id == id);
        }
      };
    },
     familleNormeServiceDynamiques() {
      
      return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseNormeEquipement.filter(element => element.service_id == id);
        }
      };
    },
      familleNormeFonctionDynamiques() {
      
      return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseNormeEquipement.filter(element => element.fonction_id == id);
        }
      };
    },
uniteAdministDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.uniteAdministratives.filter(element => element.type_ua_id == id);
        }
      };
    },
directionDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.directions.filter(element => element.d_ua_id == id);
        }
      };
    },
 uniteAdministrativeDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.getPersoListeDesNorme.filter(element => element.typeua_id == id);
        }
      };
    },
fonctionDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.getPersoListeDesNorme.filter(element => element.ua_id == id);
        }
      };
    },
    afficheNormeFamille() {
      
      const norme1 = this.normeImmo.find(normeEquipe => normeEquipe.famillearticle_id == this.editService.famille_id);
      if (norme1) {
        return norme1.norme;
      }
      return 0
    },
        afficheNormeFamilleModifier() {
      
      const norme1 = this.normeImmo.find(normeEquipe => normeEquipe.famillearticle_id == this.editBesoinImmo.famillearticle_id);
      if (norme1) {
        return norme1.norme;
      }
      return 0
    },

afficherIdService() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
           const qtereel = this.getterplanOrganisationUa.find(qtreel => qtreel.ua_id == id && qtreel.serviceua_id == id1);

      if (qtereel) {
        return qtereel.id;
      }
      return 0
        }
      };
    },







      },

      methods:{ 

          ...mapActions('bienService',['supprimerActeEffetFinancier',
          'ajouterActeEffetFinancier','modifierActeEffetFinancier', 'modifierMarche']),
 ...mapActions("uniteadministrative", [
     "getAllServiceua",
      "ajouterService",
      "modifierService",
      "supprimerService",
     
      // "ajouterHistoriqueBudgetGeneral"
    ]),
...mapActions("SuiviImmobilisation", [
       "ajouterImmobilisation",
       "modifierImmobilisation",
       "modifierStock",
       "ajouterHistotorisqueAffectionService",
       "modifierDemandeMateriel"
      
     
    ]),
     ...mapActions('parametreGenerauxAdministratif', ['getPlanPays', 
   'ajouterPlanOrganigrammeUa','modifierPlanOrganigrammeUa','supprimerPlanOrganigrammeUa']), 
     afficherModalListePersonnel(){
                this.$router.push({ name: 'gestionStockCorporels' })
            },
    // afficherModalModifierService(index) {
    //   this.$("#exampleModalValidationdirecteur").modal({
    //     backdrop: "static",
    //     keyboard: false
    //   });

    //   this.editService = this.listedesarticleparPerso(libelleService(marcheid))[index];
    // },
ajouterImmobilisationLocal(){
var objet ={
  id:this.afficherIdStock(this.detail_Ua.unite_administrative_id,this.editService.famille_id,this.editService.marque_id,this.editService.model_id),
  quantitestock:this.RestantEnStock
}
// var objet1 ={
//   id:this.afficherIdActePersonnel(this.detail_Ua.unite_administrative_id,this.afficherActeurDepenseId(this.detail_Ua.id)),
//   normeequipement:this.afficherNombreEquipementRestant,
//   montantequipement:this.afficherMontantRestant
// }
var nouvelobjet2 ={
  id:this.afficherIdService(this.detail_Ua.unite_administrative_id,this.idService(this.detail_Ua.id)),
  
 normeequipement:this.afficherNombreEquipementRestant,
 montantequipement:this.afficherMontantRestant
}
var objet2 ={
    // actepersonnel_id:this.afficherActeurDepenseId(this.detail_Ua.id),
      famillearticle_id:this.editService.famille_id,
      marque_id:this.editService.marque_id,
      model_id:this.editService.model_id,
      uniteadministrative_id:this.detail_Ua.id,
      qte_affecte:this.formData.qte_affecte,
      service_id:this.idService(this.detail_Ua.id)
}
this.modifierStockArticle(objet);
// this.modifierPersonnel(objet1)
this.modifierPlanOrganigrammeUa(nouvelobjet2)
this.ajouterImmobilisation(objet2)
  },
              fenetreAjouterAffectation(index) {
      this.$("#nonEquiper").modal({
        backdrop: "static",
        keyboard: false
      });

      this.formData = this.afficheServiceNonEquipe[index];
    },

    afficherModalModifierService(index) {
      this.$("#exampleModalValidationdirecteur").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editService = this.listedesarticleparPerso(this.libelleService(this.marcheid))[index];
    },
 afficherModalTransfert(index) {
      this.$("#modalTransfert").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editService = this.listedesarticleparPerso(this.libelleService(this.marcheid))[index];
    },

formatageSomme:formatageSomme,

 formaterDate(date) {
              return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },
      }
}
</script>
<style scoped>
.taillemodal {
  width: 1400px;
  margin: 0 -700px;
}
.taillemodal1 {
  width: 800px;
  margin: 0 -455px;
}
.sommecolor{
  background-color: red;
  color:red;
  font-size: 120%;
  text-align: center;
  font-weight:bold;
}
.tailgrand{
  width: 77%;
  margin: 0 -38%;
}
.tailleImmobilisation{
  width: 90%;
  margin: 0 -45%;
}
.valDirecteur{
  width:70%;
  margin:0 -35%;
}
</style>