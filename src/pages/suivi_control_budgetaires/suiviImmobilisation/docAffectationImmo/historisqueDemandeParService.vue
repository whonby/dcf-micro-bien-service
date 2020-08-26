
<template>
  <div>


        
     
           

            <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#tab78965">MATERIEL EN UTLISATION       <span class="badge badge-important">{{afficheNombreEquipementEnCoursUtilidation}}</span></a>
                      </li>
                       <li>
                        <a data-toggle="tab" href="#tab4758">MATERIEL AMORTI          <span class="badge badge-important">{{afficheNombreEquipementAmortie}}</span></a>
                      </li>
                      <!-- <li>
                        <a data-toggle="tab" href="#tab3">AFFECTION DE LA DIRECTION</a>
                      </li> --> 
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                    <div id="tab78965" class="tab-pane active">
  <div class="widget-content nopadding" >
     <!-- <div align="right">
                Search:
                <input type="search" placeholder v-model="search"/>
              </div> -->
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     <!-- <th>Type UA</th> -->
                   <th>Année d'affectation</th>
                  
                     <th>Unit2 administrative</th>
                   
                    <th>Service</th>
                      <th>Article</th>
                    <th>Quantité</th>
                    <th>Durée de vie</th>
                    <!-- <th>Etat Immobilisation</th> -->
                    <th>Date mise en service</th>
                      <th>Montant</th>
                     <!-- <th>Année de l'amortissement</th> -->
                    <th colspan="2">Action</th>
                   
                   
                  </tr>
                </thead>
                <tbody>
                   <tr
                    class="odd gradeX"
                    v-for="(DmdImmo,index) in afficheEquipementEnCoursUtilidation"
                    :key="DmdImmo.id"
                  >
                  <td>{{DmdImmo.annee || 'Non renseigné'}}</td>
   
                    <td
                      
                    >{{afficherUniteAdministrative(DmdImmo.ua_id) || 'Non renseigné'}}</td> 
                     <td
                       
                    >{{afficheService(DmdImmo.service_id)  || 'Non renseigné'}}</td> 
                    
                  
                     
                     
                       <td 
                      
                    >{{DmdImmo.article_id || 'Non renseigné'}}</td>
                      <td 
                      
                    >{{DmdImmo.qte || 'Non renseigné'}}</td>
                      <td 
                      
                    >{{DmdImmo.dure_vie || 'Non renseigné'}}</td>
                      <!-- <td 
                      
                    >{{afficheEtatImmobilisation(DmdImmo.etatimmo_id) || 'Non renseigné'}}</td> -->
                 
                 <!-- <td>{{DmdImmo.annee_amortissement || 'Non renseigné'}}</td> -->
                 
                   <td>{{formaterDate(DmdImmo.date_mise_service) || 'Non renseigné'}}</td>
                    <td>{{formatageSomme(parseFloat(DmdImmo.valeurorigine)) || 'Non renseigné'}}</td>
                     <td colspan="2">
                          <button   class="btn btn-info " title="" @click="fonctionAjouterDemande(index)">
                <span class=""><i class="icon-pencil"></i></span></button>
                    
                     <router-link
                        :to="{name : 'AmortissementService', params: {id:DmdImmo.id}}"
                        class="btn btn-default"
                        title="Amortissement"
                      >
                        <span>
                          <i class="icon  icon-plus"></i>
                        </span>
                      </router-link>
                    
                     </td>
                    
                    

                  </tr>
                 
                </tbody>
              </table>
            </div>
          </div>
                            <div id="tab4758" class="tab-pane ">
  <div class="widget-content nopadding" >
     <!-- <div align="right">
                Search:
                <input type="search" placeholder v-model="search1"/>
              </div> -->
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     <!-- <th>Type UA</th> -->
                   <th>Année d'affectation</th>
                  
                     <th>Unité administrative</th>
                   
                    <th>Service</th>
                      <th>Article</th>
                    <th>Quantité</th>
                    <th>Durée de vie</th>
                    <!-- <th>Etat Immobilisation</th> -->
                    <th>Date de mise en service</th>
                      <th>Montant</th>
                     <!-- <th>Année de l'amortissement</th> -->
                    <th colspan="2">Action</th>
                   
                   
                  </tr>
                </thead>
                <tbody>
                   <tr
                    class="odd gradeX"
                    v-for="(DmdImmo,index) in afficheEquipementAmortie"
                    :key="DmdImmo.id"
                  >
                  <td>{{DmdImmo.annee || 'Non renseigné'}}</td>
   
                    <td
                      
                    >{{afficherUniteAdministrative(DmdImmo.ua_id) || 'Non renseigné'}}</td> 
                     <td
                       
                    >{{afficheService(DmdImmo.service_id)  || 'Non renseigné'}}</td> 
                    
                  
                     
                     
                       <td 
                      
                    >{{afficheFamille(DmdImmo.article_id) || 'Non renseigné'}}</td>
                      <td 
                      
                    >{{DmdImmo.qte || 'Non renseigné'}}</td>
                      <td 
                      
                    >{{DmdImmo.dure_vie || 'Non renseigné'}}</td>
                      <!-- <td 
                      
                    >{{afficheEtatImmobilisation(DmdImmo.etatimmo_id) || 'Non renseigné'}}</td> -->
                 
                 <!-- <td>{{DmdImmo.annee_amortissement || 'Non renseigné'}}</td> -->
                 
                   <td>{{formaterDate(DmdImmo.date_mise_service) || 'Non renseigné'}}</td>
                    <td>{{formatageSomme(parseFloat(DmdImmo.valeurorigine)) || 'Non renseigné'}}</td>
                     <td colspan="2">
                          <button   class="btn btn-info " title="" @click="fonctionAjouterDemande(index)">
                <span class=""><i class="icon-pencil"></i></span></button>
                    
                     <router-link
                        :to="{name : 'AmortissementService', params: {id:DmdImmo.id}}"
                        class="btn btn-default"
                        title="Amortissement"
                      >
                        <span>
                          <i class="icon  icon-plus"></i>
                        </span>
                      </router-link>
                    
                     </td>
                    
                    

                  </tr>
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
        <!-- <fab :actions="fabActions" @cache="afficherModalAjouterDmdImmobilisation" main-icon="apps" bg-color="green"></fab>
    <notifications  />
      <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
     <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterDmdImmobilisation()">Open</button>
 
  -->
 
              </table>
 
  </div>


    



   






