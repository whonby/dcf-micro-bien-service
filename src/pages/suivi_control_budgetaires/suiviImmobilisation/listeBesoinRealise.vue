
<template>
  <div>




   
    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->

 
    <!-- End Page Header -->
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
              <h5>Liste des Bessoins Couvert</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search" />
              </div> -->
            </div>

            <div class="widget-content nopadding" >
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     <!-- <th>Type UA</th> -->
                    <th>UA</th>
                    <th>Fonction</th>
                     <!-- <th>Equipement Type</th> -->
                     <th>Famille</th>
                    <th>Article</th>
                    <th title="Quantité">Qté Realise</th>
                    <th title="Prix Unitaire">PU</th>
                    <th>Total</th>
                    <th title="date demande">Date dmde</th>
                    
                    <th title="date validation du service">Date sce</th>
                    <th>Motif service</th>
                      <th title="date validation UA">Date UA</th>
                    <th>Motif UA</th>
                   
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="BesoinImmo in besoinRealiseEquipement"
                    :key="BesoinImmo.id"
                  >
                   <td
                      
                    >{{BesoinImmo.Afficheua.libelle || 'Non renseigné'}}</td> 
                     <td
                      
                    >{{BesoinImmo.Affichefonction.libelle || 'Non renseigné'}}</td>
                    <td
                      
                    >{{BesoinImmo.Affichefamille.libelle || 'Non renseigné'}}</td>
                    <td
                      
                    >{{BesoinImmo.AfficheArticle.libelle || 'Non renseigné'}}</td>  
                   <!-- <td 
                      
                    >{{BesoinImmo.typeUniteAdmin.libelle || 'Non renseigné'}}</td> -->
                   
                     <!-- <td
                      
                    >{{BesoinImmo.AfficheEquipement.libelle || 'Non renseigné'}}</td> -->
                    <!-- <td
                      
                    >{{BesoinImmo.Affichefamille.libelle || 'Non renseigné'}}</td>
                    <td
                      
                    >{{BesoinImmo.afficheArticle.libelle || 'Non renseigné'}}</td> -->
                    <td
                      
                    >{{BesoinImmo.qterealise}}</td>
                    <td
                      
                    >{{formatageSomme(parseFloat(BesoinImmo.prix_unitaire)) || 'Non renseigné'}}</td>
                    <td style="text-align: center;"
                      
                    >{{formatageSomme(parseFloat(BesoinImmo.totalrealise)) || 'Non renseigné'}}</td>
                    <td
                      
                    >{{formaterDate(BesoinImmo.date_jour) || 'Non renseigné'}}</td>
                   
                     <td
                      
                    >{{formaterDate(BesoinImmo.date_motif) || 'Non renseigné'}}</td>

                    
                     <td>
                        <button class="btn btn"  >                        
                     <span v-if="BesoinImmo.motif_demande == 0"  class="btn label label-info"  >En attente </span>
                      <span 
                     v-else   class="btn label label-success"> Valider </span>
                      </button>
                    
                    </td>
                    <td
                      
                    >{{formaterDate(BesoinImmo.date_motif_ua) || 'Non renseigné'}}</td>
                     <td>
                        <button class="btn btn"  >
                       
                          
                         
                     <span v-if="BesoinImmo.motif_ua == 1"   class="btn label label-success" >Valider</span>
                     <span 
                     v-else  class="btn label label-info"> En attente </span>
                     
                        
                      </button>
                    
                    </td>

                    <td>
                        <!-- <button class="btn btn-primary" @click="afficherModalAffectation" >
                        <span>
                          <i class="icon-thumbs-up"></i>
                        </span>
                      </button>
                       <button class="btn btn-danger" >
                        <span>
                          <i class=" icon-columns"></i>
                        </span>
                      </button> -->
                     
                      <button class="btn btn-danger" @click="supprimerBesoinImmo(BesoinImmo.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                 <tr
                   
                  >
                  <td ></td>
                   <td ></td>
                    <td></td>
                    <td ></td>
                    <td ></td>
                     <td style="font-weight:bold;">Total</td>
                    <td style="text-align: center;color:red;font-weight:bold;">{{formatageSomme(parseFloat(SommeQuantiteRealise)) || 0 }}</td>
                    
                    
                    <td ></td>
                  <td ></td>
                    
                    
                   
                    <td ></td>
                    <td></td>
                    <td></td>
                    
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- <div v-else>
              <p style="text-align:center;font-size:20px;color:red;">Aucun Besoin </p>
            </div> -->
          </div>
        </div>
      </div>
    </div>

    <!-- <fab :actions="fabActions" @cache="afficherModalAjouterBesoinImmobilisation" main-icon="apps" bg-color="green"></fab> -->
    <notifications  />
      <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
     <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterBesoinImmobilisation()">Open</button>
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import { formatageSomme } from "../../../Repositories/Repository";

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
json_fields: {
        TYPE_UNITE_ADMINISTRATIVE: "typeUniteAdmin.libelle",
        UNITE_ADMINISTRATIVE: "uniteAdminist.libelle",
        DESIGNATION: "famille.libelle",
        QUANTITE: "quantite",
        PRIX_UNITAIRE: "prix_unitaire",
        MONTANT_TOTAL: "montant_total",
         DATE_DE_DEMANDE: "date_jour",
      },
      formData: {
        uniteadmin_id: "",
        epuipement_id: "",
        famille_id: "",
        quantite: "",
        prix_unitaire: "",
        montant_total: "",
        date_jour: "",
        typeuniteadminist_id:"",
        historiqueqte:"",
        motif_demande:"0",
        date_motif:"",
        motif_ua:"0",
        qterealise:"0"
      },
      editBesoinImmo: {
        uniteadmin_id: "",
        famille_id: "",
        epuipement_id: "",
        quantite: "",
        prix_unitaire: "",
        montant_total: "",
        date_jour: "",
        typeuniteadminist_id:"",
        historiqueqte:"",
        date_motif:""
      },
      search: ""
    };
  },
