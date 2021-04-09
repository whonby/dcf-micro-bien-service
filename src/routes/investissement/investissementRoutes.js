import investissement from '../../pages/investissement/investissement.vue';
import tableauBordInvestissement from '../../pages/investissement/tableauBordInvestissement.vue';
import detailMarcheInvestissement from '../../pages/investissement/dossierInvestissement/detailMarcheInvestissement'
import listeMarcheInvestissement from '../../pages/investissement/listeMarcheInvestissement.vue';

import ExecutionLotInvestissement from '../../pages/investissement/ExecutionLotMarche.vue';
const investissementRoutes = [
    {

        path: "/ExecutionLotInvestissement/:id",
        name: "ExecutionLotInvestissement",
        component: ExecutionLotInvestissement

    },

    {
        path: "/listeMarcheInvestissement",
        name: "listeMarcheInvestissement",
        component: listeMarcheInvestissement
    },
    {
        path: "/investissement",
        name: "investissement",
        component: investissement
    },



    {
        path: "/tabeau-bord-investissement",
        name: "tableauBordInvestissement",
        component: tableauBordInvestissement
    },

    {
        path: "/detail-marche-investissement/:id",
        name: "detailMarcheInvestissement",
        component: detailMarcheInvestissement
    }
]
export default investissementRoutes;