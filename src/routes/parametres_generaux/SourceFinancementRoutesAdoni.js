
import SourceFinancement from "../../pages/parametres_generaux/source_financement/SourceFinancement.vue";
import TypeFinancement  from "../../pages/parametres_generaux/source_financement/TypeFinancement.vue";
import TableauBordParametreSimple  from "../../../src/gestionDesModule/TableauBordParametre.vue";
import TableauBordGestionHorsSibSimple  from "../../../src/gestionDesModule/TableauBordGestionHorsSib.vue";
import TableauBordGestionSibSimple  from "../../../src/gestionDesModule/TableauBordGestionSib.vue";
import TableauBordUaSimple  from "../../../src/gestionDesModule/TableauBordUa.vue";
import TableauBordCatographiesSimple  from "../../../src/gestionDesModule/TableauBordCa";
import tableauBordGestionAcces from "../../../src/gestionDesModule/tableauBordGestionAcces.vue";
import planSourceFinancement from "../../pages/parametres_generaux/source_financement/planSourceFinancement.vue"
import DetailSourceFinancement from "../../pages/parametres_generaux/source_financement/DetailSourceFinancement.vue"
const SourceFinancementRoutesAdoni = [
   {

      path:"/TableauBordCatographies",
      name:"TableauBordCatographiesSimple",
      component:TableauBordCatographiesSimple

   },
   {
      path:"/plan-source-finacement",
      name:"planSourceFin",
      component:planSourceFinancement
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
      path:"/menu-gestion-acces",
      name:"getion_acces",
      component:tableauBordGestionAcces
   },
     {
        path:"/source-de-financements",
        name:"SourceFinancement",
        component:SourceFinancement

     },
     {
        path:"/detail-source-financement/:id",
        name:"detailSourceFinancement",
        component:DetailSourceFinancement
     },
     // route type nde financement
     {
        path:"/type-financement",
        name:"TypeFinancement",
        component:TypeFinancement
     }
     
]

export default SourceFinancementRoutesAdoni;

