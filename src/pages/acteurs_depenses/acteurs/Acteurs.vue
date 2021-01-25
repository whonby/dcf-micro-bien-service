Type de Recrutement
<template>
    <div id="">
        <notifications />
        <!-- <div class="quick-actions_homepage span12"  >
            <ul class="quick-actions" style="margin: 0px !important;">
                
                <li class="bg_ly">
                    <a href="#">
                        <i class="icon-inbox"></i><span class="label label-important">{{nombreTotalActeurAcredite}}</span> Total acteur accrédité
                    </a>
                </li>
                <li class="bg_lb"> <a href="#"> <i class="icon-th"></i> <span class="label label-important">{{nombretotalActeurNonAccredite}}</span> Total acteur non accrédité</a> </li>
                <li class="bg_ls"> <a href="#"> <i class="icon-fullscreen"></i> <span class="label label-important" v-if="tauxActeurAccredite!='NaN'">{{totalTaux || '0' }} %</span>
                    Taux acteur accrédité
                </a> </li>
            </ul>
        </div> -->

        <div class="container-fluid" style="heigth:100%">

            <hr>
            <div class="row-fluid">
                <div class="span12">
                    <div class="widget-box">
                        <div class="widget-title">
                            <ul class="nav nav-tabs">
                                <li class="active"><a data-toggle="tab" href="#tab10">Liste du personnel </a></li>
                                 <li class=""><a data-toggle="tab" href="#AjouterPersonnelAvecContrat">Ajouter Personnel Avec Contrat </a></li>
                                 <li class=""><a data-toggle="tab" href="#AjouterPersonnelSansContrat">Ajouter Personnel Sans Contrat </a></li>
                                 <!-- <li class=""><a data-toggle="tab" href="#tab78">Contrat de Recrutement Direct </a></li> -->
                                <li class=""><a data-toggle="tab" href="#tab19">Liste des acteurs de dépenses   </a> </li>
                                <li class=""><a data-toggle="tab" href="#tab30">Acteurs non actifs</a></li>
                                  <!-- <li><a data-toggle="tab" href="#tab20002">Contrat Résiliés<span class="badge badge-info" > {{0}}</span></a></li>
                                   <li><a data-toggle="tab" href="#tab301">Contrat Terminés <span class="badge badge" > {{0}}</span></a></li>  -->
                                   
                                  
                            </ul>
                        </div>
                        <div class="widget-content tab-content">
                 <div id="AjouterPersonnelAvecContrat" class="tab-pane">
                           <div class="widget-box">
<AjoutPersonnelAvecContrat></AjoutPersonnelAvecContrat>
                           </div>
                 </div>
                         <div id="AjouterPersonnelSansContrat" class="tab-pane">
                           <div class="widget-box">
<AjoutPersonnelSansContrat></AjoutPersonnelSansContrat>
                           </div>
                 </div>
                         <div id="tab78" class="tab-pane">
                           <div class="widget-box">
                             <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                                        <h5>Liste des contrats</h5>
                                        <div align="right">
                                            Recherche: <input type="text" v-model="search">
                                        </div>
                                    </div>
                             <div class="widget-content nopadding">
                                             <table class="table table-bordered table-striped">
                                               <thead>
                    <tr>

                        <th>Référence Acte </th>
                        <th>Date de Début </th>
                        <th>Date de Fin </th>
                        <th>Durée </th>
                        <th>Autorité d'Approbation </th>
                        <th>Date d'Attribution </th>
                        <th>Montant Acte</th>
                       
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="odd gradeX" v-for=" (effetFinancier,index) in listeActeEffectFinnancier"
                        :key="effetFinancier.id">
                        
                              <td @dblclick="afficherModalModifierRecrutementDrect(index)">
                            {{effetFinancier.reference_act || 'Non renseigné'}}</td>
                            <td @dblclick="afficherModalModifierRecrutementDrect(index)">
                            {{formaterDate(effetFinancier.date_odre_service) || 'Non renseigné'}}</td>
                             <td @dblclick="afficherModalModifierRecrutementDrect(index)">
                            {{formaterDate(effetFinancier.date_fin_exe) || 'Non renseigné'}}</td>
                             <td @dblclick="afficherModalModifierRecrutementDrect(index)">
                            {{effetFinancier.duree || 'Non renseigné'}}</td>
                             <td @dblclick="afficherModalModifierRecrutementDrect(index)">
                            {{effetFinancier.autorite_approbation || 'Non renseigné'}}</td>
                             <td @dblclick="afficherModalModifierRecrutementDrect(index)">
                            {{formaterDate(effetFinancier.date_approbation) || 'Non renseigné'}}</td>
                             <td @dblclick="afficherModalModifierRecrutementDrect(index)">
                            {{formatageSomme(parseFloat(effetFinancier.montant_act ))|| 'Non renseigné'}}</td>
                                               <td >
  <span v-if="effetFinancier.activationD != 1">
   <router-link :to="{ name: 'AjouterPersoRecrutementDirect', params: { id: effetFinancier.id }}" class="btn btn-default " title="Ajouter personnel recrutement direct">
                                                            <span class=""><i class="icon-folder-open"></i></span>
                                                        </router-link>
  </span>
  <span v-else></span>
</td>
                             
