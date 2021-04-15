
<template>
  <div >
    <notifications  />
    

      <div class="widget-box">
          <div class="widget-title">
              <ul class="nav nav-tabs">
                  <li class="active"><a data-toggle="tab" href="#tout_decompte">Decomptes</a></li>
                  <!-- <li v-for="item in arrayExerciceDecompte(macheid)" :key="item"><a data-toggle="tab" :href="'#'+item">Exercice {{item}}</a></li> -->

              </ul>
          </div>
          <div class="widget-content tab-content">
              <div id="tout_decompte" class="tab-pane active">
                  <table class="table table-bordered table-striped" v-if="macheid">
                      <thead>
                      <tr>

                          <th style="text-align:center;font-size:12px">N°Décompte</th>

                          <th style="text-align:center;font-size:12px">Date</th>
                            <th style="text-align:center;font-size:12px">Type OP</th>
                            <th style="text-align:center;font-size:12px">N° OP</th>
                          <th style="text-align:center;font-size:12px">Acompte HTVA</th>
                          <th style="text-align:center;font-size:12px">Avance</th>
                          <th style="text-align:center;font-size:12px">Garantie</th>
                          <th style="text-align:center;font-size:12px">Penalités </th>
                          <th style="text-align:center;font-size:12px">Net HTVA </th>
                          <th style="text-align:center;font-size:12px">Net TTC</th>
                          <th style="text-align:center;font-size:12px">Etat ({{recupereTauxEtat(macheid)}}% + (TVA 18%))</th>
                          <th style="text-align:center;font-size:12px">Bailleur({{recupereTauxBailleur(macheid)}}% HTVA) </th>
                          <th style="text-align:center;font-size:12px">Motif Cf </th>
                          <th style="text-align:center;font-size:12px">Autres Motif </th>
                          <th style="text-align:center;font-size:12px">Décision </th>
                          
                          <th style="text-align:center;font-size:12px">Tache </th>
                          <th style="text-align:center;font-size:12px">Réalite Service Fait </th>
                           <th style="text-align:center;font-size:12px">Image </th>
                          <th style="text-align:center;font-size:12px">Supprimer </th>
                          
                          <!-- <th style="text-align:center;font-size:12px" colspan="5">Action </th> -->
                      </tr>

                      </thead>
                      <tbody>
                      <tr class="odd gradeX" v-for="type in afficheMarcheDecompte(macheid)" :key="type.id">
                          <td style="text-align:center;"
                              @dblclick="afficherModalModifierTypeTexte1(type.id)"
                          >{{type.numero_decompte || 'Non renseigné'}}</td>
                      
                          <td style="text-align:center;"
                              @dblclick="afficherModalModifierTypeTexte1(type.id)"
                          >{{formaterDate(type.date_decompte) || 'Non renseigné'}}</td>
            
 <td @dblclick="afficherModalModifierTypeTexte1(type.id)"
                      
                      style="
                        font-size: 14px;
                        font-weight: bold;
                        text-align: center;
                      "
                    >
                      <span v-if="typeOp(type.op_id) == 1">OP Direct</span>
                       <span  v-else-if="typeOp(type.op_id) == 2">OP Provisoire</span>
                        <span v-else-if="typeOp(type.op_id) == 3">OP Annulation</span>
                         <span v-else-if="typeOp(type.op_id) == 4">OP Définitif</span>
                         
                         
                    </td>
               
                  <td style="text-align:center;"
                              @dblclick="afficherModalModifierTypeTexte1(type.id)"
                          >{{NumeroOp(type.op_id) || 'Non renseigné'}}</td>

                          <td style="text-align:center;"
                              @dblclick="afficherModalModifierTypeTexte1(type.id)"
                          >{{formatageSommeSansFCFA(parseFloat(type.montantmarche)) || 'Non renseigné'}}</td>

                          <td style="text-align:center;"
                              @dblclick="afficherModalModifierTypeTexte1(type.id)"
                          >{{formatageSommeSansFCFA(parseFloat(type.retenu_avance)) || 'Non renseigné'}}</td>

                          <td style="text-align:center;"
                              @dblclick="afficherModalModifierTypeTexte1(type.id)"
                          >{{formatageSommeSansFCFA(parseFloat(type.retenu_garantie)) || 'Non renseigné'}}</td>

                          <td style="text-align:center;"
                              @dblclick="afficherModalModifierTypeTexte1(type.id)"
                          >{{formatageSommeSansFCFA(parseFloat(type.retenu_penalite)) || 'Non renseigné'}}</td>

                          <td style="text-align:center;"
                              @dblclick="afficherModalModifierTypeTexte1(type.id)"
                          >{{formatageSommeSansFCFA(parseFloat(type.nethtva)) || 'Non renseigné'}}</td>


                          <td style="text-align:center;"
                              @dblclick="afficherModalModifierTypeTexte1(type.id)"
                          >{{formatageSommeSansFCFA(parseFloat(type.netttc)) || 'Non renseigné'}}</td>


                          <td style="text-align:center;"
                              @dblclick="afficherModalModifierTypeTexte1(type.id)"
                          >{{formatageSommeSansFCFA(parseFloat(type.parts_etat)) || 'Non renseigné'}}</td>


                          <td style="text-align:center;"
                              @dblclick="afficherModalModifierTypeTexte1(type.id)"
                          >{{formatageSommeSansFCFA(parseFloat(type.parts_bailleur)) || 'Non renseigné'}}</td>

                          <td style="text-align:center;"
                          >{{libelleMotifCf(MotifCf(type.op_id)) || 'Non renseigné'}}</td>

                          <td style="text-align:center;"
                          >{{AffcheAutresMotif(type.op_id) || 'Non renseigné'}}</td>

                          <td style="text-align:center;">

                              <button
                                      v-if="StatusDecompte(type.op_id) == 8"  class="btn  btn-success">
                                  <span  style="">Visé</span>

                              </button>
                              <button
                                      v-else-if="StatusDecompte(type.op_id) == 9"  class="btn  btn-success">
                                  <span >Visé avec Observation</span>

                              </button>
                              <button
                                      v-else-if="StatusDecompte(type.op_id) == 2"  class="btn  btn-warning">
                                  <span  >Différé</span>

                              </button>
                              <button v-else-if="StatusDecompte(type.op_id) == 3" class="btn  btn-danger">

                                  <span >Réjeté</span>
                              </button>
                              <button v-else-if="StatusDecompte(type.op_id) == 0" class="btn  btn-info">

                                  <span >Attente</span>
                              </button>
                              
                              </td>

                              <td>
                              <router-link :to="{ name: 'AjouterTacheRealise', params: { id: type.id }}"
                                           class="btn btn-inverse " title="Voir Tâche Réalisée">
                                  <span class=""><i class="icon-eye-open"></i>Tâche</span>
                              </router-link>
                              
                          </td>

                          <td v-if="typeOp(type.op_id) == 1 || typeOp(type.op_id) == 4">
                              <router-link :to="{ name: '', params: { id: type.id }}"
                                           class="btn btn-danger " title="Realite Service  Fait">
                                  <span class=""><i class="icon-eye-open" title="Realite Service  Fait"></i>RSF</span>
                              </router-link>
                              
                          </td> 
