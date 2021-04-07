
<template>
  <div class="container-fluid">
   <div  class="row-fluid"  style="margin-top: -20px">
                <div class="span1">

                </div>
                <div class="span10 " style="background-color: transparent; !important;">
                    <table class="table table-striped"  >
                        <tbody>
                        <tr>
                         
                           
                          <td >
                              <br>
                                <label style="color:#000;font-size:14px;font-weight: bolder;">UNITE ADMINISTRATIVE<a href="#" @click.prevent="videUniteadministrative()" v-if="uniteAdministrative_id" style="color: red"><i class="fa fa-trash-o"></i></a>
                                </label>
                                <model-list-select style="background-color: #fff;border:2px solid #000"
                                                   class="wide"
                                                   :list="uniteAdministratives"
                                                   v-model="uniteAdministrative_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder="TOUTES LES UNITES ADMINISTRATIVES"
                                >

                                </model-list-select>
                            </td>
                            <td >
                                <br>
                                <label style="color:#000;font-size:14px;font-weight: bolder;">TYPE DE MARCHE <a href="#" @click.prevent="VidetypeMarche()" v-if="typemarche_id" style="color: red"><i class="fa fa-trash-o"></i></a>
                                </label>
                                <model-list-select style="background-color: #fff;border:2px solid #000"
                                                   class="wide"
                                                   :list="typeMarches"
                                                   v-model="typemarche_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder="TOUS LES TYPES DE MARCHE"
                                >

                                </model-list-select>
                            </td>
                            <td >
                                <br>
                                <label style="color:#000;font-size:14px;font-weight: bolder;">ENTREPRISE<a href="#" @click.prevent="VideEntreprise()" v-if="entre_id" style="color: red"><i class="fa fa-trash-o"></i></a>
                                </label>
                                <model-list-select style="background-color: #fff;border:2px solid #000"
                                                   class="wide"
                                                   :list="entreprises"
                                                   v-model="entre_id"
                                                   option-value="id"
                                                   option-text="raison_sociale"
                                                   placeholder="TOUTES LES ENTREPRISES"
                                >

                                </model-list-select>
                            </td>
                             <!-- <td >
                                <label>RE
                                </label>
                                <model-list-select style="background-color: #fff;"
                                                   class="wide"
                                                   :list="filtre_unite_admin"
                                                   v-model="unite_administrative_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder="Unité administrative"
                                >

                                </model-list-select>
                            </td> -->
                        </tr>

                        </tbody>
                    </table>

                </div>


            </div>
            <div align="right">

      <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>


                            </div>
           
             <br/>
             <div id="printMe">
             <h5 style="text-align='center';font-size:16px">ETAT DE SUIVI DE L'EXECUTION DES MARCHES PAR ENTREPRISE</h5>
             <h2 style="text-align='center';">{{libelleUa(uniteAdministrative_id)}}</h2>
   <table class="table table-bordered table-striped">
