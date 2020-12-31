
<template>

<div>

<div id="modalTransfert" class="modal hide valDirecteur">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Transfert</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
        <tr>
           <td colspan="">
             
                           <div class="control-group">
                            <label class="control-label">Ancien utilisateur</label>
                            <div class="controls">
                              <input type="text" class="span4" readonly :value="afficherActeurDepenseNomPrenoms(afficherActeurDepenseId(detail_Ua.id))"/>
                               
                            </div>
                          </div>
           </td>
          <td colspan="2">
                            <div class="control-group">
                            <label class="control-label">Nouvel utilisateur</label>
                            <div class="controls">
                              <select v-model="formData.personnel_id" class="span8">
                              <option value=""></option>
    <option v-for="item in lispersonnelParUa(detail_Ua.unite_administrative_id)" 
    :key="item.id" :value="item.id">{{afficherActeurDepenseNomPrenoms(item.acteur_depense_id)}}</option>
                              </select>
                              
                            </div>
                          </div>
                        </td>
           </tr>
          <tr>
           
  <td>
             
                           <div class="control-group">
                            <label class="control-label">Article</label>
                            <div class="controls">
                              <input type="text" class="span4" readonly :value="libelleArticle(editService.famille_id)" />
                               
                            </div>
                          </div>
           </td>
          <td>
                            <div class="control-group">
                            <label class="control-label">Marque</label>
                            <div class="controls">
                              <select
                                v-model="formData.marque_id" class="span4">
                               
                              <option value></option>
                                
                               
                              </select>
                              
                            </div>
                          </div>
                        </td>
                         <td>
             
                           <div class="control-group">
                            <label class="control-label">Date de Transfert</label>
                            <div class="controls">
                              <input type="date" class="span4"  v-model="formData.dteTransfert" />
                               
                            </div>
                          </div>
           </td>
          </tr>
       
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterImmobilisationLocal()"
          class="btn btn-primary"
          href="#"
         
        >Transferer</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>














  <div id="exampleModalValidationdirecteur" class="modal hide valDirecteur">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Affectation</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
        <tr>
           <td colspan="">
             
                           <div class="control-group">
                            <label class="control-label">{{affichierTotal(this.afficherFonctionId(this.detail_Ua.id))}}Nom et Prénoms{{afficherFonctionId(this.detail_Ua.id)}}</label>
                            <div class="controls">
                              <input type="text" class="span4" readonly :value="afficherActeurDepenseNomPrenoms(afficherActeurDepenseId(detail_Ua.id))"/>
                               
                            </div>
                          </div>
           </td>
           <td>
             
                           <div class="control-group">
                            <label class="control-label">{{afficherValeurOrigine}}Article{{afficherMontantRestant}}</label>
                            <div class="controls">
                              <input type="text" class="span4" readonly :value="libelleArticle(editService.famille_id)" />
                               
                            </div>
                          </div>
                          
                                   
           </td>
          <td>
                            <div class="control-group">
                            <label class="control-label">Marque</label>
                            
                            <div class="controls">
                              <select v-model="editService.marque_id" class="span4">
                              <option value=""></option>
    <option v-for="item in listedesarticleenstock(detail_Ua.unite_administrative_id)" 
    :key="item[0].id" :value="item[0].marque_id">{{libelleMarque(item[0].marque_id)}}</option>
                              </select>
                              
                            </div>
                          </div>
                        </td>
                         <td>
                            <div class="control-group">
                            <label class="control-label">Model</label>
                            
                            <div class="controls">
                              <select v-model="editService.model_id" class="span4">
                              <option value=""></option>
    <option v-for="item in LibelleModel(detail_Ua.unite_administrative_id)" 
    :key="item.id" :value="item.model_id">{{libelleModel(item.model_id)}}</option>
                              </select>
                              
                            </div>
                          </div>
                        </td>
           </tr>
            <tr>
              <td>
             
                           <div class="control-group">
                            <label class="control-label">Quantité requise</label>
                            <div class="controls">
                              <input type="text" class="span4" :value="afficheHistNormeEquipement(marcheid)" readonly/>
                               
                            </div>
                          </div>
           </td>
            <td>
             
                           <div class="control-group">
                            <label class="control-label">{{afficherNombreEquipementRestant}}Quantité En stock</label>
                            <div class="controls">
                              <input type="text" class="span4" :value="afficherQuantiteEnStock(editService.model_id)" readonly/>
                               
                            </div>
                          </div>
           </td>
           
              <td>
             
                           <div class="control-group">
                            <label class="control-label">Quantité a affecté{{RestantEnStock}}</label>
                            <div class="controls">
                              <input type="text" class="span4" v-model="formData.qte_affecte"/>
                               
                            </div>
                          </div>
           </td>
            <td>
             
                           <div class="control-group">
                            <label class="control-label">{{afficherIdActePersonnel(detail_Ua.unite_administrative_id,afficherActeurDepenseId(detail_Ua.id))}}Date mise en service{{afficherIdStock(detail_Ua.unite_administrative_id,editService.famille_id,editService.marque_id,editService.model_id)}}</label>
                            <div class="controls">
                              <input type="date" class="span4" v-model="formData.date_mise_service" />
                               
                            </div>
                          </div>
           </td>
        </tr>
        
       
        </table>
       <span style="color:red;text-align:center;font-size:12px" v-show="afficherQuantiteEnStock(editService.model_id)!=0 && editService.model_id==''">Quantité en Stock Saturé</span>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterImmobilisationLocal()"
          class="btn btn-primary"
          href="#"
         v-show="afficherQuantiteEnStock(editService.model_id)!=0"
        >Affecter</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
  <table class="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>Matricule</th>
                        <th>Nom && Prénoms</th>
                        
                        <th>Fonction</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                 <td style="text-align: center;"
                   
                    >{{afficherActeurDepenseMatricule(afficherActeurDepenseId(detail_Ua.id)) || 'Non renseigné'}}</td>
                  
                    <td style="text-align: center;"
                   
                    >{{afficherActeurDepenseNomPrenoms(afficherActeurDepenseId(detail_Ua.id)) || 'Non renseigné'}}</td>
                     <td style="text-align: center;"
                   
                    >{{afficheFonction(afficherFonctionId(detail_Ua.id))}}</td>
                    </tbody> 
                </table>
                <table class="table table-bordered table-striped">
                    <thead>
                     <tr>
                     
                  
                    <th>Article</th>
                    
                   <th >Quantité requise</th>
                     <th >Quantité couverte</th>
                     <th >Quantité non couverte</th>
                     <th style="width:15%">Action</th>
                  </tr>
                    </thead>
                    <tbody>
                   <tr
                    class="odd gradeX"
                    v-for="(BesoinImmo,index) in listedesarticleparPerso(afficherFonctionId(marcheid))"
                    :key="BesoinImmo.id"
                  >
                  <td style="text-align: center;"
                   
                    >{{BesoinImmo.norme_famille.libelle || 'Non renseigné'}}</td>
                  
                     <td style="text-align: center;"
                   
                    >{{afficheHistNormeEquipement(marcheid) || 'Non renseigné'}}</td>
                    <td style="text-align: center;"
                      
                    >{{(afficheHistNormeEquipement(marcheid))-(affichNormeEquipement(marcheid))}}</td>
                   <td style="text-align: center;"
                      
                    >{{affichNormeEquipement(marcheid)}}</td>
                    
                   <td>
                     <button  
                     @click.prevent="afficherModalModifierService(index)"
                     v-show="affichNormeEquipement(marcheid)!=0"
                        class="btn  btn-success">
                <span >Affectation</span>
       
                </button>
                <button  v-show="((afficheHistNormeEquipement(marcheid))-(affichNormeEquipement(marcheid)))!=0"
                        class="btn  btn-danger" @click.prevent="afficherModalTransfert(index)">
                <span >Transfert</span>
       
                </button>
                   </td>
                     
                         
                    
                     
                     
                    
                    
                  </tr>
                 
                    </tbody>
                </table>

              
     




  



