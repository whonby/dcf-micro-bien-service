<template>
<div>
        
        
                <h4> Liste ANO DMP</h4>
                <table class="table table-bordered table-striped" v-if="macheid">
                    <thead>
                    <tr>
                        <th>Numéro courrier</th>
                        <th>Date demande</th>
                        <th>Fichier</th>
                         <th>Avis</th>
                        <th>Date de l'avis</th>
                        <th>Action</th>
                    </tr>
                    </thead>
               
                    <tbody>

                    <tr class="odd gradeX" v-for="demande in demandeAno(macheid)"
                        :key="demande.id" >
                        <td @click="afficheDemandeDAO(demande.id)">
                            {{demande.num_courrier || 'Non renseigné'}}</td>
                        <!-- <td @click="afficheDemandeDAO(demande.id)">
                            {{demande.ref_marche || 'Non renseigné'}}</td> -->
                        <!-- <td @click="afficheDemandeDAO(demande.id)">
                            {{demande.proce_verbal_offre.appel_offre.ref_appel || 'Non renseigné'}}</td> -->
                        <!-- <td @click="afficheDemandeDAO(demande.id)">
                            {{demande.proce_verbal_jugement_offre_id || 'Non renseigné'}}</td> -->
                        <td @click="afficheDemandeDAO(demande.id)">
                            {{formaterDate(demande.date_demande) || 'Non renseigné'}}</td>

                        <td>
                            <a v-if="demande.fichier" :href="demande.fichier" class="btn btn-default" target="_blank">
                                <span class=""><i class="icon-book"></i>
                                </span>
                            </a>
                        </td>

                        
                        <td @click="afficherModalDecisionAnocf (demande.id)"> 
                           <span v-if="demande.avis== 0" class=" btn label label-success"> Non objection </span>
                           <span v-else-if="demande.avis== 1" class=" btn label label-important"> objection </span>
                           <span v-else class=" btn label label-info"> En attent</span>
                         </td>

                         <td @click="afficheDemandeDAO(demande.id)">
                            {{formaterDate(demande.date_avis) || 'Non renseigné'}}</td>

                        <div class="btn-group">
                            <button @click.prevent="supprimerDemandeAno(demande.id)"  class="btn btn-danger " title="Supprimer">
                                <span class=""><i class="icon-trash"></i></span>
                            </button>
                        </div>


                    </tr>
                    </tbody>
                </table>

            
                  

                  


        <div id="ajouterD" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter demande ANO</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">


                         <div class="control-group">
                        <label class="control-label">Reference offre</label>
                        <div class="controls">
                            <!-- <select v-model="formDemande.appel_offre_id" class="span" disabled>
                                <option v-for="plans in listeAppelOffre(macheid)" :key="plans.id"
                                        :value="plans.id">{{plans.ref_offre}}</option>
                            </select> -->

                             <input
                                    type="text"
                                    :value="affichierReferenceAppelOffre(macheid)"
                                    class="span"
                                   readonly
                            />
                        </div>
                        </div>


                     <!-- <div class="control-group">
                        <label class="control-label">PV</label>
                        <div class="controls" v-if="listePVDemandePV(macheid)">
                            <select v-model="formDemande.proce_verbal_jugement_offre_id" class="span">
                                <option :value="listePVDemandePV(macheid).id">{{listePVDemandePV(macheid).reference}}</option>
                            </select>
                        </div>
                    </div> -->


                     <div class="control-group">
                        <label class="control-label">Numero du courrier</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="formDemande.num_courrier"
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
                                    v-model="formDemande.date_demande"
                                    class="span"
                                    placeholder="Saisir le libelle_type"
                            />
                        </div>
                    </div>

                  

         <div class="control-group">
              <label class="control-label">Fichier joint:</label>
              <div class="controls">
                <input type="file" @change="OnchangeFichierDemandeAno" />
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



         <div id="modifDemandeAno" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modification ANO</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">

                       <div class="control-group">
                        <label class="control-label">Reference offre</label>
                        <div class="controls">
                            <!-- <select v-model="edite_demande_dao.appel_offre_id" class="span" disabled>
                                <option v-for="plans in listeAppelOffre(macheid)" :key="plans.id"
                                        :value="plans.id">{{plans.ref_offre}}</option>
                            </select> -->

                             <input
                                    type="text"
                                    :value="affichierReferenceAppelOffre(macheid)"
                                    class="span"
                                   readonly
                            />
                        </div>
                        </div>

                    <!-- <div class="control-group">
                        <label class="control-label">PV</label>
                        <div class="controls" v-if="edite_demande_dao">
                          <input :value="edite_demande_dao.proce_verbal_offre.reference" readonly/>
                        </div>
                    </div> -->

                    <div class="control-group">
                        <label class="control-label">Numero du courrier</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="edite_demande_dao.num_courrier"
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
                                    v-model="edite_demande_dao.date_demande"
                                    class="span"
                                    placeholder="Saisir le libelle_type"
                            />
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Fichier joint:</label>
                        <div class="controls">
                            <input type="file" @change="OnchangeFichierDemandeAno" />
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


        

