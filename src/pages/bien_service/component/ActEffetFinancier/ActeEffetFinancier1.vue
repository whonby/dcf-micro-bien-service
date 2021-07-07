avance_demarrage_ht
<template>
  <div>
    <div id="exampleModalValidationdirecteur" class="modal hide valDirecteur">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Date de Réception du marché</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
            <td>
              <div class="control-group">
                <label class="control-label"
                  >Date debut exectuion définitif</label
                >
                <div class="controls">
                  <input
                    type="date"
                    class="span"
                    v-model="
                      editActeEffetFinancier.date_debut_exectuion_definitif
                    "
                  />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="control-group">
                <label class="control-label"
                  >Date réception provisoire définitif</label
                >
                <div class="controls">
                  <input
                    type="date"
                    class="span"
                    v-model="
                      editActeEffetFinancier.date_reception_provisoire_definitif
                    "
                  />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="control-group">
                <label class="control-label">Date réception définitive</label>
                <div class="controls">
                  <input
                    type="date"
                    class="span"
                    v-model="editActeEffetFinancier.date_reception_definitive"
                  />
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierModalActeEffetFinancierLocal()"
          class="btn btn-primary"
          href="#"
          >Valider</a
        >
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <notifications />
    <div v-for="item in lot" :key="item.id" class="widget-content">
      <div class="widget-title">
        <span class="icon"> <i class="icon-th"></i> </span>

        <div class="span8" style="text-align: center">
          <h5>LOT N°{{ item.numero_lot }} / {{ item.objet }}</h5>
        </div>
        <div class="span3">
          <button
            @click.prevent="afficheModaleActe(item.id)"
            class="btn btn-primary"
            title="Act"
          >
            <span class=""><i class="icon-edit"></i></span> Ajouter acte
          </button>
        </div>
        <!--      <div class="span2"><button @click.prevent="supprimerAnalyseDossierMultiple(item.id)"  class="btn btn-danger " title="Supprimer">-->
        <!--        <span class=""><i class="icon-trash"></i></span></button></div>-->
      </div>
      <!-- 
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
      <tr></tr>
      </tbody>
    </table> -->

      <div class="span10" v-if="ActeEffect(item.id)">
        <!--          {{ActeEffect(item.id).sous_traitance}}-->
        <table
          class="table table-bordered table-striped"
          v-if="ActeEffect(item.id).sous_traitance == 'oui'"
        >
          <thead>
            <tr>
              <th>Entreprise sous traitance</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="sous in listeEntreSoustraitance(item.id)"
              :key="'PMPM' + sous.id"
            >
              <td>
                {{ sous.raison_sociale }}
              </td>
              <td>
                <button
                  @click.prevent="supprimerEntrepriseSousTraitance(sous.id)"
                  class="btn btn-danger"
                  title="Supprimer"
                >
                  <span class=""><i class="icon-trash"></i></span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <table class="table table-bordered table-striped" v-if="macheid">
        <thead>
          <tr>
            <th>Numéro Marché</th>
            <th>Objet marché</th>
            <th>Imputation</th>
            <th>Montant de l'offre(en FCFA TTC)</th>
            <!-- <th>Montant Avance Demarrage</th>
        <th>Montant retenue garantie</th>
        <th>Montant cautionnement</th> -->
            <!-- <th>Type acte</th> -->

            <th>Durée du marché</th>
            <th colspan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="odd gradeX"
            v-for="effetFinancier in listeActeEffectFinnancier(item.id)"
            :key="effetFinancier.id"
          >
            <td
              @click="
                afficherModalModifierActeEffetFinancier(effetFinancier.id)
              "
            >
              {{ effetFinancier.numero_marche || "Non renseigné" }}
            </td>
            <td
              @click="
                afficherModalModifierActeEffetFinancier(effetFinancier.id)
              "
            >
              {{
                affichierObjetMarche(effetFinancier.marche_id) ||
                "Non renseigné"
              }}
            </td>
            <td
              @click="
                afficherModalModifierActeEffetFinancier(effetFinancier.id)
              "
            >
              {{
                affichierImputationMarche(effetFinancier.marche_id) ||
                "Non renseigné"
              }}
            </td>
            <td
              @click="
                afficherModalModifierActeEffetFinancier(effetFinancier.id)
              "
            >
              {{
                formatageSomme(parseFloat(effetFinancier.montant_act)) ||
                "Non renseigné"
              }}
            </td>
            <!-- <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
          {{formatageSomme(parseFloat(effetFinancier.avance_demarrage_ttc )) || 'Non renseigné'}}</td>

        <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
          {{formatageSomme(parseFloat(effetFinancier.montant_ttc_retenue_garantie )) || 'Non renseigné'}}</td>

        <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
          {{formatageSomme(parseFloat(effetFinancier.montant_ttc_cautionnement )) || 'Non renseigné'}}</td> -->

            <!-- <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
          {{affichierLibelleTypeActeFinancier(effetFinancier.type_act_effet_id) || 'Non renseigné'}}</td>
         -->

            <td
              @click="
                afficherModalModifierActeEffetFinancier(effetFinancier.id)
              "
            >
              {{ effetFinancier.duree || "Non renseigné" }} jrs
            </td>
            <!-- <td>
          <div class="btn-group">
           
             <button 
                         @click.prevent="afficherModalModifierService(effetFinancier.id)"
                       class="btn  btn-success">
                <span >  <i class="icon icon-calenda"> Ajouter date Réception</i></span>
       
                </button>
          </div>
          
        </td> -->
            <td>
              <div class="btn-group">
                <button
                  @click.prevent="
                    supprimerActeEffetFinancier(effetFinancier.id)
                  "
                  class="btn btn-danger"
                  title="Supprimer"
                >
                  <span class=""><i class="icon-trash"> </i>Supprimer</span>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- <code v-if="this.getLotMarche < 0" style="color:red;font-size:14px;text-align:center"> Veuillez saisir au moins un lot </code> -->
    <div id="ajouterAct" class="modal hide grdirModalActeEffet">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>
          Information sur l'attribution de l'acte : Lot N°
          {{ infoLot.numero_lot }} {{ infoLot.objet }}
        </h3>
      </div>
      <div class="widget-title">
        <ul class="nav nav-tabs">
          <li class="active">
            <a data-toggle="tab" href="#Identif">Identification de L'acte</a>
          </li>
          <li class="">
            <a data-toggle="tab" href="#financ">Informations financières</a>
          </li>
          <li class="" v-if="sous_traitance == 'oui'">
            <a data-toggle="tab" href="#sous_traitance"
              >Les entreprise sous_traitance
            </a>
          </li>
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
                    <select
                      v-model="formEffetFinancier.type_act_effet_id"
                      class="span"
                    >
                      <option
                        v-for="varText in AffichierElementParent(
                          affichierIdActeFinancierDansActePlan
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
              <td>
                <!-- <td colspan="2" width=""> -->

                <!-- <select v-model="formCotation.entreprise_id" class="span">
                                <option v-for="varText in entreprises" :key="varText.id"
                                        :value="varText.id">{{varText.raison_sociale}}</option>
                            </select> -->
                <div class="span" align="left">
                  Sélectionner l'entreprise:
                  <model-list-select
                    style="background-color: rgb(255, 255, 255)"
                    class="wide"
                    :list="entreprises"
                    v-model="formEffetFinancier.entreprise_id"
                    option-value="id"
                    option-text="raison_sociale"
                    :search-change="recherche()"
                    placeholder="Selectionner l'entreprise"
                  >
                  </model-list-select>
                </div>

                <!-- </td> -->

                <!-- <div class="control-group">
                <label class="control-label">Entreprise</label>
                <div class="controls" style="font-size:20px">
                
                   <select v-model="formEffetFinancier.entreprise_id" class="span">
                    <option v-for="varText in entreprises" :key="varText.id"
                            :value="varText.id">{{varText.raison_sociale}}</option>
                  </select>
                </div>


              </div> -->
              </td>

              <td>
                <div class="control-group">
                  <label class="control-label">Banque</label>
                  <div class="controls">
                    <select
                      v-model="formEffetFinancier.banq_id"
                      class="span"
                      :readOnly="veifEquipementExistBanque"
                    >
                      <option
                        v-for="varText in afficherBanqueDynamiqueId(
                          formEffetFinancier.entreprise_id
                        )"
                        :key="varText.id"
                        :value="varText.id"
                      >
                        {{ afficherBanqueDynamique(varText.banq_id) }}
                      </option>
                    </select>
                  </div>
                </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Compte</label>
                  <select
                    v-model="formEffetFinancier.compte_id"
                    class="span"
                    :readOnly="veifEquipementExist"
                  >
                    <option
                      v-for="varText in afficherCompteDynamique(
                        formEffetFinancier.entreprise_id,
                        afficherBanqueId(formEffetFinancier.banq_id)
                      )"
                      :key="varText.id"
                      :value="varText.id"
                    >
                      {{ varText.rib }}
                    </option>
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
                    <textarea
                      :value="affichierObjetMarche(marche_lot)"
                      class="textarea_editor span11"
                      rows="3"
                      placeholder="Entre le  text ..."
                    ></textarea>
                  </div>
                </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Incidence financière</label>
                  <div class="controls">
                    <select
                      v-model="formEffetFinancier.incidence_financiere"
                      class="span"
                    >
                      <option value="0">Oui</option>
                      <option value="1">Non</option>
                    </select>
                  </div>
                </div>
              </td>

              <td colspan="">
                <div class="control-group">
                  <label class="control-label">Numéro du marché/contrat</label>
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
                  <label class="control-label"
                    >Date de signature attributaire</label
                  >
                  <div class="controls">
                    <input
                      type="date"
                      v-model="formEffetFinancier.date_attributaire"
                      class="span"
                      placeholder=""
                    />
                  </div>
                </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label"
                    >Date signature autorité contractante
                  </label>
                  <div class="controls">
                    <input
                      type="date"
                      v-model="formEffetFinancier.reference_act"
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
                    <!-- <input type="hidden" v-model="formEffetFinancier.ua_id" /> -->
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="control-group">
                  <label class="control-label"
                    >Date de début d'exécution prévisionnelle</label
                  >
                  <div class="controls">
                    <input
                      type="date"
                      v-model="date_debut_previsionnel"
                      class="span"
                      placeholder=""
                    />
                  </div>
                </div>
              </td>

              <td>
                <div class="control-group">
                  <label class="control-label" title=" "
                    >Durée d'exécution contractuelle(jrs)</label
                  >
                  <div class="controls">
                    <input
                      type="number"
                      v-model="durre_prevue"
                      class="span"
                    />
                  </div>
                </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label" title=" "
                    >Date de reception provisoire prévisionnelle
                  </label>
                  <div class="controls">
                    <input
                      type="date"
                      v-model="formEffetFinancier.date_reception"
                      class="span"
                      placeholder=""
                      disabled
                    />
                  </div>
                </div>
              </td>

              <td>
                <div class="control-group">
                  <label class="control-label" title=" "
                    >Date définitive reception prévisionnelle</label
                  >
                  <div class="controls">
                    <input
                      type="date"
                      :min="formEffetFinancier.date_odre_service"
                      disabled
                      v-model="formEffetFinancier.date_fin_exe"
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
                  <label class="control-label" title="">garantie</label>
                  <div class="controls">
                    <select v-model="garantie" class="span">
                      <option value="oui">Oui</option>
                      <option value="non">Non</option>
                    </select>
                  </div>
                </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label" title=" ">Sous traitance</label>
                  <div class="controls">
                    <select v-model="sous_traitance" class="span">
                      <option value="oui">Oui</option>
                      <option value="non">Non</option>
                    </select>
                  </div>
                </div>
              </td>

              <td>
                <div>
                  <div class="control-group" v-if="garantie == 'oui'">
                    <label class="control-label" title=" "
                      >Durree de garantie(JOUR)
                    </label>
                    <div class="controls">
                      <input
                        type="number"
                        v-model="durre_garantie"
                        class="span"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </div>

        <div id="financ" class="tab-pane">
          <ul class="nav nav-tabs">
            <li class="active">
              <a data-toggle="tab" href="#MARCHE2">MARCHE</a>
            </li>
            <li class="">
              <a data-toggle="tab" href="#DEMARRAGE2">AVANCE DE DEMARRAGE</a>
            </li>
            <li class="">
              <a data-toggle="tab" href="#CAUTIONNEMENT2">CAUTIONNEMENT</a>
            </li>
            <li class="">
              <a data-toggle="tab" href="#GARANTIEBONEXCUTION2"
                >GARANTIE DE BONNE EXECUTION</a
              >
            </li>
            <li class="">
              <a data-toggle="tab" href="#GARANTIE2" v-if="garantie == 'oui'"
                >RETENU DE GARANTIE</a
              >
            </li>
          </ul>
          <div class="widget-content tab-content">
            <div id="MARCHE2" class="tab-pane active">
              <table class="table table-bordered table-striped">
                <tr>
                  <td>
                    <div class="control-group">
                      <label class="control-label">exonéré</label>
                      <div class="controls">
                        <select
                          v-model="formEffetFinancier.exonere"
                          class="span"
                        >
                          <option value="0">Oui</option>
                          <option value="1">Non</option>
                        </select>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div class="control-group">
                      <label class="control-label">Taux</label>
                      <div class="controls">
                        <input
                          type="number"
                          :value="afficherEnorere"
                          style="text-align: left; color: red"
                          class="span"
                          readonly
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="control-group">
                      <label class="control-label"
                        >Comment saisir le montant du marché?</label
                      >
                      <div class="controls">
                        <select
                          v-model="formEffetFinancier.httcc_id"
                          class="span"
                        >
                          <option value="0">HT</option>
                          <option value="1">TTC</option>
                        </select>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr v-if="formEffetFinancier.httcc_id == 0">
                  <td>
                    <div class="control-group">
                      <label class="control-label"
                        >Montant acte/réel du marché (HT)</label
                      >
                      <div class="controls">
                        <money
                          v-model="formEffetFinancier.montant_act_ht"
                          class="span"
                        ></money>
                        <!--                  <input type="text" v-model="formEffetFinancier.montant_act_ht"-->
                        <!--                         class="span"-->
                        <!--                         placeholder="Saisir le montant "-->
                        <!--                  />-->
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="control-group">
                      <label class="control-label">
                        Montant TVA du marché</label
                      >
                      <div class="controls">
                        <!--                  <input-->
                        <!--                      type="number"-->
                        <!--                      :value="montantTva" style="text-align:left;color:red"-->

                        <!--                      class="span"-->
                        <!--                      readonly-->
                        <!--                  />-->
                        <money
                          :value="montantTva"
                          style="text-align: left; color: red"
                          readonly
                          class="span"
                        ></money>
                      </div>
                    </div>
                  </td>
                  <td colspan="2">
                    <div class="control-group">
                      <label class="control-label">Montant TTC du marché</label>
                      <div class="controls">
                        <!--                  <input-->
                        <!--                      type="number"-->
                        <!--                      :value="montantHTt" style="text-align:left;color:red"-->

                        <!--                      class="span"-->
                        <!--                      readonly-->
                        <!--                  />-->
                        <money
                          :value="montantHTt"
                          style="text-align: left; color: red"
                          readonly
                          class="span"
                        ></money>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr v-if="formEffetFinancier.httcc_id == 1">
                  <td>
                    <div class="control-group">
                      <label class="control-label"
                        >Montant acte/réel du marché (HT)</label
                      >
                      <div class="controls">
                        <money
                          :value="CaculerMontantHtParTTC"
                          class="span"
                          readonly
                        ></money>
                        <!--                  <input type="text" v-model="formEffetFinancier.montant_act_ht"-->
                        <!--                         class="span"-->
                        <!--                         placeholder="Saisir le montant "-->
                        <!--                  />-->
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="control-group">
                      <label class="control-label">
                        Montant TVA du marché</label
                      >
                      <div class="controls">
                        <!--                  <input-->
                        <!--                      type="number"-->
                        <!--                      :value="montantTva" style="text-align:left;color:red"-->

                        <!--                      class="span"-->
                        <!--                      readonly-->
                        <!--                  />-->
                        <money
                          :value="CaculermontantTva"
                          style="text-align: left; color: red"
                          readonly
                          class="span"
                        ></money>
                      </div>
                    </div>
                  </td>
                  <td colspan="2">
                    <div class="control-group">
                      <label class="control-label">Montant TTC du marché</label>
                      <div class="controls">
                        <!--                  <input-->
                        <!--                      type="number"-->
                        <!--                      :value="montantHTt" style="text-align:left;color:red"-->

                        <!--                      class="span"-->
                        <!--                      readonly-->
                        <!--                  />-->
                        <money
                          v-model="formEffetFinancier.montant_act"
                          style="text-align: left; color: red"
                          class="span"
                        ></money>
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
                      <label class="control-label">Taux Avance Demarrage</label>
                      <div class="controls">
                        <input
                          type="number"
                          v-model="formEffetFinancier.taux_avance_demarrage"
                          class="span"
                          placeholder=" Saisir le taux d'avance de demarrage"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="control-group">
                      <label class="control-label"
                        >Avance Demarrage Hors Taxe (HT)</label
                      >
                      <div class="controls">
                        <money
                          :value="avanceDemarageHorsTaxe"
                          style="text-align: left; color: red"
                          readonly
                          class="span"
                        ></money>

                        <!--                  <input type="text" v-model="formEffetFinancier.avance_demarrage_ht"-->
                        <!--                         class="span"-->
                        <!--                         placeholder="Saisir le montant "-->
                        <!--                  />-->
                      </div>
                    </div>
                  </td>

                  <td>
                    <div class="control-group">
                      <label class="control-label"
                        >TVA (Avance Démarrage)</label
                      >
                      <div class="controls">
                        <!--                  <input-->
                        <!--                      type="number"-->
                        <!--                      :value="avanceDemarrageMontantTva" style="text-align:left;color:red"-->

                        <!--                      class="span"-->
                        <!--                      readonly-->
                        <!--                  />-->
                        <money
                          :value="avanceDemarrageMontantTva"
                          style="text-align: left; color: red"
                          class="span"
                          readonly
                        ></money>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="control-group">
                      <label class="control-label"
                        >Montant Avance Démarrage TTC</label
                      >
                      <div class="controls">
                        <!--                  <input-->
                        <!--                      type="number"-->
                        <!--                      :value="avanceDemarrage" style="text-align:left;color:red"-->
                        <!--                      class="span"-->
                        <!--                      readonly-->
                        <!--                  />-->
                        <money
                          :value="avanceDemarrageTTC"
                          style="text-align: left; color: red"
                          readonly
                          class="span"
                        ></money>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            <div id="CAUTIONNEMENT2" class="tab-pane">
              <table class="table table-bordered table-striped">
                <tr>
                  <td>
                    <div class="control-group">
                      <label class="control-label"
                        >Taux % du cautionnement</label
                      >
                      <div class="controls">
                        <input
                          type="number"
                          v-model="formEffetFinancier.taux_cautionnemt"
                          placeholder="saisir le taux du cautionnement"
                          class="span"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="control-group">
                      <label class="control-label">
                        Montant HT du cautionnement</label
                      >
                      <div class="controls">
                        <!--                  <input type="text"  :value="afficheMontantHorsTaxeDuCautionnement" style="text-align:left;color:red"-->
                        <!--                         class="span"-->
                        <!--                         readOnly-->
                        <!--                  />-->
                        <money
                          style="text-align: left; color: red"
                          readOnly
                          :value="afficheMontantHorsTaxeDuCautionnement"
                          class="span"
                        ></money>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="control-group">
                      <label class="control-label"
                        >Montant TVA du cautionnement</label
                      >
                      <div class="controls">
                        <!--                  <input-->
                        <!--                      type="number"  :value="afficherMontantTvaDuCautionnement" style="text-align:left;color:red"-->
                        <!--                      class="span"-->
                        <!--                      readonly-->
                        <!--                  />-->
                        <money
                          style="text-align: left; color: red"
                          readOnly
                          :value="afficherMontantTvaDuCautionnement"
                          class="span"
                        ></money>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="control-group">
                      <label class="control-label"
                        >Montant TTC du cautionnement
                      </label>
                      <div class="controls">
                        <!--                  <input-->
                        <!--                      type="number"-->

                        <!--                      :value="afficherMontantTTCDuCautionnement" style="text-align:left;color:red"-->
                        <!--                      class="span"-->
                        <!--                      readonly-->
                        <!--                  />-->
                        <money
                          style="text-align: left; color: red"
                          readOnly
                          :value="afficherMontantTTCDuCautionnement"
                          class="span"
                        ></money>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </div>

            <div id="GARANTIEBONEXCUTION2" class="tab-pane">
              <table class="table table-bordered table-striped">
                <tr>
                  <td>
                    <div class="control-group">
                      <label class="control-label"
                        >Taux % de garantie de bonne exécution</label
                      >
                      <div class="controls">
                        <input
                          type="number"
                          v-model="formEffetFinancier.taux_bon_execution"
                          placeholder="saisir le taux de garantie de bonne execution"
                          class="span"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="control-group">
                      <label class="control-label">
                        Montant Hors taxe de garantie de bonne execution</label
                      >
                      <div class="controls">
                        <!--                  <input type="text"  :value="afficheMontantHorsTaxeDuCautionnement" style="text-align:left;color:red"-->
                        <!--                         class="span"-->
                        <!--                         readOnly-->
                        <!--                  />-->
                        <money
                          style="text-align: left; color: red"
                          readOnly
                          :value="
                            afficherMontantHorsTaxeDeGarantiebonneExecution
                          "
                          class="span"
                        ></money>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="control-group">
                      <label class="control-label"
                        >Montant TVA de garantie de bonne execution</label
                      >
                      <div class="controls">
                        <!--                  <input-->
                        <!--                      type="number"  :value="afficherMontantTvaDuCautionnement" style="text-align:left;color:red"-->
                        <!--                      class="span"-->
                        <!--                      readonly-->
                        <!--                  />-->
                        <money
                          style="text-align: left; color: red"
                          readOnly
                          :value="afficherMontantTvaDeGarantieDeBonneExecution"
                          class="span"
                        ></money>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="control-group">
                      <label class="control-label"
                        >Montant TTC de garantie de bonne execution
                      </label>
                      <div class="controls">
                        <!--                  <input-->
                        <!--                      type="number"-->

                        <!--                      :value="afficherMontantTTCDuCautionnement" style="text-align:left;color:red"-->
                        <!--                      class="span"-->
                        <!--                      readonly-->
                        <!--                  />-->
                        <money
                          style="text-align: left; color: red"
                          readOnly
                          :value="afficherMontantTTCDeGarantieDeBonneExecution"
                          class="span"
                        ></money>
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
                      <label class="control-label"
                        >Taux % de retenue de garantie</label
                      >
                      <div class="controls">
                        <input
                          type="number"
                          v-model="formEffetFinancier.taux_retenue_garantie"
                          placeholder="saisir le taux de retenue de garantie"
                          class="span"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="control-group">
                      <label class="control-label">
                        Montant HT de retenue de garantie</label
                      >
                      <div class="controls">
                        <!--                  <input-->
                        <!--                      type="text"  :value="afficherMontantHorsTaxeRetenuGarantie" style="text-align:left;color:red"-->
                        <!--                      placeholder="saisir le montant hors taxe du dispositif retenu"-->

                        <!--                      class="span"-->
                        <!--                      readonly-->
                        <!--                  />-->
                        <money
                          style="text-align: left; color: red"
                          readOnly
                          :value="afficherMontantHorsTaxeRetenuGarantie"
                        ></money>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="control-group">
                      <label class="control-label"
                        >Montant TVA de retenue de garantie</label
                      >
                      <div class="controls">
                        <!--                  <input-->
                        <!--                      type="number"  :value="afficherMontantTvaTaxeRetenuGarantie" style="text-align:left;color:red"-->
                        <!--                      class="span"-->
                        <!--                      readonly-->
                        <!--                  />-->
                        <money
                          style="text-align: left; color: red"
                          readOnly
                          :value="afficherMontantTvaTaxeRetenuGarantie"
                        ></money>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="control-group">
                      <label class="control-label"
                        >Montant TTC retenue de garantie
                      </label>
                      <div class="controls">
                        <!--                  <input-->
                        <!--                      type="number"  :value="afficherMontantRetenueGarantie" style="text-align:left;color:red"-->

                        <!--                      class="span"-->
                        <!--                      readonly-->
                        <!--                  />-->
                        <money
                          style="text-align: left; color: red"
                          readOnly
                          :value="afficherMontantRetenueGarantie"
                        ></money>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div id="sous_traitance" class="tab-pane">
          <div class="span12">
            <h6>ENREPRISE SOUS TRAITANCE</h6>
            <table class="table">
              <tbody>
                <tr>
                  <td>
                    <label>ENTREPRSE </label>
                    <model-list-select
                      style="background-color: #fff"
                      class="wide"
                      :list="entreprises"
                      v-model="nom_structure"
                      option-value="id"
                      option-text="raison_sociale"
                      placeholder="Entreprise"
                    >
                    </model-list-select>
                  </td>

                  <td>
                    <hr />
                    <button
                      class="btn btn-danger"
                      @click.prevent="addStructure()"
                    >
                      Ajouter
                    </button>
                  </td>
                </tr>
                <tr
                  class="odd gradeX"
                  v-for="appelOffre in structure"
                  :key="'APM' + appelOffre"
                >
                  <td>
                    {{ appelOffre.raison_sociale || "Non renseigné" }}
                  </td>
                  <div class="btn-group">
                    <button
                      class="btn btn-link"
                      title="Supprimer"
                      @click.prevent="
                        supprimeStructureSelectionner(appelOffre.id)
                      "
                    >
                      <span class=""><i class="icon-trash"></i></span>
                    </button>
                  </div>
                </tr>
              </tbody>
            </table>
            <!--                <a @click.prevent="ajouterDossierCandidature" class="btn btn-primary"-->
            <!--                   href="#">Enregistrer dossier du soumissionnaire</a>-->
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <a
          @click.prevent="ajouterModalActeEffetFinancierLocal"
          class="btn btn-primary"
          href="#"
          >Valider</a
        >
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!---->

    <!-- afficherEnorere -->

    <!---->

    <div id="modifierActeEF" class="modal hide grdirModalActeEffet">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>
          Information sur l'attribution de l'acte : Lot N°
          {{ infoLot.numero_lot }} {{ infoLot.objet }}
        </h3>
      </div>
      <div class="widget-title">
        <ul class="nav nav-tabs">
          <li class="active">
            <a data-toggle="tab" href="#IdentifModifier"
              >Identification de L'acte</a
            >
          </li>
          <li class="">
            <a data-toggle="tab" href="#financModifier"
              >Informations financières</a
            >
          </li>
          <li class="" v-if="sous_traitance == 'oui'">
            <a data-toggle="tab" href="#sous_traitanceModifier"
              >Les entreprise sous_traitance
            </a>
          </li>
        </ul>
      </div>
      <div class="widget-content tab-content">
        <div id="IdentifModifier" class="tab-pane active">
          <table class="table table-bordered table-striped">
            <tr>
              <td>
                <div class="control-group">
                  <label class="control-label">Type acte effet financier</label>
                  <div class="controls">
                    <select
                      v-model="editActeEffetFinancier.type_act_effet_id"
                      class="span"
                    >
                      <option
                        v-for="varText in AffichierElementParent(
                          affichierIdActeFinancierDansActePlan
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
              <!-- <td>

              <div class="control-group">
                <label class="control-label">Entreprise</label>
                <div class="controls" style="font-size:20px">
                 
                 <model-list-select style="background-color: #fff;"
                                               class="wide"
                                               :list="entreprises"
                                               v-model="editActeEffetFinancier.entreprise_id"
                                               option-value="id"
                                               option-text="raison_sociale"
                                               placeholder="Entreprise"
                            >

                            </model-list-select>
                </div>


              </div>


            </td> -->

              <td>
                <div class="control-group">
                  <label class="control-label">Entreprise</label>
                  <div class="controls" style="font-size: 20px">
                    <select
                      v-model="editActeEffetFinancier.entreprise_id"
                      class="span"
                    >
                      <option
                        v-for="varText in entreprises"
                        :key="varText.id"
                        :value="varText.id"
                      >
                        {{ varText.raison_sociale }}
                      </option>
                    </select>
                  </div>
                </div>
              </td>

              <td>
                <div class="control-group">
                  <label class="control-label">Banque</label>
                  <div class="controls">
                    <select
                      v-model="editActeEffetFinancier.banq_id"
                      class="span"
                    >
                      <option
                        v-for="varText in afficherBanqueDynamiqueId(
                          editActeEffetFinancier.entreprise_id
                        )"
                        :key="varText.id"
                        :value="varText.id"
                      >
                        {{ afficherBanqueDynamique(varText.banq_id) }}
                      </option>
                    </select>
                  </div>
                </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Compte</label>
                  <select
                    v-model="editActeEffetFinancier.compte_id"
                    class="span"
                  >
                    <option
                      v-for="varText in afficherCompteDynamique(
                        editActeEffetFinancier.entreprise_id,
                        afficherBanqueId(editActeEffetFinancier.banq_id)
                      )"
                      :key="varText.id"
                      :value="varText.id"
                    >
                      {{ varText.rib }}
                    </option>
                  </select>
                </div>
                <!-- <div class="control-group">
                <label class="control-label">Compte</label>
                 <select v-model="editActeEffetFinancier.compte_id" class="span" >
                    <option v-for="varText in afficherCompteDynamique(editActeEffetFinancier.banq_id)" :key="varText.id"
                            :value="varText.id">{{afficherLibelleCompteRib(varText.banq_id)}}</option>
                  </select>
               
              </div> -->
              </td>

              <!-- <td>
              <div class="control-group">
                <label class="control-label">Compte</label>
                <div class="controls " >
                  <input type="text"  class="span" :value="afficherLeCompteEnFonctionDeLaBanque(editActeEffetFinancier.banq_id)" readonly >

                </div>
              </div>

            </td> -->
            </tr>
            <tr>
              <td colspan="2" width="550">
                <div class="control-group">
                  <label class="control-label">Objet offre :</label>
                  <div class="controls">
                    <textarea
                      :value="affichierObjetMarche(marche_lot)"
                      class="textarea_editor span11"
                      rows="3"
                      placeholder="Entre le  text ..."
                    ></textarea>
                  </div>
                </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Incidence financière</label>
                  <div class="controls">
                    <select
                      v-model="editActeEffetFinancier.incidence_financiere"
                      class="span"
                    >
                      <option value="0">Oui</option>
                      <option value="1">Non</option>
                    </select>
                  </div>
                </div>
              </td>

              <td colspan="">
                <div class="control-group">
                  <label class="control-label">Numéro du marché/contrat</label>
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
                  <label class="control-label"
                    >Date de signature attributaire</label
                  >
                  <div class="controls">
                    <input
                      type="date"
                      v-model="editActeEffetFinancier.date_attributaire"
                      class="span"
                      placeholder=""
                    />
                  </div>
                </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label"
                    >Date signature autorité contractante
                  </label>
                  <div class="controls">
                    <input
                      type="date"
                      v-model="editActeEffetFinancier.reference_act"
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
                    <!-- <input
                      type="hidden"
                      v-model="editActeEffetFinancier.ua_id"
                    /> -->
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="control-group">
                  <label class="control-label"
                    >Date de début d'exécution prévisionnelle</label
                  >
                  <div class="controls">
                    <input
                      type="date"
                      v-model="date_debut_previsionnelModifier"
                      class="span"
                      placeholder=""
                    />
                  </div>
                </div>
              </td>

              <td>
                <div class="control-group">
                  <label class="control-label" title=" "
                    >Durée d'exécution contractuelle(jrs)</label
                  >
                  <div class="controls">
                    <input
                      type="number"
                      v-model="editActeEffetFinancier.duree"
                      class="span"
                    />
                  </div>
                </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label" title=" "
                    >Date de reception provisoire prévisionnelle
                  </label>
                  <div class="controls">
                    <input
                      type="date"
                      v-model="editActeEffetFinancier.date_reception"
                      class="span"
                      placeholder=""
                      disabled
                    />
                  </div>
                </div>
              </td>

              <td>
                <div class="control-group">
                  <label class="control-label" title=" "
                    >Date définitive reception prévisionnelle</label
                  >
                  <div class="controls">
                    <input
                      type="date"
                      :min="editActeEffetFinancier.date_odre_service"
                      disabled
                      v-model="editActeEffetFinancier.date_fin_exe"
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
                  <label class="control-label" title="">garantie</label>
                  <div class="controls">
                    <select v-model="editActeEffetFinancier.garantie" class="span">
                      <option value="oui">Oui</option>
                      <option value="non">Non</option>
                    </select>
                  </div>
                </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label" title=" ">Sous traitance</label>
                  <div class="controls">
                    <select v-model="sous_traitance" class="span">
                      <option value="oui">Oui</option>
                      <option value="non">Non</option>
                    </select>
                  </div>
                </div>
              </td>

              <td>
                <div>
                  <div class="control-group" v-if="editActeEffetFinancier.garantie == 'oui'">
                    <label class="control-label" title=" "
                      >Durree de garantie(JOUR)
                    </label>
                    <div class="controls">
                      <input
                        type="number"
                        v-model="editActeEffetFinancier.durre_garantie"
                        class="span"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </div>

        <div id="financModifier" class="tab-pane">
          <ul class="nav nav-tabs">
            <li class="active">
              <a data-toggle="tab" href="#MARCHE3">MARCHE</a>
            </li>
            <li class="">
              <a data-toggle="tab" href="#DEMARRAGE3">AVANCE DE DEMARRAGE</a>
            </li>
            <li class="">
              <a data-toggle="tab" href="#CAUTIONNEMENT3">CAUTIONNEMENT</a>
            </li>
            <li class="">
              <a data-toggle="tab" href="#GARANTIEBONEXECUTION3"
                >GARANTIE DE BONNE EXECUTION</a
              >
            </li>
            <li class="">
              <a data-toggle="tab" href="#GARANTIE3" v-if="garantie == 'oui'"
                >RETENU DE GARANTIE</a
              >
            </li>
          </ul>
          <div class="widget-content tab-content">
            <div id="MARCHE3" class="tab-pane active">
              <table class="table table-bordered table-striped">
                <tr>
                  <td>
                    <div class="control-group">
                      <label class="control-label">exonéré</label>
                      <div class="controls">
                        <select
                          v-model="editActeEffetFinancier.exonere"
                          class="span"
                        >
                          <option value="0">Oui</option>
                          <option value="1">Non</option>
                        </select>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div class="control-group">
                      <label class="control-label">Taux</label>
                      <div class="controls">
                        <input
                          type="number"
                          :value="afficherEnorereModifier"
                          style="text-align: left; color: red"
                          class="span"
                          readonly
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="control-group">
                      <label class="control-label"
                        >Montant acte/réel du marché (HT)</label
                      >
                      <div class="controls">
                        <money
                          v-model="editActeEffetFinancier.montant_act_ht"
                          class="span"
                        ></money>
                        <!--                  <input type="text" v-model="editActeEffetFinancier.montant_act_ht"-->
                        <!--                         class="span"-->
                        <!--                         placeholder="Saisir le montant "-->
                        <!--                  />-->
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="control-group">
                      <label class="control-label">
                        Montant TVA du marché</label
                      >
                      <div class="controls">
                        <!--                  <input-->
                        <!--                      type="number"-->
                        <!--                      :value="montantTva" style="text-align:left;color:red"-->

                        <!--                      class="span"-->
                        <!--                      readonly-->
                        <!--                  />-->
                        <money
                          :value="montantTvaModifier"
                          style="text-align: left; color: red"
                          readonly
                          class="span"
                        ></money>
                      </div>
                    </div>
                  </td>
                  <td colspan="2">
                    <div class="control-group">
                      <label class="control-label">Montant TTC du marché</label>
                      <div class="controls">
                        <!--                  <input-->
                        <!--                      type="number"-->
                        <!--                      :value="montantHTt" style="text-align:left;color:red"-->

                        <!--                      class="span"-->
                        <!--                      readonly-->
                        <!--                  />-->
                        <money
                          :value="montantHTtModifier"
                          style="text-align: left; color: red"
                          readonly
                          class="span"
                        ></money>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            <div id="DEMARRAGE3" class="tab-pane">
              <table class="table table-bordered table-striped">
                <tr>
                  <td>
                    <div class="control-group">
                      <label class="control-label">Taux Avance Demarrage</label>
                      <div class="controls">
                        <input
                          type="text"
                          v-model="editActeEffetFinancier.taux_avance_demarrage"
                          class="span"
                          placeholder=" "
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="control-group">
                      <label class="control-label"
                        >Avance Demarrage Hore Taxe (HT)</label
                      >
                      <div class="controls">
                        <money
                          :value="avanceDemarageHorsTaxeModifier"
                          style="text-align: left; color: red"
                          class="span"
                          readonly
                        ></money>

                        <!--                  <input type="text" v-model="editActeEffetFinancier.avance_demarrage_ht"-->
                        <!--                         class="span"-->
                        <!--                         placeholder="Saisir le montant "-->
                        <!--                  />-->
                      </div>
                    </div>
                  </td>

                  <td>
                    <div class="control-group">
                      <label class="control-label"
                        >TVA (Avance Démarrage)</label
                      >
                      <div class="controls">
                        <!--                  <input-->
                        <!--                      type="number"-->
                        <!--                      :value="avanceDemarrageMontantTva" style="text-align:left;color:red"-->

                        <!--                      class="span"-->
                        <!--                      readonly-->
                        <!--                  />-->
                        <money
                          :value="avanceDemarrageMontantTvaModifier"
                          style="text-align: left; color: red"
                          class="span"
                          readonly
                        ></money>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="control-group">
                      <label class="control-label"
                        >Montant Avance Démarrage TTC</label
                      >
                      <div class="controls">
                        <!--                  <input-->
                        <!--                      type="number"-->
                        <!--                      :value="avanceDemarrage" style="text-align:left;color:red"-->
                        <!--                      class="span"-->
                        <!--                      readonly-->
                        <!--                  />-->
                        <money
                          :value="editAvanceDemarrageMontantTTC"
                          style="text-align: left; color: red"
                          readonly
                          class="span"
                        ></money>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            <div id="CAUTIONNEMENT3" class="tab-pane">
              <table class="table table-bordered table-striped">
                <tr>
                  <td>
                    <div class="control-group">
                      <label class="control-label"
                        >Taux % du cautionnement</label
                      >
                      <div class="controls">
                        <input
                          type="number"
                          v-model="editActeEffetFinancier.taux_cautionnemt"
                          placeholder="saisir le taux du cautionnement"
                          class="span"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="control-group">
                      <label class="control-label">
                        Montant HT du cautionnement</label
                      >
                      <div class="controls">
                        <!--                  <input type="text"  :value="afficheMontantHorsTaxeDuCautionnement" style="text-align:left;color:red"-->
                        <!--                         class="span"-->
                        <!--                         readOnly-->
                        <!--                  />-->
                        <money
                          style="text-align: left; color: red"
                          readOnly
                          :value="afficheMontantHorsTaxeDuCautionnementModifier"
                          class="span"
                        ></money>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="control-group">
                      <label class="control-label"
                        >Montant TVA du cautionnement</label
                      >
                      <div class="controls">
                        <!--                  <input-->
                        <!--                      type="number"  :value="afficherMontantTvaDuCautionnement" style="text-align:left;color:red"-->
                        <!--                      class="span"-->
                        <!--                      readonly-->
                        <!--                  />-->
                        <money
                          style="text-align: left; color: red"
                          readOnly
                          :value="afficherMontantTvaDuCautionnementModifier"
                          class="span"
                        ></money>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="control-group">
                      <label class="control-label"
                        >Montant TTC du cautionnement
                      </label>
                      <div class="controls">
                        <!--                  <input-->
                        <!--                      type="number"-->

                        <!--                      :value="afficherMontantTTCDuCautionnement" style="text-align:left;color:red"-->
                        <!--                      class="span"-->
                        <!--                      readonly-->
                        <!--                  />-->
                        <money
                          style="text-align: left; color: red"
                          readOnly
                          :value="afficherMontantTTCDuCautionnementModifier"
                          class="span"
                        ></money>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </div>

            <div id="GARANTIEBONEXECUTION3" class="tab-pane">
              <table class="table table-bordered table-striped">
                <tr>
                  <td>
                    <div class="control-group">
                      <label class="control-label"
                        >Taux % de garantie de bonne exécution</label
                      >
                      <div class="controls">
                        <input
                          type="number"
                          v-model="editActeEffetFinancier.taux_bon_execution"
                          placeholder="saisir le taux de garantie de bonne execution"
                          class="span"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="control-group">
                      <label class="control-label">
                        Montant Hors Taxe De garantie d'exécution</label
                      >
                      <div class="controls">
                        <!--                  <input type="text"  :value="afficheMontantHorsTaxeDuCautionnement" style="text-align:left;color:red"-->
                        <!--                         class="span"-->
                        <!--                         readOnly-->
                        <!--                  />-->
                        <money
                          style="text-align: left; color: red"
                          readOnly
                          :value="
                            afficheMontantHorsTaxeGarantieBonneExecutionModifier
                          "
                          class="span"
                        ></money>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="control-group">
                      <label class="control-label"
                        >Montant TVA de garantie de bonne exécution</label
                      >
                      <div class="controls">
                        <!--                  <input-->
                        <!--                      type="number"  :value="afficherMontantTvaDuCautionnement" style="text-align:left;color:red"-->
                        <!--                      class="span"-->
                        <!--                      readonly-->
                        <!--                  />-->
                        <money
                          style="text-align: left; color: red"
                          readOnly
                          :value="
                            afficherMontantTvaDeGarantieDeBonneExecutionModifier
                          "
                          class="span"
                        ></money>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="control-group">
                      <label class="control-label"
                        >Montant TTC de garantie de bonne exécution
                      </label>
                      <div class="controls">
                        <!--                  <input-->
                        <!--                      type="number"-->

                        <!--                      :value="afficherMontantTTCDuCautionnement" style="text-align:left;color:red"-->
                        <!--                      class="span"-->
                        <!--                      readonly-->
                        <!--                  />-->
                        <money
                          style="text-align: left; color: red"
                          readOnly
                          :value="
                            afficherMontantTTCGarantieDeBonneExcutionModifier
                          "
                          class="span"
                        ></money>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </div>

            <div id="GARANTIE3" class="tab-pane">
              <table class="table table-bordered table-striped">
                <tr>
                  <td>
                    <div class="control-group">
                      <label class="control-label"
                        >Taux % de retenue de garantie</label
                      >
                      <div class="controls">
                        <input
                          type="number"
                          v-model="editActeEffetFinancier.taux_retenue_garantie"
                          placeholder="saisir le taux de retenue de garantie"
                          class="span"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="control-group">
                      <label class="control-label">
                        Montant HT de retenue de garantie</label
                      >
                      <div class="controls">
                        <!--                  <input-->
                        <!--                      type="text"  :value="afficherMontantHorsTaxeRetenuGarantie" style="text-align:left;color:red"-->
                        <!--                      placeholder="saisir le montant hors taxe du dispositif retenu"-->

                        <!--                      class="span"-->
                        <!--                      readonly-->
                        <!--                  />-->
                        <money
                          style="text-align: left; color: red"
                          readOnly
                          :value="afficherMontantHorsTaxeRetenuGarantieModifier"
                        ></money>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="control-group">
                      <label class="control-label"
                        >Montant TVA de retenue de garantie</label
                      >
                      <div class="controls">
                        <!--                  <input-->
                        <!--                      type="number"  :value="afficherMontantTvaTaxeRetenuGarantie" style="text-align:left;color:red"-->
                        <!--                      class="span"-->
                        <!--                      readonly-->
                        <!--                  />-->
                        <money
                          style="text-align: left; color: red"
                          readOnly
                          :value="afficherMontantTvaTaxeRetenuGarantieModifier"
                        ></money>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="control-group">
                      <label class="control-label"
                        >Montant TTC retenue de garantie
                      </label>
                      <div class="controls">
                        <!--                  <input-->
                        <!--                      type="number"  :value="afficherMontantRetenueGarantie" style="text-align:left;color:red"-->

                        <!--                      class="span"-->
                        <!--                      readonly-->
                        <!--                  />-->
                        <money
                          style="text-align: left; color: red"
                          readOnly
                          :value="afficherMontantRetenueGarantieModifier"
                        ></money>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div id="sous_traitanceModifier" class="tab-pane">
          <div class="span12">
            <h6>ENREPRISE SOUS TRAITANCE</h6>
            <table class="table">
              <tbody>
                <tr>
                  <td>
                    <label>ENTREPRSE </label>
                    <model-list-select
                      style="background-color: #fff"
                      class="wide"
                      :list="entreprises"
                      v-model="nom_structure"
                      option-value="id"
                      option-text="raison_sociale"
                      placeholder="Entreprise"
                    >
                    </model-list-select>
                  </td>

                  <td>
                    <hr />
                    <button
                      class="btn btn-danger"
                      @click.prevent="addStructure()"
                    >
                      Ajouter
                    </button>
                  </td>
                </tr>
                <tr
                  class="odd gradeX"
                  v-for="appelOffre in structure"
                  :key="'APM' + appelOffre"
                >
                  <td>
                    {{ appelOffre.raison_sociale || "Non renseigné" }}
                  </td>
                  <div class="btn-group">
                    <button
                      class="btn btn-link"
                      title="Supprimer"
                      @click.prevent="
                        supprimeStructureSelectionner(appelOffre.id)
                      "
                    >
                      <span class=""><i class="icon-trash"></i></span>
                    </button>
                  </div>
                </tr>
              </tbody>
            </table>
            <!--                <a @click.prevent="ajouterDossierCandidature" class="btn btn-primary"-->
            <!--                   href="#">Enregistrer dossier du soumissionnaire</a>-->
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <a
          @click.prevent="modifierModalActeEffetFinancierLocal"
          class="btn btn-primary"
          href="#"
          >Modifier</a
        >
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { formatageSomme } from "@/Repositories/Repository";
import { ModelListSelect } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";
export default {
  name: "ActEffeFinanciere",
  props: ["macheid"],
  components: { ModelListSelect },
  data() {
    return {
      lot: "",
      editActeEffetFinancier: {
        tva_cautionnement: "",
        taux_avance_demarrage: "",
        taux_bon_execution: "",
        montant_ttc_cautionnement: "",
        montant_ht_cautionnement: "",
        avance_demarrage_ht: "",
        exonere: "",
        montant_act_ht: "",
        taux_cautionnemt: "",
        taux_retenue_garantie: "",
        tva: "",
        taux: "",
        //ua_id: "",
        httcc_id:"",
        // avance_demarrage_ht:0,
        avance_demarrage_ttc: 0,
        tva_avance_demarage: "",
        libelle_act: "",
        reference_act: "",
        objet_act: "",
        incidence_financiere: "",
        montant_act: "",
        date_attributaire: "",
        date_reception: "",
        duree: "",
        date_fin_exe: "",
        date_odre_service: "",
        livrable_id: "",
        autorite_approbation: "",
        date_approbation: "",
        // text_juridique_id:"",
        type_act_effet_id: "",
        analyse_dossier_id: "",
        entreprise_id: "",
        marche_id: "",
        banq_id: "",
        compte_id: "",
        numero_marche: "",
        durre_garantie:"",
        garantie:"",
      },
      // editEffetFinancier:{},
      sous_traitance: "non",
      garantie: "non",
      nom_structure: "",
      structure: [],
      structure_id: [],
      date_debut_previsionnel: "",
      date_debut_previsionnelModifier: "",
      durre_prevueModifier:"",
      durre_garantieModifier: "",
      durre_prevue: "",
      durre_garantie: "",

      formEffetFinancier: {
        tva_cautionnement: "",
        taux_bon_execution: "",
        taux_avance_demarrage: "",
        montant_ttc_cautionnement: "",
        montant_ht_cautionnement: "",
        avance_demarrage_ht: "",
        exonere: "",
        montant_act_ht: "",
        taux_cautionnemt: "",
        taux_retenue_garantie: "",
        tva: "",
        taux: "",
        //ua_id: "",
        httcc_id:"",
        // avance_demarrage_ht:0,
        avance_demarrage_ttc: 0,
        tva_avance_demarage: "",
        libelle_act: "",
        reference_act: "",
        objet_act: "",
        incidence_financiere: "",
        montant_act: "",
        date_attributaire: "",
        date_reception: "",
        //durre_prevue: "",
        date_fin_exe: "",
        date_odre_service: "",
        livrable_id: "",
        autorite_approbation: "",
        date_approbation: "",
        // text_juridique_id:"",
        type_act_effet_id: "",
        analyse_dossier_id: "",
        entreprise_id: "",
        marche_id: "",
        banq_id: "",
        compte_id: "",
        numero_marche: "",
      },
      nom_candidata: "",
      dossier_candidat_id: "",
      marche_lot: "",
      infoLot: "",
    };
  },
  created() {
    this.lot = this.getMarchePersonnaliser.filter(
      (item) => item.parent_id == this.macheid
    );
    console.log(this.dateDefinitivePrevisionnel("2021-01-23", 30));
  },
  computed: {
    ...mapGetters("bienService", [
      "typeMarches",
      "gettersCotationPersonnaliser",
      "typeCandidat",
      "acteDepense",
      "getMarchePersonnaliser",
      "appelOffres",
      "lots",
      "modePassations",
      "procedurePassations",
      "getterDossierCandidats",
      "marches",
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
      "getActeEffetFinancierPersonnaliser",
      "acteEffetFinanciers",
      "personnaliseGetterMarcheBailleur",
      "getterMembreCojo",
      "getterProceVerballe",
      "getterEntrepriseSousTraitance",
    ]),
    ...mapGetters("personnelUA", ["acteur_depenses"]),

    ...mapGetters("gestionMarche", [
      "secteur_activites",
      "entreprises",
      "banques",
      "comptes",
      "getCompte",
    ]),
    ...mapGetters("parametreGenerauxSourceDeFinancement", [
      "sources_financements",
      "types_financements",
    ]),

    ...mapGetters("parametreGenerauxAdministratif", [
      "exercices_budgetaires",
      "type_Unite_admins",
      "grandes_natures",
      "taux",
      "sections",
    ]),
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "structureActe",
      "planActe",
    ]),
    ...mapGetters("gestionMarche", ["secteur_activites", "entreprises"]),

    CaculerMontantHtParTTC() {
      const val = parseFloat(
        this.formEffetFinancier.montant_act /
          (parseFloat(this.afficherEnorere) + 1)
      );

      if (val) {
        return parseFloat(val).toFixed(0);
      }

      return 0;
    },

    CaculermontantTva() {
      const val = parseFloat(
        this.CaculerMontantHtParTTC * parseFloat(this.afficherEnorere)
      );

      if (val) {
        return parseFloat(val).toFixed(0);
      }

      return 0;
    },

    libelleCompte() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.comptes.find((qtreel) => qtreel.banq_id == id);

          if (qtereel) {
            return qtereel.rib;
          }
          return 0;
        }
      };
    },
