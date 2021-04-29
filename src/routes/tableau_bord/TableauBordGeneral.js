import TableauBordGeneralBugdet from "../../gestionDesModule/TableauBordGeneral";
import TableauBordDuBudgetEclate from "../../gestionDesModule/TableauBordDuBudgetEclate";
import TableauBordOp from "../../gestionDesModule/TableauBordOp";
import TableauBordGeneralBugdetHs from "../../gestionDesModule/TableauBordGeneralHS";
import TableauBordGeneralMarche from "../../pages/TableauBord/TableauBordGeneral/TableauBordMarche";


const TableauBordGeneral =[
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
