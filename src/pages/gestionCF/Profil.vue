
<template>

<div class="container-fluid">
    <div class="row-fluid">
      <div class="span4">
        <div class="widget-box">
          <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
            <h5>INFORMATION UTILISATEUR</h5>
          </div>
          <div class="widget-content"> 

            <div class="row-fluid">
              <div class="span3">

              </div>
               <div class="span6" align="center">
                 <img v-bind:src="AffichePhoto(infoUser.id)" name="aboutme" class="avatar2">
                 <br>
              </div>
               <div class="span3">

              </div>
            </div>
            <br>
           <table class="table table-bordered table-striped">
              <tbody>
                <tr class="odd gradeX">
                  <td>Nom et prenom</td>
                  <td>{{infoUser.name}}</td>
                  
                </tr>
                <tr class="even gradeC">
                  <td>Email</td>
                  <td>{{infoUser.email}}</td>
                 
                </tr>
                <tr class="odd gradeA">
                  <td>Matricule</td>
                  <td>{{infoUser.matricule}}</td>
        
                </tr>
            
              </tbody>
            </table> </div>
        </div>
      </div>
      <div class="span8">
        <div class="widget-box">
          <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
            <h5>MODIFICATION PROFILE</h5>
          </div>
           <ul class="nav nav-tabs">
              <li class="active"><a data-toggle="tab" href="#tab1">Modifier mes informations</a></li>
              <li><a data-toggle="tab" href="#tab2">Change mon mot de passe</a></li>
            </ul>

          <div class="widget-content tab-content"> 
              <div id="tab1" class="tab-pane active">

                <div class="control-group">
                  <label class="control-label">Matricule:</label>
                  <div class="controls">
                    <input type="text" v-model="editTitre.matricule" class="span" placeholder="" />
                  </div>
                </div>
                <div class="control-group">
                  <label class="control-label">Nom et prénom:</label>
                  <div class="controls">
                    <input type="text" v-model="editTitre.name" class="span" placeholder="" />
                  </div>
                </div>
                <div class="control-group">
                  <label class="control-label">Email:</label>
                  <div class="controls">
                    <input type="text" v-model="editTitre.email" class="span" placeholder="" />
                  </div>
                </div>
                <div class="modal-footer">
                  <a @click.prevent="modifier()" class="btn btn-primary"
                     href="#">Modifier</a>
                  </div>
             </div>
            <div id="tab2" class="tab-pane">

              <div class="control-group">
                <label class="control-label">Ancien Password:</label>
                <div class="controls">
                  <input type="password" @blur="passwordCrypte" v-model="password_crypte.ancien_password" class="span" placeholder="" />
                </div>
                <code v-if="verificationPassword">Le mot de passe entre ne correspond pas</code>
              </div>
              <div class="control-group">
                <label class="control-label">Nouveau Password:</label>
                <div class="controls">
                  <input type="password" v-model="changePassword.password" class="span" placeholder="" />
                </div>
              </div>
              <div class="control-group">
                <label class="control-label">Comfirme:</label>
                <div class="controls">
                  <input type="password" v-model="comfirme_password" class="span" placeholder="" />
                </div>
              </div>
              <div class="modal-footer">
                <a @click.prevent="modifier()" class="btn btn-primary"
                   href="#">Changé mot de password</a>
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
</div>


































