
<template>
  <div>
   
    <!--///////////////////////////////////////// fin modal de modification //////////////////////////////-->
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
             <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>BUDGET DETAILLE</h5>
              
            </div>

            <div class="widget-content nopadding" 

           >
              <table class="table table-bordered table-striped">
                <thead>
                  <tr >
                    <th title="Année Budgetaire">Section</th>
                  <th title="Grande Nature Depense">Destination</th>
                  <th>Nature depense(en Transfert)</th>
                 
                   
                  </tr>
                </thead>
                <tbody>
                   <tr
                    class="odd gradeX"
                   
                  >
                    <td>
                                        <div class="control-group">
                                <label class="control-label">Section</label>
                                <div class="controls">
                                    <select v-model="formData.sectionBudgetG_id" size=1 style="width:100%">
                                     
                                   <option
                                  v-for="sect in sections"
                                  :key="sect.id"
                                  :value="sect.id"
                                >{{sect.code_section}}-{{sect.nom_section}}</option>
                                    </select>
                                </div>
                                </div></td>
                    <td
                     
                    >
                     <div class="control-group">
                                <label class="control-label">Destination</label>
                                <div class="controls">
                                    <select v-model="formData.destinationBudgetGeneral_id" size=1 style="width:100%">
                                     
                                  <option
                                  v-for="ua in uniteAdministratives"
                                  :key="ua.id"
                                  :value="ua.id"
                                >{{ua.code}}-{{ua.libelle}}</option>
                                    </select>
                                </div>
                                </div>
                    </td>
                     <td
                      
                    >
                     <div class="control-group">
                                <label class="control-label">Nature depense(en Transfert)</label>
                                <div class="controls " >
                                    <select v-model="formData.nature_dep_id" size=1 style="width:100%" v-if="budgetGeneralUniteAdministrative.length">
                                     
                                  <option
                                  v-for="nature_transf in budgetGeneralUniteAdministrative"
                                  :key="nature_transf.id"
                                  :value="nature_transf.id"
                                >{{nature_transf.grandeNatureDepense.code}}-{{nature_transf.grandeNatureDepense.libelle}}</option>
                                    </select>
                                
                                </div>
                                </div>
                    </td> 
                   

                  </tr> 
                   <tr
                    class="odd gradeX"
                    
                  >
                    <td
                     
                    >
                     <div class="control-group">
                  <label class="control-label">Budget actuel</label>

                     <div class="controls">
                    <input
                      type="text"
                  :value="AffichierBudgetActuel"
                      class="span"
                      placeholder="Budget actuel"
                      readonly
                    />
                  </div>
                  </div>
                    </td>
                    <td
                     colspan="2"
                    > <div class="control-group">
                  <label class="control-label">Montant Eclaté</label>

                     <div class="controls">
                    <input
                      type="number"
                 :value="sommeMontantEclate"
                      class="span"
                      
                      readonly
                    />
                  </div>
                  </div></td>
                     <td
                       
                    > 
                   
                   
                    </td> 
                   

                  </tr> 
                  <tr>
                    <td>
 <a
          @click.prevent="ajouterBudgetGeneralLocal(formData)"
          class="btn btn-primary"
          href="#"
        
        >Valider</a>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
             
            </div>
          </div>


          <!-- <download-excel
            class="btn btn-default pull-right"
            style="cursor:pointer;"
            :fields="json_fields"
            title="Liste type texte"
            :data="filtre_type_teste"
            name="Liste type texte"
            worksheet="Liste type texte"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel> -->
       
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>BUDGET DETAILLE</h5>
              
            </div>

            <div class="widget-content nopadding" 

             >
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th title="Année Budgetaire">Grande nature depense</th>
                  <th title="Grande Nature Depense">Nature economique</th>
                  <th>Dotation</th>
                 <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                   <tr
                    class="odd gradeX"
                    
                  >
                    <td
                     
                    > <div class="controls ">
                                    <select v-model="formData.gdeNaturedepense_id1" size=1 style="width:100%">
                                     
                                  <option
                                  v-for="natureGrde in afficheNatureTransfert"
                                  :key="natureGrde.id"
                                  :value="natureGrde.id"
                                >{{natureGrde.code}}-{{natureGrde.libelle}}</option>
                                    </select>
                                </div></td>
                    <td
                     
                    > <div class="controls ">
                                    <select v-model="formData.natureEconomique_id" size=1 style="width:100%">
                                     
                                   <option
                                 
                                >
                                </option>
                                    </select>
                                </div></td>
                     <td
                     
                    > <div class="controls">
                    <input
                    v-model="formData.dotation1"
                      type="number"
                   
                      class="span"
                      placeholder="Saisir dotation"
                    />
                  </div></td> 
                   <td>
                      
                      <button class="btn btn-success"  v-on:click="showPopup2()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                    </td> 
                  </tr> 
                <!--2-->
                   <tr
                    class="odd gradeX"
                      v-show="popupState2"
                  >
                  
                    <td
                     
                    > <div class="controls ">
                                   <select v-model="formData.gdeNaturedepense_id2" size=1 style="width:100%">
                                     
                                  <option
                                  v-for="natureGrde in afficheNatureTransfert"
                                  :key="natureGrde.id"
                                  :value="natureGrde.id"
                                >{{natureGrde.code}}-{{natureGrde.libelle}}</option>
                                    </select>
                                </div></td>
                    <td
                     
                    > <div class="controls ">
                                    <select v-model="formData.exercicebudget_id" size=1 style="width:100%">
                                     
                                   <option
                                 
                                >
                                </option>
                                    </select>
                                </div></td>
                     <td
                     
                    > <div class="controls">
                    <input
                       
                      type="number"
                   v-model="formData.dotation2"
                      class="span"
                      placeholder="Saisir dotation"
                    />
                  </div></td> 
                   <td>
                      
                      <button class="btn btn-success"  v-on:click="showPopup3()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                    </td> 
                  </tr> 
                  
                   <!--3-->
                   <tr
                    class="odd gradeX"
                      v-show="popupState3"
                  >
                  
                    <td
                     
                    > <div class="controls ">
                                    <select v-model="formData.gdeNaturedepense_id3" size=1 style="width:100%">
                                     
                                  <option
                                  v-for="natureGrde in afficheNatureTransfert"
                                  :key="natureGrde.id"
                                  :value="natureGrde.id"
                                >{{natureGrde.code}}-{{natureGrde.libelle}}</option>
                                    </select>
                                </div></td>
                    <td
                     
                    > <div class="controls ">
                                    <select v-model="formData.exercicebudget_id" size=1 style="width:100%">
                                     
                                   <option
                                 
                                >
                                </option>
                                    </select>
                                </div></td>
                     <td
                     
                    > <div class="controls">
                    <input
                       value="0"
                      type="text"
                   v-model="formData.dotation4"
                      class="span"
                      placeholder="Saisir dotation"
                    />
                  </div></td> 
                   <td>
                      
                      <button class="btn btn-success"  v-on:click="showPopup4()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                    </td> 
                  </tr> 
                  <!--4-->
                   <tr
                    class="odd gradeX"
                      v-show="popupState4"
                  >
                  
                    <td
                     
                    > <div class="controls ">
                                  <select v-model="formData.gdeNaturedepense_id4" size=1 style="width:100%">
                                     
                                  <option
                                  v-for="natureGrde in afficheNatureTransfert"
                                  :key="natureGrde.id"
                                  :value="natureGrde.id"
                                >{{natureGrde.code}}-{{natureGrde.libelle}}</option>
                                    </select>
                                </div></td>
                    <td
                     
                    > <div class="controls ">
                                    <select v-model="formData.exercicebudget_id" size=1 style="width:100%">
                                     
                                   <option
                                 
                                >
                                </option>
                                    </select>
                                </div></td>
                     <td
                     
                    > <div class="controls">
                    <input
                       value="0"
                      type="number"
                   v-model="formData.dotation5"
                      class="span"
                      placeholder="Saisir dotation"
                    />
                  </div></td> 
                   <td>
                      
                      <button class="btn btn-success"  v-on:click="showPopup5()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                    </td> 
                  </tr> 
                  <!--5-->
                   <tr
                    class="odd gradeX"
                      v-show="popupState5"
                  >
                  
                    <td
                     
                    > <div class="controls ">
                                    <select v-model="formData.gdeNaturedepense_id5" size=1 style="width:100%">
                                     
                                  <option
                                  v-for="natureGrde in afficheNatureTransfert"
                                  :key="natureGrde.id"
                                  :value="natureGrde.id"
                                >{{natureGrde.code}}-{{natureGrde.libelle}}</option>
                                    </select>
                                </div></td>
                    <td
                     
                    > <div class="controls ">
                                    <select v-model="formData.exercicebudget_id" size=1 style="width:100%">
                                     
                                   <option
                                 
                                >
                                </option>
                                    </select>
                                </div></td>
                     <td
                     
                    > <div class="controls">
                    <input
                       value="0"
                      type="number"
                   v-model="formData.dotation6"
                      class="span"
                      placeholder="Saisir dotation"
                    />
                  </div></td> 
                   <td>
                      
                      <button class="btn btn-success"  v-on:click="showPopup6()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                    </td> 
                  </tr> 
                  <!--5-->
                   <tr
                    class="odd gradeX"
                      v-show="popupState6"
                  >
                  
                    <td
                     
                    > <div class="controls ">
                                    <select v-model="formData.gdeNaturedepense_id6" size=1 style="width:100%">
                                     
                                  <option
                                  v-for="natureGrde in afficheNatureTransfert"
                                  :key="natureGrde.id"
                                  :value="natureGrde.id"
                                >{{natureGrde.code}}-{{natureGrde.libelle}}</option>
                                    </select>
                                </div></td>
                    <td
                     
                    > <div class="controls ">
                                    <select v-model="formData.exercicebudget_id" size=1 style="width:100%">
                                     
                                   <option
                                 
                                >
                                </option>
                                    </select>
                                </div></td>
                     <td
                     
                    > <div class="controls">
                    <input
                       value="0"
                      type="number"
                   v-model="formData.dotation7"
                      class="span"
                      placeholder="Saisir dotation"
                    />
                  </div></td> 
                   <td>
                      
                      <button class="btn btn-success"  v-on:click="showPopup7()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                    </td> 
                  </tr> 
                  <!--6-->
                   <tr
                    class="odd gradeX"
                      v-show="popupState7"
                  >
                  
                    <td
                     
                    > <div class="controls ">
                                   <select v-model="formData.gdeNaturedepense_id7" size=1 style="width:100%">
                                     
                                  <option
                                  v-for="natureGrde in afficheNatureTransfert"
                                  :key="natureGrde.id"
                                  :value="natureGrde.id"
                                >{{natureGrde.code}}-{{natureGrde.libelle}}</option>
                                    </select>
                                </div></td>
                    <td
                     
                    > <div class="controls ">
                                    <select v-model="formData.exercicebudget_id" size=1 style="width:100%">
                                     
                                   <option
                                 
                                >
                                </option>
                                    </select>
                                </div></td>
                     <td
                     
                    > <div class="controls">
                    <input
                       value="0"
                      type="number"
                   v-model="formData.dotation8"
                      class="span"
                      placeholder="Saisir dotation"
                    />
                  </div></td> 
                   <td>
                      
                      <button class="btn btn-success"  v-on:click="showPopup8()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                    </td> 
                  </tr> 
                  <!--7-->
                   <tr
                    class="odd gradeX"
                      v-show="popupState8"
                  >
                  
                    <td
                     
                    > <div class="controls ">
                                    <select v-model="formData.gdeNaturedepense_id8" size=1 style="width:100%">
                                     
                                  <option
                                  v-for="natureGrde in afficheNatureTransfert"
                                  :key="natureGrde.id"
                                  :value="natureGrde.id"
                                >{{natureGrde.code}}-{{natureGrde.libelle}}</option>
                                    </select>
                                </div></td>
                    <td
                     
                    > <div class="controls ">
                                    <select v-model="formData.exercicebudget_id" size=1 style="width:100%">
                                     
                                   <option
                                 
                                >
                                </option>
                                    </select>
                                </div></td>
                     <td
                     
                    > <div class="controls">
                    <input
                       value="0"
                      type="number"
                   v-model="formData.dotation9"
                      class="span"
                      placeholder="Saisir dotation"
                    />
                  </div></td> 
                   <td>
                      
                      <button class="btn btn-success"  v-on:click="showPopup9()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                    </td> 
                  </tr> 
                  <!--8-->
                   <tr
                    class="odd gradeX"
                      v-show="popupState9"
                  >
                  
                    <td
                     
                    > <div class="controls ">
                                     <select v-model="formData.gdeNaturedepense_id9" size=1 style="width:100%">
                                     
                                  <option
                                  v-for="natureGrde in afficheNatureTransfert"
                                  :key="natureGrde.id"
                                  :value="natureGrde.id"
                                >{{natureGrde.code}}-{{natureGrde.libelle}}</option>
                                    </select>
                                </div></td>
                    <td
                     
                    > <div class="controls ">
                                    <select v-model="formData.exercicebudget_id" size=1 style="width:100%">
                                     
                                   <option
                                 
                                >
                                </option>
                                    </select>
                                </div></td>
                     <td
                     
                    > <div class="controls">
                    <input
                       value="0"
                      type="number"
                   v-model="formData.dotation10"
                      class="span"
                      placeholder="Saisir dotation"
                    />
                  </div></td> 
                   <td>
                      
                      <button class="btn btn-success"  v-on:click="showPopup10()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                    </td> 
                  </tr> 
                  <!--9-->
                   <tr
                    class="odd gradeX"
                      v-show="popupState10"
                  >
                  
                    <td
                     
                    > <div class="controls ">
                                   <select v-model="formData.gdeNaturedepense_id10" size=1 style="width:100%">
                                     
                                  <option
                                  v-for="natureGrde in afficheNatureTransfert"
                                  :key="natureGrde.id"
                                  :value="natureGrde.id"
                                >{{natureGrde.code}}-{{natureGrde.libelle}}</option>
                                    </select>
                                </div></td>
                    <td
                     
                    > <div class="controls ">
                                    <select v-model="formData.exercicebudget_id" size=1 style="width:100%">
                                     
                                   <option
                                 
                                >
                                </option>
                                    </select>
                                </div></td>
                     <td
                     
                    > <div class="controls">
                    <input
                       value="0"
                      type="number"
                   v-model="formData.dotation11"
                      class="span"
                      placeholder="Saisir dotation"
                    />
                  </div></td> 
                   <td>
                      
                      <button class="btn btn-success"  v-on:click="showPopup11()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                    </td> 
                  </tr> 
                  <!--10-->
                   <tr
                    class="odd gradeX"
                      v-show="popupState11"
                  >
                  
                    <td
                     
                    > <div class="controls ">
                                     <select v-model="formData.gdeNaturedepense_id11" size=1 style="width:100%">
                                     
                                  <option
                                  v-for="natureGrde in afficheNatureTransfert"
                                  :key="natureGrde.id"
                                  :value="natureGrde.id"
                                >{{natureGrde.code}}-{{natureGrde.libelle}}</option>
                                    </select>
                                </div></td>
                    <td
                     
                    > <div class="controls ">
                                    <select v-model="formData.exercicebudget_id" size=1 style="width:100%">
                                     
                                   <option
                                 
                                >
                                </option>
                                    </select>
                                </div></td>
                     <td
                     
                    > <div class="controls">
                    <input
                       value="0"
                      type="number"
                   v-model="formData.dotation12"
                      class="span"
                      placeholder="Saisir dotation"
                    />
                  </div></td> 
                   <td>
                      
                      <button class="btn btn-success"  v-on:click="showPopup12()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                    </td> 
                  </tr> 
                  <!--11-->
                   <tr
                    class="odd gradeX"
                      v-show="popupState12"
                  >
                  
                    <td
                     
                    > <div class="controls ">
                                    <select v-model="formData.gdeNaturedepense_id12" size=1 style="width:100%">
                                     
                                  <option
                                  v-for="natureGrde in afficheNatureTransfert"
                                  :key="natureGrde.id"
                                  :value="natureGrde.id"
                                >{{natureGrde.code}}-{{natureGrde.libelle}}</option>
                                    </select>
                                </div></td>
                    <td
                     
                    > <div class="controls ">
                                    <select v-model="formData.exercicebudget_id" size=1 style="width:100%">
                                     
                                   <option
                                 
                                >
                                </option>
                                    </select>
                                </div></td>
                     <td
                     
                    > <div class="controls">
                    <input
                       value="0"
                      type="number"
                   v-model="formData.dotation13"
                      class="span"
                      placeholder="Saisir dotation"
                    />
                  </div></td> 
                   <td>
                      
                      <button class="btn btn-success"  v-on:click="showPopup13()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                    </td> 
                  </tr> 
                  <!--12-->
                   <tr
                    class="odd gradeX"
                      v-show="popupState13"
                  >
                  
                    <td
                     
                    > <div class="controls ">
                                     <select v-model="formData.gdeNaturedepense_id13" size=1 style="width:100%">
                                     
                                  <option
                                  v-for="natureGrde in afficheNatureTransfert"
                                  :key="natureGrde.id"
                                  :value="natureGrde.id"
                                >{{natureGrde.code}}-{{natureGrde.libelle}}</option>
                                    </select>
                                </div></td>
                    <td
                     
                    > <div class="controls ">
                                    <select v-model="formData.exercicebudget_id" size=1 style="width:100%">
                                     
                                   <option
                                 
                                >
                                </option>
                                    </select>
                                </div></td>
                     <td
                     
                    > <div class="controls">
                    <input
                       
                      type="number"
                   v-model="formData.dotation14"
                      class="span"
                      placeholder="Saisir dotation"
                    />
                  </div></td> 
                   <td>
                      
                      <button class="btn btn-success"  v-on:click="showPopup14()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                    </td> 
                  </tr> 
                  <!--13-->
                   <tr
                    class="odd gradeX"
                      v-show="popupState14"
                  >
                  
                    <td
                     
                    > <div class="controls ">
                                   <select v-model="formData.gdeNaturedepense_id14" size=1 style="width:100%">
                                     
                                  <option
                                  v-for="natureGrde in afficheNatureTransfert"
                                  :key="natureGrde.id"
                                  :value="natureGrde.id"
                                >{{natureGrde.code}}-{{natureGrde.libelle}}</option>
                                    </select>
                                </div></td>
                    <td
                     
                    > <div class="controls ">
                                    <select v-model="formData.exercicebudget_id" size=1 style="width:100%">
                                     
                                   <option
                                 
                                >
                                </option>
                                    </select>
                                </div></td>
                     <td
                     
                    > <div class="controls">
                    <input
                      
                      type="number"
                   v-model="formData.dotation15"
                      class="span"
                      placeholder="Saisir dotation"
                    />
                  </div></td> 
                   <td>
                      
                      <button class="btn btn-success"  v-on:click="showPopup15()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                    </td> 
                  </tr> 
                  <!--14-->
                   <tr
                    class="odd gradeX"
                      v-show="popupState15"
                  >
                  
                    <td
                     
                    > <div class="controls ">
                                    <select v-model="formData.gdeNaturedepense_id15" size=1 style="width:100%">
                                     
                                  <option
                                  v-for="natureGrde in afficheNatureTransfert"
                                  :key="natureGrde.id"
                                  :value="natureGrde.id"
                                >{{natureGrde.code}}-{{natureGrde.libelle}}</option>
                                    </select>
                                </div></td>
                    <td
                     
                    > <div class="controls ">
                                    <select v-model="formData.exercicebudget_id" size=1 style="width:100%">
                                     
                                   <option
                                 
                                >
                                </option>
                                    </select>
                                </div></td>
                     <td
                     
                    > <div class="controls">
                    <input
                       value="0"
                      type="number"
                   v-model="formData.dotation16"
                      class="span"
                      placeholder="Saisir dotation"
                    />
                  </div></td> 
                   <td>
                      
                      <button class="btn btn-success"  v-on:click="showPopup16()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                    </td> 
                  </tr> 
                  <!--15-->
                   <tr
                    class="odd gradeX"
                      v-show="popupState16"
                  >
                  
                    <td
                     
                    > <div class="controls ">
                                     <select v-model="formData.gdeNaturedepense_id16" size=1 style="width:100%">
                                     
                                  <option
                                  v-for="natureGrde in afficheNatureTransfert"
                                  :key="natureGrde.id"
                                  :value="natureGrde.id"
                                >{{natureGrde.code}}-{{natureGrde.libelle}}</option>
                                    </select>
                                </div></td>
                    <td
                     
                    > <div class="controls ">
                                    <select v-model="formData.exercicebudget_id" size=1 style="width:100%">
                                     
                                   <option
                                 
                                >
                                </option>
                                    </select>
                                </div></td>
                     <td
                     
                    > <div class="controls">
                    <input
                       value="0"
                      type="number"
                   v-model="formData.dotation17"
                      class="span"
                      placeholder="Saisir dotation"
                    />
                  </div></td> 
                   <td>
                      
                      <button class="btn btn-success"  v-on:click="showPopup17()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                    </td> 
                  </tr> 
                  <!--16-->
                   <tr
                    class="odd gradeX"
                      v-show="popupState17"
                  >
                  
                    <td
                     
                    > <div class="controls ">
                                     <select v-model="formData.gdeNaturedepense_id17" size=1 style="width:100%">
                                     
                                  <option
                                  v-for="natureGrde in afficheNatureTransfert"
                                  :key="natureGrde.id"
                                  :value="natureGrde.id"
                                >{{natureGrde.code}}-{{natureGrde.libelle}}</option>
                                    </select>
                                </div></td>
                    <td
                     
                    > <div class="controls ">
                                    <select v-model="formData.exercicebudget_id" size=1 style="width:100%">
                                     
                                   <option
                                 
                                >
                                </option>
                                    </select>
                                </div></td>
                     <td
                     
                    > <div class="controls">
                    <input
                     
                      type="number"
                   v-model="formData.dotation18"
                      class="span"
                      placeholder="Saisir dotation"
                    />
                  </div></td> 
                   <td>
                      
                      <button class="btn btn-success"  v-on:click="showPopup18()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                    </td> 
                  </tr> 
                  <!--17-->
                   <tr
                    class="odd gradeX"
                      v-show="popupState18"
                  >
                  
                    <td
                     
                    > <div class="controls ">
                                    <select v-model="formData.gdeNaturedepense_id18" size=1 style="width:100%">
                                     
                                  <option
                                  v-for="natureGrde in afficheNatureTransfert"
                                  :key="natureGrde.id"
                                  :value="natureGrde.id"
                                >{{natureGrde.code}}-{{natureGrde.libelle}}</option>
                                    </select>
                                </div></td>
                    <td
                     
                    > <div class="controls ">
                                    <select v-model="formData.exercicebudget_id" size=1 style="width:100%">
                                     
                                   <option
                                 
                                >
                                </option>
                                    </select>
                                </div></td>
                     <td
                     
                    > <div class="controls">
                    <input
                       
                      type="number"
                   v-model="formData.dotation19"
                      class="span"
                      placeholder="Saisir dotation"
                    />
                  </div></td> 
                   <td>
                      
                      <button class="btn btn-success"  v-on:click="showPopup19()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                    </td> 
                  </tr> 
                  <!--18-->
                   <tr
                    class="odd gradeX"
                      v-show="popupState19"
                  >
                  
                    <td
                     
                    > <div class="controls ">
                                    <select v-model="formData.gdeNaturedepense_id19" size=1 style="width:100%">
                                     
                                  <option
                                  v-for="natureGrde in afficheNatureTransfert"
                                  :key="natureGrde.id"
                                  :value="natureGrde.id"
                                >{{natureGrde.code}}-{{natureGrde.libelle}}</option>
                                    </select>
                                </div></td>
                    <td
                     
                    > <div class="controls ">
                                    <select v-model="formData.exercicebudget_id" size=1 style="width:100%">
                                     
                                   <option
                                 
                                >
                                </option>
                                    </select>
                                </div></td>
                     <td
                     
                    > <div class="controls">
                    <input
                      
                      type="number"
                   v-model="formData.dotation20"
                      class="span"
                      placeholder="Saisir dotation"
                    />
                  </div></td> 
                   <td>
                      
                      <button class="btn btn-success"  v-on:click="showPopup20()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                    </td> 
                  </tr> 
                  <!--19-->
                   <tr
                    class="odd gradeX"
                      v-show="popupState20"
                  >
                  
                    <td
                     
                    > <div class="controls ">
                                   <select v-model="formData.gdeNaturedepense_id20" size=1 style="width:100%">
                                     
                                  <option
                                  v-for="natureGrde in afficheNatureTransfert"
                                  :key="natureGrde.id"
                                  :value="natureGrde.id"
                                >{{natureGrde.code}}-{{natureGrde.libelle}}</option>
                                    </select>
                                </div></td>
                    <td
                     
                    > <div class="controls ">
                                    <select v-model="formData.exercicebudget_id" size=1 style="width:100%">
                                     
                                   <option
                                 
                                >
                                </option>
                                    </select>
                                </div></td>
                     <td
                     
                    > <div class="controls">
                    <input
                       
                      type="number"
                   v-model="formData.dotation21"
                      class="span"
                      placeholder="Saisir dotation"
                    />
                  </div></td> 
                  
                  </tr> 
                  <!--20-->
                 
                </tbody>
              </table>
             
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <fab :actions="fabActions" @cache="afficherModalAjouterTitre" main-icon="apps" bg-color="green"></fab> -->
    <!-- <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterTitre()">Open</button>
