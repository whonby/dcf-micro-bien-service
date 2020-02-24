<template>
    <div>
        <!-- debut de liste analyse  -->
          <h4>Liste des dossiers analyses</h4>
                <table class="table table-bordered table-striped" v-if="macheid">
                    <thead>
                    <tr>
                        <th>Numero dossier</th>
                        <th>Dossier candidat </th>
                        <th>Date Analyse </th>
                        <th>Rang d'analyse</th>
                        <th>Note</th>
                        <th>Type d'analyse</th>
                        <th>Controller finnancier</th>
                        <!--<th>Avis</th>-->

                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="odd gradeX" v-for="(appelOffre, index) in listeAnalyseDossier(macheid)"
                        :key="appelOffre.id">
                        <td @click="afficheAnnalyseDossier(index)">
                            {{appelOffre.dossier_candidature.numero_dossier || 'Non renseigné'}}</td>
                        <td @click="afficheAnnalyseDossier(index)">
                            {{appelOffre.dossier_candidature.nom_cand || 'Non renseigné'}}</td>
                        <td @click="afficheAnnalyseDossier(index)">
                            {{formaterDate(appelOffre.date_analyse) || 'Non renseigné'}}</td>
                        <td @click="afficheAnnalyseDossier(index)">
                            {{appelOffre.rang_analyse || 'Non renseigné'}}</td>
                            <td @click="afficheAnnalyseDossier(index)">
                            {{appelOffre.note_analyse || 'Non renseigné'}}</td>
                        <td @click="afficheAnnalyseDossier(index)">
                            {{appelOffre.type_analyse.libelle || 'Non renseigné'}}</td>
                        <td @click="afficheAnnalyseDossier(index)">
                            {{appelOffre.cojo.controleur_finnancier || 'Non renseigné'}}</td>
                        <!--<td @click="afficheAnnalyseDossier(index)">
                            <button class="btn btn-info btn-mini" v-if="avisPv(appelOffre.reference_pv)==null">En attende</button>
                            <button class="btn btn-success btn-mini" v-else-if="avisPv(appelOffre.reference_pv)== 1">Non Objection</button>
                            <button class="btn btn-danger btn-mini" v-else>Objection</button>
                        </td>-->
                        <div class="btn-group">
                            <button @click.prevent="supprimerAnalyseDossier(appelOffre.id)"  class="btn btn-danger " title="Supprimer">
                                <span class=""><i class="icon-trash"></i></span></button>

                        </div>

                    </tr>
                    </tbody>
                </table>

        <!--fin de dossier analyse -->
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import moment from 'moment';
export default {
    data(){
        return{

        }
    },
    props:["macheid"],
    created(){

    },
    computed:{
        ...mapGetters('bienService'['getterAnalyseDossiers',
        'getterDossierCandidats','typeAnalyses','getterCojos', 'appelOffres']),
         // ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises']),

    },
    methods:{
        ...mapActions('bienService',['supprimerAnalyseDossier']),


         listeAnalyseDossier: function () {
            return macheid => {
                if (macheid != "") {

                    return this.getterAnalyseDossiers.filter(idmarche => idmarche.dossier_candidature.appel_offre.marche_id == macheid)
                }
            }
        },

         afficheAnnalyseDossier(index){
                this.$('#modificationAajouterAnalys01').modal({
                    backdrop: 'static',
                    keyboard: false
                });

                this.edite_analyse_dossier = this.listeAnalyseDossier(this.macheid)[index];
            },
// formatage de date 
formaterDate(date){
    return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");

},

    }
}
</script>