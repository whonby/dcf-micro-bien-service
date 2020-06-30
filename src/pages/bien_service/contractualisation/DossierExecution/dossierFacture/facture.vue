detail_marche
Objet facture
<template>

<div>

   <div id="modalTypeEngagement" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Choisir le type de procedure</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
         
                    <tr>
                      <td>
<div class="control-group">
                            <label class="control-label">Type de procedure</label>
                            <div class="controls">
                             
                              <select v-model="formData.tprocedure" class="span12">
                             
                                 <option value= 1>Engagement Direct</option>
                               <option value= 2>Engagement Bon de Commande</option>
                               
                              </select>
                           
                            </div>
                          </div>
                      </td>
                      </tr>     
                            
                         
         
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterChoixProcLocal"
          class="btn btn-primary"
          href="#"
         
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="modatFactureModifier" class="modal hide taillemodal45">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier  Facture</h3>
      </div>
      <div class="modal-body">
       <table class="table table-bordered table-striped tailfacture">
         
          <tr>
              <td>
              
              <div class="control-group">
                <label class="control-label">Type facture</label>
                <div class="controls">
                  <select v-model="formData1.typfacture_id" class="span" >
                    
                     <option
                        v-for="typeFact in typeFactures"
                        :key="typeFact.id"
                        :value="typeFact.id"
                      >{{typeFact.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>
              <td>
              <div class="control-group">
                <label class="control-label">Numero facture</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formData1.numero_facture"
                    class="span"
                    
                  />
                </div>
              </div>
               </td>
               <td>
              <div class="control-group">
                <label class="control-label">Date de la facture</label>
                <div class="controls">
                  <input
                    type="date"
                    v-model="formData1.date_facture"
                   
                    class="span"
                   
                  />
                </div>
              </div>
             
            </td>
             <td>
              
              <div class="control-group">
                <label class="control-label">Unite administrative</label>
                <div class="controls">
                 <input
                    type="text"
                    :value="macheid"
                   readonly
                    class="span"
                   
                  />
                </div>
              </div>
            </td>
             
             
            
            

          </tr>
           <tr>
               <td colspan="2"> 
              <div class="control-group">
                <label class="control-label">Objet facture</label>
                <div class="controls">
                 
                 <input
                    type="text"
                    
                 :value="afficheObjetMarche(macheid)"
                    class="span"
                    readonly
                  />
                </div>
              </div>
               </td>
               <td>
              <div class="control-group">
                <label class="control-label">Fournisseur</label>
                <div class="controls">
                  <input
                    type="text"
                    
                 :value="afficheNomFournisseur(AfficherFournisseur_id)"
                    class="span"
                    readonly
                  />
                  
                </div>
              </div>
            </td>
               <td>
              
              <div class="control-group">
                <label class="control-label">exonéré</label>
                <div class="controls">
                  <select v-model="formData1.exonere" class="span">
                  
                    <option value="0">Oui</option>
                     <option value="1">Non</option>
                  </select>
                 <!-- <input
                    type="hidden"
                    
                v-model="formData1.exonere"
                    class="span"
                    readonly
                  /> -->
                </div>
              </div>
            </td>           
          </tr>
          <tr  class="odd gradeX">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire"
                    class="span"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                  
                 :value="montantHT1"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup2()" >
                        <span>
                          <i class=" icon-plus"></i>
                        </span>
                      </button>
                       <!-- <button class="btn btn-danger"  v-on:click="showPopup20()" >
                        <span>
                          <i class=" icon-remove"></i>
                        </span>
                      </button> -->
                </div>
              </div>
            </td>
                  
          </tr>
        <!-- 2 ligne -->
         <tr  class="odd gradeX" v-show="popupState2">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation2"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire2"
                    class="span"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                   
                       v-model="formData1.quantite2"
                 
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  :value="montantHT2"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup3()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState3">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation3"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire3"
                    class="span"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite3"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  :value="montantHT3"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup4()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState4">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation4"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire4"
                    class="span"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite4"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                 :value="montantHT4"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup5()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState5">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation5"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire5"
                    class="span"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite5"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                 :value="montantHT5"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup6()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState6">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation6"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire6"
                    class="span"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite6"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  :value="montantHT6"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup7()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState7">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation7"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire7"
                    class="span"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite7"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                 :value="montantHT7"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup8()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState8">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation8"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire8"
                    class="span"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite8"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                 :value="montantHT8"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup9()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState9">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation9"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire9"
                    class="span"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite9"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  :value="montantHT9"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup10()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState10">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation10"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire10"
                    class="span"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite10"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                   :value="montantHT10"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup10()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
          <tr  class="odd gradeX" >
            <td colspan="3">
              <div class="control-group">
                <label class="control-label" style="text-align:right;color:red">Montant HT</label>
               
              </div>
            </td>
            <td>
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="number"
                    
                :value="totalMontantHT"
                    class="span"
                   readonly
                  />
                </div>
              </div>
            </td>
            
            
                  
          </tr>
          <tr  class="odd gradeX" >
            <td colspan="3">
              <div class="control-group">
                <label class="control-label" style="text-align:right;color:red">Taux</label>
               
              </div>
            </td>
            <td>
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="number"
                    
              :value="afficherEnorere"
                    class="span"
                   readonly
                  />
                  
                   <input
                    type="hidden"
                    :value="afficherEnorere2"
                   
                    class="span"
                   
                  />
                </div>
              </div>
            </td>
            
            
                  
          </tr>
          <tr  class="odd gradeX" >
            <td colspan="3">
              <div class="control-group">
                <label class="control-label" style="text-align:right;color:red">TVA</label>
               
              </div>
            </td>
            <td>
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="number"
                    
              :value="montantTva"
                    class="span"
                   readonly
                  />
                  
                </div>
              </div>
            </td>
            
            
                  
          </tr>
         
          <tr  class="odd gradeX" >
            <td colspan="3">
              <div class="control-group">
                <label class="control-label" style="text-align:right;color:red">Montant TTC</label>
               
              </div>
            </td>
            <td>
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="number"
                    
              :value="montantHTt"
                    class="span"
                   readonly
                  />
                
                </div>
              </div>
            </td>
            
            
                  
          </tr>
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ModifierFactureLocal(formData1)"
          class="btn btn-primary"
          href="#"
           
        >Modifier</a> 
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>

    
     <div id="modatFactureAjouter" class="modal hide taillemodal45">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Facture</h3>
      </div>
      <div class="modal-body" >
        <table class="table table-bordered table-striped ">
         
          <tr>
              <td>
              
              <div class="control-group">
                <label class="control-label">Type facture</label>
                <div class="controls">
                  <select v-model="formData1.typfacture_id" class="span" >
                    
                     <option
                        v-for="typeFact in afficherTypeFactureDefinitive"
                        :key="typeFact.id"
                        :value="typeFact.id"
                      >{{typeFact.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>
              <td>
              <div class="control-group">
                <label class="control-label">Numero facture</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formData1.numero_facture"
                    class="span"
                    
                  />
                </div>
              </div>
               </td>
               <td>
              <div class="control-group">
                <label class="control-label">Date de la facture</label>
                <div class="controls">
                  <input
                    type="date"
                    v-model="formData1.date_facture"
                   
                    class="span"
                   
                  />
                </div>
              </div>
             
            </td>
             <td>
              
              <div class="control-group">
                <label class="control-label">Unite administrative</label>
                <div class="controls">
                 <input
                    type="text"

                    :value="afficheLibelleUa(afficheUa_id(macheid))"
                   readonly
                    class="span"
                   
                  />
                </div>
              </div>
            </td>
             
             
            
            

          </tr>
           <tr>
               <td colspan="2"> 
              <div class="control-group">
                <label class="control-label">Objet facture</label>
                <!-- <div class="controls">
                 
                  <textarea rows="1"  class="span4">

                  </textarea>
                </div> -->
                <input
                    type="text"
                    
                 :value="afficheObjetMarche(macheid)"
                    class="span"
                    readonly
                  />
              </div>
               </td>
               <td>
              <div class="control-group">
                <label class="control-label">Fournisseur</label>
                <div class="controls">
                  <input
                    type="text"
                    
                 :value="afficheNomFournisseur(AfficherFournisseur_id)"
                    class="span"
                    readonly
                  />
                </div>
              </div>
            </td>
               <td>
              
              <div class="control-group">
                <label class="control-label">exonéré</label>
                <div class="controls">
                  <select v-model="formData1.exonere" class="span">
                  
                    <option value="0">Oui</option>
                     <option value="1">Non</option>
                  </select>
                 <input
                    type="hidden"
                    
                v-model="formData1.exonere"
                    class="span"
                    readonly
                  />
                </div>
              </div>
            </td>           
          </tr>
          <tr  class="odd gradeX">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire"
                    class="span"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                  
                 :value="montantHT1"
                    class="span5"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup2()" >
                        <span>
                          <i class=" icon-plus"></i>
                        </span>
                      </button>
                       <!-- <button class="btn btn-danger"  v-on:click="showPopup20()" >
                        <span>
                          <i class=" icon-remove"></i>
                        </span>
                      </button> -->
                </div>
              </div>
            </td>
                  
          </tr>
        <!-- 2 ligne -->
         <tr  class="odd gradeX" v-show="popupState2">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation2"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire2"
                    class="span"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                   
                       v-model="formData1.quantite2"
                 
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  :value="montantHT2"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup3()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState3">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation3"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire3"
                    class="span"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite3"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  :value="montantHT3"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup4()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState4">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation4"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire4"
                    class="span"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite4"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                 :value="montantHT4"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup5()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState5">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation5"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire5"
                    class="span"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite5"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                 :value="montantHT5"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup6()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState6">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation6"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire6"
                    class="span"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite6"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  :value="montantHT6"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup7()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState7">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation7"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire7"
                    class="span"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite7"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                 :value="montantHT7"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup8()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState8">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation8"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire8"
                    class="span"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite8"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                 :value="montantHT8"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup9()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState9">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation9"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire9"
                    class="span"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite9"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  :value="montantHT9"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup10()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState10">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation10"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire10"
                    class="span"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite10"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                   :value="montantHT10"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup10()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
          <tr  class="odd gradeX" >
            <td colspan="3">
              <div class="control-group">
                <label class="control-label" style="text-align:right;color:red">Montant HT</label>
               
              </div>
            </td>
            <td>
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="number"
                    
                :value="totalMontantHT"
                    class="span"
                   readonly
                  />
                </div>
              </div>
            </td>
            
            
                  
          </tr>
          <tr  class="odd gradeX" >
            <td colspan="3">
              <div class="control-group">
                <label class="control-label" style="text-align:right;color:red">Taux</label>
               
              </div>
            </td>
            <td>
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="number"
                    
              :value="afficherEnorere"
                    class="span"
                   readonly
                  />
                  
                   <input
                    type="hidden"
                    :value="afficherEnorere2"
                   
                    class="span"
                   
                  />
                </div>
              </div>
            </td>
            
            
                  
          </tr>
          <tr  class="odd gradeX" >
            <td colspan="3">
              <div class="control-group">
                <label class="control-label" style="text-align:right;color:red">TVA</label>
               
              </div>
            </td>
            <td>
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="number"
                    
              :value="montantTva"
                    class="span"
                   readonly
                  />
                  
                </div>
              </div>
            </td>
            
            
                  
          </tr>
         
          <tr  class="odd gradeX" >
            <td colspan="3">
              <div class="control-group">
                <label class="control-label" style="text-align:right;color:red">Montant TTC</label>
               
              </div>
            </td>
            <td>
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="number"
                    
              :value="montantHTt"
                    class="span"
                   readonly
                  />
                
                </div>
              </div>
            </td>
            
            
                  
          </tr>
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterFactureLocal(formData1)"
          class="btn btn-primary"
          href="#"
           
        >Valider</a> 
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
 
  <div id="modalFactureAjouterProforma" class="modal hide taillemodal45">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Facture</h3>
      </div>
      <div class="modal-body" >
        <table class="table table-bordered table-striped ">
         
          <tr>
              <td>
              
              <div class="control-group">
                <label class="control-label">Type facture</label>
                <div class="controls">
                  <select v-model="formData1.typfacture_id" class="span" >
                    
                     <option
                        v-for="typeFact in afficherTypeFactureProforma"
                        :key="typeFact.id"
                        :value="typeFact.id"
                      >{{typeFact.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>
              <td>
              <div class="control-group">
                <label class="control-label">Numero facture</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formData1.numero_facture"
                    class="span"
                    
                  />
                </div>
              </div>
               </td>
               <td>
              <div class="control-group">
                <label class="control-label">Date de la facture</label>
                <div class="controls">
                  <input
                    type="date"
                    v-model="formData1.date_facture"
                   
                    class="span"
                   
                  />
                </div>
              </div>
             
            </td>
             <td>
              
              <div class="control-group">
                <label class="control-label">Unite administrative</label>
                <div class="controls">
                 <input
                    type="text"

                    :value="afficheLibelleUa(afficheUa_id(macheid))"
                   readonly
                    class="span"
                   
                  />
                </div>
              </div>
            </td>
             
             
            
            

          </tr>
           <tr>
               <td colspan="2"> 
              <div class="control-group">
                <label class="control-label">Objet facture</label>
                <div class="controls">
                  
                  <!-- <textarea rows="1"  class="span4">

                  </textarea> -->
                  <input
                    type="text"
                    
                 :value="afficheObjetMarche(macheid)"
                    class="span"
                    readonly
                  />
                </div>
              </div>
               </td>
               <td>
              <div class="control-group">
                <label class="control-label">Fournisseur</label>
                <div class="controls">
                  <input
                    type="text"
                    
                 :value="afficheNomFournisseur(AfficherFournisseur_id)"
                    class="span"
                    readonly
                  />
                </div>
              </div>
            </td>
               <td>
              
              <div class="control-group">
                <label class="control-label">exonéré</label>
                <div class="controls">
                  <select v-model="formData1.exonere" class="span">
                  
                    <option value="0">Oui</option>
                     <option value="1">Non</option>
                  </select>
                 <input
                    type="hidden"
                    
                v-model="formData1.exonere"
                    class="span"
                    readonly
                  />
                </div>
              </div>
            </td>           
          </tr>
          <tr  class="odd gradeX">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire"
                    class="span"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                  
                 :value="montantHT1"
                    class="span5"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup2()" >
                        <span>
                          <i class=" icon-plus"></i>
                        </span>
                      </button>
                       <!-- <button class="btn btn-danger"  v-on:click="showPopup20()" >
                        <span>
                          <i class=" icon-remove"></i>
                        </span>
                      </button> -->
                </div>
              </div>
            </td>
                  
          </tr>
        <!-- 2 ligne -->
         <tr  class="odd gradeX" v-show="popupState2">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation2"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire2"
                    class="span"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                   
                       v-model="formData1.quantite2"
                 
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  :value="montantHT2"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup3()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState3">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation3"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire3"
                    class="span"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite3"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  :value="montantHT3"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup4()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState4">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation4"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire4"
                    class="span"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite4"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                 :value="montantHT4"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup5()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState5">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation5"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire5"
                    class="span"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite5"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                 :value="montantHT5"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup6()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState6">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation6"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire6"
                    class="span"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite6"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  :value="montantHT6"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup7()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState7">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation7"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire7"
                    class="span"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite7"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                 :value="montantHT7"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup8()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState8">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation8"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire8"
                    class="span"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite8"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                 :value="montantHT8"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup9()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState9">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation9"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire9"
                    class="span"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite9"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  :value="montantHT9"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup10()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState10">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation10"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire10"
                    class="span"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite10"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                   :value="montantHT10"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup10()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
          <tr  class="odd gradeX" >
            <td colspan="3">
              <div class="control-group">
                <label class="control-label" style="text-align:right;color:red">Montant HT</label>
               
              </div>
            </td>
            <td>
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="number"
                    
                :value="totalMontantHT"
                    class="span"
                   readonly
                  />
                </div>
              </div>
            </td>
            
            
                  
          </tr>
          <tr  class="odd gradeX" >
            <td colspan="3">
              <div class="control-group">
                <label class="control-label" style="text-align:right;color:red">Taux</label>
               
              </div>
            </td>
            <td>
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="number"
                    
              :value="afficherEnorere"
                    class="span"
                   readonly
                  />
                  
                   <input
                    type="hidden"
                    :value="afficherEnorere2"
                   
                    class="span"
                   
                  />
                </div>
              </div>
            </td>
            
            
                  
          </tr>
          <tr  class="odd gradeX" >
            <td colspan="3">
              <div class="control-group">
                <label class="control-label" style="text-align:right;color:red">TVA</label>
               
              </div>
            </td>
            <td>
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="number"
                    
              :value="montantTva"
                    class="span"
                   readonly
                  />
                  
                </div>
              </div>
            </td>
            
            
                  
          </tr>
         
          <tr  class="odd gradeX" >
            <td colspan="3">
              <div class="control-group">
                <label class="control-label" style="text-align:right;color:red">Montant TTC</label>
               
              </div>
            </td>
            <td>
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="number"
                    
              :value="montantHTt"
                    class="span"
                   readonly
                  />
                
                </div>
              </div>
            </td>
            
            
                  
          </tr>
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterFactureLocal(formData1)"
          class="btn btn-primary"
          href="#"
           
        >Valider</a> 
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    
                
                <div class="span4"></div>
                                <div class="span4"></div>
                                <!-- <div class="span4" align="right">
                                   
                                      <button class="btn btn-success" @click="afficherModalProcedureFacture" >Ajouter Facture</button>

                              </div> -->
                 
                      <table class="table table-bordered table-striped" v-if="macheid">
              
                                    <thead>
                                    <tr>

                                         
                     <th>type_facture</th>
                    <th>numero_facture</th>
                    <th>objet_facture</th>
                    
                     <th>Ua</th>
                    <!-- <th>prix_unitaire</th>
                    <th>Quantité</th> -->
                    <th>prix_propose_ht</th>
                    <th>Tva</th>
                    
                    <th>prix_propose_ttc</th>
        
                              
                                
                                
                                <th colspan="2">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                            
                 <tr
                    class="odd gradeX"
                    v-for="(factu, index) in afficheFactureTableau(macheid)"
                    :key="factu.id"
                  >
                   
                   <!-- <td @dblclick="afficherModalModifierFacture(index)">{{factu.id || 'Non renseigné'}}</td> -->
                    <td @dblclick="afficherModalModifierFacture(index)">{{factu.objectTypefacture.libelle || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierFacture(index)">{{factu.numero_facture || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierFacture(index)">{{factu.objet_facture || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierFacture(index)">{{factu.objetUA.libelle || 'Non renseigné'}}</td>
                       <td @dblclick="afficherModalModifierFacture(index)">{{formatageSomme(parseFloat(factu.prix_propose_ht))|| 0}}</td>
                   <!-- <td @dblclick="afficherModalModifierFacture(index)">{{formatageSomme(parseFloat(factu.prix_unitaire ))|| 'Non renseigné'}}</td>
                   <td @dblclick="afficherModalModifierFacture(index)">{{factu.quantite || 'Non renseigné'}}</td> -->
                        <td @dblclick="afficherModalModifierFacture(index)">{{formatageSomme(parseFloat(factu.tva)) || 'Non renseigné'}}</td>
                 
                     
                     <td @dblclick="afficherModalModifierFacture(index)">{{formatageSomme(parseFloat(factu.prix_propose_ttc))|| 'Non renseigné'}}</td>
                      
                     
                     <td v-if="factu.typeProcedure == 2">
                       <router-link :to="{ name: 'AjouterEngagementFactureProf', params: { id: factu.id }}"
                class="btn btn-default " title="Ajouter Engagement">
                  <span class=""><i class="   icon-legal"></i></span>
                   </router-link> 
                      </td>
                      <td v-else>
                        <router-link :to="{ name: 'AjoutMandatDirect', params: { id: factu.id }}"
                class="btn btn-default " title="Ajouter Mandat">
                  <span class=""><i class="  icon-random"></i></span>
                   </router-link> 
                   
                       
                      </td>
                      <td>
                         <button class="btn btn-danger" @click="supprimerFacture(factu.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                      </td>
                       <!-- <button class="btn "  @click="afficherModalAjouterMandatDirect(factu.id)" title="Ajouter Mandat">
                        <span>
                          <i class="icon   icon-folder-close"></i>
                        </span>
                      </button> -->
                     
                   
                  </tr>
                                    </tbody>
                                
                                </table>

              
     




  



<fab :actions="fabActions" @cache="afficherModalProcedureFacture" main-icon="apps" bg-color="green"></fab>
 <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalProcedureFacture()">Open</button>
      <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
<!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
<notifications  />


    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import { formatageSomme } from './../../../../../Repositories/Repository';
import moment from 'moment';
export default {
  
    data(){
        return{
           fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ],
      formData :{
s_ua_id:"",
serviceua_id:"",

      },
      formData1: {
total:0,
total2:0,
total3:0,
total4:0,
total5:0,
total6:0,
total7:0,
total8:0,
total9:0,
total10:0,
       
numero_facture:"",
        objet_facture:"",
       
      
        
        typfacture_id:"",
           prix_propose_ht:"",
        prix_propose_ttc:"",
         date_facture:"",
         ua:"",
           tva:"",
           taux:"",

            designation:"",

 prix_unitaire:"",
         quantite:"",
           montantHT1:"",
           designation2:"",
            prix_unitaire2:"",
             quantite2:"",
         montantHT2:"",
           designation3:"",
           prix_unitaire3:"",
            quantite3:"",
             montantHT3:"",

 designation4:"",
           prix_unitaire4:"",
            quantite4:"",
             montantHT4:"",
              designation5:"",
           prix_unitaire5:"",
            quantite5:"",
             montantHT5:"",
              designation6:"",
           prix_unitaire6:"",
            quantite6:"",
             montantHT6:"",
              designation7:"",
           prix_unitaire7:"",
            quantite7:"",
             montantHT7:"",
              designation8:"",
           prix_unitaire8:"",
            quantite8:"",
             montantHT8:"",
              designation9:"",
           prix_unitaire9:"",
            quantite9:"",
             montantHT9:"",

 designation10:"",
           prix_unitaire10:"",
            quantite10:"",
             montantHT10:"",
 fournisseur_id:"",
 exonere:"",
       

        
      
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
      formDataFacture:{},
       popupState2: false,
              popupState3: false,
              popupState4: false,
              popupState5: false,
              popupState6: false,
              popupState7: false,
              popupState8: false,
              popupState9: false,
              popupState10: false,
       editAvenant: {},
search:""
        }
    },
    props:["macheid"],
    created(){},

              computed: {
            ...mapGetters("bienService", ['typeMarches','decomptes','modepaiements','getMandatPersonnaliserVise','getMandatPersonnaliser','choixprocedure','acteDepense',"getMarchePersonnaliser","appelOffres","getFacturePersonnaliser",
                "lots","modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","typeFactures",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","motifDecisions",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers",'getEngagementPersonnaliser',"engagements","getEngagementPersonnaliser1","mandats","avenants","getterActeEffetFinanciers"]),

                ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises',"comptes","banques"]),

           ...mapGetters("SuiviImmobilisation", [
      "familles",
      "services",
      "listeBesoinValider",
      "besoinImmobilisations",
      "groupTriUaImmo",
      "SuiviImmo",
      "listeBesoinValider",
      "getAfficheStockArticle",
      "getPersoNormeArticle",
      "getPersoStock",
      "stockageArticle",
      "getFacture"
      
    ]),
 ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
  ...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections","plans_programmes"]),
    ...mapGetters("parametreGenerauxProgrammeUnite", ["unites"]),
    ...mapGetters("personnelUA", ["all_acteur_depense","personnaliseActeurDepense","acteur_depenses","personnaFonction"]),
    
   
  ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetGeneral",
      "getPersonnaliseBudgetGeneral",
      "groupUa",
      "getPersonnaliseBudgetGeneralParBienService",
      "groupgranNature", "montantBudgetGeneral","realiteServiceFait","liquidation"
      // "montantBudgetGeneral"
      // "chapitres",
      // "sections"
       
    ]),
    ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements']),



afficheProcedure() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.choixprocedure.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.tprocedure;
      }
      return 0
        }
      };
    },
afficheUa_id() {
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
afficheLibelleUa() {
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

afficheObjetMarche() {
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

    afficheNomFournisseur() {
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
numeroDecompte() {
      const val = this.AfficheDecompte(this.macheid).length + 0;
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },


 AfficheDecompte () {
                return id => {
                    if (id != "") {
                        return  this.decomptes.filter(normeEquipe => normeEquipe.marche_id == id);
                    }
                }
            },



afficherTypeFactureProforma() {
               
                        return  this.typeFactures.filter(normeEquipe => normeEquipe.code == 1);
                       
                 
            },

afficherTypeFactureDefinitive() {
               
                        return  this.typeFactures.filter(normeEquipe => normeEquipe.code == 2);
                       
                 
            },



    sommeEgagementLigne: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.mandats.filter(normeEquipe => normeEquipe.marche_id == this.macheid).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.total_general)
                        },valInite);
                    }
                }
            },
     dotationInite: function () {
                return id => {
                    if (id != "") {
                        return  this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.codebudget == id);
                    }
                }
            },
afficherMontantFacture() {
    
       const norme = this.getFacturePersonnaliser.find(normeEquipe => normeEquipe.id == this.formDataFacture.id);

      if (norme) {
       return norme.prix_propose_ttc;
      }
      return ""
    },
afficherImputationBudget() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.imputation;
      }
      return ""
        }
      };
    },
    afficherNumeroFcture() {
    
       const norme = this.getFacturePersonnaliser.find(normeEquipe => normeEquipe.id == this.formDataFacture.id);

      if (norme) {
       return norme.numero_facture;
      }
      return ""
    },
    afficheligneEconomiqueBudgetaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.derniereNivoPlanBudgetaire.find(qtreel => qtreel.id == id);

      if (qtereel) {
        
         return qtereel.code.concat('  ', qtereel.libelle);
      }
      return 0
        }
      };
    },
    // afficherObjetFacture() {
    
    //    const norme = this.getFacturePersonnaliser.find(normeEquipe => normeEquipe.id == this.formDataFacture.id);

    //   if (norme) {
    //    return norme.objet_facture;
    //   }
    //   return ""
    // },
    afficheligneEconom() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.codebudget == id);

      if (qtereel) {
        return qtereel.economique_id ;
      }
      return 0
        }
      };
    },
    afficherCompteUtilisateur1: function () {
                return id => {
                    if (id != "") {
                      
                        return  this.comptes.filter(normeEquipe => normeEquipe.entrepse_id == id);
                       
                    }
                }
            },
     NumeroFournisseur_id() {
      
      const norme = this.getFacturePersonnaliser.find(normeEquipe => normeEquipe.marche_id == this.macheid);

      if (norme) {
        return norme.fournisseur_id;
      }
      return 0
    },
    afficheNumeroFournisseur() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_cc;
      }
      return 0
        }
      };
    },