<notifications  />


    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import { formatageSomme } from '../../../../../..//Repositories/Repository';
import {admin,dcf,noDCfNoAdmin} from "../../../../../../Repositories/Auth"
//import moment from 'moment';
export default {
    data(){
        return{
          formData3:{
        acteur_id:"",
        ua_id:"",
          unitezone_id:"",
          fonction_id:"",
          article_id:"",
          qte:"",
          dure_vie:"",
          etatimmo_id:""
      },
      formData :{

      },
      direct:"",
       valideService:{
motif:"",
date_motif:""
      },
      valideDirecteur:{
        article_id:"",
motif:"",
date_motif_directeur:"",
cause_directeur:""
      },
       formData2:{
        famillearticle_id :"",
        qte_affecte:"",
        date_mise_service:"",
        identification:"",
        type_immo:"",
        nature_dentree:"",
        nature_bien:"",
        etat_immobilisation:"",
        cause_inactivite:"",

      },
      editService:{},
search:""
        }
    },
    props:["macheid"],
    created() {
            this.marcheid=this.$route.params.id
   this.detail_Ua = this.acte_personnels.find(
       idmarche => idmarche.id == this.$route.params.id
   )
  /*  this.appel_offre_marche=this.appelOffres.filter( idmarche => idmarche.marche.id == this.$route.params.id)
    console.log(this.appel_offre_marche)*/
},

       computed: {
  admin:admin,
      dcf:dcf,
      noDCfNoAdmin:noDCfNoAdmin,
     ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
            ...mapGetters("bienService", [ "gettersCotations","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots",
                "modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
            ...mapGetters('personnelUA', ['acteur_depenses','personnaFonction','acte_personnels',"fonctions"]),


                ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises','banques','comptes','getCompte']),
            ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
                'types_financements']) ,
                
    ...mapGetters("parametreGenerauxAdministratif", ["getterplanOrganisationUa","exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),
       ...mapGetters('parametreGenerauxFonctionnelle', ['structureActe', 
  'planActe']),
 ...mapGetters("uniteadministrative", [
      "directions",
      "servicesua",
      "fonctionsua",
      "getPersonnaliseBudgetGeneral",
      "montantBudgetGeneral",
      "uniteZones",
      "getPersonnaliseBudgetGeneralParTransfert",
      "uniteAdministratives",
      "GestionStockageArticles",
      "groupStockArticle"
      // "chapitres",
      // "sections"
    ]),
   ...mapGetters("SuiviImmobilisation", ["services",
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
      "besoinEquipement",
      "afficherDirection",
      "afficherService",
      "afficherFonction",
      "type_Unite_admins",
      "getPersoListeDesNorme",
      "normeImmo",
      "getPersonnaliseNormeEquipement",
      "afficherDemandeParService",
      "natureEntres",
      "EtatImmobilisations",
      "causeInactivite",
      "immobilisations",
      "afficheRegroupeEquipementCouvert",
      "demandeMateriel",
      "getterUa_idImo",
      "marqueVehicules",
      "ModeleVehicules",
      "ficheArticle"
   
   ]),

RestantEnStock() {
      const val = parseFloat(this.afficherQuantiteEnStock(this.editService.model_id)) - parseFloat(this.formData.qte_affecte);
      return parseFloat(val).toFixed(0);
    },

afficherIdStock() {
      return (id,id1,id2,id3) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
           const qtereel = this.GestionStockageArticles.find(qtreel => qtreel.uAdministrative_id == id && qtreel.famill_id == id1 && qtreel.marque_id == id2 && qtreel.model_id == id3 );

      if (qtereel) {
        return qtereel.id;
      }
      return 0
        }
      };
    },
afficherIdActePersonnel() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
           const qtereel = this.acte_personnels.find(qtreel => qtreel.unite_administrative_id == id && qtreel.acteur_depense_id == id1);

      if (qtereel) {
        return qtereel.id;
      }
      return 0
        }
      };
    },

   
    // afficherIdStock() {
    //   return id => {
    //     if (id != null && id != "") {
    //        const qtereel = this.GestionStockageArticles.find(qtreel => qtreel.id == id);

    //   if (qtereel) {
    //     return qtereel.id;
    //   }
    //   return 0
    //     }
    //   };
    // },
    afficherTypeDebien() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.ficheArticle.find(qtreel => qtreel.model_id == id);

      if (qtereel) {
        return qtereel.type_bien;
      }
      return 'Non renseigné'
        }
      };
    },
   ValeurAcquisition() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.ficheArticle.find(qtreel => qtreel.model_id == id);

      if (qtereel) {
        return qtereel.prix_unitaire;
      }
      return 'Non renseigné'
        }
      };
    },
