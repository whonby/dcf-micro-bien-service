import budgetGeneral from "../../pages/planification_budgetaire/budgetGeneral.vue";
import detailBudgetGeneral from "../../pages/planification_budgetaire/detailBudgetGeneral.vue"
import budgetDetaille from "../../pages/planification_budgetaire/budgetDetaille.vue"
const planificationBudgetaireRoutes = [
    {
        path: "/budgetGeneral",
        name: "budgetGeneral",
        component: budgetGeneral
    },
    //detail immobilisation
    {
        path: "/Detail-budgetGeneral/:id_budgetGeneral",
        name: "detailBudgetGeneral",
        component: detailBudgetGeneral
    },
    {
        path: "/budgetDetaille",
        name: "budgetDetaille",
        component: budgetDetaille
    }
];

export default planificationBudgetaireRoutes;
