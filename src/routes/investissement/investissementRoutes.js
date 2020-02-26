import investissement from '../../pages/investissement/investissement.vue';
import tableauBordInvestissement from '../../pages/investissement/tableauBordInvestissement.vue';
import DetailMarcheInvestissement from '../../pages/investissement/DetailMarcheInvestissement.vue';
import executionActeEffetInvestissement from '../../pages/investissement/executionActeEffetInvestissement.vue';


const investissementRoutes =[

    {
        path:"/creation-investissement",
        name:"investissement",
        component:investissement
    },

    // la route pour l'acte a effet finnancier
    {
        path:"/liste-acte-effet-financier-investissement",
        name:"executionActeEffetInvestissement",
        component:executionActeEffetInvestissement
    },

    {
        path:"/detail-marche-investissement/:id",
        name:"DetailMarcheInvestissement",
        component:DetailMarcheInvestissement
    },

    {
        path:"/tabeau-bord-investissement",
        name:"tableauBordInvestissement",
        component:tableauBordInvestissement
    }
]
export default investissementRoutes;