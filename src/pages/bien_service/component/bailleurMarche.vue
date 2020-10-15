
<template>
<div>
  <div v-for="item in lot" :key="item.id" class="widget-content">
    <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>

      <div class="span8"><h5>LOT N°{{ item.numero_lot }} / {{item.objet}}
      </h5></div>
      <div align="right">
        <div class="span3"><button @click.prevent="afficheModaleActe(item.id)"
                                     class="btn btn-primary" title="Ajouter Bailleur">
           <span class=""><i class="icon-edit"></i></span> Ajouter Bailleur</button></div>
      </div>
          
<!--      <div class="span2"><button @click.prevent="supprimerAnalyseDossierMultiple(item.id)"  class="btn btn-danger " title="Supprimer">-->
<!--        <span class=""><i class="icon-trash"></i></span></button></div>-->
    </div>

    <table class="table table-bordered table-striped" v-if="macheid">
      <thead>
      <tr>
                                        <th>Bailleur</th>
                                        <th>Type finanncement</th>
                                         <th>Montant HT (Fcfa) </th>
                                         <th>Taux bailleur</th>
                                          <th>Taux </th>
                                          <th>Tva (Fcfa)</th>
                                          <th>Montant TTC (Fcfa)</th>
                                        <th>Action</th>
                                    </tr>
      </thead>
      <tbody>
      <tr class="odd gradeX" v-for="effetFinancier in listeDesBailleur(item.id)"
          :key="effetFinancier.id">

        <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
          {{afficheLibelleSourceFinancement(effetFinancier.bailleur_id) || 'Non renseigné'}}</td>
          <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
          {{afficheLibelleTypeFinancement(effetFinancier.type_finnancement_id) || 'Non renseigné'}}</td>
          <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
          {{formatageSommeSansFCFA(parseFloat(effetFinancier.montant_ht)) || 'Non renseigné'}}</td>
           <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
          {{effetFinancier.tauxbailleur || 'Non renseigné'}}%</td>
           <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
          {{effetFinancier.tva || 'Non renseigné'}}%</td>
        <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
          {{formatageSommeSansFCFA(parseFloat(effetFinancier.montant_tva ))|| 'Non renseigné'}}</td>
       <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
          {{formatageSommeSansFCFA(parseFloat(effetFinancier.montant ))|| 'Non renseigné'}}</td>
        <td>
          <div class="btn-group">
            <button @click.prevent="supprimerMarcheBailleur(effetFinancier.id)"  class="btn btn-danger " title="Supprimer">
              <span class=""><i class="icon-trash"></i></span>
            </button>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>

  <!--Integration ACt-->

  <div id="ajouterBailleur" class="modal hide grdirModalActeEffet" >
    <div class="modal-header">
      <button data-dismiss="modal" class="close" type="button">×</button>
      <h3>Information du Bailleur sur le : Lot N° {{infoLot.numero_lot}} {{infoLot.objet}}</h3>
    </div>

    <div class="widget-title">
      <ul class="nav nav-tabs">
        <li class="active"><a data-toggle="tab" href="#tab8888">Information du Bailleur</a></li>
        <!-- <li class=""><a data-toggle="tab" href="#tab00050">Informations financières</a></li> -->
      </ul>
    </div>
    <div class="widget-content tab-content">

      <div id="tab8888" class="tab-pane active">

        <table class="table table-bordered table-striped">
          <tr>
            <td>
              <div class="control-group">
                        <label class="control-label">N° marché</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    :value="afficherNumeroMarche(macheid)"
                                    class="span"
                                   readonly
                            />
                        </div>
                        </div>
            </td>
            <td colspan="2">