nombreDejourCalculeModifier(){
       let vM=this;
      const acteAffet = vM.formData
      console.log(acteAffet)
      // if(vM.formData.date_mise_service !="" ) return 0
      // if(vM.formData.date_mise_service =="" ) return null

      var dateF = new Date(this.afficherDateDuJour).getTime()
      var dateO = new Date(vM.formData.date_mise_service).getTime()
      var resultat = dateF - dateO

      var diffJour =  resultat / (1000 * 3600 * 24)
       console.log(diffJour)
      if(isNaN(diffJour)) return null

      if(parseFloat(diffJour) < 0 ) return ""
      vM.formData.duree=diffJour
      return  diffJour;

    },
     
dureDeVie() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.familles.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.dureVie;
      }
      return 'Non renseigné'
        }
      };
    },
   
afficherDateDuJour(){
let date = new Date();
        let aaaa = date.getFullYear();
        let gg = date.getDate();
        let mm = (date.getMonth() + 1);
        let moi;
        let jour;
        if (gg < 10)
        {
            jour = "0" + gg;
        }else{
            jour = gg
        }


        if (mm < 10)
        {
            moi = "0" + mm;
        }else{
            moi=mm;
        }


        let cur_day =  aaaa + "-" + moi + "-" + jour;

        return cur_day


    
   
   },










LibelleModel() {
      return id => {
        if (id != null && id != "") {
           return this.GestionStockageArticles.filter(qtreel => qtreel.uAdministrative_id == id && qtreel.famill_id == this.editService.famille_id);

        }
      };
    },
listedesarticleenstock() {
      return id => {
        if (id != null && id != "") {
           return this.groupStockArticle.filter(qtreel => qtreel[0].uAdministrative_id == id && qtreel[0].famill_id == this.editService.famille_id);

        }
      };
    },



lispersonnelParUa() {
      return id => {
        if (id != null && id != "") {
           return this.acte_personnels.filter(qtreel => qtreel.unite_administrative_id == id);

        }
      };
    },



   afficherQuantiteEnStock() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.GestionStockageArticles.find(qtreel => qtreel.model_id== id);

      if (qtereel) {
        return qtereel.quantitestock;
      }
      return 0
        }
      };
    },
    libelleMarque() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marqueVehicules.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    libelleModel() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.ModeleVehicules.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
libelleArticle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.familles.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 'Non renseigné'
        }
      };
    },
listedesarticleparPerso() {
      return id => {
        if (id != null && id != "") {
           return this.normeImmo.filter(qtreel => qtreel.fonction_id == id);

        }
      };
    },
 afficheHistNormeEquipement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acte_personnels.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.historiquenormequipement;
      }
      return 'Non renseigné'
        }
      };
    },
affichNormeEquipement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acte_personnels.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.normeequipement;
      }
      return 'Non renseigné'
        }
      };
    },

   afficherActeurDepenseId() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acte_personnels.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.acteur_depense_id;
      }
      return 'Non renseigné'
        }
      };
    },
    afficherFonctionId() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acte_personnels.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.fonction_id;
      }
      return 'Non renseigné'
        }
      };
    },
   
   afficherActeurDepenseNomPrenoms() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.personnaFonction.find(qtreel => qtreel.acteur_depense.id == id);

      if (qtereel) {
        return qtereel.acteur_depense.nom.concat('    ', qtereel.acteur_depense.prenom);
      }
      return 'Non renseigné'
        }
      };
    },
  affichePersonneNonEquipe(){
return this.acte_personnels.filter(element => element.normeequipement != 0)
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
    afficherCodeUniteAdministrative() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code;
      }
      return 0
        }
      };
    },
    // afficheFonction() {
    //   return id => {
    //     if (id != null && id != "") {
    //        const qtereel = this.fonctions.find(qtreel => qtreel.id == id);

    //   if (qtereel) {
    //     return qtereel.libelle
    //   }
    //   return 0
    //     }
    //   };
    // },
  listePersonnelNonEquipee() {
      


        if (this.noDCfNoAdmin){
            let colect=[];
            this.affichePersonneNonEquipe.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
           return id => {
        if (id != null && id != "") {
          return colect.filter(element => element.unite_administrative_id == id);
        }
      };
        }

        return id => {
        if (id != null && id != "") {
          return this.affichePersonneNonEquipe.filter(element => element.unite_administrative_id == id);
        }
      };

    },



nombreDesDemandePerso() {
      
        if (this.noDCfNoAdmin){
            let colect=[];
            this.demandeMateriel.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.uniteadmin_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
               
            })
            return colect.filter(items=>items.service_id == 0).length
        }

       return this.demandeMateriel.filter(items=>items.service_id == 0).length;

    },

afficheToutDemande() {
      
        if (this.noDCfNoAdmin){
            let colect=[];
            this.demandeMateriel.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.uniteadmin_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
                
            })
            return colect.filter(items=>items.service_id == 0);
        }

       return this.demandeMateriel.filter(items=>items.service_id == 0);

    },






 affichenbreEquipementNonCouvert() {
      


        if (this.noDCfNoAdmin){
            let colect=[];
            this.servicesua.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.s_ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
                
            })
       return colect.filter(items=>items.normeequipement != 0).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.normeequipement), 0).toFixed(0);
       }

       return this.servicesua.filter(items=>items.normeequipement != 0).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.normeequipement), 0).toFixed(0);

    },






