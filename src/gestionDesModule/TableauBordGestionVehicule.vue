valeurAcquisitionMateriel
<template>
  <div class="container-fluid">
   <div  class="row-fluid" v-if="affiche_filtre" style="margin-top: -20px">
                <div class="span1">

                </div>
                <div class="span10 " style="background: #f0c71d !important;">
                    <table class="table table-striped"  style="background: #f0c71d !important;">
                        <tbody>
                        <tr>
                            <!-- <td style="background: #f0c71d !important;">

                                <label>CF<a href="#" @click.prevent="videTypeCF()" v-if="controlleur_fin" style="color: red"><i class="fa fa-trash-o"></i></a></label>
                                <model-list-select style="background-color: #fff;"
                                                   class="wide"
                                                   :list="listeCF"
                                                   v-model="controlleur_fin"
                                                   option-value="id"
                                                   option-text="name"
                                                   placeholder="Controleur financier"
                                >

                                </model-list-select>
                            </td> -->
                            <td style="background: #f0c71d !important;">
                                <label>Section
                                </label>
                                <model-list-select style="background-color: #fff;"
                                                   class="wide"
                                                   :list="sections"
                                                   v-model="formData.section_id"
                                                   option-value="id"
                                                   option-text="nom_section"
                                                   placeholder="Section"
                                >

                                </model-list-select>
                            </td>
                            <td style="background: #f0c71d !important;">
                                <label>Unite d'Administrative
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
                            </td>
                            <!-- <td style="background: #f0c71d !important;">
                                <label>Regions <a href="#" @click.prevent="videRegions()" v-if="region" style="color: red"><i class="fa fa-trash-o"></i></a>
                                </label>
                                <model-list-select style="background-color: #fff;"
                                                   class="wide"
                                                   :list="regions"
                                                   v-model="region"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder="Regions"
                                >

                                </model-list-select>
                            </td> -->
                            <!-- <td style="background: #f0c71d !important;">
                                <label>Infrastructure <a href="#" @click.prevent="videInfrastructure()" v-if="infrastructure" style="color: red"><i class="fa fa-trash-o"></i></a>
                                </label>
                                <model-list-select style="background-color: #fff;"
                                                   class="wide"
                                                   :list="getterInfrastrucure"
                                                   v-model="infrastructure"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder="Infrastructure"
                                >

                                </model-list-select>
                            </td> -->
                            <!-- <td style="background: #f0c71d !important;">
                                <label>Type Marché  <a href="#" @click.prevent="videTypeMarche()" v-if="type_marche" style="color: red"><i class="fa fa-trash-o"></i></a>
                                </label>
                                <model-list-select style="background-color: #fff;"
                                                   class="wide"
                                                   :list="typeMarches"
                                                   v-model="type_marche"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder="Type Marche"
                                >

                                </model-list-select>
                            </td> -->

                        </tr>

                        </tbody>
                    </table>

                </div>


            </div>
            <br/>
             <br/>
             <h1 style="text-align='center'">TABLEAU DE BORD</h1>
   <table class="table table-bordered table-striped">