<td>
      <div class="btn-group">
                            <button @click.prevent="supprimerActeEffetFinancier(effetFinancier.id)"  class="btn btn-danger " title="Supprimer">
                                <span class=""><i class="icon-trash">Supprimer</i></span>
                            </button>
                        </div>
</td>
                    </tr>
                    </tbody>
                                             </table>
                             </div>
                         </div>
                         </div>
                         
                            <div id="tab10" class="tab-pane active">
                                <div class="widget-box">
                                    <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                                        <h5>Liste du personnel</h5>
                                        <div align="right">
                                            Recherche: <input type="text" v-model="search">
                                        </div>
                                    </div>
                                    <div class="widget-content nopadding">
                                        <table class="table table-bordered table-striped">
                                            <thead>
                                            <tr>
                                                <!-- <th>Situation matrimoniale </th> -->
                                                <th>Matricule </th>
                                                <th>Nom</th>
                                                <th>Prénom</th>
                                                <th>Date de naissance</th>
                                                <th >Unité administrative</th>
                                                
                                                <th >Service</th>
                                                <th >Fonction Administrative</th>
                                                <th >Contrat</th>
                                                <th style="width:10px">Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr class="odd gradeX" v-for="item in acteurActivite" :key="item.id">
  
                                                <td @dblclick="afficherModalModifierTitre(item.id)" >{{item.matricule || 'Non renseigné'}}{{item.id}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)" >{{item.nom || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.prenom || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{formaterDate(item.date_naissance) }}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{afficheAdministrative(item.unite_administrative_id) || 'Non renseigné'}}</td>
                                                
                                                  <td @dblclick="afficherModalModifierTitre(item.id)">{{afficheServiceLibelle(item.service_id)|| 'Non renseigné'}}</td>
                                                   <td @dblclick="afficherModalModifierTitre(item.id)">{{afficheLibelleFonction(item.fonction_id) || 'Non renseigné'}}</td>
                                                
                                                <td>
                     <button 
                     
                      v-if="item.reference_acte != 0"  class="btn  btn-success">
                <span >Oui</span>
       
                </button>
                   <button  @click.prevent="afficherModalModifier(item.id)"
                     
                      v-else  class="btn  btn-danger">
                <span >Non</span>
       
                </button>
                   
                   
                   
                    
              
   
                   </td>
                                                <td>
                                                    <div class="btn-group">
                                                        <router-link :to="{ name: 'ActeurDetail', params: { id: item.id }}" class="btn btn-default ">
                                                            <span class=""><i class="icon-folder-open"></i></span>
                                                        </router-link>

                                                        <button @click.prevent="suprimer(item.id)"  class="btn btn-danger ">
                                                            <span class=""><i class="icon-trash"></i></span></button>

                                                    </div>

                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                                       <div id="tab19" class="tab-pane">
                                <div class="widget-box">
                                    <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                                        <h5>Acteur de dépense en activité</h5>
                                        <!-- <div align="right">
                                            Search: <input type="text" v-model="search">
                                        </div> -->
                                    </div>
                                    <div class="widget-content nopadding">
                                        <table class="table table-bordered table-striped">
                                            <thead>
                                            <tr>
                                              
                                                <th>Matricule </th>
                                                <th>Nom</th>
                                                <th>Prénom</th>
                                                <th>Unité administrative</th>
                                                <th>Fonction budgétaire</th>
                                                <th>Date de début nomination</th>
                                                <th>Date de fin nomination</th>
                                                <!-- <th>Action</th> -->
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr class="odd gradeX" v-for="item in afficheActeNorminationPerso" :key="item.id">
                                                 
                                                <td >{{afficheMatriculePersonnel(item.acteur_depense_id) || 'Non renseigné'}}</td>
                                                <td >{{afficheNomPersonnel(item.acteur_depense_id) || 'Non renseigné'}}</td>
                                                <td >{{affichePrenomsPersonnel(item.acteur_depense_id) || 'Non renseigné'}}</td>
                                                <td >{{afficheUniteAdministrative(item.unite_administrative_id) || 'Non renseigné'}}</td>
                                                 <td >{{afficheFonctionBudgetaire(item.fonction_budgetaire_id) || 'Non renseigné'}}</td>
                                                <td >{{formaterDate(item.date_debut_fonct_budget) }}</td>
                                                <td >{{formaterDate(item.date_fin_fonct_budget) }}</td>
                                               
                                                <td>
                                                    <div class="btn-group">
                                                        <!-- <router-link :to="{ name: 'ActeurDetail', params: { id: item.id }}" class="btn btn-default ">
                                                            <span class=""><i class="icon-folder-open"></i></span>
                                                        </router-link> -->

                                                        <button @click.prevent="suprimer(item.id)"  class="btn btn-danger ">
                                                            <span class=""><i class="icon-trash"></i></span></button> 

                                                    </div>

                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div id="tab30" class="tab-pane">
                                <div class="widget-box">
                                    <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                                        <h5>Acteur de dépense non actif</h5> 
                                        <div align="right">
                                            Recherche: <input type="text" v-model="search1">
                                        </div>
                                    </div>
                                    <div class="widget-content nopadding">
                                        <table class="table table-bordered table-striped">
                                            <thead>
                                            <tr>
                                                <th>Matricule </th>
                                                <th>Nom</th>
                                                <th>Prénom</th>
                                                <th>Date de naissance</th>
                                                <th>Unité administrative</th>
                                                <th>Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr class="odd gradeX" v-for="item in acteurNonActivite" :key="item.id">
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.matricule || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.nom || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.prenom || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{formaterDate(item.date_naissance) }}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.uniteAdmin.libelle || 'Non renseigné'}}</td>
                                                <td>
                                                    <div class="btn-group">
                                                        <router-link :to="{ name: 'ActeurDetail', params: { id: item.id }}" class="btn btn-default ">
                                                            <span class=""><i class="icon-folder-open"></i></span>
                                                        </router-link>

                                                        <button @click.prevent="suprimer(item.id)"  class="btn btn-danger ">
                                                            <span class=""><i class="icon-trash"></i></span></button>

                                                    </div>

                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>





                         

                        

                          

                

                        </div>
                    </div>

                </div>
            </div>
        </div>

        <!-- <fab :actions="fabActions"
             main-icon="apps"
             @cache="afficherModalTypeRecretement"
             bg-color="green"

        ></fab> -->

    

        <div id="modifierModal" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier un fonctions</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">
                    <div class="control-group">
                        <label class="control-label">Code:</label>
                        <div class="controls">
                            <input type="text" v-model="editTitre.code" class="span" placeholder="" />
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Libelle:</label>
                        <div class="controls">
                            <input type="text" v-model="editTitre.libelle" class="span" placeholder="" />
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <a @click.prevent="modifierTitre(editTitre)" class="btn btn-primary"
                   href="#">Modifier</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a> </div>
        </div>


   <div id="exampleModal" class="modal hide tailleModalRecrutement">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Type de Recrutement</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
    <tr>
      <td>
       <div class="control-group">
            <label class="control-label">Type de Recrutement</label>
            <div class="controls">
               <select v-model="formRecrutement.recrutement" class="span5">
                      <option></option>               
                      <option value="1">Recrtement Direct</option> 
                       <option value="2">Recrutement Indirect</option> 
                    </select>
            </div>
          </div>
      </td>
    </tr>
         
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterTypeTexteLocal"
          class="btn btn-primary"
          href="#"
          v-show="formRecrutement.recrutement"
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
  