<div id="demandeService" class="modal hide taillemodalFormulaire">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Formulaire de damande de matériel</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
            <td>
     <div class="control-group">
                <label class="control-label">Année budgétaire</label>
                <div class="controls">
                  <input
                    type="text"
                    readonly
                     v-model="editDemande.annee"
                    class="span12"
                   
                   
                  />
                </div>
              </div>
</td>
           <td>
                <div class="control-group">
                <label class="control-label">Unite administrative</label>
                <div class="controls">
                  <input
                    type="text"
                    readonly
                   :value="afficherUniteAdministrative(editDemande.ua_id)"
                    class="span12"
                   
                   
                  />
                </div>
              </div>
           </td>
        <td>
     <div class="control-group">
                <label class="control-label">Service</label>
                <div class="controls">
                  <input
                    type="text"
                    readonly
                     :value="afficheService(editDemande.service_id)"
                    class="span12"
                   
                   
                  />
                </div>
              </div>
</td>

           
          </tr>
          <tr>
          
       
  
          </tr>
          <tr>
           
                <td>
               <div class="control-group">
                <label class="control-label">Article</label>
                <div class="controls">
                  <input
                    type="text"
                    readonly
                    :value="afficheFamille(editDemande.article_id)"
                    class="span12"
                   
                   
                  />
                </div>
              </div>
           
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Cause inactivité  <span style="color:red">*</span>  </label>
                <div class="controls">
                  <select v-model="Demande.cause_inactivite" class="span12">
                    
                    <option
                      v-for="equipe in causeInactivite"
                      :key="equipe.id"
                      :value="equipe.id"
                    >{{equipe.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>
           
                <td>
               <div class="control-group">
                <label class="control-label">Quantite</label>
                <div class="controls">
                  <input
                    type="text"
                    readonly
                     v-model="editDemande.qte"
                    class="span12"
                   
                   
                  />
                </div>
              </div>
           
            </td>
          </tr>
          <tr>
           
                <td colspan="2">
               <div class="control-group">
                <label class="control-label">Cause de la demande <span style="color:red">*</span> </label>
                <div class="controls">
                  <textarea name="" id="" cols="30" rows="1" class="span12" v-model="Demande.cause_demande"></textarea>
                  
                </div>
              </div>
           
            </td>
           
                <td>
               <div class="control-group">
                <label class="control-label">durée de vie</label>
                <div class="controls">
                  <input
                    type="text"
                    readonly
                    
                    class="span12"
                   
                    v-model="editDemande.dure_vie"
                  />
                </div>
              </div>
           
            </td>
          </tr>
                    </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="AjouterDemande(editDemande)"
          class="btn btn-primary"
          href="#"
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>







<div id="demandeServiceConfirmation" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Confirmation de la Demande</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal" >
         
         <h2 style="text-align:center;font-size:14px;color:red">EQUIPEMENT SELECTIONNER EST EN COURS D'UTILISATION</h2>
         <p style="text-align:center;font-size:14px">Voulez-vous continuer la demande svp?</p>
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="afficheDemandeDeMateriel(formData)"
          class="btn btn-primary"
          href="#"
         
        >Oui</a>
        <a data-dismiss="modal" class="btn" href="#">Non</a>
      </div>
    </div>

   
    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->

 
    <!-- End Page Header -->
    <!-- Default Light Table -->
 

    <!-- <fab :actions="fabActions" @cache="afficherModalAjouterDmdImmobilisation" main-icon="apps" bg-color="green"></fab> -->
    <notifications  />
      <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
     <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterDmdImmobilisation()">Open</button>
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import { formatageSomme } from "../../../../Repositories/Repository";
import {admin,dcf,noDCfNoAdmin} from "../../../../Repositories/Auth"

export default {
  name: 'besionImmolisation',
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
        // {
        //   name: "alertMe",
        //   icon: "add_alert",
        //   class: ""
        // }
      ],
// json_fields: {
//         TYPE_UNITE_ADMINISTRATIVE: "typeUniteAdmin.libelle",
//         UNITE_ADMINISTRATIVE: "uniteAdminist.libelle",
//         DESIGNATION: "famille.libelle",
//         QUANTITE: "quantite",
//         PRIX_UNITAIRE: "prix_unitaire",
//         MONTANT_TOTAL: "montant_total",
//          DATE_DE_DEMANDE: "date_jour",
//       },
editDemande : {

ua_id: "",
 
  fonction_id:"",
  article_id:"",
  qte:"",
  
    dure_vie:"",
    acteur_id:"",
    unitezone_id:"",
},
      formData: {
        ua_id: "",
        uniteadmin_id:"",
        epuipement_id: "",
        famille_id: "",
        quantite: "",
        prix_unitaire: "",
        montant_total: "",
        date_jour: "",
        typeuniteadminist_id:"",
        historiqueqte:"",
        motif_demande:"0",
        date_motif:"",
        motif_ua:"0",
        qterealise:"0"
      },
      // editDmdImmo: {
      //   uniteadmin_id: "",
      //   famille_id: "",
      //   epuipement_id: "",
      //   quantite: "",
      //   prix_unitaire: "",
      //   montant_total: "",
      //   date_jour: "",
      //   typeuniteadminist_id:"",
      //   historiqueqte:"",
      //   date_motif:""
      // },
      Demande:{
cause_inactivite:"",
cause_demande:""
      },
      search: "",
      search1: ""
    };
  },
