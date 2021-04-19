
<template>

<div>
   <div id="validationOpDefinitif1" class="modal hide tailgrand">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Decision CF</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
            <td>
              <div class="control-group">
                <label class="control-label">Décision CF </label>
                <div class="controls">
                  <select v-model="editMandat.decision_cf" class="span5">
                    <option value=""></option>
                    <option value="8">Visé</option>
                    <option value="9">Visé avec Observation</option>
                    <option value="2">Différé</option>
                    <option value="3">Réjeté</option>
                    <option value="0">Attente</option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Famille de Motif</label>
                <div class="controls">
                  <select v-model="editMandat.famille_motif" class="span5">
                    <option value="0"></option>
                    <option
                      v-for="varText in AffichierElementParent"
                      :key="varText.id"
                      :value="varText.id"
                    >
                      {{ varText.libelle }}
                    </option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Motif</label>
                <div class="controls">
                  <select v-model="editMandat.motif" class="span5">
                    <option value="0"></option>
                    <option
                      v-for="varText in AffichierElementEnfant(
                        editMandat.famille_motif
                      )"
                      :key="varText.id"
                      :value="varText.id"
                    >
                      {{ varText.libelle }}
                    </option>
                  </select>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <div class="control-group">
                <label class="control-label">Autres Motif</label>
                <div class="controls">
                  <textarea
                    class="span10"
                    row="6"
                    v-model="editMandat.autre_motif"
                    :readonly="griserAutreMotif"
                  >
                  </textarea>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Date Decision CF :</label>
                <div class="controls">
                  <input
                    type="date"
                    class="span5"
                    v-model="editMandat.date_decision_cf"
                  />
                  <!-- <input type="hidden" class="span"  :value="recuperer"/> -->
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <div class="control-group">
                <label class="control-label">Observation CF</label>
                <div class="controls">
                  <textarea
                    class="span10"
                    row="6"
                    v-model="editMandat.observation"
                  >
                  </textarea>
                </div>
              </div>
            </td>
            <td colspan="">
              <div class="control-group">
                <label class="control-label">Nom du CF</label>
                <div class="controls">
                  <input
                    type="text"
                    class="span5"
                    :value="
                      recupererNomDuControleurF(
                        recupererIdUser(
                          recupererIdServiceCF(
                            editMandat.unite_administrative_id
                          )
                        )
                      )
                    "
                    readonly
                  />
                </div>
              </div>
            </td>
          </tr>
        </table>

        <table
          class="table table-bordered table-striped"
          v-if="editMandat.decision_cf == 2"
        >
          <div class="row-fluid">
            <div class="span6">
              <div class="widget-box">
                <div class="widget-title">
                  <span class="icon"> <i class="icon-eye-open"></i> </span>
                  <h5>Motif à Corrigé</h5>
                </div>
                <div class="widget-content nopadding">
                  <templete v-if="verifier(editMandat.id) == editMandat.id">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th>Famille Motif</th>
                          <th>Motif</th>
                          <th>Action</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr
                          class="odd gradeX"
                          v-for="type in listeOpdiffere(editMandat.id)"
                          :key="type.id"
                        >
                          <td @dblclick="afficherModalModifierTypeTexte(index)">
                            {{
                              MotifLibelle(type.famille_motif) ||
                              "Non renseigné"
                            }}
                          </td>
                          <td @dblclick="afficherModalModifierTypeTexte(index)">
                            {{ MotifLibelle(type.motif) || "Non renseigné" }}
                          </td>

                          <td>
                            <button
                              class="btn btn-danger"
                              @click="DetacheMotif(type.id)"
                            >
                              <span>
                                <i class="icon-external-link"></i>Détaché
                              </span>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </templete>
                  <templete v-else>
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th>Famille Motif</th>
                          <th>Motif</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                    </table>
                  </templete>
                </div>
              </div>
            </div>
            <div class="span6">
              <div class="widget-box">
                <div class="widget-title">
                  <span class="icon"> <i class="icon-arrow-right"></i> </span>
                  <h5>Motif Corrige</h5>
                </div>
                <div class="widget-content nopadding">
                  <templete v-if="verifier(editMandat.id) == editMandat.id">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th>Famille Motif</th>
                          <th>Motif</th>
                          <th>Action</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr
                          class="odd gradeX"
                          v-for="type in EurreurCorrige(editMandat.id)"
                          :key="type.id"
                        >
                          <td @dblclick="afficherModalModifierTypeTexte(index)">
                            {{
                              MotifLibelle(type.famille_motif) ||
                              "Non renseigné"
                            }}
                          </td>
                          <td @dblclick="afficherModalModifierTypeTexte(index)">
                            {{ MotifLibelle(type.motif) || "Non renseigné" }}
                          </td>
                          <td>
                            <button
                              class="btn btn-info"
                              @click="DetacheMotifAttache(type.id)"
                            >
                              <span>
                                <i class="icon-external-link"></i>Attaché
                              </span>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </templete>
                  <templete v-else>
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th>Famille Motif</th>
                          <th>Motif</th>
                        </tr>
                      </thead>
                    </table>
                  </templete>
                </div>
              </div>
            </div>
          </div>
        </table>
        <br />
      </div>

      <div class="modal-footer">
        <a
          @click.prevent="modifierTypeTexteLocal()"
          class="btn btn-primary"
          href="#"
          >Valider</a
        >
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <div  align="left" style="cursor:pointer;">
    <button class="btn btn-danger" @click.prevent="pagePrecedent">Page Précédente</button>
    
        </div>
    <h1 style="text-align:center">Ordres De Paiement Du Projet : {{libelleUa(marcheid)}}</h1>
   <table class="table table-bordered table-striped">
            <td style="width: 10%"></td>
            <td style="width: 0%; font-weight: bolder; color: #000">
              <div align="right" style="cursor: pointer">
                <button
                  class="btn btn-success"
                  style="font-weight: bolder; color: #fff; font-size: 20px"
                >
                  <i class="icon-hand-up"> TOTAL ORDRE PAIEMENT</i>
                </button>
                <br />
                <br />
                <span
                  align="left"
                  style="
                    text-align: center;
                    font-size: 15px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  En Attente</span
                ><span
                  style="
                    text-align: center;
                    font-size: 30px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  {{ NombreTotalOPTotalEnttente }}</span
                >
                <br />
                <span
                  align="left"
                  style="
                    text-align: center;
                    font-size: 15px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  Vise</span
                ><span
                  style="
                    text-align: center;
                    font-size: 30px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  {{ NombreTotalOPTotalVise }}</span
                >
                <br />
                <span
                  align="left"
                  style="
                    text-align: center;
                    font-size: 15px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  Differé</span
                ><span
                  style="
                    text-align: center;
                    font-size: 30px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  {{ NombreTotalOPTotalDiffere }}</span
                >
                <br />
                <span
                  align="left"
                  style="
                    text-align: center;
                    font-size: 15px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  Rejeté</span
                ><span
                  style="
                    text-align: center;
                    font-size: 30px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  {{ NombreTotalOPTotalRejete }}</span
                >
                <br />
                <span
                  align="left"
                  style="
                    text-align: center;
                    font-size: 15px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  Total Ordre paiement</span
                ><span
                  style="
                    text-align: center;
                    font-size: 30px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  {{ OPTotal }}</span
                >
              </div>
            </td>
            <td style="width: 0%; font-weight: bolder; color: #000">
              <div align="right" style="cursor: pointer">
                <button
                  class="btn btn-info"
                  style="font-weight: bolder; color: #fff; font-size: 20px"
                >
                  <i class="icon-hand-up"> ORDRE PAIEMENT DIRECT</i>
                </button>
                <br />
                <br />
                <span
                  align="left"
                  style="
                    text-align: center;
                    font-size: 15px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  En Attente</span
                ><span
                  style="
                    text-align: center;
                    font-size: 30px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  {{ NombreTotalOPDIRECTEnttente }}</span
                >
                <br />
                <span
                  align="left"
                  style="
                    text-align: center;
                    font-size: 15px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  Vise</span
                ><span
                  style="
                    text-align: center;
                    font-size: 30px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  {{ NombreTotalOPDIRECTVise }}</span
                >
                <br />
                <span
                  align="left"
                  style="
                    text-align: center;
                    font-size: 15px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  Differé</span
                ><span
                  style="
                    text-align: center;
                    font-size: 30px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  {{ NombreTotalOPDIRECTDiffere }}</span
                >
                <br />
                <span
                  align="left"
                  style="
                    text-align: center;
                    font-size: 15px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  Rejeté</span
                ><span
                  style="
                    text-align: center;
                    font-size: 30px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  {{ NombreTotalOPDIRECTRejete }}</span
                >
                <br />
                <span
                  align="left"
                  style="
                    text-align: center;
                    font-size: 15px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  Total OP Direct</span
                ><span
                  style="
                    text-align: center;
                    font-size: 30px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  {{ NombreTotalOPDIRECT }}</span
                >
              </div>
            </td>
            <td style="width: 0%; font-weight: bolder; color: #000">
              <div align="right" style="cursor: pointer">
                <button
                  class="btn btn-success"
                  style="font-weight: bolder; color: #fff; font-size: 20px"
                >
                  <i class="icon-hand-up"> ORDRE PAIEMENT PROVISOIRE</i>
                </button>
                <br />
                <br />
                <span
                  align="left"
                  style="
                    text-align: center;
                    font-size: 15px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  En Attente</span
                ><span
                  style="
                    text-align: center;
                    font-size: 30px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  {{ NombreTotalOPProvisoireEnttente }}</span
                >
                <br />
                <span
                  align="left"
                  style="
                    text-align: center;
                    font-size: 15px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  Vise</span
                ><span
                  style="
                    text-align: center;
                    font-size: 30px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  {{ NombreTotalOPProvisoireVise }}</span
                >
                <br />
                <span
                  align="left"
                  style="
                    text-align: center;
                    font-size: 15px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  Differé</span
                ><span
                  style="
                    text-align: center;
                    font-size: 30px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  {{ NombreTotalOPProvisoireDiffere }}</span
                >
                <br />
                <span
                  align="left"
                  style="
                    text-align: center;
                    font-size: 15px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  Rejeté</span
                ><span
                  style="
                    text-align: center;
                    font-size: 30px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  {{ NombreTotalOPProvisoireRejete }}</span
                >
                <br />
                <span
                  align="left"
                  style="
                    text-align: center;
                    font-size: 15px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  Total OP Provisoire</span
                ><span
                  style="
                    text-align: center;
                    font-size: 30px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  {{ NombreTotalOPProvisoire }}</span
                >
              </div>
            </td>
            <td style="width: 0px">
              <div align="right" style="cursor: pointer">
                <button
                  class="btn btn-danger"
                  style="font-weight: bolder; color: #fff; font-size: 20px"
                >
                  <i class="icon-hand-up"> ORDRE PAIEMENT ANNULATION</i>
                </button>
                <br />
                <br />
                <span
                  align="left"
                  style="
                    text-align: center;
                    font-size: 15px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  En Attente</span
                ><span
                  style="
                    text-align: center;
                    font-size: 30px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  {{ NombreTotalOPANNULATIONEnttente }}</span
                >
                <br />
                <span
                  align="left"
                  style="
                    text-align: center;
                    font-size: 15px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  Vise</span
                ><span
                  style="
                    text-align: center;
                    font-size: 30px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  {{ NombreTotalOPANNULATIONVise }}</span
                >
                <br />
                <span
                  align="left"
                  style="
                    text-align: center;
                    font-size: 15px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  Differé</span
                ><span
                  style="
                    text-align: center;
                    font-size: 30px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  {{ NombreTotalOPANNULATIONDiffere }}</span
                >
                <br />
                <span
                  align="left"
                  style="
                    text-align: center;
                    font-size: 15px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  Rejeté</span
                ><span
                  style="
                    text-align: center;
                    font-size: 30px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  {{ NombreTotalOPANNULATIONRejete }}</span
                >
                <br />
                <span
                  align="left"
                  style="
                    text-align: center;
                    font-size: 15px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  Total OP Annulation</span
                ><span
                  style="
                    text-align: center;
                    font-size: 30px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  {{ NombreTotalOPAnnulation }}</span
                >
              </div>
            </td>
            <td style="width: 0px">
              <div align="right" style="cursor: pointer">
                <button
                  class="btn btn-primary"
                  style="font-weight: bolder; color: #fff; font-size: 20px"
                >
                  <i class="icon-hand-up"> ORDRE PAIEMENT DEFINITIF</i>
                </button>
                <br />
                <br />
                <span
                  align="left"
                  style="
                    text-align: center;
                    font-size: 15px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  En Attente</span
                ><span
                  style="
                    text-align: center;
                    font-size: 30px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  {{ NombreTotalOPDefinitifEnttente }}</span
                >
                <br />
                <span
                  align="left"
                  style="
                    text-align: center;
                    font-size: 15px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  Vise</span
                ><span
                  style="
                    text-align: center;
                    font-size: 30px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  {{ NombreTotalOPDefinitifVise }}</span
                >
                <br />
                <span
                  align="left"
                  style="
                    text-align: center;
                    font-size: 15px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  Differé</span
                ><span
                  style="
                    text-align: center;
                    font-size: 30px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  {{ NombreTotalOPDefinitifDiffere }}</span
                >
                <br />
                <span
                  align="left"
                  style="
                    text-align: center;
                    font-size: 15px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  Rejeté</span
                ><span
                  style="
                    text-align: center;
                    font-size: 30px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  {{ NombreTotalOPDefinitifRejete }}</span
                >
                <br />
                <span
                  align="left"
                  style="
                    text-align: center;
                    font-size: 15px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  Total OP Définitif</span
                ><span
                  style="
                    text-align: center;
                    font-size: 30px;
                    font-weight: bolder;
                    color: #000;
                  "
                >
                  {{ NombreTotalOPDefinitive }}</span
                >
              </div>
            </td>
            <td style="width: 10%"></td>
          </table>
          <table class="table table-striped">
          <tbody>
            <tr>
              <td colspan="">
                <br />
              

                <label style="color: #000; font-size: 14px; font-weight: bolder"
                  >ANNEE BUDGETAIRE<a href="#" style="color: red"></a>
                </label>
                <model-list-select
                  style="background-color: #fff; border: 2px solid #000"
                  class="wide"
                  :list="exercices_budgetaires"
                  v-model="uniteAdministrative_id"
                  option-value="annee"
                  option-text="annee"
                  placeholder=""
                >
                </model-list-select>
              </td>
              <td>
                <br />
                <label style="color: #000; font-size: 14px; font-weight: bolder"
                  >TYPE ORDRE PAIEMENT<a href="#" style="color: red"></a>
                </label>
                <model-list-select
                  style="background-color: #fff; border: 2px solid #000"
                  class="wide"
                  :list="options2"
                  v-model="typeop_id"
                  option-value="id"
                  option-text="libelle"
                >
                </model-list-select>
              </td>
              <td>
                <br />
                <label style="color: #000; font-size: 14px; font-weight: bolder"
                  >NUMERO ORDRE PAIEMENT<a href="#" style="color: red"></a>
                </label>
                <model-list-select
                  style="background-color: #fff; border: 2px solid #000"
                  class="wide"
                  :list="listeUniteAdminPasSection"
                  v-model="NumeroOp"
                  option-value="numero_ordre_paiement"
                  option-text="numero_ordre_paiement"
                  placeholder=""
                >
                </model-list-select>
              </td>
            </tr>
          </tbody>
        </table>
        
            <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      
                       <li class="active">
                       
                        <a data-toggle="tab" href="#OPPROVISOIRE">LISTES DES OP  </a>
                      </li>
                       <!-- <li class="">
                           <a data-toggle="tab" href="#OPANNULATION">OP ANNULATION</a>
                        
                      </li>
                     <li class="">
                           <a data-toggle="tab" href="#OPDEFINITIF">OP DEFINITIF</a>
                        
                      </li>
                       <li class="">
                           <a data-toggle="tab" href="#OPDIRECT">OP DIRECT</a>
                        
                      </li> -->
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
  <div id="OPPROVISOIRE" class="tab-pane active">
    
              <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Listes des Ordres de Paiements</h5>
             
            </div>
            <div class="span4">
              <br />
              Afficher
              <select name="pets" id="pet-select" v-model="size" class="span3">
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              Entrer
            </div>
            <div class="widget-content nopadding">
             <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th style="font-size: 14px; font-weight: bold">Exercice</th>
                    <th style="font-size: 14px; font-weight: bold">
                      Type d'ordre de paiement
                    </th>
                    <th style="font-size: 14px; font-weight: bold; color: #000">
                      N°Ordre paiement
                    </th>
                  
                    <th style="font-size: 14px; font-weight: bold">Objet OP</th>
                    <!-- <th style="font-size: 14px; font-weight: bold">UA</th> -->
                   
                    <th style="font-size: 14px; font-weight: bold">
                      Engagement actuel (FCFA)
                    </th>
                    <th style="font-size: 14px; font-weight: bold">
                      Voir Détail
                    </th>
                   
                    <th style="font-size: 14px; font-weight: bold">
                      Décision CF
                    </th>
                    <th style="font-size: 14px; font-weight: bold">
                      Supprimer
                    </th>

                   
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="type in partition(ListeDEsEntreprise, size)[page]"
                    :key="type.id"
                  >
                    <td @dblclick="afficherModalModifierTitre(type.id)"
                      style="
                        font-size: 14px;
                        font-weight: bold;
                        text-align: center;
                      "
                    >
                      {{ type.exercice || "Non renseigné" }}
                    </td>
                    <td @dblclick="afficherModalModifierTitre(type.id)"
                      v-if="type.type_ordre_paiement == 1"
                      style="
                        font-size: 14px;
                        font-weight: bold;
                        text-align: center;
                      "
                    >
                      <span>OP Direct</span>
                    </td>
                    <td @dblclick="afficherModalModifierTitre(type.id)"
                      v-else-if="type.type_ordre_paiement == 2"
                      style="
                        font-size: 14px;
                        font-weight: bold;
                        text-align: center;
                      "
                    >
                      <span>OP Provisoire</span>
                    </td>

                    <td @dblclick="afficherModalModifierTitre(type.id)"
                      v-else-if="type.type_ordre_paiement == 3"
                      style="
                        font-size: 14px;
                        font-weight: bold;
                        text-align: center;
                      "
                    >
                      <span>OP Annulation</span>
                    </td>
                    <td @dblclick="afficherModalModifierTitre(type.id)"
                      v-else
                      style="
                        font-size: 14px;
                        font-weight: bold;
                        text-align: center;
                      "
                    >
                      <span>OP Définitif</span>
                    </td>

                    <td @dblclick="afficherModalModifierTitre(type.id)"
                      style="
                        font-size: 14px;
                        font-weight: bold;
                        text-align: center;
                        color: green;
                      "
                    >
                      {{ type.numero_ordre_paiement || "Non renseigné" }}
                    </td>

                    <td style="font-size: 14px; font-weight: bold" @dblclick="afficherModalModifierTitre(type.id)">
                      {{ type.odjet_autre_depense || "Non renseigné" }}
                    </td>
                    <!-- <td style="font-size: 14px; font-weight: bold" @dblclick="afficherModalModifierTitre(type.id)">
                      {{
                        libelleUa(type.unite_administrative_id) ||
                        "Non renseigné"
                      }}
                    </td> -->
                    <td @dblclick="afficherModalModifierTitre(type.id)"
                      style="
                        font-size: 14px;
                        font-weight: bold;
                        text-align: center;
                      "
                    >
                      {{
                        formatageSommeSansFCFA(
                          parseFloat(type.montant_ordre_paiement)
                        ) || "Non renseigné"
                      }}
                    </td>
                    <td @dblclick="afficherModalModifierTitre(type.id)">
                      <router-link
                        :to="{
                          name: 'VoirDetailAutreFiche',
                          params: { id: type.id },
                        }"
                        class="btn btn"
                        title="Editer Fiche"
                        style="width: 80%"
                      >
                        <span
                          class=""
                          style="
                            font-size: 20px;
                            font-weight: bold;
                            color: #000;
                          "
                          ><i class="icon-eye-open"></i> Voir</span
                        >
                      </router-link>
                    </td>

                    
                    <td >
                      <button
                        v-if="type.decision_cf == 8"
                        class="btn btn-success tailBtn"
                        @click="apercuFacture0(type.id)"
                      >
                        <span
                          style="
                            font-weight: bolder;
                            color: #fff;
                            font-size: 18px;
                          "
                          >Visé</span
                        >
                      </button>
                      <button
                        v-else-if="type.decision_cf == 2"
                        class="btn btn-warning tailBtn"
                        @click="apercuFacture0(type.id)"
                      >
                        <span
                          style="
                            font-weight: bolder;
                            color: #fff;
                            font-size: 18px;
                          "
                          >Différé</span
                        >
                      </button>
                      <button
                        v-else-if="type.decision_cf == 3"
                        class="btn btn-danger tailBtn"
                        @click="apercuFacture0(type.id)"
                      >
                        <span
                          style="
                            font-weight: bolder;
                            color: #fff;
                            font-size: 18px;
                          "
                          >Réjeté</span
                        >
                      </button>
                      <button
                        v-else-if="type.decision_cf == 9"
                        class="btn btn-success tailBtn"
                        @click="apercuFacture0(type.id)"
                      >
                        <span
                          title="Visé avec observation"
                          style="
                            font-weight: bolder;
                            color: #fff;
                            font-size: 18px;
                          "
                          >Visé O</span
                        >
                      </button>
                      <button
                        v-else
                        class="btn btn-info tailBtn"
                        @click="apercuFacture0(type.id)"
                      >
                        <span
                          style="
                            font-weight: bolder;
                            color: #fff;
                            font-size: 18px;
                          "
                          >Attente</span
                        >
                      </button>
                    </td>
                    <td>
                      <button
                        class="btn btn-danger"
                        @click="supprimerGestionOrdrePaiement(type.id)"
                      >
                        <span>
                          <i class="icon icon-trash"> Supprimer</i>
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
                  </div>
            </div>
 <div class="pagination alternate">
            <ul>
              <li :class="{ disabled: page == 0 }">
                <a @click.prevent="precedent()" href="#">Précedent</a>
              </li>
              <li
                v-for="(titre, index) in partition(ListeDEsEntreprise, size)
                  .length"
                :key="index"
                :class="{ active: active_el == index }"
              >
                <a @click.prevent="getDataPaginate(index)" href="#">{{
                  index + 1
                }}</a>
              </li>
              <li
                :class="{
                  disabled:
                    page == partition(ListeDEsEntreprise, size).length - 1,
                }"
              >
                <a @click.prevent="suivant()" href="#">Suivant</a>
              </li>
            </ul>
          </div>
  
  </div                                                                                                                                                                         >
          <!-- <div id="OPANNULATION" class="tab-pane ">
            
            OPANNULATION

          </div>
 <div id="OPDEFINITIF" class="tab-pane">
            
            OPDEFINITIF

          </div> -->
  <!-- <div id="OPDIRECT" class="tab-pane">
            
            OPDIRECT

          </div> -->
        </div>
      </div>
      
              </table>
 
  </div>


    

              
     




  






    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { formatageSommeSansFCFA } from "@/Repositories/Repository";
