<template>
  <div>


    <!-- <div align="right" v-if="nbrAtteint(macheid)">

      <a href="#ajouter_membre_cojo" data-toggle="modal" class="btn btn-primary">Ajouter</a>
    </div> -->
    <div align="right" style="cursor: pointer" v-if="nbrAtteint(macheid)">
          <button
            class="btn btn-success"
            @click.prevent="AjouterMembreCojo23"
            style="font-weight: bolder; color: #fff"
          >
            <i class="icon icon-plus"> AJOUTER </i>
          </button>
        </div>
      <div align="right" v-else>
          <a  data-toggle="modal" class="btn btn-danger">Le nombre limite de participants est atteint</a>
      </div>
    <table class="table table-bordered table-striped" v-if="macheid">
      <thead>
      <tr>
        <th>Matricule</th>
        <th>Nom et prénoms</th>
        <th>Structure d'origine</th>
        <th>Fonction</th>
        <th>Commite d'evaluation</th>
        <th>UA</th>
        <th>Rôle</th>
        <th>Action</th>
      </tr>
      </thead> 
      <tbody>
      <tr class="odd gradeX" v-for="appelOffre in listeMembreCojo"
          :key="appelOffre.id">
        <td @click="afficheModaleMembreCojo(appelOffre.id)">
          {{appelOffre.matricule|| 'Non renseigné'}}
        </td>
        <td @click="afficheModaleMembreCojo(appelOffre.id)">
          {{appelOffre.nom_prenom || 'Non renseigné'}}
        </td>

        <td @click="afficheModaleMembreCojo(appelOffre.id)">
          {{appelOffre.ua_personnel || 'Non renseigné'}}
        </td>
         <td @click="afficheModaleMembreCojo(appelOffre.id)">
          {{appelOffre.fonction || 'Non renseigné'}}
        </td>

        <td @click="afficheModaleMembreCojo(appelOffre.id)" v-if="appelOffre.comite_evaluation=='oui'" style="background: green !important;color: white !important;">
          {{appelOffre.comite_evaluation || 'Non renseigné'}}
        </td>
        <td @click="afficheModaleMembreCojo(appelOffre.id)" v-if="appelOffre.comite_evaluation=='non'">
          {{appelOffre.comite_evaluation || 'Non renseigné'}}
        </td>
        <td @click="afficheModaleMembreCojo(appelOffre.id)">
          {{afficherLibelleUA(appelOffre.ua_id) || 'Non renseigné'}}
        </td>
        <td @click="afficheModaleMembreCojo(appelOffre.id)">
          {{afficherLaListemembreCojo(appelOffre.role_membre_cojo_id )|| 'Non renseigné'}}</td>
        <div class="btn-group">
          <button @click.prevent="supprimerMembreCojo(appelOffre.id)"  class="btn btn-danger " title="Supprimer">
            <span class=""><i class="icon-trash"> Supprimer</i></span></button>
        </div>

      </tr>
      </tbody>
    </table>



    <div id="ajouter_membre_cojo" class="modal hide tailgrand" aria-hidden="true" style="display: none;">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter un autre membre de la Cojo </h3>
      </div>
      <div class="modal-body">
        <div class="widget-box">
          <form action="#" method="get" v-if="macheid">
            <table class="table table-bordered table-striped">
              <tr>
                <td>
                  <label>UA</label>
                  <model-list-select style="background-color: #fff;"
                                     class="wide"
                                     :list="listeStructure(macheid)"
                                     v-model="formDataMembreCojo.ua_id"
                                     option-value="id"
                                     option-text="libelle"
                                     placeholder="Unité administrative"
                  >

                  </model-list-select>

                </td>
                <td>
                  <label>Membre comite d'evaluation</label>
                  <select v-model="formDataMembreCojo.comite_evaluation">
                    <option value="oui">OUI</option>
                    <option value="non">NON</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="control-group">
                    <label>Matricule</label>
                    <div class="controls">
                      <input type="text" class="span" placeholder="Matricule " v-model="formDataMembreCojo.matricule" v-on:keyup="rechercheMembreCojo()" >
                      <code v-if="message_mandater">{{message_mandater}}</code>
                    </div>
                  </div>
                </td>


                <td>

                  <div class="control-group">

                    <label class="control-label">Nom et prénoms <code>*</code> :</label>
                    <div class="control-group">
                      <input type="text" class="span" placeholder="" v-model="formDataMembreCojo.nom_prenom">


                    </div>
                  </div>

                </td>
              </tr>
              <tr>
                <td>
                  <div class="control-group">
                    <label>Structure d'origine</label>
                    <div class="controls">
                      <input type="text" class="span" placeholder=" " :value="afficherLibelleStrutureOrigine(formDataMembreCojo.service_id)" readonly >
                      
                    </div>
                  </div>
                </td>

                <td>

                  <div class="control-group">

                    <label class="control-label">Fonction <code>*</code> :</label>
                    <div class="control-group">
                      <input type="text" class="span" placeholder="" :value="afficherLibelleFonction(formDataMembreCojo.fonction_id)" readonly>
                    </div>
                  </div>

                </td>
              </tr>
              <tr>

                <td colspan="">

                  <div class="control-group">

                    <label class="control-label span5">Contacts <code>*</code> :</label>

                    <div class="control-group">
                      <input type="text" class="span" placeholder="Numero lo" v-model="formDataMembreCojo.telephone" >


                    </div>
                  </div>
                </td>
                <td colspan="">

                  <div class="control-group">

                    <label class="control-label span5">Rôle <code>*</code> :</label>
                    <div class="controls">
                      <select v-model="formDataMembreCojo.role_membre_cojo_id" class="span">
                        <option v-for="varText in role_membrecojo" :key="varText.id"
                                :value="varText.id">{{varText.libelle}}</option>
                      </select>

                    </div>
                  </div>
                </td>
              </tr>

            </table>




          </form>
        </div>
      </div>
      <div class="modal-footer">
        <a class="btn btn-primary" @click.prevent="ajouterMembreCojoM()">Ajouter</a>
        <a data-dismiss="modal" class="btn btn-inverse" href="#">Annuler</a>
      </div>
    </div>


    <div id="modification_membre_cojo" class="modal hide" aria-hidden="true" style="display: none;">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modification  </h3>
      </div>
      <div class="modal-body">
        <div class="widget-box">
          <form action="#" method="get" v-if="macheid">
            <table class="table table-bordered table-striped">
              <tr>
                <td>
                  <label>UA</label>
                  <model-list-select style="background-color: #fff;"
                                     class="wide"
                                     :list="listeStructure(macheid)"
                                     v-model="edite_membre_cojo.ua_id"
                                     option-value="id"
                                     option-text="libelle"
                                     placeholder="Unité administrative"
                  >

                  </model-list-select>

                </td>
                <td>
                  <label>Membre comite d'evaluation</label>
                  <select v-model="edite_membre_cojo.comite_evaluation">
                    <option value="oui">OUI</option>
                    <option value="non">NON</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="control-group">
                    <label>Matricule</label>
                    <div class="controls">
                      <input type="text" class="span" placeholder="Matricule " v-model="edite_membre_cojo.matricule"  >
                      <code v-if="message_mandater">{{message_mandater}}</code>
                    </div>
                  </div>
                </td>

                <td>

                  <div class="control-group">

                    <label class="control-label">Nom et prénoms<code>*</code> :</label>
                    <div class="control-group">
                      <input type="text" class="span" placeholder="Numero lo" v-model="edite_membre_cojo.nom_prenom">


                    </div>
                  </div>

                </td>
              </tr>
              <tr>

                <td colspan="">

                  <div class="control-group">

                    <label class="control-label span5">Rôle <code>*</code> :</label>

                    <div class="controls">
                      <select v-model="edite_membre_cojo.role_membre_cojo_id" class="span">
                        <option v-for="varText in role_membrecojo" :key="varText.id"
                                :value="varText.id">{{varText.libelle}}</option>
                      </select>

                    </div>
                  </div>
                </td>
                 <td colspan="">

                  <div class="control-group">

                    <label class="control-label span5">Contacts <code>*</code> :</label>

                    <div class="control-group">
                      <input type="text" class="span" placeholder="Numero lo" v-model="edite_membre_cojo.telephone" >


                    </div>
                  </div>
                </td>
              </tr>

            </table>




          </form>
        </div>
      </div>
      <div class="modal-footer">
        <a class="btn btn-primary" @click.prevent="editeMembreCojoM()">Modifier</a>
        <a data-dismiss="modal" class="btn btn-inverse" href="#">Annuler</a>
      </div>
    </div>
    <notifications/>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {  ModelListSelect } from 'vue-search-select'
