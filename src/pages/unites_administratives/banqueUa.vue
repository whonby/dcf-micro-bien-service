 
<template>
  <div>
     <notifications  />
    <!--//////////////////////////// debut modal d ajout ///////////////////////-->
    
            <div id="myAlert" class="modal hide tailModal"  >
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter un compte bancaire</h3>
            </div>
            <div class="modal-body">
               
                    <table class="table table-bordered table-striped">
                      <tr>
                         <td>
                        <div class="control-group">
                        <label class="control-label">Unité Administrative</label>
                        <div class="controls">
                        <select v-model="formData.ua_id" class="span4">
                        <option
                         v-for="UniteA in uniteAdministratives"
                         :key="UniteA.id"
                         :value="UniteA.id"
                        >{{UniteA.libelle}}</option>
                        </select>
                       </div>
                       </div>
                    </td>
                        
                        
                           <td>
                              <div class="control-group">
                                                    <label class="control-label">Pays</label>
                                                    <div class="controls">
                                                        <select v-model="formData.pays_id" class="span4" >
                                                            <option></option>
                                                            <option v-for="item in affichePays" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                          </td>
                           <td>
                              <div class="control-group">
                                                    <label class="control-label">Ville:</label>
                                                    <div class="controls">
                                                        <select v-model="formData.ville_id" class="span4" :readOnly="verroVille">
                                                            <option></option>
                                                            <option v-for="item in villeDynamiques(formData.pays_id)" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
                          </td>
                        
<td>
                              <div class="control-group">
                                                    <label class="control-label">Commune</label>
                                                    <div class="controls">
                                                        <select v-model="formData.commune_id" class="span4" :readOnly="verroCommune">
                                                            <option
                        v-for="localgeo in CommuneDynamiques(formData.ville_id)"
                        :key="localgeo.id"
                        :value="localgeo.id"
                      >{{localgeo.libelle}}</option>

                                                        </select>
                                                    </div>
                                                </div>
                          </td>
                       
                         
                      </tr>
                      <tr>
                            
                            <td>
                        <div class="control-group">
                             <label>Banque</label>
                            <div class="controls">
                              
                            <select v-model="formData.banq_id" class="span4" :readOnly="verroBanque">
                                <option v-for="varText in banqueDynamiques(formData.commune_id)" :key="varText.afficheBanque.id"
                              :value="varText.afficheBanque.id">{{varText.afficheBanque.libelle}}</option>
                            </select>
                                
                            </div>
                        </div>
                          </td>
                            <td>
                        <div class="control-group">
                            <label>Code de l'agence</label>
                            <div class="controls">
                                <select v-model="formData.numero_agence" class="span4" :readOnly="verroCodeAgence">
                                                            <option></option>
                                                            <option v-for="item in codeAgenceDynamiques" :key="item.id" :value="item.code_agence">
                                                                {{item.code_agence}}
                                                            </option>
                                </select>
                            </div>
                        </div>
                          </td>
                          
                                <td>

                        <div class="control-group">
                            <div class="controls">
                                <label>Nom de l'agence</label>
                                <input type="text" class="span4" placeholder="Saisir l'agence" :value="AffichierNomAgence" readonly>
                            </div>
                        </div>
                          </td>
                          <td>

                        <div class="control-group">
                            <label>Téléphone de l'agence</label>
                            <div class="controls">
                                <input type="text"  readonly   class="span4" placeholder="Saisir le téléphone de l'agence" :value="AffichierNumeroAgence">
                            </div>
                        </div>
                          </td>
                      </tr>
                     <tr>
                    

                        
                          <td>
                     
                        <div class="control-group">
                            <label>Situation géographique</label>
                            <div class="controls">
                                <input type="text" class="span4"  readonly  placeholder="Situation géographique" :value="AffichierSituationGeoAgence">
                            </div>
                        </div>
                          </td>
                           <td>
                        <div class="control-group">
                            <div class="controls">
                                <label>Nature de compte</label>
                                <!-- <input type="text" class="span" placeholder="saisir la nature de compte" v-model="formData.nature_compte"> -->
                           <select v-model="formData.nature_compte" class="span4">
                                                            <option></option>
                                                            <option value="0">Compte courant</option>
                                                           
                                                            
                                                        </select>
                            </div>
                        </div>
                          </td>
                             <td>
                       <div class="control-group">
                           
                             <label>Numéro de compte/cléRib</label>
                            <div class="controls">
                              
                            <!-- <select v-model="formData.entrepse_id" class="span">
                                <option v-for="varText in entreprises" :key="varText.id"
                              :value="varText.id">{{varText.ua_id}}</option>
                            </select> -->
                                  <div class="controls">
                                <input type="text" class="span3" placeholder="" v-model="formData.numero_compte"> <input type="text" class="span1" placeholder="" v-model="formData.clerib">
                            </div>
                            </div>
                        </div>
                          </td>
                           <td>
                        <div class="control-group">
                          <label>Date d'ouverture</label>
                            <div class="controls">
                                <input type="date" class="span4" placeholder="" v-model="formData.date_ouverture_compte">
                            </div>
                        </div>
                          </td>
                      </tr>
                      <tr>
                          
                        
                         

                         
                      </tr>
 
                    <tr>
                          <td>
                     
                        <div class="control-group">
                          <label>Signature</label>
                            <div class="controls">
                                <input type="text" class="span4" placeholder="Saisir le signataire du compte" v-model="formData.signataire_compte">
                            </div>
                        </div>
                          </td>
