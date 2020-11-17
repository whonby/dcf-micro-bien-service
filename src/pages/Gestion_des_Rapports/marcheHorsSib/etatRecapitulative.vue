
<template>
  <div>
     <div align="center" > <h4> FICHE D'ETAT RECAPITULATIF DES MARCHES - UNITE ADMINISTRATIVE</h4> </div>
   <table class="table table-bordered table-striped">
               
                <tr>
                    <td>
                         <div class="control-group">
            <label class="control-label">EXERCICE BUDGETAIRE</label>
            <div class="controls">
             <select  class="span4" v-model="formData.exo">
                      <option></option>                       
                     <option
                        v-for="typeUniteA in exercices_budgetaires"
                        :key="typeUniteA.id"
                        :value="typeUniteA.annee"
                      >{{typeUniteA.annee}}</option>
                    </select>
            </div>
          </div>
                    </td>
                     <td colspan="">
                         <div class="control-group">
            <label class="control-label">TYPE UNITE ADMINISTRATIVE </label>
            <div class="controls">
             <select  class="span4" v-model="formData.typeua_id">
                      <option></option>
                      <option
                        v-for="typeUniteA in type_Unite_admins"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
            </div>
          </div>
                    </td>
                    <td colspan="">
                         <div class="control-group">
            <label class="control-label">UNITE ADMINISTRATIVE </label>
            <div class="controls">
             <select  class="span4" v-model="formData.ua_id">
                      <option></option>
                      <option
                        v-for="typeUniteA in FiltreUaParTypeUa(formData.typeua_id)"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
            </div>
          </div>
                    </td>
                   
                    <td>
                         <div class="control-group">
            <label class="control-label">SECTION</label>
            <div class="controls">
            <input
                type="text"
               :value="afficheSection(afficheSectionid(formData.ua_id))"
                class="span4"
                readonly
              />
            </div>
          </div>
                    </td>
                   
                    
                </tr>
                
              </table>
             
              <div align="right" >

      <button class="btn btn-info" @click.prevent="genererEnPdf()" v-if="formData.ua_id != ''">Exporter en PDF</button>


                            </div>
    <div id="printMe"   v-if="formData.ua_id != '' ">
         
                        <div align="center"> <h4> FICHE D'ETAT RECAPITULATIF DES MARCHES - UNITE ADMINISTRATIVE : {{libelleUa(formData.ua_id)}}</h4> </div>
                      
                      <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <!-- <download-excel
            class="btn btn-default pull-right"
            style="cursor:pointer;"
            :fields="json_fields"
            title="Liste type texte"
            :data="filtre_type_teste"
            name="Liste type texte"
            worksheet="Liste type texte"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel> -->
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>ETAT RECAPITULATIF</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search" placeholder="Saisie code ou libelle" v-model="search" />
              </div> -->
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                      <th></th>
                    <th>NOMBRE DE MARCHES PREVUS</th>
                    <th>MONTANT PREVUS</th>
                    <th>NOMBRE DE MARCHES APPROUVE</th>
                     <th>MONTANT APPROUVE</th>
                    <th>NOMBRE DE MARCHES RESTANTS</th>
                    <th>MONTANT RESTANT</th>
                     <th>NOMBRE DE MARCHES ACHEVES</th>
                    <th>MONTANT ACHEVE</th>
                    
                  </tr>
                </thead>
                <tbody>
                             <tr>
    <td height="10px"  style="color:#000000;font-size:16px;;font-weight:bold">TRAVAUX</td>
    
     <td height="10px" style="text-align:center;font-size:14px;font-weight:bold">{{NOMBREDEMARCHESPREVUSTRAVAUX(formData.ua_id)}}</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold">{{formatageSomme(parseFloat(MONTANTPREVUSTRAVAUX(formData.ua_id)))}}</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold">{{NOMBREDEMARCHESAPPROUVETRAVAUX(formData.ua_id)}}</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold">{{formatageSomme(parseFloat(MONTANTAPPROUVETRAVAUX(formData.ua_id)))}}</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold">{{parseFloat(NOMBREDEMARCHESPREVUSTRAVAUX(formData.ua_id))-parseFloat(NOMBREDEMARCHESAPPROUVETRAVAUX(formData.ua_id))}}</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold">{{formatageSomme(parseFloat(MONTANTPREVUSTRAVAUX(formData.ua_id))-parseFloat(MONTANTAPPROUVETRAVAUX(formData.ua_id)))}}</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold">{{NOMBREDEMARCHESACHEVESTRAVAUX(formData.ua_id)}}</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold">{{MONTANTACHEVETRAVAUX(formData.ua_id)}}</td>
  
      
 </tr>
                         <tr>
    <td height="10px"  style=";font-weight:bold;font-size:16px;color:#000;">FOURNITURES</td>
    
     <td height="10px" style="text-align:center;font-size:14px;font-weight:bold">{{NOMBREDEMARCHESPREVUSFOURNITURES(formData.ua_id)}}</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold">{{formatageSomme(parseFloat(MONTANTPREVUSFOURNITURES(formData.ua_id)))}}</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold">{{NOMBREDEMARCHESAPPROUVEFOURNITURES(formData.ua_id)}}</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold">{{formatageSomme(parseFloat(MONTANTAPPROUVEFOURNITURES(formData.ua_id)))}}</td>
   <td height="10px" style="text-align:center;font-size:14px;font-weight:bold">{{parseFloat(NOMBREDEMARCHESPREVUSFOURNITURES(formData.ua_id))-parseFloat(NOMBREDEMARCHESAPPROUVEFOURNITURES(formData.ua_id))}}</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold">{{formatageSomme(parseFloat(MONTANTPREVUSFOURNITURES(formData.ua_id))-parseFloat(MONTANTAPPROUVEFOURNITURES(formData.ua_id)))}}</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold">{{NOMBREDEMARCHESACHEVESFOURNITURES(formData.ua_id)}}</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold">{{MONTANTACHEVEFOURNITURES(formData.ua_id)}}</td>
 
  
      
 </tr>
                         <tr>
    <td height="10px"  style="color:#000;font-size:16px;font-weight:bold">SERVICES ASSIMILES</td>
    
     <td height="10px" style="text-align:center;font-size:14px;font-weight:bold">{{NOMBREDEMARCHESPREVUSSERVICES(formData.ua_id)}}</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold">{{formatageSomme(parseFloat(MONTANTPREVUSSERVICES(formData.ua_id)))}}</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold">{{NOMBREDEMARCHESAPPROUVESERVICES(formData.ua_id)}}</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold">{{formatageSomme(parseFloat(MONTANTAPPROUVESERVICES(formData.ua_id)))}}</td>
 <td height="10px" style="text-align:center;font-size:14px;font-weight:bold">{{parseFloat(NOMBREDEMARCHESPREVUSSERVICES(formData.ua_id))-parseFloat(NOMBREDEMARCHESAPPROUVESERVICES(formData.ua_id))}}</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold">{{formatageSomme(parseFloat(MONTANTPREVUSSERVICES(formData.ua_id))-parseFloat(MONTANTAPPROUVESERVICES(formData.ua_id)))}}</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold">{{NOMBREDEMARCHESACHEVESSERVICES(formData.ua_id)}}</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold">{{MONTANTACHEVESERVICES(formData.ua_id)}}</td>
  
  
      
 </tr>
                         <tr>
    <td height="10px"  style="color:#000;font-size:16px;font-weight:bold">CONSULTANTS</td>
    
     <td height="10px" style="text-align:center;font-size:14px;font-weight:bold">{{NOMBREDEMARCHESPREVUSPERSONNEL(formData.ua_id)}}</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold">{{formatageSomme(parseFloat(MONTANTPREVUSPERSONNEL(formData.ua_id)))}}</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold">{{NOMBREDEMARCHESAPPROUVEPERSONNEL(formData.ua_id)}}</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold">{{formatageSomme(parseFloat(MONTANTAPPROUVEPERSONNEL(formData.ua_id)))}}</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold">{{parseFloat(NOMBREDEMARCHESPREVUSPERSONNEL(formData.ua_id))-parseFloat(NOMBREDEMARCHESAPPROUVEPERSONNEL(formData.ua_id))}}</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold">{{formatageSomme(parseFloat(MONTANTPREVUSPERSONNEL(formData.ua_id))-parseFloat(MONTANTAPPROUVEPERSONNEL(formData.ua_id)))}}</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold">{{NOMBREDEMARCHESACHEVESPERSONNEL(formData.ua_id)}}</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold">{{MONTANTACHEVEPERSONNEL(formData.ua_id)}}</td>
 
  
      
 </tr>
                         <tr>
    <td height="10px"  style="color:#000;font-size:16px;background-color: coral;font-weight:bold">TOTAUX</td>
    
     <td height="10px" style="text-align:center;font-size:14px;font-weight:bold;background-color: coral;color:#000;">{{parseFloat(NOMBREDEMARCHESPREVUSTRAVAUX(formData.ua_id))+parseFloat(NOMBREDEMARCHESPREVUSPERSONNEL(formData.ua_id))+parseFloat(NOMBREDEMARCHESPREVUSSERVICES(formData.ua_id))+parseFloat(NOMBREDEMARCHESPREVUSFOURNITURES(formData.ua_id))}}</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold;background-color: coral;color:#000;">{{formatageSomme(parseFloat(MONTANTPREVUSTRAVAUX(formData.ua_id))+parseFloat(MONTANTPREVUSPERSONNEL(formData.ua_id))+parseFloat(MONTANTPREVUSSERVICES(formData.ua_id))+parseFloat(MONTANTPREVUSFOURNITURES(formData.ua_id)))}}</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold;background-color: coral;color:#000;">{{parseFloat(NOMBREDEMARCHESAPPROUVETRAVAUX(formData.ua_id))+parseFloat(NOMBREDEMARCHESAPPROUVEPERSONNEL(formData.ua_id))+parseFloat(NOMBREDEMARCHESAPPROUVESERVICES(formData.ua_id))+parseFloat(NOMBREDEMARCHESAPPROUVEFOURNITURES(formData.ua_id))}}</td>
    <td height="10px" style="text-align:center;font-size:14px;font-weight:bold;background-color: coral;color:#000;">{{formatageSomme(parseFloat(MONTANTAPPROUVETRAVAUX(formData.ua_id))+parseFloat(MONTANTAPPROUVEPERSONNEL(formData.ua_id))+parseFloat(MONTANTAPPROUVESERVICES(formData.ua_id))+parseFloat(MONTANTAPPROUVEFOURNITURES(formData.ua_id)))}}</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold;background-color: coral;color:#000;">{{parseFloat(parseFloat(NOMBREDEMARCHESPREVUSTRAVAUX(formData.ua_id))+parseFloat(NOMBREDEMARCHESPREVUSPERSONNEL(formData.ua_id))+parseFloat(NOMBREDEMARCHESPREVUSSERVICES(formData.ua_id))+parseFloat(NOMBREDEMARCHESPREVUSFOURNITURES(formData.ua_id)))-parseFloat(parseFloat(NOMBREDEMARCHESAPPROUVETRAVAUX(formData.ua_id))+parseFloat(NOMBREDEMARCHESAPPROUVEPERSONNEL(formData.ua_id))+parseFloat(NOMBREDEMARCHESAPPROUVESERVICES(formData.ua_id))+parseFloat(NOMBREDEMARCHESAPPROUVEFOURNITURES(formData.ua_id)))}}</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold;background-color: coral;color:#000;">{{formatageSomme(parseFloat(parseFloat(MONTANTPREVUSTRAVAUX(formData.ua_id))+parseFloat(MONTANTPREVUSPERSONNEL(formData.ua_id))+parseFloat(MONTANTPREVUSSERVICES(formData.ua_id))+parseFloat(MONTANTPREVUSFOURNITURES(formData.ua_id)))-parseFloat(parseFloat(MONTANTAPPROUVETRAVAUX(formData.ua_id))+parseFloat(MONTANTAPPROUVEPERSONNEL(formData.ua_id))+parseFloat(MONTANTAPPROUVESERVICES(formData.ua_id))+parseFloat(MONTANTAPPROUVEFOURNITURES(formData.ua_id))))}}</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold;background-color: coral;color:#000;">{{parseFloat(parseFloat(NOMBREDEMARCHESACHEVESPERSONNEL(formData.ua_id))+parseFloat(NOMBREDEMARCHESACHEVESSERVICES(formData.ua_id))+parseFloat(NOMBREDEMARCHESACHEVESFOURNITURES(formData.ua_id))+parseFloat(NOMBREDEMARCHESACHEVESTRAVAUX(formData.ua_id)))}}</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold;background-color: coral;color:#000;">{{formatageSomme(parseFloat(parseFloat(MONTANTACHEVEPERSONNEL(formData.ua_id))+parseFloat(MONTANTACHEVESERVICES(formData.ua_id))+parseFloat(MONTANTACHEVEFOURNITURES(formData.ua_id))+parseFloat(MONTANTACHEVETRAVAUX(formData.ua_id))))}}</td>
  
  
      
 </tr>
 <tr>
    <td height="10px"  style="color:#000;font-size:16px;background-color: coral;font-weight:bold">TOTAUX GLOBAL</td>
    
     <td height="10px" style="text-align:center;font-size:14px;font-weight:bold;background-color: coral;color:#000;">{{parseFloat(NOMBREDEMARCHESPREVUSGLOBAL)}}</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold;background-color: coral;color:#000;">{{formatageSomme(parseFloat(MONTANTPREVUSGLOBAL))}}</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold;background-color: coral;color:#000;">{{parseFloat(NOMBREDEMARCHESAPPROUVEGLOBAL)}}</td>
    <td height="10px" style="text-align:center;font-size:14px;font-weight:bold;background-color: coral;color:#000;">{{formatageSomme(parseFloat(MONTANTAPPROUVEGLOBAL))}}</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold;background-color: coral;color:#000;">{{parseFloat(NOMBREDEMARCHESPREVUSGLOBAL)-parseFloat(NOMBREDEMARCHESAPPROUVEGLOBAL)}}</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold;background-color: coral;color:#000;">{{formatageSomme(parseFloat(MONTANTPREVUSGLOBAL)-parseFloat(MONTANTAPPROUVEGLOBAL))}}</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold;background-color: coral;color:#000;">{{parseFloat(NOMBREDEMARCHESACHEVESGLOBAL)}}</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold;background-color: coral;color:#000;">{{formatageSomme(parseFloat(MONTANTACHEVEGLOBAL))}}</td>
  
  
      
 </tr>
                         <tr>
    <td height="10px"  style="color:#000;font-size:16px;background-color: #4bc302;font-weight:bold">POURCENTAGE</td>
    
     <td height="10px" style="text-align:center;font-size:14px;font-weight:bold;background-color: #4bc302;color:#000;">{{(parseFloat(parseFloat(parseFloat(NOMBREDEMARCHESPREVUSTRAVAUX(formData.ua_id))+parseFloat(NOMBREDEMARCHESPREVUSPERSONNEL(formData.ua_id))+parseFloat(NOMBREDEMARCHESPREVUSSERVICES(formData.ua_id))+parseFloat(NOMBREDEMARCHESPREVUSFOURNITURES(formData.ua_id)))/parseFloat(NOMBREDEMARCHESPREVUSGLOBAL))*100).toFixed(2)}} %</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold;background-color: #4bc302;color:#000;">{{(parseFloat(parseFloat(MONTANTPREVUSTRAVAUX(formData.ua_id))+parseFloat(MONTANTPREVUSPERSONNEL(formData.ua_id))+parseFloat(MONTANTPREVUSSERVICES(formData.ua_id))+parseFloat(MONTANTPREVUSFOURNITURES(formData.ua_id)))/parseFloat(MONTANTPREVUSGLOBAL)*100).toFixed(2)}} %</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold;background-color: #4bc302;color:#000;">{{(parseFloat(parseFloat(NOMBREDEMARCHESAPPROUVETRAVAUX(formData.ua_id))+parseFloat(NOMBREDEMARCHESAPPROUVEPERSONNEL(formData.ua_id))+parseFloat(NOMBREDEMARCHESAPPROUVESERVICES(formData.ua_id))+parseFloat(NOMBREDEMARCHESAPPROUVEFOURNITURES(formData.ua_id)))/parseFloat(NOMBREDEMARCHESAPPROUVEGLOBAL)).toFixed(2)}} %</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold;background-color: #4bc302;color:#000;">{{(parseFloat(parseFloat(MONTANTAPPROUVETRAVAUX(formData.ua_id))+parseFloat(MONTANTAPPROUVEPERSONNEL(formData.ua_id))+parseFloat(MONTANTAPPROUVESERVICES(formData.ua_id))+parseFloat(MONTANTAPPROUVEFOURNITURES(formData.ua_id)))/parseFloat(MONTANTAPPROUVEGLOBAL)).toFixed(2)}} %</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold;background-color: #4bc302;color:#000;">{{((parseFloat(parseFloat(parseFloat(NOMBREDEMARCHESPREVUSTRAVAUX(formData.ua_id))+parseFloat(NOMBREDEMARCHESPREVUSPERSONNEL(formData.ua_id))+parseFloat(NOMBREDEMARCHESPREVUSSERVICES(formData.ua_id))+parseFloat(NOMBREDEMARCHESPREVUSFOURNITURES(formData.ua_id)))-parseFloat(parseFloat(NOMBREDEMARCHESAPPROUVETRAVAUX(formData.ua_id))+parseFloat(NOMBREDEMARCHESAPPROUVEPERSONNEL(formData.ua_id))+parseFloat(NOMBREDEMARCHESAPPROUVESERVICES(formData.ua_id))+parseFloat(NOMBREDEMARCHESAPPROUVEFOURNITURES(formData.ua_id))))/parseFloat(parseFloat(NOMBREDEMARCHESPREVUSGLOBAL)-parseFloat(NOMBREDEMARCHESAPPROUVEGLOBAL)))*100).toFixed(2)}} %</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold;background-color: #4bc302;color:#000;">{{((parseFloat(parseFloat(parseFloat(MONTANTPREVUSTRAVAUX(formData.ua_id))+parseFloat(MONTANTPREVUSPERSONNEL(formData.ua_id))+parseFloat(MONTANTPREVUSSERVICES(formData.ua_id))+parseFloat(MONTANTPREVUSFOURNITURES(formData.ua_id)))-parseFloat(parseFloat(MONTANTAPPROUVETRAVAUX(formData.ua_id))+parseFloat(MONTANTAPPROUVEPERSONNEL(formData.ua_id))+parseFloat(MONTANTAPPROUVESERVICES(formData.ua_id))+parseFloat(MONTANTAPPROUVEFOURNITURES(formData.ua_id))))/parseFloat(parseFloat(MONTANTPREVUSGLOBAL)-parseFloat(MONTANTAPPROUVEGLOBAL)))*100).toFixed(2)}} %</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold;background-color: #4bc302;color:#000;">{{((parseFloat(parseFloat(NOMBREDEMARCHESACHEVESPERSONNEL(formData.ua_id))+parseFloat(NOMBREDEMARCHESACHEVESSERVICES(formData.ua_id))+parseFloat(NOMBREDEMARCHESACHEVESFOURNITURES(formData.ua_id))+parseFloat(NOMBREDEMARCHESACHEVESTRAVAUX(formData.ua_id)))/parseFloat(NOMBREDEMARCHESACHEVESGLOBAL))*100).toFixed(2)}} %</td>
  <td height="10px" style="text-align:center;font-size:14px;font-weight:bold;background-color: #4bc302;color:#000;">{{((parseFloat(parseFloat(parseFloat(MONTANTACHEVEPERSONNEL(formData.ua_id))+parseFloat(MONTANTACHEVESERVICES(formData.ua_id))+parseFloat(MONTANTACHEVEFOURNITURES(formData.ua_id))+parseFloat(MONTANTACHEVETRAVAUX(formData.ua_id))))/parseFloat(MONTANTACHEVEGLOBAL))*100).toFixed(2)}} %</td>

  
      
 </tr>
                </tbody>
              </table>
            
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div v-if="formData.ua_id=='' || formData.typeua_id=='' || formData.exo==''">
 <h5 style="text-align:center;color:red;font-size:20px" >VEUILLEZ SELECTIONNER L'UNITE ADMINISTRATIVE SVP</h5>
              </div>

   
    <!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import { formatageSomme } from "@/Repositories/Repository";