import 'vue-search-select/dist/VueSearchSelect.css'
export default {
name: "MembreCojo",
  props:["macheid"],
  components: {ModelListSelect,},
  data(){
    return{
      formDataMembreCojo:{
        matricule:"",
        type_appel:"",
        diff:1,
        nom_prenom:"",
        role_membre_cojo_id:"",
        cojo_id:"",
        ua_id:"",
        comite_evaluation:"non",
        telephone:""

      },
      nbr_click:0,
      edite_membre_cojo:"",
      message_mandater:""

    }
  },

  created(){
console.log(this.getterMembreCojo.filter(idmem=>idmem.marche_id==this.macheid))
  },
  computed:{
    listeMembreCojo: function (){
      let vM=this;
      if( vM.macheid!=""){
        return this.getterMembreCojo.filter(idmem=>idmem.marche_id==vM.macheid && idmem.diff==1);
      }
      return [];
    },
    ...mapGetters('bienService',['getterMembreCojo','getterCojos',"role_membrecojo","getterStructureDao"]),
  //...mapGetters('personnelUA', ['personnaliseActeurDepense',  'fonctions']),
    ...mapGetters('personnelUA', ['acteur_depenses',"all_acteur_depense",'fonctions']),

    ...mapGetters("uniteadministrative", [
      "acteCreations",
      "typeTextes",
      "uniteAdministratives",
      "getterBudgeCharge",
      "decomptefactures"
    ]),
      nbrAtteint(){
        return marche_id=>{
            let objte=this.getterCojos.find(item=>item.marche_id==marche_id)
            if(objte!=undefined){
               let nbr= this.listeMembreCojo.length;
               if(nbr==objte.nbr_participant) return false;

               return true
            }
            return true
        }
      },
    listeStructure() {
      return macheid => {
        if (macheid != "") {
         let objet= this.getterStructureDao.filter(idmarche => idmarche.marche_id == macheid)
          let arry=[]
          let vm=this
          objet.forEach(function (value) {
            let ua=vm.uniteAdministratives.find(item=>item.id==value.ua_id)
            arry.push(ua)
          })
          return arry
        }
        return []
      }
    },
    libelleUa(){
      return ua_id=>{
        let objet=this.uniteAdministratives.find(item=>item.id==ua_id)
        if(objet!=undefined){
          return objet.libelle
        }
        return ""
      }
    },
    // afficher la liste des roles membres
    afficherLaListemembreCojo(){
      return id =>{
        if(id!=null && id!=""){
          let varObjetListeMembrecojo = this.role_membrecojo.find(idmache =>idmache.id==id)
          return varObjetListeMembrecojo.libelle
        }
        return null
      }
    },
enregistreIdService() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.all_acteur_depense.find(qtreel => qtreel.acteur_depense_id == id);

      if (qtereel) {
        return qtereel.service_id;
      }
      return 0
        }
      };
    },
    enregistreIdFonction() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.all_acteur_depense.find(qtreel => qtreel.acteur_depense_id == id);

      if (qtereel) {
        return qtereel.fonction_id;
      }
      return 0
        }
      };
    },

    
    afficherLibelleUA(){
     return id => {
       if( id !=null && id!="") {
    var acteur = this.uniteAdministratives.find(acteur => acteur.id == id  )
    
     if(acteur){
       return acteur.libelle
     }
       }
    return null
     }
  
   },

    // affichageLibelleFonction
     afficherLibelleFonction(){
     return id => {
       if( id !=null && id!="") {
    var acteur = this.fonctions.find(acteur => acteur.id == id  )
    
     if(acteur){
       return acteur.libelle
     }
       }
    return null
     }
  
   },

   afficherLibelleStrutureOrigine(){
     return id => {
       if( id !=null && id!="") {
    var objet = this.uniteAdministratives.find(objet => objet.id == id  )
    
     if(objet){
       return objet.libelle
     }
       }
    return null
     }
  
   },

  
  },
  methods:{

    ...mapActions('bienService',['supprimerMembreCojo',
      'ajouterMembreCojo','modificationMembreCojo']),
AjouterMembreCojo23() {
      this.$("#ajouter_membre_cojo").modal({
        backdrop: "static",
        keyboard: false,
      });
    },
    editeMembreCojoM(){
      var nouvelObjet={
        ...this.edite_membre_cojo,
        	fonction:this.afficherLibelleFonction(this.formDataMembreCojo.fonction_id),
          ua_personnel:this.afficherLibelleStrutureOrigine(this.formDataMembreCojo.service_id),
      }
      this.modificationMembreCojo(nouvelObjet)
      this.$('#modification_membre_cojo').modal('hide');
    },

    ajouterMembreCojoM(){
      //let soundurl = 'http://soundbible.com/mp3/analog-watch-alarm_daniel-simion.mp3'
      if(!this.nbrAtteint(this.macheid)){
        this.nbr_click =this.nbr_click + 1
        if(this.nbr_click==3){
          var data3 = { soundurl : 'https://dcf-parametrage.kognishare.com/sung_alert/exageration.mp3'}
          var audio_us = new Audio(data3.soundurl);
          audio_us.play();
         // this.$('#ajouter_membre_cojo').modal('hide');
          return null
        }
        var data = { soundurl : 'https://dcf-parametrage.kognishare.com/sung_alert/alert_membre_participent.mp3'}
        var audio = new Audio(data.soundurl);
        audio.play();
        return null
      }
      var nouvelObjet ={
        ...this.formDataMembreCojo,
        marche_id :this.macheid,
        	fonction:this.afficherLibelleFonction(this.formDataMembreCojo.fonction_id),
          ua_personnel:this.afficherLibelleStrutureOrigine(this.formDataMembreCojo.service_id),
        cojo_id:this.cojo_id,
        nom_prenom:this.formDataMembreCojo.nom_prenom,
        matricule:this.formDataMembreCojo.matricule
      }
      //this.formDataMembreCojo.cojo_id=this.idcojo
      this.ajouterMembreCojo(nouvelObjet)
      this.formDataMembreCojo= {
        matricule:"",
        type_appel:"",
        diff:1,
        nom_prenom:"",
        role_membre_cojo_id:"",
        cojo_id:"",
        telephone:""
      }
    },



    rechercheMembreCojo(){
      // console.log(this.formMandater.matricule_m)

      let objetMandater=this.acteur_depenses.filter(item=>item.acteur_depense.matricule==this.formDataMembreCojo.matricule)
      // console.log(objetMandater)
      if(objetMandater!=undefined){
        if (objetMandater.length==1){
          let acteur= this.acteur_depenses.find(item=>item.acteur_depense.matricule==this.formDataMembreCojo.matricule)
          this.formDataMembreCojo.nom_prenom=acteur.acteur_depense.nom +" "+acteur.acteur_depense.prenom,
          this.formDataMembreCojo.fonction_id=acteur.acteur_depense.id,
          this.formDataMembreCojo.service_id=acteur.acteur_depense.id ,
          this.message_mandater=" "

        }
        else{
          this.message_mandater="Ce matricule n'existe pas dans notre base de donnée "
          this.formDataMembreCojo.nom_prenom=""
        }
      }
      if(this.formDataMembreCojo.matricule==""){
        this.formDataMembreCojo.nom_prenom=""
        this.message_mandater=" "
      }
    },

    afficheModaleMembreCojo(index){
      this.$('#modification_membre_cojo').modal({
        backdrop: "static",
        keyboard:false
      })
      this.edite_membre_cojo = this.getterMembreCojo.find(item=>item.id==index);
    },
  }
}
</script>

<style scoped>

</style>