<button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button> -->
<notifications  />
    <!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import { formatageSomme } from "../../../src/Repositories/Repository";
export default {
  name:'typetext',
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
      
      formData: {
        dotation1:"0",
        dotation2:"0",
        dotation4:"0",
        dotation5:"0",
        dotation6:"0",
        dotation7:"0",
        dotation8:"0",
        dotation9:"0",
        dotation10:"0",
        dotation11:"0",
        dotation12:"0",
        dotation13:"0",
        dotation14:"0",
        dotation15:"0",
        dotation16:"0",
        dotation17:"0",
        dotation18:"0",
        dotation19:"0",
        dotation20:"0",
        dotation21:"0"
      },
      formData1: {
         chapitre_id: "",
        planfonctionnel_id: ""
      },
       editBudgetGeneral1: {
         chapitre_id: "",
        planfonctionnel_id: ""
      },
      editBudgetGeneral: {
         code: "",
        libelle: ""
      },
      search: "",
       popupState2: false,
       popupState3: false,
        popupState4: false,
         popupState5: false,
          popupState6: false,
           popupState7: false,
            popupState8: false,
             popupState9: false,
              popupState10: false,
               popupState11: false,
                popupState12: false,
                 popupState13: false,
                  popupState14: false,
                   popupState15: false,
                    popupState16: false,
                     popupState17: false,
                      popupState18: false,
                       popupState19: false,
                        popupState20: false,
                        

    };
  },