<div id="ajouterDecisionAvisCf" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter avis d'ANO DMP sur Le DAO</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">

                 <div class="control-group">
                        <label class="control-label">Reference offre</label>
                        <div class="controls">
                            

                              <input
                                    type="text"
                                    :value="affichierReferenceAppelOffre(macheid)"
                                    class="span"
                                   readonly
                            />
                        </div>
                        </div>

                        
                          <div class="control-group">
                        <label class="control-label">Reference pv</label>
                        <div class="controls">
                              <input
                                    type="text"
                                    :value="afficherReferencePv(affichierAppelOffreid(macheid))"
                                    class="span"
                                   readonly
                            />
                        </div>
                        </div>

                    <div class="control-group">

                        <label class="control-label">Date d'avis d'ANO</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="edite_demande_dao.date_avis"
                                    class="span"
                                    placeholder="Saisir le libelle_type"
                            />
                        </div>
                    </div>

                    <div class="control-group">
                        <label class="control-label">Avis</label>
                        <div class="controls">
                           <select v-model="edite_demande_dao.avis" class="span">
                               <option value="0"> Non objection</option>
                               <option value="1">Objection </option>
                           </select>
                        </div>
                    </div>

                  <div class="control-group">
          <label class="control-label">Observation:</label>
            <div class="controls">
              <textarea  v-model="edite_demande_dao.observations "  class="textarea_editor span"  :readonly="verouillageObservation" rows="" placeholder="Entrer  le text ..."></textarea>
            </div>
          
        </div>

          <!-- <div class="control-group">
                        <label class="control-label">Motif </label>
                        <div class="controls">
                          <select v-model="edite_demande_dao.plan_motif_decision_id" class="span">
                                <option v-for="varText in motifDecisions" :key="varText.id"
                                        :value="varText.id">{{varText.libelle}}</option>
                            </select>
                        
                        </div>
                    </div> -->

                    <div class="control-group">
                        <label class="control-label">Motif</label>
                        <div class="controls">
                          <select v-model="edite_demande_dao.plan_motif_decision_id" class="span">
                                <option v-for="varText in AffichierElementParent(affichierIdActeFinancierDansActePlan)" :key="varText.id"
                                        :value="varText.id">{{varText.libelle}}</option>
                            </select>
                        
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
formDemande:{
             date_demande:"",
                    num_courrier:"",
                   // proce_verbal_jugement_offre_id:"",
                    appel_offre_id:""
},

edite_demande_dao:"",
imagePDFDemandeAno:"",
namePDFDemandeAno:"",
fichierPDFDemandeAno:"",
selectedFileDemandeAno:""

        }
    },
    props:["macheid"],

    created(){


    },
    computed:{
          ...mapGetters("bienService", [ "typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots",
                "modePassations", "procedurePassations","getterDossierCandidats","marches",
                "motifDecisions","gettersOffreTechniques","getterLettreInvitation",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "rapportDocuments","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "gettersCotations", "analyseDossiers","text_juridiques", "livrables",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
            ...mapGetters('personnelUA', ['acteur_depenses']),
                ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises']),
            ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
                'types_financements']) ,
            ...mapGetters('parametreGenerauxFonctionnelle', ['structuresDecision', 
  'plans_Decision']),
                
    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),
            

            demandeAno: function () {
                return macheid => {
                    if (macheid != "") {
                        let obje=this.getterDemandeAno.filter(idmarche => idmarche.marche_id == macheid)
                        return obje
                    }
                }
            }, 

           
              // afficher le pv sur la demende d'ANO


      afficherReferencePv() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.rapportDocuments.find(qtreel => qtreel.appel_offre_id == id );

      if (qtereel) {
        return qtereel.reference;
      }
      return 0
        }
      };
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


    // afficher la reference de l'offre

    affichierAppelOffreid() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.appelOffres.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.id;
      }
      return 0
        }
      };
    },

            //  listeAppelOffre(){
            //     return  macheid=>{
            //         if (macheid!="") {
            //             //console.log("Marche appel offre")
            //            const vM=this;
            //             let Objet=this.gettersCotations.find( idmarche => idmarche.marche_id == macheid)
                     
            //             if(Objet!=undefined){
                          
            //                 vM.formDemande.appel_offre_id = Objet.id;
                         
            //             }
                       
            //         return this.gettersCotations.filter( idmarche => idmarche.marche_id == macheid)
            //         }
            //     }
            // },


             affichierReferenceAppelOffre() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.appelOffres.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.ref_appel;
      }
      return 0
        }
      };
    },