// created() {
//     this.formData = this.filtre_besoinImmo.find(
//       BesoinImmo => BesoinImmo.id == this.$route.params.id
//     )
// },
  computed: {
    ...mapGetters("SuiviImmobilisation", [
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
      "besoinRealiseEquipement",
      "type_Unite_admins",
      "getPersoListeDesNorme",
      "SommeQuantiteRealise"
    ]),
    ...mapGetters("uniteadministrative", ["uniteAdministratives"]),
    ...mapGetters("parametreGenerauxAdministratif", ["type_Unite_admins"]),
...mapGetters("personnelUA", ["all_acteur_depense","acteur_depenses","personnaFonction"]),






 uniteAdministrativeDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.getPersoListeDesNorme.filter(element => element.typeua_id == id);
        }
      };
    },
fonctionDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.getPersoListeDesNorme.filter(element => element.ua_id == id);
        }
      };
    },
    equipementDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.getPersoListeDesNorme.filter(element => element.fonction_id == id);
        }
      };
    },


    
    familleDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.getPersoListeDesNorme.filter(element => element.fonction_id == id);
        }
      };
    },
     normeequipement() {
      
      const norme = this.getPersoListeDesNorme.find(normeEquipe => normeEquipe.fonctionActeur.id == this.formData.fonction_id);

      if (norme) {
        return norme.quantite;
      }
      return 0
    },

qtedemande() {
      
      const norme = this.getPersoListeDesNorme.find(normeEquipe => normeEquipe.familleArt.id == this.formData.famille_id);

      if (norme) {
        return norme.normedmd;
      }
      return 0
    },
    qtedemandemodifier() {
      
      const norme = this.getPersoListeDesNorme.find(normeEquipe => normeEquipe.familleArt.id == this.editBesoinImmo.famille_id);

      if (norme) {
        return norme.normedmd;
      }
      return 0
    },

    totalNormemodifier() {
      const val = parseFloat(this.qtedemandemodifier) + parseFloat(this.editBesoinImmo.quantite);
      return parseFloat(val).toFixed(0);
    },