afficheAdresseFournisseur() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.adresse;
      }
      return 0
        }
      };
    },

afficheTelephoneFournisseur() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.telephone;
      }
      return 0
        }
      };
    },
sommeMontant() { 
      const val = parseFloat(this.formData.montant_tresor) + parseFloat(this.formData.montant_don) + parseFloat(this.formData.montant_emprunt);
      return parseFloat(val).toFixed(2);
      
    },
      montantCumuler() {
      const val = parseInt(this.sommeMontant);
      return parseInt(val).toFixed(0);
    },
    //  montantCumulerModifier() {
    //   const val = parseInt(this.editEngagement.montant_cumul);
    //   return parseInt(val).toFixed(0);
    // },

    idBudgetaire() {
      
      const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.economique_id == this.afficheridBudget(this.macheid));

      if (norme) {
        return norme.id;
      }
      return 0
    },
    afficheridBudget() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.economique_id;
      }
      return ""
        }
      };
    },
    recupererTypeProcedure() {
      
      const norme = this.choixprocedure.find(normeEquipe => normeEquipe.marche_id == this.macheid);

      if (norme) {
        return norme.tprocedure;
      }
      return ""
    },
    afficherUniteAdmin() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return ""
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
    affichierMontantAvenant(){
  return id => {
    if(id !=""){
  
        
    return this.avenants.filter(element => element.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_avenant), 0).toFixed(2); 
      
    }
    
  }
},
afficheMontantReelMarche() {
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
montantMarcheAvecAvenant() {
      const val = parseFloat(this.afficheMontantReelMarche(this.macheid)) + parseFloat(this.affichierMontantAvenant(this.macheid));
      return parseFloat(val).toFixed(0);
    },
     afficheridgrandeNat() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.gdenature_id;
      }
      return ""
        }
      };
    },
       CodeGdeNatureDep() {
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
     afficheridActivite() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.activite_id;
      }
      return ""
        }
      };
    },
     afficheridUa() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.unite_administrative_id;
      }
      return ""
        }
      };
    },
     afficherSecti() {
    
       const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.afficheridUa(this.macheid));

      if (norme) {
       return norme.afficheSection.code_section.concat('  ', norme.afficheSection.nom_section)
      }
      return ""
    },
    afficherSectId() {
    
       const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.afficheridUa(this.macheid));

      if (norme) {
       return norme.afficheSection.id;
      }
      return ""
    },
 afficherProgDot() {
    
       const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.afficheridUa(this.macheid));

      if (norme) {
       return norme.afficheProgramme.libelle;
      }
      return ""
    },
    afficherProgDotId() {
    
       const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.afficheridUa(this.macheid));

      if (norme) {
       return norme.afficheProgramme.id;
      }
      return ""
    },