export default {
  name:'typetext',
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
        CODE: "code",
        LIBELLE: "libelle"
      },
     formData:{
                  ua_id :""
                },
      
      search: ""
    };
  },

  computed: {
     ...mapGetters("bienService", ["getFacturePersonnaliser","getterActeEffetFinanciers","modepaiements",'mandats','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
                'acteEffetFinanciers','montantPlanification','montantContratualisation','afficheContratualisation','affichePlanifier',
                'nombremarchesExecute',"avenants","getMandatPersonnaliserVise",
                'AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
                "printMarcheNonAttribue","procedurePassations","typeTypeProcedures",
                "montantComtratualisation","text_juridiques", "gettersOuverturePersonnaliser",
                "typeActeEffetFinanciers","personnaliseGetterMarcheBailleur","getterMandate",
                "getActeEffetFinancierPersonnaliserContrat","getterCojos","getterDemandeAno","getterAnoDMPBailleur"]),

            ...mapGetters('personnelUA', ['acteur_depenses',"paiementPersonnel"]),

            ...mapGetters('uniteadministrative',[
                "plans_programmes",
                "uniteAdministratives",
                "afficheNiveauAction",
                "afficheNiveauActivite",
                "derniereNivoPlanBudgetaire",
                "getPersonnaliseBudgetGeneralParPersonnel",
                "budgetEclate",
"decomptefactures"

            ]),

            ...mapGetters("parametreGenerauxAdministratif", [
      "chapitres",
      "sections",
      "type_Unite_admins",
      "services_gestionnaires",
      "structures_administratives",
      "localisations_geographiques",
      "afficheServiceGestionnaireNiveau4",
      "afficheLocalisationGeoNiveau5",
      "natures_sections",
      "structures_geographiques"
    ]),
...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements']),
            ...mapGetters('parametreGenerauxFonctionnelle',[

                "plans_fonctionnels",
                "afficheNiveauPlanFonctionnel"
            ]),
            ...mapGetters("parametreGenerauxAdministratif", ["getterformeJuridique","getterregimeImpositions","getterplan_pays","exercices_budgetaires"]),
            ...mapGetters('parametreGenerauxActivite',[ 'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

            ...mapGetters('parametreGenerauxBudgetaire',["plans_budgetaires","derniereNivoPlanBudgetaire"]),
...mapGetters('gestionMarche', ['entreprises',"secteur_activites",'banques','comptes','getCompte',]),
  ...mapGetters('parametreGenerauxFonctionnelle', ['structuresDecision',
  'plans_Decision']),


NOMBREDEMARCHESPREVUSGLOBAL(){
      if(this.formData.exo==''){
        return 0
      }
      else{
return  this.marches.filter(item => item.exo_id==this.formData.exo).length
      }
          
                  
        
       
      
    },


MONTANTPREVUSGLOBAL(){
      if(this.formData.exo==''){
        return 0
      }
      else{
return  this.marches.filter(item => item.exo_id==this.formData.exo).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_marche), 0).toFixed(0);
      }
    
    },
    NOMBREDEMARCHESAPPROUVEGLOBAL(){
     
return  this.acteEffetFinanciers.filter(item => this.afficheExerciceBudgetaire(item.marche_id)==this.formData.exo).length;
      
    
    },

MONTANTAPPROUVEGLOBAL(){
      if(this.formData.exo==''){
        return 0
      }
      else{
return  this.acteEffetFinanciers.filter(item => this.afficheExerciceBudgetaire(item.marche_id)==this.formData.exo).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_act), 0).toFixed(0);
      }
    
    },
