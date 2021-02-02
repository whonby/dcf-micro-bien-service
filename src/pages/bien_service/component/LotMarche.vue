<template>
<div>
  <div class="container-fluid">
    <div class="row-fluid">
      <div class="span4"></div>
      <div class="span4"></div>
      <div class="span4" align="right">
        <a href="#exampleModal" data-toggle="modal" class="btn btn-success" align="rigth">Ajouter</a>
      </div>
      <div class="span12">

        <div class="widget-box">
          <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
            <h5>Liste des Lots</h5>
          </div>
          <div class="widget-content nopadding">
            <table class="table table-bordered table-striped">
              <thead>
              <tr>
                <th>N°</th>
                <th>Intitulé du lot</th>
                <th>Infrastructure</th>
                <th>Région</th>
                <th title="Sous Prefecture">S/P</th>
                <th>Latitude</th>
                <th>Longitude</th>
                <th>Livrables</th>
                <th>Montant estimatif en FCFA TTC</th>
                

                <th>Action</th>
              </tr>
              </thead>
              <tbody>
              <tr class="odd gradeX" v-for="marche in getLotMarche"
                  :key="marche.id">
                <td @dblclick="editeMarcheLot(marche.id)">
                  {{marche.numero_lot || 'Non renseigné'}}
                </td>
                <td @dblclick="editeMarcheLot(marche.id)">
                  {{marche.objet || 'Non renseigné'}}
                </td>
                <td @dblclick="editeMarcheLot(marche.id)">
                  {{LIBELLEInfas(marche.infrastructure_id) || 'Non renseigné'}}
                </td>
                 <td @dblclick="editeMarcheLot(marche.id)">
                  {{afficherLibelleLocalisationGeographie(marche.localisation_geographie_id) || 'Non renseigné'}}
                </td>
                 <td @dblclick="editeMarcheLot(marche.id)">
                  {{afficherLibelleLocalisationGeographie(marche.sous_prefecture_id) || 'Non renseigné'}}
                </td>
                <td @dblclick="editeMarcheLot(marche.id)">
                  {{marche.latitude || 'Non renseigné'}}
                </td>
                <td @dblclick="editeMarcheLot(marche.id)">
                  {{marche.longitude || 'Non renseigné'}}
                </td>
                 <td @dblclick="editeMarcheLot(marche.id)">
                  {{marche.livrable || 'Non renseigné'}}
                </td>
                <td @dblclick="editeMarcheLot(marche.id)" style="text-align: center;color:#000000;font-weight:bold;">
                  {{formatageSomme(parseFloat(marche.montant_marche)) || 'Non renseigné'}}
                </td>
                
                <td>
                    <router-link :to="{ name: 'CycleDeVie', params: { id: marche.id }}"
                                 class="btn btn-inverse " title="Cycle de vie du marche">
                        <span class=""><i class=" icon-calendar"></i></span>
                    </router-link>
                  <button @click.prevent="supprimerMarche(marche.id)"  class="btn btn-danger ">
                    <span class=""><i class="icon-trash">Supprimer</i></span></button>
                </td>
               </tr>
               <tr>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                  <td></td>
                 <td style="font-weight:bold;">Total</td>
                 <td style="text-align: center;color:red;font-weight:bold;">{{formatageSomme(parseFloat(SommeDesLots(macheid)))}}</td>
                 <td></td>
               </tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  </div>

  <!--Formulaire d'ajout de lot-->

  <div id="exampleModal" class="modal hide grdirModalActeEffet78">
    <div class="modal-header">
      <button data-dismiss="modal" class="close" type="button">×</button>
      <h3>Ajouter Lot</h3>
    </div>
    <div class="modal-body">
      <table class="table table-bordered table-striped">
        <tr>
<td><div class="control-group">
                        <label class="control-label">Numéro du lot</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    :value="recupererNumeroDeLot"
                                    class="span3"
                                   readonly
                            />
                        </div>
                        </div></td>
<td colspan="2">
  <div class="control-group">
                        <label class="control-label">Objet du lot</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="formData.objet"
                                    class="span8"
                                   
                            />
                        </div>
                        </div>