afficherActi() {
    
       const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.afficheridUa(this.macheid));

      if (norme) {
       return norme.afficheAction.libelle;
      }
      return ""
    },
    afficherActid() {
    
       const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.afficheridUa(this.macheid));

      if (norme) {
       return norme.afficheAction.id;
      }
      return ""
    },

    anneeAmort() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },
afficherEnorere(){
if(this.formData1.exonere == 0){
  return 0
}
else {
  return this.affcherTauxEnCours
  
}
},


afficherEnorere2(){
if(this.formData1.exonere == 0){
  return 0
}
else {
  return this.tauxArrondit
  
}
},
     AfficherFournisseur_id() {
      
      const norme = this.acteEffetFinanciers.find(normeEquipe => normeEquipe.marche_id == this.macheid);

      if (norme) {
        return norme.entreprise_id;
      }
      return 0
    },
    // afficheNomFournisseur() {
    //   return id => {
    //     if (id != null && id != "") {
    //        const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

    //   if (qtereel) {
    //     return qtereel.raison_sociale;
    //   }
    //   return 0
    //     }
    //   };
    // },
     nomFournisseur() {
      
      const norme = this.getActeEffetFinancierPersonnaliser.find(normeEquipe => normeEquipe.marche_id == this.macheid);

      if (norme) {
        return norme.varObjetEntreprise.raison_sociale;
      }
      return 0
    },
    afficheFactureTableau() {
      return id => {
        if (id != null && id != "") {
          return this.getFacturePersonnaliser.filter(
            element => element.marche_id == id
          );
        }
      };
    },
