<template>
    <div>


            <h4>Liste Analyse DMP</h4>
                <table class="table table-bordered table-striped" v-if="marcheid">
                    <thead>
                    <tr>
                        <th>Numero du courrier</th>
                        <th>Référence PV</th>
                        <th>Date avis</th>
                        <th>Decision </th>
                        <th>Observation</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="odd gradeX" v-for="document in listeAnalyseDPM(marcheid)"
                        :key="document.id">

                        <td @click="afficheAnalyseDMP(document.id)">
                            {{document.demande_ano.num_courrier || 'Non renseigné'}}</td>

                        <td @click="afficheAnalyseDMP(document.id)">
                            {{document.demande_ano.proce_verbal_offre.reference || 'Non renseigné'}}
                        </td>
                        <td @click="afficheAnalyseDMP(document.id)">
                            {{formaterDate(document.date_avis_bail) || 'Non renseigné'}}</td>
                        
                        <td @click="afficheAnalyseDMP(document.id)">

                            <button class="btn btn-success btn-mini" v-if="document.avis_bail==1">Non objection</button>
                            <button class="btn btn-danger btn-mini" v-else>Objection</button>
                        </td>

                        <td @click="afficheAnalyseDMP(document.id)">
                            {{document.observation || 'Non renseigné'}}</td>

                        <!-- <td @click="afficheAnalyseDMP(document.id)">
                            {{document.document_procedure.libelle_doc || 'Non renseigné'}}</td> -->
                        <div class="btn-group">
                            <button @click.prevent="supprimerAnalyseDMP(document.id)"  class="btn btn-danger " title="Supprimer">
                                <span class=""><i class="icon-trash"></i></span></button>

                        </div>

                    </tr>
                    </tbody>
                </table>



        <!-- debut formulaire ajout --->
   <div id="ajouterDmp" class="modal hide tailDMP">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter avis dmp</h3>
            </div>
            <div class="modal-body">
                <table class="table table-bordered table-striped">
         
            <tr>
              <td>
                 <div class="control-group">
                        <label class="control-label">Reference d'offre</label>
                        <div class="controls">
                        <input type="text" :value="afficherIdMarche(detail_marche.id)" class="span4" readonly>
                        </div>
                    </div>
              </td>
               <td>
                <div class="control-group">
                        <label class="control-label">Reference courrier ano</label>
                        <div class="controls" v-if="demandeAnoAnalyseDMP(marcheid)">
                        <input type="text" :value="demandeAnoAnalyseDMP(marcheid).num_courrier" class="span4" readonly>
                        </div>
                    </div>
              </td>
            </tr>

            <tr>
                <td>
                    <div class="control-group">
                        <label class="control-label">PV</label>
                        <div class="controls" v-if="demandeAnoAnalyseDMP(marcheid)">
                            <input type="text" :value="demandeAnoAnalyseDMP(marcheid).proce_verbal_offre.reference" class="span4" readonly>
                        </div>
                    </div>
                </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Avis</label>
                  <div class="controls">
                    <select v-model="formAnalyseDMP.avis_bail" class="span4">
                      <option value="0" >Objection</option>
                       <option value="1" >Non objection</option>
                    </select>
                  </div>
                </div>
              </td>
             

            </tr>
            <tr>
                <td>
                    <div class="control-group">
                        <label class="control-label">Date avis</label>
                        <div class="controls">
                            <input type="date" v-model="formAnalyseDMP.date_avis_bail" class="span4">
                        </div>
                    </div>
                </td>
            <td >
                <div class="control-group">
                        <label class="control-label">Observation</label>
                        <div class="controls">
                       
                        <textarea v-model="formAnalyseDMP.observation" rows="2" class="span4" :readonly="verrouObjection">

                        </textarea>
                        </div>
                    </div>
              </td>
            </tr>
                </table>
            </div>
            <div class="modal-footer">
                <a @click.prevent="ajouterAnalyseDMPB"
                        class="btn btn-primary"
                        href="#"
                >Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
        </div>
        <!-- end -->


        
        <div id="editeDMP" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifie Analyse DMP</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">

                    <!-- <div class="control-group">
                        <label class="control-label">Reference Dmp</label>
                        <div class="controls">
                        <input type="text" v-model="edite_analyse_dpm.ref_dmp" class="span">
                        </div>
                    </div>-->

                     <div class="control-group" v-if="edite_analyse_dpm">
                        <label class="control-label">Courier ano</label>
                        <div class="controls" >
                            <select v-model="edite_analyse_dpm.demande_ano_id" class="span" disabled>
                                <option v-for="varText in demandeAno(marcheid)" :key="varText.id"
                                        :value="varText.id">{{varText.num_courrier}}</option>
                            </select>
                        </div>
                    </div>

                      <div class="control-group">
                        <label class="control-label">Decision</label>
                        <div class="controls">
                          <select v-model="edite_analyse_dpm.avis_bail" class="span">
                                <option value="0">Objection</option>
                                <option value="1">Non objection</option>
                            </select>
                        </div>
                    </div>

                    <div class="control-group">
                        <label class="control-label">Date avis</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="edite_analyse_dpm.date_avis_bail"
                                    class="span"
                                    placeholder="Saisir le libelle_type"
                            />  
                        </div>
                    </div>
                  

                    <div class="control-group">
                        <label class="control-label">Observation</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="edite_analyse_dpm.observation"
                                    class="span"
                                    placeholder="Saisir le libelle_type"
                            />
                        </div>
                    </div>
                   
                    <!-- <div class="control-group">
                        <label class="control-label">document procedure</label>
                        <div class="controls">
                            <select v-model="edite_analyse_dpm.document_procedure_id" class="span">
                                <option v-for="varText in documentProcedures" :key="varText.id"
                                        :value="varText.id">{{varText.libelle_doc}}</option>
                            </select>
                        </div>
                    </div> -->   

                </form>
            </div>
            <div class="modal-footer">
                <a @click.prevent="modficationsAnalyseDMP"
                   class="btn btn-primary"
                   href="#"
                >Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
        </div>
        <!-- end  -->
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data(){
        return{
           formAnalyseDMP:{
            ref_dmp:"",
                    demande_ano_id:"",
                    observation:"",
                    avis_bail:"",
                    date_avis_bail:""
                    },

                    edite_analyse_dpm:""
        }

    },
    props:["macheid"],

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
        

 listeAnalyseDPM: function () {
                return marcheid => {
                    if (marcheid != "") {
                       // console.log("Marche liste analyse dpm")
                        let objet=this.getterAnalyseDMP.filter(idmarche => idmarche.demande_ano.proce_verbal_offre.appel_offre.marche_id == marcheid)
                      // console.log("ok c'est la vie 010101")
                        return objet;
                    }
                }

            },
            afficherIdMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.reference_marche;
      }
      return 0
        }
      };
    },


       demandeAno: function () {
                return marcheid => {
                    if (marcheid != "") {
                        let obje=this.getterDemandeAno.filter(idmarche => idmarche.proce_verbal_offre.appel_offre.marche_id == marcheid)

                        return obje
                    }
                }
            },

      demandeAnoAnalyseDMP: function () {
                return marcheid => {
                    if (marcheid != "") {
                       // console.log("Marche demande ano AnalyseDmp marche_id")

                        let obje=this.getterDemandeAno.find(idmarche => {
                            if(idmarche.proce_verbal_offre.appel_offre.marche_id == marcheid && idmarche.proce_verbal_offre.avie==null){
                                let vM=this;
                                vM.formAnalyseDMP.demande_ano_id=idmarche.id;
                                return idmarche;
                            }
                        })
                       // console.log("Marche demande 41000000")
                        return obje
                    }
                }
            },


    },
    methods:{
        ...mapActions('bienService',['supprimerAnalyseDMP','ajouterAnalyseDMP', 
        'modifierAnalyseDMP', 'getProceVerbal','getAnoDMPBailleur']),



          afficheAnalyseDMP(index){

                this.$('#editeDMP').modal({
                    backdrop: 'static',
                    keyboard: false
                });

                this.edite_analyse_dpm=this.getterAnalyseDMP.find(
                    annalyseDP => annalyseDP.id == index
                )
               // console.log(this.edite_analyse_dpm)
            },

            
        ajouterAnalyseDMPB(){
     /*        var nouvelObjet = {
        ...this.formAnalyseDMP,
        ref_dmp: this.detail_marche.id,
        ref_courier: this.recupererNumeroCourier,
      };*/
                console.log(this.formAnalyseDMP)
            this.ajouterAnalyseDMP(this.formAnalyseDMP)
            this.formAnalyseDMP={
                     ref_dmp:"",
                    demande_ano_id:"",
                    observation:"",
                    avis_bail:"",
                    date_avis_bail:""
            }
        },

         modficationsAnalyseDMP(){
                this.modifierAnalyseDMP(this.edite_analyse_dpm)
                    this.getProceVerbal();
                this.getAnoDMPBailleur()
                this.$('#editeDMP').modal('hide');
            },
    }
}
</script>