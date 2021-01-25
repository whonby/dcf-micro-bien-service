marche_id
<template>
<div>
    <notifications/>
  <div v-for="item in lot" :key="item.id" class="widget-content">
    <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>

      <div class="span8" style="text-align:center"><h5>LOT N°{{ item.numero_lot }} / {{item.objet}}
      </h5></div>
          <div class="span3"><button @click.prevent="afficheModaleActe(item.id)"
                                     class="btn btn-primary" title="Act">
           <span class=""><i class="icon-edit"></i></span> Ajouter acte</button></div>
<!--      <div class="span2"><button @click.prevent="supprimerAnalyseDossierMultiple(item.id)"  class="btn btn-danger " title="Supprimer">-->
<!--        <span class=""><i class="icon-trash"></i></span></button></div>-->
    </div>

    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>Ref offre</th>
        <th>Soumissionnaire</th>
        <th> Montant Offre financiere</th>
        <th>Type d'analyse</th>


      </tr>
      </thead>
      <tbody>
      <tr class="odd gradeX" v-for="appelOffre in analyseByLot(item.id)"
          :key="appelOffre.id">

        <td v-if="appelOffre.rang_analyse==1" >

          {{affichierReferenceAppelOffre(macheid)|| 'Non renseigné'}}
        </td>

        <td v-if="appelOffre.rang_analyse==1"  >
          {{afficheNomEntreprise(afficherNumeroDossierCandidat1(appelOffre.dossier_candidat_id)) || 'Non renseigné'}}
        </td>


        <td v-if="appelOffre.rang_analyse==1"  >
          {{formatageSomme(parseFloat(afficherListeMontant(afficherOffrefID(appelOffre.dossier_candidat_id)))) || 'Non renseigné'}}
        </td>



        <td v-if="appelOffre.rang_analyse==1">
          {{appelOffre.type_analyse.libelle || 'Non renseigné'}}
        </td>


      </tr>
      </tbody>
    </table>
    <table class="table table-bordered table-striped" v-if="macheid">
      <thead>
      <tr>
        <th>Numero Marché</th>
        <th>Objet marché</th>
         <th>Imputation</th>
        <th>Montant de l'offre(en FCFA TTC)</th>
        <!-- <th>Montant Avance Demarrage</th>
        <th>Montant retenue garantie</th>
        <th>Montant cautionnement</th> -->
        <!-- <th>Type acte</th> -->
        
       
        <th>Durée du marché</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
      <tr class="odd gradeX" v-for="effetFinancier in listeActeEffectFinnancier(item.id)"
          :key="effetFinancier.id">

        <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
          {{effetFinancier.numero_marche || 'Non renseigné'}}</td>
          <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
          {{effetFinancier.marche.objet || 'Non renseigné'}}</td>
          <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
          {{effetFinancier.marche.imputation || 'Non renseigné'}}</td>
        <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
          {{formatageSomme(parseFloat(effetFinancier.montant_act ))|| 'Non renseigné'}}</td>
        <!-- <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
          {{formatageSomme(parseFloat(effetFinancier.avance_demarrage_ttc )) || 'Non renseigné'}}</td>

        <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
          {{formatageSomme(parseFloat(effetFinancier.montant_ttc_retenue_garantie )) || 'Non renseigné'}}</td>

        <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
          {{formatageSomme(parseFloat(effetFinancier.montant_ttc_cautionnement )) || 'Non renseigné'}}</td> -->

        <!-- <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
          {{affichierLibelleTypeActeFinancier(effetFinancier.type_act_effet_id) || 'Non renseigné'}}</td>
         -->

        
        <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
          {{effetFinancier.duree || 'Non renseigné'}} jrs</td>
        <td>
          <div class="btn-group">
            <button @click.prevent="supprimerActeEffetFinancier(effetFinancier.id)"  class="btn btn-danger " title="Supprimer">
              <span class=""><i class="icon-trash"></i></span>
            </button>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
<!-- <code v-if="this.getLotMarche < 0" style="color:red;font-size:14px;text-align:center"> Veuillez saisir au moins un lot </code> -->
 <div id="ajouterAct" class="modal hide grdirModalActeEffet" >
    <div class="modal-header">
      <button data-dismiss="modal" class="close" type="button">×</button>
      <h3>Information sur l'attribution de l'acte : Lot N° {{infoLot.numero_lot}} {{infoLot.objet}}</h3>
    </div>

    <div class="widget-title">
      <ul class="nav nav-tabs">
        <li class="active"><a data-toggle="tab" href="#Identif">Identification de L'acte</a></li>
        <li class=""><a data-toggle="tab" href="#financ">Informations financières</a></li>
      </ul>
    </div>
    <div class="widget-content tab-content">

      <div id="Identif" class="tab-pane active">

        <table class="table table-bordered table-striped">
          <tr>
            <td>
              <div class="control-group">
                <label class="control-label">Type acte effet financier</label>
                <div class="controls">
                  <select v-model="formEffetFinancier.type_act_effet_id" class="span">
                    <option v-for="varText in AffichierElementParent(affichierIdActeFinancierDansActePlan)" :key="varText.id"
                            :value="varText.id">{{varText.libelle}}</option>
                  </select>

                </div>
              </div>
            </td>
            <td>

              <div class="control-group">
                <label class="control-label">Entreprise</label>
                <div class="controls" style="font-size:20px">
                  <input
                      type="text"
                      :value="nom_candidata"
                      class="span"
                      readonly
                  />
                  
                </div>


              </div>


            </td>

            <td>
              <div class="control-group">
                <label class="control-label">Banque</label>
                <div class="controls" >
                  <select v-model="formEffetFinancier.banq_id" class="span" >
                    <option v-for="varText in afficherBanqueDynamiqueId(affichierIdEntrepriseSelectionner(nom_candidata))" :key="varText.id"
                            :value="varText.id">{{afficherBanqueDynamique(varText.banq_id)}}</option>
                  </select>

                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Compte</label>
                 <select v-model="formEffetFinancier.compte_id" class="span" >
                    <option v-for="varText in afficherCompteDynamique(formEffetFinancier.banq_id)" :key="varText.id"
                            :value="varText.id">{{afficherLeCompteEnFonctionDeLaBanque(varText.banq_id)}}</option>
                  </select>
              
              </div>

            </td>

            <!-- <td>
              <div class="control-group">
                <label class="control-label">Compte</label>
                <div class="controls " >
                  <input type="text"  class="span" :value="afficherLeCompteEnFonctionDeLaBanque(formEffetFinancier.banq_id)" readonly >

                </div>
              </div>

            </td> -->

          </tr>
          <tr>
             <td colspan="2" width="550">
              <div class="control-group">
                <label class="control-label">Objet offre :</label>
                <div class="controls">
                  <textarea  :value="affichierObjetMarche(marche_lot)"  class="textarea_editor span11" rows="3" placeholder="Entre le  text ..."></textarea>

                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Incidence financière</label>
                <div class="controls">
                  <select  v-model="formEffetFinancier.incidence_financiere" class="span">
                    <option value="0">Oui</option>
                    <option value="1">Non</option>
                  </select>



                </div>
              </div>
            </td>

            <td colspan="">
              <div class="control-group">
                <label class="control-label">Numéro du marche/contrat</label>
                <div class="controls">
                  <input
                      type="text"
                      v-model="formEffetFinancier.numero_marche"
                      class="span"
                      placeholder="Saisir le numero "
                  />
                </div>
              </div>

            </td>
           

          </tr>
          <tr>
  <td>

              <div class="control-group">
                <label class="control-label" >Date de signature attributaire</label>
                <div class="controls">
                  <input type="date" v-model="formEffetFinancier.date_attributaire"
                         class="span"
                         placeholder=""
                  />
                </div>
              </div>
            </td>
              <td>
              <div class="control-group">
                <label class="control-label">Date signature autorité contractante </label>
                <div class="controls">
                  <input type="date" v-model="formEffetFinancier.reference_act"
                         class="span"
                         placeholder="refence acte"
                  />
                </div>
              </div>
            </td>

            <td>
              <div class="control-group">
                <label class="control-label"> date d'approbation</label>
                <div class="controls">
                  <input
                      type="date"
                      v-model="formEffetFinancier.date_approbation"
                      class="span"
                      placeholder=""
                  />
                </div>
              </div>

            </td>
           
          
          <td>
              <div class="control-group">
                <label class="control-label">Autorité approbatrice</label>
                <div class="controls">
                  <input
                      type="text"
                      v-model="formEffetFinancier.autorite_approbation"
                      class="span"
                      placeholder=" "
                  />
                  <input type="hidden" v-model="formEffetFinancier.ua_id" />
                </div>
              </div>

            </td>

           
          </tr>
          <tr>
              <td>
              <div class="control-group">
                <label class="control-label">Date de debut d'execution prévisionnelle</label>
                <div class="controls">
                  <input type="date" v-model="date_debut_previsionnel"
                         class="span"
                         placeholder=""
                  />
                </div>
              </div>
            </td>


              <td>
                  <div class="control-group">
                      <label class="control-label" title=" ">Durée d'exécution contractuelle(jrs)</label>
                      <div class="controls">
                          <input type="number"  v-model="durre_prevue"
                                 class="span"

                          />
                      </div>
                  </div>
              </td>
            <td>
              <div class="control-group">
                <label class="control-label" title=" ">Date de reception provisoire prévisionnelle </label>
                <div class="controls">
                  <input type="date" v-model="formEffetFinancier.date_reception"
                         class="span"
                         placeholder="" disabled
                  />
                </div>
              </div>
            </td>

            <td>
              <div class="control-group">
                <label class="control-label" title=" ">Date définitive reception prévisionnelle</label>
                <div class="controls">
                  <input type="date" :min="formEffetFinancier.date_odre_service" disabled v-model="formEffetFinancier.date_fin_exe"
                         class="span"
                         placeholder=""
                  />
                </div>
              </div>
            </td>
          </tr>
          <tr>
             <td>
              <div class="control-group">
                <label class="control-label" title=" ">garantie</label>
                <div class="controls">
                    <select  v-model="garantie" class="span">
                        <option value="oui">Oui</option>
                        <option value="non">Non</option>
                    </select>
                </div>
              </div>

            </td>
              <div>
                  <div class="control-group" v-if="garantie=='oui'">
                      <label class="control-label" title=" ">Durée de garantie(JOUR) </label>
                      <div class="controls">
                          <input type="number" v-model="durre_garantie"
                                 class="span"
                                 placeholder=""
                          />
                      </div>
                  </div>
              </div>
          </tr>
        </table>
      </div>

      <div id="financ" class="tab-pane">
  <ul class="nav nav-tabs">
        <li class="active"><a data-toggle="tab" href="#MARCHE2">MARCHE</a></li>
        <li class=""><a data-toggle="tab" href="#DEMARRAGE2">AVANCE DE DEMARRAGE</a></li>
        <li class=""><a data-toggle="tab" href="#CAUTIONNEMENT2">CAUTIONNEMENT</a></li>
        <li class=""><a data-toggle="tab" href="#GARANTIE2" v-if="garantie=='oui'">RETENU DE GARANTIE</a></li>
      </ul>
      <div class="widget-content tab-content">

      <div id="MARCHE2" class="tab-pane active">
         <table class="table table-bordered table-striped">
           <tr>
              <td>

              <div class="control-group">
                <label class="control-label">exonéré</label>
                <div class="controls">
                  <select v-model="formEffetFinancier.exonere" class="span">

                    <option value="0">Oui</option>
                    <option value="1">Non</option>
                  </select>
                </div>
              </div>
            </td>
           
             <td >
              <div class="control-group">
                <label class="control-label" >Taux</label>
                <div class="controls">
                  <input
                      type="number"

                      :value="afficherEnorere" style="text-align:left;color:red"
                      class="span"
                      readonly
                  />
                </div>
              </div>
            </td>
            <td>

              <div class="control-group">
                <label class="control-label">Montant acte/réel du marché (HT)</label>
                <div class="controls">
                    <money v-model="formEffetFinancier.montant_act_ht" ></money>