NOMBREDEMARCHESACHEVESGLOBAL(){
      if(this.formData.exo==''){
        return 0
      }
      else{
return  this.marches.filter(item => item.exo_id==this.formData.exo && item.attribue==5 ).length;
      }
    
    },
    MONTANTACHEVEGLOBAL(){
      if(this.formData.exo==''){
        return 0
      }
      else{
return  this.mandats.filter(item => item.exercice_budget==this.formData.exo && item.attribue==5 ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(0);
      }
    
    },
   
// NOMBREDEMARCHESPREVUSGLOBAL(){
//       if(this.formData.exo==''){
//         return 0
//       }
//       else{
// return  this.marches.filter(item => item.exo_id==this.formData.exo).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_act), 0).toFixed(0);
//       }
    
//     },



NOMBREDEMARCHESPREVUSTRAVAUX(){
      return id =>{
        if(id!=null && id!=""){
          return  this.marches.filter(item => item.unite_administrative_id==id && item.exo_id==this.formData.exo && item.type_marche_id==5).length
                  
        }
        return 0
      }
    },
NOMBREDEMARCHESPREVUSFOURNITURES(){
      return id =>{
        if(id!=null && id!=""){
          return  this.marches.filter(item => item.unite_administrative_id==id && item.exo_id==this.formData.exo && item.type_marche_id==1).length
                  
        }
        return 0
      }
    },
NOMBREDEMARCHESPREVUSSERVICES(){
      return id =>{
        if(id!=null && id!=""){
          return  this.marches.filter(item => item.unite_administrative_id==id && item.exo_id==this.formData.exo && item.type_marche_id==6).length
                  
        }
        return 0
      }
    },
    NOMBREDEMARCHESPREVUSPERSONNEL(){
      return id =>{
        if(id!=null && id!=""){
          return  this.marches.filter(item => item.unite_administrative_id==id && item.exo_id==this.formData.exo && item.type_marche_id==4).length
                  
        }
        return 0
      }
    },
MONTANTPREVUSTRAVAUX(){
      return id =>{
        if(id!=null && id!=""){
          return  this.marches.filter(item => item.unite_administrative_id==id && item.exo_id==this.formData.exo && item.type_marche_id==5).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_marche), 0).toFixed(0); 
                  
        }
        return 0
      }
    },
    MONTANTPREVUSFOURNITURES(){
      return id =>{
        if(id!=null && id!=""){
          return  this.marches.filter(item => item.unite_administrative_id==id && item.exo_id==this.formData.exo && item.type_marche_id==1).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_marche), 0).toFixed(0);
                  
        }
        return 0
      }
    },