<thead>
                  <tr>
                   <th></th>
                   <th>Nombre de biens</th>
                    <th>Valeur d'Acquisition</th>
                    <th>Valeur nette comptable</th>
                    <th>Taux d'équipement</th>
                    <th>Taux d'usure</th>
                    <th>Taux de réparation</th>
                    <th>Taux d'inventaire</th>
                  </tr>
                </thead>
                
                <tr>
                     <th  style="width:15%;text-align:left;font-weight:bold;font-size:16px">BIENS INCORPORELS  (A)</th>
                     <td style="width:10%;text-align:center;font-weight:bold;font-size:16px">{{0}} </td>
                     <td style="width:10%;text-align:center;font-weight:bold;font-size:16px">{{formatageSomme(parseFloat(0))}} </td>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                 </tr>
                 <tr>
                     <th  style="width:5%"></th>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                 </tr>
                 <tr>
                     <th  style="width:15%;text-align:left;font-weight:bold;font-size:16px">BIENS CORPORELS  (B)</th>
                     <td style="width:10%;text-align:center;font-weight:bold;font-size:16px"> {{(parseFloat(NombreEquipementParMobilier(unite_administrative_id))+parseFloat(NombreEquipementParMateriel(unite_administrative_id))+parseFloat(NombreVehiculeParUa(unite_administrative_id))+parseFloat(NombreEquipementParImmobilier(unite_administrative_id))+parseFloat(NombreEquipementParGrosTravaux(unite_administrative_id)))}}</td>
                      <td style="width:10%;text-align:center;font-weight:bold;font-size:16px"> {{formatageSomme(parseFloat(parseFloat(PrixEquipementParMobilier(unite_administrative_id))+parseFloat(PrixEquipementParMateriel(unite_administrative_id))+parseFloat(PrixVehiculeParUa(unite_administrative_id))+parseFloat(PrixEquipementParImmobilier(unite_administrative_id))+parseFloat(PrixEquipementParGrosTravaux(unite_administrative_id))))}}</td>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                     
                 </tr>
                <tr>
                     <th  style="width:10%;text-align:right;">MOBILIER</th>
                     <td style="width:15%;text-align:center;"> {{NombreEquipementParMobilier(unite_administrative_id)}}</td>
                     <td style="width:15%;text-align:center;"> {{formatageSomme(parseFloat(PrixEquipementParMobilier(unite_administrative_id)))}}</td>
                     <td style="width:15%;text-align:center;"> {{formatageSomme(parseFloat(0))}} </td>
                     <td style="width:15%;text-align:center;">0%</td>
                     
                     
                     <td style="width:15%;text-align:center;"> 0% </td>
                     <td style="width:15%;text-align:center;"> 0%</td>
                     <td style="width:15%">0% </td>
                 </tr>
                 <tr>
                     <th  style="width:10%;text-align:right;">MATERIEL</th>
                     <td style="width:15%;text-align:center;"> {{NombreEquipementParMateriel(unite_administrative_id)}}</td>
                     <td style="width:15%;text-align:center;"> {{formatageSomme(parseFloat(PrixEquipementParMateriel(unite_administrative_id)))}}</td>
                     <td style="width:15%;text-align:center;"> {{formatageSomme(parseFloat(0))}}</td>
                     <td style="width:15%;text-align:center;">{{(EquipementNormeCouvert/(nombreDeMaterielCouvert(unite_administrative_id))*100)}}%</td>
                     <td style="width:15%;text-align:center;"> 0%</td>
                     <td style="width:15%;text-align:center;"> 0%</td>
                     <td style="width:15%;text-align:center;">0% </td>
                 </tr>
                 <tr>
                     <th  style="width:10%;text-align:right;">VEHICULES</th>
                     <td style="width:15%;text-align:center;"> {{NombreVehiculeParUa(unite_administrative_id)}}</td>
                     <td style="width:15%;text-align:center;"> {{formatageSomme(parseFloat(PrixVehiculeParUa(unite_administrative_id)))}}</td>
                     <td style="width:15%;text-align:center;">{{formatageSomme(parseFloat(0))}} </td>
                     <td style="width:15%;text-align:center;">{{(EquipementNormeCouvert/(nombreDeMaterielCouvert(unite_administrative_id))*100)}}%</td>
                     <td style="width:15%;text-align:center;">0% </td>
                     <td style="width:15%;text-align:center;">0% </td>
                     <td style="width:15%;text-align:center;">0% </td>
                 </tr>
                  <tr>
                     <th  style="width:10%;text-align:right;">IMMOBILIER</th>
                     <td style="width:15%;text-align:center;">{{NombreEquipementParImmobilier(unite_administrative_id)}} </td>
                     <td style="width:15%;text-align:center;"> {{formatageSomme(parseFloat(PrixEquipementParMateriel(unite_administrative_id)))}}</td><td style="width:15%;text-align:center;"> </td>
                     <td style="width:15%;text-align:center;">{{(EquipementNormeCouvert/(nombreDeMaterielCouvert(unite_administrative_id))*100)}}%</td>
              <td style="width:15%;text-align:center;">{{(EquipementNormeCouvert/(nombreDeMaterielCouvert(unite_administrative_id))*100)}}%</td>
                     <td style="width:15%;text-align:center;"> 0%</td>
                     <td style="width:15%;text-align:center;">0%</td>
                     
                 </tr>
                  <tr>
                     <th  style="width:10%;text-align:right;">GROS TRAVAUX</th>
                     <td style="width:15%;text-align:center;"> {{NombreEquipementParGrosTravaux(unite_administrative_id)}} </td>
                     <td style="width:15%;text-align:center;"> {{formatageSomme(parseFloat(PrixEquipementParMateriel(unite_administrative_id)))}}</td>
                     <td style="width:15%;text-align:center;">{{formatageSomme(parseFloat(0))}} </td>
                     <td style="width:15%;text-align:center;">{{(EquipementNormeCouvert/(nombreDeMaterielCouvert(unite_administrative_id))*100)}}%</td>
                     <td style="width:15%;text-align:center;">0%</td>
                     <td style="width:15%;text-align:center;">0% </td>
                    <td style="width:15%;text-align:center;"> 0%</td>
                 </tr>
                 <tr>
                     <th  style="width:15%;text-align:center;font-weight:bold;font-size:16px">TOTAL  (A+B)</th>
                     <td style="width:10%;text-align:center;font-weight:bold;font-size:16px;background-color: coral;color:#000;">{{(parseFloat(NombreEquipementParMobilier(unite_administrative_id))+parseFloat(NombreEquipementParMateriel(unite_administrative_id))+parseFloat(NombreVehiculeParUa(unite_administrative_id))+parseFloat(NombreEquipementParImmobilier(unite_administrative_id))+parseFloat(NombreEquipementParGrosTravaux(unite_administrative_id)))}} </td>
                     <td style="width:10%;text-align:center;font-weight:bold;font-size:16px;background-color: coral;color:#000;"> {{formatageSomme(parseFloat(parseFloat(PrixEquipementParMobilier(unite_administrative_id))+parseFloat(PrixEquipementParMateriel(unite_administrative_id))+parseFloat(PrixVehiculeParUa(unite_administrative_id))+parseFloat(PrixEquipementParImmobilier(unite_administrative_id))+parseFloat(PrixEquipementParGrosTravaux(unite_administrative_id))))}}</td>
                     <td style="width:10%;text-align:center;font-weight:bold;font-size:16px;background-color: coral;color:#000;"> {{formatageSomme(parseFloat(0))}}</td>
                     <td style="width:10%;text-align:center;font-weight:bold;font-size:16px;background-color: coral;color:#000;"> </td>
                     <td style="width:10%;text-align:center;font-weight:bold;font-size:16px;background-color: coral;color:#000;"> </td>
                     <td style="width:10%;text-align:center;font-weight:bold;font-size:16px;background-color: coral;color:#000;"> </td>
                     <td style="width:10%;text-align:center;font-weight:bold;font-size:16px;background-color: coral;color:#000;"> </td>
                 </tr>
