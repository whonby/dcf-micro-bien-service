
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
                     <!-- <li class="active">
                        <a data-toggle="tab" href="#EntreeEnStock">Mon Patrimoine</a>
                      </li> -->
                       <li class="active" v-if="AfficheCode1 == 3">
                        <a data-toggle="tab" href="#EntreeEnStock" >{{AfficheLibelle1}}  </a>
                      </li>
                       <li class="" v-if="AfficheCode2 == 1">
                        <a data-toggle="tab" href="#Affectation2" >{{AfficheLibelle2}}</a>
                      </li>
                       <li class="" v-if="AfficheCode3 == 2">
                        <a data-toggle="tab" href="#Affectation3" >{{AfficheLibelle3}}</a>
                      </li>
                       <li class="" v-if="AfficheCode4 == 4">
                        <a data-toggle="tab" href="#Affectation4" >{{AfficheLibelle4}}</a>
                      </li>
                       <li class="" v-if="AfficheCode5 == 5">
                        <a data-toggle="tab" href="#Affectation5" >{{AfficheLibelle5}}</a>
                      </li>
                       <li class="" v-if="AfficheCode6 == 6">
                        <a data-toggle="tab" href="#Affectation6" >{{AfficheLibelle6}}</a>
                      </li>
                       <li class="" v-if="AfficheCode7 == 7">
                        <a data-toggle="tab" href="#Affectation7" >{{AfficheLibelle7}}</a>
                      </li>
                       <li class="" v-if="AfficheCode8 == 8">
                        <a data-toggle="tab" href="#Affectation8" >{{AfficheLibelle8}}</a>
                      </li>
                   
                    </ul>
                  </div>
                  <div class="widget-content tab-content">


<div class="tab-pane " id="Affectation8" >
            <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     
                    
                    
                     <th style="width:15%">Article</th>
                     <th style="width:15%">Marque</th>
                     <th style="width:15%">Modèle</th>
                     <th style="width:15%">No série</th>
                    <!-- <th>Quantité Initiale</th>  -->
                    <th style="width:15%">Quantité</th>
                    <th style="width:15%">Valeur d'acquisition</th>
                   <!-- <th style="width:15%">Valeur net comptable</th> -->
                    <th style="width:10%">Action</th>
                  </tr>
                </thead>
                <tbody>
                     <tr
                    class="odd gradeX"
                    v-for="stock in listeDesEquipementPar09(detail_Ua.uAdministrative_id)"
                    :key="stock.id"
                  >

                    <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleFamilleEquipement(stock.articlestock_id) || 'Non renseigné'}}</td>
                     <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleMarque(stock.marque_id) || 'Non renseigné'}}</td>
                     <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleModelle(stock.model_id) || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{stock.numchassis || 'Non renseigné'}}</td>
                    <td style="text-align: center;"
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{stock.quantitestock || 'Non renseigné'}}</td>
                  <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{formatageSomme(parseFloat((parseFloat(stock.quantitestock)*parseFloat(stock.prix_unitaire)))) || 'Non renseigné'}}</td>
                    <!-- <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{stock.immatriculation || 'Non renseigné'}}</td> -->
                  
                       <td>
                       <router-link
                        :to="{name : '', params: {id:stock.id}}"
                        class="btn btn-success"
                        title="Faire Affectation"
                      >
                        <span>
                          <i class="icon icon-folder-open"> Voir Détail</i>
                        </span>
                      </router-link>
                     </td>
                    
                  </tr>
               
                </tbody>
              </table>
            
             </div>


<div class="tab-pane " id="Affectation7" >
            <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     
                    
                    
                     <th style="width:15%">Article</th>
                     <th style="width:15%">Marque</th>
                     <th style="width:15%">Modèle</th>
                     <th style="width:15%">No série</th>
                    <!-- <th>Quantité Initiale</th>  -->
                    <th style="width:15%">Quantité</th>
                    <th style="width:15%">Valeur d'acquisition</th>
                   <!-- <th style="width:15%">Valeur net comptable</th> -->
                    <th style="width:10%">Action</th>
                  </tr>
                </thead>
                <tbody>
                     <tr
                    class="odd gradeX"
                    v-for="stock in listeDesEquipementPar08(detail_Ua.uAdministrative_id)"
                    :key="stock.id"
                  >

                    <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleFamilleEquipement(stock.articlestock_id) || 'Non renseigné'}}</td>
                     <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleMarque(stock.marque_id) || 'Non renseigné'}}</td>
                     <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleModelle(stock.model_id) || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{stock.numchassis || 'Non renseigné'}}</td>
                    <td style="text-align: center;"
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{stock.quantitestock || 'Non renseigné'}}</td>
                  <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{formatageSomme(parseFloat((parseFloat(stock.quantitestock)*parseFloat(stock.prix_unitaire)))) || 'Non renseigné'}}</td>
                    <!-- <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{stock.immatriculation || 'Non renseigné'}}</td> -->
                  
                       <td>
                       <router-link
                        :to="{name : '', params: {id:stock.id}}"
                        class="btn btn-success"
                        title="Faire Affectation"
                      >
                        <span>
                          <i class="icon icon-folder-open"> Voir Détail</i>
                        </span>
                      </router-link>
                     </td>
                    
                  </tr>
               
                </tbody>
              </table>
            
             </div>




<div class="tab-pane " id="Affectation6" >
            <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     
                    
                    
                     <th style="width:15%">Article</th>
                     <th style="width:15%">Marque</th>
                     <th style="width:15%">Modèle</th>
                     <th style="width:15%">No série</th>
                    <!-- <th>Quantité Initiale</th>  -->
                    <th style="width:15%">Quantité</th>
                    <th style="width:15%">Valeur d'acquisition</th>
                   <!-- <th style="width:15%">Valeur net comptable</th> -->
                    <th style="width:10%">Action</th>
                  </tr>
                </thead>
                <tbody>
                     <tr
                    class="odd gradeX"
                    v-for="stock in listeDesEquipementPar07(detail_Ua.uAdministrative_id)"
                    :key="stock.id"
                  >

                    <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleFamilleEquipement(stock.articlestock_id) || 'Non renseigné'}}</td>
                     <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleMarque(stock.marque_id) || 'Non renseigné'}}</td>
                     <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleModelle(stock.model_id) || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{stock.numchassis || 'Non renseigné'}}</td>
                    <td style="text-align: center;"
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{stock.quantitestock || 'Non renseigné'}}</td>
                  <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{formatageSomme(parseFloat((parseFloat(stock.quantitestock)*parseFloat(stock.prix_unitaire)))) || 'Non renseigné'}}</td>
                    <!-- <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{stock.immatriculation || 'Non renseigné'}}</td> -->
                  
                       <td>
                       <router-link
                        :to="{name : '', params: {id:stock.id}}"
                        class="btn btn-success"
                        title="Faire Affectation"
                      >
                        <span>
                          <i class="icon icon-folder-open"> Voir Détail</i>
                        </span>
                      </router-link>
                     </td>
                    
                  </tr>
               
                </tbody>
              </table>
            
             </div>






<div class="tab-pane " id="Affectation5" >
            <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     
                    
                    
                     <th style="width:15%">Article</th>
                     <th style="width:15%">Marque</th>
                     <th style="width:15%">Modèle</th>
                     <th style="width:15%">No série</th>
                    <!-- <th>Quantité Initiale</th>  -->
                    <th style="width:15%">Quantité</th>
                    <th style="width:15%">Valeur d'acquisition</th>
                   <!-- <th style="width:15%">Valeur net comptable</th> -->
                    <th style="width:10%">Action</th>
                  </tr>
                </thead>
                <tbody>
                     <tr
                    class="odd gradeX"
                    v-for="stock in listeDesEquipementPar06(detail_Ua.uAdministrative_id)"
                    :key="stock.id"
                  >

                    <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleFamilleEquipement(stock.articlestock_id) || 'Non renseigné'}}</td>
                     <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleMarque(stock.marque_id) || 'Non renseigné'}}</td>
                     <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleModelle(stock.model_id) || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{stock.numchassis || 'Non renseigné'}}</td>
                    <td style="text-align: center;"
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{stock.quantitestock || 'Non renseigné'}}</td>
                  <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{formatageSomme(parseFloat((parseFloat(stock.quantitestock)*parseFloat(stock.prix_unitaire)))) || 'Non renseigné'}}</td>
                    <!-- <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{stock.immatriculation || 'Non renseigné'}}</td> -->
                  
                       <td>
                       <router-link
                        :to="{name : '', params: {id:stock.id}}"
                        class="btn btn-success"
                        title="Faire Affectation"
                      >
                        <span>
                          <i class="icon icon-folder-open"> Voir Détail</i>
                        </span>
                      </router-link>
                     </td>
                    
                  </tr>
               
                </tbody>
              </table>
            
             </div>




