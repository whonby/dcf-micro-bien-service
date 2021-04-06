
<template>

<div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Ajouter Contrat du Personnel</h5>
              <!-- <div align="right">
                Search:
                <input type="search" placeholder />
              </div>-->
            </div>

            <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#tab1">Information</a>
                      </li>
                       
                     
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                    <div id="tab1" class="tab-pane active">
                      <div class="modal-body">
        <table class="table table-bordered table-striped">
                 <tr>
  
                <td colspan="">
                     <div class="control-group">
                                                    <label class="control-label">L'unite administrative</label>
                                                    <div class="controls">
                                                       <select v-model="detail.unite_administrative_id" class="span">
                                                            <option></option>
                                                            <option v-for="item in afficherUAParDroitAccess" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
                </td>
                <td colspan="">
                        <div class="control-group">
                        <label class="control-label">Type acte effet financier.</label>
                        <div class="controls">
                          <select  class="span" v-model="formEffetFinancier.type_act_effet_id">
                                <option v-for="varText in AffichierElementParent(affichierIdActeFinancierDansActePlan)" :key="varText.id"
                                        :value="varText.id">{{varText.libelle}}</option>
                            </select>
                        
                        </div>
                    </div>
                            </td>
                <td>
                    <div class="control-group">
                        <label class="control-label">Reference acte</label>
                        <div class="controls">
                            <input type="text" v-model="formEffetFinancier.reference_act"
                                    class="span"
                                    placeholder="refence acte"
                            />
                        </div>
                    </div>
                            </td>
                      <td colspan="">
                    <div class="control-group">
                        <label class="control-label">Autorité approbatrice</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="formEffetFinancier.autorite_approbation"
                                    class="span"
                                    placeholder=" "
                            />
                            
                        </div>
                    </div>

                            </td>
                
               
              
                
            </tr>
            <tr>
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
                        <label class="control-label">Incidence financière</label>
                        <div class="controls">
                            <select   class="span" v-model="formEffetFinancier.incidence_financiere">
                               <option value="0">Oui</option>
                               <option value="1">Non</option>
                            </select>
                                    
                                  
                            
                        </div>
                    </div>
                            </td>
                            <td colspan="">

                     <div class="control-group">
                        <label class="control-label">Montant Contrat</label>
                        <div class="controls">
                            <input type="text" 
                                    class="span"
                                    placeholder="Saisir le montant "
                                    v-model="formEffetFinancier.montant_act"
                            />
                        </div>
                    </div>
                            </td>
                            <td>

                            <div class="control-group">
                        <label class="control-label" >Date de signature attributaire</label>
                        <div class="controls">
                            <input type="date" 
                                    class="span"
                                    placeholder=""
                                    v-model="formEffetFinancier.date_attributaire"
                            />
                        </div>
                    </div>
                            </td>
                        </tr>
           <tr>

                    
                     <td>
                     <div class="control-group">
                        <label class="control-label">Date ordre de service demarrage</label>
                        <div class="controls">
                            <input type="date" 
                                    class="span"
                                    placeholder=""
                                    v-model="formEffetFinancier.date_odre_service"
                            />
                        </div>
                    </div>
                            </td>


                                         <td>
                     <div class="control-group">
                        <label class="control-label" title=" ">Date fin exécution</label>
                        <div class="controls">
                            <input type="date" 
                                    class="span"
                                    placeholder=""
                                    :min="formEffetFinancier.date_odre_service" :readonly="getDateFinExécutionValue" v-model="formEffetFinancier.date_fin_exe"
                            />
                        </div>
                    </div>
                            </td>
                        
                        

                                           <td>
                     <div class="control-group">
                        <label class="control-label" title=" ">Durée d'exécution(jrs)</label>
                        <div class="controls">
                            <input type="text"  
                                    class="span"
                                   readonly  :value="nombreDejourCalcule"
                            />
                        </div>
                    </div>
                            </td>


                                             <td>
                     <div class="control-group">
                        <label class="control-label" title=" ">Date de reception definitive</label>
                        <div class="controls">
                            <input type="date" v-model="formEffetFinancier.date_reception"
                                    class="span"
                                    placeholder=""
                            />
                            <input type="hidden" v-model="formEffetFinancier.difference_personnel_bienService"/>
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
                          @click.prevent="ajouterModalActeEffetFinancierLocal"
                        >Valider</a>
                        <a
                          @click.prevent="afficherModalListePersonnel()"
                          class="btn"
                          href="#"
                        >Fermer</a>
                      </div>
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
      <notifications/>
    </div>


