<thead>
                  <tr >
                    <!-- <th style="background: coral;font-weight:bolder;color:#000;text-align:center;font-size:12px">N°ORDRE</th> -->
                   <th style="background: coral;font-weight: bolder;color:#000;text-align:center;font-size:12px">NOM DE L'ENTREPRISE</th>
                    <th style="background: coral;font-weight: bolder;color:#000;text-align:center;font-size:12px" colspan="2">NOMBRE DE MARCHES OBTENUS</th>
                    <th style="background: coral;font-weight: bolder;color:#000;text-align:center;font-size:12px" colspan="3">MARCHES NON DEMARRES</th>
                    <th style="background: coral;font-weight: bolder;color:#000;text-align:center;font-size:12px" colspan="3" title="MARCHES EN COURS D'EXECUTION DANS LE DELAI">MARCHES EN COURS D'EXECUTION DANS LE DELAI</th>
                    <th style="background: coral;font-weight: bolder;color:#000;text-align:center;font-size:12px" colspan="3" title="MARCHES EN COURS D'EXECUTION HORS DELAI">MARCHES EN COURS D'EXECUTION HORS DELAI</th>
                    <th style="background: coral;font-weight: bolder;color:#000;text-align:center;font-size:12px" colspan="3" title="NOMBRE DE MARCHES ACHEVES  DANS LE DELAI">NOMBRE DE MARCHES ACHEVES  DANS LE DELAI</th>
                    <th style="background: coral;font-weight: bolder;color:#000;text-align:center;font-size:12px" colspan="3" title=" MARCHES  ACHEVES  HORS DELAI"> MARCHES  ACHEVES  HORS DELAI</th>
                 <th style="background: coral;font-weight: bolder;color:#000;text-align:center;font-size:12px" colspan="3" title="MARCHES  EN SOUFFRANCE">MARCHES  EN SOUFFRANCE</th>
                 <!-- <th style="background: coral;font-weight: bolder;color:#000;text-align:center;font-size:12px" colspan="3" title="AVENANT">AVENANT</th> -->
                 <!-- <th style="background: coral;font-weight: bolder;color:#000;text-align:center;font-size:12px" colspan="" title="AVENANT">Détail</th> -->
                  </tr>
                  <tr>
                   <th colspan="1"></th>
                    <th style="background: limegreen;font-weight:bolder;color:#000;text-align:center;font-size:12px">Nombre</th>
                    <th style="background: limegreen;font-weight:bolder;color:#000;text-align:center;font-size:12px">Montant</th>
                   
                    
                    <th style="background: limegreen;font-weight:bolder;color:#000;text-align:center;font-size:12px">Nombre</th>
                    <th style="background: limegreen;font-weight:bolder;color:#000;text-align:center;font-size:12px">Montant</th>
                    <th style="background: limegreen;font-weight:bolder;color:#000;text-align:center;font-size:12px">Taux</th>
                     <th style="background: limegreen;font-weight:bolder;color:#000;text-align:center;font-size:12px">Nombre</th>
                     <th style="background: limegreen;font-weight:bolder;color:#000;text-align:center;font-size:12px">Montant</th>
                    <th style="background: limegreen;font-weight:bolder;color:#000;text-align:center;font-size:12px">Taux</th>
                     <th style="background: limegreen;font-weight:bolder;color:#000;text-align:center;font-size:12px">Nombre</th>
                     <th style="background: limegreen;font-weight:bolder;color:#000;text-align:center;font-size:12px">Montant</th>
                    <th style="background: limegreen;font-weight:bolder;color:#000;text-align:center;font-size:12px">Taux</th>
                     <th style="background: limegreen;font-weight:bolder;color:#000;text-align:center;font-size:12px">Nombre</th>
                     <th style="background: limegreen;font-weight:bolder;color:#000;text-align:center;font-size:12px">Montant</th>
                    <th style="background: limegreen;font-weight:bolder;color:#000;text-align:center;font-size:12px">Taux</th>
                     <th style="background: limegreen;font-weight:bolder;color:#000;text-align:center;font-size:12px">Nombre</th>
                     <th style="background: limegreen;font-weight:bolder;color:#000;text-align:center;font-size:12px">Montant</th>
                    <th style="background: limegreen;font-weight:bolder;color:#000;text-align:center;font-size:12px">Taux</th>
                     <th style="background: limegreen;font-weight:bolder;color:#000;text-align:center;font-size:12px">Nombre</th>
                     <th style="background: limegreen;font-weight:bolder;color:#000;text-align:center;font-size:12px">Montant</th>
                    <th style="background: limegreen;font-weight:bolder;color:#000;text-align:center;font-size:12px">Taux</th>
                     <!-- <th style="background: limegreen;font-weight:bolder;color:#000;text-align:center;font-size:12px">Nombre</th>
                     <th style="background: limegreen;font-weight:bolder;color:#000;text-align:center;font-size:12px">Montant</th>
                    <th style="background: limegreen;font-weight:bolder;color:#000;text-align:center;font-size:12px">Taux</th> -->
                   <!-- <th style="background: limegreen;font-weight:bolder;color:#000;text-align:center;font-size:12px"></th> -->
                  </tr>
                </thead>
                
                 <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="service in ListeDEsEntreprise"
                    :key="service.id"
                  >
                  <!-- <td style="width:10%">{{service[0].entreprise_id || 'Non renseigné'}}</td> -->
                  <td style="width:10%">{{RaisonSocialEntreprise(service.entreprise_id) || 'Non renseigné'}}</td>
                  <td style="width:10%;text-align:center;font-size:14px">{{NombreDeMarcheRecu(service.entreprise_id) || 'Non renseigné'}}</td>
                    <td style="width:10%;text-align:center;font-size:14px">{{formatageSomme(parseFloat(MontantMarcheObtenu(service.entreprise_id)))}}</td>
                    
                      
                     
                      <td style="width:10%;text-align:center;font-size:14px">{{MarcheNonDemarre(service.entreprise_id) || 0}}</td>
                      <td style="width:10%;text-align:center;font-size:14px">{{formatageSomme(parseFloat(MontantMarcheNonDemarre(service.entreprise_id)))}}</td>
                      
                      <td style="width:10%;text-align:center;font-size:14px" >{{((MarcheNonDemarre(service.entreprise_id)/NombreDeMarcheRecu(service.entreprise_id))*100).toFixed(0) || 0}}%</td>
                      
                      <td style="width:10%;text-align:center;font-size:14px">{{NombreDeMarcheExecutionDansLeDelai(service.entreprise_id)}}</td>
                                            <td style="width:10%;text-align:center;font-size:14px">{{formatageSomme(parseFloat(MontantDeMarcheExecutionDansLeDelai(service.entreprise_id)))}}</td>
                      <td style="width:10%;text-align:center;font-size:14px">{{((NombreDeMarcheExecutionDansLeDelai(service.entreprise_id)/NombreDeMarcheRecu(service.entreprise_id))*100).toFixed(0) || 0}}%</td>
                      <td style="width:10%;text-align:center;font-size:14px">{{NombreDeMarcheExecutionHorsDelai(service.entreprise_id)}}</td>
                      <td style="width:10%;text-align:center;font-size:14px">{{formatageSomme(parseFloat(MontantDeMarcheExecutionHorsDelai(service.entreprise_id)))}}</td>
                      <td style="width:10%;text-align:center;font-size:14px">{{((NombreDeMarcheExecutionHorsDelai(service.entreprise_id)/NombreDeMarcheRecu(service.entreprise_id))*100).toFixed(0) || 0}}%</td>
                      <td style="width:10%;text-align:center;font-size:14px">{{NombreDeMarcheAcheveDansLeDelai(service.entreprise_id)}}</td>
                      <td style="width:10%;text-align:center;font-size:14px">{{formatageSomme(parseFloat(MontantDeMarcheAcheveDansLeDelai(service.entreprise_id))) || 'Non renseigné'}}</td>
                      <td style="width:10%;text-align:center;font-size:14px">{{((NombreDeMarcheAcheveDansLeDelai(service.entreprise_id)/NombreDeMarcheRecu(service.entreprise_id))*100).toFixed(0) || 0}}%</td>
