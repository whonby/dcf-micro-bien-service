<template>
    <div>
       
                                   <!-- <div class="span" align="right">
                                       Rechercher: <input type="search" v-model="search" />

                                   </div> -->

                                 <table class="table table-bordered table-striped"  v-if="macheid">
                                            <thead>
                                            <tr>
                                                <th>Référence du courier</th>
                                                <th>Destinataire</th>
                                                <th>Date de transmission</th>
                                                <th>Fichier</th>
                                                <th>Avis</th>
                                                <th>Date d'avis ANO DMP</th>
                                                <th>Observation</th>
                                                <th>Action</th>
                                            </tr>
                                            </thead>
                           
                                            <tbody>
                         <tr class="odd gradeX" v-for="(transmission, index) in listetransmissionDao(macheid.id)"
                        :key="transmission.id">

                          <td @click="afficherModalModifierTransmission(index)">
                            {{ transmission.ref_courier|| 'Non renseigné'}}</td>

                            <td> 
                             <span v-if="transmission.destinataire ==1"> ANO DMP</span>
                              <span v-else-if="transmission.destinataire ==2" > ANO Bailleur</span>
                                 <span v-else >{{'Non renseigné'}}</span>
                            </td>

                           <td @click="afficherModalModifierTransmission(index)">
                            {{ formaterDate(transmission.date_dao)|| 'Non renseigné'}}</td>
                        
                      
                        <td  >
                            <a v-if="transmission.fichier" :href="transmission.fichier" class="btn btn-default" target="_blank">
                                <span class=""><i class="icon-book"></i>
                                </span>
                            </a>
                        </td>

                         <td @click="afficherModalDecisionAnoDMP (index)"> 
                           <span v-if="transmission.avis== 0" class=" btn label label-success"> Non objection </span>
                           <span v-else-if="transmission.avis== 1" class=" btn label label-important">Objection </span>
                           <span v-else class=" btn label label-info"> En attente</span>
                         </td>

                          <td @click="afficherModalModifierTransmission(index)">
                            {{ formaterDate(transmission.date_ano_dmp)|| 'Non renseigné'}}</td>

                             <td @click="afficherModalModifierTransmission(index)">
                            {{ transmission.observations|| 'Non renseigné'}}</td>




                        <div class="btn-group">
                            <button @click.prevent="supprimerTransmission(transmission.id)"  class="btn btn-danger " title="Supprimer">
                                <span class=""><i class="icon-trash"></i>  Supprimer</span></button>

                        </div>

                    </tr>
                                            </tbody>
                                        </table>



         
<!--  debut de decision ano dmp -->

<div id="ajouterDecisionAvisANO" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter ANO DMP sur DAO</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">

                <div class="control-group">
              <label class="control-label">Référence du dossier</label>
              <div class="controls">
                <input type="text"   v-model="edit_transmission.ref_courier" readonly/>
              </div>
            </div>

                    <div class="control-group">

                        <label class="control-label">Date d'avis</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="edit_transmission.date_ano_dmp"
                                    class="span"
                                    placeholder="Saisir le libelle_type"
                            />
                        </div>
                    </div>

                    <div class="control-group">
                        <label class="control-label">Avis</label>
                        <div class="controls">
                           <select v-model="edit_transmission.avis" class="span">
                               <option value="0"> Non objection</option>
                               <option value="1">Objection </option>
                           </select>
                        </div>
                    </div>

                  <div class="control-group">
          <label class="control-label">Observation:</label>
            <div class="controls">
              <textarea  v-model="edit_transmission.observations "  class="textarea_editor span"  :readonly="verouillageObservation" rows="" placeholder="Entrer le texte ..."></textarea>
            </div>
          
        </div>

          <!-- <div class="control-group">
                        <label class="control-label">Motif 7</label>
                        <div class="controls">
                          <select v-model="edit_transmission.plan_motif_decision_id" class="span">
                                <option v-for="varText in motifDecisions" :key="varText.id"
                                        :value="varText.id">{{varText.libelle}}</option>
                            </select>
                        
                        </div>
                    </div> -->

                     <div class="control-group">
                        <label class="control-label">Motif</label>
                        <div class="controls">
                          <select v-model="edit_transmission.plan_motif_decision_id" class="span">
                                <option v-for="varText in AffichierElementParent(affichierIdActeFinancierDansActePlan)" :key="varText.id"
                                        :value="varText.id">{{varText.libelle}}</option>
                            </select>
                        
                        </div>
                    </div>

                </form>
            </div>
            <div class="modal-footer">
                <a
                        @click.prevent="modificationTransmissionLocal()"
                        class="btn btn-primary"
                        href="#"

                >Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
        </div>
