import acteDepense from '../../pages/bien_service/acteDepense.vue';
import acteurDepense from '../../pages/bien_service/acteurDepense.vue';
import analyseDossier from '../../pages/bien_service/analyseDossier';
import bailleur from '../../pages/bien_service/bailleur.vue';
import banque from '../../pages/bien_service/bailleur.vue';
import codeFonction from '../../pages/bien_service/codeFonction.vue';
import cojo from '../../pages/bien_service/cojo.vue';
import compte from '../../pages/bien_service/compte.vue';
import condition from '../../pages/bien_service/condition.vue';
import facture from '../../pages/bien_service/facture.vue';
import fonctionOccupee from '../../pages/bien_service/fonctionOccupee.vue';
import lot from '../../pages/bien_service/lot.vue';
import natureFonction from '../../pages/bien_service/natureFonction.vue';
import prestation from '../../pages/bien_service/prestation.vue';
import signature from '../../pages/bien_service/signature.vue';
import type_prestation from '../../pages/bien_service/type_prestation.vue';
import typeActeDepense from '../../pages/bien_service/typeActeDepense.vue';
import typeActeEffetFinancier from '../../pages/bien_service/typeActeEffetFinancier.vue';
import typeAnalyse from '../../pages/bien_service/typeAnalyse.vue';
import typeFacture from '../../pages/bien_service/typeFacture.vue';
import typeUa from '../../pages/bien_service/typeUa.vue';
const BienServiceRoutes = [
    // la route pour acte de depense
{
 path:"/creation-acte-depense",
 name: "acteDepense",
 component:acteDepense  
},
// la route pour acteur de depense
{
path:"/creation-acteur-depense",
name:"acteurDepense",
component:acteurDepense
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
       {
           path:"/creation-lot",
           name:"lot",
           component:lot
       },
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
       path:"/creation-facture",
       name:"typeUa",
       component:typeUa
       }
       
]

export default BienServiceRoutes;