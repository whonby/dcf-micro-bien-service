<template>
    <div class="DetailCF">
        <notifications />
        <div class="container-fluid" v-if="detail">
            <div class="row-fluid">
                <div class="span12">
                    <div class="widget-box">
                        <div class="widget-title">
                            <div class="span6">
                                <span class="icon"> <i class="icon-th"></i> </span>
                                <h5>{{detail.libelle}}</h5>
                            </div>
                        </div>
                        <div class="widget-content nopadding" ref="content">
<!--                            <table class="table table-bordered table-striped">-->
<!--                                <thead>-->
<!--                                <tr>-->

<!--                                    <th>Matricule</th>-->
<!--                                    <th>Email</th>-->
<!--                                    <th>Rôle</th>-->
<!--                                </tr>-->
<!--                                </thead>-->
<!--                                <tbody>-->
<!--                                <tr class="odd gradeX">-->
<!--                                    <td>{{detail.matricule || 'Non renseigné'}}</td>-->
<!--                                    <td  >{{detail.email || 'Non renseigné'}}</td>-->
<!--                                    <td  v-if="detail.user_role.role.code_role=='DCF'">Directeur du contrôle financier</td>-->
<!--                                    <td  v-if="detail.user_role.role.code_role=='CF'">Contrôleur financier</td>-->

<!--                                </tr>-->
<!--                                </tbody>-->
<!--                            </table>-->


                        </div>
                        <div class="widget-box">
                            <div class="widget-title">
                                <ul class="nav nav-tabs">
                                    <li class="active"><a data-toggle="tab" href="#tab1">LISTE UNITE ADMINISTRATIVE</a></li>
                                    <li class="" v-if="!noDCfNoAdmin() || !cf()"><a data-toggle="tab" href="#tab2">AFFECTATION CF AU SERVICE</a></li>
                                    <li class=""><a data-toggle="tab" href="#tab3">PERSONNEL SERVICE</a></li>
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
                                                <h5>Liste des unités administratives</h5>
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

                                                    <th>Section</th>
                                                    <th title="service gestionnaire">Service gest</th>
                                                    <th title="localisation geographique">Localisation geo</th>
                                                    <th>Code</th>
                                                    <th title="unite administrative">UA</th>
                                                    <th>Date affectation</th>
                                                    <th>Date fin</th>
                                                    <th v-if="!noDCfNoAdmin() || !cf()">Action</th>

                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr
                                                        class="odd gradeX"
                                                        v-for="uniteadministrative in partition(cfUniteAdmin(detail.id),size)[page]"
                                                        :key="uniteadministrative.id"
                                                >
                                                    <td  >{{libelleSection(uniteadministrative.section_id)}}</td>
                                                    <td>{{libelleServiceGestionnaire(uniteadministrative.servicegest_id) }}</td>
                                                    <td  >{{libelleLocalGeographie(uniteadministrative.localisationgeo_id) }}</td>
                                                    <td >{{uniteadministrative.code }}</td>
                                                    <td >{{uniteadministrative.libelle }}</td>
                                                    <td @dblclick="modificationDateDebut(uniteadministrative.affectation.id,uniteadministrative.libelle)">{{ formaterDate(uniteadministrative.affectation.date_debut) }}</td>
                                                    <td  style="background: #99060b;color: #fff" v-if="uniteadministrative.affectation.date_fin">
                                                        {{ formaterDate(uniteadministrative.affectation.date_fin) }}</td>
                                                    <td  style="background: #069917;color: #fff" v-else>
                                                        En-cours</td>
                                                    <td v-if="!noDCfNoAdmin() || !cf()"> <div class="btn-group">
                                                        <button @click.prevent="detacher(uniteadministrative.affectation.id,uniteadministrative.libelle)"  class="btn btn-warning ">
                                                            <span class=""><i class="icon-remove"></i></span>
                                                        </button>
                                                        <button @click.prevent="supprimerAffectation(uniteadministrative.affectation.id)"  class="btn btn-danger ">
                                                            <span class=""><i class="icon-trash"></i></span>
                                                        </button>
                                                    </div>
                                                    </td>



                                                </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                        <div v-else>
                                            <p style="text-align:center;font-size:20px;color:red;">Aucune Unité Administrative</p>
                                        </div>
                                    </div>
                                    <div class="pagination alternate">
                                        <ul>
                                            <li :class="{ disabled : page == 0 }"><a @click.prevent="precedent()" href="#">Précedent</a></li>
                                            <li  v-for="(titre, index) in partition(cfUniteAdmin(detail.id),size).length" :key="index" :class="{ active : active_el == index }">
                                                <a @click.prevent="getDataPaginate(index)" href="#">{{index + 1}}</a></li>
                                            <li :class="{ disabled : page == partition(cfUniteAdmin(detail.id),size).length -1 }"><a @click.prevent="suivant()" href="#">Suivant</a></li>

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
                                                        <h5>Veuillez selectionner la section</h5>
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
                                                                <img slot="extra" class="image" src="../../../assets/002.png">
                                                                <p style="color: red">{{ listeM.libelle }}</p>
                                                            </p-check>
                                                        </div>
                                                        <div v-else>
                                                            <p-check class="pretty p-image p-plain "  style=" width: 100%; font-size: 20px !important;"  v-model="unite" :value="listeM.id">
                                                                <img slot="extra" class="image" src="../../../assets/004.png">
                                                                {{ listeM.libelle }}
                                                            </p-check>
                                                        </div>


                                                    </div>
                                                    <div v-if="!uniteBySection(section).length">
                                                        Pas de donnée disponible
                                                    </div>
                                                </div>
                                            </div>





                                        </div>
                                        <div class="span6">
                                            <div class="widget-box">
                                                <div class="widget-title">

                                                    <div class="span7">
                                                        <span class="icon">
                                                    <i class="icon-list"></i> </span> <h5>Unite administrative selectionné <code>({{listeUniteSelectionner.length}})</code></h5>
                                                    </div>
                                                    <div class="span5" align="right" v-if="listeUniteSelectionner.length">

                                                        <a href="#myAlert" data-toggle="modal" class="btn btn-primary" >Valider</a></div>

                                                </div>
                                                <div class="widget-content">
                                                    <div  v-for="(uni,index) in listeUniteSelectionner" :key="index+458000000000000" >

                                                        <p-check class="pretty p-image p-plain"
                                                                 style=" width: 100%; font-size: 20px !important;" v-model="unite"  :value="uni.id">
                                                            <img slot="extra" class="image" src="../../../assets/003.png">
                                                            {{ uni.libelle }}
                                                        </p-check>

                                                    </div>
                                                    <div v-if="!listeUniteSelectionner.length">
                                                        Pas d'unité administrative selectionnée
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div id="tab3" class="tab-pane">
                                    <div class="widget-box">
                                        <div class="widget-title">
                                            <ul class="nav nav-tabs">
                                                <li class="active"><a data-toggle="tab" href="#tabA">LISTE PERSONNEL</a></li>
                                                <li class=""><a data-toggle="tab" href="#tabP" v-if="!noDCfNoAdmin() || !cf()">AJOUTER</a></li>

                                            </ul>
                                        </div>
                                        <div class="widget-content tab-content">
                                            <div id="tabA" class="tab-pane active">
                                                <table class="table table-bordered table-striped">
                                                    <thead>
                                                    <tr>


                                                        <th>Matricule</th>
                                                        <th>Nom et prénom</th>
                                                        <th>Email</th>