<!--                  <input type="text" v-model="formEffetFinancier.montant_act_ht"-->
<!--                         class="span"-->
<!--                         placeholder="Saisir le montant "-->
<!--                  />-->
                </div>
              </div>
            </td>
           </tr>
            <tr>
             
             <td >
              <div class="control-group">
                <label class="control-label" > Montant TVA du marché</label>
                <div class="controls">
<!--                  <input-->
<!--                      type="number"-->
<!--                      :value="montantTva" style="text-align:left;color:red"-->

<!--                      class="span"-->
<!--                      readonly-->
<!--                  />-->
                    <money :value="montantTva" style="text-align:left;color:red" readonly ></money>
                </div>
              </div>
            </td>
             <td colspan="2">
              <div class="control-group">
                <label class="control-label" >Montant TTC du marché</label>
                <div class="controls">
<!--                  <input-->
<!--                      type="number"-->
<!--                      :value="montantHTt" style="text-align:left;color:red"-->

<!--                      class="span"-->
<!--                      readonly-->
<!--                  />-->
                    <money :value="montantHTt" style="text-align:left;color:red" readonly ></money>
                </div>
              </div>
            </td>
           </tr>
         </table>
        
      </div>
      <div id="DEMARRAGE2" class="tab-pane">
         <table class="table table-bordered table-striped">
           <tr>
              <td>
              <div class="control-group">
                <label class="control-label">Avance Demarrage Ht</label>
                <div class="controls">
                    <money v-model="formEffetFinancier.avance_demarrage_ht" ></money>

<!--                  <input type="text" v-model="formEffetFinancier.avance_demarrage_ht"-->
<!--                         class="span"-->
<!--                         placeholder="Saisir le montant "-->
<!--                  />-->

                </div>
              </div>
            </td>
             <td>
               <div class="control-group">
                <label class="control-label" >TVA (Avance Demarrage)</label>
                <div class="controls">
<!--                  <input-->
<!--                      type="number"-->
<!--                      :value="avanceDemarrageMontantTva" style="text-align:left;color:red"-->

<!--                      class="span"-->
<!--                      readonly-->
<!--                  />-->
                    <money :value="avanceDemarrageMontantTva" style="text-align:left;color:red"  readonly></money>

                </div>
              </div>
             </td>
             <td >
              <div class="control-group">
                <label class="control-label" >Montant Avance Demarrage TTC</label>
                <div class="controls">
<!--                  <input-->
<!--                      type="number"-->
<!--                      :value="avanceDemarrage" style="text-align:left;color:red"-->
<!--                      class="span"-->
<!--                      readonly-->
<!--                  />-->
                    <money :value="avanceDemarrage" style="text-align:left;color:red" readonly ></money>
                </div>
              </div>
            </td>
           </tr>
         </table>
      </div>
       <div id="CAUTIONNEMENT2" class="tab-pane">
        <table class="table table-bordered table-striped">
           <tr>
             <td >
              <div class="control-group">
                <label class="control-label" >Taux % du cautionnement</label>
                <div class="controls">
                  <input
                      type="number"  v-model="formEffetFinancier.taux_cautionnemt"

                      placeholder="saisir le taux du cautionnement"
                      class="span"

                  />

                </div>
              </div>
            </td>
            <td >
              <div class="control-group">
                <label class="control-label" > Montant HT du cautionnement</label>
                <div class="controls">
<!--                  <input type="text"  :value="afficheMontantHorsTaxeDuCautionnement" style="text-align:left;color:red"-->
<!--                         class="span"-->
<!--                         readOnly-->
<!--                  />-->
                    <money style="text-align:left;color:red" readOnly :value="afficheMontantHorsTaxeDuCautionnement" ></money>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label" >Montant TVA du cautionnement</label>
                <div class="controls">
<!--                  <input-->
<!--                      type="number"  :value="afficherMontantTvaDuCautionnement" style="text-align:left;color:red"-->
<!--                      class="span"-->
<!--                      readonly-->
<!--                  />-->
                    <money style="text-align:left;color:red" readOnly :value="afficherMontantTvaDuCautionnement" ></money>
                </div>
              </div>
            </td>
             <td >
              <div class="control-group">
                <label class="control-label" >Montant TTC du cautionnement </label>
                <div class="controls">
<!--                  <input-->
<!--                      type="number"-->

