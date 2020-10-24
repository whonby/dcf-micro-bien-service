
import SourceFinancement from "../../pages/parametres_generaux/source_financement/SourceFinancement.vue";
import TypeFinancement  from "../../pages/parametres_generaux/source_financement/TypeFinancement.vue";
import TableauBordParametreSimple  from "../../../src/gestionDesModule/TableauBordSimple/TableauBordParametre.vue";
import TableauBordGestionHorsSibSimple  from "../../../src/gestionDesModule/TableauBordSimple/TableauBordGestionHorsSib.vue";
import TableauBordGestionSibSimple  from "../../../src/gestionDesModule/TableauBordSimple/TableauBordGestionSib.vue";
import TableauBordUaSimple  from "../../../src/gestionDesModule/TableauBordSimple/TableauBordUa.vue";
import TableauBordCatographiesSimple  from "../../../src/gestionDesModule/TableauBordCa";
const SourceFinancementRoutesAdoni = [
   {
      path:"/TableauBordCatographies",
      name:"TableauBordCatographiesSimple",
      component:TableauBordCatographiesSimple

   },
   {
      path:"/TableauBordUa",
      name:"TableauBordUaSimple",
      component:TableauBordUaSimple

   },
   {
      path:"/TableauBordGestionHorsSib",
      name:"TableauBordGestionSibSimple",
      component:TableauBordGestionSibSimple

   },
   {
      path:"/TableauBordGestionHorsSib",
      name:"TableauBordGestionHorsSibSimple",
      component:TableauBordGestionHorsSibSimple

   },
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