<div class="control-group">
                        <label class="control-label">Objet du lot</label>
                        <div class="controls">
                            <input
                                    type="text"
                               :value="affichierObjetMarche(marche_lot)"
                                    class="span"
                                   readonly
                            />
                        </div>
                        </div>


            </td>
 <td colspan="2">
              <div class="control-group">
                        <label class="control-label">Montant HT Marché</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    :value="afficherMontantHtMarche(infoLot.id)"
                                    class="span"
                                   readonly
                            />
                        </div>
                        </div>
            </td>
 
          </tr>
          <tr>
            
              <td>
              <div class="control-group">
                        <label class="control-label">Montant TTC Marché</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    :value="afficherMontantTTCMarche(infoLot.id)"
                                    class="span"
                                   readonly
                            />
                        </div>
                        </div>
            </td>
            <td>
              <div class="control-group">
                                            <label div class="control-label">Bailleur</label>
                                            <div class="controls">
                                                <select v-model="formBailleur.bailleur_id" class="span" >
                                                    <option v-for="varText in sources_financements" :key="varText.id"
                                                            :value="varText.id">{{varText.libelle}}</option>
                                                </select>
                                            </div>
                                            </div>
            </td>
             <td>
                                            <div class="control-group">
                                            <label div class="control-label">Type finnancement <code>*</code> </label>
                                            <div class="controls">

                                                <select v-model="formBailleur.type_finnancement_id" class="span">
                                                    <option v-for="varText in types_financements" :key="varText.id"
                                                            :value="varText.id">{{varText.libelle}}</option>
                                                </select>
                                            </div>
                                            </div>
                                           </td>
                                           <td colspan="2">
              
                                 <div class="control-group">
                                        <label class="control-label">Exonéré</label>
                                        <div class="controls">
                                        <select v-model="formBailleur.exonere" class="span">
                                        
                                            <option value="0">Oui</option>
                                            <option value="1">Non</option>
                                        </select>
                                        
                                        </div>
                                    </div>
                                    </td>
          </tr>
          <tr>
 
                                    <td>
              <div class="control-group">
                <label class="control-label" >Taux Tva (%)</label>
               
              </div>
            
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="number"
                    
              :value="afficherEnorere"
                    class="span"
                   readonly
                  />
                </div>
              </div>
            </td>
            <td >
              <div class="control-group">
                <label class="control-label" >Taux Bailleur (%)</label>
               
              </div>
            
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="number"
                    v-model="formBailleur.tauxBailler"
              
                    class="span"
                 
                  />
                </div>
              </div>
            </td>
            
            <td >
              <div class="control-group">
                <label class="control-label" >Montant TVA</label>
               
              </div>
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="number"
                    :value="montantTvaActuel"
                    class="span"
                   readonly
                  />
                  
                </div>
              </div>
            </td>
             <td >
              <div class="control-group">
                <label class="control-label" >Montant TTC Bailleur</label>
               
              </div>
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="number"
                    :value="montantHTtBailleur"
             
                    class="span"
                   readonly
                  />
                  
                </div>
              </div>
            </td>
             <td >
              <div class="control-group">
                <label class="control-label" >Cumul Montant</label>
               
              </div>
            
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="number"
                    :value="PayeDesBailleur"
              readonly
                    class="span"
                 
                  />
                </div>
              </div>
            </td>
          </tr>
         
        </table>
      </div>



    </div>

    <div class="modal-footer">
      <a  @click.prevent="ajouterBailleur" v-if="PayeDesBailleur < afficherMontantTTCMarche(infoLot.id)"
          class="btn btn-primary"
          href="#"
      >Valider</a>
      <a data-dismiss="modal" class="btn" href="#">Fermer</a>
    </div>
  </div>




  <div id="ModalModification" class="modal hide grdirModalActeEffet" >
    <div class="modal-header">
      <button data-dismiss="modal" class="close" type="button">×</button>
      <h3>Information du Bailleur sur le : Lot N° {{infoLot.numero_lot}} {{infoLot.objet}}</h3>
    </div>

    <div class="widget-title">
      <ul class="nav nav-tabs">
        <li class="active"><a data-toggle="tab" href="#tab8888">Information du Bailleur</a></li>
        <!-- <li class=""><a data-toggle="tab" href="#tab00050">Informations financières</a></li> -->
      </ul>
    </div>
    <div class="widget-content tab-content">

      <div id="tab8888" class="tab-pane active">

        <table class="table table-bordered table-striped" >
          <tr>
            <td>
              <div class="control-group">
                        <label class="control-label">N° marché</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    :value="afficherNumeroMarche(macheid)"
                                    class="span"
                                   readonly
                            />
                        </div>
                        </div>
            </td>
            <td colspan="2">
