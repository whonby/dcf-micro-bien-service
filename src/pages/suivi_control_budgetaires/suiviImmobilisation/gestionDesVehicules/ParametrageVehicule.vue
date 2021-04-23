
<template>
  <div>
      
  <div  align="left" style="cursor:pointer;">
    <button class="btn btn-danger" @click.prevent="pagePrecedent">Page Précédente</button>
    
        </div>
       
    <div class="row-fluid">
      <div class="span4">
        <div >
          <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
            <h5 style="font-size:18px;color:#000">MARQUES <code style="font-size:18px;"></code></h5>
          </div>
         <marqueVehicules></marqueVehicules>
        </div>
      </div>
      <div class="span4">
        <div>
          <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
            <h5 style="font-size:18px;color:#000">MODELS <code style="font-size:18px;"></code></h5>
          </div>
   
   <ModeleVehicules></ModeleVehicules>
        </div>
      </div>
      <div class="span4">
        <div>
          <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
            <h5 style="font-size:18px;color:#000">TYPE ENTRETIENS : <code style="font-size:18px;"></code></h5>
          </div>
       <TypeEntretien></TypeEntretien>
        </div>
      </div>
      
    </div>
    <div class="row-fluid">
     <div class="span4">
        <div>
          <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
            <h5 style="font-size:18px;color:#000">TYPE DE VEHICULE <code style="font-size:18px;"></code></h5>
          </div>
         <TypeVehicule></TypeVehicule>
        </div>
      </div>
      <div class="span4">
        <div>
          <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
            <h5 style="font-size:18px;color:#000">TYPE D'ENERGIE<code style="font-size:18px;"></code></h5>
          </div>
   
   <TypeEnergie></TypeEnergie>
        </div>
      </div>
      <div class="span4">
        <div>
          <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
            <h5 style="font-size:18px;color:#000">TYPE REPARATION : <code style="font-size:18px;"></code></h5>
          </div>
       <TypeEntretien></TypeEntretien>
        </div>
      </div>
    </div>
     <div class="row-fluid">
    <div class="span4">
        <div>
          <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
            <h5 style="font-size:18px;color:#000">TRANSMISSION <code style="font-size:18px;"></code></h5>
          </div>
       <Transmission></Transmission>
        </div>
      </div>
      <div class="span4">
        <div>
          <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
            <h5 style="font-size:18px;color:#000">APPRECIATION <code style="font-size:18px;"></code></h5>
          </div>
       <Appreciation></Appreciation>
        </div>
      </div>
    </div>


<notifications  />
    <!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
  import {formatageSomme} from "@/Repositories/Repository"
  import marqueVehicules from "./marqueVehicules"
    import ModeleVehicules from "./grpeModel/ModeleVehicules"
    import TypeEntretien from "./TypeEntretien"
    import TypeVehicule from "./TypeVehicule"
    import TypeEnergie from "./TypeEnergie"
    import Transmission from "./Transmission"
    import Appreciation from "./Appreciation"
export default {
    components: {
      marqueVehicules,
      ModeleVehicules,
      TypeEntretien,
      TypeVehicule,
      TypeEnergie,
      Transmission,
      Appreciation



  },
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
      editTypeTexte: {
        code: "",
        libelle: ""
      },
      search: ""
    };
  },
created() {
           

},
  computed: {
    ...mapGetters("uniteadministrative", ["getterUniteAdministrativeBailleur","uniteAdministratives"]),
    ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
   ...mapGetters("parametreGenerauxAdministratif", [
      "services_gestionnaires",
      "sections",
      "type_Unite_admins",
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "afficheNiveauPlanProg",
      "exercices_budgetaires",
      "afficheLocalisationGeoNiveau5"
    ]),
    ...mapGetters("parametreGenerauxBudgetaire", ["plans_budgetaires","structures_budgetaires","getterTousActivite","getterTousPlanBudgetaire"]),
      ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',"types_financements"]),
    
  },
  methods: {
    ...mapActions("uniteadministrative", [
      "getAllTypeTextes",
      "getAllNombreTypeText",
      "ajouterTypeTexte",
      "modifierTypeTexte",
      "supprimerUniteAdministrativeBailleur"
    ]),
  formatageSomme:formatageSomme,
    pagePrecedent(){
                window.history.back()
            },
ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>