<td>

                        <div class="control-group">
                            <div class="controls">
                                <label>Code SWIFT</label>
                                <input type="text" class="span4"  v-model="formData.swift">
                            </div>
                        </div>
                          </td>
                          <td>

                        <div class="control-group">
                            <div class="controls">
                                <label>IBAN</label>
                                <input type="text" class="span4"  v-model="formData.iban">
                            </div>
                        </div>
                          </td>
                           <td>

                        <div class="control-group">
                            <div class="controls">
                                <label>RIB</label>
                                <input type="text" class="span4"  :value="afficherCodeRib" readonly>
                            </div>
                        </div>
                          </td>
                    </tr>
                    </table>
                
            </div>
            
            <div class="modal-footer"> 
              
  <button 
              @click.prevent="ajouterBanqueUaLocal" class="btn btn-primary"
              href="#">Valider</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button>
 </div>
        </div>

        <!-- Fin ajouter appel offres --->

        <!-- Modification appel offres --->



  <div id="modifierBanqueUa" class="modal hide tailModal" aria-hidden="true" style="display: none;">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier compte</h3>
            </div>
            <div class="modal-body">
                  <table class="table table-bordered table-striped">
                      <tr>
                            <td>
                           <div class="control-group">
                            <label class="control-label">Unité Administrative</label>
                            <div class="controls">
                          <select v-model="editBanqueUa.ua_id" class="span4">
                           <option
                             v-for="UniteA in uniteAdministratives"
                             :key="UniteA.id"
                             :value="UniteA.id"
                           >{{UniteA.libelle}}</option>
                          </select>
                         </div>
                        </div>
                         </td>
                       
                       
                       
                           <td>
                              <div class="control-group">
                                                    <label class="control-label">Pays</label>
                                                    <div class="controls">
                                                        <select v-model="editBanqueUa.pays_id" class="span4" >
                                                            <option></option>
                                                            <option v-for="item in affichePays" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
                          </td>
                           <td>
                              <div class="control-group">
                                                    <label class="control-label">Ville:</label>
                                                    <div class="controls">
                                                        <select v-model="editBanqueUa.ville_id" class="span4" :readOnly="verroVille">
                                                           <option></option>
                                                            <option v-for="item in villeDynamiques(editBanqueUa.pays_id)" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
                          </td>
                        
                         <td>
                              <div class="control-group">
                                                    <label class="control-label">Commune</label>
                                                    <div class="controls">
                                                        <select v-model="editBanqueUa.commune_id" class="span4" :readOnly="verroCommune">
                                                            <option></option>
                                                            <option v-for="item in CommuneDynamiques(editBanqueUa.ville_id)" 
                                                            :key="item.id" 
                                                            :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
                          </td>
                       
                         
                      </tr>
                      <tr>
                           
                            <td>
                        <div class="control-group">
                             <label>Banque</label>
                            <div class="controls">
                              
                            <select v-model="editBanqueUa.banq_id" class="span4" :readOnly="verroBanque">
                                <option v-for="varText in banqueDynamiques(editBanqueUa.commune_id)" :key="varText.afficheBanque.id"
                              :value="varText.afficheBanque.id">{{varText.afficheBanque.libelle}}</option>
                            </select>
                                
                            </div>
                        </div>
                          </td>
                            <td>
                        <div class="control-group">
                            <label>Code de l'agence</label>
                            <div class="controls">
                                <select v-model="editBanqueUa.numero_agence" class="span4" :readOnly="verroCodeAgence">
                                                            <option></option>
                                                            <option v-for="item in codeAgenceDynamiquesModifier" :key="item.id" :value="item.code_agence">
                                                                {{item.code_agence}}
                                                            </option>
                                </select>
                            </div>
                        </div>
                          </td>
                           <td>

                        <div class="control-group">
                            <div class="controls">
                                <label>Nom de l'agence</label>
                                <input type="text" class="span4" placeholder="Saisir l'agence" :value="AffichierNomAgenceModifier" readonly>
                            </div>
                        </div>
                          </td>
                          <td>

                        <div class="control-group">
                            <label>Téléphone de l'agence</label>
                            <div class="controls">
                                <input type="text"  readonly   class="span4" placeholder="Saisir le téléphone agence" :value="AffichierNumeroAgenceModifier">
                            </div>
                        </div>
                          </td>
                      </tr>
                     <tr>
                    

                        
                               
                          <td>
                     
                        <div class="control-group">
                            <label>Situation géographique</label>
                            <div class="controls">
                                <input type="text" class="span4"  readonly  placeholder="sitaution geographique" :value="AffichierSituationGeoAgenceModifier">
                            </div>
                        </div>
                          </td>
                    <td>
                        <div class="control-group">
                            <div class="controls">
                                <label>Nature de compte</label>
                                <!-- <input type="text" class="span" placeholder="saisir la nature de compte" v-model="editBanqueUa.nature_compte"> -->
                           <select v-model="editBanqueUa.nature_compte" class="span4">
                                                            <option></option>
                                                            <option value="0">Compte courant</option>
                                                           
                                                            
                                                        </select>
                            </div>
                        </div>
                          </td>
                           <td>
                       <div class="control-group">
                           
                             <label>Numéro de compte/cléRib</label>
                            <div class="controls">
                              
                            <!-- <select v-model="formData.entrepse_id" class="span">
                                <option v-for="varText in entreprises" :key="varText.id"
                              :value="varText.id">{{varText.ua_id}}</option>
                            </select> -->
                                  <div class="controls">
                                <input type="text" class="span3" placeholder="" v-model="editBanqueUa.numero_compte"> <input type="text" class="span1" placeholder="" v-model="editBanqueUa.clerib">
                            </div>
                            </div>
                        </div>
                          </td>
                           <td>
                        <div class="control-group">
                          <label>Date d'ouverture</label>
                            <div class="controls">
                                <input type="date" class="span4" placeholder="" v-model="editBanqueUa.date_ouverture_compte">
                            </div>
                        </div>
                          </td>
                      </tr>
                      
 
                    <tr>
                          <td>
                     
                        <div class="control-group">
                          <label>Signature</label>
                            <div class="controls">
                                <input type="text" class="span4" placeholder="saisir le signataire compte" v-model="editBanqueUa.signataire_compte">
                            </div>
                        </div>
                          </td>
                     <td>

                        <div class="control-group">
                            <div class="controls">
                                <label>Code SWIFT</label>
                                <input type="text" class="span4"  v-model="editBanqueUa.swift">
                            </div>
                        </div>
                          </td>
                          <td>

                        <div class="control-group">
                            <div class="controls">
                                <label>IBAN</label>
                                <input type="text" class="span4"  v-model="editBanqueUa.iban">
                            </div>
                        </div>
                          </td>
                           <td>

                        <div class="control-group">
                            <div class="controls">
                                <label>RIB</label>
                                <input type="text" class="span4"  :value="afficherCodeRibeditBanqueUa" readonly>
                            </div>
                        </div>
                          </td>
                    </tr>
                    </table>
                
            </div>
            <div class="modal-footer">  <a @click.prevent="modifierBanqueUaLocal(editBanqueUa)"   class="btn btn-primary"
              href="#">Modifier</a> <a data-dismiss="modal" class="btn" href="#">Cancel</a> </div>
        </div>