MONTANTPREVUSSERVICES(){
      return id =>{
        if(id!=null && id!=""){
          return  this.marches.filter(item => item.unite_administrative_id==id && item.exo_id==this.formData.exo && item.type_marche_id==6).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_marche), 0).toFixed(0);
                  
        }
        return 0
      }
    },
    MONTANTPREVUSPERSONNEL(){
      return id =>{
        if(id!=null && id!=""){
          return  this.marches.filter(item => item.unite_administrative_id==id && item.exo_id==this.formData.exo && item.type_marche_id==4).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_marche), 0).toFixed(0);
                  
        }
        return 0
      }
    },
    FiltreUaParTypeUa(){
      return id =>{
        if(id!=null && id!=""){
          return  this.uniteAdministratives.filter(item => item.type_ua_id==id )
                  
        }
      }
    },
    afficheSectionid(){
      return id =>{
        if(id!=null && id!=""){
          let odj = this.uniteAdministratives.find(item => item.id==id )
          if(odj){
            return odj.section_id
          }
          return null
        }
      }
    },
    libelleUa(){
      return id =>{
        if(id!=null && id!=""){
          let odj = this.uniteAdministratives.find(item => item.id==id )
          if(odj){
            return odj.libelle
          }
          return null
        }
      }
    },
    afficheSection(){
      return id =>{
        if(id!=null && id!=""){
          let odj = this.sections.find(item => item.id==id )
          if(odj){
            return odj.nom_section
          }
          return null
        }
      }
    },
    NOMBREDEMARCHESAPPROUVETRAVAUX(){
      return id =>{
        if(id!=null && id!=""){
          return  this.acteEffetFinanciers.filter(item => item.ua_id==id && this.afficheExerciceBudgetaire(item.marche_id)==this.formData.exo && this.afficheTypeMarche(item.marche_id)==5).length
                  
        }
        return 0
      }
    },
     NOMBREDEMARCHESAPPROUVEPERSONNEL(){
      return id =>{
        if(id!=null && id!=""){
          return  this.acteEffetFinanciers.filter(item => item.ua_id==id && this.afficheExerciceBudgetaire(item.marche_id)==this.formData.exo && this.afficheTypeMarche(item.marche_id)==4).length
                  
        }
        return 0
      }
    },
    NOMBREDEMARCHESAPPROUVEFOURNITURES(){
      return id =>{
        if(id!=null && id!=""){
          return  this.acteEffetFinanciers.filter(item => item.ua_id==id && this.afficheExerciceBudgetaire(item.marche_id)==this.formData.exo && this.afficheTypeMarche(item.marche_id)==1).length
                  
        }
        return 0
      }
    },
    NOMBREDEMARCHESAPPROUVESERVICES(){
      return id =>{
        if(id!=null && id!=""){
          return  this.acteEffetFinanciers.filter(item => item.ua_id==id && this.afficheExerciceBudgetaire(item.marche_id)==this.formData.exo && this.afficheTypeMarche(item.marche_id)==6).length
                  
        }
        return 0
      }
    },
    afficheExerciceBudgetaire(){
      return id =>{
        if(id!=null && id!=""){
          let odj = this.marches.find(item => item.id==id )
          if(odj){
            return odj.exo_id
          }
          return null
        }
      }
    },
    afficheEtatMarche(){
      return id =>{
        if(id!=null && id!=""){
          let odj = this.marches.find(item => item.id==id )
          if(odj){
            return odj.attribue
          }
          return null
        }
      }
    },
    afficheTypeMarche(){
      return id =>{
        if(id!=null && id!=""){
          let odj = this.marches.find(item => item.id==id )
          if(odj){
            return odj.type_marche_id
          }
          return null
        }
      }
    },



    MONTANTAPPROUVETRAVAUX(){
      return id =>{
        if(id!=null && id!=""){
          return  this.acteEffetFinanciers.filter(item => item.ua_id==id && this.afficheExerciceBudgetaire(item.marche_id)==this.formData.exo && this.afficheTypeMarche(item.marche_id)==5).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_act), 0).toFixed(0);
                  
        }
        return 0
      }
    },
     MONTANTAPPROUVEPERSONNEL(){
      return id =>{
        if(id!=null && id!=""){
          return  this.acteEffetFinanciers.filter(item => item.ua_id==id && this.afficheExerciceBudgetaire(item.marche_id)==this.formData.exo && this.afficheTypeMarche(item.marche_id)==4).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_act), 0).toFixed(0);
                  
        }
        return 0
      }
    },
    MONTANTAPPROUVEFOURNITURES(){
      return id =>{
        if(id!=null && id!=""){
          return  this.acteEffetFinanciers.filter(item => item.ua_id==id && this.afficheExerciceBudgetaire(item.marche_id)==this.formData.exo && this.afficheTypeMarche(item.marche_id)==1).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_act), 0).toFixed(0);
                  
        }
        return 0
      }
    },
    MONTANTAPPROUVESERVICES(){
      return id =>{
        if(id!=null && id!=""){
          return  this.acteEffetFinanciers.filter(item => item.ua_id==id && this.afficheExerciceBudgetaire(item.marche_id)==this.formData.exo && this.afficheTypeMarche(item.marche_id)==6).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_act), 0).toFixed(0);
                  
        }
        return 0
      }
    },



    

