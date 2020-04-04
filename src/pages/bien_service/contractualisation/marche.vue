

afficheContrat
<template>
    <div class="container-fluid">
         <div id="exampleModal" class="modal hide taillModal">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Marché Résilié</h3>
      </div>
    <div class="modal-body">
        <table class="table table-bordered table-striped">
    <tr>
       <td>
                 <div class="control-group">
            <label class="control-label">N°Marche</label>
            <div class="controls">
              <input
                type="text"
                :value="afficherNumeroMarche(editActeEffetFinancier.marche_id)"
                class="span4"
                readonly
               
              />
              {{editActeEffetFinancier.id}}
            </div>
          </div>
              </td>
              <td colspan="3">
                 <div class="control-group">
            <label class="control-label">Objet Marche</label>
            <div class="controls">
              <textarea name="" id="" cols="2" rows="2"  readonly class="span6" :value="afficherObjetMarche(editActeEffetFinancier.marche_id)"></textarea>
              
            </div>
          </div>
              </td>
    </tr>
    <tr>
      
              <td colspan="3">
                 <div class="control-group">
            <label class="control-label">Cause</label>
            <div class="controls">
            <textarea name="" id="" cols="2" rows="2" class="span10" v-model="editActeEffetFinancier.cause_resiliation"></textarea>
            </div>
          </div>
              </td>
     
    </tr>
          <tr>
       <td>
                 <div class="control-group">
            <label class="control-label">Entreprise</label>
            <div class="controls">
              <input
                type="text"
                :value="afficherEntreprise(editActeEffetFinancier.entreprise_id)"
                class="span4"
 readonly
               
              />
            </div>
          </div>
            
              <td>
                 <div class="control-group">
            <label class="control-label">Fichier join</label>
            <div class="controls">
              <input
                type="file"
               
                class="span3"
               
               
              />
            </div>
          </div>
              </td>
               <td>
                 <div class="control-group">
            <label class="control-label">Date resiliation</label>
            <div class="controls">
              <input
                type="date"
               v-model="editActeEffetFinancier.date_resiliation"
                class="span3"
               
               
              />
              <input
                type="hidden"
               v-model="indicateur_test"
                class="span3"
               
               
              />
            </div>
          </div>
              </td>
    </tr>
    
    
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierModalResiliation(editActeEffetFinancier)"
          class="btn btn-primary"
          href="#"
         
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#" 
        >Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->
         <div class="row-fluid">
                <div class="span12">
                    <div class="widget-box">
                        <div class="widget-title">
                            <ul class="nav nav-tabs">
                               <li class="active"><a data-toggle="tab" href="#tab2078">Toutes les marches    <span class="badge badge-inverse" >{{nombreTotalMarche}}</span></a></li>
                               
                               <li ><a data-toggle="tab" href="#tab100">Marchés Planifiés        <span class="badge badge-important" >    {{AfficheMarcheNonAttribue}}</span></a></li>
                                <li ><a data-toggle="tab" href="#tab10">En cours Contratualisation        <span class="badge badge-success" >{{NombreafficheContrat}}</span></a></li>
                                <li><a data-toggle="tab" href="#tab20">Marchés en Exécution      <span class="badge badge-warning" >     {{afficheNombreMarchExecuter}}</span></a></li>
                                <!-- <li><a data-toggle="tab" href="#tab208">Marchés Terminés      <span class="badge badge" >     {{0}}</span></a></li> -->
                                 <li><a data-toggle="tab" href="#tab20002">Marchés Résiliés    <span class="badge badge-info" >     {{afficheNombreMarcheResilier}}</span></a></li>
                                  <!-- <li><a data-toggle="tab" href="#tab99999">Exemple2  </a></li>  -->
                                <!-- <li class=""><a data-toggle="tab" href="#tab2">Liste des lots</a></li>
                                <li class=""><a data-toggle="tab" href="#tab3">Contratualisation</a></li>-->
                            </ul>
                        </div>
                        <div class="widget-content tab-content">
    
                            <div id="tab10" class="tab-pane">
                              <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des Marches En cours de Contratualisation</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search"  v-model="search" />
              </div> -->
            </div>
                             <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                <th>Ann&eacute;e</th>
                 <th title="unite administrative">UA</th>
                      <th>Type marche</th>
                   
                    <th>Activit&eacute;</th>
                    <th>Imputation</th>
                       <th>Objet march&eacute;</th>
                        <th>Reference march&eacute;</th> 
                                    <th>Montant prevue</th>
                                <th>Attribution</th>
                                <th>Action</th>
                </tr>
                </thead>
                <tbody>
                        <tr class="odd gradeX" v-for="(marche, index) in 
                afficheMarcheEnCoursContratualisation"
                 :key="marche.id">
                  <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.exo_id || 'Non renseigné'}}</td>
                 <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{afficherUniteAdministrative(marche.unite_administrative_id) || 'Non renseigné'}}</td>

                 <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.type_marche.libelle || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{afficheractivite(marche.activite_id) || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.imputation || 'Non renseigné'}}</td>
                    <!-- <td @dblclick="afficherModalModifierTypePrestation(index)">
                  {{marche.afficheEconomique.code || 'Non renseigné'}}- {{marche.afficheEconomique.libelle || 'Non renseigné'}}</td> -->
                     <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.objet || 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.reference_marche || 'Non renseigné'}}</td>
                   <!-- <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.numero_marche || 'Non renseigné'}}</td> -->
                     <td @dblclick="afficherModalModifierTypePrestation(index)" style="text-align: center;">
                   {{formatageSomme(parseFloat(marche.montant_marche)) || 'Non renseigné'}}</td>
                  
