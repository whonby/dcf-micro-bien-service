
<template>
  <div>
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModalAvenant" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Avenant</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">
          <div class="control-group">
            <label class="control-label">Marché</label>
            <div class="controls">
              <select v-model="formData.marche_id">
                      <option
                        v-for="typeUniteA in getterActeEffetFinanciers"
                        :key="typeUniteA.id"
                        :value="typeUniteA.marche.id"
                      >{{typeUniteA.marche.numero_marche}}</option>
                    </select>
            </div>
            <div class="control-group">
            <label class="control-label">Objet</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.objet_avenant"
                class="span"
               
              />
            </div>
          </div>
          </div>
          <div class="control-group">
            <label class="control-label">Montant</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.montant_avenant"
                class="span"
               
              />
            </div>
          </div>
            <div class="control-group">
            <label class="control-label">Date d'avenant</label>
            <div class="controls">
              <input
                type="date"
                v-model="formData.date_avenant"
                class="span"
               
              />
            </div>
          </div>
            
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterTypeTexteLocal(formData)"
          class="btn btn-primary"
          href="#"
          v-show="formData.code.length && formData.libelle.length"
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->

    <!--///////////////////////////////////////// debut modal de modification //////////////////////////////-->

    <div id="modificationModalAvenant" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier Avenant</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">
          <div class="control-group">
            <label class="control-label">Marché</label>
            <div class="controls">
             <select v-model="editAvenant.marche_id">
                      <option
                        v-for="typeUniteA in getterActeEffetFinanciers"
                        :key="typeUniteA.id"
                        :value="typeUniteA.marche.id"
                      >{{typeUniteA.marche.numero_marche}}</option>
                    </select>
            </div>
             <div class="control-group">
            <label class="control-label">Objet</label>
            <div class="controls">
              <input
                type="text"
                v-model="editAvenant.objet_avenant"
                class="span"
               
              />
            </div>
          </div>
          </div>
          <div class="control-group">
            <label class="control-label">Montant</label>
            <div class="controls">
              <input
                type="text"
                v-model="editAvenant.montant_avenant"
                class="span"
               
              />
            </div>
          </div>
            <div class="control-group">
            <label class="control-label">Date avenant</label>
            <div class="controls">
              <input
                type="date"
                v-model="editAvenant.date_avenant"
                class="span"
               
              />
            </div>
          </div>
           
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierTypeTexteLocal(editAvenant)"
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
              <h5>Liste des avenants</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search" placeholder="Saisie code ou libelle" v-model="search" />
              </div> -->
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Marché</th>
                    <th>Montant Avenant</th>
                     <th>Date Avenant</th>
                    <th>Objet Avenant</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(type, index) in avenants" :key="type.id">
                    <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{type.marche_id || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{type.objet_avenant || 'Non renseigné'}}</td>
<td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{type.montant_avenant || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{type.date_avenant || 'Non renseigné'}}</td>
                    <td>
                      <button class="btn btn-danger" @click="supprimerTypeTexte(type.id)">
                       <span class=""><i class="icon-trash"> Supprimer </i></span></button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div v-if="filtre_type_teste.length"></div>
              <div v-else>
                <p style="text-align:center;font-size:20px;color:red;">Aucune Type de texte</p>
              </div>
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
export default {
  name:'avenant',
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
    //   json_fields: {
    //     CODE: "code",
    //     LIBELLE: "libelle"
    //   },
      formData: {
        
      },
      editAvenant: {
      
      },
      search: ""
    };
  },

  computed: {
    ...mapGetters("bienService", ["avenants","acteEffetFinanciers","getterActeEffetFinanciers"]),
    // filtre_type_teste() {
    //   const st = this.search.toLowerCase();
    //   return this.avenants.filter(type => {
    //     return (
    //       type.code.toLowerCase().includes(st) ||
    //       type.libelle.toLowerCase().includes(st)
    //     );
    //   });
    // }
  },
  methods: {
    ...mapActions("bienService", [
      "ajouterAvenant",
      "modifierAvenant",
      "supprimerAvenant",
     
    ]),
    //afiicher modal ajouter
    afficherModalAjouterTitre() {
      this.$("#exampleModalAvenant").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterTypeTexteLocal() {
      this.ajouterAvenant(this.formData);
this.$("#exampleModalAvenant").modal('hide');
     
    },
    // afficher modal de modification
    afficherModalModifierTypeTexte(index) {
      this.$("#modificationModalAvenant").modal({
        backdrop: "static",
        keyboard: false
      });

     
      this.editAvenant = this.avenants[index];
    },
    // fonction pour vider l'input modification
    modifierTypeTexteLocal() {
      this.modifierTypeTexte(this.editAvenant);
this.$("#modificationModalAvenant").modal('hide');
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

