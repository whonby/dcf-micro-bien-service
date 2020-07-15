
<template>
  
  

    <!-- Default Light Table -->
    <div class="container-fluid">
  
          <div class="row-fluid" style="margin: 0px !important;">
                            <div class="span12">
                                 <div>

                                     </div>
                                <div class="widget-box">
                                  
                                    <div class="widget-content nopadding"><table class="table table-bordered table-striped">
                                        <thead>
                                        <tr>
                                            <th>IDU</th>
                                            <th>Raison social </th>
                                            <th>Compte contribuable</th>
                                            <th>Registe commerce </th>
                                            <th>Secteur activite</th>
                                            <th>Pays </th>
                                            <th>Ville</th>
                                            <th>Email </th>
                                            <th>Telephone</th>
                                            <th>Statut</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr class="odd gradeX" v-for="item in entrepriseNonSentionner" :key="item.id">
                                             <td>{{item.numero_idu || 'Non renseigné'}}</td>
                                            <td>{{item.raison_sociale || 'Non renseigné'}}</td>
                                            <td>{{item.numero_cc || 'Non renseigné'}}</td>
                                            <td>{{item.numero_rc || 'Non renseigné'}}</td>
                                            <td>{{getSecteurActivite(item.secteur_activite_id) || 'Non renseigné'}}</td>
                                             <td>{{getPays(item.pays )|| 'Non renseigné'}}</td>
                                                <td>{{getVille(item.ville) || 'Non renseigné'}}</td>
                                            <td>{{item.email || 'Non renseigné'}}</td>
                                            <td>{{item.telephone || 'Non renseigné'}}</td>
                                            <!-- <td @dblclick="afficherModalModifierTitre(item.id)">{{item.banque || 'Non renseigné'}}</td> -->
                                           <td v-if="item.active == 1" style="color:#006400;text-align:center;font-size:14px;font-weight: bold;">ENS</td>
                                                 
                                            <td>
                                                <div class="btn-group">
                                                   
                                                    <button @click="afficheModalDecision(item.id)"  class="btn btn-danger ">
                                                        <span class=""><i class="icon-folder-open"></i></span></button>
                                                </div>

                                            </td>
                                        </tr>
                                        <!-- <tr v-if="titreFiltres.length==0" align="right">
                                            <h6>Pas de donnée disponible</h6>
                                        </tr> -->
                                        </tbody>
                                    </table></div>
                                </div>
                                 <!-- <div class="pagination alternate">
                                <ul>
                                    <li :class="{ disabled : page == 0 }"><a @click.prevent="precedent()" href="#">Précedent</a></li>
                                    <li  v-for="(titre, index) in partition(S,size).length" :key="index" :class="{ active : active_el == index }">
                                    <a @click.prevent="getDataPaginate(index)" href="#">{{index + 1}}</a></li>
                                    <li :class="{ disabled : page == partition(S,size).length -1 }"><a @click.prevent="suivant()" href="#">Suivant</a></li>

                                </ul>
                            </div> -->
                            </div>
                        </div>
    </div>

   
 
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name:'typetext',
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
        // {
        //   name: "alertMe",
        //   icon: "add_alert",
        //   class: ""
        // }
      ],
      
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
      search: ""
    };
  },

  computed: {
  ...mapGetters('gestionMarche', ['entreprises',"secteur_activites","sanctions"]),
            ...mapGetters("bienService", ['villes','pays']),
            ...mapGetters("parametreGenerauxAdministratif", ["getterformeJuridique","getterregimeImpositions","getterplan_pays"]),
  entrepriseNonSentionner(){
      return this.entreprises.filter(items=>items.active==1)
  },
      getSecteurActivite() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.secteur_activites.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
     getPays() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterplan_pays.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
     getVille() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterplan_pays.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
   
  },
  methods: {
     ...mapActions('gestionMarche', ['getEntreprise',"ajouterEntreprise","supprimerEntreprise","modifierEntreprise","ajouterHistoriqueEntreprise"]),
   afficheModalDecision(index) {

                this.$router.push({ name: 'changeRegimeForme', params: { id: index } })
            
    },
    ajouterTitreLocal () {

      
                this.modifierEntreprise(this.formData)
                this.ajouterHistoriqueEntreprise(this.formData)
               
                this.getEntreprise()
                this.$("#decisionCfEngagement").modal('hide');
                
            },
  }
};
</script>


<style  scoped>
.tailgrand{
  width: 50%;
  margin: 0 -25%;
}
</style>