idSectionMarche() {
      return id => {
        if (id != null && id != "") {
          const qtereel = this.marches.find(qtreel => qtreel.id == id);

          if (qtereel) {
            return qtereel.section_id;
          }
          return 0
        }
      };
    },
    idSourceFinancement() {
      return id => {
        if (id != null && id != "") {
          const qtereel = this.marches.find(qtreel => qtreel.id == id);

          if (qtereel) {
            return qtereel.source_financement_id;
          }
          return 0
        }
      };
    },
    idTypeFinancement() {
      return id => {
        if (id != null && id != "") {
          const qtereel = this.marches.find(qtreel => qtreel.id == id);

          if (qtereel) {
            return qtereel.type_financement_id;
          }
          return 0
        }
      };
    },
    listeEntreSoustraitance() {
      return (marche) => {
        if (marche) {
          console.log(this.getterEntrepriseSousTraitance);
          let objet = this.getterEntrepriseSousTraitance.filter(
            (item) => item.marche_id == marche
          );
          console.log(objet);
          let array = [];
          let vm = this;
          if (objet != undefined) {
            objet.forEach(function (val) {
              let ob = vm.entreprises.find(
                (item) => item.id == val.entreprise_sous_traitance_id
              );
              let nouvel = {
                ...ob,
                id: val.id,
              };
              array.push(nouvel);
            });
          }
          return array;
        }
      };
    },
    dateDefinitivePrevisionnel() {
      return (date, days) => {
        var result = new Date(date);
        result.setDate(result.getDate() + parseInt(days));
        console.log(result);
        return this.formatDate(result);
      };
    },
    formatDate() {
      return (date) => {
        var d = new Date(date),
          month = "" + (d.getMonth() + 1),
          day = "" + d.getDate(),
          year = d.getFullYear();

        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;

        return [year, month, day].join("-");
      };
    },
    formatDateFr() {
      return (date) => {
        var d = new Date(date),
          month = "" + (d.getMonth() + 1),
          day = "" + d.getDate(),
          year = d.getFullYear();

        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;

        return [day, month, year].join("/");
      };
    },
    getLotMarche() {
      return this.getMarchePersonnaliser.filter(
        (item) => item.parent_id == this.macheid
      ).length;
    },

    afficherEntrepriseNom() {
      return (id) => {
        if (id != null && id != "") {
          let ObjetId = this.entreprises.find((element) => element.id == id);
          if (ObjetId) {
            return ObjetId.raison_sociale;
          }
        }
      };
    },
    
    affichieridMarcheGlobal() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.marches.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.parent_id;
          }
          return 0;
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
    analyseByLot() {
      return (id) => {
        return this.getterAnalyseDossiers.filter((item) => {
          if (item.marche_id == id && item.rang_analyse == 1) return item;
        });
      };
    },

    affichierReferenceAppelOffre() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.appelOffres.find(
            (qtreel) => qtreel.marche_id == id
          );

          if (qtereel) {
            return qtereel.ref_appel;
          }
          return 0;
        }
      };
    },

    afficheMarcheType() {
      if (
        this.affichierCodeTypeMarche(
          this.affichierIdTypeMarche(this.infoLot.id)
        ) == 3
      ) {
        return 1;
      } else {
        return 2;
      }
    },

    affichierIdBanque() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.comptes.find((qtreel) => qtreel.rib == id);

          if (qtereel) {
            return qtereel.banq_id;
          }
          return 0;
        }
      };
    },

    affichierCodeTypeMarche() {
      return (id1) => {
        if (id1 != null && id1 != "") {
          const qtereel = this.typeMarches.find((qtreel) => qtreel.id == id1);

          if (qtereel) {
            return qtereel.code_type_marche;
          }
          return 0;
        }
      };
    },

    affichierIdTypeMarche() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.marches.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.type_marche_id;
          }
          return 0;
        }
      };
    },

    afficherNomCandidat() {
      return (id) => {
        if (id != null && id != "") {
          const nomCandidat = this.getterDossierCandidats.find(
            (item) => item.id == id
          );
          if (nomCandidat) {
            return nomCandidat.nom_cand;
          }
        }
      };
    },

    afficherIDUA() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.marches.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.unite_administrative_id;
          }
          return null;
        }
      };
    },
    ///
    afficherNumeroDossierCandidat1() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterDossierCandidats.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.entreprise_id;
          }
          return null;
        }
      };
    },
    afficheNomEntreprise() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.entreprises.find((qtreel) => qtreel.id == id);
          if (qtereel) {
            return qtereel.raison_sociale;
          }
          return 0;
        }
      };
    },
    afficherOffrefID() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterOffreFinanciers.find(
            (qtreel) => qtreel.dossier_candidat_id == id
          );

          if (qtereel) {
            return qtereel.id;
          }
          return 0;
        }
      };
    },

    afficherListeMontant() {
      return (id) => {
        if (id !== undefined) {
          var acteur = this.getterOffreFinanciers.find(
            (acteur) => acteur.id == id
          );

          return acteur ? acteur.montant_total_ttc : null;
        }
        return null;
      };
    },

    affichierLibelleTypeActeFinancier() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.planActe.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },

    affichierIdActeFinancierDansActePlan() {
      const qtereel = this.planActe.find((qtreel) => qtreel.code == "02");

      if (qtereel) {
        return qtereel.id;
      }
      return 0;
    },

    AffichierElementParent() {
      return (id) => {
        if (id != null && id != "") {
          return this.planActe.filter((element) => element.parent == id);
        }
      };
    },
    veifEquipementExist() {
      return this.formEffetFinancier.banq_id == "";
    },
    veifEquipementExistBanque() {
      return this.formEffetFinancier.entreprise_id == "";
    },

    affichierObjetMarche() {
      return (id) => {
        if (id != null && id != "") {
          let objetMarche = this.marches.find((idMarche) => idMarche.id == id);
          if (objetMarche) {
            return objetMarche.objet;
          }
          return 0;
        }
      };
    },

    affichierImputationMarche() {
      return (id) => {
        if (id != null && id != "") {
          let objetMarche = this.marches.find((idMarche) => idMarche.id == id);
          if (objetMarche) {
            return objetMarche.imputation;
          }
          return 0;
        }
      };
    },
    enregistrerIdEntreprise() {
      return (id) => {
        if (id != null && id != "") {
          let objetMarche = this.marches.find((idMarche) => idMarche.id == id);
          if (objetMarche) {
            return objetMarche.objet;
            // console.log(objetMarche)
          }
          return 0;
        }
      };
    },

    affichierNomEntreprise() {
      let resulta = this.getterAnalyseDossiers.filter(
        (item) => item.reference_pv == this.afficherPv(this.macheid)
      );
      // console.log(resulta)
      if (resulta.length > 0) {
        resulta
          .sort(function (a, b) {
            return a.note_analyse - b.note_analyse;
          })
          .reverse();
        let first = [...resulta].shift();
        // const [ob1]=resulta

        console.log(first);
        // let objet=resulta[0]
        let dossier = first.dossier_candidature;
        console.log(dossier);
        return dossier;
      }
      return 0;
    },

    //  afficherMontantTTCDuCautionnement(){
    //       // const result = (parseFloat(this.montantHTt) * (this.formEffetFinancier.taux_cautionnemt)/100)
    //       // if (result) {
    //       //   return parseFloat(result).toFixed(0);
    //       // }
    //    let montant=parseFloat(this.afficheMontantHorsTaxeDuCautionnement) + parseFloat(this.afficherMontantTvaDuCautionnement)
    //       return parseFloat(montant).toFixed(0);

    //     },
    // calcul du montant ttc de retenu
    afficherMontantRetenueGarantie() {
      const montantttcRetenueGarantie =
        parseFloat(this.afficherMontantHorsTaxeRetenuGarantie) +
        parseFloat(this.afficherMontantTvaTaxeRetenuGarantie);
      return parseFloat(montantttcRetenueGarantie).toFixed(0);
    },

    afficherMontantRetenueGarantieModifier() {
      const montantttcRetenueGarantie =
        parseFloat(this.afficherMontantHorsTaxeRetenuGarantieModifier) +
        parseFloat(this.afficherMontantTvaTaxeRetenuGarantieModifier);

      return parseFloat(montantttcRetenueGarantie).toFixed(0);
    },

    // calcul du montant tva de retenue de garantie

    afficherMontantTvaTaxeRetenuGarantie() {
      const val =
        this.afficherMontantHorsTaxeRetenuGarantie * this.afficherEnorere;

      if (val) {
        return parseFloat(val).toFixed(0);
      }

      return 0;
    },
    afficherMontantTvaTaxeRetenuGarantieModifier() {
      const val = parseFloat(
        this.afficherMontantHorsTaxeRetenuGarantieModifier *
          this.afficherEnorereModifier
      );
      return parseFloat(val).toFixed(0);
    },

    // calcul du montant hors taxe de retenu de garantie  afficherMontantHorsTaxeRetenuGarantie

    // afficherMontantHorsTaxeRetenuGarantie(){

    //   const anwser = parseFloat (this.afficherMontantRetenueGarantie)/(1+ parseFloat(this.afficherTauxEnPourcentage))

    //   if(anwser){
    //     return parseFloat( Math.round(anwser))
    //   }
    //   return 0
    // },

    afficherMontantHorsTaxeRetenuGarantie() {
      if (this.formEffetFinancier.httcc_id == 0) {
        if (
          this.formEffetFinancier.taux_retenue_garantie != "" &&
          this.formEffetFinancier.montant_act_ht != ""
        ) {
          let taux_cautionnement = parseFloat(
            this.formEffetFinancier.taux_retenue_garantie
          );
          let montant_act_ht = parseFloat(
            this.formEffetFinancier.montant_act_ht
          );
          let mont = (montant_act_ht * taux_cautionnement) / 100;
          return parseFloat(mont).toFixed(0);
        }
        return 0;
      } else {
        if (
          this.formEffetFinancier.taux_retenue_garantie != "" &&
          this.CaculerMontantHtParTTC != ""
        ) {
          let taux_cautionnement = parseFloat(
            this.formEffetFinancier.taux_retenue_garantie
          );
          let montant_act_ht = parseFloat(this.CaculerMontantHtParTTC);
          let mont = (montant_act_ht * taux_cautionnement) / 100;
          return parseFloat(mont).toFixed(0);
        }
        return 0;
      }
      //let montantH=this.formEffetFinancier.montant_act_ht afficherEnorere

      // const anwser = parseFloat(this.afficherMontantTTCDuCautionnement)/(1+ parseFloat(this.afficherTauxEnPourcentage))
      //
      // if(anwser){
      //   return parseFloat( Math.round(anwser))
      //}
      // return 0
    },

    afficherMontantHorsTaxeDeGarantiebonneExecution() {
      if (this.formEffetFinancier.httcc_id == 0) {
        if (
          this.formEffetFinancier.taux_bon_execution != "" &&
          this.formEffetFinancier.montant_act_ht != ""
        ) {
          let taux_garantie_bon_execution = parseFloat(
            this.formEffetFinancier.taux_bon_execution
          );
          let montant_act_ht = parseFloat(
            this.formEffetFinancier.montant_act_ht
          );
          let mont = (montant_act_ht * taux_garantie_bon_execution) / 100;
          return parseFloat(mont).toFixed(0);
        }
        return 0;
      } else {
        if (
          this.formEffetFinancier.taux_bon_execution != "" &&
          this.CaculerMontantHtParTTC != ""
        ) {
          let taux_garantie_bon_execution = parseFloat(
            this.formEffetFinancier.taux_bon_execution
          );
          let montant_act_ht = parseFloat(this.CaculerMontantHtParTTC);
          let mont = (montant_act_ht * taux_garantie_bon_execution) / 100;
          return parseFloat(mont).toFixed(0);
        }
        return 0;
      }
    },

    afficherMontantTvaDeGarantieDeBonneExecution() {
      let montantTV =
        this.afficherMontantHorsTaxeDeGarantiebonneExecution *
        this.afficherEnorere;

      return parseFloat(montantTV).toFixed(0);
    },

    afficherMontantTTCDeGarantieDeBonneExecution() {
      let montant =
        parseFloat(this.afficherMontantHorsTaxeDeGarantiebonneExecution) +
        parseFloat(this.afficherMontantTvaDeGarantieDeBonneExecution);
      return parseFloat(montant).toFixed(0);
    },

    //   afficherMontantHorsTaxeRetenuGarantieModifier(){

    //   const anwser = parseFloat (this.afficherMontantRetenueGarantieModifier)/(1+ parseFloat(this.afficherTauxEnPourcentage))

    //   if(anwser){
    //     return parseFloat( Math.round(anwser))
    //   }
    //   return 0
    // },

    //  calcul montant ttc de retenu de garantie pour la modification

    editAfficherMontantRetenueGarantie() {
      const response =
        (parseFloat(this.editMontantHTt) *
          this.editActeEffetFinancier.taux_retenue_garantie) /
        100;
      if (response) {
        return parseFloat(response).toFixed(0);
      }
      return 0;
    },

    // calcul le montant hors taxe de retenu de garantie pour la modification
    editAfficherMontantHorsTaxeRetenuGarantie() {
      const tonyData =
        parseFloat(this.editAfficherMontantRetenueGarantie) /
        (1 + parseFloat(this.afficherTauxEnPourcentage));

      if (tonyData) {
        return parseFloat(Math.round(tonyData));
      }
      return 0;
    },

    // calcul le montant de tva du retenu de garantie
    editAfficherMontantTvaTaxeRetenuGarantie() {
      const data = parseFloat(
        (this.editAfficherMontantHorsTaxeRetenuGarantie *
          parseFloat(this.editModifier)) /
          100
      );

      if (data) {
        return parseFloat(data).toFixed(0);
      }

      return 0;
    },

    // calcule du montant ttc du cautionnement

    afficherMontantTTCDuCautionnement() {
      // const result = (parseFloat(this.montantHTt) * (this.formEffetFinancier.taux_cautionnemt)/100)
      // if (result) {
      //   return parseFloat(result).toFixed(0);
      // }
      let montant =
        parseFloat(this.afficheMontantHorsTaxeDuCautionnement) +
        parseFloat(this.afficherMontantTvaDuCautionnement);
      return parseFloat(montant).toFixed(0);
    },
    afficherMontantTTCDuCautionnementModifier() {
      // const result = (parseFloat(this.montantHTt) * (this.editActeEffetFinancier.taux_cautionnemt)/100)
      // if (result) {
      //   return parseFloat(result).toFixed(0);
      // }

      // return 0
      let montant =
        parseFloat(this.afficheMontantHorsTaxeDuCautionnementModifier) +
        parseFloat(this.afficherMontantTvaDuCautionnementModifier);
      return parseFloat(montant).toFixed(0);
    },

    // calcul du montant de tva du cautionnement

    afficherMontantTvaDuCautionnement() {
      // const val = parseFloat((this.afficheMontantHorsTaxeDuCautionnement) * parseFloat(this.Modifier)/100);
      //
      // if (val) {
      //   return parseFloat(val).toFixed(0);
      // }
      let montantTV =
        this.afficheMontantHorsTaxeDuCautionnement * this.afficherEnorere;

      return parseFloat(montantTV).toFixed(0);
    },

    afficherMontantTvaDuCautionnementModifier() {
      let montantTV =
        this.afficheMontantHorsTaxeDuCautionnementModifier *
        this.afficherEnorereModifier;

      // if (val) {
      //   return parseFloat(val).toFixed(0);
      // }

      // return 0
      return parseFloat(montantTV).toFixed(0);
    },

    // calcul montant d'avance de demarage hors taxe
    // afficherMontantTvaDuCautionnementModifier(){

    //     let montantTV = (this.afficheMontantHorsTaxeDuCautionnementModifier * this.afficherEnorereModifier)

    //     // if (val) {
    //     //   return parseFloat(val).toFixed(0);
    //     // }

    //     // return 0
    //     return parseFloat(montantTV).toFixed(0);
    //   },
    avanceDemarageHorsTaxe() {
      if (this.formEffetFinancier.httcc_id == 0) {
        if (
          this.formEffetFinancier.taux_avance_demarrage != "" &&
          this.formEffetFinancier.montant_act_ht != ""
        ) {
          let taux_cautionnement = parseFloat(
            this.formEffetFinancier.taux_avance_demarrage
          );
          let montant_act_ht = parseFloat(
            this.formEffetFinancier.montant_act_ht
          );
          let mont = (montant_act_ht * taux_cautionnement) / 100;
          return parseFloat(mont).toFixed(0);
        }
        return 0;
      } else {
        if (
          this.formEffetFinancier.taux_avance_demarrage != "" &&
          this.CaculerMontantHtParTTC != ""
        ) {
          let taux_cautionnement = parseFloat(
            this.formEffetFinancier.taux_avance_demarrage
          );
          let montant_act_ht = parseFloat(this.CaculerMontantHtParTTC);
          let mont = (montant_act_ht * taux_cautionnement) / 100;
          return parseFloat(mont).toFixed(0);
        }
        return 0;
      }
      //let montantH=this.formEffetFinancier.montant_act_ht afficherEnorere

      // const anwser = parseFloat(this.afficherMontantTTCDuCautionnement)/(1+ parseFloat(this.afficherTauxEnPourcentage))
      //
      // if(anwser){
      //   return parseFloat( Math.round(anwser))
      //}
      // return 0
    },

    avanceDemarageHorsTaxeModifier() {
      if (
        this.editActeEffetFinancier.taux_avance_demarrage != "" &&
        this.editActeEffetFinancier.montant_act_ht != ""
      ) {
        let taux_avance_demage = parseFloat(
          this.editActeEffetFinancier.taux_avance_demarrage
        );
        let montant_act_ht = parseFloat(
          this.editActeEffetFinancier.montant_act_ht
        );
        let mont = (montant_act_ht * taux_avance_demage) / 100;
        return parseFloat(mont).toFixed(0);
      }
      return 0;
    },

    afficheMontantHorsTaxeGarantieBonneExecutionModifier() {
      if (
        this.editActeEffetFinancier.taux_bon_execution != "" &&
        this.editActeEffetFinancier.montant_act_ht != ""
      ) {
        let taux_bonne = parseFloat(
          this.editActeEffetFinancier.taux_bon_execution
        );
        let montant_act_ht = parseFloat(
          this.editActeEffetFinancier.montant_act_ht
        );
        let mont = (montant_act_ht * taux_bonne) / 100;
        return parseFloat(mont).toFixed(0);
      }
      return 0;
    },

    afficherMontantTvaDeGarantieDeBonneExecutionModifier() {
      let montantTV =
        this.afficheMontantHorsTaxeGarantieBonneExecutionModifier *
        this.afficherEnorereModifier;
      return parseFloat(montantTV).toFixed(0);
    },
    // calcul
    afficherMontantTTCGarantieDeBonneExcutionModifier() {
      let resultat =
        parseFloat(this.afficheMontantHorsTaxeGarantieBonneExecutionModifier) +
        parseFloat(this.afficherMontantTvaDeGarantieDeBonneExecutionModifier);
      return parseFloat(resultat).toFixed(0);
    },

    // afficher le montant de la TVA d'avance de demarrage
    avanceDemarrageMontantTvaModifier() {
      let montantTV =
        this.avanceDemarageHorsTaxeModifier * this.afficherEnorereModifier;

      // if (val) {
      //   return parseFloat(val).toFixed(0);
      // }

      // return 0
      return parseFloat(montantTV).toFixed(0);
    },

    editAvanceDemarrageMontantTTC() {
      let answerMontant =
        parseFloat(this.avanceDemarageHorsTaxeModifier) +
        parseFloat(this.avanceDemarrageMontantTvaModifier);
      return parseFloat(answerMontant).toFixed(0);
    },

    // calcul du montant hors taxe du cautionnement

    afficheMontantHorsTaxeDuCautionnement() {
      if (this.formEffetFinancier.httcc_id == 0) {
        if (
          this.formEffetFinancier.taux_cautionnemt != "" &&
          this.formEffetFinancier.montant_act_ht != ""
        ) {
          let taux_cautionnement = parseFloat(
            this.formEffetFinancier.taux_cautionnemt
          );
          let montant_act_ht = parseFloat(
            this.formEffetFinancier.montant_act_ht
          );
          let mont = (montant_act_ht * taux_cautionnement) / 100;
          return parseFloat(mont).toFixed(0);
        }
        return 0;
      } else {
        if (
          this.formEffetFinancier.taux_cautionnemt != "" &&
          this.CaculerMontantHtParTTC != ""
        ) {
          let taux_cautionnement = parseFloat(
            this.formEffetFinancier.taux_cautionnemt
          );
          let montant_act_ht = parseFloat(this.CaculerMontantHtParTTC);
          let mont = (montant_act_ht * taux_cautionnement) / 100;
          return parseFloat(mont).toFixed(0);
        }
        return 0;
      }
      //let montantH=this.formEffetFinancier.montant_act_ht afficherEnorere

      // const anwser = parseFloat(this.afficherMontantTTCDuCautionnement)/(1+ parseFloat(this.afficherTauxEnPourcentage))
      //
      // if(anwser){
      //   return parseFloat( Math.round(anwser))
      //}
      // return 0
    },
    afficheMontantHorsTaxeDuCautionnementModifier() {
      if (
        this.editActeEffetFinancier.taux_cautionnemt != "" &&
        this.editActeEffetFinancier.montant_act_ht != ""
      ) {
        let taux_cautionnement = parseFloat(
          this.editActeEffetFinancier.taux_cautionnemt
        );
        let montant_act_ht = parseFloat(
          this.editActeEffetFinancier.montant_act_ht
        );
        let mont = (montant_act_ht * taux_cautionnement) / 100;
        return parseFloat(mont).toFixed(0);
      }
      return 0;
      // const anwser = parseFloat (this.afficherMontantTTCDuCautionnementModifier)/(1+ parseFloat(this.afficherTauxEnPourcentage))

      // if(anwser){
      //   return parseFloat( Math.round(anwser))
      // }
      // return 0
    },

    afficherMontantHorsTaxeRetenuGarantieModifier() {
      if (
        this.editActeEffetFinancier.taux_retenue_garantie != "" &&
        this.editActeEffetFinancier.montant_act_ht != ""
      ) {
        let taux_retenu_g = parseFloat(
          this.editActeEffetFinancier.taux_retenue_garantie
        );
        let montant_act_ht = parseFloat(
          this.editActeEffetFinancier.montant_act_ht
        );
        let mont = (montant_act_ht * taux_retenu_g) / 100;
        return parseFloat(mont).toFixed(0);
      }
      return 0;
      // const anwser = parseFloat (this.afficherMontantTTCDuCautionnementModifier)/(1+ parseFloat(this.afficherTauxEnPourcentage))

      // if(anwser){
      //   return parseFloat( Math.round(anwser))
      // }
      // return 0
    },

    // calcul le montant ttc du cautionnement
    editAfficherMontantTTCDuCautionnement() {
      const res =
        (parseFloat(this.editMontantHTt) *
          this.editActeEffetFinancier.taux_cautionnemt) /
        100;
      if (res) {
        return parseFloat(res).toFixed(0);
      }

      return 0;
    },

    // calcul du montant hors taxe du cautionnement

    editAfficheMontantHorsTaxeDuCautionnement() {
      // afficherEnorere
      const resulVal =
        parseFloat(this.editAfficherMontantTTCDuCautionnement) /
        (1 + parseFloat(this.afficherTauxEnPourcentage));

      if (resulVal) {
        return parseFloat(Math.round(resulVal));
      }
      return 0;
    },

    // calcul du montant de tva du cautionnement
    editAfficherMontantTvaDuCautionnement() {
      const val = parseFloat(
        (this.editAfficheMontantHorsTaxeDuCautionnement *
          parseFloat(this.editModifier)) /
          100
      );

      if (val) {
        return parseFloat(val).toFixed(0);
      }

      return 0;
    },

    // calcule du montant ttc

    afficherEnorere() {
      if (this.formEffetFinancier.exonere == 0) {
        return 0;
      } else {
        return this.affcherTauxEnCours;
      }
    },
    afficherEnorereModifier() {
      if (this.editActeEffetFinancier.exonere == 0) {
        return 0;
      } else {
        return this.affcherTauxEnCours;
      }
    },

    editAfficherEnorere() {
      if (this.editActeEffetFinancier.exonere == 0) {
        return 0;
      } else {
        return this.affcherTauxEnCours;
      }
    },

    affcherTauxEnCours() {
      const norme = this.taux.find((normeEquipe) => normeEquipe.encours == 1);

      if (norme) {
        return norme.arrondit;
      }
      return 0;
    },

    afficherTauxEnPourcentage() {
      const tauxArrondi = this.taux.find(
        (normeEquipe) => normeEquipe.encours == 1
      );

      if (tauxArrondi) {
        return tauxArrondi.arrondit;
      }
      return 0;
    },

    montantTva() {
      const val = parseFloat(
        this.formEffetFinancier.montant_act_ht *
          parseFloat(this.afficherEnorere)
      );

      if (val) {
        return parseFloat(val).toFixed(0);
      }

      return 0;
    },

    montantTvaModifier() {
      const val = parseFloat(
        this.editActeEffetFinancier.montant_act_ht *
          parseFloat(this.afficherEnorereModifier)
      );

      if (val) {
        return parseFloat(val).toFixed(0);
      }

      return 0;
    },

    editMontantHTt() {
      let anwser =
        parseFloat(this.editActeEffetFinancier.montant_act_ht) +
        parseFloat(this.montantTvaModifier);
      if (anwser) {
        return parseFloat(anwser).toFixed(0);
      }
      return 0;
    },

    montantHTt() {
      const val =
        parseFloat(this.formEffetFinancier.montant_act_ht) +
        parseFloat(this.montantTva);

      if (val) {
        return parseFloat(val).toFixed(0);
      }

      return 0;
    },
    montantHTtModifier() {
      const val =
        parseFloat(this.editActeEffetFinancier.montant_act_ht) +
        parseFloat(this.montantTvaModifier);

      if (val) {
        return parseFloat(val).toFixed(0);
      }

      return 0;
    },

    
    avanceDemarrageMontantTva() {
      let montantTV = this.avanceDemarageHorsTaxe * this.afficherEnorere;

      return parseFloat(montantTV).toFixed(0);
    },

    avanceDemarrageTTC() {
      // const result = (parseFloat(this.montantHTt) * (this.formEffetFinancier.taux_cautionnemt)/100)
      // if (result) {
      //   return parseFloat(result).toFixed(0);
      // }
      let montant =
        parseFloat(this.avanceDemarageHorsTaxe) +
        parseFloat(this.avanceDemarrageMontantTva);
      return parseFloat(montant).toFixed(0);
    },


    editAvanceDemarrageMontantTva() {
      const val = parseFloat(
        this.editActeEffetFinancier.avance_demarrage_ht *
          parseFloat(this.editAfficherEnorere)
      );

      if (val) {
        return parseFloat(val).toFixed(0);
      }

      return 0;
    },

    editAvanceDemarrage() {
      const val =
        parseFloat(this.editActeEffetFinancier.avance_demarrage_ht) +
        parseFloat(this.avanceDemarrageMontantTvaModifier);

      if (val) {
        return parseFloat(val).toFixed(0);
      }

      return 0;
    },

    // afficher la refernec_pv dans la table pv

    afficherPv() {
      return (macheid) => {
        if (macheid != null && macheid != "") {
          const objetPv = this.getterProceVerballe.find(
            (item) => item.marche_id == macheid
          );
          if (objetPv) {
            return objetPv.reference;
          }
          return null;
        }
      };
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

    afficherEntrepriseRecep() {
      return (id) => {
        if (id != null && id != "") {
          // console.log("Marche lettre inviation marche")
          const objet = this.getterDossierCandidats.find(
            (idmarche) => idmarche.marche_id == id
          );

          if (objet) {
            return objet.nom_cand;
          }
          return 0;
        }
      };
    },

    // afficher la banque dynamique

    verifiBanqueExist() {
      return this.formEffetFinancier.entreprise_id == "";
    },
    verifiBanqueExistModifier() {
      return this.editActeEffetFinancier.entreprise_id == "";
    },

    afficherBanqueDynamique() {
      return (id) => {
        if (id != null && id != "") {
          var resultat = this.banques.find((element) => element.id == id);
          if (resultat) {
            return resultat.libelle;
          }
          return 0;
        }
      };
    },

    afficherLibelleCompteRib() {
      return (id) => {
        if (id != null && id != "") {
          var resultat = this.comptes.find((element) => element.banq_id == id);
          if (resultat) {
            return resultat.rib;
          }
          return 0;
        }
      };
    },

    afficherBanqueId() {
      return (id) => {
        if (id != null && id != "") {
          var resultat = this.comptes.find((element) => element.id == id);
          if (resultat) {
            return resultat.banq_id;
          }
          return null;
        }
      };
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
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.entreprises.find(
            (qtreel) => qtreel.raison_sociale == id
          );

          if (qtereel) {
            return qtereel.id;
          }
          return 0;
        }
      };
    },
    recupererIdBanque() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.comptes.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.banq_id;
          }
          return 0;
        }
      };
    },
    afficherBanqueDynamiqueId() {
      return (id) => {
        if (id != null && id != "") {
          // console.log(this.afficherBanqueDynamiqueId)
          return this.comptes.filter((element) => element.entrepse_id == id);
        }
      };
    },

    afficherCompteDynamique() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.comptes.filter(
            (element) => element.entrepse_id == id && element.banq_id == id1
          );
        }
        // return 0
      };
    },

    // afficherBanqueId(){
    //   return id =>{
    //     if(id != null && id !=""){
    //       let ObjetId =this.comptes.find(element => element.id== id)
    //       if(ObjetId){
    //         return ObjetId.banq_id
    //       }

    //     }
    //   }
    // },

    afficherEntrepriseId() {
      return (id) => {
        if (id != null && id != "") {
          let ObjetId = this.getterDossierCandidats.find(
            (element) => element.entreprise_id == id
          );
          if (ObjetId) {
            return ObjetId.nom_cand;
          }
        }
      };
    },

    // afficherLeCompteEnFonctionDeLaBanque(){       return resultat.varObjetBanque.libelle
    //     return banq_id =>{
    //         if(banq_id !=null && banq_id!=""){
    //   varObjetBanque.libelle.     return this.comptes.find(element => element.id == banq_id)

    //         }
    //     }
    // },

    afficherLeCompteEnFonctionDeLaBanque() {
      return (id) => {
        if (id !== undefined) {
          var acteur = this.comptes.find((acteur) => acteur.banq_id == id);
          console.log(acteur);
          return acteur ? acteur.rib : null;
        }
        return null;
      };
    },
    afficherIdCompte() {
      return (banq_id) => {
        if (banq_id !== undefined) {
          var acteur = this.comptes.find((acteur) => acteur.rib == banq_id);

          return acteur ? acteur.id : null;
        }
        return null;
      };
    },
    nombreDejourCalculeModifier() {
      let vM = this;
      const acteAffet = vM.editActeEffetFinancier;
      if (
        acteAffet.date_odre_service == acteAffet.date_fin_exe &&
        acteAffet.date_fin_exe !== "" &&
        acteAffet.date_odre_service !== ""
      )
        return 1;
      if (acteAffet.date_fin_exe == "" && acteAffet.date_odre_service == "")
        return null;

      var dateF = new Date(acteAffet.date_fin_exe).getTime();
      var dateO = new Date(acteAffet.date_odre_service).getTime();
      var resultat = dateF - dateO;

      var diffJour = resultat / (1000 * 3600 * 24);

      if (isNaN(diffJour)) return null;

      if (parseFloat(diffJour) < 0) return "durée invalide";
      vM.editActeEffetFinancier.duree = diffJour;
      return diffJour;
    },

    nombreDejourCalcule() {
      let vM = this;
      const acteAffet = vM.formEffetFinancier;
      if (
        acteAffet.date_odre_service == acteAffet.date_fin_exe &&
        acteAffet.date_fin_exe !== "" &&
        acteAffet.date_odre_service !== ""
      )
        return 1;
      if (acteAffet.date_fin_exe == "" && acteAffet.date_odre_service == "")
        return null;

      var dateF = new Date(acteAffet.date_fin_exe).getTime();
      var dateO = new Date(acteAffet.date_odre_service).getTime();
      var resultat = dateF - dateO;

      var diffJour = resultat / (1000 * 3600 * 24);

      if (isNaN(diffJour)) return null;

      if (parseFloat(diffJour) < 0) return "durée invalide";
      vM.formEffetFinancier.duree = diffJour;
      return diffJour;
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

    getDateFinExécutionValue() {
      return !this.formEffetFinancier.date_odre_service != "";
    },
    getDateFinExécutionValueModifier() {
      return !this.editActeEffetFinancier.date_odre_service != "";
    },

    nombreDejourCalculeEdit() {
      let vM = this;
      const acteAffetEdit = vM.editActeEffetFinancier;
      if (
        acteAffetEdit.date_odre_service == acteAffetEdit.date_fin_exe &&
        acteAffetEdit.date_fin_exe !== "" &&
        acteAffetEdit.date_odre_service !== ""
      )
        return 1;
      if (
        acteAffetEdit.date_fin_exe == "" &&
        acteAffetEdit.date_odre_service == ""
      )
        return null;

      var dateF = new Date(acteAffetEdit.date_fin_exe).getTime();
      var dateO = new Date(acteAffetEdit.date_odre_service).getTime();
      var resultat = dateF - dateO;

      var diffJour = resultat / (1000 * 3600 * 24);

      if (isNaN(diffJour)) return null;

      if (parseFloat(diffJour) < 0) return "durée invalide";
      vM.editActeEffetFinancier.duree = diffJour;
      return diffJour;
    },

    getDateFinExécutionValueEdit() {
      return !this.editActeEffetFinancier.date_odre_service != "";
    },

    listeActeEffectFinnancier: function () {
      return (macheid) => {
        if (macheid != "") {
          // console.log("Marche leste acte effect finnancier")
          return this.getActeEffetFinancierPersonnaliser.filter(
            (idmarche) => idmarche.marche_id == macheid
          );
        }
      };
    },
    ActeEffect: function () {
      return (macheid) => {
        if (macheid != "") {
          // console.log("Marche leste acte effect finnancier")
          return this.getActeEffetFinancierPersonnaliser.find(
            (idmarche) => idmarche.marche_id == macheid
          );
        }
      };
    },
  },

  methods: {
    ...mapActions("bienService", [
      "supprimerActeEffetFinancier",
      "ajouterActeEffetFinancier",
      "modifierActeEffetFinancier",
      "modifierMarche2",
      "supprimerEntrepriseSousTraitance",
      "modifierActeEffet",
    ]),
    ...mapActions("horSib", ["modifierMarcheHorSib"]),

    recherche() {
      // console.log(this.search)
      let entre = this.entreprises.find((item) => item.id == this.search);
      if (entre != undefined) {
        if (this.search != "") {
          this.formEffetFinancier.id = entre.id;
          // this.formDossierCadidature.adresse_post=entre.adresse
          // this.formDossierCadidature.nom_cand=entre.raison_sociale
          // this.formDossierCadidature.reg_com=entre.numero_rc
          // this.formDossierCadidature.email_cand=entre.email
          // this.formDossierCadidature.numero_cc=entre.numero_cc
          // this.formDossierCadidature.secteur_activite_id=entre.secteur_activite_id
        }
      }
    },

    afficherModalModifierService(id) {
      this.$("#exampleModalValidationdirecteur").modal({
        backdrop: "static",
        keyboard: false,
      });

      this.editActeEffetFinancier = this.acteEffetFinanciers.find(
        (item) => item.id == id
      );

      this.infoLot = this.getMarchePersonnaliser.find(
        (item) => item.id == this.editActeEffetFinancier.marche_id
      );
      this.marche_lot = this.editActeEffetFinancier.marche_id;
    },
    // afficherModalModifierActeEffetFinancier(id) {

    //       this.$router.push({
    //         path: "/ModificationActeFinancier/" + id
    //       });
    //     },

    afficheModaleActe(index) {
      this.$("#ajouterAct").modal({
        backdrop: "static",
        keyboard: false,
      });
      if (this.analyseByLot(index).length > 0) {
        (this.nom_candidata = this.afficheNomEntreprise(
          this.afficherNumeroDossierCandidat1(
            this.analyseByLot(index)[0].dossier_candidat_id
          )
        )),
          (this.dossier_candidat_id = this.analyseByLot(
            index
          )[0].dossier_candidat_id);
      }
      this.marche_lot = index;
      this.infoLot = this.getMarchePersonnaliser.find(
        (item) => item.id == index
      );
      //  this.edite_analyse_dossier = this.listeAnalyseDossier(this.macheid)[index];
    },

    afficherModalModifierActeEffetFinancier(id) {
      this.$("#modifierActeEF").modal({
        backdrop: "static",
        keyboard: false,
      });

      this.editActeEffetFinancier = this.acteEffetFinanciers.find(
        (item) => item.id == id
      );
      // console.log(this.editActeEffetFinancier)
      this.infoLot = this.getMarchePersonnaliser.find(
        (item) => item.id == this.editActeEffetFinancier.marche_id
      );
      this.marche_lot = this.editActeEffetFinancier.marche_id;
      this.durre_prevueModifier = this.editActeEffetFinancier.duree;
      // if ( this.analyseByLot(this.editActeEffetFinancier.marche_id).length>0){
      //     this.nom_candidata=this.afficheNomEntreprise(this.afficherNumeroDossierCandidat1(this.analyseByLot(this.editActeEffetFinancier.marche_id)[0].dossier_candidat_id)),
      //         this.dossier_candidat_id=this.analyseByLot(this.editActeEffetFinancier.marche_id)[0].dossier_candidat_id
      // }
    },

    modifierModalActeEffetFinancierLocal() {
      // this.editActeEffetFinancier.entreprise_id=entreprise_id

      var nouvelObjet1 = {
        ...this.editActeEffetFinancier,
        id: this.editActeEffetFinancier.id,
        ua_id: this.afficherIDUA(this.macheid),
        taux: this.afficherEnorereModifier,
        tva_cautionnement: this.afficherMontantTvaDuCautionnementModifier,
        montant_ttc_cautionnement: this
          .afficherMontantTTCDuCautionnementModifier,
        montant_ht_cautionnement: this
          .afficheMontantHorsTaxeDuCautionnementModifier,
        montant_ht_retenu_garantie: this
          .afficherMontantHorsTaxeRetenuGarantieModifier,
        montant_tva_retenu_garanti: this
          .afficherMontantTvaTaxeRetenuGarantieModifier,
        montant_ttc_retenue_garantie: this
          .afficherMontantRetenueGarantieModifier,
        tva: this.montantTvaModifier,
        sous_traitance: this.sous_traitance,
        //garantie: this.garantieModifier,
        //duree: this.durre_prevueModifier,
        montant_act: this.montantHTtModifier,
        avance_demarrage_ht: this.avanceDemarageHorsTaxeModifier,
        montant_ht_bon_execution: this
          .afficheMontantHorsTaxeGarantieBonneExecutionModifier,
        montant_tva_bon_execution: this
          .afficherMontantTvaDeGarantieDeBonneExecutionModifier,
        montant_ttc_bon_execution: this
          .afficherMontantTTCGarantieDeBonneExcutionModifier,
        avance_demarrage_ttc: this.editAvanceDemarrageMontantTTC,
        tva_avance_demarage: this.avanceDemarrageMontantTvaModifier,
        entreprise_id: this.editActeEffetFinancier.entreprise_id,
        difference_personnel_bienService: this.afficheMarcheType,
        marche_id: this.marche_lot,
        marchegeneral_id: this.affichieridMarcheGlobal(this.marche_lot),
        sous_traitance_array: this.structure_id,
         section_id:this.idSectionMarche(this.marche_lot),
      source_financement_id:this.idSourceFinancement(this.marche_lot),
      type_financement_id:this.idTypeFinancement(this.marche_lot),
        // banq_id: this.affichierIdBanque(
        //   this.afficherLeCompteEnFonctionDeLaBanque(
        //     this.editActeEffetFinancier.banq_id
        //   )
        // ),
        // compte_id: this.afficherIdCompte(
        //   this.afficherLeCompteEnFonctionDeLaBanque(
        //     this.editActeEffetFinancier.banq_id
        //   )
        // ),
        text_juridique_id: 0,
      };
      let marcheObjet = this.marches.find(
        (marche) => marche.id == this.editActeEffetFinancier.marche_id
      );
      marcheObjet.attribue = 2;
      let marcheObjet5 = this.marches.find(
        (marche) =>
          marche.id ==
          this.affichieridMarcheGlobal(this.editActeEffetFinancier.marche_id)
      );
      marcheObjet5.attribue = 2;
      marcheObjet.numero_marche = this.editActeEffetFinancier.numero_marche;
      this.modifierActeEffetFinancier(nouvelObjet1);
      this.modifierMarche2(marcheObjet);
      this.modifierMarche2(marcheObjet5);
      this.$("#modifierActeEF").modal("hide");
      this.editActeEffetFinancier = {};
    },

    formatageSomme: formatageSomme,

    ajouterModalActeEffetFinancierLocal() {
      if (this.formEffetFinancier.httcc_id == 0) {
        var nouvelObjet = {
          ...this.formEffetFinancier,
          ua_id: this.afficherIDUA(this.macheid),
          taux: this.afficherEnorere,
          tva_cautionnement: 
          this.afficherMontantTvaDuCautionnement,
          montant_ttc_cautionnement: 
          this.afficherMontantTTCDuCautionnement,
          montant_ht_cautionnement:
           this.afficheMontantHorsTaxeDuCautionnement,
          montant_ht_retenu_garantie: this
            .afficherMontantHorsTaxeRetenuGarantie,
          montant_ht_bon_execution: this
            .afficherMontantHorsTaxeDeGarantiebonneExecution,
          montant_tva_bon_execution: this
            .afficherMontantTvaDeGarantieDeBonneExecution,
          montant_ttc_bon_execution: this
            .afficherMontantTTCDeGarantieDeBonneExecution,
          montant_tva_retenu_garanti: 
          this.afficherMontantTvaTaxeRetenuGarantie,
          montant_ttc_retenue_garantie: 
          this.afficherMontantRetenueGarantie,
          tva: this.montantTva,
          duree:this.durre_prevue,
          sous_traitance: this.sous_traitance,
          garantie: this.garantie,
          durre_garantie:this.durre_garantie,
          montant_act: this.montantHTt,
          avance_demarrage_ttc: this.avanceDemarrageTTC,
          avance_demarrage_ht: this.avanceDemarageHorsTaxe,
          tva_avance_demarage: this.avanceDemarrageMontantTva,
          // entreprise_id:this.affichierIdEntrepriseSelectionner(this.nom_candidata),
          difference_personnel_bienService: this.afficheMarcheType,
          marche_id: this.marche_lot,
          marchegeneral_id: this.affichieridMarcheGlobal(this.marche_lot),
          sous_traitance_array: this.structure_id,
           section_id:this.idSectionMarche(this.marche_lot),
      source_financement_id:this.idSourceFinancement(this.marche_lot),
      type_financement_id:this.idTypeFinancement(this.marche_lot),
          // banq_id:this.affichierIdBanque(this.afficherLeCompteEnFonctionDeLaBanque(this.formEffetFinancier.banq_id)),
          // compte_id:this.afficherIdCompte(this.afficherLeCompteEnFonctionDeLaBanque(this.formEffetFinancier.banq_id))
        };

        console.log(nouvelObjet);
        //let entreprisePremier=this.entreprises.find(item=>item.numero_rc==rcm)

        //this.formEffetFinancier.entreprise_id=entreprisePremier.id
        this.ajouterActeEffetFinancier(nouvelObjet);
        
        let marcheObjet = this.marches.find(
          (marche) => marche.id == this.marche_lot
        );
        marcheObjet.attribue = 2;
        let marcheObjet1 = this.marches.find(
          (marche) => marche.id == this.affichieridMarcheGlobal(this.marche_lot)
        );
        marcheObjet1.attribue = 2;
        marcheObjet.numero_marche = this.formEffetFinancier.numero_marche;
        // console.log(marcheObjet)
        this.modifierMarche2(marcheObjet);
        this.modifierMarche2(marcheObjet1);
        this.formEffetFinancier = {
          code_act: "",
          libelle_act: "",
          reference_act: "",
          objet_act: "",
          incidence_financiere: "",
          montant_act: "",
          date_attributaire: "",
          date_reception: "",
          //durre_prevue: "",
          date_fin_exe: "",
          date_odre_service: "",
          livrable_id: "",
          autorite_approbation: "",
          date_approbation: "",
          ua_id: "",
          type_act_effet_id: "",
          analyse_dossier_id: "",
          entreprise_id: "",
          marche_id: "",
          numero_marche: "",
          avance_demarrage_ttc: 0,
          // avance_demarrage_ht:0,
          sous_traitance: "",
        };
        
        this.structure_id = [];
        this.$("#ajouterAct").modal("hide");
      } else {
        var nouvelObjet12 = {
          ...this.formEffetFinancier,
          ua_id: this.afficherIDUA(this.macheid),
          taux: this.afficherEnorere,
          tva_cautionnement: this.afficherMontantTvaDuCautionnement,
          montant_ttc_cautionnement: this.afficherMontantTTCDuCautionnement,
          montant_ht_cautionnement: this.afficheMontantHorsTaxeDuCautionnement,
          montant_ht_retenu_garantie: this
            .afficherMontantHorsTaxeRetenuGarantie,
          montant_tva_retenu_garanti: this.afficherMontantTvaTaxeRetenuGarantie,
          montant_ttc_retenue_garantie: this.afficherMontantRetenueGarantie,
          tva: this.CaculermontantTva,
          sous_traitance: this.sous_traitance,
          garantie: this.garantie,
          durre_garantie:this.durre_garantie,
          duree:this.durre_prevue,
          montant_act: this.formEffetFinancier.montant_act,
          montant_act_ht: this.CaculerMontantHtParTTC,
          avance_demarrage_ttc: this.avanceDemarrageTTC,
          avance_demarrage_ht: this.avanceDemarageHorsTaxe,
          tva_avance_demarage: this.avanceDemarrageMontantTva,
          // entreprise_id:this.affichierIdEntrepriseSelectionner(this.nom_candidata),
          difference_personnel_bienService: this.afficheMarcheType,
          marche_id: this.marche_lot,
          marchegeneral_id: this.affichieridMarcheGlobal(this.marche_lot),
          sous_traitance_array: this.structure_id,
           section_id:this.idSectionMarche(this.marche_lot),
      source_financement_id:this.idSourceFinancement(this.marche_lot),
      type_financement_id:this.idTypeFinancement(this.marche_lot),
          //  banq_id:this.affichierIdBanque(this.afficherLeCompteEnFonctionDeLaBanque(this.formEffetFinancier.banq_id)),
          // compte_id:this.afficherIdCompte(this.afficherLeCompteEnFonctionDeLaBanque(this.formEffetFinancier.banq_id))
        };

        console.log(nouvelObjet);
        //let entreprisePremier=this.entreprises.find(item=>item.numero_rc==rcm)

        //this.formEffetFinancier.entreprise_id=entreprisePremier.id
        this.ajouterActeEffetFinancier(nouvelObjet12);
        //this.$("#modificationModal").modal("hide");
        let marcheObjet2 = this.marches.find(
          (marche) => marche.id == this.marche_lot
        );
        marcheObjet2.attribue = 2;
        let marcheObjet78 = this.marches.find(
          (marche) => marche.id == this.affichieridMarcheGlobal(this.marche_lot)
        );
        marcheObjet78.attribue = 2;
        marcheObjet2.numero_marche = this.formEffetFinancier.numero_marche;
        // console.log(marcheObjet)
        this.modifierMarche2(marcheObjet2);
        this.modifierMarche2(marcheObjet78);
        this.formEffetFinancier = {
          code_act: "",
          libelle_act: "",
          reference_act: "",
          objet_act: "",
          incidence_financiere: "",
          montant_act: "",
          date_attributaire: "",
          date_reception: "",
         // duree: "",
          date_fin_exe: "",
          date_odre_service: "",
          livrable_id: "",
          autorite_approbation: "",
          date_approbation: "",
         // ua_id: "",
          type_act_effet_id: "",
          analyse_dossier_id: "",
          entreprise_id: "",
          marche_id: "",
          numero_marche: "",
          avance_demarrage_ttc: 0,
          avance_demarrage_ht: "",
          sous_traitance: "",
        };
        this.structure_id = [];
        this.$("#ajouterAct").modal("hide");
      }
    },
    addStructure() {
      if (this.nom_structure == "") return "";
      let isStructureExist = this.structure.find(
        (item) => item.id == this.nom_structure
      );
      if (isStructureExist != undefined) return "";
      let objet = this.entreprises.find(
        (item) => item.id == this.nom_structure
      );
      this.structure_id.unshift(objet.id);
      this.structure.unshift(objet);
      console.log(this.structure);
      this.nom_structure = "";

      //this.formDossierCadidature.nom_cand
    },
    supprimeStructureSelectionner(id) {
      this.structure = this.structure.filter((item) => item.id != id);
      this.structure_id = this.structure_id.filter((item) => item != id);
      console.log(this.structure_id);
    },
  },
  watch: {
    date_debut_previsionnel: function (value) {
      // this.formEffetFinancier.date_odre_service=value
      // console.log(this.formEffetFinancier.date_odre_service)
      if (this.durre_prevue) {
        console.log(this.durre_prevue);
        this.formEffetFinancier.date_odre_service = this.date_debut_previsionnel;
        this.formEffetFinancier.date_reception = this.dateDefinitivePrevisionnel(
          value,
          this.durre_prevue
        );
        this.formEffetFinancier.date_fin_exe = this.dateDefinitivePrevisionnel(
          value,
          this.durre_prevue
        );
        console.log(this.formEffetFinancier);
        this.formEffetFinancier.duree = this.durre_prevue;
      }
    },
    durre_prevue: function (value) {
      // this.formEffetFinancier.duree=value
      //console.log(value)
      if (this.date_debut_previsionnel) {
        this.durre_prevue = value;
        //    console.log(this.dateDefinitivePrevisionnel(this.date_debut_previsionnel,value))
        this.formEffetFinancier.date_reception = this.dateDefinitivePrevisionnel(
          this.date_debut_previsionnel,
          value
        );
        this.formEffetFinancier.date_fin_exe = this.dateDefinitivePrevisionnel(
          this.date_debut_previsionnel,
          value
        );
        this.formEffetFinancier.date_odre_service = this.date_debut_previsionnel;
        console.log(this.formEffetFinancier);
      }
      if (value == "") {
        this.formEffetFinancier.date_reception = "";
        this.formEffetFinancier.date_fin_exe = "";
      }
    },
    durre_garantie: function (value) {
      if (value) {
        this.durre_garantie = value;
        if (this.date_debut_previsionnel != "" && this.durre_prevue != "") {
          let date = this.dateDefinitivePrevisionnel(
            this.date_debut_previsionnel,
            this.durre_prevue
          );
          // console.log(date)
          this.formEffetFinancier.date_fin_exe = this.dateDefinitivePrevisionnel(
            date,
            value
          );
        }
      }
    },
    garantie: function (value) {
      if (value == "non") {
        if (this.date_debut_previsionnel != "" && this.durre_prevue != "") {
          let date = this.dateDefinitivePrevisionnel(
            this.date_debut_previsionnel,
            this.durre_prevue
          );
          this.formEffetFinancier.date_fin_exe = date;
          this.durre_garantie = "";
        }
      }
    },
    unite_administrative_id: function (value) {
      console.log(value);
      if (this.info_status_marche != "") {
        this.listeMarcheStatus(this.status_marches);
      }
    },

    date_debut_previsionnelModifier: function (value) {
      // this.formEffetFinancier.date_odre_service=value
      // console.log(this.formEffetFinancier.date_odre_service)
      if (this.editActeEffetFinancier.duree) {
        this.editActeEffetFinancier.date_odre_service = this.date_debut_previsionnelModifier;
        this.editActeEffetFinancier.date_reception = this.dateDefinitivePrevisionnel(
          value,
          this.editActeEffetFinancier.duree
        );
        this.editActeEffetFinancier.date_fin_exe = this.dateDefinitivePrevisionnel(
          value,
          this.editActeEffetFinancier.duree
        );
        console.log(this.editActeEffetFinancier);
        this.editActeEffetFinancier.duree = this.durre_prevueModifier;
      }
    },
    durre_prevueModifier: function (value) {
      // this.editActeEffetFinancier.duree=value
      //console.log(value)
      if (this.date_debut_previsionnelModifier) {
        this.editActeEffetFinancier.duree = value;
        //    console.log(this.dateDefinitivePrevisionnel(this.date_debut_previsionnel,value))
        this.editActeEffetFinancier.date_reception = this.dateDefinitivePrevisionnel(
          this.date_debut_previsionnelModifier,
          value
        );
        this.editActeEffetFinancier.date_fin_exe = this.dateDefinitivePrevisionnel(
          this.date_debut_previsionnelModifier,
          value
        );
        this.editActeEffetFinancier.date_odre_service = this.date_debut_previsionnelModifier;
        console.log(this.editActeEffetFinancier);
      }
      if (value == "") {
        this.editActeEffetFinancier.date_reception = "";
        this.editActeEffetFinancier.date_fin_exe = "";
      }
    },
    durre_garantieModifier: function (value) {
      if (value) {
        this.editActeEffetFinancier.durre_garantie = value;
        if (
          this.date_debut_previsionnelModifier != "" &&
          this.durre_prevueModifier != ""
        ) {
          let date = this.dateDefinitivePrevisionnel(
            this.date_debut_previsionnelModifier,
            this.durre_prevueModifier
          );
          // console.log(date)
          this.editActeEffetFinancier.date_fin_exe = this.dateDefinitivePrevisionnel(
            date,
            value
          );
        }
      }
    },
    garantieModifier: function (value) {
      if (value == "non") {
        if (
          this.date_debut_previsionnelModifier != "" &&
          this.durre_prevue != ""
        ) {
          let date = this.dateDefinitivePrevisionnel(
            this.editActeEffetFinancier.date_debut_previsionnelModifier,
            this.durre_prevueModifier
          );
          this.editActeEffetFinancier.date_fin_exe = date;
          this.durre_garantie = "";
        }
      }
    },
  },
};
</script>

<style scoped>
.grdirModalActeEffet {
  width: 88%;
  margin: 0 -42%;
}
</style>