<td v-else style="background-color:lightblue"></td>
                          <td>
                              <router-link :to="{ name: 'ListeImageMarche', params: { id: type.id }}"
                                           class="btn btn-inverse " title="">
                                  <span class=""><i class="icon-eye-open"></i>Image</span>
                              </router-link>
                             
                          </td>

                          <td>
                            <button class="btn btn-danger" @click="supprimerDecompteFacture(type.id)">
                        <span>
                          <i class="icon icon-trash"> Supprimer</i>
                        </span>
                              </button>
                          </td>


                        
                         
                         

                        
                        
                         
                      </tr>


                      <tr>

                          <td colspan="3" style="text-align:center;color:red">CUMULS</td>
<td style="text-align:center;"></td>
                          <td style="text-align:center;">{{formatageSommeSansFCFA(parseFloat(CumulMontantFacture(macheid)))}}</td>
                          <td style="text-align:center;">{{formatageSommeSansFCFA(parseFloat(CumulAvance(macheid)))}}</td>
                          <td style="text-align:center;">{{formatageSommeSansFCFA(parseFloat(CumulGArantie(macheid)))}}</td>
                          <td style="text-align:center;">{{formatageSommeSansFCFA(parseFloat(CumulPenalite(macheid)))}}</td>
                          <td style="text-align:center;">{{formatageSommeSansFCFA(parseFloat(CumulNetHtva(macheid)))}}</td>
                          <td style="text-align:center;">{{formatageSommeSansFCFA(parseFloat(CumulNetTTC(macheid)))}}</td>
                          <td style="text-align:center;">{{formatageSommeSansFCFA(parseFloat(CumulPartEtat(macheid)))}}</td>
                          <td style="text-align:center;">{{formatageSommeSansFCFA(parseFloat(CumulPartBailler(macheid)))}}</td>
                   
                          <td style="text-align:center;"></td>
                          <td style="text-align:center;"></td>
                          <td style="text-align:center;"></td>
                           <td style="text-align:center;"></td>
                             <td style="text-align:center;"></td>
                             <td style="text-align:center;"></td>
                             <td style="text-align:center;"></td>
                      </tr>
                      <tr>

                          <td colspan="3" style="text-align:center;color:red">% CUMULS</td>
                          <td style="text-align:center;"></td>
                          <td style="text-align:center;">{{((parseFloat(CumulMontantFacture(macheid))/parseFloat(MontantMarche(macheid)))/100).toFixed(2)}}</td>
                          <td style="text-align:center;">{{PourcentageCumulAvanceDemarrage}}</td>
                          <td style="text-align:center;">{{PourcentageCumulGarantie}}</td>
                          
                          <td style="text-align:center;"></td>
                          <td style="text-align:center;"></td>
                          <td style="text-align:center;"></td>
                          <td style="text-align:center;"></td>
                          <td style="text-align:center;"></td>
                          <td style="text-align:center;"></td>
                          <td style="text-align:center;"></td>
                          <td style="text-align:center;"></td>
                           <td style="text-align:center;"></td>
                             <td style="text-align:center;"></td>
                             <td style="text-align:center;"></td>
                             <td style="text-align:center;"></td>
                      </tr>
                      </tbody>
                  </table>
              </div>
              <div v-for="item in arrayExerciceDecompte(macheid)" :key="'DEC'+item" :id="item" class="tab-pane">

                  <table class="table table-bordered table-striped" v-if="macheid">
                      <thead>
                      <tr>

                          <th style="text-align:center;font-size:12px">N°Décompte</th>

                          <th style="text-align:center;font-size:12px">Date</th>
                           
                          <th style="text-align:center;font-size:12px">Acompte HTVA (FCFA)</th>
                          <th style="text-align:center;font-size:12px">Avance (FCFA)</th>
                          <th style="text-align:center;font-size:12px">Garantie (FCFA)</th>
                          <th style="text-align:center;font-size:12px">Penalités (FCFA)</th>
                          <th style="text-align:center;font-size:12px">Net HTVA (FCFA)</th>
                          <th style="text-align:center;font-size:12px">Net TTC (FCFA)</th>
                          <th style="text-align:center;font-size:12px">Etat ({{recupereTauxEtat(macheid)}}% + (TVA 18%))(FCFA)</th>
                          <th style="text-align:center;font-size:12px">Bailleur({{recupereTauxBailleur(macheid)}}% HTVA) (FCFA)</th>

                          <th style="text-align:center;font-size:12px">Motif Cf </th>
                          <th style="text-align:center;font-size:12px">Autres Motif </th>
                          <th style="text-align:center;font-size:12px">Décision </th>
                          <th style="text-align:center;font-size:12px">Action </th>
                      </tr>

                      </thead>
                      <tbody>
                      <tr class="odd gradeX" v-for="type in decompteParExercice(macheid,item)" :key="type.id">
                          <td style="text-align:center;"
                              @dblclick="afficherModalModifierTypeTexte1(type.id)"
                          >{{type.numero_decompte || 'Non renseigné'}}</td>
                          
                          <td style="text-align:center;"
                              @dblclick="afficherModalModifierTypeTexte1(type.id)"
                          >{{formaterDate(type.date_decompte) || 'Non renseigné'}}</td>
                          
                          <td style="text-align:center;"
                              @dblclick="afficherModalModifierTypeTexte1(type.id)"
                          >{{formatageSommeSansFCFA(parseFloat(type.montantmarche)) || 'Non renseigné'}}</td>
                          <td style="text-align:center;"
                              @dblclick="afficherModalModifierTypeTexte1(type.id)"
                          >{{formatageSommeSansFCFA(parseFloat(type.retenu_avance)) || 'Non renseigné'}}</td>

                          <td style="text-align:center;"
                              @dblclick="afficherModalModifierTypeTexte1(type.id)"
                          >{{formatageSommeSansFCFA(parseFloat(type.retenu_garantie)) || 'Non renseigné'}}</td>

                          <td style="text-align:center;"
                              @dblclick="afficherModalModifierTypeTexte1(type.id)"
                          >{{formatageSommeSansFCFA(parseFloat(type.retenu_penalite)) || 'Non renseigné'}}</td>
                          <td style="text-align:center;"
                              @dblclick="afficherModalModifierTypeTexte1(type.id)"
                          >{{formatageSommeSansFCFA(parseFloat(type.nethtva)) || 'Non renseigné'}}</td>


                          <td style="text-align:center;"
                              @dblclick="afficherModalModifierTypeTexte1(type.id)"
                          >{{formatageSommeSansFCFA(parseFloat(type.netttc)) || 'Non renseigné'}}</td>


                          <td style="text-align:center;"
                              @dblclick="afficherModalModifierTypeTexte1(type.id)"
                          >{{formatageSommeSansFCFA(parseFloat(type.parts_etat)) || 'Non renseigné'}}</td>


                          <td style="text-align:center;"
                              @dblclick="afficherModalModifierTypeTexte1(type.id)"
                          >{{formatageSommeSansFCFA(parseFloat(type.parts_bailleur)) || 'Non renseigné'}}</td>
                          <td style="text-align:center;"
                          >{{libelleMotifCf(MotifCf(type.facture_id)) || 'Non renseigné'}}</td>
                          <td style="text-align:center;"
                          >{{AffcheAutresMotif(type.facture_id) || 'Non renseigné'}}</td>
                          <td style="text-align:center;">

                              <button
                                      v-if="StatusDecompte(type.facture_id) == 8"  class="btn  btn-success">
                                  <span  style="">Visé</span>

                              </button>
                              <button
                                      v-else-if="StatusDecompte(type.facture_id) == 9"  class="btn  btn-success">
                                  <span >Visé avec Observation</span>

                              </button>
                              <button
                                      v-else-if="StatusDecompte(type.facture_id) == 2"  class="btn  btn-warning">
                                  <span  >Différé</span>

                              </button>
                              <button v-else-if="StatusDecompte(type.facture_id) == 3" class="btn  btn-danger">

                                  <span >Réjeté</span>
                              </button>
                              <button v-else class="btn  btn-info">

                                  <span >Attente</span>
                              </button>
                          </td>
                          <td>
                              <router-link :to="{ name: 'AjouterTacheRealise', params: { id: type.id }}"
                                           class="btn btn-inverse " title="Voir Tâche Réalisée">
                                  <span class=""><i class="icon-eye-open"></i> Voir Tâche</span>
                              </router-link>
                              <button class="btn btn-danger" @click="supprimerDecompteFacture(type.id)">
                        <span>
                          <i class="icon icon-trash"> Supprimer</i>
                        </span>
                              </button>
                          </td>
                      </tr>
                      <tr>

                          <td colspan="2" style="text-align:center;color:red">CUMULS</td>