</table>   

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
import { mapGetters } from "vuex";

import {formatageSomme} from '../../src/Repositories/Repository';
import {admin,dcf,cf,noDCfNoAdmin} from '../../src/Repositories/Auth';
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
       status_marches:"",
                unite_administrative_id:"",
                infrastructure:"",
                type_marche:"",
                region:"",
                info_status_marche:"",
                tableMarcheStatue:"",
                listeDesMarchePasStatus:'',
                affiche_filtre:false,
                affiche_boutton_filtre:true,
                status_marche:"",
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

  computed: {
    ...mapGetters("SuiviImmobilisation", [
    
      "immobilisations",
      "ficheArticle",
      "normeEquipements"
     
      
    ]),
     ...mapGetters('parametreGenerauxAdministratif', ['getterplanOrganisationUa','sections']) ,
    admin:admin,
      dcf:dcf,
      cf:cf,
      noDCfNoAdmin:noDCfNoAdmin,
 ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),

    ...mapGetters("personnelUA", ["personnaliseActeurDepense","acte_personnels","all_acteur_depense","acteur_depenses","personnaFonction","fonctions"]),

 ...mapGetters("uniteadministrative", ["getvehicules","uniteAdministratives","directions","servicesua","uniteZones"]),
  
 listeDesBien() {
      
        if (this.noDCfNoAdmin ){
            let colect=[];
            this.immobilisations.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.uniteadministrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
               
            })
         
          return colect;
      
      
          }
         
         // return this.getvehicules.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.prix_unitaire), 0).toFixed(0);
        
          return this.immobilisations;
      
     
    },

