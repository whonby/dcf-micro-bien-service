import Cartographie from "../../pages/cartographie/Cartographie";
import TableauBordCartographie from "@/gestionDesModule/TableauBordCatographies";
import CarteInfrastructureCIPasRegions from "@/pages/cartographie/CarteInfrastructureCIPasRegions";
import CarteExecutionBugetaire from "../../pages/cartographie/CarteExecutionBudgetairePasRegionsEnAECP"
import DetailCarteMarche from "../../pages/cartographie/CarteMarcheDetail"

import CarteauGraphieBudgetaire from "../../pages/cartographie/CarteInfrastructureCIPasRegions"

const CartographieRoutes = [
    {
        path:"/cartographie-bugetaire",
        name:"CarteauGraphieBudgetaire",
        component:CarteauGraphieBudgetaire  
    },
    {
        path:"/detail-carte-marche",
        name:"DetailCarteMarche",
        component:DetailCarteMarche
    },
    {
        path:"/carte-execution-budgetaire",
        name:"CarteExecutionBugetaire",
        component:CarteExecutionBugetaire
    },
    {
        path:"/detail_carte_regions/:id",
        name:"DetailCarteMarche",
        component:DetailCarteMarche
    },
    {

        path:"/tableau-bord-cartographie",
        name:"TableauBordCartographie",
        component:TableauBordCartographie
    },
    {

        path:"/cartographie-budget",
        name:"CartographieBudget",
        component:Cartographie
    },
    {

        path:"/carte-infrastructure-ci-pas-regions",
        name:"CarteInfrastructureCIPasRegions",
        component:CarteInfrastructureCIPasRegions
    },

]

export default CartographieRoutes;

