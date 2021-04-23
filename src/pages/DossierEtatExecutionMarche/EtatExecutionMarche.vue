<template>
  <div id="printpdf">
    <div align="right">
      <button class="btn btn-info" @click.prevent="genererEnPdf()">
        Exporter en PDF
      </button>
    </div>
    <br />

    <div class="widget-content nopadding" >
      <table
        class="table table-bordered table-striped html2pdf__page-break"
        id="app1"
      >
        <tr>
          <td style="text-align: center">
            <p>
              MINISTERE DU BUDGET <br />
              ------------------------- <br />
              DIRECTION DU CONTRÔLE FINANCIER <br />
              -------------------------
            </p>
            <img :src="AfficheLogODCF" />
          </td>
          <td style="text-align: center">
            <img :src="AfficheAmoirie" />
          </td>
         
          <td style="text-align: center">
            <p>
              REPUBLIQUE DE CÔTE D'IVOIRE <br />
              Union-Discipline-Travail <br />
              -------------------------
            </p>
          </td>
        </tr>
      </table>
     
     <table
        class="table table-bordered table-striped html2pdf__page-break"
        id="app1" v-if="macheid"
      >
        <tr>
          <td style="text-align: center">
            <h2
        style="
          font-size: 25px;
          font-weight: bold;
          color: #000;
          text-align: center;
        "
       
      >
       {{afficherLibelleSection(afficherIDSection(macheid)) || 'Non renseigné'}} 
       <br/>
     <h4 style="color:red;">  {{afficherLibelleUa(afficherIDUA(macheid)) || 'Non renseigné'}}</h4>
      
      </h2>
      
             
          </td>
         
         
          <td style="text-align: center">
            
              <h2
        style="
          font-size: 25px;
          font-weight: bold;
          color: #000;
          text-align: center;
        "
       
      >
        ETAT D'EXECUTION DES MARCHES
      
      </h2>
            
          </td>
        </tr>
      </table>

      
    

        <table class="table table-bordered table-striped" id="titre">
                <thead>
                   <tr style="background-color: green;color: #FFFFFF;">
    <td style="width:50%;text-align:center">Nom de l'Entreprise:   {{printEntreprise(afficherEntrepriseId(macheid))}}</td> 
    <td style="width:50%;text-align:center"> N° de Marché /Contrat  :  {{afficherNumeroMarche(macheid)}} </td>
     <!-- <td style="width:12%;text-align:center">SOURCE DE FINANCEMENT</td>
     <td style="width:12%;text-align:center">TOTAL(FINANCEMENT)</td>
    <td style="width:12%;text-align:center">EXECUTE</td>
     <td style="width:12%;text-align:center">DISPONIBLE</td> -->
      <!-- <td style="width:12%;text-align:center">MODIFICATION BUDGETAIRE</td>
      <th style="width:12%;text-align:center">TOTAL</th> -->
 </tr>
 </thead>
 <tbody>
                    <tr>
    <td height="10px" rowspan="" style="text-align:center;">N° de compte contribuable:  {{printEntrepriseNumberCompte(afficherEntrepriseId(macheid))}}</td>
    <td height="10px">Date d'Approbation :  {{afficherDateAprobation(macheid)}}</td> 
     <!-- <td style="width:12%">ETAT</td> -->
     <!-- <td height="10px" style="text-align:center;font-size:12px"></td>
   <td height="10px" style="text-align:center;font-size:12px"></td>
     <td height="10px" style="text-align:center;font-size:12px"></td> -->
      
 </tr>
                        
                <tr>
    <td height="10px" rowspan="" style="text-align:center;">Type de marché/Contrat:</td>
    <td height="10px">Imputation Budgétaire : {{afficherCodeImputation}}</td>
     <!-- <td style="width:12%">ETAT</td> -->
     <!-- <td height="10px" style="text-align:center;font-size:12px"></td>
   <td height="10px" style="text-align:center;font-size:12px"></td>
     <td height="10px" style="text-align:center;font-size:12px"></td> -->
      
 </tr>

                   <tr>
   
   <td rowspan="2" height="20px" width="100px">Objet: {{afficherObjet(macheid)}}  </td>
    <td height="20px">PART  Bailleur   : {{afficherIDTypeFinancementLibelle(afficherIDTypeFinancement(macheid))}}                          {{formatageSomme(parseFloat(sommeCaluler))}} </td>
    <!-- <td height="20px" style="text-align:center;" ></td>
    <td height="20px" style="text-align:center;"></td>
   <td  height="20px" style="text-align:center;"></td> -->
