
<template>
    <div>

        <div class="container-fluid">
            <h4 v-if="marcheDetail(marcheid)" >Detail Entreprise : {{marcheDetail(marcheid).raison_sociale}}  <button class="btn btn-danger btn-large" v-if="marcheDetail(marcheid).attribue==0">Marché en-cours de passation</button>
                </h4>
            <hr />

            <div class="widget-box">
                <div class="widget-content">
                    <div class="widget-content nopadding">
                        <table class="table table-striped table-bordered" v-if="detail_marche">
                            <thead>
                            <tr>
                                <th>Raison sociale</th>
                                <th>Compte contribuable</th>
                                <th>Registre commerce</th>
                                <th>Secteur activité</th>
                                <th>Pays</th>
                                <th>Ville</th>
                                <th>E-mail</th>
                                <th>Telephone</th>
                                <!-- <th>Banque</th> -->
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td class="taskDesc">{{detail_marche.raison_sociale	}}</td>
                                <td class="taskStatus">{{detail_marche.numero_cc}}</td>
                                <td class="taskOptions">
                                    {{detail_marche.numero_rc}}
                                </td>
                                <td class="taskOptions">
                                    {{detail_marche.varActivite.libelle}}
                                </td>
                                <!-- <td class="taskOptions">
                                    {{detail_marche.objetUniteAdministrative.libelle}}
                                </td> -->

                                <td class="taskOptions">
                                    {{getPays(detail_marche.pays)}}
                                </td>
                                <td class="taskOptions">
                                    {{getVille(detail_marche.ville)}}
                                </td>
                                 <td class="taskOptions">
                                    {{detail_marche.email}}
                                </td>
                                <td class="taskOptions">
                                    {{detail_marche.telephone}}
                                </td>
                                 <!-- <td class="taskOptions">
                                    {{detail_marche.id}}
                                </td> -->
                                <!-- <td class="taskOptions">
                                    {{detail_marche.banque}}
                                </td> -->
                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div class="row-fluid">
                <div class="span3">

                </div>
            </div>
            <div class="row-fluid">
                <div class="span12">
                    <div class="widget-box">
                        <div class="widget-title">
                            <ul class="nav nav-tabs">
                                <li class="active"><a data-toggle="tab" href="#tab1"> Compte bancaire</a></li>
                                <!-- <li class=""><a data-toggle="tab" href="#tab2">Liste des lots</a></li>
                                <li class=""><a data-toggle="tab" href="#tab3">Contratualisation</a></li> -->
                            </ul>
                        </div>
                       
                        <div class="widget-content tab-content">
                            <div id="tab1" class="tab-pane active">
                                <div class="span4"></div>
                                <div class="span4"></div>
                                <div class="span4" align="right">
                                    <a href="#myAlert" data-toggle="modal" class="btn btn-success" align="rigth">Ajouter un compte</a></div>
                                   <h4>Liste des comptes </h4>
                                   <div align="right">
                                  Recherche:
                             <input type="search" placeholder v-model="search" />
                                  </div>
                                <table class="table table-bordered table-striped" v-if="entreprises"  >
                                    <thead>
                                    <tr>

                                        <th>Banque</th>
                                        <!-- <th>Entreprise</th> -->
                                        <th>Date d'Ouverture</th>
                                        <th>Signataire</th>
                                        <th>Nature compte</th>
                                         <th>Swift</th>
                                        <th>Iban</th>
                                        <th>Rib</th>
                                       
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr class="odd gradeX" v-for="(appelOffre, index) in afficheCompteEntreprise(detail_marche.id)"
                                        :key="appelOffre.id">
                                        <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{appelOffre.varObjetBanque.libelle || 'Non renseigné'}}</td>
                                        <!-- <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{appelOffre.entreprise.raison_sociale || 'Non renseigné'}}</td> -->
                                        <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{formaterDate(appelOffre.date_ouverture_compte) || 'Non renseigné'}}</td>
                                        <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{appelOffre.signataire_compte || 'Non renseigné'}}</td>
                                         <td @dblclick="afficherModalModifierActeDepense(index)" v-if="appelOffre.nature_compte == 0" >Compte courant</td>
                                         <td @dblclick="afficherModalModifierActeDepense(index)" v-else >Non renseigné</td>
                                            
                                        <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{appelOffre.swift|| 'Non renseigné'}}</td>
                                       
                                        <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{appelOffre.iban || 'Non renseigné'}}</td>
                                             <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{appelOffre.rib || 'Non renseigné'}}</td>
                                            
                                        <div class="btn-group">
                                            <button @click.prevent="supprimerCompte(appelOffre.id)"  class="btn btn-danger ">
                                                <span class=""><i class="icon-trash"></i>Supprimer</span></button>

                                        </div>

                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                         



                        </div>
                          <div class="modal-footer">
        
        <a data-dismiss="modal" class="btn btn-danger" @click.prevent="retourListeEntreprise" href="#">Voir Tableau</a>
       
      </div>
                    </div>

                </div>
            </div>
        </div>


        <div id="myAlert" class="modal hide tailModal"  >
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter compte bancaire</h3>
            </div>
            <div class="modal-body">
               
                    <table class="table table-bordered table-striped">
                      <tr>
                           <td>
                        <div class="control-group">
                          <label>Entreprise</label>
                            <div class="controls">
                                <input type="text" readonly  class="span4" placeholder="" :value="detail_marche.raison_sociale">
                                  <input type="hidden" readonly  class="span" placeholder="" :value="detail_marche.id">
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
                                                            <option v-for="item in villesdyna(formData.pays_id)" 
                                                            :key="item.id" 
                                                            :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
                          </td>
                        
