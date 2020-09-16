
<template>
  <div>
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          
                                    <!-- <div>
                                 <download-excel
                                     class="btn btn-success pull-right"
                                     style="cursor:pointer;"
                                       :fields = "json_fields"
                                       title="Liste des services"
                                       name ="Liste des services"
                                       worksheet = "entreprise non sanctionner"
                                     :data="filtre_service">
             <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>
                                          </download-excel> 
                <div  align="right" style="cursor:pointer;">
    <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
        </div> 
                              </div> -->
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des Services</h5>
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
                          <th>Detail</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="service in ListeTauxEquipementDe25a50"
                    :key="service.id"
                  >
                   
               
                    <td>{{service.libelle || 'Non renseigné'}}</td>
                      
                      <td style="text-align:center">{{TotalEnStock(service.id) || 0}}</td>
                      <td style="text-align:center">{{RestantEnStock(service.id) || 0}}</td>
                      <td style="text-align:center">{{parseFloat(QteRequiseCotePersonnel(service.id))+parseFloat(QteRequiseCoteService(service.id)) || 0}}</td>
                      <td style="text-align:center">{{parseFloat(QteAffecteCotePersonnel(service.id))+parseFloat(QteAffecteCoteService(service.id)) || 0}}</td>
                      <td style="text-align:center">{{parseFloat((parseFloat(QteRequiseCotePersonnel(service.id))+parseFloat(QteRequiseCoteService(service.id))))-parseFloat((parseFloat(QteAffecteCotePersonnel(service.id))+parseFloat(QteAffecteCoteService(service.id))))}}</td>
                      <td style="text-align:center">{{(((parseFloat(QteAffecteCotePersonnel(service.id))+parseFloat(QteAffecteCoteService(service.id)))/(parseFloat(QteRequiseCotePersonnel(service.id))+parseFloat(QteRequiseCoteService(service.id))+0.01))*100).toFixed(2)|| 0}}%</td>
                    
                  
<td>
                     <button  
                        class="btn  btn-danger">
                <span >?</span>
       
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
import {admin,dcf,cf} from "../../../../Repositories/Auth"
//   import {partition} from '../../../../src/Repositories/Repository'
// import jsPDF from 'jspdf'
// import 'jspdf-autotable'
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
   ...mapGetters("SuiviImmobilisation", ["immobilisations","getPersoStock"]),
     ...mapGetters('parametreGenerauxAdministratif', ['getterplanOrganisationUa']) ,
    admin:admin,
      dcf:dcf,
      cf:cf,
 ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),

    ...mapGetters("personnelUA", ["personnaliseActeurDepense","acte_personnels","all_acteur_depense","acteur_depenses","personnaFonction","fonctions"]),

 ...mapGetters("uniteadministrative", ["uniteAdministratives","directions","servicesua","uniteZones"]),
  

  },
  methods: {
    ...mapActions("SuiviImmobilisation", [
      "getAllService",
      "ajouterService",
      "modifierService",
      "supprimerService"
    ]),
    ListeTauxEquipementDe25a50() {
   
        if (this.cf){
            let colect=[];
            this.uniteAdministratives.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
          return colect.filter(items=>(25<(((parseFloat(this.QteAffecteCotePersonnel(items.id))+parseFloat(this.QteAffecteCoteService(items.id)))/(parseFloat(this.QteRequiseCotePersonnel(items.id))+parseFloat(this.QteRequiseCoteService(items.id))+0.01))*100)));
        }

       return this.uniteAdministratives.filter(items=>(25<(((parseFloat(this.QteAffecteCotePersonnel(items.id))+parseFloat(this.QteAffecteCoteService(items.id)))/(parseFloat(this.QteRequiseCotePersonnel(items.id))+parseFloat(this.QteRequiseCoteService(items.id))+0.01))*100)));
    },
     QteRequiseCoteService() {
      return id => {
    if(id !=""){
  
        
    return this.getterplanOrganisationUa.filter(element => element.ua_id == id && element.serviceua_id != null).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.historiqueequipement), 0).toFixed(0); 
      
    }
    return 0
  }
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
  //   QteRequiseCoteService() {
  //     return id => {
  //   if(id !=""){
  
        
  //   return this.getterplanOrganisationUa.filter(element => element.ua_id == id && element.serviceua_id != null).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.historiqueequipement), 0).toFixed(0); 
      
  //   }
  //   return 0
  // }
  //   },
   
    ExporterEnExel(){
      this.$refs.excel.click()
    }
  },

  created(){
    console.log(this.$refs)
  }
};
</script>

