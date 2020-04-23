import investissement from '../../pages/investissement/investissement.vue';
import tableauBordInvestissement from '../../pages/investissement/tableauBordInvestissement.vue';
 import detailMarcheInvestissement from '../../pages/investissement/dossierInvestissement/detailMarcheInvestissement'

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
    },

    {
       path:"/detail-marche-investissement/:id",
       name:"detailMarcheInvestissement",
       component:detailMarcheInvestissement
    }
]
export default investissementRoutes;