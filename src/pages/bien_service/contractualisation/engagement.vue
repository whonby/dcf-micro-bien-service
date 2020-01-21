<template>
    
        <div class="container-fluid">
            <h4 v-if="detail_marche">Detail Marche : {{detail_marche.objet}} </h4>
            <hr />

            <div class="widget-box">
                <div class="widget-content">
                    <div class="widget-content nopadding">
                        <table class="table table-striped table-bordered" v-if="detail_marche">
                            <thead>
                            <tr>
                                <th>Objet marche</th>
                                <th>Objet marche</th>
                                <th>Reference marche</th>
                                <th>Montant marche</th>
                                <th>Type de marche</th>
                                <th>Unite administrative</th>
                                <th>Exercice Budgetaire</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td class="taskDesc">{{detail_marche.id}}</td>
                                <td class="taskDesc">{{detail_marche.objet}}</td>
                                <td class="taskStatus">{{detail_marche.reference_marche}}</td>
                                <td class="taskOptions">
                                    {{detail_marche.montant_marche}}
                                </td>
                                <td class="taskOptions">
                                    {{detail_marche.type_marche.libelle}}
                                </td>
                                <td class="taskOptions">
                                    {{detail_marche.objetUniteAdministrative.libelle}}
                                </td>
                                <td class="taskOptions">
                                    Ok
                                </td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            
            <div class="row-fluid">
                <div class="span12">
                    <div class="widget-box">
                        <div class="widget-title">
                            <ul class="nav nav-tabs">
                                <li class="active"><a data-toggle="tab" href="#tab1">Engagement</a></li>
                                <li class="active"><a data-toggle="tab" href="#tab2">Mandat</a></li>
                                <!-- <li class=""><a data-toggle="tab" href="#tab2">Liste des lots</a></li>
                                <li class=""><a data-toggle="tab" href="#tab3">Contratualisation</a></li> -->
                            </ul>
                        </div>
                        <div class="widget-content tab-content">
                            <div id="tab1" class="tab-pane active">
                                <div class="span4"></div>
                                <div class="span4"></div>
                                <div class="span4" align="right">
                                    <!-- <a href="#myAlert"  class="btn btn-success" align="rigth" >Ajouter</a></div> -->
<router-link :to="{ name: 'AjouterEngagement',params: { id: detail_marche.id }}"
                class="btn btn-success ">
                  <span class="">Demande Engagement</span>
                   </router-link> 
                    </div>
                                <table class="table table-bordered table-striped" v-if="marcheid">
                                    <thead>
                                    <tr>

                                        <th>Année budgetaire</th>
                                <th title="numero de la demande">Num demande</th>
                                <th title="programme/dotation">Prog/Dotat</th>
                                <th>Action Programmatique</th>
                                <th>Activite</th>
                                <th title="unite administrative">Ua</th>
                                 <th>Imputation</th>
                                <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                   
                                    </tbody>
                                </table>
                           
                            


                        </div>

                    </div>

 



















                </div>
            </div>
        </div>



        <!-- Fin ajouter appel offres --->

        <!-- <fab :actions="fabActions" @cache="afficherModalAjouterImmobilisation" main-icon="apps" bg-color="green"></fab>
        <notifications  /> -->
        <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
        <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterImmobilisation()">Open</button>

        <!-- Modification appel offres --->

       

        <!-- Modification fin appel offres --->

       

     


     
      

       
        

        

        


        

        

      
       


      
        <!--Fin contratualisation-->
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    //import {getterDossierCandidats} from "../../../vuex/modules/fabrice/bienService/Getters";


    export default {
        name: 'compte',
        data() {
            return {
                fabActions: [
                    {
                        name: "cache",
                        icon: "add"
                    }

                ],
                 formData: {
       
      },
               
            };
        },
created() {
            this.marcheid=this.$route.params.id
   this.detail_marche = this.getMarchePersonnaliser.find(
       idmarche => idmarche.id == this.$route.params.id
   )
  /*  this.appel_offre_marche=this.appelOffres.filter( idmarche => idmarche.marche.id == this.$route.params.id)
    console.log(this.appel_offre_marche)*/
},
        computed: {
            ...mapGetters("bienService", [ 'acteDepense',"getMarchePersonnaliser","appelOffres",
                "lots","modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers"]),

                ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises']),

           

        },
        methods: {
            ...mapActions("bienService", [
                'ajouterAppelOffre','modifierAppelOffre',"supprimerAppelOffre","modifierAppelOffre",
                "ajouterLot","modifierLot","supprimerLot","ajouterDossierCandidat","getDossierCandidat",
                "modifierDossierCandidat","supprimerDossierCandidat","ajouterOffreTechnique","modifierOffreTechnique",
                "supprimerOffreTechnique","ajouterOffreFinancier","modifierOffreFinancier","supprimerOffreFinancier",
                "ajouterLettreInvitation",
                "modifierLettreInvitation","supprimerLettreInvitation","getMandater","ajouterMandater",
                "modifierMandater","supprimerMandater","ajouterCojo","modifierCojo","supprimerCojo","ajouterAnalyseDossier",
                "modifierAnalyseDossier","supprimerAnalyseDossier","ajouterDemandeAno",
                "modifierDemandeAno","supprimerDemandeAno","ajouterAnalyseDMP","modifierAnalyseDMP",
                "supprimerAnalyseDMP","ajouterAnoDMPBailleur","modifierAnoDMPBailleur","supprimerAnoDMPBailleur"
                , "modifierObservationBaileur","ajouterObseravtionBailleur" , "supprimerObseravtionBailleur",
                 "ajouterFournisseur", "ajouterActeEffetFinancier", "modifierActeEffetFinancier","supprimerActeEffetFinancier"
            ]),
        
  afficherModalAjouterImmobilisation() {
      this.$router.push({
        name: "AjouterEngagement"
      });
    },

          

            ExporterEnExel(){
                this.$refs.excel.click()
            }
        }
    };
</script>
<style scoped>
    .taillemodal {
        width: 1000px;
        margin: 0 -380px;
    }
    .gdmodelfour
    {
 width: 1000px;
 margin: 0 -580px;
 height: 500px;
    }
    .grdirModalActeEffet
    {

 width: 1000px;
 margin: 0 -530px;
 height: 500px;

    }
    .sommecolor{
        background-color: red;
        color:red;
        font-size: 120%;
        text-align: center;
        font-weight:bold;
    }
</style>
