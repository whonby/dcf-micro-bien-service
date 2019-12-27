
<template>
    <div>

        <div class="container-fluid">
            <hr>

            <div class="widget-box">
                <div class="widget-title">
                    <ul class="nav nav-tabs">
                        <li class="active"><a data-toggle="tab" href="#tab1">LISTE DE TOUTE LES ENTREPRISES</a></li>
                        <li><a data-toggle="tab" href="#tab2">ENTREPRISE NON SANCTIONNER</a></li>
                        <li><a data-toggle="tab" href="#tab3">ENTREPRISE SANCTIONNER</a></li>
                    </ul>
                </div>
                <div class="widget-content tab-content">
                    <div id="tab1" class="tab-pane active">
                        <div class="row-fluid" style="margin: 0px !important;">
                            <div class="span12">
                                <div class="widget-box">
                                    <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                                        <h5>Toute les entreprises</h5>
                                        <div align="right">
                                            Search: <input type="text" v-model="search">
                                        </div>

                                    </div>

                                    <div class="widget-content nopadding">
                                        <table class="table table-bordered table-striped">
                                            <thead>
                                            <tr>
                                                <th>Raison social </th>
                                                <th>Compte contribuable</th>
                                                <th>Registe commerce </th>
                                                <th>Secteur activite</th>
                                                <th>Pays </th>
                                                <th>Ville</th>
                                                <th>Email </th>
                                                <th>Telephone</th>
                                                <th>Banque</th>
                                                <th>Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr class="odd gradeX" v-for="item in titreFiltres" :key="item.id">
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.raison_sociale || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.numero_cc || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.numero_rc || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.secteur_activite.libelle || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.pays || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.ville || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.email || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.telephone || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.banque || 'Non renseigné'}}</td>
                                                <td>
                                                    <div class="btn-group">
                                                        <a href="#myModal2" data-toggle="modal" class="btn btn-info" @click.prevent="showEntreprise(item.id)"><i class="icon-lock"></i></a>
                                                        <button @click.prevent="supprimerEntreprise(item.id)"  class="btn btn-danger ">
                                                            <span class=""><i class="icon-trash"></i></span></button>

                                                    </div>

                                                </td>
                                            </tr>
                                            <tr v-if="titreFiltres.length==0" align="right">
                                                <h6>Pas de donnée disponible</h6>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="tab2" class="tab-pane">

                        <div class="row-fluid" style="margin: 0px !important;">
                            <div class="span12">
                                <div class="widget-box">
                                    <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                                        <h5>Toute les entreprises non sanctionner</h5>
                                        <div align="right">
                                            Search: <input type="text" v-model="search1">
                                        </div>

                                    </div>
                                    <div class="widget-content nopadding"><table class="table table-bordered table-striped">
                                        <thead>
                                        <tr>
                                            <th>Raison social </th>
                                            <th>Compte contribuable</th>
                                            <th>Registe commerce </th>
                                            <th>Secteur activite</th>
                                            <th>Pays </th>
                                            <th>Ville</th>
                                            <th>Email </th>
                                            <th>Telephone</th>
                                            <th>Banque</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr class="odd gradeX" v-for="item in nonSanctionner" :key="item.id">
                                            <td @dblclick="afficherModalModifierTitre(item.id)">{{item.raison_sociale || 'Non renseigné'}}</td>
                                            <td @dblclick="afficherModalModifierTitre(item.id)">{{item.numero_cc || 'Non renseigné'}}</td>
                                            <td @dblclick="afficherModalModifierTitre(item.id)">{{item.numero_rc || 'Non renseigné'}}</td>
                                            <td @dblclick="afficherModalModifierTitre(item.id)">{{item.secteur_activite.libelle || 'Non renseigné'}}</td>
                                            <td @dblclick="afficherModalModifierTitre(item.id)">{{item.pays || 'Non renseigné'}}</td>
                                            <td @dblclick="afficherModalModifierTitre(item.id)">{{item.ville || 'Non renseigné'}}</td>
                                            <td @dblclick="afficherModalModifierTitre(item.id)">{{item.email || 'Non renseigné'}}</td>
                                            <td @dblclick="afficherModalModifierTitre(item.id)">{{item.telephone || 'Non renseigné'}}</td>
                                            <td @dblclick="afficherModalModifierTitre(item.id)">{{item.banque || 'Non renseigné'}}</td>
                                            <td>
                                                <div class="btn-group">showEntreprise
                                                    <a href="#myModal2" data-toggle="modal" class="btn btn-info" @click.prevent="showEntreprise(item.id)"><i class="icon-lock"></i></a>
                                                    <button @click.prevent="supprimerEntreprise(item.id)"  class="btn btn-danger ">
                                                        <span class=""><i class="icon-trash"></i></span></button>
                                                </div>

                                            </td>
                                        </tr>
                                        <tr v-if="titreFiltres.length==0" align="right">
                                            <h6>Pas de donnée disponible</h6>
                                        </tr>
                                        </tbody>
                                    </table></div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div id="tab3" class="tab-pane">
                        <div class="row-fluid" style="margin: 0px !important;">
                            <div class="span12">
                                <div class="widget-box">
                                    <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                                        <h5>Toute les entreprises sanctionner</h5>
                                        <div align="right">
                                            Search: <input type="text" v-model="search2">
                                        </div>

                                    </div>
                                    <div class="widget-content nopadding">
                                        <table class="table table-bordered table-striped">
                                            <thead>
                                            <tr>
                                                <th>Raison social </th>
                                                <th>Compte contribuable</th>
                                                <th>Registe commerce </th>
                                                <th>Secteur activite</th>
                                                <th>Pays </th>
                                                <th>Ville</th>
                                                <th>Email </th>
                                                <th>Telephone</th>
                                                <th>Banque</th>
                                                <th>Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr class="odd gradeX" v-for="item in sanctionner" :key="item.id">
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.raison_sociale || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.numero_cc || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.numero_rc || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.secteur_activite.libelle || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.pays || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.ville || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.email || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.telephone || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.banque || 'Non renseigné'}}</td>
                                                <td>
                                                    <div class="btn-group">
                                                        <button @click.prevent="supprimerEntreprise(item.id)"  class="btn btn-danger ">
                                                            <span class=""><i class="icon-trash"></i></span></button>

                                                    </div>

                                                </td>
                                            </tr>
                                            <tr v-if="titreFiltres.length==0" align="right">
                                                <h6>Pas de donnée disponible</h6>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>

       <fab :actions="fabActions"
             main-icon="apps"
             @cache="afficherModalAjouterTitre"
             bg-color="green"
        ></fab>

        <!----- ajouter modal   ---->
        <div id="myModal2" class="modal hide" aria-hidden="true" style="display: none;">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Formulaire de sanction pour {{entrepriseSetect.raison_sociale}}</h3>
            </div>
            <form @submit.prevent="addSanctionner" enctype="multipart/form-data" class="form-horizontal">
            <div class="modal-body">

                    <div class="control-group">
                        <label class="control-label">Date debut sanction :</label>
                        <div class="controls">
                            <input type="date" v-model="sanction.debut_sanction"  placeholder="Date debut sanction">
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Date fin sanction :</label>
                        <div class="controls">
                            <input type="date"  placeholder="Date fin sanction" v-model="sanction.fin_sanction">
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Degré sanction</label>
                        <div class="controls">
                            <input  type="file" @change="OnchangeFichier" >
                            <code v-if="info_pdf">Le fichier doit etre un pdf</code>
                        </div>
                    </div>



            </div>
            <div class="modal-footer">
                <button type="submit" class="btn btn-success" >Valider la sanction</button>
                <a data-dismiss="modal" class="btn btn-inverse" href="#">Cancel</a> </div>
            </form>
        </div>

    </div>

