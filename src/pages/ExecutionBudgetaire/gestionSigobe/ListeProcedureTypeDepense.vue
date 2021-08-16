
<template>
<div>
   <div class="widget-box collapsible"  v-for="typeFact in AfficheParDroitCommun" :key="typeFact.id">
          <div class="widget-title" style="background-color: coral;color:#fff !important;font-size:15px" > <a href="#collapseOne" data-toggle="collapse"> <span class="icon"><i class="icon-sitemap" ></i></span>
            <h5 style="color:#fff !important;font-size:20px">{{libelleProcedure(typeFact)}} </h5>
            </a> </div>
            <br>
  <div class="collapse in" id="collapseOne">

        <div class="widget-box collapsible">
            <div class="widget-title" style="background-color: #fff;color:#000!important;font-size:15px; margin-left:30px"> <a href="#ENGAGEMENTDIRECT" data-toggle="collapse"> <span class="icon"><i class=" icon-chevron-down" ></i></span>
            <h5 style="background-color: #fff!important;color:#000!important;font-size:15px;">ENGAGEMENT DIRECT </h5>
            </a> 
            </div>

             <div class="collapse" id="ENGAGEMENTDIRECT">
               <div >
        <table class="table table-bordered table-striped" style="font-size:15px; margin-left:80px">
                <thead>
                  <tr>
                   <th style="font-size:15px;color:#000!important;width:10%">Code</th>
                    <th style="font-size:15px;color:#000!important;width:70%">Libelle</th>
                    <th style="font-size:15px;color:#000!important">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="itemNiveau1 in afficheTypeDepenseEngagementDirect(typeFact)" :key="itemNiveau1.id">
                    <td style="font-size:15px;color:#000!important;font-weight:bold" @dblclick="afficherModalModifierBudgetaire(itemNiveau1.id)" >{{itemNiveau1.code_depense || 'Non renseigné'}}</td>
                    <td style="font-size:15px;color:#000!important;font-weight:bold" @dblclick="afficherModalModifierBudgetaire(itemNiveau1.id)" >{{conversionMajiscule(itemNiveau1.libelle_depense) || 'Non renseigné'}}</td>
                    <td>
                      <button class="btn btn-danger" @click="supprimerProcedureTypeDepenses(itemNiveau1.id)">
                        <span>
                          <i class="icon icon-trash"></i> Supprimer
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              </div>
             </div>




              <br>

<div class="widget-title" style="background-color: #fff;color:#000!important;font-size:15px; margin-left:30px"> <a href="#ENGAGEMENTDIRECT1" data-toggle="collapse"> <span class="icon"><i class=" icon-chevron-down" ></i></span>
            <h5 style="background-color: #fff!important;color:#000!important;font-size:15px;">ENGAGEMENT PAR BON DE COMMANDE  </h5>
            </a> 
            </div>

             <div class="collapse" id="ENGAGEMENTDIRECT1">
<table class="table table-bordered table-striped" style="font-size:15px; margin-left:80px">
                <thead>
                  <tr>
                     <th style="font-size:15px;color:#000!important">Code</th>
                    <th style="font-size:15px;color:#000!important;width:70%">Libelle</th>
                    <th style="font-size:15px;color:#000!important">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="itemNiveau2 in afficheTypeDepenseBonCommande(typeFact)" :key="itemNiveau2.id">
                      <td style="font-size:15px;color:#000!important;font-weight:bold" @dblclick="afficherModalModifierBudgetaire(itemNiveau2.id)" >{{itemNiveau2.code_depense || 'Non renseigné'}}</td>
                    <td style="font-size:15px;color:#000!important;font-weight:bold" @dblclick="afficherModalModifierBudgetaire(itemNiveau2.id)" >{{conversionMajiscule(itemNiveau2.libelle_depense) || 'Non renseigné'}}</td>
                    <td>
                      <button class="btn btn-danger" @click="supprimerProcedureTypeDepenses(itemNiveau2.id)">
                        <span>
                          <i class="icon icon-trash"></i> Supprimer
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
               <br>
          <div class="collapse in" id="collapseOne1">
              
        <div class="widget-box collapsible1" >
       <div class="widget-title" style="background-color: #fff;color:#000!important;font-size:15px; margin-left:30px"> <a href="#ENGAGEMENTDIRECT78" data-toggle="collapse"> <span class="icon"><i class=" icon-chevron-down" ></i></span>
            <h5 style="background-color: #fff!important;color:#000!important;font-size:15px;">ENGAGEMENT DIRECT </h5>
            </a> 
            
            </div>
            <div class="widget-box collapsible1"  v-for="typeFact9 in AfficheParProcedureDerogation" :key="typeFact9.id">
          <div class="widget-title" style="background-color: coral;color:#fff !important;font-size:15px" > <a href="#collapseOne1" data-toggle="collapse"> <span class="icon"><i class="icon-sitemap" ></i></span>
            <h5 style="color:#fff !important;font-size:20px">{{libelleProcedure(typeFact9)}} </h5>
            </a> </div>
            <br>
             <div class="collapse" id="ENGAGEMENTDIRECT78">