<!--                                                        <th>Rôle</th>-->
                                                        <th>Action</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr class="odd gradeX" v-for="titre in filterMembreService(detail.id)" :key="titre.id">
                                                        <td :class="{ red : titre.status }">{{titre.matricule || 'Non renseigné'}}</td>
                                                        <td :class="{ red : titre.status }">{{titre.name || 'Non renseigné'}}</td>
                                                        <td :class="{ red : titre.status }">{{titre.email || 'Non renseigné'}}</td>
                                                        <td :class="{ red : titre.status }" v-if="titre.role">{{titre.role.libelle}}</td>
                                                        <td :class="{ red : titre.status }">
                                                            <!--                    <router-link :to="{ name: 'DetailCF', params: { id: titre.id }}"-->
                                                            <!--                                 class="btn btn-default " title="Detail CF">-->
                                                            <!--                      <span class=""><i class=" icon-folder-open"></i></span>-->
                                                            <!--                    </router-link>-->
                                                            <div class="btn-group">
                                                                <button  class="btn btn-danger ">
                                                                    <span class=""><i class="icon-trash"></i></span></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <!-- <tr v-if="titreFiltres.length==0" align="right">
                                                      <h6>Pas de donnée disponible</h6>
                                                    </tr> -->
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div id="tabP" class="tab-pane">
                                               <table class="table">
                                                   <tr>
                                                       <td>

                                                           <label>LISTE PERSONNEL
                                                               <a href="#" @click.prevent="videTypeCF()" v-if="personnel_selectionne" style="color: red">
                                                                   <i class="fa fa-trash-o"></i></a>
                                                           </label>
                                                           <model-list-select style="background-color: #fff;"
                                                                              class="wide"
                                                                              :list="acteurActivite"
                                                                              v-model="personnel_selectionne"
                                                                              option-value="id"
                                                                              option-text="name"
                                                                              placeholder="Personnel"
                                                           >

                                                           </model-list-select>
                                                       </td>
                                                   </tr>
                                                   <tr>
                                                       <td>
                                                           <div class="">
                                                               <label class="">Matricule:</label>
                                                               <div class="">
                                                                   <input type="text" v-model="formDataMembre.matricule" readonly class="span" placeholder="" />
                                                               </div>
                                                           </div>
                                                       </td>
                                                       <td>
                                                           <div class="">
                                                               <label class="">Nom et prénom:</label>
                                                               <div class="">
                                                                   <input type="text" v-model="formDataMembre.name" readonly class="span" placeholder="" />
                                                               </div>
                                                           </div>
                                                       </td>

                                                   </tr>
                                                   <tr>
                                                       <td>
                                                           <div class="">
                                                               <label class="">Date:</label>
                                                               <div class="">
                                                                   <input type="date" v-model="formDataMembre.date_debut" class="span" placeholder="" />
                                                               </div>
                                                           </div>
                                                       </td>
                                                       <td>
                                                           <div class="">
                                                               <label class="">Email:</label>
                                                               <div class="">
                                                                   <input type="text" required v-model="formDataMembre.email" class="span" placeholder="" />
                                                               </div>
                                                           </div>
                                                       </td>
                                                   </tr>
                                                   <tr>
                                                       <td>
                                                           <div class="">
                                                               <label class="">Fonction:</label>
                                                               <div class="">
                                                                   <input type="text" readonly required v-model="formDataMembre.fonction" class="span" placeholder="" />
                                                               </div>
                                                           </div>
                                                       </td>

                                                       <td>
                                                           <div class="">
                                                               <label class="">ROLE</label>
                                                               <div class="">
                                                                   <select v-model="formDataMembre.role_id">
                                                                       <option></option>
                                                                       <option v-for="item in filterRole" :key="item.id" :value="item.id" >
                                                                           {{item.libelle}}
                                                                       </option>
                                                                   </select>
                                                               </div>
                                                           </div>
                                                       </td>
                                                   </tr>


                                               </table>
                                                <a @click.prevent="ajouterPersonnelService" class="btn btn-primary"
                                                   href="#">Valider</a>
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

        <div id="myAlert" class="modal hide" aria-hidden="true" style="display: none;">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Affectation du CF</h3>
            </div>
            <div class="modal-body">
                <div class="controls">
                    <label>Entrez la date d'affectation</label>
                    <input type="date" v-model="formData.date_debut"  class="span5">
                </div>
            </div>
            <div class="modal-footer">
                <a data-dismiss="modal" @click.prevent="ajouer()" class="btn btn-primary" href="#">Confirm</a> <a data-dismiss="modal" class="btn" href="#">Fermer</a> </div>
        </div>


        <div id="myAlert1" class="modal hide" aria-hidden="true" style="display: none;">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Fin d'activité pour {{libelleUniteAdmin}} </h3>
            </div>
            <div class="modal-body">
                <div class="controls">
                    <label>Entrez la date de fin</label>
                    <input type="date" v-model="date_fin"  class="span5">
                </div>
            </div>
            <div class="modal-footer">
                <a data-dismiss="modal" @click.prevent="finActiviteCfSurUniteAdministrative()" class="btn btn-primary" href="#">Confirm</a> <a data-dismiss="modal" class="btn" href="#">Fermer</a> </div>
        </div>

        <div id="modificationdateDebut" class="modal hide" aria-hidden="true" style="display: none;">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Date début d'activité pour {{libelleUniteAdmin}} </h3>
            </div>
            <div class="modal-body">
                <div class="controls">
                    <label>Entrez la date début</label>
                    <input type="date" v-model="edite.date_debut"  class="span5">
                </div>
            </div>
            <div class="modal-footer">
                <a data-dismiss="modal" @click.prevent="modficationDateDebutUnite()" class="btn btn-primary" href="#">Confirm</a> <a data-dismiss="modal" class="btn" href="#">Fermer</a> </div>
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
    import {partition} from "../../../Repositories/Repository"
    import {  ModelListSelect } from 'vue-search-select'
    import 'vue-search-select/dist/VueSearchSelect.css'
    //import ProgressBar from "../component/ProgressBar"
    import {admin,dcf,cf,noDCfNoAdmin} from "../../../Repositories/Auth"
    export default {
        name: 'AffectationServiceCfaUA',
        props: ['marche'],
        components:{
            //ProgressBar
            ModelListSelect
        },
        data() {
            return {
                search:"",
                personnel_selectionne:"",
                fabActions: [
                    {
                        name: "cache",
                        icon: "add"
                    }
                ],
                formData:{
                    date_debut:"",
                    unite:"",
                    servicecf_id:""
                },
                active_el:0,
                page:0,
                size:10,
                detail:"",
                detailAffectation:"",
                unite: [],
                arrayUniteAdmin:[],
                section:"",
                edite:"",
                libelleUniteAdmin:"",
                date_fin:"",
                formDataMembre:{
                    email:"",
                    name:"",
                    role_id:"",
                    matricule:"",
                    servicecf_id:"",
                    date_debut:"",
                    fonction:"",
                    role:2
                },

            };
        },
        created() {
            this.detail=this.getterServiceCF.find(item=>item.id==this.$route.params.id)
            this.detailAffectation=this.getterAffectation.filter(item=>item.servicecf_id==this.$route.params.id)
            this.formDataMembre.servicecf_id=this.detail.id
            console.log(this.acteurActivite)
            //  console.log(this.detail)
        },
        computed: {
            ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterServiceCF","getterAffectionServiceCF","getterRoles"]),
            ...mapGetters("uniteadministrative", [
                "jointureUaChapitreSection",
                "uniteAdministratives"
            ]),
            ...mapGetters('personnelUA', ["personnaFonction","afficheNombrePersonnelRecuActeNormination","fonctionBudgetaire","type_salaries","type_contrats","acte_personnels","type_acte_personnels","fonctions","grades","niveau_etudes",
                "nbr_acteur_actredite_taux","all_acteur_depense","personnaliseActeurFinContrat",
                "totalActeurEnctivite","totalActeurDepense","totalActeurAccredite","tauxActeurAccredite","totalActeurNonAccredite","personnaliseActeurDepense","affichePersonnelRecuActeNormination"]),
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
            filterRole(){
                return this.getterRoles.filter(item=>{
                    if(item.code_role!="DCF" && item.code_role!="CF" && item.code_role!="SUPER_ADMIN"){
                        return item
                    }
                })
            },

            acteurActivite() {
              let objet = this.uniteAdministratives.find(item=>item.code=="322-13010212-780102")
                //console.log(objet)
                if (objet!=undefined){
                    let array=[]

                    let ob=this.all_acteur_depense.filter(row=>row.unite_administrative_id==objet.id)
                    console.log(ob)
                    ob.forEach(function (value) {
                        let nom_prenom=value.nom+" "+value.prenom
                        let _objet={
                            ...value,
                            name:nom_prenom
                        }
                        array.push(_objet)
                    })
                    return array;
                }

                return []
            },

            filterMembreService(){
              return service_id=>{
                  if(service_id){
                      let array_user=[]
                      let vm=this
                      let affactation = this.getterAffectionServiceCF.filter(item=>item.servicecf_id==service_id)
                      //console.log(affactation)
                      if(affactation.length>0){
                          affactation.forEach(function (value) {
                          if(value.date_fin==null){
                             let objet_user=vm.getterUtilisateur.find(item=>item.id==value.user_id)
                              let valeur_status=false;
                             if(value.role==1){
                                 valeur_status=true
                             }
                              let objet_per={
                                 ...objet_user,
                                  status:valeur_status
                              }
                              array_user.push(objet_per)
                          }
                         })
                      }
                  return array_user
                  }
                  return ""


              }
            },
            cfUniteAdmin(){

                return id=>{
                    // let vm=this
                    let colect=[];
                    let uniteCF=this.getterAffectation.filter(item=>item.servicecf_id==id)
                    if (uniteCF.length>0){

                        this.jointureUaChapitreSection.filter(item=>{
                            let val=   uniteCF.find(row=>row.unite_administrative_id==item.id)
                            // console.log(val)
                            if (val!=undefined){
                                item={
                                    ...item,
                                    affectation:val
                                }
                                colect.push(item)
                                // console.log(colect)
                                return item
                            }
                        })
                        // console.log(colect)
                        return colect

                    }
                    //   console.log("OK Guei Roland")
                    return colect
                }

            },
            uniteDejaAffecter(){
                return id=>{
                    if (id){
                        let affecter=this.getterAffectation.find(item=>{
                            if (item.unite_administrative_id==id && item.date_fin==null ){
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
                //  console.log("Ok BBB")
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
                    //let colect=[]
                    if(id){
                        return this.jointureUaChapitreSection.filter(item=>item.section_id==id)
                    }
                    return this.jointureUaChapitreSection
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
            ...mapActions('Utilisateurs', ['ajouterAffectation',"getAffectation","supprimerAffectation","modifierAffection","ajouterPersonneService","ajouterPersonneService"]),
            videTypeCF(){
                this.personnel_selectionne=""
            },
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
            ajouer(){

                this.formData.unite=this.unite
                this.formData.servicecf_id=this.detail.id
              //  this.formData.role_id=this.detail.user_role.role_id
                console.log(this.formData)
                this.ajouterAffectation(this.formData)
                this.unite=[]
                this.formData={
                    servicecf_id:"",
                    date_debut:"",
                    unite:""
                }

            },
            ajouterPersonnelService(){
//console.log(this.formDataMembre)
                if(this.formDataMembre.email==""){
                    this.$notify({
                        title: 'ERROR',
                        text: "Veillez selectionner l'email",
                        type:"error"
                    })
                    return null
                }
                if(this.formDataMembre.date_debut==""){
                    this.$notify({
                        title: 'ERROR',
                        text: 'Veillez selectionner la date debut',
                        type:"error"
                    })
                    return null
                }
                this.ajouterPersonneService(this.formDataMembre)
                // this.formDataMembre={
                //         email:"",
                //         name:"",
                //         role_id:"",
                //         matricule:"",
                //         servicecf_id:"",
                //         date_debut:"",
                //         role:2
                // }
                this.formDataMembre.email=""
                this.formDataMembre.name=""
                this.formDataMembre.role_id=""
                this.formDataMembre.matricule=""
                this.formDataMembre.date_debut=""
                this.formDataMembre.role=2
            },
            detacher(id,libelle){
                this.$('#myAlert1').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.libelleUniteAdmin=libelle
                this.edite=  this.getterAffectation.find(item=>item.id==id)
            },
            modificationDateDebut(id,libelle){
                this.$('#modificationdateDebut').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.libelleUniteAdmin=libelle
                this.edite=  this.getterAffectation.find(item=>item.id==id)
            },
            libelleUniteAdministrative(id){
                console.log(id)
                let uniteadmin=this.jointureUaChapitreSection.find(item=>item.id=id)
                return uniteadmin.libelle
            },
            finActiviteCfSurUniteAdministrative(){
                this.$('#myAlert1').modal('hide');
                this.edite.date_fin=this.date_fin
                console.log(this.edite)
                this.modifierAffection(this.edite)
            },
            modficationDateDebutUnite(){
                this.$('#modificationdateDebut').modal('hide');

                this.modifierAffection(this.edite).then(data=>{
                    console.log(data)
                    this.getAffectation()

                })
            },
            addUnite(id){
                console.log(id)
                this.arrayUniteAdmin.push(id)
            },
            removeUnite(id){
                this.arrayUniteAdmin=this.arrayUniteAdmin.filter(item=>item!=id)
            },
            admin:admin,
            dcf:dcf,
            cf:cf,
            noDCfNoAdmin:noDCfNoAdmin,
        },
        watch: {
            personnel_selectionne:function (value) {
                console.log(value);
                 if (value){
                     let objet_personnel=this.acteurActivite.find(item=>item.id==value)
                     let objet_fonction=this.fonctions.find(item=>item.id==objet_personnel.fonction_id)

                     this.formDataMembre.email=objet_personnel.email
                     this.formDataMembre.matricule=objet_personnel.matricule
                     this.formDataMembre.name=objet_personnel.name
                     this.formDataMembre.fonction=objet_fonction.libelle
                  //   console.log(this.formDataMembre)
                 }else{
                     this.formDataMembre.email=""
                     this.formDataMembre.matricule=""
                     this.formDataMembre.name=""
                     this.formDataMembre.fonction=""
                 }


            },


        },
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
    .red {
        color: #fff !important;
        background-color: #00499c !important;
    }
</style>