
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
              <h5> Profil </h5>
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
                        <a data-toggle="tab" href="#tab1">Information utilisateur</a>
                      </li>
                       
                      <li>
                        <a data-toggle="tab" href="#tab2">Modification</a>
                      </li>
                      <!-- <li>
                        <a data-toggle="tab" href="#tab3">Descriptif3</a>
                      </li> -->
                      <!-- <li>
                        <a data-toggle="tab" href="#tab3">Autres Information</a>
                      </li> -->
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                    <div id="tab1" class="tab-pane active">
                      <div class="modal-body">
        <table class="table table-bordered table-striped">
            <!-- <tr> -->
 <!-- <td> -->
                    <!-- <div class="control-group"> -->
                                                    <!-- <label class="control-label">Exercice budgetaire:</label> -->
                                                    <!-- <div class="controls"> -->
<!--                                                         -->
<!--                                                          -->
<!--                                                       -->
                                                        <!-- <input type="text" :value="exoEnCours" readonly class="span12"/> -->
<!--                                                     -->
                                                    <!-- </div> -->
                                                <!-- </div> -->
                <!-- </td> -->
                <!-- <td colspan="2"> -->
                     <!-- <div class="control-group"> -->
                                                    <!-- <label class="control-label">L'unite administrative:</label> -->
                                                    <!-- <div class="controls"> -->
                                                        <!-- <select v-model="formData.unite_administrative_id" class="span12"> -->
                                                            <!-- <option></option> -->
                                                            <!-- <option v-for="item in uniteAdmin" :key="item.id" :value="item.id"> -->
                                                                <!-- {{item.libelle}} -->
                                                            <!-- </option> -->

                                                        <!-- </select> -->
                                                    <!-- </div> -->
                                                <!-- </div> -->
                <!-- </td> -->
                <!-- <td colspan="2"> -->
                     <!-- <div class="control-group"> -->
                                                    <!-- <label class="control-label">Marché</label> -->
                                                    <!-- <div class="controls"> -->
                                                        <!-- <select v-model="formData.marche_id" class="span12"> -->
                                                            <!-- <option></option> -->
                                                            <!-- <option v-for="item in recupererMarcheUA(formData.unite_administrative_id)" :key="item.id" :value="item.id"> -->
                                                                <!-- {{item.objet}} -->
                                                            <!-- </option> -->

                                                        <!-- </select> -->
                                                    <!-- </div> -->
                                                <!-- </div> -->
                <!-- </td> -->
<!--                  -->
<!--                        -->
<!--                  -->
<!--                 -->
<!--                -->
<!--                  -->
            <!-- </tr> -->
            <tr>
              
              
              
              
                <td>
        <div class="control-group">
                                       <label class="control-label">Matricule</label>
                                       <div class="controls">
                                           <input type="text" v-model="formData.matricule"  placeholder="Saisir le matricule" class="span12"/>
                                       </div>
                                   </div>
   </td>
              
              
                       
                                                      
                                                                                                                                                                                     
              
              
                
               
           
           
                   <td>
                     <div class="control-group">
                                                    <label class="control-label">Nom et Prenom:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="formData.nom_prenom"  placeholder="Saisir nom et prenom" class="span12"/>
                                                    </div>
                                                </div>
                </td>
             </tr>
            <tr>
              <td>
                     <div class="control-group">
                                                    <label class="control-label">E-mail:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="formData.email"  placeholder="Saisir Email" class="span12"/>
                                                    </div>
                                                </div>
                </td>
          
          
                <td>
                    <div class="control-group">
                                                    <label class="control-label">Rôle:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="formData.role"  placeholder="Saisir le rôle" class="span12"/>
                                                    </div>
                                                </div>
                </td>
               
                
                        
            </tr>
            <tr>
               <td colspan="2">
                     <div class="control-group">
                                                    <label class="control-label">Mot de passe:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="formData.mot_passe"  placeholder="Saisir mot de passe" class="span12"/>
                                                    </div>
                                                </div>
                </td>
                </tr> 
               <!-- <td> -->
                     <!-- <div class="control-group"> -->
                                                    <!-- <label class="control-label">Nom de la mere:</label> -->
                                                    <!-- <div class="controls"> -->
                                                        <!-- <input type="text" v-model="formData.nom_mere"  placeholder="Saisir le nom de la mere" class="span12"/> -->
                                                    <!-- </div> -->
                                                <!-- </div> -->
                <!-- </td> -->
                <!-- <td> -->
                     <!-- <div class="control-group"> -->
                                                    <!-- <label class="control-label">Situation matrimoniale</label> -->
                                                    <!-- <div class="controls"> -->
                                                        <!-- <select v-model="formData.situation_matrimonial" class="span12" > -->
