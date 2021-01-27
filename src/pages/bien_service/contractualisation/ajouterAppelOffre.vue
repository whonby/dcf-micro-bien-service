<template>
   <div class="container-fluid">
        <hr>
    <div class="row-fluid">
      <div class="span12">
      <div class="widget-box">
          <div class="widget-title">
            <ul class="nav nav-tabs">
              <li class="active"><a data-toggle="tab" href="#tab1">Ajouter appel d'offre</a></li>
              <!-- <li><a data-toggle="tab" href="#tab2">Description</a></li> -->
              <!-- <li><a data-toggle="tab" href="#tab3">Decision de cf</a></li> -->
            </ul>
          </div>
          <div class="widget-content tab-content">
            <div id="tab1" class="tab-pane active">
 
                  
           
                  <table border="0px">
               
                      
                          <tr>
                  <td> 
            <div class="control-group">
              <label class="control-label">Type marché</label>
              <div class="controls">
           <select v-model="formData.type_marche_id" class="span">
               <option v-for="plans in typeMarches" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select>
              </div>
            </div>
             </td>
                  <td> 
            <div class="control-group">
              <label class="control-label" title="Unité administrative">UA:</label>
              <div class="controls">
           <select v-model="formData.unite_administrative_id" class="span">
               <option v-for="plans in uniteAdministratives" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select>
              </div>
            </div>
             </td>
               

                          <td> 
            <div class="control-group">
              <label class="control-label">Référence appel:</label>
              <div class="controls " >
     <input type="text" class="span" v-model="formData.ref_appel" >
      
              </div>
            </div>
                          </td>


                <td> 
            <div class="control-group">
              <label class="control-label">Type appel offre:</label>
              <div class="controls " >
     <input type="text" class="span" v-model="formData.type_appel" >
      
              </div>
            </div>
                          </td>
                <td> 
            <div class="control-group">
              <label class="control-label">Financement:</label>
              <div class="controls " >
     <input type="text" class="span" v-model="formData.financement" >
      
              </div>
            </div>
                          </td>
             <td> 
            <div class="control-group">
              <label class="control-label">Nom du bailleur:</label>
              <div class="controls " >
     <input type="text" class="span" v-model="formData.nom_bailleurs" >
      
              </div>
            </div>
                          </td>
                    
                          </tr>

                          <tr>


            
                  <td> 
            <div class="control-group">
              <label class="control-label">Date d'émission:</label>
              <div class="controls " >
     <input type="date" class="span" v-model="formData.date_emission" >
      
              </div>
            </div>
                          </td>   
                  <td> 
            <div class="control-group">
              <label class="control-label">Date limite:</label>
              <div class="controls " >
     <input type="date" class="span" v-model="formData.date_limite" >
      
              </div>
            </div>
                          </td>  

                              <td>         
                  
               <div class="control-group">
              <label class="control-label">Objet appel d'offre:</label>
              <div class="controls">
                <input type="text" v-model="formData.objet_appel" 
                class="span"  />
                </div>
                  </div>
                              </td>
                          

                          

                         <td style="width:;">           
               <div class="control-group">
              <label class="control-label">Imputation:</label>
              <div class="controls">
                <input type="text" v-model="formData.imputation" 
                class="span"/>
              </div>
                </div>
                </td>
                   

                   
                           <td>
                             <div class="control-group">
              <label class="control-label">Type appel offre 2:</label>
              <div class="controls">
     <input type="text" v-model="formData.type_appel_2" class="span" 
     placeholder="Saisir type appel d'offre" />
              </div>
            </div>
                      </td>

                    
                     </tr>

                      


                           

                         
                       </table> 
         
              
                 
            
                </div>
            <!-- <div id="tab2" class="tab-pane">
                  <table border="0px">
    
                

                     
                           <tr>

                        
                           </tr>
       
            </table> 
            </div> -->
            <div id="tab3" class="tab-pane">
                  
                  <table border="0px">
                          <tr>

                         
                    

                      

                          </tr>
                          
                             
                
       
                      </table> 

                    </div>

         

              </div>
               </div>

             </div>

                </div>
           <div align="right">
             <button
              @click.prevent="ajouterModalTypeAnalyseLocal" class="btn btn-primary"
              href="#">Valider</button> &nbsp;&nbsp;&nbsp;
              <button @click.prevent="AllerAPageListe" data-dismiss="modal" class="btn" href="#">Fermer</button> 
                </div>



<notifications  />


               
   </div>
</template>

  
<script>
 import { mapGetters, mapActions } from "vuex";
  import moment from 'moment';
export default {
  name:'type facture',
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
    //     libelle: "libelle"
    //   },

      formData: {
            ref_appel:"",
            type_appel:"",
            financement:"",
            nom_bailleurs:"",
            date_emission:"",
            date_limite:"",
            objet_appel:"",
            type_marche_id:"",
            imputation:"",
            type_appel_2:"",
            unite_administrative_id:""
            

        
      },
      editAppelOffre: {
               ref_appel:"",
            type_appel:"",
            financement:"",
            nom_bailleurs:"",
            date_emission:"",
            date_limite:"",
            objet_appel:"",
            type_marche_id:"",
            imputation:"",
            type_appel_2:"",
            unite_administrative_id:""
            
      },
      search: ""
    };
  },

  computed: {
     ...mapGetters("bienService", ['appelOffres','typeMarches', 'getAppelOffresPersonnaliser']),
     ...mapGetters("uniteadministrative", ['uniteAdministratives'])
  },
  methods: {
    ...mapActions("bienService", ['ajouterAppelOffre','modifierAppelOffre',
    'supprimerAppelOffre'
    
     
    ]),

    // aller a la page liste 

     AllerAPageListe(){
  
    this.$router.push({
        name: 'appelOffre'
    })
    },
    //afiicher modal ajouter
    // afficherModalProcedurePassation() {
    //   this.$("#exampleModal").modal({
    //     backdrop: "static",
    //     keyboard: false
    //   });
    // },
    // fonction pour vider l'input ajouter
    ajouterModalTypeAnalyseLocal(){
this.ajouterAppelOffre(this.formData)
this.formData = {
   ref_appel:"",
            type_appel:"",
            financement:"",
            nom_bailleurs:"",
            date_emission:"",
            date_limite:"",
            objet_appel:"",
            type_marche_id:"",
            imputation:"",
            type_appel_2:"",
            unite_administrative_id:""
}

    },
    
    // afficher modal de modification
    // afficherModalModifiertextJuridique(index) {
    //   this.$("#modificationModal").modal({
    //     backdrop: "static",
    //     keyboard: false
    //   });

    //   this.editAppelOffre = this.procedurePassations[index];
    // },
    // fonction pour vider l'input modification
    // modifierModalTypeAnalyseLocal(){
    //   this.modifierAppelOffre(this.editAppelOffre)
    //   this.$('#modificationModal').modal('hide');
    // },

    // formatage date
formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
    
    // alert() {
    //   console.log("ok");
    // },
     ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>