<div class="tab-pane " id="Affectation4" >
            <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     
                    
                    
                     <th style="width:15%">Article</th>
                     <th style="width:15%">Marque</th>
                     <th style="width:15%">Modèle</th>
                     <th style="width:15%">No série</th>
                    <!-- <th>Quantité Initiale</th>  -->
                    <th style="width:15%">Quantité</th>
                    <th style="width:15%">Valeur d'acquisition</th>
                   <!-- <th style="width:15%">Valeur net comptable</th> -->
                    <th style="width:10%">Action</th>
                  </tr>
                </thead>
                <tbody>
                     <tr
                    class="odd gradeX"
                    v-for="stock in listeDesEquipementPar05(detail_Ua.uAdministrative_id)"
                    :key="stock.id"
                  >

                    <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleFamilleEquipement(stock.articlestock_id) || 'Non renseigné'}}</td>
                     <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleMarque(stock.marque_id) || 'Non renseigné'}}</td>
                     <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleModelle(stock.model_id) || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{stock.numchassis || 'Non renseigné'}}</td>
                    <td style="text-align: center;"
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{stock.quantitestock || 'Non renseigné'}}</td>
                  <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{formatageSomme(parseFloat((parseFloat(stock.quantitestock)*parseFloat(stock.prix_unitaire)))) || 'Non renseigné'}}</td>
                    <!-- <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{stock.immatriculation || 'Non renseigné'}}</td> -->
                  
                       <td>
                       <router-link
                        :to="{name : '', params: {id:stock.id}}"
                        class="btn btn-success"
                        title="Faire Affectation"
                      >
                        <span>
                          <i class="icon icon-folder-open"> Voir Détail</i>
                        </span>
                      </router-link>
                     </td>
                    
                  </tr>
               
                </tbody>
              </table>
            
             </div>



<div class="tab-pane " id="Affectation3" >
            <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     
                    
                    <th style="width:10%">Article</th>
                     <th style="width:10%">Description</th>
                     
                       <th style="width:10%">Code immobilisation</th>
                     
                    <th style="width:10%">Quantité</th>
                    <th style="width:10%">Valeur d'acquisition</th>
                     <th style="width:8%">Service Rattaché</th>
                   <th style="width:8%">Fonction Rattaché</th>
                   <th style="width:8%">Date d'Affectation</th>
                    
                   <!-- <th style="width:15%">Valeur net comptable</th> -->
                    <th style="width:10%" colspan="2">Action</th>
                  </tr>
                </thead>
                <tbody>
                     <tr
                    class="odd gradeX"
                    v-for="stock in listeDesEquipementPar04(detail_Ua.uAdministrative_id)"
                    :key="stock.id"
                  >
 <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleFamilleEquipement(stock.articlestock_id) || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{stock.designation || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{stock.numero_matricule || 'Non renseigné'}}</td>
                     <td style="text-align: center;"
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{stock.quantitestock || 'Non renseigné'}}</td>

                     <td style="text-align:center;font-weight:bold;"
                      
                    >{{formatageSomme(parseFloat(montantPasEquipment(stock))) || 'Non renseigné'}}</td>

                    <td
                      
                    >{{afficheServiceLibelle(IdServiceRattache(stock.id)) || 'Non Rattaché'}}</td>
                    <td
                    
                    >{{afficheFonction(IdFonctionRattache(stock.id)) || 'Non Rattaché'}}</td>
                    <td
                      
                    >{{formaterDate(DateMiseEnService(stock.id)) || 'Non renseigné'}}</td>
                 <td>
                      <button class="btn  btn-danger" @click.prevent="fenetreAjouterReAffectationMobilier(stock.id)" v-if="statusBouton(stock.id) == 1">
                        <span >
                          <i class="icon icon-folder-open"> Réaffecter</i>
                          
                        </span>
                        
                       
                      </button>
                     <button class="btn  btn-success" @click.prevent="fenetreAjouterAffectationMobilier(stock.id)" v-else>
                        
                        <span >
                          <i class="icon icon-folder-open"> Affécter</i>
                          
                        </span>
                       
                      </button>
                    </td>
                    <td>
                      <button class="btn  btn-warning" @click.prevent="fenetreAjouterTransfert(stock.id)">
                        <span >
                          <i class="icon icon-folder-open"> Transférer</i>
                          
                        </span>
                        
                       
                      </button>
                     
                    </td>
                  
                      
                    
                  </tr>
               
                </tbody>
              </table>
            
             </div>





 <div class="tab-pane" id="Affectation2" >
            <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     
                    
                    
                     <th style="width:15%">Article</th>
                     <th style="width:5%">Code immobilisations</th> 
                     <th style="width:10%">Marque</th>
                     <th style="width:10%">Modèle</th>
                     <th style="width:10%">No série</th>
                    <!-- <th>Quantité Initiale</th>  -->
                    <th style="width:10%">Date acquisition / mise en service</th>
                    <th style="width:5%">Quantité</th>
                    <th style="width:10%">Valeur d'acquisition</th>
                     <th style="width:8%">Service Rattaché</th>
                   <th style="width:8%">Fonction Rattaché</th>
                   <th style="width:8%">Date d'Affectation</th>
                    <th style="width:10%" colspan="2">Action</th>
                  </tr>
                </thead>
                <tbody>
                     <tr
                    class="odd gradeX"
                    v-for="stock in listeDuMaterielAffecter(detail_Ua.uAdministrative_id)"
                    :key="stock.id"
                  >

                   <td
                     
                    >{{libelleFamilleEquipement(stock.articlestock_id) || 'Non renseigné'}}</td>
                    <td
                     
                    >{{stock.numero_matricule || 'Non renseigné'}}</td>
                     <td
                     
                    >{{libelleMarque(stock.marque_id) || 'Non renseigné'}}</td>
                     <td
                      
                    >{{libelleModelle(stock.model_id) || 'Non renseigné'}}</td>
                    <td
                     
                    >{{stock.numchassis || 'Non renseigné'}}</td>
                     <td
                      
                    >{{stock.date_mise_service || 'Non renseigné'}}</td>
                    <td style="text-align: center;"
                      
                    >{{stock.quantitestock || 'Non renseigné'}}</td>
                  <td style="text-align:center;font-weight:bold;"
                      
                    >{{formatageSomme(parseFloat(montantPasEquipment(stock))) || 'Non renseigné'}}</td>
                     <td
                      
                    >{{afficheServiceLibelle(IdServiceRattache(stock.id)) || 'Non Rattaché'}}</td>
                    <td
                    
                    >{{afficheFonction(IdFonctionRattache(stock.id)) || 'Non Rattaché'}}</td>
                    <td
                      
                    >{{formaterDate(DateMiseEnService(stock.id)) || 'Non renseigné'}}</td>
                   <td>
                      <button class="btn  btn-danger" @click.prevent="fenetreAjouterReAffectationMateriel(stock.id)" v-if="statusBouton(stock.id) == 1">
                        <span >
                          <i class="icon icon-folder-open"> Réaffecter</i>
                          
                        </span>
                        
                       
                      </button>
                     <button class="btn  btn-success" @click.prevent="fenetreAjouterAffectationMateriel(stock.id)" v-else>
                        
                        <span >
                          <i class="icon icon-folder-open"> Affécter</i>
                          
                        </span>
                       
                      </button>
                    </td>
                    <td>
                      <button class="btn  btn-warning" @click.prevent="fenetreAjouterTansfertMateriel(stock.id)">
                        <span >
                          <i class="icon icon-folder-open"> Transférer</i>
                          
                        </span>
                        
                       
                      </button>
                     
                    </td>
                    
                  </tr>
               
                </tbody>
              </table>
            
             </div>

          <div class="tab-pane active" id="EntreeEnStock" >
            <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     
                    
                    
                     <th style="width:10%">Article</th>
                     <th style="width:10%">Immatriculation</th>
                     <th style="width:10%">Marque</th>
                     <th style="width:10%">Modèle</th>
                     <th style="width:10%">No Chassis/No série</th>
                    <!-- <th>Quantité Initiale</th>  -->
                    <th style="width:5%">Quantité</th>
                    <th style="width:10%">Valeur d'acquisition</th>
                   <!-- <th style="width:15%">Valeur net comptable</th> -->
                   <th style="width:8%">Service Rattaché</th>
                   <th style="width:8%">Fonction Rattaché</th>
                   <th style="width:8%">Date d'Affectation</th>
                    <th style="width:8%" colspan="2">Action</th>
                  </tr>
                </thead>
                <tbody>
                     <tr
                    class="odd gradeX"
                    v-for="stock in listeDesEquipementPar01(detail_Ua.uAdministrative_id)"
                    :key="stock.id"
                  >

                    <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleFamilleEquipement(stock.articlestock_id) || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{stock.numimmatriculation || 'Non renseigné'}}</td>
                     <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleMarque(stock.marque_id) || 'Non renseigné'}}</td>
                     <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleModelle(stock.model_id) || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{stock.numchassis || 'Non renseigné'}}</td>
                    <td style="text-align: center;"
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{stock.quantitestock || 'Non renseigné'}}</td>
                  <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{formatageSomme(parseFloat((parseFloat(stock.quantitestock)*parseFloat(stock.prix_unitaire)))) || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{afficheServiceLibelle(IdServiceRattache(stock.id)) || 'Non Rattaché'}}</td>
                     <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{afficheFonction(IdFonctionRattache(stock.id)) || 'Non Rattaché'}}</td>
                    <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{formaterDate(DateMiseEnService(stock.id)) || 'Non renseigné'}}</td>
                  <td>
                      <button class="btn  btn-danger" @click.prevent="fenetreAjouterReAffectation(stock.id)" v-if="statusBouton(stock.id) == 1">
                        <span >
                          <i class="icon icon-folder-open"> Réaffecter</i>
                          
                        </span>
                        
                       
                      </button>
                     <button class="btn  btn-success" @click.prevent="fenetreAjouterAffectation(stock.id)" v-else>
                        
                        <span >
                          <i class="icon icon-folder-open"> Affécter</i>
                          
                        </span>
                       
                      </button>
                    </td>
                    <td>
                      <button class="btn  btn-warning" @click.prevent="fenetreAjouterTansfert(stock.id)">
                        <span >
                          <i class="icon icon-folder-open"> Transférer</i>
                          
                        </span>
                        
                       
                      </button>
                     
                    </td>
                      
                  </tr>
                 
                </tbody>
              </table>
            
             </div>
         
        </div>
      </div>
      
      
 
              </table>
 
  </div>


    </div>