<div id="ajouterActeEffetFinancierP" class="modal hide grdirModalActeEffet">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter acte effet financier</h3>
            </div>
            <div class="modal-body">

                    <table class="table table-bordered table-striped">
                        <tr>
                                                    <td>
                    <div class="control-group">
                        <label class="control-label">Unite administrative</label>
                        <div class="controls">
                             <!-- <select v-model="formEffetFinancier.unite_administrative_id" class="span4">
                                                            <option></option>
                                                            <option v-for="item in afficherUAParDroitAccess" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select> -->

        <input type="text" v-model="formEffetFinancier.unite_administrative_id"
                                    class="span4"
                                    placeholder="refence acte"
                            />
                        </div>
                    </div>

                            </td>
                          <td colspan="">
                        <div class="control-group">
                        <label class="control-label">Type acte effet financier.</label>
                        <div class="controls">
                          <select v-model="formEffetFinancier.type_act_effet_id" class="span4">
                                <option v-for="varText in AffichierElementParent(affichierIdActeFinancierDansActePlan)" :key="varText.id"
                                        :value="varText.id">{{varText.libelle}}</option>
                            </select>
                        
                        </div>
                    </div>
                            </td>



                           <td>
                    <div class="control-group">
                        <label class="control-label">Reference acte</label>
                        <div class="controls">
                            <input type="text" v-model="formEffetFinancier.reference_act"
                                    class="span4"
                                    placeholder="refence acte"
                            />
                        </div>
                    </div>
                            </td>
                                 
                           
                       
                          
                                   <td colspan="">
                    <div class="control-group">
                        <label class="control-label">Autorité approbatrice</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="formEffetFinancier.autorite_approbation"
                                    class="span4"
                                    placeholder=" "
                            />
                            
                        </div>
                    </div>

                            </td>
                           
                        </tr>

                       
                
                        <tr>
                                                         <td>
                    <div class="control-group">
                        <label class="control-label"> date d'approbation</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="formEffetFinancier.date_approbation"
                                    class="span4"
                                    placeholder=""
                            />
                        </div>
                    </div>

                            </td>
                            <td>
                     <div class="control-group">
                        <label class="control-label">Incidence financière</label>
                        <div class="controls">
                            <select  v-model="formEffetFinancier.incidence_financiere" class="span4">
                               <option value="0">Oui</option>
                               <option value="1">Non</option>
                            </select>
                                    
                                  
                            
                        </div>
                    </div>
                            </td>
                            <td colspan="">

                     <div class="control-group">
                        <label class="control-label">Montant Contrat</label>
                        <div class="controls">
                            <input type="text" v-model="formEffetFinancier.montant_act"
                                    class="span4"
                                    placeholder="Saisir le montant "
                            />
                        </div>
                    </div>
                            </td>
                            <td>

                            <div class="control-group">
                        <label class="control-label" >Date de signature attributaire</label>
                        <div class="controls">
                            <input type="date" v-model="formEffetFinancier.date_attributaire"
                                    class="span4"
                                    placeholder=""
                            />
                        </div>
                    </div>
                            </td>
                        </tr>
                        <tr>

                    
                     <td>
                     <div class="control-group">
                        <label class="control-label">Date ordre de service demarrage</label>
                        <div class="controls">
                            <input type="date" v-model="formEffetFinancier.date_odre_service"
                                    class="span4"
                                    placeholder=""
                            />
                        </div>
                    </div>
                            </td>


                                         <td>
                     <div class="control-group">
                        <label class="control-label" title=" ">Date fin exécution</label>
                        <div class="controls">
                            <input type="date" :min="formEffetFinancier.date_odre_service" :readonly="getDateFinExécutionValue" v-model="formEffetFinancier.date_fin_exe"
                                    class="span4"
                                    placeholder=""
                            />
                        </div>
                    </div>
                            </td>
                        
                        

                                           <td>
                     <div class="control-group">
                        <label class="control-label" title=" ">Durée d'exécution(jrs)</label>
                        <div class="controls">
                            <input type="text"  readonly  :value="nombreDejourCalcule"
                                    class="span4"
                                   
                            />
                        </div>
                    </div>
                            </td>


                                             <td>
                     <div class="control-group">
                        <label class="control-label" title=" ">Date de reception definitive</label>
                        <div class="controls">
                            <input type="date" v-model="formEffetFinancier.date_reception"
                                    class="span4"
                                    placeholder=""
                            />
                            <input type="hidden" v-model="formEffetFinancier.difference_personnel_bienService"/>
                        </div>
                    </div>
                            </td>

                            

                        </tr>
                       
                    </table>  

                   

                
            </div>
            <div class="modal-footer">
                <a  @click.prevent="ajouterModalActeEffetFinancierLocal"
                        class="btn btn-primary"
                        href="#"
                >Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>

            <!-- <div class="modal-footer">
                <a v-if="selectionAttributionMarche(marcheid)" @click.prevent="ajouterModalActeEffetFinancierLocal(selectionAttributionMarche(marcheid).nom_candidat)"
                        class="btn btn-primary"
                        href="#"
                >Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div> -->
        </div>
  <div id="editEffetFinancier" class="modal hide grdirModalActeEffet">                                                                 
         <div class="modal-header">
     <button data-dismiss="modal" class="close" type="button">×</button>            
     <h3>Modifier acte effet financier</h3>                                 
 </div>
 <div class="modal-body">
         <table class="table table-bordered table-striped">
             <tr>
                    <td>
                    <div class="control-group">
                        <label class="control-label">Unite administrative</label>
                        <div class="controls">
                           <select v-model="editEffetFinancier.ua_id" class="span4">
                                                            <option></option>
                                                            <option v-for="item in afficherUAParDroitAccess" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
                        </div>
                    </div>

                            </td>
               <td colspan="">
             <div class="control-group">
             <label class="control-label">Type acte effet financier.</label>
             <div class="controls">
               <select v-model="editEffetFinancier.type_act_effet_id" class="span4">
                     <option v-for="varText in AffichierElementParent(affichierIdActeFinancierDansActePlan)" :key="varText.id"
                             :value="varText.id">{{varText.libelle}}</option>
                 </select>
             
             </div>
         </div>
                 </td>
                <td>
         <div class="control-group">
             <label class="control-label">Reference acte</label>
             <div class="controls">
                 <input type="text" v-model="editEffetFinancier.reference_act"
                         class="span4"
                         placeholder="refence acte"
                 />
             </div>
         </div>
                 </td>
                      
                
            
               
                        <td colspan="">
         <div class="control-group">
             <label class="control-label">Autorité approbatrice</label>
             <div class="controls">
                 <input
                         type="text"
                         v-model="editEffetFinancier.autorite_approbation"
                         class="span4"
                         placeholder=" "
                 />
                 
             </div>
         </div>
                 </td>
                                
             </tr>
            
     
             <tr>
                        <td>
         <div class="control-group">
             <label class="control-label"> date d'approbation</label>
             <div class="controls">
                 <input
                         type="date"
                         v-model="editEffetFinancier.date_approbation"
                         class="span4"
                         placeholder=""
                 />
             </div>
         </div>
                 </td>
                 <td>
          <div class="control-group">
             <label class="control-label">Incidence financière</label>
             <div class="controls">
                 <select  v-model="editEffetFinancier.incidence_financiere" class="span4">
                    <option value="0">Oui</option>
                    <option value="1">Non</option>
                 </select>
                         
                       
                 
             </div>
         </div>
                 </td>
                 <td colspan="">
          <div class="control-group">
             <label class="control-label">Montant Contrat</label>
             <div class="controls">
                 <input type="text" v-model="editEffetFinancier.montant_act"
                         class="span4"
                         placeholder="Saisir le montant "
                 />
             </div>
         </div>
                 </td>
                 <td>
                 <div class="control-group">
             <label class="control-label" >Date de signature attributaire</label>
             <div class="controls">
                 <input type="date" v-model="editEffetFinancier.date_attributaire"
                         class="span4"
                         placeholder=""
                 />
             </div>
         </div>
                 </td>
             </tr>
             <tr>
         
          <td>
          <div class="control-group">
             <label class="control-label">Date ordre de service demarrage</label>
             <div class="controls">
                 <input type="date" v-model="editEffetFinancier.date_odre_service"
                         class="span4"
                         placeholder=""
                 />
             </div>
         </div>
                 </td>
                              <td>
          <div class="control-group">
             <label class="control-label" title=" ">Date fin exécution</label>
             <div class="controls">
                 <input type="date" :min="editEffetFinancier.date_odre_service" :readonly="getDateFinExécutionValue" v-model="editEffetFinancier.date_fin_exe"
                         class="span4"
                         placeholder=""
                 />
             </div>
         </div>
                 </td>
             
             
                                <td>
          <div class="control-group">
             <label class="control-label" title=" ">Durée d'exécution(jrs)</label>
             <div class="controls">
                 <input type="text"  readonly  :value="nombreDejourCalcule"
                         class="span4"
                        
                 />
             </div>
         </div>
                 </td>
                                  <td>
          <div class="control-group">
             <label class="control-label" title=" ">Date de reception definitive</label>
             <div class="controls">
                 <input type="date" v-model="editEffetFinancier.date_reception"
                         class="span4"
                         placeholder=""
                 />
                 <input type="hidden" v-model="editEffetFinancier.difference_personnel_bienService"/>
             </div>
         </div>
                 </td>
                 
             </tr>
            
         </table>  
        
     
 </div>
 
  <div class="modal-footer">
     <a  @click.prevent="afficherModalRecrutementDirect"
             class="btn btn-primary"
             href="#"
     >Valider</a>
     <a data-dismiss="modal" class="btn" href="#">Fermer</a>
 </div>
 
 
 
 
 
 
 
 