</td>

        </tr>
        <tr>
           <td><div class="control-group">
                        <label class="control-label">Montant estimatif du Lot</label>
                        <div class="controls">
                            <!-- <input
                                    type="text"
                                    v-model="formData.montant_marche"
                                    
                                    class="span3"
                                   
                            /> -->
                            <money v-model="formData.montant_marche" class="span3"></money>
                        </div>
                         <code v-if="sommeMontant(formData.montant_marche)>detail_marche.montant_marche">
           Impossible d'effectuer l'engistrement</code>
          <code v-if="sommeMontant(formData.montant_marche)>detail_marche.montant_marche">
            Car le montant total des lots est supperieur  </code>
          <code v-if="sommeMontant(formData.montant_marche)>detail_marche.montant_marche">
            au montant du marché  </code>
          <table class="table table-bordered table-striped" v-if="formData.montant_marche !=0">
            <thead>
            <tr>
              <th>Montant marché</th>
              <th>Total montant lot</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>{{formatageSomme(parseFloat(detail_marche.montant_marche))}}</td>
              <td>{{formatageSomme(parseFloat(sommeMontant(formData.montant_marche)))}}</td>
            </tr>
            </tbody>
       </table>
                        </div></td>
                        <td><div class="control-group">
                        <label class="control-label">Région</label>
                         <div class="controls">
         
               <select v-model="formData.localisation_geographie_id" class="span4" >
               <option v-for="plans in afficherCodeStructureLibelle(recupererLataille)" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select>
      
       </div>
                        </div></td>
                        <td><div class="control-group">
                        <label class="control-label">Département</label>
                         <div class="controls">
        
               <select v-model="formData.departement_id" class="span4" :readOnly="deveroiullage">
               <option v-for="plans in recupererParentId(formData.localisation_geographie_id)" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select>
      
       </div>
                        </div></td>
        </tr>
        <tr>
          
                        
                        <td><div class="control-group">
                        <label class="control-label">Sous-Préfecture</label>
                         <div class="controls">
       
               <select v-model="formData.sous_prefecture_id" class="span4" :readOnly="deveroiullageSousprefecture">
               <option v-for="plans in recupererParentId(formData.departement_id)" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select>
      
       </div>
                        </div></td>
                        <td><div class="control-group">
                        <label class="control-label">Latitude</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="formData.latitude"
                                    class="span4"
                                   
                            />
                        </div>
                        </div></td>
                        <td><div class="control-group">
                        <label class="control-label">Longitude</label>
                        <div class="controls">
                            <input
                                    type="text"
                                       v-model="formData.longitude"
                                    class="span4"
                                   
                            />
                        </div>
                        </div></td>
        </tr>
        <tr>
          <td><div class="control-group">
                        <label class="control-label">Bénéficiaires</label>
                        <div class="controls">
                            <input
                                    type="text"
                                       v-model="formData.beneficiaire"
                                    class="span4"
                                   
                            />
                        </div>
                        </div></td>
                        <td colspan="2"><div class="control-group">
                        <label class="control-label">Livrables</label>
                        <div class="controls">
                            <input
                                    type="text"
                                       v-model="formData.livrable"
                                    class="span4"
                                   
                            />
                        </div>
                        </div></td>
        </tr>
      </table>
    </div>
    <div class="modal-footer">
      <a v-if="sommeMontant(formData.montant_marche)<=detail_marche.montant_marche"
          @click.prevent="ajouter()"
          class="btn btn-primary"
          href="#"
      >Valider</a>
      <a data-dismiss="modal" class="btn" href="#">Fermer</a>
    </div>
  </div>


  <!--Edition de lot-->

  <div id="editBailleuMarche" class="modal hide grdirModalActeEffet78" aria-hidden="true" style="display: none;">
    <div class="modal-header">
      <button data-dismiss="modal" class="close" type="button">×</button>
      <h3>Modification </h3>
    </div>
    <div class="modal-body">
       <table class="table table-bordered table-striped">
        <tr>