<!--                      :value="afficherMontantTTCDuCautionnement" style="text-align:left;color:red"-->
<!--                      class="span"-->
<!--                      readonly-->
<!--                  />-->
                    <money style="text-align:left;color:red" readOnly :value="afficherMontantTTCDuCautionnement" ></money>
                </div>
              </div>
            </td>
           </tr>
        </table>
      </div>
       <div id="GARANTIE2" class="tab-pane">
      <table class="table table-bordered table-striped">
        <tr>
          <td>
              <div class="control-group">
                <label class="control-label">Taux % de retenue de garantie</label>
                <div class="controls">
                  <input
                      type="number"  v-model="formEffetFinancier.taux_retenue_garantie"
                      placeholder="saisir le taux de retenue de garantie"

                      class="span"

                  />

                </div>
              </div>
            </td>
            <td >
              <div class="control-group">
                <label class="control-label" > Montant HT de retenue de garantie</label>
                <div class="controls">
<!--                  <input-->
<!--                      type="text"  :value="afficherMontantHorsTaxeRetenuGarantie" style="text-align:left;color:red"-->
<!--                      placeholder="saisir le montant hors taxe du dispositif retenu"-->

<!--                      class="span"-->
<!--                      readonly-->
<!--                  />-->
                    <money style="text-align:left;color:red" readOnly :value="afficherMontantHorsTaxeRetenuGarantie" ></money>
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label" >Montant TVA de retenue de garantie</label>
                <div class="controls">
<!--                  <input-->
<!--                      type="number"  :value="afficherMontantTvaTaxeRetenuGarantie" style="text-align:left;color:red"-->
<!--                      class="span"-->
<!--                      readonly-->
<!--                  />-->
                    <money style="text-align:left;color:red" readOnly :value="afficherMontantTvaTaxeRetenuGarantie" ></money>
                </div>
              </div>
            </td>
             <td >
              <div class="control-group">
                <label class="control-label" >Montant TTC retenue de garantie </label>
                <div class="controls">
<!--                  <input-->
<!--                      type="number"  :value="afficherMontantRetenueGarantie" style="text-align:left;color:red"-->