// affichierAppelOffreid() {
//       return id => {
//         if (id != null && id != "") {
//            const qtereel = this.appelOffres.find(qtreel => qtreel.marche_id == id);

//       if (qtereel) {
//         return qtereel.id;
//       }
//       return 0
//         }
//       };
//     },

            //          listePVDemandePV(){
            //     return macheid=>{
            //         if(macheid!=""){
            //             return this.getterProceVerballe.find(item=>{
            //                 if(item.appel_offre.marche_id==macheid && item.avie==null ){
            //                     let vM=this;
            //                     vM.formDemande.proce_verbal_jugement_offre_id=item.id
            //                     return item;
            //                 }
            //             });
            //         }
            //     }
            // },

            verouillageObservation(){
    return this.edite_demande_dao.avis == 0
},





    },
    methods:{

        ...mapActions('bienService',['supprimerDemandeAno','ajouterDemandeAno',
        'modifierDemandeAno','getAnoDMPBailleur','getAnalyseDMP']),



 afficheDemandeDAO(index){
                this.$('#modifDemandeAno').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.edite_demande_dao=this.getterDemandeAno.find(
                    demandeAno => demandeAno.id == index
                )
                //console.log(this.edite_demande_dao)
            },



            afficherModalDecisionAnocf(index){
                this.$('#ajouterDecisionAvisCf').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.edite_demande_dao=this.getterDemandeAno.find(
                    demandeAno => demandeAno.id == index
                )
                //console.log(this.edite_demande_dao)
            },

   OnchangeFichierDemandeAno(e) {
                const files = e.target.files;
                this.selectedFileDemandeAno = event.target.files[0];
                console.log(this.selectedFileDemandeAno)
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
                formData.append('fichier', this.selectedFileDemandeAno, this.selectedFileDemandeAno.name);
              //  formData.append('proce_verbal_jugement_offre_id', this.formDemande.proce_verbal_jugement_offre_id);
                formData.append('date_demande', this.formDemande.date_demande);
                formData.append('marche_id', this.macheid);
                formData.append('appel_offre_id', this.affichierAppelOffreid(this.macheid));
                formData.append('num_courrier', this.formDemande.num_courrier);
                
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
                console.log(formData)
                this.ajouterDemandeAno(formData,config)
                this.formDemande={
                    date_demande:"",
                    appel_offre_id:"",
                    num_courrier:"",
                    
                    proce_verbal_jugement_offre_id:""
                }
            },

               editDemandeDAO(){
                //console.log(this.edite_demande_dao)
                const formData = new FormData();
               // formData.append('proce_verbal_jugement_offre_id', this.edite_demande_dao.proce_verbal_jugement_offre_id);
                formData.append('date_demande', this.edite_demande_dao.date_demande);
                formData.append('appel_offre_id', this.affichierAppelOffreid(this.macheid));
                formData.append('num_courrier', this.edite_demande_dao.num_courrier);
                formData.append('marche_id',this.macheid);
                formData.append('id', this.edite_demande_dao.id);
                 formData.append('plan_motif_decision_id',this.edite_demande_dao.plan_motif_decision_id);
                formData.append('observations',this.edite_demande_dao.observations)
                formData.append('date_avis',this.edite_demande_dao.date_avis);
                formData.append('avis',this.edite_demande_dao.avis);
                console.log(formData)
                if ( this.selectedFileDemandeAno!==""){
                    formData.append('fichier', this.selectedFileDemandeAno, this.selectedFileDemandeAno.name);
                }
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
                this.modifierDemandeAno(formData,config)
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