</template>
<script>

    import {mapGetters, mapActions} from 'vuex'
    // import {admin,dcf} from "../../../Repositories/Auth"
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
                detail:'',
              password_crypte:{
                ancien_password:"",
              },
              comfirme_password:"",
              changePassword:{
                id:"",
                password:""
              },
                formData : {
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
                    marche_id:"",
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
                    service_id:"",
                    reference_acte:""
                },

                editTitre:''

            };
        },

        created() {
            this.allActeurDepense();

            let objLinea = localStorage.getItem("Users");
this.detail = JSON.parse(objLinea);
console.log(this.detail)
          this.editTitre=this.getterUtilisateur.find(item=>item.id==this.detail.id)
          this.changePassword.id=this.detail.id;

        },
        computed: {
 ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser","getterPasswordCrypte"]),

// methode pour maper notre guetter
            ...mapGetters('personnelUA', ["sauvegardePhoto","dossierPersonnels","situation_matrimonial",'acteur_depenses',"type_salaries","type_contrats","type_acte_personnels","fonctions","grades","niveau_etudes",
                "nbr_acteur_actredite_taux","all_acteur_depense","classificationGradeFonction",
                "totalActeurEnctivite","totalActeurDepense","totalActeurAccredite","tauxActeurAccredite","totalActeurNonAccredite"]),
            ...mapGetters("uniteadministrative", ["fonctionsua","servicesua","directions","uniteZones","uniteAdministratives","getPersonnaliseBudgetGeneralParPersonnel"]),
            ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires"]),
            ...mapGetters("parametreGenerauxBudgetaire", ["plans_budgetaires"]),
 ...mapGetters("SuiviImmobilisation", [
      "services",
      "normeImmo"
      
      
    ]),
 ...mapGetters("bienService", ["getActeEffetFinancierPersonnaliserContrat","selectionner_candidats","gettersCotationPersonnaliser","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots",
                "modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
     infoUser(){
        return this.getterUtilisateur.find(item=>item.id==this.detail.id)
     },
 AffichePhoto() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sauvegardePhoto.find(qtreel => qtreel.user_id == id);

      if (qtereel) {
        return qtereel.fichier;
      }
      return "http://dcf-personnel-ua.kognishare.com/savephotoprofil/1_!1595119277.jpg "
        }
      };
    },
    
 
                afficheidUtilisateur(){
  let objLinea = localStorage.getItem("Users");
let objJson = JSON.parse(objLinea);
return objJson.id

},
afficheNomUtilisateur(){
  let objLinea = localStorage.getItem("Users");
let objJson = JSON.parse(objLinea);
return objJson.name
},
 verificationPassword(){
   if(this.getterPasswordCrypte.length>0){
     console.log("password saisie")
     console.log(this.getterPasswordCrypte[0])
     console.log("password user")
     console.log(this.editTitre)
     console.log(this.editTitre.password)
      if(this.getterPasswordCrypte[0]==this.editTitre.password){
        console.log("password is true")
        return false
      }
      else{
        console.log("password is false")
        return true
      }
   }
   return false;
 },
afficheRoleUtilisateur(){
  let objLinea = localStorage.getItem("Users");
let objJson = JSON.parse(objLinea);
return objJson.user_role.role.libelle

},
afficheMotPasseUtilisateur(){
  let objLinea = localStorage.getItem("Users");
let objJson = JSON.parse(objLinea);
return objJson.password

},

 recupererCandidatSel() {
      return id => {
        if (id != null && id != "") {
           return this.getActeEffetFinancierPersonnaliser.find(qtreel => qtreel.marche_id == id);

    
        }
      };
    },

    uniteAdmin() {

        if (!this.admin || !this.dcf){
            let colect=[];
            this.uniteAdministratives.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
                
            })
            return colect
        }

       return this.uniteAdministratives

    },
  afficheIdActeurDepense() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.reference_act == id);

      if (qtereel) {
        return qtereel.candidat_personnel_id;
      }
      return "Non renseigné"
        }
      };
    },
     afficheMontantActe() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.reference_act == id);

      if (qtereel) {
        return qtereel.montant_act;
      }
      return "Non renseigné"
        }
      };
    },
       afficheSalairePersonnel() {
      const val = parseFloat(this.afficheMontantActe(this.formData.reference_acte)) / this.NombreMois;

       if (val) {
        return parseFloat(val).toFixed(0);
      }

      return 0
    },
     NombreMois() {
      const val = parseFloat(this.afficheDure(this.formData.reference_acte)) * parseFloat(0.032854884084021);

       if (val) {
        return Math.round(val);
      }

      return 0
    },
     afficheDure() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.reference_act == id);

      if (qtereel) {
        return qtereel.duree;
      }
      return "Non renseigné"
        }
      };
    },
afficheIdCandidat() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.selectionner_candidats.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.candidat_selection_id;
      }
      return "Non renseigné"
        }
      };
    },
    afficheNomCandidat() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.dossierPersonnels.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.nom_candidat;
      }
      return "Non renseigné"
        }
      };
    },
    affichePreNomCandidat() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.dossierPersonnels.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.prenom_candidat;
      }
      return "Non renseigné"
        }
      };
    },
 recupererMarcheUA() {
      return id => {
        if (id != null && id != "") {
           return this.marches.filter(qtreel => qtreel.unite_administrative_id == id && qtreel.type_marche_id == 4);


        }
      };


    },