</template>
<script>

    import {mapGetters, mapActions} from 'vuex'
    import {admin,dcf,noDCfNoAdmin} from "../../../Repositories/Auth"
    export default {

        data() {
            return {
                fabActions: [
                    {
                        name: 'cache',
                        icon: 'add'
                    },

                ],
                liste:[],
                
                detail : {
                    matricule: "",
                    nom: "",
                    prenom: "",
                    sexe: "",
                    numero_cni: "",
                    numero_passeport: "",
                    date_naissance: "",
                    nom_pere: "",
                    nom_mere: "",
                    date_debut_contrat:"",
                    
                    type_salarie_id:"",
                    type_contrat_id:"",
                    niveau_etude_id:"",
                    acteur_depense_id:"",
                    exercice_budgetaire_id:"",
                    unite_administrative_id:"",
                    salaires:"",
                    type_acte_id:"",
                    grade_id:"",
                    fonction_id:"",
                    plan_budgetaire_id:'',
                    uniteZone_id:"",
                    situation_matrimonial:"",
                    service_id:""
                },
formEffetFinancier:{
              ua_id:"",
             date_reception:"",
             reference_act:"",
            
             incidence_financiere:"",
             montant_act:"",
              date_attributaire:"",
             
             duree:"",
             date_fin_exe:"",
             date_odre_service:"",
             
        autorite_approbation:"",
        date_approbation:"",
            // text_juridique_id:"",
             type_act_effet_id:"",
             
            // entreprise_id:"",
             montant_act_tva:0,
             montant_act_ht:0,
             avance_demarrage_ttc:0,
             avance_demarrage_ht:0,

             
             
             difference_personnel_bienService:"4"
        },
                editTitre: {
                    code: "",
                    libelle: ""
                },
                formData:{
                  marche_id:""
                }

            };
        },

        created() {
          // this.getDetail();
            this.detail=this.personnaliseActeurDepense.find(item=>item.id==this.$route.params.id)
            console.log( this.detail)
            //    this.getActeur()
            //  console.log(this.fonctions)
            // console.log(this.getFonction)
        },
        computed: {
           admin:admin,
      dcf:dcf,
      noDCfNoAdmin:noDCfNoAdmin,
 ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
            ...mapGetters('personnelUA', ["salairesActeur","personnaliseActeurDepense","personnaFonction","afficheNombrePersonnelRecuActeNormination","fonctionBudgetaire","type_salaries","type_contrats","acte_personnels","type_acte_personnels","fonctions","grades","niveau_etudes",
                "nbr_acteur_actredite_taux","all_acteur_depense","personnaliseActeurFinContrat",
                "totalActeurEnctivite","totalActeurDepense","totalActeurAccredite","tauxActeurAccredite","totalActeurNonAccredite","affichePersonnelRecuActeNormination"]),
             ...mapGetters("uniteadministrative", ["fonctionsua","servicesua","directions","uniteZones","uniteAdministratives","getPersonnaliseBudgetGeneralParPersonnel"]),
            ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires"]),
            ...mapGetters("parametreGenerauxBudgetaire", ["plans_budgetaires"]),
 ...mapGetters("SuiviImmobilisation", ["services"]),

...mapGetters("bienService", ["gettersCotationPersonnaliser","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots","villes","communes","pays","modePassations", "procedurePassations","getterDossierCandidats","marches","gettersPersonnaliserRapportJugement",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","selectionner_candidats",
                "getActeEffetFinancierPersonnaliserContrat", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
 ...mapGetters("gestionMarche", [ 'groupeVille','entreprises','banques','comptes','getCompte', 'getEntreptise','getPersonnaliseAgence','agenceBanques']),
   ...mapGetters('parametreGenerauxFonctionnelle', ['structureActe','planActe']),


     
afficherUAParDroitAccess() {
       // const st = this.search.toLowerCase();
        if (this.noDCfNoAdmin){
            let colect=[];
            this.uniteAdministratives.filter(item=>{
                let val=this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
             return colect;
            
        }

        return this.uniteAdministratives;
        

    },



 NombrePersonnelRecuActeNorm() {
       // const searchTerm = this.search.toLowerCase();


        if (this.noDCfNoAdmin){
            let colect=[];
            this.acte_personnels.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
           
            return colect.filter(items=>items.fonction_budgetaire_id != null).length;
        }

      return this.acte_personnels.filter(items=>items.fonction_budgetaire_id != null).length;
    },








nombreTotalActeurAcredite() {
      


        if (this.noDCfNoAdmin){
            let colect=[];
            this.acte_personnels.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
                
            })
            return colect.filter(acteur_depense=>acteur_depense.type_acte_id=='4' && acteur_depense.date_fin_contrat==null).length;
        }

       return this.acte_personnels.filter(acteur_depense=>acteur_depense.type_acte_id=='4' && acteur_depense.date_fin_contrat==null).length;

    },

totalTaux() {
      const val = ((parseFloat(this.nombreTotalActeurAcredite) /parseFloat(this.totalActeurDepense))*100).toFixed(2);
      return parseFloat(val).toFixed(0);
    },
nombretotalActeurNonAccredite() {
      


        if (this.noDCfNoAdmin){
            let colect=[];
            this.acte_personnels.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
                
            })
            return colect.filter(acteur_depense=>acteur_depense.type_acte_id!='4' && acteur_depense.date_fin_contrat==null ).length;
        }

       return this.acte_personnels.filter(acteur_depense=>acteur_depense.type_acte_id!='4' && acteur_depense.date_fin_contrat==null ).length;

    },





















afficheActeNorminationPerso() {
      


        if (this.noDCfNoAdmin){
            let colect=[];
            this.acte_personnels.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
                
            })
            return colect.filter(items=>items.fonction_budgetaire_id != null);
        }

       return this.acte_personnels.filter(items=>items.fonction_budgetaire_id != null);

    },
        //  listeActeEffectFinnancier: function () {
               
        //                 return this.getActeEffetFinancierPersonnaliserContrat.filter(idmarche => idmarche.difference_personnel_bienService == 4)
                 
        //     },
