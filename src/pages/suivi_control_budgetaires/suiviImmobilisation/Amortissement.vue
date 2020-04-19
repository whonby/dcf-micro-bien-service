<template>

  <div class="container-fluid">
    <div class="row-fluid">
      <div class="span12">
        <div class="widget-box">
         

          <!--- PREMIERE PARTIE --->
          <div class="table-responsive text-nowrap">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <!-- <th>Code</th> -->
                  <th style="text-align: center;font-size:14px;font-weight:bold;">Année budgétaire</th>
                  <!-- <th>Taux</th> -->
                  <th style="text-align: center;font-size:14px;font-weight:bold;">durée</th>
                  <th style="text-align: center;font-size:14px;font-weight:bold;">Désignation</th>
                  <th style="text-align: center;font-size:14px;font-weight:bold;">Valeur Origine</th>
                  <th style="text-align: center;font-size:14px;font-weight:bold;">Date de mise en service</th>
                  
                  <!-- <th>Acteur Depense</th> -->
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX">
                  <td style="text-align: center;font-size:14px;font-weight:bold;">{{BesoinImmo.annee || 'Non renseigné'}}</td> 
                  <!-- <td>{{BesoinImmo.TVA_id || 'Non renseigné'}} %</td> -->
                  <td style="text-align: center;font-size:14px;font-weight:bold;">{{BesoinImmo.dure_vie || 'Non renseigné'}} Ans</td>
                    <td style="text-align: center;font-size:14px;font-weight:bold;">{{afficheFamille(BesoinImmo.article_id) || 'Non renseigné'}}</td>
                  <td style="text-align: center;font-size:14px;font-weight:bold;">{{formatageSomme(BesoinImmo.valeurorigine) || 0 }}</td>
                  <td style="text-align: center;font-size:14px;font-weight:bold;">{{formaterDate(BesoinImmo.date_mise_service) || 'Non renseigné'}}</td>
                 
                  
                </tr>
              </tbody>
            </table>
             <div class="widget-title">
            <span class="icon">
              <i class="icon-th"></i>
            </span>
            <h5 style="text-align: center;font-size:14px;font-weight:bold;">Amortissement</h5>
        
          </div>
            <ul class="nav nav-tabs">
              <li class="active"><a data-toggle="tab" href="#tab1" style="text-align: center;font-size:14px;font-weight:bold;">Amortissement linéaire simple</a></li>
              <li v-if="getNombreDeMois != 12"><a data-toggle="tab" href="#tab2" style="text-align: center;font-size:14px;font-weight:bold;">Amortissement linéaire au prorata temporis</a></li>
              
            </ul>
             <div class="widget-content tab-content">
               
                <div id="tab1" class="tab-pane active">
                       <download-excel
            class="btn btn-default pull-right"
            style="cursor:pointer;"
            :fields="json_fields_lineaire"
            title="Amortissement Linéaire Simple"
            :data="Amortissement"
            name="Amortissement Linéaire Simple"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel>
                   <table class="table table-bordered table-striped">
                     
              <thead>
                <tr>
                  <!-- <th>Code</th> -->
                  <th style="text-align: center;font-size:14px;font-weight:bold;">Année</th>
                  <th style="text-align: center;font-size:14px;font-weight:bold;">Annuité</th>
                   <th style="text-align: center;font-size:14px;font-weight:bold;">Cumul</th> 
                  <th style="text-align: center;font-size:14px;font-weight:bold;">Valeur Net Comptable</th>
                  
                  
                 
                  <!-- <th>Acteur Depense</th> -->
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="amort in Amortissement" :key="amort.annee">
                  <td style="text-align: center;font-size:14px;font-weight:bold;">{{amort.annee }}</td> 
                  <td style="text-align: center;font-size:14px;font-weight:bold;">{{amort.anuite }}</td>
                    <td style="text-align: center;font-size:14px;font-weight:bold;">{{amort.cumul }}</td>

                  <td style="text-align: center;font-size:14px;font-weight:bold;">{{amort.valeurNette }}</td>
                  <!-- <td>{{test || 'Non renseigné'}} </td> -->
                   
                   
                </tr>
              </tbody>
            </table>
                </div>
            <!--  prorata -->
                 <div id="tab2" class="tab-pane">
                        <download-excel
            class="btn btn-default pull-right"
            style="cursor:pointer;"
            :fields="json_fields_prorata_temporis"
            title="Amortissement Prorata Temporis"
            :data="AmortissementProrataTemporis"
            name="Amortissement Prorata Temporis"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel>
                   <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <!-- <th>Code</th> -->
                  <th>Année</th>
                  <th>Annuité</th>
                   <th>Cumul</th> 
                  <th>Valeur Net Comptable</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="amort in AmortissementProrataTemporis" :key="amort.annee">
                  <td style="text-align: center;font-size:14px;font-weight:bold;">{{amort.annee }}</td> 
                  <td style="text-align: center;font-size:14px;font-weight:bold;">{{amort.anuite }}</td>
                    <td style="text-align: center;font-size:14px;font-weight:bold;">{{amort.cumul }}</td>

                  <td style="text-align: center;font-size:14px;font-weight:bold;">{{amort.valeurNette }}</td>
                  <!-- <td>{{test || 'Non renseigné'}} </td> -->
                   
                  
                </tr>
              </tbody>
            </table>
                </div>
                <!-- fin prorata -->
             </div>
         
         
         
           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import moment from "moment";
