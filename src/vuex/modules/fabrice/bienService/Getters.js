printMarcheNonAttribue
export const modepaiements = state => state.modepaiements
export const avenants = state => state.avenants
export const pays = state => state.pays
export const choixprocedure = state => state.choixprocedure
export const villes = state => state.villes
export const communes = state => state.communes
export const typeCandidat = state => state.typeCandidat
export const typeAppelOffre = state => state.typeAppelOffre
export const prestations = state => state.prestations.sort((a, b) => (a.code > b.code) ? 1 : -1)
export const acteDepenses = state => state.acteDepenses.sort((a,b)=>(a.code>b.code)? 1:-1)
export const bailleurs = state => state.bailleurs
export const banques = state => state.banques.sort((a,b)=>(a.code>b.code)? 1:-1)
export const codesFonctions = state => state.codesFonctions.sort((a,b)=>(a.code>b.code)? 1:-1)
export const comptes = state => state.comptes.sort((a,b)=>(a.code>b.code)? 1:-1)

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
export const engagements = state => state.engagements
export const motifDecisions = state => state.motifDecisions
export const documentProcedures = state => state.documentProcedures
 export const nouveauFournisseur = state => state.nouveauFournisseur
 export const acteEffetFinanciers = state => state.acteEffetFinanciers
 export const executionMarches = state => state.executionMarches
export const mandats = state => state.mandats
 export const getterActeEffetFinanciers = state => state.acteEffetFinanciers
  export const gettersEtatProcedure = state =>state.gettersEtatProcedure
// exemple de getters
export const appelOffres = state => state.appelOffres
export const gettersOffreTechniques = state => state.offreTechniques
export const getterOffreFinanciers = state => state.offreFinanciers
export const getterLettreInvitation = state => state.lettreInvitation
export const getterMandate = state => state.mandate
export const getterDemandeAno = state => state.stateDemandeAno
export const getterAnalyseDMP = state => state.analyseDMP
export const getterAnoDMPBailleur = state => state.stateAnoDmpBailleur
export const getterObseravtionBailleurs = state => state.obseravtionBailleurs
// export const nombremarches = state => state.marches.length;
//export const gettersPsc = state =>state.gettersPsc
export const gettersCotations = state =>state.gettersCotations 

export const getterMarcheBailleur= state => state.bailleurMarche;
export const getterMembreCojo=state=>state.membre_cojo;
export const nombreTotalMarche = state => state.marches.length;
export const getterProceVerballe=state=>state.proce_verballe
export const personnaliseGetterMarcheBailleur=(state, getters, rootState, rootGetters) =>
    state.bailleurMarche.map(element => {
        if (element.bailleur_id !== null && element.type_finnancement_id!==null ) {
            element = {
                ...element,
                bailleur: rootGetters['parametreGenerauxSourceDeFinancement/sources_financements'].find(
                    section => section.id == element.bailleur_id
                ),
                typeFinnancement: rootGetters['parametreGenerauxSourceDeFinancement/types_financements'].find(
                    exercice => exercice.id == element.type_finnancement_id
                ),
            };
        }

        return element;
    });



export const nombremarchesExecute = getters =>
    getters.marches.filter(
        marcheNonAttribue => marcheNonAttribue.attribue == 1
    ).length;

export const afficheNonMarche = getters =>
    getters.marches.filter(
        marcheNonAttribue => marcheNonAttribue.attribue !== 1
    );
export const montantGlobalMarche = (state, getters) =>
    getters.afficheNonMarche.reduce(
        (prec, cur) => parseInt(prec) + parseInt(cur.montant_marche),
        0
    );
export const nombremarchesExecute1 = getters =>
    getters.marches.filter(
        marcheNonAttribue => marcheNonAttribue.attribue == 1
    );