afficheActeFinancierRecrutementD(){
    return this.acteEffetFinanciers.filter(items2=>items2.difference_personnel_bienService == 4);
},
            listeActeEffectFinnancier() {
        if (this.noDCfNoAdmin ){
            let colect=[];
            this.acteEffetFinanciers.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
                
            })
            return colect.filter(items=>items.difference_personnel_bienService == 4);
          }
          return this.acteEffetFinanciers.filter(items=>items.difference_personnel_bienService == 4);
         
    },
            nbreContratRecrutementDirect() {
               
                        return this.listeActeEffectFinnancier.length
                 
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
    getDateFinExécutionValue(){
    return !this.formEffetFinancier.date_odre_service !=""
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
AffichierElementParent() {
      
      return id => {
        if (id != null && id != "") {
          return this.planActe.filter(element => element.parent == id);
        }
      };
    },
 
 afficheLibelleFonction() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.fonctions.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
  

 afficheAdministrative() {
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



 
 afficheFonctionAdministrative() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.fonctions.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },










    


// afficherMatriculeDynamique(){
//        return id =>{
//            if(id!=null && id!=""){
//              const objet = this.personnaliseActeurDepense.find(item =>item.id==id)
//              if(objet){
//                  return objet.matricule
//              }
//              return 0  
//            }
//        }
//    },



 afficheNumeroActe() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acte_personnels.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.reference_acte;
      }
      return "Non renseigné"
        }
      };
    },
    







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
 afficheUniteZone() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteZones.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },


            afficheNomPersonnel() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.personnaFonction.find(qtreel => qtreel.acteur_depense.id == id);

      if (qtereel) {
        return qtereel.acteur_depense.nom;
      }
      return 0
        }
      };
    },
 affichePrenomsPersonnel() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.personnaFonction.find(qtreel => qtreel.acteur_depense.id == id);

      if (qtereel) {
        return qtereel.acteur_depense.prenom;
      }
      return 0
        }
      };
    },
    afficheMatriculePersonnel() {
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
      afficheSituationMatrimonial() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.all_acteur_depense.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.situation_matrimonial;
      }
      return 0
        }
      };
    },
    afficheUniteAdministrative() {
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
     afficheFonctionBudgetaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.fonctionBudgetaire.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },

    afficheSalairePersonnel() {
      const val = parseFloat(this.formEffetFinancier.montant_act) / this.NombreMois;
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },
     NombreMois() {
      const val = parseFloat(this.nombreDejourCalcule) * parseFloat(0.032854884084021);
      
       if (val) {
        return Math.round(val);
      }
      
      return 0
    },

     
        },
             watch: {
    '$route': 'getDetail'
  },
        methods: {
            // methode pour notre action
            ...mapActions('personnelUA', ["modifierSalaire",'getActeur',"ajouterActeur","supprimerActeurs","getNbrActeurAcrediteTaux",
            "allActeurDepense", "modifierNumeroContrat","modifierSalaire"]),
  ...mapActions('bienService',['supprimerActeEffetFinancier',
          'ajouterActeEffetFinancier','modifierActeEffetFinancier', 'modifierMarche']),
            afficherModalAjouterTitre(){
                this.$('#exampleModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
            },

             afficherModalListePersonnel(){
                this.$router.push({ name: 'Acteur' })
            },
            // fonction pour vider l'input
          ajouterModalActeEffetFinancierLocal(){
        var nouveauObjet = {
          ...this.formEffetFinancier,
          duree:this.nombreDejourCalcule,
          ua_id:this.detail.unite_administrative_id
        }
        let NumeroContratObjet = this.acte_personnels.find(marche=>marche.id==this.detail.acte_personnel_id)
         NumeroContratObjet.reference_acte = this.formEffetFinancier.reference_act
     let SalaireObjet = this.salairesActeur.find(marche=>marche.acte_personnel_id==this.detail.acte_personnel_id)
         SalaireObjet.montant=this.afficheSalairePersonnel
    this.ajouterActeEffetFinancier(nouveauObjet)
   this.modifierNumeroContrat(NumeroContratObjet)
   this.modifierSalaire(SalaireObjet)
   this.getActeur()
    this.formEffetFinancier = {
             montant_act_tva:0,
             montant_act_ht:0,
             avance_demarrage_ttc:0,
             avance_demarrage_ht:0,
             
             reference_act:"",
            
             incidence_financiere:"",
             montant_act:"",
              date_attributaire:"",
             date_reception:"",
             duree:"",
             date_fin_exe:"",
             date_odre_service:"",
             
        autorite_approbation:"",
        date_approbation:"",
             
             type_act_effet_id:"",
             
            // entreprise_id:"",
             
             
             difference_personnel_bienService:"4"

    }
    
},
// affichercode
            suprimer(id){
                this.supprimerActeurs(id)
                this.allActeurDepense()
                this.getActeur()
                this.getNbrActeurAcrediteTaux();
            },
            afficherModalModifierTitre(index){

                this.$('#modifierModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.editTitre = this.titres[index];

            },


        }
    };
</script>

