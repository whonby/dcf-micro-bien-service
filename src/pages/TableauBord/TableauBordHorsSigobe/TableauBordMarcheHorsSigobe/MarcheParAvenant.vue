
<template>
  <div>
     <div id="testModal" class="modal hide tailgrand">
      <div class="modal-header">
         <a data-dismiss="modal" class="btn btn-danger" href="#">Fermer</a>
        <h3 style="font-size: 14px; font-weight: bold">
        
        </h3>
      </div>
      <div align="right">
      <button class="btn btn-info" @click.prevent="genererEnPdfDetailReamenagement()">
        Exporter en PDF
      </button>
    </div> 
      <div class="modal-body" id="printpdf12">
  <!-- <div class="tableauentier table table-bordered">
	<div>
	 <table border="1">
		<tr>
      
			<th  style="font-size: 14px;color:#000; font-weight: bold; width:150px;"></th>
			<th  style="font-size: 14px;color:#000; font-weight: bold; width:580px; padding:15px;">Marche Contat / Initial</th>
			<th v-for="item in taillerAvenantParMarche(test)" :key="item"   style="font-size: 14px;color:#000; font-weight: bold; padding:15px;width:275px;">Avenant {{item}}</th>
			<th  style="font-size: 14px;color:#000; font-weight: bold; padding:15px; width:200px;">Toyal des Avenants</th>			
			<th style="font-size: 14px;color:#000; font-weight: bold; padding:15px;width:200px;">Marche / Contrat Initial</th>
 
		</tr>
	</table>
	</div>
	<div class="colonne">
			<table border="1">
				<tr>
					<td style="height:80px; width:30px;">objet</td>
				</tr>
				<tr>
					<td style="height:60px;">numero</td>
				</tr>
				<tr>
					<td style="height:60px;">Date</td>
				</tr>
				<tr>
					<td style="height:60px;">Titulaire</td>
				</tr>
				<tr>
					<td style="height:60px;">Montant</td>
				</tr>
				<tr>
					<td style="height:60px;">Taux</td>
				</tr>
				<tr>
					<td style="height:60px;">Durée</td>
				</tr>
				<tr>
					<td style="height:60px;">Taux</td>
				</tr>
				<tr>
					<td style="height:60px;">Source de financement</td>
				</tr>
				<tr>
					<td style="height:60px;">Ligne Budgetaire</td>
				</tr>
				<tr>
					<td style="height:60px;">beneficiaire</td>
				</tr>
				<tr>
					<td style="height:60px;">Livrables</td>
				</tr>			
			</table>
	</div>
	<div class="colonne">
			<table >
				<tr>
					<td style="height:80px; width:500px!important;">

						{{libelleMarche(test) || 'Non renseigné'}}
						
						</td>
				</tr>
				<tr>
					<td style="height:60px; width:500px!important;">{{NumeroMarche(test) || 'Non renseigné'}}</td>
				</tr>
				<tr>
					<td style="height:60px; width:500px!important;"> {{DateMarche(test) || 'Non renseigné'}}</td>
				</tr>
				<tr>
					<td style="height:60px; width:500px!important;">{{LibelleEntreprise(EntrepriseMarche(test))}}</td>
				</tr>
				<tr>
					<td style="height:60px; width:500px!important;">{{formatageSommeSansFCFA(parseFloat((MontantReelMarche(test)))) || 'Non renseigné'}}</td>
				</tr>
				<tr>
					<td style="height:60px; width:500px!important;">100%</td>
				</tr>
				<tr>
					<td style="height:60px; width:500px!important;">{{DureMarche(test) || 'Non renseigné'}}</td>
				</tr>
				<tr>
					<td style="height:60px; width:500px!important;">100 %</td>
				</tr>
				<tr>
					<td style="height:60px; width:500px!important;">{{LibellesourceFinancement(idsourceFinancement(test)) || 'Non renseigné'}}</td>
				</tr>
				<tr>
					<td style="height:60px; width:500px!important;">{{LibelleLigneBudgetaire(idLigneBudgetaire(idParent(test))) || 'Non renseigné'}}</td>
				</tr>
				<tr>
					<td style="height:60px; width:500px!important;">{{beneficiaireMarche(test) || 'Non renseigné'}}</td>
				</tr>
				<tr>
					<td style="height:60px; width:500px!important;">{{livrableMarche(test) || 'Non renseigné'}}</td>
				</tr>			
			</table>
	</div>
	<div class="colon">
			<table border="1">
				<tr>
					<td  style="height:80px;">objet</td>
				</tr>
				<tr>
					<td style="height:60px;">numero</td>
				</tr>
				<tr>
					<td style="height:60px;">Date</td>
				</tr>
				<tr>
					<td style="height:60px;">Titulaire</td>
				</tr>
				<tr>
					<td  style="height:60px;">
            {{formatageSommeSansFCFA(parseFloat(parseFloat(MontantReelMarche(test)) + parseFloat(SommeAvenant(test))))}}
            </td>
				</tr>
				<tr>
					<td style="height:60px;">Taux</td>
				</tr>
				<tr>
					<td style="height:60px;">Durée</td>
				</tr>
				<tr>
					<td style="height:60px;">Taux</td>
				</tr>
				<tr>
					<td style="height:60px;">Source de financement</td>
				</tr>
				<tr>
					<td style="height:60px;">Ligne Budgetaire</td>
				</tr>
				<tr>
					<td style="height:60px;">beneficiaire</td>
				</tr>
				<tr>
					<td style="height:60px;">Livrables</td>
				</tr>			
			</table>
	</div>
	
	
	
		<div class="tableauscroll">
			<table border = "1">
				<tr>
					<td style="height:80px; " v-for="tem in listeDesAvenant(test)" :key="tem.id">
            {{tem.objet_avenant.substring(0,90)+"...." || 'Non renseigné'}}
            </td>
					<td style="height:60px; padding:15px; width:150px;">TA</td>
				</tr>
				<tr>
					 <td style="height:60px;" v-for="tem in listeDesAvenant(test)" :key="tem.id">
             {{tem.numero_avenant || 'Non renseigné'}}
            </td>
					<td style="height:60px;">L obget du marche</td>
					<td style="height:60px;">L obget du marche</td>
				</tr>
				
 				<tr>				
				<td style="height:60px;" v-for="tem in listeDesAvenant(test)" :key="tem.id">
          {{formaterDate(tem.date_avenant) || 'Non renseigné'}}
        </td>
					<td style="height:60px;">L obget du marche</td>
				</tr>
 				<tr>				
					<td style="height:60px;" v-for="tem in listeDesAvenant(test)" :key="tem.id">
            {{afficherEntrepriseNom(recupereIdEntreprise(tem.marche_id)) || 'Non renseigné'}}</td>
					<td style="height:60px;">L obget du marche</td>
				</tr>
 				<tr>				
					<td style="height:60px;" v-for="tem in listeDesAvenant(test)" :key="tem.id">
            {{formatageSommeSansFCFA(parseFloat(tem.montant_avenant)) || 'Non renseigné'}}</td>
					<td >
            <span style="height:60px;" >{{formatageSommeSansFCFA(parseFloat(SommeAvenant(test)))}}</span>
          </td>
					
				</tr>
 				<tr>				
					<td  style="height:60px;" v-for="tem in listeDesAvenant(test)" :key="tem.id">{{tem.taux_avenant || 'Non renseigné'}}%</td>
					<td style="height:60px;">L obget du marche</td>
				</tr>
 				<tr>				
					<td style="height:60px;" v-for="tem in listeDesAvenant(test)" :key="tem.id">{{tem.dure_avenant || 'Non renseigné'}}</td>
					<td style="height:60px;">L obget du marche</td>
				</tr>
 				<tr>				
					<td style="height:60px;" v-for="tem in listeDesAvenant(test)" :key="tem.id">
            {{tem.taux_avenant || 'Non renseigné'}}</td>
					<td style="height:60px;">L obget du marche</td>
				</tr>
 				<tr>				
					<td style="height:60px;" v-for="tem in listeDesAvenant(test)" :key="tem.id">{{LibellesourceFinancement(idsourceFinancement(tem.marche_id)) || 'Non renseigné'}}</td>
					<td style="height:60px;">L obget du marche</td>
				</tr>
 				<tr>				
					<td style="height:60px;" v-for="tem in listeDesAvenant(test)" :key="tem.id">{{LibelleLigneBudgetaire(idLigneBudgetaire(idParent(tem.marche_id))) || 'Non renseigné'}}</td>
					<td style="height:60px;">L obget du marche</td>
				</tr>
 				<tr>				
					 <td v-for="tem in listeDesAvenant(test)" :key="tem.id">{{beneficiaireMarche(tem.marche_id) || 'Non renseigné'}}</td>
					<td style="height:60px;">L obget du marche</td>
				</tr>
 				<tr>				
					<td v-for="tem in listeDesAvenant(test)" :key="tem.id">{{livrableMarche(tem.marche_id) || 'Non renseigné'}}</td>
					<td style="height:60px;">L obget du marche</td>
				</tr>
 
			</table>
		</div>
	</div> -->
        <table class="table table-bordered table-striped">
          <tr>
             <h2 style="text-align: center; font-size: 25px;text-decoration: underline ;text-transform: uppercase;">
                   TABLE DES AVENANTS</h2>
          </tr>

        </table>
                  <table class="table table-bordered"  style="
                  font-size: 14px;
                  color:#000;
                  font-weight: bold;
                " >
  <tbody >
  <tr>
    <td>&nbsp;</td>
    <td style="background: rgb(6, 184, 6) !important;color:#fff !important">Marché/Contrat initial</td>
    
    
    <td v-for="item in taillerAvenantParMarche(test)" :key="item" style="background: rgb(6, 184, 6) !important;text-align:center;color:#fff !important"> Avenant {{item}}</td>
   
    <td style="background: rgb(6, 184, 6) !important;text-align:center;width: 7%;;color:#fff !important"> Total Avenant</td>
    <td style="background: rgb(6, 184, 6) !important;text-align:center;color:#fff !important">Marché/Contrat Actuel</td>
  </tr>
  <tr>
    <th style="background-color: #fbb203 !important;text-align:left !important">Objet</th>
    <td> {{libelleMarche(test) || 'Non renseigné'}}</td>
    <td v-for="tem in listeDesAvenant(test)" :key="tem.id">{{tem.objet_avenant || 'Non renseigné'}}</td>
    <td >
      
    </td>
    <td></td>
   
  </tr>
  <tr>
    <th style="background-color: #fbb203 !important;text-align:left !important">Numero</th>
    <td> {{NumeroMarche(test) || 'Non renseigné'}} </td>
    <td v-for="tem in listeDesAvenant(test)" :key="tem.id">{{tem.numero_avenant || 'Non renseigné'}}</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th style="background-color: #fbb203 !important;text-align:left !important">Date</th>
    <td> {{DateMarche(test) || 'Non renseigné'}} </td>
    <td v-for="tem in listeDesAvenant(test)" :key="tem.id">{{formaterDate(tem.date_avenant) || 'Non renseigné'}}</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th style="background-color: #fbb203 !important;text-align:left !important">Titulaire</th>
    <td>{{LibelleEntreprise(EntrepriseMarche(test))}}</td>
    <td v-for="tem in listeDesAvenant(test)" :key="tem.id">{{afficherEntrepriseNom(recupereIdEntreprise(tem.marche_id)) || 'Non renseigné'}}</td>
    <td></td>
    <td></td>
    
  </tr>
  <tr>
    <th style="background-color: #fbb203 !important;text-align:left !important">Montant</th>
    <td> {{formatageSommeSansFCFA(parseFloat((MontantReelMarche(test)))) || 'Non renseigné'}} </td>
    <td v-for="tem in listeDesAvenant(test)" :key="tem.id">{{formatageSommeSansFCFA(parseFloat(tem.montant_avenant)) || 'Non renseigné'}}</td>
    <td>
      <span >
      {{formatageSommeSansFCFA(parseFloat(SommeAvenant(test)))}}
        </span>
    </td>
    <td style="background: rgb(6, 184, 6) !important;text-align:left;color:#fff">
        {{formatageSommeSansFCFA(parseFloat(parseFloat(MontantReelMarche(test)) +  parseFloat(SommeAvenant(test))))}}
    </td>
    
  </tr>
  <tr>
    <th style="background-color: #fbb203 !important;text-align:left !important">Taux</th>
    <td> 100 %</td>
    <td v-for="tem in listeDesAvenant(test)" :key="tem.id">{{tem.taux_avenant || 'Non renseigné'}}%</td>
    <td>
      <span >{{TauxDesAvenant(test) || 'Non renseigné'}} %</span>
    </td>
    <td></td>
    
    
  </tr>
  <tr>
    <th style="background-color: #fbb203 !important;text-align:left !important">Durée</th>
    <td>{{DureMarche(test) || 'Non renseigné'}}</td>
    <td v-for="tem in listeDesAvenant(test)" :key="tem.id">{{tem.dure_avenant || 'Non renseigné'}}</td>
   
   <td></td>
   <td></td>
  </tr>
  <tr>
    <th style="background-color: #fbb203 !important;text-align:left !important">Taux</th>
    <td >100 %</td>
    <td v-for="tem in listeDesAvenant(test)" :key="tem.id">{{tem.taux_avenant || 'Non renseigné'}}</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th style="background-color: #fbb203 !important;text-align:left !important">Sorce de financement</th>
    <td> {{LibellesourceFinancement(idsourceFinancement(test)) || 'Non renseigné'}} </td>
    <td v-for="tem in listeDesAvenant(test)" :key="tem.id">{{LibellesourceFinancement(idsourceFinancement(tem.marche_id)) || 'Non renseigné'}}</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th style="background-color: #fbb203 !important;text-align:left !important">Ligne Budgetaire</th>
    <td>{{LibelleLigneBudgetaire(idLigneBudgetaire(idParent(test))) || 'Non renseigné'}}</td>
    <td v-for="tem in listeDesAvenant(test)" :key="tem.id">{{LibelleLigneBudgetaire(idLigneBudgetaire(idParent(tem.marche_id))) || 'Non renseigné'}}</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th style="background-color: #fbb203 !important;text-align:left !important">Bénéficiaires</th>
    <td>{{beneficiaireMarche(test) || 'Non renseigné'}}</td>
    <td v-for="tem in listeDesAvenant(test)" :key="tem.id">{{beneficiaireMarche(tem.marche_id) || 'Non renseigné'}}</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th style="background-color: #fbb203 !important;text-align:left !important">Livrables</th>
    <td>{{livrableMarche(test) || 'Non renseigné'}}</td>
    <td v-for="tem in listeDesAvenant(test)" :key="tem.id">{{livrableMarche(tem.marche_id) || 'Non renseigné'}}</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th style="background-color: #fbb203 !important;text-align:left !important">Autres</th>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <!-- <td></td>
    <td></td> -->
  </tr>
  </tbody>
  </table>

      </div>
    </div>
 <table class="table table-bordered table-striped">
          <tr>
            <td>
              <div class="control-group">
                <label class="control-label">UNITE ADMINISTRATIVE</label>
                <div class="controls">
                  <model-list-select  
              style="border: 1px solid #000"
              class="wide"
              :list="uniteAdministratives"
              v-model="uniteAdmin_id"
              option-value="id"
              option-text="libelle"
              placeholder=""
            >
            </model-list-select>
                </div>
              </div>
            </td>
               
           
            <td></td>
          </tr>

           
        </table>

    <div align="right">
      <button class="btn btn-info" @click.prevent="genererEnPdf()">
        Exporter en PDF
      </button>
    </div> 
    
    <div class="widget-content nopadding" id="printpdf">
       <table class="table table-bordered table-striped">
          <tr>
             <h2 style="text-align: center; font-size: 25px;text-decoration: underline ;text-transform: uppercase;">
                 AVENANT DES MARCHES HORS SIGOBE</h2>
          </tr>

           
        </table>
    
      <p
        style="
          margin-left: 30px;
          font-size: 14px;
          font-weight: bold;
          text-decoration: underline;
        "
      >
        EXERCICE: {{ afficheAnnee }}
      </p>

      <div >
           <table class="table table-bordered">
              <thead style="background-color: #ff9c1a !important">
                  
                   
                 <tr>
                   <th></th>
                 <th colspan="3">UNITE ADMINISTRATIVE</th>

      
                  
                   
                  <th colspan="4"
                    style="
                      font-size: 14px;
                      font-weight: bold;
                      text-align: center;
                      color: #000;
                      background-color: #fbb203 !important;
                      
                    "
                  >
                OBJET DU MARCHE
                  </th>
                 

                     
                  <th
                    style="
                      font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;
                    "
                  >
                 
                    NOMBRES D'AVENANT
                  </th>
                 
                </tr>
              </thead>
       <tbody v-for="GroupeSection in partition(afficheUa, size)[page]" :key="GroupeSection.id">
                <tr >
                  <td>
                    <button @click="ShowMyUa(GroupeSection.id)">
                     <i class="icon-eye-open"></i> </button>
                  </td>
                  
         
                <td style="" v-bind:class="recupereIDactivite==GroupeSection.id ? 'graybg' : 'whitebg'"  colspan="3">{{libelleUniteAdministrative(GroupeSection.id)}}

                  
                </td>
                <td style="" v-bind:class="recupereIDactivite==GroupeSection.id ? 'graybg' : 'whitebg'"  colspan="4">