totalNorme() {
      const val = parseFloat(this.qtedemande) + parseFloat(this.formData.quantite);
      return parseFloat(val).toFixed(0);
    },



    normeequipementModifier() {
      
      const norme = this.getPersoListeDesNorme.find(normeEquipe => normeEquipe.familleArt.id == this.editBesoinImmo.famille_id);

      if (norme) {
        return norme.quantite;
      }
      return 0
    },
     dureVieEquipement() {
      
      const norme = this.getPersoListeDesNorme.find(normeEquipe => normeEquipe.familleArt.id == this.formData.famille_id);

      if (norme) {
        return norme.dureviearticle;
      }
      return 0
    },
     dureVieEquipementModifier() {
      
      const norme = this.getPersoListeDesNorme.find(normeEquipe => normeEquipe.familleArt.id == this.editBesoinImmo.famille_id);

      if (norme) {
        return norme.dureviearticle;
      }
      return 0
    },
    
 articleDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.getPersoStock.filter(element => element.famill_id == this.formData.famille_id);
        }
      };
    },


 articleDynamiquesModifier() {
      return id => {
        if (id != null && id != "") {
          return this.getPersoStock.filter(element => element.famill_id == this.editBesoinImmo.famille_id);
        }
      };
    },
Historqte() {
      const val = parseInt(this.formData.quantite);
      return parseInt(val).toFixed(0);
    },
HistorqteModifier() {
      const val = parseInt(this.editBesoinImmo.quantite);
      return parseInt(val).toFixed(0);
    },

totalfamille(){
  
    const montant = this.getAfficheArticle.filter(element => element.famille_id == this.formData.famille_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ttc), 0).toFixed(2); 
    
    if(montant) {
return montant
    }
      
return 0
    
  },
  totalfamilleModifier(){
  
    const montant = this.getAfficheArticle.filter(element => element.famille_id == this.editBesoinImmo.famille_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ttc), 0).toFixed(2); 
    
    if(montant) {
return montant
    }
      
return 0
    
  },
  
nombreArticle(){
  
    const montant = this.getAfficheArticle.filter(element => element.famille_id == this.formData.famille_id).length; 
    
    if(montant) {
return montant
    }
      
return 0
    
  },

nombreArticleModifier(){
  
    const montant = this.getAfficheArticle.filter(element => element.famille_id == this.editBesoinImmo.famille_id).length; 
    
    if(montant) {
return montant
    }
      
return 0
    
  },
coutMoyen() {
      const val = parseFloat(this.totalfamille) / parseFloat(this.nombreArticle);
      return parseFloat(val).toFixed(0);
    },
coutMoyenModifier() {
      const val = parseFloat(this.totalfamilleModifier) / parseFloat(this.nombreArticleModifier);
      return parseFloat(val).toFixed(0);
    },

montantTotal() {
      const val = parseFloat(this.formData.quantite) * parseFloat(this.coutMoyen);
      return parseFloat(val).toFixed(0);
    },
montantTotalModifier() {
      const val = parseFloat(this.editBesoinImmo.quantite) * parseFloat(this.coutMoyenModifier);
      return parseFloat(val).toFixed(0);
    },



  quantiteEnstock() {
      
      const norme = this.getPersoStock.find(normeEquipe => normeEquipe.AfficheArticle.id == this.formData.article_id);

      if (norme) {
        return norme.quantitestock;
      }
      return 0
    },
quantiteEnstockid() {
      
      const norme = this.getPersoStock.find(normeEquipe => normeEquipe.AfficheArticle.id == this.formData.article_id);

      if (norme) {
        return norme.id;
      }
      return 0
    },