<td>
                     <button 
                      v-if="marche.attribue == 1"  class="btn  btn-success">
                <span >OUI</span>
       
                </button>
                   <button v-else class="btn  btn-danger">
              
                <span >NON</span>
                </button>
                   </td>


                     <div class="btn-group">
 <!-- <router-link :to="{ name: 'DetailMarchePs', params: { id: marche.id }}"
                class="btn btn-default " title="Detail marche proceduce simplifiée">
                  <span class=""><i class=" icon-folder-open"></i></span>
                   </router-link>  -->
                   <!-- <router-link :to="{ name: 'DetaillMarche', params: { id: marche.id }}"
                class="btn btn-default " title="Detail marches">
                  <span class=""><i class="icon-folder-open"></i></span>
                   </router-link>  -->
  <!-- <router-link :to="{ name: 'Engagement', params: { id: marche.id }}"
                class="btn btn-default " title="Detail Engagement">
                  <span class=""><i class=" icon-folder-close"></i></span>
                   </router-link>  -->

                     <router-link :to="{ name: 'DetailMarchePs', params: { id: marche.id }}"
                class="btn btn-default " title="Detail marche">
                  <span class=""><i class=" icon-folder-open"></i></span>
                   </router-link> 

                     
                 <!-- <router-link :to="{ name: 'DetailMarchePs', params: { id: marche.id }}"
                class="btn btn-default " title="Detail marche">
                  <span class=""><i class=" icon-folder-open"></i></span>
                   </router-link> 
                   <router-link :to="{name:'detailMarcheFsqc',params:{id:marche.id}}"
                   class="btn btn-default"  title="detail marche SFQC">
                   <span class=""><i class="icon-book"></i></span>
                   </router-link>

                  <router-link :to="{name:'detailMarcheR3cv',params:{id:marche.id}}"
                   class="btn btn-default"  title="detail marche R3CV">
                   <span class=""><i class="icon-plus"></i></span>
                   </router-link>


                   <router-link :to="{name:'detailMarcheAoi_Aon',params:{id:marche.id}}"
                   class="btn btn-default"  title="detail marche AOI-AON">
                   <span class=""><i class="icon-user"></i></span>
                   </router-link> -->



              <button @click.prevent="supprimerMarche(marche.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i></span></button>
             
            </div>

                       </tr>
                        <tr>
                     
                       <td>
                          
                      </td>
                      <td>
                          
                      </td>
                       <td>
                          
                      </td>
                       <td>
                          
                      </td>
                      <td>
                          
                      </td>
                     
                      <td>
                          
                      </td>
                       <td style="font-weight:bold;"> Total Marché
                      </td>
                       <td  style="text-align: center;color:red;font-weight:bold;">
                           {{formatageSomme(parseFloat(montantComtratualisation))}}
                           
                      </td>
                       <td>
                          
                      </td>
                        <td>
                          
                      </td>
                     
                    </tr>
                </tbody>
              </table>
                           
                        </div>
                         <div id="tab2078" class="tab-pane active">
                             <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des March&eacute;s</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search"  v-model="search" />
              </div> -->
            </div>
              <table class="table table-bordered table-striped">
                <thead>
                <tr>
                    <th>Année</th>
                      <th>UA</th>
                    <th>Type marché</th>
                    <th>Mode de passation</th>
                    <th>Activité</th>
                    <th>Imputation</th>
                    <!-- <th>Ligne Budgetaire</th> -->
                    <th>Objet marché</th>
                    <th>Reference marché</th>
                     <!-- <th>Numero marché</th> -->
                    <th>Montant prévu</th>
                    <th>marché Attribuer</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                 
                        <tr class="odd gradeX" v-for="(marche, index) in 
                typePrestationFiltre"
                 :key="marche.id">
                  <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.exo_id || 'Non renseigné'}}</td>
                 <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.objetUniteAdministrative.libelle || 'Non renseigné'}}</td>
<td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.type_marche.libelle || 'Non renseigné'}}</td>
                 <td @dblclick="afficherModalModifierTypePrestation(index)" style="text-align: center">
                   {{marche.procedure_passation.code || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.afficheActivite.libelle || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.imputation || 'Non renseigné'}}</td>
                    <!-- <td @dblclick="afficherModalModifierTypePrestation(index)">
                  {{marche.afficheEconomique.code || 'Non renseigné'}}- {{marche.afficheEconomique.libelle || 'Non renseigné'}}</td> -->
                     <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.objet || 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.reference_marche || 'Non renseigné'}}</td>
                   <!-- <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.numero_marche || 'Non renseigné'}}</td> -->
                     <td @dblclick="afficherModalModifierTypePrestation(index)" style="text-align: center;">
                   {{formatageSomme(parseFloat(marche.montant_marche)) || 'Non renseigné'}}</td>
                  
<td>
                     <button 
                      v-if="marche.attribue == 2"  class="btn  btn-warning">
                <span title="MZRCHE EN EXERCUTER" style="">EX</span>
       
                </button>
                <button 
                      v-else-if="marche.attribue == 1"  class="btn  btn-success">
                <span title=" MARCHE EN COURS DE CONTRATUALISATION">C</span>
       
                </button>
                 <button 
                      v-else-if="marche.attribue == 3"  class="btn  btn-info">
                <span title="MARCHE RESILIE" >R</span>
       
                </button>
                   <button v-else class="btn  btn-danger">
              
                <span title="MARCHE EN PLANIFICATION">P</span>
                </button>
                   </td>

<td>
    <div class="btn-group">

                   <!-- <router-link :to="{ name: 'DetaillMarche', params: { id: marche.id }}"
                class="btn btn-default " title="Detail marches">
                  <span class=""><i class="icon-folder-open"></i></span>
                   </router-link>  -->

                   
                 <!-- <router-link :to="{ name: 'DetailMarchePs', params: { id: marche.id }}"
                class="btn btn-default " title="Detail marche">
                  <span class=""><i class=" icon-folder-open"></i></span>
                   </router-link>  -->
                   <!-- <router-link :to="{name:'detailMarcheProcedureSimplifierComite',params:{id:marche.id}}"
                   class="btn btn-default"  title="detail marche psc">
                   <span class=""><i class="icon-book"></i></span>
                   </router-link>

                  <router-link :to="{name:'detailMarchePsLimite',params:{id:marche.id}}"
                   class="btn btn-default"  title="detail marche psL">
                   <span class=""><i class="icon-plus"></i></span>
                   </router-link> -->