// created() {
//     this.formData = this.filtre_DmdImmo.find(
//       DmdImmo => DmdImmo.id == this.$route.params.id
//     )
// },
created() {
    this.formData = this.historiqueAffectationService.find(
      DmdImmo => DmdImmo.id == this.$route.params.id
    );

    //console.log(this.$router);
  },
  computed: {
     admin:admin,
      dcf:dcf,
      noDCfNoAdmin:noDCfNoAdmin,
     ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
    ...mapGetters("SuiviImmobilisation", [
      "causeInactivite",
      "trieUaImmobilisation",
      "equipements",
      "familles",
      "articles",
      "SommeQuantiteNonCouvert",
      "getAfficheArticle",
      "getPersoStock",
      "stockageArticles",
      "groupUatypeNorme",
      "groupUaNorme",
      "groupUaNormeFamille",
      "normeEquipements",
      "groupUaNormeEquipe",
      "groupUaNormeFonction",
      "getPersoNormeArticle",
      "services",
      "historiqueDemande",
      "type_Unite_admins",
      "getPersoListeDesNorme",
      "SommeQuantiteRealise",
      "nbreQuantiteDemande",
      "nbreQuantiteNonCouvert",
      "nbreQuantiteCouvert",
      "historiqueAffectationService",
      "EtatImmobilisations"
    ]),
     ...mapGetters("uniteadministrative", ["uniteAdministratives","directions","servicesua","uniteZones"]),
    ...mapGetters("parametreGenerauxAdministratif", ["type_Unite_admins"]),
...mapGetters("personnelUA", ["all_acteur_depense","acteur_depenses","personnaFonction","fonctions"]),



afficheEquipementEnCoursUtilidation() {
       


        if (this.noDCfNoAdmin){
            let colect=[];
            this.historiqueAffectationService.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
                
            })
           return colect.filter(items => items.annee_amortissement >= this.nombreJourTraitementCalucle);
        }

      return this.historiqueAffectationService.filter(items => items.annee_amortissement >= this.nombreJourTraitementCalucle);

    },