NOMBREDEMARCHESACHEVESTRAVAUX(){
      return id =>{
        if(id!=null && id!=""){
          return  this.marches.filter(item => item.unite_administrative_id==id && item.exo_id==this.formData.exo && item.type_marche_id==5 && item.attribue==5).length
                  
        }
        return 0
      }
    },
NOMBREDEMARCHESACHEVESFOURNITURES(){
      return id =>{
        if(id!=null && id!=""){
          return  this.marches.filter(item => item.unite_administrative_id==id && item.exo_id==this.formData.exo && item.type_marche_id==1 && item.attribue==5).length
                  
        }
        return 0
      }
    },
NOMBREDEMARCHESACHEVESSERVICES(){
      return id =>{
        if(id!=null && id!=""){
          return  this.marches.filter(item => item.unite_administrative_id==id && item.exo_id==this.formData.exo && item.type_marche_id==6 && item.attribue==5).length
                  
        }
        return 0
      }
    },
    NOMBREDEMARCHESACHEVESPERSONNEL(){
      return id =>{
        if(id!=null && id!=""){
          return  this.marches.filter(item => item.unite_administrative_id==id && item.exo_id==this.formData.exo && item.type_marche_id==4 && item.attribue==5).length
                  
        }
        return 0
      }
    },







    MONTANTACHEVETRAVAUX(){
      return id =>{
        if(id!=null && id!=""){
          return  this.mandats.filter(item => item.ua_id==id && item.exercice_budget==this.formData.exo && this.afficheTypeMarche(item.marche_id)==5 && this.afficheEtatMarche(item.marche_id)==5).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(0);
                  
        }
        return 0
      }
    },