</div>

    </div>

</template>

<script>
    import {formatageSomme} from "../../../vuex/modules/guei/Repositories/Repository"
    import {mapGetters, mapActions} from 'vuex';
    import moment from "moment";
    import {admin,dcf,noDCfNoAdmin} from "../../../Repositories/Auth";
    import AjoutPersonnelAvecContrat from "./AjoutPersonnelAvecContrat";
    import AjoutPersonnelSansContrat from "./AjoutPersonnelSansContrat";
    export default {
components:{
    AjoutPersonnelAvecContrat,
    AjoutPersonnelSansContrat
},
        data() {
            return {
                fabActions: [
                    {
                        name: 'cache',
                        icon: 'add'
                    },
                    // {
                    //     name: 'alertMe',
                    //     icon: 'add_alert'
                    // }
                ],
                liste:[],
                search:"",
                search1:"",
                formRecrutement:{
recrutement:""
                },
                  formEffetFinancier:{
              ua_id:"",
             date_reception:"",
             reference_act:"",
            
             incidence_financiere:"",
             montant_act:"",
              date_attributaire:"",
             
             duree:"",
             date_fin_exe:"",
             date_odre_service:"",
             
        autorite_approbation:"",
        date_approbation:"",
            // text_juridique_id:"",
             type_act_effet_id:"",
             
            // entreprise_id:"",
             montant_act_tva:0,
             montant_act_ht:0,
             avance_demarrage_ttc:0,
             avance_demarrage_ht:0,

             
             
             difference_personnel_bienService:"4"
        },

         editEffetFinancier:{
             ua_id:"",
             montant_act_tva:0,
             montant_act_ht:0,
             avance_demarrage_ttc:0,
             avance_demarrage_ht:0,
                   date_reception:"",
        reference_act:"",
       
        incidence_financiere:"",
        montant_act:"",
         date_attributaire:"",
        
        duree:"",
        date_fin_exe:"",
        date_odre_service:"",
        
   autorite_approbation:"",
   date_approbation:"",
       // text_juridique_id:"",
        type_act_effet_id:"",
        
         difference_personnel_bienService:"4"

         },





                formData : {
                    matricule: "",
                    nom: "",
                    prenom: "",
                    sexe: "",
                    numero_cni: "",
                    numero_passeport: "",
                    date_naissance: "",
                    nom_pere: "",
                    nom_mere: "",
                    date_debut_contrat:"",
                    code:"",
                    type_salarie_id:"",
                    type_contrat_id:"",
                    niveau_etude_id:"",
                    acteur_depense_id:"",
                    exercice_budgetaire_id:"",
                    unite_administrative_id:"",
                    salaires:"",
                    type_acte_id:"",
                    grade_id:"",
                    fonction_id:""
                },

               formData1: {
                   date_ouverture_compte:"",
                    signataire_compte:"",
                    nature_compte:"",
                    	agence:"",
                    	situation_geographique_angence:"",
                    	numero_agence:"",
                    telephone_agence:"",
                    //entrepse_id:"",
                        banq_id:"",
                        pays_id:"",
                        ville_id:"",
                        swift:"",
                        iban:"",
                        rib:"",
                        commune_id:"",
                        acteur_depense_id:"",
                        attribue:1
                },
                  acteurDetail:"",

               

                editTitre: {
                    code: "",
                    libelle: ""
                }

            };
        },

        created() {
            this.allActeurDepense();
            this.getActeurFinContratAndActivite()
            this.getListeSalaireActuelAll()
            //    this.getActeur()
            //  console.log(this.fonctions)
            // console.log(this.getFonction)
            this.formData = this.personnaliseActeurDepense.find(
      item => item.id == this.$route.params.id
    );
        },
        computed: {
           admin:admin,
      dcf:dcf,
      noDCfNoAdmin:noDCfNoAdmin,
      ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
            ...mapGetters('personnelUA', ["personnaFonction","afficheNombrePersonnelRecuActeNormination","fonctionBudgetaire","type_salaries","type_contrats","acte_personnels","type_acte_personnels","fonctions","grades","niveau_etudes",
                "nbr_acteur_actredite_taux","all_acteur_depense","personnaliseActeurFinContrat",
                "totalActeurEnctivite","totalActeurDepense","totalActeurAccredite","tauxActeurAccredite","totalActeurNonAccredite","personnaliseActeurDepense","affichePersonnelRecuActeNormination"]),
             ...mapGetters("uniteadministrative", ["fonctionsua","servicesua","directions","uniteZones","uniteAdministratives","getPersonnaliseBudgetGeneralParPersonnel"]),
            ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires"]),
            ...mapGetters("parametreGenerauxBudgetaire", ["plans_budgetaires"]),
 ...mapGetters("SuiviImmobilisation", ["services"]),

...mapGetters("bienService", ["gettersCotationPersonnaliser","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots","villes","communes","pays","modePassations", "procedurePassations","getterDossierCandidats","marches","gettersPersonnaliserRapportJugement",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","selectionner_candidats",
                "getActeEffetFinancierPersonnaliserContrat", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
 ...mapGetters("gestionMarche", [ 'groupeVille','entreprises','banques','comptes','getCompte', 'getEntreptise','getPersonnaliseAgence','agenceBanques']),
   ...mapGetters('parametreGenerauxFonctionnelle', ['structureActe','planActe']),



afficherUAParDroitAccess() {
       // const st = this.search.toLowerCase();
        if (this.noDCfNoAdmin){
            let colect=[];
            this.uniteAdministratives.filter(item=>{
                let val=this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
             return colect;
            
        }

        return this.uniteAdministratives;
        

    },



 NombrePersonnelRecuActeNorm() {
       // const searchTerm = this.search.toLowerCase();


        if (this.noDCfNoAdmin){
            let colect=[];
            this.acte_personnels.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
           
            return colect.filter(items=>items.fonction_budgetaire_id != null).length;
        }

      return this.acte_personnels.filter(items=>items.fonction_budgetaire_id != null).length;
    },








nombreTotalActeurAcredite() {
      


        if (this.noDCfNoAdmin){
            let colect=[];
            this.acte_personnels.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
                
            })
            return colect.filter(acteur_depense=>acteur_depense.type_acte_id=='4' && acteur_depense.date_fin_contrat==null).length;
        }

       return this.acte_personnels.filter(acteur_depense=>acteur_depense.type_acte_id=='4' && acteur_depense.date_fin_contrat==null).length;

    },

totalTaux() {
      const val = ((parseFloat(this.nombreTotalActeurAcredite) /parseFloat(this.totalActeurDepense))*100).toFixed(2);
      return parseFloat(val).toFixed(0);
    },
nombretotalActeurNonAccredite() {
      


        if (this.noDCfNoAdmin){
            let colect=[];
            this.acte_personnels.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
                
            })
            return colect.filter(acteur_depense=>acteur_depense.type_acte_id!='4' && acteur_depense.date_fin_contrat==null ).length;
        }

       return this.acte_personnels.filter(acteur_depense=>acteur_depense.type_acte_id!='4' && acteur_depense.date_fin_contrat==null ).length;

    },





















afficheActeNorminationPerso() {
      


        if (this.noDCfNoAdmin){
            let colect=[];
            this.acte_personnels.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
                
            })
            return colect.filter(items=>items.fonction_budgetaire_id != null && items.sib==0);
        }

       return this.acte_personnels.filter(items=>items.fonction_budgetaire_id != null && items.sib==0);

    },
        //  listeActeEffectFinnancier: function () {
               
        //                 return this.getActeEffetFinancierPersonnaliserContrat.filter(idmarche => idmarche.difference_personnel_bienService == 4)
                 
        //     },
