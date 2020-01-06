// get all prestation
export const GET_ALL_PRESTATION = (state, tableau_prestation) =>{
    state.prestations = tableau_prestation
}

// add * presttation 

export const AJOUTER_PRESTATION = (state, elementAjouter) => {
    state.prestations.unshift(elementAjouter)
}

// update all prestation
export const MODIFIER_PRESTATION = (state, elementModif)=>{
    state.prestations = state.prestations.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete all prestation

export const DELETE_PRESTATION = (state, id)=> {
    state.prestations = state.prestations.filter(prest => prest.id !=id)
}


// get all actedepense
export const GET_ALL_ACTE_DEPENSE = (state, tableau_acte_depense) =>{
    state.acteDepense = tableau_acte_depense
}

// add * acte depense 

export const AJOUTER_ACTE_DEPENSE = (state, elementAjouter) => {
    state.acteDepense.unshift(elementAjouter)
}


// update all acte depense
export const MODIFIER_ACTE_DEPENSE = (state, elementModif)=>{
    state.acteDepense = state.acteDepense.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete all prestation

export const SUPPRIMER_ACTE_DEPENSE = (state, id)=> {
    state.acteDepense = state.acteDepense.filter(prest => prest.id !=id)
}

// get all bailleur
export const GET_ALL_BAILLEUR = (state, tableau_bailleur) =>{
    state.bailleurs = tableau_bailleur
}

// add * bailleur

export const AJOUTER_BAILLEUR = (state, elementAjouter) => {
    state.bailleurs.unshift(elementAjouter)
}

// update all bailleur
export const MODIFIER_BAILLEUR = (state, elementModif)=>{
    state.bailleurs = state.bailleurs.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete all bailleur

export const SUPPRIMER_BAILLEUR = (state, id)=> {
    state.bailleurs = state.bailleurs.filter(prest => prest.id !=id)
}


// get all banque
export const GET_ALL_BANQUE = (state, tableau_banques) =>{
    state.banques = tableau_banques
}

// add * acte depense 

export const AJOUTER_BANQUE = (state, elementAjouter) => {
    state.banques.unshift(elementAjouter)
}


// update all acte depense
export const MODIFIER_BANQUE = (state, elementModif)=>{
    state.banques = state.banques.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete all prestation

export const SUPPRIMER_BANQUE = (state, id)=> {
    state.banques = state.banques.filter(prest => prest.id !=id)
}



// get all code fonction
export const GET_CODE_FONCTION = (state, tableau_code_foction) =>{
    state.codesFonctions = tableau_code_foction
}

// add * code fonction

export const AJOUTER_CODE_FONCTION = (state, elementAjouter) => {
    state.codesFonctions.unshift(elementAjouter)
}

// update all code fonction
export const MODIFIER_CODE_FONCTION = (state, elementModif)=>{
    state.codesFonctions = state.codesFonctions.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete all code fonction

export const SUPPRIMER_CODE_FONCTION = (state, id)=> {
    state.codesFonctions = state.codesFonctions.filter(prest => prest.id !=id)
}


// get all compte
export const GET_ALL_COMPTE = (state, tableau_compte) =>{
    state.comptes = tableau_compte
}

// add * compte

export const AJOUTER_COMPTE = (state, elementAjouter) => {
    state.comptes.unshift(elementAjouter)
}


// update all compte
export const MODIFIER_COMPTE = (state, elementModif)=>{
    state.comptes = state.comptes.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete all compte

export const SUPPRIMER_COMPTE = (state, id)=> {
    state.comptes = state.comptes.filter(prest => prest.id !=id)
}


// get all facture
export const GET_ALL_FACTURE = (state, tableau_facture) =>{
    state.factures = tableau_facture
}

// add * facture

export const AJOUTER_FACTURE = (state, elementAjouter) => {
    state.factures.unshift(elementAjouter)
}

// update all facture
export const MODIFIER_FACTURE = (state, elementModif)=>{
    state.factures = state.factures.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete all facture

export const SUPPRIMER_FACTURE = (state, id)=> {
    state.factures = state.factures.filter(prest => prest.id !=id)
}


// get all lot
export const GET_ALL_LOT = (state, tableau_lots) =>{
    state.lots = tableau_lots
}

// add * lot

export const AJOUTER_LOT = (state, elementAjouter) => {
    state.lots.unshift(elementAjouter)
}


// update all lot
export const MODIFIER_LOT = (state, elementModif)=>{
    state.lots = state.lots.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete all lots

export const SUPPRIMER_LOT = (state, id)=> {
    state.lots = state.lots.filter(prest => prest.id !=id)
}



// get all type_prestation
export const GET_ALL_TYPE_PRESTATION = (state, tableau_type_prestation) =>{
    state.typePrestations = tableau_type_prestation
}

// add * type_prestation

export const AJOUTER_TYPE_PRESTATION = (state, elementAjouter) => {
    state.typePrestations.unshift(elementAjouter)
}

// update all type_prestation
export const MODIFIER_TYPE_PRESTATION = (state, elementModif)=>{
    state.typePrestations = state.typePrestations.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete all type_prestation

export const SUPPRIMER_TYPE_PRESTATION = (state, id)=> {
    state.typePrestations = state.typePrestations.filter(prest => prest.id !=id)
}


// get all type facture
export const GET_TYPE_FACTURE = (state, tableau_type_facture) =>{
    state.typeFactures = tableau_type_facture
}

// add * type facture

export const AJOUTER_TYPE_FACTURE = (state, elementAjouter) => {
    state.typeFactures.unshift(elementAjouter)
}


// update all type facture
export const MODIFIER_TYPE_FACTURE = (state, elementModif)=>{
    state.typeFactures = state.typeFactures.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete all type facture

export const SUPPRIMER_TYPE_FACTURE = (state, id)=> {
    state.typeFactures = state.typeFactures.filter(prest => prest.id !=id)
}



// get all type acte depense
export const GET_ALL_TYPE_ACTE_DEPENSE = (state, tableau_type_acte_depense) =>{
    state.typeActeDepense = tableau_type_acte_depense
}

// add * type_prestation

export const AJOUTER_TYPE_ACTE_DEPENSE = (state, elementAjouter) => {
    state.typeActeDepense.unshift(elementAjouter)
}

// update all type_prestation
export const MODIFIER_TYPE_ACTE_DEPENSE = (state, elementModif)=>{
    state.typeActeDepense = state.typeActeDepense.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete all type_acte depense

export const SUPPRIMER_TYPE_ACTE_DEPENSE = (state, id)=> {
    state.typeActeDepense = state.typeActeDepense.filter(prest => prest.id !=id)
}


// get all acteur depense
export const GET_ALL_ACTEUR_DEPENSE = (state, tableau_acteur_depense) =>{
    state.acteurDepense = tableau_acteur_depense
}

// add * type facture

export const AJOUTER_ACTEUR_DEPENSE = (state, elementAjouter) => {
    state.acteurDepense.unshift(elementAjouter)
}


// update all type facture
export const MODIFIER_ACTEUR_DEPENSE = (state, elementModif)=>{
    state.acteurDepense = state.acteurDepense.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete all type facture

export const SUPPRIMER_ACTEUR_DEPENSE = (state, id)=> {
    state.acteurDepense = state.acteurDepense.filter(prest => prest.id !=id)
}


// action pour analyseDossier && cojo


// get all type acte depense
export const GET_ALL_ANALYSE_DOSSIER = (state, tableau_analyse_dossier) =>{
    state.analyseDossiers = tableau_analyse_dossier
}

// add * analyse dossier

export const AJOUTER_ANALYSE_DOSSIER = (state, elementAjouter) => {
    state.analyseDossiers.unshift(elementAjouter)
}

// update all analyse dossier
export const MODIFIER_ANALYSE_DOSSIER = (state, elementModif)=>{
    state.analyseDossiers = state.analyseDossiers.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete all analyse de dosssier

export const SUPPRIMER_ANALYSE_DOSSIER = (state, id)=> {
    state.analyseDossiers = state.analyseDossiers.filter(prest => prest.id !=id)
}


// get all la cojo
export const GET_ALL_COJO = (state, tableau_cojo) =>{
    state.cojos = tableau_cojo
}

// add * cojo

export const AJOUTER_COJO = (state, elementAjouter) => {
    state.cojos.unshift(elementAjouter)
}


// update cojo
export const MODIFIER_COJO = (state, elementModif)=>{
    state.cojos = state.cojos.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete cojo

export const SUPRIMER_COJO = (state, id)=> {
    state.cojos = state.cojos.filter(prest => prest.id !=id)
}

// mutation pour condition && fonction occupper




// get all condition
export const GET_ALL_CONDITION = (state, tableau_condition) =>{
    state.conditions = tableau_condition
}

// add * condition

export const AJOUTER_CONDITION = (state, elementAjouter) => {
    state.conditions.unshift(elementAjouter)
}

// update condition
export const MODIFIER_CONDITION = (state, elementModif)=>{
    state.conditions = state.conditions.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete condition

export const SUPPRIMER_CONDITION = (state, id)=> {
    state.conditions = state.conditions.filter(prest => prest.id !=id)
}


// get all fonction ocupper
export const GET_ALL_FONCTION_OCCUPPE = (state, tableau_fonction_occuppe) =>{
    state.fonctionOccupes = tableau_fonction_occuppe
}

// add * fonction occuppe

export const AJOUTER_FONCTION_OCCUPPE = (state, elementAjouter) => {
    state.fonctionOccupes.unshift(elementAjouter)
}


// update fonction occuppe
export const MODIFIER_FONCTION_OCCUPPE = (state, elementModif)=>{
    state.fonctionOccupes = state.fonctionOccupes.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete fonction occuppe

export const SUPPRIMER_FONCTION_OCCUPPE = (state, id)=> {
    state.fonctionOccupes = state.fonctionOccupes.filter(prest => prest.id !=id)
}



// get all nature fonction
export const GET_ALL_NATURE_FONCTION = (state, tableau_nature_fonction) =>{
    state.natureFonctions = tableau_nature_fonction
}

// add * nature fonction

export const AJOUTER_NATURE_FONCTION = (state, elementAjouter) => {
    state.natureFonctions.unshift(elementAjouter)
}

// update all nature fonction

export const MODIFIER_NATURE_FONCTION = (state, elementModif)=>{
    state.natureFonctions = state.natureFonctions.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete all nature fonction

export const SUPPRIMER_NATURE_FONCTION = (state, id)=> {
    state.natureFonctions = state.natureFonctions.filter(prest => prest.id !=id)
}


// get all signature
export const GET_ALL_SIGNATURE = (state, tableau_signature) =>{
    state.signatures = tableau_signature
}

// add * signature

export const AJOUTER_SIGNATURE = (state, elementAjouter) => {
    state.signatures.unshift(elementAjouter)
}


// update all signature
export const MODIFIER_SIGNATURE = (state, elementModif)=>{
    state.signatures = state.signatures.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete signature

export const SUPPRIMER_SIGNATURE = (state, id)=> {
    state.signatures = state.signatures.filter(prest => prest.id !=id)
}





// get all type acte effet financier

export const GET_ALL_TYPE_ACTE_EFFET_FINANCIER = (state, tableau_type_acte_effet_financier) =>{
    state.typeActeEffetFinanciers = tableau_type_acte_effet_financier
}

// add * type acte effet financier

export const AJOUTER_TYPE_ACTE_EFFET_FINANCIER = (state, elementAjouter) => {
    state.typeActeEffetFinanciers.unshift(elementAjouter)
}

// update type acte effet financier
export const MODIFIER_TYPE_ACTE_EFFET_FINANCIER = (state, elementModif)=>{
    state.typeActeEffetFinanciers = state.typeActeEffetFinanciers.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete type acte efffet financier

export const SUPPRIMER_TYPE_ACTE_AFFET_FINANCIER = (state, id)=> {
    state.typeActeEffetFinanciers = state.typeActeEffetFinanciers.filter(prest => prest.id !=id)
}


// get type analyse
export const GET_TYPE_ANALYSE = (state, tableau_type_analyse) =>{
    state.typeAnalyses = tableau_type_analyse
}

// add * type analyse

export const AJOUTER_TYPE_ANALYSE = (state, elementAjouter) => {
    state.typeAnalyses.unshift(elementAjouter)
}


// update type analyse
export const MODIFIER_TYPE_ANALYSE = (state, elementModif)=>{
    state.typeAnalyses = state.typeAnalyses.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete type analyse 

export const SUPPRIMER_TYPE_ANALYSE = (state, id)=> {
    state.typeAnalyses = state.typeAnalyses.filter(prest => prest.id !=id)
}




// get all type unite administrative
export const GET_TYPE_UA = (state, tableau_type_ua) =>{
    state.typeUa = tableau_type_ua
}

// add * type unite administrative

export const AJOUTER_TYPE_UA = (state, elementAjouter) => {
    state.typeUa.unshift(elementAjouter)
}

// update type unite administrative
export const MODIFIER_TYPE_UA = (state, elementModif)=>{
    state.typeUa = state.typeUa.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}

// delete type unite administrative

export const SUPPRIMER_TYPE_UA = (state, id)=> {
    state.typeUa = state.typeUa.filter(prest => prest.id !=id)
}

// get all unite administrative
export const GET_ALL_UNITE_ADMINISTRATIVE = (state, tableau_unite_administrative) =>{
    state.uniteAdministratives = tableau_unite_administrative
}

// add * unite administrative

export const AJOUTER_UNITE_ADMINISTRATIVE = (state, elementAjouter) => {
    state.uniteAdministratives.unshift(elementAjouter)
}


// update unite administrative
export const MODIFIER_UNITE_ADMINISTRATIVE = (state, elementModif)=>{
    state.uniteAdministratives = state.uniteAdministratives.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete unite administrative

export const SUPPRIMER_UNITE_ADMINISTRATIVE = (state, id)=> {
    state.uniteAdministratives = state.uniteAdministratives.filter(prest => prest.id !=id)
}







// get all unite de zone 

export const GET_ALL_UNITE_ZONE = (state, tableau_unite_zone) =>{
    state.uniteZones = tableau_unite_zone
}

// add * unite zone

export const AJOUTER_UNITE_ZONE = (state, elementAjouter) => {
    state.uniteZones.unshift(elementAjouter)
}


// update unite zone
export const MODIFIER_UNITE_ZONE = (state, elementModif)=>{
    state.uniteZones = state.uniteZones.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete unite zone

export const SUPPRIMER_UNITE_ZONE = (state, id)=> {
    state.uniteZones = state.uniteZones.filter(prest => prest.id !=id)
}


/// la mutation pour la ligne budgetaire && dossier de candidat

// get all for ligne budgetaire
export const GET_ALL_LIGNE_BUDGETAIRE = (state, tableau_ligne_budgetaire) =>{
    state.ligneBudgetaires = tableau_ligne_budgetaire
}

// add * for ligne budgetaire

export const AJOUTER_LIGNE_BUDGETAIRE = (state, elementAjouter) => {
    state.ligneBudgetaires.unshift(elementAjouter)
}

// update all for ligne budgetaire

export const MODIFIER_LIGNE_BUDGETAIRE = (state, elementModif)=>{
    state.ligneBudgetaires = state.ligneBudgetaires.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete all for ligne budgetaire

export const SUPPRIMER_LIGNE_BUDGETAIRE = (state, id)=> {
    state.ligneBudgetaires = state.ligneBudgetaires.filter(prest => prest.id !=id)
}


// get all for liste dossier candidat
export const GET_DOSSIER_CANDIDAT = (state, tableau_liste_dossier_candidat) =>{
    state.DossierCandidats = tableau_liste_dossier_candidat
}

// add *  for liste dossier candidat

export const AJOUTER_DOSSIER_CANDIDAT = (state, elementAjouter) => {
    state.DossierCandidats.unshift(elementAjouter)
}


// update all for liste dossier candidat
export const MODIFIER_DOSSIER_CANDIDAT = (state, elementModif)=>{
    state.DossierCandidats = state.DossierCandidats.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete fopr liste dossier candidat

export const SUPPRIMER_DOSSIER_CANDIDAT = (state, id)=> {
    state.DossierCandidats = state.DossierCandidats.filter(prest => prest.id !=id)
}



// get all for livrable

export const GET_ALL_LIVRABLE = (state, tableau_livrable) =>{
    state.livrables = tableau_livrable
}

// add * for livrable

export const AJOUTER_LIVRABLE = (state, elementAjouter) => {
    state.livrables.unshift(elementAjouter)
}

// update for livrable
export const MODIFIER_LIVRABLE = (state, elementModif)=>{
    state.livrables = state.livrables.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete the livrable

export const SUPPRIMER_LIVRABLE = (state, id)=> {
    state.livrables = state.livrables.filter(prest => prest.id !=id)
}


// get all modifier dossier candidat
// const GET_MODIFIER_DOSSIER_CANDIDAT = (state, tableau_modifier_dossier_candidat) =>{
//     state.modifierDossierCadidats = tableau_modifier_dossier_candidat
// }

// add * modifier dossier candidat

// const AJOUTER_MODIFIER_DOSSIER_CANDIDAT = (state, elementAjouter) => {
//     state.modifierDossierCadidats.unshift(elementAjouter)
// }


// update all  modifier dossier candidat
// const MODIFIER_DOSSIER_CANDIDAT = (state, elementModif)=>{
//     state.modifierDossierCadidats = state.modifierDossierCadidats.map(response => {
//         if(response.id == elementModif.id){
//             response = {...elementModif}
//         }
//         return response
//     })
// }


// delete the modified dossier candidat

// const SUPPRIMER_DOSSIER_CANDIDAT = (state, id)=> {
//     state.modifierDossierCadidats = state.modifierDossierCadidats.filter(prest => prest.id !=id)
// }

// get all zone geographique
export const GET_ALL_ZONE_GEOGRAPHIQUE = (state, tableau_zone_geographique) =>{
    state.zoneGeographiques = tableau_zone_geographique
}

// add * zone geographique

export const AJOUTER_ZONE_GEOGRAPHIQUE = (state, elementAjouter) => {
    state.zoneGeographiques.unshift(elementAjouter)
}

// update zone geographique
export const MODIFIER_ZONE_GEOGRAPHIQUE = (state, elementModif)=>{
    state.zoneGeographiques = state.zoneGeographiques.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}

// delete zone geographique

export const SUPPRIMER_ZONE_GEOGRAPHIQUE = (state, id)=> {
    state.zoneGeographiques = state.zoneGeographiques.filter(prest => prest.id !=id)
}

// get all type text juridique
export const GET_ALL_TYPE_TEXT_JURIDIQUE = (state, tableau_type_text_juridique) =>{
    state.typeTextJuridiques = tableau_type_text_juridique
}

// add * type text juridique

export const AJOUTER_TYPE_TEXT_JURIDIQUE = (state, elementAjouter) => {
    state.typeTextJuridiques.unshift(elementAjouter)
}


// update type text juridique
export const MODIFIER_TYPE_TEXT_JURIDIQUE = (state, elementModif)=>{
    state.typeTextJuridiques = state.typeTextJuridiques.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete type text juridique

export const SUPPRIMER_TYPE_TEXT_JURIDIQUE = (state, id)=> {
    state.typeTextJuridiques = state.typeTextJuridiques.filter(prest => prest.id !=id)
}



// get all realite service faire

export const GET_REALITE_SERVICE_FAIT = (state, tableau_realite_service_fait) =>{
    state.realiteServiceFaits = tableau_realite_service_fait
}

// add * realite service faire 

export const AJOUTER_REALITE_SERVICE_FAIT = (state, elementAjouter) => {
    state.realiteServiceFaits.unshift(elementAjouter)
}


// update of realite service fait
export const MODIFIER_REALITE_SERVICE_FAIT = (state, elementModif)=>{
    state.realiteServiceFaits = state.realiteServiceFaits.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete the realite service fait

export const SUPPRIMER_REALITE_SERVICE_FAIT = (state, id)=> {
    state.realiteServiceFaits = state.realiteServiceFaits.filter(prest => prest.id !=id)
}
