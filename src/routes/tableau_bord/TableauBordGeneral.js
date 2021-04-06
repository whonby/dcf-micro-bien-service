import TableauBordGeneralBugdet from "../../gestionDesModule/TableauBordGeneral";
import TableauBordGeneralBugdetHs from "../../gestionDesModule/TableauBordGeneralHS";
import TableauBordGeneralMarche from "../../pages/TableauBord/TableauBordGeneral/TableauBordMarche";


const TableauBordGeneral =[

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
