
<template>
  <div>

    <!--///////////////////////////////////////// fin modal de modification //////////////////////////////-->
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
           <!-- <download-excel -->
            <!-- class="btn btn-default pull-right" -->
            <!-- style="cursor:pointer;" -->
            <!-- :fields="json_fields" -->
            <!-- title="Liste des services" -->
            <!-- :data="filtre_service" -->
            <!-- name="Liste des services" -->
          <!-- > -->
            <!-- <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i> -->
          <!-- </download-excel> -->
                                    <div>
                                 <!-- <download-excel
                                     class="btn btn-success pull-right"
                                     style="cursor:pointer;"
                                       :fields = "json_fields"
                                       title="Liste des services"
                                       name ="Liste des services"
                                       worksheet = "entreprise non sanctionner"
                                     :data="filtre_service">
             <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>
                                          </download-excel>  -->
                <!-- <div  align="right" style="cursor:pointer;">
    <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
        </div>  -->
                              </div>
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Bilan des UA Equipé ou Non Equipe</h5>
              <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search" />
              </div>
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                   
                    <th>Libellé</th>
                    <th>Total Stock</th>
                     <th>Restant en Stock</th>
                      <th>Qté Réquise</th>
                      <th>Affecté</th>
                       <th>Non affecté</th>
                        
                         <th>Taux</th>
                          <th>Variation</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="service in filtre_unite_admin"
                    :key="service.id"
                  >
                   
                  <template>
                    <td>{{service.libelle || 'Non renseigné'}}</td>
                      
                      <td style="text-align:center">{{TotalEnStock(service.id) || 0}}</td>
                      <td style="text-align:center">{{RestantEnStock(service.id) || 0}}</td>
                      <td style="text-align:center">{{parseFloat(QteRequiseCotePersonnel(service.id))+parseFloat(QteRequiseCoteService(service.id)) || 0}}</td>
                      <td style="text-align:center">{{parseFloat(QteAffecteCotePersonnel(service.id))+parseFloat(QteAffecteCoteService(service.id)) || 0}}</td>
                      <td style="text-align:center">{{parseFloat((parseFloat(QteRequiseCotePersonnel(service.id))+parseFloat(QteRequiseCoteService(service.id))))-parseFloat((parseFloat(QteAffecteCotePersonnel(service.id))+parseFloat(QteAffecteCoteService(service.id))))}}</td>
                      <td style="text-align:center">{{(((parseFloat(QteAffecteCotePersonnel(service.id))+parseFloat(QteAffecteCoteService(service.id)))/(parseFloat(QteRequiseCotePersonnel(service.id))+parseFloat(QteRequiseCoteService(service.id))+0.01))*100).toFixed(2)|| 0}}%</td>
                    
                  </template>
<td>
                     <button  
                      v-if="((((parseFloat(QteAffecteCotePersonnel(service.id))+parseFloat(QteAffecteCoteService(service.id)))/(parseFloat(QteRequiseCotePersonnel(service.id))+parseFloat(QteRequiseCoteService(service.id))+0.01))*100)) <= 25"  class="btn  btn-danger">
                <span >0%-25%</span>
       
                </button>
                 <button  
                      v-else-if="((((parseFloat(QteAffecteCotePersonnel(service.id))+parseFloat(QteAffecteCoteService(service.id)))/(parseFloat(QteRequiseCotePersonnel(service.id))+parseFloat(QteRequiseCoteService(service.id))+0.01))*100)) <= 50"  class="btn  btn-info">
                <span >26%-50%</span>
       
                </button>
                <button  
                      v-else-if="((((parseFloat(QteAffecteCotePersonnel(service.id))+parseFloat(QteAffecteCoteService(service.id)))/(parseFloat(QteRequiseCotePersonnel(service.id))+parseFloat(QteRequiseCoteService(service.id))+0.01))*100)) <=75"  class="btn  btn-warning">
                <span >51%-75%</span>
       
                </button>
                
                   <button v-else  class="btn  btn-success" >
              
                <span >76%-100%</span>
                </button>
                   </td>
                    
                  </tr>
                </tbody>
              </table>
                 <div class="pagination alternate">
       <!-- <ul>
           <li :class="{ disabled : page == 0 }"><a @click.prevent="precedent()" href="#">Précedent</a></li>
           <li  v-for="(titre, index) in partition(filtre_service,size).length" :key="index" :class="{ active : active_el == index }">
           <a @click.prevent="getDataPaginate(index)" href="#">{{index + 1}}</a></li>
           <li :class="{ disabled : page == partition(filtre_service,size).length -1 }"><a @click.prevent="suivant()" href="#">Suivant</a></li>
       </ul> -->
   </div>



              <!-- <div v-if="filtre_service.length"></div>
              <div v-else>
                <p style="text-align:center;font-size:20px;color:red;">Aucun Service</p>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <fab :actions="fabActions" @cache="afficherModalAjouterService" main-icon="apps" bg-color="green"></fab>
     <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterService()">Open</button>
      <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