<!-- 
                   <router-link :to="{name:'detailMarcheAoi_Aon',params:{id:marche.id}}"
                   class="btn btn-default"  title="detail marche AOI-AON">
                   <span class=""><i class="icon-user"></i></span>
                   </router-link> -->


                   
              <button @click.prevent="supprimerMarche(marche.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i></span></button>
             
            </div>
</td>
                   

                       </tr>
                        <tr>
                     
                       <td>
                          
                      </td>
                      <td>
                          
                      </td>
                       <td>
                          
                      </td>
                       <td>
                          
                      </td>
                      <td>
                          
                      </td>
                      <td>
                          
                      </td>
                      <td>
                          
                      </td>
                       <td style="font-weight:bold;"> Total Marché
                      </td>
                       <td  style="text-align: center;color:red;font-weight:bold;">
                           {{formatageSomme(parseFloat(montantMarche))}}
                           
                      </td>
                       <td>
                          
                      </td>
                        <td>
                          
                      </td>
                      
                     
                    </tr>
                </tbody>
              </table>
          


                        </div>
                         <div id="tab20" class="tab-pane">
                            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des marchés en executions</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search"  v-model="search" />
              </div> -->
              
            </div>
                        <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                <th>Ann&eacute;e</th>
                 <th title="unite administrative">UA</th>
                      <th>Type marche</th>
                   
                    <th>Activit&eacute;</th>
                    <th>Imputation</th>
                       <th>Objet march&eacute;</th>
                        <th>Reference march&eacute;</th> 
                                    <th>Montant réel</th>
                                <th>Attribution</th>
                                <th>Action</th>
                </tr>
                </thead>
                <tbody>
                 <tr class="odd gradeX" v-for="(marche, index) in 
                afficheMarchExecuter"
                 :key="marche.id">
                  <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{afficherAnneeBudget(marche.marche_id) || 'Non renseigné'}}</td>
                 <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{afficherUniteAdministrative(afficherIdUniteAdministrative(marche.marche_id)) || 'Non renseigné'}}</td>
                 
                  <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{afficherTypeMarcheLibelle(afficherTypeMarche(marche.marche_id))|| 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{afficheractivite(afficherIdactivite(marche.marche_id))|| 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{afficherImputationMarche(marche.marche_id)|| 'Non renseigné'}}</td>
                    <!-- <td @dblclick="afficherModalModifierTypePrestation(index)">
                  {{marche.afficheEconomique.code || 'Non renseigné'}}- {{marche.afficheEconomique.libelle || 'Non renseigné'}}</td> -->
                     <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{afficherObjetMarche(marche.marche_id) || 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{afficherReferenceMarche(marche.marche_id)|| 'Non renseigné'}}</td>
                   <!-- <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.numero_marche || 'Non renseigné'}}</td> -->
                     <td @dblclick="afficherModalModifierTypePrestation(index)" style="text-align: center;">
                   {{formatageSomme(parseFloat(marche.montant_act)) || 'Non renseigné'}}</td>
                  
<td>
                     <button 
                      v-if="afficherAttributMarche(marche.marche_id) == 2"  class="btn  btn-warning">
                <span >OUI</span>
       
                </button>
                   <!-- <button v-else class="btn  btn-danger">
              
                <span >NON</span>
                </button> -->
                   </td>


                     <div class="btn-group">
 
                 <!-- <router-link :to="{ name: 'DetailMarchePs', params: { id: marche.id }}"
                class="btn btn-default " title="Detail marche proceduce simplifiée">
                  <span class=""><i class=" icon-folder-open"></i></span>
                   </router-link>  -->
                   <!-- <router-link :to="{ name: 'DetaillMarche', params: { id: marche.id }}"
                class="btn btn-default " title="Detail marches">
                  <span class=""><i class="icon-folder-open"></i></span>
                   </router-link>  -->
  <!-- <router-link :to="{ name: 'Engagement', params: { id: marche.id }}"
                class="btn btn-default " title="Detail Engagement">
                  <span class=""><i class=" icon-folder-close"></i></span>
                   </router-link>  -->
                    <button   class="btn btn-info " title="Ajouter marché resilié" @click="afficherModalMarcheResilier(index)">
                <span class=""><i class="icon-pencil"></i></span></button>
              <button @click.prevent="supprimerMarche(marche.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i></span></button>
             
            </div>
                   </tr>
                      
                </tbody>
              </table>
                            


                        </div>
<div id="tab100" class="tab-pane ">
                                <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des Marches en Planifications</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search"  v-model="search" />
              </div> -->
            </div>
                          <table class="table table-bordered table-striped">
                <thead>
                 <tr>
                <th>Ann&eacute;e</th>
                 <th title="unite administrative">UA</th>
                      <th>Type marche</th>
                   
                    <th>Activit&eacute;</th>
                    <th>Imputation</th>
                       <th>Objet march&eacute;</th>
                        <th>Reference march&eacute;</th> 
                                    <th>Montant prevue</th>
                                <th>Attribution</th>
                                <th>Action</th>
                </tr>
                </thead>
                <tbody>
                   <tr class="odd gradeX" v-for="(marche, index) in 
                afficheMarcheEnPlanification"
                 :key="marche.id">
                  <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.exo_id || 'Non renseigné'}}</td>
                 <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{afficherUniteAdministrative(marche.unite_administrative_id) || 'Non renseigné'}}</td>

                 <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.type_marche.libelle || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{afficheractivite(marche.activite_id) || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.imputation || 'Non renseigné'}}</td>
                    <!-- <td @dblclick="afficherModalModifierTypePrestation(index)">
                  {{marche.afficheEconomique.code || 'Non renseigné'}}- {{marche.afficheEconomique.libelle || 'Non renseigné'}}</td> -->
                     <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.objet || 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.reference_marche || 'Non renseigné'}}</td>
                   <!-- <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.numero_marche || 'Non renseigné'}}</td> -->
                     <td @dblclick="afficherModalModifierTypePrestation(index)" style="text-align: center;">
                   {{formatageSomme(parseFloat(marche.montant_marche)) || 'Non renseigné'}}</td>
                  
