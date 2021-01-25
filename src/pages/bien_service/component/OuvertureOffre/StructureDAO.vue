


<template>
    <div>
<!--        <div align="right">-->

<!--            <a href="#ajouterCojoB" data-toggle="modal" class="btn btn-primary">Ajouter</a>-->
<!--        </div>-->

        <table class="table table-bordered table-striped" v-if="macheid">
            <thead>
            <tr>
                <th>Nom structure DAO</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <tr class="odd gradeX" v-for="appelOffre in listeStructure(macheid)" :key="appelOffre.id">
                <td @click="afficheBouttonTechCojo(appelOffre.id)">
                    {{libelleUa(appelOffre.ua_id) || 'Non renseigné'}}
                </td>
                <td>
                    <div class="btn-group">
                        <button @click.prevent="supprimerStructureDAO(appelOffre.id)"  class="btn btn-danger " title="Supprimer">
                            <span class=""><i class="icon-trash">Supprimer</i></span>
                        </button>
                    </div>
                </td>

            </tr>
            </tbody>
        </table>



        <!-- add formulaire cojo -->
<!--        <div id="ajouterCojoB" class="modal hide grdtaill">-->
<!--            <div class="modal-header">-->
<!--                <button data-dismiss="modal" class="close" type="button">×</button>-->
<!--                <h3>Ajouter COJO</h3>-->
<!--            </div>-->
<!--            <div class="modal-body">-->
<!--                <form class="form-horizontal">-->

<!--                    <div class="control-group">-->
<!--                        <label class="control-label">Référence DAO</label>-->
<!--                        <div class="controls">-->
<!--                            &lt;!&ndash; <select v-model="formDataCojo.cotation_id" class="span" disabled>-->
<!--                                <option v-for="plans in listeAppelOffre(macheid)" :key="plans.id"-->
<!--                                        :value="plans.id">{{plans.ref_offre}}</option>-->
<!--                            </select> &ndash;&gt;-->
<!--                            <input-->
<!--                                    type="text"-->
<!--                                    :value="affichierReferenceAppelOffre(macheid)"-->
<!--                                    class="span"-->
<!--                                    readonly-->
<!--                            />-->

<!--                        </div>-->
<!--                    </div>-->

<!--                    &lt;!&ndash; <div class="control-group">-->
<!--                        <label class="control-label">Destinataire.</label>-->
<!--                        <div class="controls">-->
<!--                          <select v-model="formDataCojo.lettre_invitation_id" class="span">-->
<!--                                <option v-for="varText in afficherEntrepriseRecep(macheid)" :key="varText.id"-->
<!--                                        :value="varText.objetEntreprise.id">{{varText.objetEntreprise.raison_sociale}}</option>-->
<!--                            </select>-->

<!--                        </div>-->
<!--                    </div> &ndash;&gt;-->

<!--                    <div class="control-group">-->
<!--                        <label class="control-label">Date éffective d'ouverture</label>-->
<!--                        <div class="controls">-->
<!--                            <input-->
<!--                                    type="date"-->
<!--                                    v-model="formDataCojo.date_ouverture"-->
<!--                                    class="span"-->

<!--                            />-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    &lt;!&ndash; <div class="control-group">-->
<!--                          <label class="control-label">Controleur finnancier</label>-->
<!--                        <div class="controls">-->
<!--                            <input disabled-->
<!--                                    type="text"-->
<!--                                    v-model="formDataCojo.controleur_finnancier"-->
<!--                                    class="span"-->
<!--                                    placeholder="Controller Finnancier"-->
<!--                            />-->
<!--                        </div>-->
<!--                    </div> &ndash;&gt;-->
<!--                    &lt;!&ndash; <div class="control-group">-->
<!--                         <label class="control-label">Condition</label>-->
<!--                         <div class="controls">-->
<!--                             <select v-model="formDataCojo.condition_id" class="span">-->
<!--                                 <option v-for="plans in conditions" :key="plans.id"-->
<!--                                         :value="plans.id">{{plans.libelle}}</option>-->
<!--                             </select>-->
<!--                         </div>-->
<!--                     </div>&ndash;&gt;-->


