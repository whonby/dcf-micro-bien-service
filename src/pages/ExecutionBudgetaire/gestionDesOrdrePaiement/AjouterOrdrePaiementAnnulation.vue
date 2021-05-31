
<template>
  <div class="container-fluid">
    <hr />
    <!-- <div align="left" style="cursor: pointer">
      <button class="btn btn-danger" @click.prevent="pagePrecedent">
        Page Précédente
      </button>
    </div> -->
    <div class="row-fluid">
      <div class="span12">
        <div class="widget-box">
          <div class="widget-title">
            <span class="icon">
              <i class="icon-th"></i>
            </span>
            <h5>Ajouter Ordre Paiement Annulation</h5>
            <!-- <div align="right">
                Search:
                <input type="search" placeholder />
              </div>-->
          </div>
          <table class="table table-bordered table-striped">
            <tr>
              <td>
                <div class="control-group">
                  <label class="control-label">Exercice</label>
                  <div class="controls">
                    <input
                      type="text"
                      style="border: 1px solid #000; font-size: 15px"
                      :value="anneeAmort"
                      class="span"
                      readonly
                    />
                  </div>
                </div>
              </td>
              <!-- <td>
                <div class="control-group">
                  <label class="control-label"
                    >N° Ordre paiement Provisoire ou definitif</label
                  >
                  <div class="controls">
                    <input
                      type="text"
                      style="border: 1px solid #000; font-size: 15px"
                      v-model="detailOpProvisoire.numero_ordre_paiement"
                      v-on:keyup="rechercheMembreCojo()"
                      class="span"
                    />
                  </div>
                </div>
              </td> -->
                  <td>
                          <label
                            >N° Ordre paiement Provisoire ou definitif
                            <code style="color: red; font-size: 16px">*</code>
                          </label>
                          <model-list-select
                            style="border: 1px solid #000"
                            class="wide"
                            :list="afficheNumeroopProvisoire"
                            v-model="detailOpProvisoire.numero_ordre_paiement"
                            option-value="id"
                            option-text="numero_ordre_paiement"
                          
                            placeholder=""
                          >
                          </model-list-select>
                         
                        </td>
              <!-- <td>
                <div class="control-group">
                  <label class="control-label">Type Ordre de paiement</label>

                  <div class="controls">
                    <input
                      type="text"
                      style="border: 1px solid #000; font-size: 15px"
                      v-model="formData78.typeOp"
                      class="span"
                      readonly
                    />
                  </div>
                </div>
              </td> -->
              <td>
                <div class="control-group">
                  <label class="control-label"
                    >Numéro OP Annulation<code
                      style="color: red; font-size: 16px"
                      >*</code
                    ></label
                  >

                  <div class="controls">
                    <input
                      type="text"
                      style="border: 1px solid #000; font-size: 15px"
                      v-model="formData.numero_ordre_paiement"
                      class="span"
                    />
                  </div>
                </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label"
                    >Date OP Annulation<code
                      style="color: red; font-size: 16px"
                      >*</code
                    ></label
                  >

                  <div class="controls">
                    <input
                      type="date"
                      style="border: 1px solid #000; font-size: 15px"
                      v-model="formData.date_op"
                      class="span"
                    />
                  </div>
                </div>
              </td>
            </tr>
          </table>
          <div class="table-responsive text-nowrap">
            <table class="table table-bordered table-striped">
              <div class="widget-box">
                <div class="widget-title">
                  <ul class="nav nav-tabs">
                    <li class="active">
                      <a data-toggle="tab" href="#INFORMATIONUA"
                        >IMPUTATION BUDGETAIRE</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="widget-content tab-content">
                  <!--ongle identification-->
                  <div id="INFORMATIONUA" class="tab-pane active">
                    <table class="table table-bordered table-striped">
                      <tr>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Section</label>
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                :value="
                                  libelleSection(RecupererIdSection(detailOpProvisoire.numero_ordre_paiement))
                                "
                                class="span"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label"
                              >Programme/Dotation</label
                            >
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                :value="
                                  libelleProgramme(
                                    RecupererIdProgramme(detailOpProvisoire.numero_ordre_paiement)
                                  )
                                "
                                class="span"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                        <td colspan="2">
                          <div class="control-group">
                            <label class="control-label">Action</label>
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                :value="
                                  libelleAction(RecupererIdAction(detailOpProvisoire.numero_ordre_paiement))
                                "
                                class="span"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label"
                              >Unite administrative</label
                            >
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                :value="
                                  libelleUniteAdministrative(
                                    RecupererIdUa(detailOpProvisoire.numero_ordre_paiement)
                                  )
                                "
                                class="span"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label"
                              >Activité <code style="color: red; font-size: 16px"
                                >*</code
                              ></label
                            >
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                :value="
                                  NomActivite(RecupererIdActivite(detailOpProvisoire.numero_ordre_paiement))
                                "
                                class="span"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Sous Bugdet</label>
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                :value="
                                  libelleSousBudget(
                                    RecupererIdSousBudget(detailOpProvisoire.numero_ordre_paiement)
                                  )
                                "
                                class="span"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label"
                              >Classification Economique</label
                            >
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                :value="
                                  libelleLigneEconomique(
                                    RecupererIdEconomique(detailOpProvisoire.numero_ordre_paiement)
                                  )
                                "
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
                <div class="widget-title">
                  <ul class="nav nav-tabs">
                    <li class="active">
                      <a data-toggle="tab" href="#ENGAGEMENT"
                        >REFERENCES DU CREANCIER</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="widget-content tab-content">
                  <!--ongle identification-->
                  <div id="ENGAGEMENT" class="tab-pane active">
                    <table
                      class="table table-bordered table-striped"
                      v-if="RecupererTypeDepense(detailOpProvisoire.numero_ordre_paiement) == 2"
                    >
                      <tr>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label">NOM</label>

                            <div class="controls">
                              <input
                                v-model="formData45.nom_autre_depense"
                                type="text"
                                style="border: 1px solid #000"
                                class="span"
                              />
                            </div>
                          </div>
                        </td>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label"
                              >COMPTE CONTRIBUABLE</label
                            >

                            <div class="controls">
                              <input
                                v-model="formData45.compte_autre_depense"
                                type="text"
                                style="border: 1px solid #000"
                                class="span"
                              />
                            </div>
                          </div>
                        </td>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label">ADRESSE</label>

                            <div class="controls">
                              <input
                                v-model="formData45.adresse"
                                type="text"
                                style="border: 1px solid #000"
                                class="span"
                              />
                            </div>
                          </div>
                        </td>

                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label"
                              >REFERENCES BANCAIRES</label
                            >

                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                v-model="formData45.reference_autre_depense"
                                class="span"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    </table>
                    <table class="table table-bordered table-striped">
                      <tr>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Type de depense</label>
                            <div class="controls">
                              <input
                                :value="recupererNomTypeDepense"
                                type="text"
                                style="border: 1px solid #000"
                                class="span"
                              />
                              <!-- <select v-model="detailOpProvisoire.typedepense" class="span" style="border:1px solid #000" >
                    <option value="1">Marché</option>
                     <option value="2">Autres</option>

                  </select> -->
                            </div>
                          </div>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </table>
                    <table
                      class="table table-bordered table-striped"
                      v-if="RecupererTypeDepense(detailOpProvisoire.numero_ordre_paiement) == 'Autres'"
                    >
                      <tr>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label">NOM</label>

                            <div class="controls">
                              <input
                                readonly
                                type="text"
                                style="border: 1px solid #000"
                                :value="RecupererNom(detailOpProvisoire.numero_ordre_paiement)"
                                class="span"
                              />
                            </div>
                          </div>
                        </td>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label"
                              >COMPTE CONTRIBUABLE</label
                            >

                            <div class="controls">
                              <input
                                :value="
                                  RecupererCOMPTE(detailOpProvisoire.numero_ordre_paiement)
                                "
                                readonly
                                type="text"
                                style="border: 1px solid #000"
                                class="span"
                              />
                            </div>
                          </div>
                        </td>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label">ADRESSE</label>

                            <div class="controls">
                              <input
                                readonly
                                type="text"
                                style="border: 1px solid #000"
                                :value="RecupererADRESSE(detailOpProvisoire.numero_ordre_paiement)"
                                class="span"
                              />
                            </div>
                          </div>
                        </td>

                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label"
                              >REFERENCES BANCAIRES</label
                            >

                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                :value="
                                  RecupererBANCAIRES(detailOpProvisoire.numero_ordre_paiement)
                                "
                                class="span"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    </table>
                    <table
                      class="table table-bordered table-striped"
                      v-else-if="RecupererTypeDepense(detailOpProvisoire.numero_ordre_paiement) == 'Marche'"
                    >
                      <tr>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label">NOM</label>

                            <div class="controls">
                              <input
                                readonly
                                type="text"
                                style="border: 1px solid #000"
                                :value="
                                  Numero_Nom_Entreprise(RecupererEntreprise(detailOpProvisoire.numero_ordre_paiement)                                 
                                  )
                                "
                                class="span"
                              />
                            </div>
                          </div>
                        </td>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label"
                              >COMPTE CONTRIBUABLE</label
                            >

                            <div class="controls">
                              <input
                                readonly
                                type="text"
                                style="border: 1px solid #000"
                                :value="
                                  Numero_CC(RecupererEntreprise(detailOpProvisoire.numero_ordre_paiement))
                                "
                                class="span"
                              />
                            </div>
                          </div>
                        </td>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label">ADRESSE</label>

                            <div class="controls">
                              <input
                                readonly
                                type="text"
                                style="border: 1px solid #000"
                                :value="
                                  Numero_adresse_Entreprise(
                                    RecupererEntreprise(detailOpProvisoire.numero_ordre_paiement)
                                  )
                                "
                                class="span"
                              />
                            </div>
                          </div>
                        </td>

                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label"
                              >REFERENCES BANCAIRES</label
                            >

                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                :value="
                                  libelleBanque(
                                    RecupererEntreprise(detailOpProvisoire.numero_ordre_paiement)
                                  )
                                "
                                class="span"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    </table>
                    <table class="table table-bordered table-striped" v-else>
                     <tr>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label">NOM</label>

                            <div class="controls">
                              <input
                                readonly
                                type="text"
                                style="border: 1px solid #000"
                                :value="RecupererNom(detailOpProvisoire.numero_ordre_paiement)"
                                class="span"
                              />
                            </div>
                          </div>
                        </td>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label"
                              >COMPTE CONTRIBUABLE</label
                            >

                            <div class="controls">
                              <input
                                :value="
                                  RecupererCOMPTE(detailOpProvisoire.numero_ordre_paiement)
                                "
                                readonly
                                type="text"
                                style="border: 1px solid #000"
                                class="span"
                              />
                            </div>
                          </div>
                        </td>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label">ADRESSE</label>

                            <div class="controls">
                              <input
                                readonly
                                type="text"
                                style="border: 1px solid #000"
                                :value="RecupererADRESSE(detailOpProvisoire.numero_ordre_paiement)"
                                class="span"
                              />
                            </div>
                          </div>
                        </td>

                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label"
                              >REFERENCES BANCAIRES</label
                            >

                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                :value="
                                  RecupererBANCAIRES(detailOpProvisoire.numero_ordre_paiement)
                                "
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
                <div class="widget-title">
                  <ul class="nav nav-tabs">
                    <li class="active">
                      <a data-toggle="tab" href="#tab1"
                        >REFERENCES DU REGLEMENT</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="widget-content tab-content">
                  <!--ongle identification-->
                  <div id="tab1" class="tab-pane active">
                    <table
                      class="table table-bordered table-striped"
                      v-if="RecupererTypeDepense(detailOpProvisoire.numero_ordre_paiement) == 'Autres'"
                    >
                      <tr>
                        <td colspan="3">
                          <div class="control-group">
                            <label class="control-label"
                              >OBJET DE LA DEPENSE</label
                            >
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                :value="RecupererObjet(detailOpProvisoire.numero_ordre_paiement)"
                                
                                class="span"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="control-group">
                            <label class="control-label">LIVRABLES</label>
                            <div class="controls">
                              <input
                               
                                :value="RecupererLivrable(detailOpProvisoire.numero_ordre_paiement)"
                                type="text"
                                style="border: 1px solid #000"
                                class="span"
                              />
                            </div>
                          </div>
                        </td>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label">BENEFICIAIRES</label>
                            <div class="controls">
                              <input
                                :value="RecupererBeneficiaire(detailOpProvisoire.numero_ordre_paiement)"
                                type="text"
                                style="border: 1px solid #000"
                                class="span"
                              />
                            </div>
                          </div>
                        </td>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label">GEOLOCALISATION</label>
                            <div class="controls">
                              <input
                                
                                type="text"
                                style="border: 1px solid #000"
                                class="span"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="control-group">
                            <label class="control-label"
                              >DUREE DE REALISATION</label
                            >
                            <div class="controls">
                              <input
                              :value="RecupererDure(detailOpProvisoire.numero_ordre_paiement)"
                                
                                type="text"
                                style="border: 1px solid #000"
                                class="span"
                              />
                            </div>
                          </div>
                        </td>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label"
                              >MONTANT EN CHIFFRES</label
                            >
                            <div class="controls">
                              <!-- <input
                  
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData2.montant_engage"
                    class="span"
                    readonly
                  /> -->
                              <money
                                
                                :value="RecupererMontantEngage(detailOpProvisoire.numero_ordre_paiement)"
                                style="text-align: left; color: red"
                                class="span"
                              ></money>
                            </div>
                          </div>
                        </td>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label"
                              >MODE DE REGLEMENT</label
                            >
                            <div class="controls">
                               <input
                              :value="recupererLibelleModePaiement(RecupererModePaiement(detailOpProvisoire.numero_ordre_paiement))"
                                
                                type="text"
                                style="border: 1px solid #000"
                                class="span"
                              />
                              <!-- <select
                                v-model="formData.mode_paiement_id"
                                class="span"
                                style="border: 1px solid #000"
                              >
                                <option
                                  v-for="typeFact in modepaiements"
                                  :key="typeFact.id"
                                  :value="typeFact.id"
                                >
                                  {{ typeFact.libelle }}
                                </option>
                              </select> -->
                            </div>
                          </div>
                        </td>
                      </tr>
                    </table>
                    <table
                      class="table table-bordered table-striped"
                      v-else-if="RecupererTypeDepense(detailOpProvisoire.numero_ordre_paiement) == 'Marche'"
                    >
                      <tr>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Numero Marche</label>
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                :value="
                                  AfficheNumeroMarche(RecupererIdMarche(detailOpProvisoire.numero_ordre_paiement)
                                    
                                  )
                                "
                                class="span"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                        <td colspan="3">
                          <div class="control-group">
                            <label class="control-label"
                              >OBJET DE LA DEPENSE</label
                            >
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                :value="
                                  objetMarche(RecupererIdMarche(detailOpProvisoire.numero_ordre_paiement))
                                "
                                class="span"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="control-group">
                            <label class="control-label">LIVRABLES</label>
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                :value="
                                  livrable(RecupererIdMarche(detailOpProvisoire.numero_ordre_paiement))
                                "
                                class="span"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                        <td colspan="2">
                          <div class="control-group">
                            <label class="control-label">BENEFICIAIRES</label>
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                :value="
                                  libelleUniteAdministrative(
                                    RecupererIdUa(detailOpProvisoire.numero_ordre_paiement)
                                  )
                                "
                                class="span"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label">GEOLOCALISATION</label>
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                :value="
                                  geolocalisation(RecupererIdMarche(detailOpProvisoire.numero_ordre_paiement))
                                "
                                class="span"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="control-group">
                            <label class="control-label"
                              >DUREE DE REALISATION (en jours)</label
                            >
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                :value="
                                  recupererDureMarche(
                                    RecupererIdMarche(detailOpProvisoire.numero_ordre_paiement)
                                  )
                                "
                                class="span"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label"
                              >MONTANT DU MARCHE</label
                            >
                            <div class="controls">
                              <!-- <input
                  
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData2.montant_engage"
                    class="span"
                    readonly
                  /> -->
                              <money
                                :value="
                                  montantMarche(RecupererIdMarche(detailOpProvisoire.numero_ordre_paiement))
                                "
                                
                                style="text-align: left; color: red"
                                readOnly
                                class="span"
                              ></money>
                            </div>
                          </div>
                        </td>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label">MONTANT ENGAGE</label>
                            <div class="controls">
                               <money
                                
                                :value="RecupererMontantEngage(detailOpProvisoire.numero_ordre_paiement)"
                                style="text-align: left; color: red"
                                readOnly
                                class="span"
                              ></money>
                             
                            </div>
                          </div>
                        </td>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label"
                              >MODE DE REGLEMENT</label
                            >
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                :value="
                                  recupererLibelleModePaiement(
                                    RecupererModePaiement(detailOpProvisoire.numero_ordre_paiement)
                                  )
                                "
                                class="span"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                      <!-- <tr>
                          <td colspan="3"> 
