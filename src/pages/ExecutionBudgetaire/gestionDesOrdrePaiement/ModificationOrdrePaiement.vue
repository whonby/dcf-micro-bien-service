Ajouter Facture
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
            <h5>Modification de OP</h5>
             
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
                    >Type Ordre paiement
                    <code style="color: red; font-size: 16px">*</code></label
                  >
                  <div class="controls">
                    <select
                      v-model="formData.type_ordre_paiement"
                      class="span"
                      style="border: 1px solid #000"
                    >
                      <option></option>
                      <option value="1">ORDRE DE PAIEMENT DIRECT</option>
                      <option value="2">ORDRE DE PAIEMENT PROVISOIRE</option>
                      
                    </select>
                  </div>
                </div>
              </td> -->
              <td>
                <div class="control-group">
                  
                  <label
                    class="control-label"
                   
                    >Numéro OP Provisoire
                    <code style="color: red; font-size: 16px">*</code></label
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
                    >Date OP <code
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
                            <label class="control-label">Section
                                      
                                       
                                     
                                    </label>
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                :value="
                                  libelleSection(
                                    idSection(
                                      libelleLigneEconomiqueParent(
                                        formData.activite_id
                                      )
                                    )
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
                              >Programme/Dotation</label
                            >
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                :value="
                                  libelleProgramme(
                                    idProgramme(
                                      libelleLigneEconomiqueParent(
                                        formData.activite_id
                                      )
                                    )
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
                                  libelleAction(
                                    idAction(
                                      libelleLigneEconomiqueParent(
                                        formData.activite_id
                                      )
                                    )
                                  )
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
                          <label
                            >Unité Administrative
                            <code style="color: red; font-size: 16px">*</code>
                          </label>
                          <model-list-select
                            style="border: 1px solid #000"
                            class="wide"
                            :list="listeDesUa"
                            v-model="formData.unite_administrative_id"
                            option-value="id"
                            option-text="libelle"
                            placeholder=""
                          >
                          </model-list-select>
                          <code
                            style="color: red; font-size: 12px"
                            v-if="formData.unite_administrative_id == ''"
                            >Veuillez renseigner ce champ</code
                          >
                        </td>

                        <td>
                          <div class="control-group">
                            <label class="control-label"
                              >Activité
                              <code style="color: red; font-size: 16px"
                                >*</code
                              ></label
                            >
                            <div class="controls">
                              <select
                                v-model="formData.activite_id"
                                class="span"
                                style="border: 1px solid #000"
                              >
                                <option
                                  v-for="typeFact in filtrerActivite(
                                    formData.unite_administrative_id
                                  )"
                                  :key="typeFact[0].id"
                                  :value="typeFact[0].activite_id"
                                >
                                  {{ NomActivite(typeFact[0].activite_id) }}
                                </option>
                              </select>
                              <code
                                style="color: red; font-size: 12px"
                                v-if="formData.activite_id == ''"
                                >Veuillez renseigner ce champ</code
                              >
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Sous Bugdet</label>
                            <div class="controls">
                              <select
                                v-model="formData.sous_budget_id"
                                class="span"
                                style="border: 1px solid #000"
                              >
                                <option></option>
                                <option
                                  v-for="gdenature in RecupererSousBudget(
                                    formData.unite_administrative_id,
                                    formData.activite_id
                                  )"
                                  :key="gdenature.id"
                                  :value="gdenature.id"
                                >
                                  {{ gdenature.activite_enfant }}
                                </option>
                              </select>
                            </div>
                          </div>
                        </td>
                        <td>
                          <template
                            v-if="
                              comparaison(this.formData.activite_id) ==
                              this.formData.activite_id
                            "
                          >
                            <div class="control-group">
                              <label class="control-label"
                                >Classification Economique</label
                              >
                              <div class="controls">
                                <select
                                  v-model="formData.ligne_economique_id"
                                  class="span"
                                  style="border: 1px solid #000"
                                >
                                  <option></option>
                                  <option
                                    v-for="typeFact in LigneEconomiqueSousBudget"
                                    :key="typeFact.id"
                                    :value="typeFact"
                                  >
                                  
                                    {{
                                      libelleLigneEconomique(
                                        typeFact
                                      )
                                    }}
                                  </option>
                                </select>
                              </div>
                            </div>
                          </template>
                          <template v-else>
                            <div class="control-group">
                              <label class="control-label"
                                >Classification Economique</label
                              >
                              <div class="controls">
                                <select
                                  v-model="formData.ligne_economique_id"
                                  class="span"
                                  style="border: 1px solid #000"
                                >
                                  <option></option>
                                  <option
                                    v-for="typeFact in arrayExerciceDecompteBienService"
                                    :key="typeFact"
                                    :value="typeFact"
                                  >
                                    {{
                                      libelleLigneEconomique(
                                        typeFact
                                      )
                                    }}
                                  </option>
                                </select>
                              </div>
                            </div>
                          </template>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <table class="table table-bordered table-striped">
                  <tr>
                    <td>
                      <div class="control-group">
                        <label class="control-label">Type de depense</label>
                        <div class="controls">
                          <select
                            v-model="formData.typedepense"
                            class="span"
                            style="border: 1px solid #000"
                          >
                            <option value="Marche">Marché</option>
                             <option value="Personnel">Personnel</option>
                            <option value="Autres">Autres</option>
                          </select>
                        </div>
                      </div>
                    </td>

                     <td>
                       <div class="control-group">
                        <label class="control-label">Rattacher une Personne</label>
                        <div class="controls">
                          <select
                            v-model="formData.RattacherPers"
                            class="span"
                            style="border: 1px solid #000"
                          >
                            <option value="Non">Non</option>
                            <option value="Oui">Oui</option>
                          </select>
                        </div>
                      </div>
                    </td>
                    <td>
                       <div class="control-group">
                        <label class="control-label">Interim Sur Op</label>
                        <div class="controls">
                          <select
                            v-model="formData.imterim_op"
                            class="span"
                            style="border: 1px solid #000"
                          >
                            <option value="Non">Non</option>
                            <option value="Oui">Oui</option>
                          </select>
                        </div>
                      </div>
                    </td>
                  </tr>
                </table>


                <!-- test******** -->
                <div v-if="formData.imterim_op=='Oui'">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#ENGAGEMENT"
                    >VISA CONTRÔLEUR FINANCIER</a
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                    
                    <div id="ENGAGEMENT" class="tab-pane active">
                      <table
                        class="table table-bordered table-striped">
                      <tr>
                        <td colspan="">
                           <div class="control-group">
                            <label class="control-label">Date</label>
                            <div class="controls">
                              <input
                                type="date"
                                 v-model="formData.date_interim"
                                style="border: 1px solid #000"
                                class="span"
                              />
                            </div>
                          </div>
                        </td>
                        

                       <td>
                          <label
                            >Nom
                            <code style="color: red; font-size: 16px">*</code>
                          </label>
                          <model-list-select
                            style="border: 1px solid #000"
                            class="wide"
                            :list="getterUtilisateur"
                            v-model="formData.user_id_interim"
                            option-value="id"
                            option-text="name"
                            placeholder=""
                          >
                          </model-list-select>
                          <code
                            style="color: red; font-size: 12px"
                            v-if="formData.user_id_interim == ''"
                            >Veuillez renseigner ce champ</code
                          >
                        </td>


                        <td colspan="">
                           <div class="control-group">
                            <label class="control-label">Visa</label>
                            <div class="controls">
                              <input
                               v-model="formData.visa_interim"
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
                </div>
                <!-- ********lega --> 


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
                      v-if="formData.typedepense == 'Personnel'"
                    >
                   <tr>
                        
                        <td v-if="formData.RattacherPers=='Non'">
                      <div class="control-group">
                        <label class="control-label">Béneficiaire</label>
                        <div class="controls">
                          <select
                            v-model="formData.auteur_perso_id"
                            class="span"
                            style="border: 1px solid #000"
                          >
                            <option value="0"></option>
                            <option v-for="depense in PersonnelParUA(this.formData.unite_administrative_id)" :key="depense.id" 
               :value="depense.id">{{depense.matricule}} =>{{depense.nom}} {{depense.prenom}}</option>
                          </select>
                        </div>
                      </div>
                    </td>

                     <td v-if="formData.RattacherPers=='Oui'">
                      <div class="control-group">
                        <label class="control-label">Béneficiaire</label>
                        <div class="controls">
                          <select
                            v-model="formData.auteur_perso_id"
                            class="span"
                            style="border: 1px solid #000"
                          >
                            <option value="0"></option>
                            <option v-for="depense in PersonnelRattacher(this.formData.unite_administrative_id)" :key="depense.id" 
               :value="depense.id"> {{Personnelmatricule(depense.personne_rattacher)}} =>{{Personnelnom(depense.personne_rattacher)}} {{Personnelprenom(depense.personne_rattacher)}}</option>
                          </select>
                        </div>
                      </div>
                    </td>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label">Banque</label>

                            <div class="controls">
                              <input
                                :value="libelleBanque(Recup_Banque(formData.auteur_perso_id))"
                                type="text"
                                style="border: 1px solid #000"
                                class="span"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label">Compte Bancaires</label>

                            <div class="controls">
                              <input
                              :value="Recup_Numero_cOMPTE(formData.auteur_perso_id)"
                                type="text"
                                style="border: 1px solid #000"
                                class="span"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <label
                            >Mois Paiement
                            <code style="color: red; font-size: 16px">*</code>
                          </label>
                           <select
                              v-model="formData.mois_paiement"
                              class="span"
                              style="border: 1px solid #000">
                              <option value="Janvier">Janvier</option>
                              <option value="Février">Février</option>
                              <option value="Mars">Mars</option>
                              <option value="Avril">Avril</option>
                              <option value="Mai">Mai</option>
                              <option value="Juin">Juin</option>
                              <option value="Juillet">Juillet</option>
                              <option value="Août">Août</option>
                              <option value="Septembre">Septembre</option>
                              <option value="Octobre">Octobre</option>
                              <option value="Novembre">Novembre</option>
                              <option value="Decembre">Decembre</option>
                            </select>
                         
                        </td>
                   </tr>
                   <tr>
                     <td colspan="4">
                          <div class="control-group">
                            <label class="control-label">Objet </label>

                            <div class="controls">
                              <input
                                v-model="formData02.odjet_autre_depense"
                                type="text"
                                style="border: 1px solid #000"
                                class="span"
                              />
                            </div>
                          </div>
                        </td>
                        
                   </tr>
                   <tr>
                      <td colspan="">
                          <div class="control-group">
                            <label class="control-label">MONTANT ENGAGE</label>
                            <div class="controls">
                              <!-- <input
                  
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData2.montant_engage"
                    class="span"
                    readonly
                  /> -->
                              <money
                                v-model="formData.montant_engage"
                                style="text-align: left; color: red"
                                class="span"
                              ></money>
                            </div>
                          </div>
                        </td>
                         <td colspan="">
                          <div class="control-group">
                            <label class="control-label"
                              >Type d'objet</label
                            >
                            <div class="controls">
                              <select
                                v-model="formData.diff_op_personnel"
                                class="span"
                                style="border: 1px solid #000"
                              >
                                <option> </option>
                                   <option value="mission">Mission</option>
                                    <option value="salaire">Salaire </option>
                                
                                 
                               
                              </select>
                            </div>
                          </div>
                        </td>
                        <td colspan="2">
                          <div class="control-group">
                            <label class="control-label"
                              >MODE DE REGLEMENT</label
                            >
                            <div class="controls">
                              <select
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
                              </select>
                            </div>
                          </div>
                        </td>
                   </tr>
                    </table>
                    <table
                      class="table table-bordered table-striped"
                      v-if="formData.typedepense == 'Autres'"
                    >
                      <tr>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label">NOM</label>

                            <div class="controls">
                              <!-- <input
                                v-model="formData45.nom_autre_depense"
                                type="text"
                                style="border: 1px solid #000"
                                class="span"
                              /> -->
                               <model-list-select
                                style="border: 1px solid #000"
                                class="wide span"
                                :list="entreprises"
                                v-model="formData.entreprise_id"
                                option-value="id"
                                option-text="raison_sociale"
                                placeholder=""
                               
                              >
                              </model-list-select>
                            </div>
                          </div>
                        </td>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label"
                              >Banque</label
                            >

                            <div class="controls">
                              <select
                                v-model="formData.autre_depense_id"
                                class="span"
                                style="border: 1px solid #000"
                              >
                                <option
                                  v-for="typeFact in AfficheBanqueEntreprise(formData.autre_depense_id)"
                                  :key="typeFact.id"
                                  :value="typeFact.entrepse_id"
                                >
                                  {{ libelleBanque(formData.autre_depense_id) }}
                                </option>
                              </select>
                            </div>
                          </div>
                        </td>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label">Compte Fournisseur</label>

                            <div class="controls">
                             
                              <select
                                :value="ribCompte(formData.autre_depense_id,formData.entreprise_id)"
                                class="span"
                                style="border: 1px solid #000"
                              >
                                <option
                                  v-for="typeFact in AfficheCompteEntreprise(formData.autre_depense_id,formData.entreprise_id)"
                                  :key="typeFact.banq_id"
                                  
                                >
                                  {{typeFact.rib }}
                                </option>
                              </select>
                            </div>
                          </div>
                        </td>

                        <!-- <td colspan="">
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
                        </td> -->
                        <!-- <td colspan="">
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
                        </td> -->

                        <!-- <td colspan="">
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
                        </td> -->
                      </tr>
                    </table>
                    <table
                      class="table table-bordered table-striped"
                      v-if="formData.typedepense == 'Marche'"
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
                                  Numero_Nom_Entreprise(
                                    idEntreprise(formData.marche_id)
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
                                  Numero_CC(idEntreprise(formData.marche_id))
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
                                    idEntreprise(formData.marche_id)
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
                                    idbanque(idEntreprise(formData.marche_id))
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
                      v-if="formData.typedepense == 'Autres'"
                    >
                      <tr>
                        <!-- <td colspan="3">
                          <div class="control-group">
                            <label class="control-label"
                              >OBJET DE LA DEPENSE2</label
                            >
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                v-model="formData45.odjet_autre_depense"
                                class="span"
                              />
                            </div>
                          </div>
                        </td> -->
                         <td colspan="2">
                          <label
                            >Autres Depense
                            <code style="color: red; font-size: 16px">*</code>
                          </label>
                          <model-list-select
                            style="border: 1px solid #000"
                            class="wide"
                            v-model="gettersDossierAutreDepense.id"
                            :list="gettersDossierAutreDepense"
                            option-value="id"
                            option-text="objet"
                            placeholder=""
                          >
                          </model-list-select>
                         
                          
                        </td>
                         <td>
                          <label
                            >Mois Paiement
                            
                          </label>
                           <select
                            class="span"
                            style="border: 1px solid #000"
                            v-model="formData.mois_paiement"
                            >

                            <option value="Janvier">Janvier</option>
                            <option value="Février">Février</option>
                            <option value="Mars">Mars</option>
                            <option value="Avril">Avril</option>
                            <option value="Mai">Mai</option>
                            <option value="Juin">Juin</option>
                            <option value="Juillet">Juillet</option>
                            <option value="Août">Août</option>
                            <option value="Septembre">Septembre</option>
                            <option value="Octobre">Octobre</option>
                            <option value="Novembre">Novembre</option>
                            <option value="Dcembre">Dcembre</option>
                          </select>
                         
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="control-group">
                            <label class="control-label">LIVRABLES</label>
                            <div class="controls">
                              <input
                                v-model="formData.livrable_autre_depense"
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
                                v-model="formData.beneficiaire_autre_depense"
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
                                v-model="formData.geo_autre_depense"
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
                                v-model="formData.dure_autre_depense"
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
                                v-model="formData.montant_engage"
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
                              <select
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
                              </select>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </table>
                    <table
                      class="table table-bordered table-striped"
                      v-if="formData.typedepense == 'Marche'"
                    >
                      <tr>
                        <td>
                          <label
                            >Numero Marche
                            <code style="color: red; font-size: 16px">*</code>
                          </label>
                          <model-list-select
                            style="border: 1px solid #000"
                            class="wide"
                            :list="RecuppererMarcheAttribuer"
                            v-model="formData.marche_id"
                            option-value="id"
                            option-text="numero_marche"
                            placeholder=""
                            @change="RecupdateActeEffetFinancier"
                           
                          >
                          </model-list-select>
                          <code
                            style="color: red; font-size: 12px"
                            v-if="formData.marche_id == ''"
                            >Veuillez renseigner ce champ</code
                          >
                        </td>
                        <!-- <td>
                         <div class="control-group">
                            <label class="control-label">Numero Marche</label>
                            <div class="controls">
                              
                      <input
               
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData2.numeromarche"
                    class="span"
                    
                    v-on:keyup="rechercheListeMarche()"
                  />
                  <code v-if="message_mandater" style="font-size:25px">{{message_mandater}}</code>
                            </div>
                          </div>
                        </td> -->
                        <td colspan="3">
                          <div class="control-group">
                            <label class="control-label"
                              >OBJET DE LA DEPENSE</label
                            >
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                :value="objetMarche(formData.marche_id)"
                                class="span"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <div class="control-group">
                            <label class="control-label">Numéro de décompte</label>
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                v-model="formData12.objet_decompte"
                                class="span"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">LIVRABLES</label>
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                 v-model="formData.livrable_autre_depense"
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
                                type="text"
                                style="border: 1px solid #000"
                                :value="
                                  libelleUniteAdministrative(
                                    formData.unite_administrative_id
                                  )
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
                            <label class="control-label">GEOLOCALISATION</label>
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                :value="geolocalisation(formData.marche_id)"
                                class="span"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label"
                              >DUREE DE REALISATION(en jours)</label
                            >
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                :value="dureeMarche(formData.marche_id)"
                                class="span"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label"
                              >MODE DE REGLEMENT</label
                            >
                            <div class="controls">
                              <select
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
                              </select>
                            </div>
                          </div>
                        </td>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label"
                              >MONTANT DU MARCHE</label
                            >
                            <div class="controls">
                              
                              <money
                                :value="MontantReelMarche(this.formData.marche_id)"
                                readOnly
                                style="text-align: left; color: red;border: 1px solid #000"
                                class="span"
                              ></money>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        
                        
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label"
                              >MONTANT AVENANT</label
                            >
                            <div class="controls">
                         
                              <money
                                :value="MontantAvenant(this.formData.marche_id)"
                                readOnly
                                
                                style="text-align: left; color: red;border: 1px solid #000"
                                class="span"
                              ></money>
                            </div>
                          </div>
                        </td>
                         <td colspan="">
                          <div class="control-group">
                            <label class="control-label">MONTANT DE BASE</label>
                            <div class="controls">
                           
                              <money
                               :value="MontantDeBase"
                               readOnly
                                style="text-align: left; color: red;border: 1px solid #000"
                                class="span"
                              ></money>
                            </div>
                          </div>
                        </td>
                         <td colspan="">
                          <div class="control-group">
                            <label class="control-label">RESTE A PAYE</label>
                            <div class="controls">
                           
                              <money
                               :value="ResteAPayeSurMarche"
                               readOnly
                                style="text-align: left; color: red;border: 1px solid #000"
                                class="span"
                              ></money>
                            </div>
                          </div>
                        </td>
                        <td colspan="">
                          <div class="control-group">
                            <label class="control-label">MONTANT ENGAGE</label>
                            <div class="controls">
                              <!-- <input
                  
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData2.montant_engage"
                    class="span"
                    readonly
                  /> -->
                              <money
                                v-model="formData.montant_ordre_paiement"
                                style="text-align: left; color: red;border: 1px solid #000"
                                class="span"
                              ></money>
                            </div>
                          </div>
                        </td>
                        
                      </tr>
                    </table>
                    
  <table class="table table-bordered table-striped">
  
    <tr>
       <label
                            class="control-label"
                            style="
                              font-size: 14px;
                              font-weight: bold;
                              text-align: center;
                            "
                            
                            >VOIR FACTURE</label
                          >
                           <div
                            class=""
                            align="right"
                            
                          >
                            <button
                              @click.prevent="afficherModalAjouterFacture"
                              class="btn btn-success"
                            >
                              <span>
                                <i class="icon icon-plus-sign"
                                  >AJOUTER FACTURE </i
                                ></span
                              >
                            </button>
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
                          <th style="width: 10px; color:#000">Supprimer</th>
                        </tr>
                            </thead>
 <tbody>
                        <tr
                          class="odd gradeX"
                          v-for=" type in listeFacturePiece(
                            formData.numero_ordre_paiement
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
                                    formData.numero_ordre_paiement
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
                                    
                            {{ RecuperereTaux(formData.numero_ordre_paiement) }}
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
                                    
                            {{parseFloat(SommeDesDmdParBonCommande(formData.numero_ordre_paiement))*parseFloat(RecuperereTaux(formData.numero_ordre_paiement)) }}
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
                                    parseFloat(SommeDesDmdParBonCommande(formData.numero_ordre_paiement))*parseFloat(RecuperereTaux(formData.numero_ordre_paiement))
                                  ) +
                                    parseFloat(
                                       parseFloat(
                                  SommeDesDmdParBonCommande(
                                    formData.numero_ordre_paiement
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
  </table>
                 
                    <table class="table table-bordered table-striped">
                      <tr>
                        <td colspan="">
                         
                          <label
                            class="control-label"
                            style="
                              font-size: 14px;
                              font-weight: bold;
                              text-align: center;
                            "
                            
                            >LISTE DES PIECES </label
                          >

                          <div
                            class=""
                            align="right"
                            
                          >
                            <button
                              @click.prevent="afficherModalAjouterService"
                              class="btn btn-success"
                            >
                              <span>
                                <i class="icon icon-plus-sign"
                                  >AJOUTER PIECE</i
                                ></span
                              >
                            </button>
                          </div>

                          <table
                            class="table table-bordered table-striped"
                            
                          >
                            <thead>
                              <tr></tr>
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
                                v-for="type in listePieceJustificative1(
                                  formData.numero_ordre_paiement
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
                              <model-list-select
                                style="border: 1px solid #000"
                                class="wide"
                                :list="types_financements"
                                v-model="formData.type_financement_id"
                                option-value="id"
                                option-text="libelle"
                                placeholder=""
                              >
                              </model-list-select>
                            </div>
                          </div>
                          <code
                            style="color: red; font-size: 12px"
                            v-if="formData.type_financement_id == ''"
                            >Veuillez renseigner ce champ</code
                          >
                        </td>

                      <!-- <td colspan="">
                          <div class="control-group">
                            <label class="control-label"
                              >Bailleur</label
                            >
                            <div class="controls">
                              <select
                                v-model="formData.bailler_id"
                                class="span"
                                style="border: 1px solid #000"
                              >
                                <option
                                  v-for="typeFact in AfficheSouSFinancement(formData.unite_administrative_id,formData.type_financement_id)"
                                  :key="typeFact.id"
                                  :value="typeFact.sous_financement_id"
                                >
                                  {{ SousFinancement(typeFact.sous_financement_id)}}
                                </option>
                              </select>
                            </div>
                          </div>
                        </td> -->
                        <td>
                          <label>Bailleur </label>
                          <model-list-select
                            style="border: 1px solid #000"
                            class="wide"
                            :list="sources_financements"
                            v-model="formData.bailler_id"
                            option-value="id"
                            option-text="libelle"
                            placeholder=""
                          >
                          </model-list-select>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>

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
                              >Engagements antérieurs(B)</label
                            >
                            <div class="controls">
                              <money
                                :value="cumulBudgetEnterieure"
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
                                v-model="formData.montant_engage"
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
                                v-model="formData.gestionnaire_credit_date"
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
                                v-model="formData.gestionnaire_credit_non"
                                class="span"
                              />
                            </div>
                          </div>
<!--                           
                          <div class="control-group">
                            <label class="control-label">Fonction</label>
                            <div class="controls">
                              <input
                                type="text"
                                style="border: 1px solid #000"
                                v-model="formData.gestionnaire_credit_fonction"
                                class="span"
                              />
                            </div>
                          </div> -->


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
                                readonly
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
                                        formData.unite_administrative_id
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
                                readonly
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
                       
                        class="btn btn-success"
                        @click.prevent="testModification"
                        >Modifier</a
                      >
                      <a
                        @click.prevent="afficherModalListePersonnel()"
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
                   
                    type="text"
                    :value="numeroOrdre(formData.numero_ordre_paiement)"
                    class="span"
                    placeholder=""
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
                    class="span"
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
                    class="span"
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
                    class="span"
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
            <!-- <td>
              <div class="control-group">
                <label class="control-label">Exonéré</label>
                <div class="controls">
                  <select v-model="formData9.exonere" class="span">
                    <option value="0">Oui</option>
                    <option value="1">Non</option>
                  </select>
                </div>
              </div>
            </td> -->
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
                    class="span"
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
                    class="span"
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
                    class="span"
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
                    class="span"
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

    <div id="exampleModal1" class="modal hide tailles">
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
                    class="span"
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
                    class="span"
                  ></money>
                </div>
              </div>
            </td>
             <td>
                <div class="control-group">
                <label class="control-label">exonéré</label>
                <div class="controls">
                  <select v-model="FormDataFacture.exonere" class="span">
                  
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
                    class="span"
                  ></money>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Taux</label>
                <div class="controls">
 <input type="text" 
                         class="span"
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
                 
<money :value="montantTva"  readonly  style="text-align:left;color:red;font-size:16px"  class="span"></money>
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
                    class="span"
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
                    class="span"
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
                class="span"
                
              /> -->
                  <money
                    v-model="editFacture.prix_unitaire"
                    style="text-align: left; color: red"
                    class="span"
                  ></money>
                </div>
              </div>
            </td>
             <td>
                <div class="control-group">
                <label class="control-label">exonéré</label>
                <div class="controls">
                  <select v-model="editFacture.exonere" class="span">
                  
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
                    class="span"
                  ></money>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Taux</label>
                <div class="controls">
      <input type="text" 
                         class="span"
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
                 
      <money :value="montantTvaModifier"  readonly  style="text-align:left;color:red;font-size:16px"  class="span"></money>
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
                class="span"
                readonly
              /> -->
                  <money
                    :value="MontantFactureTTCModifier"
                    style="text-align: left; color: red"
                    class="span"
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






    <div id="exampleModalligneEco" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier la Date de Acte D'effet Financier</h3>
      </div>
      <div class="modal-body">
     
        <form class="form-horizontal">
          <div class="control-group">
            <label class="control-label">Date:</label>
            <div class="controls">
              <input
                type="date"
                class="span"
                placeholder=""
                v-model="editMarcheDate.date_debut_exectuion_definitif"
              />
              <input type="hidden" name="" id="" v-model="editMarcheDate.id" />
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <a class="btn btn-primary" href="#" @click="ValiderDateUpdate"
          >Valider</a
        >
        <!-- <a data-dismiss="modal" class="btn" href="#">Fermer</a> -->
        <a
                        @click.prevent="pagePrecedent()"
                        class="btn"
                        href="#"
                        >Fermer</a
                      >
      </div>
    </div>
    <!-- <button type="button" @click="testModification" class="btn btn-success">Modifier L'OP</button> -->
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { admin, dcf, noDCfNoAdmin } from "@/Repositories/Auth";

import { ModelListSelect } from "vue-search-select";
import moment from "moment";
// import facture from '../Facture/facture.vue'
import { formatageSomme } from "@/Repositories/Repository";
import "vue-search-select/dist/VueSearchSelect.css";
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
      editFacture:{},
      formData: {
        unite_administrative_id: "",
        signataire:"",
        activite_id: "",
        date_interim:"",
        ligne_economique_id: "",
        typedepense: "Marche",
        numero_ordre_paiement: "",
        type_ordre_paiement: "",
        imterim_op:"Non",
        RattacherPers:"Non",
        autre_depense_id:"",
        
        marche_idd:""
      
      },

      editpiece: {},
      formData5: {
        Auteur_id: "2",
      },
      formData9: {
        exonere: 1,
      },
    
      formData45: {},
      formData12: {
        objet_decompte: "",
      },
      formData7: {},
      formData1: {
        date_piece: "",
        reference: "",
        libelle: "",
      },
      formData8: {},
      formData02:{},
      formData2: {
        numeromarche: "",
        marche_id: "",
      },
      FormDataFacture: {
        exonere: 0,
      },
      editMarcheDate:{},
     // editMarcdate:"",
      message_mandater: "",
      decision_cf_definitif: "",
      decision_cf: "",
      
    };
  },

  created() {
        
            this.formData=this.gettersgestionOrdrePaiement.find(item=>item.id==this.$route.params.id)

           console.log(this.formData)
            console.log(this.ribCompte(this.formData.autre_depense_id,this.formData.entreprise_id))
        },
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
      "getterPersonneRattacher",
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
      "groupeParBAILLER",
      "groupeLigneEconomiqueBudget",
      "getSousBudget",
      "groupeActiviteBudgetEclate",
      "budgetGeneral",
      "fonctionsua",
      "servicesua",
      "directions",
      "uniteZones",
      "uniteAdministratives",
      "getPersonnaliseBudgetGeneralParPersonnel",
      "getterUniteAdministrativeBailleur"
    ]),
    // ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires"]),
    ...mapGetters("parametreGenerauxBudgetaire", ["plans_budgetaires"]),
    ...mapGetters("SuiviImmobilisation", ["services"]),

    ...mapGetters("bienService", [
      
      "avenants",
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
AfficheBanqueEntreprise() {
      return (id) => {
        if (id != null && id != "") {
          return this.getCompte.filter(
            (qtreel) =>
              qtreel.entrepse_id == id 
          );
        }
      };
    },
    ribCompte(){
      return (id,id1) => {
        if (id != null && id != "",id1 != null && id1 != "") {
          const tem= this.getCompte.filter((qtreel) =>qtreel.entrepse_id == id  && qtreel.banq_id == id1);
          if(tem){
            return tem.rib;
          }
          return 0;
        }
      };
    },
AfficheCompteEntreprise() {
      return (id,id1) => {
        if (id != null && id != "",id1 != null && id1 != "") {
          return this.getCompte.filter(
            (qtreel) =>
              qtreel.entrepse_id == id  && qtreel.banq_id == id1 
          );
        }
      };
    },
 MontantDeBase(){
      return parseFloat(
        this.MontantReelMarche(this.formData.marche_id))+
          parseFloat(this.MontantAvenant(this.formData.marche_id))
  },
  ResteAPayeSurMarche(){
return (parseFloat(this.MontantDeBase)-parseFloat(this.MontantPayeMarche(this.formData.marche_id))-parseFloat(this.formData.montant_ordre_paiement))
  },
  MontantPayeMarche() {
      return id => {
        if (id != null && id != "") {
           return this.gettersgestionOrdrePaiement.filter(qtreel => qtreel.marche_id == id).reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
              0
            )
            .toFixed(0);

     
      }
      }
  },
MontantAvenant() {
      return id => {
        if (id != null && id != "") {
           return this.avenants.filter(qtreel => qtreel.marche_id == id).reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_ht),
              0
            )
            .toFixed(0);

     
      }
      }
  },

    RecupdateActeEffetFinancier(){
      let vm =this;
        if(this.formData2.marche_id !=null && this.formData2.marche_id !=""){
          const qtreel = this.acteEffetFinanciers.find(
          (qtreel)=> qtreel.marche_id == this.formData2.marche_id
        );
       

         if(qtreel.date_debut_exectuion_definitif ==null ){
           
           vm.editMarcheDate=qtreel;
          return this.$("#exampleModalligneEco").modal({
         backdrop: "static",
          keyboard: false
       });
          
         }

        else{

           return console.log('**lega**');
        }

        }else{
          return 0;
        }

      },

    Recup_Banque() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getCompte.find(
            (qtreel) => qtreel.acteur_depense_id == id
          );

          if (qtereel) {
            return qtereel.banq_id;
          }
          return 0;
        }
      };
    },
    idCompte() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getCompte.find(
            (qtreel) => qtreel.rib == id
          );

          if (qtereel) {
            return qtereel.id;
          }
          return 0;
        }
      };
    },