<!-- <div class="widget-box collapsible1" v-for="itemNiveau9 in afficheTypeDepenseEngagementDirectProcedureDerogatoire(typeFact9)" :key="itemNiveau9.id">
    <div class="widget-title" style="background-color: #228B22;color:#fff!important;font-size:15px; margin-left:80px"> <a href="#DEMANDEENGAGAMENT" data-toggle="collapse"> <span class="icon"></span>
            <h5 style="color:#FFF!important;font-size:15px;">{{itemNiveau9.libelle_depense}} </h5>
            </a> 
            </div>
    </div> -->
<table class="table table-bordered table-striped" style="font-size:15px; margin-left:80px">
                <thead>
                  <tr>
                   <th style="font-size:15px;color:#000!important">Code</th>
                    <th style="font-size:15px;color:#000!important;width:70%">Libelle</th>
                    <th style="font-size:15px;color:#000!important">Action</th>
                  </tr>
                </thead>
                <tbody>

                  <tr class="odd gradeX" v-for="itemNiveau9 in afficheTypeDepenseEngagementDirectProcedureDerogatoire(typeFact9)" :key="itemNiveau9.id">
                                       <td style="font-size:15px;color:#000!important;font-weight:bold" @dblclick="afficherModalModifierBudgetaire(itemNiveau9.id)" >{{itemNiveau9.code_depense || 'Non renseigné'}}</td>
                    <td style="font-size:15px;color:#000!important;font-weight:bold" @dblclick="afficherModalModifierBudgetaire(itemNiveau9.id)" >{{conversionMajiscule(itemNiveau9.libelle_depense) || 'Non renseigné'}}</td>
                    <td>
                      <button class="btn btn-danger" @click="supprimerProcedureTypeDepenses(itemNiveau9.id)">
                        <span>
                          <i class="icon icon-trash"></i> Supprimer
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>

             </div>
            </div>
              <br>
       
             </div>
          </div>


<button style="display:none;" v-shortkey.once="['ctrl', 'f']"
  @shortkey="afficherModalajouterProcedureTypeDepenses()">Open</button>

         <fab :actions="fabActions"
                main-icon="apps"
       @cache="afficherModalajouterProcedureTypeDepenses"
        bg-color="green"

  ></fab>

<notifications />

  
  
  </div>
</template>
   