<!--                      class="span"-->
<!--                      readonly-->
<!--                  />-->
                    <money style="text-align:left;color:red" readOnly :value="afficherMontantRetenueGarantie" ></money>
                </div>
              </div>
            </td>
        </tr>
      </table>
      </div>
      
      </div>
      </div>


    </div>

    <div class="modal-footer">
      <a  @click.prevent="ajouterModalActeEffetFinancierLocal"
          class="btn btn-primary"
          href="#"
      >Valider</a>
      <a data-dismiss="modal" class="btn" href="#">Fermer</a>
    </div>
  </div>
  <!---->

 <!-- afficherEnorere -->

 <div id="modifierActeEF" class="modal hide grdirModalActeEffet" >
    <div class="modal-header">
      <button data-dismiss="modal" class="close" type="button">×</button>
      <h3>Information sur l'attribution de l'acte : Lot N° {{infoLot.numero_lot}} {{infoLot.objet}}</h3>
    </div>

    <div class="widget-title">

      <ul class="nav nav-tabs">
        <li class="active"><a data-toggle="tab" href="#Identif1">Identification de L'acte</a></li>
        <li class=""><a data-toggle="tab" href="#financ2">Informations financières</a></li>
      </ul>
    </div>
    <div class="widget-content tab-content">
      <div id="Identif1" class="tab-pane active">

        <table class="table table-bordered table-striped">
          <tr>
            <td>
              <div class="control-group">
                <label class="control-label">Type acte effet financier</label>
                <div class="controls">
                  <select v-model="editActeEffetFinancier.type_act_effet_id" class="span">
                    <option v-for="varText in AffichierElementParent(affichierIdActeFinancierDansActePlan)" :key="varText.id"
                            :value="varText.id">{{varText.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>
            <td>

              <div class="control-group">
                <label class="control-label">Entreprise</label>
                <div class="controls" style="font-size:20px">
                  <input
                      type="text"
                      :value="nom_candidata"
                      class="span"
                      readonly
                  />

                </div>


              </div>


            </td>

            <td>
              <div class="control-group">
                <label class="control-label">Banque</label>
                <div class="controls" >
                  <select v-model="editActeEffetFinancier.banq_id" class="span" >
                    <option v-for="varText in afficherBanqueDynamiqueId(affichierIdEntrepriseSelectionner(nom_candidata))" :key="varText.id"
                            :value="varText.id">{{afficherBanqueDynamique(varText.banq_id)}}</option>
                  </select>

                </div>
              </div>
            </td>

              <td>
              <div class="control-group">
                <label class="control-label">Compte</label>
                 <select v-model="editActeEffetFinancier.compte_id" class="span" >
                    <option v-for="varText in afficherCompteDynamique(editActeEffetFinancier.banq_id)" :key="varText.id"
                            :value="varText.id">{{afficherLeCompteEnFonctionDeLaBanque(varText.banq_id)}}</option>
                  </select>
              
              </div>

            </td>
          </tr>
          <tr>
             <td colspan="2" width="550">
              <div class="control-group">
                <label class="control-label">Objet offre :</label>
                <div class="controls">
                  <textarea  :value="affichierObjetMarche(marche_lot)"  class="textarea_editor span11" rows="3" placeholder="Entre le  text ..."></textarea>

                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Incidence financière</label>
                <div class="controls">
                  <select  v-model="editActeEffetFinancier.incidence_financiere" class="span">
                    <option value="0">Oui</option>
                    <option value="1">Non</option>
                  </select>



                </div>
              </div>
            </td>

            <td colspan="">
              <div class="control-group">
                <label class="control-label">Numéro du marche/contrat {{editActeEffetFinancier.marche_id}}</label>
                <div class="controls">
                  <input
                      type="text"
                      v-model="editActeEffetFinancier.numero_marche"
                      class="span"
                      placeholder="Saisir le numero "
                  />
                </div>

              </div>

            </td>


          </tr>
          <tr>
  <td>

              <div class="control-group">
                <label class="control-label" >Date de signature attributaire</label>
                <div class="controls">
                  <input type="date" v-model="editActeEffetFinancier.date_attributaire"
                         class="span"
                         placeholder=""
                  />
                </div>

              </div>
            </td>
              <td>
              <div class="control-group">
                <label class="control-label">Date signature autorité contractante </label>
                <div class="controls">
                  <input type="date" v-model="editActeEffetFinancier.reference_act"
                         class="span"
                         placeholder="refence acte"
                  />
                </div>

              </div>
            </td>



            <td>
              <div class="control-group">
                <label class="control-label"> Date d'approbation</label>
                <div class="controls">
                  <input
                      type="date"
                      v-model="editActeEffetFinancier.date_approbation"
                      class="span"
                      placeholder=""
                  />
                </div>

              </div>

            </td>


          <td>
              <div class="control-group">
                <label class="control-label">Autorité approbatrice</label>
                 <div class="controls">
                  <input
                      type="text"
                      v-model="editActeEffetFinancier.autorite_approbation"
                      class="span"
                      placeholder=" "
                  />
                  <input type="hidden" v-model="editActeEffetFinancier.ua_id" />
                </div>

              </div>

            </td>


          </tr>
          <tr>
              <td>
              <div class="control-group">
                <label class="control-label">Date de début d'execution prévisionnelle</label>
                 <div class="controls">
                  <input type="date" v-model="editActeEffetFinancier.date_odre_service"
                         class="span"
                         placeholder=""
                  />
                </div>

              </div>
            </td>

            <td>
              <div class="control-group">
                <label class="control-label" title=" ">Date de reception provisoire prévisionnelle </label>
                 <div class="controls">
                  <input type="date" v-model="editActeEffetFinancier.date_reception"
                         class="span"
                         placeholder=""
                  />
                </div>

              </div>
            </td>



            <td>
              <div class="control-group">
                <label class="control-label" title=" ">Date fin d'exécution prévisionnelle</label>
                 <div class="controls">
                  <input type="date" :min="editActeEffetFinancier.date_odre_service" :readonly="getDateFinExécutionValueModifier" v-model="editActeEffetFinancier.date_fin_exe"
                         class="span"
                         placeholder=""
                  />
                </div>

              </div>
            </td>



            <td>
              <div class="control-group">
                <label class="control-label" title=" ">Durée d'exécution contractuelle(jrs)</label>
                 <div class="controls">
                  <input type="text"  readonly :value="nombreDejourCalculeModifier"
                         class="span"

                  />
                </div>

              </div>
            </td>

          </tr>
                   <tr>
             <td>
              <div class="control-group">
                <label class="control-label" title=" ">garantie</label>
                <div class="controls">
                    <select  v-model="editActeEffetFinancier.garantie" class="span">
                        <option value="oui">Oui</option>
                        <option value="non">Non</option>
                    </select>
                </div>
              </div>

            </td>
              <div>
                  <div class="control-group" v-if="garantie=='oui'">
                      <label class="control-label" title=" ">Durée de garantie(JOUR) </label>
                      <div class="controls">
                          <input type="number" v-model="editActeEffetFinancier.durre_garantie"
                                 class="span"
                                 placeholder=""
                          />
                      </div>
                  </div>
              </div>
          </tr>
        </table>
      </div>

      <div id="financ2" class="tab-pane">
  <ul class="nav nav-tabs">
        <li class="active"><a data-toggle="tab" href="#MARCHE1">MARCHE</a></li>
        <li class=""><a data-toggle="tab" href="#DEMARRAGE1">AVANCE DE DEMARRAGE</a></li>
        <li class=""><a data-toggle="tab" href="#CAUTIONNEMENT1">CAUTIONNEMENT</a></li>
        <li class=""><a data-toggle="tab" href="#GARANTIE1">RETENU DE GARANTIE</a></li>
      </ul>
      <div class="widget-content tab-content">

      <div id="MARCHE1" class="tab-pane active">
         <table class="table table-bordered table-striped">
           <tr>
              <td>

              <div class="control-group">
                <label class="control-label">exonéré</label>
                <div class="controls">
                   <select v-model="editActeEffetFinancier.exonere" class="span">

                    <option value="0">Oui</option>
                    <option value="1">Non</option>
                  </select>
                </div>
              </div>
            </td>

             <td >
              <div class="control-group">
                <label class="control-label" >Taux</label>
                 <div class="controls">
                  <input
                      type="number"

                      :value="afficherEnorereModifier"
                      class="span"
                      readonly
                  />
                </div>
              </div>
            </td>
            <td>

              <div class="control-group">
                <label class="control-label">Montant acte/réel du marché (HT)</label>
                 <div class="controls">
                  <input type="text" v-model="editActeEffetFinancier.montant_act_ht"
                         class="span"
                         placeholder="Saisir le montant "
                  />
                </div>

              </div>
            </td>
           </tr>
            <tr>

             <td >
              <div class="control-group">
                <label class="control-label" > Montant TVA du marché</label>
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
             <td colspan="2">
              <div class="control-group">
                <label class="control-label" >Montant TTC du marché</label>
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
      <div id="DEMARRAGE1" class="tab-pane">
         <table class="table table-bordered table-striped">
           <tr>
             <td >
              <div class="control-group">
                <label class="control-label" >Taux Avance Démarrage</label>
                <div class="controls">
                  <input
                      type="number"  v-model="editActeEffetFinancier.taux_avance_demarrage"

                      placeholder="saisir le taux Avance Demarrage"
                      class="span"

                  />

                </div>
              </div>
            </td>
              <td>
              <div class="control-group">
                <label class="control-label">Avance Demarrage Ht</label>
                 <div class="controls">


                  <input type="text" v-model="editActeEffetFinancier.avance_demarrage_ht"
                         class="span"
                         placeholder="Saisir le montant "
                  />

                </div>

              </div>
            </td>
             <td>
               <div class="control-group">
                <label class="control-label" >TVA (Avance Demarrage)</label>
                 <div class="controls">
                  <input
                      type="number"
                      :value="avanceDemarrageMontantTva"

                      class="span"
                      readonly
                  />

                </div>
              </div>
             </td>
             <td >
              <div class="control-group">
                <label class="control-label" >Montant Avance Démarrage TTC</label>
                 <div class="controls">
                  <input
                      type="number"
                      :value="avanceDemarrage"

                      class="span"
                      readonly
                  />

                </div>
              </div>
            </td>
           </tr>
         </table>
      </div>
       <div id="CAUTIONNEMENT1" class="tab-pane">
        <table class="table table-bordered table-striped">
           <tr>
             <td >
              <div class="control-group">
                <label class="control-label" >Taux % du cautionnement</label>
                 <div class="controls">
                  <input
                      type="number"  v-model="editActeEffetFinancier.taux_cautionnemt"

                      placeholder="saisir le taux du cautionnement"
                      class="span"

                  />

                </div>

              </div>
            </td>
            <td >
              <div class="control-group">
                <label class="control-label" > Montant HT du cautionnement</label>
                <div class="controls">
                  <input type="text"  :value="afficheMontantHorsTaxeDuCautionnement"


                         class="span"
                         readOnly
                  />

                </div>

              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label" >Montant TVA du cautionnement</label>
                 <div class="controls">
                  <input
                      type="number"  :value="afficherMontantTvaDuCautionnement"


                      class="span"
                      readonly
                  />

                </div>

              </div>
            </td>
             <td >
              <div class="control-group">
                <label class="control-label" >Montant TTC du cautionnement </label>
                 <div class="controls">
                  <input
                      type="number"

                      :value="afficherMontantTTCDuCautionnement"
                      class="span"
                      readonly
                  />

                </div>

              </div>
            </td>
           </tr>
        </table>
      </div>
       <div id="GARANTIE1" class="tab-pane">
      <table class="table table-bordered table-striped">
        <tr>
          <td >
              <div class="control-group">
                <label class="control-label">Taux % de retenue de garantie</label>
                 <div class="controls">
                  <input
                      type="number"  v-model="editActeEffetFinancier.taux_retenue_garantie"
                      placeholder="saisir le taux de retenue de garantie"

                      class="span"

                  />

                </div>

              </div>
            </td>
            <td >
              <div class="control-group">
                <label class="control-label" > Montant HT de retenue de garantie</label>
                 <div class="controls">
                  <input
                      type="text"  :value="afficherMontantHorsTaxeRetenuGarantie"
                      placeholder="saisir le montant hors taxe du dispositif retenu"

                      class="span"
                      readonly
                  />

                </div>

              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label" >Montant TVA de retenue de garantie</label>
                <div class="controls">
                  <input
                      type="number"  :value="afficherMontantTvaTaxeRetenuGarantie"
                      class="span"
                      readonly
                  />

                </div>

              </div>
            </td>
             <td >
              <div class="control-group">
                <label class="control-label" >Montant TTC retenue de garantie </label>
                 <div class="controls">
                  <input
                      type="number"  :value="afficherMontantRetenueGarantie"
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
      </div>


    </div>

    <div class="modal-footer">
      <a  @click.prevent="modifierModalActeEffetFinancierLocal"
          class="btn btn-primary"
          href="#"
      >Modifier</a>
      <a data-dismiss="modal" class="btn" href="#">Fermer</a>
    </div>
  </div>
  <!---->





  
</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {formatageSomme} from "@/Repositories/Repository";

export default {
name: "ActEffeFinanciere",
  props:["macheid"],
  data(){
    return{
      lot:"",
      // editEffetFinancier:"",
      editActeEffetFinancier:{},
        garantie:"non",
        date_debut_previsionnel:"",
        
        durre_prevue:"",
        durre_garantie:"",
       formEffetFinancier:{
        tva_cautionnement:"",
        montant_ttc_cautionnement:"",
        montant_ht_cautionnement:"",
        exonere:"",
        montant_act_ht:"",
        taux_cautionnemt:"",
        taux_retenue_garantie:"",
        tva:"",
        taux:"",
        ua_id:"",
        avance_demarrage_ht:0,
        avance_demarrage_ttc:0,
        tva_avance_demarage:"",
        libelle_act:"",
        reference_act:"",
        objet_act:"",
        incidence_financiere:"",
        montant_act:"",
        date_attributaire:"",
        date_reception:"",
        duree:"",
        date_fin_exe:"",
        date_odre_service:"",
        livrable_id:"",
        autorite_approbation:"",
        date_approbation:"",
        // text_juridique_id:"",
        type_act_effet_id:"",
        analyse_dossier_id:"",
        entreprise_id:"",
        marche_id:"",
        banq_id:"",
        compte_id:"",
        numero_marche:""
      },
      nom_candidata:"",
      dossier_candidat_id:"",
     marche_lot:"",
      infoLot:""
    }
  },
  created(){
    this.lot=this.getMarchePersonnaliser.filter(item=>item.parent_id==this.macheid)
console.log(this.dateDefinitivePrevisionnel("2021-01-23",30))

  },
  computed:{
    ...mapGetters("bienService", [ "typeMarches","gettersCotationPersonnaliser","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots",
      "modePassations", "procedurePassations","getterDossierCandidats","marches",
      "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation",
      "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
      "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
      "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables",
      "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
    ...mapGetters('personnelUA', ['acteur_depenses']),


    ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises','banques','comptes','getCompte']),
    ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
      'types_financements']) ,

    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),
    ...mapGetters('parametreGenerauxFonctionnelle', ['structureActe',
      'planActe']),
      dateDefinitivePrevisionnel() {
        return (date, days)=>{

            var result = new Date(date);
            result.setDate(result.getDate() + parseInt(days));
            console.log(result)
            return this.formatDate(result);
        }
     },
      formatDate() {
        return date=>{
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2)
                month = '0' + month;
            if (day.length < 2)
                day = '0' + day;

            return [year, month, day].join('-');
        }
      },
      formatDateFr(){
          return date=>{
              var d = new Date(date),
                  month = '' + (d.getMonth() + 1),
                  day = '' + d.getDate(),
                  year = d.getFullYear();

              if (month.length < 2)
                  month = '0' + month;
              if (day.length < 2)
                  day = '0' + day;

              return [day,month,year].join('/');
          }
      },
 getLotMarche(){
      return this.getMarchePersonnaliser.filter(item=>item.parent_id==this.macheid).length;
    },


afficherEntrepriseNom(){
      return id =>{
        if(id != null && id !=""){
          let ObjetId =this.entreprises.find(element => element.id== id)
          if(ObjetId){
            return ObjetId.raison_sociale
          }

        }
      }
    },
affichieridMarcheGlobal() {
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
    //   affichierReferenceAppelOffre() {
    //   return id => {
    //     if (id != null && id != "") {
    //       const qtereel = this.appelOffres.find(qtreel => qtreel.marche_id == id);

    //       if (qtereel) {
    //         return qtereel.ref_appel;
    //       }
    //       return 0
    //     }
    //   };
    // },
    analyseByLot(){
      return id=>{
        return this.getterAnalyseDossiers.filter(item=>{
          if (item.marche_id==id && item.rang_analyse==1)
             return item
        })
      }
    },

    affichierReferenceAppelOffre() {
      return id => {
        if (id != null && id != "") {
          const qtereel = this.appelOffres.find(qtreel => qtreel.marche_id == id);

          if (qtereel) {
            return qtereel.ref_appel;
          }
          return 0
        }
      };
    },

    afficheMarcheType(){
      if(this.affichierCodeTypeMarche(this.affichierIdTypeMarche(this.infoLot.id)) == 3){
        return 1
      }
      else{
        return 2
      }
    },

    affichierIdBanque() {
      return id => {
        if (id != null && id != "") {
          const qtereel = this.comptes.find(qtreel => qtreel.rib == id);

          if (qtereel) {
            return qtereel.banq_id;
          }
          return 0
        }
      };
    },


    affichierCodeTypeMarche() {
      return id1 => {
        if (id1 != null && id1 != "") {
          const qtereel = this.typeMarches.find(qtreel => qtreel.id == id1);

          if (qtereel) {
            return qtereel.code_type_marche;
          }
          return 0
        }
      };
    },

    affichierIdTypeMarche() {
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

    afficherNomCandidat(){
      return id =>{
        if(id!=null && id!=""){
          const nomCandidat= this.getterDossierCandidats.find(item =>item.id==id)
          if(nomCandidat){
            return nomCandidat.nom_cand
          }
        }
      }
    },

    afficherIDUA() {
      return id => {
        if (id != null && id != "") {
          const qtereel = this.marches.find(qtreel => qtreel.id == id);

          if (qtereel) {
            return qtereel.unite_administrative_id;
          }
          return null
        }
      };
    },
    ///
    afficherNumeroDossierCandidat1() {
      return id => {
        if (id != null && id != "") {
          const qtereel = this.getterDossierCandidats.find(qtreel => qtreel.id == id);

          if (qtereel) {
            return qtereel.entreprise_id;
          }
          return null
        }
      };
    },
afficheNomEntreprise() {
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
    afficherOffrefID() {
      return id => {
        if (id != null && id != "") {
          const qtereel = this.getterOffreFinanciers.find(qtreel => qtreel.dossier_candidat_id == id);

          if (qtereel) {
            return qtereel.id;
          }
          return 0
        }
      };
    },

    afficherListeMontant(){
      return id => {
        if( id !== undefined) {
          var acteur = this.getterOffreFinanciers.find(acteur => acteur.id == id)

          return  (acteur) ? acteur.montant_total_ttc :null
        }
        return null
      }

    },


    affichierLibelleTypeActeFinancier() {
      return id => {
        if (id != null && id != "") {
          const qtereel = this.planActe.find(qtreel => qtreel.id == id);

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0
        }
      }; 
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

    AffichierElementParent() {

      return id => {
        if (id != null && id != "") {
          return this.planActe.filter(element => element.parent == id);
        }
      };
    },

    affichierObjetMarche(){
      return id =>{
        if(id!=null && id!=""){
          let objetMarche = this.marches.find(idMarche => idMarche.id ==id);
          if(objetMarche){
            return objetMarche.objet
          }
          return 0
        }
      }
    },


    enregistrerIdEntreprise(){
      return id =>{
        if(id!=null && id!=""){
          let objetMarche = this.marches.find(idMarche => idMarche.id ==id);
          if(objetMarche){
            return objetMarche.objet
            // console.log(objetMarche)
          }
          return 0
        }
      }
    },


    affichierNomEntreprise() {
      let resulta=this.getterAnalyseDossiers.filter(item=>item.reference_pv== this.afficherPv(this.macheid));
      // console.log(resulta)
      if (resulta.length>0){
        resulta.sort(function (a, b) {
          return a.note_analyse - b.note_analyse;
        }).reverse()
        let first=[...resulta].shift()
        // const [ob1]=resulta

        console.log(first)
        // let objet=resulta[0]
        let dossier=first.dossier_candidature
        console.log(dossier)
        return dossier
      }
      return 0

    },


    // calcul du montant ttc de retenu
    afficherMontantRetenueGarantie(){
      const montantttcRetenueGarantie = (parseFloat(this.montantHTt) * (this.formEffetFinancier.taux_retenue_garantie)/100)
      if (montantttcRetenueGarantie) {
        return parseFloat(montantttcRetenueGarantie).toFixed(0);
      }
      return 0
    },
      afficherMontantRetenueGarantieModifier(){
      const montantttcRetenueGarantie = (parseFloat(this.montantHTt) * (this.editActeEffetFinancier.taux_retenue_garantie)/100)
      if (montantttcRetenueGarantie) {
        return parseFloat(montantttcRetenueGarantie).toFixed(0);
      }
      return 0
    },

// calcul du montant tva de retenue de garantie

// afficherMontantTvaTaxeRetenuGarantie(){

//   const resultat = parseFloat (this.afficherMontantRetenueGarantie)/(1+ parseFloat(this.afficherTauxEnPourcentage))

//   if(resultat){
//     return parseFloat( Math.round(resultat))
//   }
//   return 0
// },


    afficherMontantTvaTaxeRetenuGarantie(){

      const val = parseFloat((this.afficherMontantHorsTaxeRetenuGarantie) * parseFloat(this.Modifier)/100);

      if (val) {
        return parseFloat(val).toFixed(0);
      }

      return 0

    },
      afficherMontantTvaTaxeRetenuGarantieModifier(){

      const val = parseFloat((this.afficherMontantHorsTaxeRetenuGarantie) * parseFloat(this.ModifierModifier)/100);

      if (val) {
        return parseFloat(val).toFixed(0);
      }

      return 0

    },


// calcul du montant hors taxe de retenu de garantie  afficherMontantHorsTaxeRetenuGarantie


    afficherMontantHorsTaxeRetenuGarantie(){

      const anwser = parseFloat (this.afficherMontantRetenueGarantie)/(1+ parseFloat(this.afficherTauxEnPourcentage))

      if(anwser){
        return parseFloat( Math.round(anwser))
      }
      return 0
    },
      afficherMontantHorsTaxeRetenuGarantieModifier(){

      const anwser = parseFloat (this.afficherMontantRetenueGarantieModifier)/(1+ parseFloat(this.afficherTauxEnPourcentage))

      if(anwser){
        return parseFloat( Math.round(anwser))
      }
      return 0
    },

//  calcul montant ttc de retenu de garantie pour la modification


    editAfficherMontantRetenueGarantie(){
      const response = (parseFloat(this.editMontantHTt) * (this.editActeEffetFinancier.taux_retenue_garantie)/100)
      if (response) {
        return parseFloat(response).toFixed(0);
      }
      return 0
    },

// calcul le montant hors taxe de retenu de garantie pour la modification
    editAfficherMontantHorsTaxeRetenuGarantie(){

      const tonyData = parseFloat (this.editAfficherMontantRetenueGarantie)/(1+ parseFloat(this.afficherTauxEnPourcentage))

      if(tonyData){
        return parseFloat( Math.round(tonyData))
      }
      return 0
    },

// calcul le montant de tva du retenu de garantie
    editAfficherMontantTvaTaxeRetenuGarantie(){

      const data = parseFloat((this.editAfficherMontantHorsTaxeRetenuGarantie) * parseFloat(this.editModifier)/100);

      if (data) {
        return parseFloat(data).toFixed(0);
      }

      return 0
    },



// calcule du montant ttc du cautionnement

    afficherMontantTTCDuCautionnement(){
      // const result = (parseFloat(this.montantHTt) * (this.formEffetFinancier.taux_cautionnemt)/100)
      // if (result) {
      //   return parseFloat(result).toFixed(0);
      // }
   let montant=parseFloat(this.afficheMontantHorsTaxeDuCautionnement) + parseFloat(this.afficherMontantTvaDuCautionnement)
      return parseFloat(montant).toFixed(0);

    },
     afficherMontantTTCDuCautionnementModifier(){
      const result = (parseFloat(this.montantHTt) * (this.editActeEffetFinancier.taux_cautionnemt)/100)
      if (result) {
        return parseFloat(result).toFixed(0);
      }

      return 0

    },

// calcul du montant de tva du cautionnement

    afficherMontantTvaDuCautionnement(){

      // const val = parseFloat((this.afficheMontantHorsTaxeDuCautionnement) * parseFloat(this.Modifier)/100);
      //
      // if (val) {
      //   return parseFloat(val).toFixed(0);
      // }
        let montantTV=(this.afficheMontantHorsTaxeDuCautionnement * this.afficherEnorere)/100

      return parseFloat(montantTV).toFixed(0);

    },
     afficherMontantTvaDuCautionnementModifier(){

      const val = parseFloat((this.afficheMontantHorsTaxeDuCautionnementModifier) * parseFloat(this.Modifier)/100);

      if (val) {
        return parseFloat(val).toFixed(0);
      }

      return 0

    },


// calcul du montant hors taxe du cautionnement

    afficheMontantHorsTaxeDuCautionnement(){
         //let montantH=this.formEffetFinancier.montant_act_ht afficherEnorere
              if(this.formEffetFinancier.taux_cautionnemt!="" && this.formEffetFinancier.montant_act_ht!=""){
                  let taux_cautionnement=parseFloat(this.formEffetFinancier.taux_cautionnemt)
                  let montant_act_ht=parseFloat(this.formEffetFinancier.montant_act_ht)
                 let mont=(montant_act_ht * taux_cautionnement)/100
                  return parseFloat(mont).toFixed(0);

              }
              return 0
      // const anwser = parseFloat(this.afficherMontantTTCDuCautionnement)/(1+ parseFloat(this.afficherTauxEnPourcentage))
      //
      // if(anwser){
      //   return parseFloat( Math.round(anwser))
      //}
     // return 0
    },
     afficheMontantHorsTaxeDuCautionnementModifier(){

      const anwser = parseFloat (this.afficherMontantTTCDuCautionnementModifier)/(1+ parseFloat(this.afficherTauxEnPourcentage))

      if(anwser){
        return parseFloat( Math.round(anwser))
      }
      return 0
    },

// calcul le montant ttc du cautionnement
    editAfficherMontantTTCDuCautionnement(){

      const res = (parseFloat(this.editMontantHTt) * (this.editActeEffetFinancier.taux_cautionnemt)/100)
      if (res) {
        return parseFloat(res).toFixed(0);
      }

      return 0

    },

// calcul du montant hors taxe du cautionnement


    editAfficheMontantHorsTaxeDuCautionnement(){
       // afficherEnorere
      const resulVal = parseFloat (this.editAfficherMontantTTCDuCautionnement)/(1+ parseFloat(this.afficherTauxEnPourcentage))

      if(resulVal){
        return parseFloat( Math.round(resulVal))
      }
      return 0
    },

// calcul du montant de tva du cautionnement
    editAfficherMontantTvaDuCautionnement(){
      const val = parseFloat((this.editAfficheMontantHorsTaxeDuCautionnement) * parseFloat(this.editModifier)/100);

      if (val) {
        return parseFloat(val).toFixed(0);
      }

      return 0
    },


// calcule du montant ttc

    afficherEnorere(){
      if(this.formEffetFinancier.exonere == 0){
        return 0
      }
      else {
        return this.affcherTauxEnCours

      }
    },
     afficherEnorereModifier(){
      if(this.editActeEffetFinancier.exonere == 0){
        return 0
      }
      else {
        return this.affcherTauxEnCours

      }
    },






    editAfficherEnorere(){
      if(this.editActeEffetFinancier.exonere == 0){
        return 0
      }
      else {
        return this.affcherTauxEnCours

      }
    },

    affcherTauxEnCours() {


      const norme = this.taux.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.libelle;
      }
      return 0
    },



    afficherTauxEnPourcentage() {


      const tauxArrondi = this.taux.find(normeEquipe => normeEquipe.encours == 1);

      if (tauxArrondi) {
        return tauxArrondi.arrondit;
      }
      return 0
    },


    montantTva() {
      const val = parseFloat((this.formEffetFinancier.montant_act_ht) * parseFloat(this.afficherEnorere)/100);

      if (val) {
        return parseFloat(val).toFixed(0);
      }

      return 0
    },
     montantTvaModifier() {
      const val = parseFloat((this.editActeEffetFinancier.montant_act_ht) * parseFloat(this.afficherEnorere)/100);

      if (val) {
        return parseFloat(val).toFixed(0);
      }

      return 0
    },

    editMontantTva(){
      const resulta = parseFloat ((this.editActeEffetFinancier.montant_act_ht) * parseFloat(this.editAfficherEnorere)/100)
      if(resulta){
        return parseFloat(resulta).toFixed(0)
      }
      return 0
    },


    editMontantHTt(){
      let anwser = parseFloat(this.editActeEffetFinancier.montant_act_ht) + parseFloat(this.editMontantTva)
      if(anwser){
        return parseFloat(anwser).toFixed(0);
      }
      return 0
    },




    montantHTt() {
      
      const val = parseFloat(this.formEffetFinancier.montant_act_ht) + parseFloat(this.montantTva);

      if (val) {
        return parseFloat(val).toFixed(0);
      }

      return 0
    },
      montantHTtModifier() {
      
      const val = parseFloat(this.editActeEffetFinancier.montant_act_ht) + parseFloat(this.montantTva);

      if (val) {
        return parseFloat(val).toFixed(0);
      }

      return 0
    },

    avanceDemarrage(){
      const val = parseFloat(this.formEffetFinancier.avance_demarrage_ht) + parseFloat(this.avanceDemarrageMontantTva);

      if (val) {
        return parseFloat(val).toFixed(0);
      }

      return 0
    },
      avanceDemarrageModifier(){
      const val = parseFloat(this.editActeEffetFinancier.avance_demarrage_ht) + parseFloat(this.avanceDemarrageMontantTva);

      if (val) {
        return parseFloat(val).toFixed(0);
      }

      return 0
    },

    avanceDemarrageMontantTva() {
      const val = parseFloat((this.formEffetFinancier.avance_demarrage_ht) * parseFloat(this.formEffetFinancier.taux_avance_demarrage)/100);

      if (val) {
        return parseFloat(val).toFixed(0);
      }

      return 0
    },
    //  avanceDemarrageMontantTvaModifier() {
    //   const val = parseFloat((this.editActeEffetFinancier.avance_demarrage_ht) * parseFloat(this.afficherEnorere)/100);

    //   if (val) {
    //     return parseFloat(val).toFixed(0);
    //   }

    //   return 0
    // },
  avanceDemarrageMontantTvaModifier() {
      const val = parseFloat((this.editActeEffetFinancier.avance_demarrage_ht) * parseFloat(this.afficherEnorere)/100);

      if (val) {
        return parseFloat(val).toFixed(0);
      }

      return 0
    },

    editAvanceDemarrageMontantTva(){
      const val = parseFloat((this.editActeEffetFinancier.avance_demarrage_ht) * parseFloat(this.editAfficherEnorere)/100);

      if (val) {
        return parseFloat(val).toFixed(0);
      }

      return 0
    },


    editAvanceDemarrage(){
      const val = parseFloat(this.editActeEffetFinancier.avance_demarrage_ht) + parseFloat(this.editAvanceDemarrageMontantTva);

      if (val) {
        return parseFloat(val).toFixed(0);
      }

      return 0
    },


// afficher la refernec_pv dans la table pv

    afficherPv(){
      return macheid =>{
        if(macheid!=null && macheid!=""){
          const objetPv = this.getterProceVerballe.find(item => item.marche_id ==macheid)
          if(objetPv){
            return objetPv.reference
          }
          return null
        }
      }

    },




// infoPVAffiche:function(){
//                 let resultaAnalysePv=[]
//                 let resulta=this.getterAnalyseDossiers.filter(item=>item.reference_pv==null );
//                 this.resultaAnalysePv=this.resultaAnalysePv.concat(resulta)
//                 // if (this.resultaAnalysePv.length>0){
//                 //     this.resultaAnalysePv.sort(function (a, b) {
//                 //         return a.note_analyse - b.note_analyse;
//                 //     }).reverse()
//                 // }
//                 //console.log(this.resultaAnalysePv)
//             },





    afficherEntrepriseRecep () {
      return id => {
        if ( id!=null && id != "" ) {
          // console.log("Marche lettre inviation marche")
          const objet= this.getterDossierCandidats.find(idmarche => idmarche.marche_id == id)

          if(objet){
            return objet.nom_cand
          }
          return 0
        }
      }
    },


    // afficher la banque dynamique

    verifiBanqueExist(){
      return this.formEffetFinancier.entreprise_id =="";
    },
    verifiBanqueExistModifier(){
      return this.editActeEffetFinancier.entreprise_id =="";
    },

    afficherBanqueDynamique(){
      return id =>{
        if(id != null && id !=""){
          var  resultat = this.banques.find(element => element.id== id);
          if(resultat){
            return resultat.libelle
          }
          return 0
        }
      }
    },

    afficherBanqueId(){
      return id =>{
        if(id != null && id !=""){
          var  resultat = this.comptes.find(element => element.id== id);
          if(resultat){
            return resultat.banque_id
          }
          return 0
        }
      }
    },

// listeAvisAnoBailleur(){
//        return id =>{
//            if(id!=null && id!=""){
//                const resultatAvis = this.getterAnoDMPBailleur.find(idDemande =>idDemande.marche_id==id
//                && idDemande.avis_bail== 0)
//                return resultatAvis
//            }
//            return null
//        }
//    },

affichierIdEntrepriseSelectionner() {
      return id => {
        if (id != null && id != "") {
          const qtereel = this.entreprises.find(qtreel => qtreel.raison_sociale == id);

          if (qtereel) {
            return qtereel.id;
          }
          return 0
        }
      };
    },

    afficherBanqueDynamiqueId(){
      return id =>{
        if(id != null && id !=""){
          return this.comptes.filter(element => element.entrepse_id== id)


        }
      }
    },
    afficherCompteDynamique(){
      return id =>{
        if(id != null && id !=""){
          return this.comptes.filter(element => element.banq_id== id)


        }
      }
    },




    afficherEntrepriseId(){
      return id =>{
        if(id != null && id !=""){
          let ObjetId =this.getterDossierCandidats.find(element => element.entreprise_id== id)
          if(ObjetId){
            return ObjetId.nom_cand
          }

        }
      }
    },


    // afficherLeCompteEnFonctionDeLaBanque(){       return resultat.varObjetBanque.libelle
    //     return banq_id =>{
    //         if(banq_id !=null && banq_id!=""){
    //   varObjetBanque.libelle.     return this.comptes.find(element => element.id == banq_id)


    //         }
    //     }
    // },

    afficherLeCompteEnFonctionDeLaBanque(){
      return banq_id => {
        if( banq_id !== undefined) {
          var acteur = this.comptes.find(acteur => acteur.id == banq_id  )

          return  (acteur) ? acteur.rib :null
        }
        return null
      }

    },
    afficherIdCompte(){
      return banq_id => {
        if( banq_id !== undefined) {
          var acteur = this.comptes.find(acteur => acteur.rib == banq_id  )

          return  (acteur) ? acteur.id :null
        }
        return null
      }

    },
nombreDejourCalculeModifier(){
      let vM=this;
      const acteAffet = vM.editActeEffetFinancier
      if(acteAffet.date_odre_service == acteAffet.date_fin_exe &&  acteAffet.date_fin_exe !=="" && acteAffet.date_odre_service !=="") return 1
      if(acteAffet.date_fin_exe =="" && acteAffet.date_odre_service =="") return null

      var dateF = new Date(acteAffet.date_fin_exe).getTime()
      var dateO = new Date(acteAffet.date_odre_service).getTime()
      var resultat = dateF - dateO

      var diffJour =  resultat / (1000 * 3600 * 24)

      if(isNaN(diffJour)) return null

      if(parseFloat(diffJour) < 0 ) return "durée invalide"
      vM.editActeEffetFinancier.duree=diffJour
      return  diffJour;

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
    //  nombreDejourCalculeModifier(){
    //   let vM=this;
    //   const acteAffet = vM.editActeEffetFinancier
    //   if(acteAffet.date_odre_service == acteAffet.date_fin_exe &&  acteAffet.date_fin_exe !=="" && acteAffet.date_odre_service !=="") return 1
    //   if(acteAffet.date_fin_exe =="" && acteAffet.date_odre_service =="") return null

    //   var dateF = new Date(acteAffet.date_fin_exe).getTime()
    //   var dateO = new Date(acteAffet.date_odre_service).getTime()
    //   var resultat = dateF - dateO

    //   var diffJour =  resultat / (1000 * 3600 * 24)

    //   if(isNaN(diffJour)) return null

    //   if(parseFloat(diffJour) < 0 ) return "durée invalide"
    //   vM.editActeEffetFinancier.duree=diffJour
    //   return  diffJour;

    // },

    getDateFinExécutionValue(){
      return !this.formEffetFinancier.date_odre_service !=""
    },
     getDateFinExécutionValueModifier(){
      return !this.editActeEffetFinancier.date_odre_service !=""
    },



    nombreDejourCalculeEdit(){
      let vM=this;
      const acteAffetEdit = vM.editActeEffetFinancier
      if(acteAffetEdit.date_odre_service == acteAffetEdit.date_fin_exe &&  acteAffetEdit.date_fin_exe !=="" && acteAffetEdit.date_odre_service !=="") return 1
      if(acteAffetEdit.date_fin_exe =="" && acteAffetEdit.date_odre_service =="") return null

      var dateF = new Date(acteAffetEdit.date_fin_exe).getTime()
      var dateO = new Date(acteAffetEdit.date_odre_service).getTime()
      var resultat = dateF - dateO

      var diffJour =  resultat / (1000 * 3600 * 24)

      if(isNaN(diffJour)) return null

      if(parseFloat(diffJour) < 0 ) return "durée invalide"
      vM.editActeEffetFinancier.duree=diffJour
      return  diffJour;

    },

    getDateFinExécutionValueEdit(){
      return !this.editActeEffetFinancier.date_odre_service !=""
    },


    listeActeEffectFinnancier: function () {
      return macheid => {
        if (macheid != "") {
          // console.log("Marche leste acte effect finnancier")
          return this.getActeEffetFinancierPersonnaliser.filter(idmarche => idmarche.marche_id == macheid)
        }
      }
    },





  }, 


  methods:{
    ...mapActions('bienService',['supprimerActeEffetFinancier',
      'ajouterActeEffetFinancier','modifierActeEffetFinancier', 'modifierMarche']),
...mapActions("horSib", ['modifierMarcheHorSib']),

    afficheModaleActe(index){
      this.$('#ajouterAct').modal({
        backdrop: 'static',
        keyboard: false
      });
        if ( this.analyseByLot(index).length>0){
          this.nom_candidata=this.afficheNomEntreprise(this.afficherNumeroDossierCandidat1(this.analyseByLot(index)[0].dossier_candidat_id)),
              this.dossier_candidat_id=this.analyseByLot(index)[0].dossier_candidat_id
        }
    this.marche_lot=index
      this.infoLot=this.getMarchePersonnaliser.find(item=>item.id==index)
      //  this.edite_analyse_dossier = this.listeAnalyseDossier(this.macheid)[index];
    },

    afficherModalModifierActeEffetFinancier(id){
      this.$('#modifierActeEF').modal({
        backdrop: 'static',
        keyboard: false
      });

      this.editActeEffetFinancier = this.acteEffetFinanciers.find(item=>item.id==id)
       // console.log(this.editActeEffetFinancier)
        this.infoLot=this.getMarchePersonnaliser.find(item=>item.id==this.editActeEffetFinancier.marche_id)
        this.marche_lot=this.editActeEffetFinancier.marche_id
        if ( this.analyseByLot(this.editActeEffetFinancier.marche_id).length>0){
            this.nom_candidata=this.afficheNomEntreprise(this.afficherNumeroDossierCandidat1(this.analyseByLot(this.editActeEffetFinancier.marche_id)[0].dossier_candidat_id)),
                this.dossier_candidat_id=this.analyseByLot(this.editActeEffetFinancier.marche_id)[0].dossier_candidat_id
        }
    },

    modifierModalActeEffetFinancierLocal(){

      // this.editActeEffetFinancier.entreprise_id=entreprise_id

var nouvelObjet1 = {
        ...this.editActeEffetFinancier,
        duree: this.nombreDejourCalculeModifier,
        ua_id:this.afficherIDUA(this.macheid),
        taux:this.editafficherEnorere,
        tva_cautionnement:this.editafficherMontantTvaDuCautionnement,
        montant_ttc_cautionnement:this.editafficherMontantTTCDuCautionnement,
        montant_ht_cautionnement:this.editafficheMontantHorsTaxeDuCautionnement,
        montant_ht_retenu_garantie:this.editafficherMontantHorsTaxeRetenuGarantie,
        montant_tva_retenu_garanti:this.editafficherMontantTvaTaxeRetenuGarantie,
        montant_ttc_retenue_garantie:this.editafficherMontantRetenueGarantie,
        tva:this.editmontantTva,
        montant_act:this.editmontantHTt,
        avance_demarrage_ttc:this.editavanceDemarrage,
        tva_avance_demarage:this.editavanceDemarrageMontantTva,
        entreprise_id:this.affichierIdEntrepriseSelectionner(this.afficherEntrepriseNom(this.editActeEffetFinancier.entreprise_id)),
        difference_personnel_bienService:this.afficheMarcheType,
        marche_id:this.marche_lot,
        marchegeneral_id:this.affichieridMarcheGlobal(this.marche_lot),
    
      }

      this.modifierActeEffetFinancier(nouvelObjet1)
      this.$('#modifierActeEF').modal('hide');
      this.editActeEffetFinancier = {

      };
    },

    formatageSomme:formatageSomme,
      
    ajouterModalActeEffetFinancierLocal(){
      var nouvelObjet = {
        ...this.formEffetFinancier,
        ua_id:this.afficherIDUA(this.macheid),
        taux:this.afficherEnorere,
        tva_cautionnement:this.afficherMontantTvaDuCautionnement,
        montant_ttc_cautionnement:this.afficherMontantTTCDuCautionnement,
        montant_ht_cautionnement:this.afficheMontantHorsTaxeDuCautionnement,
        montant_ht_retenu_garantie:this.afficherMontantHorsTaxeRetenuGarantie,
        montant_tva_retenu_garanti:this.afficherMontantTvaTaxeRetenuGarantie,
        montant_ttc_retenue_garantie:this.afficherMontantRetenueGarantie,
        tva:this.montantTva,
        montant_act:this.montantHTt,
        avance_demarrage_ttc:this.avanceDemarrage,
        tva_avance_demarage:this.avanceDemarrageMontantTva,
        entreprise_id:this.affichierIdEntrepriseSelectionner(this.nom_candidata),
        difference_personnel_bienService:this.afficheMarcheType,
        marche_id:this.marche_lot,
        marchegeneral_id:this.affichieridMarcheGlobal(this.marche_lot),
        // ua_id:this.ua_id,
        banq_id:this.affichierIdBanque(this.afficherLeCompteEnFonctionDeLaBanque(this.formEffetFinancier.banq_id)),
        compte_id:this.afficherIdCompte(this.afficherLeCompteEnFonctionDeLaBanque(this.formEffetFinancier.banq_id))
      }

      console.log(nouvelObjet)
      //let entreprisePremier=this.entreprises.find(item=>item.numero_rc==rcm)


      //this.formEffetFinancier.entreprise_id=entreprisePremier.id
      this.ajouterActeEffetFinancier(nouvelObjet)
      this.$("#modificationModal").modal('hide');
      let marcheObjet=this.marches.find(marche=>marche.id==this.marche_lot)
      marcheObjet.attribue = 2
     let marcheObjet1=this.marches.find(marche=>marche.id==this.affichieridMarcheGlobal(this.marche_lot))
      marcheObjet1.attribue = 2
      marcheObjet.numero_marche=this.formEffetFinancier.numero_marche
      // console.log(marcheObjet)
      this.modifierMarche(marcheObjet)
    this.modifierMarche(marcheObjet1)
      this.formEffetFinancier = {
        code_act:"",
        libelle_act:"",
        reference_act:"",
        objet_act:"", 
        incidence_financiere:"",
        montant_act:"",
        date_attributaire:"",
        date_reception:"",
        duree:"",
        date_fin_exe:"",
        date_odre_service:"",
        livrable_id:"",
        autorite_approbation:"",
        date_approbation:"",
        ua_id:"",
        type_act_effet_id:"",
        analyse_dossier_id:"",
        entreprise_id:"",
        marche_id:"",
        numero_marche:"",
avance_demarrage_ttc:0,
avance_demarrage_ht:0
      }
    },
  },
    watch: {
        date_debut_previsionnel:function (value) {
          // this.formEffetFinancier.date_odre_service=value
           // console.log(this.formEffetFinancier.date_odre_service)
            if(this.durre_prevue){
                console.log(this.durre_prevue)
                this.formEffetFinancier.date_odre_service=this.date_debut_previsionnel
                this.formEffetFinancier.date_reception=this.dateDefinitivePrevisionnel(value,this.durre_prevue)
                this.formEffetFinancier.date_fin_exe=this.dateDefinitivePrevisionnel(value,this.durre_prevue)
                console.log(this.formEffetFinancier)
                this.formEffetFinancier.duree=this.durre_prevue
            }
        },
        durre_prevue: function (value) {
           // this.formEffetFinancier.duree=value
             //console.log(value)
            if(this.date_debut_previsionnel){
                this.formEffetFinancier.duree=value
            //    console.log(this.dateDefinitivePrevisionnel(this.date_debut_previsionnel,value))
                this.formEffetFinancier.date_reception=this.dateDefinitivePrevisionnel(this.date_debut_previsionnel,value)
                this.formEffetFinancier.date_fin_exe=this.dateDefinitivePrevisionnel(this.date_debut_previsionnel,value)
                this.formEffetFinancier.date_odre_service=this.date_debut_previsionnel
                console.log(this.formEffetFinancier)
            }
            if(value==""){
                this.formEffetFinancier.date_reception=""
                this.formEffetFinancier.date_fin_exe=""
            }
        },
        durre_garantie: function (value) {
            if(value){
                this.formEffetFinancier.durre_garantie=value
                if(this.date_debut_previsionnel!="" && this.durre_prevue!=""){
                    let date=this.dateDefinitivePrevisionnel(this.date_debut_previsionnel,this.durre_prevue)
                    // console.log(date)
                    this.formEffetFinancier.date_fin_exe=this.dateDefinitivePrevisionnel(date,value)
                }
            }
        },
        garantie:function(value){
          if(value=="non"){
              if(this.date_debut_previsionnel!="" && this.durre_prevue!=""){
                  let date=this.dateDefinitivePrevisionnel(this.formEffetFinancier.date_debut_previsionnel,this.durre_prevue)
                  this.formEffetFinancier.date_fin_exe=date
                  this.durre_garantie=""
              }
          }
        },
        unite_administrative_id: function (value) {
            console.log(value);
            if(this.info_status_marche!=""){
                this.listeMarcheStatus(this.status_marches)
            }
        },

    },
}
</script>

<style scoped>

.grdirModalActeEffet{
  width: 88%;
  margin: 0 -42%;
}

</style>