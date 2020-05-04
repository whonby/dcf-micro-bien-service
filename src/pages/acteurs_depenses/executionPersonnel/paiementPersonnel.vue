paiementPersonnel
<template>
  <div>
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide tailgrand">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Paiement du Personnel</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
         
            <tr>
              <td>
                <div class="control-group">
                 <label class="control-label">Exercice en Cours:</label>
                 <div class="controls">
                   <input
                     type="text"
                     :value="anneeAmort"
                     class="span4"
                      placeholder="Saisir l'exercice en cours"
                      readonly
                   />
                 </div>
                </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Unite Administrative</label>
                  <div class="controls">
                    <select v-model="formData.ua_id" class="span4">
                      <option
                        v-for="UniteA in uniteAdministratives"
                        :key="UniteA.id"
                        :value="UniteA.id"
                      >{{UniteA.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Programme</label>
                  <div class="controls">
                    <select v-model="formData.programme_id" class="span4">
                      <option
                        v-for="program in afficheProgrammeParLigne(formData.ligne_id)"
                        :key="program.id"
                        :value="program.id"
                      >{{program.code}}-{{program.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
               <td>
              
               <div class="control-group">
                  <label class="control-label">Action</label>
                  <div class="controls">
                    <select v-model="formData.action_id" class="span4">
                      <option
                        v-for="act in afficheNiveauAction"
                        :key="act.id"
                        :value="act.id"
                      >{{act.code}}-{{act.libelle}}</option>
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
                  <label class="control-label">Activite</label>
                  <div class="controls">
                    <select v-model="formData.activite_id" class="span4">
                      <option
                        v-for="activ in afficheActiviteParAction(formData.action_id)"
                        :key="activ.id"
                        :value="activ.id"
                      >{{activ.code}}-{{activ.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
              <td>
                 <div class="control-group">
                  <label class="control-label">Ligne</label>
                  <div class="controls">
                    <select v-model="formData.ligne_id" class="span4">
                      <option
                        v-for="lignebudg in afficheUaParLignePersonnel(formData.ua_id)"
                        :key="lignebudg.id"
                        :value="lignebudg.afficheEconomique.id"
                      >{{lignebudg.afficheEconomique.code}}-{{lignebudg.afficheEconomique.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
  <td>
    <div class="control-group">
      <label class="control-label">Code Fichier:</label>
      <div class="controls">
        <input
         type="text"
         v-model="formData.codefichier"
         class="span4"
         placeholder="Saisir code fichier"
        />
      </div>
    </div>
  </td>
                <td>
    <div class="control-group">
      <label class="control-label">Fichier Joint:</label>
    
      <div class="controls">
        <input
          type="file"
          class="span"
          placeholder="Saisir fichier joint"
          readonly
        />
      </div>
      </div>
  </td>
            </tr>
            <tr>
             
            
            
            
            
            
            
            
            
            
            
            
            
            
            
              <td colspan="2">
                <div class="control-group">
                  <label class="control-label">Objet Depense:</label>
                    
               
                  <div class="controls">
                    <input
                      type="text"
                      v-model="formData.objetdepense"
                      class="span8"
                      placeholder="Saisir l'objet de depense"
                     
                    />
               </div>
                </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Mois de Paiement:</label>
      
 
                  <div class="controls">
                    <input
                      type="text"
                      v-model="formData.moisdepaiement"
                      class="span4"
                      placeholder="Saisir le mois de paiement"
       
                    />
               </div>
                 </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Montant des Salaires:</label>
      
 
                  <div class="controls">
                    <input
                     type="text"
                     v-model="formData.montantdessalaires"
                     class="span4"
                     placeholder="Saisir le montant de paiement"
       
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
    <!--///////////////////////////////////////// debut modal modification //////////////////////////////-->
    <div id="modificationModal" class="modal hide tailgrand">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier Paiement du Personnel</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          
            <tr>
              <td>
                <div class="control-group">
                  <label class="control-label">Exercice en Cours:</label>
                  <div class="controls">
                    <input
                      type="text"
                      :value="anneeAmort"
                      class="span4"
                      placeholder="Saisir l'exercice en cours"
       
                    />
                  </div>
               </div>
              </td>
               <td>
                 <div class="control-group">
                   <label class="control-label">Unite Administrative</label>
                   <div class="controls">
                     <select v-model="editpaiementPersonnel.ua_id" class="span4">
                       <option
                         v-for="UniteA in uniteAdministratives"
                         :key="UniteA.id"
                         :value="UniteA.id"
                       >{{UniteA.libelle}}</option>
                     </select>
                   </div>
                 </div>
               </td>
               <td>
                 <div class="control-group">
                   <label class="control-label">Programme</label>
                   <div class="controls">
                     <select v-model="editpaiementPersonnel.programme_id" class="span4">
                       <option
                         v-for="program in afficheNiveauPlanProg"
                         :key="program.id"
                         :value="program.id"
                       >{{program.code}}-{{program.libelle}}</option>
                     </select>
                   </div>
                 </div>
               </td>
               <td>
 
              <div class="control-group">
              <label class="control-label">Action</label>
              <div class="controls">
                 <select v-model="editpaiementPersonnel.action_id" class="span4">
                   <option
                    v-for="act in afficheNiveauAction"
                    :key="act.id"
                    :value="act.id"
                   >{{act.code}}-{{act.nom_section}}</option>
                  </select>
               </div>
             </div>
           </td>
             
            </tr>
            <tr>
             <td>
                           
              <div class="control-group">
                 <label class="control-label">Activite</label>
                 <div class="controls">
                   <select v-model="editpaiementPersonnel.activite_id" class="span4">
                     <option
                       v-for="activ in afficheNiveauActivite"
                       :key="activ.id"
                       :value="activ.id"
                     >{{activ.code}}-{{activ.libelle}}</option>
                   </select>
                 </div>
               </div>
             </td>
              <td>
                 <div class="control-group">
                  <label class="control-label">Ligne</label>
                  <div class="controls">
                    <select v-model="editpaiementPersonnel.ligne_id" class="span4">
                      <option
                        v-for="lignebudg in derniereNivoPlanBudgetaire"
                        :key="lignebudg.id"
                        :value="lignebudg.id"
                      >{{lignebudg.code}}-{{lignebudg.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>

              <td>
                <div class="control-group">
                <label class="control-label">Code Fichier:</label>
                 <div class="controls">
                <input
                 type="text"
                 v-model="editpaiementPersonnel.codefichier"
                 class="span4"
                 placeholder="Saisir code fichier"
               />
              </div>
            </div>
            </td>

             
             <td>
            <div class="control-group">
              <label class="control-label">Fichier Joint:</label>
  
              <div class="controls">
                <input
                  type="file"
                  class="span4"
                  placeholder="Saisir fichier joint"
                  readonly
               />
             </div>
            </div>
            </td>
             
            </tr>
            <tr>
            <td colspan="2">
              <div class="control-group">
               <label class="control-label">Objet Depense:</label>
                <div class="controls">
               <input
                 type="text"
                 v-model="editpaiementPersonnel.objetdepense"
                  class="span8"
                  placeholder="Saisir l'objet de depense"
               />
             </div>
             </div>
            </td>
              <td>
             <div class="control-group">
              <label class="control-label">Mois de Paiement:</label>
              <div class="controls">
                <input
                 type="text"
                 v-model="editpaiementPersonnel.moisdepaiement"
                 class="span4"
                 placeholder="Saisir le mois de paiement"
               />
             </div>
             </div>
             </td>
              
              <td>
             <div class="control-group">
              <label class="control-label">Montant des Salaires:</label>
              <div class="controls">
                <input
                 type="text"
                 v-model="editpaiementPersonnel.montantdessalaires"
                 class="span4"
                 placeholder="Saisir le montant de paiement"
               />
             </div>
             </div>
             </td>

            
             
             
            
             
            </tr>
         
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierpaiementPersonnelLocal(editpaiementPersonnel)"
          class="btn btn-primary"
          href="#"
         
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal modification //////////////////////////////-->
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <!-- <download-excel -->
            <!-- class="btn btn-default pull-right" -->
            <!-- style="cursor:pointer;" -->
            <!-- :fields="json_fields" -->
            <!-- title="Liste Paiement du Parsonnel" -->
            <!-- :data="jointureUaChapitreSection" -->
            <!-- name="Liste Unites administratives" -->
            <!-- worksheet="Liste Paiement du Personnel" -->
          <!-- > -->
            <!-- <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i> -->
          <!-- </download-excel> -->
          <div class="widget-box">
            <div class="widget-title">
              <div align="right">
                Recherche:
                <input type="search" placeholder="Saisie section ou libelle" v-model="search" />

                <!-- <div class="span3">
                  <model-list-select
                    v-model="formData.test"
                    style="background-color: rgb(222, 222, 222);"
                    :list="type_Unite_admins"
                    option-value="id"
                    option-text="libelle"
                    placeholder="unite administrative"
                  ></model-list-select>
                </div>
                <button>ok</button>-->
              </div>
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste du paiement personnel</h5>
            </div>

            <div
              class="widget-content nopadding"
            
            >
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Exercice en cours</th>
                    <th title="unite administrative"> ua</th>
                    <th>programme</th>
                    <th>action</th>
                    <th>activité</th>
                    <th>ligne</th>
                    <th>Code Fichier</th>
                    <th>Objet Depense</th>
                    <th>Mois de Paiement</th>
                    <th>Montant des Salaires</th>
                    <th>Fichier Joint</th>

                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="(payepersonnel, index) in paiementPersonnel"
                    :key="payepersonnel.id"
                  >
                   
                   <!-- <template v-if="uniteadministrative.type_ua_id = type_Unite_admins.id"> -->
                     <td  @dblclick="afficherModalModifierpaiementPersonnel(index)">{{payepersonnel.exerciceencours }}</td>
                    <td  @dblclick="afficherModalModifierpaiementPersonnel(index)">{{payepersonnel.ua_id }}</td>
                      <td  @dblclick="afficherModalModifierpaiementPersonnel(index)">{{payepersonnel.programme_id }}</td>
                    <td  @dblclick="afficherModalModifierpaiementPersonnel(index)">{{payepersonnel.action_id }}</td>
                    <td  @dblclick="afficherModalModifierpaiementPersonnel(index)">{{payepersonnel.activité_id }}</td>
                    <td  @dblclick="afficherModalModifierpaiementPersonnel(index)">{{payepersonnel.ligne_id }}</td>
                    <td  @dblclick="afficherModalModifierpaiementPersonnel(index)">{{payepersonnel.codefichier }}</td>
                    <td  @dblclick="afficherModalModifierpaiementPersonnel(index)">{{payepersonnel.objetdepense }}</td>
                    <td  @dblclick="afficherModalModifierpaiementPersonnel(index)">{{payepersonnel.moisdepaiement }}</td>
                    <td  @dblclick="afficherModalModifierpaiementPersonnel(index)">{{payepersonnel.montantdessalaires }}</td>
                    <td  @dblclick="afficherModalModifierpaiementPersonnel(index)">{{payepersonnel.fichierjoint }}</td>
                    
                  
                  <!-- </template> -->
                   <!-- <template v-else>
                    <td  @dblclick="afficherModalModifierUniteAdministrative(index)">{{'Non renseigné'}}</td>
                    <td  @dblclick="afficherModalModifierUniteAdministrative(index)">{{uniteadministrative.secti.nom_section || 'Non renseigné'}}</td>
                    <td  @dblclick="afficherModalModifierUniteAdministrative(index)">{{uniteadministrative.chpitr.libelle || 'Non renseigné'}}</td>
                    <td  @dblclick="afficherModalModifierUniteAdministrative(index)">{{uniteadministrative.planFont.libelle || 'Non renseigné'}}</td>
                    <td  @dblclick="afficherModalModifierUniteAdministrative(index)">{{uniteadministrative.code || 'Non renseigné'}}</td>
                    <td  @dblclick="afficherModalModifierUniteAdministrative(index)">{{uniteadministrative.libelle || 'Non renseigné'}}</td>
                    <td  @dblclick="afficherModalModifierUniteAdministrative(index)">{{ formaterDate(uniteadministrative.date_creation) || 'Non renseigné'}}</td>
                  
                  </template> -->
                    <td>
                      <button
                        class="btn btn-danger"
                        @click="supprimerpaiementPersonnel(paiementPersonnel.id)"
                      >
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- <div v-else> -->
              <!-- <p style="text-align:center;font-size:20px;color:red;">Aucune Unite Administrative</p> -->
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>

    <fab :actions="fabActions" @cache="afficherModalAjouterpaiementPersonnel" main-icon="apps" bg-color="green"></fab>
        <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterpaiementPersonnel()">Open</button>
  <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
  <notifications  />
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
// import moment from "moment";
// import { ModelListSelect } from "vue-search-select";
// import "vue-search-select/dist/VueSearchSelect.css";
export default {
  // components: {
  //   ModelListSelect
  // },
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ],
      formData: {
        
        codefichier: "",
        activite_id: "",
        programme_id: "",
        action_id:"",
        ua_id: "",
        moisdepaiement: "",
        montantdessalaires: "",
        objetdepense:"",
        ligne_id:"",
        fichierjoint:""
      },
      editpaiementPersonnel: {
        
         codefichier: "",
         activite_id: "",
         programme_id: "",
         action_id:"",
         ua_id: "",
         moisdepaiement: "",
         montantdessalaires: "",
         objetdepense:"",
         ligne_id:"",
         fichierjoint:""
         
      },
      json_fields: {
        UNIT_ADMINISTRATIVE: "ua.libelle",
        // SECTION: "secti.nom_section",
        // SERVICE_GESTIONNAIRE: "servivegest.libelle",
        // LOCALISATION_GEO: "localgeo.libelle",
        // CODE: "code",
        // LIBELLE: "libelle",
        // DATE_CREATION: "date_creation"
      },
      search: ""
    };
  },

  computed: {

   ...mapGetters('personnelUA', ['acteur_depenses',"paiementPersonnel"]),
   
   ...mapGetters('uniteadministrative',[
    "plans_programmes",
 "uniteAdministratives",
 "afficheNiveauAction",
 "afficheNiveauActivite",
 "derniereNivoPlanBudgetaire",
 "getPersonnaliseBudgetGeneralParPersonnel"
   
   
   ]),

   ...mapGetters('parametreGenerauxAdministratif',[

 "sections",
 "type_Unite_admins",
 "plans_programmes",
 "natures_sections",
 "grandes_natures",
 "afficheNiveauPlanProg",
 "exercices_budgetaires"
   ]),

   ...mapGetters('parametreGenerauxFonctionnelle',[

      "plans_fonctionnels",
 "afficheNiveauPlanFonctionnel"
   ]),

...mapGetters('parametreGenerauxActivite',[ 'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

...mapGetters('parametreGenerauxBudgetaire',["plans_budgetaires","derniereNivoPlanBudgetaire"]),

  afficheActiviteParAction() {
      return id => {
        if (id != null && id != "") {
          return this.afficheNiveauActivite.filter(element => element.parent == id);
        }
      };
    },
    afficheUaParLignePersonnel() {
    return id => {
      if (id != null && id != "") {
        return this.getPersonnaliseBudgetGeneralParPersonnel.filter(element => element.afficheUA.id == id);
      }
    };
  },
    anneeAmort() {
     
     const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);
     if (norme) {
       return norme.annee;
     }
     return 0
   },
   afficheProgrammeParLigne() {
    return id => {
      if (id != null && id != "") {
        return this.getPersonnaliseBudgetGeneralParPersonnel.filter(element => element.afficheUA.id == id);
      }
    };
  },
   
   
   
   
  

   
   
    
    // filtre_unite_admin() {
      // const st = this.search.toLowerCase();
      // return this.jointureUaChapitreSection.filter(items => {
        // return (
          // items.secti.nom_section.toLowerCase().includes(st) ||
          // items.libelle.toLowerCase().includes(st)
        // );
      // });
    // },
  //  
    // sectionDynamiques() {
      // return id => {
        // if (id != null && id != "") {
          // return this.sections.filter(element => element.naturesection_id == id);
        // }
      // };
    // },


// codeSectionNature(){
//       //  const section = this.sections.find(sect => sect.id == this.formData.section_id)
//       const natsect = this.natures_sections.find(natsect => natsect.id == this.formData.natsection_id)
//      const secti = this.sections.find(sect => sect.id == this.formData.section_id)
    
//      if(natsect && secti){
//        return natsect.code + secti.code 
//      }

//      return null
//    },


// codeuniteadministrative2(){
//       //  const section = this.sections.find(sect => sect.id == this.formData.section_id)
    
//     const servgest = this.services_gestionnaires.find(serviceg => serviceg.id == this.formData.servicegest_id)
//  const localisageo = this.localisations_geographiques.find(chap => chap.id == this.formData.localisationgeo_id)
//      if(servgest && localisageo){
//        return servgest.code + localisageo.code
//      }

//      return null
//    },

//  codeuniteadministrativeModifier2(){
//       // const section = this.sections.find(sect => sect.id == this.editUniteAdministrative.section_id)
    
//     const servgest = this.services_gestionnaires.find(serviceg => serviceg.id == this.editUniteAdministrative.servicegest_id)
//  const localisageo = this.localisations_geographiques.find(chap => chap.id == this.editUniteAdministrative.localisationgeo_id)
//      if(servgest && localisageo){
//        return servgest.code + localisageo.code
//      }

//      return null
//    },

//     codeuniteadministrative(){
//       //  const section = this.sections.find(sect => sect.id == this.formData.section_id)
//       const natsect = this.natures_sections.find(natsect => natsect.id == this.formData.nature_section_id)
//      const secti = this.sections.find(sect => sect.id == this.formData.section_id)
//     const servgest = this.services_gestionnaires.find(serviceg => serviceg.id == this.formData.servicegest_id)
//  const localisageo = this.localisations_geographiques.find(chap => chap.id == this.formData.localisationgeo_id)
//      if(natsect && secti && servgest && localisageo){
//        return natsect.code + secti.code + "-"+ servgest.code + "-"+ localisageo.code
//      }

//      return null
//    },
//    codeuniteadministrativeModifier(){
//       // const section = this.sections.find(sect => sect.id == this.editUniteAdministrative.section_id)
//      const natsect = this.natures_sections.find(natsect => natsect.id == this.editUniteAdministrative.nature_section_id)
//      const secti = this.sections.find(sect => sect.id == this.editUniteAdministrative.section_id)
//     const servgest = this.services_gestionnaires.find(serviceg => serviceg.id == this.editUniteAdministrative.servicegest_id)
//  const localisageo = this.localisations_geographiques.find(chap => chap.id == this.editUniteAdministrative.localisationgeo_id)
//      if(natsect && secti && servgest && localisageo){
//        return natsect.code  + secti.code + "-" + servgest.code + "-" + localisageo.code
//      }

//      return null
//    },
//   },
            typeFiltre(){

     const searchTerm = this.search.toLowerCase();

return this.paiementPersonnel.filter((item) => {
  
    
    return item.libelle.toLowerCase().includes(searchTerm) 
   
  

   }
)
   }
                                    
  },
  methods: {
    ...mapActions("personnelUA", [
      "getpaiementPersonnel",
      "ajouterpaiementPersonnel",
      "modifierpaiementPersonnel",
      "supprimerpaiementPersonnel"
    ]),

    afficherModalAjouterpaiementPersonnel() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterUniteAdministrativeLocal() {
      var nouvelObjet = {
        ...this.formData,
        
         exerciceencours: this.anneeAmort
       
      };
      this.ajouterpaiementPersonnel(nouvelObjet);

      this.formData = {
        
       codefichier: "",
        activite_id: "",
       programme_id: "",
       action_id:"",
       ua_id: "",
        moisdepaiement: "",
       montantdessalaires: "",
       objetdepense:"",
       ligne_id:"",
       fichierjoint:""
       
       
      };
    },
    // fonction pour vider l'input modifier
    modifierpaiementPersonnelLocal() {
        //  var nouvelObjet = {
        // ...this.editUniteAdministrative,
        // code: this.codeuniteadministrativeModifier,
        // code_ua: this.codeuniteadministrativeModifier2
      // };
      // this.modifierpaiementpersonnel(nouvelObjet);
this.$("#modificationModal").modal('hide');
      // this.editpaiementPersonnel = {
        //  exercice_en_cours: "",
        //  codefichier: "",
        //  activite_id: "",
        //  programme_id: "",
        //  action_id:"",
        //  ua_id: "",
        //  moispaiement: "",
        //  montantsalaire: "",
          // objetdepense:"",
          // ligne_id:"",
          // fichierjoint:""

        // 
      // };
    },
    // afficher modal de modification
    afficherModalModifierpaiementPersonnel(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editpaiementPersonnel = this.paiementPersonnel[index];
    },
    alert() {
      console.log("ok");
    },

    // formaterDate(date) {
      // return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    // },
    ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>
<style scoped>

.tailgrand{
      width: 95%;
margin: 0 -48%;

  
}

</style>