<script>
//import axios from '../../../../urls/api_parametrage/api'
import {mapGetters, mapActions} from 'vuex'
import {partition} from '../../../../src/Repositories/Repository'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
export default {
  
  data() {
    return {
      page:0,
      size:10,
      active_el:0,

       json_fields: {
            'Niveau': 'niveau',
            'Libelle': 'libelle',  
        },
        fabActions: [
              {
                  name: 'cache',
                  icon: 'add'
              },
              // {
              //     name: 'alertMe',
              //     icon: 'add_alert'
              // }
          ],
     
        formData : {

                
            
            
        },

        editProcedureDroitCommun: {

            
            
        },
            search:""
    };
  },

 
  created() {
    //  this.getStructureActivite()
    console.log('hello')
    console.log(this.AfficheParDroitCommun)
    console.log(this.gettersProcedureTypeDepense)
  },
  computed: {
// methode pour maper notre guetter
   ...mapGetters('bienService', ["gettersProcedureTypeDepense",'gettersProcedureDroitCommuns','gettersProcedureDerogatoires']) ,
  conversionMajiscule() {
      return (libelle) => {
        if (!libelle) return null;
        return libelle.toLocaleUpperCase();
      };
    },
   libelleProcedure() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersProcedureDroitCommuns.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },
    // methode pour trier un item
           localisationsFiltre(){

     const searchTerm = this.search.toLowerCase();

return this.gettersProcedureTypeDepense.filter((item) => {
  
    // return item.niveau.toLowerCase().includes(searchTerm) 
    return item.libelle_depense.toLowerCase().includes(searchTerm)

   
  

   }
)
   },
//    afficheTypeDepenseEngagementDirect(){
// return this.gettersProcedureDroitCommuns.filter(item1=>item1.Procedures_depenses_id==1)
//    },
// afficheTypeDepenseEngagementBonCommande(){
// return this.gettersProcedureTypeDepense.filter(item1=>item1.Procedures_depenses_id==2)
//    },
AfficheParDroitCommun() {
      //return (id) => {
        
        let objet = this.gettersProcedureTypeDepense.filter(item=>item.Procedures_depenses_id==1);
        //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.Procedures_depenses_id);
          });
          let unique = [...new Set(array_exercie)];
          console.log(unique);
          if (unique.length == 0) {
            return [];
          }
          return unique;
        }
        return [];
    // };
    },
    AfficheParProcedureDerogation() {
      //return (id) => {
        
        let objet = this.gettersProcedureTypeDepense.filter(item=>item.Procedures_depenses_id==2);
        //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.Procedures_depenses_id);
          });
          let unique = [...new Set(array_exercie)];
          console.log(unique);
          if (unique.length == 0) {
            return [];
          }
          return unique;
        }
        return [];
    // };
    },
afficheTypeDepenseEngagementBonCommande() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersProcedureTypeDepense.filter(
            (qtreel) => qtreel.Procedures_depenses_id == id && qtreel.modalites_execution_id == 2
          );
        }
      };
    },
    afficheTypeDepenseBonCommande() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersProcedureTypeDepense.filter(
            (qtreel) => qtreel.Procedures_depenses_id == id && qtreel.modalites_execution_id == 7
          );
        }
      };
    },
    
afficheTypeDepenseEngagementDirect() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersProcedureTypeDepense.filter(
            (qtreel) => qtreel.Procedures_depenses_id == id && qtreel.modalites_execution_id == 1
          );
        }
      };
    },

afficheTypeDepenseEngagementDirectProcedureDerogatoire() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersProcedureTypeDepense.filter(
            (qtreel) => qtreel.Procedures_depenses_id == id && qtreel.modalites_execution_id == 1
          );
        }
      };
    },

        tailleTableauStructureTache(){
		return this.gettersProcedureDroitCommuns.length + 1
	}
  },

  methods: {
    // methode pour notre action
   ...mapActions('bienService', ['getStructureActivite', 'ajouterProcedureTypeDepenses', 
   'modifierProcedureTypeDepenses','supprimerProcedureTypeDepenses']),  
   
   
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
        genererEnPdf(){
  var doc = new jsPDF()
  // doc.autoTable({ html: this.natures_sections })
   var data = this.gettersProcedureDroitCommuns;
   doc.setFontSize(8)
    doc.text(75,10,"LISTE DES STRUCTURES PROGRAMMATIQUES")
  doc.autoTable(this.getColumns(),data)
doc.save('structure_programmatique.pdf')
return 0
},
getColumns() {
    return [
        
        {title: "NIVEAU", dataKey: "niveau"},
        {title: "LIBELLE", dataKey: "libelle"},
     
        
    ];
},
   
    afficherModalajouterProcedureTypeDepenses(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
   // fonction pour vider l'input
    ajouterBudgetaireLocal () {
  
      this.ajouterProcedureTypeDepenses(this.formData)

        this.formData = {
              
             	libelle_depense: "",
            
        }
    },
// afficher modal
afficherModalModifierBudgetaire(id){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.editProcedureDroitCommun = this.gettersProcedureTypeDepense.find(item => item.id==id);


        
 },
// 
modifierBudgetaireLocal(){
 
  this.modifierProcedureTypeDepenses(this.editProcedureDroitCommun)
  this.$('#modifierModal').modal('hide');
  // this.editProcedureDroitCommun = {
  //   niveau:"",
  //   libelle:"",
   
  // }
}

  }
};
</script>

