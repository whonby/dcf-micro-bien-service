
<template>
          <div class="container-fluid">
            <hr>
            <div class="row-fluid">
                <div class="span12">
                    <div class="widget-box">
                        <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                                        <h5>Actualiser le régime et forme juridique</h5>
                                    </div>
                        
                        <div class="modal-body">
        <table class="table table-bordered table-striped">
        <tr>
            <td colspan="2">
              <div class="control-group">
                            <label class="control-label">Raison Sociale</label>
                            <div class="controls">
                             <input type="text" class="span"  v-model="formData.raison_sociale" readonly/>
                           
                            </div>
                          </div>
            </td>
        </tr>
           <tr>
            <td>
              <div class="control-group">
                            <label class="control-label">Date de création</label>
                            <div class="controls">
                             <input type="date" class="span"  v-model="formData.datecreation" readonly/>
                           
                            </div>
                          </div>
            </td>
            <td>
                    <div class="control-group">
                            <label class="control-label">Date debut activité </label>
                            <div class="controls">
                              <input type="date" class="span"  v-model="formData.dateactivite" readonly/>
                            
                            </div>
                          </div>
                 </td>
          </tr>
           
               <tr>
                 <td>
                    <div class="control-group">
                            <label class="control-label">Regime d'imposition </label>
                            <div class="controls">
                               <select v-model="formData.regime_impossition" class="span">
                                                             <option></option>
                                                            <option v-for="item in getterregimeImpositions" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>
                                                        </select>
                            
                            </div>
                          </div>
                 </td>
                  <td>
                               <div class="control-group">
                            <label class="control-label">Forme juridique</label>
                            <div class="controls">
                            <select v-model="formData.forme_juridique" class="span">
                                                           <option></option>
                                                            <option v-for="item in getterformeJuridique" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>
                                                        </select>
                            </div>
                          </div>
                           </td>
                 </tr>            
                   <tr>
                     <td>
                               <div class="control-group">
                            <label class="control-label">piece joint</label>
                            <div class="controls">
                              <input type="file" class="span" />
                               <!-- <input type="hidden" class="span4"  :value="recuperer"/> -->
                              
                            </div>
                          </div>
                           </td>
                           <td>
                               <div class="control-group">
                            <label class="control-label">Date modification</label>
                            <div class="controls">
                              <input type="date" class="span"  v-model="formData.date_modification"/>
                               <!-- <input type="hidden" class="span"  :value="recuperer"/> -->
                              
                            </div>
                          </div>
                           </td> 
                       </tr>  
        </table>
                        </div>
                          <div class="modal-footer">
        <a
          @click.prevent="ajouterTitreLocal()"
          class="btn btn-primary"
          href="#"
         
        >Valider</a>
         <a data-dismiss="modal" class="btn" @click.prevent="retourListeEntreprise" href="#">Fermer</a>
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

