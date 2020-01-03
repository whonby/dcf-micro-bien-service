export const prestations = state => state.prestations.sort((a,b)=>(a.code>b.code)? 1:-1)
export const acteDepenses = state => state.acteDepenses.sort((a,b)=>(a.code>b.code)? 1:-1)
export const bailleurs = state => state.bailleurs.sort((a,b)=>(a.code>b.code)? 1:-1)
export const banques = state => state.banques.sort((a,b)=>(a.code>b.code)? 1:-1)
export const codesFonctions = state => state.codesFonctions.sort((a,b)=>(a.code>b.code)? 1:-1)
export const comptes = state => state.comptes.sort((a,b)=>(a.code>b.code)? 1:-1)
export const factures = state => state.factures.sort((a,b)=>(a.code>b.code)? 1:-1)
export const lots = state => state.lots.sort((a,b)=>(a.code>b.code)? 1:-1)
export const typePrestations = state => state.typePrestations.sort((a,b)=>(a.code>b.code)? 1:-1)
export const typeFactures = state => state.typeFactures.sort((a,b)=>(a.code>b.code)? 1:-1)
export const typeActeDepenses = state => state.typeActeDepenses.sort((a,b)=>(a.code>b.code)? 1:-1)
export const acteurDepenses = state => state.acteurDepenses.sort((a,b)=>(a.code>b.code)? 1:-1)
export const cojos = state => state.cojos
export const conditions = state => state.conditions
export const fonctionOccupes = state => state.fonctionOccupes
export const analyseDossiers = state => state.analyseDossiers
export const natureFonctions = state => state.natureFonctions
export const signatures = state => state.signatures
export const typeActeEffetFinanciers = state => state.typeActeEffetFinanciers
export const typeAnalyses = state => state.typeAnalyses
export const typeUa = state => state.typeUa
export const uniteAdministratives = state => state.uniteAdministratives
export const uniteZones = state => state.uniteZones