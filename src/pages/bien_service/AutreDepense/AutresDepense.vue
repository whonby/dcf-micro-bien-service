
<template>
  <div>
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide taillemodal">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Autres Dépense</h3>
      </div>
      <div class="modal-body">
       <table class="table table-bordered table-striped">
         <tr>
           <td colspan="12">
            <div class="control-group">
              <label class="control-label">Objet de la Depense</label>
              <div class="controls">
                <textarea
                required
                style="border:1px solid #000"
                  v-model="formData.objet"
                  class="span12"
                  rows="2"
                  placeholder="Saisir le texte"
                ></textarea>
              </div>
              
            </div>
          </td>
        
         </tr>
      
       </table>
      </div>
      <div class="modal-footer">
        <button
          @click.prevent="ajouterTypeTexteLocal()"
          class="btn btn-primary"
          href="#"
        v-if="formData.objet.length !=0"
        >Valider</button>
        <button data-dismiss="modal" class="btn" href="#">Fermer</button>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->

    <!--///////////////////////////////////////// debut modal de modification //////////////////////////////-->

    <div id="modificationModal" class="modal hide taillemodal">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier Autres Depense</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
         <tr>
           <td colspan="12">
            <div class="control-group">
              <label class="control-label">Objet de la Depense</label>
              <div class="controls">
                <textarea
                style="border:1px solid #000"
                  v-model="editTypeTexte.objet"
                  class="span12"
                  rows="2"
                  placeholder="Saisir le texte"
                ></textarea>
              </div>
              
            </div>
          </td>
        
         </tr>
      
       </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierTypeTexteLocal()"
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
           <!-- <download-excel
            class="btn btn-success pull-right"
            style="cursor:pointer;"
            :fields="json_fields"
            title="Liste autre depense"
            :data=" filtre_type_teste"
            name="Liste autre depense"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel>  -->
       <div align="right" style="cursor:pointer;">
         <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
       </div> 
          </div>
          <!-- <download-excel
            class="btn btn-default pull-right"
            style="cursor:pointer;"
            :fields="json_fields"
            title="Liste type texte"
            :data="filtre_type_teste"
            name="Liste type texte"
            worksheet="Liste type texte"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel> -->
             <table>
                <tr>
                    <h5 style="font-size:20px;text-transform: uppercase; text-align:center;text-decoration: underline;">
                        Listes des autres depenses
                      </h5>
                </tr>
            </table> 
            <div align="right" style="cursor:pointer;">
              <button class="btn btn-success" @click.prevent="afficherModalAjouterTitre()" >
                 AJOUTER UNE AUTRE DEPENSE
                </button>
            </div> 
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5> Listes des autres depenses</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search" placeholder="Saisie code ou libelle" v-model="search" />
              </div> -->
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <!-- <th>Année</th>
                    <th>Référence</th> -->
                    <th style="width:85%">Objet</th>
                     
                    <!-- <th>Bénéficiaire</th>
                    <th>Compte</th>
                     <th>Montant</th>
                    
                    <th>Date</th> -->
                    <th colspan="2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(type) in gettersDossierAutreDepense" :key="type.id">
                     <!-- <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{type.exercice || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{type.reference || 'Non renseigné'}}</td> -->
                    <td
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{conversionMajiscule(type.objet) || 'Non renseigné'}}</td>
                     <!-- <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{type.beneficiaire || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{type.compte_bancaire || 'Non renseigné'}}</td>
                     <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{formatageSomme(parseFloat(type.montant)) || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{type.date || 'Non renseigné'}}</td>-->

                    <td> 
                      <button class="btn btn-info" @click="afficherModalModifierTypeTexte(type.id)">
                        <span class=""><i class=" icon-edit"></i>   Modifier</span>
                      </button>
                    </td>
                    <td> 
                      <button class="btn btn-danger" @click="supprimerDossierAutreDepense(type.id)">
                        <span class=""><i class=" icon-trash"></i>   Supprimer</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <fab :actions="fabActions" @cache="afficherModalAjouterTitre" main-icon="apps" bg-color="green"></fab>
    <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterTitre()">Open</button>
<button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button> -->
<notifications  />
    <!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import { formatageSomme } from "@/Repositories/Repository";
import jsPDF from 'jspdf'
import 'jspdf-autotable'
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
      json_fields: {
        CODE: "code",
        LIBELLE: "libelle"
      },
      formData: {
        
      },
      editTypeTexte: {
        
      },
      search: ""
    };
  },

  computed: {
    ...mapGetters("bienService", ["gettersDossierAutreDepense"]),
    ...mapGetters("parametreGenerauxAdministratif", [
      "taux",
      "sections",
      "type_Unite_admins",
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "afficheNiveauPlanProg",
      "exercices_budgetaires",
      "afficheLocalisationGeoNiveau5"
    ]),
      conversionMajiscule() {
      return (libelle) => {
        if (!libelle) return null;
        return libelle.toLocaleUpperCase();
      };
    },
    filtre_type_teste() {
      const st = this.search.toLowerCase();
      return this.gettersDossierAutreDepense.filter(type => {
        return (
          type.reference.toLowerCase().includes(st) ||
          type.objet.toLowerCase().includes(st)
        );
      });
    },
    anneeAmort() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },
  },
  methods: {
    ...mapActions("bienService", [
      "ajouterDossierAutreDepense",
      "modifierDossierAutreDepense",
      "supprimerDossierAutreDepense",
     
     
    ]),
    //afiicher modal ajouter
    afficherModalAjouterTitre() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterTypeTexteLocal() {
      var objetNouvel={
        ...this.formData,
        exercice:this.anneeAmort
      }
      this.ajouterDossierAutreDepense(objetNouvel);

      this.formData = {
       
        objet: "",
      
      };
    },
    // afficher modal de modification
    afficherModalModifierTypeTexte(id) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

     
      this.editTypeTexte = this.gettersDossierAutreDepense.find(item=>item.id==id);
    },
    formatageSomme:formatageSomme,
    // fonction pour vider l'input modification
    modifierTypeTexteLocal() {
      this.modifierDossierAutreDepense(this.editTypeTexte);
this.$("#modificationModal").modal('hide');
      // this.editTypeTexte = {
      //   code: "",
      //   libelle: ""
      // };
       
    },
    alert() {
      console.log("ok");
    },
    
ExporterEnExel(){
      this.$refs.excel.click()
    },
    genererEnPdf(){
  var doc = new jsPDF()
  // doc.autoTable({ html: this.natures_sections })
   var data = this.gettersDossierAutreDepense;
   doc.setFontSize(8)
    doc.text(75,10,"LISTE DES AUTRES DEPENSES")
  doc.autoTable(this.getColumns(),data)
doc.save('Autres depenses.pdf')
doc.output('save','Autres depenses.pdf');
doc.output('dataurlnewwindow');
return 0
},
getColumns() {
    return [
        
        {title: "OBJET", dataKey: "objet"}, 
    ];
},
  }
};
</script>

<style scoped>
.taillemodal {
  width: 53%;
  margin: 0 -30%;
}

</style>