<td><div class="control-group">
                        <label class="control-label">Numéro du lot</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    :value="editor.numero_lot"
                                    class="span"
                                   readonly
                            />
                        </div>
                        </div></td>
<td colspan="2">
  <div class="control-group">
                        <label class="control-label">Objet du lot</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="editor.objet"
                                    class="span"
                                   
                            />
                        </div>
                        </div>
</td>

        </tr>
        <tr>
           <td><div class="control-group">
                        <label class="control-label">Montant estimatif du Lot</label>
                        <div class="controls">
                            <input
                                    type="number"
                                    v-model="editor.montant_marche"
                                    class="span"
                                   
                            />
                        </div>
                        
                        </div></td>
                        <td><div class="control-group">
                        <label class="control-label">Région</label>
                         <div class="controls">
         
               <select v-model="editor.localisation_geographie_id" class="span" >
               <option v-for="plans in afficherCodeStructureLibelle(recupererLataille)" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select>
      
       </div>
                        </div></td>
                        <td><div class="control-group">
                        <label class="control-label">Département</label>
                         <div class="controls">
        
               <select v-model="editor.departement_id" class="span" :readOnly="deveroiullage">
               <option v-for="plans in recupererParentId(editor.localisation_geographie_id)" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select>
      
       </div>
                        </div></td>
        </tr>
        <tr>
          
                        
                        <td><div class="control-group">
                        <label class="control-label">Sous-Préfecture</label>
                         <div class="controls">
       
               <select v-model="editor.sous_prefecture_id" class="span" :readOnly="deveroiullageSousprefecture">
               <option v-for="plans in recupererParentId(editor.departement_id)" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select>
      
       </div>
                        </div></td>
                        <td><div class="control-group">
                        <label class="control-label">Latitude</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="editor.latitude"
                                    class="span"
                                   
                            />
                        </div>
                        </div></td>
                        <td><div class="control-group">
                        <label class="control-label">Longitude</label>
                        <div class="controls">
                            <input
                                    type="text"
                                       v-model="editor.longitude"
                                    class="span"
                                   
                            />
                        </div>
                        </div></td>
        </tr>
         <tr>
          <td><div class="control-group">
                        <label class="control-label">Bénéficiaires</label>
                        <div class="controls">
                            <input
                                    type="text"
                                       v-model="editor.beneficiaire"
                                    class="span"
                                   
                            />
                        </div>
                        </div></td>
                        <td colspan="2"><div class="control-group">
                        <label class="control-label">Livrables</label>
                        <div class="controls">
                            <input
                                    type="text"
                                       v-model="editor.livrable"
                                    class="span"
                                   
                            />
                        </div>
                        </div></td>
        </tr>
      </table>
    </div>
    <div class="modal-footer">
      <a
         @click.prevent="modification()"
         class="btn btn-primary"
         href="#"
      >Modification</a>
      <a data-dismiss="modal" class="btn" href="#">Fermer</a>
    </div>
  </div>

  <notifications/>
</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {formatageSomme} from "@/Repositories/Repository";

