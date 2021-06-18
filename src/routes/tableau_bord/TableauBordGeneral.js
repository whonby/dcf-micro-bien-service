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


import ToutLesOpAnnulationEnAttente from "../../pages/TableauBord/TableauBordHorsSigobe/ToutLesOrdresPaiementAnnulation/ToutLesOpAnnulationEnAttente.vue";
import ToutLesOpAnnulationDiferer from "../../pages/TableauBord/TableauBordHorsSigobe/ToutLesOrdresPaiementAnnulation/ToutLesOpAnnulationDiferer.vue";
import ToutLesOpAnnulationRejete from "../../pages/TableauBord/TableauBordHorsSigobe/ToutLesOrdresPaiementAnnulation/ToutLesOpAnnulationRejete.vue";
import ToutLesOpAnnulationVise from "../../pages/TableauBord/TableauBordHorsSigobe/ToutLesOrdresPaiementAnnulation/ToutLesOpAnnulationVise.vue";
import ToutLesOpAnnulationViseO from "../../pages/TableauBord/TableauBordHorsSigobe/ToutLesOrdresPaiementAnnulation/ToutLesOpAnnulationViseO.vue";


import ToutLesOpDefinitifEnAttente from "../../pages/TableauBord/TableauBordHorsSigobe/ToutLesOrdresPaiementDefinitif/ToutLesOpDefinitifEnAttente.vue";
import ToutLesOpDefinitifDiferer from "../../pages/TableauBord/TableauBordHorsSigobe/ToutLesOrdresPaiementDefinitif/ToutLesOpDefinitifDiferer.vue";
import ToutLesOpDefinitifRejete from "../../pages/TableauBord/TableauBordHorsSigobe/ToutLesOrdresPaiementDefinitif/ToutLesOpDefinitifRejete.vue";
import ToutLesOpDefinitifVise from "../../pages/TableauBord/TableauBordHorsSigobe/ToutLesOrdresPaiementDefinitif/ToutLesOpDefinitifVise.vue";
import ToutLesOpDefinitifViseO from "../../pages/TableauBord/TableauBordHorsSigobe/ToutLesOrdresPaiementDefinitif/ToutLesOpDefinitifViseO.vue";


import ToutLesOpDirectEnAttente from "../../pages/TableauBord/TableauBordHorsSigobe/ToutLesOrdresPaiementDirect/ToutLesOpDirectEnAttente.vue";
import ToutLesOpDirectDiferer from "../../pages/TableauBord/TableauBordHorsSigobe/ToutLesOrdresPaiementDirect/ToutLesOpDirectDiferer.vue";
import ToutLesOpDirectRejete from "../../pages/TableauBord/TableauBordHorsSigobe/ToutLesOrdresPaiementDirect/ToutLesOpDirectRejete.vue";
import ToutLesOpDirectVise from "../../pages/TableauBord/TableauBordHorsSigobe/ToutLesOrdresPaiementDirect/ToutLesOpDirectVise.vue";
import ToutLesOpDirectViseO from "../../pages/TableauBord/TableauBordHorsSigobe/ToutLesOrdresPaiementDirect/ToutLesOpDirectViseO.vue";


const TableauBordGeneral =[


    {
        path:"/ToutLesOpDirectDiferer",
        name:"ToutLesOpDirectDiferer",
        component:ToutLesOpDirectDiferer
    },
    {
        path:"/ToutLesOpDirectRejete",
        name:"ToutLesOpDirectRejete",
        component:ToutLesOpDirectRejete
    },
    {
        path:"/ToutLesOpDirectVise",
        name:"ToutLesOpDirectVise",
        component:ToutLesOpDirectVise
    },

    {
        path:"/ToutLesOpDirectViseO",
        name:"ToutLesOpDirectViseO",
        component:ToutLesOpDirectViseO
    },

    {
        path:"/ToutLesOpDirectEnAttente",
        name:"ToutLesOpDirectEnAttente",
        component:ToutLesOpDirectEnAttente
    },
    
    {
        path:"/ToutLesOpDefinitifDiferer",
        name:"ToutLesOpDefinitifDiferer",
        component:ToutLesOpDefinitifDiferer
    },
    {
        path:"/ToutLesOpDefinitifRejete",
        name:"ToutLesOpDefinitifRejete",
        component:ToutLesOpDefinitifRejete
    },
    {
        path:"/ToutLesOpDefinitifVise",
        name:"ToutLesOpDefinitifVise",
        component:ToutLesOpDefinitifVise
    },

    {
        path:"/ToutLesOpDefinitifViseO",
        name:"ToutLesOpDefinitifViseO",
        component:ToutLesOpDefinitifViseO
    },

    {
        path:"/ToutLesOpDefinitifEnAttente",
        name:"ToutLesOpDefinitifEnAttente",
        component:ToutLesOpDefinitifEnAttente
    },
    {
        path:"/ToutLesOpAnnulationDiferer",
        name:"ToutLesOpAnnulationDiferer",
        component:ToutLesOpAnnulationDiferer
    },
    {
        path:"/ToutLesOpAnnulationRejete",
        name:"ToutLesOpAnnulationRejete",
        component:ToutLesOpAnnulationRejete
    },
    {
        path:"/ToutLesOpAnnulationVise",
        name:"ToutLesOpAnnulationVise",
        component:ToutLesOpAnnulationVise
    },

    {
        path:"/ToutLesOpAnnulationViseO",
        name:"ToutLesOpAnnulationViseO",
        component:ToutLesOpAnnulationViseO
    },




    {
        path:"/ToutLesOpAnnulationEnAttente",
        name:"ToutLesOpAnnulationEnAttente",
        component:ToutLesOpAnnulationEnAttente
    },















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