<td>
                     <button 
                      v-if="marche.attribue == 1"  class="btn  btn-success">
                <span >OUI</span>
       
                </button>
                   <button v-else class="btn  btn-danger">
              
                <span >NON</span>
                </button>
                   </td>


                     <div class="btn-group">
 <!-- <router-link :to="{ name: 'DetailMarchePs', params: { id: marche.id }}"
                class="btn btn-default " title="Detail marche proceduce simplifiée">
                  <span class=""><i class=" icon-folder-open"></i></span>
                   </router-link>  -->
                   <!-- <router-link :to="{ name: 'DetaillMarche', params: { id: marche.id }}"
                class="btn btn-default " title="Detail marches">
                  <span class=""><i class="icon-folder-open"></i></span>
                   </router-link>  -->
  <!-- <router-link :to="{ name: 'Engagement', params: { id: marche.id }}"
                class="btn btn-default " title="Detail Engagement">
                  <span class=""><i class=" icon-folder-close"></i></span>
                   </router-link>  -->

                     <router-link :to="{ name: 'DetailMarchePs', params: { id: marche.id }}"
                class="btn btn-default " title="Detail marche">
                  <span class=""><i class=" icon-folder-open"></i></span>
                   </router-link> 

                     
                 <!-- <router-link :to="{ name: 'DetailMarchePs', params: { id: marche.id }}"
                class="btn btn-default " title="Detail marche">
                  <span class=""><i class=" icon-folder-open"></i></span>
                   </router-link> 
                   <router-link :to="{name:'detailMarcheFsqc',params:{id:marche.id}}"
                   class="btn btn-default"  title="detail marche SFQC">
                   <span class=""><i class="icon-book"></i></span>
                   </router-link>

                  <router-link :to="{name:'detailMarcheR3cv',params:{id:marche.id}}"
                   class="btn btn-default"  title="detail marche R3CV">
                   <span class=""><i class="icon-plus"></i></span>
                   </router-link>


                   <router-link :to="{name:'detailMarcheAoi_Aon',params:{id:marche.id}}"
                   class="btn btn-default"  title="detail marche AOI-AON">
                   <span class=""><i class="icon-user"></i></span>
                   </router-link> -->



              <button @click.prevent="supprimerMarche(marche.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i></span></button>
             
            </div>

                       </tr>
                        <tr>
                     
                       <td>
                          
                      </td>
                      <td>
                          
                      </td>
                       <td>
                          
                      </td>
                       <td>
                          
                      </td>
                      <td>
                          
                      </td>
                     
                      <td>
                          
                      </td>
                       <td style="font-weight:bold;"> Total Marché
                      </td>
                       <td  style="text-align: center;color:red;font-weight:bold;">
                           {{formatageSomme(parseFloat(montantPlanification))}}
                           
                      </td>
                       <td>
                          
                      </td>
                        <td>
                          
                      </td>
                     
                    </tr>
                </tbody>
              </table>


                        </div>

                         <div id="tab20002" class="tab-pane">
                              <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des Marchés résiliés</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search"  v-model="search" />
              </div> -->
            </div>
                            <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                <th>Ann&eacute;e</th>
                <th>Unite administrative</th>
                 <th title="unite administrative">Numero march&eacute;</th>
                      <th>Objet march&eacute;</th>
                   
                    <th>Entreprise</th>
                    <th>Cause R&eacute;siliation</th>
                       <th>Date r&eacute;siliation</th>
                         <th>Montant march&eacute;</th>
                                
                </tr>
                </thead>
                <tbody>
               
                       <!-- <input type="text" :value="nombreJourTraitementCalucle"> -->
                  <tr class="odd gradeX" v-for="(marche, index) in 
                afficheMarcheResilier"
                 :key="marche.id">
                 
                 <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{afficherAnneeBudget(marche.marche_id) || 'Non renseigné'}}</td>
                   <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{afficherUniteAdministrative(afficherIdUniteAdministrative(marche.marche_id)) || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.numero_marche || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{afficherObjetMarche(marche.marche_id) || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.varObjetEntreprise.raison_sociale || 'Non renseigné'}}</td>
                    <!-- <td @dblclick="afficherModalModifierTypePrestation(index)">
                  {{marche.afficheEconomique.code || 'Non renseigné'}}- {{marche.afficheEconomique.libelle || 'Non renseigné'}}</td> -->
                     <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.date_resiliation || 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.cause_resiliation || 'Non renseigné'}}</td>
                   <!-- <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.numero_marche || 'Non renseigné'}}</td> -->
                     <td @dblclick="afficherModalModifierTypePrestation(index)" style="text-align: center;">
                   {{formatageSomme(parseFloat(marche.montant_act)) || 'Non renseigné'}}</td>
  
<td>
                     <button 
                      v-if="afficherAttributMarche(marche.marche_id) == 3"  class="btn  btn-info">
                <span >OUI</span>
       
                </button>
                   <!-- <button v-else class="btn  btn-danger">
              
                <span >NON</span>
                </button> -->
                   </td>


                       </tr>  
                      
                </tbody>
              </table>


                        </div>


                        <div id="tab208" class="tab-pane ">
                                <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des Marches Terminés</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search"  v-model="search" />
              </div> -->
            </div>
                          <table class="table table-bordered table-striped">
                <thead>
                 <tr>
                <th>Ann&eacute;e</th>
                 <th title="unite administrative">UA</th>
                      <th>Type marche</th>
                   
                    <th>Activit&eacute;</th>
                    <th>Imputation</th>
                       <th>Objet march&eacute;</th>
                        <th>Reference march&eacute;</th> 
                                    <th>Montant prevue</th>
                                <th>Attribution</th>
                                <th>Action</th>
                </tr>
                </thead>
                <tbody>
                 
                </tbody>
              </table>


                        </div>
                    </div>