<td style="width:10%;text-align:center;font-size:14px">{{NombreDeMarcheAcheveHorsLeDelai(service.entreprise_id)}}</td>
                      <td style="width:10%;text-align:center;font-size:14px">{{formatageSomme(parseFloat(MontantDeMarcheAcheveHorsLeDelai(service.entreprise_id))) || 'Non renseigné'}}</td>
                      <td style="width:10%;text-align:center;font-size:14px">{{((NombreDeMarcheAcheveHorsLeDelai(service.entreprise_id)/NombreDeMarcheRecu(service.entreprise_id))*100).toFixed(0) || 0}}%</td>
                      <td style="width:10%;text-align:center;font-size:14px">{{NombreDeMarcheSuppendu(service.entreprise_id) || 0}}</td>
                      <td style="width:10%;text-align:center;font-size:14px">{{formatageSomme(parseFloat(MontantDeMarcheSuppendu(service.entreprise_id))) || 'Non renseigné'}}</td>
                      <td style="width:10%;text-align:center;font-size:14px">{{((NombreDeMarcheSuppendu(service.entreprise_id)/NombreDeMarcheRecu(service.entreprise_id))*100).toFixed(0) || 0}}%</td>
                  
                    <!-- <td style="width:10%;text-align:center;font-size:14px">{{service[0].entreprise_id || 'Non renseigné'}}</td>
                      <td style="width:10%;text-align:center;font-size:14px">{{service[0].entreprise_id || 'Non renseigné'}}</td>
                      <td style="width:10%;text-align:center;font-size:14px">{{service[0].entreprise_id || 'Non renseigné'}}</td> -->

                    <!-- <td>
                      <button class="btn btn-success" >
                        <span>
                          <i class="icon-folder-open"> Détail</i>
                        </span>
                      </button>
                    </td> -->
                  </tr>
                </tbody>
