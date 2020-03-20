<template>
<div>
        
                <h4> Liste avis bailleur</h4>
                <table class="table table-bordered table-striped">
                    <thead>
                    <tr>
                      <th>Reference offre</th>
                        <th>Reference courrier</th>
                        <th>Date avis</th>
                        <th>Avis</th>
                        <th>Observation</th>
                        <th>Fichier</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="odd gradeX" v-for="anoBailleur in listeAnoDMPBailleur(macheid)"
                        :key="anoBailleur.id">

                         <!-- <td @click="afficheAnoDPMBailleurModale(anoBailleur.id)">
                            {{anoBailleur.annalyse_d_m_p.demande_ano.proce_verbal_offre.appel_offre.ref_appel || 'Non renseigné'}}</td> -->

                         <td @click="afficheAnoDPMBailleurModale(anoBailleur.id)">
                            {{anoBailleur.numero_courie || 'Non renseigné'}}</td>
                        <td @click="afficheAnoDPMBailleurModale(anoBailleur.id)">
                            {{formaterDate(anoBailleur.date_ano_dmp) || 'Non renseigné'}}</td>

                         <td @click="afficheAnoDPMBailleurModale(anoBailleur.id)">
                            <button class="btn btn-success btn-mini" v-if="anoBailleur.avis_bail== 0">Non objection</button>
                            <button class="btn btn-danger btn-mini" v-else>Objection</button>
                        </td>  
                             <td @click="afficheAnoDPMBailleurModale(anoBailleur.id)">
                            {{anoBailleur.observations_bailleur || 'Non renseigné'}}</td>

                        <td>
                            <a v-if="anoBailleur.fichier" :href="anoBailleur.fichier" class="btn btn-default" target="_blank">
                                <span class=""><i class="icon-book"></i>
                                </span>
                            </a>
                        </td>
                        <div class="btn-group">
                            <button @click.prevent="supprimerAnoDMPBailleur(anoBailleur.id)"  class="btn btn-danger " title="Supprimer">
                                <span class=""><i class="icon-trash"></i></span></button>

                        </div>

                    </tr>
                    </tbody>
                </table>
            
                  

                  


        <div id="ajouterAnoDMPBAILLEURModal" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter Avis Bailleur</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">


                         <div class="control-group">
                        <label class="control-label">Reference offre</label>
                        <div class="controls">
                            <select v-model="formBailleur.cotation_id" class="span" disabled>
                                <option v-for="plans in listeAppelOffre(macheid)" :key="plans.id"
                                        :value="plans.id">{{plans.ref_offre}}</option>
                            </select>
                        </div>
                        </div>


                     <div class="control-group">
                        <label class="control-label">Numero du courrier</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="formBailleur.numero_courie"
                                    class="span"
                                    placeholder="Saisir le numero du courrier"
                            />
                        </div>
                    </div>

                     <div class="control-group">

                        <label class="control-label">Date d'avis bailleur </label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="formBailleur.date_ano_dmp"
                                    class="span"
                                    placeholder="Saisir le libelle_type"
                            />
                        </div>
                    </div>

                    <!-- <div class="control-group">

                        <label class="control-label">Date de demande</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="formBailleur.date_ano_dmp"
                                    class="span"
                                    placeholder="Saisir le libelle_type"
                            />
                        </div>
                    </div> -->


                     <div class="control-group">
                        <label class="control-label">Avis</label>
                        <div class="controls">
                            <select v-model="formBailleur.avis_bail" class="span">
                                <option value="0">Non objection</option>
                                <option value="1">Objection</option>
                            </select>
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Observation</label>
                        <div class="controls">
                            <textarea  v-model="formBailleur.observations_bailleur" :readonly="deverouillerAvisBailleur"
                                    class="span"
                                    placeholder="Saisir l'observation"
                            ></textarea>
                        </div>
                    </div>

                    <div class="control-group">
                        <label class="control-label">Motif </label>
                        <div class="controls">
                            <select v-model="formBailleur.plan_motif_decision_id" class="span" >
                                <option v-for="plans in motifDecisions" :key="plans.id"
                                        :value="plans.id">{{plans.libelle}}</option>
                            </select>
                        </div>
                        </div>

                  

         <div class="control-group">
              <label class="control-label">Fichier joint:</label>
              <div class="controls">
                <input type="file" @change="OnchangeFichierBailleur" />
              </div>
            </div>

                </form>
            </div>
            <div class="modal-footer">
                <a
                        @click.prevent="ajouterDemandeAnoLocal()"
                        class="btn btn-primary"
                        href="#"

                >Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
        </div>



         <div id="modifierBailleur" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modification ANO bailleur</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">

                       <div class="control-group">
                        <label class="control-label">Reference offre</label>
                        <div class="controls">
                            <select v-model="edit_bailleur.cotation_id" class="span" disabled>
                                <option v-for="plans in listeAppelOffre(macheid)" :key="plans.id"
                                        :value="plans.id">{{plans.ref_offre}}</option>
                            </select>
                        </div>
                        </div>

                    <!-- <div class="control-group">
                        <label class="control-label">PV</label>
                        <div class="controls" v-if="edit_bailleur">
                          <input :value="edit_bailleur.proce_verbal_offre.reference" readonly/>
                        </div>
                    </div> -->

                    <div class="control-group">
                        <label class="control-label">Numero du courrier</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="edit_bailleur.numero_courie"
                                    class="span"
                                    placeholder="Saisir le numero du courrier"
                            />
                        </div>
                    </div>

                    <div class="control-group">

                        <label class="control-label">Date de demande</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="edit_bailleur.date_ano_dmp"
                                    class="span"
                                    placeholder="Saisir le libelle_type"
                            />
                        </div>
                    </div>

                    <div class="control-group">
                        <label class="control-label">Avis</label>
                        <div class="controls">
                            <select v-model="edit_bailleur.avis_bail" class="span">
                                <option value="1">Non objection</option>
                                <option value="2">Objection</option>
                            </select>
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Observation</label>
                        <div class="controls">
                            <textarea  v-model="edit_bailleur.observations_bailleur"
                                    class="span"
                                    placeholder="Saisir l'observation"
                            ></textarea>
                        </div>
                    </div>

                     <div class="control-group">
                        <label class="control-label">Motif </label>
                        <div class="controls">
                            <select v-model="edit_bailleur.plan_motif_decision_id" class="span" >
                                <option v-for="plans in motifDecisions" :key="plans.id"
                                        :value="plans.id">{{plans.libelle}}</option>
                            </select>
                        </div>
                        </div>
                    <div class="control-group">
                        <label class="control-label">Fichier joint:</label>
                        <div class="controls">
                            <input type="file" @change="OnchangeFichierBailleur" />
                        </div>
                    </div>


                </form>
            </div>
            <div class="modal-footer">
                <a
                        @click.prevent="editDemandeDAO()"
                        class="btn btn-primary"
                        href="#"

                >Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
        </div>