<!--   
<div class="modal-footer">
        
        <a data-dismiss="modal" class="btn btn-danger" @click.prevent="" href="#">Voir Tableau</a>
       
      </div> -->
  


















                </div>
            </div>
        </div>

         <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal1" class="modal hide taillModal">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Marché</h3>
      </div>
    <div class="modal-body">
        <table class="table table-bordered table-striped">
         <tr>
            <td>
                  <div class="control-group">
                                <label class="control-label">Année Budgetaire</label>
                                <div class="controls ">
                            
                             <input
                type="text"
              :value="anneeAmort"
                class="span"
               readonly
              />
                                </div>
                                </div>
              </td>
               <td>
                 <div class="control-group">
            <label class="control-label">Refencence marché</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.reference_marche"
                class="span"
                placeholder="Saisir la reference du marché"
              />
            </div>
          </div>
              </td>
             <td colspan="2">
               <div class="control-group">
            <label class="control-label">Objet marché</label>
            <div class="controls">
              <textarea
               
                v-model="formData.objet"
                class="span5" rows="2"
                placeholder="Saisir le text"
              ></textarea>
            </div>
          </div>
              </td>
              
         </tr>
            <tr>
             <td>
               <div class="control-group">
            <label class="control-label" title="unite administrative">UA</label>
            <div class="controls">
            <select v-model="formData.unite_administrative_id" class="span">
               <option v-for="plans in groupUa" 
               :key="plans[0].id" 
               :value="plans[0].afficheUA.id">{{plans[0].afficheUA.libelle}}</option>
           </select>
            </div>
          </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Grand Nature</label>
                  <div class="controls">
                    <select v-model="formData.gdenature_id" :readOnly="deverouGrandNature">
                      <option
                        v-for="gdeNature in groupgranNature"
                        :key="gdeNature[0].id"
                        :value="gdeNature[0].afficheGdeNature.id"
                      >{{gdeNature[0].afficheGdeNature.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
               <td>
              
               <div class="control-group">
                  <label class="control-label">Activite</label>
                  <div class="controls">
                    <select v-model="formData.activite_id" :readOnly="deverouactivite">
                     <option
                        v-for="activite in activiteDynamiques(formData.unite_administrative_id)"
                        :key="activite.id"
                        :value="activite.afficheActivite.id"
                      >{{activite.afficheActivite.code}} - {{activite.afficheActivite.libelle}}</option>
                    </select>
                    
                  </div>
                   
                </div>
              </td>
               <td>
              
               <div class="control-group">
                  <label class="control-label">Classification Economique</label>
                  <div class="controls">
                    <select v-model="formData.economique_id" :readOnly="deveroueconomiq">
                    <option
                        v-for="eco in economiqueDynamiques(formData.unite_administrative_id)"
                        :key="eco.id"
                        :value="eco.afficheEconomique.id"
                      >{{eco.afficheEconomique.code}} - {{eco.afficheEconomique.libelle}}</option>
                    </select>
                  </div>
                   
                </div>
              </td>
               
             
            </tr>
            <tr>
               <td colspan=2>
                 <div class="control-group">
            <label class="control-label">Imputation Budgetaire</label>
            <div class="controls">
              <input
                type="text"
                :value="ImputationBudget"
                class="span5"
                placeholder="Saisir le Imputation"
                readonly
              />
            </div>
          </div>
              </td>
              
              <!-- <td>
                 <div class="control-group">
            <label class="control-label">Montant Imputations</label>
            <div class="controls">
              <input
                type="text"
                :value="MontatantImputationBudget"
                class="span"
                
               readonly
              />
            </div>
          </div>
              </td> -->
                
           
             <td>
              
               <div class="control-group">
            <label class="control-label">Type marché</label>
            <div class="controls">
            <select v-model="formData.type_marche_id" class="span">
               <option v-for="plans in typeMarches" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select>
            </div>
          </div>
              </td>
                <td>
                 <div class="control-group">
            <label class="control-label">Montant prévu</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.montant_marche"
                class="span"
                placeholder="Saisir le montant"
               
              />
            </div>
          </div>
              </td>
            </tr>
            <tr>
               
             
            
             <!-- <td>
               <div class="control-group">
            <label class="control-label">Numero marché</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.numero_marche"
                class="span"
                placeholder="Saisir le libelle_type"
              />
            </div>
          </div>
              </td> -->
               <td colspan="2">
              
               <div class="control-group">
            <label class="control-label">Type de procedure</label>
            <div class="controls">
            <select v-model="formData.typeappel_id" class="span4">
               <option v-for="plans in typeTypeProcedures" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select>
            </div>
          </div>
              </td>

   
             <td colspan="">
              
               <div class="control-group">
            <label class="control-label">procedure passation</label>
            <div class="controls">
           
               <select v-model="formData.procedure_passation_id" class="span" :readOnly="deverouPassation">
               <option v-for="plans in procedurePassationDynamiques(formData.typeappel_id)" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select>
            </div>
          </div>
              </td>

                          <td>
               <div class="control-group">
            <label class="control-label">Livrable</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.livrable"
                class="span"
                placeholder="Saisir le livrable"
              />
            </div>
          </div>
              </td>
            </tr>
          
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterModalTypePrestationLocal"
          class="btn btn-primary"
          href="#"
         
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->


 <!--///////////////////////////////////////// debut modal de modification //////////////////////////////-->

    <div id="modificationModal" class="modal hide taillModal">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier marché</h3>
      </div>
      <div class="modal-body">
       <table class="table table-bordered table-striped">
          <tr>
            <td>
                  <div class="control-group">
                                <label class="control-label">Année Budgetaire</label>
                                <div class="controls ">
                            
                             <input
                type="text"
              :value="anneeAmort"
                class="span"
               readonly
              />
                                </div>
                                </div>
              </td>
               <td>
                 <div class="control-group">
            <label class="control-label">Refencence marché</label>
            <div class="controls">
              <input
                type="text"
                v-model="editMarche.reference_marche"
                class="span"
                placeholder="Saisir le libelle_type"
              />
            </div>
          </div>
              </td>
             <td colspan="2">
               <div class="control-group">
            <label class="control-label">Objet marché</label>
            <div class="controls">
              <textarea
               
                v-model="editMarche.objet"
                class="span5" rows="2"
                placeholder="Saisir le text"
              ></textarea>
            </div>
          </div>
              </td>
              
         </tr>
            <tr>
             <td>
               <div class="control-group">
            <label class="control-label" title="unite administrative">UA</label>
            <div class="controls">
            <select v-model="editMarche.unite_administrative_id" class="span">
               <option v-for="plans in groupUa" 
               :key="plans[0].id" 
               :value="plans[0].afficheUA.id">{{plans[0].afficheUA.libelle}}</option>
           </select>
            </div>
          </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Grand Nature</label>
                  <div class="controls">
                    <select v-model="editMarche.gdenature_id" :readOnly="deverouGrandNature">
                      <option
                        v-for="gdeNature in grandeNatureDynamiques(editMarche.unite_administrative_id)"
                        :key="gdeNature.id"
                        :value="gdeNature.afficheGdeNature.id"
                      >{{gdeNature.afficheGdeNature.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
               <td>
              
               <div class="control-group">
                  <label class="control-label">Activite</label>
                  <div class="controls">
                    <select v-model="editMarche.activite_id" :readOnly="deverouactivite">
                     <option
                        v-for="activite in activiteDynamiques(editMarche.unite_administrative_id)"
                        :key="activite.id"
                        :value="activite.afficheActivite.id"
                      >{{activite.afficheActivite.code}} - {{activite.afficheActivite.libelle}}</option>
                    </select>
                    
                  </div>
                   
                </div>
              </td>
               <td>
              
               <div class="control-group">
                  <label class="control-label">Classification Economique</label>
                  <div class="controls">
                    <select v-model="editMarche.economique_id" :readOnly="deveroueconomiq">
                    <option
                        v-for="eco in economiqueDynamiques(editMarche.unite_administrative_id)"
                        :key="eco.id"
                        :value="eco.afficheEconomique.id"
                      >{{eco.afficheEconomique.code}} - {{eco.afficheEconomique.libelle}}</option>
                    </select>
                  </div>
                   
                </div>
              </td>
               
             
            </tr>
            <tr>
               <td colspan=2>
                 <div class="control-group">
            <label class="control-label">Imputation Budgetaire</label>
            <div class="controls">
              <input
                type="text"
                :value="ImputationBudgetModifier"
                class="span5"
                placeholder="Saisir le Imputation"
                readonly
              />
            </div>
          </div>
              </td>
              
              <!-- <td>
                 <div class="control-group">
            <label class="control-label">Montant Imputations</label>
            <div class="controls">
              <input
                type="text"
                :value="MontatantImputationBudget"
                class="span"
                
               readonly
              />
            </div>
          </div>
              </td> -->
                
           
             <td>
              
               <div class="control-group">
            <label class="control-label">Type marché</label>
            <div class="controls">
            <select v-model="editMarche.type_marche_id" class="span">
               <option v-for="plans in typeMarches" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select>
            </div>
          </div>
              </td>
                <td>
                 <div class="control-group">
            <label class="control-label">Montant prévu</label>
            <div class="controls">
              <input
                type="text"
                v-model="editMarche.montant_marche"
                class="span"
                placeholder="Saisir le libelle_type"
               
              />
            </div>
          </div>
              </td>
            </tr>
            <tr>
               
             
            
             <!-- <td>
               <div class="control-group">
            <label class="control-label">Numero marché</label>
            <div class="controls">
              <input
                type="text"
                v-model="editMarche.numero_marche"
                class="span"
                placeholder="Saisir le libelle_type"
              />
            </div>
          </div>
              </td> -->
               <td colspan="2">
              
               <div class="control-group">
            <label class="control-label">Type de procedure</label>
            <div class="controls">
            <select v-model="editMarche.typeappel_id" class="span4">
               <option v-for="plans in typeTypeProcedures" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select>
            </div>
          </div>
              </td>

             
             <td colspan="">
              
               <div class="control-group">
            <label class="control-label">procedure passation</label>
            <div class="controls">
           
               <select v-model="editMarche.procedure_passation_id" class="span" :readOnly="deverouPassationModi">
               <option v-for="plans in procedurePassationDynamiques(editMarche.typeappel_id)" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select>
            </div>
          </div>
              </td>

                <td>
               <div class="control-group">
            <label class="control-label">Livrable</label>
            <div class="controls">
              <input
                type="text"
                v-model="editMarche.livrable"
                class="span"
                placeholder="Saisir le livrable"
              />
            </div>
          </div>
              </td>
            </tr>
          
            
          
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierModalTypeprestationLocal(editMarche)"
          class="btn btn-primary"
          href="#"
         
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal de modification //////////////////////////////-->

    <fab :actions="fabActions" @cache="afficherModalAjoutTypaPrestation" main-icon="apps" bg-color="green"></fab>
 <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjoutTypaPrestation()">Open</button>
      <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
<!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
<notifications  />
    </div>
</template>

<script>
 import { mapGetters, mapActions } from "vuex";
 import { formatageSomme } from "../../../../src/Repositories/Repository";
export default {
  name:'type facture',
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }

        // {
        //   name: "alertMe",
        //   icon: "add_alert",
        //   class: ""
        // }
      ],
    //   json_fields: {
    //     CODE: "code",
    //     libelle: "libelle"
    //   },

      formData: {
            objet:"",
            livrable:"",
            reference_marche:"",
            montant_marche:"",
                type_marche_id:"",
                unite_administrative_id:"",
                gdenature_id:"",
                activite_id:"",
                typeappel_id:"",
                exo_id:"",
        
      },
      editMarche: {
           objet:"",
           livrable:"",
            reference_marche:"",
            montant_marche:"",
                type_marche_id:"",
                unite_administrative_id:"",
                imputation:"",
                 activite_id:"",
                 exo_id:""
                 
      },
      editActeEffetFinancier:{
cause_resiliation:"",
date_resiliation:""
      },
      indicateur_test:1,
      search: ""
    };
  },

  computed: {
     ...mapGetters("bienService", ['mandats','getMandatPersonnaliserVise','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser','acteEffetFinanciers','montantPlanification','montantContratualisation','afficheContratualisation','affichePlanifier','nombremarchesExecute','afficheMarchePlanifier','afficheMarcheContratualisation','AfficheMarcheAttribue','AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
     "montantMarche", "printMarcheNonAttribue","procedurePassations","typeTypeProcedures","montantComtratualisation"]),

     ...mapGetters("uniteadministrative",['uniteAdministratives',"budgetGeneral",
      "getPersonnaliseBudgetGeneral","groupUa","groupgranNature","getPersonnaliseBudgetGeneralParBienService",
      "montantBudgetGeneral", ]),
       ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
 ...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires']),
   ...mapGetters("gestionMarche", ['entreprises']),


//  afficheIdTypeMarche() {
//     return this.printMarcheNonAttribue.filter(element => element.type_marche.libelle == "Prestations Intellectuelles")
//     },


  
  typePrestationFiltre()  {
     
        const searchTerm = this.search.toLowerCase();

return this.printMarcheNonAttribue.filter((item) => {
  
     return item.objet.toLowerCase().includes(searchTerm) 

   }
)
    },
    afficherAnneeBudget() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.exo_id;
      }
      return 0
        }
      };
    },
afficherTypeMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.type_marche_id;
      }
      return 0
        }
      };
    },
      afficherTypeMarcheLibelle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.typeMarches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    afficherImputationMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.imputation;
      }
      return 0
        }
      };
    },
 afficherReferenceMarche() {
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
     afficherMontantMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.montant_marche;
      }
      return 0
        }
      };
    },
//  afficherObjetMarche() {
//       return id => {
//         if (id != null && id != "") {
//            const qtereel = this.marches.find(qtreel => qtreel.id == id);

//       if (qtereel) {
//         return qtereel.objet;
//       }
//       return 0
//         }
//       };
//     },
    // afficherNumeroMarche() {
    //   return id => {
    //     if (id != null && id != "") {
    //        const qtereel = this.marches.find(qtreel => qtreel.id == id);

    //   if (qtereel) {
    //     return qtereel.numero_marche;
    //   }
    //   return 0
    //     }
    //   };
    // },
// afficherEntreprise() {
//       return id => {
//         if (id != null && id != "") {
//            const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

//       if (qtereel) {
//         return qtereel.raison_sociale;
//       }
//       return 0
//         }
//       };
//     },







 afficherIdUniteAdministrative() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.unite_administrative_id;
      }
      return 0
        }
      };
    },
   
    //  afficherUniteAdministrative() {
    //   return id => {
    //     if (id != null && id != "") {
    //        const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

    //   if (qtereel) {
    //     return qtereel.libelle;
    //   }
    //   return 0
    //     }
    //   };
    // },
     afficherIdactivite() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.activite_id;
      }
      return 0
        }
      };
    },
      
 afficherObjetMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.objet;
      }
      return 0
        }
      };
    },
    afficherNumeroMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_marche;
      }
      return 0
        }
      };
    },
