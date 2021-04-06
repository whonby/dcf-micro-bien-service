<template>
    <div>

       <div class="container-fluid">

    <div class="main-body">

         <div  align="left" style="cursor:pointer;">
    <button class="btn btn-danger" @click.prevent="afficherModalListeExecution">Page Précédente</button>

        </div>

          <!-- Breadcrumb -->
          <nav aria-label="breadcrumb" class="main-breadcrumb">
            <ol class="breadcrumb" v-if="detail">
              <li class="breadcrumb-item" v-if="detail"><h1>{{detail.objet}}</h1></li>

            </ol>
          </nav>
          <!-- /Breadcrumb -->
        <div class="widget-box">
            <div class="widget-title">
                <ul class="nav nav-tabs">
                    <li class="active"><a data-toggle="tab" href="#tab1">Liste des images</a></li>
                    <li><a data-toggle="tab" href="#tab2">Ajouter une image</a></li>

                </ul>
            </div>
            <div class="widget-content tab-content">
                <div id="tab1" class="tab-pane active">

                    <div class="row-fluid gutters-sm">
                        <div class="span3 " v-for="(marche_image,i) in getterImageParMarche(detail.id)" :key="marche_image.id" >
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex flex-column align-items-center text-center">
                                        <img style="cursor: grab;" class="center_image" :src="AffichePhoto(marche_image.fichier)" @click="onClickShowImage(i)" >
                                        <div class="mt-3">
                                            <h4>{{marche_image.libelle}}</h4>
                                            <router-link class="btn btn-outline-primary" :to="{ name: 'DetailImageMarche', params: { id:marche_image.id }}" title="Detail Marche CF">
                                                Consulter
                                            </router-link>

                                        </div>

                                    </div>
                                    <div class="mt-3 d-flex justify-context-center">
                                        <h4>Nom de l'Agent : DCF</h4>
                                        Date:  {{conversionDateVariable(marche_image.date_enregistrement)}}
                                        <p class="text-secondary mb-1">Distance :
                                            {{distance(marche_image.latitude, marche_image.longitude,detail.latitude,detail.longitude, 'K')}}
                                        </p>
                                        <button  class="btn btn-danger" v-on:click="suppressionImg(marche_image.id)">
                                            <span><i class="fa fa-trash-o" aria-hidden="true"></i>  Supprimer </span>
                                        </button>
                                        <router-link :to="{name:'modifie-image', params:{id:marche_image.id}}" class="btn btn-success">Modifier</router-link>
                                        <!-- <button type="button" data-toggle="modal" data-target="#editModal" 
                                        class="btn btn-success"
                                        v-on:click="getImage(marche_image.id)">
                                            <span><i class="fa fa-pencil" aria-hidden="true"></i>  Modifier </span>
                                        </button> -->
                                        
                                    </div>
                                </div>
                            </div>

                        </div>
                        <vue-gallery-slideshow :images="arrayImageMarche(detail.id)" :index="index"  @close="index==null"></vue-gallery-slideshow>

                    </div>
                </div>
                <div id="tab2" class="tab-pane">
                    <table class="table">
                        <tr>
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Libelle</label>
                                    <div class="controls">
                                        <input
                                                type="text"
                                               v-model="formD.libelle"
                                        />
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Observation</label>
                                    <div class="controls">
                                        <input
                                                type="text"
                                                v-model="formD.observation"
                                        />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <vue-dropzone
                            ref="myVueDropzone"
                            id="dropzone"
                            :options="dropzoneOptions"
                            :useCustomSlot="true"
                            v-on:vdropzone-sending="sendingEvent"
                            v-on:vdropzone-success="uploadSuccess"
                            v-on:vdropzone-error="uploadError"
                            v-on:vdropzone-removed-file="fileRemoved">
                        <div class="dropzone-custom-content">
                            <h3 class="dropzone-custom-title">
                                Faites glisser et déposez pour chargé l'image</h3>
                            <div class="subtitle">...ou cliquez pour sélectionner un fichier sur votre ordinateur</div>
                        </div>
                    </vue-dropzone>
                </div>
            </div>
        </div>

        </div>
    </div>
        </div>