// listePersonnelAffectete() {
      


//         if (this.noDCfNoAdmin){
//             let colect=[];
//             this.acte_personnels.filter(item=>{
//                 let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
//                 if (val!=undefined){
//                     colect.push(item)
//                     return item
//                 }
//             })
//           return colect
//         }

//        return this.acte_personnels

//     },

listePersonnelAffectete() {
      
        if (this.noDCfNoAdmin ){
            let colect=[];
            this.acte_personnels.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
               
            })
            return id => {
        if (id != null && id != "") {
          return colect.filter(element => element.unite_administrative_id == id );
        }
      };
          }
           return id => {
        if (id != null && id != "") {
          return this.acte_personnels.filter(element => element.unite_administrative_id == id);
        }
      };
         



    },

listeDesEquipementNonCouvert() {
      


        if (this.noDCfNoAdmin){
            let colect=[];
            this.equipementNonCouvert.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return id => {
        if (id != null && id != "") {
          return colect.filter(element => element.unite_administrative_id == id);
        }
      };
        }

          return id => {
        if (id != null && id != "") {
          return this.equipementNonCouvert.filter(element => element.unite_administrative_id == id);
        }
      };

    },
    listeDesEquipementParAgent() {
      


        if (this.noDCfNoAdmin){
            let colect=[];
            this.tauxequipementParAgent.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return id => {
        if (id != null && id != "") {
          return colect.filter(element => element.unite_administrative_id == id);
        }
      };
        }

          return id => {
        if (id != null && id != "") {
          return this.tauxequipementParAgent.filter(element => element.unite_administrative_id == id);
        }
      };

    },
    listeDesPersonneEquipee() {
      


        if (this.noDCfNoAdmin){
            let colect=[];
            this.affichePersonneEquipe.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
              return id => {
        if (id != null && id != "") {
          return colect.filter(element => element.unite_administrative_id == id);
        }
      };
        }

           return id => {
        if (id != null && id != "") {
          return this.affichePersonneEquipe.filter(element => element.unite_administrative_id == id);
        }
      };

    },




AfficheTotalQteNonCouvert() {
      


        if (this.noDCfNoAdmin){
            let colect=[];
            this.acte_personnels.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
          
       
            return id => {
        if (id != null && id != "") {
          return colect.filter(element => element.unite_administrative_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.normeequipement), 0).toFixed(0);
        }
      };
       }

  
  return id => {
        if (id != null && id != "") {
          return this.acte_personnels.filter(element => element.unite_administrative_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.normeequipement), 0).toFixed(0);
        }
      };
    },
AfficheTotalQteACouvrir() {
      


        if (this.noDCfNoAdmin){
            let colect=[];
            this.acte_personnels.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
          //return colect
        return id => {
        if (id != null && id != "") {
          return colect.filter(element => element.unite_administrative_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.normeequipement), 0).toFixed(0);
        }
      };
      }

       //return this.acte_personnels
return id => {
        if (id != null && id != "") {
          return this.acte_personnels.filter(element => element.unite_administrative_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.normeequipement), 0).toFixed(0);
        }
      };
    },
afficheMontantTotalEquipementNonCouvert() {
      


        if (this.noDCfNoAdmin){
            let colect=[];
            this.afficheMontantTotalEquipementNonCouv.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
         // return colect
       return id => {
        if (id != null && id != "") {
          return colect.filter(element => element.unite_administrative_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montantequipement), 0).toFixed(0);
        }
      };
       }

      // return this.afficheMontantTotalEquipementNonCouv.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montantequipement), 0).toFixed(0);
return id => {
        if (id != null && id != "") {
          return this.afficheMontantTotalEquipementNonCouv.filter(element => element.unite_administrative_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montantequipement), 0).toFixed(0);
        }
      };
    },



afficheLesDemandeDuPersonnel() {
      
        if (this.noDCfNoAdmin){
            let colect=[];
            this.demandeMateriel.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.uniteadmin_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
                
            })
            return colect
        }

       return this.demandeMateriel

    },
afficheValidationChefService() {
      
        if (this.noDCfNoAdmin){
            let colect=[];
            this.demandeMateriel.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.uniteadmin_id)
              
               if (val!=undefined){
                    colect.push(item)
                    return item
                }
               
            })
            return colect.filter(items => items.service_id == 0 && items.motif != 3 && items.motif != 1 && items.motif != 10 )
        }

       
 return this.demandeMateriel.filter(items => items.service_id == 0 && items.motif != 3 && items.motif != 1 && items.motif != 10 );

    },
    afficheValidationDirecteur() {
     
        if (this.noDCfNoAdmin){
            let colect=[];
            this.demandeMateriel.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.uniteadmin_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(items=>items.service_id == 0 && items.motif != 0 && items.motif != 5 && items.motif != 4 && items.motif != 10);
        }

       return this.demandeMateriel.filter(items=>items.service_id == 0 && items.motif != 0 && items.motif != 5 && items.motif != 4 && items.motif != 10);

    },

listeDesServiceDeUa() {
      


        if (this.noDCfNoAdmin){
            let colect=[];
            this.servicesua.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.s_ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
          return colect
        }

       return this.servicesua

    },


    NombreDeService() {
     
         return this.listeDesServiceDeUa.length;
    },
NombreafficheEquipementNonCouvertService() {
     
         return this.servicesua.filter(element => element.normeequipement != 0).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.normeequipement), 0).toFixed(0);
    },
    NombreafficheEquipementCouvertService() {
      


        if (this.noDCfNoAdmin){
            let colect=[];
            this.servicesua.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.s_ua_id)
                
              if (val!=undefined){
                    colect.push(item)
                    return item
                }
                
            })
          return colect.filter(items => items.normeequipement == 0).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.normeequipement), 0).toFixed(0);
          
        }

         return this.servicesua.filter(items => items.normeequipement == 0).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.normeequipement), 0).toFixed(0);

    },