afficheEquipementAmortie() {
       


        if (this.noDCfNoAdmin){
            let colect=[];
            this.historiqueAffectationService.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                
               if (val!=undefined){
                    colect.push(item)
                    return item
                }
               
            })
           return colect.filter(items=>items.annee_amortissement < this.nombreJourTraitementCalucle)
        }

      return this.historiqueAffectationService.filter(items=>items.annee_amortissement < this.nombreJourTraitementCalucle)

    },


 nombreJourTraitementCalucle(){
   let date = new Date();
        let aaaa = date.getFullYear();
       
        let cur_day = aaaa ;

        return cur_day


    
    // return cur_day + " " + hours + ":" + minutes + ":" + seconds;
   },
    // afficheEquipementEnCoursUtilidation() {
    //   const st = this.search.toLowerCase();
    //   return this.afficheEquipementEnCoursUtilidation.filter(type => {
    //     return (
    //       type.matricule_auteur.toLowerCase().includes(st) 
    //     );
    //   });
    // },

// filtreMaterielAmortis() {
//       const st = this.search1.toLowerCase();
//       return this.afficheEquipementAmortie.filter(type => {
//         return (
//           type.matricule_auteur.toLowerCase().includes(st) 
//         );
//       });
//     },
    afficheNombreEquipementEnCoursUtilidation() {
   
    return this.afficheEquipementEnCoursUtilidation.length;     
      
    },
    afficheNombreEquipementAmortie() {
   
    return this.afficheEquipementAmortie.length;     
      
    },
// afficheEquipementEnCoursUtilidation() {
   
//     return this.historiqueAffectationService.filter(qtreel => qtreel.annee_amortissement >= this.nombreJourTraitementCalucle);     
      
//     },
//     afficheEquipementAmortie() {
   
//     return this.historiqueAffectationService.filter(qtreel => qtreel.annee_amortissement < this.nombreJourTraitementCalucle);     
      
//     },
afficheEtatImmobilisation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.EtatImmobilisations.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },





afficheFamille() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.familles.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },
afficheService() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.services.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },
afficheUniteZone() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteZones.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },
  afficherUniteAdministrative() {
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
afficherActeurDepense() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.all_acteur_depense.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.nom.concat('     ',qtereel.prenom);
      }
      return 0
        }
      };
    },
afficherMatriculeActeurDepense() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.all_acteur_depense.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.matricule;
      }
      return 0
        }
      };
    },


 uniteAdministrativeDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.getPersoListeDesNorme.filter(element => element.typeua_id == id);
        }
      };
    },
fonctionDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.getPersoListeDesNorme.filter(element => element.ua_id == id);
        }
      };
    },
    equipementDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.getPersoListeDesNorme.filter(element => element.fonction_id == id);
        }
      };
    },


    
    familleDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.getPersoListeDesNorme.filter(element => element.fonction_id == id);
        }
      };
    },
     normeequipement() {
      
      const norme = this.getPersoListeDesNorme.find(normeEquipe => normeEquipe.fonctionActeur.id == this.formData.fonction_id);

      if (norme) {
        return norme.quantite;
      }
      return 0
    },

qtedemande() {
      
      const norme = this.getPersoListeDesNorme.find(normeEquipe => normeEquipe.familleArt.id == this.formData.famille_id);

      if (norme) {
        return norme.normedmd;
      }
      return 0
    },
    qtedemandemodifier() {
      
      const norme = this.getPersoListeDesNorme.find(normeEquipe => normeEquipe.familleArt.id == this.editDmdImmo.famille_id);

      if (norme) {
        return norme.normedmd;
      }
      return 0
    },

    totalNormemodifier() {
      const val = parseFloat(this.qtedemandemodifier) + parseFloat(this.editDmdImmo.quantite);
      return parseFloat(val).toFixed(0);
    },
totalNorme() {
      const val = parseFloat(this.qtedemande) + parseFloat(this.formData.quantite);
      return parseFloat(val).toFixed(0);
    },



    normeequipementModifier() {
      
      const norme = this.getPersoListeDesNorme.find(normeEquipe => normeEquipe.familleArt.id == this.editDmdImmo.famille_id);

      if (norme) {
        return norme.quantite;
      }
      return 0
    },
     dureVieEquipement() {
      
      const norme = this.getPersoListeDesNorme.find(normeEquipe => normeEquipe.familleArt.id == this.formData.famille_id);

      if (norme) {
        return norme.dureviearticle;
      }
      return 0
    },
     dureVieEquipementModifier() {
      
      const norme = this.getPersoListeDesNorme.find(normeEquipe => normeEquipe.familleArt.id == this.editDmdImmo.famille_id);

      if (norme) {
        return norme.dureviearticle;
      }
      return 0
    },
    
 articleDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.getPersoStock.filter(element => element.famill_id == this.formData.famille_id);
        }
      };
    },


 articleDynamiquesModifier() {
      return id => {
        if (id != null && id != "") {
          return this.getPersoStock.filter(element => element.famill_id == this.editDmdImmo.famille_id);
        }
      };
    },
Historqte() {
      const val = parseInt(this.formData.quantite);
      return parseInt(val).toFixed(0);
    },
HistorqteModifier() {
      const val = parseInt(this.editDmdImmo.quantite);
      return parseInt(val).toFixed(0);
    },

totalfamille(){
  
    const montant = this.getAfficheArticle.filter(element => element.famille_id == this.formData.famille_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ttc), 0).toFixed(2); 
    
    if(montant) {
return montant
    }
      
return 0
    
  },
  totalfamilleModifier(){
  
    const montant = this.getAfficheArticle.filter(element => element.famille_id == this.editDmdImmo.famille_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ttc), 0).toFixed(2); 
    
    if(montant) {
return montant
    }
      
return 0
    
  },
  
nombreArticle(){
  
    const montant = this.getAfficheArticle.filter(element => element.famille_id == this.formData.famille_id).length; 
    
    if(montant) {
return montant
    }
      
return 0
    
  },

nombreArticleModifier(){
  
    const montant = this.getAfficheArticle.filter(element => element.famille_id == this.editDmdImmo.famille_id).length; 
    
    if(montant) {
return montant
    }
      
return 0
    
  },
coutMoyen() {
      const val = parseFloat(this.totalfamille) / parseFloat(this.nombreArticle);
      return parseFloat(val).toFixed(0);
    },
coutMoyenModifier() {
      const val = parseFloat(this.totalfamilleModifier) / parseFloat(this.nombreArticleModifier);
      return parseFloat(val).toFixed(0);
    },

