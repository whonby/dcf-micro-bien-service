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


// mutation des executions de marché




// get all execution marche
export const GET_EXECUTION_MARCHE = (state, tableau_execution_marche) =>{
    state.executionMarches = tableau_execution_marche
}

// add * execution nmarche

export const AJOUTER_EXECUTION_MARCHE = (state, elementAjouter) => {
    state.executionMarches.unshift(elementAjouter)
}

// update all execution marche
export const MODIFIER_EXECUTION_MARCHE = (state, elementModif)=>{
    state.executionMarches = state.executionMarches.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}




// delete all execution de marche 

export const DELETE_EXECUTION_MARCHE = (state, id)=> {
    state.executionMarches = state.executionMarches.filter(marche => marche.id !=id)
}







// mutation pour le motif de decision



// get all  motif de decision
export const GET_MOTIF_DECISION = (state, tableau_motif_decision) =>{
    state.motifDecisions = tableau_motif_decision
}

// add * motif de decision 

export const AJOUTER_MOTIF_DECISION = (state, elementAjouter) => {
    state.motifDecisions.unshift(elementAjouter)
}

// update all motif de decision
export const MODIFIER_MOTIF_DECISION = (state, elementModif)=>{
    state.motifDecisions = state.motifDecisions.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}



// delete all motif de decision

export const DELETE_MOTIF_DECISION = (state, id)=> {
    state.motifDecisions = state.motifDecisions.filter(motif => motif.id !=id)
}






// get all  motif de decision
export const GET_DOCUMENT_PROCEDURE = (state, tableau_document_procedure) =>{
    state.documentProcedures = tableau_document_procedure
}

// add * document procedure p

export const AJOUTER_DOCUMENT_PROCEDURE = (state, elementAjouter) => {
    state.documentProcedures.unshift(elementAjouter)
}

// update all document procedure
export const MODIFIER_DOCUMENT_PROCEDURE = (state, elementModif)=>{
    state.documentProcedures = state.documentProcedures.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}



// delete all document procedure

export const DELETE_DOCUMENT_PROCEDURE = (state, id)=> {
    state.documentProcedures = state.documentProcedures.filter(motif => motif.id !=id)
}





// mutation pour acte effet



// get all  acte effet financier

export const GET_ALL_ACTE_EFFET_FINANCIER = (state, tableau_acte_financier) =>{
    state.acteEffetFinanciers = tableau_acte_financier
}

// add * acte effet financier

export const AJOUTER_ACTE_EFFET_FINANCIER = (state, elementAjouter) => {
    state.acteEffetFinanciers.unshift(elementAjouter)
}

// update all acte effet financier
export const MODIFIER_ACTE_EFFET_FINANCIER = (state, elementModif)=>{
    state.acteEffetFinanciers = state.acteEffetFinanciers.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}



// delete acte effet financier

export const DELET_ACTE_EFFET_FINANCIER = (state, id)=> {
    state.acteEffetFinanciers = state.acteEffetFinanciers.filter(effet => effet.id !=id)
}


// add * nouveau fournisseur

export const AJOUTER_NOUVEAU_FOURNISSEUR = (state, elementAjouter) => {
    state.nouveauFournisseur.unshift(elementAjouter)
}




// mmutation de l'obseravtion du bailleur





// get all  obseravtion bailleur

export const GET_OBSERVATION_BAILLEUR = (state, tableau_obseravtion_bailleur) =>{
    state.obseravtionBailleurs = tableau_obseravtion_bailleur
}

// add * observation bailleur

export const AJOUTER_OBSERAVTION_BAILLEUR = (state, elementAjouter) => {
    state.obseravtionBailleurs.unshift(elementAjouter)
}

// update all observation bailleur
export const MODIFIER_OBSERAVTION_BAILLEUR = (state, elementModif)=>{
    state.obseravtionBailleurs = state.obseravtionBailleurs.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}



// delete all observation bailleur

export const DELETE_OBSERVATION_BAILLEUR = (state, id)=> {
    state.obseravtionBailleurs = state.obseravtionBailleurs.filter(observation => observation.id !=id)
}




