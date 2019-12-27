
<template>
  <div>
    
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
   
    
    
    <!-- Default Light Table -->
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
                     <!-- <download-excel
            class="btn btn-default pull-right"
            style="cursor:pointer;"
            :fields="json_fields"
            title="Liste de demandes d'immobilisation "
            :data="trieUaImmobilisation"
            name="Liste de demandes d'immobilisation"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel> -->
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Fiche d'analyse</h5>
              <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search" />
              </div>
            </div>

            <div class="widget-content nopadding" >
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     <!-- <th>Type Unite administrative</th> -->
                    <th title="unite administrative">Ua</th>
                     <th>Fonction</th> 
                     <th>Famille</th>
                    <th>Article</th>
                    <th>Norme</th>
                    <!-- <th title="quantite en stock">Qté en stock</th> -->
                    <th title="quantite couvert">Qté Couvert</th>
                   
                    <th title="quantite non couvert">Qté non Couvert</th>
                   
                    <th title="Prix unitaire">Prix unitaire</th>
                     <th title="total">Total</th>
                     
                    <!-- <th>Duree de vie</th> -->
                   
                    <!-- <th>Action</th> -->
                  </tr>
                </thead>
                <tbody>
                     <tr
                    class="odd gradeX"
                    v-for="stock in ressultatBesoin"
                    :key="stock.id"
                  >


                   
                    <!-- <td
                      
                    >{{stock.typeUniteAdministrative.libelle || 'Non renseigné'}}</td> -->
                    <!-- <td
                      
                    >{{stock.uniteAdm.libelle || 'Non renseigné'}}</td>-->
                     <td
                      
                    >{{stock.uniteAdminist.libelle || 'Non renseigné'}}</td> 
                    <td
                      
                    >{{stock.afficherFonction.libelle || 'Non renseigné'}}</td>
                     <td
                      
                    >{{stock.famille.libelle || 'Non renseigné'}}</td>
                     <td style="text-align: center;"
                      
                    >{{stock.afficheArticle.libelle || 'Non renseigné'}}</td>
                    <td style="text-align: center;"
                      
                    >{{stock.normearticle || '0'}}</td>
                    <!-- <td style="text-align: center;"
                      
                    >{{stock.qtestock || '0'}}</td> -->
                    <td style="text-align: center;"
                      
                    >{{stock.qterealise || '0'}}</td>
                       <td style="text-align: center;"
                      
                    >{{stock.normearticle - stock.qterealise }}</td>
                    <td style="text-align: center;"
                      
                    >{{ stock.prix_unitaire  || '0' }}</td>

                    <td style="text-align: center;"
                      
                    >{{ stock.prix_unitaire * (stock.normearticle - stock.qterealise) || '0' }}</td>
                     <!-- <td
                      
                    >{{stock.durevie || 'Non renseigné'}} Ans</td> -->

                   
                  </tr>
                   <tr
                   
                  >
                 <td></td>
                    <td></td>
                      <td></td>
                  
                    
                    <td></td>
                   
                      <td></td>
                       <td></td>
                        
                  
                     <td ></td>
                    <td style="font-weight:bold;" title="total quantite sortant">Total non couvert</td>
                    <!-- <td style="text-align: center;color:red;font-weight:bold;">{{ totalQteNonCouvert || 0 }}</td> -->
                    
        <td></td>
                    
                  </tr>
                </tbody>
              </table>
            </div>
           
          </div>
        </div>
      </div>
    </div>

    <fab :actions="fabActions" @cache="afficherModalAjouterStock" main-icon="apps" bg-color="green"></fab>
    <notifications  />
      <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
     <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterStock()">Open</button>
  </div>
</template>
  
<script>
import { mapGetters} from "vuex";
// import moment from "moment";
// import { formatageSomme } from "../../../Repositories/Repository";

export default {
  name: 'besionImmolisation',
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
        // {
        //   name: "alertMe",
        //   icon: "add_alert",
        //   class: ""
        // }
      ],
// json_fields: {
//         TYPE_UNITE_ADMINISTRATIVE: "typeUniteAdmin.libelle",
//         UNITE_ADMINISTRATIVE: "uniteAdminist.libelle",
//         DESIGNATION: "famille.libelle",
//         QUANTITE: "quantite",
//         PRIX_UNITAIRE: "prix_unitaire",
//         MONTANT_TOTAL: "montant_total",
//          DATE_DE_DEMANDE: "date_jour",
//       },

    };
  },
// created() {
//     this.formData = this.filtre_Stock.find(
//       Stock => Stock.id == this.$route.params.id
//     )
// },
  computed: {
    ...mapGetters("SuiviImmobilisation", [
    "ressultatBesoin",
    "totalQteNonCouvert"
     
    ]),
    ...mapGetters("uniteadministrative", ["uniteAdministratives"]),
    ...mapGetters("parametreGenerauxAdministratif", ["type_Unite_admins"]),


    

  },
  methods: {
    
  }
};
</script>
<style scoped>
.taillemodal {
  width: 800px;
  margin: 0 -380px;
}
.sommecolor{
  background-color: red;
  color:red;
  font-size: 120%;
  text-align: center;
  font-weight:bold;
}
</style>
