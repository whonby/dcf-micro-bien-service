
<template>
  
  

    <!-- Default Light Table -->
    <div class="container-fluid">
        <div id="decisionCfEngagement" class="modal hide tailgrand">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>CHANGE REGIME D'IMPOSITION ET FORME JURIDIQUE</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
            <td>
              <div class="control-group">
                            <label class="control-label">Date de création</label>
                            <div class="controls">
                             <input type="date" class="span4"  v-model="formData.datecreation"/>
                           
                            </div>
                          </div>
            </td>
            <td>
                    <div class="control-group">
                            <label class="control-label">Date debut activité </label>
                            <div class="controls">
                              <input type="date" class="span4"  v-model="formData.dateactivite"/>
                            
                            </div>
                          </div>
                 </td>
          </tr>
           
               <tr>
                 <td>
                    <div class="control-group">
                            <label class="control-label">Regime d'imposition </label>
                            <div class="controls">
                               <select v-model="formData.regime_impossition" class="span4">
                                                             <option></option>
                                                            <option v-for="item in getterregimeImpositions" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>
                                                        </select>
                            
                            </div>
                          </div>
                 </td>
                  <td>
                               <div class="control-group">
                            <label class="control-label">Forme juridique</label>
                            <div class="controls">
                            <select v-model="formData.forme_juridique" class="span4">
                                                           <option></option>
                                                            <option v-for="item in getterformeJuridique" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>
                                                        </select>
                            </div>
                          </div>
                           </td>
                 </tr>            
                   <tr>
                     <td>
                               <div class="control-group">
                            <label class="control-label">piece joint</label>
                            <div class="controls">
                              <input type="file" class="span4" />
                               <!-- <input type="hidden" class="span4"  :value="recuperer"/> -->
                              
                            </div>
                          </div>
                           </td>
                           <td>
                               <div class="control-group">
                            <label class="control-label">Date modification</label>
                            <div class="controls">
                              <input type="date" class="span4"  v-model="formData.date_modification"/>
                               <!-- <input type="hidden" class="span"  :value="recuperer"/> -->
                              
                            </div>
                          </div>
                           </td> 
                       </tr>      
                        
                         
                           
         
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterTitreLocal()"
          class="btn btn-primary"
          href="#"
         
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div> 
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
                                       
                                 <download-excel
                                     class="btn btn-success pull-right"
                                     style="cursor:pointer;"
                                       :fields = "json_fields"
                                       title="Liste des entreprises non sanctionner "
                                       name ="Liste des entreprises non sanctionner"
                                       worksheet = "entreprise non sanctionner"
                                     :data="entrepriseNonSentionner">
             <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>
                                          </download-excel> 
                <div  align="right" style="cursor:pointer;">
    <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
        </div> 
                             
                                     </div>
                                <div class="widget-box">
                                    <!-- <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                                        <h5>Toute les entreprises non sanctionner</h5>
                                        <div align="right">
                                            Search: <input type="text" v-model="search1">
                                        </div>

                                    </div> -->
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
                                    <div class="widget-content nopadding"><table class="table table-bordered table-striped " id="natures_sections">
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
                                        <tr class="odd gradeX" v-for="(item,index) in entrepriseNonSentionner" :key="item.id">
                                             <td @dblclick="afficherModalModifierTitre(item.id)">{{item.numero_idu || 'Non renseigné'}}</td>
                                            <td @dblclick="afficherModalModifierTitre(item.id)">{{item.raison_sociale || 'Non renseigné'}}</td>
                                            <td @dblclick="afficherModalModifierTitre(item.id)">{{item.numero_cc || 'Non renseigné'}}</td>
                                            <td @dblclick="afficherModalModifierTitre(item.id)">{{item.numero_rc || 'Non renseigné'}}</td>
                                            <td @dblclick="afficherModalModifierTitre(item.id)">{{getSecteurActivite(item.secteur_activite_id) || 'Non renseigné'}}</td>
                                             <td @dblclick="afficherModalModifierTitre(item.id)">{{getPays(item.pays )|| 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{getVille(item.ville) || 'Non renseigné'}}</td>
                                            <td @dblclick="afficherModalModifierTitre(item.id)">{{item.email || 'Non renseigné'}}</td>
                                            <td @dblclick="afficherModalModifierTitre(item.id)">{{item.telephone || 'Non renseigné'}}</td>
                                            <!-- <td @dblclick="afficherModalModifierTitre(item.id)">{{item.banque || 'Non renseigné'}}</td> -->
                                           <td v-if="item.active == 1" style="color:#006400;text-align:center;font-size:14px;font-weight: bold;">ENS</td>
                                                 
                                            <td>
                                                <div class="btn-group">
                                                   
                                                    <button @click="afficheModalDecision(index)"  class="btn btn-danger ">
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

    <div class="pagination alternate">
        <ul>
          <li :class="{ disabled : page == 0 }"><a @click.prevent="precedent()" href="#">Précedent</a></li>
             <li  v-for="(titre, index) in partition(entrepriseNonSentionner,size).length" :key="index" :class="{ active : active_el == index }">
             <a @click.prevent="getDataPaginate(index)" href="#">{{index + 1}}</a></li>
          <li :class="{ disabled : page == partition(entrepriseNonSentionner,size).length -1 }"><a @click.prevent="suivant()" href="#">Suivant</a></li>
        </ul>
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
 import {partition} from '../../../../src/Repositories/Repository'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
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
    doc.text(115,10,"LISTE DES ENTREPRISES A CHANGE D'IMPOSITION")
      doc.autoTable({ html: '#natures_sections' })
//   doc.autoTable(this.getColumns(),data)
// doc.save('entreprise.pdf')
 doc.output('save','Liste des entreprises.pdf');
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
      {title: "PAYS", dataKey: "pays"},
      {title: "VILLE", dataKey: "ville"},
   {title: "EMAIL", dataKey: "email"}, 
    {title: "TELEPHONE", dataKey: "telephone"}, 
       
      
      
      
      




    ]
   
},



   afficheModalDecision(index) {
      this.$("#decisionCfEngagement").modal({
        backdrop: "static",
        keyboard: false
      });
this.formData = this.entrepriseNonSentionner[index];
      
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