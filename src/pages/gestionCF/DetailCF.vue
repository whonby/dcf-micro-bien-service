<template>
    <div class="DetailCF">
        <div class="container-fluid" v-if="detail">
            <div class="row-fluid">
                <div class="span12">
                    <div class="widget-box">
                        <div class="widget-title">
                            <div class="span6">
                                <span class="icon"> <i class="icon-th"></i> </span>
                                <h5>{{detail.name}}</h5>
                            </div>
                        </div>
                        <div class="widget-content nopadding" ref="content">
                            <table class="table table-bordered table-striped">
                                <thead>
                                <tr>

                                    <th>Matricule</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="odd gradeX">
                                    <td>{{detail.matricule || 'Non renseigné'}}</td>
                                    <td  >{{detail.email || 'Non renseigné'}}</td>
                                    <td  v-if="detail.user_role.role.code_role=='DCF'">Directeur du contrôle financier</td>
                                    <td  v-if="detail.user_role.role.code_role=='CF'">Contrôleur financier</td>

                                </tr>
                                </tbody>
                            </table>


                        </div>
                        <div class="widget-box">
                            <div class="widget-title">
                                <ul class="nav nav-tabs">
                                    <li class="active"><a data-toggle="tab" href="#tab1">Liste Unite adminitrative</a></li>
                                    <li class=""><a data-toggle="tab" href="#tab2">Affectation du CF</a></li>

                                </ul>
                            </div>
                            <div class="widget-content tab-content">
                                <div id="tab1" class="tab-pane active">
                                    <div class="widget-box">
                                        <div class="widget-title">
                                            <div class="span6">
 <span class="icon">
                <i class="icon-th"></i>
              </span>
                                                <h5>Liste des unité d'administrative</h5>
                                            </div>
                                            <div class="span6">
                                                <div align="right">
                                                    Recherche:
                                                    <input type="search" placeholder="Saisie section ou libelle" v-model="search" />

                                                </div>
                                            </div>
                                            <div class="span4">
                                                <br>
                                                Afficher
                                                <select name="pets" id="pet-select" v-model="size" class="span3">
                                                    <option value="10">10</option>
                                                    <option value="25">25</option>
                                                    <option value="50">50</option>
                                                    <option value="100">100</option>
                                                </select>
                                                Entrer
                                            </div>

                                        </div>

                                        <div
                                                class="widget-content nopadding"
                                                v-if="type_Unite_admins.length && sections.length && chapitres.length"
                                        >
                                            <table class="table table-bordered table-striped" id="Nature_section">
                                                <thead>
                                                <tr>
                                                    <th title="type unite administrative">Type ua</th>
                                                    <th>nature Section</th>
                                                    <th>Section</th>
                                                    <th title="service gestionnaire">Service gest</th>
                                                    <th title="localisation geographique">Localisation geo</th>
                                                    <th>Code</th>
                                                    <th title="unite administrative">UA</th>
                                                    <th>Date création</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr
                                                        class="odd gradeX"
                                                        v-for="uniteadministrative in partition(cfUniteAdmin,size)[page]"
                                                        :key="uniteadministrative.id"
                                                >

                                                    <!-- <template v-if="uniteadministrative.type_ua_id = type_Unite_admins.id"> -->
                                                    <td >{{libelleUa(uniteadministrative.type_ua_id)}}</td>
                                                    <td  >{{libelleNatureSection(uniteadministrative.nature_section_id) }}</td>
                                                    <td  >{{libelleSection(uniteadministrative.section_id)}}</td>
                                                    <td>{{libelleServiceGestionnaire(uniteadministrative.servicegest_id) }}</td>
                                                    <td  >{{libelleLocalGeographie(uniteadministrative.localisationgeo_id) }}</td>
                                                    <td >{{uniteadministrative.code }}</td>
                                                    <td >{{uniteadministrative.libelle }}</td>
                                                    <td >{{ formaterDate(uniteadministrative.date_creation) }}</td>



                                                </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                        <div v-else>
                                            <p style="text-align:center;font-size:20px;color:red;">Aucune Unite Administrative</p>
                                        </div>
                                    </div>
                                    <div class="pagination alternate">
                                        <ul>
                                            <li :class="{ disabled : page == 0 }"><a @click.prevent="precedent()" href="#">Précedent</a></li>
                                            <li  v-for="(titre, index) in partition(cfUniteAdmin,size).length" :key="index" :class="{ active : active_el == index }">
                                                <a @click.prevent="getDataPaginate(index)" href="#">{{index + 1}}</a></li>
                                            <li :class="{ disabled : page == partition(cfUniteAdmin,size).length -1 }"><a @click.prevent="suivant()" href="#">Suivant</a></li>

                                        </ul>
                                    </div>
                                </div>
                                <div id="tab2" class="tab-pane">

                                    <div class="row-fluid">
                                        <div class="span6" >


                                            <div class="widget-box">
                                                <div class="widget-title">
                                                    <div class="span6">
                                                        <span class="icon"> <i class="icon-list"></i> </span>
                                                        <h5>Veillez selectionner la section</h5>
                                                    </div>
                                                    <div class="span6">

                                                        <select v-model="section">
                                                            <option></option>
                                                            <option v-for="item in sections" :key="item.id" :value="item.id" >
                                                                {{item.nom_section}}
                                                            </option>

                                                        </select>
                                                    </div>

                                                </div>
                                                <div class="widget-content">
                                                    <div  v-for="(listeM,index) in uniteBySection(section)" :key="index" >
                                                           <div v-if="uniteDejaAffecter(listeM.id)">
                                                               <p-check class="pretty p-image p-plain "  checked   disabled style=" width: 100%; font-size: 20px !important;" v-model="unite" :value="listeM.id">
                                                                   <img slot="extra" class="image" src="../../assets/002.png">
                                                                   {{ listeM.libelle }}
                                                               </p-check>
                                                           </div>
                                                        <div v-else>
                                                            <p-check class="pretty p-image p-plain "  style=" width: 100%; font-size: 20px !important;"  v-model="unite" :value="listeM.id">
                                                                <img slot="extra" class="image" src="../../assets/004.png">
                                                                {{ listeM.libelle }}
                                                            </p-check>
                                                        </div>


                                                    </div>
                                                    <div v-if="!uniteBySection(section).length">
                                                        Pas de donnee disponible
                                                    </div>
                                                   </div>
                                            </div>





                                        </div>
                                        <div class="span6">
                                            <div class="widget-box">
                                                <div class="widget-title">

                                                    <div class="span7">
                                                        <span class="icon">
                                                    <i class="icon-list"></i> </span> <h5>Unite administrative selectionner <code>({{listeUniteSelectionner.length}})</code></h5>
                                                    </div>
                                                    <div class="span5" align="right" v-if="listeUniteSelectionner.length"><a  class="btn btn-primary"
                                                                          href="#">Valider</a></div>

                                                </div>
                                                <div class="widget-content">
                                                    <div  v-for="listeM in listeUniteSelectionner" :key="listeM" >

                                                        <p-check class="pretty p-image p-plain"
                                                                 style=" width: 100%; font-size: 20px !important;" v-model="unite"  :value="listeM.id">
                                                            <img slot="extra" class="image" src="../../assets/003.png">
                                                           {{ listeM.libelle }}
                                                        </p-check>

                                                    </div>
                                                    <div v-if="!listeUniteSelectionner.length">
                                                        Pas d'unite administrative selectionner
                                                    </div>
                                                     </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
  /*  import { formatageSomme } from "../../Repositories/Repository";
    import {  ModelListSelect } from 'vue-search-select'
    import 'vue-search-select/dist/VueSearchSelect.css'
    ";*/
    import moment from "moment"
    import {partition} from "../../Repositories/Repository"

    //import ProgressBar from "../component/ProgressBar"
    export default {
        name: 'budget',
        props: ['marche'],
        components:{
            //ProgressBar
        },
        data() {
            return {
                search:"",
                fabActions: [
                    {
                        name: "cache",
                        icon: "add"
                    }

                ],
                active_el:0,
                page:0,
                size:10,
                detail:"",
                detailAffectation:"",
                unite: [],
                arrayUniteAdmin:[],
                section:""

            };
        },
        created() {
            this.detail=this.getterUtilisateur.find(item=>item.id==this.$route.params.id)
            this.detailAffectation=this.getterAffectation.filter(item=>item.user_id==this.$route.params.id)

            console.log(this.detailAffectation)
        },
        computed: {
            ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation"]),
            ...mapGetters("uniteadministrative", [
                "jointureUaChapitreSection",
                "uniteAdministratives"
            ]),
            ...mapGetters("parametreGenerauxAdministratif", [
                "chapitres",
                "sections",
                "type_Unite_admins",
                "services_gestionnaires",
                "localisations_geographiques",
                "afficheServiceGestionnaireNiveau4",
                "afficheLocalisationGeoNiveau5",
                "natures_sections"
            ]),
           cfUniteAdmin(){
                let vm=this
               let colect=[];
                if (this.detailAffectation.length>0){

                    return this.jointureUaChapitreSection.filter(item=>{
                     let val=   vm.detailAffectation.find(row=>row.unite_administrative_id==item.id)
                       // console.log(val)
                        if (val!=undefined){
                            return item
                        }
                    })


                }
               console.log("Ok BBB")
                return colect
           },
            uniteDejaAffecter(){
              return id=>{
                  if (id){
                    let affecter=this.getterAffectation.find(item=>{
                        if (item.unite_administrative_id==id && item.user_id==this.detail.id && item.date_fin==null ){
                         return item
                        }
                    })
                      if (affecter){
                          return true
                      }
                  return false
                  }
              }
            },
            listeUniteSelectionner(){
                let vm=this
                let colect=[];
                if (this.unite.length>0){
                    return this.jointureUaChapitreSection.filter(item=>{
                        let val=   vm.unite.find(row=>row==item.id)
                        // console.log(val)
                        if (val!=undefined){
                            return item
                        }
                    })


                }
                console.log("Ok BBB")
                return colect
            },
            libelleUa() {
                return id => {
                    if (id != null && id != "") {
                        const qtereel = this.type_Unite_admins.find(qtreel => qtreel.id == id);

                        if (qtereel) {
                            return qtereel.libelle;
                        }
                        return 0
                    }
                };
            },
            libelleLocalGeographie() {
                return id => {
                    if (id != null && id != "") {
                        const qtereel = this.localisations_geographiques.find(qtreel => qtreel.id == id);

                        if (qtereel) {
                            return qtereel.libelle;
                        }
                        return 0
                    }
                };
            },
            uniteBySection(){
            return id=>{
                let colect=[]
                if(id){
                    return this.jointureUaChapitreSection.filter(item=>item.section_id==id)
                }
                return colect
            }
            },
            libelleNatureSection() {
                return id => {
                    if (id != null && id != "") {
                        const qtereel = this.natures_sections.find(qtreel => qtreel.id == id);

                        if (qtereel) {
                            return qtereel.libelle;
                        }
                        return 0
                    }
                };
            },
            libelleServiceGestionnaire() {
                return id => {
                    if (id != null && id != "") {
                        const qtereel = this.services_gestionnaires.find(qtreel => qtreel.id == id);

                        if (qtereel) {
                            return qtereel.libelle;
                        }
                        return 0
                    }
                };
            },
            libelleSection() {
                return id => {
                    if (id != null && id != "") {
                        const qtereel = this.sections.find(qtreel => qtreel.id == id);

                        if (qtereel) {
                            return qtereel.nom_section;
                        }
                        return 0
                    }
                };
            },
        },
        methods: {
            ...mapActions('Utilisateurs', ['ajouterAffectation',"getAffectation","supprimerAffectation","modifierAffection"]),
            formaterDate(date) {
                return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },
            partition:partition,
            getDataPaginate(index){
                this.active_el = index;
                this.page=index
            },
            precedent(){
                this.active_el--
                this.page --
            },
            suivant(){
                this.active_el++
                this.page ++
            },
        libelleUniteAdministrative(id){
            console.log(id)
            let uniteadmin=this.jointureUaChapitreSection.find(item=>item.id=id)
            return uniteadmin.libelle
        },
            addUnite(id){
                console.log(id)
                this.arrayUniteAdmin.push(id)
            },
           removeUnite(id){
              this.arrayUniteAdmin=this.arrayUniteAdmin.filter(item=>item!=id)
           }
        }
    };
</script>
<style scoped>
    .taillemodal {
        width: 800px;
        margin: 0 -380px;
    }
    .gdmodelfour
    {
        width: 1000px;
        margin: 0 -580px;
        height: 500px;
    }
    .grdirModalActeEffet
    {

        width: 1200px;
        margin: 0 -530px;
        height: 550px;

    }
    .grdirModalAnalyse{
        width: 1000px;
        margin: 0 -530px;
        height: 350px;
    }
    .tlAviBailleur{
        width: 1000px;
        margin: 0 -530px;
        height: 450px;

    }
    .tlDossierCandidat{
        width: 1000px;
        margin: 0 -530px;
        height: 500px;

    }

    .tlg{
        width: 900px;
        margin: 0 -450px;
        height: 500px;
    }
    .sommecolor{
        background-color: red;
        color:red;
        font-size: 120%;
        text-align: center;
        font-weight:bold;
    }
    .modaloffreFin{
        width: 850px;
        margin: 0 -480px;
    }
    .tailDMP{
        width: 850px;
        margin: 0 -490px;
    }
    .tailleModalOffre{
        width: 1200px;
        margin: 0 -490px;
    }
    .tailleModalOffre2{
        width: 1300px;
        margin: 0 -690px;
    }
</style>