<div class="control-group">
                <label class="control-label">MONTANT EN LETTRES</label>
                <div class="controls">
                  <input
                  
                    type="text"
                    style="border:1px solid #000"
                  
                    class="span"
                    readonly
                  />
                  
                </div>
              </div>
                          </td>
                          </tr> -->
                      
                    </table>

                    <table class="table table-bordered table-striped" v-else>
                                           <tr>
                        <td colspan="3">
                          <div class="control-group">
                            <label class="control-label"
                              >OBJET DE LA DEPENSE</label
                            >
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                :value="RecupererObjet(detailOpProvisoire.numero_ordre_paiement)"
                                
                                class="span"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="control-group">
                            <label class="control-label">LIVRABLES</label>
                            <div class="controls">
                              <input
                               
                                :value="RecupererLivrable(detailOpProvisoire.numero_ordre_paiement)"
                                type="text"
                                style="border: 1px solid #000"
                                class="span"
                              />
                            </div>
                          </div>
                        </td>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label">BENEFICIAIRES</label>
                            <div class="controls">
                              <input
                                :value="RecupererBeneficiaire(detailOpProvisoire.numero_ordre_paiement)"
                                type="text"
                                style="border: 1px solid #000"
                                class="span"
                              />
                            </div>
                          </div>
                        </td>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label">GEOLOCALISATION</label>
                            <div class="controls">
                              <input
                                
                                type="text"
                                style="border: 1px solid #000"
                                class="span"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="control-group">
                            <label class="control-label"
                              >DUREE DE REALISATION</label
                            >
                            <div class="controls">
                              <input
                              :value="RecupererDure(detailOpProvisoire.numero_ordre_paiement)"
                                
                                type="text"
                                style="border: 1px solid #000"
                                class="span"
                              />
                            </div>
                          </div>
                        </td>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label"
                              >MONTANT ENGAGE</label
                            >
                            <div class="controls">
                              <!-- <input
                  
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData2.montant_engage"
                    class="span"
                    readonly
                  /> -->
                              <money
                                readonly
                                :value="RecupererMontantEngage(detailOpProvisoire.numero_ordre_paiement)"
                                style="text-align: left; color: red"
                                class="span"
                              ></money>
                            </div>
                          </div>
                        </td>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label"
                              >MODE DE REGLEMENT</label
                            >
                            <div class="controls">
                               <input
                              :value="recupererLibelleModePaiement(RecupererModePaiement(detailOpProvisoire.numero_ordre_paiement))"
                                
                                type="text"
                                style="border: 1px solid #000"
                                class="span"
                              />
                              <!-- <select
                                v-model="formData.mode_paiement_id"
                                class="span"
                                style="border: 1px solid #000"
                              >
                                <option
                                  v-for="typeFact in modepaiements"
                                  :key="typeFact.id"
                                  :value="typeFact.id"
                                >
                                  {{ typeFact.libelle }}
                                </option>
                              </select> -->
                            </div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div class="widget-title">
                  <ul class="nav nav-tabs">
                    <li class="active">
                      <a data-toggle="tab" href="#tab1"
                        >Source de Financement</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="widget-content tab-content">
                  <!--ongle identification-->
                  <div id="tab1" class="tab-pane active">
                    <table class="table table-bordered table-striped">
                      <tr>
                        <td>
                          <div class="control-group">
                            <label class="control-label"
                              >Type de Financement
                              <code style="color: red; font-size: 16px"
                                >*</code
                              ></label
                            >
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                :value="
                                  AfficheTypeFinancement(RecupererIdTypeFinancement(detailOpProvisoire.numero_ordre_paiement))
                                  
                                "
                                class="span"
                                readonly
                              />
                              <!-- <model-list-select style="border:1px solid #000"
                                                   class="wide"
                                                   :list="types_financements"
                                                   v-model="formData.type_financement_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   
                                                   placeholder=""
                                >

                                </model-list-select> -->
                            </div>
                          </div>
                        </td>

                        <td>
                          <label>Bailleur </label>
                          <!-- <model-list-select style="border:1px solid #000"
                                                   class="wide"
                                                   :list="sources_financements"
                                                   v-model="formData.bailler_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder=""
                                >

                                </model-list-select> -->
                          <input
                            type="text"
                            style="border: 1px solid #000"
                            :value="
                             
                              AfficheSourceFinancement(RecupererIdSousFinancement(detailOpProvisoire.numero_ordre_paiement))
                                  
                            "
                            class="span"
                            readonly
                          />
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
<table class="table table-bordered table-striped">
  
    <tr>
       <label
                            class="control-label"
                            style="
                              font-size: 14px;
                              font-weight: bold;
                              text-align: center;
                            "
                            
                            >Facture</label
                          >
                           <div
                            class=""
                            align="right"
                            
                          >
                            <!-- <button
                              @click.prevent="afficherModalAjouterFacture"
                              class="btn btn-success"
                            >
                              <span>
                                <i class="icon icon-plus-sign"
                                  >AJOUTER FACTURE </i
                                ></span
                              >
                            </button> -->
                          </div>
                           <table
                            class="table table-bordered table-striped"
                           
                          >
                          <thead>
                             <tr>
                          <th>Designation</th>
                          <th>Quantité</th>
                          <th>Prix unitaire</th>
                          <th>Total</th>
                          <th style="width: 10px">Supprimer</th>
                        </tr>
                            </thead>
 <tbody>
                        <tr
                          class="odd gradeX"
                          v-for="(type) in listeFacturePiece(numeroOp(detailOpProvisoire.numero_ordre_paiement)                    
                          )"
                          :key="type.id"
                        >
                          <td @dblclick="afficherModalModifierFacture(type.id)">
                            {{ type.designation || "Non renseigné" }}
                          </td>
                          <td
                            style="text-align: center; font-weight: bold"
                            @dblclick="afficherModalModifierFacture(type.id)"
                          >
                            {{ type.quantite || "Non renseigné" }}
                          </td>
                          <td
                            style="text-align: center; font-weight: bold"
                            @dblclick="afficherModalModifierFacture(type.id)"
                          >
                            {{
                              formatageSomme(parseFloat(type.prix_unitaire)) ||
                              "Non renseigné"
                            }}
                          </td>
                          <td
                            style="text-align: center; font-weight: bold"
                            @dblclick="afficherModalModifierFacture(type.id)"
                          >
                            {{
                              formatageSomme(
                                parseFloat(type.total_facture_ht)
                              ) || "Non renseigné"
                            }}
                          </td>
                          <td>
                            <button
                              class="btn btn-danger"
                              @click="supprimerDossierFacture(type.id)"
                            >
                              <span>
                                <i class="icon icon-trash"></i>
                              </span>
                            </button>
                          </td>
                        </tr>
                      <tr>
                          <td></td>
                          <td></td>
                          <td
                            style="
                              color: red;
                              font-size: 14px;
                              text-align: center;
                              font-weight: bold;
                            "
                          >
                            Montant Ht
                          </td>
                          <td
                            style="
                              color: red;
                              font-size: 14px;
                              text-align: center;
                              font-weight: bold;
                            "
                          >
                            {{
                              formatageSomme(
                                parseFloat(
                                  SommeDesDmdParBonCommande(
                                    numeroOp(detailOpProvisoire.numero_ordre_paiement)
                                  )
                                )
                              )
                            }}
                          </td>
                           <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td
                            style="
                              color: red;
                              font-size: 14px;
                              text-align: center;
                              font-weight: bold;
                            "
                          >
                            Taux
                          </td>
                          <td
                            style="
                              color: red;
                              font-size: 14px;
                              text-align: center;
                              font-weight: bold;
                            "
                          >
                                    
                            {{ RecuperereTaux(numeroOp(detailOpProvisoire.numero_ordre_paiement)) }}
                          </td>
                           <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td
                            style="
                              color: red;
                              font-size: 14px;
                              text-align: center;
                              font-weight: bold;
                            "
                          >
                            TVA
                          </td>
                          <td
                            style="
                              color: red;
                              font-size: 14px;
                              text-align: center;
                              font-weight: bold;
                            "
                          >
                                    
                            {{parseFloat(SommeDesDmdParBonCommande(numeroOp(detailOpProvisoire.numero_ordre_paiement)))*parseFloat(RecuperereTaux(numeroOp(detailOpProvisoire.numero_ordre_paiement))) }}
                          </td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td
                            style="
                              color: red;
                              font-size: 14px;
                              text-align: center;
                              font-weight: bold;
                            "
                          >
                            Montant Ttc
                          </td>
                          <td
                            style="
                              color: red;
                              font-size: 14px;
                              text-align: center;
                              font-weight: bold;
                            "
                          >
                            {{
                              formatageSomme(
                                parseFloat(
                                  parseFloat(
                                    parseFloat(SommeDesDmdParBonCommande(numeroOp(detailOpProvisoire.numero_ordre_paiement)))*parseFloat(RecuperereTaux(numeroOp(detailOpProvisoire.numero_ordre_paiement)))
                                  ) +
                                    parseFloat(
                                       parseFloat(
                                  SommeDesDmdParBonCommande(
                                    numeroOp(detailOpProvisoire.numero_ordre_paiement)
                                  )
                                )
                                    )
                                )
                              )
                            }}
                          </td>
                        <td></td>
                        </tr>
                        </tbody>
                            </table>
 </tr>
 <table class="table table-bordered table-striped">
   <div
                            class=""
                            align="right"
                            
                          >
                            <!-- <button
                              @click.prevent="afficherModalAjouterService"
                              class="btn btn-success"
                            >
                              <span>
                                <i class="icon icon-plus-sign"
                                  >AJOUTER PIECE</i
                                ></span
                              >
                            </button> -->
                          </div>
 <tr>
                        <td colspan="4">
                          
                          <label
                            class="control-label"
                            style="
                              font-size: 14px;
                              font-weight: bold;
                              text-align: center;
                            "
                           
                            >Pièce Justificative</label
                          >


                          <table
                            class="table table-bordered table-striped"
                            
                          >
                            <thead>
                             
                              <tr>
                                <th style="font-size: 14px; font-weight: bold">
                                  Numero Ordre
                                </th>
                                <th style="font-size: 14px; font-weight: bold">
                                  Nature de la pièce
                                </th>
                                <th style="font-size: 14px; font-weight: bold">
                                  Reference
                                </th>
                                <th style="font-size: 14px; font-weight: bold">
                                  Date de la pièce
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr
                                class="odd gradeX"
                                v-for="type in listePieceJustificativeOpDefinitive(
                                  numeroOp(detailOpProvisoire.numero_ordre_paiement)
                                )"
                                :key="type.id"
                              >
                                <td
                                  style="width:20%,text-align:center"
                                  @dblclick="
                                    afficherModalModifierTypeTexte(type.id)
                                  "
                                >
                                  {{ type.numero_ordre || "Non renseigné" }}
                                </td>
                                <td
                                  style="width: 30%"
                                  @dblclick="
                                    afficherModalModifierTypeTexte(type.id)
                                  "
                                >
                                  {{
                                    listePieceJustifica(type.libelle) ||
                                    "Non renseigné"
                                  }}
                                </td>
                                <td
                                  style="width: 20%"
                                  @dblclick="
                                    afficherModalModifierTypeTexte(type.id)
                                  "
                                >
                                  {{ type.reference || "Non renseigné" }}
                                </td>
                                <td
                                  style="width: 15%"
                                  @dblclick="
                                    afficherModalModifierTypeTexte(type.id)
                                  "
                                >
                                  {{
                                    formaterDate(type.date_piece) ||
                                    "Non renseigné"
                                  }}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
  </table>
  </table>

                <div class="widget-title">
                  <ul class="nav nav-tabs">
                    <li class="active">
                      <a data-toggle="tab" href="#tab1"
                        >SITUATION DES CREDITS</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="widget-content tab-content">
                  <!--ongle identification-->
                  <div id="tab1" class="tab-pane active">
                    <table class="table table-bordered table-striped">
                      <tr>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label"
                              >Crédits autorisés (A)</label
                            >
                            <div class="controls">
                              <money
                                :value="fonctionPourVideLeChamp"
                                readOnly
                                style="text-align: left; color: red"
                                class="span"
                              ></money>
                            </div>
                          </div>
                        </td>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label"
                              >Engagements antérieurs (B)</label
                            >
                            <div class="controls">
                              <money
                                :value="Engagementsantérieurs"
                                readOnly
                                style="text-align: left; color: red"
                                class="span"
                              ></money>
                            </div>
                          </div>
                        </td>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label"
                              >Engagement actuel (C)</label
                            >
                            <div class="controls">
                              <money
                                :value="
                                  RecupererMontantEngage(detailOpProvisoire.numero_ordre_paiement)
                                "
                                style="text-align: left; color: red"
                                class="span"
                              ></money>
                            </div>
                          </div>
                        </td>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label"
                              >Cumul engagements(D) (B + C)</label
                            >
                            <div class="controls">
                              <money
                                :value="Cumulengagements"
                                readOnly
                                style="text-align: left; color: red"
                                class="span"
                              ></money>
                            </div>
                          </div>
                        </td>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label"
                              >Disponible budgétaire (A - D)</label
                            >
                            <div class="controls">
                              <money
                                :value="Disponiblebudgétaire"
                                readOnly
                                style="text-align: left; color: red"
                                class="span"
                              ></money>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div class="widget-title">
                  <ul class="nav nav-tabs">
                    <li class="active">
                      <a data-toggle="tab" href="#tab1"
                        >LE GESTIONNAIRE DE CREDIT</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="widget-content tab-content">
                  <!--ongle identification-->
                  <div id="tab1" class="tab-pane active">
                    <table class="table table-bordered table-striped">
                      <tr>
                        <td>
                          <div class="widget-title">
                            <ul class="nav nav-tabs">
                              <li class="active">
                                <a data-toggle="tab" href="#INFORMATIONUA"
                                  >SIGNATURE GESTIONNAIRE DE CREDITS</a
                                >
                              </li>
                            </ul>
                          </div>
                          <div class="control-group">
                            <label class="control-label">Date</label>
                            <div class="controls">
                              <input
                                type="date"
                                style="border: 1px solid #000"
                                :value="RecupererDateBenef(detailOpProvisoire.numero_ordre_paiement)"
                               
                                class="span"
                              />
                            </div>
                          </div>
                          <div class="control-group">
                            <label class="control-label">Nom</label>
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                 :value="RecupererNomGestionnaire(detailOpProvisoire.numero_ordre_paiement)"
                               
                                class="span"
                              />
                            </div>
                          </div>
                          <div class="control-group">
                            <label class="control-label">Fonction</label>
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                 :value="RecupererFonction(detailOpProvisoire.numero_ordre_paiement)"
                               
                                class="span"
                              />
                            </div>
                          </div>
                        </td>
                        <td colspan="2">
                          <div class="widget-title">
                            <ul class="nav nav-tabs">
                              <li class="active">
                                <a data-toggle="tab" href="#INFORMATIONUA"
                                  >VISA CONTRÔLEUR FINANCIER</a
                                >
                              </li>
                            </ul>
                          </div>
                          <div class="control-group">
                            <label class="control-label">Date</label>
                            <div class="controls">
                              <input
                                type="date"
                                style="border: 1px solid #000"
                                class="span"
                                 :value="RecupererDateViseCf(detailOpProvisoire.numero_ordre_paiement)"
                               
                              />
                            </div>
                          </div>
                          <div class="control-group">
                            <label class="control-label">Nom</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                                :value="
                                  recupererNomDuControleurF(
                                    recupererIdUser(
                                      recupererIdServiceCF(
                                        detailOpProvisoire.unite_administrative_id
                                      )
                                    )
                                  )
                                "
                                readonly
                              />
                            </div>
                          </div>
                          <div class="control-group">
                            <label class="control-label">Visa</label>
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                class="span"
                                :value="afficheDecisionCf"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="widget-title">
                            <ul class="nav nav-tabs">
                              <li class="active">
                                <a data-toggle="tab" href="#INFORMATIONUA"
                                  >VISA AGENT COMPTABLE</a
                                >
                              </li>
                            </ul>
                          </div>
                          <div class="control-group">
                            <label class="control-label">Date</label>
                            <div class="controls">
                              <input
                                type="date"
                                style="border: 1px solid #000"
                                class="span"
                              />
                            </div>
                          </div>
                          <div class="control-group">
                            <label class="control-label">Nom</label>
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                class="span"
                              />
                            </div>
                          </div>
                          <div class="control-group">
                            <label class="control-label">Signature</label>
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                class="span"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="widget-title">
                            <ul class="nav nav-tabs">
                              <li class="active">
                                <a data-toggle="tab" href="#INFORMATIONUA"
                                  >ACQUIT LIBERATOIRE</a
                                >
                              </li>
                            </ul>
                          </div>
                          <div class="control-group">
                            <label class="control-label">Date</label>
                            <div class="controls">
                              <input
                                type="date"
                                style="border: 1px solid #000"
                                class="span"
                              />
                            </div>
                          </div>
                          <div class="control-group">
                            <label class="control-label">Nom</label>
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                class="span"
                              />
                            </div>
                          </div>
                          <div class="control-group">
                            <label class="control-label">Signature</label>
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                class="span"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div align="right">
                  <div class="controls">
                    <div data-toggle="buttons-checkbox" class="btn-group">
                      <a
                        class="btn btn-primary"
                        @click.prevent="AjouterOrdrePaiementAnulation"
                        >Valider</a
                      >
                       <a
                        @click.prevent="pagePrecedent()"
                        class="btn"
                        href="#"
                        >Fermer</a
                      >
                      
                     
                    </div>
                  </div>
                </div>

                <br />
              </div>
            </table>
          </div>
        </div>
      </div>
    </div>
    <notifications />

    <div id="exampleModal" class="modal hide taille">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter pièces justificatives</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
            <td>
              <div class="control-group">
                <label class="control-label">Numéro ordre</label>
                <div class="controls">
                  <input
                    v-if="formData.type_ordre_paiement == '2'"
                    type="text"
                    :value="numeroOrdre(formData.numero_ordre_paiement)"
                    class="span5"
                    placeholder="Saisir le libellé"
                    readonly
                  />
                  <input
                    v-if="formData.type_ordre_paiement == '1'"
                    type="text"
                    :value="
                      numeroOrdreDefinitive(formData.numero_ordre_paiement)
                    "
                    class="span5"
                    placeholder="Saisir le libellé"
                    readonly
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label"
                  >Nature de la pièce
                  <code style="color: red; font-size: 16px">*</code></label
                >
                <div class="controls">
                  <select
                    v-model="formData1.libelle"
                    class="span5"
                    style="border: 1px solid #000"
                  >
                    <option></option>
                    <option
                      v-for="typeFact in typeFactures"
                      :key="typeFact.id"
                      :value="typeFact.id"
                    >
                      {{ typeFact.libelle }}
                    </option>
                  </select>
                  <code
                    style="color: red; font-size: 12px"
                    v-if="formData1.libelle.length > 0"
                    >Veuillez renseigner ce champ</code
                  >
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label"
                  >Reference de la pièce
                  <code style="color: red; font-size: 16px">*</code></label
                >
                <div class="controls">
                  <input
                    type="text"
                    v-model="formData1.reference"
                    class="span5"
                    placeholder="Saisir la reference"
                  />
                  <code
                    style="color: red; font-size: 12px"
                    v-if="formData1.reference == ''"
                    >Veuillez renseigner ce champ</code
                  >
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="control-group">
                <label class="control-label"
                  >Date de la pièce
                  <code style="color: red; font-size: 16px">*</code></label
                >
                <div class="controls">
                  <input
                    type="date"
                    v-model="formData1.date_piece"
                    class="span5"
                  />
                  <code
                    style="color: red; font-size: 12px"
                    v-if="formData1.date_piece == ''"
                    >Veuillez renseigner ce champ</code
                  >
                </div>
              </div>
            </td>
            <td colspan="">
              <div class="control-group">
                <label class="control-label">Pièces justificatives </label>
                <div class="controls">
                  <input
                    type="file"
                    style="border: 1px solid #000"
                    @change="OnchangeFichier"
                    class="span"
                  />
                  <code v-if="info_pdf">Le fichier doit etre un pdf</code>
                </div>
              </div>
            </td>
          
          </tr>
        </table>
      </div>

      <div>
        <div class="modal-footer">
          <a
            class="btn btn-primary"
            @click.prevent="AjoutePieceJustific"
            v-if="formData1.reference != '' && formData1.date_piece != ''"
            >Valider</a
          >

          <a data-dismiss="modal" class="btn" href="#">Fermer</a>
        </div>
       

        
      </div>
    </div>

    <div id="ModifierexampleModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier pièces justificatives</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
            <td>
              <div class="control-group">
                <label class="control-label">Numéro ordre</label>
                <div class="controls">
                  <input
                    type="text"
                    v-model="editpiece.numero_ordre"
                    class="span5"
                    placeholder="Saisir le libellé"
                    readonly
                  />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="control-group">
                <label class="control-label">Nature de la pièce</label>
                <div class="controls">
                  <input
                    type="text"
                    v-model="editpiece.libelle"
                    class="span5"
                    placeholder="Saisir le libellé"
                  />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="control-group">
                <label class="control-label">Reference de la pièce</label>
                <div class="controls">
                  <input
                    type="text"
                    v-model="editpiece.reference"
                    class="span5"
                    placeholder="Saisir la reference"
                  />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="control-group">
                <label class="control-label">Date de la pièce</label>
                <div class="controls">
                  <input
                    type="date"
                    v-model="editpiece.date_piece"
                    class="span5"
                  />
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div class="modal-footer">
        <a
          class="btn btn-primary"
          href="#"
          @click.prevent="modifierTypeTexteLocal"
          >Valider</a
        >
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>

    <div id="exampleModal11" class="modal hide tailles">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Facture</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
            <td colspan="3">
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <!-- <input
                    type="text"
                    v-model="FormDataFacture.designation"
                    class="span12"
                  /> -->
                  <textarea
                style="border:1px solid #000"
                  v-model="FormDataFacture.designation"
                  class="span12"
                  rows="2"
                  placeholder="Saisir le texte"
                ></textarea>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="control-group">
                <label class="control-label">Quantite</label>
                <div class="controls">
                  <!-- <input
                    type="number"
                    v-model="FormDataFacture.quantite"
                    class="span4"
                  /> -->
                   <money
                     v-model="FormDataFacture.quantite"
                    style="text-align: left; color: red"
                    class="span4"
                  ></money>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix Unitaire</label>
                <div class="controls">
                  <!-- <input
                type="number"
                v-model="FormDataFacture.prix_unitaire"
                class="span4"
                
              /> -->
                  <money
                    v-model="FormDataFacture.prix_unitaire"
                    style="text-align: left; color: red"
                    class="span4"
                  ></money>
                </div>
              </div>
            </td>
             <td>
                <div class="control-group">
                <label class="control-label">exonéré</label>
                <div class="controls">
                  <select v-model="FormDataFacture.exonere" class="span4">
                  
                    <option value="0">Oui</option>
                     <option value="1">Non</option>
                  </select>
                
                </div>
              </div>
              </td>
           
          </tr>
          <tr>
             <td>
              <div class="control-group">
                <label class="control-label">Montant Ht</label>
                <div class="controls">
                 
                  <money
                    :value="MontantFactureHt"
                    style="text-align: left; color: red"
                    class="span4"
                  ></money>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Taux</label>
                <div class="controls">
 <input type="text" 
                         class="span4"
                        :value="afficherEnorere"
                         readonly
                  />

                </div>
              </div>
            </td>
              <td >
              <div class="control-group">
                <label class="control-label" >Montant Tva</label>
                <div class="controls">
                 