<model-list-select  v-show="recupereIDactivite==GroupeSection.id "
              style="border: 1px solid #000"
              class="wide"
              :list="marches"
              v-model="marcheLot_id"
              option-value="id"
              option-text="objet"
              placeholder=""
            >
            </model-list-select>
                </td>
                
               
                <td style="" v-bind:class="recupereIDactivite==GroupeSection.id ? 'graybg' : 'whitebg'" colspan="2">
                    {{NombreAvenantParUa(GroupeSection.id)}}
                </td>
                         
                </tr>
                 <tr v-show="recupereIDactivite==GroupeSection.id"
               v-for="GroupeUa in GroupeTypeMarcheParUa(GroupeSection.id)" :key="GroupeUa">
                  <td></td>
                  <td><button @click="apercuFacture(GroupeUa)">
                     <i class="icon-eye-open"></i> </button></td>
            
                 
                  
                  <td v-bind:class="recupereIDSection==GroupeUa ? 'graybg1' : 'whitebg1'" colspan="6" >
                    {{ libelleMarche(GroupeUa) }}</td>

              
   
               <td v-bind:class="recupereIDSection==GroupeUa ? 'graybg1' : 'whitebg1'" @click="apercuFacture(GroupeUa)">{{NombreAvenant(GroupeUa)}}</td>
               <td v-bind:class="recupereIDSection==GroupeUa ? 'graybg1' : 'whitebg1'"  v-show="recupereIDSection==GroupeUa "></td>
              
               
                </tr>

              </tbody>  
              
  <tbody >

               
             
  </tbody>
              
            </table>