afficheActeFinancierRecrutementD(){
    return this.acteEffetFinanciers.filter(items2=>items2.difference_personnel_bienService == 4);
},
            listeActeEffectFinnancier() {
        if (this.noDCfNoAdmin ){
            let colect=[];
            this.acteEffetFinanciers.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
                
            })
            return colect.filter(items=>items.difference_personnel_bienService == 4);
          }
          return this.acteEffetFinanciers.filter(items=>items.difference_personnel_bienService == 4);
         
    },
            nbreContratRecrutementDirect() {
               
                        return this.listeActeEffectFinnancier.length
                 
            },
 affichierIdActeFinancierDansActePlan() {
      const qtereel = this.planActe.find(
        qtreel => qtreel.code == "02",
       
      );

      if (qtereel) {
        return qtereel.id;
      }
      return 0
    },
    getDateFinExécutionValue(){
    return !this.formEffetFinancier.date_odre_service !=""
},
nombreDejourCalcule(){
                let vM=this;
    const acteAffet = vM.formEffetFinancier
    if(acteAffet.date_odre_service == acteAffet.date_fin_exe &&  acteAffet.date_fin_exe !=="" && acteAffet.date_odre_service !=="") return 1
     if(acteAffet.date_fin_exe =="" && acteAffet.date_odre_service =="") return null

       var dateF = new Date(acteAffet.date_fin_exe).getTime()
        var dateO = new Date(acteAffet.date_odre_service).getTime()
           var resultat = dateF - dateO

             var diffJour =  resultat / (1000 * 3600 * 24)

               if(isNaN(diffJour)) return null

               if(parseFloat(diffJour) < 0 ) return "durée invalide"
    vM.formEffetFinancier.duree=diffJour
                  return  diffJour;
   
},
AffichierElementParent() {
      
      return id => {
        if (id != null && id != "") {
          return this.planActe.filter(element => element.parent == id);
        }
      };
    },
 
 afficheLibelleFonction() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.fonctions.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
  

 afficheAdministrative() {
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



 
 afficheFonctionAdministrative() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.fonctions.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },










    