<div class="container-fluid">
  <hr />
  <div class="row-fluid">
    <div class="span12">



                                <div>
                     <download-excel
                         class="btn btn-success pull-right"
                         style="cursor:pointer;"
                           :fields = "json_fields"
                           title="BanqueUa"
                           name ="BanqueUa"
                           worksheet = "Banque_Ua"
                         :data="banqueUa">
    <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>
                              </download-excel>
       <div  align="right" style="cursor:pointer;">
          <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
      </div>
                  </div> <br>








      <div class="widget-box">
        <div class="widget-title">
          <div align="right">
            Recherche:
            <input type="search" placeholder="" v-model="search" />
          </div>
          <span class="icon">
            <i class="icon-th"></i>
          </span>
          <h5>Liste des comptes bancaires</h5>
        </div>
        <div
          class="widget-content nopadding"
        
        >
          <table class="table table-bordered table-striped">
            <thead>
              <tr>
                
                 <th title="unite administrative"> UA</th>
 
 
 
 <th>Banque</th>
 <!-- <th>Code de la  agence</th> -->
 <!-- <th>Nom de la Agence</th> -->
 <!-- <th>Telephone agence</th> -->

 <th>Nature de compte</th>
 <!-- <th>Numero compte/cléRib</th> -->
 
 <!-- <th>Signature</th> -->
 <th>Code SWIFT</th>
 <th>IBAN</th>
 <th>RIB</th>
 <th>Date d'ouverture</th>
 <!-- <th>Pays</th> -->