<!-- FORMULAIRE D AFFECTATION DE VEHICULE -->
<div id="exampleModal1" class="modal hide tailgrand">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Afféctation Véhicule: {{afficherUniteAdministrative(editAffectation.uAdministrative_id)}}</h3>
      </div>
      <div class="modal-body">
      <table class="table table-bordered table-striped">
      <tr>
        
         <td>
               <div class="control-group">
            <label class="control-label">Immatriculation</label>
            <div class="controls">
              <input
                type="text"
                v-model="editAffectation.numimmatriculation"
                class="span4"
                readonly
                style="color:red;font-size:20px"
              />
            </div>
          </div>
            </td>
            <td>
               <div class="control-group">
            <label class="control-label">Marque</label>
            <div class="controls">
              <input
                type="text"
                :value="libelleMarque(editAffectation.marque_id)"
                class="span4"
                readonly
              />
            </div>
          </div>
            </td>
             <td>
               <div class="control-group">
            <label class="control-label">Modèle</label>
            <div class="controls">
              <input
                type="text"
                :value="libelleModelle(editAffectation.model_id)"
                class="span4"
                readonly
              />
            </div>
          </div>
            </td>
      </tr>
         
        <tr>
          <td>
               <div class="control-group">
            <label class="control-label">Quantité Actuelle</label>
            <div class="controls">
              <input
                type="text"
                v-model="editAffectation.quantitestock"
                class="span4"
                readonly
              />
            </div>
          </div>
            </td>
            <td>
               <div class="control-group">
            <label class="control-label">Quantité</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.qte_affecte"
                class="span4"
                
              />
            </div>
          </div>
            </td>
              <td>
               <div class="control-group">
            <label class="control-label">Date d'affétation</label>
            <div class="controls">
              <input
                type="date"
                v-model="formData.date_mise_service"
                class="span4"
                
              />
            </div>
          </div>
             </td>
          </tr>
          
          <tr>
            <td>
               <div class="control-group">
            <label class="control-label">Service</label>
            <div class="controls">
               <select   class="span4" v-model="formData.service_id">
                 <option></option>
            <option v-for="resultat in afficherServiceUA(editAffectation.uAdministrative_id)" :key="resultat.id" 
            :value="resultat.serviceua_id">{{afficheServiceLibelle(resultat.serviceua_id)}}</option>
                </select>
            </div>
          </div>
            </td>
            <td>
              
               <div class="control-group">
            <label class="control-label">Fonction</label>
            <div class="controls">
               <select   class="span4" v-model="formData.fonction_id">
                 <option></option>
            <option v-for="resultat in afficherFonctionUA(editAffectation.uAdministrative_id)" :key="resultat.id" 
            :value="resultat.fonction_id">{{afficheFonction(resultat.fonction_id)}}</option>
                </select>
            </div>
          </div>
            </td>
            <td>
               <div class="control-group">
            <label class="control-label">Besoin</label>
            <div class="controls">
              <input
                type="text"
                :value="afficheNomA"
                class="span4"
                readonly
              />
            </div>
          </div>
             </td>
           
          </tr>
          <tr>
            <td>
               <div class="control-group">
            <label class="control-label">Nom de l'utilisateur</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.nom_prenoms"
                class="span4"
                
              />
            </div>
          </div>
             </td>
             <td colspan="2">
               <code v-show="(this.AfficheNomArticleService(this.formData.service_id) != this.editAffectation.famill_id) && (this.AfficheNomArticleFonction(this.formData.fonction_id) != this.editAffectation.famill_id)" style="color:red;font-size:14px">Le Service ou la Fonction séléctionner n'a pas dois a un véicule </code>
               <!-- <code v-if="" style="color:red;font-size:14px">La Fonction n'a pas dois a un véicule </code> -->
               <!-- <code v-else style="color:red;font-size:14px">Veuillez remplir les champs Svp </code> -->
             </td>
          </tr>
      </table>
      </div>
      <div class="modal-footer">
        <a
          
          class="btn btn-primary"
          href="#"
          @click.prevent="ajouterImmobilisationLocal()"
        >Affecter</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
<!-- FIN FORMULAIRE D AFFECTATION VEHICULE-->


<!-- FORMULAIRE REAFFECTATION DE VEHICULE -->
<div id="exampleModal3" class="modal hide tailgrand">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Réafféctation Véhicule: {{afficherUniteAdministrative(editAffectation.uAdministrative_id)}}</h3>
      </div>
      <div class="modal-body">
      <table class="table table-bordered table-striped">
      <tr>
        
         <td>
               <div class="control-group">
            <label class="control-label">Immatriculation</label>
            <div class="controls">
              <input
                type="text"
                v-model="editAffectation.numimmatriculation"
                class="span4"
                readonly
                style="color:red;font-size:20px"
              />
            </div>
          </div>
            </td>
            <td>
               <div class="control-group">
            <label class="control-label">Marque</label>
            <div class="controls">
              <input
                type="text"
                :value="libelleMarque(editAffectation.marque_id)"
                class="span4"
                readonly
              />
            </div>
          </div>
            </td>
             <td>
               <div class="control-group">
            <label class="control-label">Modèle</label>
            <div class="controls">
              <input
                type="text"
                :value="libelleModelle(editAffectation.model_id)"
                class="span4"
                readonly
              />
            </div>
          </div>
            </td>
      </tr>
         
        <tr>
          <td>
               <div class="control-group">
            <label class="control-label">Quantité Actuelle</label>
            <div class="controls">
              <input
                type="text"
                v-model="editAffectation.quantitestock"
                class="span4"
                readonly
              />
            </div>
          </div>
            </td>
            <td>
               <div class="control-group">
            <label class="control-label">Quantité</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.qte_affecte"
                class="span4"
                
              />
            </div>
          </div>
            </td>
              <td>
               <div class="control-group">
            <label class="control-label">Date d'affétation</label>
            <div class="controls">
              <input
                type="date"
                v-model="formData.date_mise_service"
                class="span4"
                
              />
            </div>
          </div>
             </td>
          </tr>
          
          <tr>
            <td>
               <div class="control-group">
            <label class="control-label">Service</label>
            <div class="controls">
               <select   class="span4" v-model="formData.service_id">
                 <option></option>
            <option v-for="resultat in afficherServiceUA(editAffectation.uAdministrative_id)" :key="resultat.id" 
            :value="resultat.serviceua_id">{{afficheServiceLibelle(resultat.serviceua_id)}}</option>
                </select>
            </div>
          </div>
            </td>
            <td>
              
               <div class="control-group">
            <label class="control-label">Fonction</label>
            <div class="controls">
               <select   class="span4" v-model="formData.fonction_id">
                 <option></option>
            <option v-for="resultat in afficherFonctionUA(editAffectation.uAdministrative_id)" :key="resultat.id" 
            :value="resultat.fonction_id">{{afficheFonction(resultat.fonction_id)}}</option>
                </select>
            </div>
          </div>
            </td>
            <td>
               <div class="control-group">
            <label class="control-label">Besoin</label>
            <div class="controls">
              <input
                type="text"
                :value="afficheNomA"
                class="span4"
                readonly
              />
            </div>
          </div>
             </td>
           
          </tr>
          <tr>
            <td>
               <div class="control-group">
            <label class="control-label">Nom de l'utilisateur</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.nom_prenoms"
                class="span4"
                
              />
            </div>
          </div>
             </td>
             <td colspan="2">
               <code v-show="(this.AfficheNomArticleService(this.formData.service_id) != this.editAffectation.famill_id) && (this.AfficheNomArticleFonction(this.formData.fonction_id) != this.editAffectation.famill_id)" style="color:red;font-size:14px">Le Service ou la Fonction séléctionner n'a pas dois a un véicule </code>
               <!-- <code v-if="" style="color:red;font-size:14px">La Fonction n'a pas dois a un véicule </code> -->
               <!-- <code v-else style="color:red;font-size:14px">Veuillez remplir les champs Svp </code> -->
             </td>
          </tr>
      </table>
      </div>
      <div class="modal-footer">
        <a
          
          class="btn btn-primary"
          href="#"
          @click.prevent="FaireReaffectation()"
          v-show="(this.AfficheNomArticleService(this.formData.service_id) == this.editAffectation.famill_id) || (this.AfficheNomArticleFonction(this.formData.fonction_id) == this.editAffectation.famill_id)"
        >Réaffecter</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
