
<template>
  <div>
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter la Nature d'entrée</h3>
      </div>
      <div class="modal-body">
       <table class="table table-bordered table-striped">
         
            <tr>
               <td>
                <div class="control-group">
                  <label class="control-label">Libellé</label>
                  <div class="controls">
                    <input
                type="text"
                v-model="formData.libelle"
                class="span5"
                placeholder="Saisir le libellé"
              />
                  </div>
                </div>
              </td>
             </tr>
           </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterServiceLocal(formData)"
          class="btn btn-primary"
          href="#"
         
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->

    <!--///////////////////////////////////////// debut modal de modification //////////////////////////////-->

    <div id="modificationModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier Nature d'entrée</h3>
      </div>
      <div class="modal-body">
           <table class="table table-bordered table-striped">
         
            <tr>
               <td>
                <div class="control-group">
                  <label class="control-label">Libelle</label>
                  <div class="controls">
                    <input
                type="text"
                v-model="editService.libelle"
                class="span5"
                placeholder="Saisir le libelle"
              />
                  </div>
                </div>
              </td>
             </tr>
           </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierServiceLocal(editService)"
          class="btn btn-primary"
          href="#"
        
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal de modification //////////////////////////////-->
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <div>
           <download-excel
            class="btn btn-success pull-right"
            style="cursor:pointer;"
            :fields="json_fields"
            title="Liste des Natures d'entree"
            :data="filtre_service"
            name="Liste des Natures d'entree"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel>
         <div align="right" style="cursor:pointer;">
           <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
         </div> 
          </div> <br>

             <div align="right" style="cursor:pointer;">
           <button class="btn btn-success" @click.prevent="afficherModalAjouterService()">AJOUTER NATURE ENTREE</button>
          </div>
      <h3 align="center">Liste des Natures des entrées</h3>
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              
              <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search" />
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






            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                   
                    <th style="width:90%">Libellé</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="service in partition (filtre_service,size)[page]" :key="service.id" >
                   
                    <td
                      @dblclick="afficherModalModifierService(service.id)"
                    >{{service.libelle || 'Non renseigné'}}</td>

                      <div class="btn-group">
                         <td>
              
              <button  @click.prevent="afficherModalModifierService(service.id)"  class="btn btn-info " >
                <span class=""><i class="icon-edit"> Modifier</i></span></button>
             
                  </td>
                  <td>
              <button @click.prevent="supprimerNatureEntre(service.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i>Supprimer</span></button>
                </td>
            </div>

                    <!-- <td>
                      <button class="btn btn-danger" @click="supprimerNatureEntre(service.id)">
                        <span>
                          <i class="icon icon-trash"> Supprimer</i>
                        </span>
                      </button>
                    </td> -->
                  </tr>
                </tbody>
              </table>
              <div v-if="filtre_service.length"></div>
              <div v-else>
                <p style="text-align:center;font-size:20px;color:red;">Aucun</p>
              </div>
            </div>
          </div>

                    <div class="pagination alternate">
         <ul>
   <li :class="{ disabled : page == 0 }"><a @click.prevent="precedent()" href="#">Précedent</a></li>
  <li  v-for="(titre, index) in partition(filtre_service,size).length" :key="index" :class="{ active : active_el == index }">
    <a @click.prevent="getDataPaginate(index)" href="#">{{index + 1}}</a></li>
   <li :class="{ disabled : page == partition(filtre_service,size).length -1 }"><a @click.prevent="suivant()" href="#">Suivant</a></li>
  </ul>
 </div>



        </div>
      </div>
    </div>

    <!-- <fab :actions="fabActions" @cache="afficherModalAjouterService" main-icon="apps" bg-color="green"></fab> -->
     <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterService()">Open</button>
      <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
<notifications  />
 </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
 import {partition} from '../../../../src/Repositories/Repository'
   import jsPDF from 'jspdf'
 import 'jspdf-autotable'
export default {
 
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
json_fields: {
       
        
        LIBELLE: "libelle"
      },
      formData: {
        
        libelle: ""
      },
      editService: {
       
        libelle: ""
      },
      search: ""
    };
  },

  computed: {
    ...mapGetters("SuiviImmobilisation", ["natureEntres"]),
    filtre_service() {
      const st = this.search.toLowerCase();
      return this.natureEntres.filter(type => {
        return (
        
          type.libelle.toLowerCase().includes(st)
        );
      });
    }
  },
  methods: {
    ...mapActions("SuiviImmobilisation", [
    
      "ajouterNatureEntre",
      "modifierNatureEntre",
      "supprimerNatureEntre"
    ]),

   genererEnPdf(){
         var doc = new jsPDF()
        // doc.autoTable({ html: this.natures_sections })
        var data = this.filtre_service;
         doc.setFontSize(8)
        doc.text(75,10,"LISTE DES NATURES DES ENTREES")
        doc.autoTable(this.getColumns(),data)
       // doc.save('Type des actes de depenses.pdf')
      doc.output('save','Liste des Natures des entrées.pdf');
      doc.output('dataurlnewwindow');
     return 0
     },
getColumns() {
    return [
        {    title: "LIBELLE", dataKey: "libelle"},
       
    ];
},

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








    //afiicher modal ajouter
    afficherModalAjouterService() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterServiceLocal() {
      this.ajouterNatureEntre(this.formData);

      this.formData = {
       
        libelle: ""
      };
    },
    // afficher modal de modification
    afficherModalModifierService(id) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editService = this.natureEntres.find(item => item.id==id);
    },
    // fonction pour vider l'input modification
    modifierServiceLocal() {
      this.modifierNatureEntre(this.editService);
this.$("#modificationModal").modal('hide');
      // this.editService = {
      //   code: "",
      //   libelle: ""
      // };
    },
    alert() {
      console.log("ok");
    },

    ExporterEnExel(){
      this.$refs.excel.click()
    }
  },

  created(){
    console.log(this.$refs)
  }
};
</script>

