import investissement from '../../pages/investissement/investissement.vue';
import tableauBordInvestissement from '../../pages/investissement/tableauBordInvestissement.vue';
const investissementRoutes =[

    {
        path:"/creation-investissement",
        name:"investissement",
        component:investissement
    },

    {
        path:"/tabeau-bord-investissement",
        name:"tableauBordInvestissement",
        component:tableauBordInvestissement
    }
]
export default investissementRoutes;