// import { formatageSomme } from "../../../Repositories/Repository";
import { formatageSomme } from "../../../Repositories/Repository";
export default {
  data() {
    return {
      BesoinImmo: undefined,
      json_fields_lineaire: {
        ANNEE: "annee",
        ANNUITE: "anuite",
        CUMUL: "cumul",
        VALEUR_NET_COMPTABLE:"valeurNette"
      },
      json_fields_prorata_temporis: {
        ANNEE: "annee",
        ANNUITE: "anuite",
        CUMUL: "cumul",
        VALEUR_NET_COMPTABLE:"valeurNette"
      },
    };
  },
  created() {
    this.getDetail()
  },

  watch: {
    '$route' : 'getDetail'
  },
  

  computed: {
    ...mapGetters("SuiviImmobilisation", ["historiqueAffectation","familles","historiqueAffectationService"]),

    afficheFamille() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.familles.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },

    calculAnnuite(){
      const BesoinImmo = this.BesoinImmo
      if(BesoinImmo != undefined){
        return  parseFloat(BesoinImmo.valeurorigine) / parseFloat(BesoinImmo.dure_vie)
      }
      return null
    },

    getAnnee(){
        const BesoinImmo = this.BesoinImmo
      if(BesoinImmo != undefined){
        var annee = new Date(BesoinImmo.date_mise_service).getFullYear()
        return parseFloat(annee) 
      }
      return null
    },

      getNombreDeMois(){
        const BesoinImmo = this.BesoinImmo
      if(BesoinImmo != undefined){
        var annee = new Date(BesoinImmo.date_mise_service).getMonth() + 1
        return 13 - parseFloat(annee) 
       
      }
      return null
    },

  Amortissement(){
        const BesoinImmo = this.BesoinImmo
      if(BesoinImmo.dure_vie != "" && BesoinImmo.date_mise_service != "" && BesoinImmo.valeurorigine != ""){
        var tableauAmortissement = []
         var tableauAmortissementAExporter = []

        var tailleDuTableau = this.BesoinImmo.dure_vie
         var valeurNettActuelle = BesoinImmo.valeurorigine
          var cumulActuel = this.calculAnnuite
              for(var i = 0; i < tailleDuTableau; i++){
            let objet = {
            annee : this.getAnnee + i,
          anuite : this.calculAnnuite,
          valeurNette : parseFloat(valeurNettActuelle) - this.calculAnnuite,
            cumul: cumulActuel
            }
            valeurNettActuelle = objet.valeurNette
            cumulActuel = this.calculAnnuite + objet.cumul
            tableauAmortissement.push(objet)

             let objet2 = {...objet,
                          anuite: this.formatageSomme( Number ( objet.anuite )),
                          valeurNette: this.formatageSomme( Number ( objet.valeurNette )),
                          cumul: this.formatageSomme( Number ( objet.cumul )),
                    }
          tableauAmortissementAExporter.push(objet2)

          }
    
        return tableauAmortissementAExporter
      }
      return null

      
    },

       AmortissementProrataTemporis(){
        const BesoinImmo = this.BesoinImmo
      if(BesoinImmo.dure_vie != "" && BesoinImmo.date_mise_service != "" && BesoinImmo.valeurorigine != ""){
        var tableauAmortissement = []
        var tableauAmortissementAExporter = []

        var tailleDuTableau = this.BesoinImmo.dure_vie
         var valeurNettActuelle = BesoinImmo.valeurorigine
          var cumulActuel = this.calculAnnuite

        if(this.getNombreDeMois === 12){
        //       for(var i = 0; i < tailleDuTableau; i++){
        //     let objet = {
        //     annee : this.getAnnee + i,
        //   anuite : this.calculAnnuite,
        //   valeurNette : parseFloat(valeurNettActuelle) - this.calculAnnuite,
        //     cumul: cumulActuel
        //     }
        //     valeurNettActuelle = objet.valeurNette
        //     cumulActuel = this.calculAnnuite + objet.cumul
        //     tableauAmortissement.push(objet)
        //   // i++

        //   }
        return null
        }else{
            for(var i = 0; i <= tailleDuTableau; i++){
            let objet = {
            annee : this.getAnnee + i,
          anuite : i == 0 ? ( (valeurNettActuelle * this.getNombreDeMois) / 12 ) / tailleDuTableau : i == tailleDuTableau ? this.calculAnnuite - tableauAmortissement[0].anuite : this.calculAnnuite,
          valeurNette : i == 0 ?  parseFloat(valeurNettActuelle) - ( ((valeurNettActuelle * this.getNombreDeMois) / 12 ) / tailleDuTableau) : i == tailleDuTableau ? 0 : parseFloat(valeurNettActuelle) - this.calculAnnuite,
            cumul: i == 0 ? ( (valeurNettActuelle * this.getNombreDeMois) / 12 ) / tailleDuTableau : i == tailleDuTableau ? BesoinImmo.valeurorigine : cumulActuel
            }
            valeurNettActuelle = objet.valeurNette
            cumulActuel = this.calculAnnuite + objet.cumul
            tableauAmortissement.push(objet)
            let objet2 = {...objet,
                          anuite: this.formatageSomme( Number ( objet.anuite )),
                          valeurNette: this.formatageSomme( Number ( objet.valeurNette )),
                          cumul: this.formatageSomme( Number ( objet.cumul )),
                    }
          tableauAmortissementAExporter.push(objet2)
          
          // i++

          }
        }
      

        return tableauAmortissementAExporter
      }
      return null

      
    },

  


 
  },
  methods: {
    getDetail(){
        this.BesoinImmo = this.historiqueAffectation.find(
      BesoinImmo => BesoinImmo.id == this.$route.params.id
    );
    },
    
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
   
       formatageSomme: formatageSomme,
  }
};
</script>