// mutation offre technique

// get all prestation
export const GET_ALL_OFFRE_TECHNIQUE = (state, tableau_prestation) =>{
    state.offreTechniques = tableau_prestation
}

// add * presttation

export const AJOUTER_OFFRE_TECHNIQUE = (state, elementAjouter) => {
    state.offreTechniques.unshift(elementAjouter)
}

// update all prestation
export const MODIFIER_OFFRE_TECHNIQUE = (state, elementModif)=>{
    state.offreTechniques = state.offreTechniques.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}



// delete all prestation

export const DELETE_OFFRE_TECHNIQUE = (state, id)=> {
    state.offreTechniques = state.offreTechniques.filter(prest => prest.id !=id)
}

// mutation pour offre financier


// get all prestation
export const GET_ALL_OFFRE_FINANCIER = (state, tableau_prestation) =>{
    state.offreFinanciers = tableau_prestation
}

// add * presttation

export const AJOUTER_OFFRE_FINANCIER = (state, elementAjouter) => {
    state.offreFinanciers.unshift(elementAjouter)
}

// update all prestation
export const MODIFIER_OFFRE_FINANCIER = (state, elementModif)=>{
    state.offreFinanciers = state.offreFinanciers.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}



// delete all prestation

export const DELETE_OFFRE_FINANCIER = (state, id)=> {
    state.offreFinanciers = state.offreFinanciers.filter(prest => prest.id !=id)
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

export const SUPPRIMER_BAILLEUR = (state, id) => {

 state.bailleurs = state.bailleurs.filter(bailleur => bailleur.id !=id)
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


// mutation type marcher


// get all type facture
export const GET_TYPE_PROCEDURE = (state, tableau_type_procedure) =>{
    state.typeTypeProcedures = tableau_type_procedure
}

// add * type facture

export const AJOUTER_TYPE_PROCEDURE = (state, elementAjouter) => {
    state.typeTypeProcedures.unshift(elementAjouter)
}


// update all type facture
export const MODIFIER_TYPE_PROCEDURE = (state, elementModif)=>{
    state.typeTypeProcedures = state.typeTypeProcedures.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete all type facture

export const SUPPRIMER_TYPE_PROCEDURE = (state, id)=> {
    state.typeTypeProcedures = state.typeTypeProcedures.filter(prest => prest.id !=id)
}





/// mutation procedure passation

// get all type facture
export const GET_PROCEDURE_PASSATION = (state, tableau_procedure_passation) =>{
    state.procedurePassations = tableau_procedure_passation
}

// add * type facture

export const AJOUTER_PROCEDURE_PASSATION = (state, elementAjouter) => {
    state.procedurePassations.unshift(elementAjouter)
}


// update all type facture
export const MODIFIER_PROCEDURE_PASSATION = (state, elementModif)=>{
    state.procedurePassations = state.procedurePassations.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete all type facture

export const SUPPRIMER_PROCEDURE_PASSATION = (state, id)=> {
    state.procedurePassations = state.procedurePassations.filter(prest => prest.id !=id)
}





// la mutation d'appel d'offre 





// get all type facture
export const GET_APPEL_OFFRE = (state, tableau_appel_offre) =>{
    state.appelOffres = tableau_appel_offre
}

// add * type facture

export const AJOUTER_APPEL_OFFRE = (state, elementAjouter) => {
    state.appelOffres.unshift(elementAjouter)
}


// update all type facture
export const MODIFIER_APPEL_OFFRE = (state, elementModif)=>{
    state.appelOffres = state.appelOffres.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete all type facture

export const SUPPRIMER_APPEL_OFFRE = (state, id)=> {
    state.appelOffres = state.appelOffres.filter(prest => prest.id !=id)
}



// mutation type marche


// get all type facture
export const GET_TYPE_MARCHE = (state, tableau_type_marche) =>{
    state.typeMarches = tableau_type_marche
}

// add * type facture

export const AJOUTER_TYPE_MARCHE = (state, elementAjouter) => {
    state.typeMarches.unshift(elementAjouter)
}


// update all type facture
export const MODIFIER_TYPE_MARCHE = (state, elementModif)=>{
    state.typeMarches = state.typeMarches.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete all marche

export const SUPPRIMER_TYPE_MARCHE = (state, id)=> {
    state.typeMarches = state.typeMarches.filter(marche => marche.id !=id)
}



// mutation marche



export const GET_MARCHE = (state, tableau_marche) =>{
    state.marches = tableau_marche
}

// add * type facture

export const AJOUTER_MARCHE = (state, elementAjouter) => {
    state.marches.unshift(elementAjouter)
}


// update all type facture
export const MODIFIER_MARCHE = (state, elementModif)=>{
    state.marches = state.marches.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete all marche

export const SUPPRIMER_MARCHE = (state, id)=> {
    state.marches = state.marches.filter(marche => marche.id !=id)
}




// la mutation de mode bde passation

// get all type facture
export const GET_MODE_PASSATION = (state, tableau_mode_passation) =>{
    state.modePassations = tableau_mode_passation
}

// add * type facture

export const AJOUTER_MODE_PASSATION = (state, elementAjouter) => {
    state.modePassations.unshift(elementAjouter)
}


// update all type facture
export const MODIFIER_MODE_PASSATION = (state, elementModif)=>{
    state.modePassations = state.modePassations.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete all marche

export const SUPPRIMER_MODE_PASSATION = (state, id)=> {
    state.modePassations = state.modePassations.filter(passation => passation.id !=id)
}












// get all type acte depense
export const GET_ALL_TYPE_ACTE_DEPENSE = (state, tableau_type_acte_depense) =>{
    state.typeActeDepenses = tableau_type_acte_depense
}

// add * type_prestation

export const AJOUTER_TYPE_ACTE_DEPENSE = (state, elementAjouter) => {
    state.typeActeDepenses.unshift(elementAjouter)
}

// update all type_prestation
export const MODIFIER_TYPE_ACTE_DEPENSE = (state, elementModif)=>{
    state.typeActeDepenses = state.typeActeDepenses.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete all type_acte depense

export const SUPPRIMER_TYPE_ACTE_DEPENSE = (state, id)=> {
    state.typeActeDepenses = state.typeActeDepenses.filter(prest => prest.id !=id)
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



// text juridique




export const GET_TEXTJURIDIQUE = (state, tableau_text_juridique) =>{
    state.text_juridiques = tableau_text_juridique
}

// add * realite service faire 

export const AJOUTER_TEXT_JURIDIQUE = (state, elementAjouter) => {
    state.text_juridiques.unshift(elementAjouter)
}


// update of realite service fait
export const MODIFIER_TEXT_JURIDIQUE = (state, elementModif)=>{
    state.text_juridiques = state.text_juridiques.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete the realite service fait

export const SUPPRIMER_TEXT_JURIDIQUE = (state, id)=> {
    state.text_juridiques = state.text_juridiques.filter(text => text.id !=id)
}



// autre text juridique

export const GET_AUTRE_TEXT_JURIDIQUE = (state, tableau_autre_text_juridique) =>{
    state.autresTexteJuridiques = tableau_autre_text_juridique
}

// add * realite service faire 

export const AJOUTER_AUTRE_TEXT_JURIDIQUE = (state, elementAjouter) => {
    state.autresTexteJuridiques.unshift(elementAjouter)
}


// update of realite service fait
export const MODIFIER_AUTRE_TEXT_JURIDIQUE = (state, elementModif)=>{
    state.autresTexteJuridiques = state.autresTexteJuridiques.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}

export const SUPPRIMER_AUTRE_TEXT_JURIDIQUE = (state, id)=> {
    state.autresTexteJuridiques = state.autresTexteJuridiques.filter(autreText => autreText.id !=id)
}




// autre text juridique

SUPPRIMER_TYPE_TEXT_JURIDIQUE
/*Mutation lettre d'invitation*/

export const GET_LETTRE_INVITATION = (state, tableau_autre_text_juridique) =>{
    state.lettreInvitation = tableau_autre_text_juridique
}

export const AJOUTER_LETTRE_INVITATION = (state, elementAjouter) => {
    state.lettreInvitation.unshift(elementAjouter)
}



export const MODIFIER_LETTRE_INVITATION = (state, elementModif)=>{
    state.lettreInvitation = state.lettreInvitation.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}

export const SUPPRIMER_LETTRE_INVITATION = (state, id)=> {
    state.mandate = state.mandate.filter(autreText => autreText.id !=id)
}
/*fin Mutation lettre d'invitation*/

/*Mandate mutation*/
export const GET_MANDATER = (state, tableau_autre_text_juridique) =>{
    state.mandate = tableau_autre_text_juridique
}

export const AJOUTER_MANDATER = (state, elementAjouter) => {
    state.mandate.unshift(elementAjouter)
}



export const MODIFIER_MANDATER = (state, elementModif)=>{
    state.mandate = state.mandate.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}

export const SUPPRIMER_MANDATER= (state, id)=> {
    state.mandate = state.mandate.filter(autreText => autreText.id !=id)
}
/*Fin mandate mutation*/


/*Mandate demande ano*/
export const GET_DEMANDE_ANO = (state, tableau_autre_text_juridique) =>{
    state.stateDemandeAno = tableau_autre_text_juridique
}

export const AJOUTER_DEMANDE_ANO = (state, elementAjouter) => {
    state.stateDemandeAno.unshift(elementAjouter)
}



export const MODIFIER_DEMANDE_ANO= (state, elementModif)=>{
    state.stateDemandeAno = state.stateDemandeAno.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}

export const SUPPRIMER_DEMANDE_ANO= (state, id)=> {
    state.stateDemandeAno = state.stateDemandeAno.filter(autreText => autreText.id !=id)
}
/*Fin ano mutation*/


/*Mandate demande ano*/
export const GET_ANALYSE_DMP = (state, tableau_autre_text_juridique) =>{
    state.analyseDMP = tableau_autre_text_juridique
}

export const AJOUTER_ANALYSE_DMP = (state, elementAjouter) => {
    state.analyseDMP.unshift(elementAjouter)
}



export const MODIFIER_ANALYSE_DMP= (state, elementModif)=>{
    state.analyseDMP = state.analyseDMP.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}

export const SUPPRIMER_ANALYSE_DMP= (state, id)=> {
    state.analyseDMP = state.analyseDMP.filter(autreText => autreText.id !=id)
}
/*Fin ano mutation*/



/*Muttation ano DMP Bailleur*/
export const GET_ANO_DMP_BAILLEUR = (state, tableau_autre_text_juridique) =>{
    state.stateAnoDmpBailleur = tableau_autre_text_juridique
}

export const AJOUTER_ANO_DMP_BAILLEUR = (state, elementAjouter) => {
    state.stateAnoDmpBailleur.unshift(elementAjouter)
}



export const MODIFIER_ANO_DMP_BAILLEUR= (state, elementModif)=>{
    state.stateAnoDmpBailleur = state.stateAnoDmpBailleur.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}

export const SUPPRIMER_ANO_DMP_BAILLEUR= (state, id)=> {
    state.stateAnoDmpBailleur = state.stateAnoDmpBailleur.filter(autreText => autreText.id !=id)
}
/*Fin ano dmpBailleur mutation*/







/*Muttation ano DMP Bailleur*/
export const GET_ENGAGEMENT = (state, tableau_autre_text_juridique) => {
    state.engagements = tableau_autre_text_juridique
}

export const AJOUTER_ENGAGEMENT = (state, elementAjouter) => {
    state.engagements.unshift(elementAjouter)
}



export const MODIFIER_ENGAGEMENT = (state, elementModif) => {
    state.engagements = state.engagements.map(response => {
        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_ENGAGEMENT = (state, id) => {
    state.engagements = state.engagements.filter(autreText => autreText.id != id)
}
/*Fin ano dmpBailleur mutation*/




/*Muttation ano DMP Bailleur*/
export const GET_MANDAT = (state, tableau_autre_text_juridique) => {
    state.mandats = tableau_autre_text_juridique
}

export const AJOUTER_MANDAT = (state, elementAjouter) => {
    state.mandats.unshift(elementAjouter)
}



export const MODIFIER_MANDAT = (state, elementModif) => {
    state.mandats = state.mandats.map(response => {
        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_MANDAT = (state, id) => {
    state.mandats = state.mandats.filter(autreText => autreText.id != id)
}
/*Fin ano dmpBailleur mutation*/
export const MODIFIER_MONTANT_BUDGET = (state, objet) => {
    state.budgetGeneral = state.budgetGeneral.map(besoinRealise => {
        if (besoinRealise.id == objet.id) {
            besoinRealise.Dotation_Initiale = objet.montant_actuel;
           
        }

        return besoinRealise;
    });
};










// get all type text juridique
export const GET_ALL_TYPE_APPEL = (state, tableau_type_text_juridique) => {
    state.typeAppelOffre = tableau_type_text_juridique
}

// add * type text juridique

export const AJOUTER_TYPE_APPEL = (state, elementAjouter) => {
    state.typeAppelOffre.unshift(elementAjouter)
}



// update type text juridique
export const MODIFIER_TYPE_APPEL = (state, elementModif) => {
    state.typeAppelOffre = state.typeAppelOffre.map(response => {
        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}


// delete type text juridique

export const SUPPRIMER_TYPE_APPEL = (state, id) => {
    state.typeAppelOffre = state.typeAppelOffre.filter(prest => prest.id != id)
}



// get all type text juridique
export const GET_ALL_TYPE_CANDADIT = (state, tableau_type_text_juridique) => {
    state.typeCandidat = tableau_type_text_juridique
}

// add * type text juridique

export const AJOUTER_TYPE_CANDADIT = (state, elementAjouter) => {
    state.typeCandidat.unshift(elementAjouter)
}



// update type text juridique
export const MODIFIER_TYPE_CANDADIT = (state, elementModif) => {
    state.typeCandidat = state.typeCandidat.map(response => {
        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}


// delete type text juridique

export const SUPPRIMER_TYPE_CANDADIT = (state, id) => {
    state.typeCandidat = state.typeCandidat.filter(prest => prest.id != id)
}



// get all type text juridique
export const GET_ALL_PAYS = (state, tableau_type_text_juridique) =>{
    state.pays = tableau_type_text_juridique
}

// add * type text juridique

export const AJOUTER_PAYS = (state, elementAjouter) => {
    state.pays.unshift(elementAjouter)
}



// update type text juridique
export const MODIFIER_PAYS = (state, elementModif)=>{
    state.pays = state.pays.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete type text juridique

export const SUPPRIMER_PAYS = (state, id)=> {
    state.pays = state.pays.filter(prest => prest.id !=id)
}



// get all type text juridique
export const GET_ALL_VILLE = (state, tableau_type_text_juridique) => {
    state.villes = tableau_type_text_juridique
}

// add * type text juridique

export const AJOUTER_VILLE = (state, elementAjouter) => {
    state.villes.unshift(elementAjouter)
}



// update type text juridique
export const MODIFIER_VILLE = (state, elementModif) => {
    state.villes = state.villes.map(response => {
        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}


// delete type text juridique

export const SUPPRIMER_VILLE = (state, id) => {
    state.villes = state.villes.filter(prest => prest.id != id)
}


// get all type text juridique
export const GET_ALL_COMMUNES = (state, tableau_type_text_juridique) => {
    state.communes = tableau_type_text_juridique
}

// add * type text juridique

export const AJOUTER_COMMUNES = (state, elementAjouter) => {
    state.communes.unshift(elementAjouter)
}



// update type text juridique
export const MODIFIER_COMMUNES = (state, elementModif) => {
    state.communes = state.communes.map(response => {
        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}


// delete type text juridique

export const SUPPRIMER_COMMUNES = (state, id) => {
    state.communes = state.communes.filter(prest => prest.id != id)
}