<template>
<div>


<div id="modifierActeEF" class="modal hide grdirModalActeEffet">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier acte effet financier</h3>
            </div>
            <div class="modal-body">

                <table class="table table-bordered table-striped">
                    <tr>
                        <td>
                            <div class="control-group">
                                <label class="control-label">Type acte effet financier.</label>
                                <div class="controls">
                                    <select v-model="editActeEffetFinancier.type_act_effet_id" class="span">
                                        <option v-for="varText in typeActeEffetFinanciers" :key="varText.id"
                                                :value="varText.id">{{varText.libelle}}</option>
                                    </select>

                                </div>
                            </div>
                        </td>


                        <td>
                           <div class="control-group">
                        <label class="control-label">Entreprise.</label>
                        <div class="controls">
                          <select v-model="editActeEffetFinancier.entreprise_id" class="span">
                               <option v-for="varText in afficherEntrepriseRecep(marcheid)" :key="varText.id"
                                        :value="varText.objetEntreprise.id">{{varText.objetEntreprise.raison_sociale}}</option>
                            </select>
                        
                        </div>
                    </div>
                        </td>


                        <td>
                            <div class="control-group">
                                <label class="control-label">Text juridique </label>
                                <div class="controls">
                                    <select v-model="editActeEffetFinancier.text_juridique_id" class="span">
                                        <option v-for="varText in text_juridiques" :key="varText.id"
                                                :value="varText.id">{{varText.objet_text}}</option>
                                    </select>
                                </div>
                            </div>
                        </td>

                        <!-- <td>
                            <div class="control-group">
                                <label class="control-label">Ano bailleur dmp.</label>
                                <div class="controls">
                                    <input :value="info_avis_bailleur" readonly>

                                </div>
                            </div>
                        </td> -->


                    </tr>
                    <tr>
                        <td>
                            <div class="control-group">
                                <label class="control-label">Autorité approbatrice</label>
                                <div class="controls">
                                    <input
                                            type="text"
                                            v-model="editActeEffetFinancier.autorite_approbation"
                                            class="span"
                                            placeholder=" "
                                    />
                                </div>
                            </div>

                        </td>


                        <td>
                            <div class="control-group">
                                <label class="control-label"> date d'approbation</label>
                                <div class="controls">
                                    <input
                                            type="date"
                                            v-model="editActeEffetFinancier.date_approbation"
                                            class="span"
                                            placeholder=""
                                    />
                                </div>
                            </div>

                        </td>


                        <td>

                            <div class="control-group">
                                <label class="control-label">Code acte </label>
                                <div class="controls">
                                    <input
                                            type="text"
                                            v-model="editActeEffetFinancier.code_act"
                                            class="span"
                                            placeholder="Saisir le code acte"
                                    />
                                </div>
                            </div>
                        </td>

                    </tr>
                    <tr>


                        <td colspan="3" width="250">
                            <div class="control-group">
                                <label class="control-label">Libellé acte:</label>
                                <div class="controls">
                                    <textarea   v-model="editActeEffetFinancier.libelle_act"   class="textarea_editor span12" rows="3" placeholder="Entrer le libellé ..."></textarea>
                                </div>

                            </div>
                        </td>



                    </tr>
                    <tr>
                        <td>
                            <div class="control-group">
                                <label class="control-label">Reference acte</label>
                                <div class="controls">
                                    <input type="text" v-model="editActeEffetFinancier.reference_act"
                                           class="span"
                                           placeholder="refence acte"
                                    />
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="control-group">
                                <label class="control-label">Incidence financière</label>
                                <div class="controls">
                                    <select  v-model="editActeEffetFinancier.incidence_financiere" class="span">
                                        <option value="0">Oui</option>
                                        <option value="1">Non</option>
                                    </select>
                                </div>
                            </div>
                        </td>
                        <td>

                            <div class="control-group">
                                <label class="control-label">Montant acte/réel du marché</label>
                                <div class="controls">
                                    <input type="text" v-model="editActeEffetFinancier.montant_act"
                                           class="span"
                                           placeholder="refence acte"
                                    />
                                </div>
                            </div>
                        </td>
                        <td>

                            <div class="control-group">
                                <label class="control-label" >Date de signature attributaire</label>
                                <div class="controls">
                                    <input type="date" v-model="editActeEffetFinancier.date_attributaire"
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
                                <label class="control-label">Date ordre de service demarrage</label>
                                <div class="controls">
                                    <input type="date" v-model="formEffetFinancier.date_odre_service"
                                           class="span"
                                           placeholder=""
                                    />
                                </div>
                            </div>
                        </td>


                        <td>
                            <div class="control-group">
                                <label class="control-label" title=" ">Date fin exécution</label>
                                <div class="controls">
                                    <input type="date" :min="formEffetFinancier.date_odre_service" :readonly="getDateFinExécutionValue" v-model="formEffetFinancier.date_fin_exe"
                                           class="span"
                                           placeholder=""
                                    />
                                </div>
                            </div>
                        </td>



                        <td>
                            <div class="control-group">
                                <label class="control-label" title=" ">Durée d'exécution(jrs)</label>
                                <div class="controls">
                                    <input type="text" readonly :value="nombreDejourCalcule"
                                           class="span"
                                    />
                                </div>
                            </div>
                        </td>


                        <td>
                            <div class="control-group">
                                <label class="control-label" title=" ">Date de reception definitive</label>
                                <div class="controls">
                                    <input type="date" v-model="editActeEffetFinancier.date_reception"
                                           class="span"
                                           placeholder=""
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>

                </table>
            </div>
             <div class="modal-footer">
                <a
                        @click.prevent="modifierModalActeEffetFinancierLocal"
                        class="btn btn-primary"
                        href="#"

                >Modifier</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
        </div>