MONTANTACHEVEFOURNITURES(){
      return id =>{
        if(id!=null && id!=""){
         
               return  this.mandats.filter(item => item.ua_id==id && item.exercice_budget==this.formData.exo && this.afficheTypeMarche(item.marche_id)==1 && this.afficheEtatMarche(item.marche_id)==5).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(0);   
        }
        return 0
      }
    },
MONTANTACHEVESERVICES(){
      return id =>{
        if(id!=null && id!=""){
         return  this.mandats.filter(item => item.ua_id==id && item.exercice_budget==this.formData.exo && this.afficheTypeMarche(item.marche_id)==6 && this.afficheEtatMarche(item.marche_id)==5).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(0);        
        }
        return 0
      }
    },
    MONTANTACHEVEPERSONNEL(){
      return id =>{
        if(id!=null && id!=""){
         return  this.mandats.filter(item => item.ua_id==id && item.exercice_budget==this.formData.exo && this.afficheTypeMarche(item.marche_id)==4 && this.afficheEtatMarche(item.marche_id)==5).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(0);       
        }
        return 0
      }
    },
  },
  methods: {
    ...mapActions("uniteadministrative", [
      
    ]),
     genererEnPdf(){
  this.$htmlToPaper('printMe');
},
   formatageSomme:formatageSomme,
    alert() {
      console.log("ok");
    },
    
ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>

