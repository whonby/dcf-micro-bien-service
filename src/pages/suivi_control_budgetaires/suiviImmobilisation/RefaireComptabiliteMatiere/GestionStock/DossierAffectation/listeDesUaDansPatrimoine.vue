
<template>
  <div>
  <div  class="row-fluid" v-if="affiche_filtre" style="margin-top: -20px">
                <div class="span1">

                </div>
                <div class="span10 " style="background: #f0c71d !important;">
                    <table class="table table-striped"  style="background: #f0c71d !important;">
                        <tbody>
                        <tr>
                        
                            
                            <td style="background: #f0c71d !important;">
                                <label style="font-size:20px">Unité Administrative<a href="#" @click.prevent="videUniteAdministrative()" v-if="uniteAdministrative_id" style="color: red"><i class="fa fa-trash-o"></i></a>
                                </label>
                                <model-list-select style="background-color: #fff;"
                                                   class="wide"
                                                   :list="uniteAdministratives"
                                                   v-model="uniteAdministrative_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder=""
                                >

                                </model-list-select>
                            </td>
                          
                        </tr>

                        </tbody>
                    </table>

                </div>


            </div>
    <div>
      <hr />
      <div class="row-fluid">
        <div >
           
                                    <div>
                               
                              </div>
          <div class="widget-box">
           
 <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Affectation</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search" />
              </div> -->
            </div>
            <div class="widget-content nopadding">
             <table class="table table-bordered table-striped">
                    <thead>
                      <tr>
                         <th style="width:90%">UNITE D'ADMINISTRATIVE</th>
                        <th>ACTION</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                        <tr
                    class="odd gradeX"
                    v-for="BesoinImmo in listeDesStockParUa(uniteAdministrative_id)"
                    :key="BesoinImmo[0].id"
                  >
                  <td style="font-size:14px"
                   
                    >{{libelleUniteAdministrative(BesoinImmo[0].uAdministrative_id) || 'Non renseigné'}}</td>
                  
                     <td>
                       <router-link
                        :to="{name : 'ListeEquipementEnStock', params: {id:BesoinImmo[0].id}}"
                        class="btn btn-success"
                        title="Voir Article"
                      >
                        <span>
                          <i class="icon icon-folder-open"> Voir Article</i>
                        </span>
                      </router-link>
                     </td>
                  </tr>
                  
                    </tbody> 
                </table>
         
            </div>
          </div>
        </div>
      </div>
    </div>

  <!-- <fab :actions="fabActions"
                main-icon="apps"
          
        @searchMe="filter"
         
        bg-color="green"

  ></fab> -->
<notifications  />
 </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
//   import {partition} from '../../../../src/Repositories/Repository'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
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
        },
        {
                  name: 'searchMe',
                   icon: "search"
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
       uniteAdministrative_id:"",
       affiche_filtre:false,
      affiche_boutton_filtre:true,
      search: ""
    };
  },

  computed: {
    ...mapGetters("uniteadministrative", ["uniteAdministratives","GestionStockageArticles","groupStockParUA"]),
    filtre_service() {
      const st = this.search.toLowerCase();
      return this.services.filter(type => {
        return (
         
          type.libelle.toLowerCase().includes(st)
        );
      });
    },
     libelleUniteAdministrative() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    listeDesStockParUa() {
      return id => {
        if (id != null && id != "") {
           return this.listeDesStockGlobalUa.filter(qtreel => qtreel[0].uAdministrative_id == id);

        }
        return this.listeDesStockGlobalUa;
      };
     
    },

listeDesStockGlobalUa() {
    
        if (this.noDCfNoAdmin){
            let colect=[];
            this.groupStockParUA.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.uAdministrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect;
    
        }
return this.groupStockParUA;
  

    },
  },
  methods: {
    ...mapActions("SuiviImmobilisation", [
      "getAllService",
      "ajouterService",
      "modifierService",
      "supprimerService"
    ]),

     filter(){
                this.affiche_filtre=!this.affiche_filtre
               
            },
    videUniteAdministrative(){
                this.uniteAdministrative_id =""
            },
              // pagination
//    partition:partition,
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
  var doc = new jsPDF()
  // doc.autoTable({ html: this.natures_sections })
   var data = this.filtre_service;
    doc.setFontSize(8)
    doc.text(80,10,"LISTE DES SERVICES")
  doc.autoTable(this.getColumns(),data)
doc.save('services.pdf')
return 0
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
    ajouterServiceLocal() {
      this.ajouterService(this.formData);

      this.formData = {
        
        libelle: ""
      };
    },
    // afficher modal de modification
    afficherModalModifierService(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editService = this.services[index];
    },
    // fonction pour vider l'input modification
    modifierServiceLocal() {
      this.modifierService(this.editService);
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