<!--                                                             -->
<!--                                                             -->
                                                            <!-- <option v-for="situation in situation_matrimonial" :key="situation.id" :value="situation.id">{{situation.libelle}}</option> -->
<!--                                                             -->
                                                        <!-- </select> -->
                                                    <!-- </div> -->
                                                <!-- </div> -->
                <!-- </td> -->
            <!-- </tr> -->
            </table>
          </div>
          
                    </div>
                    <!--ongle descriptif-->
                    <div id="tab2" class="tab-pane">
                      
  <div class="modal-body">
        <table class="table table-bordered table-striped">
            <!-- <tr> -->
                           <!-- <td> -->
                     <!-- <div class="control-group"> -->
                                                    <!-- <label class="control-label">Unite de Zone</label> -->
                                                    <!-- <div class="controls"> -->
                                                        <!-- <select v-model="formData.uniteZone_id" :disabled="verrouilleUniteZone" class="span12"> -->
                                                            <!-- <option></option> -->
                                                            <!-- <option v-for="item in afficheUniteZone(formData.unite_administrative_id)" :key="item.id" :value="item.id"> -->
                                                                <!-- {{item.libelle}} -->
                                                            <!-- </option> -->
<!--  -->
                                                        <!-- </select> -->
                                                    <!-- </div> -->
                                                <!-- </div> -->
                <!-- </td> -->
<!--                 -->
                <!-- <td> -->
                     <!-- <div class="control-group"> -->
                                                    <!-- <label class="control-label">Service</label> -->
                                                    <!-- <div class="controls"> -->
                                                        <!-- <select v-model="formData.service_id" :disabled="verrouilleService" class="span12"> -->
                                                            <!-- <option></option> -->
                                                            <!-- <option v-for="item in afficheService(formData.unite_administrative_id)" :key="item.id" :value="item.id"> -->
                                                                <!-- {{afficheServicelibelle(item.serviceua_id)}} -->
                                                            <!-- </option> -->
<!--  -->
                                                        <!-- </select> -->
                                                    <!-- </div> -->
                                                <!-- </div> -->
                <!-- </td> -->
                <!-- <td> -->
                     <!-- <div class="control-group"> -->
                                                    <!-- <label class="control-label">Fonctions{{nombreDeFonction(formData.fonction_id)}}</label> -->
                                                    <!-- <div class="controls"> -->
                                                        <!-- <select v-model="formData.fonction_id" :disabled="verrouilleFonction" class="span12"> -->
                                                            <!-- <option></option> -->
                                                            <!-- <option v-for="item in afficheFonction(formData.service_id)" :key="item.id" :value="item.fonction_id"> -->
                                                                <!-- {{afficheLibelleFonction(item.fonction_id)}} -->
                                                            <!-- </option> -->
<!--  -->
                                                        <!-- </select> -->
                                                        <!-- <input type="hidden" :value="nombreDeFonction(formData.fonction_id)" readonly class="span12"/> -->
                                                    <!-- </div> -->
                                                <!-- </div> -->
                <!-- </td> -->
                <!-- <td> -->
<!--                       -->
                                                <!-- <div class="control-group"> -->
                                                    <!-- <label class="control-label">Grades</label> -->
                                                    <!-- <div class="controls"> -->
<!--  -->
<!--                                                          -->
                                                         <!-- <input type="text" :value="afficheLibelle(afficheGrade(formData.fonction_id))" readonly class="span12"/> -->
                                                    <!-- </div> -->
                                                <!-- </div> -->
                <!-- </td> -->
            <!-- </tr> -->
            <!-- <tr> -->