<notifications/>

</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import moment from 'moment';
export default {

    data(){
        return{
formBailleur:{
             date_ano_dmp:"",
                    	numero_courie:"",
                   // proce_verbal_jugement_offre_id:"",
                    cotation_id:"",
                    observations_bailleur:"",
                    avis_bail:""
},

edit_bailleur:"",
imagePDFDemandeAno:"",
namePDFDemandeAno:"",
fichierPDFDemandeAno:"",
selectedFileAnoBailleur:""

        }
    },
    props:["macheid"],

    created(){


    },
    computed:{
          ...mapGetters("bienService", [ "typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots",
                "modePassations", "motifDecisions","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "gettersCotations", "analyseDossiers","text_juridiques", "livrables",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
            ...mapGetters('personnelUA', ['acteur_depenses']),
                ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises']),
            ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
                'types_financements']) ,
                
    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),
            

          deverouillerAvisBailleur(){
              return this.formBailleur.avis_bail == 0
          },

            listeAnoDMPBailleur: function () {
                return macheid => {
                    if (macheid != "") {
                      //  console.log("Marche dmp bailleur")
                        let objet=this.getterAnoDMPBailleur.filter(idmarche => idmarche.marche_id == macheid)
                        //console.log("Marche dmp bailleru 7474")
                        return objet
                    }
                }
            },
             listeAppelOffre(){
                return  macheid=>{
                    if (macheid!="") {
                        //console.log("Marche appel offre")
                       const vM=this;
                        let Objet=this.gettersCotations.find( idmarche => idmarche.marche_id == macheid)
                     
                        if(Objet!=undefined){
                          
                            vM.formBailleur.cotation_id = Objet.id;
                         
                        }
                       
                    return this.gettersCotations.filter( idmarche => idmarche.marche_id == macheid)
                    }
                }
            },

            //          listePVDemandePV(){
            //     return macheid=>{
            //         if(macheid!=""){
            //             return this.getterProceVerballe.find(item=>{
            //                 if(item.appel_offre.marche_id==macheid && item.avie==null ){
            //                     let vM=this;
            //                     vM.formBailleur.proce_verbal_jugement_offre_id=item.id
            //                     return item;
            //                 }
            //             });
            //         }
            //     }
            // },



    },
    methods:{

        ...mapActions('bienService',['supprimerAnoDMPBailleur','ajouterAnoDMPBailleur',
        'modifierAnoDMPBailleur','getAnoDMPBailleur','getAnalyseDMP']),


 afficheAnoDPMBailleurModale(index){
                this.$('#modifierBailleur').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.edit_bailleur=this.getterAnoDMPBailleur.find(
                    demandeAno => demandeAno.id == index
                )
                //console.log(this.edit_bailleur)
            },

   OnchangeFichierBailleur(e) {
                const files = e.target.files;
                this.selectedFileAnoBailleur = event.target.files[0];
                console.log(this.selectedFileAnoBailleur)
                Array.from(files).forEach(file => this.addFichierPDFDemandeAno(file));
            },
            addFichierPDFDemandeAno(file) {
                let reader = new FileReader();
                let vm = this;
                reader.onload = e => {
                    vm.imagePDFDemandeAno = "pdf.png";
                    vm.namePDFDemandeAno = file.name;
                    vm.fichierPDFDemandeAno = e.target.result;
                };
                reader.readAsDataURL(file);
            },

              ajouterDemandeAnoLocal(){
                const formData = new FormData();
                formData.append('fichier', this.selectedFileAnoBailleur, this.selectedFileAnoBailleur.name);
             //   formData.append('proce_verbal_jugement_offre_id', this.formBailleur.proce_verbal_jugement_offre_id);
                formData.append('date_ano_dmp', this.formBailleur.date_ano_dmp);
                formData.append('marche_id', this.macheid);
                formData.append('demande_ano_id', this.formBailleur.demande_ano_id);
                formData.append('observations_bailleur', this.formBailleur.observations_bailleur);
                formData.append('avis_bail', this.formBailleur.avis_bail);
                
                formData.append('cotation_id', this.formBailleur.cotation_id)
                formData.append('numero_courie', this.formBailleur.numero_courie);
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'   

                    }
                }
                console.log(formData)
                this.ajouterAnoDMPBailleur(formData,config)
                this.formBailleur={
                    date_ano_dmp:"",
                    cotation_id:"",
                    	numero_courie:"",
                    
                    proce_verbal_jugement_offre_id:""
                }
            },

               editDemandeDAO(){
                //console.log(this.edit_bailleur)
                const formData = new FormData();
               // formData.append('proce_verbal_jugement_offre_id', this.edit_bailleur.proce_verbal_jugement_offre_id);
                formData.append('date_ano_dmp', this.edit_bailleur.date_ano_dmp);
                formData.append('cotation_id', this.edit_bailleur.cotation_id);
                formData.append('numero_courie', this.edit_bailleur.numero_courie);
                formData.append('avis_bail', this.edit_bailleur.avis_bail);
                formData.append('observations_bailleur', this.edit_bailleur.observations_bailleur)
                formData.append('marche_id',this.macheid);
                formData.append('id', this.edit_bailleur.id);
                console.log(formData)
                if ( this.selectedFileAnoBailleur!==""){
                    formData.append('fichier', this.selectedFileAnoBailleur, this.selectedFileAnoBailleur.name);
                }  
                let config = {
                    header : {            
                        'Content-Type' : 'multipart/form-data'
                    }
                }
                this.modifierAnoDMPBailleur(formData,config)
                this.getAnalyseDMP()
                this.getAnoDMPBailleur()
                this.$('#modifDemandeAno').modal('hide');
            },

            formaterDate(date){
                return moment(date,"YYYY-MM-DD").format("DD/MM/YYYY");
            }




        


    }
    
}
</script>

