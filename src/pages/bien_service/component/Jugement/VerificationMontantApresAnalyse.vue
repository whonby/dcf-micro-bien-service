
<template>
<div>
  <div v-for="item in lot" :key="item.id" class="widget-content">
    <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>

      <div class="span8"><h5>LOT N°{{ item.numero_lot }} / {{item.objet}}
      </h5></div>
     
          
<!--      <div class="span2"><button @click.prevent="supprimerAnalyseDossierMultiple(item.id)"  class="btn btn-danger " title="Supprimer">-->
<!--        <span class=""><i class="icon-trash"></i></span></button></div>-->
    </div>

    <table class="table table-bordered table-striped" v-if="macheid">
      <thead>
      <tr>
                                        <th>Soumissionnaire</th>
                                        <th>Prix de l'offre lu en FCFA TTC</th>
                                         <th>Erreurs de calcul </th>
                                         <th>Prix de l'offre corrigé en FCFA TTC</th>
                                         
                                    </tr>
      </thead>
      <tbody>
      <tr class="odd gradeX" v-for="effetFinancier in AffichierOffreFinanciere(item.id)"
          :key="effetFinancier.id">

        <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
          {{afficherNumeroDossierCandidat1(effetFinancier.dossier_candidat_id) || 'Non renseigné'}}</td>
          <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)" style="text-align:center;font-size:14px">
          {{formatageSommeSansFCFA(parseFloat(effetFinancier.hist_montant_ttc)) || 'Non renseigné'}}</td>
           <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)" style="text-align:center;font-size:14px">
          {{effetFinancier.Erreurs_sur_montant_ttc || 'Non renseigné'}}</td>
           <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)" style="text-align:center;font-size:14px">
          {{formatageSommeSansFCFA(parseFloat(effetFinancier.montant_total_ttc)) || 'Non renseigné'}}</td>
         
      </tr>
      </tbody>
    </table>
  </div>

  <div id="ModalModification" class="modal hide grdirModalActeEffet" >
    <div class="modal-header">
      <button data-dismiss="modal" class="close" type="button">×</button>
      <h3>Information  sur Offre Financiere</h3>
    </div>

    <div class="widget-title">
      <ul class="nav nav-tabs">
        <li class="active"><a data-toggle="tab" href="#tab8888">Information Sur Offre Financiere</a></li>
        <!-- <li class=""><a data-toggle="tab" href="#tab00050">Informations financières</a></li> -->
      </ul>
    </div>
    <div class="widget-content tab-content">

      <div id="tab8888" class="tab-pane active">
  <table class="table table-bordered table-striped">
    <tr>
      <td>
         <div class="control-group">
              <label class="control-label">Soumissionnaire</label>
              <div class="controls">
                <input type="text" class="span" readonly :value="afficherNumeroDossierCandidat1(EditOffreFinanciere.dossier_candidat_id)">
              </div>
            </div>
      </td>
    </tr>
    <tr>
      <td>
         <div class="control-group">
              <label class="control-label">Prix de l'offre lu en FCFA TTC</label>
              <div class="controls">
                <input type="number" class="span" readonly v-model="EditOffreFinanciere.hist_montant_ttc">
              </div>
            </div>
      </td>
    </tr>
     <tr>
      <td>
         <div class="control-group">
              <label class="control-label">Prix de l'offre corrigé en FCFA TTC</label>
              <div class="controls">
                <input type="number" class="span" placeholder="Montant TTC" v-model="EditOffreFinanciere.montant_total_ttc">
              </div>
            </div>
      </td>
    </tr>
    <tr>
      <td>
         <div class="control-group">
              <label class="control-label">Erreurs de calcul</label>
              <div class="controls">
                <input type="number" class="span" readonly :value="Erreursdecalcul">
              </div>
            </div>
      </td>
    </tr>
   
  </table>
      </div>
    </div>

    <div class="modal-footer">
      <a  @click.prevent="ModifierOfficeFinancier" 
          class="btn btn-primary"
          href="#"
      >Valider</a>
      <a data-dismiss="modal" class="btn" href="#">Fermer</a>
    </div>
  </div>
  <notifications  />
  <!---->