<!--                    <div class="control-group">-->
<!--                        <label class="control-label">Date de composition</label>-->
<!--                        <div class="controls">-->
<!--                            <input-->
<!--                                    type="date"-->
<!--                                    v-model="formDataCojo.date_composition"-->
<!--                                    class="span"-->

<!--                            />-->
<!--                        </div>-->
<!--                    </div>-->




<!--                    <div class="control-group">-->
<!--                        <label class="control-label">Nombre de participants</label>-->
<!--                        <div class="controls">-->
<!--                            <input-->
<!--                                    type="text"-->
<!--                                    v-model="formDataCojo.nbr_participant"-->
<!--                                    class="span"-->
<!--                            />-->
<!--                            <input type="hidden" v-model="formDataCojo.difference_personnel_bienService"/>-->
<!--                        </div>-->
<!--                    </div>-->


<!--                </form>-->
<!--            </div>-->
<!--            <div class="modal-footer">-->
<!--                <a data-dismiss="modal" class="btn btn-primary" @click.prevent="ajouterCojoMarche()" href="#">Valider</a>-->
<!--                <a data-dismiss="modal" class="btn" href="#">Cancel</a> </div>-->
<!--        </div>-->

        <!-- end formulaire cojo  -->

        <!-- bigin modifie cojo  -->
        <div id="modificationStructure" class="modal hide grdtaill">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modification de STRUCTURE</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">


                    <div class="control-group">
                        <label class="control-label">Nom structure</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="edite_cojo.nom_structure"
                                    class="span"

                            />
                        </div>
                    </div>

                </form>
            </div>
            <div class="modal-footer">
                <a data-dismiss="modal" class="btn btn-primary" @click.prevent="modificationCojo()" href="#">Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Cancel</a> </div>
        </div>
        <!-- end modifier cojo -->
        <notifications/>
    </div>

</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import moment from "moment";

    export default {
        name: "StructureDAO",
        props:["macheid"],
        data(){
            return{

                formDataCojo:{

                },

                edite_cojo:"",
            }
        },
        created(){
            //console.log(this.getterStructureDao.filter(idmarche => idmarche.marche_id == this.macheid))
        },

        computed:{
            ...mapGetters('bienService',['getterStructureDao',"gettersOuverturePersonnaliser",
                'gettersCotations','appelOffres',
                'gettersCojoPersonnaliser','gettersCotationPersonnaliser']),

            ...mapGetters('personnelUA', ['acteur_depenses']),
            ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises']),
            ...mapGetters("uniteadministrative", [
                "acteCreations",
                "typeTextes",
                "uniteAdministratives",
                "getterBudgeCharge",
                "decomptefactures"
            ]),
            listeStructure() {
                return macheid => {
                    if (macheid != "") {

                        return  this.getterStructureDao.filter(idmarche => idmarche.marche_id == macheid)
                    }
                    return []
                }
            },
            libelleUa(){
                return ua_id=>{
                    let objet=this.uniteAdministratives.find(item=>item.id==ua_id)
                    if(objet!=undefined){
                        return objet.libelle
                    }
                    return ""
                }
            }





        },
        methods:{
            ...mapActions('bienService',['supprimerCojo',
                'ajouterCojo', 'modifierCojo',"supprimerStructureDAO"]),

            modificationCojo(){

                this.modifierCojo(this.edite_cojo)
                this.$('#modificationStructure').modal('hide');
            },
            afficheBouttonTechCojo(index){
                this.$('#modificationStructure').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.edite_cojo = this.getterStructureDao.find(item=>item.id==index);

                //this.edite_lot.appel_offre_id=this.edite_lot. modifierDemandeAno
            },
            formaterDate(date){
                return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            }
        }
    }
</script>

<style scoped>

</style>