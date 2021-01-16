
<template>
  <div >
    

    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
         
          <div class="widget-box">
            <div class="widget-title">
              <!-- <div align="right">
                Recherche:
                <input type="search" placeholder="Saisie section ou libelle" v-model="search" />

               
              </div> -->
              <div align="right">

      <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>


                            </div>
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5 style="width:25%;text-align:center;">FICHE DE SUIVI DES MARCHES- CONTRATS</h5>
            </div>
            <!-- <div class="widget-title"> -->
              <div id="printMe">

              
                   <table class="table table-bordered table-striped">
  <thead>
    <tr>
        <th style="width:25%;text-align:center;font-size:16pxbackground-color: orange;">A L'ATTENTION DU CONTROLEUR  </th>
    </tr>
  </thead>
  <tbody>
  </tbody>
</table>

           
           
           
           
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th style="width:10%">CODE</th> 
                    <td>{{affichierCodeUa(detailMarche.ua_id)}} </td>
                  </tr>
                  <tr>
                    <th style="width:10%">LIBELLE </th>
                    <td>{{affichierLibelleUa(detailMarche.ua_id)}} </td>
                  </tr>
                  <tr>
                    <th style="width:10%">TYPE DE MARCHE </th>
                      <td>{{affichierLibelleTypeMarche(affichierIdTypeMarche(detailMarche.marche_id))}} </td>
                   </tr>
                  
                 
                </thead>
                
              </table>
                                <table class="table table-bordered table-striped">
  <thead>
    <tr>
        <th style="width:25%;text-align:center;font-size:16px;background-color: coral;color:#fff">MARCHE - CONTRAT </th>
    </tr>
  </thead>
  <tbody>
  </tbody>
</table>
            
               
   <table class="table table-bordered table-striped">
     <thead>
       <tr>
         <th style="width:25%;">OBJET </th>
          <td style="width:15%" colspan="5" >{{affichierObjetMarche(detailMarche.marche_id)}} </td>
       </tr>
       
       <tr>
          <th style="width:10%">TITULAIRE</th>
           <td style="width:15%" colspan="5" >{{affichierNomEntreprise(detailMarche.entreprise_id)}} </td>
       </tr>
       <tr>
          <th  style="width:25%">MONTANT TOTAL</th>
           <td style="width:15%"  colspan="1">{{formatageSomme(parseFloat(detailMarche.montant_act_ht))}} </td>
           <td style="width:15%"  colspan="1">MONTANT HT </td>
           <td style="width:15%"  colspan="1">{{formatageSomme(parseFloat(detailMarche.montant_act))}} </td>
           <td style="width:15%"  colspan="1">MONTANT TTC  </td>
           <td style="width:15%"  colspan="1"> </td>
       </tr>
      <tr>
       <th  style="width:25%">AVANCE DE DEMARRAGE </th>
        <td style="width:15%"  colspan="1">{{formatageSomme(parseFloat(detailMarche.avance_demarrage_ht))}} </td>
       <td style="width:15%"  colspan="1">MONTANT HT </td>
       <td style="width:15%"  colspan="1">{{formatageSomme(parseFloat(detailMarche.avance_demarrage_ttc))}} </td>
       <td style="width:15%"  colspan="1">MONTANT TTC</td>
       <td style="width:15%"  colspan="1">{{detailMarche.taux_avance_demarrage}} % </td>
      
       </tr>
      <tr>
        <th  style="width:10%">NUMERO</th>
        <td style="width:15%" colspan="5" > {{affichierNumeroMarche(detailMarche.marche_id)}}</td>
       </tr>
       <tr>
        <th  style="width:10%">DATE D'APPROBATION</th>
        <td style="width:15%" colspan="5" >{{formaterDate(detailMarche.date_approbation)}} </td>
       </tr>
       <tr>
        <th  style="width:10%">DATE DE DEMARRAGE </th>
        <td style="width:15%" colspan="5" >{{formaterDate(detailMarche.date_odre_service)}} </td>
       </tr>
       <tr>	
        <th  style="width:10%">DELAI PREVISIONNEL DE REALISATION  </th>
        <td style="width:15%" colspan="5" >{{detailMarche.duree}} Jours</td>
       </tr>
       <tr>
        <th  style="width:10%">DATE DE FIN PREVISIONNELLE </th>
        <td style="width:15%" colspan="5" > {{formaterDate(detailMarche.date_fin_exe)}}</td>
       </tr>
     

     </thead>
     
   </table>
   <hr>        
   <table class="table table-bordered table-striped">
  <thead>
    <tr>
        <th style="width:25%;text-align:center;font-size:16px;background-color: #4bc302;color:#fff"> AVENANT </th>
    </tr>
  </thead>
  <tbody>
  </tbody>
