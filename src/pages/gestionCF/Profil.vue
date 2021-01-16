
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
                 <!-- <input type="file" @change="OnchangeImage"  class="span4 form-control" > -->
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
                  <input type="password" @blur="passwordCrypte" v-model="password_crypte.password" class="span" placeholder="" />
                </div>
                <code v-if="getterPasswordCrypte">Le mot de passe entré ne correspond pas</code>
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
                <button @click.prevent="changePasswordUtilisateur()" :disabled="passwordComfirm"  class="btn btn-primary"
                  >Changé mot de password</button>
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  <div style="color: #fff !important;">{{passwordComfirm}}</div>
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
                  email:"",
                password:"",
              },
              comfirme_password:"",
              changePassword:{
                id:"",
                password:""
              },


                editTitre:''

            };
        },

        created() {
            this.allActeurDepense();

            let objLinea = localStorage.getItem("Users");
this.detail = JSON.parse(objLinea);

          this.editTitre=this.getterUtilisateur.find(item=>item.id==this.detail.id)
          this.changePassword.id=this.detail.id;
          this.password_crypte.email=this.detail.email;
        },
        computed: {
 ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation"
   ,"getterUniteAdministrativeByUser","getterPasswordCrypte"]),

// methode pour maper notre guetter
            ...mapGetters('personnelUA', ["sauvegardePhoto"]),
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

          passwordComfirm(){
  // console.log(this.getterPasswordCrypte)
      if(!this.getterPasswordCrypte && this.comfirme_password!="" && this.changePassword.password!=""){
      // console.log("False")
           if (this.comfirme_password==this.changePassword.password){
             return false
           }
           return true
      }else {
        console.log("true")
        return true
      }
          }




        },
        methods: {
            // methode pour notre action
            ...mapActions('personnelUA', ['getActeur',"ajouterActeur","supprimerActeurs","getNbrActeurAcrediteTaux","allActeurDepense"]),
            ...mapActions('bienService',['supprimerActeEffetFinancier',
          'ajouterActeEffetFinancier','modifierActeEffetFinancier', 'modifierMarche']),
          ...mapActions('Utilisateurs', ['getUtilisateurs',"getRoles",
            "modifierUtilisateur","supprimerUtilisateur",
            "ajouterUtilisateur",
            "modifierChangeProfile",
            "encienPasswordSaisi","changePasswordUsers"]),
           afficherModalAjouterTitre(){
                this.$('#exampleModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
            },
             afficherModalListePersonnel(){
                this.$router.push({ name: 'Acteur' })
            },

           modificationUtilisateur(){
      this.ajouterUtilisateur(this.formData)
     
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
              //console.log(this.password_crypte)
            this.encienPasswordSaisi(this.password_crypte)
          },

        changePasswordUtilisateur(){
          this.changePasswordUsers(this.changePassword)

          this.comfirme_password="",
              this.changePassword={
            id:"",
                password:""
          }
        }


        }
    }
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