// NombreafficheEquipementCouvertService() {
     
//          return this.servicesua.filter(element => element.normeequipement == 0).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.normeequipement), 0).toFixed(0);
//     },
 afficheService() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.servicesua.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.serviceua_id;
      }
      return 0
        }
      };
    },
 afficheServiceLibelle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.services.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },


 afficheMontantTotalEquipementNonCouv() {
     
         return this.acte_personnels.filter(element => element.normeequipement != 0);
    },

// AfficheTotalQteNonCouvert() {
     
//          return this.acte_personnels.filter(element => element.normeequipement != 0).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.normeequipement), 0).toFixed(0);
//     },

afficherMontantRestant() {
      const val = this.affichierTotal(this.afficherFonctionId(this.detail_Ua.id)) - this.afficherValeurOrigine;
      return parseFloat(val).toFixed(0);
    },
 


affichierTotal() {
      return id => {
        if (id != null && id != "") {
         return this.normeImmo.filter(element => element.fonction_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total), 0).toFixed(0);

     
        }
      };
    },
    coutMoyenActicle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.normeImmo.find(qtreel => qtreel.famille_id == id);

      if (qtereel) {
        return qtereel.cout_moyen;
      }
      return 0
        }
      };
    },
 

MontantParEquipementModifier(){
  
    
    var montant = this.articles.filter(element => element.famille_id == this.editTransfert.famille_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ttc), 0).toFixed(0); 
      if(isNaN(montant)) return null
      return montant

   
  
}, 







afficheEquipementNonCouvt() {
      return id => {
        if (id != null && id != "") {
           return this.normeImmo.find(qtreel => qtreel.fonction_id == id);

    
     
        }
      };
    },



nombreDemandeImmobilisation() {
      
          return this.demandeMateriel.filter(element => element.motif != 10).length;
       
    },






afficherResteStock() {
      const val = this.affichierQuantiteEnStock(this.valideDirecteur.article_id) - this.valideDirecteur.quantite;
      return parseFloat(val).toFixed(0);
    },

affichierQuantiteEnStock() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.GestionStockageArticles.find(qtreel => qtreel.famill_id == id);

      if (qtereel) {
        return qtereel.quantitestock;
      }
      return 0
        }
      };
    },
affichierIdQuantiteEnStock() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.GestionStockageArticles.find(qtreel => qtreel.famill_id == id);

      if (qtereel) {
        return qtereel.id;
      }
      return 0
        }
      };
    },
afficheAnneeAmortis() {
      const val = parseInt(this.valideDirecteur.annee_budgetaire) + parseInt(this.valideDirecteur.dure_vie);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },




afficheValeurOrigine() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.immobilisations.find(qtreel => qtreel.famillearticle_id == id);

      if (qtereel) {
        return qtereel.valeurorigine;
      }
      return 0
        }
      };
    },


nombreDejourCalculeTraitementService(){
                let vM=this;
    const acteAffet = vM.valideService
    if(acteAffet.date_demande == acteAffet.date_motif &&  acteAffet.date_motif !=="" && acteAffet.date_demande !=="") return 1
     if(acteAffet.date_motif =="" && acteAffet.date_demande =="") return null

       var dateF = new Date(acteAffet.date_motif).getTime()
        var dateO = new Date(acteAffet.date_demande).getTime()
           var resultat = dateF - dateO

             var diffJour =  resultat / (1000 * 3600 * 24)

               if(isNaN(diffJour)) return null

               if(parseFloat(diffJour) < 0 ) return "durée invalide"
    vM.valideService.duree=diffJour
                  return  diffJour;
   
},



nombreDejourCalculeTraitementDirecteur(){
                let vM=this;
    const acteAffet = vM.valideDirecteur
    if(acteAffet.date_motif == acteAffet.date_motif_directeur &&  acteAffet.date_motif_directeur !=="" && acteAffet.date_motif !=="") return 1
     if(acteAffet.date_motif_directeur =="" && acteAffet.date_motif =="") return null

       var dateF = new Date(acteAffet.date_motif_directeur).getTime()
        var dateO = new Date(acteAffet.date_motif).getTime()
           var resultat = dateF - dateO

             var diffJour =  resultat / (1000 * 3600 * 24)

               if(isNaN(diffJour)) return null

               if(parseFloat(diffJour) < 0 ) return "durée invalide"
    vM.valideDirecteur.duree=diffJour
                  return  diffJour;
   
},













verrouilleCause(){

    return this.valideDirecteur.motif == 3;
},



// afficheValidationChefService() {
      
//           return this.demandeMateriel.filter(element => element.service_id == 0 && element.motif != 3 && element.motif != 1 && element.motif != 10 );
       
//     },


// afficheValidationDirecteur() {
      
//           return this.demandeMateriel.filter(element => element.service_id == 0 && element.motif != 0 && element.motif != 5 && element.motif != 4 && element.motif != 10);
       
//     },
// afficheToutDemande() {
      
//           return this.demandeMateriel.filter(element => element.service_id == 0 );
       
//     },
nombreValidationEnAttenteChefService() {
      
          return this.afficheValidationChefService.length;
       
    },
    nombreDemande() {
      
          return this.afficheToutDemande.length;
       
    },
nombreValidationEnAttenteDirecteur() {
      
          return this.afficheValidationDirecteur.length;
       
    },





afficherRecupererQteActuelle() {
      const qtereel = this.immobilisations.find(
        qtreel => qtreel.famillearticle_id == this.editService.famille_id,
       
      );

      if (qtereel) {
        return qtereel.qte_actuel;
      }
      return 0
    },
totalNonCouvert(){
return this.immobilisations.filter(element=>element.qte_actuel != 0).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_actuel), 0).toFixed(0);
},