<!-- <th>Ville</th> -->
<!-- <th>Communes</th> -->
 <!-- <th>Situation geographique</th> -->
 <th>Action</th>
                
                
                
                
                
                
                
                
                
                
              </tr>
            </thead>
            <tbody>
               <tr
   class="odd gradeX"
   v-for="(bankUa, index) in banqueUa"
   :key="bankUa.id"
 >
  
  <!-- <template v-if="uniteadministrative.type_ua_id = type_Unite_admins.id"> -->
   
   <td  @dblclick="afficherModalModifierbanqueUa(index)">{{afficherUa(bankUa.ua_id) }}</td>
     <td  @dblclick="afficherModalModifierbanqueUa(index)">{{afficheBanque(bankUa.banq_id) }}</td>
    
     <!-- <td  @dblclick="afficherModalModifierbanqueUa(index)">{{bankUa.signataire_compte }}</td> -->
   <td  @dblclick="afficherModalModifierbanqueUa(index)"><span v-if="bankUa.nature_compte == 0">Compte courant</span><span v-else>Non renseigné</span></td>
    <td  @dblclick="afficherModalModifierbanqueUa(index)">{{bankUa.swift }}</td>
   <!-- <td  @dblclick="afficherModalModifierbanqueUa(index)">{{bankUa.agence }}</td> -->
   <!-- <td  @dblclick="afficherModalModifierbanqueUa(index)">{{bankUa.situation_geographique_angence }}</td> -->
   <!-- <td  @dblclick="afficherModalModifierbanqueUa(index)">{{bankUa.numero_agence }}</td> -->
   <!-- <td  @dblclick="afficherModalModifierbanqueUa(index)">{{bankUa.telephone_agence }}</td> -->
  
   <!-- <td  @dblclick="afficherModalModifierbanqueUa(index)">{{bankUa.	commune_id }}</td> -->
   <!-- <td  @dblclick="afficherModalModifierbanqueUa(index)">{{bankUa.ville_id }}</td> -->
   <!-- <td  @dblclick="afficherModalModifierbanqueUa(index)">{{bankUa.numero_compte }}</td> -->
   <!-- <td  @dblclick="afficherModalModifierbanqueUa(index)">{{bankUa.pays_id }}</td> -->
   <!-- <td  @dblclick="afficherModalModifierbanqueUa(index)">{{bankUa.agence_id }}</td> -->
  <td  @dblclick="afficherModalModifierbanqueUa(index)">{{bankUa.iban }}</td>
   
   <td  @dblclick="afficherModalModifierbanqueUa(index)">{{bankUa.rib }}</td>
    <td  @dblclick="afficherModalModifierbanqueUa(index)">{{formaterDate(bankUa.date_ouverture_compte) }}</td>
   <!-- <td  @dblclick="afficherModalModifierbanqueUa(index)">{{bankUa.clerib }}</td> -->              
                <td>
                  <button
                    class="btn btn-danger"
                    @click="supprimerBanqueUa(bankUa.id)"
                  >
                    <span>
                      <i class="icon icon-trash"></i>
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

               <!-- <div class="pagination alternate">
       <ul>
         <li :class="{ disabled : page == 0 }"><a @click.prevent="precedent()" href="#">Précedent</a></li>
            <li  v-for="(titre, index) in partition(banqueUa,size).length" :key="index" :class="{ active : active_el == index }">
            <a @click.prevent="getDataPaginate(index)" href="#">{{index + 1}}</a></li>
         <li :class="{ disabled : page == partition(banqueUa,size).length -1 }"><a @click.prevent="suivant()" href="#">Suivant</a></li>
       </ul>
    </div>
 -->










        <!-- <div v-else> -->
          <!-- <p style="text-align:center;font-size:20px;color:red;">Aucune Unite Administrative</p> -->
        <!-- </div> -->
      </div>
    </div>
  </div>