<!--     
     <td height="20px">45</td>
     <th height="20px">12</th> -->
</tr>
                   <tr>
   
   <!-- <td height="20px">EMPRUNT  </td> -->
    <td style="width:12%"> PART ETAT: {{afficherIDTypeFinancementLibelleEmprunt(afficherIDTypeFinancement(macheid))}}                 {{formatageSomme(parseFloat(sommeCaluler))}}  </td>
     <!-- <td height="20px" style="text-align:center;"></td>
    
    <td style="text-align:center;height:20%"></td>
      <td  style="text-align:center;height:20%"></td> -->
    
    <!-- <td height="20px">03</td>
     <th height="20px">78</th> -->
</tr>
     
                   <tr>
   <td  rowspan="4" style=" text-align:center;width:10%">Montant initial du marché HTVA: {{formatageSomme(parseFloat(montantInitialDuMarche(macheid) ))}}
     <br/>
       <br/>
       <br/>
     Montant total du marché HTVA: {{formatageSomme(parseFloat(montantMarcheTaota ))}}
         <br/>
       <br/>
     <span style="margin-left:-150px;">
       <h6>debut:{{formaterDate(affichageDateDebut(macheid)) }}   ;     fin:{{formaterDate(affichageDateFin(macheid))}}  </h6>          
        
        </span>  

      </td>
      
   
   <td style="width:12%"> Avenant 1 HTVA: {{formatageSomme(parseFloat(montantAvenant(macheid) ))}} </td>
    <!-- <td style="width:12%">ETAT</td>
  
    <td  style="text-align:center;width:12%"></td>
    <td style="text-align:center;width:12%"></td>
    <td  style="text-align:center;width:12%"></td> -->
     <!-- <td style="width:12%">1004</td>
     <th style="width:12%">1005</th> -->
</tr>
                   <tr>
   
   <td height="20px">Avenant 2 HTVA: </td>
     
    <!-- <td height="20px"></td>
    <td height="20px" style="text-align:center"></td>
  <td style="text-align:center;height:20%"></td>
   <td  style="text-align:center;height:20%"></td> -->
     <!-- <td height="20px"></td>
     <th height="20px"></th> -->
</tr>
                   <tr>
  
   <td height="20px">Avenant 3 HTVA:  </td>
   
    <!-- <td height="20px"></td>
     <td height="20px" style="text-align:center"></td>
   <td height="20px" style="text-align:center;"></td>
    <td height="20px" style="text-align:center;"></td> -->
    <!-- <td height="20px"></td>
     <th height="20px"></th> -->
</tr>

          <tr>
  
   <td height="20px">Avenant 4 HTVA: </td>
   
    <!-- <td height="20px"></td>
     <td height="20px" style="text-align:center"></td>
   <td height="20px" style="text-align:center;"></td>
    <td height="20px" style="text-align:center;"></td> -->
    <!-- <td height="20px"></td>
     <th height="20px"></th> -->
