import acteDepense from '../../pages/bien_service/acteDepense.vue';
import organeDecision from "../../pages/bien_service/parametres/organeDecision.vue";
import naturePrix from "../../pages/bien_service/parametres/naturePrix.vue";
import motifPassation from "../../pages/bien_service/parametres/motifPassation.vue";
import rolemembrecojo from "../../pages/bien_service/parametres/rolemembrecojo.vue";
import acteurDepense from '../../pages/bien_service/acteurDepense.vue';
import analyseDossier from '../../pages/bien_service/analyseDossier';
import bailleur from '../../pages/bien_service/bailleur.vue';
import banque from '../../pages/bien_service/bailleur.vue';
import codeFonction from '../../pages/bien_service/codeFonction.vue';
import cojo from '../../pages/bien_service/cojo.vue';
import compte from '../../pages/bien_service/compte.vue';
import condition from '../../pages/bien_service/condition.vue';
import facture from '../../pages/bien_service/facture.vue';
import AjouteFacture from '../../pages/bien_service/contractualisation/DossierExecution/dossierFacture/AjouteFacture';
import fonctionOccupee from '../../pages/bien_service/fonctionOccupee.vue';
// import lot from '../../pages/bien_service/lot.vue';creation-execution-marche
import natureFonction from '../../pages/bien_service/natureFonction.vue';
import prestation from '../../pages/bien_service/prestation.vue';
import signature from '../../pages/bien_service/signature.vue';
import type_prestation from '../../pages/bien_service/parametres/type_prestation.vue';
import typeActeDepense from '../../pages/bien_service/parametres/typeActeDepense.vue';
import typeActeEffetFinancier from '../../pages/bien_service/parametres/typeActeEffetFinancier.vue';
import typeAnalyse from '../../pages/bien_service/parametres/typeAnalyse.vue';
import typeFacture from '../../pages/bien_service/parametres/typeFacture.vue';
import typeUa from '../../pages/bien_service/typeUa.vue';
import textJuridique from '../../pages/bien_service/parametres/textJuridique.vue';
import autreTextJuridique from '../../pages/bien_service/parametres/autreTextJuridique.vue';
import typeProcedure from '../../pages/bien_service/Prametre_marchers/typeProcedure.vue';
import procedurePassation from '../../pages/bien_service/Prametre_marchers/groupeProcedure/procedure.vue';
import appelOffre from '../../pages/bien_service/contractualisation/appelOffre.vue';
import ajouterAppelOffre from '../../pages/bien_service/contractualisation/ajouterAppelOffre.vue';
import modificationAppelOffre from '../../pages/bien_service/contractualisation/modificationAppelOffre.vue';
import typeMarche from '../../pages/bien_service/Prametre_marchers/typeMarche.vue';
import modePassation from '../../pages/bien_service/Prametre_marchers/modePassation.vue';
import typeTextJuridique from '../../pages/bien_service/parametres/typeTextJuridique.vue';
// import typeTextJuridique from '../../pages/bien_service/typeTextJuridique.vue';

import marche from '../../pages/bien_service/contractualisation/marche.vue';
import historiqueMarche from '../../pages/gestionMarche/historiqueMarche.vue';
import DetaillMarche from '../../pages/bien_service/contractualisation/DetaillMarche.vue';
import motifDecision from '../../pages/bien_service/parametres/motifDecision.vue';
import documentProcedure from '../../pages/bien_service/parametres/documentProcedure.vue';
import livrable from '../../pages/bien_service/parametres/livrable.vue';
import Engagement from '../../pages/bien_service/contractualisation/engagement.vue';
import detailExecution from '../../pages/bien_service/contractualisation/DossierExecution/dossierPrincipal/detailExecution.vue';
import AjouterEngagement from '../../pages/bien_service/contractualisation/AjouterEngagement.vue';
import executionMarche from '../../pages/bien_service/contractualisation/executionMarche.vue';

