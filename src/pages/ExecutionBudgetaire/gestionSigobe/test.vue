<template>
    <div>

          
   <div class="widget-box collapsible"  v-for="typeFact in AfficheParDroitCommun" :key="typeFact.id">
          <div class="widget-title" style="background-color: coral;color:#fff !important;font-size:15px" > <a href="#collapseOne" data-toggle="collapse"> <span class="icon"><i class="icon-sitemap" ></i></span>
            <h5 style="color:#fff !important;font-size:20px">{{libelleProcedure(typeFact)}} </h5>
            </a> </div>
            <br>
          <div class="collapse in" id="collapseOne">

        <div class="widget-box collapsible">
            <div class="widget-title" style="background-color: #fff;color:#000!important;font-size:15px; margin-left:30px"> <a href="#ENGAGEMENTDIRECT" data-toggle="collapse"> <span class="icon"><i class=" icon-chevron-down" ></i></span>
            <h5 style="background-color: #fff!important;color:#000!important;font-size:15px;">ENGAGEMENT DIRECT </h5>
            </a> 
            </div>

             <div class="collapse" id="ENGAGEMENTDIRECT">
               <div >
        <table class="table table-bordered table-striped" style="font-size:15px; margin-left:80px">
                <thead>
                  <tr>
                   <th style="font-size:15px;color:#000!important;width:10%">Code</th>
                    <th style="font-size:15px;color:#000!important;width:70%">Libelle</th>
                    <th style="font-size:15px;color:#000!important">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="itemNiveau1 in afficheTypeDepenseEngagementDirect(typeFact)" :key="itemNiveau1.id">
                    <td style="font-size:15px;color:#000!important;font-weight:bold" @dblclick="afficherModalModifierBudgetaire(itemNiveau1.id)" >{{itemNiveau1.code_depense || 'Non renseigné'}}</td>
                    <td style="font-size:15px;color:#000!important;font-weight:bold" @dblclick="afficherModalModifierBudgetaire(itemNiveau1.id)" >{{conversionMajiscule(itemNiveau1.libelle_depense) || 'Non renseigné'}}</td>
                    <td>
                      <button class="btn btn-danger" @click="supprimerProcedureTypeDepenses(itemNiveau1.id)">
                        <span>
                          <i class="icon icon-trash"></i> Supprimer
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              </div>
             </div>




              <br>

<div class="widget-title" style="background-color: #fff;color:#000!important;font-size:15px; margin-left:30px"> <a href="#ENGAGEMENTDIRECT1" data-toggle="collapse"> <span class="icon"><i class=" icon-chevron-down" ></i></span>
            <h5 style="background-color: #fff!important;color:#000!important;font-size:15px;">ENGAGEMENT PAR BON DE COMMANDE  </h5>
            </a> 
            </div>

             <div class="collapse" id="ENGAGEMENTDIRECT1">
<table class="table table-bordered table-striped" style="font-size:15px; margin-left:80px">
                <thead>
                  <tr>
                     <th style="font-size:15px;color:#000!important">Code</th>
                    <th style="font-size:15px;color:#000!important;width:70%">Libelle</th>
                    <th style="font-size:15px;color:#000!important">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="itemNiveau2 in afficheTypeDepenseBonCommande(typeFact)" :key="itemNiveau2.id">
                      <td style="font-size:15px;color:#000!important;font-weight:bold" @dblclick="afficherModalModifierBudgetaire(itemNiveau2.id)" >{{itemNiveau2.code_depense || 'Non renseigné'}}</td>
                    <td style="font-size:15px;color:#000!important;font-weight:bold" @dblclick="afficherModalModifierBudgetaire(itemNiveau2.id)" >{{conversionMajiscule(itemNiveau2.libelle_depense) || 'Non renseigné'}}</td>
                    <td>
                      <button class="btn btn-danger" @click="supprimerProcedureTypeDepenses(itemNiveau2.id)">
                        <span>
                          <i class="icon icon-trash"></i> Supprimer
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>

             </div>
             </div>
          </div>
           
        </div>
   



   <div class="widget-box collapsible1"  v-for="typeFact9 in AfficheParProcedureDerogation" :key="typeFact9.id">
          <div class="widget-title" style="background-color: coral;color:#fff !important;font-size:15px" > <a href="#collapseOne1" data-toggle="collapse"> <span class="icon"><i class="icon-sitemap" ></i></span>
            <h5 style="color:#fff !important;font-size:20px">{{libelleProcedure(typeFact9)}} </h5>
            </a> </div>
            <br>
          <div class="collapse in" id="collapseOne1">
              
        <div class="widget-box collapsible1" >
       <div class="widget-title" style="background-color: #fff;color:#000!important;font-size:15px; margin-left:30px"> <a href="#ENGAGEMENTDIRECT78" data-toggle="collapse"> <span class="icon"><i class=" icon-chevron-down" ></i></span>
            <h5 style="background-color: #fff!important;color:#000!important;font-size:15px;">ENGAGEMENT DIRECT </h5>
            </a> 
            
            </div>
             <div class="collapse" id="ENGAGEMENTDIRECT78">
<!-- <div class="widget-box collapsible1" v-for="itemNiveau9 in afficheTypeDepenseEngagementDirectProcedureDerogatoire(typeFact9)" :key="itemNiveau9.id">
    <div class="widget-title" style="background-color: #228B22;color:#fff!important;font-size:15px; margin-left:80px"> <a href="#DEMANDEENGAGAMENT" data-toggle="collapse"> <span class="icon"></span>
            <h5 style="color:#FFF!important;font-size:15px;">{{itemNiveau9.libelle_depense}} </h5>
            </a> 
            </div>
    </div> -->