</table>
 
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th style="width:25%">OBJET</th>
           <td style="width:15%" colspan="5" > {{affichierObjetAvenant(detailMarche.marche_id)}}</td> 
        </tr>
         <tr>
          <th style="width:25%">NUMERO</th>
          <td style="width:15%" colspan="5" >{{affichierNumeroAvenant(detailMarche.marche_id)}} </td> 
        </tr>
         <tr>
           <th style="width:25%">MONTANT</th>
           <td style="width:15%" colspan="1" > {{formatageSomme(parseFloat(affichierMontantHTAvenant(detailMarche.marche_id)))}} </td> 
           <td style="width:15%" colspan="1" >MONTANT HT </td>
           <td style="width:15%" colspan="1" >{{formatageSomme(parseFloat(affichierMontantTTCAvenant(detailMarche.marche_id)))}} </td>
           <td style="width:15%" colspan="1" >MONTANT TTC</td>
           <td style="width:15%" colspan="1" > {{affichierTAUXAvenant(detailMarche.marche_id)}} %</td>
           
        </tr>
        
      
      </thead>
      <tbody>
      </tbody>
    </table>
      <table class="table table-bordered table-striped">
  <thead>
    <tr>
        <th style="width:25%;text-align:center;font-size:16px;background-color:#f0c81f ;color:#fff"> DECOMPTE  </th>
    </tr>
  </thead>
  <tbody>
  </tbody>
</table>

<table class="table table-bordered table-striped">  
  <thead>
    <tr>
     <th style="width:10%">EXECUTION A FIN DECEMBRE (n-1) Y/C AVANCE</th>
      <td style="width:30%" colspan="1" > </td>
      <td style="width:30%" colspan="1" >F CFA HT </td>
      <td style="width:30%" colspan="1" > </td>
    </tr>
     <tr>
     <th style="width:30%">DOTATION PREVISIONNELLE 2020</th>
      <td style="width:30%" colspan="1" > </td>
      <td style="width:30%" colspan="1" >F CFA HT  </td>
      <td style="width:10%" colspan="1" > </td>
    </tr>
     <tr>
     <th style="width:30%">NUMERO DE DECOMPTE</th>
      <td style="width:70%" colspan="3" > </td>
     
    </tr>
     <tr>
     <th style="width:30%">MONTANT EXECUTE AVANT DECOMPTE Y/C AVANCE</th>
      <td style="width:30%" colspan="1" > </td>
      <td style="width:30%" colspan="1" >F CFA HT </td>
      <td style="width:10%" colspan="1" > %</td>
    </tr>
     <tr>
     <th style="width:30%">MONTANT DU PRESENT DECOMPTE</th>
      <td style="width:30%" colspan="1" > </td>
      <td style="width:30%" colspan="1" >F CFA HT </td>
      <td style="width:10%" colspan="1" > %</td>
    </tr>
     <tr>
     <th style="width:30%">MONTANT TOTAL APRES DECOMPTE Y/C AVANCE</th>
      <td style="width:30%" colspan="1" > </td>
      <td style="width:30%" colspan="1" >F CFA HT </td>
      <td style="width:10%" colspan="1" > %</td>
    </tr>
     <tr>
     <th style="width:30%">MONTANT TOTAL EXECUTE SUR DOTATION 2020</th>
      <td style="width:30%" colspan="1" > </td>
      <td style="width:30%" colspan="1" >F CFA HT </td>
      <td style="width:10%" colspan="1" > %</td>
    </tr>
     <tr>
     <th style="width:30%">RESTE A EXECUTER SUR DOTATION 2020</th>
      <td style="width:30%" colspan="1" > </td>
      <td style="width:30%" colspan="1" >F CFA HT </td>
      <td style="width:10%" colspan="1" > %</td>
    </tr>
     <tr>
     <th style="width:30%">RESTE A EXECUTER SUR MONTANT TOTAL</th>
      <td style="width:30%" colspan="1" > </td>
      <td style="width:30%" colspan="1" >F CFA HT </td>
      <td style="width:10%" colspan="1" > %</td>
    </tr>
  
  </thead>
  <tbody>
  </tbody>
