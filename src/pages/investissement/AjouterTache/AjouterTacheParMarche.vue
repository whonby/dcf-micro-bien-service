
<template>
    <div>
<div  align="left" style="cursor:pointer;">
    <button class="btn btn-danger" @click.prevent="afficherModalListePersonnel">Page Précédente</button>
    
        </div> 

 <div id="ModiiferexampleModal" class="modal hide tailgrand8965">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier Tâche du marche</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
            <td>
              <div class="control-group">
            <label class="control-label">N°Tache</label>
            <div class="controls">
              <input type="text" :value="numeroTache(detail_marche.id)" class="span5" readonly placeholder="Saisir le numero_tache" />
            </div>
          </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="control-group">
            <label class="control-label">Nom Tache</label>
            <div class="controls">
              <input type="text" v-model="editTacheMarche.libelle" class="span5" placeholder="Saisir le libelle" />
            </div>
          </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="control-group">
            <label class="control-label">Taux Prévu</label>
            <div class="controls">
              <input
                type="text"
                v-model="editTacheMarche.taux_prevu"
                class="span5"
                placeholder="Saisir le taux_prevu"
              />
            </div>
          </div>
            </td>
          </tr>
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ModifierTacheMarch"
          class="btn btn-primary"
          href="#"
         
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>





       <div id="exampleModal" class="modal hide tailgrand8965">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Tâche du marche</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
            <td>
              <div class="control-group">
            <label class="control-label">N°Tache</label>
            <div class="controls">
              <input type="text" :value="numeroTache(detail_marche.id)" class="span5" readonly placeholder="Saisir le numero_tache" />
            </div>
          </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="control-group">
            <label class="control-label">Nom Tache</label>
            <div class="controls">
              <input type="text" v-model="formData.libelle" class="span5" placeholder="Saisir le libelle" />
            </div>
          </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="control-group">
            <label class="control-label">Taux Prévu</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.taux_prevu"
                class="span5"
                placeholder="Saisir le taux_prevu"
              />
            </div>
          </div>
            </td>
          </tr>
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="AjouterTacheMarch"
          class="btn btn-primary"
          href="#"
         
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
<table class="table table-bordered table-striped">
                    <thead>
                   <tr>
                                        
                                         <th>N°LOT</th>
                                        <th>REFERENCE DU MARCHE</th>
                                        <th>TYPE MARCHE</th>
                                        <th>ODJET DU MARCHE</th>
                                        <th>UNITE ADMINISTRATIVE</th>
                                    </tr>
                    </thead>
                    <tbody>
                   <tr class="odd gradeX"
                                        >
                                         <td >
                                            {{detail_marche.numero_lot || 'Non renseigné'}}</td>
                                        <td >
                                            {{detail_marche.reference_marche || 'Non renseigné'}}</td>

                                        <td >
                                            {{affichertypeMarche(detail_marche.type_marche_id)|| 'Non renseigné'}}</td>
                                       

                                        <td >
                                            {{detail_marche.objet|| 'Non renseigné'}}</td>
                                             <td >
                                            {{afficherlibelleUa(detail_marche.unite_administrative_id) || 'Non renseigné'}}</td>
                                    </tr>
                    </tbody>
                </table>
                
                <!-- <h4>Liste des offres</h4> -->
                <table class="table table-bordered table-striped">
                  
            <div class="widget-title">
            <ul class="nav nav-tabs">
             <!-- <li class="active"><a data-toggle="tab" href="#tab0074">Attribution</a></li> -->
             <li class="active"><a data-toggle="tab" href="#tab00214">LISTES DES TACHES PREVUES</a></li>
        </ul>
          </div>
    <div class="widget-content tab-content">

       <div id="tab00214" class="tab-pane active" >
               
             <table class="table table-bordered table-striped">
                    <thead>
                   <tr>
                     <th>Numéro tache</th>
                                        <th>Libelle</th>
                                         <th>Taux prévu</th>
                                        <th style="width:15px">Action</th>
                                       
                                        
                                    </tr>
                    </thead>
                    <tbody>
                   <tr class="odd gradeX" v-for="varTache in listeTacheParMarche(detail_marche.id)" :key="varTache.id"
                                        >
                                         <td @dblclick="afficherModalModifierUniteAdministrative(varTache.id)" style="text-align:center">
                                            {{varTache.numero_tache || 'Non renseigné'}}</td>
                                        <td @dblclick="afficherModalModifierUniteAdministrative(varTache.id)" style="text-align:center">
                                            {{varTache.libelle || 'Non renseigné'}}</td>

                                        <td @dblclick="afficherModalModifierUniteAdministrative(varTache.id)" style="text-align:center">
                                            {{varTache.taux_prevu|| 'Non renseigné'}}%</td>
                                       <td>
              <div class="btn-group">
              <button @click.prevent="supprimerTacheMarche(varTache.id)"  
              class="btn btn-danger ">
                <span class=""><i class="icon-trash"> Supprimer</i></span></button>
             
            </div>

                  </td>

                                    </tr>
                    </tbody>
                </table>
                </div>
    </div>
    
        
                    
                </table>

              
     
 