<br>
              <!-- <table class="table table-bordered" v-show="recupereIDactivite==GroupeSection.id">
              
      
              

            
            </table> -->
      </div>
       
          <div class="pagination alternate">
      <ul>
        <li :class="{ disabled: page == 0 }">
          <a @click.prevent="precedent()" href="#">Précedent</a>
        </li>
        <li
          v-for="(titre, index) in partition(afficheUa, size).length"
          :key="index"
          :class="{ active: active_el == index }"
        >
          <a @click.prevent="getDataPaginate(index)" href="#">{{
            index + 1
          }}</a>
        </li>
        <li
          :class="{ disabled: page == partition(afficheUa, size).length - 1 }"
        >
          <a @click.prevent="suivant()" href="#">Suivant</a>
        </li>
      </ul>
    </div>
    </div>

    


        
    
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import { formatageSommeSansFCFA,formatageSomme } from "@/Repositories/Repository";
import { partition } from "@/Repositories/Repository";
import {admin,dcf,noDCfNoAdmin} from "@/Repositories/Auth"
import { ModelListSelect } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";
export default {
  components: {
    ModelListSelect,
  },
  name: "typetext",
  data() {
    return {
      page: 0,
      size:10,
      active_el: 0,
      fabActions: [
        {
          name: "searchMe",
          icon: "search",
        },
      ],

      json_fields: {
        CODE: "code",
        LIBELLE: "libelle",
      },


    inputLigne:false,
editMandat:{},
 uniteAdmin_id:0,
      exercices_budgetaires_id:0,
      inputLigne1:0,
    marcheLot_id:0,
      search: "",
      verifShome:0,
      recupereIDactivite:0,
      recupereIDSection:0,
      source_financement_id1:0,
      test:0,
      test1:0,
    };
  },
  created(){
    console.log("tranquille")
  
    console.log(this.apercuFacture(this.test))
    this.test1 = this.listeDesAvenant(this.test)
    console.log(this.test1)
   
     
  },

  computed: {
    ...mapGetters("Utilisateurs", [
      "getterAffectionServiceCF",
      "getterUtilisateur",
      "getterAffectation",
      "getterUniteAdministrativeByUser",
    ]),

    ...mapGetters("parametreGenerauxAdministratif", [
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "exercices_budgetaires",
      "sections",
    ]),
    ...mapGetters("personnelUA", [
      "salairesActeur",
      "personnaliseActeurDepense",
      "personnaFonction",
      "afficheNombrePersonnelRecuActeNormination",
      "fonctionBudgetaire",
      "type_salaries",
      "type_contrats",
      "acte_personnels",
      "type_acte_personnels",
      "fonctions",
      "grades",
      "niveau_etudes",
      "nbr_acteur_actredite_taux",
      "all_acteur_depense",
      "personnaliseActeurFinContrat",
      "totalActeurEnctivite",
      "totalActeurDepense",
      "totalActeurAccredite",
      "tauxActeurAccredite",
      "totalActeurNonAccredite",
      "affichePersonnelRecuActeNormination",
    ]),
    ...mapGetters("bienService", [
     
      "typeMarches",
     "marches",
      "gettersgestionOrdrePaiement",
      "acteEffetFinanciers",
      "personnaliseGetterMarcheBailleur",
    "avenants"
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
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "structureActe",
      "planActe",
    ]),
    ...mapGetters("parametreGenerauxActivite", [
      "structures_activites",
      "plans_activites",
      "afficheNiveauAction",
      "afficheNiveauActivite",
    ]),
    ...mapGetters("gestionMarche", ["entreprises"]),

    ...mapGetters("uniteadministrative", [
      "budgetEclate",
      "groupeLigneEconomiqueBudget",
      "getSousBudget",
      "groupeActiviteBudget",
      "budgetGeneral",
      "fonctionsua",
      "servicesua",
      "directions",
      "uniteZones",
      "uniteAdministratives",
      "getPersonnaliseBudgetGeneralParPersonnel",
      "groupeByActivite",
      "groupeByBailleur",
      "groupeBySection",
      "groupeByTypeFinancement"
    ]),
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "structuresDecision",
      "plans_Decision",
    ]),
    ...mapGetters("parametreGenerauxBudgetaire", [
      "plans_budgetaires",
      "derniereNivoPlanBudgetaire",
    ]),
    ...mapGetters("parametreGenerauxSourceDeFinancement", [
      "sources_financements",
    ]),
     admin:admin,
      dcf:dcf,
      noDCfNoAdmin:noDCfNoAdmin,