</table>   
             </div>

    <div class="quick-actions_homepage">
      <ul class="quick-actions"></ul>
    </div>
    <div class="quick-actions_homepage">
      <ul class="quick-actions"></ul>
    </div>
     <fab v-if="affiche_boutton_filtre"
             :position="position"
             :bg-color="bgColor"
             :actions="fabActions"
             main-icon="format_indent_decrease"
             @cache="filter"

        ></fab>
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";

import { formatageSomme } from "@/Repositories/Repository";
import {admin,dcf,cf,noDCfNoAdmin} from '@/Repositories/Auth';
import {  ModelListSelect } from 'vue-search-select'
    import 'vue-search-select/dist/VueSearchSelect.css'
export default {
  components: {
    
    ModelListSelect,
     
  },
  name:'TableauBordImmo',
  data() {
    return{
      formData :{

 
      },
      entre_id:"",
       typemarche_id:"",
                uniteAdministrative_id:"",
       status_marches:"",
      
                
                affiche_filtre:false,
                affiche_boutton_filtre:true,
                
                bgColor: '#171b39',
                position: 'bottom-right',
                fabActions: [
                    {
                        name: 'cache',
                        icon: 'cached'
                    }
                ],
       
search:""
        }
    
  },
created(){
console.log(this.groupeEntreprise2)
},
  computed: {
    ...mapGetters("SuiviImmobilisation", [
    
      "immobilisations",
      "GestionStockageArticles",
      "normeEquipements"
     
      
    ]),
     ...mapGetters('parametreGenerauxAdministratif', ['getterplanOrganisationUa','sections']) ,
    admin:admin,
      dcf:dcf,
      cf:cf,
      noDCfNoAdmin:noDCfNoAdmin,
 ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),

    ...mapGetters("personnelUA", ["personnaliseActeurDepense","acte_personnels","all_acteur_depense","acteur_depenses","personnaFonction","fonctions"]),

 ...mapGetters("uniteadministrative", ["GestionStockageArticles","getvehicules","uniteAdministratives","directions","servicesua","uniteZones"]),
  ...mapGetters("bienService", ["GroupeEntreprise","getFacturePersonnaliser","getterActeEffetFinanciers","modepaiements",'mandats','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
                'acteEffetFinanciers','montantPlanification','montantContratualisation','afficheContratualisation','affichePlanifier',
                'nombremarchesExecute',"avenants","getMandatPersonnaliserVise",
                'AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
                "printMarcheNonAttribue","procedurePassations","typeTypeProcedures",
                "montantComtratualisation","text_juridiques", "gettersOuverturePersonnaliser",
                "typeActeEffetFinanciers","personnaliseGetterMarcheBailleur","getterMandate",
                "getActeEffetFinancierPersonnaliserContrat","getterCojos","getterDemandeAno","getterAnoDMPBailleur","groupeEntreprise2"]),
                ...mapGetters("gestionMarche", ["entreprises"]),
 libelleUa() {
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
 listeActeEffectFinnancier() {
      return macheid => {
        if (macheid != "") {
          return this.getActeEffetFinancierPersonnaliser.filter(idmarche => idmarche.entreprise_id == macheid)
        }
      }
    },

 
             NombreDeMarcheExecutionDansLeDelai() {
      return id => {
        if (id != null && id != "") {
           return this.getterActeEffetFinanciers.filter(qtreel => qtreel.entreprise_id == id && qtreel.date_debut_exectuion_definitif != null && qtreel.date_reception_provisoire_definitif != null && this.nombreDejourCalcule(this.afficherDateDuJour,qtreel.date_fin_exe) <= qtreel.duree).length;
        }
        return 0
      };
    },
     MontantDeMarcheExecutionDansLeDelai() {
      return id => {
        if (id != null && id != "") {
           return this.getterActeEffetFinanciers.filter(qtreel => qtreel.entreprise_id == id && qtreel.date_debut_exectuion_definitif != null && qtreel.date_reception_provisoire_definitif != null && this.nombreDejourCalcule(this.afficherDateDuJour,qtreel.date_fin_exe) <= qtreel.duree).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_act), 0).toFixed(0);
        }
        return 0
      };
    },
