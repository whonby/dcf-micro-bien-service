
<template>
    

<div>
        <div class="container-fluid">
            <h4 v-if="marcheDetail(marcheid)" >Detail Marche en procedure simplifiée : {{marcheDetail(marcheid).objet}}  <button class="btn btn-danger btn-large" v-if="marcheDetail(marcheid).attribue==0">Marché en cours de passation</button>
                <button class="btn btn-success btn-large" v-else>Marché attribué</button></h4>
            <hr />

            <div class="widget-box">
                <div class="widget-content">
                    <div class="widget-content nopadding">
                        <table class="table table-striped table-bordered" v-if="detail_marche">
                            <thead>
                            <tr>
                                <th>Exercice Budgetaire</th>
                                <th>Type de procedure</th>
                                <th>Objet marché</th>
                                <th>Reference marché</th>
                                <th>Montant marché</th>
                                <th>Type de marché</th>
                                <th>Unite administrative</th>
                                
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-if="detail_marche">
                                 <td class="taskOptions">
                                    {{detail_marche.exo_id}}
                                </td>
                                <td class="taskDesc">{{afficherLibelleTypeProcedure(detail_marche.procedure_passation_id)}}</td>
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
                               
                            </tr>
                            </tbody>
                        </table>             

                    </div>
                </div>
            </div>

            <div class="row-fluid">
                <div class="span3">

                </div>
            </div>
            
            <div class="row-fluid">
                <div class="span12">
                     <template v-if="detail_marche.procedure_passation_id == 15">
                    <div class="widget-box">
                        <div class="widget-title">
                            <ul class="nav nav-tabs">
                                <li class="active"><a data-toggle="tab" href="#tab01">Cotation</a></li>
                                <li class=""><a data-toggle="tab" href="#tab4">Ouverture</a></li>
                                <li class=""><a data-toggle="tab" href="#tab1">Attribution</a></li>
                               
                                
                            </ul>
                        </div>
                        
                         <div class="widget-content tab-content">

                         <div id="tab01" class="tab-pane active">
                                <div class="span4"></div>
                                <div class="span4"></div>
                                <div class="span4" align="right">
                                    <a href="#addCotation" data-toggle="modal" class="btn btn-success" align="rigth">Ajouter</a></div>
                                <h4>Liste des receptions de cotation</h4>

                      <component-cotation :macheid="detail_marche.id"></component-cotation>
                         </div>

                        <div id="tab1" class="tab-pane">
                <div align="right">
                    <div class="widget-content">
                        <a href="#ajouterActeEffetFinancier" data-toggle="modal" class="btn btn-warning">Ajouter</a>
                    </div>


                </div>
                <component-acte :macheid="detail_marche.id"></component-acte>

                </div>


                   <div id="tab4" class="tab-pane">
                <div align="right">
                    <div class="widget-content">
                        <a href="#ajouterOuverture" data-toggle="modal" class="btn btn-success">Ajouter</a>
                    </div>


                </div>
               
                   <component-ouverture :macheid="detail_marche.id"></component-ouverture>
                </div>

                         </div>

                         

                    </div>
                     </template>
                </div>
            </div>
              <div class="modal-footer">
        
        <a data-dismiss="modal" class="btn btn-danger" @click.prevent="retourListeEntreprise" href="#">Voir Tableau Marché</a>
       
      </div>
        </div>
          

</div>

</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    //import moment from 'moment';
    import componentCotation from '../dossierDetailMarchePs/dossierComponentPs/componentCotation';
   
     import componentOuverture from '../dossierDetailMarchePs/dossierComponentOuverture/componentOuverture';  
   import componentActe from '../dossierDetailMarchePs/dossierComponentActe/componentActe' ;
    //import bailleurAjouter from '../dossierComponent/bailleurAjouter';

   // import bailleurAjouter from '../dossierComponent/bailleurAjouter'

    //import {getterDossierCandidats} from "../../../vuex/modules/fabrice/bienService/Getters";
    //import {  ModelListSelect } from 'vue-search-select'
    import 'vue-search-select/dist/VueSearchSelect.css'
//import { formatageSomme } from "../../../../src/Repositories/Repository";
    export default {
       
        components:{

            componentCotation,
            componentOuverture,
            componentActe,


        // bailleurAjouter,

           // bailleurAjouter,

            
           // ModelListSelect,

        },
        data() {
            return {
                fabActions: [
                    {
                        name: "cache",
                        icon: "add"
                    }

                ],
                    
              
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

            ...mapGetters("bienService", [ "procedurePassations","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres",
               "getterDossierCandidats","marches","gettersOuverturePersonnaliser","getActeEffetFinancierPersonnaliser","gettersCotationPersonnaliser"
               
               
              ]),
            ...mapGetters('personnelUA', ['acteur_depenses']),


                ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises']),
            ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
                'types_financements']) ,
                
    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),
           
        afficherLibelleTypeProcedure() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.procedurePassations.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },

        },
        
        methods: {
            ...mapActions("bienService", ['ajouterCotation' , 'modifierCotation','supprimerCotation']),
            ...mapActions('gestionMarche', ['getEntreprise',"ajouterEntreprise","supprimerEntreprise","modifierEntreprise","ajouterSanction"]),
            // 
          






                 marcheDetail(){
                return  marche_id=>{
                    if (marche_id!="") {
                        const vM=this;
                       // console.log("Marche detail")
                        let Objet=this.marches.find(idmarche => idmarche.id == marche_id)
                        if(Objet!=undefined){
                           vM.formData.type_appel=Objet.procedure_passation.type_procedure.libelle;
                            vM.formData.imputation=Objet.imputation;
                            vM.formDossierCadidature.procedure_passation_id=Objet.procedure_passation.id;
                            vM.formDemande.ref_marche=Objet.reference_marche
                        }
                        return  this.marches.find(idmarche => idmarche.id == marche_id
                        )
                    }
                }

            },

              retourListeEntreprise(){
                 this.$router.push({ name: 'marche' })
            },
           
           
      
        }
    };
</script>