nombreDeMaterielCouvert() {
      return id => {
        if (id != null && id != "") {
           return this.listeDesBien.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.typebien_id == 1).length;

        }
        return this.immobilisations.length

      };
      
    },
EquipementNormeCouvert() {
      
           return this.normeEquipements.filter(qtreel => this.idTypeBien(qtreel.famille_id) == 1).length;

    },

idTypeBien() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.ficheArticle.find(qtreel => qtreel.article_id == id);

      if (qtereel) {
        return qtereel.type_bien
      }
      return 0
        }
      };
    },



  nombreDeVehicule() {
      
        if (this.noDCfNoAdmin ){
            let colect=[];
            this.getvehicules.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.uniteadministrative)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
               
            })
         
          return colect;
      
      
          }
         
         // return this.getvehicules.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.prix_unitaire), 0).toFixed(0);
        
          return this.getvehicules;
      
     
    },

nombreDarticleMobilier() {
      
        if (this.noDCfNoAdmin ){
            let colect=[];
            this.ficheArticle.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
               
            })
         
          return colect;
      
      
          }
         
         // return this.ficheArticle.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.prix_unitaire), 0).toFixed(0);
        
          return this.ficheArticle;
      
     
    },


NombreVehiculeParUa() {
      return id => {
        if (id != null && id != "") {
           return this.nombreDeVehicule.filter(element => element.uniteadministrative == id).length;

        }
        return this.getvehicules.length
      };
    },
PrixVehiculeParUa() {
      return id => {
        if (id != null && id != "") {
           return this.nombreDeVehicule.filter(element => element.uniteadministrative == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.prixunitaire), 0).toFixed(0);

        }
        return this.getvehicules.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.prixunitaire), 0).toFixed(0);
      };
    },

NombreEquipementParMobilier() {
      return id => {
        if (id != null && id != "") {
           return this.nombreDarticleMobilier.filter(element => element.ua_id == id && element.type_bien == 3).length;

        }
        return this.ficheArticle.filter(element =>element.type_bien == 3).length
      };
    },
NombreEquipementParMateriel() {
      return id => {
        if (id != null && id != "") {
           return this.nombreDarticleMobilier.filter(element => element.ua_id == id && element.type_bien == 1).length;

        }
        return this.ficheArticle.filter(element =>element.type_bien == 1).length
      };
    },
    NombreEquipementParImmobilier() {
      return id => {
        if (id != null && id != "") {
           return this.nombreDarticleMobilier.filter(element => element.ua_id == id && element.type_bien == 4).length;

        }
        return this.ficheArticle.filter(element =>element.type_bien == 4).length
      };
    },
NombreEquipementParGrosTravaux() {
      return id => {
        if (id != null && id != "") {
           return this.nombreDarticleMobilier.filter(element => element.ua_id == id && element.type_bien == 5).length;

        }
        return this.ficheArticle.filter(element =>element.type_bien == 5).length
      };
    },


