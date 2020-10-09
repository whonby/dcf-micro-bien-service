
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
                                         <th>Montant du bailleur TTC </th>
                                        <th>Montant TTC du contrat </th>
                                         <th>Taux % </th>
                                        <th>Action</th>
                                    </tr>
      </thead>
      <tbody>
      <!-- <tr class="odd gradeX" v-for="effetFinancier in listeActeEffectFinnancier(item.id)"
          :key="effetFinancier.id">

        <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
          {{effetFinancier.reference_act || 'Non renseigné'}}</td>
          <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
          {{effetFinancier.marche.objet || 'Non renseigné'}}</td>
          <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
          {{effetFinancier.marche.imputation || 'Non renseigné'}}</td>
        <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
          {{formatageSomme(parseFloat(effetFinancier.montant_act ))|| 'Non renseigné'}}</td>
        <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
          {{effetFinancier.duree || 'Non renseigné'}} jrs</td>
        <td>
          <div class="btn-group">
            <button @click.prevent="supprimerActeEffetFinancier(effetFinancier.id)"  class="btn btn-danger " title="Supprimer">
              <span class=""><i class="icon-trash"></i></span>
            </button>
          </div>
        </td>
      </tr> -->
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
                                  :value="infoLot.objet"
                                    class="span"
                                   readonly
                            />
                        </div>
                        </div>


            </td>
 <td>
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
                                           <td>
              
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
                <label class="control-label" >Taux</label>
               
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
                <label class="control-label" >Taux Bailleur</label>
               
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
                <label class="control-label" >TVA</label>
               
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
          </tr>
         
        </table>
      </div>



    </div>

    <div class="modal-footer">
      <a  @click.prevent="ajouterModalActeEffetFinancierLocal"
          class="btn btn-primary"
          href="#"
      >Valider</a>
      <a data-dismiss="modal" class="btn" href="#">Fermer</a>
    </div>
  </div>
  <!---->
</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {formatageSomme} from "@/Repositories/Repository";

