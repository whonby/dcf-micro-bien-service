

<template>
   
      <div class="accordion" >
          <div class="accordion-group widget-box">
            <div class="accordion-heading " >
              <div @click="toggle()" class="widget-title "> <a data-parent="#collapse-group" href="#collapseGOne" data-toggle="collapse"> 
                  <span class="icon"><i :class="iconClasses"></i></span>
                <span class="taillegrand">{{groupe.code}} &nbsp;{{groupe.libelle}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <!-- <span class="badge badge-info" >{{getNombreArticle}}</span>&nbsp;&nbsp; -->
                
                 <span class="badge badge-info">{{formatageSomme(parseFloat(MontantTotal))}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
 
                 <span class="badge badge-success">{{formatageSomme(parseFloat(budgetConsommerDesModule))}}</span>&nbsp;&nbsp;&nbsp;&nbsp;

                 <span class="badge badge-important">{{formatageSomme(parseFloat(budgetConsommerDesModule) - parseFloat(MontantTotal))}}</span>
                </a> 
            </div>
            </div>
            <div class="collapse in accordion-body"  v-if="isFolder && isOpen ">
              <div class="widget-content"> 
                 <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                       <th>Exercice</th>
                    <th title="">Code Budget</th>
                     <!-- <th title="unite administrative">ua</th> -->
                    <th>Section</th>
                    <th title="grande nature depense">G.Nature</th>
                      <th>Programme</th>
                    <!--<th>Action</th> -->
                    <!-- <th>Activite</th> -->
                     <th title="classification fonctionnel">C.Fontionnel</th>
                     <th title="classification Economique">C.Economique</th>
                    <th>D.Initial</th>
                    <th>Version</th>
                    


                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                   <budgetGeneralItem
                        class="item"
                        v-for="groupeElement in groupe.ua_budget_general"
                        :key="groupeElement.id"
                        :article="groupeElement"
                      @modification="$emit('modification', $event)"
                        @suppression="$emit('suppression', $event)"

                    ></budgetGeneralItem>
                      <!-- <tr>
                     
                       <td>
                           
                      </td>
                       <td>
                          
                      </td>
                        <td>
                          
                      </td>
                      <td>
                          
                      </td>
                      <td>
                          
                      </td>
                      <td>
                          
                      </td>
                       <td style="font-weight:bold;"> Total Dotation 
                      </td>
                       <td  style="text-align: center;color:red;font-weight:bold;">
                           {{formatageSomme(parseFloat(MontantTotal))}}
                           
                      </td>
                       <td>
                           
                      </td>
                        <td>
                           
                      </td>
                     
                    </tr> -->
                </tbody>
              </table>
              </div>
            </div>
          </div>
        
        
        </div>

  
</template>


<script>
import { mapGetters} from "vuex";
import budgetGeneralItem from './budgetGeneralItem'
import { formatageSomme } from "../../../src/Repositories/Repository";
export default {
    name: 'budgetGeneralItemComponent',
     props: {
    groupe: Object,
  },
  components: {
      budgetGeneralItem
  },
  data: function () {
    return {
      isOpen: false,
      isOver: false,
      active: null
    }
  },



  computed: {
  ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetGeneral",
      "getPersonnaliseBudgetGeneral",
      "montantBudgetGeneral",
      "afficheTransfertValider"
      // "chapitres",
      // "sections"
    ]),
     ...mapGetters("bienService", ['getMandatPersonnaliserVise','getMandatPersonnaliser','choixprocedure','acteDepense',"getMarchePersonnaliser","appelOffres","getFacturePersonnaliser",
                "lots","modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","typeFactures",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","motifDecisions",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers",'getEngagementPersonnaliser',"engagements","getEngagementPersonnaliser1","mandats","avenants","getterActeEffetFinanciers"]),
    MontantTotal(){
  
    
    var montant = this.groupe.ua_budget_general.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0).toFixed(0); 
      if(isNaN(montant)) return null
      return montant
}, 
budgetConsommerBienService(){
  return id => {
    if(id !=""){
    return this.getMandatPersonnaliserVise.filter(element => element.ua_id == this.groupe.id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(0); 
      
    }
    
  }
},
budgetConsommerTransfert(){
  return id => {
    if(id !=""){
    return this.afficheTransfertValider.filter(element => element.ua_id == this.groupe.id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_total_contrat), 0).toFixed(0); 
      
    }
    
  }
},
budgetConsommerDesModule() {
      const val = parseInt(this.budgetConsommerBienService(this.groupe.id)) + parseInt(this.budgetConsommerTransfert(this.groupe.id));
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },








    isFolder: function () {
      return this.groupe.ua_budget_general &&
        this.groupe.ua_budget_general.length
    },

    // getNombreArticle(){
    //     var nombre = this.groupe.ua_budget_general.length
    //     if(nombre) return nombre
    //     return '0' 
    // },
    iconClasses() {
      return {
        'icon-plus': !this.isOpen && this.groupe.ua_budget_general.length,
        'icon-minus': this.isOpen && this.groupe.ua_budget_general.length
        //    'icon-folder-close': !this.isOpen && this.groupe.ua_budget_general.length,
        // 'icon-folder-open': this.isOpen && this.groupe.ua_budget_general.length
      }
    },

   
  },

  filters: {
  
  	subStr: function(string, nbr) {
      if (!string) return ''
      if(string.length <= nbr) return string 
    	return string.substring(0,nbr) + '...';

      
        }
  
  },
  methods: {

    toggle: function () {
      if (this.isFolder ) {
        this.isOpen = !this.isOpen 
        
      }
    },
formatageSomme:formatageSomme
  }
}
</script>
<style>
.taillegrand{
  font-size: 16px;
  font-weight: bold;
 
}
.bold {
  font-weight: bold;
}
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: none;
}
</style>

