import Cartographie from "../../pages/cartographie/Cartographie";
import TableauBordCartographie from "@/gestionDesModule/TableauBordCatographies";
import CarteInfrastructureCIPasRegions from "@/pages/cartographie/CarteInfrastructureCIPasRegions";
const CartographieRoutes = [
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