// created() {
//     this.formData = this.budgetGeneralUniteAdministrative.find(
//       bGeneral => bGeneral.id == this.$route.params.id
//     )
//     },
  computed: {
    ...mapGetters("planification_budgetaire", ["budgetGeneral","getterspersoBudgetGeneral","budgetGeneralUniteAdministrative","SommeTotalBudgetDesUa"]),
       ...mapGetters("parametreGenerauxAdministratif", ["plans_programmes","exercices_budgetaires","type_Unite_admins","chapitres","sections","grandes_natures","afficheNatureTransfert"]),
     ...mapGetters("parametreGenerauxBudgetaire", ["plans_budgetaires","derniereNivoPlanBudgetaire"]),
    ...mapGetters("uniteadministrative", ["uniteAdministratives","jointureUaChapitreSection"]),
    ...mapGetters("parametreGenerauxFonctionnelle", ["plans_fonctionnels"]),
    ...mapGetters("parametreGenerauxSourceDeFinancement", ["sources_financements","types_financements"]),
exoEnCours(){
return this.exercices_budgetaires.filter(element => element.encours == 1)
},
AffichierBudgetActuel() {
      const qtereel = this.budgetGeneralUniteAdministrative.find(qtreel => qtreel.id == this.formData.nature_dep_id);

      if (qtereel) {
        return qtereel.dotation;
      }
      return 0
    },
    // dotation1(){
    //     return 0
    // },
    sommeMontantEclate(){
          
      const val =
        parseFloat(this.formData.dotation1) +
        parseFloat(this.formData.dotation2) + 
        parseFloat(this.formData.dotation4)
      
         + parseFloat(this.formData.dotation5)
        + parseFloat(this.formData.dotation6)
        + parseFloat(this.formData.dotation7)
        + parseFloat(this.formData.dotation8)
        + parseFloat(this.formData.dotation9)
        + parseFloat(this.formData.dotation10)
        + parseFloat(this.formData.dotation11)
        + parseFloat(this.formData.dotation12)
        + parseFloat(this.formData.dotation13)
        + parseFloat(this.formData.dotation14)
        + parseFloat(this.formData.dotation15)
        + parseFloat(this.formData.dotation16)
        + parseFloat(this.formData.dotation17)
        + parseFloat(this.formData.dotation18)
        + parseFloat(this.formData.dotation19)
        + parseFloat(this.formData.dotation20)
        + parseFloat(this.formData.dotation21)
       ;
      // parseFloat(this.formData.TVA_id);
      if (isNaN(val)) return null;
      return parseFloat(val).toFixed(2);
    
    },
//     sommeRestantBudget(){
// const val =
//         parseFloat(this.AffichierBudgetActuel) -
//         parseFloat(this.sommeMontantEclate);
//       // parseFloat(this.formData.TVA_id);
//       if (isNaN(val)) return null;
//       return parseFloat(val).toFixed(2);
//     }
  },

  methods: {
    ...mapActions("planification_budgetaire", [
      "getAllBudgetGeneral",
      "modifierBudgetGeneral",
      "ajouterBudgetGeneral",
      "supprimerBudgetGeneral"
    ]),
    showPopup2: function() {
      this.popupState2 = true;
    },
     showPopup3: function() {
      this.popupState3 = true;
    },
showPopup4: function() {
      this.popupState4 = true;
    },
    showPopup5: function() {
      this.popupState5 = true;
    },
    showPopup6: function() {
      this.popupState6 = true;
    },
    showPopup7: function() {
      this.popupState7 = true;
    },
    showPopup8: function() {
      this.popupState9 = true;
    },
    showPopup10: function() {
      this.popupState10 = true;
    },
    showPopup11: function() {
      this.popupState11 = true;
    },
    showPopup12: function() {
      this.popupState12 = true;
    },
    showPopup13: function() {
      this.popupState13 = true;
    },
    showPopup14: function() {
      this.popupState14 = true;
    },
    showPopup15: function() {
      this.popupState15 = true;
    },
    showPopup16: function() {
      this.popupState16 = true;
    },
    showPopup17: function() {
      this.popupState17 = true;
    },
    showPopup18: function() {
      this.popupState18 = true;
    },
    showPopup19: function() {
      this.popupState19 = true;
    },
    showPopup20: function() {
      this.popupState20 = true;
    },
    






























     afficherModalModifierBudgetGeneral(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

     
      this.editBudgetGeneral = this.budgetGeneralUniteAdministrative[index];
    },
    //afiicher modal ajouter
    afficherModalAjouterTitre() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
      modifierBudgetGlobalLocal() {
      this.modifierBudgetGeneral(this.editBudgetGeneral);
this.$("#modificationModal").modal('hide');
      // this.editTypeTexte = {
      //   code: "",
      //   libelle: ""
      // };
       
    },
    // fonction pour vider l'input ajouter
    ajouterBudgetGeneralLocal() {
var nouvelObjet = {
        ...this.formData,
       
      

      };
      this.ajouterBudgetGeneral(nouvelObjet);

      this.formData = {
        exercicebudget_id: "",
      gdnaturedepense_id: "",
      section_id: "",
      planprogramme_id: "",
      chapitre_id: "",
      planfonctionnel_id: "",
      planbudgetaire_id: "",
      imputationbudgetaire: "",
      sousfinancement_id: "",
      typefinancement_id: "",
      dotation: "",
      ua_id: "",
      date_jour: "",
      destination: "",
      type_ua_id:""
      };
    },
    // afficher modal de modification
    
    // fonction pour vider l'input modification
   
    // afficher modal de modification
    afficherModalDetailBudgetGeneral(id) {
      this.$router.push({
        path: "/Modifier_immobilisation/" + id
      });
    },
    alert() {
      console.log("ok");
    },
    
ExporterEnExel(){
      this.$refs.excel.click()
    },
        formatageSomme: formatageSomme,
        
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
    
  }
};
</script>

<style scoped>

    .gdtaille{

        width: 90%;
        margin: 0 -45%;
        
    }
    .tailselecte {
  width:1000%;
}

</style>