</tr>
                                      
              </tbody>  
              </table>
        <br>
    </div>
    <br>
      <table  class="table table-bordered table-striped" v-if="macheid">
        <thead>
        <tr  >
          <th style="text-align:center;font-size:12px" rowspan="2">Decompte</th>
          <th style="text-align:center;font-size:12px" rowspan="2">Date</th>
          <th style="text-align:center;font-size:12px" rowspan="2">Acompte HTVA</th>
          <th style="text-align:center;font-size:12px" colspan="3"> Retenue 
           
             
           
          </th>
          <th style="text-align:center;font-size:12px" rowspan="2">TVA net</th>
          <th style="text-align:center;font-size:12px" rowspan="2">netTV</th>
          <th style="text-align:center;font-size:12px" rowspan="2">Etat</th>
          <th style="text-align:center;font-size:12px" rowspan="2">Bailler</th>
        </tr>


         <tr  >
        
          <th style="text-align:center;font-size:12px" colspan=""> d'Avance</th>
            
           <th style="text-align:center;font-size:12px" colspan=""> de Garantie  </th>
           <th style="text-align:center;font-size:12px" colspan=""> de Penalités </th>

             
      
        </tr>
        </thead>
        <tbody>
       
        <tr class="odd gradeX" v-for="type in afficheMarcheDecompte(macheid)" :key="type.id">
            <td style="text-align:center;"
                    >{{type.numero_decompte || 'Non renseigné'}}</td>
                    <!-- <td style="text-align:center;"
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{afficheObjetMarche(type.marche_id) || 'Non renseigné'}}</td> -->
                    <td style="text-align:center;"
                    >{{formaterDate(type.date_decompte) || 'Non renseigné'}}</td>
                    <td style="text-align:center;"
                    >{{formatageSomme(parseFloat(type.montantmarche)) || 'Non renseigné'}}</td>
                    <td style="text-align:center;"
                    >{{formatageSomme(parseFloat(type.retenu_avance)) || 'Non renseigné'}}</td>

                    <td style="text-align:center;"
                    >{{formatageSomme(parseFloat(type.retenu_garantie)) || 'Non renseigné'}}</td>

                    <td style="text-align:center;"
                    >{{formatageSomme(parseFloat(type.retenu_penalite)) || 'Non renseigné'}}</td>
                     <td style="text-align:center;"
                    >{{formatageSomme(parseFloat(type.nethtva)) || 'Non renseigné'}}</td>

                    
                      <td style="text-align:center;"
                    >{{formatageSomme(parseFloat(type.netttc)) || 'Non renseigné'}}</td>

                    
                      <td style="text-align:center;"
                    >{{formatageSomme(parseFloat(type.parts_etat)) || 'Non renseigné'}}</td>

                    
                      <td style="text-align:center;"
                    >{{formatageSomme(parseFloat(type.parts_bailleur)) || 'Non renseigné'}}</td>
        </tr>
        <!-- <tr>
          <td></td>
          <td>15/03/2021</td>
          <td>12354</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        
          <td> 145 354</td>
          <td> 145 </td>
          <td>354</td>
          <td>0</td>
        </tr> -->
       
        <tr style="background-color: aquamarine;">
           <td colspan="2" style="text-align:center;background-color: aquamarine;">CUMULS</td>
                   
                   <td style="text-align:center;color:red;font-size:20px">{{formatageSomme(parseFloat(CumulMontantFacture(macheid)))}}</td>
                   <td style="text-align:center;color:red;font-size:20px">{{formatageSomme(parseFloat(CumulAvance(macheid)))}}</td>
                   <td style="text-align:center;color:red;font-size:20px">{{formatageSomme(parseFloat(CumulGArantie(macheid)))}}</td>
                   <td style="text-align:center;color:red;font-size:20px">{{formatageSomme(parseFloat(CumulPenalite(macheid)))}}</td>
                   <td style="text-align:center;color:red;font-size:20px">{{formatageSomme(parseFloat(CumulNetHtva(macheid)))}}</td>
                   <td style="text-align:center;color:red;font-size:20px">{{formatageSomme(parseFloat(CumulNetTTC(macheid)))}}</td>
                   <td style="text-align:center;color:red;font-size:20px">{{formatageSomme(parseFloat(CumulPartEtat(macheid)))}}</td>
                   <td style="text-align:center;color:red;font-size:20px">{{formatageSomme(parseFloat(CumulPartBailler(macheid)))}}</td>
        </tr>

        
                 
        <tr >
            <td colspan="2" style="text-align:center;background-color: aquamarine;">%CUMULS</td>
            <!-- <td></td> -->
            <td>{{(CumulMontantFacture(macheid) / parseFloat(calculMontantTotalMarchePlusAvenant)*100).toFixed(2) }} </td>
            <td> {{afficherTauxAvance}} </td>
            <td> {{afficherTauxGarantie}} </td>
            <td>{{0}} </td>
            <td>{{0}} </td>
            <td>{{0}}     </td>
            <td>{{culmulMontantPaEtat}}</td>
            <td>{{CumulMontantParBailleur}}</td>
        </tr>
        </tbody>
      </table>
      <br>
       <table class="table table-bordered table-striped" >
        <tr>
            <td colspan="3">ENGAGEMENTS VISES</td>
            <td style="text-align:center;">TAUX</td>
        </tr>
        <tr>
            <td colspan="2">Par Bailleur</td>
            <td style="text-align:center;">{{formatageSomme(parseFloat(sommeDesBailleur))}} </td>
            <td style="text-align:center;">{{calculDuTauxBailleur}} %</td>
        </tr>
        <tr>
            <td>Par Etat</td>
            <td style="text-align:center;"> </td>
            <td style="text-align:center;">{{formatageSomme(parseFloat(afficheMarcheDecompteParBailleurTresors(macheid)))}} </td>
            <td style="text-align:center;">{{calculDuTauxTresor}} %</td>
        </tr>
        <tr>
            <td>Total</td>
            <td> </td>
            <td style="text-align:center;">{{formatageSomme(parseFloat(sommeDesBailleur) + parseFloat(afficheMarcheDecompteParBailleurTresors(macheid) ))}} </td>
            <td style="text-align:center;">{{afficherTauxTresor}} %</td>
        </tr> 
    </table>
    <br>
    <table class="table table-bordered table-striped">
        <tr>
            <td colspan="3" style="text-align:center;">RESTE A ENGAGER</td>
            <td style="text-align:center;">TAUX</td>
        </tr>
        <tr>
            <td colspan="2" style="text-align:center;">Par Bailleur</td>
            <td style="text-align:center;">{{calculMontantResteEngager}}</td>
            <td style="text-align:center;">{{calculTauxParBailleurResteEngager}} %</td>
        </tr>
        <tr>
            <td style="text-align:center;">Par Etat</td>
            <td> </td>
            <td style="text-align:center;">{{calculmontantEtatResteEngager}} </td>
            <td style="text-align:center;">{{calculTauxEtatResteEngager}} %</td>
        </tr>
        <tr>
            <td style="text-align:center;">Total</td>
            <td> </td>
            <td style="text-align:center;">{{formatageSomme(parseFloat(calculMontantResteEngager) + parseFloat(calculmontantEtatResteEngager))}} </td>
            <td style="text-align:center;">{{totauxTauxResteEngager}} %</td>
        </tr> 
    </table>
  </div>
