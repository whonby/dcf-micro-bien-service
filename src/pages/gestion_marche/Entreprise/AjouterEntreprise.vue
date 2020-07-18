
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
                            <h5>Ajouter une nouvelle entreprise</h5>
                        </div>

        <table class="table table-bordered table-striped">
         <tr>
             
             <td>
                 <div class="control-group">
                             <label class="control-label" title="">Numero d'identifiant unique </label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Numero IDU" v-model="formData.numero_idu">
                                                    </div>
                                                </div>
                 
             </td>

                 <td>
                 <div class="control-group">
                             <label class="control-label">Numero compte contribuable </label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Numero compte contribuable" v-model="formData.numero_cc">
                                                    </div>
                                                </div>
                 
             </td>
             <td>
                   <div class="control-group">
                                                    <label class="control-label">Sigle :</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Sigle" v-model="formData.sigle">
                                                    </div>
                                                </div>
             </td>
             <td>
                    <div class="control-group">
                                                    <label class="control-label">Secteur activite</label>
                                                    <div class="controls">
                                                        <select v-model="formData.secteur_activite_id" class="span11">
                                                            <option></option>
                                                            <option v-for="item in secteur_activites" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
             </td>
 
           
         </tr>
                       <tr>
                        <td colspan="3" width="250">
                  <div class="control-group">
     <label class="control-label">Raison sociale :</label>
            <div class="controls">
         <input type="text" class="span11" placeholder="Raison social" v-model="formData.raison_sociale">
                     </div>
                 </div>
             </td>
             <td>
                  <div class="control-group">
                                                    <label class="control-label">Nationalit&eacute; de l'entreprise</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Carte d'identité de l'entreprise" v-model="formData.carteidentite">
                                                    </div>
                                                </div>
             </td>
         </tr>
         <tr>
               <td>
                  <div class="control-group">
                                                    <label class="control-label">Numero de registe de commerce:</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Numero de registe de commerce" v-model="formData.numero_rc">
                                                    </div>
                                                </div>
             </td>
             <td>
                  <div class="control-group">
                                                    <label class="control-label">Capitale social:</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Capitale social" v-model="formData.capitale_sociale">
                                                    </div>
                                                </div>
             </td>
             <!-- <td>
                 
                   <div class="control-group">
                                                    <label class="control-label">Banque:</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Banque"  v-model="formData.banque">
                                                    </div>
                                                </div>
             </td> -->
             <td>
                  <div class="control-group">
                                                    <label class="control-label">Telephone:</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Telephone" v-model="formData.telephone">
                                                    </div>
                                                </div>
             </td>
            
              <td>
                 <div class="control-group">
                                                    <label class="control-label">Email:</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Email" v-model="formData.email">
                                                    </div>
                                                </div>
             </td>
         </tr>
         <tr>
            
              <td>
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
             </td>
             <td>
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
             </td>
             <td>
                  <div class="control-group">
                                                    <label class="control-label">Adresse:</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11"  placeholder="Adresse" v-model="formData.adresse">
                                                    </div>
                                                </div>
             </td>
              <td>
                  <div class="control-group">
                                                    <label class="control-label">Forme juridique:</label>
                                                    <div class="controls">
                                                        <select v-model="formData.forme_juridique" class="span11">
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
                                                    <label class="control-label">Centre d'imposition :</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Centre imposition" v-model="formData.centre_impot">
                                                    </div>
                                                </div>
             </td>
             <td>
                 <div class="control-group">
                                                    <label class="control-label">Service assiette :</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Service assiette" v-model="formData.service_assiette_impot">
                                                    </div>
                                                </div>
             </td>
              <td>

                     <div class="control-group">
                                                    <label class="control-label">Regime d'imposition</label>
                                                    <div class="controls">
                                                        <select v-model="formData.regime_impossition" class="span11">
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
                                                    <label class="control-label">Imatriculation CNPS:</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Imatriculation CNPS" v-model="formData.immatriculation_cnps">
                                                    </div>
                                                </div>
             </td>
         </tr>
         <tr>
            
             <td>
                   <div class="control-group">
                                                    <label class="control-label">Date enregistrement CNPS :</label>
                                                    <div class="controls">
                                                        <input type="date" class="span11" placeholder="Date enregistrement CNPS" v-model="formData.date_enregistrement_cnps">
                                                    </div>
                                                </div>
             </td>
             <td>
                   <div class="control-group">
                                                    <label class="control-label">Nombre travailleur Permanent :</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Nombre travailleur Permanant" v-model="formData.nbre_travailleur_permanent">
                                                    </div>
                                                </div>
             </td>
             <td>
                  <div class="control-group">
                                                    <label class="control-label">Nombre travailleur horaire :</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Nombre travailleur horaire" v-model="formData.nbre_travailleur_horaire">
                                                    </div>
                                                </div>
             </td>
              <td>
                  <div class="control-group">
                                                    <label class="control-label">Nombre travailleur journalier :</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Nombre travailleur journalier" v-model="formData.nbre_travailleur_journalier">
                                                    </div>
                                                </div>
             </td>
                 </tr>
         <tr>
            
             <td>
                   <div class="control-group">
                                                    <label class="control-label">Date Creation</label>
                                                    <div class="controls">
                                                        <input type="date" class="span11"  v-model="formData.datecreation">
                                                    </div>
                                                </div>
             </td>
             <td>
                   <div class="control-group">
                                                    <label class="control-label">Date debut activite</label>
                                                    <div class="controls">
                                                        <input type="date" class="span11"  v-model="formData.dateactivite">
                                                    </div>
                                                </div>
             </td>
             
                 </tr>
        </table>
         <div class="modal-footer">
        <a
          @click.prevent="ajouterTitreLocal"
          class="btn btn-primary"
          href="#"
        
        >Enregistrer</a>
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
                    banque:"",
                    carteidentite:""
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

        },
        computed: {
// methode pour maper notre guetter
            ...mapGetters('gestionMarche', ['entreprises',"secteur_activites"]),
            ...mapGetters("parametreGenerauxAdministratif", ["getterformeJuridique","getterregimeImpositions","getterplan_pays"]),
              ...mapGetters("bienService", ['villes','pays']),
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
                this.ajouterEntreprise(this.formData)
                this.ajouterHistoriqueEntreprise(this.formData)
                this.$router.push({ name: 'Entreprise' })
            },
// afficher modal
            afficherModalModifierTitre(index){

                this.$('#modifierModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.editTitre = this.entreprises[index];
            },
            modifier(){
                this.modifierEntreprise(this.editTitre)
                //this.getFonctions()
            }
        }
    };
</script>