MontantDeMarcheExecutionHorsDelai() {
      return id => {
        if (id != null && id != "") {
           return this.getterActeEffetFinanciers.filter(qtreel => qtreel.entreprise_id == id && qtreel.date_debut_exectuion_definitif != null && qtreel.date_reception_provisoire_definitif != null && qtreel.duree < this.nombreDejourCalcule(this.afficherDateDuJour,qtreel.date_fin_exe)).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_act), 0).toFixed(0);
        }
        return 0
      };
    },

   NombreDeMarcheExecutionHorsDelai() {
      return id => {
        if (id != null && id != "") {
           return this.getterActeEffetFinanciers.filter(qtreel => qtreel.entreprise_id == id && qtreel.date_debut_exectuion_definitif != null && qtreel.date_reception_provisoire_definitif != null && qtreel.duree < this.nombreDejourCalcule(this.afficherDateDuJour,qtreel.date_fin_exe)).length;
        }
        return 0
      };
    },


    NombreDeMarcheAcheveDansLeDelai() {
      return id => {
        if (id != null && id != "") {
           return this.getterActeEffetFinanciers.filter(qtreel => qtreel.entreprise_id == id && qtreel.date_debut_exectuion_definitif != null && qtreel.date_reception_provisoire_definitif != null && this.nombreDejourCalcule(qtreel.date_debut_exectuion_definitif,qtreel.date_reception_definitive) == qtreel.duree && this.MarcheAcheve(qtreel.marche_id)==5).length;
        }
        return 0
      };
    },


MontantDeMarcheAcheveDansLeDelai() {
      return id => {
        if (id != null && id != "") {
           return this.getterActeEffetFinanciers.filter(qtreel => qtreel.entreprise_id == id && qtreel.date_debut_exectuion_definitif != null && qtreel.date_reception_provisoire_definitif != null && this.nombreDejourCalcule(qtreel.date_debut_exectuion_definitif,qtreel.date_reception_definitive) == qtreel.duree && this.MarcheAcheve(qtreel.marche_id) == 5).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_act), 0).toFixed(0);
        }
        return 0
      };
    },


 NombreDeMarcheAcheveHorsLeDelai() {
      return id => {
        if (id != null && id != "") {
           return this.getterActeEffetFinanciers.filter(qtreel => qtreel.entreprise_id == id && qtreel.date_debut_exectuion_definitif != null && qtreel.date_reception_provisoire_definitif != null && qtreel.duree < this.nombreDejourCalcule(qtreel.date_debut_exectuion_definitif,qtreel.date_reception_definitive) && this.MarcheAcheve(qtreel.marche_id)==5).length;
        }
        return 0
      };
    },


MontantDeMarcheAcheveHorsLeDelai() {
      return id => {
        if (id != null && id != "") {
           return this.getterActeEffetFinanciers.filter(qtreel => qtreel.entreprise_id == id && qtreel.date_debut_exectuion_definitif != null && qtreel.date_reception_provisoire_definitif != null && qtreel.duree < this.nombreDejourCalcule(qtreel.date_debut_exectuion_definitif,qtreel.date_reception_definitive)  && this.MarcheAcheve(qtreel.marche_id) == 5).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_act), 0).toFixed(0);
        }
        return 0
      };
    },




dateMiseService() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterActeEffetFinanciers.find(qtreel => qtreel.entreprise_id == id);

      if (qtereel) {
        return qtereel.date_debut_exectuion_definitif;
      }
      return 0
        }
      };
    },
    

    afficherDateDuJour(){
let date = new Date();
        let aaaa = date.getFullYear();
        let gg = date.getDate();
        let mm = (date.getMonth() + 1);
        let moi;
        let jour;
        if (gg < 10)
        {
            jour = "0" + gg;
        }else{
            jour = gg
        }


        if (mm < 10)
        {
            moi = "0" + mm;
        }else{
            moi=mm;
        }


        let cur_day =  aaaa + "-" + moi + "-" + jour;

        return cur_day


    
   
   },