afficherQteTotal() {
      const val = parseFloat(this.afficherRecupererQteActuelle) + parseFloat(this.formData.qte_affecte) ;
      return parseFloat(val).toFixed(0);
    },

afficherQteEnStock() {
      const val = parseFloat(this.afficherQuantiteEnStock(this.editService.model_id)) - parseFloat(this.formData.qte_affecte) ;
      return parseFloat(val).toFixed(0);
    },
    afficherQteSortir() {
      const val = parseFloat(this.afficherQuantiteSortir(this.editService.model_id)) + parseFloat(this.formData.qte_affecte) ;
      return parseFloat(val).toFixed(0);
    },
afficherQteResteACouvert() {
      const val = parseFloat(this.afficherQuantiteEnRequise(this.editService.model_id)) - parseFloat(this.formData.qte_affecte) ;
      return parseFloat(val).toFixed(0);
    },
    afficherQteResteACouvertModifier() {
      const val = parseFloat(this.afficherQuantiteEnRequise(this.editService.model_id)) - parseFloat(this.afficherQteTotal) ;
      return parseFloat(val).toFixed(0);
    },
    afficherPrixActuelResteACouvertModifier() {
      const val = parseFloat(this.afficherQteResteACouvertModifier) * parseFloat(this.coutMonenArticle) ;
      return parseFloat(val).toFixed(0);
    },
afficherPrixActuelResteACouvert() {
      const val = parseFloat(this.afficherQteResteACouvert) * parseFloat(this.coutMonenArticle) ;
      return parseFloat(val).toFixed(0);
    },

afficherIdImmobilisation() {
      const qtereel = this.immobilisations.find(
        qtreel => qtreel.famillearticle_id == this.editService.model_id,
       
      );

      if (qtereel) {
        return qtereel.id;
      }
      return 0
    },

// afficherIdStock() {
//       const qtereel = this.stockageArticles.find(
//         qtreel => qtreel.famill_id == this.editService.model_id,
       
//       );

//       if (qtereel) {
//         return qtereel.id;
//       }
//       return 0
//     },
    
nombreAffecter() {
      const val = parseFloat(this.formData.qte_affecte) + parseFloat(this.afficherRecupererQteAffecter);
      return parseFloat(val).toFixed(0);
    },
afficherRecupererQteAffecter() {
      const qtereel = this.immobilisations.find(
        qtreel => qtreel.model_id == this.editService.model_id,
       
      );

      if (qtereel) {
        return qtereel.qte_affecte;
      }
      return 0
    },
 afficherAffectationParFonction() {
      const qtereel = this.immobilisations.find(
        qtreel => qtreel.famillearticle_id == this.editService.model_id,
       
      );

      if (qtereel) {
        return qtereel.fonction_id;
      }
      return 0
    },
 afficherAffectationParActeurDepense() {
      const qtereel = this.immobilisations.find(
        qtreel => qtreel.famillearticle_id == this.editService.model_id,
       
      );

      if (qtereel) {
        return qtereel.acteurdepense_id;
      }
      return 0
    },

afficherAffectationParQuantiteAffecter() {
      const qtereel = this.immobilisations.find(
        qtreel => qtreel.famillearticle_id == this.editService.model_id,
       
      );

      if (qtereel) {
        return qtereel.qte_affecte;
      }
      return 0
    },

afficherAffectationParUniteZone() {
      const qtereel = this.immobilisations.find(
        qtreel => qtreel.famillearticle_id == this.editService.model_id,
       
      );

      if (qtereel) {
        return qtereel.unitezon_id;
      }
      return 0
    },

afficherAffectationParService() {
      const qtereel = this.immobilisations.find(
        qtreel => qtreel.famillearticle_id == this.editService.model_id,
       
      );

      if (qtereel) {
        return qtereel.service_id;
      }
      return 0
    },
afficherAffectationParBesoin() {
      const qtereel = this.immobilisations.find(
        qtreel => qtreel.famillearticle_id == this.editService.model_id,
       
      );

      if (qtereel) {
        return qtereel.famillearticle_id;
      }
      return 0
    },
 idActePersonnel() {
      const qtereel = this.acte_personnels.find(
        qtreel => qtreel.acteur_depense_id == this.afficherActeurDepenseId(this.detail_Ua.id),
       
      );

      if (qtereel) {
        return qtereel.id;
      }
      return 0
    },

afficherDureeVieFamille() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.familles.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.dureVie;
      }
      return 0
        }
      };
    },


 anneeAmortissement() {
      const val = parseInt(this.exerciceBudgetaireEnCours) + parseInt(this.afficherDureeVieFamille(this.editService.famille_id));
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },


afficherValeurOrigineModifier() {
      const val = parseFloat(this.nombreAffecter) * parseFloat(this.coutMonenArticle);
      return parseFloat(val).toFixed(0);
    },
  afficherValeurOrigine() {
      const val = parseFloat(this.formData.qte_affecte) * parseFloat(this.coutMonenArticle);
      return parseFloat(val).toFixed(0);
    },

    afficherNombreEquipementRestant() {
      const val = parseFloat(this.affichNormeEquipement(this.marcheid)) - parseFloat(this.formData.qte_affecte);
      return parseFloat(val).toFixed(0);
    },

montantParBesoin() {
      return id => {
        if (id != null && id != "") {
          return this.articles.filter(element => element.famille_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ttc), 0).toFixed(0);
        }
      };
    },
nombreParBesoin() {
      return id => {
        if (id != null && id != "") {
          return this.articles.filter(element => element.famille_id == id).length;
        }
      };
    },
coutMonenArticle() {
 
      
    const val = parseFloat((this.montantParBesoin(this.editService.famille_id))/this.nombreParBesoin(this.editService.famille_id)).toFixed(2); 
    if (isNaN(val)) return null;
    return val;
  

    },