</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
//import ModifieImage from './ModifieImage'


import VueGallerySlideshow from 'vue-gallery-slideshow'
export default {
    components:{
        //'modifie-image':ModifieImage,
        VueGallerySlideshow,
        vueDropzone: vue2Dropzone
    },
    data(){
        return{
            editImage:'',
            index: 0,
           fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ],dropzoneOptions: {
                url: process.env.VUE_APP_BIEN_SERVICE_URL+"/image_marche2",
                addRemoveLinks: true,
                maxFiles: 1
            },
            fileName: '',

       editLiquidation: {},
search:"",
detail:"",
            formD:{
                libelle:"",
                observation:"",
                marche_id:"",
                user_id:"",
            }

        }
    },
    props:["macheid"],
    created(){
        let objet=localStorage.getItem('Users');
        let user=JSON.parse (objet)
this.detail=this.marches.find(item=>item.id==this.$route.params.id)
        this.formD.marche_id=this.$route.params.id
        this.formD.user_id=user.id
    },

        computed: {
    ...mapGetters("bienService", ["getterImageMarche",'modepaiements','getMandatPersonnaliserVise','getMandatPersonnaliser','choixprocedure','acteDepense',"getMarchePersonnaliser","appelOffres","getFacturePersonnaliser",
        "lots","modePassations", "procedurePassations","getterDossierCandidats","marches",
        "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","typeFactures",
        "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
        "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs",
            "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","motifDecisions",
        "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers",'getEngagementPersonnaliser',"engagements","getEngagementPersonnaliser1","mandats","avenants","getterActeEffetFinanciers"]),

        ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises',"comptes","banques"]),




  ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetGeneral",
      "getPersonnaliseBudgetGeneral",
      "groupUa",
      "getPersonnaliseBudgetGeneralParBienService",
      "groupgranNature", "montantBudgetGeneral","realiteServiceFait","liquidation"
      // "montantBudgetGeneral"
      // "chapitres",
      // "sections"

    ]),
     ...mapGetters('parametreGenerauxFonctionnelle', ['structuresDecision',
  'plans_Decision']),

        conversionDateVariable(){
            return date=>{
                let da=new Date(date)
                let  options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                return da.toLocaleDateString("fr-FR", options)
            }

        },
 

  afficheNomUtilisateur(){
  let objLinea = localStorage.getItem("Users");
let objJson = JSON.parse(objLinea);
return objJson.name
},
getMarche(){
return marche_id=>{
  if(marche_id!=""){
    return this.marches.find(item=>item.id==marche_id)
  }
}
},
AffichePhoto() {
      return fichier => {
        if (fichier != null && fichier != "") {


   let url=process.env.VUE_APP_BIEN_SERVICE_URL
        return url+'/imagemarches/'+fichier;
     // return "Pas d'image "
        }
      };
    },
    