export default {
name: "LotMarche",
  data(){
    return{
      fabActions: [
        {
          name: "cache",
          icon: "add"
        },
      ],
      formData: {
        objet:"",
        montant_marche:0,
        type_marche_id:"",
        unite_administrative_id:"",
        activite_id:"",
        imputation:"",
        attribue:0,
        Nature_des_prix:"",
        procedure_passation_id:"",
        exo_id:"",
        typeappel_id:"",
        gdenature_id:"",
        plan_passation_marche_id:"",
        type_financement:"",
        source_financement:"",
        activite:"",
        ligne_budgetaire:"",
        revue:"",
        beneficiaire:"",
        livrable:"",
        date_transmission_dao_dmp_prevu:"",
        date_dmp_dao_prevu:"",
        date_bailleur_dmp_prevu:"",
        date_publication_ao_prevu:"",
        date_lettre_invitation_prevu:"",
        date_reception_offre_prevu:"",
        date_ouverture_offre_technique_prevu:"",
        date_rapport_ouverture_prevu:"",
        date_ouverture_offre_finnancier_prevu:"",
        date_jugement_offre_prevu:"",
        date_rapport_evaluation_combine_prevue:"",
        date_demande_ano_dmp_prevue:"",
        date_ano_dmp_attribution_prevue:"",
        date_negociation_prevue:"",
        date_signature_attributaire_prevue:"",
        date_signature_autorite_contractante_prevue:"",
        date_approbation_marche_prevue:"",
        date_execution_marche_debut_prevue:"",
        durre_marche_prevue:"",
        date_execution_fin_prevue:"",
        nature_prix:"",
        libelle_procedure:"",
        parent_id:"",
        numero_lot:"",
      },
      editor:"",
      lot:"",
      search: "",
      detail_marche:"",

    }
  },

  props:["macheid"],
  created() {
    this.lot=this.getMarchePersonnaliser.filter(item=>item.parent_id==this.macheid)
    this.detail_marche=this.getMarchePersonnaliser.find(item=>item.id==this.macheid)
  //console.log(this.lot)
  },
  computed:{
    ...mapGetters('bienService',['personnaliseGetterMarcheBailleur',"getMarchePersonnaliser","marches"]),
    ...mapGetters("bienService", ['mandats','getMandatPersonnaliserVise','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
     'acteEffetFinanciers','montantPlanification','montantContratualisation','afficheContratualisation','affichePlanifier',
     'nombremarchesExecute',
     'AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
      "printMarcheNonAttribue","procedurePassations","typeTypeProcedures",
     "montantComtratualisation","text_juridiques", "gettersOuverturePersonnaliser", "typeActeEffetFinanciers"]),


     ...mapGetters("uniteadministrative",['getterligneExempter','uniteAdministratives',"budgetGeneral",
      "getPersonnaliseBudgetGeneral","groupUa","groupeUaPourMarheHorSib" ,"budgetEclate","groupgranNature","getPersonnaliseBudgetGeneralParBienService",
      "montantBudgetGeneral", ]),
       ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
 ...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires',"grandes_natures",
 'structures_geographiques','localisations_geographiques','getterInfrastrucure']),
   ...mapGetters("gestionMarche", ['entreprises']),
   ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements', 
  'types_financements']) ,
    LIBELLEInfas(){
      return id =>{
        if(id!=null && id!=""){
          let objet = this.getterInfrastrucure.find(item => item.id==id )
          if(objet){
            return objet.libelle
          }
          return null
        }
      }
    },
    afficheIdInfrasture(){
      return id =>{
        if(id!=null && id!=""){
          let objet = this.marches.find(item => item.id==id )
          if(objet){
            return objet.infrastructure_id
          }
          return null
        }
      }
    },
     afficherLibelleLocalisationGeographie(){
   return id =>{
     if(id!=null && id!=""){
       let response = this.localisations_geographiques.find(item => item.id==id)
       if(response){
         return response.libelle
       }
     }
   }
 },
    recupererNumeroDeLot(){
  return this.getLotMarche.length + 1
},
    
    getLotMarche(){
      return this.getMarchePersonnaliser.filter(item=>item.parent_id==this.macheid);
    },

recupererLataille(){
  return this.structures_geographiques.length-2
},

// 
afficherCodeStructure(){
      return id =>{
        if(id!=null && id!=""){
          let objet = this.structures_geographiques.find(item => item.id==id )
          if(objet){
            return objet.niveau
          }
          return null
        }
      }
    },