</template>

<script>

    import {mapGetters, mapActions} from 'vuex'
    export default {

        data() {
            return {
                fabActions: [
                    {
                        name: 'cache',
                        icon: 'add'
                    },
                ],
                search:"",
                search1:"",
                search2:"",
                liste:[],
                selectedFile:"",
                selectedImage:"",
                image: "",
                imagePDF: "",
                namePDF: "",
                fichierPDF: "",
                info_pdf:"",
                sanction: {
                    entreprise_id: "",
                    debut_sanction: "",
                    fin_sanction:"",
                },
                entrepriseSetect:''

            };
        },

        created() {
            // this.getFonctions()
            //  console.log(this.fonctions)
            // console.log(this.getFonction)
this.getEntreprise()
        },
        computed: {
// methode pour maper notre guetter
            ...mapGetters('gestionMarche', ['entreprises',"secteur_activites"]),
            titreFiltres() {

                const searchTerm = this.search.toLowerCase();
                return this.entreprises.filter((item) => {

                      return item.raison_sociale.toLowerCase().includes(searchTerm)
                            || item.numero_rc.toLowerCase().includes(searchTerm)
                            || item.numero_cc.toLowerCase().includes(searchTerm)
                            || item.ville.toLowerCase().includes(searchTerm)
                            || item.pays.toLowerCase().includes(searchTerm)
                            || item.telephone.toLowerCase().includes(searchTerm)
                            || item.email.toLowerCase().includes(searchTerm)
                            || item.banque.toLowerCase().includes(searchTerm)

                    }
                )

            },
            nonSanctionner() {
                const searchTerm = this.search1.toLowerCase();
                let ObjetEntreprise=this.entreprises.filter((idm)=>idm.active===1)
                return ObjetEntreprise.filter((item) => {

                        return item.raison_sociale.toLowerCase().includes(searchTerm)
                            || item.numero_rc.toLowerCase().includes(searchTerm)
                            || item.numero_cc.toLowerCase().includes(searchTerm)
                            || item.ville.toLowerCase().includes(searchTerm)
                            || item.pays.toLowerCase().includes(searchTerm)
                            || item.telephone.toLowerCase().includes(searchTerm)
                            || item.email.toLowerCase().includes(searchTerm)
                            || item.banque.toLowerCase().includes(searchTerm)


                    }
                )

            },
            sanctionner() {
                const searchTerm = this.search2.toLowerCase();
                let ObjetEntreprise=this.entreprises.filter((idm)=>idm.active===0)
                return ObjetEntreprise.filter((item) => {
                        return item.raison_sociale.toLowerCase().includes(searchTerm)
                            || item.numero_rc.toLowerCase().includes(searchTerm)
                            || item.numero_cc.toLowerCase().includes(searchTerm)
                            || item.ville.toLowerCase().includes(searchTerm)
                            || item.pays.toLowerCase().includes(searchTerm)
                            || item.telephone.toLowerCase().includes(searchTerm)
                            || item.email.toLowerCase().includes(searchTerm)
                            || item.banque.toLowerCase().includes(searchTerm)


                    }
                )

            }
        },
        methods: {
            // methode pour notre action
            ...mapActions('gestionMarche', ['getEntreprise',"ajouterEntreprise","supprimerEntreprise","modifierEntreprise","ajouterSanction"]),
            afficherModalAjouterTitre(){
                this.$router.push({ name: 'AjouterEntreprise' })
            },
            // fonction pour vider l'input
            ajouterTitreLocal () {
                this.ajouterEntreprise(this.formData)

            },
// afficher modal
            afficherModalModifierTitre(index){

                this.$router.push({ name: 'EditeEntreprise', params: { id: index } })
            },
            modifier(){
                this.modifierEntreprise(this.editTitre)
                //this.getFonctions()
            },
            showEntreprise(id){
                this.entrepriseSetect=this.entreprises.find(entre=>entre.id===id);
            },
            OnchangeFichier(e) {
                const files = e.target.files;
                this.selectedFile = event.target.files[0];
                Array.from(files).forEach(file => this.addFichierPDF(file));
            },
            addFichierPDF(file) {
                if (!file.type.match("application/pdf")) {
                    this.info_pdf=true;
                    console.log(`${file.name} le fichier doit etre un PDF`);
                    return;
                }
                this.info_pdf=false;
                let reader = new FileReader();
                let vm = this;
                reader.onload = e => {
                    vm.imagePDF = "pdf.png";
                    vm.namePDF = file.name;
                    vm.fichierPDF = e.target.result;
                };
                reader.readAsDataURL(file);
            },

            addSanctionner(){
                const formData = new FormData();
                formData.append('file', this.selectedFile, this.selectedFile.name);
                formData.append('entreprise_id', this.entrepriseSetect.id);
                formData.append('debut_sanction', this.sanction.debut_sanction);
                formData.append('fin_sanction', this.sanction.fin_sanction);

                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
                this.ajouterSanction(formData,config)
                this.sanction= {
                    entreprise_id: "",
                        debut_sanction: "",
                        fin_sanction:"",
                }
                this.getEntreprise()

            }

        }
    };
</script>