MarcheAcheve() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.attribue;
      }
      return 0
        }
      };
    },

TypeMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.type_marche_id;
      }
      return 0
        }
      };
    },
listeUa() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.unite_administrative_id;
      }
      return 0
        }
      };
    },






 TauxMarcheNonDemarre(){
     return service =>{
        if(service[0]){
          let montant=((parseFloat(this.NombreDeMarcheRecu(this.service[0].entreprise_id))/parseFloat(this.MarcheNonDemarre(this.service[0].entreprise_id)))*100)
          return  montant
        }
        return 0
     }
   },
ListeEntreprisePopulaire(){
  return id => {
    if(id !=""){
    return this.GroupeEntreprise.filter(element => element[0].entreprise_id == id); 
      
    }
    return this.GroupeEntreprise
  }
},


NombreDeMarcheRecu() {
      return id => {
        if (id != null && id != "") {
           return this.getterActeEffetFinanciers.filter(qtreel => qtreel.entreprise_id == id).length;
        }
      };
    },

 listeArrayDesc(){
    let collection=[];
 //console.log(this.GroupeEntreprise)
    this.groupeEntreprise2.forEach(function(val){
      let objet={
         entreprise_id:val[0].entreprise_id,
         nbr_marche:val.length,
         marche_id:val[0].marche_id,
      }
      collection.push(objet)
    })
    collection.sort(function(x, y) {
    return y.nbr_marche - x.nbr_marche;
    
  });
  return collection
 },
MarcheNonDemarre() {
      return id => {
        if (id != null && id != "") {
           return this.getterActeEffetFinanciers.filter(qtreel => qtreel.entreprise_id == id && qtreel.date_debut_exectuion_definitif == null).length;
        }
        return 0
      };
    },
   
    NombreMarcheEnCoursEecution() {
      return id => {
        if (id != null && id != "") {
           return this.getterActeEffetFinanciers.filter(qtreel => qtreel.entreprise_id == id && qtreel.date_debut_exectuion_definitif != null).length;
        }
        return 0
      };
    },
     MontantMarcheEnCoursEecution() {
      return id => {
        if (id != null && id != "") {
           return this.getterActeEffetFinanciers.filter(qtreel => qtreel.entreprise_id == id && qtreel.date_debut_exectuion_definitif != null).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_act), 0).toFixed(0);
        }
        return 0
      };
    },
MontantMarcheNonDemarre() {
      return id => {
        if (id != null && id != "") {
           return this.getterActeEffetFinanciers.filter(qtreel => qtreel.entreprise_id == id && qtreel.date_debut_exectuion_definitif == null).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_act), 0).toFixed(0);
        }
        return 0
      };
    },
 RaisonSocialEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.raison_sociale;
      }
      return 0
        }
      };
    },