afficherEntreprise() {
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
      afficheractivite() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.afficheNiveauActivite.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
exoEnCours(){
return this.exercices_budgetaires.filter(element => element.encours == 1)
},
anneeAmort() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },


    procedurePassationDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.procedurePassations.filter(
            element => element.type_procedure_id == id
          );
        }
      };
    },
     activiteDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseBudgetGeneralParBienService.filter(
            element => element.ua_id == id
          );
        }
      };
    },
    deverouPassation() {
      return this.formData.typeappel_id == "";
    }, 
     deverouPassationModi() {
      return this.editMarche.typeappel_id == "";
    }, 
    deverouGrandNature() {
      return this.formData.unite_administrative_id == "";
    }, 
    deverouactivite() {
      return this.formData.gdenature_id == "";
    },
     deveroueconomiq() {
      return this.formData.activite_id == "";
    },
     economiqueDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseBudgetGeneralParBienService.filter(
            element => element.ua_id == id
          );
        }
      };
    },

  grandeNatureDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseBudgetGeneralParBienService.filter(
            element => element.ua_id == id
          );
        }
      };
    },










     ImputationBudget() {

      
      const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.afficheEconomique.id == this.formData.economique_id);

      if (norme) {
        return norme.codebudget;
      }
      return 0
    },
     ImputationBudgetModifier() {
      
      const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.afficheEconomique.id == this.editMarche.economique_id);

      if (norme) {
        return norme.codebudget;
      }
      return 0
    },
    nombreJourTraitementCalucle(){
   let date = new Date();
        let aaaa = date.getFullYear();
        let gg = date.getDate();
        let mm = (date.getMonth() + 1);
        let moi;
        let jour;
        if (gg < 10)
        {
            jour = "0" + gg;
        }else{
            jour = gg
        }


        if (mm < 10)
        {
            moi = "0" + mm;
        }else{
            moi=mm;
        }


        let cur_day = aaaa + "-" + moi + "-" + jour;

        return cur_day


        // return cur_day + " " + hours + ":" + minutes + ":" + seconds;
   },
   afficheExercution(){
return this.getActeEffetFinancierPersonnaliser.filter(element => element.date_odre_service <= this.nombreJourTraitementCalucle)
},
afficheMarchExecuter(){
return this.afficheExercution.filter(element => element.indicateur_resilie != 1)
},

