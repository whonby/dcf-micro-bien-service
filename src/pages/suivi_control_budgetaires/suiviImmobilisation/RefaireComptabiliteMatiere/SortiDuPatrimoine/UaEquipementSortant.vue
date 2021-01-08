
<template>

<div>
    <div  class="row-fluid" v-if="affiche_filtre" style="margin-top: -20px">
                <div class="span1">

                </div>
                <div class="span10 " style="background: #f0c71d !important;">
                    <table class="table table-striped"  style="background: #f0c71d !important;">
                        <tbody>
                        <tr>
                        
                            
                            <td style="background: #f0c71d !important;">
                                <label style="font-size:20px">Section<a href="#" @click.prevent="videSection()" v-if="uniteAdministrative_id" style="color: red"><i class="fa fa-trash-o"></i></a>
                                </label>
                                <model-list-select style="background-color: #fff;"
                                                   class="wide"
                                                   :list="sections"
                                                   v-model="section_id"
                                                   option-value="id"
                                                   option-text="nom_section"
                                                   placeholder=""
                                >

                                </model-list-select>
                            </td>
                          <td style="background: #f0c71d !important;">
                                <label style="font-size:20px">Unité Administrative<a href="#" @click.prevent="videUniteAdministrative()" v-if="uniteAdministrative_id" style="color: red"><i class="fa fa-trash-o"></i></a>
                                </label>
                                <model-list-select style="background-color: #fff;"
                                                   class="wide"
                                                   :list="uniteAdministratives"
                                                   v-model="uniteAdministrative_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder=""
                                >

                                </model-list-select>
                            </td>
                        </tr>

                        </tbody>
                    </table>

                </div>


            </div>

                <table class="table table-bordered table-striped">
                    <thead>
                     <tr>
                     
                  
                    <th>Unité d'Administrative</th>
                   <th>Détail</th>
                  </tr>
                    </thead>
                    <tbody>
                   <tr
                    class="odd gradeX"
                    v-for="BesoinImmo in EquipementDansLePatrimoine(uniteAdministrative_id)"
                    :key="BesoinImmo[0].id"
                  >
                  <td
                   style="width:90%;font-size:14px"
                    >{{afficherUniteAdministrative(BesoinImmo[0].uniteadministrative_id) || 'Non renseigné'}}</td>
                   <td style="font-size:14px" >
                       <router-link :to="{ name: 'SortiDuPatrimoine', params: { id: BesoinImmo[0].id }}"
                 class="btn btn-inverse " title="">
        <span class="">Voir Equipement</span>
    </router-link>
                      
                    </td> 
                  </tr>
                 
                    </tbody>
                </table>

              
     




  


<fab :actions="fabActions"
                main-icon="apps"
          
        @searchMe="filter"
         
        bg-color="green"

  ></fab>
<notifications  />


    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import { formatageSomme } from "../../../../../Repositories/Repository";
import {admin,dcf,noDCfNoAdmin} from "../../../../../Repositories/Auth"
//import moment from 'moment';
import {  ModelListSelect } from 'vue-search-select'
    import 'vue-search-select/dist/VueSearchSelect.css'
