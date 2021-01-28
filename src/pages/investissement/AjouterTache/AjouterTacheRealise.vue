
<template>
    <div>
<div  align="left" style="cursor:pointer;">
    <button class="btn btn-danger" @click.prevent="afficherModalListePersonnel">Page Précédente</button>
    
        </div> 

 <div id="ModiiferexampleModal" class="modal hide tailgrand452">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier Tâche du marche</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
            <td>
              <div class="control-group">
            <label class="control-label">Nom Tache</label>
            <div class="controls">
              <input type="text" v-model="editTacheMarche.libelle" class="span4" placeholder="Saisir le libelle" />
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
                class="span4"
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
         
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>





       <div id="exampleModal" class="modal hide tailgrand452">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Tâche du marche</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
            <td>
              <div class="control-group">
            <label class="control-label">Tache Réalisé</label>
            <div class="controls">
                <select v-model="formData.libelle" class="span4">
                      <option
                        v-for="servicegest in listeTacheParMarche(detail_marche.marche_id)"
                        :key="servicegest.id"
                        :value="servicegest.id"
                      >{{libelleTache(servicegest.id)}}</option> 
                    </select>
               <!-- <input type="text" v-model="formData.libelle" class="span4" placeholder="Saisir le libelle" />  -->
            </div>
          </div>
            </td>
            <td>
              <div class="control-group">
            <label class="control-label">Taux Prévue</label>
            <div class="controls">
              <input
                type="text"
                :value="TauxPrevue(formData.libelle)"
                class="span4"
                readonly
              />
            </div>
          </div>
            </td>
            <td>
              <div class="control-group">
            <label class="control-label">Taux Realisé</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.taux_realiser"
                class="span4"
                placeholder="Saisir le taux_realiser"
              />
            </div>
          </div>
            </td>
           
          </tr>
          <tr>
            <td colspan="2">
              <div class="control-group">
            <label class="control-label">Observation</label>
            <div class="controls">
             
              <textarea rows="3" class="span8" v-model="formData.tache_realise"></textarea>
            </div>
          </div>
            </td>
             <td>
              <div class="control-group">
            <label class="control-label">Taux Restant</label>
            <div class="controls">
              <input
                type="text"
               :value="AffichierTotalActuel"
                class="span4"
                placeholder="Saisir le taux_realiser"
                readonly
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
                                        
                                         <th>N°DECOMPTE</th>
                                        <th>NUMERO FACTURE</th>
                                        
                                        <th>ODJET DU MARCHE</th>
                                        <th>UNITE ADMINISTRATIVE</th>
                                    </tr>
                    </thead>
                    <tbody>
                   <tr class="odd gradeX"
                                        >
                                         <td style="text-align:center">
                                            {{detail_marche.numero_decompte || 'Non renseigné'}}</td>
                                        <td style="text-align:center">
                                            {{numeroMarche(detail_marche.facture_id) || 'Non renseigné'}}</td>

                                        <td style="text-align:center">
                                            {{objetMarche(detail_marche.marche_id)|| 'Non renseigné'}}</td>
                                       
                                             <td style="text-align:center">
                                            {{afficherlibelleUa(idAdministrative(detail_marche.marche_id)) || 'Non renseigné'}}</td>
                                    </tr>
                    </tbody>
                </table>
                
                <!-- <h4>Liste des offres</h4> -->
                <table class="table table-bordered table-striped">
                  
            <div class="widget-title">
            <ul class="nav nav-tabs">
             <!-- <li class="active"><a data-toggle="tab" href="#tab0074">Attribution</a></li> -->
             <li class="active"><a data-toggle="tab" href="#tab00214">LISTES DES TACHES REALISEES</a></li>
        </ul>
          </div>
    <div class="widget-content tab-content">

       <div id="tab00214" class="tab-pane active" >
               
             <table class="table table-bordered table-striped">
                    <thead>
                   <tr>
                                        <th>Libelle</th>
                                         <th>Taux Réalisstion</th>
                                        <th style="width:15px">Action</th>
                                       
                                        
                                    </tr>
                    </thead>
                    <tbody>
                   <tr class="odd gradeX" v-for="varTache in listeTacheParDecompte(detail_marche.id)" :key="varTache.id"
                                        >
                                        <td @dblclick="afficherModalModifierUniteAdministrative(varTache.id)" style="text-align:center">
                                            {{varTache.libelle || 'Non renseigné'}}</td>

                                        <td @dblclick="afficherModalModifierUniteAdministrative(varTache.id)" style="text-align:center">
                                            {{varTache.taux_realiser|| 'Non renseigné'}}%</td>
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
   this.detail_marche = this.decomptefactures.find(
       idmarche => idmarche.id == this.$route.params.id
   )
   
 
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
                ...mapGetters("uniteadministrative",["decomptefactures",'uniteAdministratives',"budgetGeneral",
      "getPersonnaliseBudgetGeneral","groupUa","groupgranNature","getPersonnaliseBudgetGeneralParBienService",
      "montantBudgetGeneral", ]),
    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),
      
      AffichierTotalActuel() {
      const val = parseFloat(this.TauxPrevue(this.formData.libelle)) - parseFloat(this.formData.taux_realiser);
      return parseFloat(val).toFixed(0);
    },
TauxPrevue() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.TacheMarche.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.taux_prevu;
      }
      return 0
        }
      };
    },

 libelleTache() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.TacheMarche.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_tache.concat(' - ',qtereel.libelle);
      }
      return 0
        }
      };
    },
libelleTache1() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.TacheMarche.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
numeroTache() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.TacheMarche.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_tache;
      }
      return 0
        }
      };
    },
      idAdministrative() {
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
 objetMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.objet;
      }
      return 0
        }
      };
    },
 numeroMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_facture;
      }
      return 0
        }
      };
    },
 
 
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
          return this.TacheMarche.filter(element => element.marche_id == id && element.situation == 0 );
        }
      };
    },
    sommeTaux() {
      return id => {
        if (id != null && id != "") {
          return this.TacheMarche.filter(element => element.marche_id == id && element.situation == 1 && element.parent_id == this.formData.libelle).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.taux_realise), 0).toFixed(0);
        }
      };
    },
listeTacheParDecompte() {
      return id => {
        if (id != null && id != "") {
          return this.TacheMarche.filter(element => element.decompte_id == id && element.situation == 1 );
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
         tache_realise:this.libelleTache(this.formData.libelle)
       
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
        libelle:this.libelleTache1(this.formData.libelle),
        marche_id: this.detail_marche.marche_id,
        situation:1,
         tache_realise:this.formData.tache_realise,
         taux_realiser:this.formData.taux_realiser,
         decompte_id:this.detail_marche.id,
       numero_tache:this.numeroTache(this.formData.libelle),
       parent_id:this.formData.libelle
      };
      this.ajouterTacheMarche(nouvelObjet);

      this.formData = {
        taux_prevu: "",
        libelle: "",
        taux_realiser:"",
        tache_realise:""
      };
    },
 formaterDate(date) {
              return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },
      }
}
</script>
<style scoped>

.tailgrand452{
  width: 55%;
  margin: 0 -25%;
}

</style>