</table>

          <hr> 
<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="text-align:center;">TACHES PREVUES </th>
      <th style="text-align:center;">TACHES EXECUTEES</th>
      <th style="text-align:center;">PREUVES DE REALISATION</th>
    </tr>
    <tr height="120px">
      <td > </td>
      <td > </td>
      <td > 
         </td>
    </tr>
  </thead>
  <tbody>
  </tbody>
</table>
</div>
     <hr>
 
            <!-- <div v-else> -->
              <!-- <p style="text-align:center;font-size:20px;color:red;">Aucune Unite Administrative</p> -->
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>

    <!-- <fab :actions="fabActions" @cache="afficherModalAjouterpaiementPersonnel" main-icon="apps" bg-color="green"></fab>
        <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterpaiementPersonnel()">Open</button>
  <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
  <notifications  /> -->
  </div>
</template>
  
/ <script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
 import { formatageSomme } from "@/Repositories/Repository";
// import { ModelListSelect } from "vue-search-select";
// import "vue-search-select/dist/VueSearchSelect.css";
export default {
  // components: {
  //   ModelListSelect
  // },
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
      editpaiementPersonnel: {
        
        
         
      },
      json_fields: {
       
      },
      search: ""
    };
  },
props:["macheid"],
      created() {
            this.marcheid=this.$route.params.id
   this.detailMarche = this.acteEffetFinanciers.find(
       idmarche => idmarche.marche_id == this.$route.params.id 
         )
  
},
  computed: {
  ...mapGetters("bienService", ["avenants","modepaiements",'mandats','getMandatPersonnaliserVise','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
     'acteEffetFinanciers','montantPlanification','montantContratualisation','afficheContratualisation','affichePlanifier',
     'nombremarchesExecute',
     'AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
      "printMarcheNonAttribue","procedurePassations","typeTypeProcedures",
     "montantComtratualisation","text_juridiques", "gettersOuverturePersonnaliser", "typeActeEffetFinanciers"]),

   ...mapGetters('personnelUA', ['acteur_depenses',"paiementPersonnel"]),
   
   ...mapGetters('uniteadministrative',[
    "plans_programmes",
 "uniteAdministratives",
 "afficheNiveauAction",
 "afficheNiveauActivite",
 "derniereNivoPlanBudgetaire",
 "getPersonnaliseBudgetGeneralParPersonnel"
   
   
   ]),

   ...mapGetters('parametreGenerauxAdministratif',[

 "sections",
 "type_Unite_admins",
 "plans_programmes",
 "natures_sections",
 "grandes_natures",
 "afficheNiveauPlanProg",
 "exercices_budgetaires"
   ]),

   ...mapGetters('parametreGenerauxFonctionnelle',[

      "plans_fonctionnels",
 "afficheNiveauPlanFonctionnel"
   ]),
...mapGetters("gestionMarche", ['secteur_activites', 'entreprises','banques','comptes','getCompte']),
...mapGetters('parametreGenerauxActivite',[ 'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

...mapGetters('parametreGenerauxBudgetaire',["plans_budgetaires","derniereNivoPlanBudgetaire"]),
affichierObjetAvenant(){
      return id =>{
        if(id!=null && id!=""){
          let objetMarche = this.avenants.find(idMarche => idMarche.marche_id ==id);
          if(objetMarche){
            return objetMarche.objet_avenant
          }
          return 'Non renseigné'
        }
      }
    },
    affichierNumeroAvenant(){
      return id =>{
        if(id!=null && id!=""){
          let objetMarche = this.avenants.find(idMarche => idMarche.marche_id ==id);
          if(objetMarche){
            return objetMarche.numero_avenant
          }
          return 0
        }
      }
    },
    affichierMontantTTCAvenant(){
      return id =>{
        if(id!=null && id!=""){
          let objetMarche = this.avenants.find(idMarche => idMarche.marche_id ==id);
          if(objetMarche){
            return objetMarche.montant_avenant
          }
          return 'Non renseigné'
        }
      }
    },
    affichierMontantHTAvenant(){
      return id =>{
        if(id!=null && id!=""){
          let objetMarche = this.avenants.find(idMarche => idMarche.marche_id ==id);
          if(objetMarche){
            return objetMarche.montant_ht
          }
          return 0
        }
      }
    },
    affichierTAUXAvenant(){
      return id =>{
        if(id!=null && id!=""){
          let objetMarche = this.avenants.find(idMarche => idMarche.marche_id ==id);
          if(objetMarche){
            return objetMarche.taux
          }
          return 0
        }
      }
    },
affichierNumeroMarche(){
      return id =>{
        if(id!=null && id!=""){
          let objetMarche = this.marches.find(idMarche => idMarche.id ==id);
          if(objetMarche){
            return objetMarche.numero_marche
          }
          return 0
        }
      }
    },
 affichierObjetMarche(){
      return id =>{
        if(id!=null && id!=""){
          let objetMarche = this.marches.find(idMarche => idMarche.id ==id);
          if(objetMarche){
            return objetMarche.objet
          }
          return 0
        }
      }
    },
   affichierNomEntreprise(){
      return id =>{
        if(id!=null && id!=""){
          let objetMarche = this.entreprises.find(idMarche => idMarche.id ==id);
          if(objetMarche){
            return objetMarche.raison_sociale
          }
          return 0
        }
      }
    },      
       affichierLibelleUa(){
      return id =>{
        if(id!=null && id!=""){
          let objetMarche = this.uniteAdministratives.find(idMarche => idMarche.id ==id);
          if(objetMarche){
            return objetMarche.libelle
          }
          return 0
        }
      }
    },  
    affichierCodeUa(){
      return id =>{
        if(id!=null && id!=""){
          let objetMarche = this.uniteAdministratives.find(idMarche => idMarche.id ==id);
          if(objetMarche){
            return objetMarche.code
          }
          return 0
        }
      }
    }, 
    affichierIdTypeMarche(){
      return id =>{
        if(id!=null && id!=""){
          let objetMarche = this.marches.find(idMarche => idMarche.id ==id);
          if(objetMarche){
            return objetMarche.type_marche_id
          }
          return 0
        }
      }
    },  
    affichierLibelleTypeMarche(){
      return id =>{
        if(id!=null && id!=""){
          let objetMarche = this.typeMarches.find(idMarche => idMarche.id ==id);
          if(objetMarche){
            return objetMarche.libelle
          }
          return 0
        }
      }
    },                             
  },
  methods: {
    ...mapActions("personnelUA", [
      "getpaiementPersonnel",
      "ajouterpaiementPersonnel",
      "modifierpaiementPersonnel",
      "supprimerpaiementPersonnel"
    ]),
    genererEnPdf(){
  this.$htmlToPaper('printMe');
},
formatageSomme:formatageSomme,
    alert() {
      console.log("ok");
    },

    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
    ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>
<style scoped>

.tailgrand{
      width: 95%;
margin: 0 -48%;

  
}
th{
  text-align:left;
}
td{
  font-size:14px;
  font-weight:bold;
}
</style>