afficheParMarcheEnExecution(){
return this.afficheExercution.filter(element => element.indicateur_resilie != 1)
},








afficheMarcheResilier(){
return this.afficheExercution.filter(element => element.indicateur_resilie == 1)
},


afficheNombreMarchExecuter(){
return this.afficheExercution.filter(element => element.indicateur_resilie != 1).length
},


afficheNombreMarcheResilier(){
return this.afficheMarcheResilier.filter(element => element.indicateur_resilie !="").length
},

afficheMarcheEnCoursContratualisation(){
return this.marches.filter(element => element.attribue == 1)
},
afficheMarcheEnPlanification(){
return this.marches.filter(element => element.attribue == 0)
},














//  afficheContrat(){
// return this.getActeEffetFinancierPersonnaliser45.filter(element => element.date_odre_service > this.nombreJourTraitementCalucle)
// },

NombreafficheContrat(){
return this.marches.filter(element => element.attribue == 1).length
},
NombreExecute(){
return this.getActeEffetFinancierPersonnaliser45.filter(element => element.date_odre_service == this.nombreJourTraitementCalucle).length
},
    // ImputationBudgetModif() {
      
    //   const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.economique_id == this.editMarche.Economique);

    //   if (norme) {
    //     return norme.codebudget;
    //   }
    //   return 0
    // },
    MontatantImputationBudget() {
      
      const norme = this.getPersonnaliseBudgetGeneral.find(normeEquipe => normeEquipe.economique_id == this.formData.Economique);

      if (norme) {
        return norme.Dotation_Initiale;
      }
      return 0
    },





sommeMarcheParMandat: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.getMandatPersonnaliserVise.filter(normeEquipe => normeEquipe.marche_id == id).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.total_general)
                        },valInite);
                    }
                }
            },


recupererMontantReel() {
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
comparerMontantReelEtMandat(){
return this.marches.filter(element => {
  if(this.recupererMontantReel(element.id) == this.sommeMarcheParMandat(element.id)){

return element;


}
})

},





// sommeMarcheParMandat: function () {
//                 return id => {
//                     if (id != "") {
//                       let valInite=0;
//                         return  this.getMandatPersonnaliserVise.filter(normeEquipe => normeEquipe.marche_id == id).reduce(function(total,currentVal){
//                            return total + parseFloat(currentVal.total_general)
//                         },valInite);
//                     }
//                 }
//             },


// recupererMontantReel() {
//       return id => {
//         if (id != null && id != "") {
//            const qtereel = this.getActeEffetFinancierPersonnaliser45.find(qtreel => qtreel.marche_id == id);

//       if (qtereel) {
//         return qtereel.montant_act;
//       }
//       return 0
//         }
//       };
//     },
    
// comparerMontantReelEtMandat(){
// return this.getActeEffetFinancierPersonnaliser45.filter(element => {
//   if(this.recupererMontantReel(element.id) == this.sommeMarcheParMandat(element.id)){

// return element;


// }
// else{
//   return ""
// }
// })

// }










  },
  methods: {
    ...mapActions("bienService", ['ajouterMarche','modifierMarche',
    'supprimerMarche','modifierActeEffetFinancier'
     
    ]),
      modifierModalResiliation(){
      var nouvelObjet1 = {
      ...this.editActeEffetFinancier
      // indicateur_resilie :this.indicateur_test,
      //   date_resiliation:this.editActeEffetFinancier.date_resiliation,
      //   	cause_resiliation:this.editActeEffetFinancier.cause_resiliation
       };
     this.modifierActeEffetFinancier(nouvelObjet1)
    //   let marcheObjet=this.marches.find(marche=>marche.id==this.editActeEffetFinancier.marche_id)
    // marcheObjet.attribue = 3
    //   //  this.modifierQuantiteEnStock2(objetPourModifierQuantiteEnStock2)
    //  this.modifierMarche(marcheObjet)

      
      this.$('#exampleModal').modal('hide');
    },
      afficherModalMarcheResilier(index) {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editActeEffetFinancier = this.afficheMarchExecuter[index];
    },
    //afiicher modal ajouter
    afficherModalAjoutTypaPrestation() {
      this.$("#exampleModal1").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterModalTypePrestationLocal(){
      
       var nouvelObjet = {
      ...this.formData,
      imputation :this.ImputationBudget,
      exo_id : this.anneeAmort
       };
this.ajouterMarche(nouvelObjet)
this.formData = {
            objet:"",
            livrable:"",
            reference_marche:"",
            montant_marche:"",
                type_marche_id:"",
                unite_administrative_id:"",
                imputation:"",
                	activite_id:""
}

    },
    formatageSomme:formatageSomme,
    // afficher modal de modification
    afficherModalModifierTypePrestation(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editMarche = this.marches[index];
    },
    // fonction pour vider l'input modification
    modifierModalTypeprestationLocal(){
       var nouvelObjet = {
      ...this.editMarche,
      imputation :this.ImputationBudgetModifier,
      exo_id : this.anneeAmort
       };
      this.modifierMarche(nouvelObjet)
      this.$('#modificationModal').modal('hide');
    },
    
  
    // alert() {
    //   console.log("ok");
    // },
     ExporterEnExel(){
      this.$refs.excel.click()
    }
  }

};
</script>

<style scoped>
.taillModal{
  width: 1080px;
   margin: 0 -25%;
   
}
</style>