recupererReferenceActe() {
      return id => {
        if (id != null && id != "") {
           return this.getActeEffetFinancierPersonnaliser.filter(qtreel => qtreel.marche_id == id && qtreel.activationD != 1);
        }
      };

      
    },


 verrouilleUniteZone() {
      return this.formData.unite_administrative_id == "";
    },
    verrouilleService() {
      return this.formData.uniteZone_id == "";
    },
    verrouilleFonction() {
      return this.formData.service_id == "";
    },

nombreDeFonction() {
      return id => {
        if (id != null && id != "") {
          return this.normeImmo.filter(element => element.fonction_id == this.formData.fonction_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.norme), 0).toFixed(0);
        }
      };
    },
    montantPourEtreEquipe() {
      return id => {
        if (id != null && id != "") {
          return this.normeImmo.filter(element => element.fonction_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total), 0).toFixed(0);
        }
      };
    },
    
 afficheUniteZone() {
      return id => {
        if (id != null && id != "") {
          return this.uniteZones.filter(element => element.id_unite_administrative == id);
        }
      };
    },
 afficheService() {
      return id => {
        if (id != null && id != "") {
          return this.servicesua.filter(element => element.s_ua_id == id);
        }
      };
    },
    afficheServicelibelle() {
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
afficheFonction() {
      return id => {
        if (id != null && id != "") {
          return this.fonctionsua.filter(element => element.service_id == id);
        }
      };
    },

exoEnCours() {

      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },
    afficheIdExerciceEnCours() {

      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.annee == this.exoEnCours);

      if (norme) {
        return norme.id;
      }
      return 0
    },
    afficheBudgetPersonnel() {
      return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseBudgetGeneralParPersonnel.filter(element => element.ua_id == id);
        }
      };
    },
    
        

        afficheGrade() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.classificationGradeFonction.find(qtreel => qtreel.fonction_id == id);

      if (qtereel) {
        return qtereel.grade_id;
      }
      return 0
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
        afficheLibelle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.grades.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
        },
        methods: {
            // methode pour notre action
            ...mapActions('personnelUA', ['getActeur',"ajouterActeur","supprimerActeurs","getNbrActeurAcrediteTaux","allActeurDepense"]),
            ...mapActions('bienService',['supprimerActeEffetFinancier',
          'ajouterActeEffetFinancier','modifierActeEffetFinancier', 'modifierMarche']),
          ...mapActions('Utilisateurs', ['getUtilisateurs',"getRoles",
            "modifierUtilisateur","supprimerUtilisateur","ajouterUtilisateur","modifierChangeProfile","encienPasswordSaisi"]),
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
            ajouterTitreLocal () {
              var nouveauObjet={
                ...this.formData,
                exercice_budgetaire_id:this.afficheIdExerciceEnCours,
                grade_id:this.afficheGrade(this.formData.fonction_id),
                normeequipement:this.nombreDeFonction(this.formData.fonction_id),
                historiquenormequipement:this.nombreDeFonction(this.formData.fonction_id),
                montantequipement:this.montantPourEtreEquipe(this.formData.fonction_id),
                  nom : this.afficheNomCandidat(this.afficheIdCandidat(this.afficheIdActeurDepense(this.formData.reference_acte))),
                  prenom :this.affichePreNomCandidat(this.afficheIdCandidat(this.afficheIdActeurDepense(this.formData.reference_acte))),
                  
                  salaires:this.afficheSalairePersonnel
               
              }
               let modifierActive=this.acteEffetFinanciers.find(marche=>marche.candidat_personnel_id == this.afficheIdActeurDepense(this.formData.reference_acte))
    modifierActive.activationD = 1
    
   
    this.modifierActeEffetFinancier(modifierActive)
                console.log(this.formData)
                this.ajouterActeur(nouveauObjet)
                this.getActeur()
                this.formData = {
                    code: "",
                    libelle: ""
                }
                this.$router.push({ name: 'Acteur' })
            },
// afficher
          modifier(){
              let objet={
                id:this.editTitre.id,
               name: this.editTitre.name,
                email: this.editTitre.email,
                matricule: this.editTitre.matricule,
              }
         this.modifierChangeProfile(objet)
          },
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

          passwordCrypte(){
              console.log(this.password_crypte)
            this.encienPasswordSaisi(this.password_crypte)
          },




        }
    };
</script>

<style>
.avatar2 {
  vertical-align: middle;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  box-shadow: 10px 10px 150px #262626;
}
</style>