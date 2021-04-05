import ModePassation from "../../pages/gestion_marche/ModePassation/ModePassation.vue"
import TypeMarche from "../../pages/gestion_marche/TypeMarche/TypeMarche.vue"
import SecteurActivite from "../../pages/gestion_marche/SecteurActivite/SecteurActivite.vue"
import Entreprise from "../../pages/gestion_marche/Entreprise/Entreprises.vue"
import AjouterEntreprise from "../../pages/gestion_marche/Entreprise/AjouterEntreprise.vue"
import DocsPTPAPPM from "../../pages/gestion_marche/DocsPTPAPPM/DocsPTPAPPM.vue"
import EtapeMarche from "../../pages/gestion_marche/EtapeMarche/EtapeMarche.vue"
import MarcheContrat from "../../pages/gestion_marche/MarcheContrat/MarcheContrat"
import AjouterMarcheContrat from "../../pages/gestion_marche/MarcheContrat/AjouterMarcheContrat"
import DetailMarcheContrat from "../../pages/gestion_marche/MarcheContrat/DetailMarcheContrat"
import IndicateurMarche from "../../pages/gestion_marche/IndicateurMarche"
import TableauBordMarche from "../../pages/gestion_marche/TableauBordMarche"
import GestionMarche from "../../pages/gestionMarche/GestionMarche.vue"
import MarcheContratEdite from "../../pages/gestion_marche/MarcheContrat/ModificationMarche"
import EditeEntreprise from "../../pages/gestion_marche/Entreprise/EntrepriseEdite"
import Profil from"../../pages/gestionCF/Profil.vue"
import MarcheExecution from "../../pages/gestion_marche/MarcheContrat/execution/MarcheContratExecution"
import DetailMarcheExecution from "../../pages/gestion_marche/MarcheContrat/execution/DetailMarcheContratExecution"
import banque from '../../pages/gestion_marche/Banque/banque.vue';
import DetaillEntreprise from '../../pages/gestion_marche/Entreprise/DetaillEntreprise.vue';
import detailMarcheParEntreprise from '../../pages/gestionMarche/detailMarcheParEntreprise.vue';

import changeRegimeForme from '../../pages/gestion_marche/Entreprise/formulaireChangeImposit.vue';
const GestionMarcheRoutes = [
    {
        path: '/change-Regime-Forme/:id',
        name: 'changeRegimeForme',
        component: changeRegimeForme,
    },
    {
        path: '/detail-Marche-Par-Entreprise/:id',
        name: "detailMarcheParEntreprise",
        component: detailMarcheParEntreprise
    },
    {
        path: "/creation-profil",
        name: "Profil",
        component: Profil
    },


    {

        path: "/Gestion-Marche",
        name: "GestionMarche",
        component: GestionMarche
    },
    {
        
        path:"/mode-passation",
        name:"ModePassation",
        component:ModePassation
    },
    {
        path:"/detaill-entreprise/:id",
        name:"DetaillEntreprise",
        component:DetaillEntreprise
    },
    {
        path:"/creation-banque",
        name:"banque",
        component:banque
    },
    {
        path:"/type-marche",
        name:"TypeMarche",
        component:TypeMarche
    },
    {
        path:"/secteur-activite",
        name:"SecteurActivite",
        component:SecteurActivite
    },
    {
        path:"/entreprises",
        name:"Entreprise",
        component:Entreprise
    },
    {
        path:"/ajouter-entreprise",
        name:"AjouterEntreprise",
        component:AjouterEntreprise
    },
    {
        path:"/docs-ptpa-ppm",
        name:"DocsPTPAPPM",
        component:DocsPTPAPPM
    },
    {
        path:"/etape-marche",
        name:"EtapeMarche",
        component:EtapeMarche
    },
    {
        path:"/marche-contrat",
        name:"MarcheContrat",
        component:MarcheContrat
    },
    {
        path:"/ajouter-marche-contrat",
        name:"AjouterMarcheContrat",
        component:AjouterMarcheContrat
    },
    {
        path: '/detail-marche-contrat/:id',
        name: 'DetailMarcheContrat',
        component: DetailMarcheContrat,
    }
    ,
    {
        path: '/indicateur-marche/',
        name: 'IndicateurMarche',
        component: IndicateurMarche,
    }
    ,
    {
        path: '/tableau-bord-marche/',
        name: 'TableauBordMarche',
        component: TableauBordMarche,
    }
    ,
    {
        path: '/edite-marche/:id',
        name: 'EditeMarche',
        component: MarcheContratEdite,
    },
    {
        path: '/edite-entreprise/:id',
        name: 'EditeEntreprise',
        component: EditeEntreprise,
    },
    {
        path: '/marche-en-execution/',
        name: 'MarcheExecution',
        component: MarcheExecution,
    },
    {
        path:"/detail-marche-contrat-en-execution/:id",
        name:"DetailMarcheExecution",
        component:DetailMarcheExecution
    }
]

export default GestionMarcheRoutes;