<td style="text-align:center;"></td>
                          <td style="text-align:center;">{{formatageSommeSansFCFA(parseFloat(CumulMontantFacture(macheid)))}}</td>
                          <td style="text-align:center;">{{formatageSommeSansFCFA(parseFloat(CumulAvance(macheid)))}}</td>
                          <td style="text-align:center;">{{formatageSommeSansFCFA(parseFloat(CumulGArantie(macheid)))}}</td>
                          <td style="text-align:center;">{{formatageSommeSansFCFA(parseFloat(CumulPenalite(macheid)))}}</td>
                          <td style="text-align:center;">{{formatageSommeSansFCFA(parseFloat(CumulNetHtva(macheid)))}}</td>
                          <td style="text-align:center;">{{formatageSommeSansFCFA(parseFloat(CumulNetTTC(macheid)))}}</td>
                          <td style="text-align:center;">{{formatageSommeSansFCFA(parseFloat(CumulPartEtat(macheid)))}}</td>
                          <td style="text-align:center;">{{formatageSommeSansFCFA(parseFloat(CumulPartBailler(macheid)))}}</td>
                          
                          <td style="text-align:center;"></td>
                          <td style="text-align:center;"></td>
                          <td style="text-align:center;"></td>
                          <td style="text-align:center;"></td>
                          <td style="text-align:center;"></td>
                      </tr>
                      <tr>

                          <td colspan="2" style="text-align:center;color:red">% CUMULS</td>
                          <td style="text-align:center;"></td>
                          <td style="text-align:center;">{{((parseFloat(CumulAvance(macheid))/parseFloat(MontantMarche(macheid)))/100).toFixed(2)}}</td>
                          <td style="text-align:center;">{{PourcentageCumulAvanceDemarrage}}</td>
                          <td style="text-align:center;">{{PourcentageCumulGarantie}}</td>
                          
                          <td style="text-align:center;"></td>
                          <td style="text-align:center;"></td>
                          <td style="text-align:center;"></td>
                          <td style="text-align:center;"></td>
                          <td style="text-align:center;"></td>
                          <td style="text-align:center;"></td>
                          <td style="text-align:center;"></td>
                          <td style="text-align:center;"></td>
                          <td style="text-align:center;"></td>
                          <td style="text-align:center;"></td>
                      </tr>
                      </tbody>
                  </table>
              </div>

          </div>
      </div>


 <div id="exampleModal" class="modal hide grdirModalActeEffet">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier decompte</h3>
      </div>
          <table class="table table-bordered table-striped">
                <div class="widget-box">  
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                     <li class="active"><a data-toggle="tab" href="#MARCHE">INFO ENTREPRISE</a></li>
        <li class=""><a data-toggle="tab" href="#DEMARRAGE">INFO MARCHE</a></li>
        <li class=""><a data-toggle="tab" href="#DECOMPTE">INFO DECOMPTE</a></li>
                      
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                   
                  <div id="DECOMPTE" class="tab-pane">
         <table class="table table-bordered table-striped">
           <tr>
              <td>

              <div class="control-group">
              <label class="control-label">N°décompte</label>
                <div class="controls">
                  <input
                      type="number"
                      
                      v-model="editDecompte.numero_decompte"
                      class="span"
                      
                  />
                </div>
              </div>
            </td>
           
             <td >
              <div class="control-group">
                <label class="control-label" >Date décompte</label>
                <div class="controls">
                  <input
                      type="date"
                    v-model="editDecompte.date_decompte"
                      
                      class="span"
                      
                  />
                </div>
              </div>
            </td>
            <td>

              <div class="control-group">
                <label class="control-label">Montant Acompte HTVA</label>
                <div class="controls">
                  <input type="text" 
                         class="span"
                         readonly
                         v-model="editDecompte.facture_id"
                  />
                </div>
              </div>
            </td>
            
             
           </tr>
            <tr>
               <td >
              <div class="control-group">
                <label class="control-label" > Retenue d avance </label>
                <div class="controls">
                  <input
                      type="number"
                       :value="MontantRetenuAvance(editDecompte.marche_id)"
                    readonly
                      class="span"
                     
                  />

                </div>
              </div>
            </td>
             <td >
              <div class="control-group">
                <label class="control-label" > Retenue de garantie</label>
                <div class="controls">
                  <input
                      type="number"
                      
                    :value="MontantRetenuGarantie(editDecompte.marche_id)"
                      class="span"
                      readonly
                  />

                </div>
              </div>
            </td>
            
             <td colspan="">
              <div class="control-group">
                <label class="control-label" >Retenue de pénalité</label>
                <div class="controls">
                  <input
                      type="number"
                       v-model="editDecompte.retenu_penalite" 

                      class="span"
                      readonly
                  />

                </div>
              </div>
            </td>
           </tr>
            <tr>
               <td >
              <div class="control-group">
                <label class="control-label" > Retenue d avance</label>
                <div class="controls">
                  <input
                      type="number"
                       
                    v-model="editDecompte.retenu_avance"
                      class="span"
                     
                  />

                </div>
              </div>
            </td>
             <td >
              <div class="control-group">
                <label class="control-label" > Retenue de garantie</label>
                <div class="controls">
                  <input
                      type="number"
                      
                         v-model="editDecompte.retenu_garantie"
                      class="span"
                      
                  />
           
                </div>
              </div>
            </td>
            
             <td colspan="">
              <div class="control-group">
                <label class="control-label" >Retenue de pénalité</label>
                <div class="controls">
                  <input
                      type="number"
                        v-model="editDecompte.retenu_penalite"

                      class="span"
                      
                  />

                </div>
              </div>
            </td>
           </tr>
           <tr>
             <td >
              <div class="control-group">
                <label class="control-label" >Montant HT (aprés retenues)</label>
                <div class="controls">
                  <input
                      type="text"  
                        :value="MontantapresretenuesModifier"
                     
                      class="span"
                      readonly
                  />

                </div>
              </div>
            </td>
              <td>
              <div class="control-group">
                <label class="control-label">TVA(18%)</label>
                <div class="controls">


                  <input type="text" 
                         class="span"
                         :value="MontantTVAFacture(editDecompte.facture_id)"
                         readonly
                  />

                </div>
              </div>
            </td>
             <td>
               <div class="control-group">
                <label class="control-label" >Montant TTC</label>
                <div class="controls">
                  <input
                      type="text"
                      :value="MontantTTCModifier"

                      class="span"
                      readonly 
                  />

                </div>
              </div>
             </td>
             
           </tr>
           <tr>
             <td >
              <div class="control-group">
              
                <div class="controls">
                  <input
                      type="hidden"  
                          :value="montantTTCMarche(macheid)"
                      step='100'
                      class="span"
                      readonly
                  />

                </div>
              </div>
            </td>
              <td>
              <div class="control-group">
                
                <div class="controls">


                  <input type="hidden" 
                         class="span"
                         :value="TauxBailleurDuMarcheModifier"
                         readonly
                  />

                </div>
              </div>
            </td>
             <td>
               <div class="control-group">
                 
                <div class="controls">
                  <input
                      type="hidden"
                      :value="ModifierModifier"

                      class="span"
                      readonly
                  />

                </div>
              </div>
             </td>
             
           </tr>
            <tr>
             <td >
              <div class="control-group">
                
                <div class="controls">
                  <input
                      type="hidden"  
                          :value="montantTTCMarche(macheid)"
                      step='100'
                      class="span"
                      readonly
                  />

                </div>
              </div>
            </td>
              <td>
              <div class="control-group">
                
                <div class="controls">


                  <input type="hidden" 
                         class="span"
                         :value="TauxBailleurTresor(editDecompte.marche_id)"
                         readonly
                  />

                </div>
              </div>
            </td>
             <td>
               <div class="control-group">
                
                <div class="controls">
                  <input
                      type="hidden"
                      :value="ModifierModifier"

                      class="span"
                      readonly
                  />

                </div>
              </div>
             </td>
             
           </tr>
         </table>
        
      </div>
                      <div id="MARCHE" class="tab-pane active">
         <table class="table table-bordered table-striped">
           <tr>
              <td>

              <div class="control-group">
                <label class="control-label">Nom de l Entreprise</label>
                <div class="controls">
                  <input
                      type="text"
                       :value="NomEntrepriseModifier(editDecompte.marche_id)"
                      
                      class="span"
                      readonly
                  />
                </div>
              </div>
            </td>
           
             <td >
              <div class="control-group">
                <label class="control-label" >Adresse</label>
                <div class="controls">
                  <input
                      type="text"
                     :value="AdresseEmailEntreprise(NomEntrepriseModifier(editDecompte.marche_id))"
                      
                      class="span"
                      readonly
                  />
                </div>
              </div>
            </td>
            <td >
              <div class="control-group">
                <label class="control-label" > N°de compte Contribuable</label>
                <div class="controls">
                  <input
                      type="text"
                       
                      :value="ContribuableEntreprise(NomEntrepriseModifier(editDecompte.marche_id))"
                      class="span"
                      readonly
                  />

                </div>
              </div>
            </td>
             
           </tr>
            <tr>
            
            
             <td colspan="3">
              <div class="control-group">
                <label class="control-label" >Objet</label>
                <div class="controls">
                  <input
                      type="text"
                       
                      :value="libelleObjet(editDecompte.marche_id)"
                      class="span12"
                      readonly
                  />

                </div>
              </div>
            </td>
           </tr>
         </table>
        
      </div>
      <div id="DEMARRAGE" class="tab-pane">
         <table class="table table-bordered table-striped">
           <tr>
             <td >
              <div class="control-group">
                <label class="control-label" >N°de Marché</label>
                <div class="controls">
                  <input
                      type="text"  
                       :value="NumeroMarche(editDecompte.marche_id)"
                      
                      class="span"
                      readonly
                  />

                </div>
              </div>
            </td>
              <td>
              <div class="control-group">
                <label class="control-label">Date d'Approbation du marché</label>
                <div class="controls">


                  <input type="text" 
                         class="span"
                         :value="dateApprobation(editDecompte.marche_id)"
                         readonly
                  />

                </div>
              </div>
            </td>
             <td>
               <div class="control-group">
                <label class="control-label" >Imputation Budgétaire</label>
                <div class="controls">
                  <input
                      type="text"
                      :value="Imputation(idParent(editDecompte.marche_id))"
                      
                      class="span"
                      readonly
                  />

                </div>
              </div>
             </td>
             <td >
              <div class="control-group">
                <label class="control-label" >Montant initial du marché HT</label>
                <div class="controls">
                  <input
                      type="number"
                           :value="montantHtMarche(editDecompte.marche_id)"

                      class="span"
                      readonly
                  />

                </div>
              </div>
            </td>
           </tr>
             <tr>
             <td >
              <div class="control-group">
                <label class="control-label" >Montant total du marché TTC</label>
                <div class="controls">
                  <input
                      type="text"  
                         :value="montantTTCMarche(editDecompte.marche_id)"
                      step='100'
                      class="span"
                      readonly
                  />

                </div>
              </div>
            </td>
              <td>
              <div class="control-group">
                 <label class="control-label">PART Bailleur</label> 
                <div class="controls">


                  <input type="text" 
                         class="span"
                         :value="SommeBailleurDuMarcheModifier"
                         readonly
                  />

                </div>
              </div>
            </td>
             <td colspan="2">
               <div class="control-group">
                <label class="control-label" >PART ETAT</label>
                <div class="controls">
                  <input
                      type="text"
                       :value="MontantEtatCoteIvoire(editDecompte.marche_id)"


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
                  <br />
                  <div align="right">
                    <div class="controls">
                      <div data-toggle="buttons-checkbox" class="btn-group">
                        <a
                          class="btn btn-primary"
                          @click.prevent="AjouterDecompte"
                        >Valider</a>
                        <a
                          @click.prevent="afficherModalListeExecution()"
                          class="btn"
                          href="#"
                        >Fermer</a>
                      </div> 
                    </div>
                  </div>
                </div>
              </table>
 
      
       <div class="modal-footer">
        <a
          @click.prevent="modifierDecompteLocal()"
          class="btn btn-primary"
          href="#"
          
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
       </div>
    </div>
  
  </div>
