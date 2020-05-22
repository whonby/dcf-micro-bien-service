
<template>
  <div>
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">x</button>
        <h3>Ajouter Pays</h3>
      </div>
      <div class="modal-body">
       <form class="form-horizontal">
          <div class="control-group">
            <label class="control-label">libelle</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.libelle"
                class="span"
                placeholder="Saisir le libelle"
              />
            </div>
          </div>
          
         
         </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterTypeAppelLocal(formData)"
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
        <button data-dismiss="modal" class="close" type="button">x</button>
        <h3>Modifier Pays</h3>
      </div>
      <div class="modal-body">
         <form class="form-horizontal">
          <div class="control-group">
            <label class="control-label">libelle</label>
            <div class="controls">
              <input
                type="text"
                v-model="editTypeAppel.libelle"
                class="span"
                placeholder="Saisir le libelle"
              />
            </div>
          </div>
         
         </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierTypeAppelLocal(editTypeAppel)"
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
                                              :fields = "json_fields"
                                              title="Liste  des pays "
                                              name ="Liste  des pays"
                                              worksheet = "pays"
                                            :data="filtre_equipement">
                                 <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel> 
                      <div  align="right" style="cursor:pointer;">
           <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
               </div>
                                                 <br/>
          </div>
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Listes des pays</h5>
              <div align="right">
                Search:
                <input type="search" placeholder v-model="search" />
              </div>
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th width="90%">libelle</th>
                   
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(typeappel, index) in 
                filtre_equipement"
                 :key="typeappel.id">

                 <td @dblclick="afficherModalModifierFamille(index)">
                      {{typeappel.libelle || 'Non renseigné'}}</td>
                 
                   
                  <td>



              <div class="btn-group">
              <button @click.prevent="supprimerPays(typeappel.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i></span></button>
             
            </div>

                  </td>
                </tr>
                </tbody>
              </table>
              
            </div>
          </div>
        </div>
      </div>
    </div>

    <fab :actions="fabActions" @cache="afficherModalAjouterTitre" main-icon="apps" bg-color="green"></fab>
 <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterTitre()">Open</button>
      <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
<!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
<notifications  />
  </div>
</template>
  
<script>
 import { mapGetters, mapActions } from "vuex";
 import jsPDF from 'jspdf'
import 'jspdf-autotable'
export default {
  name:'banque',
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

      json_fields: {

        'LIBELLE': "libelle"
      },

      formData: {
        
      },
      editTypeAppel: {
     
      },
      search: ""
    };
  },

  computed: {
     ...mapGetters("bienService", ['pays']),
    filtre_equipement() {
      const st = this.search.toLowerCase();
      return this.pays.filter(type => {
        return (
          
          type.libelle.toLowerCase().includes(st)
        );
      });
    }
  },
  methods: {
    ...mapActions("bienService", [
     "getPays",
     "ajouterPays",
     "modifierPays",
     "supprimerPays"
    ]),



    // exportation en pdf
         genererEnPdf(){
  var doc = new jsPDF()
  // doc.autoTable({ html: this.natures_sections })
   var data = this.pays;
    doc.text(98,10,"Liste des pays")
  doc.autoTable(this.getColumns(),data)
doc.save('pays.pdf')
return 0
},
getColumns() {
    return [
      
        {title: "LIBELLE", dataKey: "libelle"},
     
        
    ];
},
    //afiicher modal ajouter
    afficherModalAjouterTitre() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
     // fonction pour vider l'input
     ajouterTypeAppelLocal () {
     this.ajouterPays(this.formData)

        this.formData = {
             
            libelle: ""
            
         }
     },
    //fonction pour vider l'input ajouter
    
    //afficher modal de modification
    afficherModalModifierFamille(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editTypeAppel = this.pays[index];
    },
    // fonction pour vider l'input modification
    
    // alert() {
    //   console.log("ok");
    // },
    modifierTypeAppelLocal(){
  this.modifierPays(this.editTypeAppel)
  this.$('#modificationModal').modal('hide');
  // this.editPrestation = {
  //   libelle_prestation:"",
  //   libelle:"",
   
  // }
},
     ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>

