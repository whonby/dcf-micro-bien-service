
<template>
  <div >
    <div 
        v-for="GroupeSectionB in GroupeParSection"
        :key="GroupeSectionB"
      >
    <table class="table table-bordered">
           
           <thead style="background-color: #FC762F !important" >
                <tr>
                  <th
                    style="
                      color: #000;
                      font-weight: bold;
                      background-color: #FC762F !important;
                    "
                  >
                    
                  </th>
                  <th
                    style="
                      color: #000;
                      font-weight: bold;
                    
                      background-color: #FC762F !important;
                    "
                  >
                    {{groupeSectionB}}SECTION{{recupereIDSectionB}}
                  </th>
                 
                </tr>
              </thead>
            <tbody>
             <tr>
                <td>
                   
                    <button @click="ShowMySection(GroupeSectionB)">
                     <i class="icon-eye-open"></i> 
                      
                    </button> 
                  </td>
               <td>{{GroupeSectionB}}</td>
             </tr>
              <tbody>
                 <tr class="odd gradeX"  v-show="recupereIDSectionB==groupeSectionB"
                            v-for="ua in AfficheUaGroupe(groupeSectionB)"
                  :key="ua"
                >
       
                  <td>
                  
                    <button >
                     <i class="icon-eye-open"></i> 
                      
                    </button> 
                  </td>
               <td>{{ua}}</td>
               
              
              
 </tr>
              </tbody>
            </tbody>
          </table>
  </div>
   </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
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
        code: "",
        libelle: ""
      },
     recupereIDSectionB:0,
      search: ""
    };
  },
created() {
            this.marcheid=this.$route.params.id
   this.detail_marche = this.getMarchePersonnaliser.find(
       idmarche => idmarche.id == this.$route.params.id
   )
  
},
  computed: {
   ...mapGetters("bienService", [
      
      "gettersgestionOrdrePaiement",
    
    ]),
  ...mapGetters("uniteadministrative", [
      "budgetEclate",
      "groupeLigneEconomiqueBudget",
      "getSousBudget",
      "groupeActiviteBudget",
      "budgetGeneral",
      "fonctionsua",
      "servicesua",
      "directions",
      "uniteZones",
      "uniteAdministratives",
      "getPersonnaliseBudgetGeneralParPersonnel",
      "groupeByActivite",
      "groupeByBailleur",
      "groupeParSectionBudgetEclate"
    ]),
    ...mapGetters("parametreGenerauxAdministratif", [
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "exercices_budgetaires",
      "sections",
    ]),
    AfficheUaGroupe() {
      return (id) => {
      
        if(id !=0 && id !=""){
          let objet = this.budgetEclate.filter((qtreel) => qtreel.section_id == id);
          //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.uniteadministrative_id);
          });
          let unique = [...new Set(array_exercie)];
          console.log(unique);
          if (unique.length == 0) {
            return [];
          }
          return unique;
        }
        return [];
        }
        
        
      };
    },
libelleSection() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.sections.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.nom_section;
          }
          return 0;
        }
      };
    },

    GroupeParSection() {
      // return (id) => {
      
      //   if(id !=0 && id !=""){
          let objet = this.budgetEclate;
          //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.section_id);
          });
          let unique = [...new Set(array_exercie)];
          console.log(unique);
          if (unique.length == 0) {
            return [];
          }
          return unique;
        }
        return [];
      //   }
        
        
      // };
    },
  },
 

 
  methods: {
    ...mapActions("uniteadministrative", [
      "getAllTypeTextes",
      "getAllNombreTypeText",
      "ajouterTypeTexte",
      "modifierTypeTexte",
      "supprimerTypeTexte"
    ]),
    ShowMySection(id){
      if(this.recupereIDSectionB==0){
         this.recupereIDSectionB=id;
      }else if(this.recupereIDSectionB!=0 && this.recupereIDSectionB !=id){
        this.recupereIDSectionB=0;
        this.recupereIDSectionB=id;
      }
      else{
         this.recupereIDSectionB=0;
      }
      
    },
    //afiicher modal ajouter
    afficherModalAjouterTitre() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterTypeTexteLocal() {
      this.ajouterTypeTexte(this.formData);

      this.formData = {
        code: "",
        libelle: ""
      };
    },
    // afficher modal de modification
    afficherModalModifierTypeTexte(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

     
      this.editTypeTexte = this.typeTextes[index];
    },
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