// recuperation parent id
recupererParentId(){
  return id =>{
    if(id!=null && id!=""){
      return this.localisations_geographiques.filter(item => item.parent==id)
    }
  }
}, 
SommeDesLots(){
  return id =>{
    if(id!=null && id!=""){
      return this.getMarchePersonnaliser.filter(item => item.parent_id==id).reduce((prec, cur) => parseFloat(prec)+ parseFloat(cur.montant_marche), 0)
    }
  }
},
    afficherCodeStructureLibelle(){
      return id =>{
        if(id!=null && id!=""){
          return this.localisations_geographiques.filter(item => this.afficherCodeStructure(item.structure_localisation_geographique_id)==id && item.parent!=1)
          
          
        }
      }
    },

  deveroiullage(){
      return this.formData.localisation_geographie_id=="";
    },
    deveroiullageSousprefecture(){
      return this.formData.departement_id=="";
    },
    recupererLatailleDepartement(){
  return this.structures_geographiques.length-1
},

   recupererLatailleSousPrefecture(){
  return this.structures_geographiques.length
},
















    sommeMontant(){
     return montant_saisi=>{
       //console.log(montant_saisi)
       let initialValue = 0;
       let ObjetMontant =this.lot.reduce(function (total, currentValue) {
         return total + parseFloat(currentValue.montant_marche) ;
       }, initialValue);
        console.log(ObjetMontant)
       if(montant_saisi==0){
         return ObjetMontant
       }

       let montant=parseFloat(ObjetMontant) + parseFloat(montant_saisi)
       return parseFloat(montant);
     }

    },
    afficherStatusSib() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.sib;
      }
      return 
        }
      };
    },
    AjouteMarcheSiBetHorsSib(){
      if(this.afficherStatusSib(this.macheid)==0)
      {
        return 0
      }
      else{
        return 1
      }
    }
  },
  methods:{
    ...mapActions("bienService", ['ajouterSousMarcheLot','modifierMarche','modifierMarcheBascule',
      'supprimerMarche','modifierActeEffetFinancier',"getMarche","getActeEffetFinancier","modifierSousMarche"]),
    formatageSomme:formatageSomme,
    ajouter(){
      
     let intitule=this.detail_marche.objet+" / "+this.formData.objet
      this.formData={
        objet:intitule,
       localisation_geographie_id:this.formData.localisation_geographie_id,
        departement_id:this.formData.departement_id,
        sous_prefecture_id:this.formData.sous_prefecture_id,
        latitude:this.formData.latitude,
        longitude:this.formData.longitude,
        beneficiaire:this.formData.beneficiaire,
        livrable:this.formData.livrable,
            montant_marche:this.formData.montant_marche,
            type_marche_id:this.detail_marche.type_marche_id,
            unite_administrative_id:this.detail_marche.unite_administrative_id,
            activite_id:this.detail_marche.activite_id,
            imputation:this.detail_marche.imputation,
            attribue:0,
            procedure_passation_id:this.detail_marche.procedure_passation_id,
            exo_id:this.detail_marche.exo_id,
            typeappel_id:this.detail_marche.typeappel_id,
            gdenature_id:this.detail_marche.gdenature_id,
            plan_passation_marche_id:this.detail_marche.plan_passation_marche_id,
            type_financement:this.detail_marche.type_financement,
            source_financement:this.detail_marche.source_financement,
            activite:this.detail_marche.activite,
            ligne_budgetaire:this.detail_marche.ligne_budgetaire,
            revue:this.detail_marche.revue,
           // beneficiaire:this.detail_marche.beneficiaire,
            date_transmission_dao_dmp_prevu:this.detail_marche.date_transmission_dao_dmp_prevu,
            date_dmp_dao_prevu:this.detail_marche.date_dmp_dao_prevu,
            date_bailleur_dmp_prevu:this.detail_marche.date_bailleur_dmp_prevu,
            date_publication_ao_prevu:this.detail_marche.date_publication_ao_prevu,
            date_lettre_invitation_prevu:this.detail_marche.date_lettre_invitation_prevu,
            date_reception_offre_prevu:this.detail_marche.date_reception_offre_prevu,
            date_ouverture_offre_technique_prevu:this.detail_marche.date_ouverture_offre_technique_prevu,
            date_rapport_ouverture_prevu:this.detail_marche.date_rapport_ouverture_prevu,
            date_ouverture_offre_finnancier_prevu:this.detail_marche.date_ouverture_offre_finnancier_prevu,
            date_jugement_offre_prevu:this.detail_marche.date_jugement_offre_prevu,
            date_rapport_evaluation_combine_prevue:this.detail_marche.date_rapport_evaluation_combine_prevue,
            date_demande_ano_dmp_prevue:this.detail_marche.date_demande_ano_dmp_prevue,
            date_ano_dmp_attribution_prevue:this.detail_marche.date_ano_dmp_attribution_prevue,
            date_negociation_prevue:this.detail_marche.date_negociation_prevue,
            date_signature_attributaire_prevue:this.detail_marche.date_signature_attributaire_prevue,
            date_signature_autorite_contractante_prevue:this.detail_marche.date_signature_autorite_contractante_prevue,
            date_approbation_marche_prevue:this.detail_marche.date_approbation_marche_prevue,
            date_execution_marche_debut_prevue:this.detail_marche.date_execution_marche_debut_prevue,
            durre_marche_prevue:this.detail_marche.durre_marche_prevue,
            date_execution_fin_prevue:this.detail_marche.date_execution_fin_prevue,
            nature_prix:this.detail_marche.nature_prix,
            libelle_procedure:this.detail_marche.libelle_procedure,
            parent_id:this.detail_marche.id,
            numero_lot:this.recupererNumeroDeLot,
            sib:this.AjouteMarcheSiBetHorsSib,
            infrastructure_id:this.afficheIdInfrasture(this.macheid)
            
      }
    console.log(this.formData)
      this.ajouterSousMarcheLot(this.formData)



      this.formData= {
        objet:"",
            montant_marche:"",
            type_marche_id:"",
            unite_administrative_id:"",
            activite_id:"",
            imputation:"",
            attribue:0,
            Nature_des_prix:"",
            procedure_passation_id:"",
            exo_id:"",
            typeappel_id:"",
            gdenature_id:"",
            plan_passation_marche_id:"",
            type_financement:"",
            source_financement:"",
            activite:"",
            ligne_budgetaire:"",
            revue:"",
            beneficiaire:"",
            date_transmission_dao_dmp_prevu:"",
            date_dmp_dao_prevu:"",
            date_bailleur_dmp_prevu:"",
            date_publication_ao_prevu:"",
            date_lettre_invitation_prevu:"",
            date_reception_offre_prevu:"",
            date_ouverture_offre_technique_prevu:"",
            date_rapport_ouverture_prevu:"",
            date_ouverture_offre_finnancier_prevu:"",
            date_jugement_offre_prevu:"",
            date_rapport_evaluation_combine_prevue:"",
            date_demande_ano_dmp_prevue:"",
            date_ano_dmp_attribution_prevue:"",
            date_negociation_prevue:"",
            date_signature_attributaire_prevue:"",
            date_signature_autorite_contractante_prevue:"",
            date_approbation_marche_prevue:"",
            date_execution_marche_debut_prevue:"",
            durre_marche_prevue:"",
            date_execution_fin_prevue:"",
            nature_prix:"",
            libelle_procedure:"",
            parent_id:"",
            numero_lot:"",
      }
    },
  editeMarcheLot(index){
    this.$('#editBailleuMarche').modal({
      backdrop: 'static',
      keyboard: false
    });
    this.editor = this.getMarchePersonnaliser.find(item=>item.id==index)
  },
  modification(){
       console.log("OKOKOK")
      let objet={
        id:this.editor.id,
        objet:this.editor.objet,
        montant_marche:this.editor.montant_marche,
        localisation_geographie_id:this.editor.localisation_geographie_id,
        departement_id:this.editor.departement_id,
        livrable:this.editor.livrable,
        beneficiaire:this.editor.beneficiaire,
        sous_prefecture_id:this.editor.sous_prefecture_id,
        latitude:this.editor.latitude,
        longitude:this.editor.longitude,
        sib:this.editor.sib,
        attribue:0,
        numero_lot:this.editor.numero_lot,
       
        infrastructure_id:this.afficheIdInfrasture(this.macheid)
      }

      
      this.modifierSousMarche(objet)
  }
  }
}
</script>

<style scoped>
.grdirModalActeEffet78{
  width: 55%;
  margin: 0 -30%;
}

</style>