</template>
<script>
import moment from "moment";
import {mapActions, mapGetters} from "vuex";
import {formatageSomme} from "../../../src/Repositories/Repository"
export default {
  props:["macheid"],
  data() {
    return{

    }
    
  },
  created(){

  },
  computed:{
 ...mapGetters("bienService", ["acteEffetFinanciers","getterProgrammationMarchePlurieAnnuel",
  "getMarchePersonnaliser","marches","gettersDossierMandat","gettersgestionOrdrePaiement",
  "gettersDossierLiquidation","gettersDemandeEngagement","avenants","personnaliseGetterMarcheBailleur"]),

...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires',"grandes_natures"]),

  ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements', 
  'types_financements']),
  ...mapGetters("parametreGenerauxAdministratif", [
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "exercices_budgetaires",
      "sections",
    ]),

    ...mapGetters("parametreGenerauxActivite", [
      "structures_activites",
      "plans_activites",
      "afficheNiveauAction",
      "afficheNiveauActivite",
    ]),
 ...mapGetters("parametreGenerauxBudgetaire", [
      "plans_budgetaires",
      "derniereNivoPlanBudgetaire",
    ]),
     ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements','types_financements']),
    ...mapGetters('uniteadministrative',[
    "plans_programmes",
 "uniteAdministratives",
 "afficheNiveauAction",
 "afficheNiveauActivite",
 "derniereNivoPlanBudgetaire",
 "getPersonnaliseBudgetGeneralParPersonnel",
 "budgetGeneral",
 "decomptefactures",
 "getPersonnaliseTransfert"
   
   
   ]),
     ...mapGetters("gestionMarche", [
      "groupeVille",
      "entreprises",
      "banques",
      "comptes",
      "getCompte",
      "getEntreptise",
      "getPersonnaliseAgence",
      "agenceBanques",
    ]),

// taille(){
//   return this.gettersgestionOrdrePaiement.length;
// },

  afficherIDUA(){
   return macheid=>{
     if(macheid!=null && macheid!=""){
        const answer = this.gettersgestionOrdrePaiement.find(item =>item.marche_id==macheid)
         if(answer)  return answer.unite_administrative_id
         return 0
     }
   }
  },

    // anneeAmort() {
      
    //   const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

    //   if (norme) {
    //     return norme.annee;
    //   }
    //   return 0
    // },

     CumulMontantFacture() {
      return id => {
        if (id != null && id != "") {
           return this.decomptefactures.filter(qtreel => qtreel.marche_id == id ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montantmarche), 0).toFixed(0);

        }
      };
    },

    calculMontantResteEngager(){
           let Objet= parseFloat(this.sommeDesBailleurMarche) - parseFloat(this.sommeDesBailleur)
            if(isNaN(Objet)){
              return 0
            }
            return Objet
    },
    calculTauxParBailleurResteEngager(){
       let objet= parseFloat(this.calculMontantResteEngager / parseFloat(this.sommeDesBailleurMarche) *100).toFixed(2)
        if(isNaN(objet)){
          return 0
        }
        return objet
    },

    calculmontantEtatResteEngager(){
       let objet= parseFloat(this.afficheMarcheMontanParBailleurTresor(this.macheid) - parseFloat(this.afficheMarcheDecompteParBailleurTresors(this.macheid)))
        if(isNaN(objet)){
          return 0
        }
        return objet
    },

    calculTauxEtatResteEngager(){
       let objet= parseFloat(this.calculmontantEtatResteEngager / parseFloat(this.afficheMarcheMontanParBailleurTresor(this.macheid)) * 100).toFixed(2)
        if(isNaN(objet)){
          return 0
        }
        return objet
    },