Recup_Numero_cOMPTE() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getCompte.find(
            (qtreel) => qtreel.acteur_depense_id == id
          );

          if (qtereel) {
            return qtereel.rib;
          }
          return 0;
        }
      };
    },
// affichePersoUA(){
//   if(this.formData.unite_administrative_id!=""){
//     return this.PersonnelParUA(this.formData.unite_administrative_id)
//   }
//   else{
//     return ""
//   }
// },
affichePersoUA() {
      if (this.noDCfNoAdmin) {
        let colect = [];
        this.PersonnelParUA(this.formData.unite_administrative_id).filter((item) => {
        
        
            colect.push(item);
           
        });
        return colect;
      }

      return "";
    },
    videChamps(){
      if(this.formData.typedepense == 'Personnel'){
        return this.PersonnelParUA(this.formData.unite_administrative_id)
      }
      else{
        return this.formData.auteur_perso_id == ""
      }
    },
    PersonnelParUA() {
      return (id) => {
        if (id != null && id != "") {
          return this.personnaliseActeurDepense.filter(
            (qtreel) =>
              qtreel.unite_administrative_id == id 
          );
        }
      };
    },

      PersonnelRattacher() {
      return (id) => {
        if (id != null && id != "") {
          return this.getterPersonneRattacher.filter(
            (qtreel) =>
              qtreel.ua_rattacheur == id 
          );
        }
      };
    },



    Personnelnom() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.personnaliseActeurDepense.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.nom;
          }
          return 0;
        }
      };
    },

    Personnelmatricule() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.personnaliseActeurDepense.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.matricule;
          }
          return 0;
        }
      };
    },

    Personnelprenom() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.personnaliseActeurDepense.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.prenom;
          }
          return 0;
        }
      };
    },






    GrandeNatureId() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.budgetEclate.find(
            (qtreel) => qtreel.ligneeconomique_id == id
          );

          if (qtereel) {
            return qtereel.grandenature_id;
          }
          return 0;
        }
      };
    },

    idbanque() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.acteEffetFinanciers.find(
            (qtreel) => qtreel.marche_id == id
          );

          if (qtereel) {
            return qtereel.banq_id;
          }
          return 0;
        }
      };
    },
    idEntreprise() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.acteEffetFinanciers.find(
            (qtreel) => qtreel.marche_id == id
          );

          if (qtereel) {
            return qtereel.entreprise_id;
          }
          return 0;
        }
      };
    },
    tailleOpEnregistrer() {
      return this.gettersgestionOrdrePaiement.length + 1;
    },
    listePieceJustificativeOpDefinitive() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersnomPieceJustificative.filter(
            (qtreel) => qtreel.numero_op_hors_sib == id
          );
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
        parseFloat(this.cumulBudgetEnterieure) +
        parseFloat(this.formData.montant_engage);
      return parseFloat(val).toFixed(0);
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

    fonctionPourVideLeChamp(){
      if (
        this.comparaison(this.formData.activite_id) == this.formData.activite_id
      ) {
       
         return this.CreditAutoriseSousBudget(
                                      this.formData.sous_budget_id,
                                      this.formData.ligne_economique_id,
                                      this.formData.type_financement_id,
                                      this.formData.source_financement_id);
      } else {
        return this.CreditAutorise(
                                  this.formData.unite_administrative_id,
                                  this.formData.ligne_economique_id,this.formData.type_financement_id,this.formData.source_financement_id);
      }
    },
    CreditAutoriseSousBudget() {
     return (id, id1, id2, id3) => {
    if (id != null && id != "" && id1 != null && id1 != ""&& id2 != null && id2 != "" && id3 != null && id3 != "") {
          const qtereel = this.budgetEclate.find(
            (qtreel) =>
              qtreel.sous_budget_id == id &&  qtreel.ligneeconomique_id == id1 && qtreel.type_financement_id==id2 && qtreel.source_financement_id==id3 
          );

          if (qtereel) {
            return qtereel.dotation;
          }
          return 0;
        }
      };
    },
    CreditAutorise() {
      return (id, id1, id2, id3) => {
        if (id != null && id != "" && id1 != null && id1 != ""&& id2 != null && id2 != "" && id3 != null && id3 != "") {
          const qtereel = this.budgetEclate.find(
            (qtreel) =>
              qtreel.uniteadministrative_id == id && qtreel.ligneeconomique_id == id1 && qtreel.type_financement_id==id2 && qtreel.source_financement_id==id3 
              
          );

          if (qtereel) {
            return qtereel.dotation;
          }
          return 0;
        }
      };
    },