<div class="control-group">
                        <label class="control-label">Objet du lot</label>
                        <div class="controls">
                            <input
                                    type="text"
                               :value="affichierObjetMarche(marche_lot)"
                                    class="span"
                                   readonly
                            />
                        </div>
                        </div>


            </td>
 <td colspan="2">
              <div class="control-group">
                        <label class="control-label">Montant HT Marché</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    :value="afficherMontantHtMarche(infoLot.id)"
                                    class="span"
                                   readonly
                            />
                        </div>
                        </div>
            </td>
 
          </tr>
          <tr>
            
              <td>
              <div class="control-group">
                        <label class="control-label">Montant TTC Marché</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    :value="afficherMontantTTCMarche(infoLot.id)"
                                    class="span"
                                   readonly
                            />
                        </div>
                        </div>
            </td>
            <td>
              <div class="control-group">
                                            <label div class="control-label">Bailleur</label>
                                            <div class="controls">
                                                <select v-model="editBailleur.bailleur_id" class="span" >
                                                    <option v-for="varText in sources_financements" :key="varText.id"
                                                            :value="varText.id">{{varText.libelle}}</option>
                                                </select>
                                            </div>
                                            </div>
            </td>
             <td>
                                            <div class="control-group">
                                            <label div class="control-label">Type finnancement <code>*</code> </label>
                                            <div class="controls">

                                                <select v-model="editBailleur.type_finnancement_id" class="span">
                                                    <option v-for="varText in types_financements" :key="varText.id"
                                                            :value="varText.id">{{varText.libelle}}</option>
                                                </select>
                                            </div>
                                            </div>
                                           </td>
                                           <td colspan="2">
              
                                 <div class="control-group">
                                        <label class="control-label">Exonéré</label>
                                        <div class="controls">
                                        <select v-model="editBailleur.exonere" class="span">
                                        
                                            <option value="0">Oui</option>
                                            <option value="1">Non</option>
                                        </select>
                                        
                                        </div>
                                    </div>
                                    </td>
          </tr>
          <tr>
 
                                    <td>
              <div class="control-group">
                <label class="control-label" >Taux Tva (%)</label>
               
              </div>
            
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="number"
                    
              :value="afficherEnorere"
                    class="span"
                   readonly
                  />
                </div>
              </div>
            </td>
            <td >
              <div class="control-group">
                <label class="control-label" >Taux Bailleur (%)</label>
               
              </div>
            
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="number"
                    v-model="editBailleur.tauxBailler"
              
                    class="span"
                 
                  />
                </div>
              </div>
            </td>
            
            <td >
              <div class="control-group">
                <label class="control-label" >Montant TVA</label>
               
              </div>
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="number"
                    :value="montantTvaActuel"
                    class="span"
                   readonly
                  />
                  
                </div>
              </div>
            </td>
             <td >
              <div class="control-group">
                <label class="control-label" >Montant TTC Bailleur</label>
               
              </div>
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="number"
                    :value="montantHTtBailleur"
             
                    class="span"
                   readonly
                  />
                  
                </div>
              </div>
            </td>
             <td >
              <div class="control-group">
                <label class="control-label" >Payé Des Bailleurs</label>
               
              </div>
            
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="number"
                    :value="PayeDesBailleur"
              readonly
                    class="span"
                 
                  />
                </div>
              </div>
            </td>
          </tr>
         
        </table>
      </div>



    </div>

    <div class="modal-footer">
      <a  @click.prevent="ajouterBailleur" v-if="this.PayeDesBailleur < this.afficherMontantTTCMarche(this.infoLot.id)"
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
      formEffetFinancier:{
        
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

PayeDesBailleur() {

      const val = parseFloat(this.sommeTotalDesBailleur(this.infoLot.id)) + parseFloat(this.montantHTtBailleur);
      return parseFloat(val).toFixed(0);
    },
sommeTotalDesBailleur() {
     return id => {
        if (id != null && id != "") {
          return this.personnaliseGetterMarcheBailleur.filter(
            element => element.marche_id == id
          ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant), 0).toFixed(0);
        }
        return 0
      };
    },


       afficheLibelleSourceFinancement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sources_financements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
     afficheLibelleTypeFinancement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.types_financements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
      afficherMontantHtMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.montant_act_ht;
      }
      return 0
        }
      };
    },
    afficherMontantTTCMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.montant_act;
      }
      return 0
        }
      };
    },
 afficherNumeroMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_marche;
      }
      return 0
        }
      };
    },
    // testTotal(){
    //   return parseFloat(this.TauxParBailleur) + parseFloat(this.afficherEnorere)
    // },
    TauxBailleur() {
      const val = (parseFloat(this.formBailleur.tauxBailler)/100) + (parseFloat(this.afficherEnorere)/100);
      return parseFloat(val).toFixed(2);
    },
    montantTvaActuel() {
      if(this.formBailleur.exonere == 0){

        return 0
      
      }
      else {
        const val = parseFloat(this.afficherMontantHtMarche(this.infoLot.id)) * parseFloat(this.TauxBailleur);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
      }
      
    },
    montantHTtBailleur() {
      if(this.montantTvaActuel == 0){

        const val = (((parseFloat(this.afficherMontantHtMarche(this.infoLot.id)))*(parseFloat(this.formBailleur.tauxBailler)))/100);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
      }
      else{
        const val = parseFloat(this.afficherMontantHtMarche(this.infoLot.id)) + parseFloat(this.montantTvaActuel);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
      }
    },
    afficherEnorere(){
if(this.formBailleur.exonere == 0 || this.formBailleur.exonere == ""){
  return 0
}
else {
  return this.affcherTauxEnCours
}
},