taillerAvenantParMarche(){
      return id =>{
        if(id != null && id !=""){
          return this.avenants.filter(element => element.marche_id== id).length
         

        }
      }
    },
numeroOrderAvenant1(){
      return id =>{
        if(id != null && id !=""){
          let ObjetId =this.avenants.find(element => element.marche_id== id && element.numero_ordre==1)
          if(ObjetId){
            return ObjetId.numero_ordre
          }

        }
      }
    },
numeroOrderAvenant2(){
      return id =>{
        if(id != null && id !=""){
          let ObjetId =this.avenants.find(element => element.marche_id== id && element.numero_ordre==2)
          if(ObjetId){
            return ObjetId.numero_ordre
          }

        }
      }
    },
    numeroOrderAvenant3(){
      return id =>{
        if(id != null && id !=""){
          let ObjetId =this.avenants.find(element => element.marche_id== id && element.numero_ordre==3)
          if(ObjetId){
            return ObjetId.numero_ordre
          }

        }
      }
    },
    numeroOrderAvenant4(){
      return id =>{
        if(id != null && id !=""){
          let ObjetId =this.avenants.find(element => element.marche_id== id && element.numero_ordre==4)
          if(ObjetId){
            return ObjetId.numero_ordre
          }

        }
      }
    },
    numeroOrderAvenant5(){
      return id =>{
        if(id != null && id !=""){
          let ObjetId =this.avenants.find(element => element.marche_id== id && element.numero_ordre==5)
          if(ObjetId){
            return ObjetId.numero_ordre
          }

        }
      }
    },
    numeroOrderAvenant6(){
      return id =>{
        if(id != null && id !=""){
          let ObjetId =this.avenants.find(element => element.marche_id== id && element.numero_ordre==6)
          if(ObjetId){
            return ObjetId.numero_ordre
          }

        }
      }
    },
    numeroOrderAvenant7(){
      return id =>{
        if(id != null && id !=""){
          let ObjetId =this.avenants.find(element => element.marche_id== id && element.numero_ordre==7)
          if(ObjetId){
            return ObjetId.numero_ordre
          }

        }
      }
    },