<!-- FIN FORMULAIRE D REAFFECTATION VEHICULE-->




<!---DEBUT FORMULAIRE DE TRANSFERT-->

<div id="exampleModal12" class="modal hide tailgrand8">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Affectation Des équipements par unité Administrative</h3>
      </div>
      <div class="modal-body">
      <table class="table table-bordered table-striped">
<tr>
  <td >
                <div class="control-group">
                  <label class="control-label">Unité Administrative Emettrice</label>
                  <div class="controls">
                        <input
                type="text"
                
                class="span5"
               :value="afficherUniteAdministrative(editAffectation.uAdministrative_id)"
                readonly
              />
                  </div>
                </div>
             </td>
             <td >
                <div class="control-group">
                  <label class="control-label">Article en Stock UA Emettrice</label>
                  <div class="controls">
                       
                    <input
                type="text"
                :value="libelleFamilleEquipement(editAffectation.articlestock_id)"
                class="span5"
               
                readonly
              />
                  </div>
                </div>
             </td>
             <td>
     <div class="control-group">
                  <label class="control-label">Marque des articles en Stock UA Emettrice</label>
                  <div class="controls">
                       <input
                type="text"
                :value="libelleMarque(editAffectation.marque_id)"
                class="span5"
               
                readonly
              />
                   
                  </div>
                </div>
  </td>

  
</tr>
<tr>
   <td>
     <div class="control-group">
                  <label class="control-label">Modele des articles en Stock UA Emettrice</label>
                  <div class="controls">
                        <input
                type="text"
                
                class="span5"
               :value="libelleModelle(editAffectation.model_id)"
                readonly
              />
                   
                  </div>
                </div>
  </td>
  <td>
    <div class="control-group">
            <label class="control-label">Quantité en stock</label>
            <div class="controls">
              <input
                type="text"
                
                class="span5"
               v-model="editAffectation.quantitestock"
                readonly
              />
            </div>
          </div>
  </td>
<td>
    <div class="control-group">
            <label class="control-label">Quantité a Transferé</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.quantitestock"
                class="span5"
               
             
              />
            </div>
          </div>
  </td>
  
             <!-- <td >
                <div class="control-group">
                  <label class="control-label">Article en Stock UA Réceptrice</label>
                  <div class="controls">
                        <select v-model="formData3.famille_id" 
                         class="span5">
                     <option
                        v-for="localgeo in listeArticleEnStock(ua_id)"
                        :key="localgeo[0].id"
                        :value="localgeo[0].famill_id"
                      >{{libelleArticle(localgeo[0].famill_id)}}</option>
                    </select>
                   
                  </div>
                </div>
             </td> -->
</tr>

<tr>
  <td >
                <div class="control-group">
                  <label class="control-label">Unité Administrative Réceptrice</label>
                  <div class="controls">
                       
                        <model-list-select style="background-color: #fff;"
                                                   class="wide"
                                                   :list="filtre_unite_admin"
                                                   v-model="ua_receptrice_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder=""
                                >

                                </model-list-select>
                   
                  </div>
                </div>
             </td>
             <td>
    <div class="control-group">
            <label class="control-label">Date de transfert{{restantEnStock}}</label>
            <div class="controls">
              <input
                type="date"
                v-model="formData.date_transfert"
                class="span5"
               
                
              />
            </div>
          </div>
  </td>
  <td>
    <div class="control-group">
            <label class="control-label">Autre Unité d'Administrative</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.autre_ua"
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
          @click.prevent="FaireTransferer"
        >Transférer</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
<!--FIN FORMULAIRE DE TRANSFERT-->







<!-- FORMULAIRE D AFFECTATION DE MATERIEL -->
<div id="materiel" class="modal hide tailgrand2">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Afféctation Matériel: {{afficherUniteAdministrative(editAffectation.uAdministrative_id)}}</h3>
      </div>
      <div class="modal-body">
      <table class="table table-bordered table-striped">
      <tr>
        
         <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Description</label>
                  <div class="controls">
                    <input
                      type="text"
                    v-model="editAffectation.autreinfo"
                      class="span4"
                      
                    />
                  </div>
                </div>
                      </td>
            <td>
               <div class="control-group">
            <label class="control-label">Marque</label>
            <div class="controls">
              <input
                type="text"
                :value="libelleMarque(editAffectation.marque_id)"
                class="span4"
                readonly
              />
            </div>
          </div>
            </td>
             <td>
               <div class="control-group">
            <label class="control-label">Modèle</label>
            <div class="controls">
              <input
                type="text"
                :value="libelleModelle(editAffectation.model_id)"
                class="span4"
                readonly
              />
            </div>
          </div>
            </td>
            
      </tr>
         
        <tr>
           <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">N°Série</label>
                  <div class="controls">
                     <input
                      type="text"
                    v-model="editAffectation.numchassis"
                      class="span4"
                      
                    />
                  </div>
                </div>
                      </td>
          <td>
               <div class="control-group">
            <label class="control-label">Quantité Actuelle</label>
            <div class="controls">
              <input
                type="text"
                v-model="editAffectation.quantitestock"
                class="span4"
                readonly
              />
            </div>
          </div>
            </td>
            <td>
               <div class="control-group">
            <label class="control-label">Quantité</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.qte_affecte"
                class="span4"
                
              />
            </div>
          </div>
            </td>
              
          </tr>
          
          <tr>
            <td>
               <div class="control-group">
            <label class="control-label">Service</label>
            <div class="controls">
               <!-- <select   class="span4" v-model="formData.service_id">
                 <option></option>
            <option v-for="resultat in afficherServiceUA(editAffectation.uAdministrative_id)" :key="resultat.id" 
            :value="resultat.serviceua_id">{{afficheServiceLibelle(resultat.serviceua_id)}}</option>
                </select> -->
                <model-list-select style="background-color: #fff;"
                                                   class="wide"
                                                   :list="services"
                                                   v-model="formData.service_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder=""
                                >

                                </model-list-select>
            </div>
          </div>
            </td>
             <td>
              
               <div class="control-group">
            <label class="control-label">Fonction</label>
            <div class="controls">
               <!-- <select   class="span4" v-model="formData.fonction_id">
                 <option></option>
            <option v-for="resultat in afficherFonctionUA(editAffectation.uAdministrative_id)" :key="resultat.id" 
            :value="resultat.fonction_id">{{afficheFonction(resultat.fonction_id)}}</option>
                </select> -->
                <model-list-select style="background-color: #fff;"
                                                   class="wide"
                                                   :list="fonctionProfessionnel"
                                                   v-model="formData.fonction_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder=""
                                >

                                </model-list-select>
            </div>
          </div>
            </td>
           <td>
               <div class="control-group">
            <label class="control-label">Date d'affétation</label>
            <div class="controls">
              <input
                type="date"
                v-model="formData.date_mise_service"
                class="span4"
                
              />
            </div>
          </div>
             </td>

          </tr>
          <tr>
           
            <!-- <td>
               <div class="control-group">
            <label class="control-label">Besoin</label>
            <div class="controls">
              <input
                type="text"
                :value="afficheNomA"
                class="span4"
                readonly
              />
            </div>
          </div>
             </td> -->
            <td colspan="3">
               <div class="control-group">
            <label class="control-label">Nom de l'utilisateur</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.nom_prenoms"
                class="span12"
                
              />
            </div>
          </div>
              </td>
            <!-- <td colspan="2">
               <code v-show="(this.AfficheNomArticleService(this.formData.service_id) != this.editAffectation.famill_id) && (this.AfficheNomArticleFonction(this.formData.fonction_id) != this.editAffectation.famill_id)" style="color:red;font-size:14px">Le Service ou la Fonction séléctionner n'a pas dois a un véicule </code>
              
             </td> -->
          </tr>
      </table>
      </div>
      <div class="modal-footer">
        <a
          
          class="btn btn-primary"
          href="#"
          @click.prevent="ajouterImmobilisationLocal()"
        >Affecter</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
<!-- FIN FORMULAIRE D AFFECTATION VEHICULE-->