montantTotal() {
      const val = parseFloat(this.formData.quantite) * parseFloat(this.coutMoyen);
      return parseFloat(val).toFixed(0);
    },
montantTotalModifier() {
      const val = parseFloat(this.editDmdImmo.quantite) * parseFloat(this.coutMoyenModifier);
      return parseFloat(val).toFixed(0);
    },



  quantiteEnstock() {
      
      const norme = this.getPersoStock.find(normeEquipe => normeEquipe.AfficheArticle.id == this.formData.article_id);

      if (norme) {
        return norme.quantitestock;
      }
      return 0
    },
quantiteEnstockid() {
      
      const norme = this.getPersoStock.find(normeEquipe => normeEquipe.AfficheArticle.id == this.formData.article_id);

      if (norme) {
        return norme.id;
      }
      return 0
    },
quantiteEnstockidModifier() {
      
      const norme = this.getPersoStock.find(normeEquipe => normeEquipe.AfficheArticle.id == this.editDmdImmo.article_id);

      if (norme) {
        return norme.id;
      }
      return 0
    },

 quantiteEnstockModifier() {
      
      const norme = this.getPersoStock.find(normeEquipe => normeEquipe.AfficheArticle.id == this.editDmdImmo.article_id);

      if (norme) {
        return norme.quantitestock;
      }
      return 0
    },













     normeEqup() {
      
      const norme = this.getPersoListeDesNorme.find(normeEquipe => normeEquipe.familleArt.id == this.formData.famille_id);

      if (norme) {
        return norme.id;
      }
      return 0
    },
     normeEqupmodifier() {
      
      const norme = this.getPersoListeDesNorme.find(normeEquipe => normeEquipe.familleArt.id == this.editDmdImmo.famille_id);

      if (norme) {
        return norme.id;
      }
      return 0
    },
    typeUniteAdministrativeDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.getPersoListeDesNorme.filter(
            element => element.typeua_id == id
          );
        }
      };
    },
     
  },
    

  methods: {
    ...mapActions("SuiviImmobilisation", [
      "ajouterDemandeService",
     
    ]),

     
  
    formatageSomme: formatageSomme,


     afficheCauseDemande(index){
       this.editDemande = this.historiqueAffectationService[index];
    

       this.$("#demandeServiceConfirmation").modal({
        backdrop: "static",
        keyboard: false
      });
     },
afficheDemandeDeMateriel(index) {
       this.$("#demandeService").modal({
        backdrop: "static",
        keyboard: false

        
      });
  
       this.editDemande = this.historiqueAffectationService[index];
    },


fonctionAjouterDemande(index){

if ( confirm( "Voulez-vous continuer la demande svp?") ) {
   
     this.$("#demandeService").modal({
        backdrop: "static",
        keyboard: false

        
      });
  
       this.editDemande = this.historiqueAffectationService[index];
} else {
    // Code à éxécuter si l'utilisateur clique sur "Annuler" 
}






},

AjouterDemande(){

  if(this.Demande.cause_inactivite =="" && this.Demande.cause_demande==""){
    alert("Veuillez remplir les champs Svp")
  }
  else{
    var nouveauDemade = {
      ...this.Demande,
uniteadmin_id :this.editDemande.ua_id,
 
  service_id :this.editDemande.service_id,
  article_id :this.editDemande.article_id,
  quantite :this.editDemande.qte,
  
    dure_vie :this.editDemande.dure_vie,
    
    annee_budgetaire:this.editDemande.annee
    	
    }
    this.ajouterDemandeService(nouveauDemade)
    this.$("#demandeService").modal('hide');
  }
},

 
    
    alert() {
      console.log("ok");
    },

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
  width: 1000px;
  margin: 0 -500px;
}
.taillemodal1 {
  width: 800px;
  margin: 0 -455px;
}
.sommecolor{
  background-color: red;
  color:red;
  font-size: 120%;
  text-align: center;
  font-weight:bold;
}
.taillemodalFormulaire {
  width: 73%;
  margin: 0 -600px;
}
</style>
