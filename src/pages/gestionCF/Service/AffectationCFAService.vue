<template>
    <div class="DetailCF">
        <notifications />
        <div class="container-fluid">
            <div class="row-fluid">
                <div class="span12">
                    <div class="widget-box">
                        <div class="widget-title">
                            <div class="span4">
                                <span class="icon"> <i class="icon-th"></i> </span>
                                <h5>Affectation de service a CF</h5>
                            </div>
                            <div class="span6" align="right">
                                Date debut
                                <input type="date" v-model="formData.date_debut"/>
                            </div>
                            <div class="span2" align="right">
                                <a href="#myAlert" data-toggle="modal" class="btn btn-primary" @click.prevent="ajouterCF()">Valider</a>
                            </div>
                        </div>

                        <div class="widget-box">
                            <div class="row-fluid">
                                <div class="span6">
                                    <div class="widget-box">
                                        <div class="widget-title">
                                            <div class="span6">
                                                <span class="icon"> <i class="icon-list"></i> </span>
                                                <h5>Veuillez selectionner le CF</h5>
                                            </div>
                                            <div class="span6">
                                                <div align="right">
                                                    Rechecher: <input type="text" v-model="search">

                                                </div>
                                            </div>

                                        </div>
                                        <div class="widget-content">
                                            <div class="inputGroup" v-for="item in titreFiltres" :key="'user'+item.id">
                                                <input :id="'radion'+item.id"  type="radio" :value="item.id" v-model="formData.user_id"/>
                                                <label :for="'radion'+item.id">{{item.name}}</label>
                                            </div>
                                        </div>
                                    </div>





                                </div>
                                <div class="span6">

                                    <div class="widget-box">
                                        <div class="widget-title">

                                            <div class="span6">
                                                        <span class="icon">
                                                    <i class="icon-list"></i>
                                                        </span> <h5>Veillez selectionner le service </h5>
                                            </div>
                                            <div class="span6" align="right">
                                                Rechecher: <input type="text" v-model="search2">

                                            </div>

                                        </div>
                                        <div class="widget-content">
                                            <div class="inputGroup" v-for="item in titreFiltresService" :key="'service'+item.id">
                                                <input :id="'rad'+item.id"  type="radio" :value="item.id" v-model="formData.servicecf_id"/>
                                                <label :for="'rad'+item.id">{{item.libelle}}</label>
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
    import {mapActions, mapGetters} from "vuex";
    import {formatageSomme, partition} from "../../../Repositories/Repository";

    export default {
        name: "AffectationCFAService",
        data() {
            return {
                fabActions: [
                    {
                        name: "cache",
                        icon: "add"
                    }

                ],
                search:"",
                search2:"",
                active_el:0,
                page:0,
                size:10,
                formData:{
                    user_id:"",
                    servicecf_id:"",
                    date_debut:"",
                },
                formDataEcheance:{
                    marche_id:"",
                    exercice:"",
                    mode:"",
                    montant_marche:"",
                    date_odre_service:"",
                    date_fin_exe:""
                },
                edite:{
                    marche_id:"",
                    exercice:"",
                    mode:"",
                    montant_marche:"",
                    date_odre_service:"",
                    date_fin_exe:"",
                    id:"",
                    montant_echeance:""

                },
                editTitre: {
                    email:"",
                    name:"",
                    role_id:"",
                    matricule:"",
                    user_role:""
                },
                detailBudget:"",
                budgetGeneralCharge:"",
                progress:0,
                bgWidth: '0%',
                bgHeight: '30px',
                exercice_budget:"",
                message_mandater:'',
                i:0,
                isOffreTechniqueFinancier:false,
                namePDF: "",
                uploadPercentage:0,
                fichierPDF: "",
                imagePDF:"",
                selectedFile:"",
                resultaAnalysePv:[],
                resultaFinalCandidat:[],
                entreprise_vainqueur:"",
                registrecc_vainqueur:"",
                identreprise_vainqueur:"",
                message_setion_vainqueur:"",
                info_avis_bailleur:"",
                namePDFDemandeAno: "",
                fichierPDFDemandeAno: "",
                imagePDFDemandeAno:"",


            };
        },
        computed: {
            ...mapGetters("Utilisateurs", ["getterUtilisateur","getterRoles","getterServiceCF","getterAffectionServiceCF"]),

            titreFiltres(){
                const searchTerm = this.search.toLowerCase();

                return this.listeCFNonAffeceter.filter((item) => {

                        return item.matricule.toLowerCase().includes(searchTerm)
                            || item.name.toLowerCase().includes(searchTerm)
                    }
                )
            },
            listeCFNonAffeceter(){
              let collection=[]
              let vm=this;
              this.controllerFinancier.forEach(function (value) {
                   let objet=vm.getterAffectionServiceCF.find(item=>{
                       if(item.user_id==value.id && item.date_fin==null){
                         return item
                       }
                   })
                  if(objet==undefined){
                      collection.push(value)
                  }
              })
              return collection
            },
            controllerFinancier(){
                let controler=this.getterUtilisateur.filter(item=>{
                    if(item.user_role){
                        if (item.user_role.role.code_role=="DCF" || item.user_role.role.code_role=="CF"){
                            return item
                        }
                    }
                })
                return controler
            },
            titreFiltresService() {

                const searchTerm = this.search2.toLowerCase();

                return this.listeServiceNonAffecter.filter((item) => {

                        return item.code.toLowerCase().includes(searchTerm)
                            || item.libelle.toLowerCase().includes(searchTerm)


                    }
                )

            },

            listeServiceNonAffecter(){
               let collection=[]
               let vm=this
               vm.getterServiceCF.forEach(function (value) {
                   let objet=vm.getterAffectionServiceCF.find(item=>{
                       if(item.servicecf_id==value.id && item.date_fin==null){
                           return item
                       }
                   })
                   if(objet==undefined){
                       collection.push(value)
                   }
               })
                return collection
            },
            filterRole(){
                return code=>{

                    let controler=this.getterUtilisateur.find(item=>{
                        if(item.user_role){
                            if (item.user_role.role.code_role=="DCF" ){
                                return item
                            }
                        }
                    })

                    if (controler){
                        if (controler.user_role.role.code_role==code){
                            return this.getterRoles.filter(item=>{
                                if(item.code_role=="CF"){
                                    return item
                                }
                            })
                        }else {
                            return   this.getterRoles.filter(item=>{
                                if(item.code_role=="DCF" ||item.code_role=="CF"){
                                    return item
                                }
                            })
                        }
                    }else{
                        return this.getterRoles.filter(item=>{
                            if(item.code_role=="DCF" ||item.code_role=="CF"){
                                return item
                            }
                        })
                    }

                }

            }

        },
        methods: {
            ...mapActions('Utilisateurs', ['getUtilisateurs',"getRoles",
                "modifierUtilisateur","supprimerUtilisateur","ajouterUtilisateur","modifierChangeProfile","ajouterAffectationServiceCF"]),
            afficherModalAjouterTitre(){
                this.$('#exampleModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
            },
            ajouterCF(){
              //  if(this.formData.date_debut)
                if(this.formData.date_debut==""){

                    this.$notify({
                        title: 'ERROR',
                        text: 'Veillez renseigne la date',
                        type:"error"
                    })
                    return null
                }
                if(this.formData.user_id==""){

                    this.$notify({
                        title: 'ERROR',
                        text: 'Veillez selectionner le controller financier',
                        type:"error"
                    })
                    return null
                }
                if(this.formData.servicecf_id==""){

                    this.$notify({
                        title: 'ERROR',
                        text: 'Veillez selectionner le service',
                        type:"error"
                    })
                    return null
                }
                this.ajouterAffectationServiceCF(this.formData)
                this.formData={
                    user_id:"",
                        servicecf_id:"",
                        date_debut:"",
                },
                this.$('#exampleModal').modal('hide');
            },
            modifier(){
                this.modifierUtilisateur(this.editTitre)
                this.$('#modifierModal').modal('hide');
            },
            afficherModalModifierTitre(id){

                this.$('#modifierModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.editTitre = this.getterUtilisateur.find(item=>item.id==id);

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
            formatageSomme:formatageSomme,
            verifieDCFExiste(code){
                let controler=this.getterUtilisateur.find(item=>{
                    if(item.user_role){
                        if (item.user_role.role.code_role=="DCF" ){
                            return item
                        }
                    }
                })

                if (controler){
                    if (controler.user_role.role.code_role==code){
                        return false
                    }else {
                        return   true
                    }
                }else{
                    return true
                }
            }

        }
    }
</script>

<style scoped>

    .inputGroup {
        background-color: #fff;
        display: block;
        margin: 5px 0px;
        position: relative;

    }
    .inputGroup label {
        padding: 1px 10px;
        display: block;
        text-align: left;
        color: #3C454C;
        cursor: pointer;
        position: relative;
        z-index: 2;
        transition: color 200ms ease-in;
        overflow: hidden;
    }
    .inputGroup label:before {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        content: "";
        background-color: #5562eb;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale3d(1, 1, 1);
        transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
        opacity: 0;
        z-index: -1;
    }
    .inputGroup label:after {
        width: 23px;
        height: 23px;
        content: "";
        border: 2px solid #D1D7DC;
        background-color: #fff;
        background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E ");
        background-repeat: no-repeat;
        background-position: 2px 3px;
        border-radius: 50%;
        z-index: 2;
        position: absolute;
        right: 50px;
        top: 55%;
        transform: translateY(-50%);
        cursor: pointer;
        transition: all 200ms ease-in;
    }
    .inputGroup input:checked ~ label {
        color: #fff;
    }
    .inputGroup input:checked ~ label:before {
        transform: translate(-50%, -50%) scale3d(70, 56, 1);
        opacity: 1;
    }
    .inputGroup input:checked ~ label:after {
        background-color: #54E0C7;
        border-color: #54E0C7;
    }
    .inputGroup input {
        width: 20px;
        height: 20px;
        order: 1;
        z-index: 2;
        position: absolute;
        right: 30px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        visibility: hidden;
    }

</style>