<money :value="montantTva"  readonly  style="text-align:left;color:red;font-size:16px"  class="span4"></money>
                </div>
              </div>
            </td>
            
          </tr>
          <tr>
          <td>
              <div class="control-group">
                <label class="control-label">Montant TTC</label>
                <div class="controls">
                  <!-- <input
                type="text"
                :value="MontantFactureHt"
                class="span4"
                readonly
              /> -->
                  <money
                    :value="MontantFactureTTC"
                    style="text-align: left; color: red"
                    class="span4"
                  ></money>
                </div>
              </div>
            </td>
            </tr>
        </table>
      </div>
      <div class="modal-footer">
        <a @click.prevent="ajouterFacture()" class="btn btn-primary" href="#"
          >Valider</a
        >
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>






    <div id="modificationModal" class="modal hide tailles">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier Facture</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
            <td colspan="3">
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <!-- <input
                    type="text"
                    v-model="FormDataFacture.designation"
                    class="span12"
                  /> -->
                  <textarea
                style="border:1px solid #000"
                  v-model="editFacture.designation"
                  class="span12"
                  rows="2"
                  placeholder="Saisir le texte"
                ></textarea>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="control-group">
                <label class="control-label">Quantite</label>
                <div class="controls">
                  <!-- <input
                    type="number"
                    v-model="FormDataFacture.quantite"
                    class="span4"
                  /> -->
                   <money
                     v-model="editFacture.quantite"
                    style="text-align: left; color: red"
                    class="span4"
                  ></money>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix Unitaire</label>
                <div class="controls">
                  <!-- <input
                type="number"
                v-model="FormDataFacture.prix_unitaire"
                class="span4"
                
              /> -->
                  <money
                    v-model="editFacture.prix_unitaire"
                    style="text-align: left; color: red"
                    class="span4"
                  ></money>
                </div>
              </div>
            </td>
             <td>
                <div class="control-group">
                <label class="control-label">exonéré</label>
                <div class="controls">
                  <select v-model="editFacture.exonere" class="span4">
                  
                    <option value="0">Oui</option>
                     <option value="1">Non</option>
                  </select>
                
                </div>
              </div>
              </td>
           
          </tr>
          <tr>
             <td>
              <div class="control-group">
                <label class="control-label">Montant Ht</label>
                <div class="controls">
                 
                  <money
                    :value="MontantFactureHtModifier"
                    style="text-align: left; color: red"
                    class="span4"
                  ></money>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Taux</label>
                <div class="controls">
 <input type="text" 
                         class="span4"
                        :value="afficherEnorereModifeir"
                         readonly
                  />

                </div>
              </div>
            </td>
              <td >
              <div class="control-group">
                <label class="control-label" >Montant Tva</label>
                <div class="controls">
                 