<!-- FORMULAIRE D REAFFECTATION DE MATERIEL -->
<div id="Reaffectationmateriel" class="modal hide tailgrand2">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>REAfféctation Matériel: {{afficherUniteAdministrative(editAffectation.uAdministrative_id)}}</h3>
      </div>
      <div class="modal-body">
      <table class="table table-bordered table-striped">
      <tr>
        
         <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Description</label>
                  <div class="controls">
                    <input
                      type="text"
                    v-model="editAffectation.autreinfo"
                      class="span4"
                      
                    />
                  </div>
                </div>
                      </td>
            <td>
               <div class="control-group">
            <label class="control-label">Marque</label>
            <div class="controls">
              <input
                type="text"
                :value="libelleMarque(editAffectation.marque_id)"
                class="span4"
                readonly
              />
            </div>
          </div>
            </td>
             <td>
               <div class="control-group">
            <label class="control-label">Modèle</label>
            <div class="controls">
              <input
                type="text"
                :value="libelleModelle(editAffectation.model_id)"
                class="span4"
                readonly
              />
            </div>
          </div>
            </td>
            
      </tr>
         
        <tr>
           <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">N°Série</label>
                  <div class="controls">
                     <input
                      type="text"
                    v-model="editAffectation.numchassis"
                      class="span4"
                      
                    />
                  </div>
                </div>
                      </td>
          <td>
               <div class="control-group">
            <label class="control-label">Quantité Actuelle</label>
            <div class="controls">
              <input
                type="text"
                v-model="editAffectation.quantitestock"
                class="span4"
                readonly
              />
            </div>
          </div>
            </td>
            <td>
               <div class="control-group">
            <label class="control-label">Quantité</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.qte_affecte"
                class="span4"
                
              />
            </div>
          </div>
            </td>
              
          </tr>
          
          <tr>
            <td>
               <div class="control-group">
            <label class="control-label">Service</label>
            <div class="controls">
               <!-- <select   class="span4" v-model="formData.service_id">
                 <option></option>
            <option v-for="resultat in afficherServiceUA(editAffectation.uAdministrative_id)" :key="resultat.id" 
            :value="resultat.serviceua_id">{{afficheServiceLibelle(resultat.serviceua_id)}}</option>
                </select> -->
                <model-list-select style="background-color: #fff;"
                                                   class="wide"
                                                   :list="services"
                                                   v-model="formData.service_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder=""
                                >

                                </model-list-select>
            </div>
          </div>
            </td>
             <td>
              
               <div class="control-group">
            <label class="control-label">Fonction</label>
            <div class="controls">
               <!-- <select   class="span4" v-model="formData.fonction_id">
                 <option></option>
            <option v-for="resultat in afficherFonctionUA(editAffectation.uAdministrative_id)" :key="resultat.id" 
            :value="resultat.fonction_id">{{afficheFonction(resultat.fonction_id)}}</option>
                </select> -->
                <model-list-select style="background-color: #fff;"
                                                   class="wide"
                                                   :list="fonctionProfessionnel"
                                                   v-model="formData.fonction_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder=""
                                >

                                </model-list-select>
            </div>
          </div>
            </td>
           <td>
               <div class="control-group">
            <label class="control-label">Date d'affétation</label>
            <div class="controls">
              <input
                type="date"
                v-model="formData.date_mise_service"
                class="span4"
                
              />
            </div>
          </div>
             </td>

          </tr>
          <tr>
           
            <!-- <td>
               <div class="control-group">
            <label class="control-label">Besoin</label>
            <div class="controls">
              <input
                type="text"
                :value="afficheNomA"
                class="span4"
                readonly
              />
            </div>
          </div>
             </td> -->
            <td colspan="3">
               <div class="control-group">
            <label class="control-label">Nom de l'utilisateur</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.nom_prenoms"
                class="span12"
                
              />
            </div>
          </div>
              </td>
            <!-- <td colspan="2">
               <code v-show="(this.AfficheNomArticleService(this.formData.service_id) != this.editAffectation.famill_id) && (this.AfficheNomArticleFonction(this.formData.fonction_id) != this.editAffectation.famill_id)" style="color:red;font-size:14px">Le Service ou la Fonction séléctionner n'a pas dois a un véicule </code>
              
             </td> -->
          </tr>
      </table>
      </div>
      <div class="modal-footer">
        <a
          
          class="btn btn-primary"
          href="#"
          @click.prevent="FaireReaffectation()"
        >RéAffecter</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
<!-- FIN FORMULAIRE D AFFECTATION VEHICULE-->







<!---DEBUT FORMULAIRE DE  TRANSFERT MATERIEL-->

<div id="transfertMateriel" class="modal hide tailgrand98">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Affectation Des équipements par unité Administrative</h3>
      </div>
      <div class="modal-body">
      <table class="table table-bordered table-striped">
<tr>
  <td >
                <div class="control-group">
                  <label class="control-label">Unité Administrative Emettrice</label>
                  <div class="controls">
                        <input
                type="text"
                
                class="span5"
               :value="afficherUniteAdministrative(editAffectation.uAdministrative_id)"
                readonly
              />
                  </div>
                </div>
             </td>
             <td >
                <div class="control-group">
                  <label class="control-label">Article en Stock UA Emettrice</label>
                  <div class="controls">
                       
                    <input
                type="text"
                :value="libelleFamilleEquipement(editAffectation.articlestock_id)"
                class="span5"
               
                readonly
              />
                  </div>
                </div>
             </td>
             <td>
     <div class="control-group">
                  <label class="control-label">Marque des articles en Stock UA Emettrice</label>
                  <div class="controls">
                       <input
                type="text"
                :value="libelleMarque(editAffectation.marque_id)"
                class="span5"
               
                readonly
              />
                   
                  </div>
                </div>
  </td>

  
</tr>
<tr>
   <td>
     <div class="control-group">
                  <label class="control-label">Modele des articles en Stock UA Emettrice</label>
                  <div class="controls">
                        <input
                type="text"
                
                class="span5"
               :value="libelleModelle(editAffectation.model_id)"
                readonly
              />
                   
                  </div>
                </div>
  </td>
  <td>
    <div class="control-group">
            <label class="control-label">Quantité en stock</label>
            <div class="controls">
              <input
                type="text"
                
                class="span5"
               v-model="editAffectation.quantitestock"
                readonly
              />
            </div>
          </div>
  </td>
<td>
    <div class="control-group">
            <label class="control-label">Quantité a Transferé</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.quantitestock"
                class="span5"
               
             
              />
            </div>
          </div>
  </td>
  
             <!-- <td >
                <div class="control-group">
                  <label class="control-label">Article en Stock UA Réceptrice</label>
                  <div class="controls">
                        <select v-model="formData3.famille_id" 
                         class="span5">
                     <option
                        v-for="localgeo in listeArticleEnStock(ua_id)"
                        :key="localgeo[0].id"
                        :value="localgeo[0].famill_id"
                      >{{libelleArticle(localgeo[0].famill_id)}}</option>
                    </select>
                   
                  </div>
                </div>
             </td> -->
</tr>

<tr>
  <td >
                <div class="control-group">
                  <label class="control-label">Unité Administrative Réceptrice</label>
                  <div class="controls">
                       
                        <model-list-select style="background-color: #fff;"
                                                   class="wide"
                                                   :list="filtre_unite_admin"
                                                   v-model="ua_receptrice_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder=""
                                >

                                </model-list-select>
                   
                  </div>
                </div>
             </td>
             <td>
    <div class="control-group">
            <label class="control-label">Date de transfert</label>
            <div class="controls">
              <input
                type="date"
                v-model="formData.date_transfert"
                class="span5"
               
                
              />
            </div>
          </div>
  </td>
  <td>
    <div class="control-group">
            <label class="control-label">Autre Unité d'Administrative</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.autre_ua"
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
          @click.prevent="FaireTransferer"
        >Transférer</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
<!--FIN FORMULAIRE DE TRANSFERT MATERIEL-->