<td>
                              <div class="control-group">
                                                    <label class="control-label">Communes</label>
                                                    <div class="controls">
                                                        <select v-model="formData.commune_id" class="span4" :readOnly="verroCommune">
                                                            <option v-for="item in communeDynamiques(formData.ville_id)" 
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
                              
                            <select v-model="formData.banq_id" class="span4" :readOnly="verroBanque">
                                <option v-for="varText in banqueDynamiques(formData.commune_id)" :key="varText[0].banque_id"
                              :value="varText[0].banque_id">{{getLibelleBanque(varText[0].banque_id)}}</option>
                            </select>
                                
                            </div>
                        </div>
                          </td>
                            <td>
                        <div class="control-group">
                            <label>Code de la  agence</label>
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
                                <label>Nom de la Agence</label>
                                <input type="text" class="span4" placeholder="Saisir l'agence" :value="AffichierNomAgence" readonly>
                            </div>
                        </div>
                          </td>
                          <td>

                        <div class="control-group">
                            <label>Telephone agence</label>
                            <div class="controls">
                                <input type="text"  readonly   class="span4" placeholder="saisir le teleophone agence" :value="AffichierNumeroAgence">
                            </div>
                        </div>
                          </td>
                      </tr>
                     <tr>
                    

                        
                          <td>
                     
                        <div class="control-group">
                            <label>Situation geographique</label>
                            <div class="controls">
                                <input type="text" class="span4"  readonly  placeholder="sitaution geographique" :value="AffichierSituationGeoAgence">
                            </div>
                        </div>
                          </td>
                           <td>
                        <div class="control-group">
                            <div class="controls">
                                <label>Nature de compte</label>
                               
                           <select v-model="formData.nature_compte" class="span4">
                                                            <option></option>
                                                            <option value="0">Compte courant</option>
                                                           
                                                            
                                                        </select>
                            </div>
                        </div>
                          </td>
                             <td>
                       <div class="control-group">
                           
                             <label>Numero compte/cléRib</label>
                            <div class="controls">
                              
                            
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
                                <input type="text" class="span4" placeholder="saisir le signataire compte" v-model="formData.signataire_compte">
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
              @click.prevent="ajouterCompteLocal" class="btn btn-primary"
              href="#">Valider</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button>
 </div>
        </div>

        



  <div id="modifierCompte" class="modal hide tailModal" aria-hidden="true" style="display: none;">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier compte</h3>
            </div>
            <div class="modal-body">
                  <table class="table table-bordered table-striped">
                      <tr>
                           <td>
                        <div class="control-group">
                          <label>Entreprise</label>
                            <div class="controls">
                                <input type="text" readonly  class="span4" placeholder="" :value="detail_marche.raison_sociale">
                                  <input type="hidden" readonly  class="span" placeholder="" :value="detail_marche.id">
                            </div>
                        </div>
                          </td>
                           <td>
                              <div class="control-group">
                                                    <label class="control-label">Pays</label>
                                                    <div class="controls">
                                                        <select v-model="editCompte.pays_id" class="span4" >
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
                                                        <select v-model="editCompte.ville_id" class="span4" >
                                                            <option></option>
                                                            <option v-for="item in villesdynaModifier(editCompte.pays_id)" 
                                                            :key="item.id" 
                                                            :value="item.id">
                                                                {{LibelledeLaVille(item.ville_id)}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
                          </td>
                        
 <td>
                              <div class="control-group">
                                                    <label class="control-label">Communes{{editCompte.ville_id}}</label>
                                                    <div class="controls">
                                                        <select v-model="editCompte.commune_id" class="span4" >
                                                           <option v-for="item in communeDynamiques(editCompte.ville_id)" 
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
                              
                            <select v-model="editCompte.banq_id" class="span4" >
                                <option v-for="varText in banqueDynamiques(editCompte.commune_id)" :key="varText[0].banque_id"
                              :value="varText[0].banque_id">{{varText[0].getLibelleBanque(varText[0].banque_id)}}</option>
                            </select>
                                
                            </div>
                        </div>
                          </td>
                            <td>
                        <div class="control-group">
                            <label>Code de la  agence</label>
                            <div class="controls">
                                <select v-model="editCompte.numero_agence" class="span4" :readOnly="verroCodeAgence">
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
                                <label>Nom de la Agence</label>
                                <input type="text" class="span4" placeholder="Saisir l'agence" :value="AffichierNomAgenceModifier" readonly>
                            </div>
                        </div>
                          </td>
                          <td>

                        <div class="control-group">
                            <label>Telephone agence</label>
                            <div class="controls">
                                <input type="text"  readonly   class="span4" placeholder="saisir le teleophone agence" :value="AffichierNumeroAgenceModifier">
                            </div>
                        </div>
                          </td>
                      </tr>
                     <tr>
                    

                        
                               
                          <td>
                     
                        <div class="control-group">
                            <label>Situation geographique</label>
                            <div class="controls">
                                <input type="text" class="span4"  readonly  placeholder="sitaution geographique" :value="AffichierSituationGeoAgenceModifier">
                            </div>
                        </div>
                          </td>
<td>
                        <div class="control-group">
                            <div class="controls">
                                <label>Nature de compte</label>
                                <!-- <input type="text" class="span" placeholder="saisir la nature de compte" v-model="editCompte.nature_compte"> -->
                           <select v-model="editCompte.nature_compte" class="span4">
                                                            <option></option>
                                                            <option value="0">Compte courant</option>
                                                           
                                                            
                                                        </select>
                            </div>
                        </div>
                          </td>
                           <td>
                       <div class="control-group">
                           
                             <label>Numero compte/cléRib</label>
                            <div class="controls">
                              
                            <!-- <select v-model="formData.entrepse_id" class="span">
                                <option v-for="varText in entreprises" :key="varText.id"
                              :value="varText.id">{{varText.raison_sociale}}</option>
                            </select> -->
                                  <div class="controls">
                                <input type="text" class="span3" placeholder="" v-model="editCompte.numero_compte"> <input type="text" class="span1" placeholder="" v-model="editCompte.clerib">
                            </div>
                            </div>
                        </div>
                          </td>
                           <td>
                        <div class="control-group">
                          <label>Date d'ouverture</label>
                            <div class="controls">
                                <input type="date" class="span4" placeholder="" v-model="editCompte.date_ouverture_compte">
                            </div>
                        </div>
                          </td>
                      </tr>
                      
 
                    <tr>
                          <td>
                     
                        <div class="control-group">
                          <label>Signature</label>
                            <div class="controls">
                                <input type="text" class="span4" placeholder="saisir le signataire compte" v-model="editCompte.signataire_compte">
                            </div>
                        </div>
                          </td>
<td>

                        <div class="control-group">
                            <div class="controls">
                                <label>Code SWIFT</label>
                                <input type="text" class="span4"  v-model="editCompte.swift">
                            </div>
                        </div>
                          </td>
                          <td>

                        <div class="control-group">
                            <div class="controls">
                                <label>IBAN</label>
                                <input type="text" class="span4"  v-model="editCompte.iban">
                            </div>
                        </div>
                          </td>
                           <td>

                        <div class="control-group">
                            <div class="controls">
                                <label>RIB</label>
                                <input type="text" class="span4"  :value="afficherCodeRibEditCompte" readonly>
                            </div>
                        </div>
                          </td>
                    </tr>
                    </table>
                
            </div>
            <div class="modal-footer">  <a @click.prevent="modifierCompteLocal(editCompte)"   class="btn btn-primary"
              href="#">Modifier</a> <a data-dismiss="modal" class="btn" href="#">Cancel</a> </div>
        </div>
        

      
 <!--<fab :actions="fabActions" @cache="afficherModalAjouterActeDepense" main-icon="apps" bg-color="green"></fab>-->
        <!-- <notifications  />
        <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
        <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterActeDepense()">Open</button> -->


    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
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
                
                detail_marche:{
                   numero_cc: "",
                    numero_rc: "",
                    raison_sociale: "",
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
                    entrepse_id:"",
                        banq_id:"",
                        pays_id:"",
                        ville_id:"",
                        commune_id:"",
                },
              editCompte:{
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

                ...mapGetters("gestionMarche", ["groupeAgenceBanque",'groupeVille','entreprises','banques','comptes','getCompte', 'getEntreptise','getPersonnaliseAgence','agenceBanques']),
...mapGetters("parametreGenerauxAdministratif", ["getterformeJuridique","getterregimeImpositions","getterplan_pays"]),
afficherCodeRib(){
      //  const section = this.sections.find(sect => sect.id == this.formData.section_id)
    
    const codeBanq = this.banques.find(codeBanq => codeBanq.id == this.formData.banq_id)
 const codeAgence = this.agenceBanques.find(codeAgence => codeAgence.code_agence == this.formData.numero_agence)
     if(codeBanq && codeAgence && this.formData.numero_compte  && this.formData.clerib ){
       return codeBanq.code_banque + codeAgence.code_agence + this.formData.numero_compte + this.formData.clerib
     }

     return ""
   },
   
afficherCodeRibEditCompte(){
      //  const section = this.sections.find(sect => sect.id == this.formData.section_id)
    
    const codeBanq = this.banques.find(codeBanq => codeBanq.id == this.editCompte.banq_id)
 const codeAgence = this.agenceBanques.find(codeAgence => codeAgence.code_agence == this.editCompte.numero_agence)
     if(codeBanq && codeAgence && this.editCompte.numero_compte  && this.editCompte.clerib ){
       return codeBanq.code_banque + codeAgence.code_agence + this.editCompte.numero_compte + this.editCompte.clerib
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
              compteFiltre(){
                  const st = this.search.toLowerCase();
                  return this.getCompte.filter((item)=>{
                      return item.entreprise.raison_sociale.toLowerCase().includes(st) ||
                              item.varObjetBanque.libelle.toLowerCase().includes(st) ||
                              item.agence.toLowerCase().includes(st)
                  })
              },

                 VilleDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.villes.filter(
            element => element.pays_id == id
          );
        }
      };
    },
            commuDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.communes.filter(
            element => element.ville_id == id
          );
        }
      };
    },
                 banqueDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.groupeAgenceBanque.filter(
            element => element[0].commune_id == id
          );
        }
      };
    },
