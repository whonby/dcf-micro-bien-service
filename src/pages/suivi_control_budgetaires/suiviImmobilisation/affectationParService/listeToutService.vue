
<template>
    <div>

                
               
                 <!-- <div align="right"> -->
                <!-- Search:
                <input type="search" placeholder v-model="search" />
              </div> -->
                <table class="table table-bordered table-striped">
                    <thead>
                    <tr>

                        <th>Uninte administrative</th>
                        <th>Service</th>
                        <th>Equipé</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="odd gradeX" v-for=" serv in listeDesServiceDeUa"
                        :key="serv.id">
                        
                              <td >
                            {{afficheToutUA(serv.ua_id) || 'Non renseigné'}}</td>
                            <td >
                            {{afficheToutService(serv.serviceua_id) || 'Non renseigné'}}</td>
                             <td style="text-align: center;">
                      
                       
                          
                         
                     <span style="font-weight: 500;" v-if="serv.normeequipement == 0"  class="btn btn-success" >Oui</span>
                     <span  v-else  class="btn btn-danger" style="font-weight: 500;"> Non</span>
                     
                        
                     
                    </td>

                    </tr>
                    </tbody>
                </table>

              
     




<!--- fin ajout acte effet financier  -->










<!--- fin modifier acte effet financier  -->
  <notifications/>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import { formatageSomme } from '../../../../../src/Repositories/Repository';
import {admin,dcf,noDCfNoAdmin} from "../../../../../src/Repositories/Auth"
//import moment from 'moment';
export default {
    data(){
        return{
      
search:""
        }
    },
    props:["macheid"],
    created(){},

       computed: {

            ...mapGetters("bienService", [ "gettersCotations","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots",
                "modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
            ...mapGetters('personnelUA', ['acteur_depenses']),

admin:admin,
      dcf:dcf,
      noDCfNoAdmin:noDCfNoAdmin,
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
      "uniteAdministratives"
      // "chapitres",
      // "sections"
    ]),
   ...mapGetters("SuiviImmobilisation", ["services"]),
   ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
    //   filtreServiceUniteAdministrative() {
    //   const st = this.search.toLowerCase();
    //   return this.servicesua.filter(type => {
    //     return (
         
    //       type.afficheService(this.libelle).toLowerCase().includes(st)
    //     );
    //   });
    // },

listeDesServiceDeUa() {
  
        if (this.noDCfNoAdmin){
            let colect=[];
            this.getterplanOrganisationUa.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
          return colect.filter(items=>items.serviceua_id !=null);
        }

       return this.getterplanOrganisationUa.filter(items=>items.serviceua_id !=null);

    },



 afficheToutUA() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
afficheToutService() {
      return id => {
        if (id != null && id != "") {
           const qtereel2 = this.services.find(qtreel => qtreel.id == id);

      if (qtereel2) {
        return qtereel2.libelle;
      }
      return 0
        }
      };
    },


      
      },

      methods:{ 

          ...mapActions('bienService',['supprimerActeEffetFinancier',
          'ajouterActeEffetFinancier','modifierActeEffetFinancier', 'modifierMarche']),

              

              ajouterModalActeEffetFinancierLocal(){
       /* var nouvelObjet = {
            ...this.formEffetFinancier,
            duree: this.nombreDejourCalcule
        }*/
    //let entreprisePremier=this.entreprises.find(item=>item.numero_rc==rcm)
             
    this.formEffetFinancier.marche_id=this.macheid
    //this.formEffetFinancier.entreprise_id=entreprisePremier.id
    this.ajouterActeEffetFinancier(this.formEffetFinancier)
    let marcheObjet=this.marches.find(marche=>marche.id==this.macheid)
    marcheObjet.attribue = 2
    marcheObjet.numero_marche=this.formEffetFinancier.numero_marche
   // console.log(marcheObjet)
    this.modifierMarche(marcheObjet)
    this.formEffetFinancier = {
             code_act:"",
             libelle_act:"",
             reference_act:"",
             objet_act:"",
             incidence_financiere:"",
             montant_act:"",
              date_attributaire:"",
             date_reception:"",
             duree:"",
             date_fin_exe:"",
             date_odre_service:"",
             livrable_id:"",
        autorite_approbation:"",
        date_approbation:"",
            // text_juridique_id:"",
             type_act_effet_id:"",
             analyse_dossier_id:"",
             entreprise_id:"",
             marche_id:"",
             numero_marche:""

    }
},

         afficherModalModifierActeEffetFinancier(index){
    this.$('#modifierActeEF').modal({
        backdrop: 'static',
        keyboard: false
    });
    this.editActeEffetFinancier = this.acteEffetFinanciers.find(item=>item.id==index)
}, 

modifierModalActeEffetFinancierLocal(){

    this.modifierActeEffetFinancier(this.editActeEffetFinancier)
    this.$('#modifierActeEF').modal('hide');
},

formatageSomme:formatageSomme,

//  formaterDate(date) {
//               return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
//             },
      }
}
</script>

<style scoped>
.grdirModalActeEffet{
     width: 1200px;
 margin: 0 -530px;
 height: 550px;

}
</style>