numeroOrderAvenant8(){
      return id =>{
        if(id != null && id !=""){
          let ObjetId =this.avenants.find(element => element.marche_id== id && element.numero_ordre==8)
          if(ObjetId){
            return ObjetId.numero_ordre
          }

        }
      }
    },
    numeroOrderAvenant9(){
      return id =>{
        if(id != null && id !=""){
          let ObjetId =this.avenants.find(element => element.marche_id== id && element.numero_ordre==9)
          if(ObjetId){
            return ObjetId.numero_ordre
          }

        }
      }
    },
    numeroOrderAvenant10(){
      return id =>{
        if(id != null && id !=""){
          let ObjetId =this.avenants.find(element => element.marche_id== id && element.numero_ordre==10)
          if(ObjetId){
            return ObjetId.numero_ordre
          }

        }
      }
    },

       LibelleLigneBudgetaire(){
      return id =>{
        if(id != null && id !=""){
          let ObjetId =this.plans_budgetaires.find(element => element.id== id)
          if(ObjetId){
            return ObjetId.code.concat(" " , ObjetId.libelle)
          }

        }
      }
    },
       idLigneBudgetaire(){
      return id =>{
        if(id != null && id !=""){
          let ObjetId =this.marches.find(element => element.id== id)
          if(ObjetId){
            return ObjetId.economique_id
          }

        }
      }
    },
    idParent(){
      return id =>{
        if(id != null && id !=""){
          let ObjetId =this.marches.find(element => element.id== id)
          if(ObjetId){
            return ObjetId.parent_id
          }

        }
      }
    },
      idsourceFinancement(){
      return id =>{
        if(id != null && id !=""){
          let ObjetId =this.marches.find(element => element.id== id)
          if(ObjetId){
            return ObjetId.source_financement
          }

        }
      }
    },
     LibellesourceFinancement(){
      return id =>{
        if(id != null && id !=""){
          let ObjetId =this.sources_financements.find(element => element.id== id)
          if(ObjetId){
            return ObjetId.libelle
          }

        }
      }
    },
      afficherEntrepriseNom(){
      return id =>{
        if(id != null && id !=""){
          let ObjetId =this.entreprises.find(element => element.id== id)
          if(ObjetId){
            return ObjetId.raison_sociale
          }

        }
      }
    },
recupereIdEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.entreprise_id
      }
      return 0
        }
      };
    },
SommeAvenant() {
      return id => {
        if (id != null && id != "") {
           return this.avenants.filter(qtreel => qtreel.marche_id== id).reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.montant_avenant),
              0
            )
            .toFixed(0);

     
        }
      };
    },
    Total(){
      return id =>{
        if(id !='' && id != null){
          return this.avenants.filter(tem => this.MontantMarche(tem.marche_id) && this.SommeAvenant(tem.marche_id))
        }
      }
    },
listeDesAvenant() {
      return id => {
        if (id != null && id != "") {
           return this.avenants.filter(qtreel => qtreel.marche_id== id);

     
        }
      };
    },

TauxDesAvenant() {
      return id => {
        if (id != null && id != "") {
           return this.avenants.filter(qtreel => qtreel.marche_id== id
           ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.taux_avenant), 0).toFixed(0); 

     
        }
      };
    },

NumeroAvenant() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.avenants.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_avenant
      }
      return 0
        }
      };
    },


ObjetAvenant() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.avenants.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.objet_avenant
      }
      return 0
        }
      };
    },
    

DateAvenant() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.avenants.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.date_avenant
      }
      return 0
        }
      };
    },
    
TauxAvenant() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.avenants.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.taux_avenant
      }
      return 0
        }
      };
    },
    MonatntAvenant() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.avenants.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.montant_avenant
      }
      return 0
        }
      };
    },
listeDesmARCHEpARaVENANT(){
    

          return (id) => {
        if (id != null && id != "") {
           return  this.avenants.filter(qtreel => qtreel.marche_id == id  );
        }  
      };
    
},



affichePartBailleur() {
      return id => {
        if (id != null && id != "") {
           return this.personnaliseGetterMarcheBailleur.filter(qtreel => qtreel.marche_id == id);

     
        }
      };
    },


MontantExecuteMarche(){
        return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.marche_id == id &&
                qtreel.exercice == this.afficheAnnee && qtreel.type_ordre_paiement==1 && qtreel.decision_cf==8 ||
                qtreel.marche_id == id &&
                qtreel.exercice == this.afficheAnnee && qtreel.type_ordre_paiement==1 && qtreel.decision_cf==9 || qtreel.marche_id == id &&
                qtreel.exercice == this.afficheAnnee && qtreel.type_ordre_paiement==4 && qtreel.decision_cf==8 || qtreel.marche_id == id &&
                qtreel.exercice == this.afficheAnnee && qtreel.type_ordre_paiement==4 && qtreel.decision_cf==9
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },
BailleurParMarche() {
      return (id) => {
      
        if(id !=0 && id !=""){
          let objet = this.personnaliseGetterMarcheBailleur.filter(item=>item.marche_id == id);
          //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.bailleur_id);
          });
          let unique = [...new Set(array_exercie)];
          console.log(unique);
          if (unique.length == 0) {
            return [];
          }
          return unique;
        }
        return [];
        }
        
        
      };
    },

GroupeTypeMarcheParUa() {
    if(this.marcheLot_id!=0){
        return (id) => {
      
        if(id !=0 && id !=""){
          let objet = this.marches.filter(item=>item.unite_administrative_id == id && item.exo_id==this.afficheAnnee && item.parent_id != null && item.attribue == 2 && item.id == this.marcheLot_id && item.id==this.MarcheAvenent(item.id));
          //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.id);
          });
          let unique = [...new Set(array_exercie)];
          console.log(unique);
          if (unique.length == 0) {
            return [];
          }
          return unique;
        }
        return [];
        }
        
        
      };
    }else{
         return (id) => {
      
        if(id !=0 && id !=""){
          let objet = this.marches.filter(item=>item.unite_administrative_id == id && item.exo_id==this.afficheAnnee && item.parent_id != null && item.attribue == 2 && item.id == this.MarcheAvenent(item.id));
          //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.id);
          });
          let unique = [...new Set(array_exercie)];
          console.log(unique);
          if (unique.length == 0) {
            return [];
          }
          return unique;
        }
        return [];
        }
        
        
      };
    }
      
    },