<!-- FORMULAIRE D AFFECTATION DE MOBILIER -->
<div id="Mobilier" class="modal hide tailgrand2">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Afféctation Mobilier: {{afficherUniteAdministrative(editAffectation.uAdministrative_id)}}</h3>
      </div>
      <div class="modal-body">
      <table class="table table-bordered table-striped">
      <tr>
        <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Article</label>
                  <div class="controls">
                    <input
                      type="text"
                    v-model="editAffectation.autreinfo"
                      class="span4"
                      
                    />
                  </div>
                </div>
                      </td>
         <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Description</label>
                  <div class="controls">
                    <input
                      type="text"
                    v-model="editAffectation.description_article"
                      class="span4"
                      
                    />
                  </div>
                </div>
                      </td>
            <td>
               <div class="control-group">
            <label class="control-label">Code immobilisation</label>
            <div class="controls">
              <input
                type="text"
                v-model="editAffectation.numero_matricule"
                class="span4"
                readonly
              />
            </div>
          </div>
            </td>
            
            
      </tr>
         
        <tr>
          
          <td>
               <div class="control-group">
            <label class="control-label">Quantité Actuelle</label>
            <div class="controls">
              <input
                type="text"
                v-model="editAffectation.quantitestock"
                class="span4"
                readonly
              />
            </div>
          </div>
            </td>
            <td>
               <div class="control-group">
            <label class="control-label">Quantité</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.qte_affecte"
                class="span4"
                
              />
            </div>
          </div>
            </td>
              
          </tr>
          
          <tr>
            <td>
               <div class="control-group">
            <label class="control-label">Service</label>
            <div class="controls">
               <!-- <select   class="span4" v-model="formData.service_id">
                 <option></option>
            <option v-for="resultat in afficherServiceUA(editAffectation.uAdministrative_id)" :key="resultat.id" 
            :value="resultat.serviceua_id">{{afficheServiceLibelle(resultat.serviceua_id)}}</option>
                </select> -->
                <model-list-select style="background-color: #fff;"
                                                   class="wide"
                                                   :list="services"
                                                   v-model="formData.service_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder=""
                                >

                                </model-list-select>
            </div>
          </div>
            </td>
             <td>
              
               <div class="control-group">
            <label class="control-label">Fonction</label>
            <div class="controls">
               <!-- <select   class="span4" v-model="formData.fonction_id">
                 <option></option>
            <option v-for="resultat in afficherFonctionUA(editAffectation.uAdministrative_id)" :key="resultat.id" 
            :value="resultat.fonction_id">{{afficheFonction(resultat.fonction_id)}}</option>
                </select> -->
                <model-list-select style="background-color: #fff;"
                                                   class="wide"
                                                   :list="fonctionProfessionnel"
                                                   v-model="formData.fonction_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder=""
                                >

                                </model-list-select>
            </div>
          </div>
            </td>
           <td>
               <div class="control-group">
            <label class="control-label">Date d'affétation</label>
            <div class="controls">
              <input
                type="date"
                v-model="formData.date_mise_service"
                class="span4"
                
              />
            </div>
          </div>
             </td>

          </tr>
          <tr>
           
            <!-- <td>
               <div class="control-group">
            <label class="control-label">Besoin</label>
            <div class="controls">
              <input
                type="text"
                :value="afficheNomA"
                class="span4"
                readonly
              />
            </div>
          </div>
             </td> -->
            <td colspan="3">
               <div class="control-group">
            <label class="control-label">Nom de l'utilisateur</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.nom_prenoms"
                class="span12"
                
              />
            </div>
          </div>
              </td>
            <!-- <td colspan="2">
               <code v-show="(this.AfficheNomArticleService(this.formData.service_id) != this.editAffectation.famill_id) && (this.AfficheNomArticleFonction(this.formData.fonction_id) != this.editAffectation.famill_id)" style="color:red;font-size:14px">Le Service ou la Fonction séléctionner n'a pas dois a un véicule </code>
              
             </td> -->
          </tr>
      </table>
      </div>
      <div class="modal-footer">
        <a
          
          class="btn btn-primary"
          href="#"
          @click.prevent="ajouterImmobilisationLocal()"
        >Affecter</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
<!-- FIN FORMULAIRE D AFFECTATION VEHICULE-->




<!-- FORMULAIRE D AFFECTATION DE MOBILIER -->
<div id="ReaffectationMobilier" class="modal hide tailgrand2">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>RéAfféctation Mobilier: {{afficherUniteAdministrative(editAffectation.uAdministrative_id)}}</h3>
      </div>
      <div class="modal-body">
      <table class="table table-bordered table-striped">
      <tr>
        <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Article</label>
                  <div class="controls">
                    <input
                      type="text"
                    v-model="editAffectation.autreinfo"
                      class="span4"
                      
                    />
                  </div>
                </div>
                      </td>
         <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Description</label>
                  <div class="controls">
                    <input
                      type="text"
                    v-model="editAffectation.description_article"
                      class="span4"
                      
                    />
                  </div>
                </div>
                      </td>
            <td>
               <div class="control-group">
            <label class="control-label">Code immobilisation</label>
            <div class="controls">
              <input
                type="text"
                v-model="editAffectation.numero_matricule"
                class="span4"
                readonly
              />
            </div>
          </div>
            </td>
            
            
      </tr>
         
        <tr>
          
          <td>
               <div class="control-group">
            <label class="control-label">Quantité Actuelle</label>
            <div class="controls">
              <input
                type="text"
                v-model="editAffectation.quantitestock"
                class="span4"
                readonly
              />
            </div>
          </div>
            </td>
            <td>
               <div class="control-group">
            <label class="control-label">Quantité</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.qte_affecte"
                class="span4"
                
              />
            </div>
          </div>
            </td>
              
          </tr>
          
          <tr>
            <td>
               <div class="control-group">
            <label class="control-label">Service</label>
            <div class="controls">
               <!-- <select   class="span4" v-model="formData.service_id">
                 <option></option>
            <option v-for="resultat in afficherServiceUA(editAffectation.uAdministrative_id)" :key="resultat.id" 
            :value="resultat.serviceua_id">{{afficheServiceLibelle(resultat.serviceua_id)}}</option>
                </select> -->
                <model-list-select style="background-color: #fff;"
                                                   class="wide"
                                                   :list="services"
                                                   v-model="formData.service_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder=""
                                >

                                </model-list-select>
            </div>
          </div>
            </td>
             <td>
              
               <div class="control-group">
            <label class="control-label">Fonction</label>
            <div class="controls">
               <!-- <select   class="span4" v-model="formData.fonction_id">
                 <option></option>
            <option v-for="resultat in afficherFonctionUA(editAffectation.uAdministrative_id)" :key="resultat.id" 
            :value="resultat.fonction_id">{{afficheFonction(resultat.fonction_id)}}</option>
                </select> -->
                <model-list-select style="background-color: #fff;"
                                                   class="wide"
                                                   :list="fonctionProfessionnel"
                                                   v-model="formData.fonction_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder=""
                                >

                                </model-list-select>
            </div>
          </div>
            </td>
           <td>
               <div class="control-group">
            <label class="control-label">Date d'affétation</label>
            <div class="controls">
              <input
                type="date"
                v-model="formData.date_mise_service"
                class="span4"
                
              />
            </div>
          </div>
             </td>

          </tr>
          <tr>
           
            <!-- <td>
               <div class="control-group">
            <label class="control-label">Besoin</label>
            <div class="controls">
              <input
                type="text"
                :value="afficheNomA"
                class="span4"
                readonly
              />
            </div>
          </div>
             </td> -->
            <td colspan="3">
               <div class="control-group">
            <label class="control-label">Nom de l'utilisateur</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.nom_prenoms"
                class="span12"
                
              />
            </div>
          </div>
              </td>
            <!-- <td colspan="2">
               <code v-show="(this.AfficheNomArticleService(this.formData.service_id) != this.editAffectation.famill_id) && (this.AfficheNomArticleFonction(this.formData.fonction_id) != this.editAffectation.famill_id)" style="color:red;font-size:14px">Le Service ou la Fonction séléctionner n'a pas dois a un véicule </code>
              
             </td> -->
          </tr>
      </table>
      </div>
      <div class="modal-footer">
        <a
          
          class="btn btn-primary"
          href="#"
          @click.prevent="FaireReaffectation()"
        >RéAffecter</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
<!-- FIN FORMULAIRE D AFFECTATION VEHICULE-->





<!---DEBUT FORMULAIRE DE  TRANSFERT MATERIEL-->

<div id="transfertMobilier" class="modal hide tailgrand98">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Affectation Des équipements par unité Administrative</h3>
      </div>
      <div class="modal-body">
      <table class="table table-bordered table-striped">
<tr>
  <td >
                <div class="control-group">
                  <label class="control-label">Unité Administrative Emettrice</label>
                  <div class="controls">
                        <input
                type="text"
                
                class="span5"
               :value="afficherUniteAdministrative(editAffectation.uAdministrative_id)"
                readonly
              />
                  </div>
                </div>
             </td>
             <td >
                <div class="control-group">
                  <label class="control-label">Article en Stock UA Emettrice</label>
                  <div class="controls">
                       
                    <input
                type="text"
                :value="libelleFamilleEquipement(editAffectation.articlestock_id)"
                class="span5"
               
                readonly
              />
                  </div>
                </div>
             </td>
             <td>
     <div class="control-group">
                  <label class="control-label">Marque des articles en Stock UA Emettrice</label>
                  <div class="controls">
                       <input
                type="text"
                :value="libelleMarque(editAffectation.marque_id)"
                class="span5"
               
                readonly
              />
                   
                  </div>
                </div>
  </td>

  
</tr>
<tr>
   <td>
     <div class="control-group">
                  <label class="control-label">Modele des articles en Stock UA Emettrice</label>
                  <div class="controls">
                        <input
                type="text"
                
                class="span5"
               :value="libelleModelle(editAffectation.model_id)"
                readonly
              />
                   
                  </div>
                </div>
  </td>
  <td>
    <div class="control-group">
            <label class="control-label">Quantité en stock</label>
            <div class="controls">
              <input
                type="text"
                
                class="span5"
               v-model="editAffectation.quantitestock"
                readonly
              />
            </div>
          </div>
  </td>
<td>
    <div class="control-group">
            <label class="control-label">Quantité a Transferé</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.quantitestock"
                class="span5"
               
             
              />
            </div>
          </div>
  </td>
  
             <!-- <td >
                <div class="control-group">
                  <label class="control-label">Article en Stock UA Réceptrice</label>
                  <div class="controls">
                        <select v-model="formData3.famille_id" 
                         class="span5">
                     <option
                        v-for="localgeo in listeArticleEnStock(ua_id)"
                        :key="localgeo[0].id"
                        :value="localgeo[0].famill_id"
                      >{{libelleArticle(localgeo[0].famill_id)}}</option>
                    </select>
                   
                  </div>
                </div>
             </td> -->
</tr>