afficheLeBesoinDemande() {
      
      return id => {
        if (id != null && id != "") {
          return this.normeImmo.filter(element => element.fonction_id == id);
        }
      };
    },
afficheIdFonction() {
      
      const norme = this.fonctions.find(normeEquipe => normeEquipe.libelle == this.afficherFonctionId(this.detail_Ua.id));

      if (norme) {
        return norme.id;
      }
      return 0
    },
    equipementNonCouvert(){
return this.acte_personnels.filter(element => element.normeequipement != 0)
},
    NombreTauxequipementParAgent(){
return this.acte_personnels.filter(element => element.normeequipement != null).length
},
tauxequipementParAgent(){
return this.acte_personnels.filter(element => element.normeequipement != null)
},
afficheEquipementCouvert(){
return this.immobilisations.filter(element => element.qte_actuel == 0)
},
// afficheEquipementNonCouvert(){
// return this.immobilisations.filter(element => element.qte_actuel != 0)
// },
// NombreafficheEquipementNonCouvert(){
// return this.immobilisations.filter(element => element.qte_actuel != 0).length
// },
NombreafficheEquipementNonCouvert(){
return this.acte_personnels.filter(element => element.normeequipement != 0).length
},


NombreaffichePersonneEquipe(){
return this.listeDesPersonneEquipee(this.getterUa_idImo).length
},
affichePersonneEquipe(){
return this.acte_personnels.filter(element => element.normeequipement == 0)
},
afficheNombrePersonneNonEquipe(){
return this.listePersonnelNonEquipee(this.getterUa_idImo).length
},

afficheNombrePersonneEquipe(){
return this.acte_personnels.filter(element => element.normeequipement == 0).length
},
afficheNombreToutPersonne(){
return this.listePersonnelAffectete(this.getterUa_idImo).length
},
exoEnCours(){
return this.exercices_budgetaires.filter(element => element.encours == 1)
},
 

 exerciceBudgetaireEnCours() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },
afficherMatriculeActeurDepense() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.personnaFonction.find(qtreel => qtreel.acteur_depense.id == id);

      if (qtereel) {
        return qtereel.acteur_depense.matricule;
      }
      return 'Non renseigné'
        }
      };
    },
    afficherActeurDepense1() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.personnaFonction.find(qtreel => qtreel.acteur_depense.id == id);

      if (qtereel) {
        return qtereel.acteur_depense.nom.concat('    ',qtereel.acteur_depense.prenom);
      }
      return 'Non renseigné'
        }
      };
    },
afficherActeurDepense() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.personnaFonction.find(qtreel => qtreel.acteur_depense.id == id);

      if (qtereel) {
        return qtereel.acteur_depense.matricule.concat('    ', qtereel.acteur_depense.nom,'     ',qtereel.acteur_depense.prenom);
      }
      return 'Non renseigné'
        }
      };
    },
afficherActeurDepenseMatricule() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.personnaFonction.find(qtreel => qtreel.acteur_depense.id == id);

      if (qtereel) {
        return qtereel.acteur_depense.matricule;
      }
      return 0
        }
      };
    },

afficherLibelleService() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.services.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },

// afficherQuantiteEnStock() {
//       return id => {
//         if (id != null && id != "") {
//            const qtereel = this.stockageArticles.find(qtreel => qtreel.famill_id == id);

//       if (qtereel) {
//         return qtereel.quantitestock;
//       }
//       return 0
//         }
//       };
//     },
    afficherQuantiteSortir() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.GestionStockageArticles.find(qtreel => qtreel.model_id == id);

      if (qtereel) {
        return qtereel.qtesortie;
      }
      return 0
        }
      };
    },
afficherQuantiteEnRequise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.normeImmo.find(qtreel => qtreel.famille_id == id);

      if (qtereel) {
        return qtereel.norme;
      }
      return 0
        }
      };
    },
afficheFonction() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.fonctions.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },
afficheCauseInactivite() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.causeInactivite.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },
// identifierDmdService(){
// if(this.formData.service_id != 0){
//   return 2
// }


// return 0

// },

// identifierDmdFonction(){
// if(this.afficherFonctionId(detail_Ua.id) != 0){
//   return 1
// }

// return 0


// },

// identifierDmdServiceModifier(){
// if(this.editBesoinImmo.service_id != 0){
//   return 2
// }
// else {
// return 0
// }

// },

// identifierDmdFonctionModifier(){
// if(this.editBesoinImmo.fonction_id != 0){
//   return 1
// }
// else{
// return 0
// }

// },

afficheLibelleService() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.servicesua.find(qtreel => qtreel.id == id);

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
   
     
 deverouServiceEtFonction() {

      return this.formData.direction != 0;

    },


 deverouUniteZone() {

      return this.formData.uniteadmin_id == "";

    },


destinationDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.uniteZones.filter(element => element.id_unite_administrative == this.formData.uniteadmin_id);
        }
      };
    },
    destinationDynamiquesModifier() {
      return id => {
        if (id != null && id != "") {
          return this.uniteZones.filter(element => element.id_unite_administrative == this.editBesoinImmo.uniteadmin_id);
        }
      };
    },
  // afficherUniteAdministrative() {
  //     return id => {
  //       if (id != null && id != "") {
  //          const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

  //     if (qtereel) {
  //       return qtereel.libelle;
  //     }
  //     return 0
  //       }
  //     };
  //   },
// verifierLaNorme(){
//     let normeInitial=parseFloat(this.afficheNormeFamille)
//       let qteDemande=parseFloat( this.formData.quantite)
//        if(normeInitial < qteDemande){
//         alert("La norme doit etre superieure a la qte demande")
//       }
// },


 


