
<template>
  <div>
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide taillemodal">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Autres Depense</h3>
      </div>
      <div class="modal-body">
       <table class="table table-bordered table-striped">
         <tr>
            <td>
              <div class="control-group">
                <label class="control-label">Année</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   :value="anneeAmort"
                    class="span5"
                    readonly
                  />
                </div>
              </div>
              
            </td>
           <td>
              <div class="control-group">
                <label class="control-label">Référence</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formData.reference"
                    class="span5"
                    
                  />
                </div>
              </div>
              
            </td>
            
            <td colspan="">
              <div class="control-group">
                <label class="control-label">Bénéficiaire</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formData.beneficiaire"
                    class="span5"
                    
                  />
                </div>
              </div>
              
            </td>
         </tr>
         <tr>
           <td colspan="3">
              <div class="control-group">
                <label class="control-label">Objet</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formData.objet"
                    class="span12"
                    
                  />
                </div>
              </div>
              
            </td>
         </tr>
         <tr>
           <td>
              <div class="control-group">
                <label class="control-label">Montant</label>
                <div class="controls">
                  
                  <money v-model="formData.montant"   style="text-align:left;color:red"  class="span5"></money>
                </div>
              </div>
              
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Compte Bancaire</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formData.compte_bancaire"
                    class="span5"
                    
                  />
                </div>
              </div>
              
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Date</label>
                <div class="controls">
                  <input
                    type="date"
                    
                   v-model="formData.date"
                    class="span5"
                    
                  />
                </div>
              </div>
              
            </td>
         </tr>
       </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterTypeTexteLocal(formData)"
          class="btn btn-primary"
          href="#"
        
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
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
           <td>
              <div class="control-group">
                <label class="control-label">Année</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   :value="anneeAmort"
                    class="span5"
                    readonly
                  />
                </div>
              </div>
              
            </td>
           <td>
              <div class="control-group">
                <label class="control-label">Reférence</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="editTypeTexte.reference"
                    class="span5"
                    
                  />
                </div>
              </div>
              
            </td>
            
            <td colspan="">
              <div class="control-group">
                <label class="control-label">bénéficiaire</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="editTypeTexte.beneficiaire"
                    class="span5"
                    
                  />
                </div>
              </div>
              
            </td>
         </tr>
         <tr>
           <td colspan="3">
              <div class="control-group">
                <label class="control-label">Objet</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="editTypeTexte.objet"
                    class="span12"
                    
                  />
                </div>
              </div>
              
            </td>
         </tr>
         <tr>
           <td>
              <div class="control-group">
                <label class="control-label">Montant</label>
                <div class="controls">
                  
                  <money v-model="editTypeTexte.montant"   style="text-align:left;color:red"  class="span"></money>
                </div>
              </div>
              
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Compte</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="editTypeTexte.compte_bancaire"
                    class="span5"
                    
                  />
                </div>
              </div>
              
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Date</label>
                <div class="controls">
                  <input
                    type="date"
                    
                   v-model="editTypeTexte.date"
                    class="span5"
                    
                  />
                </div>
              </div>
              
            </td>
         </tr>
       </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierDossierAutreDepense(editTypeTexte)"
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
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Autres Depense</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search" placeholder="Saisie code ou libelle" v-model="search" />
              </div> -->
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Année</th>
                    <th>Référence</th>
                    <th>Objet</th>
                     
                    <th>Bénéficiaire</th>
                    <th>Compte</th>
                     <th>Montant</th>
                    
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(type, index) in filtre_type_teste" :key="type.id">
                     <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{type.exercice || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{type.reference || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{type.objet || 'Non renseigné'}}</td>
                     <td
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
                    >{{type.date || 'Non renseigné'}}</td>

                    <td>
                      <button class="btn btn-danger" @click="supprimerDossierAutreDepense(type.id)">
                        <span class="">
                          <i class=" icon-trash"></i>   Supprimer
                        </span>
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

    <fab :actions="fabActions" @cache="afficherModalAjouterTitre" main-icon="apps" bg-color="green"></fab>
    <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterTitre()">Open</button>
<button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
<notifications  />
    <!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import { formatageSomme } from "@/Repositories/Repository";
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
        reference: "",
        objet: "",
        date: "",
        beneficiaire: "",
        montant: "",
        compte_bancaire: ""
      };
    },
    // afficher modal de modification
    afficherModalModifierTypeTexte(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

     
      this.editTypeTexte = this.gettersDossierAutreDepense[index];
    },
    formatageSomme:formatageSomme,
    // fonction pour vider l'input modification
    modifierTypeTexteLocal() {
      this.modifierTypeTexte(this.editTypeTexte);
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
    }
  }
};
</script>

<style scoped>
.taillemodal {
  width: 75%;
  margin: 0 -38%;
}

</style>