totauxTauxResteEngager(){
  return parseFloat(this.calculTauxEtatResteEngager) + parseFloat(this.calculTauxParBailleurResteEngager)
},
    // afficher ID du marche dans la table acte effet finanaceier
//     afficherIdMarcheDansActeEffetFinancier(){
//       return macheid => {
//         if (macheid != null && macheid != "") {
//            const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.macheid == macheid);
// if (qtereel) {
//         return qtereel.marche_id;
//       }
//       return 0
//         }
//       };
//     },

    MontantMarcheHt() {
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

    //
     MontantAvanceTTc() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);
if (qtereel) {
        return qtereel.avance_demarrage_ttc;
      }
      return 0
        }
      };
    },

     MontantGarantieTTc() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);
if (qtereel) {
        return qtereel.montant_ttc_rentenue_garantie;
      }
      return 0
        }
      };
    },

     MontantAvenantHt() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.avenants.find(qtreel => qtreel.marche_id == id);
if (qtereel) {
        return qtereel.montant_ht;
      }
      return 0
        }
      };
    },

    // calcule le montant total du marche
    calculMontantTotalMarchePlusAvenant(){
     return parseFloat(this.MontantMarcheHt(this.macheid))+ parseFloat(this.MontantAvenantHt(this.macheid))
    },

    afficherTauxGarantie(){
      let vm=this;
        const objet= (vm.CumulGArantie(this.macheid) / vm.MontantGarantieTTc(this.macheid) * 100).toFixed(2)
          if(isNaN(objet)){
            return 0
          }
          return objet.toFixed(2)
    },
 // afficher le taux avance
 afficherTauxAvance(){
   let vM=this;
    const objet= (vM.CumulAvance(vM.macheid) / vM.MontantAvanceTTc(vM.macheid) * 100).toFixed(2)
       if(isNaN(objet)) {
           return 0
       } 
        return objet
 },
    

     CumulAvance() {
      return id => {
        if (id != null && id != "") {
           return this.decomptefactures.filter(qtreel => qtreel.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.retenu_avance), 0).toFixed(0);

        }
      };
    },
     CumulMontantParBailleur() {
        let objet = parseFloat(this.CumulPartBailler(this.macheid) / (this.sommeDesBailleurMarche)* 100).toFixed(2)
         if(isNaN(objet)){
           return 0
         }
         return objet 
    },
    culmulMontantPaEtat(){
      let obj= parseFloat(this.CumulPartEtat(this.macheid) / parseFloat(this.afficheMarcheMontanParBailleurTresor(this.macheid))* 100).toFixed(2)
      if(isNaN(obj)){
        return 0
      }
      return obj
    },

    CumulGArantie() {
      return id => {
        if (id != null && id != "") {
           return this.decomptefactures.filter(qtreel => qtreel.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.retenu_garantie), 0).toFixed(0);

        }
      };
    },
    CumulPenalite() {
      return id => {
        if (id != null && id != "") {
           return this.decomptefactures.filter(qtreel => qtreel.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.retenu_penalite), 0).toFixed(0);

        }
      };
    },
    CumulNetHtva() {
      return id => {
        if (id != null && id != "") {
           return this.decomptefactures.filter(qtreel => qtreel.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.nethtva), 0).toFixed(0);

        }
      };
    },
    CumulNetTTC() {
      return id => {
        if (id != null && id != "") {
           return this.decomptefactures.filter(qtreel => qtreel.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.netttc), 0).toFixed(0);

        }
      };
    },
    CumulPartEtat() {
      return id => {
        if (id != null && id != "") {
           return this.decomptefactures.filter(qtreel => qtreel.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.parts_etat), 0).toFixed(0);

        }
      };
    },
    CumulPartBailler() {
      return id => {
        if (id != null && id != "") {
           return this.decomptefactures.filter(qtreel => qtreel.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.parts_bailleur), 0).toFixed(0);

        }
      };
    },

    afficheMarcheDecompte() {
      return id => {
        if (id != null && id != "") {
          return this.decomptefactures.filter(
            element => element.marche_id == id 
          );
        }
      };
    },


    afficheMarcheDecompteParBailleurDons() {
      return id => {
        if (id != null && id != "") {
          let objet= this.decomptefactures.filter(
            element => element.marche_id == id && element.type_financement_id==13 && element.type_ordre_paiement==1 && element.decision_cf==8 && element.diff_op==null
             || element.type_ordre_paiement==1 && element.decision_cf==9 && element.diff_op==null
             || element.type_ordre_paiement==4 && element.decision_cf==8 && element.diff_op==null
             || element.type_ordre_paiement==4 && element.decision_cf==9 && element.diff_op==null
          ).reduce((prec,cur) =>parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0);
          if(objet){
            return objet.toFixed(2)
          }
          return 0
        }
      };
    },

    afficheMarcheDecompteParBailleurEmprunt() {
      return id => {
        if (id != null && id != "") {
          let objet= this.decomptefactures.filter(
            element => element.marche_id == id && element.type_financement_id==14 && element.type_ordre_paiement==1 && element.decision_cf==8 && element.diff_op==null
             || element.type_ordre_paiement==1 && element.decision_cf==9 && element.diff_op==null
             || element.type_ordre_paiement==4 && element.decision_cf==8 && element.diff_op==null
             || element.type_ordre_paiement==4 && element.decision_cf==9 && element.diff_op==null
          ).reduce((prec,cur) =>parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0);
          if(objet){
            return objet.toFixed(2)
          }
          return 0
        }
      };
    },


        afficheMarcheMontanParBailleurEmprunt() {
      return id => {
        if (id != null && id != "") {
          let objet= this.personnaliseGetterMarcheBailleur.filter(
            element => element.marche_id == id && element.type_finnancement_id==14 
          ).reduce((prec,cur) =>parseFloat(prec) + parseFloat(cur.montant), 0);
          if(objet){
            return objet.toFixed(2)
          }
          return 0
        }
      };
    },


  afficheMarcheMontanParBailleurDons() {
      return id => {
        if (id != null && id != "") {
          let objet= this.personnaliseGetterMarcheBailleur.filter(
            element => element.marche_id == id && element.type_finnancement_id==13 
          ).reduce((prec,cur) =>parseFloat(prec) + parseFloat(cur.montant), 0);
          if(objet){
            return objet.toFixed(2)
          }
          return 0
        }
      };
    },
    
     sommeDesBailleurMarche(){
      return parseFloat(this.afficheMarcheMontanParBailleurDons(this.macheid) ) + parseFloat(this.afficheMarcheMontanParBailleurEmprunt(this.macheid))
    },

    calculDuTauxBailleur(){
      let objet= parseFloat((this.sommeDesBailleur) / parseFloat(this.sommeDesBailleurMarche) * 100).toFixed(2)
       if(isNaN(objet)){
         return 0
       }
       return objet
    },
     afficheMarcheMontanParBailleurTresor() {
      return id => {
        if (id != null && id != "") {
          let objet= this.personnaliseGetterMarcheBailleur.filter(
            element => element.marche_id == id && element.type_finnancement_id==15 
          ).reduce((prec,cur) =>parseFloat(prec) + parseFloat(cur.montant), 0);
          if(objet){
            return objet.toFixed(2)
          }
          return 0
        }
      };
    },

       calculDuTauxTresor(){
      let answer= parseFloat(this.afficheMarcheDecompteParBailleurTresors(this.macheid) / parseFloat(this.afficheMarcheMontanParBailleurTresor(this.macheid)) * 100).toFixed(2)
       if(isNaN(answer)){
         return 0
       }
       return answer
    },