</div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex';
import { formatageSomme } from '../../../../../src/Repositories/Repository';
export default {

    data(){
        return{

            editActeEffetFinancier:""

        }
    },

    props:["macheid"],

    created(){

    },
    computed:{
       ...mapGetters("bienService", [ "gettersCotationPersonnaliser","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots",
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
   
   
   afficherEntrepriseRecep () {
                return id => {
                    if (id != "") {
                        // console.log("Marche lettre inviation marche")
                        return this.gettersCotationPersonnaliser.filter(idmarche => idmarche.marche_id == id)
                     }
             }
            },

            
nombreDejourCalcule(){
                let vM=this;
    const acteAffet = vM.formEffetFinancier
    if(acteAffet.date_odre_service == acteAffet.date_fin_exe &&  acteAffet.date_fin_exe !=="" && acteAffet.date_odre_service !=="") return 1
     if(acteAffet.date_fin_exe =="" && acteAffet.date_odre_service =="") return null

       var dateF = new Date(acteAffet.date_fin_exe).getTime()
        var dateO = new Date(acteAffet.date_odre_service).getTime()
           var resultat = dateF - dateO

             var diffJour =  resultat / (1000 * 3600 * 24)

               if(isNaN(diffJour)) return null

               if(parseFloat(diffJour) < 0 ) return "durée invalide"
    vM.formEffetFinancier.duree=diffJour
                  return  diffJour;
   
},

            getDateFinExécutionValue(){
    return !this.formEffetFinancier.date_odre_service !=""
},
    },

    methods:{
         ...mapActions('bienService',['supprimerActeEffetFinancier',
          'ajouterActeEffetFinancier','modifierActeEffetFinancier', 'modifierMarche']),

              


            afficherModalModifierActeEffetFinancier(index){
    this.$('#modifierActeEF').modal({
        backdrop: 'static',
        keyboard: false
    });
    this.editActeEffetFinancier = this.acteEffetFinanciers.find(item=>item.id==index)
}, 

modifierModalActeEffetFinancierLocal(){

   // this.editActeEffetFinancier.entreprise_id=entreprise_id



    this.modifierActeEffetFinancier(this.editActeEffetFinancier)
    this.$('#modifierActeEF').modal('hide');
},

formatageSomme:formatageSomme,
    }
    
}
</script>