quantiteEnstockidModifier() {
      
      const norme = this.getPersoStock.find(normeEquipe => normeEquipe.AfficheArticle.id == this.editBesoinImmo.article_id);

      if (norme) {
        return norme.id;
      }
      return 0
    },

 quantiteEnstockModifier() {
      
      const norme = this.getPersoStock.find(normeEquipe => normeEquipe.AfficheArticle.id == this.editBesoinImmo.article_id);

      if (norme) {
        return norme.quantitestock;
      }
      return 0
    },













     normeEqup() {
      
      const norme = this.getPersoListeDesNorme.find(normeEquipe => normeEquipe.familleArt.id == this.formData.famille_id);

      if (norme) {
        return norme.id;
      }
      return 0
    },
     normeEqupmodifier() {
      
      const norme = this.getPersoListeDesNorme.find(normeEquipe => normeEquipe.familleArt.id == this.editBesoinImmo.famille_id);

      if (norme) {
        return norme.id;
      }
      return 0
    },
    typeUniteAdministrativeDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.getPersoListeDesNorme.filter(
            element => element.typeua_id == id
          );
        }
      };
    },
     
  },
    
  methods: {
    ...mapActions("SuiviImmobilisation", [
      "getAllBesoinImmo",
      "ajouterBesoinImmo",
      "modifierBesoinImmo",
      "supprimerBesoinImmo",
      "modifierQuantiteEnStock2",
      "modifierQuantiteNormeDmd"
    ]),
    formatageSomme: formatageSomme,

    //afiicher modal ajouter
    afficherModalAjouterBesoinImmobilisation() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
     afficherModalAffectation() {
      this.$("#exampleModal1").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterBesoinImmoLocal() {
 
       if (this.formData.quantite > this.normeequipement ) {
        alert("La norme doit etre superieure au egal a la quantité demande")
      }
      else if (this.normeequipement <= this.qtedemande  ){
         alert("Demande déja Effectuée")
      }
      else
      {
 //  var objetPourModifierQuantiteEnStock2 = {
      //   id: this.idObjetBesoinImmoAModifierEnStock2,
      //   // qteactuelstock: this.AfficheQteActuelEnStock,
      //   date_jour: this.formData.date_jour,
      //   qte_recu: this.qteRecu,
        
      // }
      var objetPourModifiernormerealise = {
        id: this.normeEqup,
        qtedmd: this.totalNorme
      }
      this.modifierQuantiteNormeDmd(objetPourModifiernormerealise);
       var nouvelObjet = {
      ...this.formData,
       montant_total: this.montantTotal,
      historiqueqte: this.Historqte,
         prix_unitaire:this.coutMoyen,
      norme_id : this.normeEqup,
       normearticle : this.normeequipement,
      dure_vie :this.dureVieEquipement,
      stock_id:this.quantiteEnstockid   ,
      qtestock : this.quantiteEnstock    };
      //  this.modifierQuantiteEnStock2(objetPourModifierQuantiteEnStock2)
      this.ajouterBesoinImmo(nouvelObjet);
     
      
      this.formData = {
        uniteadmin_id: "",
        epuipement_id: "",
        famille_id: "",
        quantite: "",
        article_id:"",
        prix_unitaire: "",
        montant_total: "",
        date_jour: "",
        typeuniteadminist_id:"",
        historiqueqte:"",
        qtestock:"",
        qte_recu: "",
        motif_demande:"0",
        motif_ua:"0",
        norme_id:"",
        normearticle:""
      };
       this.$("#exampleModal").modal('hide');
      }
     
      // this.afficherModalAffectation()
   

    },
    // afficher modal de modification
    afficherModalModifierBesoinImmo(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editBesoinImmo = this.trieUaImmobilisation[index];
    },
     // afficher modal de modification
    afficherModalModifierMotifDemande(index) {
      this.$("#exampleModalMotif").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editBesoinImmo = this.trieUaImmobilisation[index];
    },
    afficherModalModifierMotifDemandeservice(index) {
      this.$("#exampleModalMotifservice").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editBesoinImmo = this.trieUaImmobilisation[index];
    },
    // fonction pour vider l'input modification
    modifierBesoinImmoLocal() {
        if (this.formData.quantite > this.normeequipementModifier ) {
        alert("La norme doit etre superieure au egal a la quantité demande")
      }
      //  else if (this.normeequipementModifier <= this.qtedemandemodifier  ){
      //    alert("Demande déja Effectuer")
      // }
      else
      {
         var objetPourModifiernormerealise1 = {
        id: this.normeEqupmodifier,
        qtedmd: this.totalNormemodifier
      }
     
 var nouvelObjetmodifier = {
        ...this.editBesoinImmo,
         montant_total: this.montantTotalModifier,
      historiqueqte: this.HistorqteModifier,
         prix_unitaire:this.coutMoyenModifier,
         normearticle : this.normeequipementModifier,
         norme_id : this.normeEqupmodifier,
         dure_vie :this.dureVieEquipementModifier,
          stock_id:this.quantiteEnstockidModifier  ,
      qtestock : this.quantiteEnstockModifier
      };
       this.modifierQuantiteNormeDmd(objetPourModifiernormerealise1);
      this.modifierBesoinImmo(nouvelObjetmodifier);
      this.$("#modificationModal").modal('hide');
      this.$("#exampleModalMotif").modal('hide');
      }
     
    },
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
.taillemodal {
  width: 1000px;
  margin: 0 -500px;
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
</style>