</template>
  
<script>

import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import { formatageSommeSansFCFA } from './../../../../../Repositories/Repository';
// // import { ModelListSelect } from "vue-search-select";
// // import "vue-search-select/dist/VueSearchSelect.css";
export default {
  // components: {
  //   ModelListSelect
  // }, 
  data() {  
    return {
     editDecompte:{},
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ],

      search: ""
    };
  },
props:["macheid"],
 created() {
            this.marcheid=this.$route.params.id
   this.detail_Facture = this.getFacturePersonnaliser.find(
       idmarche => idmarche.id == this.$route.params.id
         )
     console.log("............")
     console.log(this.arrayExerciceDecompte(this.macheid))
      
},
  computed: {
 ...mapGetters("bienService", ["gettersgestionOrdrePaiement","getFacturePersonnaliser","personnaliseGetterMarcheBailleur","modepaiements",'mandats','getMandatPersonnaliserVise','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
     'acteEffetFinanciers','montantPlanification','montantContratualisation','afficheContratualisation','affichePlanifier',
     'nombremarchesExecute',
     'AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
      "printMarcheNonAttribue","procedurePassations","typeTypeProcedures",
     "montantComtratualisation","text_juridiques", "gettersOuverturePersonnaliser", "typeActeEffetFinanciers"]),

   ...mapGetters('personnelUA', ['acteur_depenses',"paiementPersonnel"]),
   
   ...mapGetters('uniteadministrative',[
    "plans_programmes",
 "uniteAdministratives",
 "afficheNiveauAction",
 "afficheNiveauActivite",
 "derniereNivoPlanBudgetaire",
 "getPersonnaliseBudgetGeneralParPersonnel",
 "decomptefactures"
   
   
   ]), 

   ...mapGetters('parametreGenerauxAdministratif',[

 "sections",
 "type_Unite_admins",
 "plans_programmes",
 "natures_sections",
 "grandes_natures",
 "afficheNiveauPlanProg",
 "exercices_budgetaires"
   ]),

  

   ...mapGetters('parametreGenerauxFonctionnelle',[

      "plans_fonctionnels",
 "afficheNiveauPlanFonctionnel",
 "plans_Decision"
   ]),
...mapGetters('parametreGenerauxActivite',[ 'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

...mapGetters('parametreGenerauxBudgetaire',["plans_budgetaires","derniereNivoPlanBudgetaire"]),
...mapGetters("gestionMarche", ['secteur_activites', 'entreprises','banques','comptes','getCompte']),
    NumeroOp() {
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
typeOp() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.type_ordre_paiement;
      }
      return 0
        }
      };
    },




 CumulMontantFacture() {
      return id => {
        if (id != null && id != "") {
           return this.decomptefactures.filter(qtreel => qtreel.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montantmarche), 0).toFixed(0);

        }
      };
    },



    libelleMotifCf() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_Decision.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