</div>



    
    
    
    

    <fab :actions="fabActions" @cache="afficherModalAjouterActeDepense" bg-color="green"></fab>
  </div>
</template>
<script>
    import { mapGetters, mapActions } from "vuex";
    // import {partition} from '../../../../src/Repositories/Repository'
    import jsPDF from 'jspdf'
    import 'jspdf-autotable'
    import moment from 'moment';
    //import {getterDossierCandidats} from "../../../vuex/modules/fabrice/bienService/Getters";


    export default {
        name: 'compte',
        data() {
            return {
                fabActions: [
                    {
                        name: "cache",
                        icon: "add"
                    }

                ],
                json_fields:{
                  
                },
                
                detail_marche:{
                   numero_cc: "",
                    numero_rc: "",
                    // ua_id: "",
                    sigle: "",
                    secteur_activite_id: "",
                    activite_principale: "",
                    pays: "",
                    ville: "",
                    forme_juridique:"",
                    centre_impot:"",
                    regime_imposition:"",
                    capitale_sociale:"",
                    immatriculation_cnps:"",
                    date_enregistrement_cnps:"",
                    telephone:"",
                    email:"",
                    nbre_travailleur_permanent:"",
                    nbre_travailleur_journalier:"",
                    service_assiette_impot:"",
                    adresse:"",
                    banque:""
                },
          
                formData: {
                   date_ouverture_compte:"",
                    signataire_compte:"",
                    nature_compte:"",
                    	agence:"",
                    	situation_geographique_angence:"",
                    	numero_agence:"",
                    telephone_agence:"",
                    ua_id:"",
                        banq_id:"",
                        pays_id:"",
                        ville_id:"",
                        commune_id:"",
                },
              editBanqueUa:{
                date_ouverture_compte:"",
                    signataire_compte:"",
                    nature_compte:"",
                    	agence:"",
                    	situation_geographique_angence:"",
                    	numero_agence:"",
                    telephone_agence:"",
                    entrepse_id:"",
                    	banq_id:"",

              },
            search:""
                
            };
        },
created() {
            this.marcheid=this.$route.params.id
   this.detail_marche = this.getEntreptise.find(
       idmarche => idmarche.id == this.$route.params.id
   )
  /*  this.appel_offre_marche=this.appelOffres.filter( idmarche => idmarche.marche.id == this.$route.params.id)
    console.log(this.appel_offre_marche)*/
},
        computed: {
            ...mapGetters("bienService", [ "getMarchePersonnaliser","appelOffres","villes","communes","pays" ]),

                ...mapGetters("gestionMarche", [ 'groupeVille','entreprises','banques','comptes','getCompte', 'getEntreptise','getPersonnaliseAgence','agenceBanques']),
                ...mapGetters('uniteadministrative',[
    "plans_programmes",
 "uniteAdministratives",
 "afficheNiveauAction",
 "afficheNiveauActivite",
 "derniereNivoPlanBudgetaire",
 "banqueUa",
 "getPersonnaliseBudgetGeneralParPersonnel"
   
   
   ]),
    ...mapGetters("parametreGenerauxAdministratif", ["getterformeJuridique","getterregimeImpositions","getterplan_pays"]),
    afficherUa() {
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
     afficheBanque() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.banques.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
afficherCodeRib(){
      //  const section = this.sections.find(sect => sect.id == this.formData.section_id)
    
    const codeBanq = this.banques.find(codeBanq => codeBanq.id == this.formData.banq_id)
 const codeAgence = this.agenceBanques.find(codeAgence => codeAgence.code_agence == this.formData.numero_agence)
     if(codeBanq && codeAgence && this.formData.numero_compte  && this.formData.clerib ){
       return codeBanq.code_banque + codeAgence.code_agence + this.formData.numero_compte + this.formData.clerib
     }

     return ""
   },
afficherCodeRibeditBanqueUa(){
      //  const section = this.sections.find(sect => sect.id == this.formData.section_id)
    
    const codeBanq = this.banques.find(codeBanq => codeBanq.id == this.editBanqueUa.banq_id)
 const codeAgence = this.agenceBanques.find(codeAgence => codeAgence.code_agence == this.editBanqueUa.numero_agence)
     if(codeBanq && codeAgence && this.editBanqueUa.numero_compte  && this.editBanqueUa.clerib ){
       return codeBanq.code_banque + codeAgence.code_agence + this.editBanqueUa.numero_compte + this.editBanqueUa.clerib
     }

     return ""
   },



              verroPays() {
      return this.formData.banq_id == "";
    },
      verroVille() {
      return this.formData.pays_id == "";
    },
     verroCommune() {
      return this.formData.ville_id == "";
    },
    verroCodeAgence() {
      return this.formData.banq_id == "";
    },
     verroBanque() {
      return this.formData.commune_id == "";
    },
              // compteFiltre(){
                  // const st = this.search.toLowerCase();
                  // return this.getCompte.filter((item)=>{
                      // return item.entreprise.raison_sociale.toLowerCase().includes(st) ||
                              // item.varObjetBanque.libelle.toLowerCase().includes(st) ||
                              // item.agence.toLowerCase().includes(st)
                  // })
              // },

     villeDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.getterplan_pays.filter(
            element => element.parent == id
          );
        }
      };
    },
    affichePays(){
        return this.getterplan_pays.filter(items=>items.parent == null );
    },
    CommuneDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.getterplan_pays.filter(
            element => element.parent == id
          );
        }
      };
    },

                 banqueDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseAgence.filter(
            element => element.afficheCommune.id == id
          );
        }
      };
    },

    


     
    //   codeAgenceDynamiques() {
    //  return id => {
    //     if (id != null && id != "") {
    //       return this.getPersonnaliseAgence.filter(
    //         element => element.afficheBanque.id == id 
    //       );
    //     }
    //   };
    // },