// afficher le taux tresor
afficherTauxTresor(){
   let objet= parseFloat(this.calculDuTauxBailleur) + parseFloat(this.calculDuTauxTresor).toFixed(2)
    if(isNaN(objet)){
      return 0
    }
    return objet
},
    
    afficheMarcheDecompteParBailleurTresors() {
      return id => {
        if (id != null && id != "") {
           let objet= this.decomptefactures.filter(
            element => element.marche_id == id && element.type_financement_id==15 && element.type_ordre_paiement==1 && element.decision_cf==8 && element.diff_op==null
             || element.type_ordre_paiement==1 && element.decision_cf==9 && element.diff_op==null
             || element.type_ordre_paiement==4 && element.decision_cf==8 && element.diff_op==null
             || element.type_ordre_paiement==4 && element.decision_cf==9 && element.diff_op==null
          ).reduce((prec,cur) =>parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0);
          if(objet){
            return objet.toFixed(2)
          }
          return 0
        }
      };
    },

    sommeDesBailleur(){
      return parseFloat(this.afficheMarcheDecompteParBailleurDons(this.macheid) ) + parseFloat(this.afficheMarcheDecompteParBailleurEmprunt(this.macheid))
    },
  // afficher le libelle d'unite administratie
  afficherLibelleUa(){
     return macheid=>{
     if(macheid!=null && macheid!=""){
        const item = this.uniteAdministratives.find(item =>item.id==macheid)
         if(item) {
            return item.libelle
         }
         return 0
     }
   }
  },

   afficherObjet(){
     return macheid=>{
     if(macheid!=null && macheid!=""){
        const item = this.gettersgestionOrdrePaiement.find(item =>item.marche_id==macheid)
         if(item) {
            return item.odjet_autre_depense
         }
         return 0
     }
   }
  },

  afficherEntrepriseId(){
     return macheid=>{
     if(macheid!=null && macheid!=""){
        const item = this.gettersgestionOrdrePaiement.find(item =>item.marche_id==macheid)
         if(item) {
            return item.entreprise_id
         }
         return 0
     }
   }
  },

  //afficher le numero du marche/contrat numero_marche
  afficherIDMarche(){
     return macheid=>{
     if(macheid!=null && macheid!=""){
        const item = this.gettersgestionOrdrePaiement.find(item =>item.id==macheid)
         if(item) {
            return item.marche_id
         }
         return 0
     }
   }
  },

  // afficher le montant initial du marché
   montantInitialDuMarche(){
     return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id );
           // console.log(this.acteEffetFinanciers)
      if (qtereel) {
        return qtereel.montant_act_ht;
      }
      return 0
        }
      };
   },
   // afficher le numero de decompte
   afficherDecompteMarche(){
     return id=>{
         let answer = this.decomptefactures.filter(idecompte => idecompte.marche_id==id)
             return answer.numero_decompte;  
          
     }
     
   },
   

   // affichage la date debut  
   affichageDateDebut(){
      return id=>{
        if(id!=null && id!=""){
          const response =this.acteEffetFinanciers.find(item => item.marche_id==id)

          if(response){
            return response.date_odre_service
          }
          return 0
        }
      }
   },