MotifCf() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.mandats.find(qtreel => qtreel.facture_id == id);

      if (qtereel) {
        return qtereel.motif;
      }
      return 0
        }
      };
    },
FamilleMotifCf() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.mandats.find(qtreel => qtreel.facture_id == id);

      if (qtereel) {
        return qtereel.famille_motif;
      }
      return 0
        }
      };
    },
    AffcheAutresMotif() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.autre_motif;
      }
      return 0
        }
      };
    },
   StatusDecompte() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.decision_cf;
      }
      return 0
        }
      };
    },


     afficheMarcheDecompte() {
      return id => {
        if (id != null && id != "") {
          return this.decomptefactures.filter(
            element => element.marche_id == id && this.afficherStatusSib(element.marche_id)==1
          );
        }
      };
    },
      decompteParExercice(){
      return (marche_id,exercice)=>{
          let objet=this.afficheMarcheDecompte(marche_id)
          if(objet.length>0){
              return objet.filter(item=>item.exercicebudget==exercice)
          }
          return []
      }
      },
      totalAconcteExercice(){
        return (marche_id,exercice)=>{
            let objet=this.decompteParExercice(marche_id,exercice)
            let vm=this
            let montant=0
            objet.forEach(function (value) {
                montant=parseFloat(montant) + vm.MontantFactureHT(value.facture_id)
            })
            return montant
        }
      },
      arrayExerciceDecompte(){
           return marche_id=>{
               let objet=this.afficheMarcheDecompte(marche_id)
             //  let vm=this
               let array_exercie=[]
               if(objet.length>0){

                   objet.forEach(function (val) {
                       array_exercie.push(val.exercicebudget)
                   })
                   let unique = [...new Set(array_exercie)]
                  // console.log(unique)
                   if (unique.length==1){
   return []
                   }
                   return unique
               }
               return []
           }
      },
    afficherStatusSib() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.sib;
      }
      return 0
        }
      };
    },
 PourcentageCumulAvanceDemarrage(){
      const val = ((parseFloat(this.CumulAvance(this.macheid)) * (parseFloat(this.TauxAvanceDemarrageHT1(this.macheid))/100))/parseFloat(this.MontantAvanceDemarrageHT(this.macheid)));
      
       if (val) {
        return parseFloat(val).toFixed(2);
      }
      
      return 0
    },