getLibelleBanque() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.banques.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return null
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
        if (vM.editCompte.commune_id != null && vM.editCompte.banq_id != "") {
            // console.log(vM.editCompte.commune_id)     
            // console.log(vM.editCompte.banq_id)     
                return this.getPersonnaliseAgence.filter(element => {
                if(element.commune_id == vM.editCompte.commune_id &&  element.banque_id == vM.editCompte.banq_id ){
return element;
                }
                     
          }
            
          );
        }
        return null;
    },
  








     AffichierNomAgence() {
      if(this.formData.numero_agence==""){
        return "Pas de donnee"
      }
      else{
           const dureVie1 = this.agenceBanques.find(dureEquipe => dureEquipe.code_agence == this.formData.numero_agence);

      if (dureVie1) {
        return dureVie1.nom_agence;
      }
      }
     return ""
      // console.log(dureVie1)
      
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
      
      const dureVie1 = this.agenceBanques.find(dureEquipe => dureEquipe.code_agence == this.formData.numero_agence);

      if (dureVie1) {
        return dureVie1.id;
      }
      // console.log(dureVie1)
      return ""
    },


AffichierNomAgenceModifier() {
      
      const dureVie1 = this.agenceBanques.find(dureEquipe => dureEquipe.code_agence == this.editCompte.numero_agence);

      if (dureVie1) {
        return dureVie1.nom_agence;
      }
      // console.log(dureVie1)
      return ""
    },
    AffichierNumeroAgenceModifier() {
      
      const dureVie1 = this.agenceBanques.find(dureEquipe => dureEquipe.code_agence == this.editCompte.numero_agence);

      if (dureVie1) {
        return dureVie1.tel_agence;
      }
      // console.log(dureVie1)
      return ""
    },