import { partition } from "@/Repositories/Repository";
import { ModelListSelect } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";
export default {
  components: {
    ModelListSelect,
  },
  name: "typetext",
  data() {
    return {
      page: 0,
      size: 10,
      active_el: 0,
      fabActions: [
        {
          name: "searchMe",
          icon: "search",
        },
      ],

      options2: [
        { id: "1", libelle: "OP Direct" },
        { id: "2", libelle: "OP Provisoire" },
        { id: "3", libelle: "OP Annulation" },
        { id: "4", libelle: "OP Définitif" },
      ],
      json_fields: {
        CODE: "code",
        LIBELLE: "libelle",
      },
      affiche_filtre1: false,
      affiche_filtre: false,
      affiche_boutton_filtre: true,
      formData: {
        code: "",
        libelle: "",
      },
      EditDetache: {},
      typeop_id: 0,
      NumeroOp: 0,
      uniteAdministrative_id: 0,

      editMandat: {},
      EditAnulation: {},
      editDecisionFinal: {},
      search: "",
    };
  },
created() {
    this.marcheid = this.$route.params.id;
    this.detailOp1 = this.gettersgestionOrdrePaiement.find(
      (idmarche) => idmarche.id == this.$route.params.id
    );
  },
  computed: {
      ...mapGetters("parametreGenerauxAdministratif", [
      "taux",
      "sections",
      "type_Unite_admins",
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "afficheNiveauPlanProg",
      "exercices_budgetaires",
      "afficheLocalisationGeoNiveau5",
    ]),
    ...mapGetters("Utilisateurs", [
      "getterAffectionServiceCF",
      "getterUtilisateur",
      "getterAffectation",
      "getterUniteAdministrativeByUser",
    ]),
    ...mapGetters("personnelUA", [
      "salairesActeur",
      "personnaliseActeurDepense",
      "personnaFonction",
      "afficheNombrePersonnelRecuActeNormination",
      "fonctionBudgetaire",
      "type_salaries",
      "type_contrats",
      "acte_personnels",
      "type_acte_personnels",
      "fonctions",
      "grades",
      "niveau_etudes",
      "nbr_acteur_actredite_taux",
      "all_acteur_depense",
      "personnaliseActeurFinContrat",
      "totalActeurEnctivite",
      "totalActeurDepense",
      "totalActeurAccredite",
      "tauxActeurAccredite",
      "totalActeurNonAccredite",
      "affichePersonnelRecuActeNormination",
    ]),
    ...mapGetters("bienService", [
      "gettershistoriqueDecisionCfOP",
      "typeMarches",
      "gettersgestionOrdrePaiementAnnulation",
      "gettersgestionOrdrePaiement",
      "gettersDossierAutreDepense",
      "gettersDossierMandat",
      "gettersDossierFacturePiece",
      "typeFactures",
      "gettersDemandeEngagement",
      "gettersnomPieceJustificative",
      "modepaiements",
      "gettersCotationPersonnaliser",
      "typeCandidat",
      "acteDepense",
      "getMarchePersonnaliser",
      "appelOffres",
      "lots",
      "villes",
      "communes",
      "pays",
      "modePassations",
      "procedurePassations",
      "getterDossierCandidats",
      "marches",
      "gettersPersonnaliserRapportJugement",
      "getterOffreFinanciers",
      "gettersOffreTechniques",
      "getterLettreInvitation",
      "getterMandate",
      "getterCojos",
      "conditions",
      "getterAnalyseDossiers",
      "typeAnalyses",
      "getterDemandeAno",
      "documentProcedures",
      "getterAnalyseDMP",
      "getterAnoDMPBailleur",
      "getterObseravtionBailleurs",
      "obseravtionBailleurs",
      "typeActeEffetFinanciers",
      "analyseDossiers",
      "text_juridiques",
      "livrables",
      "selectionner_candidats",
      "getActeEffetFinancierPersonnaliserContrat",
      "acteEffetFinanciers",
      "personnaliseGetterMarcheBailleur",
      "getterMembreCojo",
      "getterProceVerballe",
    ]),
    ...mapGetters("gestionMarche", [
      "groupeVille",
      "entreprises",
      "banques",
      "comptes",
      "getCompte",
      "getEntreptise",
      "getPersonnaliseAgence",
      "agenceBanques",
    ]),
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "structureActe",
      "planActe",
    ]),
    ...mapGetters("parametreGenerauxActivite", [
      "structures_activites",
      "plans_activites",
      "afficheNiveauAction",
      "afficheNiveauActivite",
    ]),
    ...mapGetters("gestionMarche", ["entreprises"]),
    ...mapGetters("uniteadministrative", [
      "budgetEclate",
      "groupeLigneEconomiqueBudget",
      "getSousBudget",
      "groupeActiviteBudget",
      "budgetGeneral",
      "fonctionsua",
      "servicesua",
      "directions",
      "uniteZones",
      "uniteAdministratives",
      "getPersonnaliseBudgetGeneralParPersonnel",
    ]),
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "structuresDecision",
      "plans_Decision",
    ]),

    listeOpdiffere() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettershistoriqueDecisionCfOP.filter(
            (qtreel) =>
              qtreel.id_op == id &&
              qtreel.diff_decision == 0 &&
              qtreel.decision_cf == 2
          );
        }
      };
    },
    EurreurCorrige() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettershistoriqueDecisionCfOP.filter(
            (qtreel) =>
              qtreel.id_op == id &&
              qtreel.diff_decision == 1 &&
              qtreel.decision_cf == 2
          );
        }
      };
    },
    MotifLibelle() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.plans_Decision.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },
    FamilleMotifLibelle() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.plans_Decision.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },
    verifier() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettershistoriqueDecisionCfOP.find(
            (qtreel) => qtreel.id_op == id
          );

          if (qtereel) {
            return qtereel.id_op;
          }
          return 0;
        }
      };
    },
    VideUa() {
      return this.uniteAdministrative_id == "";
    },

    VideNumeroOp() {
      return this.NumeroOp == "";
    },
    VideTypeOp() {
      return this.typeop_id == "";
    },
    ListeDEsEntreprise() {
      let vM = this;
      let objet = this.listeordrepaiementProvisoire;

      //retourne la section selectionner

      if (this.uniteAdministrative_id != 0 && this.typeop_id == 0) {
        objet = this.listeordrepaiementProvisoire.filter((item) => {
          if (item.exercice == vM.uniteAdministrative_id) {
            return item;
          }
        });
        return objet;
      }
      if (this.typeop_id != 0 && this.uniteAdministrative_id == 0) {
        objet = this.listeordrepaiementProvisoire.filter((item) => {
          if (item.type_ordre_paiement == vM.typeop_id) {
            return item;
          }
        });
      }
      if (this.NumeroOp != 0) {
        objet = this.listeordrepaiementProvisoire.filter((item) => {
          if (item.numero_ordre_paiement == vM.NumeroOp) {
            return item;
          }
        });
        return objet;
      }
      if (this.uniteAdministrative_id != 0 && this.typeop_id != 0) {
        objet = this.listeordrepaiementProvisoire.filter((item) => {
          if (
            item.exercice == vM.uniteAdministrative_id &&
            item.type_ordre_paiement == vM.typeop_id
          ) {
            return item;
          }
        });
        return objet;
      }
      
      return objet;
    },
    NombreTotalOP() {
      return this.ListeDEsEntreprise.filter(item =>item.unite_administrative_id == this.marcheid).length;
    },
    NombreTotalOPDIRECTEnttente() {
      return this.ListeDEsEntreprise.filter(
        (item) => item.type_ordre_paiement == 1 && item.decision_cf == 0 &&  item.unite_administrative_id == this.marcheid
      ).length;
    },
    
    NombreTotalOPDIRECTVise() {
      return this.ListeDEsEntreprise.filter(
        (item) =>
          (item.type_ordre_paiement == 1 && item.decision_cf == 8 &&  item.unite_administrative_id == this.marcheid) ||
          (item.type_ordre_paiement == 1 && item.decision_cf == 9 &&  item.unite_administrative_id == this.marcheid)
      ).length;
    },
    NombreTotalOPDIRECTDiffere() {
      return this.ListeDEsEntreprise.filter(
        (item) => item.type_ordre_paiement == 1 && item.decision_cf == 2 &&  item.unite_administrative_id == this.marcheid
      ).length;
    },
    NombreTotalOPDIRECTRejete() {
      return this.ListeDEsEntreprise.filter(
        (item) => item.type_ordre_paiement == 1 && item.decision_cf == 3 &&  item.unite_administrative_id == this.marcheid
      ).length;
    },
    NombreTotalOPDIRECT() {
      return this.ListeDEsEntreprise.filter(
        (item) => item.type_ordre_paiement == 1 &&  item.unite_administrative_id == this.marcheid
      ).length;
    },

    NombreTotalOPProvisoireEnttente() {
      return this.ListeDEsEntreprise.filter(
        (item) => item.type_ordre_paiement == 2 && item.decision_cf == 0 &&  item.unite_administrative_id == this.marcheid
      ).length;
    },
    NombreTotalOPProvisoireVise() {
      return this.ListeDEsEntreprise.filter(
        (item) =>
          (item.type_ordre_paiement == 2 && item.decision_cf == 8 &&  item.unite_administrative_id == this.marcheid) ||
          (item.type_ordre_paiement == 2 && item.decision_cf == 9 &&  item.unite_administrative_id == this.marcheid)
      ).length;
    },
    NombreTotalOPProvisoireDiffere() {
      return this.ListeDEsEntreprise.filter(
        (item) => item.type_ordre_paiement == 2 && item.decision_cf == 2 &&  item.unite_administrative_id == this.marcheid
      ).length;
    },
    NombreTotalOPProvisoireRejete() {
      return this.ListeDEsEntreprise.filter(
        (item) => item.type_ordre_paiement == 2 && item.decision_cf == 3 &&  item.unite_administrative_id == this.marcheid
      ).length;
    },

    NombreTotalOPProvisoire() {
      return this.ListeDEsEntreprise.filter(
        (item) => item.type_ordre_paiement == 2 &&  item.unite_administrative_id == this.marcheid
      ).length;
    },

    NombreTotalOPANNULATIONEnttente() {
      return this.ListeDEsEntreprise.filter(
        (item) => item.type_ordre_paiement == 3 && item.decision_cf == 0 &&  item.unite_administrative_id == this.marcheid
      ).length;
    },
    NombreTotalOPANNULATIONVise() {
      return this.ListeDEsEntreprise.filter(
        (item) =>
          (item.type_ordre_paiement == 3 && item.decision_cf == 8 &&  item.unite_administrative_id == this.marcheid) ||
          (item.type_ordre_paiement == 3 && item.decision_cf == 9 &&  item.unite_administrative_id == this.marcheid)
      ).length;
    },
    NombreTotalOPANNULATIONDiffere() {
      return this.ListeDEsEntreprise.filter(
        (item) => item.type_ordre_paiement == 3 && item.decision_cf == 2 &&  item.unite_administrative_id == this.marcheid
      ).length;
    },
    NombreTotalOPANNULATIONRejete() {
      return this.ListeDEsEntreprise.filter(
        (item) => item.type_ordre_paiement == 3 && item.decision_cf == 3 &&  item.unite_administrative_id == this.marcheid
      ).length;
    },
    NombreTotalOPAnnulation() {
      return this.ListeDEsEntreprise.filter(
        (item) => item.type_ordre_paiement == 3 &&  item.unite_administrative_id == this.marcheid
      ).length;
    },

    NombreTotalOPDefinitifEnttente() {
      return this.ListeDEsEntreprise.filter(
        (item) => item.type_ordre_paiement == 4 && item.decision_cf == 0 &&  item.unite_administrative_id == this.marcheid
      ).length;
    },
    NombreTotalOPDefinitifVise() {
      return this.ListeDEsEntreprise.filter(
        (item) =>
          (item.type_ordre_paiement == 4 && item.decision_cf == 8 &&  item.unite_administrative_id == this.marcheid) ||
          (item.type_ordre_paiement == 4 && item.decision_cf == 9 &&  item.unite_administrative_id == this.marcheid)
      ).length;
    },
    NombreTotalOPDefinitifDiffere() {
      return this.ListeDEsEntreprise.filter(
        (item) => item.type_ordre_paiement == 4 && item.decision_cf == 2 &&  item.unite_administrative_id == this.marcheid
      ).length;
    },
    NombreTotalOPDefinitifRejete() {
      return this.ListeDEsEntreprise.filter(
        (item) => item.type_ordre_paiement == 4 && item.decision_cf == 3 &&  item.unite_administrative_id == this.marcheid
      ).length;
    },
    NombreTotalOPDefinitive() {
      return this.ListeDEsEntreprise.filter(
        (item) => item.type_ordre_paiement == 4 &&  item.unite_administrative_id == this.marcheid
      ).length;
    },

    NombreTotalOPTotalEnttente() {
      return this.ListeDEsEntreprise.filter((item) => item.decision_cf == 0 &&  item.unite_administrative_id == this.marcheid)
        .length;
    },
    NombreTotalOPTotalVise() {
      return this.ListeDEsEntreprise.filter(
        (item) => item.decision_cf == 8 &&  item.unite_administrative_id == this.marcheid || item.decision_cf == 9  &&  item.unite_administrative_id == this.marcheid
      ).length;
    },
    NombreTotalOPTotalDiffere() {
      return this.ListeDEsEntreprise.filter((item) => item.decision_cf == 2 &&  item.unite_administrative_id == this.marcheid)
        .length;
    },
    NombreTotalOPTotalRejete() {
      return this.ListeDEsEntreprise.filter((item) => item.decision_cf == 3 &&  item.unite_administrative_id == this.marcheid)
        .length;
    },
    OPTotal() {
      return this.ListeDEsEntreprise.filter(item=>item.unite_administrative_id == this.marcheid).length;
    },

    listeUniteAdminPasSection() {
      if (this.uniteAdministrative_id != "" && this.typeop_id != "") {
        return this.listeordrepaiementProvisoire.filter(
          (item) =>
            item.unite_administrative_id == this.uniteAdministrative_id &&
            item.type_ordre_paiement == this.typeop_id
        );
      }
      return this.listeordrepaiementProvisoire;
    },

    afficheNumeroOpDefinitive() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.numero_ordre_paiement;
          }
          return 0;
        }
      };
    },

    
    afficheIdOpProvisoire() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiementAnnulation.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.id_op_provisoire;
          }
          return 0;
        }
      };
    },
    afficheNumeroOpAnuulation() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiementAnnulation.find(
            (qtreel) => qtreel.id_op_provisoire == id
          );

          if (qtereel) {
            return qtereel.numero_op_annulation;
          }
          return 0;
        }
      };
    },
    filtre_type_teste() {
      const st = this.search.toLowerCase();
      return this.listeordrepaiementProvisoire.filter((type) => {
        return type.numero_ordre_paiement.toLowerCase().includes(st);
      });
    },
    afficheDecisionOpAnuulation1() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiementAnnulation.find(
            (qtreel) => qtreel.id_op_provisoire == id
          );

          if (qtereel) {
            return qtereel.id_op_provisoire;
          }
          return 0;
        }
      };
    },
    afficheDecisionOpAnuulation() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiementAnnulation.find(
            (qtreel) => qtreel.id_op_provisoire == id
          );

          if (qtereel) {
            return qtereel.decision_cf_op_annul;
          }
          return 0;
        }
      };
    },
    afficheDecisionOpProvisoir() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find(
            (qtreel) => qtreel.id_op_provisoire == id
          );

          if (qtereel) {
            return qtereel.decision_cf;
          }
          return 0;
        }
      };
    },

    afficheDecisionLiquidation() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiementAnnulation.find(
            (qtreel) => qtreel.id_op_provisoire == id
          );

          if (qtereel) {
            return qtereel.id_op_provisoire;
          }
          return 0;
        }
      };
    },
    afficheDecisionDefinitif() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiementAnnulation.find(
            (qtreel) => qtreel.id_op_provisoire == id
          );

          if (qtereel) {
            return qtereel.decision_cf_op_annul;
          }
          return 0;
        }
      };
    },
    recupererNomDuControleurF() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterUtilisateur.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.name;
          }
          return 0;
        }
      };
    },
    recupererIdUser() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterAffectionServiceCF.find(
            (qtreel) => qtreel.servicecf_id == id && qtreel.date_fin == null
          );

          if (qtereel) {
            return qtereel.user_id;
          }
          return 0;
        }
      };
    },
    recupererIdServiceCF() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterAffectation.find(
            (qtreel) =>
              qtreel.unite_administrative_id == id && qtreel.date_fin == null
          );

          if (qtereel) {
            return qtereel.servicecf_id;
          }
          return 0;
        }
      };
    },

    griserAutreMotif() {
      return this.editMandat.motif != 237;
    },
    AffichierElementParent() {
      // return id => {
      //   if (id != null && id != "") {
      return this.plans_Decision.filter(
        (element) =>
          this.RecupererNiveau3StructureDecision(
            element.structure_motif_decission_id
          ) == 3
      );
      //   }
      // };
    },
    RecupererNiveau3StructureDecision() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.structuresDecision.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.niveau;
          }
          return 0;
        }
      };
    },
    AffichierElementEnfant() {
      return (id) => {
        if (id != null && id != "") {
          return this.plans_Decision.filter((element) => element.parent == id);
        }
      };
    },
    libelleDecision() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.plans_Decision.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.libelle;
          }
          return "Non renseigné";
        }
      };
    },
    MontantMarche() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.acteEffetFinanciers.find(
            (qtreel) => qtreel.marche_id == id
          );

          if (qtereel) {
            return qtereel.montant_act;
          }
          return 0;
        }
      };
    },
    libelleMarche() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.marches.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.numero_marche.concat("    ", qtereel.objet);
          }
          return 0;
        }
      };
    },
    libelleUa() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.uniteAdministratives.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },
    recupererIdOpAnnulation() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiementAnnulation.find(
            (qtreel) => qtreel.id_op_provisoire == id
          );

          if (qtereel) {
            return qtereel.id;
          }
          return 0;
        }
      };
    },
    recupererIdOpProvisoire() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiementAnnulation.find(
            (qtreel) => qtreel.id_op_provisoire == id
          );

          if (qtereel) {
            return qtereel.id_op_provisoire;
          }
          return 0;
        }
      };
    },
    recupererIdUa() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.unite_administrative_id;
          }
          return 0;
        }
      };
    },
    listeordrepaiementProvisoire() {
      return this.gettersgestionOrdrePaiement.filter(
        (qtreel) => qtreel.diff_op == null  && qtreel.unite_administrative_id == this.marcheid
      );
    },
    
      
      
  },
  methods: {
    ...mapActions("bienService", [
      "modifierGestionOrdrePaiement",
      "modifierGestionOrdrePaiementAnnulat",
      "supprimerGestionOrdrePaiement",
      "ajouterHistoriqueDecisionOp",
      "modifierHistoriqueDecisionOp",
    ]),
afficherModalModifierTitre(id) {

      this.$router.push({
        path: "/ModificationOrdrePaiement/" + id
      });
    },
    partition: partition,

    getDataPaginate(index) {
      this.active_el = index;
      this.page = index;
    },
    precedent() {
      this.active_el--;
      this.page--;
    },
    suivant() {
      this.active_el++;
      this.page++;
    },

    DetacheMotif(id) {
      this.EditDetache = this.gettershistoriqueDecisionCfOP.find(
        (item) => item.id == id
      );
      this.ModifierMotif();
    },
    DetacheMotifAttache(id) {
      this.EditDetache = this.gettershistoriqueDecisionCfOP.find(
        (item) => item.id == id
      );

      this.ModifierMotifAttche();
    },

    ModifierMotif() {
      var objet = {
        id: this.EditDetache.id,
        decision_cf: this.EditDetache.decision_cf,
        famille_motif: this.EditDetache.famille_motif,
        motif: this.EditDetache.motif,
        date_decision: this.EditDetache.date_decision_cf,
        diff_decision: 1,
        id_op: this.EditDetache.id_op,
      };
      this.modifierHistoriqueDecisionOp(objet);
    },

    ModifierMotifAttche() {
      var objet = {
        id: this.EditDetache.id,
        decision_cf: this.EditDetache.decision_cf,
        famille_motif: this.EditDetache.famille_motif,
        motif: this.EditDetache.motif,
        date_decision: this.EditDetache.date_decision_cf,
        diff_decision: 0,
        id_op: this.EditDetache.id_op,
      };
      this.modifierHistoriqueDecisionOp(objet);
    },

    AfficheBoutonAjouter() {
      this.affiche_filtre1 = !this.affiche_filtre1;
    },
    filter() {
      this.affiche_filtre = !this.affiche_filtre;
    },
    ajouterLiquidation() {
      this.$router.push({ name: "AjouterOrdrePaiementAnnulation" });
    },
    modifierTypeTexteLocal() {
      var nouveauObjet = {
        decision_cf: this.editMandat.decision_cf,
        famille_motif: this.editMandat.famille_motif,
        motif: this.editMandat.motif,
        date_decision: this.editMandat.date_decision_cf,
        diff_decision: 0,
        id_op: this.editMandat.id,
      };
      this.ajouterHistoriqueDecisionOp(nouveauObjet);
      this.modifierGestionOrdrePaiement(this.editMandat);
      this.$("#validationOpDefinitif1").modal("hide");
    },
    modifierDecisionFinal() {
      this.modifierGestionOrdrePaiement(this.editDecisionFinal);
      this.$("#validationOpDefinitif1").modal("hide");
    },
    ModifierOpAnnulation() {
      var nouvelObjet = {
        id: this.recupererIdOpAnnulation(this.EditAnulation.id),
        decision_cf_op_annul: this.EditAnulation.decision_cf_op_annul,
        famille_motif_id_op_annul: this.EditAnulation.famille_motif_id_op_annul,
        motif_op_annul: this.EditAnulation.motif_op_annul,
        date_decision_op_annul: this.EditAnulation.date_decision_op_annul,
        observation_op_annul: this.EditAnulation.observation_op_annul,
      };
      this.modifierGestionOrdrePaiementAnnulat(nouvelObjet);
      this.$("#decisionAnnulation").modal("hide");
    },
    ModalOpAnnulation(id) {
      this.$("#decisionAnnulation").modal({
        backdrop: "static",
        keyboard: false,
      });
      this.EditAnulation = this.gettersgestionOrdrePaiement.find(
        (item) => item.id == id
      );
    },
    apercuFacture0(id) {
      this.$("#validationOpDefinitif1").modal({
        backdrop: "static",
        keyboard: false,
      });
      this.editMandat = this.gettersgestionOrdrePaiement.find(
        (item) => item.id == id
      );
    },
 pagePrecedent(){
                window.history.back()
            },
    DecisionDefinitifCf(id) {
      this.$("#decisionDefinitif").modal({
        backdrop: "static",
        keyboard: false,
      });
      this.editDecisionFinal = this.gettersgestionOrdrePaiement.find(
        (item) => item.id == id
      );
    },
    formatageSommeSansFCFA: formatageSommeSansFCFA,
    ajouterOpSysteme() {
      this.$router.push({ name: "AjoutOrdrePaiement" });
    },
    ajouterOpAnnulation() {
      this.$router.push({ name: "AjouterOrdrePaiementAnnulation" });
    },
    ajouterOpDeffinitif() {
      this.$router.push({ name: "AjouterOrdrePaiementDefinitive" });
    },
    //afiicher modal ajouter
    afficherModalAjouterTitre() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false,
      });
    },
    // fonction pour vider l'input ajouter
    ajouterTypeTexteLocal() {
      this.ajouterTypeTexte(this.formData);

      this.formData = {
        code: "",
        libelle: "",
      };
    },
    // afficher modal de modification
    afficherModalModifierTypeTexte(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false,
      });

      this.editTypeTexte = this.typeTextes[index];
    },
    // fonction pour vider l'input modification

    alert() {
      console.log("ok");
    },

    ExporterEnExel() {
      this.$refs.excel.click();
    },
  },
};
</script>

<style scoped>
.tailgrand {
  width: 65%;
  margin: 0 -30%;
  height: 50%;
}
.tailBtn {
  width: 100%;
}
.modal-body {
  max-height: 85%;
}
</style>