export const montantGlobalMarcheEnCoursExecution = (state, getters) =>
    getters.acteEffetFinanciers.reduce(
        (prec, cur) => parseInt(prec) + parseInt(cur.montant_act),
        0
    );







    export const gettersCotationPersonnaliser = (state, getters, rootState, rootGetters) =>
    state.gettersCotations.map(element => {
        if (element.entreprise_id !== null) {
            element = {
                ...element,


                objetEntreprise: rootGetters['gestionMarche/entreprises'].find(
                    plans => plans.id == element.entreprise_id
                ),

               


            }

        }
        return element;
    })




    // export const gettersCojoPersonnaliser = (state, getters, rootState, rootGetters) =>
    // state.cojos.map(element => {
    //     if (element.cotation_id !== null) {
    //         element = {
    //             ...element,


    //             varObjetCotation: rootGetters['bienService/gettersCotations'].find(
    //                 plans => plans.id == element.cotation_id
    //             ),

               


    //         }

    //     }
    //     return element;
    // })


    // getters d'etat de procedure

    export const gettersEtatProcedurePersonnaliser = (state, getters, rootState, rootGetters) =>
    state.gettersEtatProcedure.map(element => {
        if (element.marche_id !== null) {
            element = {
                ...element,


                objetEntreprise: rootGetters['bienService/marches'].find(
                    plans => plans.id == element.marche_id
                ),

            }

        }
        return element;
    })


     export const gettersOuverturePersonnaliser = (state, getters, rootState, rootGetters) =>
    state.gettersOuvertures.map(element => {
        if (element.entreprise_id !== null && element.cotation_id !==null) {
            element = {
                ...element,


                varObjetEntreprise: rootGetters['gestionMarche/entreprises'].find(
                    plans => plans.id == element.entreprise_id
                ),

                varObjetCotation: rootGetters['bienService/gettersCotation'].find(
                    plans => plans.id == element.cotation_id
                ),

               


            }

        }
        return element;
    })







// gettes  personnaliser d'appel d'offres

export const getFacturePersonnaliser = (state, getters, rootState, rootGetters) =>
    state.factures.map(element => {
        if (element.ua !== null && element.typfacture_id !== null) {
            element = {
                ...element,


                objetUA: rootGetters['uniteadministrative/uniteAdministratives'].find(
                    plans => plans.id == element.ua
                ),
                objectTypefacture: rootGetters[
                    "bienService/typeFactures"
                ].find(planactivite => planactivite.id == element.typfacture_id)

            }

        }
        return element;
    })









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
    if (element.unite_administrative_id !== null && element.activite_id !== null && element.economique_id !== null ){
        element = {
            ...element,
            objetUniteAdministrative:rootGetters['uniteadministrative/uniteAdministratives'].find(
               plans => plans.id == element.unite_administrative_id
            ),
            afficheActivite: rootGetters[
          "parametreGenerauxActivite/plans_activites"
        ].find(planactivite => planactivite.id == element.activite_id),
            afficheEconomique: rootGetters[
                "parametreGenerauxBudgetaire/plans_budgetaires"
            ].find(planactivite => planactivite.id == element.economique_id)
            
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
        if (element.entreprise_id !== null && element.marche_id !== null) {
            element = {
                ...element,


                varObjetEntreprise: rootGetters['gestionMarche/entreprises'].find(
                    plans => plans.id == element.entreprise_id
                ),
                AfficheMarche: rootGetters['bienService/marches'].find(
                    plans => plans.id == element.marche_id
                ),

               


            }

        }
        return element;
    })

export const montantMarcheReel = (state, getters) =>

    getters.acteEffetFinanciers.reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.montant_act),
        0

    );



    export const montantMarcheAttribue = (state, getters) =>

    getters.marcherAttribue.reduce( (prec, cur) => parseFloat(prec) + parseFloat(cur.montant_marche),
      0    
      
    );
    




    
    export const marcherAttribue = getters =>
    getters.marches.filter(
      marcheNonAttribue => marcheNonAttribue.attribue !== 0
    );

// marche non attribué 

   




    // export const marcheNonattribue = getters =>
    // getters.marches.filter(
    //   marcheNonAttribue => marcheNonAttribue.attribue == 0
    // );

