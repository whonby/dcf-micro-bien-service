<template>
  <div>


    <div align="right">

      <a href="#ajouter_membre_cojo" data-toggle="modal" class="btn btn-primary">Ajouter</a>
    </div>
    <table class="table table-bordered table-striped" v-if="macheid">
      <thead>
      <tr>
        <th>Matricule</th>
        <th>Nom et prénoms</th>
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
          {{appelOffre.nom_prenom || 'Non renseigné'}}</td>
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
                      <input type="text" class="span" placeholder=" " v-model="formDataMembreCojo.service_id" readonly >
                      
                    </div>
                  </div>
                </td>

                <td>

                  <div class="control-group">

                    <label class="control-label">Fonction <code>*</code> :</label>
                    <div class="control-group">
                      <input type="text" class="span" placeholder="" v-model="formDataMembreCojo.fonction_id" readonly>


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

                <td colspan="2">

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
        nom_prenom:"",
        role_membre_cojo_id:"",
        cojo_id:"",
        ua_id:""

      },
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
        return this.getterMembreCojo.filter(idmem=>idmem.marche_id==vM.macheid);
      }
      return null;
    },
    ...mapGetters('bienService',['getterMembreCojo','getterCojos',"role_membrecojo","getterStructureDao"]),

    ...mapGetters('personnelUA', ['acteur_depenses',"all_acteur_depense"]),

    ...mapGetters("uniteadministrative", [
      "acteCreations",
      "typeTextes",
      "uniteAdministratives",
      "getterBudgeCharge",
      "decomptefactures"
    ]),
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
  },
  methods:{

    ...mapActions('bienService',['supprimerMembreCojo',
      'ajouterMembreCojo','modificationMembreCojo']),

    editeMembreCojoM(){
      this.modificationMembreCojo(this.edite_membre_cojo)
      this.$('#modification_membre_cojo').modal('hide');
    },

    ajouterMembreCojoM(){
      var nouvelObjet ={
        ...this.formDataMembreCojo,
        marche_id :this.macheid,
        cojo_id:this.cojo_id,
        nom_prenom:this.formDataMembreCojo.nom_prenom,
        matricule:this.formDataMembreCojo.matricule
      }
      //this.formDataMembreCojo.cojo_id=this.idcojo
      this.ajouterMembreCojo(nouvelObjet)
      this.formDataMembreCojo= {
        matricule:"",
        type_appel:"",
        nom_prenom:"",
        role_membre_cojo_id:"",
        cojo_id:"",
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




