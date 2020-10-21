
import SourceFinancement from "../../pages/parametres_generaux/source_financement/SourceFinancement.vue";
import TypeFinancement  from "../../pages/parametres_generaux/source_financement/TypeFinancement.vue";
import TableauBordParametreSimple  from "../../../src/gestionDesModule/TableauBordSimple/TableauBordParametre.vue";

const SourceFinancementRoutesAdoni = [
  
   {
      path:"/TableauBord-Parametre",
      name:"TableauBordParametreSimple",
      component:TableauBordParametreSimple

   },
     {
        path:"/source-de-financements",
        name:"SourceFinancement",
        component:SourceFinancement

     },
     // route type nde financement
     {
        path:"/type-financement",
        name:"TypeFinancement",
        component:TypeFinancement
     }
     
]

export default SourceFinancementRoutesAdoni;