// afficher date fin 
     affichageDateFin(){
      return id=>{
        if(id!=null && id!=""){
          const response =this.acteEffetFinanciers.find(item => item.marche_id==id)

          if(response){
            return response.date_fin_exe
          }
          return 0
        }
      }
   },

   // afficher le montant d'avenant
    montantAvenant(){
     return id => {
        if (id != null && id != "") {
           const qtereel = this.avenants.filter(qtreel => qtreel.marche_id == id ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ht), 0);
            //console.log(this.acteEffetFinanciers)
      if (qtereel) {
        return qtereel;
      }
      return 0
        }
      };
   },


   // afficher le calcul du montant marche total

   montantMarcheTaota(){
      let objet= parseFloat(this.montantInitialDuMarche(this.macheid))+ parseFloat(this.montantAvenant(this.macheid))
        if(isNaN(objet)){
          return 0
        }
        return objet
   },

  // recuperation de ID de type de financer 

    afficherIDTypeFinancement(){
     return macheid=>{
     if(macheid!=null && macheid!=""){
        const item = this.gettersgestionOrdrePaiement.find(item =>item.marche_id==macheid)
         if(item) {
            return item.type_financement_id
         }
         return 0
     }
   }
  },

  // calculons les montants des types de financement en fonction du montant du marche
   recuperMontantMarcheDan(){
    return macheid=>{
      if(macheid!=null && macheid!=""){
        const objet=this.gettersgestionOrdrePaiement.find(item => item.marche_id==macheid)
         if(objet){
           return objet.montant_ordre_paiement
         }
         return 0
      }
    }
  },
  calculeMontantParBailleur(){
    return macheid=>{
      if(macheid!=null && macheid!=""){
        const objet=this.acteEffetFinanciers.find(item => item.marche_id==macheid)
         if(objet){
           return objet.taux
         }
         return 0
      }
    }
  },

  sommeCaluler(){
      return (this.calculeMontantParBailleur(this.macheid) * parseFloat (this.recuperMontantMarcheDan(this.macheid)))/100
  },

  afficherIDTypeFinancementLibelle(){
     return macheid=>{
     if(macheid!=null && macheid!=""){
        const item = this.types_financements.find(item =>item.id==macheid && item.code==2 || item.code==3)
         if(item) {
            return item.libelle
         }
         return 0
     }
   }
  },

  afficherIDTypeFinancementLibelleEmprunt(){
     return macheid=>{
     if(macheid!=null && macheid!=""){
        const item = this.types_financements.find(item =>item.id==macheid && item.code==1)
         if(item) {
            return item.libelle
         }
         return 0
     }
   }

  },
 
  afficherCodeImputation(){
    return this.afficherCodeActivite(this.afficherActiviteID) +" "+ this.afficherImputation(this.afficherImputationID)
  },

  // afficher imputation
  afficherImputationID(){
     return macheid=>{
     if(macheid!=null && macheid!=""){
        const item = this.gettersgestionOrdrePaiement.find(item =>item.marche_id==macheid)
         if(item) {
            return item.ligne_economique_id
         }
         return 0
     }
   }
  },
   afficherImputation(){
     return macheid=>{
     if(macheid!=null && macheid!=""){
        const item = this.plans_budgetaires.find(item =>item.id==macheid)
         if(item) {
            return item.code
         }
         return 0
     }
   }
  },

  afficherActiviteID(){
     return macheid=>{
     if(macheid!=null && macheid!=""){
        const item = this.gettersgestionOrdrePaiement.find(item =>item.marche_id==macheid)
         if(item) {
            return item.activite_id
         }
         return 0
     }
   }
  },


  afficherCodeActivite(){
     return macheid=>{
     if(macheid!=null && macheid!=""){
        const item = this.plans_activites.find(item =>item.id==macheid)
         if(item) {
            return item.code
         }
         return 0
     }
   }
  },

   afficherNumeroMarcheID(){
     return macheid=>{
     if(macheid!=null && macheid!=""){
        const item = this.acteEffetFinanciers.find(item =>item.id==macheid)
         if(item) {
            return item.marche_id
         }
         return 0
     }
   }
  },

     afficherDateAprobation(){
     return macheid=>{
     if(macheid!=null && macheid!=""){
        const item = this.acteEffetFinanciers.find(item =>item.marche_id==macheid &&  this.afficherIDMarche(this.macheid)==this.afficherNumeroMarcheID(this.macheid))
         if(item) {
            return item.date_approbation
         }
         return 0
     }
   }
  },

  afficherNumeroMarche(){
     return macheid=>{
     if(macheid!=null && macheid!=""){
        const item = this.acteEffetFinanciers.find(item =>item.marche_id==macheid && this.afficherIDMarche(this.macheid)==this.afficherNumeroMarcheID(this.macheid))
         if(item) {
            return item.numero_marche
         }
         return 0
     }
   }
  },

  
  // afficher le libelle de l'entreprise
  printEntreprise(){
    return macheid=>{
     if(macheid!=null && macheid!=""){
        const item = this.entreprises.find(item =>item.id==macheid)
         if(item) {
            return item.raison_sociale
         }
         return 0
     }
   }
  },

   printEntrepriseNumberCompte(){
    return macheid=>{
     if(macheid!=null && macheid!=""){
        const item = this.entreprises.find(item =>item.id==macheid)
         if(item) {
            return item.numero_cc
         }
         return 0
     }
   }
  },


  // afficher le ID de section 
  afficherIDSection(){

     return macheid=>{
     if(macheid!=null && macheid!=""){
        const answer = this.gettersgestionOrdrePaiement.find(item =>item.marche_id==macheid)
         if(answer)  return answer.section_id
         return 0
     }
   }

  },

  // afficher le libelle de la section
  afficherLibelleSection(){
     return macheid=>{
     if(macheid!=null && macheid!=""){
        const answer = this.sections.find(item =>item.id==macheid)
         if(answer)  {
           return answer.nom_section
         }
         return 0
     }
   }

  },


AfficheLogODCF() {
      return "http://dcf-personnel-ua.kognishare.com/savephotoprofil/log3.png";
    },
    AfficheAmoirie() {
      return "http://dcf-personnel-ua.kognishare.com/savephotoprofil/amoirie.png";
    },
  },
  methods:{
    ...mapActions("bienService",['']),
    formatageSomme:formatageSomme,

    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },

    genererEnPdf() {
      this.$htmlToPaper("printpdf");
    },

  }
}
</script>
<style scoped>
  table{
    border-collapse: collapse
  }
  
  th{
    border: 1px solid black;
  }
  td{
    border: 1px solid black;
    padding: 10px;
  }
  
</style>