MontantAvanceDemarrageHT() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);
if (qtereel) {
        return qtereel.avance_demarrage_ht;
      }
      return 0
        }
      };
    },

TauxAvanceDemarrageHT1() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);
if (qtereel) {
        return qtereel.taux_avance_demarrage;
      }
      return 0
        }
      };
    },



PourcentageCumulGarantie(){
      const val = ((parseFloat(this.CumulGArantie(this.macheid)) * (parseFloat(this.TauxGarantieHT1(this.macheid))/100))/parseFloat(this.MontantGarantieHT(this.macheid)));
      
       if (val) {
        return parseFloat(val).toFixed(2);
      }
      
      return 0
    },
MontantGarantieHT() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);
if (qtereel) {
        return qtereel.montant_ht_retenu_garantie;
      }
      return 0
        }
      };
    },

TauxGarantieHT1() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);
if (qtereel) {
        return qtereel.taux_retenue_garantie;
      }
      return 0
        }
      };
    },





recupereTauxBailleur() {
      return id => {
        if (id != null && id != "") {
           return this.personnaliseGetterMarcheBailleur.filter(qtreel => qtreel.marche_id == id && qtreel.type_finnancement_id==13 ||qtreel.marche_id == id && qtreel.type_finnancement_id==15).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.tauxbailleur), 0).toFixed(0);

        }
      };
    },