getEngagementPersonnaliser1


    export  const printMarcheNonAttribue = (state, getters,rootState, rootGetters) =>
        getters.marches.map(element => {
        if (element.unite_administrative_id !== null
            && element.activite_id !== null
            && element.economique_id !== null && element.type_marche_id !== null) {
        element = {
            ...element,
           
           
            objetUniteAdministrative:rootGetters['uniteadministrative/uniteAdministratives'].find(
               plans => plans.id == element.unite_administrative_id
            ),
            afficheActivite: rootGetters[
          "parametreGenerauxActivite/plans_activites"
            ].find(planactivite => planactivite.id == element.activite_id),
            afficheEconomique: rootGetters[
                "parametreGenerauxBudgetaire/plans_budgetaires"
            ].find(planactivite => planactivite.id == element.economique_id),
            type_marche: rootGetters[
                "bienService/typeMarches"
            ].find(planactivite => planactivite.id == element.type_marche_id)


            
        }
        
    }
    return element;
})

export const EngagementNonValider = state =>
  state.engagements.filter(
    Immrealise => Immrealise.motif !== 1
  );


export const getEngagementPersonnaliser = (state, getters, rootState, rootGetters) =>
    getters.engagements.map(element => {
        if (
            element.programme_id !== null
            && element.action_id !== null
            && element.activite_id !== null
            && element.ua_id !== null
            && element.grd_nature_id !== null
            && element.ligne_budgetaire_id !== null
            && element.facture_id !== null
           ) {
            element = {
                ...element,
                
                afficheFacture: rootGetters['bienService/factures'].find(
                    plans => plans.id == element.facture_id
 ),
                afficheProgramme: rootGetters['parametreGenerauxAdministratif/plans_programmes'].find(
                    plans => plans.id == element.programme_id
                ),
                afficheAction: rootGetters['parametreGenerauxActivite/afficheNiveauAction'].find(
                    plans => plans.id == element.action_id
                ),

                afficheActivite: rootGetters['parametreGenerauxActivite/afficheNiveauActivite'].find(
                    plans => plans.id == element.activite_id
                ),
                afficheUa: rootGetters['uniteadministrative/uniteAdministratives'].find(
                    plans => plans.id == element.ua_id
                ),

                afficheGrandNature: rootGetters['parametreGenerauxAdministratif/grandes_natures'].find(
                    plans => plans.id == element.grd_nature_id
                ),
                afficheLigneBudget: rootGetters['parametreGenerauxBudgetaire/plans_budgetaires'].find(
                    plans => plans.id == element.ligne_budgetaire_id
                ),


            }

        }
        return element;
    })

export const engagementValider = state =>
    state.engagements.filter(
        Immrealise => Immrealise.val == 1
    );

    

export const getEngagementPersonnaliser1 = (state, getters, rootState, rootGetters) =>
    getters.engagementValider.map(element => {
        if (
            element.programme_id !== null
            && element.action_id !== null
            && element.activite_id !== null
            && element.ua_id !== null
            && element.grd_nature_id !== null
            && element.ligne_budgetaire_id !== null
            && element.section_id !== null
        ) {
            element = {
                ...element,


                afficheProgramme: rootGetters['parametreGenerauxAdministratif/plans_programmes'].find(
                    plans => plans.id == element.programme_id
                ),
                afficheSection: rootGetters['parametreGenerauxAdministratif/sections'].find(
                    plans => plans.id == element.section_id
                ),
                afficheAction: rootGetters['parametreGenerauxActivite/afficheNiveauAction'].find(
                    plans => plans.id == element.action_id
                ),

                afficheActivite: rootGetters['parametreGenerauxActivite/afficheNiveauActivite'].find(
                    plans => plans.id == element.activite_id
                ),
                afficheUa: rootGetters['uniteadministrative/uniteAdministratives'].find(
                    plans => plans.id == element.ua_id
                ),

                afficheGrandNature: rootGetters['parametreGenerauxAdministratif/grandes_natures'].find(
                    plans => plans.id == element.grd_nature_id
                ),
                afficheLigneBudget: rootGetters['parametreGenerauxBudgetaire/plans_budgetaires'].find(
                    plans => plans.id == element.ligne_budgetaire_id
                ),


            }

        }
        return element;
    })


    export const getPersonnaliserFacture = (state, getters, rootState, rootGetters) =>
    getters.engagementValider.map(element => {
        if (
    
             element.activite_id !== null
          
            && element.ligne_budgetaire_id !== null
            
        ) {
            element = {
                ...element,


               
              
              

                afficheActivite: rootGetters['parametreGenerauxActivite/afficheNiveauActivite'].find(
                    plans => plans.id == element.activite_id
                ),
               

               
                afficheLigneBudget: rootGetters['parametreGenerauxBudgetaire/plans_budgetaires'].find(
                    plans => plans.id == element.ligne_budgetaire_id
                ),


            }

        }
        return element;
    })