CoutMoyen() {
 return id => {
    if(id !=""){
      
    const val = parseFloat((this.getAfficheArticle.filter(element => element.famillearticle_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ttc), 0).toFixed(2))/this.getAfficheArticle.filter(element => element.famillearticle_id == id).length).toFixed(0); 
    if (isNaN(val)) return null;
    return val;
  
 }
  }
    },

 montantTotalarticlesModifier() {
   if(this.editBesoinImmo.famillearticle_id !=""){
      const val = parseFloat(this.editBesoinImmo.quantite) * parseFloat(this.CoutMoyen(this.editBesoinImmo.famillearticle_id));
        if (isNaN(val)) return null;
     return parseFloat(val).toFixed(0);
    }
    return null

},
 montantTotalarticles() {
   if(this.editService.famille_id !=""){
      const val = parseFloat(this.formData.quantite) * parseFloat(this.CoutMoyen(this.editService.famille_id));
        if (isNaN(val)) return null;
     return parseFloat(val).toFixed(0);
    }
    return null

},

 deverouFonctionDirectionService() {
      return this.formData.uniteadmin_id == "";
    },
afficheActeurDepense() {
      return id => {
        if (id != null && id != "") {
          return this.personnaFonction.filter(element => element.fonctionActeur.id == id);
        }
      };
    },

// afficheActeurDepense() {
//       return id => {
//         if (id != null && id != "") {
//            const qtereel = this.all_acteur_depense.find(qtreel => qtreel.fonction.id == this.afficherFonctionId(detail_Ua.id));

//       if (qtereel) {
//         return qtereel.matricule.concat('  ', qtereel.nom,'  ',qtereel.prenom)
//       }
//       return 0
//         }
//       };
//     },
 fonctionDynamiquesParUa() {
      return id => {
        if (id != null && id != "") {
          return this.all_acteur_depense.filter(element => element.uniteZone_id == id);
        }
      };
    },
auteurParUaDynamiques() {
      
      return id => {
        if (id != null && id != "") {
          return this.personnaFonction.filter(element => element.uniteZone_id == id);
        
        }
        
      };
    },
 familleNormeDynamiques() {
      
      return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseNormeEquipement.filter(element => element.direction_id == id);
        }
      };
    },
     familleNormeServiceDynamiques() {
      
      return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseNormeEquipement.filter(element => element.service_id == id);
        }
      };
    },
      familleNormeFonctionDynamiques() {
      
      return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseNormeEquipement.filter(element => element.fonction_id == id);
        }
      };
    },
uniteAdministDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.uniteAdministratives.filter(element => element.type_ua_id == id);
        }
      };
    },
directionDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.directions.filter(element => element.d_ua_id == id);
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
    afficheNormeFamille() {
      
      const norme1 = this.normeImmo.find(normeEquipe => normeEquipe.famillearticle_id == this.editService.famille_id);
      if (norme1) {
        return norme1.norme;
      }
      return 0
    },
        afficheNormeFamilleModifier() {
      
      const norme1 = this.normeImmo.find(normeEquipe => normeEquipe.famillearticle_id == this.editBesoinImmo.famillearticle_id);
      if (norme1) {
        return norme1.norme;
      }
      return 0
    },









      },

      methods:{ 

          ...mapActions('bienService',['supprimerActeEffetFinancier',
          'ajouterActeEffetFinancier','modifierActeEffetFinancier', 'modifierMarche']),
 ...mapActions("uniteadministrative", [
     "getAllServiceua",
      "ajouterService",
      "modifierService",
      "supprimerService",
      "modifierStockArticle"
     
      // "ajouterHistoriqueBudgetGeneral"
    ]),
...mapActions("SuiviImmobilisation", [
       "ajouterImmobilisation",
       "modifierImmobilisation",
       "modifierStock",
       "ajouterHistotorisqueAffectionService",
       "modifierDemandeMateriel",
      "ajouterHistotorisqueAffection",
      ""
      
     
    ]),
...mapActions('personnelUA', ['getActeur',"ajouterActeur","supprimerActeurs","getNbrActeurAcrediteTaux",
            "allActeurDepense", "modifierActeurDepenses","modifierSalaire","modificationActeur","modifierPersonnel"]),


   
  ajouterImmobilisationLocal(){
var objet ={
  id:this.afficherIdStock(this.detail_Ua.unite_administrative_id,this.editService.famille_id,this.editService.marque_id,this.editService.model_id),
  quantitestock:this.RestantEnStock
}
var objet1 ={
  id:this.afficherIdActePersonnel(this.detail_Ua.unite_administrative_id,this.afficherActeurDepenseId(this.detail_Ua.id)),
  normeequipement:this.afficherNombreEquipementRestant,
  montantequipement:this.afficherMontantRestant
}
var objet2 ={
    actepersonnel_id:this.afficherActeurDepenseId(this.detail_Ua.id),
      famillearticle_id:this.editService.famille_id,
      marque_id:this.editService.marque_id,
      model_id:this.editService.model_id,
      uniteadministrative_id:this.detail_Ua.id,
      qte_affecte:this.formData.qte_affecte,
      
}
this.modifierStockArticle(objet);
this.modifierPersonnel(objet1)
this.ajouterImmobilisation(objet2)
  },
              fenetreAjouterAffectation(index) {
      this.$("#nonEquiper").modal({
        backdrop: "static",
        keyboard: false
      });

      this.formData = this.afficheServiceNonEquipe[index];
    },

    afficherModalModifierService(index) {
      this.$("#exampleModalValidationdirecteur").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editService = this.listedesarticleparPerso(this.afficherFonctionId(this.marcheid))[index];
    },
 afficherModalTransfert(index) {
      this.$("#modalTransfert").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editService = this.listedesarticleparPerso(this.afficherFonctionId(this.marcheid))[index];
    },

formatageSomme:formatageSomme,

//  formaterDate(date) {
//               return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
//             },
      }
}
</script>
<style scoped>
.taillemodal {
  width: 1400px;
  margin: 0 -700px;
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
.tailgrand{
  width: 77%;
  margin: 0 -38%;
}
.tailleImmobilisation{
  width: 90%;
  margin: 0 -45%;
}
.valDirecteur{
  width:72%;
  margin:0 -40%;
}
</style>