export default {
    components: {
    
    ModelListSelect,
     
  },
    data(){
        return{
         fabActions: [
        
        {
                  name: 'searchMe',
                   icon: "search"
              }
        
      ],
search:"",
 uniteAdministrative_id:"",
 section_id:"",
       affiche_filtre:false,
      affiche_boutton_filtre:true,
        }
    },
    props:["macheid"],
//     created() {
//             this.marcheid=this.$route.params.id
//    this.detail_Ua = this.acte_personnels.find(
//        idmarche => idmarche.id == this.$route.params.id
//    )
 
// },

       computed: {
  admin:admin,
      dcf:dcf,
      noDCfNoAdmin:noDCfNoAdmin,
     ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
            ...mapGetters("bienService", [ "gettersCotations","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots",
                "modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
            ...mapGetters('personnelUA', ['acteur_depenses','personnaFonction','acte_personnels',"fonctions"]),


                ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises','banques','comptes','getCompte']),
            ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
                'types_financements']) ,
                
    ...mapGetters("parametreGenerauxAdministratif", ["getterplanOrganisationUa","exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),
       ...mapGetters('parametreGenerauxFonctionnelle', ['structureActe', 
  'planActe']),
 ...mapGetters("uniteadministrative", [
      "directions",
      "servicesua",
      "fonctionsua",
      "getPersonnaliseBudgetGeneral",
      "montantBudgetGeneral",
      "uniteZones",
      "getPersonnaliseBudgetGeneralParTransfert",
      "uniteAdministratives",
      "GestionStockageArticles",
      "groupStockArticle"
      // "chapitres",
      // "sections"
    ]),
   ...mapGetters("SuiviImmobilisation", ["services","groupeUaAffectation",
    "trieUaImmobilisation",
      "equipements",
      "familles",
      "articles",
      "SommeQuantiteNonCouvert",
      "getAfficheArticle",
      "getPersoStock",
      "stockageArticles",
      "groupUatypeNorme",
      "groupUaNorme",
      "groupUaNormeFamille",
      "normeEquipements",
      "groupUaNormeEquipe",
      "groupUaNormeFonction",
      "getPersoNormeArticle",
      "services",
      "besoinEquipement",
      "afficherDirection",
      "afficherService",
      "afficherFonction",
      "type_Unite_admins",
      "getPersoListeDesNorme",
      "normeImmo",
      "getPersonnaliseNormeEquipement",
      "afficherDemandeParService",
      "natureEntres",
      "EtatImmobilisations",
      "causeInactivite",
      "immobilisations",
      "afficheRegroupeEquipementCouvert",
      "demandeMateriel",
      "getterUa_idImo",
      "marqueVehicules",
      "ModeleVehicules",
      "ficheArticle"
   
   ]),
   objetMarchePasUniteOuRegion(){

                let vM=this;
                let objet=this.groupeUaAffectation

                
              
                if(this.section!="" && this.grandeNature_id=="" && this.typeFinancement_id==""){
                  
                    objet =objet.filter(item=>{
                        if(item.section_id==vM.section){
                            return item
                        }
                    })

                }
             if(this.section!="" && this.grandeNature_id!="" && this.typeFinancement_id==""){
                  
                    objet =objet.filter(item=>{
                        if(item.section_id==vM.section && item.gdenature_id==vM.grandeNature_id){
                            return item
                        }
                    })

                }
 if(this.section!="" && this.grandeNature_id=="" && this.typeFinancement_id!=""){
                  
                    objet =objet.filter(item=>{
                        if(item.section_id==vM.section && item.typefinancement_id==vM.typeFinancement_id){
                            return item
                        }
                    })

                }

                return objet
            },


   afficherUniteAdministrative() {
       
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel!=undefined) {
        
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
ListeActiclePatrimoineSortant() {
      


        if (this.noDCfNoAdmin){
            let colect=[];
            this.groupeUaAffectation.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item[0].uniteadministrative_id)
                if (val!=undefined){
                    colect.push(item[0])
                    return item
                }
            })
            return colect;
     
        }
return this.groupeUaAffectation;
      

    },

EquipementDansLePatrimoine() {
      return id => {
        if (id != null && id != "") {
           return this.ListeActiclePatrimoineSortant.filter(qtreel => qtreel[0].uniteadministrative_id == id );

        }
        return this.ListeActiclePatrimoineSortant;
      };
     
    },



      },

      methods:{ 

          ...mapActions('bienService',['supprimerActeEffetFinancier',
          'ajouterActeEffetFinancier','modifierActeEffetFinancier', 'modifierMarche']),
 ...mapActions("uniteadministrative", [
     "getAllServiceua",
      "ajouterService",
      "modifierService",
      "supprimerService",
      "modifierStockArticle"
     
      // "ajouterHistoriqueBudgetGeneral"
    ]),
...mapActions("SuiviImmobilisation", [
       "ajouterImmobilisation",
       "modifierImmobilisation",
       "modifierStock",
       "ajouterHistotorisqueAffectionService",
       "modifierDemandeMateriel",
      "ajouterHistotorisqueAffection",
      ""
      
     
    ]),
...mapActions('personnelUA', ['getActeur',"ajouterActeur","supprimerActeurs","getNbrActeurAcrediteTaux",
            "allActeurDepense", "modifierActeurDepenses","modifierSalaire","modificationActeur","modifierPersonnel"]),


   filter(){
                this.affiche_filtre=!this.affiche_filtre
               
            },
            videSection(){
                this.section_id =""
            },
    videUniteAdministrative(){
                this.uniteAdministrative_id =""
            },
formatageSomme:formatageSomme,

//  formaterDate(date) {
//               return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
//             },
      }
}
</script>
<style scoped>
.taillemodal {
  width: 1400px;
  margin: 0 -700px;
}
.taillemodal1 {
  width: 800px;
  margin: 0 -455px;
}
.sommecolor{
  background-color: red;
  color:red;
  font-size: 120%;
  text-align: center;
  font-weight:bold;
}
.tailgrand{
  width: 77%;
  margin: 0 -38%;
}
.tailleImmobilisation{
  width: 90%;
  margin: 0 -45%;
}
.valDirecteur{
  width:72%;
  margin:0 -40%;
}
</style>