<notifications  /> -->
 </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import {admin,dcf,cf,noDCfNoAdmin} from "../../../../Repositories/Auth"
//   import {partition} from '../../../../src/Repositories/Repository'

export default {
  name:'service',
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
    ...mapGetters("SuiviImmobilisation", ["services"]),
   ...mapGetters("uniteadministrative", ["uniteAdministratives"]),
     ...mapGetters('personnelUA', ["personnaliseActeurDepense"]),
    ...mapGetters("SuiviImmobilisation", ["getPersoStock" ]),
     ...mapGetters('parametreGenerauxAdministratif', ['getterplanOrganisationUa']) ,
     ...mapGetters("SuiviImmobilisation", ["immobilisations"]),
     admin:admin,
      dcf:dcf,
        cf:cf,
        noDCfNoAdmin:noDCfNoAdmin,
      ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
   
     filtre_unite_admin() {
        
        if(this.noDCfNoAdmin){
            let colect=[];
            
            this.uniteAdministratives.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect
        }
        return this.uniteAdministratives

    },
    
     RestantEnStock() {
      return id => {
    if(id !=""){
  
        
    return this.getPersoStock.filter(element => element.uAdministrative_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.quantitestock), 0).toFixed(0); 
      
    }
    return 0
  }
    },
    TotalEnStock() {
      return id => {
    if(id !=""){
  
        
    return this.getPersoStock.filter(element => element.uAdministrative_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.histo_qte), 0).toFixed(0); 
      
    }
    return 0
  }
    },
    QteRequiseCotePersonnel() {
      return id => {
    if(id !=""){
  
        
    return this.personnaliseActeurDepense.filter(element => element.unite_administrative_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.historiquenormequipement), 0).toFixed(0); 
      
    }
    return 0
  }
    },
    QteAffecteCotePersonnel() {
      return id => {
    if(id !=""){
  
        
    return this.immobilisations.filter(element => element.uniteadministrative_id == id && element.fonction_id != null).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.qte_affecte), 0).toFixed(0); 
      
    }
    return 0
  }
    },
    QteAffecteCoteService() {
      return id => {
    if(id !=""){
  
        
    return this.immobilisations.filter(element => element.uniteadministrative_id == id && element.fonction_id == null).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.qte_affecte), 0).toFixed(0); 
      
    }
    return 0
  }
    },
    QteRequiseCoteService() {
      return id => {
    if(id !=""){
  
        
    return this.getterplanOrganisationUa.filter(element => element.ua_id == id && element.serviceua_id != null).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.historiqueequipement), 0).toFixed(0); 
      
    }
    return 0
  }
    },
  },
  methods: {
    ...mapActions("SuiviImmobilisation", [
      "getAllService",
      "ajouterService",
      "modifierService",
      "supprimerService"
    ]),

 

  },

  created(){
    console.log(this.$refs)
  }
};
</script>