// export const SommeEquipementActuel = (state, getters) =>
//     getters.engagements.reduce(
//         (prec, cur) => parseInt(prec) + parseInt(cur.qte_actuel),
//         0
//     );
    
    // exemple de teset
export const mandatVise = state =>
    state.mandats.filter(
        Immrealise => Immrealise.decision_cf == 1
    );
export const getMandatPersonnaliserVise = (state, getters, rootState, rootGetters) =>
    getters.mandatVise.map(element => {
        if (
            element.programme_id !== null
            && element.action_id !== null
            && element.activite_id !== null
            && element.ua_id !== null
            && element.grd_nature_id !== null
            && element.ligne_budgetaire_id !== null
            && element.marche_id !== null
            && element.section_id !== null
        ) {
            element = {
                ...element,
                afficheSections: rootGetters['parametreGenerauxAdministratif/sections'].find(
                    plans => plans.id == element.section_id
                ),
                afficheMarche: rootGetters['bienService/marches'].find(
                    plans => plans.id == element.marche_id
                ),
                afficheProgramme: rootGetters['parametreGenerauxAdministratif/plans_programmes'].find(
                    plans => plans.id == element.programme_id
                ),
                afficheAction: rootGetters['parametreGenerauxActivite/afficheNiveauAction'].find(
                    plans => plans.id == element.action_id
                ),

                afficheActivite: rootGetters['parametreGenerauxActivite/afficheNiveauActivite'].find(
                    plans => plans.id == element.activite_id
                ),
                afficheUa: rootGetters['uniteadministrative/uniteAdministratives'].find(
                    plans => plans.id == element.ua_id
                ),

                afficheGrandNature: rootGetters['parametreGenerauxAdministratif/grandes_natures'].find(
                    plans => plans.id == element.grd_nature_id
                ),
                afficheLigneBudget: rootGetters['parametreGenerauxBudgetaire/plans_budgetaires'].find(
                    plans => plans.id == element.ligne_budgetaire_id
                ),


            }

        }
        return element;
    })













export const getMandatPersonnaliser = (state, getters, rootState, rootGetters) =>
    getters.mandats.map(element => {
        if (
            element.programme_id !== null
            && element.action_id !== null
            && element.activite_id !== null
            && element.ua_id !== null
            && element.grd_nature_id !== null
            && element.ligne_budgetaire_id !== null 
            && element.marche_id !== null 
            && element.section_id !== null
        ) {
            element = {
                ...element,
                afficheSections: rootGetters['parametreGenerauxAdministratif/sections'].find(
                    plans => plans.id == element.section_id
                ),
                afficheMarche: rootGetters['bienService/marches'].find(
                    plans => plans.id == element.marche_id
                ),
                afficheProgramme: rootGetters['parametreGenerauxAdministratif/plans_programmes'].find(
                    plans => plans.id == element.programme_id
                ),
                afficheAction: rootGetters['parametreGenerauxActivite/afficheNiveauAction'].find(
                    plans => plans.id == element.action_id
                ),

                afficheActivite: rootGetters['parametreGenerauxActivite/afficheNiveauActivite'].find(
                    plans => plans.id == element.activite_id
                ),
                afficheUa: rootGetters['uniteadministrative/uniteAdministratives'].find(
                    plans => plans.id == element.ua_id
                ),

                afficheGrandNature: rootGetters['parametreGenerauxAdministratif/grandes_natures'].find(
                    plans => plans.id == element.grd_nature_id
                ),
                afficheLigneBudget: rootGetters['parametreGenerauxBudgetaire/plans_budgetaires'].find(
                    plans => plans.id == element.ligne_budgetaire_id
                ),


            }

        }
        return element;
    })


