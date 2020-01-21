getActeEffetFinancierPersonnaliser
export const prestations = state => state.prestations.sort((a, b) => (a.code > b.code) ? 1 : -1)
export const acteDepenses = state => state.acteDepenses.sort((a,b)=>(a.code>b.code)? 1:-1)
export const bailleurs = state => state.bailleurs
export const banques = state => state.banques.sort((a,b)=>(a.code>b.code)? 1:-1)
export const codesFonctions = state => state.codesFonctions.sort((a,b)=>(a.code>b.code)? 1:-1)
export const comptes = state => state.comptes.sort((a,b)=>(a.code>b.code)? 1:-1)
export const factures = state => state.factures.sort((a,b)=>(a.code>b.code)? 1:-1)
export const lots = state => state.lots
export const typePrestations = state => state.typePrestations.sort((a,b)=>(a.code>b.code)? 1:-1)
export const typeFactures = state => state.typeFactures.sort((a,b)=>(a.code>b.code)? 1:-1)
export const typeActeDepenses = state => state.typeActeDepenses
export const acteurDepenses = state => state.acteurDepenses.sort((a,b)=>(a.code>b.code)? 1:-1)
export const getterCojos = state => state.cojos
export const conditions = state => state.conditions
export const fonctionOccupes = state => state.fonctionOccupes
export const getterAnalyseDossiers = state => state.analyseDossiers
export const natureFonctions = state => state.natureFonctions
export const signatures = state => state.signatures
export const typeActeEffetFinanciers = state => state.typeActeEffetFinanciers
export const typeAnalyses = state => state.typeAnalyses
export const typeUa = state => state.typeUa
export const uniteAdministratives = state => state.uniteAdministratives
export const uniteZones = state => state.uniteZones
export const ligneBudgetaires = state => state.ligneBudgetaires
export const getterDossierCandidats = state => state.DossierCandidats
export const livrables = state => state.livrables
export const zoneGeographiques = state => state.zoneGeographiques
export const typeTextJuridiques = state => state.typeTextJuridiques
export const realiteServiceFaits = state => state.realiteServiceFaits
export const text_juridiques = state => state.text_juridiques
export const autresTexteJuridiques = state => state.autresTexteJuridiques
export const typeTypeProcedures = state => state.typeTypeProcedures
export const procedurePassations = state => state.procedurePassations
export const typeMarches = state => state.typeMarches
export const modePassations = state => state.modePassations
export const marches = state => state.marches
export const motifDecisions = state => state.motifDecisions
export const documentProcedures = state => state.documentProcedures
 export const nouveauFournisseur = state => state.nouveauFournisseur
 export const acteEffetFinanciers = state => state.acteEffetFinanciers
 export const executionMarches = state => state.executionMarches

export const appelOffres = state => state.appelOffres
export const gettersOffreTechniques = state => state.offreTechniques
export const getterOffreFinanciers = state => state.offreFinanciers
export const getterLettreInvitation = state => state.lettreInvitation
export const getterMandate = state => state.mandate
export const getterDemandeAno = state => state.stateDemandeAno
export const getterAnalyseDMP = state => state.analyseDMP
export const getterAnoDMPBailleur = state => state.stateAnoDmpBailleur
export const getterObseravtionBailleurs = state => state.obseravtionBailleurs
// gettes  personnaliser d'appel d'offres


export  const getAppelOffresPersonnaliser = (state, getters,rootState, rootGetters) =>
state.appelOffres.map(element => {
    if(element.unite_administrative_id !== null ){
        element = {
            ...element,
           
           
           objetUniteAdministrative:rootGetters['uniteadministrative/uniteAdministratives'].find(
               plans => plans.id == element.unite_administrative_id
            )
            
        }
        
    }
    return element;
})

export const getTypeTextJuridique = (state, getters) =>
    state.text_juridiques.map(element => {
        if (element.type_text_juridique_id !== null) {
            element = {
                ...element,

                AfficheTypeTextJuridique: getters.typeTextJuridiques.find(fam => fam.id == element.type_text_juridique_id
                )


            };
        }

        return element;
    });


export  const getMarchePersonnaliser = (state, getters,rootState, rootGetters) =>
state.marches.map(element => {
    if (element.unite_administrative_id !== null && element.activite_id !== null  ){
        element = {
            ...element,
           
           
            objetUniteAdministrative:rootGetters['uniteadministrative/uniteAdministratives'].find(
               plans => plans.id == element.unite_administrative_id
            ),
            afficheActivite: rootGetters[
          "parametreGenerauxActivite/plans_activites"
        ].find(planactivite => planactivite.id == element.activite_id)
            
        }
        
    }
    return element;
})


export const montantMarche = (state, getters) =>
    getters.marches.reduce(
        (prec, cur) => parseInt(prec) + parseInt(cur.montant_marche),

        0
    );

export const getActeEffetFinancierPersonnaliser = (state, getters, rootState, rootGetters) =>
    state.acteEffetFinanciers.map(element => {
        if (element.entreprise_id !== null) {
            element = {
                ...element,


                varObjetEntreprise: rootGetters['gestionMarche/entreprises'].find(
                    plans => plans.id == element.entreprise_id
                ),

                varobjetTest: rootGetters['gestionMarche/entreprises'].find(
                    plans => plans.id == element.entreprise_id
                )


            }

        }
        return element;
    })



    
    // exemple de teset