montantHT1() {
      const val =  parseFloat(this.formData1.prix_unitaire) * parseFloat(this.formData1.quantite);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
montantHT2() {
      const val =  parseFloat(this.formData1.prix_unitaire2) * parseFloat(this.formData1.quantite2);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
    montantHT3() {
      const val =  parseFloat(this.formData1.prix_unitaire3) * parseFloat(this.formData1.quantite3);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
    montantHT4() {
      const val =  parseFloat(this.formData1.prix_unitaire4) * parseFloat(this.formData1.quantite4);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
    montantHT5() {
      const val =  parseFloat(this.formData1.prix_unitaire5) * parseFloat(this.formData1.quantite5);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
    montantHT6() {
      const val =  parseFloat(this.formData1.prix_unitaire6) * parseFloat(this.formData1.quantite6);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
    montantHT7() {
      const val =  parseFloat(this.formData1.prix_unitaire7) * parseFloat(this.formData1.quantite7);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
    montantHT8() {
      const val =  parseFloat(this.formData1.prix_unitaire8) * parseFloat(this.formData1.quantite8);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
    montantHT9() {
      const val =  parseFloat(this.formData1.prix_unitaire9) * parseFloat(this.formData1.quantite9);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
    montantHT10() {
      const val =  parseFloat(this.formData1.prix_unitaire10) * parseFloat(this.formData1.quantite10);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },

 totalMontantHT() {
      const val =  parseFloat(this.montantHT1) + parseFloat(this.montantHT2)+ parseFloat(this.montantHT3)+ parseFloat(this.montantHT4)+ parseFloat(this.montantHT5)+ parseFloat(this.montantHT6)+ parseFloat(this.montantHT7)+ parseFloat(this.montantHT8)+ parseFloat(this.montantHT9)+ parseFloat(this.montantHT10);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
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


 montantHTt() {
      const val =    parseFloat(this.totalMontantHT) + parseFloat(this.montantTva);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
afficheMarcheType(){
if(this.afficherLibelleTypeMarche(this.afficheridTypeMarche(this.macheid)) == "Travaux"){
return 1
}
else{
  return 2
}
},
afficheridTypeMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.type_marche_id;
      }
      return ""
        }
      };
    },
    afficherLibelleTypeMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.typeMarches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return ""
        }
      };
    },
      },
 
      methods:{ 

          ...mapActions('bienService',[  "ajouterAvenant",
      "modifierAvenant",
      "supprimerAvenant",
      "modifierDecompte",
      "ajouterDecompte",
      "ajouterChoixProcedure",
       "ajouterFacture",
                "modifierFacture",
                "supprimerFacture",
      ]),
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
    //  afficherFormulaireModalAjouterMandatDirect(){
    //             this.$router.push({ name: 'AjoutMandatDirect' , params: { id:id: marche_id }})
    //         },
afficherModalAjouterMandatDirect(id) {
      this.$("#exampleModalMandat").modal({
        backdrop: "static",
        keyboard: false
      });
      // this.formDataEngage = this.afficheMarcheEngage(this.detail_marche.id).find(recupererObjet => recupererObjet.id == id)
        this.formDataFactureDefinitif = this.afficheFactureTableau(this.detail_marche.id).find(recupererObjet => recupererObjet.id == id)
    },
afficherModalProcedureFacture() {

   if(this.DisponibleBudgetaireApresLiquidation < this.montantMarcheAvecAvenant)
 {
alert("Montant du marche est supperieure au Budget")
}
else{
  this.$("#modalTypeEngagement").modal({
        backdrop: "static",
        keyboard: false
      });
}
    
    },
         afficherModalAjouter(id) {
          
      this.$("#AjouterEngage").modal({
        backdrop: "static",
        keyboard: false
      });
     
       this.formDataFacture = this.afficheFactureTableau(this.macheid).find(recupererObjet => recupererObjet.id == id)
  
   },
  ajouterChoixProcLocal(){

   if(this.formData.tprocedure == 2){
 var nouvelObjet = {
      ...this.formData,
      marche_id :this.macheid,
    
       };
      
this.ajouterChoixProcedure(nouvelObjet)
this.formData= {
tprocedure :""
}
 this.$("#modalTypeEngagement").modal('hide');
 this.$("#modalFactureAjouterProforma").modal({
        backdrop: "static",
        keyboard: false
      });
   }
       
      else if(this.formData.tprocedure == 1){
     var nouvelObjet1 = {
      ...this.formData,
      marche_id :this.macheid,
    
       };
this.ajouterChoixProcedure(nouvelObjet1)
this.formData= {
tprocedure : ""
}
       this.$("#modalTypeEngagement").modal('hide');
 this.$("#modatFactureAjouter").modal({
        backdrop: "static",
        keyboard: false
      });





      
      }
 },
ajouterFactureLocal(){

var nouvelObjet = {
      ...this.formData1,
    fournisseur_id: this.AfficherFournisseur_id,
       	prix_propose_ht :this.totalMontantHT,
        prix_propose_ttc :this.montantHTt,
         taux :this.affcherTauxEnCours,
         tva :this.montantTva,
          	ua :this.afficheUa_id(this.macheid),
    marche_id : this.macheid,
    objet_facture:this.afficheObjetMarche(this.macheid),
      typeProcedure:this.afficheProcedure(this.macheid),
      marchetype:this.afficheMarcheType
       };
      // var objetDecompte = {
      //   numero_decompte:this.numeroDecompte,
      //   marche_id : this.macheid,
      //   typeProcedure:this.afficheProcedure(this.macheid)
      // }
this.ajouterFacture(nouvelObjet)

this.$("#modatFactureAjouter").modal('hide');
this.formData1= {
total:0,
total2:0,
total3:0,
total4:0,
total5:0,
total6:0,
total7:0,
total8:0,
total9:0,
total10:0,
       
numero_facture:"",
        objet_facture:"",
       
      
        
        typfacture_id:"",
           prix_propose_ht:"",
        prix_propose_ttc:"",
         date_facture:"",
         ua:"",
           tva:"",
           taux:"",

            designation:"",

 prix_unitaire:"",
         quantite:"",
           montantHT1:"",
           designation2:"",
            prix_unitaire2:"",
             quantite2:"",
         montantHT2:"",
           designation3:"",
           prix_unitaire3:"",
            quantite3:"",
             montantHT3:"",

 designation4:"",
           prix_unitaire4:"",
            quantite4:"",
             montantHT4:"",
              designation5:"",
           prix_unitaire5:"",
            quantite5:"",
             montantHT5:"",
              designation6:"",
           prix_unitaire6:"",
            quantite6:"",
             montantHT6:"",
              designation7:"",
           prix_unitaire7:"",
            quantite7:"",
             montantHT7:"",
              designation8:"",
           prix_unitaire8:"",
            quantite8:"",
             montantHT8:"",
              designation9:"",
           prix_unitaire9:"",
            quantite9:"",
             montantHT9:"",

 designation10:"",
           prix_unitaire10:"",
            quantite10:"",
             montantHT10:"",
 fournisseur_id:"",
 exonere:"",
       

        
      
};
       
       

    },
    ModifierFactureLocal(){
       
       var nouvelObjet = {
      ...this.formData1,
     
       fournisseur_id: this.AfficherFournisseur_id,
       	prix_propose_ht :this.totalMontantHT,
        prix_propose_ttc :this.montantHTt,
         taux :this.affcherTauxEnCours,
         tva :this.montantTva,
          	ua :this.detail_marche.objetUniteAdministrative.id,
      marche_id : this.macheid,
      objet_facture:this.detail_marche.objet
       };
      
this.modifierFacture(nouvelObjet)

this.$("#modatFactureModifier").modal('hide');


    },
   

formatageSomme:formatageSomme,

 formaterDate(date) {
              return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },
      }
}
</script>

<style scoped>
.grdirModalActeEffet{
     width: 1200px;
 margin: 0 -530px;
 height: 550px;

}
.tailgrand{
  width: 77%;
  margin: 0 -38%;
}
.taillemodal45 {
        width: 1500px;
        margin: 0 -750px;
      
    }
       .taillemodal6 {
        width: 1600px;
        margin: 0 -780px;
    }
    .taillemodal61 {
        width: 1500px;
        
    }
</style>