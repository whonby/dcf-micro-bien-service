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
                                        <th>Entreprise</th>
                                        <th>Date</th>
                                        <th>Signataire</th>
                                        <th>Nature compte</th>
                                        <th>Agence</th>
                                        <th>Situation geographique</th>
                                        <th>Numero agence</th>
                                        <th>Telephone </th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr class="odd gradeX" v-for="(appelOffre, index) in afficheCompteEntreprise(detail_marche.id)"
                                        :key="appelOffre.id">
                                        <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{appelOffre.varObjetBanque.libelle || 'Non renseigné'}}</td>
                                        <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{appelOffre.entreprise.raison_sociale || 'Non renseigné'}}</td>
                                        <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{formaterDate(appelOffre.date_ouverture_compte) || 'Non renseigné'}}</td>
                                        <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{appelOffre.signataire_compte || 'Non renseigné'}}</td>
                                        <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{appelOffre.nature_compte || 'Non renseigné'}}</td>
                                        <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{appelOffre.	agence|| 'Non renseigné'}}</td>
                                        <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{appelOffre.situation_geographique_angence || 'Non renseigné'}}</td>
                                        <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{appelOffre.numero_agence || 'Non renseigné'}}</td>
                                            <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{appelOffre.telephone_agence || 'Non renseigné'}}</td>
                                        <div class="btn-group">
                                            <button @click.prevent="supprimerCompte(appelOffre.id)"  class="btn btn-danger ">
                                                <span class=""><i class="icon-trash"></i></span></button>

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

