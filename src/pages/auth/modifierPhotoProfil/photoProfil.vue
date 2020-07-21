
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
              <h5> Profil </h5>
             
            </div>

            <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#tab1">Information utilisateur{{AfficheRecupereIdUser(afficheidUtilisateur)}}</a>
                      </li>
                       
                     
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                    <div id="tab1" class="tab-pane active">
                      <div class="modal-body">
        <table class="table table-bordered table-striped">
           <tr>
             <td style="text-align:center">
                <div class="control-group">
                 
                  <div class="controls">
                     <img v-bind:src="AffichePhoto(afficheidUtilisateur)" name="aboutme" width="100" height="20" class="img-circle">
                  </div>
                </div>
              </td>
           </tr>
              <tr>
                 <td style="text-align:center">
                  <div class="control-group">
                 
                  <div class="controls">
                  <input type="file" @change="OnchangeImage"  class="span11 form-control" >
                  <code v-if="info_img">Le fichier doit etre une image (.png,.jpg,jpeg,gif)</code>
                  </div>
                </div>
              </td>
              </tr>
               </table>
          </div>
          
                    </div>
                   
                  </div>
                  <br />
                  <div align="right">
                    <div class="controls">
                      <div data-toggle="buttons-checkbox" class="btn-group">
                        <a
                          class="btn btn-primary" 
                           @click.prevent="modifierPhotoProfil()"
                        >Valider</a>
                        <a
                         
                          class="btn"
                          href="#"
                        >Fermer</a>
                      </div>
                    </div>
                  </div>
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
    import { mapGetters, mapActions} from 'vuex'
    export default {
        data(){
            return {
              
                formData: {
                   
                },
                selectedImage:"",
info_img:false,
            }
        },

        created(){
           
        },

        computed: {
            ...mapGetters('Utilisateurs', ['loader', 'champVide', 'error', 'errorMessage']),
...mapGetters('personnelUA', ['sauvegardePhoto']),


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
  afficheEmail(){
  let objLinea = localStorage.getItem("Users");
let objJson = JSON.parse(objLinea);
return objJson.email

},
  afficheMatricule(){
  let objLinea = localStorage.getItem("Users");
let objJson = JSON.parse(objLinea);
return objJson.matricule

},
  afficheActived(){
  let objLinea = localStorage.getItem("Users");
let objJson = JSON.parse(objLinea);
return objJson.actived

},
        },

        methods: {

      ...mapActions('Utilisateurs', ['logoutUser']),
    ...mapActions('personnelUA', ["getSauvegardePhoto","ajouterSauvegardePhoto","supprimerSauvegardePhoto","modifieSauvegardePhoto"]),
 OnchangeImage(e) {
                const files = e.target.files;
                this.selectedImage = event.target.files[0];
                Array.from(files).forEach(file => this.addImage(file));
            },
            
             addImage(file) {
                if (!file.type.match("image.*")) {
                    this.info_img=true;
                    console.log(`${file.name} le fichier doit etre une image`);
                    return;
                }
                this.info_img=false;
                let reader = new FileReader();
                let vm = this;
                reader.onload = e => {
                    vm.image = e.target.result;
                };
                reader.readAsDataURL(file);
            },
addFichierPDF(file) {
                let reader = new FileReader();
                let vm = this;
                reader.onload = e => {
                    vm.imagePDF = "pdf.png";
                    vm.namePDF = file.name;
                    vm.fichierPDF = e.target.result;
                };
                reader.readAsDataURL(file);
            },
            modifierPhotoProfil () {
                const formData = new FormData();
                formData.append('fichier', this.selectedImage, this.selectedImage.name);
    
                formData.append('user_id', this.afficheidUtilisateur);
                 
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
                this.ajouterSauvegardePhoto(formData,config)
                this.logoutUser()
                // setTimeout(function () {  this.delaiMiseDispositionAct(this.acteur_id) }.bind(this), 3000)
                // setTimeout(function () {  this.getLoadActeurDepense(this.acteur_id) }.bind(this), 3000)

            },
        }
    }
</script>

<style  lang="scss" type="text/scss">
    

    

</style>


<style  scoped>
    

</style>