// afficherMatriculeDynamique(){
//        return id =>{
//            if(id!=null && id!=""){
//              const objet = this.personnaliseActeurDepense.find(item =>item.id==id)
//              if(objet){
//                  return objet.matricule
//              }
//              return 0  
//            }
//        }
//    },



 afficheNumeroActe() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acte_personnels.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.reference_acte;
      }
      return "Non renseigné"
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
 afficheUniteZone() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteZones.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },

            // acteurActivite() {
            //     const searchTerm = this.search.toLowerCase();
            //    // let ObjetModepassation=this.document_pyba_ppm_personnalise.filter((idm)=>idm.exerciceBudgetaire.encours===1);
            //     return this.personnaliseActeurDepense.filter((item) => {
            //             return item.matricule.toLowerCase().includes(searchTerm)
            //             || item.uniteAdmin.libelle.toLowerCase().includes(searchTerm)
            //             || item.prenom.toLowerCase().includes(searchTerm)
            //             || item.nom.toLowerCase().includes(searchTerm)

            //         }
            //     )

            // },
           
  acteurActivite() {
        const searchTerm = this.search.toLowerCase();


        if (this.noDCfNoAdmin){
            let colect=[];
            this.personnaliseActeurDepense.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(items => {
                return (
                    items.matricule.toLowerCase().includes(searchTerm)
                        || items.uniteAdmin.libelle.toLowerCase().includes(searchTerm)
                        || items.prenom.toLowerCase().includes(searchTerm)
                        || items.nom.toLowerCase().includes(searchTerm)
                ) && items.sib==0;
            });
            
        }

        return this.personnaliseActeurDepense.filter(items => {
            return (
                items.matricule.toLowerCase().includes(searchTerm)
                        || items.uniteAdmin.libelle.toLowerCase().includes(searchTerm)
                        || items.prenom.toLowerCase().includes(searchTerm)
                        || items.nom.toLowerCase().includes(searchTerm)
            ) && items.sib==0;
        });

    },

  nombreActeurActivite() {
        const searchTerm = this.search.toLowerCase();


        if (this.noDCfNoAdmin){
            let colect=[];
            this.personnaliseActeurDepense.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(items => {
                return (
                    items.matricule.toLowerCase().includes(searchTerm)
                        || items.uniteAdmin.libelle.toLowerCase().includes(searchTerm)
                        || items.prenom.toLowerCase().includes(searchTerm)
                        || items.nom.toLowerCase().includes(searchTerm)
                );
            }).length;
            
        }

        return this.personnaliseActeurDepense.filter(items => {
            return (
                items.matricule.toLowerCase().includes(searchTerm)
                        || items.uniteAdmin.libelle.toLowerCase().includes(searchTerm)
                        || items.prenom.toLowerCase().includes(searchTerm)
                        || items.nom.toLowerCase().includes(searchTerm)
            );
        }).length;

    },



            // acteurNonActivite() {
            //     const searchTerm = this.search.toLowerCase();
            //     return this.personnaliseActeurFinContrat.filter((item) => {
            //             return item.matricule.toLowerCase().includes(searchTerm)
            //                 || item.uniteAdmin.libelle.toLowerCase().includes(searchTerm)
            //                 || item.prenom.toLowerCase().includes(searchTerm)
            //                 || item.nom.toLowerCase().includes(searchTerm)

            //         }
            //     )

            // },

