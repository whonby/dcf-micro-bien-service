import Cartographie from "../../pages/cartographie/Cartographie";
import CarteInfrastructureCIPasRegions from "@/pages/cartographie/CarteInfrastructureCIPasRegions";
const CartographieRoutes = [
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