codeAgenceDynamiques() {
      let vM=this;
        if (vM.formData.commune_id != null && vM.formData.banq_id != "") {
            // console.log(vM.formData.commune_id)     
            // console.log(vM.formData.banq_id)     
                return this.getPersonnaliseAgence.filter(element => {
                if(element.commune_id == vM.formData.commune_id &&  element.banque_id == vM.formData.banq_id ){
return element;
                }
                     
          }
            
          );
        }
        return null;
    },
codeAgenceDynamiquesModifier() {
      let vM=this;
        if (vM.editBanqueUa.commune_id != null && vM.editBanqueUa.banq_id != "") {
            // console.log(vM.editBanqueUa.commune_id)     
            // console.log(vM.editBanqueUa.banq_id)     
                return this.getPersonnaliseAgence.filter(element => {
                if(element.commune_id == vM.editBanqueUa.commune_id &&  element.banque_id == vM.editBanqueUa.banq_id ){
return element;
                }
                     
          }
            
          );
        }
        return null;
    },
  








     AffichierNomAgence() {
      
      const dureVie1 = this.agenceBanques.find(dureEquipe => dureEquipe.code_agence == this.formData.numero_agence);

      if (dureVie1) {
        return dureVie1.nom_agence;
      }
      // console.log(dureVie1)
      return ""
    },
    AffichierNumeroAgence() {
      
      const dureVie1 = this.agenceBanques.find(dureEquipe => dureEquipe.code_agence == this.formData.numero_agence);

      if (dureVie1) {
        return dureVie1.tel_agence;
      }
      // console.log(dureVie1)
      return ""
    },