export default {
name: "ActEffeFinanciere",
  props:["macheid"],
  data(){
    return{
      lot:"",
      formBailleur:{},
      editActeEffetFinancier:"",
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

        const val = (parseFloat(this.afficherMontantHtMarche(this.infoLot.id)))/(parseFloat(this.formBailleur.tauxBailler)/100);
      
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


    

    // avanceDemarrage(){
    //   const val = parseFloat(this.formEffetFinancier.avance_demarrage_ht) + parseFloat(this.avanceDemarrageMontantTva);

    //   if (val) {
    //     return parseInt(val).toFixed(0);
    //   }

    //   return 0
    // },

    // avanceDemarrageMontantTva() {
    //   const val = parseFloat((this.formEffetFinancier.avance_demarrage_ht) * parseFloat(this.afficherEnorere)/100);

    //   if (val) {
    //     return parseInt(val).toFixed(0);
    //   }

    //   return 0
    // },


    // editAvanceDemarrageMontantTva(){
    //   const val = parseFloat((this.editActeEffetFinancier.avance_demarrage_ht) * parseFloat(this.editAfficherEnorere)/100);

    //   if (val) {
    //     return parseInt(val).toFixed(0);
    //   }

    //   return 0
    // },


    // editAvanceDemarrage(){
    //   const val = parseFloat(this.editActeEffetFinancier.avance_demarrage_ht) + parseFloat(this.editAvanceDemarrageMontantTva);

    //   if (val) {
    //     return parseInt(val).toFixed(0);
    //   }

    //   return 0
    // },


// afficher la refernec_pv dans la table pv

    // afficherPv(){
    //   return macheid =>{
    //     if(macheid!=null && macheid!=""){
    //       const objetPv = this.getterProceVerballe.find(item => item.marche_id ==macheid)
    //       if(objetPv){
    //         return objetPv.reference
    //       }
    //       return null
    //     }
    //   }

    // },




// infoPVAffiche:function(){
//                 let resultaAnalysePv=[]
//                 let resulta=this.getterAnalyseDossiers.filter(item=>item.reference_pv==null );
//                 this.resultaAnalysePv=this.resultaAnalysePv.concat(resulta)
//                 // if (this.resultaAnalysePv.length>0){
//                 //     this.resultaAnalysePv.sort(function (a, b) {
//                 //         return a.note_analyse - b.note_analyse;
//                 //     }).reverse()
//                 // }
//                 //console.log(this.resultaAnalysePv)
//             },





    // afficherEntrepriseRecep () {
    //   return id => {
    //     if ( id!=null && id != "" ) {
    //       // console.log("Marche lettre inviation marche")
    //       const objet= this.getterDossierCandidats.find(idmarche => idmarche.marche_id == id)

    //       if(objet){
    //         return objet.nom_cand
    //       }
    //       return 0
    //     }
    //   }
    // },


    // afficher la banque dynamique

    // verifiBanqueExist(){
    //   return this.formEffetFinancier.entreprise_id =="";
    // },
    // verifiBanqueExistModifier(){
    //   return this.editActeEffetFinancier.entreprise_id =="";
    // },

    // afficherBanqueDynamique(){
    //   return id =>{
    //     if(id != null && id !=""){
    //       var  resultat = this.banques.find(element => element.id== id);
    //       if(resultat){
    //         return resultat.libelle
    //       }
    //       return 0
    //     }
    //   }
    // },

    // afficherBanqueId(){
    //   return id =>{
    //     if(id != null && id !=""){
    //       var  resultat = this.comptes.find(element => element.id== id);
    //       if(resultat){
    //         return resultat.banque_id
    //       }
    //       return 0
    //     }
    //   }
    // },

// listeAvisAnoBailleur(){
//        return id =>{
//            if(id!=null && id!=""){
//                const resultatAvis = this.getterAnoDMPBailleur.find(idDemande =>idDemande.marche_id==id
//                && idDemande.avis_bail== 0)
//                return resultatAvis
//            }
//            return null
//        }
//    },
// affichierIdEntrepriseSelectionner() {
//       return id => {
//         if (id != null && id != "") {
//           const qtereel = this.entreprises.find(qtreel => qtreel.raison_sociale == id);

//           if (qtereel) {
//             return qtereel.id;
//           }
//           return 0
//         }
//       };
//     },

    // afficherBanqueDynamiqueId(){
    //   return id =>{
    //     if(id != null && id !=""){
    //       return this.comptes.filter(element => element.entrepse_id== id)


    //     }
    //   }
    // },




    // afficherEntrepriseId(){
    //   return id =>{
    //     if(id != null && id !=""){
    //       let ObjetId =this.getterDossierCandidats.find(element => element.entreprise_id== id)
    //       if(ObjetId){
    //         return ObjetId.nom_cand
    //       }

    //     }
    //   }
    // },


    // afficherLeCompteEnFonctionDeLaBanque(){       return resultat.varObjetBanque.libelle
    //     return banq_id =>{
    //         if(banq_id !=null && banq_id!=""){
    //   varObjetBanque.libelle.     return this.comptes.find(element => element.id == banq_id)


    //         }
    //     }
    // },

    // afficherLeCompteEnFonctionDeLaBanque(){
    //   return banq_id => {
    //     if( banq_id !== undefined) {
    //       var acteur = this.comptes.find(acteur => acteur.id == banq_id  )

    //       return  (acteur) ? acteur.rib :null
    //     }
    //     return null
    //   }

    // },
    // afficherIdCompte(){
    //   return banq_id => {
    //     if( banq_id !== undefined) {
    //       var acteur = this.comptes.find(acteur => acteur.rib == banq_id  )

    //       return  (acteur) ? acteur.id :null
    //     }
    //     return null
    //   }

    // },

    // nombreDejourCalcule(){
    //   let vM=this;
    //   const acteAffet = vM.formEffetFinancier
    //   if(acteAffet.date_odre_service == acteAffet.date_fin_exe &&  acteAffet.date_fin_exe !=="" && acteAffet.date_odre_service !=="") return 1
    //   if(acteAffet.date_fin_exe =="" && acteAffet.date_odre_service =="") return null

    //   var dateF = new Date(acteAffet.date_fin_exe).getTime()
    //   var dateO = new Date(acteAffet.date_odre_service).getTime()
    //   var resultat = dateF - dateO

    //   var diffJour =  resultat / (1000 * 3600 * 24)

    //   if(isNaN(diffJour)) return null

    //   if(parseFloat(diffJour) < 0 ) return "durée invalide"
    //   vM.formEffetFinancier.duree=diffJour
    //   return  diffJour;

    // },

    getDateFinExécutionValue(){
      return !this.formEffetFinancier.date_odre_service !=""
    },



    // nombreDejourCalculeEdit(){
    //   let vM=this;
    //   const acteAffetEdit = vM.editActeEffetFinancier
    //   if(acteAffetEdit.date_odre_service == acteAffetEdit.date_fin_exe &&  acteAffetEdit.date_fin_exe !=="" && acteAffetEdit.date_odre_service !=="") return 1
    //   if(acteAffetEdit.date_fin_exe =="" && acteAffetEdit.date_odre_service =="") return null

    //   var dateF = new Date(acteAffetEdit.date_fin_exe).getTime()
    //   var dateO = new Date(acteAffetEdit.date_odre_service).getTime()
    //   var resultat = dateF - dateO

    //   var diffJour =  resultat / (1000 * 3600 * 24)

    //   if(isNaN(diffJour)) return null

    //   if(parseFloat(diffJour) < 0 ) return "durée invalide"
    //   vM.editActeEffetFinancier.duree=diffJour
    //   return  diffJour;

    // },

    getDateFinExécutionValueEdit(){
      return !this.editActeEffetFinancier.date_odre_service !=""
    },


    listeActeEffectFinnancier: function () {
      return macheid => {
        if (macheid != "") {
          // console.log("Marche leste acte effect finnancier")
          return this.getActeEffetFinancierPersonnaliser.filter(idmarche => idmarche.marche_id == macheid)
        }
      }
    },





  },

  methods:{
    ...mapActions('bienService',['supprimerActeEffetFinancier',
      'ajouterActeEffetFinancier','modifierActeEffetFinancier', 'modifierMarche']),

ajouterBailleur(){

                this.formBailleur.acte_effet_id=this.enregistreIdActe(this.macheid)
                this.formBailleur.marche_id=this.macheid
                this.formBailleur.montant=this.montantHTt
                this.formBailleur.tva=this.afficherEnorere
                this.formBailleur.montant_tva= this.montantTva
               this.ajouterMarcherBailleur(this.formBailleur)
                this.formBailleur={
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

    // afficherModalModifierActeEffetFinancier(index){
    //   this.$('#modifierActeEF').modal({
    //     backdrop: 'static',
    //     keyboard: false
    //   });
    //   this.editActeEffetFinancier = this.acteEffetFinanciers.find(item=>item.id==index)
    // },

    // modifierModalActeEffetFinancierLocal(){

    //   // this.editActeEffetFinancier.entreprise_id=entreprise_id



    //   this.modifierActeEffetFinancier(this.editActeEffetFinancier)
    //   this.$('#modifierActeEF').modal('hide');
    // },

    formatageSomme:formatageSomme,

    // ajouterModalActeEffetFinancierLocal(){
    //   var nouvelObjet = {
    //     ...this.formEffetFinancier,
    //     duree: this.nombreDejourCalcule,
    //     ua_id:this.afficherIDUA(this.macheid),
    //     taux:this.afficherEnorere,
    //     tva_cautionnement:this.afficherMontantTvaDuCautionnement,
    //     montant_ttc_cautionnement:this.afficherMontantTTCDuCautionnement,
    //     montant_ht_cautionnement:this.afficheMontantHorsTaxeDuCautionnement,
    //     montant_ht_retenu_garantie:this.afficherMontantHorsTaxeRetenuGarantie,
    //     montant_tva_retenu_garanti:this.afficherMontantTvaTaxeRetenuGarantie,
    //     montant_ttc_retenue_garantie:this.afficherMontantRetenueGarantie,
    //     tva:this.montantTva,
    //     montant_act:this.montantHTt,
    //     avance_demarrage_ttc:this.avanceDemarrage,
    //     tva_avance_demarage:this.avanceDemarrageMontantTva,
    //     entreprise_id:this.affichierIdEntrepriseSelectionner(this.nom_candidata),
    //     difference_personnel_bienService:this.afficheMarcheType,
    //     marche_id:this.marche_lot,
    //     marchegeneral_id:this.affichieridMarcheGlobal(this.marche_lot),
    //     // ua_id:this.ua_id,
    //     banq_id:this.affichierIdBanque(this.afficherLeCompteEnFonctionDeLaBanque(this.formEffetFinancier.banq_id)),
    //     compte_id:this.afficherIdCompte(this.afficherLeCompteEnFonctionDeLaBanque(this.formEffetFinancier.banq_id))
    //   }
    //   //let entreprisePremier=this.entreprises.find(item=>item.numero_rc==rcm)


    //   //this.formEffetFinancier.entreprise_id=entreprisePremier.id
    //   this.ajouterActeEffetFinancier(nouvelObjet)
    //   this.$("#modificationModal").modal('hide');
    //   let marcheObjet=this.marches.find(marche=>marche.id==this.marche_lot)
    //   marcheObjet.attribue = 2
    //   let marcheObjet12=this.marches.find(marche=>marche.id==this.macheid)
    //   marcheObjet12.attribue = 2
    //   marcheObjet.numero_marche=this.formEffetFinancier.numero_marche
    //   // console.log(marcheObjet)
    //   this.modifierMarche(marcheObjet)
    //   this.modifierMarche(marcheObjet12)
    //   this.formEffetFinancier = {
    //     code_act:"",
    //     libelle_act:"",
    //     reference_act:"",
    //     objet_act:"",
    //     incidence_financiere:"",
    //     montant_act:"",
    //     date_attributaire:"",
    //     date_reception:"",
    //     duree:"",
    //     date_fin_exe:"",
    //     date_odre_service:"",
    //     livrable_id:"",
    //     autorite_approbation:"",
    //     date_approbation:"",
    //     ua_id:"",
    //     type_act_effet_id:"",
    //     analyse_dossier_id:"",
    //     entreprise_id:"",
    //     marche_id:"",
    //     numero_marche:""

    //   }
    // },
  }
}
</script>

<style scoped>

.grdirModalActeEffet{
  width: 88%;
  margin: 0 -42%;
}

</style>