<table class="table table-bordered table-striped" style="font-size:15px; margin-left:80px">
                <thead>
                  <tr>
                   <th style="font-size:15px;color:#000!important">Code</th>
                    <th style="font-size:15px;color:#000!important;width:70%">Libelle</th>
                    <th style="font-size:15px;color:#000!important">Action</th>
                  </tr>
                </thead>
                <tbody>

                  <tr class="odd gradeX" v-for="itemNiveau9 in afficheTypeDepenseEngagementDirectProcedureDerogatoire(typeFact9)" :key="itemNiveau9.id">
                                       <td style="font-size:15px;color:#000!important;font-weight:bold" @dblclick="afficherModalModifierBudgetaire(itemNiveau9.id)" >{{itemNiveau9.code_depense || 'Non renseigné'}}</td>
                    <td style="font-size:15px;color:#000!important;font-weight:bold" @dblclick="afficherModalModifierBudgetaire(itemNiveau9.id)" >{{conversionMajiscule(itemNiveau9.libelle_depense) || 'Non renseigné'}}</td>
                    <td>
                      <button class="btn btn-danger" @click="supprimerProcedureTypeDepenses(itemNiveau9.id)">
                        <span>
                          <i class="icon icon-trash"></i> Supprimer
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>

             </div>
              <br>
       
             </div>
          </div>
          
         
         
        </div>
<!----- ajouter modal   ---->


 <div id="exampleModal" class="modal hide">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter Type de dépenses </h3>
              </div>
              <div class="modal-body">
                <table class="table table-bordered table-striped">
                  <tr>
              <td>
                 <span> Marche :code = M </span>//
                 <span> Autres Depense :code = AD </span>
                </td>
            </tr>
       <tr>
            <td>
                          <div class="control-group">
                            <label class="control-label"
                              >Procédures de Dépenses 
                             </label
                            >
                            <div class="controls">
                              <select
                                v-model="formData.Procedures_depenses_id"
                                class="span5"
                                style="border: 1px solid #000"
                              >
                                <option
                                  v-for="gdenature in gettersProcedureDroitCommuns"
                                  :key="gdenature.id"
                                  :value="gdenature.id"
                                >
                                  {{ gdenature.libelle }}
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
                              >Modalité d'Execution 
                             </label
                            >
                            <div class="controls">
                              <select
                                v-model="formData.modalites_execution_id"
                                class="span5"
                                style="border: 1px solid #000"
                              >
                                <option
                                  v-for="gdenature in gettersProcedureDerogatoires"
                                  :key="gdenature.id"
                                  :value="gdenature.id"
                                >
                                  {{ gdenature.libelle }}
                                </option>
                              </select>
                            
                            </div>
                          </div>
                        </td>
            </tr>
            <tr>
              <td>
                <div class="control-group">
              <label class="control-label">Code de la Depense</label>
              <div class="controls">
                <input type="text" v-model="formData.code_depense" class="span5" placeholder="Saisir le libellé" />
              </div>
            </div>
              </td>
              
            </tr>
            <tr>
              <td>
                <div class="control-group">
              <label class="control-label">Libelle de la Depense</label>
              <div class="controls">
                <input type="text" v-model="formData.libelle_depense" class="span5" placeholder="Saisir le libellé" />
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





 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier Type de dépenses </h3>
              </div>
              <div class="modal-body">
                <table class="table table-bordered table-striped">
                  <tr>
              <td>
                 <span> Marche :code = M </span>//
                 <span> Autres Depense :code = AD </span>
                </td>
            </tr>
       <tr>
            <td>
                          <div class="control-group">
                            <label class="control-label"
                              >Procédures de Dépenses 
                             </label
                            >
                            <div class="controls">
                              <select
                                v-model="editProcedureDroitCommun.Procedures_depenses_id"
                                class="span5"
                                style="border: 1px solid #000"
                              >
                                <option
                                  v-for="gdenature in gettersProcedureDroitCommuns"
                                  :key="gdenature.id"
                                  :value="gdenature.id"
                                >
                                  {{ gdenature.libelle }}
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
                              >Modalité d'Execution 
                             </label
                            >
                            <div class="controls">
                              <select
                                v-model="editProcedureDroitCommun.modalites_execution_id"
                                class="span5"
                                style="border: 1px solid #000"
                              >
                                <option
                                  v-for="gdenature in gettersProcedureDerogatoires"
                                  :key="gdenature.id"
                                  :value="gdenature.id"
                                >
                                  {{ gdenature.libelle }}
                                </option>
                              </select>
                            
                            </div>
                          </div>
                        </td>
            </tr>
            <tr>
              <td>
                <div class="control-group">
              <label class="control-label">Code de la Depense</label>
              <div class="controls">
                <input type="text" v-model="editProcedureDroitCommun.code_depense" class="span5" placeholder="" />
              </div>
            </div>
              </td>
              
            </tr>
            <tr>
              <td>
                <div class="control-group">
              <label class="control-label">Libelle de la Depense</label>
              <div class="controls">
                <input type="text" v-model="editProcedureDroitCommun.libelle_depense" class="span5" placeholder="Saisir le libellé" />
              </div>
            </div>
              </td>
            </tr>
            
          </table>              
          </div>
           <div class="modal-footer"> 
             <button 
              @click.prevent="modifierBudgetaireLocal" class="btn btn-primary"
              href="#">Modifier</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>

 

    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>