<tr>
  <td >
                <div class="control-group">
                  <label class="control-label">Unité Administrative Réceptrice</label>
                  <div class="controls">
                       
                        <model-list-select style="background-color: #fff;"
                                                   class="wide"
                                                   :list="filtre_unite_admin"
                                                   v-model="ua_receptrice_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder=""
                                >

                                </model-list-select>
                   
                  </div>
                </div>
             </td>
             <td>
    <div class="control-group">
            <label class="control-label">Date de transfert</label>
            <div class="controls">
              <input
                type="date"
                v-model="formData.date_transfert"
                class="span5"
               
                
              />
            </div>
          </div>
  </td>
  <td>
    <div class="control-group">
            <label class="control-label">Autre Unité d'Administrative</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.autre_ua"
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
          @click.prevent="FaireTransferer"
        >Transférer</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
<!--FIN FORMULAIRE DE TRANSFERT MATERIEL-->










           <notifications  />    
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import { formatageSomme } from '../../../../../../Repositories/Repository';
import {admin,dcf,noDCfNoAdmin} from "../../../../../../Repositories/Auth"
import {  ModelListSelect } from 'vue-search-select'
    import 'vue-search-select/dist/VueSearchSelect.css'
import moment from 'moment';
export default {
  components: {
    
    ModelListSelect,
     
  },
    data(){
        return{
          formData:{},
        editAffectation:{},
      editService:{},
      editReAffectation:{},
      ua_receptrice_id:"",
      date_transfert:"",
      autre_ua:"",
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
            ...mapGetters('personnelUA', ['acteur_depenses','personnaFonction','acte_personnels',"fonctionProfessionnel"]),


                ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises','banques','comptes','getCompte']),
            ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
                'types_financements']) ,
                
    ...mapGetters("parametreGenerauxAdministratif", ["getterplanOrganisationUa","exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),
       ...mapGetters('parametreGenerauxFonctionnelle', ['structureActe', 
  'planActe']),
 ...mapGetters("uniteadministrative", [
      "directions",
      "servicesua",
      "fonctionProfessionnelua",
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
      "UA",
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
montantPasEquipment(){
     return stock=>{
        if(stock){
          let montant=parseFloat(stock.quantitestock)*parseFloat(stock.prix_unitaire)
          return  montant
        }
        return 0
     }
   },

 restantEnStock() {
      const val = parseInt(this.editAffectation.quantitestock) - parseInt(this.formData.quantitestock);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },





  filtre_unite_admin() {
                if(this.noDCfNoAdmin){
                    let colect=[];
                    let vM=this
                    this.uniteAdministratives.filter(item=>{
                        console.log("OK bonjour GUE")
                        if(vM.getterUniteAdministrativeByUser.length>0){
                            let val= vM.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.id)
                            if (val!=undefined){
                                colect.push(item)
                                return item
                            }
                        }

                    })
                    return colect
                }
                return this.uniteAdministratives
            },

id_Affectation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.immobilisations.find(qtreel => qtreel.stock_id == id);

      if (qtereel) {
        return qtereel.id;
      }
      return 0
        }
      };
    },









IdServiceRattache() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.immobilisations.find(qtreel => qtreel.stock_id == id);

      if (qtereel) {
        return qtereel.service_id;
      }
      return 0
        }
      };
    },
IdFonctionRattache() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.immobilisations.find(qtreel => qtreel.stock_id == id);

      if (qtereel) {
        return qtereel.fonction_id;
      }
      return 0
        }
      };
    },
DateMiseEnService() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.immobilisations.find(qtreel => qtreel.stock_id == id);

      if (qtereel) {
        return qtereel.date_mise_service;
      }
      return 'Non renseigné'
        }
      };
    },
statusBouton() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.immobilisations.find(qtreel => qtreel.stock_id == id);

      if (qtereel) {
        return qtereel.statut_bouton;
      }
      return 0
        }
      };
    },



AfficheNomArticleService() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.normeImmo.find(qtreel => qtreel.service_id == id && qtreel.famille_id == this.editAffectation.famill_id);
           if (qtereel) {
        return qtereel.famille_id;
      }
      return 0
        }
      };
    },
AfficheNomArticleFonction() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.normeImmo.find(qtreel => qtreel.fonction_id == id && qtreel.famille_id == this.editAffectation.famill_id);

      if (qtereel) {
        return qtereel.famille_id;
      }
      return 0
        }
      };
    },
afficheNomA(){
  if(this.AfficheNomArticleService(this.formData.service_id) == this.editAffectation.famill_id){

return this.libelleFamille(this.editAffectation.famill_id)
  }
  else if(this.AfficheNomArticleFonction(this.formData.fonction_id) == this.editAffectation.famill_id){

    return this.libelleFamille(this.editAffectation.famill_id)
  }
  
  else{
    return "Pas de norme définir"
  }
},




afficherServiceUA() {
      return id => {
        if (id != null && id != "") {
           return this.getterplanOrganisationUa.filter(qtreel => qtreel.ua_id == id && qtreel.fonction_id == null);
      
        }
      };
    },

afficherFonctionUA() {
      return id => {
        if (id != null && id != "") {
           return this.getterplanOrganisationUa.filter(qtreel => qtreel.ua_id == id && qtreel.serviceua_id != null);
      
        }
      };
    },


AfficheCode1() {
      
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.code== 3);
      if (qtereel) return qtereel.code
      return 5
      
	},
	AfficheLibelle1() {
      
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.code== 3);
      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
       
	},



AfficheCode2() {
      
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.code== 1);
      if (qtereel) return qtereel.code
      return 5
      
	},
	AfficheLibelle2() {
      
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.code== 1);
      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
       
	},


AfficheCode3() {
      
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.code== 2);
      if (qtereel) return qtereel.code
      return 5
      
	},
	AfficheLibelle3() {
      
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.code== 2);
      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
       
  },
  
AfficheCode4() {
      
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.code== 4);
      if (qtereel) return qtereel.code
      return 5
      
	},
	AfficheLibelle4() {
      
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.code== 4);
      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
       
  },
  
AfficheCode5() {
      
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.code== 5);
      if (qtereel) return qtereel.code
      return 5
      
	},
	AfficheLibelle5() {
      
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.code== 5);
      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
       
  },
  
AfficheCode6() {
      
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.code== 6);
      if (qtereel) return qtereel.code
      return 5
      
	},
	AfficheLibelle6() {
      
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.code== 6);
      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
       
  },
  
AfficheCode7() {
      
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.code== 7);
      if (qtereel) return qtereel.code
      return 5
      
	},
	AfficheLibelle7() {
      
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.code== 7);
      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
       
  },
  
AfficheCode8() {
      
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.code== 8);
      if (qtereel) return qtereel.code
      return 5
      
	},
	AfficheLibelle8() {
      
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.code== 8);
      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
       
  },
  
  
AfficheCode9() {
      
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.code== 9);
      if (qtereel) return qtereel.code
      return 5
      
	},
	AfficheLibelle9() {
      
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.code== 9);
      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
       
	},
AfficheCode10() {
      
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.code== 10);
      if (qtereel) return qtereel.code
      return 5
      
	},
	AfficheLibelle10() {
      
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.code== 10);
      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
       
	},
recupereTypeBien_id() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.GestionStockageArticles.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.typebien_id;
      }
      return 0
        }
      };
    },

libelleFamille() {
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
           return this.GestionStockageArticles.filter(qtreel => qtreel.uAdministrative_id == id && this.recupereTypeBienParCode(qtreel.typebien_id) == 3 && qtreel.quantitestock!=0);

        }
      };
    },
    NombreDeVehicule() {
      return id => {
        if (id != null && id != "") {
           return this.GestionStockageArticles.filter(qtreel => qtreel.uAdministrative_id == id && this.recupereTypeBienParCode(qtreel.typebien_id) == 3).length;

        }
      };
    },
listeDuMaterielAffecter() {
      return id => {
        if (id != null && id != "") {
           return this.GestionStockageArticles.filter(qtreel => qtreel.uAdministrative_id == id && this.recupereTypeBienParCode(qtreel.typebien_id) == 1);

        }
      };
    },
