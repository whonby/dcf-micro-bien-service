uniteAdministratives
<template>
  <div>


    <div >
        <br>
        <br>
        <br>
        <div class="" align="right">
                   <!-- <router-link :to="{name:'AjoutPersonnelSansContrat'}" tag="a" data-toggle="modal" class="btn btn-success" align="rigth">Ajouter  Personnel Ua Sans Contrat

                   </router-link>  -->
<router-link :to="{name:'AjouterDecomptePrecedant'}" tag="a" data-toggle="modal" class="btn btn-info" align="rigth">AJOUTER DECOMPTE ANTERIEUR

                   </router-link> 
                   </div>
                   <br>
                   <br>
    <table class="table table-bordered table-striped">
                    <thead>
                      <tr>
                         <th style="width:90%">UNITE D'ADMINISTRATIVE</th>
                        <th colspan="2">ACTION</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                        <tr
                    class="odd gradeX"
                    v-for="BesoinImmo in groupeParUa"
                    :key="BesoinImmo[0].id"
                  >
                  <td style="font-size:25px"
                   
                    >{{libelleUniteAdministrative(BesoinImmo[0].uniteadministrative_id) || 'Non renseigné'}}</td>
                 
                     <td>
                       <router-link
                        :to="{name : 'ListeDecompteAnterieur', params: {id:BesoinImmo[0].uniteadministrative_id}}"
                        class="btn btn-success"
                        
                      >
                        <span>
                          <i class="icon icon-folder-open" style="font-size:14px"> Voir Décompte Anterieur</i>
                        </span>
                      </router-link>
                     </td>
                 
                  </tr>
                  
                    </tbody> 
                </table>   
     
    </div>

    <!-- <button style="display:none;" v-shortkey.once="['ctrl', 'f']"
  @shortkey="ajouterEntreEnPatrimoine()">Open</button>

 <fab :actions="fabActions"
                main-icon="apps"
          @cache="ajouterEntreEnPatrimoine"
        @searchMe="filter"
         
        bg-color="green"

  ></fab> -->
<notifications  />
  </div>
</template>
  
<script>
//  import {formatageSomme} from "../../../vuex/modules/guei/Repositories/Repository"
    import {mapGetters, mapActions} from 'vuex';
    // import moment from "moment";
// import {admin,dcf,noDCfNoAdmin} from "../../../Repositories/Auth";

export default {
//   components: {
    
//     ModelListSelect,
     
//   },
  name: 'besionImmolisation',
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add",
          
        },
        {
                  name: 'searchMe',
                   icon: "search"
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
quantite: {
       
        qteentrant1:"0",
        date_entre:""
       
      },
      formData: {
        unite_administrative_id: "",
        typeequipe_id: "",
        famill_id: "",
        typeua_id: "",
        durevie: "",
        articlestock_id: "",
        quantitestock: "",
        qtesortie:"0"
        
       
      },
      uniteAdministrative_id:"",
       affiche_filtre:false,
      affiche_boutton_filtre:true,
      editStock: {
       unite_administrative_id: "",
        typeequipe_id: "",
        famill_id: "",
        typeua_id: "",
        durevie: "",
        articlestock_id: "",
        quantitestock: "",
        qteentrant1:"0",
        
        
      },
      search: ""
    };
  },
// created() {
//     this.formData = this.filtre_Stock.find(
//       Stock => Stock.id == this.$route.params.id
//     )
// },
  computed: {
    ...mapGetters("SuiviImmobilisation", [
    
      "equipements",
      "familles",
      "articles",
     "marqueVehicules",
     "ModeleVehicules",
      "type_Unite_admins",
      "totalQteEntrant",
      "totalQteSortant",
     "getterUa_idImo",
     "ficheArticle"
    ]),
    ...mapGetters("personnelUA", ["all_acteur_depense","personnaliseActeurDepense","acteur_depenses","personnaFonction"]),
    ...mapGetters("uniteadministrative", ["uniteAdministratives","GestionStockageArticles","groupeUniteAdministrativeDecompte"]),
    ...mapGetters("parametreGenerauxAdministratif", ["type_Unite_admins"]),

   libelleUniteAdministrative() {
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
    


   groupeParUa() {
      
           return this.groupeUniteAdministrativeDecompte.filter(qtreel => qtreel[0].diff_decompte == 1);

    
    },
    
   
  },
  methods: {
    ...mapActions("SuiviImmobilisation", [
      "getAllStock",
      "ajouterStock",
      "modifierStock",
      "supprimerStock"
    ]),
    ...mapActions("uniteadministrative", ["uniteAdministratives","supprimerStockArticle"]),
    
  }
};
</script>
<style scoped>
.taillemodal {
  width: 800px;
  margin: 0 -380px;
}
.taillemodalMod{
   width: 500px;
  margin: 0 -200px;
}
.sommecolor{
  background-color: red;
  color:red;
  font-size: 120%;
  text-align: center;
  font-weight:bold;
}
.tailgrandStock{
  width: 88%;
  margin: 0 -42%;
}
</style>
