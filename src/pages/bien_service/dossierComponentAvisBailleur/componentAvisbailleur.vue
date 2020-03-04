<template>


    <div>

         
                <h4> Liste avis bailleur</h4>
                <table class="table table-bordered table-striped" v-if="marcheid">
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
                    <tr class="odd gradeX" v-for="anoBailleur in listeAnoDMPBailleur(marcheid)"
                        :key="anoBailleur.id">

                         <td @click="afficheAnoDPMBailleurModale(anoBailleur.id)">
                            {{anoBailleur.annalyse_d_m_p.demande_ano.proce_verbal_offre.appel_offre.ref_appel || 'Non renseigné'}}</td>

                         <td @click="afficheAnoDPMBailleurModale(anoBailleur.id)">
                            {{anoBailleur.numero_courie || 'Non renseigné'}}</td>
                        <td @click="afficheAnoDPMBailleurModale(anoBailleur.id)">
                            {{formaterDate(anoBailleur.date_ano_dmp) || 'Non renseigné'}}</td>
                         <td @click="afficheAnoDPMBailleurModale(anoBailleur.id)">
                            <button class="btn btn-success btn-mini" v-if="anoBailleur.avis_bail== 1">Non objection</button>
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
      
     
        <div id="ajouterAnoDMPBAILLEURModal" class="modal hide tlAviBailleur">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter avis bailleur</h3>
            </div>
                <table class="table table-bordered table-striped">
                        <tr>
                            <td>
                        <div class="control-group">
                        <label class="control-label">Reference offre</label>
                        <div class="controls">
                            <select v-model="formAno.appel_offre_id" class="span" disabled>
                                <option v-for="plans in listeAppelOffre(marcheid)" :key="plans.id"
                                        :value="plans.id">{{plans.ref_appel}}</option>
                            </select>
                        </div>
                    </div>
                            </td>
                          <!--  analyseDMPValider-->
                            <td>
                      <div class="control-group">
                        <label class="control-label">Avis DMP</label>
                        <div class="controls">
                            <input type="text" :value="avis_dmp" readonly class="span">
                        </div>
                     </div>
                            </td>

                            <td>
                     <div class="control-group">
                        <label class="control-label">Reference du  courrier </label>
                        <div class="controls">
                            <input
                                    type="text"
                                  v-model="formAno.numero_courie"  
                                    class="span"
                                    placeholder="saisir la reference du courrier"
                            />
                        </div>
                    </div>
                            </td>
                           
                       
                           </tr>
                           
                        <tr>
                            <td>
                                <div class="control-group" v-if="analyseDMPValider(marcheid)">
                                    <label class="control-label">Reference PV</label>
                                    <div class="controls">
                                        <input type="text" :value="analyseDMPValider(marcheid).demande_ano.proce_verbal_offre.reference" readonly class="span">
                                    </div>
                                </div>
                            </td>


                            <td>
                      <div class="control-group">
                       <label class="control-label">Avis bailleur</label>
                       <div class="controls">
                       <select v-model="formAno.avis_bail" class="span">
                           <option value="1">Non objection</option>
                            <option value="2">Objection</option>
                           </select> 
                       </div>
                         </div>
                            </td>
                   
                            <td>

                      <div class="control-group">
                        <label class="control-label">Date avis</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="formAno.date_ano_dmp"
                                    class="span"
                                    placeholder=""
                            />
                        </div>
                        </div>
                            </td>

                      

                     
                        </tr>
                        <tr>
                            <td>

                                <div class="control-group">
                                    <label class="control-label">Fichier joint:</label>
                                    <div class="controls">
                                        <input type="file"  @change="OnchangeFichier" />
                                    </div>
                                </div>
                            </td>
                            <td colspan="2">
                     <div class="control-group">
          <label class="control-label">Observation:</label>
            <div class="controls">
              <textarea  v-model="formAno.observations_bailleur" :readonly="afficherMotifBailleur"  class="textarea_editor span7" rows="3" placeholder="Entrer le text ..."></textarea>
            </div>
          
        </div>
                            </td>
                           
                      
                        </tr>

                    </table>


            <div class="modal-footer">
                <a
                        @click.prevent="ajouterAnoDMPBailleurLocal"
                        class="btn btn-primary"
                        href="#"

                >Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
        </div>



          <div id="editeAnoDmpBailleurModal" class="modal hide tlAviBailleur">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modification avis bailleur</h3>
            </div>
                    <table class="table table-bordered table-striped">
                        <tr>

                               <td>
                        <div class="control-group" v-if="edite_ano_bailleur_dmp">
                        <label class="control-label">Reference offre</label>
                        <div class="controls">
                            <select v-model="edite_ano_bailleur_dmp.annalyse_d_m_p.demande_ano.proce_verbal_offre.appel_offre_id" class="span" disabled>
                                <option v-for="plans in listeAppelOffre(marcheid)" :key="plans.id"
                                        :value="plans.id">{{plans.ref_appel}}</option>
                            </select>
                        </div>
                    </div>
                            </td>

                            <td>

                     <div class="control-group">
                        <label class="control-label">Avi dmp</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="edite_ano_bailleur_dmp.ref_ano_dmp	"
                                    class="span"
                                    placeholder="Saisir le ref marche"
                            />
                        </div>
                    </div>
                            </td>
                   
                
                      <td colspan="2">


                     <div class="control-group">
                        <label class="control-label">Reference du courrier</label>
                        <div class="controls">
                            <input
                                    type="text" v-model="edite_ano_bailleur_dmp.numero_courie"
                                    
                                    class="span5"
                                    placeholder="Saisir le numero du courrier"
                            />
                        </div>
                    </div>
                            </td>
                        </tr>
                        <tr>
                           <td>
                      <div class="control-group">
                       <label class="control-label">Avis bailleur</label>
                       <div class="controls">
                       <select v-model="edite_ano_bailleur_dmp.avis_bail" class="span">
                           <option value="1">Non objection</option>
                            <option value="2">Objection</option>
                           </select> 
                       </div>
                    </div>

                            </td>
                            <td>

                     <div class="control-group">
                        <label class="control-label">Date avis</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="edite_ano_bailleur_dmp.date_ano_dmp"
                                    class="span"
                                    placeholder="Saisir le libelle_type"
                            />
                        </div>
                    </div>
                            </td>
                                 <td>
                                
                 <div class="control-group">
              <label class="control-label">Fichier joint:</label>
              <div class="controls">
                <input type="file"  @change="OnchangeFichier" />
              </div>
            </div>
                            </td>
                        </tr>
                         <tr>
                      
                            <td colspan="4">
                     <div class="control-group">
            <label class="control-label">Motif:</label>
            <div class="controls">
              <textarea  v-model="edite_ano_bailleur_dmp.observations_bailleur"   class="textarea_editor span10" rows="4" placeholder="Enter text ..."></textarea>
              </div>
          
        </div>
                            </td>
                           
                      
                        </tr>
                    </table>   
            <div class="modal-footer">
                <a
                 @click.prevent="editeAnoDMPBailleurLocal"
                        class="btn btn-primary"
                        href="#"

                >Modifier</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name:'compte',
    data(){
        
        return{

            formAno:{
                 date_ano_dmp:"",
                avis_bail:"",
                observations_bailleur:"",
                ref_ano_dmp:"",
                numero_courie:"",
                appel_offre_id:"",
                analyse_dmp_id:""


            },

           imagePDF:"",
           namePDF:"",
           fichierPDF:""
        }
    },
    props:['macheid'],
    created(){

    },
    computed:{

         ...mapGetters("bienService", [ "typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots",
                "modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
            ...mapGetters('personnelUA', ['acteur_depenses']),


                ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises']),
            ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
                'types_financements']) ,
                
    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),
        


        
            listeAnoDMPBailleur: function () {
                return marcheid => {
                    if (marcheid != "") {
                      //  console.log("Marche dmp bailleur")
                        let objet=this.getterAnoDMPBailleur.filter(idmarche => idmarche.annalyse_d_m_p.demande_ano.proce_verbal_offre.appel_offre.marche_id == marcheid)
                        //console.log("Marche dmp bailleru 7474")
                        return objet
                    }
                }
            },

 afficherMotifBailleur(){
                return this.formAno.avis_bail =="1";
            },
               
            listeAppelOffre(){
                return  marche_id=>{
                    if (marche_id!="") {
                        //console.log("Marche appel offre")
                       const vM=this;
                        let Objet=this.appelOffres.find( idmarche => idmarche.marche_id == marche_id)
                       // console.log("Marche appel offre 10")
                        if(Objet!=undefined){
                           // vM.formDossierCadidature.appel_offre_id=Objet.id;
                            vM.formAnalyseDossier.appel_offre_id = Objet.id;
                            vM.formLot.appel_offre_id=Objet.id;
                            vM.formAno.appel_offre_id = Objet.id
                            vM.formLettre.appel_offre_id=Objet.id;
                            vM.formDataCojo.num_dossier_appel_offre=Objet.ref_appel;
                        }
                       // console.log(Objet)
                    return this.appelOffres.filter( idmarche => idmarche.marche_id == marche_id)
                    }
                }

            },

               analyseDMPValider(){
             return marcheid=>{
                 if(marcheid != ""){
                     let objet=this.getterAnalyseDMP.find(item=>{
                         if(item.demande_ano.proce_verbal_offre.appel_offre.marche_id == marcheid && item.avis_bail==1 ){
                             let vM=this;
                         // console.log("OK AnalyseDMP")
                             vM.formAno.analyse_dmp_id=item.id;
                             vM.avis_dmp="Non objection"
                              return item;
                         }
                     })
                     return objet;
                 }
             }
            },

    },

    methods:{
        ...mapActions('bienService',['ajouterAnoDMPBailleur',
        'supprimerAnoDMPBailleur','modifierAnoDMPBailleur','getProceVerbal','getActeEffetFinancier']),



          afficheAnoDPMBailleurModale(index){
                this.$('#editeAnoDmpBailleurModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.edite_ano_bailleur_dmp=this.getterAnoDMPBailleur.find(
                    resp => resp.id == index
                )
                 },

                  OnchangeFichier(e) {
                const files = e.target.files;
                this.selectedFile = event.target.files[0];
                console.log(this.selectedFile)
                Array.from(files).forEach(file => this.addFichierPDF(file));
            },
            addFichierPDF(file) {
                let reader = new FileReader();
                let vm = this;
                reader.onload = e => {
                    vm.imagePDF = "pdf.png";
                    vm.namePDF = file.name;
                    vm.fichierPDF = e.target.result;
                };
                reader.readAsDataURL(file);
            },

                  ajouterAnoDMPBailleurLocal(){
             const formData = new FormData();
             formData.append('fichier', this.selectedFile, this.selectedFile.name);
             formData.append('date_ano_dmp', this.formAno.date_ano_dmp);
             formData.append('avis_bail', this.formAno.avis_bail);
             formData.append('observations_bailleur', this.formAno.observations_bailleur);
             formData.append('ref_ano_dmp', this.formAno.ref_ano_dmp);
             formData.append('numero_courie', this.formAno.numero_courie);
             formData.append('appel_offre_id', this.formAno.appel_offre_id);
             formData.append('analyse_dmp_id', this.formAno.analyse_dmp_id);
             let config = {
                 header : {
                     'Content-Type' : 'multipart/form-data'
                 }
             }
            this.ajouterAnoDMPBailleur(formData,config)
            this.formAno={
                date_ano_dmp:"",
                avis_bail:"",
                observations_bailleur:"",
                ref_ano_dmp:"",
                numero_courie:"",
                appel_offre_id:"",
                analyse_dmp_id:""
            }
        },

              editeAnoDMPBailleurLocal(){

                const formData = new FormData();
                formData.append('date_ano_dmp', this.edite_ano_bailleur_dmp.date_ano_dmp);
                formData.append('avis_bail', this.edite_ano_bailleur_dmp.avis_bail);
                formData.append('observations_bailleur', this.edite_ano_bailleur_dmp.observations_bailleur);
                formData.append('ref_ano_dmp', this.edite_ano_bailleur_dmp.ref_ano_dmp);
                formData.append('analyse_dmp_id', this.edite_ano_bailleur_dmp.analyse_dmp_id);
                formData.append('appel_offre_id', this.edite_ano_bailleur_dmp.appel_offre_id);
                formData.append('id', this.edite_ano_bailleur_dmp.id);
                console.log(formData)
                if ( this.selectedFile!==""){
                    formData.append('fichier', this.selectedFile, this.selectedFile.name);
                }
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
                this.modifierAnoDMPBailleur(formData,config)
                this.$('#editeAnoDmpBailleurModal').modal('hide');
                this.getProceVerbal()
                this.getActeEffetFinancier()
            },

    }
}
</script>