// export const getMandatPersonnaliserViseTableauBord = (state, getters, rootState, rootGetters) =>
//     getters.mandatVise.map(element => {
//         if (
//             element.programme_id !== null
//             && element.action_id !== null
//             && element.activite_id !== null
//             && element.ua_id !== null
//             && element.grd_nature_id !== null
//             && element.ligne_budgetaire_id !== null
//             && element.marche_id !== null
//             && element.section_id !== null
//         ) {
//             element = {
//                 ...element,
//                 afficheSections: rootGetters['parametreGenerauxAdministratif/sections'].find(
//                     plans1 => plans1.id == element.section_id
//                 ),
//                 afficheMarche: rootGetters['bienService/marches'].find(
//                     plans2 => plans2.id == element.marche_id
//                 ),
//                 afficheProgramme: rootGetters['parametreGenerauxAdministratif/plans_programmes'].find(
//                     plans3 => plans3.id == element.programme_id
//                 ),
//                 afficheAction: rootGetters['parametreGenerauxActivite/afficheNiveauAction'].find(
//                     plans4 => plans4.id == element.action_id
//                 ),

//                 afficheActivite: rootGetters['parametreGenerauxActivite/afficheNiveauActivite'].find(
//                     plans5 => plans5.id == element.activite_id
//                 ),
//                 afficheUa: rootGetters['uniteadministrative/uniteAdministratives'].find(
//                     plans6 => plans6.id == element.ua_id
//                 ),

//                 afficheGrandNature: rootGetters['parametreGenerauxAdministratif/grandes_natures'].find(
//                     plans7 => plans7.id == element.grd_nature_id
//                 ),
//                 afficheLigneBudget: rootGetters['parametreGenerauxBudgetaire/plans_budgetaires'].find(
//                     plans8 => plans8.id == element.ligne_budgetaire_id
//                 ),


//             }

//         }
//         return element;
//     })



export const getMandatPersonnaliserViseTableauBord = (state, getters, rootState, rootGetters) =>
    getters.mandatVise.map(element => {
        if (element.ua_id !== null && element.marche_id !== null && element.section_id !== null) {
            element = {
                ...element,


                objetUA: rootGetters['uniteadministrative/uniteAdministratives'].find(
                    plans => plans.id == element.ua_id
                ),
                affichierObjetMarche: rootGetters[
                    "bienService/marches"
                ].find(planactivite => planactivite.id == element.marche_id),
                affichierSection: rootGetters[
                    "parametreGenerauxAdministratif/sections"
                ].find(planactivite2 => planactivite2.id == element.section_id)

            }

        }
        return element;
    })
export const nombremarches = getters =>
    getters.marches.filter(
        marcheNonAttribue => marcheNonAttribue.attribue !== 1
    ).length;

    export const AfficheMarcheNonAttribue = state =>
             state.marches.filter(
               affichenaturedep => affichenaturedep.attribue !== 1
    ).length;
    

   export const affichePlanifier = state =>
            state.marches.filter(
              affichenaturedep => affichenaturedep.attribue !== 1
    );
            
    
   export const afficheContratualisation = state =>
     state.marches.filter(affichenaturedep => affichenaturedep.attribue == 1);

     export const montantContratualisation = (state, getters) =>
              getters.afficheContratualisation.reduce(
                (prec, cur) => parseInt(prec) + parseInt(cur.montant_marche),
                0
              );
              
     export const montantPlanifier = (state, getters) =>
              getters.affichePlanifier.reduce(
                (prec, cur) => parseInt(prec) + parseInt(cur.montant_marche),
                0
    );
              


export const getActeEffetFinancierPersonnaliser45 = (state, getters, rootState, rootGetters) =>
    state.acteEffetFinanciers.map(element => {
        if (element.entreprise_id !== null && element.marche_id !== null) {
            element = {
                ...element,


                varObjetEntreprise: rootGetters['gestionMarche/entreprises'].find(
                    plans => plans.id == element.entreprise_id
                ),
                AfficheMarche: rootGetters['bienService/afficheContratualisation'].find(
                    plans => plans.id == element.marche_id
                ),

               


            }

        }
        return element;
    })



export const gettersTest = (state, getters, rootState, rootGetters) =>
    state.marches.map(element => {
        if (element.id !== null) {
            element = {
                ...element,


              
                AfficheMarche: rootGetters['bienService/acteEffetFinanciers'].find(
                    plans => plans.marche_id == element.id
                ),




            }

        }
        return element;
    })