// calculeDeValeurNetComptable(){
//   let mv=this;
//       let valeur_net_compta=0
//       this.nombreDarticleMobilier.forEach(function (val) {
//           let durre=vm.nombreDejourCalculeModifier(val)
//       })  
// },
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
nombreDejourCalculeModifier(){
  return date_service=>{
 let vM=this;
  
      // if(vM.formData.date_mise_service !="" ) return 0
      // if(vM.formData.date_mise_service =="" ) return null

      var dateF = new Date(this.afficherDateDuJour).getTime()
      var dateO = new Date(date_service).getTime()
      var resultat = dateF - dateO

      var diffJour =  resultat / (1000 * 3600 * 24)
       console.log(diffJour)
      if(isNaN(diffJour)) return null

      if(parseFloat(diffJour) < 0 ) return "inv"
      vM.formData.duree=diffJour
      return  diffJour;
  }
      

    },







PrixEquipementParMobilier() {
      return id => {
        if (id != null && id != "") {
           return this.nombreDarticleMobilier.filter(element => element.ua_id == id && element.type_bien == 3).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.prix_unitaire), 0).toFixed(0);

        }
        return this.ficheArticle.filter(element =>element.type_bien == 3).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.prix_unitaire), 0).toFixed(0);
      };
    },
PrixEquipementParMateriel() {
      return id => {
        if (id != null && id != "") {
           return this.nombreDarticleMobilier.filter(element => element.ua_id == id && element.type_bien == 1).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.prix_unitaire), 0).toFixed(0);

        }
        return this.ficheArticle.filter(element =>element.type_bien == 1).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.prix_unitaire), 0).toFixed(0);
      };
    },
    PrixEquipementParImmobilier() {
      return id => {
        if (id != null && id != "") {
           return this.nombreDarticleMobilier.filter(element => element.ua_id == id && element.type_bien == 4).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.prix_unitaire), 0).toFixed(0);

        }
        return this.ficheArticle.filter(element =>element.type_bien == 4).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.prix_unitaire), 0).toFixed(0);
      };
    },
PrixEquipementParGrosTravaux() {
      return id => {
        if (id != null && id != "") {
           return this.nombreDarticleMobilier.filter(element => element.ua_id == id && element.type_bien == 5).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.prix_unitaire), 0).toFixed(0);

        }
        return this.ficheArticle.filter(element =>element.type_bien == 5).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.prix_unitaire), 0).toFixed(0);
      };
    },






















  filtre_unite_admin() {
                if(this.noDCfNoAdmin){
                    let colect=[];
                    let vM=this
                    this.uniteAdministratives.filter(item=>{
                        
                        if(vM.getterUniteAdministrativeByUser.length>0){
                            let val= vM.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.id)
                            if (val!=undefined){
                                colect.push(item)
                                return item
                            }
                        }

                    })
                    return colect
                }
                return this.uniteAdministratives
            },
valeurAcquisitionMateriel() {
      
        if (this.noDCfNoAdmin ){
            let colect=[];
            this.ficheArticle.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
               
            })
            return id => {
        if (id != null && id != "") {
          return colect.filter(element => element.ua_id == id ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.prix_unitaire), 0).toFixed(0);
        }
        return 0
      };
      
          }
         
         // return this.ficheArticle.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.prix_unitaire), 0).toFixed(0);
          return id => {
        if (id != null && id != "") {
          return this.ficheArticle.filter(element => element.ua_id == id ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.prix_unitaire), 0).toFixed(0);
        }
        return 0
      };
     
    },
    valeurAcquisitionVehicule() {
      
        if (this.noDCfNoAdmin ){
            let colect=[];
            this.getvehicules.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
               
            })
            return id => {
        if (id != null && id != "") {
          return colect.filter(element => element.ua_id == id ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.prix_unitaire), 0).toFixed(0);
        }
        return 0
      };
          }
             return id => {
        if (id != null && id != "") {
          return this.getvehicules.filter(element => element.ua_id == id ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.prix_unitaire), 0).toFixed(0);
        }
        return 0
      };
         // return this.getvehicules.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.prix_unitaire), 0).toFixed(0);
       
     
    },
  },
  methods: {
    formatageSomme: formatageSomme,

    filter(){
                this.affiche_filtre=!this.affiche_filtre
               
               
               
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