<!-- Ajouter appel offres --->
        <div id="myAlert" class="modal hide glcompte" aria-hidden="true" style="display: none;">
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
                                <input type="text" readonly  class="span" placeholder="" :value="detail_marche.raison_sociale">
                                  <input type="text" readonly  class="span" placeholder="" :value="detail_marche.id">
                            </div>
                        </div>
                          </td>
                          <td>
                        <div class="control-group">
                             <label>Banque</label>
                            <div class="controls">
                              
                            <select v-model="formData.banque_id" class="span">
                                <option v-for="varText in banques" :key="varText.id"
                              :value="varText.id">{{varText.libelle}}</option>
                            </select>
                                
                            </div>
                        </div>
                          </td>
 <td>
                        <div class="control-group">
                            <div class="controls">
                                <label>Nature de compte</label>
                                <!-- <input type="text" class="span" placeholder="saisir la nature de compte" v-model="formData.nature_compte"> -->
                           <select v-model="formData.nature_compte">
                                                            <option></option>
                                                            <option value="0">Compte courant</option>
                                                           
                                                            
                                                        </select>
                            </div>
                        </div>
                          </td>
                       
                         
                      </tr>
                      <tr>
                             <td>
                       <div class="control-group">
                             <label>Numero compte</label>
                            <div class="controls">
                              
                            <!-- <select v-model="formData.entreprise_id" class="span">
                                <option v-for="varText in entreprises" :key="varText.id"
                              :value="varText.id">{{varText.raison_sociale}}</option>
                            </select> -->
                                  <div class="controls">
                                <input type="text" class="span" placeholder="" v-model="formData.numero_compte">
                            </div>
                            </div>
                        </div>
                          </td>
                           <td>
                        <div class="control-group">
                          <label>Date d'ouverture</label>
                            <div class="controls">
                                <input type="date" class="span" placeholder="" v-model="formData.date_ouverture_compte">
                            </div>
                        </div>
                          </td>
                          <td>
                     
                        <div class="control-group">
                          <label>Signature</label>
                            <div class="controls">
                                <input type="text" class="span" placeholder="saisir le signataire compte" v-model="formData.signataire_compte">
                            </div>
                        </div>
                          </td>

                         

                         
                      </tr>

                      <tr>
                          <td>

                        <div class="control-group">
                            <div class="controls">
                                <label>Agence</label>
                                <input type="text" class="span" placeholder="Saisir l'agence" v-model="formData.agence">
                            </div>
                        </div>
                          </td>

                          <td>
                        <div class="control-group">
                            <label>Code agence</label>
                            <div class="controls">
                                <input type="text" class="span" placeholder="saisir le numero agence" v-model="formData.numero_agence">
                            </div>
                        </div>
                          </td>
                          <td>

                        <div class="control-group">
                            <label>Telephone agence</label>
                            <div class="controls">
                                <input type="text" class="span" placeholder="saisir le teleophone agence" v-model="formData.telephone_agence">
                            </div>
                        </div>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <div class="control-group">
                                                    <label class="control-label">Ville:</label>
                                                    <div class="controls">
                                                        <select v-model="formData.ville_id">
                                                            <option></option>
                                                            <option v-for="item in villes" :key="item.id" :value="item.id">
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
                                                        <select v-model="formData.commune_id">
                                                            <option></option>
                                                            <option v-for="item in communeDynamiques(formData.ville_id)" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
                          </td>
                           <td>
                     
                        <div class="control-group">
                            <label>Situation geographique</label>
                            <div class="controls">
                                <input type="text" class="span" placeholder="sitaution geographique" v-model="formData.situation_geographique_angence">
                            </div>
                        </div>
                          </td>
                      </tr>
                    </table>
                
            </div>
            <div class="modal-footer">  <a @click.prevent="ajouterCompteLocal" class="btn btn-primary"
 href="#">Valider</a> <a data-dismiss="modal" class="btn" href="#">Cancel</a> </div>
        </div>

        <!-- Fin ajouter appel offres --->

        <!-- Modification appel offres --->



  <div id="modifierCompte" class="modal hide" aria-hidden="true" style="display: none;">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier compte</h3>
            </div>
            <div class="modal-body">
               
                    <table class="table table-bordered table-striped">
                      
                        <div class="control-group">
                             <label>Banque</label>
                            <div class="controls">
                              
                            <select v-model="editCompte.banque_id" class="span">
                                <option v-for="varText in banques" :key="varText.id"
                              :value="varText.id">{{varText.libelle}}</option>
                            </select>
                                
                            </div>
                        </div>
                        
                       <div class="control-group">
                             <label>Entreprise</label>
                            <div class="controls">
                              
                            <select v-model="editCompte.entreprise_id" class="span">
                                <option v-for="varText in entreprises" :key="varText.id"
                              :value="varText.id">{{varText.raison_sociale}}</option>
                            </select>
                                
                            </div>
                        </div>
                      
                        <div class="control-group">

                            <div class="controls">
                                <input type="date" class="span" placeholder="" v-model="editCompte.date_ouverture_compte">
                            </div>
                        </div>
                      
                     
                        <div class="control-group">

                            <div class="controls">
                                <input type="text" class="span" placeholder="saisir le signataire compte" v-model="editCompte.signataire_compte">
                            </div>
                        </div>
            
                        <div class="control-group">
                            <div class="controls">
                                <label>Nature de compte</label>
                                <input type="text" class="span" placeholder="saisir la nature de compte" v-model="editCompte.nature_compte">
                            </div>
                        </div>
                     

                        <div class="control-group">
                            <div class="controls">
                                <label>Agence</label>
                                <input type="text" class="span" placeholder="Saisir l'agence" v-model="editCompte.agence">
                            </div>
                        </div>
                       
                     
                        <div class="control-group">
                            <div class="controls">
                                <input type="text" class="span" placeholder="sitaution geographique" v-model="editCompte.situation_geographique_angence">
                            </div>
                        </div>
                        
                        <div class="control-group">
                            <div class="controls">
                                <input type="text" class="span" placeholder="saisir le numero agence" v-model="editCompte.numero_agence">
                            </div>
                        </div>
                      

                        <div class="control-group">
                            <div class="controls">
                                <input type="text" class="span" placeholder="saisir le teleophone agence" v-model="editCompte.telephone_agence">
                            </div>
                        </div>
                    
                    </table>
                
            </div>
            <div class="modal-footer">  <a @click.prevent="modifierCompteLocal" class="btn btn-primary"
              href="#">Modifier</a> <a data-dismiss="modal" class="btn" href="#">Cancel</a> </div>
        </div>
        <!-- Modification fin appel offres --->

      
 <!--<fab :actions="fabActions" @cache="afficherModalAjouterActeDepense" main-icon="apps" bg-color="green"></fab>-->
        <notifications  />
        <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
        <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterActeDepense()">Open</button>


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
                    entreprise_id:"",
                    	banque_id:"",
                },
              editCompte:{
                date_ouverture_compte:"",
                    signataire_compte:"",
                    nature_compte:"",
                    	agence:"",
                    	situation_geographique_angence:"",
                    	numero_agence:"",
                    telephone_agence:"",
                    entreprise_id:"",
                    	banque_id:"",

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

                ...mapGetters("gestionMarche", [ 'entreprises','banques','comptes','getCompte', 'getEntreptise']),

              
              compteFiltre(){
                  const st = this.search.toLowerCase();
                  return this.getCompte.filter((item)=>{
                      return item.entreprise.raison_sociale.toLowerCase().includes(st) ||
                              item.varObjetBanque.libelle.toLowerCase().includes(st) ||
                              item.agence.toLowerCase().includes(st)
                  })
              },
               communeDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.communes.filter(
            element => element.ville_id == id
          );
        }
      };
    },
    getPays() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.pays.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
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
      return 0
        }
      };
    },
    afficheCompteEntreprise() {
      return id => {
        if (id != null && id != "") {
          return this.getCompte.filter(
            element => element.entreprise_id == this.detail_marche.id
          );
        }
      };
    },
// listeCompte(){.
//     return this.getCompte.filter(compt => compt.id == entreprise_id)
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
      entreprise_id :this.detail_marche.id,
      
       };
                this.ajouterCompte(nouvelObjet)
                this.formData = {
                    date_ouverture_compte:"",
                    signataire_compte:"",
                    nature_compte:"",
                    	agence:"",
                    	situation_geographique_angence:"",
                    	numero_agence:"",
                    telephone_agence:"",
                    entreprise_id:"",
                    	banque_id:"",

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

                this.editCompte = this.comptes[index];
            },

            // vider l'input modifier 

            modifierCompteLocal(){
              
              this.modifierCompte(this.editCompte)
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
 width: 1000px;
 margin: 0 -580px;
 height: 500px;
    }
    .glcompte
    {

 width: 800px;
 margin: 0 -330px;
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