<!-- fin de decision  -->






        

        <notifications />
 </div>
    
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import moment from 'moment';
export default {
 name:'compte',
    data(){
        return{

            formTransmission:{
                 
                    fichier:"",
                    date_dao:"",
                    ref_courier:"",
                    destinataire:"",
                    avis:""
                  

                },
            
        

            edit_transmission:{
                date_ano_dmp:"",
                avis:"",
                observations:"",
                plan_motif_decision_id:""


            },

            imagePDF:"",
            namePDF:"",
            fichierPDF:"",
            selectedFile:"",

                search: "",

        }
    },

    props:["macheid"],

    created(){

    },
    computed: {

            ...mapGetters("bienService", [ "gettersPersonnaliserTransmissions"
             ,"gettersCotations","gettersTransmissions","motifDecisions"]),
            // ...mapGetters('personnelUA', ['acteur_depenses']),

         ...mapGetters('parametreGenerauxFonctionnelle', ['structuresDecision', 
  'plans_Decision']),
               ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises']),
            // ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
            //     'types_financements']) ,
                
    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires",
    "type_Unite_admins","grandes_natures","taux","sections","plan_motif_decision"]),
           
                       
 listetransmissionDao () {
            return macheid => {
                if (macheid != "") {

                    return this.gettersPersonnaliserTransmissions.filter(idmarche => idmarche.macheid == macheid 
                    && idmarche.destinataire==1)
                }
            }
        },

        verouillageObservation(){
            return this.edit_transmission.avis == 0
        },

        affichierIdActeFinancierDansActePlan() {
      const qtereel = this.plans_Decision.find(
        qtreel => qtreel.code == "11",
       
      );

      if (qtereel) {
        return qtereel.id;
      }
      return 0
    },

AffichierElementParent() {
      
      return id => {
        if (id != null && id != "") {
          return this.plans_Decision.filter(element => element.parent == id);
        }
      };
    },

        },
    methods:{
        ...mapActions('bienService',['supprimerTransmission',
        'ajouterTransmission','modifierDecisionAnoDmp']),


             OnchangeFichier(e) {
                const files = e.target.files;
                this.selectedFile = event.target.files[0];
               
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
          
         afficherModalModifierTransmission(index){
                this.$('#modificationAajouterAnalys01').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.edit_transmission = this.listetransmissionDao(this.macheid.id)[index];
            },
           
         
          
           ajouterCotationLocal(){

                const formData = new FormData();
                formData.append('date_dao', this.formTransmission.date_dao);
                formData.append('ref_courier',this.formTransmission.ref_courier);
                formData.append('destinataire',this.formTransmission.destinataire);
                formData.append('marche_id',this.macheid);
                formData.append('fichier', this.selectedFile, this.selectedFile.name);

                //formData.append('marche_id', this.macheid.id);
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
// if (condition) {
    
// }
              
               this.ajouterTransmission(formData, config)
               this.formTransmission ={
                   date_dao:"",
                   ref_courier:"",
                   destinataire:""
                  
               }
           },


 modificationTransmissionLocal(){
                //console.log(this.edite_demande_dao)
                const formData = new FormData();
              formData.append('date_dao', this.edit_transmission.date_dao);
                formData.append('marche_id', this.macheid);
                formData.append('avis',this.edit_transmission.avis);
                formData.append('observations',this.edit_transmission.observations);
                formData.append('plan_motif_decision_id', this.edit_transmission.plan_motif_decision_id);
                formData.append('ref_courier',this.edit_transmission.ref_courier);
                formData.append('date_ano_dmp',this.edit_transmission.date_ano_dmp);
                formData.append('destinataire',this.edit_transmission.destinataire);
               formData.append('id',this.edit_transmission.id);
                console.log(formData)
                if ( this.selectedFile!==""){
                    formData.append('fichier', this.selectedFile, this.selectedFile.name);
                }
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
                 this.modifierDecisionAnoDmp(formData,config)
               this.$('#modificationAajouterAnalys01').modal('hide');
            },
           formaterDate(date){
              return moment (date,'YYYY-MM-DD').format('DD/MM/YYYY');
           },

           afficherModalDecisionAnoDMP(index){
           this.$('#ajouterDecisionAvisANO').modal({
               backdrop:'static',
               keyboard:false
           })
            this.edit_transmission = this.listetransmissionDao(this.macheid.id)[index]
           },




            //  ajouterDemandeAnoLocal(){
            
            //     this.ajouterDemandeAno(formData,config)
            //     this.edit_transmission={
                   
            //     }
            // },

     }

    
}
</script>

<style scoped>
.tllgrde{
 width: 1000px;
 margin: 0 -530px;
 height: 350px;
}
</style>
  

