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
                                <h5>{{detail.name}}</h5>
                            </div>
                        </div>
                        <div class="widget-content nopadding" ref="content">
                            <table class="table table-bordered table-striped">
                                <thead>
                                <tr>

                                    <th>Matricule</th>
                                    <th>Email</th>
                                    <th>Rôle</th>
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
                                    <li class="active"><a data-toggle="tab" href="#tab1">Liste service</a></li>
                                    <li class=""><a data-toggle="tab" href="#tab2">Affectation CF au service</a></li>

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
                                                <h5>Liste des services</h5>
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

                                        <div class="widget-content nopadding">

                                            <table class="table table-bordered table-striped" id="Nature_section">
                                                <thead>
                                                <tr>

                                                    <th>code</th>
                                                    <th title="service gestionnaire">Libelle</th>
                                                    <th>Date affectation</th>
                                                    <th>Date fin</th>
                                                    <th>Action</th>

                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr
                                                        class="odd gradeX"
                                                        v-for="item in partition(serviceCF(detail.id),size)[page]"
                                                        :key="item.id"
                                                >
                                                    <td >{{item.code }}</td>
                                                    <td >{{item.libelle }}</td>
                                                    <td>{{ formaterDate(item.affectation.date_debut) }}</td>
                                                    <td  style="background: #99060b;color: #fff" v-if="item.affectation.date_fin">
                                                        {{ formaterDate(item.affectation.date_fin) }}</td>
                                                    <td  style="background: #069917;color: #fff" v-else>
                                                        En-cours</td>
                                                    <td > <div class="btn-group">
                                                        <button @click.prevent="detacher(item.affectation.id,item.libelle)"  class="btn btn-warning ">
                                                            <span class=""><i class="icon-remove"></i></span>
                                                        </button>
                                                        <button @click.prevent="supprimerAffectationServiceCF(item.affectation.id)"   class="btn btn-danger ">
                                                            <span class=""><i class="icon-trash"></i></span>
                                                        </button>
                                                    </div>
                                                    </td>



                                                </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                        <div class="pagination alternate">
                                            <ul>
                                                <li :class="{ disabled : page == 0 }"><a @click.prevent="precedent()" href="#">Précedent</a></li>
                                                <li  v-for="(titre, index) in partition(serviceCF(detail.id),size).length" :key="index" :class="{ active : active_el == index }">
                                                    <a @click.prevent="getDataPaginate(index)" href="#">{{index + 1}}</a></li>
                                                <li :class="{ disabled : page == partition(serviceCF(detail.id),size).length -1 }"><a @click.prevent="suivant()" href="#">Suivant</a></li>

                                            </ul>
                                        </div>
                                    </div>

                                </div>
                                <div id="tab2" class="tab-pane">

                                    <div class="row-fluid">
                                        <div class="span6" >



                                        </div>
                                        <div class="span6">
                                            <div class="widget-box">

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
        name: 'DetailServiceCF',
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
                formData:{
                    role_id:"",
                    user_id:"",
                    date_debut:"",
                    unite:""
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
                date_fin:""

            };
        },
        created() {
            this.detail=this.getterUtilisateur.find(item=>item.id==this.$route.params.id)
            this.detailAffectation=this.getterAffectionServiceCF.filter(item=>item.user_id==this.$route.params.id)

             console.log(this.getterAffectionServiceCF)
        },
        computed: {
            ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterServiceCF","getterAffectionServiceCF"]),
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
            serviceCF(){

                return id=>{
                    // let vm=this
                    console.log(id)
                    let colect=[];
                    let uniteCF=this.getterAffectionServiceCF.filter(item=>item.user_id==id)
                    if (uniteCF.length>0){

                        this.getterServiceCF.filter(item=>{
                            let val=   uniteCF.find(row=>row.servicecf_id==item.id)
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
            ...mapActions('Utilisateurs', ['ajouterAffectation',"getAffectation","supprimerAffectation","modifierAffection","supprimerAffectationServiceCF","modifierAffectationServiceCF"]),
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
                /* formData:{
                     role_id:"",
                         user_id:"",
                         date_debut:"",
                         unite:""
                 }*/
                this.formData.unite=this.unite
                this.formData.user_id=this.detail.id
                this.formData.role_id=this.detail.user_role.role_id
                console.log(this.formData)
                this.ajouterAffectation(this.formData).then(data=>{
                    this.getAffectation()
                    console.log(data)
                    this.unite=[]
                    this.formData={
                        role_id:"",
                        user_id:"",
                        date_debut:"",
                        unite:""
                    }

                })

            },
            detacher(id,libelle){
                this.$('#myAlert1').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.libelleUniteAdmin=libelle
                this.edite=  this.getterAffectionServiceCF.find(item=>item.id==id)
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
                if(this.date_fin=="")
                     return null
                this.$('#myAlert1').modal('hide');

                this.edite.date_fin=this.date_fin
                console.log(this.edite)
                let objet={
                    user_id:this.edite.user_id,
                    servicecf_id:this.edite.servicecf_id,
                    date_debut:this.edite.date_debut,
                    date_fin:this.date_fin,
                    id:this.edite.id
                }
                this.modifierAffectationServiceCF(objet)
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