AffichierSituationGeoAgence() {
      
      const dureVie1 = this.agenceBanques.find(dureEquipe => dureEquipe.code_agence == this.formData.numero_agence);

      if (dureVie1) {
        return dureVie1.situation_geo;
      }
      // console.log(dureVie1)
      return ""
    },

AffichierIdAgence() {
      
      const dureVie1 = this.agenceBanques.find(dureEquipe => dureEquipe.code_agence == this.formData.numero_agence);

      if (dureVie1) {
        return dureVie1.id;
      }
      // console.log(dureVie1)
      return ""
    },
AffichierIdAgenceModifier() {
      
      const dureVie1 = this.agenceBanques.find(dureEquipe => dureEquipe.code_agence == this.editBanqueUa.numero_agence);

      if (dureVie1) {
        return dureVie1.id;
      }
      // console.log(dureVie1)
      return ""
    },


AffichierNomAgenceModifier() {
      
      const dureVie1 = this.agenceBanques.find(dureEquipe => dureEquipe.code_agence == this.editBanqueUa.numero_agence);

      if (dureVie1) {
        return dureVie1.nom_agence;
      }
      // console.log(dureVie1)
      return ""
    },
    AffichierNumeroAgenceModifier() {
      
      const dureVie1 = this.agenceBanques.find(dureEquipe => dureEquipe.code_agence == this.editBanqueUa.numero_agence);

      if (dureVie1) {
        return dureVie1.tel_agence;
      }
      // console.log(dureVie1)
      return ""
    },
AffichierSituationGeoAgenceModifier() {
      
      const dureVie1 = this.agenceBanques.find(dureEquipe => dureEquipe.code_agence == this.editBanqueUa.numero_agence);

      if (dureVie1) {
        return dureVie1.situation_geo;
      }
      // console.log(dureVie1)
      return ""
    },










    getPays() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.pays.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return ""
        }
      };
    },
     getVille() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.villes.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return ""
        }
      };
    },
    afficheCompteEntreprise() {
      return id => {
        if (id != null && id != "") {
          return this.getCompte.filter(
            element => element.entrepse_id == this.detail_marche.id
          );
        }
      };
    },
// listeCompte(){.
//     return this.getCompte.filter(compt => compt.id == entrepse_id)
// },
          


            marcheDetail(){
                return  marche_id=>{
                    if (marche_id!="") {
                        return  this.entreprises.find(idmarche => idmarche.id == marche_id
                        )
                    }
                }

            },

            listeAppelOffre(){
                return  marche_id=>{
                    if (marche_id!="") {
         return this.appelOffres.filter( idmarche => idmarche.marche.id == marche_id)
                    }
                }

            },
           

            
          
          
           

           
           
         
           
      
          
           
//             acteDepenseFiltre(){

//      const searchTerm = this.search.toLowerCase();

// return this.acteDepense.filter((item) => {

//      return item.matricule.toLowerCase().includes(searchTerm)





