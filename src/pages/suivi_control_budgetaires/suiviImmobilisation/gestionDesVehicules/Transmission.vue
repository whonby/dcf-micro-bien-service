
<template>
  <div>
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Transmission</h3>
      </div>
      <div class="modal-body">
      <table class="table table-bordered table-striped">
          
          <div class="control-group">
            <label class="control-label">Libellé</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.libelle"
                class="span"
                placeholder="Saisir le libellé"
              />
            </div>
          </div>
      </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouteMarqueVehicule(formData)"
          class="btn btn-primary"
          href="#"
          v-show="formData.libelle.length"
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->

    <!--///////////////////////////////////////// debut modal de modification //////////////////////////////-->

    <div id="modificationModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier Transmission</h3>
      </div>
      <div class="modal-body">
     <table class="table table-bordered table-striped">
         
          <div class="control-group">
            <label class="control-label">Libellé:</label>
            <div class="controls">
              <input
                type="text"
                v-model="editService.libelle"
                class="span"
                placeholder="Saisir le libelle"
              />
            </div>
          </div>
     </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierServiceLocal(editService)"
          class="btn btn-primary"
          href="#"
          v-show="editService.libelle.length"
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
          
                                    <!-- <div>
                                
                <div  align="right" style="cursor:pointer;">
    <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
        </div> 
                              </div> -->
                              <table class="table table-bordered table-striped">
          <td style="width: 15%"></td>
          <td style="width: 0%; font-weight: bolder; color: #000">
            <div align="right" style="cursor: pointer">
              <button
                class="btn btn-danger"
                @click.prevent="genererEnPdf()"
                style="font-weight: bolder; color: #fff; font-size: 20px"
              >
                <i class=" icon-print"> Exporter en PDF</i>
              </button>
            </div>
          </td>
          <td style="width: 0px">
            <div align="right" style="cursor: pointer">
              <button
                class="btn btn-success"
                @click.prevent="afficherModalAjouterService"
                style="font-weight: bolder; color: #fff; font-size: 20px"
              >
                <i class="icon icon-plus">
                  AJOUTER TRANSMISSION</i
                >
              </button>
            </div>
          </td>
          
         
        </table>
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>type Véhicule</h5>
              <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search" />
              </div>
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped" id="printMe">
                <thead>
                  <tr>
                   
                    <th>Libellé</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="service in partition(filtre_service, size)[page]"
                    :key="service.id"
                  >
                   
                    <td style="width:90%;font-size:14px"
                      @dblclick="afficherModalModifierService(service.id)"
                    >{{service.libelle || 'Non renseigné'}}</td>

                    <td>
                      <button class="btn btn-danger" @click="supprimerTransmission(service.id)">
                        <span>
                          <i class="icon icon-trash"> Supprimer</i>
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
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
  import {partition} from '../../../../Repositories/Repository'

export default {
  name:'service',
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
    ...mapGetters("SuiviImmobilisation", ["Transmissions"]),
    filtre_service() {
      const st = this.search.toLowerCase();
      return this.Transmissions.filter(type => {
        return (
         
          type.libelle.toLowerCase().includes(st)
        );
      });
    }
  },
  methods: {
    ...mapActions("SuiviImmobilisation", [
     
      "ajouterTransmission",
      "modifierTransmission",
      "supprimerTransmission"
    ]),
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
  this.$htmlToPaper('printMe');
},
getColumns() {
    return [
        
        {title: "LIBELLE", dataKey: "libelle"},

    ]
   
},
       








    //afiicher modal ajouter
    afficherModalAjouterService() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouteMarqueVehicule() {
      this.ajouterTransmission(this.formData);

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

      this.editService = this.Transmission.find(item=>item.id==id);
    },
    // fonction pour vider l'input modification
    modifierServiceLocal() {
      this.modifierTransmission(this.editService);
this.$("#modificationModal").modal('hide');
      // this.editService = {
      // 
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