</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {formatageSommeSansFCFA} from "@/Repositories/Repository";

export default {
name: "ActEffeFinanciere",
  props:["macheid"],
  data(){
    return{
      lot:"",
      formBailleur:{},
      editBailleur:"",
      EditOffreFinanciere:{
        
      },
      nom_candidata:"",
      dossier_candidat_id:"",
     marche_lot:"",
      infoLot:""
    }
  },
  created(){
    this.lot=this.getMarchePersonnaliser.filter(item=>item.parent_id==this.macheid)


  },
  computed:{
    ...mapGetters("bienService", [ "typeMarches","gettersCotationPersonnaliser","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots",
      "modePassations", "procedurePassations","getterDossierCandidats","marches",
      "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation",
      "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
      "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
      "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables",
      "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
    ...mapGetters('personnelUA', ['acteur_depenses']),


    ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises','banques','comptes','getCompte']),
    ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
      'types_financements']) ,

    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),
    ...mapGetters('parametreGenerauxFonctionnelle', ['structureActe',
      'planActe']),
Erreursdecalcul() {

      const val = parseFloat(this.EditOffreFinanciere.montant_total_ttc) - parseFloat(this.EditOffreFinanciere.hist_montant_ttc);
      return parseFloat(val).toFixed(0);
    },

    AffichierOffreFinanciere: function () {
      return macheid => {
        if (macheid != "") {
          // console.log("Marche leste acte effect finnancier")
          return this.getterOffreFinanciers.filter(idmarche => idmarche.marche_id == macheid)
        }
      }
    },

analyseByLot(){
      return id=>{
        return this.getterAnalyseDossiers.filter(item=>{
          if (item.marche_id==id && item.rang_analyse==1)
             return item
        })
      }
    },

afficherNumeroDossierCandidat1() {
      return id => {
        if (id != null && id != "") {
          const qtereel = this.getterDossierCandidats.find(qtreel => qtreel.id == id);

          if (qtereel) {
            return qtereel.nom_cand;
          }
          return null
        }
      };
    },
    enregistreIdActe() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.id;
      }
      return 0
        }
      };
    },

  },

  methods:{
    ...mapActions("bienService", [
      "supprimerDossierCandidat","ajouterOffreTechnique","modifierOffreTechnique",
      "supprimerchnique","ajouterOffreFinancier","modifierOffreFinancier","supprimerOffreFinancier",
      "ajouterLettreInvitation",

    ]),

afficherModalModifierActeEffetFinancier(id){
      this.$('#ModalModification').modal({
        backdrop: 'static',
        keyboard: false
      });
      this.EditOffreFinanciere= this.getterOffreFinanciers.find(item=>item.id==id);
    },

ModifierOfficeFinancier(){

var nouvelObjet = {
        
        id:this.EditOffreFinanciere.id,
        Erreurs_sur_montant_ttc:this.Erreursdecalcul,
        montant_total_ttc:this.EditOffreFinanciere.montant_total_ttc
        
      };
               
               this.modifierOffreFinancier(nouvelObjet)
  
            },
    afficheModaleActe(index){
      this.$('#ajouterBailleur').modal({
        backdrop: 'static',
        keyboard: false
      });
        if ( this.analyseByLot(index).length>0){
          this.nom_candidata=this.afficherNumeroDossierCandidat1(this.analyseByLot(index)[0].dossier_candidat_id),
              this.dossier_candidat_id=this.analyseByLot(index)[0].dossier_candidat_id
        }
    this.marche_lot=index
      this.infoLot=this.getMarchePersonnaliser.find(item=>item.id==index)
      //  this.edite_analyse_dossier = this.listeAnalyseDossier(this.macheid)[index];
    },

    formatageSommeSansFCFA:formatageSommeSansFCFA,

  }
}
</script>

<style scoped>

.grdirModalActeEffet{
  width: 30%;
  margin: 0 -20%;
}

</style>