//    }
// )
//    }


        },
        
        methods: {
          
            ...mapActions('gestionMarche', ["ajouterSanction", "ajouterCompte", "modifierBanqueUa", "supprimerCompte"]),
            // formatageSomme: formatageSomme,
            
           ...mapActions('uniteadministrative',["ajouterBanqueUa","modifierBanqueUa","supprimerBanqueUa"]),

// 
              //  pagination
          //  partition:partition,

            //  getDataPaginate(index){
            //  this.active_el = index;
            //  this.page=index
          //  },
          //  precedent(){
            //  this.active_el--
            //  this.page --
            // },
          // suivant(){
            //  this.active_el++
            //  this.page ++
          //  },
        genererEnPdf(){
  var doc = new jsPDF()
  // doc.autoTable({ html: this.natures_sections })
   var data = this.banqueUa;
    doc.setFontSize(8)
    doc.text(75,10,"LISTE DES COMPTES BANCAIRES")
  doc.autoTable(this.getColumns(),data)
doc.save('banque_Ua.pdf')
return 0
},
getColumns() {
    return [
        
        {title: " Ua", dataKey: "ua_id"},
        {title: "BANQUE", dataKey: "banq_id"},
      {title: "Nature de compte", dataKey: "nature_compte"},
 {title: " Code SWIFT", dataKey: "  swift"},
   {title: "IBAN", dataKey: "iban"},                                  
 {title: "RIB", dataKey: "rib"},
  {title: "Date d'ouverture de compte", dataKey: "date_ouverture_compte"},



        
    ];
},




            //afiicher modal ajouter
            afficherModalAjouterActeDepense() {
                this.$("#myAlert").modal({
                    backdrop: "static",
                    keyboard: false
                });
            },
            // fonction pour vider l'input ajouter
            ajouterBanqueUaLocal(){
               // this.formData.marche_id=this.marcheid
               
               var nouvelObjet = {
      ...this.formData,
    
      telephone_agence:this.AffichierNumeroAgence,
          situation_geographique_angence:this.AffichierSituationGeoAgence,
          agence:this.AffichierNomAgence,
         agence_id:this.AffichierIdAgence,
         rib:this.afficherCodeRib,
      
       };
                this.ajouterBanqueUa(nouvelObjet)
                this.formData = {
                    date_ouverture_compte:"",
                    signataire_compte:"",
                    nature_compte:"",
                    	agence:"",
                    	situation_geographique_angence:"",
                    	numero_agence:"",
                    telephone_agence:"",
                    entrepse_id:"",
                        banq_id:"",
                        pays_id:"",
                        ville_id:"",
                        commune_id:"",

                }
            },
           
             retourListeEntreprise(){
                 this.$router.push({ name: 'Entreprise' })
            },
      
            // afficher modal de modification

            afficherModalModifierbanqueUa(index){
                this.$('#modifierBanqueUa').modal({
                    backdrop: 'static',
                    keyboard: false
                });

                this.editBanqueUa = this.banqueUa[index];
            },

            // vider l'input modifier 

            modifierBanqueUaLocal(){
                var nouvelObjet = {
      ...this.editBanqueUa,
     
      telephone_agence:this.AffichierNumeroAgenceModifier,
          situation_geographique_angence:this.AffichierSituationGeoAgenceModifier,
          agence:this.AffichierNomAgenceModifier,
         agence_id:this.AffichierIdAgenceModifier,
         rib:this.afficherCodeRibeditBanqueUa
      
       };
              this.modifierBanqueUa(nouvelObjet)
              this.$('#modifierBanqueUa').modal('hide');
            },
          
           

           
// afficher modification demande ano

/* afficherModalModifierDemandeAno(index){
    this.$('#modificationDemandeAno').modal({
       backdrop:'static',
     keyboard:false
  })
  },*/     

          
            // formatage de date
            formaterDate(date) {
              return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },

            ExporterEnExel(){
                this.$refs.excel.click()
            }
        }
    };
</script>
<style scoped>
    .taillemodal {
        width: 800px;
        margin: 0 -380px;
    }
    .gdmodelfour
    {
 width: 100px;
 margin: 0 -580px;
 height: 500px;
    }
    .tailModal
    {

 width: 1590px;
 margin: 0 -790px;
 height: 500px;

    }
    .sommecolor{
        background-color: red;
        color:red;
        font-size: 120%;
        text-align: center;
        font-weight:bold;
    }
</style>



























































