ListeMarcheParTypeMarche() {
    if(this.marcheLot_id!=0){

          return (id,id1) => {
        if (id != null && id != "" ,id1 != null && id1 != "") {
           return  this.marches.filter(qtreel => qtreel.unite_administrative_id == id && qtreel.type_marche_id==id1 
                                     && qtreel.parent_id != null && qtreel.attribue==2
                                     && qtreel.id==this.marcheLot_id);
        }  
      };
    }else{
         return (id,id1) => {
        if (id != null && id != "" ,id1 != null && id1 != "") {
           return  this.marches.filter(qtreel => qtreel.unite_administrative_id == id && qtreel.type_marche_id==id1 && qtreel.parent_id != null && qtreel.attribue==2);

        }
        
      };
    }
     
    },


    anneeAmort() {
      const norme = this.exercices_budgetaires.find(
        (normeEquipe) => normeEquipe.encours == 1
      );

      if (norme) {
        return norme.annee;
      }
      return 0;
    },
 afficheAnnee() {
      if (this.exercices_budgetaires_id == 0) {
        return this.anneeAmort;
      } else {
        return this.exercices_budgetaires_id;
      }
    },
     libelleMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.objet
      }
      return 0
        }
      };
    },
     beneficiaireMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.beneficiaire
      }
      return 0
        }
      };
    },
     livrableMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.livrable
      }
      return 0
        }
      };
    },
    
    Uaid() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.unite_administrative_id
      }
      return 0
        }
      };
    },
    MarcheAvenent() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.avenants.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.marche_id
      }
      return 0
        }
      };
    },
    libelleUniteAdministrative() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },

   idParentMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.parent_id
      }
      return 0
        }
      };
    },
    ligneEconomiqueMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.economique_id
      }
      return 0
        }
      };
    },
     
    MontantBudgetaire() {
      return (id,id1) => {
        if (id != null && id != "",id1 != null && id1 != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.annebudgetaire == this.afficheAnnee &&
                qtreel.uniteadministrative_id == id &&
                qtreel.ligneeconomique_id == id1 && qtreel.budget_active==1
            )
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.dotation),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },
    ImputationMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.imputation
      }
      return 0
        }
      };
    },
   
    DureMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.duree
      }
      return 0
        }
      };
    },
    LivrableMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.duree
      }
      return 0
        }
      };
    },
    MontantReelMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.montant_act
      }
      return 0
        }
      };
    },
     montantAvenantParMarche: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.avenants.filter(normeEquipe => normeEquipe.marche_id == id).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.montant_avenant)
                        },valInite);
                    }
                }
            },
           TauxAvenantParMarche: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.avenants.filter(normeEquipe => normeEquipe.marche_id == id).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.taux)
                        },valInite);
                    }
                }
            },
             NombreAvenant() {
      return id => {
        if (id != null && id != "") {
           return this.avenants.filter(qtreel => qtreel.marche_id == id).length;

      
        }
      };
    },
    NombreAvenantParUa() {
      return id => {
        if (id != null && id != "") {
           return this.avenants.filter(qtreel => qtreel.ua_id == id).length;

      
        }
      };
    },
     EntrepriseMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.entreprise_id
      }
      return 0
        }
      };
    },
    LibelleEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.raison_sociale
      }
      return 0
        }
      };
    },
     NumeroMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_marche
      }
      return 0
        }
      };
    },
     DateMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.date_approbation_marche_prevue
      }
      return 0
        }
      };
    },
     MontantMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.montant_marche
      }
      return 0
        }
      };
    },
     MontantMarches() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.filter(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.montant_marche
      }
      return 0
        }
      };
    },
    
     NumeroOrdreMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_lot
      }
      return 0
        }
      };
    },
 filtrerUaParTypeProj(){
return this.uniteAdministratives.filter(item=>item.type_ua_id == 7)
    },
    afficheUa(){
  if(this.uniteAdmin_id==0){
    return this.filtre_unite_admin
  }
  else{
    return this.filtre_unite
  }
},
     filtre_unite() {
      if (this.noDCfNoAdmin) {
        let colect = [];

        this.filtrerUaParTypeProj.filter((item) => {
          let val = this.getterUniteAdministrativeByUser.find(
            (row) => row.unite_administrative_id == item.id
          );
          if (val != undefined) {
            colect.push(item);
            return item;
          }
        });
        return colect.filter(item2=>item2.id==this.uniteAdmin_id);
      }
      return this.filtrerUaParTypeProj.filter(item2=>item2.id==this.uniteAdmin_id);
    },
    filtre_unite_admin() {
      if (this.noDCfNoAdmin) {
        let colect = [];

        this.filtrerUaParTypeProj.filter((item) => {
          let val = this.getterUniteAdministrativeByUser.find(
            (row) => row.unite_administrative_id == item.id
          );
          if (val != undefined) {
            colect.push(item);
            return item;
          }
        });
        return colect;
      }
      return this.filtrerUaParTypeProj;
    },

