
<template>
    <div>


        <notifications />
        <!-- End Page Header -->
        <!-- Default Light Table -->
        <div class="container-fluid">
            <hr>
            <div class="row-fluid">
                <div class="span12">
                    <div class="widget-box">
                        <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                            <h5>Formulaire de modification </h5>
                        </div>
                        <div class="widget-content nopadding">
                            <form action="#" method="get" class="form-horizontal" enctype="multipart/form-data">
                                <div class="row-fluid">
                                    <div class="span6">
                                        <div class="widget-box">
                                            <div class="widget-content nopadding">

                                                <div class="control-group">
                                                    <label class="control-label">Numéro IDU:</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="" v-model="formData.numero_idu">
                                                    </div>
                                                </div>


                                                <div class="control-group">
                                                    <label class="control-label">Raison sociale :</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Raison social" v-model="formData.raison_sociale">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Sigle :</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Sigle" v-model="formData.sigle">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Secteur d'activité</label>
                                                    <div class="controls">
                                                        <select v-model="formData.secteur_activite_id" class="span11">
                                                            <option></option>
                                                            <option v-for="item in secteur_activites" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Numéro compte contribuable :</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Numero compte contribuable" v-model="formData.numero_cc">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Numéro de registre de commerce:</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Numero de registe de commerce" v-model="formData.numero_rc">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Capitale social:</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Capitale social" v-model="formData.capitale_sociale">
                                                    </div>
                                                </div>
                                                <!-- <div class="control-group">
                                                    <label class="control-label">Banque:</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Banque"  v-model="formData.banque">
                                                    </div>
                                                </div> -->
                                                <div class="control-group">
                                                    <label class="control-label">Téléphone:</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Telephone" v-model="formData.telephone">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Email:</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Email" v-model="formData.email">
                                                    </div>
                                                </div>
                                                 <div class="control-group">
                                                    <label class="control-label">Pays:</label>
                                                    <div class="controls">
                                                        <select v-model="formData.pays" class="span11">
                                                            <option></option>
                                                            <option v-for="item in affichePays" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
                                                <!-- <div class="control-group">
                                                    <label class="control-label">Pays:</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Pays" v-model="formData.pays">
                                                    </div>
                                                </div> -->
                                                <!-- <div class="control-group">
                                                    <label class="control-label">Ville:</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Ville" v-model="formData.ville">
                                                    </div>
                                                </div> -->
                                                 <div class="control-group">
                                                    <label class="control-label">Ville:</label>
                                                    <div class="controls">
                                                       <select v-model="formData.ville" class="span11">
                                                            <option></option>
                                                            <option v-for="item in villeDynamiques(formData.pays)" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Adresse:</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11"  placeholder="Adresse" v-model="formData.adresse">
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                    <div class="span6">
                                        <div class="widget-box">
                                            <div class="widget-content nopadding">
                                                <div class="control-group">
                                                    <label class="control-label">Forme juridique:</label>
                                                    <div class="controls">
                                                        <select v-model="formData.forme_juridique" class="span11" disabled>
                                                           <option></option>
                                                            <option v-for="item in getterformeJuridique" :key="item.id" :value="item.id" >
                                                                {{item.libelle}}
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Centre import :</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Centre import" v-model="formData.centre_impot">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Service assiette :</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Service assiette" v-model="formData.service_assiette_impot">
                                                    </div>
                                                </div>
     <div class="control-group">
                                                    <label class="control-label">Regime d'imposition</label>
                                                    <div class="controls">
                                                        <select v-model="formData.regime_impossition" class="span11" disabled>
                                                             <option></option>
                                                            <option v-for="item in getterregimeImpositions" :key="item.id" :value="item.id" readonly>
                                                                {{item.libelle}}
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                 <div class="control-group">
                                                    <label class="control-label">Nationalit&eacute; de l'entreprise</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="" v-model="formData.carteidentite">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="widget-box">
                                            <div class="widget-content nopadding">
                                                <div class="control-group">
                                                    <label class="control-label">Imatriculation CNPS:</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Imatriculation CNPS" v-model="formData.immatriculation_cnps">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Date enregistrement CNPS :</label>
                                                    <div class="controls">
                                                        <input type="date" class="span11" placeholder="Date enregistrement CNPS" v-model="formData.date_enregistrement_cnps">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Nombre travailleur Permanent :</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Nombre travailleur Permanant" v-model="formData.nbre_travailleur_permanent">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Nombre travailleur horaire :</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Nombre travailleur horaire" v-model="formData.nbre_travailleur_horaire">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Nombre travailleur journalier :</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Nombre travailleur journalier" v-model="formData.nbre_travailleur_journalier">
                                                    </div>
                                                </div>
                                                 <div class="control-group">
                                                    <label class="control-label">Date Création</label>
                                                    <div class="controls">
                                                        <input type="date" class="span11"  v-model="formData.datecreation">
                                                    </div>
                                                </div>
                                                 <div class="control-group">
                                                    <label class="control-label">Date début activité</label>
                                                    <div class="controls">
                                                        <input type="date" class="span11"  v-model="formData.dateactivite">
                                                    </div>
                                                </div>
                                             
                                            </div>
                                        </div>
                                         <div class="modal-footer">
        <a
          @click.prevent="ajouterTitreLocal(formData)"
          class="btn btn-primary"
          href="#"
        
        >Modifier</a>
        <a data-dismiss="modal" class="btn" @click.prevent="retourListeEntreprise" href="#">Fermer</a>
      </div>
                                        <!-- <div class="form-actions">
                                            <button type="submit" class="btn btn-success">Enregistrement</button>
                                        </div> -->
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--<fab :actions="fabActions"
             main-icon="apps"
             @cache="afficherModalAjouterTitre"
             bg-color="green"

        ></fab>-->

        <!----- ajouter modal   ---->









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
                liste:[],
                formData : {
                    id:"",
                    numero_idu:"",
                    numero_cc: "",
                    numero_rc: "",
                    raison_sociale: "",
                    sigle: "",
                    secteur_activite_id: "",
                    activite_principale: "",
                    pays: "",
                    ville: "",
                    forme_juridique:"",
                    centre_impot:"",
                    regime_impossition:"",
                    capitale_sociale:"",
                    immatriculation_cnps:"",
                    date_enregistrement_cnps:"",
                    telephone:"",
                    email:"",
                    nbre_travailleur_permanent:"",
                    nbre_travailleur_journalier:"",
                    service_assiette_impot:"",
                    adresse:"",
                    banque:""
                },
                editTitre: {
                    code: "",
                    libelle: ""
                }

            };
        },

        created() {
            // this.getFonctions()
            //  console.log(this.fonctions)
            // console.log(this.getFonction)
            var ObjetEntreprise=this.entreprises.find(element=> element.id === this.$route.params.id)
            this.formData = {
                    id:ObjetEntreprise.id,
                    numero_idu:ObjetEntreprise.numero_idu,
                    numero_cc: ObjetEntreprise.numero_cc,
                    numero_rc: ObjetEntreprise.numero_rc,
                    raison_sociale: ObjetEntreprise.raison_sociale,
                    sigle: ObjetEntreprise.sigle,
                    secteur_activite_id: ObjetEntreprise.secteur_activite_id,
                    activite_principale: ObjetEntreprise.activite_principale,
                    pays: ObjetEntreprise.pays,
                    ville: ObjetEntreprise.ville,
                    forme_juridique:ObjetEntreprise.forme_juridique,
                    centre_impot:ObjetEntreprise.centre_impot,
                    regime_impossition:ObjetEntreprise.regime_impossition,
                    capitale_sociale:ObjetEntreprise.capitale_sociale,
                    immatriculation_cnps:ObjetEntreprise.immatriculation_cnps,
                    date_enregistrement_cnps:ObjetEntreprise.date_enregistrement_cnps,
                    telephone:ObjetEntreprise.telephone,
                    email:ObjetEntreprise.email,
                    nbre_travailleur_permanent:ObjetEntreprise.nbre_travailleur_permanent,
                    nbre_travailleur_journalier:ObjetEntreprise.nbre_travailleur_journalier,
                    service_assiette_impot:ObjetEntreprise.service_assiette_impot,
                    adresse:ObjetEntreprise.adresse,
                    banque:ObjetEntreprise.banque,
                    carteidentite:ObjetEntreprise.carteidentite,
                    datecreation:ObjetEntreprise.datecreation,
                    dateactivite:ObjetEntreprise.dateactivite,
            }
        },
        computed: {
// methode pour maper notre guetter
            ...mapGetters('gestionMarche', ['entreprises',"secteur_activites"]),
            ...mapGetters("bienService", ['villes','pays']),
              ...mapGetters("parametreGenerauxAdministratif", ["getterformeJuridique","getterregimeImpositions","getterplan_pays"]),
            titreFiltres() {

                const searchTerm = this.search.toLowerCase();

                return this.entreprises.filter((item) => {

                        return item.code.toLowerCase().includes(searchTerm)
                            || item.libelle.toLowerCase().includes(searchTerm)


                    }
                )

            },
                   villeDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.getterplan_pays.filter(
            element => element.parent == id
          );
        }
      };
    },
    affichePays(){
        return this.getterplan_pays.filter(items=>items.parent == null );
    }
             
        },
        methods: {
            // methode pour notre action
            ...mapActions('gestionMarche', ['getEntreprise',"ajouterEntreprise","supprimerEntreprise","modifierEntreprise","ajouterHistoriqueEntreprise"]),
            afficherModalAjouterTitre(){
                this.$('#exampleModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
            },
             retourListeEntreprise(){
                 this.$router.push({ name: 'Entreprise' })
            },
            // fonction pour vider l'input
            ajouterTitreLocal () {
                this.modifierEntreprise(this.formData)
                this.ajouterHistoriqueEntreprise(this.formData)
                this.getEntreprise()
                this.$router.push({ name: 'Entreprise' })
            },


        }
    };
</script>