acteurNonActivite() {
        const searchTerm = this.search.toLowerCase();


        if (this.noDCfNoAdmin){
            let colect=[];
            this.personnaliseActeurFinContrat.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(items => {
                return (
                    items.matricule.toLowerCase().includes(searchTerm)
                            || items.uniteAdmin.libelle.toLowerCase().includes(searchTerm)
                            || items.prenom.toLowerCase().includes(searchTerm)
                            || items.nom.toLowerCase().includes(searchTerm)
                ) && items.sib==0;
            });
        }

        return this.personnaliseActeurFinContrat.filter(items => {
            return (
                items.matricule.toLowerCase().includes(searchTerm)
                            || items.uniteAdmin.libelle.toLowerCase().includes(searchTerm)
                            || items.prenom.toLowerCase().includes(searchTerm)
                            || items.nom.toLowerCase().includes(searchTerm)
            ) && items.sib==0;
        });

    },







            afficheNomPersonnel() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.personnaFonction.find(qtreel => qtreel.acteur_depense.id == id);

      if (qtereel) {
        return qtereel.acteur_depense.nom;
      }
      return 0
        }
      };
    },
 affichePrenomsPersonnel() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.personnaFonction.find(qtreel => qtreel.acteur_depense.id == id);

      if (qtereel) {
        return qtereel.acteur_depense.prenom;
      }
      return 0
        }
      };
    },
    afficheMatriculePersonnel() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.personnaFonction.find(qtreel => qtreel.acteur_depense.id == id);

      if (qtereel) {
        return qtereel.acteur_depense.matricule;
      }
      return 0
        }
      };
    },
      afficheSituationMatrimonial() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.all_acteur_depense.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.situation_matrimonial;
      }
      return 0
        }
      };
    },
    afficheUniteAdministrative() {
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
     afficheFonctionBudgetaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.fonctionBudgetaire.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },

    // afficher le nombre de compte bancaire pour le personnel

         


        },
        methods: {
            // methode pour notre action
            ...mapActions('personnelUA', ['getActeur',"ajouterActeur","supprimerActeurs","getNbrActeurAcrediteTaux","allActeurDepense","getActeurFinContratAndActivite","getListeSalaireActuelAll"]),
          
              ...mapActions('gestionMarche', ["ajouterSanction", "ajouterCompte", "modifierCompte", "supprimerCompte"]),
          ...mapActions('bienService',['supprimerActeEffetFinancier',
          'ajouterActeEffetFinancier','modifierActeEffetFinancier', 'modifierMarche']),

         


              ajouterModalActeEffetFinancierLocal(){
        var nouveauObjet = {
          ...this.formEffetFinancier,
          duree:this.nombreDejourCalcule
        }
        
     
    this.ajouterActeEffetFinancier(nouveauObjet)
   
    this.formEffetFinancier = {
             montant_act_tva:0,
             montant_act_ht:0,
             avance_demarrage_ttc:0,
             avance_demarrage_ht:0,
             
             reference_act:"",
            
             incidence_financiere:"",
             montant_act:"",
              date_attributaire:"",
             date_reception:"",
             duree:"",
             date_fin_exe:"",
             date_odre_service:"",
             
        autorite_approbation:"",
        date_approbation:"",
             
             type_act_effet_id:"",
             
            // entreprise_id:"",
             
             
             difference_personnel_bienService:"4"

    }
    
},






         afficherModalAjouterTitre(){
                this.$router.push({ name: 'AjouterActeur' })
            },
            afficheFormulaireAjoutRecrutement(){

this.$router.push({ name: 'AjouterPersoRecrutementDirect' })
            },
//  afficherModalAjouterPersonnel() {
//       this.$("#exampleModal").modal({
//         backdrop: "static",
//         keyboard: false
//       });
//     },


 

   //afiicher modal ajouter
          


            suprimer(id){
                this.supprimerActeurs(id)
                this.allActeurDepense()
        
        this.getNbrActeurAcrediteTaux();
            },
            // afficherModalModifierTitre(index){

            //     this.$router.push({ path: 'EditActeurDepense', params: { id: index } })

            // },
 afficherModalModifierTitre(id) {

      this.$router.push({
        path: "/edit-acteur-depense/" + id
      });
    },
    afficherModalModifier(id) {

      this.$router.push({
        path: "/Ajouter-Contrat-Personnel/" + id
      });
    },
afficherModalTypeRecretement() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
// ajouterTypeTexteLocal() {
//       if(this.formRecrutement.recrutement==1){
//         this.$("#exampleModal").modal('hide');
       
//        this.$('#ajouterActeEffetFinancierP').modal({
//         backdrop: 'static',
//         keyboard: false
        
//     });
//       }
//       else if(this.formRecrutement.recrutement==2){
//          this.$("#exampleModal").modal('hide');
//         this.$router.push({ name: 'AjouterActeur' })
       
//       }
//     },
    afficherModalModifierTypeTexte(index) {
      this.$("#ajouterActeEffetFinancierP").modal({
        backdrop: "static",
        keyboard: false
      });

     
      this.formEffetFinancier = this.acteurActivite[index];
    },
            formaterDate(date) {
                return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },




           afficherModalModifierRecrutementDrect(index){
             this.$("#editEffetFinancier").modal({
               backdrop:'static',
               keyboard:false
             });

             this.editEffetFinancier = this.listeActeEffectFinnancier[index];
           },

 
          afficherModalRecrutementDirect(){

           var nouvelObjet2 = {
            ...this.editEffetFinancier,
            duree: this.nombreDejourCalculeEdit,
           
            }

         this.modifierActeEffetFinancier(nouvelObjet2)
          this.$('#modifierActeEF').modal('hide');
          },

            formatageSomme:formatageSomme,
        }
    };
</script>

<style scoped>
.taillePersonnel{
  width: 1600px;
  margin: 0 -45%;
  height: 500px;
}

  .tailModal
    {

 width: 1590px;
 margin: 0 -790px;
 height: 500px;

    }
 .tailleModalRecrutement{
   width: 30%;
 }
 .grdirModalActeEffet{
     width: 93%;
 margin: 0 -800px;
 

}
</style>