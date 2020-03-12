
<template>
  <div>

     <div id="exampleModalMotif" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Validation Unite administrative</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal" >
          <div class="control-group">
                            <label class="control-label">Motif Ua </label>
                            <div class="controls">
                              <select v-model="editBesoinImmo.motif_ua">
                                <option value="0">En attente</option>
                              <option value="1">Valider</option>
                             <!-- <option value="2">Rejetter</option> -->
    
    </select>
                           
                            </div>
                          </div>
                           <div class="control-group">
                            <label class="control-label">Date Decision :</label>
                            <div class="controls">
                              <input type="date" class="span"  v-model="editBesoinImmo.date_motif_ua"/>
                            </div>
                          </div>
                           
         
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierBesoinImmoLocal(editBesoinImmo)"
          class="btn btn-primary"
          href="#"
         
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>


     <div id="exampleModalMotifservice" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Validation service</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal" >
          <div class="control-group">
                            <label class="control-label">Motif Ua </label>
                            <div class="controls">
                              <select v-model="editBesoinImmo.motif_demande">
                                <option value="0">En attente</option>
                              <option value="1">Valider</option>
                             <!-- <option value="2">Rejetter</option> -->
    
    </select>
                           
                            </div>
                          </div>
                           <div class="control-group">
                            <label class="control-label">Date Decision :</label>
                            <div class="controls">
                              <input type="date" class="span"  v-model="editBesoinImmo.date_motif"/>
                            </div>
                          </div>
                           
         
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierBesoinImmoLocal(editBesoinImmo)"
          class="btn btn-primary"
          href="#"
         
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>


    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
     <div id="exampleModal" class="modal hide tailgrand">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Demande equipement</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
        
            <tr>
              <td>
                <div class="control-group">
                  <label class="control-label">Type Unite d'administrative</label>
                  <div class="controls">
                    <select v-model="formData.type_ua_id" class="span4">
                      <option
                        v-for="typeUniteA in type_Unite_admins"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Unite administrative</label>
                  <div class="controls">
                    <select v-model="formData.ua_id" class="span4">
                      <option value=""></option>
                      <option
                        v-for="typeUniteA in uniteAdministDynamiques(formData.type_ua_id)"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
               <td>
                 <div class="control-group">
                  <label class="control-label">Fonction</label>
                  <div class="controls">
                    <select v-model="formData.fonction_id" class="span4" >
                     <option value="">Désactiver</option>
                      <option
                        v-for="typeUniteA in fonctionDynamiquesParUa(formData.ua_id)"
                        :key="typeUniteA.id"
                        :value="typeUniteA.fonction.id"
                      >{{typeUniteA.fonction.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
              
            </tr>
            <tr>
              <td>
              
               <div class="control-group">
                  <label class="control-label">Direction</label>
                  <div class="controls">
                    <select v-model="formData.servicegest_id" class="span4" >
                      <option value="">Désactiver</option>
                      <option
                       value="Direction"
                      >Direction</option>
                    </select>
                  </div>
                </div>
              </td>
              <td>
                 <div class="control-group">
                  <label class="control-label">Service</label>
                  <div class="controls">
                    <select v-model="formData.localisationgeo_id" class="span4">
                      <option value="">Désactiver</option>
                      <option
                        v-for="typeUniteA in servicesua"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
               <td>
              
               <div class="control-group">
                  <label class="control-label">famille</label>
                  <div class="controls">
                    <select v-model="formData.section_id" class="span4">
                      <option value=""></option>
                      <option
                        v-for="typeUniteA in familleNormeDynamiques(formData.servicegest_id)"
                        :key="typeUniteA.id"
                        :value="typeUniteA.norme_famille.id"
                      >{{typeUniteA.norme_famille.libelle}}</option>
                       <option
                        v-for="typeUniteA in familleNormeServiceDynamiques(formData.localisationgeo_id)"
                        :key="typeUniteA.id"
                        :value="typeUniteA.norme_famille.id"
                      >{{typeUniteA.norme_famille.libelle}}</option>
                       <option
                        v-for="typeUniteA in familleNormeFonctionDynamiques(formData.fonction_id)"
                        :key="typeUniteA.id"
                        :value="typeUniteA.norme_famille.id"
                      >{{typeUniteA.norme_famille.libelle}}</option>
                    </select>
                  </div>
                    <!-- <input
                      type="text"
                     :value="codeSectionNature"
                      class="span"
                      placeholder="Saisir le code"
                      readonly
                    /> -->
                </div>
              </td>
              
            </tr>
            <tr>
             
              <td>
                <div class="control-group">
                  <label class="control-label">Norme</label>
                
                  <div class="controls">
                    <input
                      type="number"
                    :value="afficheNormeFamille"
                      class="span4"
                      
                      readonly
                      
                    />
                  </div>
                  </div>
              </td>
               <td>
                <div class="control-group">
                  <label class="control-label">Demande Equipement</label>
                
                  <div class="controls">
                   <input
                   :max="afficheNormeFamille"
                      type="number"
                    v-model="formData.demande"
                      class="span4"
                     
                    />
                  </div>
                  </div>
              </td>
               <td>
                <div class="control-group">
                  <label class="control-label">Acteur demandeur</label>
                
                  <div class="controls">
                    <input
                      type="text"
                  :value="afficheActeurDepense(formData.fonction_id)"
                      class="span4"
                     readonly
                      
                    />
                  </div>
                  </div>
              </td>
              </tr>
              <tr>
              <td>
                <div class="control-group">
                  <label class="control-label">Cout moyen</label>
                    
               
                  <div class="controls">
                    <input
                      type="text"
                      v-model="formData.libelle"
                      class="span4"
                      placeholder="Saisir le Nom unite administrative"
                       readonly
                    />
               </div>
                </div>
              </td>
               <td>
                <div class="control-group">
                  <label class="control-label">Total</label>
                    
               
                  <div class="controls">
                    <input
                      type="text"
                      v-model="formData.libelle"
                      class="span4"
                      placeholder="Saisir le Nom unite administrative"
                     readonly
                    />
               </div>
                </div>
              </td>
               <td>
                <div class="control-group">
                  <!-- <label class="control-label">Code</label> -->
                
                  <div class="controls">
                    <input
                      type="hidden"
                   
                      class="span"
                      placeholder="Saisir le code"
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
          @click.prevent="ajouterUniteAdministrativeLocal(formData)"
          class="btn btn-primary"
          href="#"
         
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->

    <!--///////////////////////////////////////// debut modal de modification //////////////////////////////-->
<div id="modificationModal" class="modal hide taillemodal">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier Besoin d'équipement</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
      
         
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierBesoinImmoLocal(editBesoinImmo)"
          class="btn btn-primary"
          href="#"
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal de modification //////////////////////////////-->
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
                     <download-excel
            class="btn btn-default pull-right"
            style="cursor:pointer;"
            :fields="json_fields"
            title="Liste de demandes d'immobilisation "
            :data="trieUaImmobilisation"
            name="Liste de demandes d'immobilisation"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel>
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des Bessoins Immobilisations de UA</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search" />
              </div> -->
            </div>

            <div class="widget-content nopadding" >
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     <!-- <th>Type UA</th> -->
                    <th>UA</th>
                    <th>Fonction</th>
                     <!-- <th>Equipement Type</th> -->
                     <th>Famille</th>
                    <th>Article</th>
                    <th title="Quantité">Qté</th>
                    <th title="Prix Unitaire">PU</th>
                    <th>Total</th>
                    <th title="date demande">Date dmde</th>
                    
                    <th title="date validation du service">Date sce</th>
                    <th>Motif service</th>
                      <th title="date validation UA">Date UA</th>
                    <th>Motif UA</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="(BesoinImmo,index) in besoinEquipement"
                    :key="BesoinImmo.id"
                  >
                   <td
                      @dblclick="afficherModalModifierBesoinImmo(index)"
                    >{{BesoinImmo.Afficheua.libelle || 'Non renseigné'}}</td> 
                     <td
                      @dblclick="afficherModalModifierBesoinImmo(index)"
                    >{{BesoinImmo.Affichefonction.libelle || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierBesoinImmo(index)"
                    >{{BesoinImmo.Affichefamille.libelle || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierBesoinImmo(index)"
                    >{{BesoinImmo.AfficheArticle.libelle || 'Non renseigné'}}</td>  
                   <!-- <td 
                      @dblclick="afficherModalModifierBesoinImmo(index)"
                    >{{BesoinImmo.typeUniteAdmin.libelle || 'Non renseigné'}}</td> -->
                   
                     <!-- <td
                      @dblclick="afficherModalModifierBesoinImmo(index)"
                    >{{BesoinImmo.AfficheEquipement.libelle || 'Non renseigné'}}</td> -->
                    <!-- <td
                      @dblclick="afficherModalModifierBesoinImmo(index)"
                    >{{BesoinImmo.Affichefamille.libelle || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierBesoinImmo(index)"
                    >{{BesoinImmo.afficheArticle.libelle || 'Non renseigné'}}</td> -->
                    <td
                      @dblclick="afficherModalModifierBesoinImmo(index)"
                    >{{BesoinImmo.quantite}}</td>
                    <td
                      @dblclick="afficherModalModifierBesoinImmo(index)"
                    >{{formatageSomme(parseFloat(BesoinImmo.prix_unitaire)) || 'Non renseigné'}}</td>
                    <td style="text-align: center;"
                      @dblclick="afficherModalModifierBesoinImmo(index)"
                    >{{formatageSomme(parseFloat(BesoinImmo.montant_total)) || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierBesoinImmo(index)"
                    >{{formaterDate(BesoinImmo.date_jour) || 'Non renseigné'}}</td>
                   
                     <td
                      @dblclick="afficherModalModifierBesoinImmo(index)"
                    >{{formaterDate(BesoinImmo.date_motif) || 'Non renseigné'}}</td>

                    
                     <td>
                        <button class="btn btn" @click="afficherModalModifierMotifDemandeservice(index)" >                        
                     <span v-if="BesoinImmo.motif_demande == 0"  class="btn label label-info"  >En attente </span>
                      <span 
                     v-else   class="btn label label-success"> Valider </span>
                      </button>
                    
                    </td>
                    <td
                      @dblclick="afficherModalModifierBesoinImmo(index)"
                    >{{formaterDate(BesoinImmo.date_motif_ua) || 'Non renseigné'}}</td>
                     <td>
                        <button class="btn btn" @click="afficherModalModifierMotifDemande(index)" >
                       
                          
                         
                     <span v-if="BesoinImmo.motif_ua == 1"   class="btn label label-success" >Valider</span>
                     <span 
                     v-else  class="btn label label-info"> En attente </span>
                     
                        
                      </button>
                    
                    </td>

                    <td>
                        <!-- <button class="btn btn-primary" @click="afficherModalAffectation" >
                        <span>
                          <i class="icon-thumbs-up"></i>
                        </span>
                      </button>
                       <button class="btn btn-danger" >
                        <span>
                          <i class=" icon-columns"></i>
                        </span>
                      </button> -->
                     
                      <button class="btn btn-danger" @click="supprimerBesoinImmo(BesoinImmo.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                 <tr
                   
                  >
                  <td ></td>
                   <td ></td>
                    <td></td>
                    <td ></td>
                    <td ></td>
                     <td style="font-weight:bold;">Total</td>
                    <td style="text-align: center;color:red;font-weight:bold;">{{formatageSomme(parseFloat(SommeQuantiteNonCouvert))}}</td>
                    
                    
                    <td ></td>
                  <td ></td>
                    
                    
                   
                    <td ></td>
                    <td></td>
                    <td></td>
                    
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- <div v-else>
              <p style="text-align:center;font-size:20px;color:red;">Aucun Besoin </p>
            </div> -->
          </div>
        </div>
      </div>
    </div>

    <fab :actions="fabActions" @cache="afficherModalAjouterBesoinImmobilisation" main-icon="apps" bg-color="green"></fab>
    <notifications  />
      <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
     <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterBesoinImmobilisation()">Open</button>
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import { formatageSomme } from "../../../Repositories/Repository";

export default {
  name: 'besionImmolisation',
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
        TYPE_UNITE_ADMINISTRATIVE: "typeUniteAdmin.libelle",
        UNITE_ADMINISTRATIVE: "uniteAdminist.libelle",
        DESIGNATION: "famille.libelle",
        QUANTITE: "quantite",
        PRIX_UNITAIRE: "prix_unitaire",
        MONTANT_TOTAL: "montant_total",
         DATE_DE_DEMANDE: "date_jour",
      },
      formData: {
        uniteadmin_id: "",
        epuipement_id: "",
        famille_id: "",
        quantite: "",
        prix_unitaire: "",
        montant_total: "",
        date_jour: "",
        typeuniteadminist_id:"",
        historiqueqte:"",
        motif_demande:"0",
        date_motif:"",
        motif_ua:"0",
        qterealise:"0",
        nature_section_id:""
      },
      editBesoinImmo: {
        uniteadmin_id: "",
        famille_id: "",
        epuipement_id: "",
        quantite: "",
        prix_unitaire: "",
        montant_total: "",
        date_jour: "",
        typeuniteadminist_id:"",
        historiqueqte:"",
        date_motif:""
      },
      direct:"",
      search: ""
    };
  },
// created() {
//     this.formData = this.filtre_besoinImmo.find(
//       BesoinImmo => BesoinImmo.id == this.$route.params.id
//     )
// },
  computed: {
    ...mapGetters("SuiviImmobilisation", [
      "trieUaImmobilisation",
      "equipements",
      "familles",
      "articles",
      "SommeQuantiteNonCouvert",
      "getAfficheArticle",
      "getPersoStock",
      "stockageArticles",
      "groupUatypeNorme",
      "groupUaNorme",
      "groupUaNormeFamille",
      "normeEquipements",
      "groupUaNormeEquipe",
      "groupUaNormeFonction",
      "getPersoNormeArticle",
      "services",
      "besoinEquipement",
      "type_Unite_admins",
      "getPersoListeDesNorme",
      "normeImmo",
      "getPersonnaliseNormeEquipement"
      
    ]),
    ...mapGetters("uniteadministrative", ["uniteAdministratives","directions","servicesua"]),
    ...mapGetters("parametreGenerauxAdministratif", ["type_Unite_admins"]),
...mapGetters("personnelUA", ["all_acteur_depense","acteur_depenses","personnaFonction","fonctions"]),

afficheActeurDepense() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.all_acteur_depense.find(qtreel => qtreel.fonction.id == this.formData.fonction_id);

      if (qtereel) {
        return qtereel.matricule.concat('  ', qtereel.nom,'  ',qtereel.prenom)
      }
      return 0
        }
      };
    },
 fonctionDynamiquesParUa() {
      return id => {
        if (id != null && id != "") {
          return this.all_acteur_depense.filter(element => element.unite_administrative_id == id);
        }
      };
    },
auteurParUaDynamiques() {
      
      return id => {
        if (id != null && id != "") {
          return this.personnaFonction.filter(element => element.unite_administrative_id == id);
        
        }
        
      };
    },
 familleNormeDynamiques() {
      
      return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseNormeEquipement.filter(element => element.direction_id == id);
        }
      };
    },
     familleNormeServiceDynamiques() {
      
      return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseNormeEquipement.filter(element => element.service_id == id);
        }
      };
    },
      familleNormeFonctionDynamiques() {
      
      return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseNormeEquipement.filter(element => element.fonction_id == id);
        }
      };
    },
uniteAdministDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.uniteAdministratives.filter(element => element.type_ua_id == id);
        }
      };
    },
directionDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.directions.filter(element => element.d_ua_id == id);
        }
      };
    },
 uniteAdministrativeDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.getPersoListeDesNorme.filter(element => element.typeua_id == id);
        }
      };
    },
fonctionDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.getPersoListeDesNorme.filter(element => element.ua_id == id);
        }
      };
    },
    afficheNormeFamille() {
      
      const norme1 = this.normeImmo.find(normeEquipe => normeEquipe.famille_id == this.formData.section_id);
      if (norme1) {
        return norme1.norme;
      }
      return 0
    },
     
  },
    
  methods: {
    ...mapActions("SuiviImmobilisation", [
      "getAllBesoinImmo",
      "ajouterBesoinImmo",
      "modifierBesoinImmo",
      "supprimerBesoinImmo",
      "modifierQuantiteEnStock2",
      "modifierQuantiteNormeDmd"
    ]),
    formatageSomme: formatageSomme,

    //afiicher modal ajouter
    afficherModalAjouterBesoinImmobilisation() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
     afficherModalAffectation() {
      this.$("#exampleModal1").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterBesoinImmoLocal() {
 
       if (this.formData.quantite > this.normeequipement ) {
        alert("La norme doit etre superieure au egal a la quantité demande")
      }
      // else if (this.normeequipement <= this.qtedemande  ){
      //    alert("Demande déja Effectuée")
      // }
      else
      {
 //  var objetPourModifierQuantiteEnStock2 = {
      //   id: this.idObjetBesoinImmoAModifierEnStock2,
      //   // qteactuelstock: this.AfficheQteActuelEnStock,
      //   date_jour: this.formData.date_jour,
      //   qte_recu: this.qteRecu,
        
      // }
      var objetPourModifiernormerealise = {
        id: this.normeEqup,
        qtedmd: this.totalNorme
      }
      this.modifierQuantiteNormeDmd(objetPourModifiernormerealise);
       var nouvelObjet = {
      ...this.formData,
       montant_total: this.montantTotal,
      historiqueqte: this.Historqte,
         prix_unitaire:this.coutMoyen,
      norme_id : this.normeEqup,
       normearticle : this.normeequipement,
      dure_vie :this.dureVieEquipement,
      stock_id:this.quantiteEnstockid   ,
      qtestock : this.quantiteEnstock    };
      //  this.modifierQuantiteEnStock2(objetPourModifierQuantiteEnStock2)
      this.ajouterBesoinImmo(nouvelObjet);
     
      
      this.formData = {
        uniteadmin_id: "",
        epuipement_id: "",
        famille_id: "",
        quantite: "",
        article_id:"",
        prix_unitaire: "",
        montant_total: "",
        date_jour: "",
        typeuniteadminist_id:"",
        historiqueqte:"",
        qtestock:"",
        qte_recu: "",
        motif_demande:"0",
        motif_ua:"0",
        norme_id:"",
        normearticle:""
      };
       this.$("#exampleModal").modal('hide');
      }
     
      // this.afficherModalAffectation()
   

    },
    // afficher modal de modification
    afficherModalModifierBesoinImmo(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editBesoinImmo = this.trieUaImmobilisation[index];
    },
     // afficher modal de modification
    afficherModalModifierMotifDemande(index) {
      this.$("#exampleModalMotif").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editBesoinImmo = this.trieUaImmobilisation[index];
    },
    afficherModalModifierMotifDemandeservice(index) {
      this.$("#exampleModalMotifservice").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editBesoinImmo = this.trieUaImmobilisation[index];
    },
    // fonction pour vider l'input modification
    modifierBesoinImmoLocal() {
        if (this.formData.quantite > this.normeequipementModifier ) {
        alert("La norme doit etre superieure au egal a la quantité demande")
      }
      //  else if (this.normeequipementModifier <= this.qtedemandemodifier  ){
      //    alert("Demande déja Effectuer")
      // }
      else
      {
         var objetPourModifiernormerealise1 = {
        id: this.normeEqupmodifier,
        qtedmd: this.totalNormemodifier
      }
     
 var nouvelObjetmodifier = {
        ...this.editBesoinImmo,
         montant_total: this.montantTotalModifier,
      historiqueqte: this.HistorqteModifier,
         prix_unitaire:this.coutMoyenModifier,
         normearticle : this.normeequipementModifier,
         norme_id : this.normeEqupmodifier,
         dure_vie :this.dureVieEquipementModifier,
          stock_id:this.quantiteEnstockidModifier  ,
      qtestock : this.quantiteEnstockModifier
      };
       this.modifierQuantiteNormeDmd(objetPourModifiernormerealise1);
      this.modifierBesoinImmo(nouvelObjetmodifier);
      this.$("#modificationModal").modal('hide');
      this.$("#exampleModalMotif").modal('hide');
      this.$("#exampleModalMotifservice").modal('hide');
      }
     
    },
    alert() {
      console.log("ok");
    },

    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
    
    ExporterEnExel(){
      this.$refs.excel.click()
    }
    
  }
};
</script>
<style scoped>
.taillemodal {
  width: 1400px;
  margin: 0 -700px;
}
.taillemodal1 {
  width: 800px;
  margin: 0 -455px;
}
.sommecolor{
  background-color: red;
  color:red;
  font-size: 120%;
  text-align: center;
  font-weight:bold;
}
.tailgrand{
  width: 72%;
  margin: 0 -35%;
}

</style>
