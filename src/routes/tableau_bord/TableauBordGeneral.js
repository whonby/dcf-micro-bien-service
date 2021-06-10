import TableauBordGeneralBugdet from "../../gestionDesModule/TableauBordGeneral";
import TableauBordDuBudgetEclate from "../../gestionDesModule/TableauBordDuBudgetEclate";
import TableauBordOp from "../../gestionDesModule/TableauBordOp";
import TableauBordGeneralBugdetHs from "../../gestionDesModule/TableauBordGeneralHS";
import TableauBordGeneralMarche from "../../pages/TableauBord/TableauBordGeneral/TableauBordMarche";
import TableauBordBudgetEclate from "../../pages/TableauBord/TableauBordHorsSigobe/TableauBordBudgetEclate";
import TableauBordExecutionHorsSigobe from "../../pages/TableauBord/TableauBordHorsSigobe/TableauBordExecutionHorsSigobe.vue";
import ToutLesOpProvisoireEnAttente from "../../pages/TableauBord/TableauBordHorsSigobe/ToutLesOrdresPaiementProvisoire/ToutLesOpProvisoireEnAttente.vue";

import ToutLesOpProvisoireDiferer from "../../pages/TableauBord/TableauBordHorsSigobe/ToutLesOrdresPaiementProvisoire/ToutLesOpProvisoireDiferer.vue";
import ToutLesOpProvisoireRejete from "../../pages/TableauBord/TableauBordHorsSigobe/ToutLesOrdresPaiementProvisoire/ToutLesOpProvisoireRejete.vue";
import ToutLesOpProvisoireVise from "../../pages/TableauBord/TableauBordHorsSigobe/ToutLesOrdresPaiementProvisoire/ToutLesOpProvisoireVise.vue";
import ToutLesOpProvisoireViseO from "../../pages/TableauBord/TableauBordHorsSigobe/ToutLesOrdresPaiementProvisoire/ToutLesOpProvisoireViseO.vue";
const TableauBordGeneral =[
    {
        path:"/ToutLesOpProvisoireDiferer",
        name:"ToutLesOpProvisoireDiferer",
        component:ToutLesOpProvisoireDiferer
    },
    {
        path:"/ToutLesOpProvisoireRejete",
        name:"ToutLesOpProvisoireRejete",
        component:ToutLesOpProvisoireRejete
    },
    {
        path:"/ToutLesOpProvisoireVise",
        name:"ToutLesOpProvisoireVise",
        component:ToutLesOpProvisoireVise
    },

    {
        path:"/ToutLesOpProvisoireViseO",
        name:"ToutLesOpProvisoireViseO",
        component:ToutLesOpProvisoireViseO
    },




    {
        path:"/ToutLesOpProvisoireEnAttente",
        name:"ToutLesOpProvisoireEnAttente",
        component:ToutLesOpProvisoireEnAttente
    },
    {
        path:"/TableauBordExecutionHorsSigobe",
        name:"TableauBordExecutionHorsSigobe",
        component:TableauBordExecutionHorsSigobe
    },
    {
        path:"/TableauBordBudgetEclate",
        name:"TableauBordBudgetEclate",
        component:TableauBordBudgetEclate
    },
    {
        path:"/TableauBordOp",
        name:"TableauBordOp",
        component:TableauBordOp
    },
    {
        path:"/TableauBordDuBudgetEclate",
        name:"TableauBordDuBudgetEclate",
        component:TableauBordDuBudgetEclate
    },
    {
        path:"/tableau_bord_budegt",
        name:"TableauBordGeneralBugdet",
        component:TableauBordGeneralBugdet
    },
    {
        path:"/TableauBordGeneralBugdetHs",
        name:"TableauBordGeneralBugdetHs",
        component:TableauBordGeneralBugdetHs
    },
    {
        path:"/tableau_bord_general_marche",
        name:"TableauBordGeneralMarche",
        component:TableauBordGeneralMarche
    },



]
export default TableauBordGeneral;