MontantMarcheObtenu() {
      return id => {
        if (id != null && id != "") {
           return this.getterActeEffetFinanciers.filter(qtreel => qtreel.entreprise_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_act), 0).toFixed(0);
        }
      };
    },
  
 ListeDEsEntreprise(){

                let vM=this;
                let objet=this.listeArrayDesc

                //retourne la section selectionner
              
                if(this.entre_id!="" && this.typemarche_id=="" && this.uniteAdministrative_id==""){
                  
                    objet =objet.filter(item=>{
                        if(item.entreprise_id==vM.entre_id){
                            return item
                        }
                    })
                 
                }
              if(this.entre_id=="" && this.typemarche_id!="" && this.uniteAdministrative_id==""){
                  
                    objet =objet.filter(item=>{
                        if(this.TypeMarche(item.marche_id)==vM.typemarche_id){
                            return item
                        }
                    })
                
                }
                if(this.entre_id=="" && this.typemarche_id=="" && this.uniteAdministrative_id!=""){
                  
                    objet =objet.filter(item=>{
                        if(this.listeUa(item.marche_id)==vM.uniteAdministrative_id){
                            return item
                        }
                    })
                  
                }
               if(this.entre_id!="" && this.typemarche_id!="" && this.uniteAdministrative_id!=""){
                  
                    objet =objet.filter(item=>{
                        if(this.listeUa(item.marche_id)==vM.uniteAdministrative_id && this.TypeMarche(item.marche_id)==vM.typemarche_id && item.entreprise_id==vM.entre_id){
                            return item
                        }
                    })
                 
                }
                 if(this.entre_id!="" && this.typemarche_id!="" && this.uniteAdministrative_id==""){
                  
                    objet =objet.filter(item=>{
                        if(this.TypeMarche(item.marche_id)==vM.typemarche_id && item.entreprise_id==vM.entre_id){
                            return item
                        }
                    })
                  
                }
                 if(this.entre_id!="" && this.typemarche_id=="" && this.uniteAdministrative_id!=""){
                  
                    objet =objet.filter(item=>{
                        if(this.listeUa(item.marche_id)==vM.uniteAdministrative_id==vM.uniteAdministrative_id && item.entreprise_id==vM.entre_id){
                            return item
                        }
                    })
                  
                }
                if(this.entre_id=="" && this.typemarche_id!="" && this.uniteAdministrative_id!=""){
                  
                    objet =objet.filter(item=>{
                        if(this.listeUa(item.marche_id)==vM.uniteAdministrative_id==vM.uniteAdministrative_id && this.TypeMarche(item.marche_id)==vM.typemarche_id){
                            return item
                        }
                    })
                  
                }
                return objet
            },

              nombreDejourCalcule(){
                return (date1,date2)=>{
                     if(!date2){
                         let date_day=new Date()
                         date2= this.formatDate(date_day)
                        console.log(date2)
                     }
                      if(date1==null) return null;

                          let date_debut=new Date(date1)
                          let date_fin = new Date(date2)
                   // let diffDays = date_fin.getDate() - date_debut.getDate();
                    var timeDiff = date_fin.getTime() - date_debut.getTime();
                    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

                    if (isNaN(diffDays)) return null;
                         if (parseFloat(diffDays) <0 ) return diffDays

                     return diffDays
                }

            },
              formatDate() {
                return date=>{
                    var d = new Date(date),
                        month = '' + (d.getMonth() + 1),
                        day = '' + d.getDate(),
                        year = d.getFullYear();

                    if (month.length < 2)
                        month = '0' + month;
                    if (day.length < 2)
                        day = '0' + day;

                    return [year, month, day].join('-');
                }
            },
            ecartDateDefinitiveEffective(){
                return id=>{
                    if(id){
                        
                        let objet=this.listeActeEffectFinnancier(id)
                        if(objet){
                            console.log(objet.date_reception)
                            let jour=this.nombreDejourCalcule(this.afficherDateDuJour,objet.date_fin_exe)
                            return jour;
                        }
                        return ""
                    }
                }
            },

             NombreDeMarcheSuppendu() {
      return id => {
        if (id != null && id != "") {
           return this.getterActeEffetFinanciers.filter(qtreel => qtreel.entreprise_id == id  && this.MarcheAcheve(qtreel.marche_id)==7).length;
        }
        return 0
      };
    },


MontantDeMarcheSuppendu() {
      return id => {
        if (id != null && id != "") {
           return this.getterActeEffetFinanciers.filter(qtreel => qtreel.entreprise_id == id   && this.MarcheAcheve(qtreel.marche_id) == 7).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_act), 0).toFixed(0);
        }
        return 0
      };
    },
  },
  methods: {
      ...mapActions("uniteadministrative", [
     
    ]),

    
    DureeEcoule(id){
     

      var dateF = new Date(this.afficherDateDuJour).getTime()
      var dateO = new Date(this.dateMiseService(id)).getTime()
      var resultat = dateF - dateO

      var diffJour =  resultat / (1000 * 3600 * 24)

      if(isNaN(diffJour)) return null

      if(parseFloat(diffJour) < 0 ) return "durée invalide"
      
      return  diffJour;

    },
        genererEnPdf(){
  this.$htmlToPaper('printMe');
},
    formatageSomme: formatageSomme,

    filter(){
                this.affiche_filtre=!this.affiche_filtre
               
               
               
            },
            
VidetypeMarche(){
                this.typemarche_id=""
            },
        videUniteadministrative(){
                this.uniteAdministrative_id=""
            },
            VideEntreprise(){
                this.entre_id=""
            },
  }
};
</script>



<style>
.deplaceCar1 {
  margin: 0 50px;
}
.deplaceCar {
  margin: 0 120px;
}
</style>