<money :value="montantTvaModifier"  readonly  style="text-align:left;color:red;font-size:16px"  class="span4"></money>
                </div>
              </div>
            </td>
            
          </tr>
          <tr>
          <td>
              <div class="control-group">
                <label class="control-label">Montant TTC</label>
                <div class="controls">
                  <!-- <input
                type="text"
                :value="MontantFactureHt"
                class="span4"
                readonly
              /> -->
                  <money
                    :value="MontantFactureTTCModifier"
                    style="text-align: left; color: red"
                    class="span4"
                  ></money>
                </div>
              </div>
            </td>
            </tr>
        </table>
      </div>
      <div class="modal-footer">
        <a @click.prevent="FonctionModifierFacture()" class="btn btn-primary" href="#"
          >Modifer</a
        >
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>



    
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { admin, dcf, noDCfNoAdmin } from "@/Repositories/Auth";
 import {  ModelListSelect } from 'vue-search-select'
import moment from "moment";
// import facture from '../Facture/facture.vue'
import { formatageSomme } from "@/Repositories/Repository";
import 'vue-search-select/dist/VueSearchSelect.css'
export default {
  components: {
     ModelListSelect,
    //  facture
  },
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add",
        },
      ],
      liste: [],

      info_pdf: false,
      formData: {
        unite_administrative_id: "",
        activite_id: "",
        ligne_economique_id: "",
      },
      formData78: {
        typeOp: "OP Annulation",
      },
      editpiece: {},
      formData5: {
        Auteur_id: "2",
      },
      formData9: {
        exonere: 1,
      },
      formData1: {
        date_piece: "",
        reference: "",
        libelle: "",
      },
      detailOpProvisoire: {
        activite_id: "",
        typedepense: "",
      },
      formData8: {},
      formData2: {
        numeromarche: "",
      },
     FormDataFacture: {
        exonere: 0,
      },
      editFacture:{},
      message_mandater: "",
    };
  },

  // created() {

  //     this.detailOpProvisoire=this.gettersgestionOrdrePaiement.find(item=>item.id==this.$route.params.id  )

  // },
  computed: {
    admin: admin,
    dcf: dcf,
    noDCfNoAdmin: noDCfNoAdmin,
    ...mapGetters("Utilisateurs", [
      "getterAffectionServiceCF",
      "getterUtilisateur",
      "getterAffectation",
      "getterUniteAdministrativeByUser",
    ]),
    ...mapGetters("personnelUA", [
      "FichierJoinDmdEngagement",
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
    // ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires"]),
    ...mapGetters("parametreGenerauxBudgetaire", ["plans_budgetaires"]),
    ...mapGetters("SuiviImmobilisation", ["services"]),

    ...mapGetters("bienService", [
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
    ...mapGetters("parametreGenerauxSourceDeFinancement", [
      "sources_financements",
      "types_financements",
    ]),

 
SoustratMontantEngage(){
  if(this.RecupererTypeOp(this.detailOpProvisoire.numero_ordre_paiement)==1){
    return -this.RecupererMontantEngage(this.detailOpProvisoire.numero_ordre_paiement)
  }
  else{
    return this.RecupererMontantEngage(this.detailOpProvisoire.numero_ordre_paiement)
  }
},

numeroOp() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.numero_ordre_paiement;
          }
          return 0;
        }
      };
    },
    RecupererTypeOp() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.type_ordre_paiement;
          }
          return 0;
        }
      };
    },
     RecupererNumeroOp() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.numero_ordre_paiement;
          }
          return 0;
        }
      };
    },