listeDesEquipementPar04() {
      return id => {
        if (id != null && id != "") {
           return this.GestionStockageArticles.filter(qtreel => qtreel.uAdministrative_id == id &&  this.recupereTypeBienParCode(qtreel.typebien_id) == 2);

        }
      };
    },
    listeDesEquipementPar05() {
      return id => {
        if (id != null && id != "") {
           return this.GestionStockageArticles.filter(qtreel => qtreel.uAdministrative_id == id &&  this.recupereTypeBienParCode(qtreel.typebien_id) == 4);

        }
      };
    },
    listeDesEquipementPar06() {
      return id => {
        if (id != null && id != "") {
           return this.GestionStockageArticles.filter(qtreel => qtreel.uAdministrative_id == id &&  this.recupereTypeBienParCode(qtreel.typebien_id) == 5);

        }
      };
    },
    listeDesEquipementPar07() {
      return id => {
        if (id != null && id != "") {
           return this.GestionStockageArticles.filter(qtreel => qtreel.uAdministrative_id == id && this.recupereTypeBienParCode(qtreel.typebien_id) == 6);

        }
      };
    },
    listeDesEquipementPar08() {
      return id => {
        if (id != null && id != "") {
           return this.GestionStockageArticles.filter(qtreel => qtreel.uAdministrative_id == id && this.recupereTypeBienParCode(qtreel.typebien_id) == 7);

        }
      };
    },
    listeDesEquipementPar09() {
      return id => {
        if (id != null && id != "") {
           return this.GestionStockageArticles.filter(qtreel => qtreel.uAdministrative_id == id && this.recupereTypeBienParCode(qtreel.typebien_id) == 8);

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
           const qtereel = this.articles.find(qtreel => qtreel.id == id);

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
    // libelleModel() {
    //   return id => {
    //     if (id != null && id != "") {
    //        const qtereel = this.ModeleVehicules.find(qtreel => qtreel.id == id);

    //   if (qtereel) {
    //     return qtereel.libelle;
    //   }
    //   return 0
    //     }
    //   };
    // },
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
afficheFonction() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.fonctionProfessionnel.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
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

anneeAmort() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },





      },

      methods:{ 

          ...mapActions('bienService',['supprimerActeEffetFinancier',
          'ajouterActeEffetFinancier','modifierActeEffetFinancier', 'modifierMarche']),
 ...mapActions("uniteadministrative", [
     "getAllServiceua",
      "modifierStockArticle",
      "ajouterStockArticle",
      "supprimerStockArticle",
     
      // "ajouterHistoriqueBudgetGeneral"
    ]),
...mapActions("SuiviImmobilisation", [
       "ajouterImmobilisation",
       "modifierImmobilisation",
       "ajouterAffectationUaBien",
       "ajouterHistotorisqueAffectionService",
       "modifierDemandeMateriel",
       "ajouterHistotorisqueAffection"
      
     
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
if(this.formData.fonction_id==""){
  var objet24 ={
    
      fonction_id:this.formData.fonction_id,
      date_mise_service:this.formData.date_mise_service,
      qte_affecte:this.formData.qte_affecte,
      exercice_budgetaire:this.anneeAmort,
      service_id:this.formData.service_id,
        stock_id:this.editAffectation.id,
        nom_prenoms:this.formData.nom_prenoms,
       statut_bouton:0,
       uniteadministrative_id:this.editAffectation.uAdministrative_id
}

this.ajouterImmobilisation(objet24)
this.ajouterHistotorisqueAffection(objet24)
this.$("#exampleModal1").modal('hide');
this.$("#materiel").modal('hide');
}
else if(this.formData.service_id==""){
var objet21 ={
    
      fonction_id:this.formData.fonction_id,
      date_mise_service:this.formData.date_mise_service,
      qte_affecte:this.formData.qte_affecte,
      exercice_budgetaire:this.anneeAmort,
      service_id:this.formData.service_id,
        stock_id:this.editAffectation.id,
        nom_prenoms:this.formData.nom_prenoms,
       statut_bouton:0,
       uniteadministrative_id:this.editAffectation.uAdministrative_id
}

this.ajouterImmobilisation(objet21)
this.ajouterHistotorisqueAffection(objet21)
this.$("#exampleModal1").modal('hide');
this.$("#materiel").modal('hide');

}
else if(this.formData.service_id!="" || this.formData.fonction_id!=""  ){
var objet4={
    
      fonction_id:this.formData.fonction_id,
      date_mise_service:this.formData.date_mise_service,
      qte_affecte:this.formData.qte_affecte,
      exercice_budgetaire:this.anneeAmort,
      service_id:this.formData.service_id,
        stock_id:this.editAffectation.id,
        nom_prenoms:this.formData.nom_prenoms,
       statut_bouton:1,
       uniteadministrative_id:this.editAffectation.uAdministrative_id

}

this.ajouterImmobilisation(objet4)
this.ajouterHistotorisqueAffection(objet4)
this.$("#exampleModal1").modal('hide');
this.$("#materiel").modal('hide');
this.$("#Reaffectationmateriel").modal('hide');
}


  },
     
     
 FaireReaffectation(){
var objet3 ={
    id:this.id_Affectation(this.editAffectation.id),
      fonction_id:this.formData.fonction_id,
      date_mise_service:this.formData.date_mise_service,
      qte_affecte:this.formData.qte_affecte,
      exercice_budgetaire:this.anneeAmort,
      service_id:this.formData.service_id,
        stock_id:this.editAffectation.id,
        nom_prenoms:this.formData.nom_prenoms,
       statut_bouton:1
}
var objet2 ={
    
      fonction_id:this.formData.fonction_id,
      date_mise_service:this.formData.date_mise_service,
      qte_affecte:this.formData.qte_affecte,
      exercice_budgetaire:this.anneeAmort,
      service_id:this.formData.service_id,
        stock_id:this.editAffectation.id,
        nom_prenoms:this.formData.nom_prenoms,
       statut_bouton:1
}

this.modifierImmobilisation(objet3)
this.ajouterHistotorisqueAffection(objet2)
this.$("#exampleModal3").modal('hide');
this.$("#Reaffectationmateriel").modal('hide');
  },    



 FaireTransferer(){
var objet31 ={
   
      
      uAdministrative_id:this.ua_receptrice_id,
      groupe_famille_id:this.editAffectation.groupe_famille_id,
      anneebudgetaire:this.anneeAmort,
      famill_id:this.editAffectation.famill_id,
        
        articlestock_id:this.editAffectation.articlestock_id,
       quantitestock:this.formData.quantitestock,
       durevie:this.editAffectation.durevie,
       marque_id:this.editAffectation.marque_id,
       model_id:this.editAffectation.model_id,
       numchassis:this.editAffectation.numchassis,
       numimmatriculation:this.editAffectation.numimmatriculation,
       prix_unitaire:this.editAffectation.prix_unitaire,
         energie:this.editAffectation.energie,
         nombreportes:this.editAffectation.nombreportes,
         numserie:this.editAffectation.numserie,
           couleur:this.editAffectation.couleur,
           nombreplace:this.editAffectation.nombreplace,
           puissance:this.editAffectation.puissance,
           typebien_id:this.editAffectation.typebien_id
}

var objet78 ={
   
      ua_receptrice_id:this.ua_receptrice_id,
      ua_mettrice_id:this.editAffectation.uAdministrative_id,
      famille_id:this.editAffectation.groupe_famille_id,
      	anneebudgetaire:this.anneeAmort,
      	articles_id:this.editAffectation.famill_id,
        stock_id:this.editAffectation.id,
       
       	quantite:this.formData.quantitestock,
      autre_ua:this.formData.autre_ua,
      date_transfert:this.formData.date_transfert,
      marque_id:this.editAffectation.marque_id,
       model_id:this.editAffectation.model_id,
      
}
var objet147 ={
  id:this.editAffectation.id,
  quantitestock:this.restantEnStock
}
this.ajouterStockArticle(objet31)
this.ajouterAffectationUaBien(objet78)
this.modifierStockArticle(objet147)
this.$("#exampleModal12").modal('hide');
this.$("#transfertMateriel").modal('hide');
  },    




fenetreAjouterTansfertMateriel(id) {
      this.$("#transfertMateriel").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editAffectation = this.listeDuMaterielAffecter(this.detail_Ua.uAdministrative_id).find(item=>item.id==id);
    },



fenetreAjouterReAffectationMateriel(id) {
      this.$("#Reaffectationmateriel").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editAffectation = this.listeDuMaterielAffecter(this.detail_Ua.uAdministrative_id).find(item=>item.id==id);
    },





fenetreAjouterAffectationMateriel(id) {
      this.$("#materiel").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editAffectation = this.listeDuMaterielAffecter(this.detail_Ua.uAdministrative_id).find(item=>item.id==id);
    },

fenetreAjouterAffectationMobilier(id) {
      this.$("#Mobilier").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editAffectation = this.listeDesEquipementPar04(this.detail_Ua.uAdministrative_id).find(item=>item.id==id);
    },


fenetreAjouterReAffectationMobilier(id) {
      this.$("#ReaffectationMobilier").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editAffectation = this.listeDesEquipementPar04(this.detail_Ua.uAdministrative_id).find(item=>item.id==id);
    },


fenetreAjouterTransfert(id) {
      this.$("#transfertMobilier").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editAffectation = this.listeDesEquipementPar04(this.detail_Ua.uAdministrative_id).find(item=>item.id==id);
    },
fenetreAjouterAffectation(id) {
      this.$("#exampleModal1").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editAffectation = this.listeDesEquipementPar01(this.detail_Ua.uAdministrative_id).find(item=>item.id==id);
    },
   
   fenetreAjouterReAffectation(id) {
      this.$("#exampleModal3").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editAffectation = this.listeDesEquipementPar01(this.detail_Ua.uAdministrative_id).find(item=>item.id==id);
    },
fenetreAjouterTansfert(id) {
      this.$("#exampleModal12").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editAffectation = this.listeDesEquipementPar01(this.detail_Ua.uAdministrative_id).find(item=>item.id==id);
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
.tailgrand98{
  width: 65%;
  margin: 0 -35%;
}
.tailgrand2{
  width: 54%;
  margin: 0 -30%;
}
.tailgrand{
  width: 63%;
  margin: 0 -30%;
}
.tailgrand8{
  width: 85%;
  margin: 0 -45%;
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