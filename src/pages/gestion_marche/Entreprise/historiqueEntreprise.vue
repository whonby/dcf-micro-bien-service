
<template>
  
  

    <!-- Default Light Table -->
    <div class="container-fluid">
     
      <hr />
          <div class="row-fluid" style="margin: 0px !important;">
                            <div class="span12">
                                 <div>

                                        <!-- <download-excel
                                            class="btn btn-success pull-right"
                                            style="cursor:pointer;"
                                              :fields = "json_fields"
                                              title="Liste des entreprises non sanctionner "
                                              name ="Liste des entreprises non sanctionner"
                                              worksheet = "entreprise non sanctionner"
                                            :data="S">
                    <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel>  -->
                       <!-- <div  align="right" style="cursor:pointer;">
           <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
               </div>  -->
                                             <!-- <download-excel
                                  class="btn btn-success pull-right"
                                  style="cursor:pointer;"
                                    :fields = "json_fields"
                                    title="Liste des entreprises non sanctionner "
                                    name ="Liste des entreprises non sanctionner"
                                    worksheet = "entreprise non sanctionner"
                                  :data="filtre_type_teste">
          <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>
                                       </download-excel>  -->
             <div  align="right" style="cursor:pointer;">
 <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
     </div> 


                                     </div>
                                     <!-- <div align="right">
                                             <button v-show="selection.length>0" @click.prevent="supprimerToutHistoriqueEntreprise(id)" title="Supprimer un" class="btn btn-danger ">
                                                            <span class="">Supprimer tout</span></button>
                                        </div> -->
                                <div class="widget-box">
                                  
                                   
                                    <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                                        <h5>Toutes les entreprises non sanctionnées</h5>
                                        <div align="right">
                                            Recherche: <input type="text" v-model="search">
                                        </div>


                                    </div>
                                           <div class="span4">
                                        <br>
                                    Afficher
                                    <select name="pets" id="pet-select" v-model="size" class="span3">
                                        <option value="10">10</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                    </select>
                                    Entrer
                                </div>
                                     <!-- <div class="span4">
                                        <br>
                                    Afficher
                                    <select name="pets" id="pet-select" v-model="size" class="span3">
                                        <option value="10">10</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                    </select>
                                    Entrer
                                </div> -->
                                    <div class="widget-content nopadding"><table class="table table-bordered table-striped">
                                        <thead>
                                        <tr>
                                          <!-- <th>
              <input type="checkbox" v-model="selectAll" @click="select" />
              
            </th> -->
                                            <th>IDU</th>
                                            <th>Raison Sociale</th>
                                            <th>Compte Contribuable</th>
                                            <th>Registre de commerce </th>
                                            <th>Secteur d'activité</th>
                                            <th>Date de création</th>
                                            <th>Date d'activité</th>
                                            <th>Régime d'impossition</th>
                                            <th>Forme Juridique</th>
                                            <th>Statut</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr class="odd gradeX" v-for="item in partition(filtre_type_teste,size)[page]" :key="item.id">
                                             <td @dblclick="afficherModalModifierTitre(item.id)">{{item.numero_idu || 'Non renseigné'}}</td>
                                            <td @dblclick="afficherModalModifierTitre(item.id)">{{item.raison_sociale || 'Non renseigné'}}</td>
                                            <td @dblclick="afficherModalModifierTitre(item.id)">{{item.numero_cc || 'Non renseigné'}}</td>
                                            <td @dblclick="afficherModalModifierTitre(item.id)">{{item.numero_rc || 'Non renseigné'}}</td>
                                            <td @dblclick="afficherModalModifierTitre(item.id)">{{getSecteurActivite(item.secteur_activite_id) || 'Non renseigné'}}</td>
                                             <td @dblclick="afficherModalModifierTitre(item.id)">{{item.datecreation|| 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.dateactivite || 'Non renseigné'}}</td>
                                            <td @dblclick="afficherModalModifierTitre(item.id)">{{afficheRegimeImposition(item.regime_impossition) || 'Non renseigné'}}</td>
                                            <td @dblclick="afficherModalModifierTitre(item.id)">{{afficheFormeJuridique(item.forme_juridique) || 'Non renseigné'}}</td>
                                            <!-- <td @dblclick="afficherModalModifierTitre(item.id)">{{item.banque || 'Non renseigné'}}</td> -->
                                           <td v-if="item.active == 1" style="color:#006400;text-align:center;font-size:14px;font-weight: bold;">ENS</td>
                                                  <td v-else  style="color:#FF0000;text-align:center;font-size:14px;font-weight: bold;">ES</td>  
                                            <td>
                                               
                                                        <button  @click.prevent="supprimerHistoriqueEntreprise(item.id)" title="Supprimer un" class="btn btn-danger ">
                                                            <span class=""><i class="icon-trash"></i></span></button>
                                                      
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
           <div class="pagination alternate">
     <ul>
       <li :class="{ disabled : page == 0 }"><a @click.prevent="precedent()" href="#">Précedent</a></li>
          <li  v-for="(titre, index) in partition(filtre_type_teste,size).length" :key="index" :class="{ active : active_el == index }">
          <a @click.prevent="getDataPaginate(index)" href="#">{{index + 1}}</a></li>
       <li :class="{ disabled : page == partition(filtre_type_teste,size).length -1 }"><a @click.prevent="suivant()" href="#">Suivant</a></li>
     </ul>
  </div>




                            </div>
                        </div>
    </div>

   
 
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
 import {partition} from '../../../../src/Repositories/Repository'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
