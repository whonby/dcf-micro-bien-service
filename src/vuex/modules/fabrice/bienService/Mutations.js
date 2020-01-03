// get all prestation
const GET_ALL_PRESTATION = (state, tableau_prestation) =>{
    state.prestations = tableau_prestation
}

// add * presttation 

const AJOUTER_PRESTATION = (state, elementAjouter) => {
    state.prestations.unshift(elementAjouter)
}

// update all prestation
const MODIFIER_PRESTATION = (state, elementModif)=>{
    state.prestations = state.prestations.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete all prestation

const DELETE_PRESTATION = (state, id)=> {
    state.prestations = state.prestations.filter(prest => prest.id !=id)
}


// get all actedepense
const GET_ALL_ACTE_DEPENSE = (state, tableau_acte_depense) =>{
    state.acteDepense = tableau_acte_depense
}

// add * acte depense 

const AJOUTER_ACTE_DEPENSE = (state, elementAjouter) => {
    state.acteDepense.unshift(elementAjouter)
}


// update all acte depense
const MODIFIER_ACTE_DEPENSE = (state, elementModif)=>{
    state.acteDepense = state.acteDepense.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete all prestation

const SUPPRIMER_ACTE_DEPENSE = (state, id)=> {
    state.acteDepense = state.acteDepense.filter(prest => prest.id !=id)
}

// get all bailleur
const GET_ALL_BAILLEUR = (state, tableau_bailleur) =>{
    state.bailleurs = tableau_bailleur
}

// add * bailleur

const AJOUTER_BAILLEUR = (state, elementAjouter) => {
    state.bailleurs.unshift(elementAjouter)
}

// update all bailleur
const MODIFIER_BAILLEUR = (state, elementModif)=>{
    state.bailleurs = state.bailleurs.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete all bailleur

const SUPPRIMER_BAILLEUR = (state, id)=> {
    state.bailleurs = state.bailleurs.filter(prest => prest.id !=id)
}


// get all banque
const GET_ALL_BANQUE = (state, tableau_banques) =>{
    state.banques = tableau_banques
}

// add * acte depense 

const AJOUTER_BANQUE = (state, elementAjouter) => {
    state.banques.unshift(elementAjouter)
}


// update all acte depense
const MODIFIER_BANQUE = (state, elementModif)=>{
    state.banques = state.banques.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete all prestation

const SUPPRIMER_BANQUE = (state, id)=> {
    state.banques = state.banques.filter(prest => prest.id !=id)
}



// get all code fonction
const GET_CODE_FONCTION = (state, tableau_code_foction) =>{
    state.codesFonctions = tableau_code_foction
}

// add * code fonction

const AJOUTER_CODE_FONCTION = (state, elementAjouter) => {
    state.codesFonctions.unshift(elementAjouter)
}

// update all code fonction
const MODIFIER_CODE_FONCTION = (state, elementModif)=>{
    state.codesFonctions = state.codesFonctions.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete all code fonction

const SUPPRIMER_CODE_FONCTION = (state, id)=> {
    state.codesFonctions = state.codesFonctions.filter(prest => prest.id !=id)
}


// get all compte
const GET_ALL_COMPTE = (state, tableau_compte) =>{
    state.comptes = tableau_compte
}

// add * compte

const AJOUTER_COMPTE = (state, elementAjouter) => {
    state.comptes.unshift(elementAjouter)
}


// update all compte
const MODIFIER_COMPTE = (state, elementModif)=>{
    state.comptes = state.comptes.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete all compte

const SUPPRIMER_COMPTE = (state, id)=> {
    state.comptes = state.comptes.filter(prest => prest.id !=id)
}


// get all facture
const GET_ALL_FACTURE = (state, tableau_facture) =>{
    state.factures = tableau_facture
}

// add * facture

const AJOUTER_FACTURE = (state, elementAjouter) => {
    state.factures.unshift(elementAjouter)
}

// update all facture
const MODIFIER_FACTURE = (state, elementModif)=>{
    state.factures = state.factures.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete all facture

const SUPPRIMER_FACTURE = (state, id)=> {
    state.factures = state.factures.filter(prest => prest.id !=id)
}


// get all lot
const GET_ALL_LOT = (state, tableau_lots) =>{
    state.lots = tableau_lots
}

// add * lot

const AJOUTER_LOT = (state, elementAjouter) => {
    state.lots.unshift(elementAjouter)
}


// update all lot
const MODIFIER_LOT = (state, elementModif)=>{
    state.lots = state.lots.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete all lots

const SUPPRIMER_LOT = (state, id)=> {
    state.lots = state.lots.filter(prest => prest.id !=id)
}



// get all type_prestation
const GET_ALL_TYPE_PRESTATION = (state, tableau_type_prestation) =>{
    state.typePrestations = tableau_type_prestation
}

// add * type_prestation

const AJOUTER_TYPE_PRESTATION = (state, elementAjouter) => {
    state.typePrestations.unshift(elementAjouter)
}

// update all type_prestation
const MODIFIER_TYPE_PRESTATION = (state, elementModif)=>{
    state.typePrestations = state.typePrestations.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete all type_prestation

const SUPPRIMER_TYPE_PRESTATION = (state, id)=> {
    state.typePrestations = state.typePrestations.filter(prest => prest.id !=id)
}


// get all type facture
const GET_TYPE_FACTURE = (state, tableau_type_facture) =>{
    state.typeFactures = tableau_type_facture
}

// add * type facture

const AJOUTER_TYPE_FACTURE = (state, elementAjouter) => {
    state.typeFactures.unshift(elementAjouter)
}


// update all type facture
const MODIFIER_TYPE_FACTURE = (state, elementModif)=>{
    state.typeFactures = state.typeFactures.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete all type facture

const SUPPRIMER_TYPE_FACTURE = (state, id)=> {
    state.typeFactures = state.typeFactures.filter(prest => prest.id !=id)
}



// get all type acte depense
const GET_ALL_TYPE_ACTE_DEPENSE = (state, tableau_type_acte_depense) =>{
    state.typeActeDepense = tableau_type_acte_depense
}

// add * type_prestation

const AJOUTER_TYPE_ACTE_DEPENSE = (state, elementAjouter) => {
    state.typeActeDepense.unshift(elementAjouter)
}

// update all type_prestation
const MODIFIER_TYPE_ACTE_DEPENSE = (state, elementModif)=>{
    state.typeActeDepense = state.typeActeDepense.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete all type_acte depense

const SUPPRIMER_TYPE_ACTE_DEPENSE = (state, id)=> {
    state.typeActeDepense = state.typeActeDepense.filter(prest => prest.id !=id)
}


// get all acteur depense
const GET_ALL_ACTEUR_DEPENSE = (state, tableau_acteur_depense) =>{
    state.acteurDepense = tableau_acteur_depense
}

// add * type facture

const AJOUTER_ACTEUR_DEPENSE = (state, elementAjouter) => {
    state.acteurDepense.unshift(elementAjouter)
}


// update all type facture
const MODIFIER_ACTEUR_DEPENSE = (state, elementModif)=>{
    state.acteurDepense = state.acteurDepense.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete all type facture

const SUPPRIMER_ACTEUR_DEPENSE = (state, id)=> {
    state.acteurDepense = state.acteurDepense.filter(prest => prest.id !=id)
}


// action pour analyseDossier && cojo


// get all type acte depense
const GET_ALL_ANALYSE_DOSSIER = (state, tableau_analyse_dossier) =>{
    state.analyseDossiers = tableau_analyse_dossier
}

// add * analyse dossier

const AJOUTER_ANALYSE_DOSSIER = (state, elementAjouter) => {
    state.analyseDossiers.unshift(elementAjouter)
}

// update all analyse dossier
const MODIFIER_ANALYSE_DOSSIER = (state, elementModif)=>{
    state.analyseDossiers = state.analyseDossiers.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete all analyse de dosssier

const SUPPRIMER_ANALYSE_DOSSIER = (state, id)=> {
    state.analyseDossiers = state.analyseDossiers.filter(prest => prest.id !=id)
}


// get all la cojo
const GET_ALL_COJO = (state, tableau_cojo) =>{
    state.cojos = tableau_cojo
}

// add * cojo

const AJOUTER_COJO = (state, elementAjouter) => {
    state.cojos.unshift(elementAjouter)
}


// update cojo
const MODIFIER_COJO = (state, elementModif)=>{
    state.cojos = state.cojos.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete cojo

const SUPRIMER_COJO = (state, id)=> {
    state.cojos = state.cojos.filter(prest => prest.id !=id)
}

// mutation pour condition && fonction occupper




// get all condition
const GET_ALL_CONDITION = (state, tableau_condition) =>{
    state.conditions = tableau_condition
}

// add * condition

const AJOUTER_CONDITION = (state, elementAjouter) => {
    state.conditions.unshift(elementAjouter)
}

// update condition
const MODIFIER_CONDITION = (state, elementModif)=>{
    state.conditions = state.conditions.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete condition

const SUPPRIMER_CONDITION = (state, id)=> {
    state.conditions = state.conditions.filter(prest => prest.id !=id)
}


// get all fonction ocupper
const GET_ALL_FONCTION_OCCUPPE = (state, tableau_fonction_occuppe) =>{
    state.fonctionOccupes = tableau_fonction_occuppe
}

// add * fonction occuppe

const AJOUTER_FONCTION_OCCUPPE = (state, elementAjouter) => {
    state.fonctionOccupes.unshift(elementAjouter)
}


// update fonction occuppe
const MODIFIER_FONCTION_OCCUPPE = (state, elementModif)=>{
    state.fonctionOccupes = state.fonctionOccupes.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete fonction occuppe

const SUPPRIMER_FONCTION_OCCUPPE = (state, id)=> {
    state.fonctionOccupes = state.fonctionOccupes.filter(prest => prest.id !=id)
}



// get all nature fonction
const GET_ALL_NATURE_FONCTION = (state, tableau_nature_fonction) =>{
    state.natureFonctions = tableau_nature_fonction
}

// add * nature fonction

const AJOUTER_NATURE_FONCTION = (state, elementAjouter) => {
    state.natureFonctions.unshift(elementAjouter)
}

// update all nature fonction

const MODIFIER_NATURE_FONCTION = (state, elementModif)=>{
    state.natureFonctions = state.natureFonctions.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete all nature fonction

const SUPPRIMER_NATURE_FONCTION = (state, id)=> {
    state.natureFonctions = state.natureFonctions.filter(prest => prest.id !=id)
}


// get all signature
const GET_ALL_SIGNATURE = (state, tableau_signature) =>{
    state.signatures = tableau_signature
}

// add * signature

const AJOUTER_SIGNATURE = (state, elementAjouter) => {
    state.signatures.unshift(elementAjouter)
}


// update all signature
const MODIFIER_SIGNATURE = (state, elementModif)=>{
    state.signatures = state.signatures.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete signature

const SUPPRIMER_SIGNATURE = (state, id)=> {
    state.signatures = state.signatures.filter(prest => prest.id !=id)
}





// get all type acte effet financier

const GET_ALL_TYPE_ACTE_EFFET_FINANCIER = (state, tableau_type_acte_effet_financier) =>{
    state.typeActeEffetFinanciers = tableau_type_acte_effet_financier
}

// add * type acte effet financier

const AJOUTER_TYPE_ACTE_EFFET_FINANCIER = (state, elementAjouter) => {
    state.typeActeEffetFinanciers.unshift(elementAjouter)
}

// update type acte effet financier
const MODIFIER_TYPE_ACTE_EFFET_FINANCIER = (state, elementModif)=>{
    state.typeActeEffetFinanciers = state.typeActeEffetFinanciers.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete type acte efffet financier

const SUPPRIMER_TYPE_ACTE_AFFET_FINANCIER = (state, id)=> {
    state.typeActeEffetFinanciers = state.typeActeEffetFinanciers.filter(prest => prest.id !=id)
}


// get type analyse
const GET_TYPE_ANALYSE = (state, tableau_type_analyse) =>{
    state.typeAnalyses = tableau_type_analyse
}

// add * type analyse

const AJOUTER_TYPE_ANALYSE = (state, elementAjouter) => {
    state.typeAnalyses.unshift(elementAjouter)
}


// update type analyse
const MODIFIER_TYPE_ANALYSE = (state, elementModif)=>{
    state.typeAnalyses = state.typeAnalyses.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete type analyse 

const SUPPRIMER_TYPE_ANALYSE = (state, id)=> {
    state.typeAnalyses = state.typeAnalyses.filter(prest => prest.id !=id)
}




// get all type unite administrative
const GET_TYPE_UA = (state, tableau_type_ua) =>{
    state.typeUa = tableau_type_ua
}

// add * type unite administrative

const AJOUTER_TYPE_UA = (state, elementAjouter) => {
    state.typeUa.unshift(elementAjouter)
}

// update type unite administrative
const MODIFIER_TYPE_UA = (state, elementModif)=>{
    state.typeUa = state.typeUa.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}

// delete type unite administrative

const SUPPRIMER_TYPE_UA = (state, id)=> {
    state.typeUa = state.typeUa.filter(prest => prest.id !=id)
}

// get all unite administrative
const GET_ALL_UNITE_ADMINISTRATIVE = (state, tableau_unite_administrative) =>{
    state.uniteAdministratives = tableau_unite_administrative
}

// add * unite administrative

const AJOUTER_UNITE_ADMINISTRATIVE = (state, elementAjouter) => {
    state.uniteAdministratives.unshift(elementAjouter)
}


// update unite administrative
const MODIFIER_UNITE_ADMINISTRATIVE = (state, elementModif)=>{
    state.uniteAdministratives = state.uniteAdministratives.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete unite administrative

const SUPPRIMER_UNITE_ADMINISTRATIVE = (state, id)=> {
    state.uniteAdministratives = state.uniteAdministratives.filter(prest => prest.id !=id)
}







// get all unite de zone 

const GET_ALL_UNITE_ZONE = (state, tableau_unite_zone) =>{
    state.uniteZones = tableau_unite_zone
}

// add * unite zone

const AJOUTER_UNITE_ZONE = (state, elementAjouter) => {
    state.uniteZones.unshift(elementAjouter)
}


// update unite zone
const MODIFIER_UNITE_ZONE = (state, elementModif)=>{
    state.uniteZones = state.uniteZones.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete unite zone

const SUPPRIMER_UNITE_ZONE = (state, id)=> {
    state.uniteZones = state.uniteZones.filter(prest => prest.id !=id)
}