<fab :actions="fabActions" @cache="afficherModalAjouterTitre" main-icon="apps" bg-color="green"></fab>
    <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterTitre()">Open</button>
<button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
<notifications  />



    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
// import { formatageSomme } from '../../../../../src/Repositories/Repository';
import moment from 'moment';
export default {
    
    data(){
        return{
       fabActions: [
        {
          name: "cache",
          icon: "add"
        }
       
      ],
        formData:{
             
            
        },
       // message_offre:"",
        editTacheMarche:{
        
        },
           detail_marche:""
        }
    },
    props:["bailleurid"],
created() {
            this.marcheid=this.$route.params.id
   this.detail_marche = this.marches.find(
       idmarche => idmarche.id == this.$route.params.id
   )
   console.log(this.detail_marche);
 
},

       computed: {

...mapGetters("bienService", ["TacheMarche","typeMarches",'modepaiements','getMandatPersonnaliserVise','getMandatPersonnaliser','choixprocedure','acteDepense',"getMarchePersonnaliser","appelOffres","getFacturePersonnaliser",
                "lots","modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","typeFactures",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","motifDecisions",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers",'getEngagementPersonnaliser',"engagements","getEngagementPersonnaliser1","mandats","avenants","getterActeEffetFinanciers"]),

                ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises']),
            ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
                'types_financements']) ,
                ...mapGetters("uniteadministrative",['uniteAdministratives',"budgetGeneral",
      "getPersonnaliseBudgetGeneral","groupUa","groupgranNature","getPersonnaliseBudgetGeneralParBienService",
      "montantBudgetGeneral", ]),
    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),
      
 affichertypeMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.typeMarches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
afficherlibelleUa() {
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
 listeTacheParMarche() {
      return id => {
        if (id != null && id != "") {
          return this.TacheMarche.filter(element => element.marche_id == id && element.situation==0);
        }
      };
    },
numeroTache() {
      return id => {
        if (id != null && id != "") {
          return this.TacheMarche.filter(element => element.marche_id == id).length + 1;
        }
      };
    },
    // recuperation de 
    

      
      },

      methods:{ 

      ...mapActions("bienService", ['ajouterTacheMarche','modifierTacheMarche',
     'supprimerTacheMarche'
    
     ]),
afficherModalListePersonnel(){
                window.history.back()
            },
 afficherModalAjouterTitre() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    afficherModalModifierUniteAdministrative(id) {
      this.$("#ModiiferexampleModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editTacheMarche = this.listeTacheParMarche(this.detail_marche.id).find(items=>items.id==id);
    },

ModifierTacheMarch() {
      
      var nouvelObjet = {
        ...this.editTacheMarche,
        marche_id: this.detail_marche.id,
         numero_tache:this.numeroTache(this.detail_marche.id),
         situation:0
       
      };
      this.modifierTacheMarche(nouvelObjet);

      this.editTacheMarche = {
        taux_prevu: "",
        libelle: "",
        
      };
    },



AjouterTacheMarch() {
      
      var nouvelObjet = {
        ...this.formData,
        marche_id: this.detail_marche.id,
         numero_tache:this.numeroTache(this.detail_marche.id),
       situation:0
      };
      this.ajouterTacheMarche(nouvelObjet);

      this.formData = {
        taux_prevu: "",
        libelle: "",
        
      };
    },
 formaterDate(date) {
              return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },
      }
}
</script>

<style scoped>
.tailgrand8965{
  width: 23%;
  margin: 0 -10%;
}
</style>