recupereTauxEtat() {
      return id => {
        if (id != null && id != "") {
           return this.personnaliseGetterMarcheBailleur.filter(qtreel => qtreel.marche_id == id && qtreel.type_finnancement_id==14).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.tauxbailleur), 0).toFixed(0);

        }
      };
    },

    MontantMarche() {
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
   
    CumulAvance() {
      return id => {
        if (id != null && id != "") {
           return this.decomptefactures.filter(qtreel => qtreel.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.retenu_avance), 0).toFixed(0);

        }
      };
    },
    CumulGArantie() {
      return id => {
        if (id != null && id != "") {
           return this.decomptefactures.filter(qtreel => qtreel.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.retenu_garantie), 0).toFixed(0);

        }
      };
    },
    CumulPenalite() {
      return id => {
        if (id != null && id != "") {
           return this.decomptefactures.filter(qtreel => qtreel.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.retenu_penalite), 0).toFixed(0);

        }
      };
    },
    CumulNetHtva() {
      return id => {
        if (id != null && id != "") {
           return this.decomptefactures.filter(qtreel => qtreel.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.nethtva), 0).toFixed(0);

        }
      };
    },
    CumulNetTTC() {
      return id => {
        if (id != null && id != "") {
           return this.decomptefactures.filter(qtreel => qtreel.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.netttc), 0).toFixed(0);

        }
      };
    },
    CumulPartEtat() {
      return id => {
        if (id != null && id != "") {
           return this.decomptefactures.filter(qtreel => qtreel.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.parts_etat), 0).toFixed(0);

        }
      };
    },
    CumulPartBailler() {
      return id => {
        if (id != null && id != "") {
           return this.decomptefactures.filter(qtreel => qtreel.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.parts_bailleur), 0).toFixed(0);

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
    //      MontantRetenuAvance() {
    //   return id => {
    //     if (id != null && id != "") {
    //        const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

    //   if (qtereel) {
    //     return qtereel.avance_demarrage_ht;
    //   }
    //   return 0
    //     }
    //   };
    // }, 
       MontantRetenuGarantie() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.montant_ht_retenu_garantie;
      }
      return 0
        }
      };
    },
     MontantRetenuAvance() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.avance_demarrage_ht;
      }
      return 0
        }
      }; 
     },
      CumulRetenuAvanceNouveauModifier(){
      const val = parseFloat(this.CumulRetenuAvance(this.editDecompte.marche_id)) + parseFloat(this.editDecompte.retenu_avance);
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },
      CumulRetenuAvance() {
      return id => {
        if (id != null && id != "") {
           return this.decomptefactures.filter(qtreel => qtreel.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.retenu_avance), 0).toFixed(0);

     
        }
      };
    }, 
        retenuAvanceResteApayesModifierModifier(){
      const val = parseFloat(this.MontantRetenuAvance(this.editDecompte.marche_id)) - parseFloat(this.CumulRetenuAvance(this.editDecompte.marche_id));
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },
    MontantapresretenuesModifier(){
      const val =  parseFloat(this.MontantFacture(this.editDecompte.facture_id))-parseFloat(parseFloat(this.editDecompte.retenu_garantie) + parseFloat(this.editDecompte.retenu_avance)+ parseFloat(this.editDecompte.retenu_penalite));
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },
    MontantTVAFacture() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.tva;
      }
      return 0
        }
      };
    },
     MontantTTCModifier(){
      const val =  parseFloat(this.MontantapresretenuesModifier)+parseFloat(this.MontantTVAFacture(this.editDecompte.facture_id));
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },
       ModifierMarche() {
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
    //    TauxBailleurTresor() {
    //   return id => {
    //     if (id != null && id != "") {
    //        return this.personnaliseGetterMarcheBailleur.filter(qtreel => qtreel.marche_id == id && qtreel.type_finnancement_id == 14).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.tauxbailleur), 0).toFixed(0);

     
    //     }
    //   };
    // },
     TauxBailleurDuMarcheModifier(){
      const val = parseFloat(this.TauxBailleurDon(this.editDecompte.marche_id)) + parseFloat(this.TauxBailleurEmprunt(this.editDecompte.marche_id));
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },
    TauxBailleurEmprunt() {
      return id => {
        if (id != null && id != "") {
           return this.personnaliseGetterMarcheBailleur.filter(qtreel => qtreel.marche_id == id && qtreel.type_finnancement_id == 15).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.tauxbailleur), 0).toFixed(0);

     
        }
      };
    }, 
    
    TauxBailleurDon() {
      return id => {
        if (id != null && id != "") {
           return this.personnaliseGetterMarcheBailleur.filter(qtreel => qtreel.marche_id == id && qtreel.type_finnancement_id == 13).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.tauxbailleur), 0).toFixed(0);

     
        }
      };
    },
    //   MontantHTBailleur(){
    //   const val =  parseFloat(this.Montantapresretenues)*(parseFloat(this.TauxBailleurDuMarche)/100);
      
    //    if (val) {
    //     return parseFloat(val).toFixed(0);
    //   }
      
    //   return 0
    // },
       MontantHTBailleurModifier(){
      const val =  parseFloat(this.MontantapresretenuesModifier)*(parseFloat(this.TauxBailleurDuMarcheModifier)/100);
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },
      TauxBailleurTresor() {
      return id => {
        if (id != null && id != "") {
           return this.personnaliseGetterMarcheBailleur.filter(qtreel => qtreel.marche_id == id && qtreel.type_finnancement_id == 14).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.tauxbailleur), 0).toFixed(0);

     
        }
      };
    },
     ModifierModifier(){
      const val =  parseFloat(this.MontantTTCModifier)*(parseFloat(this.TauxBailleurTresor(this.editDecompte.marche_id))/100);
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },
       NomEntreprise() {
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
         NomEntrepriseModifier() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.entreprise_id;
      }
      return 0
        }
      };
    }, 
      AdresseEmailEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.telephone.concat(' - ', qtereel.email);
      }
      return 0
        }
      };
    },
      ContribuableEntreprise() {
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
     libelleObjet() {
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
        NumeroMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.numero_marche;
      }
      return 0
        }
      };
    },
       dateApprobation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return this.formaterDate(qtereel.date_approbation);
      }
      return 0
        }
      };
    },   
    idParent() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.parent_id;
      }
      return 0
        }
      };
    },
         Imputation() {
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
       montantHtMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.montant_act_ht;
      }
      return 0
        }
      };
    },
       montantTTCMarche() {
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
      SommeBailleurDuMarcheModifier(){
      const val = parseFloat(this.MontantBailleurEmprunt(this.editDecompte.marche_id)) + parseFloat(this.MontantBailleurDon(this.editDecompte.marche_id));
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },
       MontantBailleurEmprunt() {
      return id => {
        if (id != null && id != "") {
           return this.personnaliseGetterMarcheBailleur.filter(qtreel => qtreel.marche_id == id && qtreel.type_finnancement_id == 15).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant), 0).toFixed(0);

     
        }
      };
    }, 
       MontantBailleurDon() {
      return id => {
        if (id != null && id != "") {
           return this.personnaliseGetterMarcheBailleur.filter(qtreel => qtreel.marche_id == id && qtreel.type_finnancement_id == 13).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant), 0).toFixed(0);

     
        }
      };
    },
      MontantEtatCoteIvoire() {
      return id => {
        if (id != null && id != "") {
           return this.personnaliseGetterMarcheBailleur.filter(qtreel => qtreel.marche_id == id && qtreel.type_finnancement_id == 14).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant), 0).toFixed(0);

     
        }
      };
     },
  
    MontantFactureHT() {
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
 afficheDecompteTableau() {
      return id => {
        if (id != null && id != "") {
          return this.decomptefactures.filter(
            element => element.marche_id == id 
          );
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
    anneeAmort() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },
  },
  methods: { 
    
    ...mapActions('uniteadministrative',[

 "ModifierDecompteFacture",
 "supprimerDecompteFacture"
   
   
   ]),
     modifierDecompteLocal() {
         var nouvelObjet = {
        ...this.editDecompte,
           marche_id:this.editDecompte.marche_id,
        facture_id:this.editDecompte.facture_id,
        
      // nethtva:this.MontantTVAFacture(editDecompte.facture_id),
      netttc:this.MontantapresretenuesModifier,
      parts_etat:this.MontantHTEtatModifier,
      parts_bailleur:this.MontantHTBailleurModifier,
      montantmarche:this.MontantapresretenuesModifier,
      exercicebudget:this.anneeAmort
      };
      this.ModifierDecompteFacture(nouvelObjet);
     this.$("#exampleModal").modal('hide');
       this.editDecompte = {
      
      }
       },
       
    formatageSommeSansFCFA:formatageSommeSansFCFA,
 formaterDate(date) {
            return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },
    afficherModalAjouterpaiementPersonnel() {
      this.$("#ModalDecompte").modal({
        backdrop: "static",
        keyboard: false
      });
    },
   
        afficherModalModifierTypeTexte1(id){
      this.$('#exampleModal').modal({
        backdrop: 'static',
        keyboard: false
      });
      this.editDecompte = this.afficheMarcheDecompte(this.macheid).find(item=>item.id==id)
    },
  }
};
</script>
<style scoped>

.grdirModalActeEffet{
  width: 88%;
  margin: 0 -42%;
}
</style>