afficheNumeroopProvisoire(){
  return this.gettersgestionOrdrePaiement.filter(item=>item.type_ordre_paiement==1 && item.decision_cf==8 || item.type_ordre_paiement==1 && item.decision_cf==9 || item.type_ordre_paiement==2 &&  item.decision_cf==8 || item.type_ordre_paiement==2 &&  item.decision_cf==9 || item.type_ordre_paiement==4 &&  item.decision_cf==8 || item.type_ordre_paiement==4 &&  item.decision_cf==9)
},
  RecupererDecisionCf() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.decision_cf;
          }
          return 0;
        }
      };
    },
     RecupererDateViseCf() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.date_decision_cf;
          }
          return 0;
        }
      };
    },
    RecupererDateBenef() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.gestionnaire_credit_date;
          }
          return 0;
        }
      };
    },
     RecupererNomGestionnaire() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.gestionnaire_credit_non;
          }
          return 0;
        }
      };
    },
    RecupererIdTypeFinancement() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.type_financement_id;
          }
          return 0;
        }
      };
    },
     RecupererIdSousFinancement() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.source_financement_id;
          }
          return 0;
        }
      };
    },
     RecupererFonction() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.gestionnaire_credit_fonction;
          }
          return 0;
        }
      };
    },
afficheDecisionCf(){
  if(this.RecupererDecisionCf(this.detailOpProvisoire.numero_ordre_paiement)==8)
  {
    return 'Vise'
  }
  else if(this.RecupererDecisionCf(this.detailOpProvisoire.numero_ordre_paiement)==9){
    return 'Vise avec Observation'
  }
 else{
   return ''
 }
 
},



       RecupererNom() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.nom_autre_depense;
          }
          return 0;
        }
      };
    },
      RecupererCOMPTE() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.compte_autre_depense;
          }
          return 0;
        }
      };
    },
    RecupererADRESSE() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.adresse;
          }
          return 0;
        }
      };
    },
     RecupererBANCAIRES() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.reference_autre_depense;
          }
          return 0;
        }
      };
    },
    RecupererEntreprise() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.entreprise_id;
          }
          return 0;
        }
      };
    },
    RecupererObjet() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.odjet_autre_depense;
          }
          return 0;
        }
      };
    },
    RecupererLivrable() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.livrable_autre_depense;
          }
          return 0;
        }
      };
    },
    RecupererBeneficiaire() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.beneficiaire_autre_depense;
          }
          return 0;
        }
      };
    },
   
       RecupererDure() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.dure_autre_depense;
          }
          return 0;
        }
      };
    },
     RecupererMontantEngage() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.montant_ordre_paiement;
          }
          return 0;
        }
      };
    },
     RecupererModePaiement() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.mode_paiement_id;
          }
          return 0;
        }
      };
    },
    RecupererIdMarche() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.marche_id;
          }
          return 0;
        }
      };
    },
 RecupererIdSection() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.section_id;
          }
          return 0;
        }
      };
    },
     
      RecupererIdProgramme() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.programme_id;
          }
          return 0;
        }
      };
    },
     RecupererIdAction() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.action_id;
          }
          return 0;
        }
      };
    },
     RecupererTypeDepense() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.typedepense;
          }
          return 0;
        }
      };
    },
    RecupererIdActivite() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.activite_id;
          }
          return 0;
        }
      };
    },
    RecupererIdEconomique() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.ligne_economique_id;
          }
          return 0;
        }
      };
    },
     RecupererIdSousBudget() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.sous_budget_id;
          }
          return 0;
        }
      };
    },
    RecupererIdUa() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.unite_administrative_id;
          }
          return 0;
        }
      };
    },
 RecuperereTaux() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersDossierFacturePiece.find((qtreel) => qtreel.numero_op_hors_sib == id);

          if (qtereel) {
            return qtereel.taux;
          }
          return 0;
        }
      };
    },

    tailleOpEnregistrer() {
      return this.gettersgestionOrdrePaiement.length + 1;
    },
    libelleSousBudget() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getSousBudget.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.activite_enfant;
          }
          return 0;
        }
      };
    },
    recupererDureMarche() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.acteEffetFinanciers.find(
            (qtreel) => qtreel.marche_id == id
          );

          if (qtereel) {
            return qtereel.duree;
          }
          return 0;
        }
      };
    },
    recupererLibelleModePaiement() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.modepaiements.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },
    recupererNomTypeDepense() {
      if (this.RecupererTypeDepense(this.detailOpProvisoire.numero_ordre_paiement) == "Autres") {
        return "Autres";
      } else if (this.RecupererTypeDepense(this.detailOpProvisoire.numero_ordre_paiement) == "Marche") {
        return "Marche";
      } else {
        return "";
      }
    },

    Engagementsantérieurs() {
      if (
        this.comparaison(this.RecupererIdActivite(this.detailOpProvisoire.numero_ordre_paiement)) ==
        this.RecupererIdActivite(this.detailOpProvisoire.numero_ordre_paiement)
      ) {
        return (
          parseFloat(
            this.EngagementsantérieursSousBudget(
              this.RecupererIdSousBudget(this.detailOpProvisoire.numero_ordre_paiement),
              this.RecupererIdEconomique(this.detailOpProvisoire.numero_ordre_paiement)
            )
          ) - parseFloat(this.RecupererMontantEngage(this.detailOpProvisoire.numero_ordre_paiement))
        );
      } else {
        return (
          parseFloat(
            this.EngagementsantérieursUa(
              this.RecupererIdUa(this.detailOpProvisoire.numero_ordre_paiement),
              this.RecupererIdEconomique(this.detailOpProvisoire.numero_ordre_paiement)
            )
          ) - parseFloat(this.RecupererMontantEngage(this.detailOpProvisoire.numero_ordre_paiement))
        );
      }
    },
    EngagementsantérieursUa() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.unite_administrative_id == id &&
                qtreel.ligne_economique_id == id1 &&
                qtreel.decision_cf == 8
            )
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
              0
            )
            .toFixed(0);
        }
      };
    },
    EngagementsantérieursSousBudget() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.sous_budget_id == id &&
                qtreel.ligne_economique_id == id1 &&
                qtreel.decision_cf == 8
            )
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
              0
            )
            .toFixed(0);
        }
      };
    },
    Disponiblebudgétaire() {
      const val =
        parseFloat(this.fonctionPourVideLeChamp) -
        parseFloat(this.Cumulengagements);
      return parseFloat(val).toFixed(0);
    },

    Cumulengagements() {
      const val =
        parseFloat(this.Engagementsantérieurs) +
        parseFloat(this.RecupererMontantEngage(this.detailOpProvisoire.numero_ordre_paiement));
      return parseFloat(val).toFixed(0);
    },

    CumulEngagement() {
      const val =
        parseFloat(this.totalMontantHT) * parseFloat(this.afficherEnorere2);

      if (val) {
        return parseInt(val).toFixed(0);
      }

      return 0;
    },

    montantMarche() {
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

    AfficheNumeroMarche() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.acteEffetFinanciers.find(
            (qtreel) => qtreel.marche_id == id
          );

          if (qtereel) {
            return qtereel.numero_marche;
          }
          return 0;
        }
      };
    },
    AfficheTypeFinancement() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.types_financements.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },
    AfficheSourceFinancement() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.sources_financements.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
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

    fonctionPourVideLeChamp() {
      if (
        this.comparaison(this.RecupererIdActivite(this.detailOpProvisoire.numero_ordre_paiement)) ==
        this.RecupererIdActivite(this.detailOpProvisoire.numero_ordre_paiement)
      ) {
        return this.CreditAutoriseSousBudget(
          this.RecupererIdSousBudget(this.detailOpProvisoire.numero_ordre_paiement),
          this.RecupererIdEconomique(this.detailOpProvisoire.numero_ordre_paiement)
        );
      } else {
        return this.CreditAutorise(
          this.RecupererIdUa(this.detailOpProvisoire.numero_ordre_paiement),
          this.RecupererIdEconomique(this.detailOpProvisoire.numero_ordre_paiement)
        );
      }
    },
    CreditAutoriseSousBudget() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          const qtereel = this.budgetEclate.find(
            (qtreel) =>
              qtreel.sous_budget_id == id && qtreel.ligneeconomique_id == id1
          );

          if (qtereel) {
            return qtereel.dotation;
          }
          return 0;
        }
      };
    },
    CreditAutorise() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          const qtereel = this.budgetEclate.find(
            (qtreel) =>
              qtreel.uniteadministrative_id == id &&
              qtreel.ligneeconomique_id == id1
          );

          if (qtereel) {
            return qtereel.dotation;
          }
          return 0;
        }
      };
    },

    RecupererlibelleLigneEconomique() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.budgetEclate.filter(
            (qtreel) =>
              qtreel.uniteadministrative_id == id &&
              qtreel.activite_id == id1 &&
              qtreel.sous_budget_id == 0
          );
        }
      };
    },
    libelleLigneEconomiqueParent() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.budgetEclate.find(
            (qtreel) => qtreel.ligneeconomique_id == id
          );

          if (qtereel) {
            return qtereel.ligne_budgetaire_parent_id;
          }
          return 0;
        }
      };
    },
    libelleLigneEconomique() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.plans_budgetaires.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.code.concat("  ", qtereel.libelle);
          }
          return 0;
        }
      };
    },
    afficheLesSousBudgetLigneBudgetaire() {
      return (id1, id) => {
        if (id1 != null && id1 != "" && id != null && id != "") {
          return this.budgetEclate.filter(
            (qtreel) => qtreel.activite_id == id1 && qtreel.sous_budget_id == id
          );
        }
      };
    },
    comparaison() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getSousBudget.find(
            (qtreel) => qtreel.activite_parent_id == id
          );

          if (qtereel) {
            return qtereel.activite_parent_id;
          }
          return 0;
        }
      };
    },
    RecupererSousBudget() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.getSousBudget.filter(
            (qtreel) =>
              qtreel.unite_administrative_id == id &&
              qtreel.activite_parent_id == id1 &&
              qtreel.execice == this.anneeAmort
          );
        }
      };
    },

    filtrerActivite() {
      return (id) => {
        if (id != null && id != "") {
          return this.groupeActiviteBudget.filter(
            (qtreel) =>
              qtreel[0].ua_id == id &&
              qtreel[0].actived == 1 &&
              qtreel[0].exercicebudget_id == this.anneeAmort
          );
        }
      };
    },
    recupereLeNumeroCompte() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.comptes.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.rib;
          }
          return "";
        }
      };
    },
    recupereLeNumeroCompteid() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.acteEffetFinanciers.find(
            (qtreel) => qtreel.entreprise_id == id
          );

          if (qtereel) {
            return qtereel.compte_id;
          }
          return "";
        }
      };
    },

    cumulMontantMarche() {
      const val =
        parseFloat(this.TotalGeneralDemandeEngagement) +
        parseFloat(this.cumulMarche(this.formData2.numero_marche));

      if (val) {
        return parseInt(val).toFixed(0);
      }

      return 0;
    },

    cumulReservation() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersDossierMandat
            .filter(
              (qtreel) =>
                this.numeroReservation(qtreel.demande_engagement_id) == id
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.montant_engage),
              0
            )
            .toFixed(0);
        }
      };
    },

    numeroReservation() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersDemandeEngagement.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.numero_ordre_paiement_systeme;
          }
          return "";
        }
      };
    },

    cumulMarche() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersDossierMandat
            .filter(
              (qtreel) => this.numeroMarche(qtreel.demande_engagement_id) == id
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.montant_engage),
              0
            )
            .toFixed(0);
        }
      };
    },

    numeroMarche() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersDemandeEngagement.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.numero_marche;
          }
          return "";
        }
      };
    },
    ListeDesMarcheAtribuer() {
      return (id) => {
        if (id != null && id != "") {
          return this.listedesMarcheUa.filter(
            (qtreel) => qtreel.unite_administrative_id == id
          );
        }
      };
    },
    listedesMarcheUa() {
      if (this.noDCfNoAdmin) {
        let colect = [];
        this.acteEffetFinanciers.filter((item) => {
          let val = this.getterUniteAdministrativeByUser.find(
            (row) => row.unite_administrative_id == item.unite_administrative_id
          );
          if (val != undefined) {
            colect.push(item);
            return item;
          }
        });
        return colect;
      }

      return this.acteEffetFinanciers;
    },

    ListeDesMarcheAttribuer() {
      return (id) => {
        if (id != null && id != "") {
          return this.acteEffetFinanciers.filter(
            (qtreel) => qtreel.unite_administrative_id == id
          );
        }
      };
    },

    affcherTauxEnCours() {
      const norme = this.taux.find((normeEquipe) => normeEquipe.encours == 1);

      if (norme) {
        return norme.libelle;
      }
      return 0;
    },
    tauxArrondit() {
      const norme = this.taux.find((normeEquipe) => normeEquipe.encours == 1);

      if (norme) {
        return norme.arrondit;
      }
      return 0;
    },

   montantTva() {
      const val =
        parseFloat(this.FormDataFacture.prix_unitaire) * parseFloat(this.afficherEnorere);

      if (val) {
        return parseInt(val).toFixed(0);
      }

      return 0;
    },
    montantTvaModifier() {
      const val =
        parseFloat(this.editFacture.prix_unitaire) * parseFloat(this.afficherEnorereModifeir);

      if (val) {
        return parseInt(val).toFixed(0);
      }

      return 0;
    },
    afficherEnorereModifeir() {
      if (this.editFacture.exonere == 0) {
        return 0;
      } else {
        return this.tauxArrondit;
      }
    },
    afficherEnorere() {
      if (this.FormDataFacture.exonere == 0) {
        return 0;
      } else {
        return this.tauxArrondit;
      }
    },
    
    SommeDesDmdParBonCommande() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersDossierFacturePiece
            .filter((qtreel) => qtreel.numero_op_hors_sib == id)
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.total_facture_ht),
              0
            )
            .toFixed(0);
        }
      };
    },
     MontantFactureTTCModifier() {
      const val =
        parseFloat(this.MontantFactureHtModifier) +
        parseFloat(this.montantTvaModifier);

      if (val) {
        return parseInt(val).toFixed(0);
      }

      return 0;
    },
     MontantFactureTTC() {
      const val =
        parseFloat(this.MontantFactureHt) +
        parseFloat(this.montantTva);

      if (val) {
        return parseInt(val).toFixed(0);
      }

      return 0;
    },
    listeFacturePiece() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersDossierFacturePiece.filter(
            (qtreel) => qtreel.numero_op_hors_sib == id
          );
        }
      };
    },
    MontantFactureHt() {
      const val =
        parseFloat(this.FormDataFacture.prix_unitaire) *
        parseFloat(this.FormDataFacture.quantite);

      if (val) {
        return parseInt(val).toFixed(0);
      }

      return 0;
    },
    listePieceJustifica() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.typeFactures.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.libelle;
          }
          return "";
        }
      };
    },
    afficheFichierJoint() {
      return (id, id2) => {
        if (id != null && id != "" && id2 != null && id2 != "") {
          const qtereel = this.FichierJoinDmdEngagement.find(
            (qtreel) =>
              qtreel.numero_ordrepaiement == id && qtreel.numero_fichier == id2
          );

          if (qtereel) {
            return qtereel.fichier;
          }
          return "";
        }
      };
    },
    calculCumultresor() {
      const val =
        parseFloat(
          this.CreditAutoriseTresor(this.formData.ligne_economique_id)
        ) - parseFloat(this.formData.montant_tresor);
      return parseFloat(val).toFixed(0);
    },

    calculCumul() {
      const val =
        parseFloat(this.TotalGeneralDemandeEngagement) +
        parseFloat(this.CumulDemande(this.formData.ligne_economique_id));
      return parseFloat(val).toFixed(0);
    },

    MontantDisponible() {
      const val =
        parseFloat(this.CreditAutorise(this.formData.ligne_economique_id)) -
        parseFloat(this.calculCumul);
      return parseFloat(val).toFixed(0);
    },
    CumulDemande: function () {
      return (id) => {
        if (id != "") {
          let valInite = 0;
          return this.gettersDemandeEngagement
            .filter(
              (normeEquipe) =>
                (normeEquipe.ligne_economique_id == id &&
                  normeEquipe.decision_cf == 8) ||
                (normeEquipe.ligne_economique_id == id &&
                  normeEquipe.decision_cf == 9)
            )
            .reduce(function (total, currentVal) {
              return total + parseFloat(currentVal.total_general);
            }, valInite);
        }
      };
    },
    //   CreditAutorise() {
    //   return id => {
    //     if (id != null && id != "") {
    //        const qtereel = this.budgetGeneral.find(qtreel => qtreel.economique_id == id && qtreel.actived==1);

    //   if (qtereel) {

    //        return qtereel.Dotation_Initiale;
    //   }
    //   return ""
    //     }
    //   };
    // },
    CreditAutoriseTresor() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.budgetGeneral.find(
            (qtreel) =>
              qtreel.economique_id == id &&
              qtreel.actived == 1 &&
              qtreel.typefinancement_id == 14
          );

          if (qtereel) {
            return qtereel.Dotation_Initiale;
          }
          return 0;
        }
      };
    },
    CreditAutoriseDon() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.budgetGeneral.find(
            (qtreel) =>
              qtreel.economique_id == id &&
              qtreel.actived == 1 &&
              qtreel.typefinancement_id == 13
          );

          if (qtereel) {
            return qtereel.Dotation_Initiale;
          }
          return 0;
        }
      };
    },
    CreditAutoriseEmprunt() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.budgetGeneral.find(
            (qtreel) =>
              qtreel.economique_id == id &&
              qtreel.actived == 1 &&
              qtreel.typefinancement_id == 15
          );

          if (qtereel) {
            return qtereel.Dotation_Initiale;
          }
          return 0;
        }
      };
    },
    anneeAmort() {
      const norme = this.exercices_budgetaires.find(
        (normeEquipe) => normeEquipe.encours == 1
      );

      if (norme) {
        return norme.annee;
      }
      return 0;
    },
    libelleAction() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.plans_activites.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.code;
          }
          return 0;
        }
      };
    },
    NomActivite() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.plans_activites.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.code.concat("  ", qtereel.libelle);
          }
          return 0;
        }
      };
    },

    libelleProgramme() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.plans_programmes.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.code.concat("  ", qtereel.libelle);
          }
          return 0;
        }
      };
    },
    libelleSection() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.sections.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.code_section.concat("  ", qtereel.nom_section);
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
            return qtereel.numero_marche.concat("  ", qtereel.objet);
          }
          return 0;
        }
      };
    },

    idSection() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.budgetGeneral.find(
            (qtreel) => qtreel.economique_id == id
          );

          if (qtereel) {
            return qtereel.section_id;
          }
          return 0;
        }
      };
    },
    idProgramme() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.budgetGeneral.find(
            (qtreel) => qtreel.economique_id == id
          );

          if (qtereel) {
            return qtereel.program_id;
          }
          return 0;
        }
      };
    },
    idActivite() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.budgetGeneral.find(
            (qtreel) => qtreel.economique_id == id
          );

          if (qtereel) {
            return qtereel.activite_id;
          }
          return 0;
        }
      };
    },
    objetMarche() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.marches.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.objet;
          }
          return "Non renseigné";
        }
      };
    },
    geolocalisation() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.marches.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.sous_prefecture_id;
          }
          return "Non renseigné";
        }
      };
    },
    livrable() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.marches.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.livrable;
          }
          return "Non renseigné";
        }
      };
    },
    Numero_CC() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.entreprises.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.numero_cc;
          }
          return 0;
        }
      };
    },
    Numero_Nom_Entreprise() {
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
    Numero_adresse_Entreprise() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.entreprises.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.adresse;
          }
          return 0;
        }
      };
    },
    libelleBanque() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.banques.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },

    idAction() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.budgetGeneral.find(
            (qtreel) => qtreel.economique_id == id
          );

          if (qtereel) {
            return qtereel.action_id;
          }
          return 0;
        }
      };
    },
    libelleUniteAdministrative() {
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

    listeDesUa() {
      if (this.noDCfNoAdmin) {
        let colect = [];
        this.uniteAdministratives.filter((item) => {
          let val = this.getterUniteAdministrativeByUser.find(
            (row) => row.unite_administrative_id == item.id
          );
          if (val != undefined) {
            colect.push(item);
            return item;
          }
        });
        return colect;
      }

      return this.uniteAdministratives;
    },
    TotalGeneralDemandeEngagement() {
      const val =
        parseFloat(this.formData.montant_tresor) +
        parseFloat(this.formData.montant_don) +
        parseFloat(this.formData.montant_emprunt);
      return parseFloat(val).toFixed(0);
    },

    ligneEconomique() {
      return (id, id2) => {
        if (id != null && id != "" && id2 != null && id2 != "") {
          return this.budgetGeneral.filter(
            (qtreel) =>
              qtreel.unite_administrative_id == id &&
              qtreel.gdenature_id == id2 &&
              qtreel.actived == 1
          );
        }
      };
    },
    numeroOrdre() {
      return (id) => {
        if (id != null && id != "") {
          return (
            this.gettersnomPieceJustificative.filter(
              (qtreel) =>
                qtreel.numero_ordrepaiement == id &&
                qtreel.etat_piece == "proforma"
            ).length + 1
          );
        }
      };
    },
    numeroOrdreDefinitive() {
      return (id) => {
        if (id != null && id != "") {
          return (
            this.gettersnomPieceJustificative.filter(
              (qtreel) =>
                qtreel.numero_ordrepaiement == id &&
                qtreel.etat_piece == "definitive"
            ).length + 1
          );
        }
      };
    },
    listePieceJustificative() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersnomPieceJustificative.filter(
            (qtreel) =>
              qtreel.numero_op_hors_sib == id && qtreel.etat_piece == "proforma"
          );
        }
      };
    },
    listePieceJustificativeOpDefinitive() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersnomPieceJustificative.filter(
            (qtreel) =>
              qtreel.numero_op_hors_sib == id 
          );
        }
      };
    },
    idEntreprise() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.acteEffetFinanciers.find(
            (qtreel) => qtreel.numero_marche == id
          );

          if (qtereel) {
            return qtereel.entreprise_id;
          }
          return 0;
        }
      };
    },

    idAutreDepense() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersDossierAutreDepense.find(
            (qtreel) => qtreel.reference == id
          );

          if (qtereel) {
            return qtereel.id;
          }
          return 0;
        }
      };
    },
    idActeeffect() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.acteEffetFinanciers.find(
            (qtreel) => qtreel.numero_marche == id
          );

          if (qtereel) {
            return qtereel.id;
          }
          return 0;
        }
      };
    },

    afficherAttributMarche() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.marches.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.attribue;
          }
          return 0;
        }
      };
    },
  },

  methods: {
    ...mapActions("bienService", [
      "ajouterPieceJustificative",
      "modifierPieceJustificative",
      "supprimerPieceJustificative",
      "ajouterDemandeEngagement",
      "ajouterDossierFacture",
      "modifierDossierFacture",
      "supprimerDossierFacture",
      "ajouterGestionOrdrePaiement",
      "modifierGestionOrdrePaiement"
    ]),
    ...mapActions("personnelUA", ["ajouterFichierJointDmd"]),
afficherModalAjouterFacture() {
      this.$("#exampleModal11").modal({
        backdrop: "static",
        keyboard: false,
      });
    },
    pagePrecedent() {
      window.history.back();
    },
    genererEnPdf() {
      this.$htmlToPaper("printMe");
    },

    

    OnchangeFichier(e) {
      const files = e.target.files;
      this.selectedFile = event.target.files[0];
      Array.from(files).forEach((file) => this.addFichierPDF(file));
    },
    addFichierPDF(file) {
      if (!file.type.match("application/pdf")) {
        this.info_pdf = true;
        console.log(`${file.name} le fichier doit etre un PDF`);
        return;
      }
      this.info_pdf = false;
      let reader = new FileReader();
      let vm = this;
      reader.onload = (e) => {
        vm.imagePDF = "pdf.png";
        vm.namePDF = file.name;
        vm.fichierPDF = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    afficherModalModifierTypeTexte(id) {
      this.$("#ModifierexampleModal").modal({
        backdrop: "static",
        keyboard: false,
      });

      this.editpiece = this.gettersnomPieceJustificative.find(
        (item) => item.id == id
      );
    },
    // fonction pour vider l'input modification
    modifierTypeTexteLocal() {
      this.modifierPieceJustificative(this.editpiece);
      this.$("#ModifierexampleModal").modal("hide");
      // this.editTypeTexte = {
      //   code: "",
      //   libelle: ""
      // };
    },
    AjoutePieceJustific() {
       
        this.intitule =
          this.anneeAmort + "" + this.formData.numero_ordre_paiement;
        var nouvelObjetProforma = {
          numero_ordre: this.numeroOrdre(this.formData.numero_ordre_paiement),
          numero_ordrepaiement: this.formData.numero_ordre_paiement,
          numero_ordre_paiement_combine: this.intitule,
          libelle: this.formData1.libelle,
          reference: this.formData1.reference,
          date_piece: this.formData1.date_piece,
          etat_piece: "proforma",
        };

        this.ajouterPieceJustificative(nouvelObjetProforma);
        this.ajouterFichierJoin();
        this.$("#exampleModal").modal("hide");
        this.formData1 = {
          numero_ordrepaiement: "",
          numero_ordre_paiement_combine: "",
          libelle: "",
          reference: "",
          date_piece: "",
          }
        },
      // } else {
      //   this.intitule =
      //     this.anneeAmort + "" + this.formData.numero_ordre_paiement;
      //   var nouvelObjetdefinitive = {
      //     numero_ordre: this.numeroOrdreDefinitive(
      //       this.formData.numero_ordre_paiement
      //     ),
      //     numero_ordrepaiement: this.formData.numero_ordre_paiement,
      //     numero_ordre_paiement_combine: this.intitule,
      //     libelle: this.formData1.libelle,
      //     reference: this.formData1.reference,
      //     date_piece: this.formData1.date_piece,
      //     etat_piece: "definitive",
      //   };

      //   this.ajouterPieceJustificative(nouvelObjetdefinitive);
      //   this.ajouterFichierJoin();
      //   this.$("#exampleModal").modal("hide");
      //   this.formData1 = {
      //     numero_ordrepaiement: "",
      //     numero_ordre_paiement_combine: "",
      //     libelle: "",
      //     reference: "",
      //     date_piece: "",
      //   };
      // }
    // },

    ajouterFichierJoin() {
      if (this.formData.type_procedure_id == "Engagement par Bon de Commande") {
        const formData = new FormData();
        this.intitule =
          this.anneeAmort + "" + this.formData.numero_ordre_paiement;
        formData.append("fichier", this.selectedFile, this.selectedFile.name);

        formData.append("numero_ordre_paiement_combine", this.intitule);
        formData.append(
          "numero_ordrepaiement",
          this.formData.numero_ordre_paiement
        );
        formData.append(
          "numero_fichier",
          this.numeroOrdre(this.formData.numero_ordre_paiement)
        );
        formData.append("etat_piece", "proforma");
        let config = {
          header: {
            "Content-Type": "multipart/form-data",
          },
        };
        this.ajouterFichierJointDmd(formData, config);
      } else {
        const formData = new FormData();
        this.intitule =
          this.anneeAmort + "" + this.formData.numero_ordre_paiement;
        formData.append("fichier", this.selectedFile, this.selectedFile.name);

        formData.append("numero_ordre_paiement_combine", this.intitule);
        formData.append(
          "numero_ordrepaiement",
          this.formData.numero_ordre_paiement
        );
        formData.append(
          "numero_fichier",
          this.numeroOrdre(this.formData.numero_ordre_paiement)
        );
        formData.append("etat_piece", "definitive");
        let config = {
          header: {
            "Content-Type": "multipart/form-data",
          },
        };
        this.ajouterFichierJointDmd(formData, config);
      }
    },


    ajouterFacture() {
      
       
        var nouvelObjetproforma = {
          ...this.FormDataFacture,
           total_facture_ht: this.MontantFactureHt,
          numero_op_hors_sib: this.formData.numero_ordre_paiement,
          etat_acticle: "definitive",
          montant_ttc:this.MontantFactureTTC,
          taux:this.afficherEnorere,
          exonere:this.FormDataFacture.exonere
        };

        this.ajouterDossierFacture(nouvelObjetproforma);
        this.FormDataFacture = {
          designation: "",
          quantite: "0",
          prix_unitaire: "0",
          total_facture_ht: "0",
        };
      
    },

    AjouterOrdrePaiementAnulation() {
      if (this.RecupererTypeOp(this.detailOpProvisoire.numero_ordre_paiement)== 1 || this.RecupererTypeOp(this.detailOpProvisoire.numero_ordre_paiement)== 4) {
        this.intitule =
          this.anneeAmort +
          "-" +
          this.tailleOpEnregistrer +
          "-" +
          this.formData.numero_ordre_paiement;
        var nouvelObjetOrdrePaiement1 = {
          exercice: this.anneeAmort,
          // id:this.recupererIdOpProvisoire(this.recupererNumeroOPProvisoire(this.formData2.numero_oP_provisoire)),
          numero_ordre_paiement: this.intitule,
          type_ordre_paiement: 3,
          date_op: this.formData.date_op,
          id_op_definitif: this.detailOpProvisoire.numero_ordre_paiement,
          section_id: this.RecupererIdSection(this.detailOpProvisoire.numero_ordre_paiement),
          programme_id: this.RecupererIdProgramme(this.detailOpProvisoire.numero_ordre_paiement),
          unite_administrative_id: this.RecupererIdUa(this.detailOpProvisoire.numero_ordre_paiement),
          action_id: this.RecupererIdAction(this.detailOpProvisoire.numero_ordre_paiement),
          sous_budget_id: this.RecupererIdSousBudget(this.detailOpProvisoire.numero_ordre_paiement),
          activite_id: this.RecupererIdActivite(this.detailOpProvisoire.numero_ordre_paiement),
          ligne_economique_id: this.RecupererIdEconomique(this.detailOpProvisoire.numero_ordre_paiement),
          typedepense: this.RecupererTypeDepense(this.detailOpProvisoire.numero_ordre_paiement),

          mode_paiement_id: this.RecupererModePaiement(this.detailOpProvisoire.numero_ordre_paiement),
          entreprise_id: this.RecupererEntreprise(this.detailOpProvisoire.numero_ordre_paiement),
          marche_id: this.RecupererIdMarche(this.detailOpProvisoire.numero_ordre_paiement),
          type_financement_id: this.RecupererIdTypeFinancement(this.detailOpProvisoire.numero_ordre_paiement),
          source_financement_id: this.RecupererIdSousFinancement(this.detailOpProvisoire.numero_ordre_paiement),
          montant_ordre_paiement: this.RecupererMontantEngage(this.detailOpProvisoire.numero_ordre_paiement),

          gestionnaire_credit_non: this.RecupererNomGestionnaire(this.detailOpProvisoire.numero_ordre_paiement),
          gestionnaire_credit_date: this.RecupererDateBenef(this.detailOpProvisoire.numero_ordre_paiement),
          gestionnaire_credit_fonction: this.RecupererFonction(this.detailOpProvisoire.numero_ordre_paiement),

          controleur_financier_id: this.recupererIdUser(
            this.recupererIdServiceCF(
              this.RecupererIdUa(this.detailOpProvisoire.numero_ordre_paiement)
            )
          ),
          nom_autre_depense: this.RecupererNom(this.detailOpProvisoire.numero_ordre_paiement),
          compte_autre_depense: this.RecupererCOMPTE(this.detailOpProvisoire.numero_ordre_paiement),
          adresse: this.RecupererADRESSE(this.detailOpProvisoire.numero_ordre_paiement),
          reference_autre_depense: this.RecupererBANCAIRES(this.detailOpProvisoire.numero_ordre_paiement),
          odjet_autre_depense: this.RecupererObjet(this.detailOpProvisoire.numero_ordre_paiement),
          livrable_autre_depense: this.RecupererLivrable(this.detailOpProvisoire.numero_ordre_paiement),
          beneficiaire_autre_depense: this.RecupererBeneficiaire(this.detailOpProvisoire.numero_ordre_paiement),
          geo_autre_depense: 0,
          dure_autre_depense: this.RecupererDure(this.detailOpProvisoire.numero_ordre_paiement),
        };
        
var objetModification = {
id:this.detailOpProvisoire.numero_ordre_paiement,
 exercice: this.anneeAmort,
          // id:this.recupererIdOpProvisoire(this.recupererNumeroOPProvisoire(this.formData2.numero_oP_provisoire)),
          numero_ordre_paiement: this.RecupererNumeroOp(this.detailOpProvisoire.numero_ordre_paiement),
          type_ordre_paiement: this.RecupererTypeOp(this.detailOpProvisoire.numero_ordre_paiement),
         
          section_id: this.RecupererIdSection(this.detailOpProvisoire.numero_ordre_paiement),
          programme_id: this.RecupererIdProgramme(this.detailOpProvisoire.numero_ordre_paiement),
          unite_administrative_id: this.RecupererIdUa(this.detailOpProvisoire.numero_ordre_paiement),
          action_id: this.RecupererIdAction(this.detailOpProvisoire.numero_ordre_paiement),
          sous_budget_id: this.RecupererIdSousBudget(this.detailOpProvisoire.numero_ordre_paiement),
          activite_id: this.RecupererIdActivite(this.detailOpProvisoire.numero_ordre_paiement),
          ligne_economique_id: this.RecupererIdEconomique(this.detailOpProvisoire.numero_ordre_paiement),
          typedepense: this.RecupererTypeDepense(this.detailOpProvisoire.numero_ordre_paiement),

          mode_paiement_id: this.RecupererModePaiement(this.detailOpProvisoire.numero_ordre_paiement),
          entreprise_id: this.RecupererEntreprise(this.detailOpProvisoire.numero_ordre_paiement),
          marche_id: this.RecupererIdMarche(this.detailOpProvisoire.numero_ordre_paiement),
          type_financement_id: this.RecupererIdTypeFinancement(this.detailOpProvisoire.numero_ordre_paiement),
          source_financement_id: this.RecupererIdSousFinancement(this.detailOpProvisoire.numero_ordre_paiement),
          montant_ordre_paiement: 0,

          gestionnaire_credit_non: this.RecupererNomGestionnaire(this.detailOpProvisoire.numero_ordre_paiement),
          gestionnaire_credit_date: this.RecupererDateBenef(this.detailOpProvisoire.numero_ordre_paiement),
          gestionnaire_credit_fonction: this.RecupererFonction(this.detailOpProvisoire.numero_ordre_paiement),

          controleur_financier_id: this.recupererIdUser(
            this.recupererIdServiceCF(
              this.RecupererIdUa(this.detailOpProvisoire.numero_ordre_paiement)
            )
          ),
          nom_autre_depense: this.RecupererNom(this.detailOpProvisoire.numero_ordre_paiement),
          compte_autre_depense: this.RecupererCOMPTE(this.detailOpProvisoire.numero_ordre_paiement),
          adresse: this.RecupererADRESSE(this.detailOpProvisoire.numero_ordre_paiement),
          reference_autre_depense: this.RecupererBANCAIRES(this.detailOpProvisoire.numero_ordre_paiement),
          odjet_autre_depense: this.RecupererObjet(this.detailOpProvisoire.numero_ordre_paiement),
          livrable_autre_depense: this.RecupererLivrable(this.detailOpProvisoire.numero_ordre_paiement),
          beneficiaire_autre_depense: this.RecupererBeneficiaire(this.detailOpProvisoire.numero_ordre_paiement),
          geo_autre_depense: 0,
          dure_autre_depense: this.RecupererDure(this.detailOpProvisoire.numero_ordre_paiement),
}
        this.ajouterGestionOrdrePaiement(nouvelObjetOrdrePaiement1);
        this.modifierGestionOrdrePaiement(objetModification)
        this.pagePrecedent();
        this.formData = {};
      } else {
        this.intitule =
          this.anneeAmort +
          "-" +
          this.tailleOpEnregistrer +
          "-" +
          this.formData.numero_ordre_paiement;
        var nouvelObjetOrdrePaiement2 = {
              exercice: this.anneeAmort,
          // id:this.recupererIdOpProvisoire(this.recupererNumeroOPProvisoire(this.formData2.numero_oP_provisoire)),
          numero_ordre_paiement: this.intitule,
          type_ordre_paiement: 3,
          date_op: this.formData.date_op,
          id_op_definitif: this.detailOpProvisoire.numero_ordre_paiement,
          section_id: this.RecupererIdSection(this.detailOpProvisoire.numero_ordre_paiement),
          programme_id: this.RecupererIdProgramme(this.detailOpProvisoire.numero_ordre_paiement),
          unite_administrative_id: this.RecupererIdUa(this.detailOpProvisoire.numero_ordre_paiement),
          action_id: this.RecupererIdAction(this.detailOpProvisoire.numero_ordre_paiement),
          sous_budget_id: this.RecupererIdSousBudget(this.detailOpProvisoire.numero_ordre_paiement),
          activite_id: this.RecupererIdActivite(this.detailOpProvisoire.numero_ordre_paiement),
          ligne_economique_id: this.RecupererIdEconomique(this.detailOpProvisoire.numero_ordre_paiement),
          typedepense: this.RecupererTypeDepense(this.detailOpProvisoire.numero_ordre_paiement),

          mode_paiement_id: this.RecupererModePaiement(this.detailOpProvisoire.numero_ordre_paiement),
          entreprise_id: this.RecupererEntreprise(this.detailOpProvisoire.numero_ordre_paiement),
          marche_id: this.RecupererIdMarche(this.detailOpProvisoire.numero_ordre_paiement),
          type_financement_id: this.RecupererIdTypeFinancement(this.detailOpProvisoire.numero_ordre_paiement),
          source_financement_id: this.RecupererIdSousFinancement(this.detailOpProvisoire.numero_ordre_paiement),
          montant_ordre_paiement: this.RecupererMontantEngage(this.detailOpProvisoire.numero_ordre_paiement),

          gestionnaire_credit_non: this.RecupererNomGestionnaire(this.detailOpProvisoire.numero_ordre_paiement),
          gestionnaire_credit_date: this.RecupererDateBenef(this.detailOpProvisoire.numero_ordre_paiement),
          gestionnaire_credit_fonction: this.RecupererFonction(this.detailOpProvisoire.numero_ordre_paiement),

          controleur_financier_id: this.recupererIdUser(
            this.recupererIdServiceCF(
              this.RecupererIdUa(this.detailOpProvisoire.numero_ordre_paiement)
            )
          ),
          nom_autre_depense: this.RecupererNom(this.detailOpProvisoire.numero_ordre_paiement),
          compte_autre_depense: this.RecupererCOMPTE(this.detailOpProvisoire.numero_ordre_paiement),
          adresse: this.RecupererADRESSE(this.detailOpProvisoire.numero_ordre_paiement),
          reference_autre_depense: this.RecupererBANCAIRES(this.detailOpProvisoire.numero_ordre_paiement),
          odjet_autre_depense: this.RecupererObjet(this.detailOpProvisoire.numero_ordre_paiement),
          livrable_autre_depense: this.RecupererLivrable(this.detailOpProvisoire.numero_ordre_paiement),
          beneficiaire_autre_depense: this.RecupererBeneficiaire(this.detailOpProvisoire.numero_ordre_paiement),
          geo_autre_depense: 0,
          dure_autre_depense: this.RecupererDure(this.detailOpProvisoire.numero_ordre_paiement),
        };

        this.ajouterGestionOrdrePaiement(nouvelObjetOrdrePaiement2);
        this.pagePrecedent();
        this.formData = {};
      }
    },

 
    afficherModalAjouterService() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false,
      });
    },

    apercuFacture() {
      this.$("#ApercuFacture").modal({
        backdrop: "static",
        keyboard: false,
      });
    },

    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
    formatageSomme: formatageSomme,
  },
};
</script>

<style scoped>
.taille {
  width: 70%;
  margin: 0 -40%;

}
.tailles {
  width: 55%;
  margin: 0 -30%;
}
.ApercuFacture1 {
  width: 64%;
  margin: 0 -30%;

  border: 2px solid #000;
}
</style>