import actesEffet from '../../pages/bien_service/contractualisation/actesEffet.vue';
import tableauBord from '../../pages/bien_service/contractualisation/tableauBord.vue';
import typeAppel from '../../pages/bien_service/parametres/type_appel.vue';
import typeCandidat from '../../pages/bien_service/parametres/typeCandidat.vue';
import pays from '../../pages/bien_service/parametres/pays.vue';
import ville from '../../pages/bien_service/parametres/groupe_ville/ville.vue';
import commune from '../../pages/bien_service/parametres/groupe_commune/commune.vue';
import agence from '../../pages/bien_service/parametres/groupe_agence/agence.vue';
import DetailLivrable from '../../pages/bien_service/DetailLivrable.vue';
import DetailEngagement from '../../pages/bien_service/contractualisation/detailEngagement.vue';
import detailRealiteServiceFait from '../../pages/bien_service/contractualisation/detailRealiteServiceFait.vue';
import DetailMandat from '../../pages/bien_service/contractualisation/detailMandat.vue';
import Avenant from '../../pages/bien_service/contractualisation/avenant.vue';
import ModePaiement from '../../pages/bien_service/parametres/ModePaiement.vue';

import DetailMarchePs from '../../pages/bien_service/dossierDetailMarchePs/DetailMarchePs.vue';
import detailMarcheProcedureSimplifierComite from '../../pages/bien_service/dossierDetailMarcheProcedureSimplifierAvecComite/detailMarcheProcedureSimplifierComite.vue';
import detailMarchePsLimite from '../../pages/bien_service/dossierDetailMarcheProcedureSimplifieLimite/detailMarchePsLimite.vue';
import detailMarcheAoi_Aon from '../../pages/bien_service/dossierDetailMarcheAOI_AON/detailMarcheAoi_Aon.vue';
import indicateurBienService from '../../pages/bien_service/contractualisation/indicateurBienService.vue';
import PlanPassationMarche from "../../pages/bien_service/ppm/PlanPassationMarche";
import DetailPPM from "../../pages/bien_service/ppm/DetailPPM";
import detailMarcheFsqc from "../../pages/bien_service/dossierFSQC/detailMarcheFsqc";
import detailMarcheR3cv from "../../pages/bien_service/dossierR3CV/detailMarcheR3cv";
import CycleDeVie from "../../pages/cycle_de_vie/CycleDeVie.vue"
import AjoutMandatDirect from "../../pages/bien_service/contractualisation/DossierExecution/dossierMandat/AjoutMandatDirect.vue";
import AjouterMandatbon from "../../pages/bien_service/contractualisation/DossierExecution/dossierMandat/AjouterMandatbon.vue";
import AjouterEngagementFactureProf from "../../pages/bien_service/contractualisation/DossierExecution/dossierEngagement/AjouterEngagement.vue";
import modifierEngagement from "../../pages/bien_service/contractualisation/DossierExecution/dossierEngagement/modifierEngagement.vue";
import modifierMandat from "../../pages/bien_service/contractualisation/DossierExecution/dossierMandat/modifierMandat.vue";
import graphiqueExecutionMarche from "../../pages/bien_service/contractualisation/DossierExecution/DossierGraphiqueExecutionMarche/graphiqueExecutionMarche.vue"
import HistoriqueDetailExecution from '../../pages/gestionMarche/historisqueExecutionMarche.vue';
import historiqueContualisation from '../../pages/gestionMarche/historiqueContualisation.vue';
import listeTotalMarcheBienService from '../../pages/bien_service/listeDesMarcheTableauBord/listeTotalMarcheBienService.vue';
import listeDesMarcheEnPlanificationBS from '../../pages/bien_service/listeDesMarcheTableauBord/listeDesMarcheEnPlanificationBS.vue';
import listeDesMarcheEnContratualisationBS from '../../pages/bien_service/listeDesMarcheTableauBord/listeDesMarcheEnContratualisationBS.vue';
import listeDesMarcheEnExecutionBS from '../../pages/bien_service/listeDesMarcheTableauBord/listeDesMarcheEnExecutionBS.vue';
import listeDesMarcheResilieBS from '../../pages/bien_service/listeDesMarcheTableauBord/listeDesMarcheResilieBS.vue';
import listeDesMarcheSuspenduBS from '../../pages/bien_service/listeDesMarcheTableauBord/listeDesMarcheSuspenduBS.vue';
import listeDesMarcheTermineBS from '../../pages/bien_service/listeDesMarcheTableauBord/listeDesMarcheTermineBS.vue';
import imageMarche from "../../pages/bien_service/contractualisation/DossierExecution/dossierImageMarche/imageMarche.vue"
import DetailImageMarche from "../../pages/ImageMarche/DetailImageMarche"
import ListeImageMarche from "../../pages/ImageMarche/ListeImageMarche"
import TableauBordGestionMarche from "../../pages/TableauBord/TableauBordGestionMarche.vue"