// import {admin,dcf} from '../../../Repositories/Auth';
export default {
  name:'typetext',
  data() {
    return {
          page:0,
       size:10,
       active_el:0,
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
      
      editEntrepriseNonSantionner:{},
      search: "",
      name: null,
      selectAll: false,
      selection: [],
    };
  },
  
  
  computed: {
  ...mapGetters('gestionMarche', ['getterHistoriqueEntreprise',"secteur_activites","sanctions"]),
            ...mapGetters("bienService", ['villes','pays']),
            ...mapGetters("parametreGenerauxAdministratif", ["getterformeJuridique","getterregimeImpositions","getterplan_pays"]),
//   entrepriseNonSentionner(){
//       return this.entreprises.filter(items=>items.active==1)
//   },
 
afficheNomUtilisateur(){
  let objLinea = localStorage.getItem("Users");
let objJson = JSON.parse(objLinea);
return objJson.name

},



    filtre_type_teste() {
      const st = this.search.toLowerCase();
      return this.getterHistoriqueEntreprise.filter(type => {
        return (
          type.raison_sociale.toLowerCase().includes(st)
        );
      });
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
       afficheFormeJuridique() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterformeJuridique.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    afficheRegimeImposition() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterregimeImpositions.find(qtreel => qtreel.id == id);

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

     ...mapActions('gestionMarche', ['getEntreprise',"ajouterEntreprise","supprimerHistoriqueEntreprise","modifierEntreprise","ajouterHistoriqueEntreprise","supprimerToutHistoriqueEntreprise"]),
  
  select() {
      this.selection = [];

      if ((this.selectAll = !this.selectAll)) {
        for (let index in this.filtre_type_teste) {
          this.selection.push(this.filtre_type_teste[index].id);
        }
      }
    },
   
  
  
     ...mapActions('gestionMarche', ['getEntreprise',"ajouterEntreprise","supprimerHistoriqueEntreprise","modifierEntreprise","ajouterHistoriqueEntreprise"]),


                   // pagination
   partition:partition,
      getDataPaginate(index){
         this.active_el = index;
         this.page=index
     },
     precedent(){
         this.active_el--
         this.page --
     },
     suivant(){
         this.active_el++
         this.page ++
     },




               // exportation en pdf
         genererEnPdf(){
  var doc = new jsPDF('landscape')
  // doc.autoTable({ html: this.natures_sections })
  //  var data = this.entrepriseNonSentionner;
    doc.setFontSize(8)
    doc.text(115,10,"LISTE DES ENTREPRISES NON SANCTIONNEES")
      doc.autoTable({ html: '#natures_sections' })
//   doc.autoTable(this.getColumns(),data)
// doc.save('entreprise.pdf')
 doc.output('save','Liste des entreprises non sanctionner.pdf');
 doc.output('dataurlnewwindow');
return 0
},
getColumns() {
    return [
        
         {title: "N°.IDU", dataKey: "numero_idu"},
   {title: "R.SOCIALE", dataKey: "raison_sociale"},
    {title: "N°.CC", dataKey: "numero_cc"},
     {title: "N°.RC", dataKey: "numero_rc"},
      {title: "SECTEUR ACTIVITE", dataKey: "secteur_activite"},
      {title: "DATE DE CREATION", dataKey: "datecreation"},
      {title: "DATE ACTIVITE", dataKey: "dateactivite"},
   {title: "REGIME IMPOSITION", dataKey: "regime_impossition"}, 
    {title: "FORME JURIDIQUE", dataKey: "forme_juridique"}, 
       
                    

    ]
   
},




   afficheModalDecision(id) {

      this.$("#decisionCfEngagement").modal({
        backdrop: "static",
        keyboard: false
      });

       this.editEntrepriseNonSantionner = this.entrepriseNonSentionner.find(item=>item.id==id);
    },
  // afficherToutSupprimer(id) {
     

  //     this.supprimerToutHistoriqueEntreprise({id:this.selection});
  //   },
  },
 
   

};
</script>

<style  scoped>
.tailgrand{
  width: 50%;
  margin: 0 -25%;
}
</style>