affcherTauxEnCours() {
      const norme = this.taux.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.libelle;
      }
      return 0
    },
affichieridMarcheGlobal() {
      return id => {
        if (id != null && id != "") {
          const qtereel = this.marches.find(qtreel => qtreel.id == id);

          if (qtereel) {
            return qtereel.parent_id;
          }
          return 0
        }
      };
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


    getDateFinExécutionValueEdit(){
      return !this.editBailleur.date_odre_service !=""
    },


    listeDesBailleur: function () {
      return macheid => {
        if (macheid != "") {
          // console.log("Marche leste acte effect finnancier")
          return this.personnaliseGetterMarcheBailleur.filter(idmarche => idmarche.marche_id == macheid)
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
    ...mapActions('bienService',['supprimerMarcheBailleur',
      'ajouterMarcherBailleur','modificationMarcheBailleur', 'modifierMarche']),
verifierMontantBailleur(){
if(this.PayeDesBailleur < this.afficherMontantTTCMarche(this.infoLot.id)){
  alert("Montant TTC du Marché < Somme des Montants des Bailleurs")
}
},
afficherModalModifierActeEffetFinancier(index){
      this.$('#ModalModification').modal({
        backdrop: 'static',
        keyboard: false
      });
      this.editBailleur = this.personnaliseGetterMarcheBailleur.find(item=>item.id==index)
    },
ajouterBailleur(){

var nouvelObjet = {
        ...this.formBailleur,
        acte_effet_id:this.enregistreIdActe(this.infoLot.id),
        tauxbailleur:this.formBailleur.tauxBailler,
         montant:this.afficherMontantTTCMarche(this.infoLot.id),
               tva:this.afficherEnorere,
               montant_tva:this.montantTvaActuel,
               montant_ht:this.afficherMontantHtMarche(this.infoLot.id),
               marche_id:this.infoLot.id 
        //  montant:
        //  :this.montantTvaActuel
      };
               
               this.ajouterMarcherBailleur(nouvelObjet)
                this.formBailleur={
                      type_finnancement_id:"",
                        montant:0,
                        marche_id:"",
                        bailleur_id:"",
                }
            
              
           
                
            },
ModifierBailleur(){

var nouvelObjet = {
        ...this.editBailleur,
        acte_effet_id:this.enregistreIdActe(this.infoLot.id),
        tauxbailleur:this.editBailleur.tauxBailler,
         montant:this.afficherMontantTTCMarche(this.infoLot.id),
               tva:this.afficherEnorere,
               montant_tva:this.montantTvaActuel,
               montant_ht:this.afficherMontantHtMarche(this.infoLot.id),
               marche_id:this.infoLot.id 
        //  montant:
        //  :this.montantTvaActuel
      };
               
               this.modificationMarcheBailleur(nouvelObjet)
                this.editBailleur={
                      type_finnancement_id:"",
                        montant:0,
                        marche_id:"",
                        bailleur_id:"",
                }
            
              
           
                
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
  width: 88%;
  margin: 0 -42%;
}

</style>