import DetailInforTableBordUniteAd from "../../pages/TableauBord/DetailInforTableBordUniteAd"
const BienServiceRoutes = [

    {
        path:"/table_bord_gestion_marche_hors_sib/:id",
        name:"DetailInforTableBordUniteAd",
        component:DetailInforTableBordUniteAd
    },
    {
        path:"/table_bord_gestion_marche_hors_sib",
        name:"TableauBordGestionMarche",
        component:TableauBordGestionMarche
    },
    {
        path:"/detail_image_marche/:id",
        name:"DetailImageMarche",
        component:DetailImageMarche
    },
    {
        path:"/liste_image_marche/:id",
        name:"ListeImageMarche",
        component:ListeImageMarche
    },
    {
        path:"/image-marche",
        name:"image_marche",
        component:imageMarche
    },
    {
        path: "/AjouteFacture",
        name: "AjouteFacture",
        component: AjouteFacture
    },
    {
        path: "/liste-Des-Marche-Termine-Bien-Service",
        name: "listeDesMarcheTermineBS",
        component: listeDesMarcheTermineBS
    },
    {
        path: "/liste-Des-Marche-Suspendu-Bien-Service",
        name: "listeDesMarcheSuspenduBS",
        component: listeDesMarcheSuspenduBS
    },
    {
        path: "/liste-Des-Marche-Resilie-Bien-Service",
        name: "listeDesMarcheResilieBS",
        component: listeDesMarcheResilieBS
    },
    {
        path: "/liste-Des-Marche-En-Execution-Bien-Service",
        name: "listeDesMarcheEnExecutionBS",
        component: listeDesMarcheEnExecutionBS
    },
    {
        path: "/liste-Des-Marche-En-ContratualisationBien-Service",
        name: "listeDesMarcheEnContratualisationBS",
        component: listeDesMarcheEnContratualisationBS
    },
    {
        path: "/liste-Marche-planification-Bien-Service",
        name: "listeDesMarcheEnPlanificationBS",
        component: listeDesMarcheEnPlanificationBS
    },
    {
        path: "/liste-Total-Marche-Bien-Service",
        name: "listeTotalMarcheBienService",
        component: listeTotalMarcheBienService
    },
   /* {

        path: "/creation-execution-marche-investissement",
        name: "executionMarcheInvestissement",
        component: executionMarcheInvestissement
detailExecution
    },*/
    {
        path: '/historiqueContualisation/:id',
        name: "historiqueContualisation",
        component: historiqueContualisation
    },
    {
        path: '/HistoriqueDetailExecution/:id',
        name: "HistoriqueDetailExecution",
        component: HistoriqueDetailExecution
    },
    {
        path: "/Modifier_Mandat/:id",
        name: "modifierMandat",
        component: modifierMandat
    },
    {
        path:"/graphique-excution-marche",
        name:"graphique_excution_marche",
        component:graphiqueExecutionMarche
    },
    {
        path: "/Modifier_Engagement/:id",
        name: "modifierEngagement",
        component: modifierEngagement
    },
    {
        path: "/Ajouter-Mandat-bon-Commande/:id",
        name: "AjouterMandatbon",
        component: AjouterMandatbon
    },
    {
        path: "/ajouter-Engagement/:id",
        name: "AjouterEngagementFactureProf",
        component: AjouterEngagementFactureProf
    },
    {
        path: "/ajouter-Mandat/:id",
        name: "AjoutMandatDirect",
        component: AjoutMandatDirect
    },
    {
        path: "/historique-Marche",
        name: "historiqueMarche",
        component: historiqueMarche
    },
    {
        path: "/organe-decision",
        name: "organeDecision",
        component: organeDecision
    },
    {
        path: "/nature-prix",
        name: "naturePrix",
        component: naturePrix
    },
    {
        path: "/motif-passation",
        name: "motifPassation",
        component: motifPassation
    },
   
    {
        path: "/role-membrecojo",
        name: "rolemembrecojo",
        component: rolemembrecojo
    },
    {
        path: '/detail-Realite-ServiceFait/:id_detailRealiteServiceFait',
        name: "detailRealiteServiceFait",
        component: detailRealiteServiceFait
    },
    {
        path: "indicateur-Bien-Service",
        name: "indicateurBienService",
        component: indicateurBienService
    },
    {
        path: "mode-paiement",
        name: "ModePaiement",
        component: ModePaiement
    },
    // la route pour le chemin de procedure simplifier de limite

    {
        path:"/detail-marche-psl/:id",
        name:"detailMarchePsLimite",
        component:detailMarchePsLimite
    },

    {
        path:"/detail-marche-fsqc/:id",
        name:"detailMarcheFsqc",
        component:detailMarcheFsqc
    },

    {
        path:"/detail-marche-R3cv/:id",
        name:"detailMarcheR3cv",
        component:detailMarcheR3cv
    },
    // chemin de procedure d'appel offre iternational et national

    {
        path:"/detail-marche-AOI-AON/:id",
        name:"detailMarcheAoi_Aon",
        component:detailMarcheAoi_Aon
    },


    
    {
        path:"/detail-marche-psc/:id",
        name:"detailMarcheProcedureSimplifierComite",
        component:detailMarcheProcedureSimplifierComite
    },
    {
        path: "Avenant",
        name: "Avenant",
        component: Avenant
    },
    {
        path: '/detail-Mandat/:id_detail_mandat',
        name: "DetailMandat",
        component: DetailMandat
    },
    
    {
        path: '/detail-Engagement/:id_detail_engagement',
        name: "DetailEngagement",
        component: DetailEngagement
    },
    {
        path: "agence",
        name: "agence",
        component: agence
    },
    {
        path: "commune",
        name: "commune",
        component: commune
    },
    {
        path: "ville",
        name: "ville",
        component: ville
    },
    {
        path: "pays",
        name: "pays",
        component: pays
    },
    {
        path: "type-Candidat",
        name: "typeCandidat",
        component: typeCandidat
    },
    {
        path: "type-Appel",
        name: "typeAppel",
        component: typeAppel
    },
    {
        path: "tableauBord",
        name: "tableauBord",
        component: tableauBord
    },
    {
        path: "/Ajouter-Engagement/:id",
        name: "AjouterEngagement",
        component: AjouterEngagement
    },



    {
        path: "/type-Text-Juridique",
        name: "typeTextJuridique",
        component: typeTextJuridique
    },
    // route excution marche
    {
        path:"/creation-execution-marche",
        name:"executionMarche",
        component:executionMarche
    }, 

    // acte effe route

    {
        path:"/liste-acte-effet-financier",
        name:"actesEffet",
        component:actesEffet
    },
    // la route pour acte de depense
    {
        path:"/creation-acte-depense",
        name: "acteDepense",
        component:acteDepense
    },
// la route pour le livrable
    {
        path:"/creation-livrable",
        name:"livrable",
        component:livrable
    },

// la route du document de procedure
    {
        path:"/creation-document-procedure",
        name:'documentProcedure',
        component:documentProcedure
    },



// la route du motif de decision
    {
        path:"/creation-motif-decision",
        name:"motifDecision",
        component:motifDecision
    },

    // detail marche
    {
        path: '/detailExecution/:id',
        name: "detailExecution",
        component: detailExecution
    },
    
    {
        path: '/Engagement/:id',
        name: "Engagement",
        component: Engagement
    },

// detail marche
    {
        path: '/detail-marche/:id',
        name:"DetaillMarche",
        component:DetaillMarche
    },

// detail marche du procedure simplifier
    {
        path:'/detail-marche-ps/:id',
        name:"DetailMarchePs",
        component:DetailMarchePs
    },

    {
        path: '/detail-livrable/:id',
        name:"DetailLivrable",
        component:DetailLivrable
    },

    {
        path:"/creation-marche",
        name:"marche",
        component:marche
    },
// la route de mode de passation
    {
        path:"/creation-mode-passation",
        name:"modePassation",
        component:modePassation
    },
// la route pour acteur de depense
    {
        path:"/creation-acteur-depense",
        name:"acteurDepense",
        component:acteurDepense
    },

// la route pour l'appel offre
    {
        path:"/appel-offre",
        name:"appelOffre",
        component:appelOffre
    },
// la route ajouter appel d'offre
    {
        path:"/creation-appel-offre",
        name:"ajouterAppelOffre",
        component:ajouterAppelOffre
    },
// la route du type marche
    {
        path:"/creation-type-marche",
        name:"typeMarche",
        component:typeMarche
    },
// la route modification appel d'offre
    {
        path:"/modification-appel-offre",
        name:"modificationAppelOffre",
        component:modificationAppelOffre
    },

// la route pour analyse de dossier
    {
        path:"/creation-analyse-de-dossier",
        name:"analyseDossier",
        component:analyseDossier
    },
// la route pour le baileur
    {
        path:"/creation-bailleur",
        name:"bailleur",
        component:bailleur
    },

// la route de type procedure
    {
        path:"/creation-type-procedure",
        name:"typeProcedure",
        component:typeProcedure
    },
// la route autre text juridique
    {
        path:"/cretaion-autre-text-juridique",
        name:"autreTextJuridique",
        component:autreTextJuridique
    },
// la route de procedure de passation
    {
        path:"/creation-procedure-passation",
        name:"procedurePassation",
        component:procedurePassation
    },
    {

        path:"/creation-text-juridique",
        name:"textJuridique",
        component:textJuridique
    },
// la route pour la banque
    {
        path:"/creation-banque",
        name:"banque",
        component:banque
    },
// la route pour le code fonction
    {
        path:"/creation-code-fonction",
        name:"codeFonction",
        component:codeFonction
    },
// la route pour la cojo
    {
        path:"/creation-cojo",
        name:"cojo",
        component:cojo
    },
    // la route pour le compte
    {
        path:"/creation-compte",
        name: "compte",
        component:compte
    },
    // la route pour la condition
    {
        path:"/creation-condition",
        name:"condition",
        component:condition
    },
    // la route pour la facture
    {
        path:"/creation-facture",
        name:"facture",
        component:facture
    },
    // la route pour la fonction occupee
    {
        path:"/creation-fonction-occuppee",
        name:"fonctionOccupee",
        component:fonctionOccupee
    },
    // la route pour le lot
    //    {
    //        path:"/creation-lot",
    //        name:"lot",
    //        component:lot
    //    },
    // la route pour la nature fonction
    {
        path:"/creation-nature-fonction",
        name:"natureFonction",
        component:natureFonction
    },
    // la route pour la prestation
    {
        path:"/creation-prestation",
        name:"prestation",
        component:prestation
    },

    // la route pour la signature
    {
        path:"/creation-signature",
        name:"signature",
        component:signature
    },
// la route pour le type de prestation
    {
        path:"/creation-type-prestation",
        name:"type_prestation",
        component:type_prestation
    },
// la route pour le type acte depense
    {
        path:"/creation-type-acte-depense",
        name:"typeActeDepense",
        component:typeActeDepense
    },
// la route pour le type acte effet financier
    {
        path:"/creation-type-effet-financier",
        name:"typeActeEffetFinancier",
        component:typeActeEffetFinancier
    },
    // la route pour le type analyse
    {
        path:"/creation-type-analyse",
        name: "typeAnalyse",
        component:typeAnalyse
    },
    // la route pour le type de facture
    {
        path:"/creation-type-facture",
        name:"typeFacture",
        component:typeFacture
    },
    // la route pour le type de facture
    {
        path:"/creation-type-unite-administrative",
        name:"typeUa",
        component:typeUa
    },
    {
        path:"/ppm",
        name:"ppm",
        component:PlanPassationMarche
    },
    {
        path:"/ppm/:id",
        name:"DetailPPM",
        component:DetailPPM
    }
    ,
    {
        path:"/cycle_de_vie/:id",
        name:"CycleDeVie",
        component:CycleDeVie
    }

]

export default BienServiceRoutes;