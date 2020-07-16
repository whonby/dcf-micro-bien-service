
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
                        <a data-toggle="tab" href="#tab1">Information utilisateur</a>
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
                     <img src="../../../../public/lien/img/imgUser/photoDefo.png" name="aboutme" width="200" height="2000" class="img-circle">
                  </div>
                </div>
              </td>
           </tr>
              <tr>
                 <td style="text-align:center">
                  <div class="control-group">
                 
                  <div class="controls">
                  <input type="file" @change="OnchangeImage"  class="span11 form-control" placeholder="Enter specimen">
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
              </table>
            </div>
          </div>
        </div>
      </div>
      <notifications/>
    </div>

</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
// import {admin,dcf} from "../Repositories/Auth"


export default {
   
  mounted() {
    // console.log(this.$store.state);
  },

  computed: {
      ...mapState('parametrageMenu', {
     active_el: state => state.active_el
  }),
    service: {
       
        name: "",
        image: "",
        description: ""
      },

        afficheNomUtilisateur(){
  let objLinea = localStorage.getItem("Users");
let objJson = JSON.parse(objLinea);
return objJson.name

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
   
      ...mapMutations('parametrageMenu', ['activate']),
      ...mapActions('Utilisateurs', ['logoutUser']),
   
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

            modifierPhotoProfil () {
                const formData = new FormData();
                formData.append('photouser', this.selectedImage, this.selectedImage.name);
    
                formData.append('name', this.afficheNomUtilisateur);
                 formData.append('email', this.afficheEmail);
                  formData.append('matricule', this.afficheMatricule);
                   formData.append('actived', this.afficheActived);
                
                
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
                this.modifierActeurDepense(formData,config)
                setTimeout(function () {  this.delaiMiseDispositionAct(this.acteur_id) }.bind(this), 3000)
                setTimeout(function () {  this.getLoadActeurDepense(this.acteur_id) }.bind(this), 3000)

            },
  }
};
</script>