arrayExerciceDecompteBienService() {
      //return (id) => {
        
        let objet = this.budgetEclate.filter(budget=>budget.uniteadministrative_id == this.formData.unite_administrative_id && budget.activite_id == this.formData.activite_id && budget.sous_budget_id == 0 && budget.budget_active==1);
        //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.ligneeconomique_id);
          });
          let unique = [...new Set(array_exercie)];
          
          if (unique.length == 0) {
            return [];
          }
          return unique;
      }
        return [];
  //  };
    },
    LigneEconomiqueSousBudget() {
      //return (id) => {
        
        let objet = this.budgetEclate.filter(budget=>budget.activite_id == this.formData.activite_id && budget.sous_budget_id ==this.formData.sous_budget_id  && budget.budget_active==1);
        //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.ligneeconomique_id);
          });
          let unique = [...new Set(array_exercie)];
          
          if (unique.length == 0) {
            return [];
          }
          return unique;
      }
        return [];
  //  };
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
            (qtreel) => qtreel.activite_id == id
          );

          if (qtereel) {
            return qtereel.activite_id;
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
          return this.groupeActiviteBudgetEclate.filter(
            (qtreel) =>
              qtreel[0].uniteadministrative_id == id &&
              qtreel[0].annebudgetaire == this.anneeAmort
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
SousFinancement() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.sources_financements.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return "";
        }
      };
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
    dureeMarche() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.acteEffetFinanciers.find(
            (qtreel) => qtreel.marche_id == id
          );

          if (qtereel) {
            return qtereel.duree;
          }
          return "";
        }
      };
    },
    MontantReelMarche() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.acteEffetFinanciers.find(
            (qtreel) => qtreel.marche_id == id
          );

          if (qtereel) {
            return qtereel.montant_act;
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
     AfficheSouSFinancement() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.getterUniteAdministrativeBailleur.filter(
            (qtreel) => qtreel.ua_id == id && qtreel.type_financement_id == id1
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

montantTvaModifier() {
      const val =
        parseFloat(this.editFacture.prix_unitaire) * parseFloat(this.afficherEnorereModifeir);

      if (val) {
        return parseInt(val).toFixed(0);
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
    listeFacturePiece() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersDossierFacturePiece.filter((tem) => tem.numero_op_hors_sib == id);
          
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
    MontantFactureHtModifier() {
      const val =
        parseFloat(this.editFacture.prix_unitaire) *
        parseFloat(this.editFacture.quantite);

      if (val) {
        return parseInt(val).toFixed(0);
      }

      return 0;
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
        parseFloat(this.cumulAnterieur(this.formData.ligne_economique_id)) -
        parseFloat(this.formData.montant_tresor);
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
    cumulAnterieurUa() {
      return (id, id1,id2, id3) => {
        if (id != null && id != "" && id1 != null && id1 != "" && id2 != null && id2 != "" && id3 != null && id3 != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.unite_administrative_id == id &&
                qtreel.type_financement_id == id1 &&
                qtreel.source_financement_id == id2 &&
                qtreel.ligne_economique_id == id3 &&
                qtreel.diff_op == null
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
    cumulAnterieurSousBudget() {
      return (id, id1,id2, id3) => {
        if (id != null && id != "" && id1 != null && id1 != "" && id2 != null && id2 != "" && id3 != null && id3 != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
               
                qtreel.sous_budget_id == id &&
                qtreel.type_financement_id == id1 &&
                qtreel.source_financement_id == id2 &&
                qtreel.ligne_economique_id == id3 &&
                qtreel.diff_op != null
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
    cumulBudgetEnterieure() {
      if (
        this.comparaison(this.formData.activite_id) != this.formData.activite_id
      ) {
        return this.cumulAnterieurUa(
          this.formData.unite_administrative_id,
          this.formData.type_financement_id,
          this.formData.source_financement_id,
          this.formData.ligne_economique_id
        );
      } else {
        return this.cumulAnterieurSousBudget(
          
          this.formData.sous_budget_id,
          this.formData.type_financement_id,
          this.formData.source_financement_id,
          this.formData.ligne_economique_id
        );
      }
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
            (qtreel) => qtreel.activite_id == id
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
            (qtreel) => qtreel.activite_id == id
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
            (qtreel) => qtreel.activite_id == id
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
        objetAutreDepense() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersDossierAutreDepense.find((qtreel) => qtreel.id == id);

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
            (qtreel) => qtreel.activite_id == id
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
    RecuppererMarcheAttribuer() {
      if (this.noDCfNoAdmin) {
        let colect = [];
        this.marches.filter((item) => {
          let val = this.uniteAdministratives.find(
            (row) => row.id == item.unite_administrative_id
          );
          if (val != undefined) {
            colect.push(item);
            return item;
          }
        });

        return this.colect.filter(
          (qtreel) => qtreel.numero_marche != null && qtreel.attribue == 2
        );
      }

      return this.marches.filter(
        (qtreel) => qtreel.numero_marche != null && qtreel.attribue == 2
      );
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
                qtreel.numero_op_hors_sib == id &&
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
                qtreel.numero_op_hors_sib == id &&
                qtreel.etat_piece == "definitive"
            ).length + 1
          );
        }
      };
    },
    listePieceJustificative1() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersnomPieceJustificative.filter(
            (qtreel) =>
              qtreel.numero_op_hors_sib == id 
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
    // listePieceJustificativeOpDefinitive() {
    //   return id => {
    //     if (id != null && id != "") {
    //        return this.gettersnomPieceJustificative.filter(qtreel => qtreel.numero_op_hors_sib == id );

    //     }
    //   };
    // },
    // idEntreprise() {
    //   return id => {
    //     if (id != null && id != "") {
    //        const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.numero_marche == id);

    //   if (qtereel) {
    //     return qtereel.entreprise_id
    //   }
    //   return 0
    //     }
    //   };
    // },

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
RechercheNumeroOP(){
  if(this.VerificationNumeroOp(this.formData.numero_ordre_paiement) == this.formData.numero_ordre_paiement){
    
this.$notify({
              title: 'ERROR',
              text: "Numero Op Déja Enregistrer",
              type:"error"
             })
  }
  else{
    return this.formData.numero_ordre_paiement
  }
  return 0
},
    VerificationNumeroOp() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find(
            (qtreel) => qtreel.numero_op_prov_definitive == id
          );

          if (qtereel) {
            return qtereel.numero_op_prov_definitive;
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
      "modifierGestionOrdrePaiement",
      "ModifierDateEffetFinancier",
      "modifierMarche2"
    ]),
    ...mapActions("personnelUA", ["ajouterFichierJointDmd"]),
afficherModalModifierFacture(id) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

     
      this.editFacture= this.listeFacturePiece(this.formData.numero_ordre_paiement).find(item=>item.id==id);
    },
    // RecupdateActeEffetFinancier(){
    //   //let vm =this;
    //     if(this.formData2.marche_id !=null && this.formData2.marche_id !=""){
    //       const qtreel = this.acteEffetFinanciers.find(
    //       (qtreel)=> qtreel.marche_id == this.formData2.marche_id
    //     );
    //    // vm.editMarcheDate==

    //      if(qtreel.date_debut_exectuion_definitif ==null ){
    //   //     return this.$("#exampleModalligneEco").modal({
    //   //    backdrop: "static",
    //   //     keyboard: false
    //   //  });
    //   alert('ok')

    //      }

    //     else{

    //        alert('ok')
    //     }

    //     }else{
    //       return 0;
    //     }

    //   },

    ValiderDateUpdate() {

      this.ModifierDateEffetFinancier(this.editMarcheDate);
      this.$("#exampleModalligneEco").modal("hide");
    },

    pagePrecedent() {
      window.history.back();
    },
    genererEnPdf() {
      this.$htmlToPaper("printMe");
    },

    afficherModalListePersonnel() {
        window.history.back();
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
     
        //this.intitule=this.anneeAmort + "" + this.formData.numero_ordre_paiement
        var nouvelObjetProforma = {
          numero_ordre: this.numeroOrdre(this.formData.numero_ordre_paiement),
          // numero_ordrepaiement:this.formData.numero_ordre_paiement,
          //numero_ordre_paiement_combine:this.intitule,
          libelle: this.formData1.libelle,
          reference: this.formData1.reference,
          date_piece: this.formData1.date_piece,
          etat_piece: "proforma",
          numero_op_hors_sib: this.formData.numero_ordre_paiement,
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
        };
      
    },

    rechercheListeMarche() {
      // console.log(this.formMandater.matricule_m)

      let objetMandater = this.acteEffetFinanciers.filter(
        (item) =>
          item.numero_marche == this.formData2.numeromarche &&
          item.ua_id == this.formData.unite_administrative_id &&
          this.afficherAttributMarche(item.marche_id) == 2
      );
      // console.log(objetMandater)
      if (objetMandater != undefined) {
        if (objetMandater.length == 1) {
          let acteur = this.acteEffetFinanciers.find(
            (item) => item.numero_marche == this.formData2.numeromarche
          );
          (this.formData2.nom_entreprise_id = acteur.entreprise_id),
            (this.formData2.compte_entreprise_id = acteur.entreprise_id),
            (this.formData2.adresse_entreprise_id = acteur.entreprise_id),
            (this.formData2.banque_entreprise_id = acteur.banq_id),
            (this.formData2.marche_id = acteur.marche_id),
            (this.formData2.livrable_id = acteur.marche_id),
            (this.formData2.beneficiaire_id = acteur.unite_administrative_id),
            (this.formData2.geo_id = acteur.marche_id),
            (this.formData2.dure_realisation = acteur.duree),
            (this.formData7.Montant_Marche = acteur.montant_act);
          this.message_mandater = " ";
        } else {
          this.message_mandater = "Numero du marche n'existe pas";
          this.formData2.numero_cc_fournisseur_nom = "";
          (this.formData2.nom_entreprise_id = ""),
            (this.formData2.compte_entreprise_id = ""),
            (this.formData2.adresse_entreprise_id = ""),
            (this.formData2.banque_entreprise_id = ""),
            (this.formData2.marche_id = ""),
            (this.formData2.livrable_id = ""),
            (this.formData2.beneficiaire_id = ""),
            (this.formData2.geo_id = ""),
            (this.formData2.dure_realisation = ""),
            (this.formData7.Montant_Marche = "");
        }
      }
      if (this.formData2.numero_marche == "") {
        (this.formData2.nom_entreprise_id = ""),
          (this.formData2.compte_entreprise_id = ""),
          (this.formData2.adresse_entreprise_id = ""),
          (this.formData2.banque_entreprise_id = ""),
          (this.formData2.marche_id = ""),
          (this.formData2.livrable_id = ""),
          (this.formData2.beneficiaire_id = ""),
          (this.formData2.geo_id = ""),
          (this.formData2.dure_realisation = ""),
          (this.formData7.Montant_Marche = "");
      }
    },

    ajouterFichierJoin() {
     
        const formData = new FormData();
        //this.intitule = this.anneeAmort + "" + this.formData.numero_ordre_paiement
        formData.append("budgeteclateimport", this.selectedFile, this.selectedFile.name);

        //formData.append('numero_ordre_paiement_combine', this.intitule);
        // formData.append('numero_ordrepaiement', this.formData.numero_ordre_paiement);
        formData.append(
          "numero_fichier",
          this.numeroOrdre(this.formData.numero_ordre_paiement)
        );
        formData.append(
          "numero_op_hors_sib",
          this.formData.numero_ordre_paiement
        ),
          formData.append("etat_piece", "proforma");
        let config = {
          header: {
            "Content-Type": "multipart/form-data",
          },
        };
        this.ajouterFichierJointDmd(formData, config);
      
    },

    ajouterFacture() {
    
        var nouvelObjetproforma = {
          ...this.FormDataFacture,
          total_facture_ht: this.MontantFactureHt,
          numero_op_hors_sib: this.formData.numero_ordre_paiement,
          etat_acticle: "proforma",
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

 FonctionModifierFacture() {
    
        var nouvelObjetproforma = {
          ...this.editFacture,
          total_facture_ht: this.MontantFactureHtModifier,
          numero_op_hors_sib: this.formData.numero_ordre_paiement,
          numero_ordrepaiement: this.formData.numero_ordre_paiement,
          etat_acticle: "proforma",
          montant_ttc:this.MontantFactureTTCModifier,
          taux:this.afficherEnorereModifeir,
          exonere:this.editFacture.exonere
        };

        this.modifierDossierFacture(nouvelObjetproforma);
        this.$("#modificationModal").modal('hide');
        this.FormDataFacture = {
          designation: "",
          quantite: "0",
          prix_unitaire: "0",
          total_facture_ht: "0",
        };
     
    },

testModification(){
            this.intitule =
            this.anneeAmort +
            "-" +
            this.tailleOpEnregistrer +
            "-" +
            this.formData.numero_ordre_paiement;
          this.intitule2 =
            this.objetMarche(this.formData.marche_id) +
            "-" +
            this.formData12.objet_decompte;
          var nouvelObjetOrdrePaiement1231 = {
          
            id:this.formData.id,
            date_op:this.formData.date_op,
            exercice: this.anneeAmort,
            type_ordre_paiement:this.formData.type_ordre_paiement,
            numero_ordre_paiement: this.formData.numero_ordre_paiement,
            numero_op_prov_definitive:this.formData.numero_ordre_paiement,
            section_id: this.idSection(
              this.libelleLigneEconomiqueParent(
                this.formData.activite_id
              )
            ),
            programme_id: this.idProgramme(
              this.libelleLigneEconomiqueParent(
                this.formData.activite_id
              )
            ),
            unite_administrative_id: this.formData.unite_administrative_id,
            action_id: this.idAction(
              this.libelleLigneEconomiqueParent(
                this.formData.activite_id
              )
            ),
            sous_budget_id: this.formData.sous_budget_id,
            activite_id: this.formData.activite_id,
            ligne_economique_id: this.formData.ligne_economique_id,
            entreprise_id: this.idEntreprise(this.formData.marche_id),
            marche_id: this.formData.marche_id,
            type_financement_id: this.formData.type_financement_id,
            typedepense: this.formData.typedepense,
            source_financement_id: this.formData.source_financement_id,
            montant_ordre_paiement: this.formData.montant_engage,

            mode_paiement_id: this.formData.mode_paiement_id,

            date_interim: this.formData.date_interim,
            visa_interim: this.formData.visa_interim,
            user_id_interim: this.formData.user_id_interim,
            imterim_op: this.formData.imterim_op,
            personne_rattacher: this.formData.RattacherPers,


            grand_nature_id: this.GrandeNatureId(
              this.formData.ligne_economique_id
            ),

            odjet_autre_depense: this.numero_ordre_paiement,
            gestionnaire_credit_non: this.formData.gestionnaire_credit_non,
            gestionnaire_credit_date: this.formData.gestionnaire_credit_date,
            gestionnaire_credit_fonction: this.formData.gestionnaire_credit_fonction,
            controleur_financier_id: this.recupererIdUser(
              this.recupererIdServiceCF(this.formData.unite_administrative_id)
            ),
          };
           this.modifierGestionOrdrePaiement(nouvelObjetOrdrePaiement1231);
},



    //   AjouterOrdrePaiement() {
    
    //     if (this.formData.typedepense == "Marche") {
    //     if(this.ResteAPayeSurMarche == 0 ){
    //   this.intitule =
    //         this.anneeAmort +
    //         "-" +
    //         this.tailleOpEnregistrer +
    //         "-" +
    //         this.formData.numero_ordre_paiement;
    //       this.intitule2 =
    //         this.objetMarche(this.formData.marche_id) +
    //         "-" +
    //         this.formData12.objet_decompte;
    //       var nouvelObjetOrdrePaiement123 = {
    //         id:this.formData.id,
    //         exercice: this.anneeAmort,
    //         type_ordre_paiement:this.formData.type_ordre_paiement,
    //         numero_ordre_paiement: this.formData.numero_ordre_paiement,
    //         numero_op_prov_definitive:this.formData.numero_ordre_paiement,
    //         section_id: this.idSection(
    //           this.libelleLigneEconomiqueParent(
    //             this.formData.activite_id
    //           )
    //         ),
    //         programme_id: this.idProgramme(
    //           this.libelleLigneEconomiqueParent(
    //             this.formData.activite_id
    //           )
    //         ),
    //         unite_administrative_id: this.formData.unite_administrative_id,
    //         action_id: this.idAction(
    //           this.libelleLigneEconomiqueParent(
    //             this.formData.activite_id
    //           )
    //         ),
    //         sous_budget_id: this.formData.sous_budget_id,
    //         activite_id: this.formData.activite_id,
    //         ligne_economique_id: this.formData.ligne_economique_id,
    //         entreprise_id: this.idEntreprise(this.formData.marche_id),
    //         marche_id: this.formData.marche_id,
    //         type_financement_id: this.formData.type_financement_id,
    //         typedepense: this.formData.typedepense,
    //         source_financement_id: this.formData.source_financement_id,
    //         montant_ordre_paiement: this.formData.montant_engage,

    //         mode_paiement_id: this.formData.mode_paiement_id,

    //         date_interim: this.formData.date_interim,
    //         visa_interim: this.formData.visa_interim,
    //         user_id_interim: this.formData.user_id_interim,
    //         imterim_op: this.formData.imterim_op,
    //         personne_rattacher: this.formData.RattacherPers,


    //         grand_nature_id: this.GrandeNatureId(
    //           this.formData.ligne_economique_id
    //         ),

    //         odjet_autre_depense: this.numero_ordre_paiement,
    //         gestionnaire_credit_non: this.formData.gestionnaire_credit_non,
    //         gestionnaire_credit_date: this.formData.gestionnaire_credit_date,
    //         gestionnaire_credit_fonction: this.formData.gestionnaire_credit_fonction,
    //         controleur_financier_id: this.recupererIdUser(
    //           this.recupererIdServiceCF(this.formData.unite_administrative_id)
    //         ),
    //       };
          
    //     let marcheObjet78=this.marches.find(marche=>marche.id==this.formData.marche_id)
    //     marcheObjet78.attribue = 5
    //       this.modifierGestionOrdrePaiement(nouvelObjetOrdrePaiement123);
    //       this.modifierMarche2(marcheObjet78)
    //       this.formData = {
    //         exercice: this.anneeAmort,
    //         type_ordre_paiement: "",
    //         numero_ordre_paiement: "",
    //         date_interim:'',
    //         visa_interim:'',
    //         user_id_interim:'',
    //         section_id: "",
    //         programme_id: "",
    //         unite_administrative_id: "",
    //         action_id: "",
    //         sous_budget_id: "",
    //         activite_id: "",
    //         ligne_economique_id: "",
    //         entreprise_id: "",
    //         marche_id: "",
    //         type_financement_id: "",
    //         source_financement_id: "",
    //         montant_ordre_paiement: "",
    //         mode_paiement_id: "",
    //         gestionnaire_credit_non: "",
    //         gestionnaire_credit_date: "",
    //         gestionnaire_credit_fonction: "",
    //         controleur_financier_id: this.recupererIdUser(
    //           this.recupererIdServiceCF(this.formData.unite_administrative_id)
    //         ),
    //       };
    //       this.modifierGestionOrdrePaiement(nouvelObjetOrdrePaiement123);
    //       this.modifierMarche2(marcheObjet78)
    //     }
    //     else if(this.ResteAPayeSurMarche < 0){
    //     this.$notify({
    //              title: 'ERROR',
    //              text: "Marche Apuré",
    //              type:"error"
    //          })
    //     }
    //     else{
    //         this.intitule =
    //         this.anneeAmort +
    //         "-" +
    //         this.tailleOpEnregistrer +
    //         "-" +
    //         this.formData.numero_ordre_paiement;
    //       this.intitule2 =
    //         this.objetMarche(this.formData.marche_id) +
    //         "-" +
    //         this.formData12.objet_decompte;
    //       var nouvelObjetOrdrePaiement = {
    //         exercice: this.anneeAmort,
    //         numero_op_prov_definitive:this.formData.numero_ordre_paiement,
    //         type_ordre_paiement: 2,
    //         numero_ordre_paiement: this.intitule,
    //         section_id: this.idSection(
    //           this.libelleLigneEconomiqueParent(
    //             this.formData.activite_id
    //           )
    //         ),
    //         programme_id: this.idProgramme(
    //           this.libelleLigneEconomiqueParent(
    //             this.formData.activite_id
    //           )
    //         ),
    //         unite_administrative_id: this.formData.unite_administrative_id,
    //         action_id: this.idAction(
    //           this.libelleLigneEconomiqueParent(
    //             this.formData.activite_id
    //           )
    //         ),
    //         sous_budget_id: this.formData.sous_budget_id,
    //         activite_id: this.formData.activite_id,
    //         ligne_economique_id: this.formData.ligne_economique_id,
    //         entreprise_id: this.idEntreprise(this.formData2.marche_id),
    //         marche_id: this.formData2.marche_id,
    //         type_financement_id: this.formData.type_financement_id,
    //         typedepense: this.formData.typedepense,
    //         source_financement_id: this.formData.bailler_id,
    //         montant_ordre_paiement: this.formData.montant_engage,

    //         mode_paiement_id: this.formData.mode_paiement_id,

    //         date_interim: this.formData.date_interim,
    //         visa_interim: this.formData.visa_interim,
    //         user_id_interim: this.formData.user_id_interim,
    //         imterim_op: this.formData.imterim_op,
    //         personne_rattacher: this.formData.RattacherPers,


    //         grand_nature_id: this.GrandeNatureId(
    //           this.formData.ligne_economique_id
    //         ),

    //         odjet_autre_depense: this.intitule2,
    //         gestionnaire_credit_non: this.formData.gestionnaire_credit_non,
    //         gestionnaire_credit_date: this.formData.gestionnaire_credit_date,
    //         gestionnaire_credit_fonction: this.formData.gestionnaire_credit_fonction,
    //         controleur_financier_id: this.recupererIdUser(
    //           this.recupererIdServiceCF(this.formData.unite_administrative_id)
    //         ),
    //       };
    //       // var nouvelObjetOrdrePaiement = {
    //       //   id:this.formData.id,
    //       //   exercice: this.anneeAmort,
    //       //   type_ordre_paiement: this.formData.type_ordre_paiement,
    //       //   numero_ordre_paiement: this.intitule,
    //       //   section_id: this.idSection(
    //       //     this.libelleLigneEconomiqueParent(
    //       //       this.formData.activite_id
    //       //     )
    //       //   ),
    //       //   programme_id: this.idProgramme(
    //       //     this.libelleLigneEconomiqueParent(
    //       //       this.formData.activite_id
    //       //     )
    //       //   ),
    //       //   unite_administrative_id: this.formData.unite_administrative_id,
    //       //   action_id: this.idAction(
    //       //     this.libelleLigneEconomiqueParent(
    //       //       this.formData.activite_id
    //       //     )
    //       //   ),
    //       //   sous_budget_id: this.formData.sous_budget_id,
    //       //   activite_id: this.formData.activite_id,
    //       //   ligne_economique_id: this.formData.ligne_economique_id,
    //       //   entreprise_id: this.idEntreprise(this.formData.marche_id),
    //       //   marche_id: this.formData.marche_id,
    //       //   type_financement_id: this.formData.type_financement_id,
    //       //   typedepense: this.formData.typedepense,
    //       //   source_financement_id: this.formData.source_financement_id,
    //       //   montant_ordre_paiement: this.formData.montant_ordre_paiement,

    //       //   mode_paiement_id: this.formData.mode_paiement_id,

    //       //   date_interim: this.formData.date_interim,
    //       //   visa_interim: this.formData.visa_interim,
    //       //   user_id_interim: this.formData.user_id_interim,
    //       //   imterim_op: this.formData.imterim_op,
    //       //   personne_rattacher: this.formData.RattacherPers,


    //       //   grand_nature_id: this.GrandeNatureId(
    //       //     this.formData.ligne_economique_id
    //       //   ),

    //       //   odjet_autre_depense: this.intitule2,
    //       //   gestionnaire_credit_non: this.formData.gestionnaire_credit_non,
    //       //   gestionnaire_credit_date: this.formData.gestionnaire_credit_date,
    //       //   gestionnaire_credit_fonction: this.formData.gestionnaire_credit_fonction,
    //       //   controleur_financier_id: this.recupererIdUser(
    //       //     this.recupererIdServiceCF(this.formData.unite_administrative_id)
    //       //   ),
    //       // };
    //       this.ajouterGestionOrdrePaiement(nouvelObjetOrdrePaiement);
           
    //       this.formData = {
    //         exercice: this.anneeAmort,
    //         type_ordre_paiement: "",
    //         numero_ordre_paiement: "",
    //         date_interim:'',
    //         visa_interim:'',
    //         user_id_interim:'',
    //         section_id: "",
    //         programme_id: "",
    //         unite_administrative_id: "",
    //         action_id: "",
    //         sous_budget_id: "",
    //         activite_id: "",
    //         ligne_economique_id: "",
    //         entreprise_id: "",
    //         marche_id: "",
    //         type_financement_id: "",

    //         source_financement_id: "",
    //         montant_ordre_paiement: "",
    //         mode_paiement_id: "",
    //         gestionnaire_credit_non: "",
    //         gestionnaire_credit_date: "",
    //         gestionnaire_credit_fonction: "",
    //         controleur_financier_id: this.recupererIdUser(
    //           this.recupererIdServiceCF(this.formData.unite_administrative_id)
    //         ),
    //       };
    //     }
    //     } 
    //     else if(this.formData.typedepense == "Personnel")  {
    //       this.intitule =
    //         this.anneeAmort +
    //         "-" +
    //         this.tailleOpEnregistrer +
    //         "-" +
    //         this.formData.numero_ordre_paiement;
           
    //       var nouvelObjetOrdrePaiement78 = {
    //         exercice: this.anneeAmort,
    //         numero_op_prov_definitive:this.formData.numero_ordre_paiement,
    //         diff_op_personnel:this.formData.diff_op_personnel,
    //          mois_paiement: this.formData.mois_paiement,
    //         type_ordre_paiement: this.formData.type_ordre_paiement,
    //         numero_ordre_paiement: this.intitule,
    //         section_id: this.idSection(
    //           this.libelleLigneEconomiqueParent(
    //             this.formData.activite_id
    //           )
    //         ),
    //         programme_id: this.idProgramme(
    //           this.libelleLigneEconomiqueParent(
    //             this.formData.activite_id
    //           )
    //         ),
    //         unite_administrative_id: this.formData.unite_administrative_id,
    //         action_id: this.idAction(
    //           this.libelleLigneEconomiqueParent(
    //             this.formData.activite_id
    //           )
    //         ),
    //         sous_budget_id: this.formData.sous_budget_id,
    //         activite_id: this.formData.activite_id,
    //         ligne_economique_id: this.formData.ligne_economique_id,
    //         // entreprise_id:this.idEntreprise(this.formData2.marche_id),
    //         // marche_id:this.formData2.marche_id,

    //         grand_nature_id: this.GrandeNatureId(
    //           this.formData.ligne_economique_id
    //         ),

    //         type_financement_id: this.formData.type_financement_id,
    //         typedepense: this.formData.typedepense,
    //         source_financement_id: this.formData.bailler_id,
    //         montant_ordre_paiement: this.formData.montant_engage,
    //         mode_paiement_id: this.formData.mode_paiement_id,
    //         gestionnaire_credit_non: this.formData.gestionnaire_credit_non,
    //         gestionnaire_credit_date: this.formData.gestionnaire_credit_date,
    //         gestionnaire_credit_fonction: this.formData.gestionnaire_credit_fonction,

    //         date_interim: this.formData.date_interim,
    //         visa_interim: this.formData.visa_interim,
    //         user_id_interim: this.formData.user_id_interim,
    //         imterim_op: this.formData.imterim_op,
    //         personne_rattacher: this.formData.RattacherPers,



    //         controleur_financier_id: this.recupererIdUser(
    //           this.recupererIdServiceCF(this.formData.unite_administrative_id)
    //         ),
    //         auteur_perso_id: this.formData.auteur_perso_id,
    //         banque_perso: this.Recup_Banque(this.formData.auteur_perso_id),
    //         compte_perso: this.idCompte(this.Recup_Numero_cOMPTE(this.formData.auteur_perso_id)),
    //         // reference_autre_depense: this.formData45.reference_autre_depense,
    //         odjet_autre_depense: this.formData02.odjet_autre_depense,
    //         // livrable_autre_depense: this.formData45.livrable_autre_depense,
    //         // beneficiaire_autre_depense: this.formData45
    //           // .beneficiaire_autre_depense,
    //         geo_autre_depense: this.formData45.geo_autre_depense,
    //         dure_autre_depense: this.formData45.dure_autre_depense,
    //       };

    //       this.ajouterGestionOrdrePaiement(nouvelObjetOrdrePaiement78);
    //       this.formData = {
    //         exercice: this.anneeAmort,
    //         type_ordre_paiement: "",
    //         numero_ordre_paiement: "",
    //         date_interim:'',
    //       visa_interim:'',
    //       user_id_interim:'',
    //         section_id: "",
    //         programme_id: "",
    //         unite_administrative_id: "",
    //         action_id: "",
    //         sous_budget_id: "",
    //         activite_id: "",
    //         ligne_economique_id: "",
    //         entreprise_id: "",
    //         marche_id: "",
    //         type_financement_id: "",

    //         source_financement_id: "",
    //         montant_ordre_paiement: "",
    //         mode_paiement_id: "",
    //         gestionnaire_credit_non: "",
    //         gestionnaire_credit_date: "",
    //         gestionnaire_credit_fonction: "",
    //         controleur_financier_id: this.recupererIdUser(
    //           this.recupererIdServiceCF(this.formData.unite_administrative_id)
    //         ),
    //         nom_autre_depense: "",
    //         compte_autre_depense: "",
    //         adresse: "",
    //         reference_autre_depense: "",
    //         odjet_autre_depense: "",
    //         livrable_autre_depense: "",
    //         beneficiaire_autre_depense: "",
    //         geo_autre_depense: "",
    //         dure_autre_depense: "",
    //       };
    //     }
        
        
    //     else  {
    //       this.intitule =
    //         this.anneeAmort +
    //         "-" +
    //         this.tailleOpEnregistrer +
    //         "-" +
    //         this.formData.numero_ordre_paiement;
            
            
    //       var nouvelObjetOrdrePaiement1 = {
    //         exercice: this.anneeAmort,
    //         type_ordre_paiement: 2,
    //         numero_ordre_paiement: this.intitule,
    //         section_id: this.idSection(
    //           this.libelleLigneEconomiqueParent(
    //             this.formData.activite_id
    //           )
    //         ),
    //         programme_id: this.idProgramme(
    //           this.libelleLigneEconomiqueParent(
    //             this.formData.activite_id
    //           )
    //         ),
    //         unite_administrative_id: this.formData.unite_administrative_id,
    //         action_id: this.idAction(
    //           this.libelleLigneEconomiqueParent(
    //             this.formData.activite_id
    //           )
    //         ),
    //         sous_budget_id: this.formData.sous_budget_id,
    //         activite_id: this.formData.activite_id,
    //         ligne_economique_id: this.formData.ligne_economique_id,
    //         // entreprise_id:this.idEntreprise(this.formData2.marche_id),
    //         // marche_id:this.formData2.marche_id,

    //         grand_nature_id: this.GrandeNatureId(
    //           this.formData.ligne_economique_id
    //         ),

    //         type_financement_id: this.formData.type_financement_id,
    //         typedepense: this.formData.typedepense,
    //         source_financement_id: this.formData.bailler_id,
    //         montant_ordre_paiement: this.formData.montant_engage,
    //         mode_paiement_id: this.formData.mode_paiement_id,
    //         gestionnaire_credit_non: this.formData.gestionnaire_credit_non,
    //         gestionnaire_credit_date: this.formData.gestionnaire_credit_date,
    //         gestionnaire_credit_fonction: this.formData
    //           .gestionnaire_credit_fonction,

    //             date_interim: this.formData.date_interim,
    //         visa_interim: this.formData.visa_interim,
    //         user_id_interim: this.formData.user_id_interim,
    //         imterim_op: this.formData.imterim_op,
    //         personne_rattacher: this.formData.RattacherPers,

    //         controleur_financier_id: this.recupererIdUser(
    //           this.recupererIdServiceCF(this.formData.unite_administrative_id)
    //         ),
    //         nom_autre_depense: this.formData45.nom_autre_depense,
    //         compte_autre_depense: this.formData45.compte_autre_depense,
    //         adresse: this.formData45.adresse,
    //         reference_autre_depense: this.formData45.reference_autre_depense,
    //         autre_depense_id:this.formData.autre_depense_id,
    //         odjet_autre_depense: this.objetAutreDepense(this.formData.autre_depense_id),
    //         livrable_autre_depense: this.formData45.livrable_autre_depense,
    //         beneficiaire_autre_depense: this.formData45.beneficiaire_autre_depense,
    //         geo_autre_depense: this.formData45.geo_autre_depense,
    //         dure_autre_depense: this.formData45.dure_autre_depense,
    //         numero_op_prov_definitive:this.formData.numero_ordre_paiement,
    //       };

    //       this.ajouterGestionOrdrePaiement(nouvelObjetOrdrePaiement1);
    //       this.formData = {
    //         exercice: this.anneeAmort,
    //         type_ordre_paiement: "",
    //         numero_ordre_paiement: "",
    //         date_interim:'',
    //       visa_interim:'',
    //       user_id_interim:'',
    //         section_id: "",
    //         programme_id: "",
    //         unite_administrative_id: "",
    //         action_id: "",
    //         sous_budget_id: "",
    //         activite_id: "",
    //         ligne_economique_id: "",
    //         entreprise_id: "",
    //         marche_id: "",
    //         type_financement_id: "",

    //         source_financement_id: "",
    //         montant_ordre_paiement: "",
    //         mode_paiement_id: "",
    //         gestionnaire_credit_non: "",
    //         gestionnaire_credit_date: "",
    //         gestionnaire_credit_fonction: "",
    //         controleur_financier_id: this.recupererIdUser(
    //           this.recupererIdServiceCF(this.formData.unite_administrative_id)
    //         ),
    //         nom_autre_depense: "",
    //         compte_autre_depense: "",
    //         adresse: "",
    //         reference_autre_depense: "",
    //         odjet_autre_depense: "",
    //         livrable_autre_depense: "",
    //         beneficiaire_autre_depense: "",
    //         geo_autre_depense: "",
    //         dure_autre_depense: "",
    //       };
    //     }
     
    // },

    afficherModalAjouterFacture() {
      this.$("#exampleModal1").modal({
        backdrop: "static",
        keyboard: false,
      });
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
  width: 60%;
  margin: 0 -30%;
}
.ApercuFacture1 {
  width: 64%;
  margin: 0 -30%;

  border: 2px solid #000;
}
</style>