getterImageParMarche() {
      return id => {
        if (id != null && id != "") {
          return this.getterImageMarche.filter(
            element => element.marche_id == id
          ).reverse();
        }
      };
    },
     arrayImageMarche(){
                return id=>{
                    let colection=[]
                    let vm=this;
                    let objte=vm.getterImageParMarche(id)

                    objte.forEach(function (val) {
                        colection.push(vm.AffichePhoto(val.fichier))
                    })
                    return colection;
                }

     },
    
      },

      methods:{

          ...mapActions('bienService',[  "ajouterAvenant",
      "modifierAvenant",
      "supprimerAvenant",]),
 ...mapActions("uniteadministrative", [
     "getAllServiceua",
      "ajouterService",
      "modifierService",
      "supprimerService",
      "modifierLiquidation",
      "supprimerLiquidation"
      // "ajouterHistoriqueBudgetGeneral"
    ]),
...mapActions("SuiviImmobilisation", [
       "ajouterImmobilisation",
       "modifierImmobilisation",
       "modifierStock",
       "ajouterHistotorisqueAffectionService",
       "modifierDemandeMateriel"


    ]),
    suppressionImg(){
        // return this.getterImageMarche.filter((elmt) => {
        //     return elmt.marche_id !== id;
        // })
       this.$delete(this.getterImageMarche, this.formD.marche_id)
       console.log(this.formD.marche_id)
    },

<<<<<<< HEAD
    getImageId(id){
        return this.getterImageMarche.filter((elmt) =>{
            return elmt.marche_id == id;
        })
    },
    getImage(){
        // return (id) =>{
        //     if (id !== null) {
        //       this.editImage = this.getterImageMarche.find(itm => itm.marche_id == id)
        //        console.log(this.editImage+" cc")
        //     }
        // };
    },
=======

afficherModalListeExecution(){
                window.history.back();
            },
>>>>>>> 5e3e0b87426eb46cbb1e94cfc83293a2f85084c7
          onClickShowImage(i) {
              this.index = i;
              console.log(i)
          },
          closeModelImage(){
              this.index = null;
          },
          uploadSuccess(file, response) {
              console.log('File Successfully Uploaded with file name: ' + response.file);
              this.fileName = response.file;
              this.formD.observation=""
              this.formD.libelle=""
          },
          uploadError(file, message) {
              console.log(file)
              console.log(message)
              console.log('An Error Occurred');
          },
          sendingEvent (file, xhr, formData) {
              console.log(file)
              console.log(xhr)

              formData.append('libelle',this.formD.libelle);
              formData.append('observation',this.formD.observation);
              formData.append('marche_id',this.formD.marche_id);
              formData.append('user_id',this.formD.user_id);
          },

          fileRemoved() {},
  distance(lat1, lon1, lat2, lon2, unit) {
        if ((lat1 == lat2) && (lon1 == lon2)) {
            return 0;
        }
        else {
            let radlat1 = Math.PI * lat1/180;
            let radlat2 = Math.PI * lat2/180;
            let theta = lon1-lon2;
            let radtheta = Math.PI * theta/180;
            let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180/Math.PI;
            dist = dist * 60 * 1.1515;
            if (unit=="K") { dist = dist * 1.609344 }
            if (unit=="N") { dist = dist * 0.8684 }

            if (parseFloat(dist.toFixed(2))>=1){
                return dist.toFixed(2) +" Km";
            }else{
              let metre=  dist * 1000;
              return metre.toFixed(2) +" Mètre";
            }

        }
    }
      }
}
</script>

<style scoped>
.grdirModalActeEffet{
     width: 1200px;
 margin: 0 -530px;
 height: 550px;

}
.tailgrand{
  width: 50%;
  margin: 0 -25%;
}
.tailAvenant{
  width: 75%;
   margin: 0 -40%;
}
.avatar1 {

  width: 50%;
  height: 50%;

}




.center_image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 250px;
}


body{
    margin-top:20px;
    color: #1a202c;
    text-align: left;
    background-color: #e2e8f0;
}
.main-body {
    padding: 15px;
}
.card {
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid rgba(0,0,0,.125);
    border-radius: .25rem;
}

.card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1rem;
}

.gutters-sm {
    margin-right: -8px;
    margin-left: -8px;
}

.gutters-sm>.col, .gutters-sm>[class*=col-] {
    padding-right: 8px;
    padding-left: 8px;
}
.mb-3, .my-3 {
    margin-bottom: 1rem!important;
}

.bg-gray-300 {
    background-color: #e2e8f0;
}
.h-100 {
    height: 100%!important;
}
.shadow-none {
    box-shadow: none!important;
}
</style>