<!--                  -->
<!--                -->
                <!-- <td> -->
                     <!-- <div class="control-group"> -->
                                                    <!-- <label class="control-label">Type contrat</label> -->
                                                    <!-- <div class="controls"> -->
                                                        <!-- <select v-model="formData.type_contrat_id" class="span12"> -->
                                                            <!-- <option></option> -->
                                                            <!-- <option v-for="item in type_contrats" :key="item.id" :value="item.id"> -->
                                                                <!-- {{item.libelle}} -->
                                                            <!-- </option> -->

                                                        <!-- </select> -->
                                                    <!-- </div> -->
                                                <!-- </div> -->
                <!-- </td> -->
                <!-- <td> -->
                      <!-- <div class="control-group"> -->
                                                    <!-- <label class="control-label">Date debut contrat:</label> -->
                                                    <!-- <div class="controls"> -->
                                                        <!-- <input type="date" v-model="formData.date_debut_contrat"  placeholder="" class="span12"/> -->
                                                    <!-- </div> -->
                                                <!-- </div> -->
                <!-- </td> -->
    <!-- <td> -->
                     <!-- <div class="control-group"> -->
                                                    <!-- <label class="control-label">Type niveau etude</label> -->
                                                    <!-- <div class="controls"> -->
                                                        <!-- <select v-model="formData.niveau_etude_id" class="span12"> -->
                                                            <!-- <option></option> -->
                                                            <!-- <option v-for="item in niveau_etudes" :key="item.id" :value="item.id"> -->
                                                                <!-- {{item.libelle}} -->
                                                            <!-- </option> -->

                                                        <!-- </select> -->
                                                    <!-- </div> -->
                                                <!-- </div> -->
                <!-- </td> -->
                             <!-- <td> -->
                     <!-- <div class="control-group"> -->
                                                    <!-- <label class="control-label">Type salarie</label> -->
                                                    <!-- <div class="controls"> -->
                                                        <!-- <select v-model="formData.type_salarie_id" class="span12"> -->
                                                            <!-- <option></option> -->
                                                            <!-- <option v-for="item in type_salaries" :key="item.id" :value="item.id"> -->
                                                                <!-- {{item.libelle}} -->
                                                            <!-- </option> -->
                                                        <!-- </select> -->
                                                    <!-- </div> -->
                                                <!-- </div> -->
                <!-- </td> -->
            <!-- </tr> -->

              <tr>
           
           
           
           
             <td>
     <div class="control-group">
                                    <label class="control-label">Matricule</label>
                                    <div class="controls">
                                        <input type="text" v-model="formData.matricule"  placeholder="Saisir le matricule" class="span12"/>
                                    </div>
                                </div>
</td>
           
           
                    
                                                   
                                                                                                                                                                                  
           
           
             
            
        
        
                <td>
                  <div class="control-group">
                                                 <label class="control-label">Nom et Prenom:</label>
                                                 <div class="controls">
                                                     <input type="text" v-model="formData.nom_prenom"  placeholder="Saisir nom et prenom" class="span12"/>
                                                 </div>
                                             </div>
             </td>
          </tr>
         <tr>
           <td>
                  <div class="control-group">
                                                 <label class="control-label">E-mail:</label>
                                                 <div class="controls">
                                                     <input type="text" v-model="formData.email"  placeholder="Saisir Email" class="span12"/>
                                                 </div>
                                             </div>
             </td>
       
       
             <td>
                 <div class="control-group">
                                                 <label class="control-label">Rôle:</label>
                                                 <div class="controls">
                                                     <input type="text" v-model="formData.role"  placeholder="Saisir le rôle" class="span12"/>
                                                 </div>
                                             </div>
             </td>
            
             
                     
         </tr>
         <tr>
            <td colspan="2">
                  <div class="control-group">
                                                 <label class="control-label">Ancien mot de passe:</label>
                                                 <div class="controls">
                                                     <input type="text" v-model="formData.mot_passe"  placeholder="Saisir mot de passe" class="span12"/>
                                                 </div>
                                             </div>
             </td>
             </tr> 



            <tr>
               
              <td colspan="2">
                <div class="control-group">
                                                    <label class="control-label">Nouveau mot de passe:</label>
                                                    <div class="controls">
                                                         <input type="text" v-model="formData.mot_passe"  placeholder="Saisir mot de passe" class="span12"/>
                                    </div>

                                                </div>
              </td>
                
                    

            </tr>
             <tr>
    
   <td colspan="2">
     <div class="control-group">
                                         <label class="control-label">Confirmer nouveau mot de passe:</label>
                                         <div class="controls">
                                              <input type="text" v-model="formData.mot_passe"  placeholder="Saisir mot de passe" class="span12"/>
                         </div>
                                     </div>
   </td>
     
         
 </tr>
        </table>
  </div>
                    </div>
                     <!-- <div id="tab3" class="tab-pane">
                      

                    </div> -->
                    <!--ongle 3 -->
                    <!-- <div id="tab3" class="tab-pane">
                    
                      
                    </div> -->
                  </div>
                  <br />
                  <div align="right">
                    <div class="controls">
                      <div data-toggle="buttons-checkbox" class="btn-group">
                        <!-- <a -->
                          <!-- class="btn btn-primary" -->
                          <!-- @click.prevent="ajouterTitreLocal" -->
                        <!-- >Valider</a> -->
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
      <notifications/>
    </div>

</template>