AffichierSituationGeoAgenceModifier() {
      
      const dureVie1 = this.agenceBanques.find(dureEquipe => dureEquipe.code_agence == this.editCompte.numero_agence);

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
           
villesdyna() {
     return id => {
        if (id != null && id != "") {
          return this.getterplan_pays.filter(
            element => element.parent == id
          );
        }
      };
    },
    villesdynaModifier() {
     return id => {
        if (id != null && id != "") {
          return this.agenceBanques.filter(
            element => element.pays_id == id
          );
        }
      };
    },
    LibelledeLaVille() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterplan_pays.find(qtreel => qtreel.parent == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return ""
        }
      };
    },
    affichePays(){
        return this.getterplan_pays.filter(items=>items.parent == null );
    },


         communeDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.getterplan_pays.filter(
            element => element.parent == id
          );
        }
      };
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
          
            ...mapActions('gestionMarche', ["ajouterSanction", "ajouterCompte", "modifierCompte", "supprimerCompte"]),
            // formatageSomme: formatageSomme,
            


            //afiicher modal ajouter
            afficherModalAjouterActeDepense() {
                this.$("#exampleModal").modal({
                    backdrop: "static",
                    keyboard: false
                });
            },
            // fonction pour vider l'input ajouter
            ajouterCompteLocal(){
               // this.formData.marche_id=this.marcheid
               
               var nouvelObjet = {
      ...this.formData,
      entrepse_id :this.detail_marche.id,
      telephone_agence:this.AffichierNumeroAgence,
          situation_geographique_angence:this.AffichierSituationGeoAgence,
          agence:this.AffichierNomAgence,
         agence_id:this.AffichierIdAgence,
         rib:this.afficherCodeRib,
      
       };
                this.ajouterCompte(nouvelObjet)
                this.$('#myAlert').modal('hide');
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

            afficherModalModifierActeDepense(index){
                this.$('#modifierCompte').modal({
                    backdrop: 'static',
                    keyboard: false
                });

                this.editCompte = this.afficheCompteEntreprise(this.detail_marche.id)[index];
            },

            // vider l'input modifier 

            modifierCompteLocal(){
                var nouvelObjet = {
      ...this.editCompte,
      entrepse_id :this.detail_marche.id,
      telephone_agence:this.AffichierNumeroAgenceModifier,
          situation_geographique_angence:this.AffichierSituationGeoAgenceModifier,
          agence:this.AffichierNomAgenceModifier,
         agence_id:this.AffichierIdAgenceModifier,
         rib:this.afficherCodeRibEditCompte
      
       };
              this.modifierCompte(nouvelObjet)
              this.$('#modifierCompte').modal('hide');
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
pays_id