TriaffichageUniteAdminstrative() {
        let vm=this
      return this.afficheUa.map(function (value) {
        let objet = {
          id:value.id,
        
          MontantVote:vm.MontantBudgetVote(value.id),
         
        };
        return objet;
      });
    },

    

  },

  methods: {
    ...mapActions("bienService", [
      "modifierGestionOrdrePaiement",
      "modifierGestionOrdrePaiementAnnulat",
      "supprimerGestionOrdrePaiement",
      "ajouterHistoriqueDecisionOp",
      "modifierHistoriqueDecisionOp",
    ]),


    totalGeneral(id){
        return (this.MontantReelMarche(id)+this.MontantReelMarche(id))
    },
    triModificationBudget(){
      if(this.triModificationBudgetdata==0){
        this.triModificationBudgetdata=1;
        return this.TriaffichageUniteAdminstrative.sort(function(a,b){return a.Variation12-b.Variation12});
        
      }else{
        this.triModificationBudgetdata=0;
        return this.TriaffichageUniteAdminstrative.sort(function(a,b){return b.Variation12-a.Variation12});
      }
      
    },
 percuFacture(id,id1) {
      this.$("#testModal").modal({
        backdrop: "static",
        keyboard: false,
      });
      this.editMandat = this.ListeMarcheParTypeMarche(id,id1).find((item) => item.type_marche_id == (id,id1));
  
  },

  apercuFacture(id) {
if(this.test==0){
  this.test=id

   this.$("#testModal").modal({
        backdrop: "static",
        keyboard: false,
      });
     
}else if(this.test!=0 && this.test !=id){
        this.test=0;
        this.test=id;
         this.$("#testModal").modal({
        backdrop: "static",
        keyboard: false,
      });
       
      }
    },

TauxExecution(id) {
      if (
        this.MontantExecuteMarche(id) == 0 &&
        this.AfficheMontantgbobalMarche(id) == 0
      ) {
        return 0.0;
      } else {
        return (
          ((parseInt(this.MontantExecuteMarche(id)) /
            parseInt(this.AfficheMontantgbobalMarche(id)))*100
        ).toFixed(0));
      }
    },
     DisponibleMarche(id){
      return (parseFloat(this.AfficheMontantgbobalMarche(id)) - parseFloat(this.MontantExecuteMarche(id)))
  },
  AfficheMontantgbobalMarche(id){
      return (parseFloat(this.MontantReelMarche(id)) + parseFloat(this.montantAvenantParMarche(id)))
  },
NombreBailler(id){
    return this.BailleurParMarche(id).length
},
ShowMyLigne(id){
      if(this.recupereIDSection==0){
         this.recupereIDSection=id;
      }else if(this.recupereIDSection!=0 && this.recupereIDSection !=id){
        this.recupereIDSection=0;
        this.recupereIDSection=id;
      }
      else{
         this.recupereIDSection=0;
      }
       
    },
ShowMyUa(id){
      if(this.recupereIDactivite==0){
         this.recupereIDactivite=id;
      }else if(this.recupereIDactivite!=0 && this.recupereIDactivite !=id){
        this.recupereIDactivite=0;
        this.recupereIDactivite=id;
      }
      else{
         this.recupereIDactivite=0;
      }
       
    },


genererEnPdfDetailReamenagement() {
      this.$htmlToPaper("printpdf12");
    },
   
    genererEnPdf() {
      this.$htmlToPaper("printpdf");
    },

    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },

    partition: partition,

    getDataPaginate(index) {
      this.active_el = index;
      this.page = index;
    },
    precedent() {
      this.active_el--;
      this.page--;
    },
    suivant() {
      this.active_el++;
      this.page++;
    },

    

    formatageSommeSansFCFA: formatageSommeSansFCFA,
formatageSomme:formatageSomme,
    ExporterEnExel() {
      this.$refs.excel.click();
    },
  },
};
</script>

<style scoped>
.taille{
width: 95%;
}

.whitebg {
  background: #fff !important;
  font-weight: bold;
  color: black;
  font-size: 15px;
}
.graybg {
  background: rgb(6, 184, 6) !important;
  color: white;
  font-size: 15px;
  font-weight: bold;
}

.whitebg1 {
  background: #829ed3 !important;
  font-weight: bold;
  color: black;
  font-size: 15px;
}
.graybg1 {
  background: rgb(28, 13, 158) !important;
  color: white;
  font-size: 15px;
  font-weight: bold;
}



.tailgrand {
  width: 100%;
  margin: -5% -50%;
  height: 100%;
}

.modal-body {
  max-height: 85%;
}
th{
font-size: 13px !important;
                      font-weight: bold !important;
                      color: #000 !important;
                      text-align: center !important;
                      background-color: #fbb203 !important;
}
td{
  border:1px solid  #000 !important;
}


.tableauentier{
	width:1500px;
	/* height:150px;	 */
  /* margin: 1em; */
  margin-top: 20px;
  margin-left: 150px;
}

.colonne{
   float:left;
   width:auto;
}
.colon{
   float:right;
   width:auto;
}
.tableauscroll{
	width:35%;
	float:auto;
	overflow:auto;
}

</style>
