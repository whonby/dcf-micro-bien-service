
<template>
  <div>
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide tailgrand">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Unité d'Administrative</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
         
            <tr>
              <td>
                <div class="control-group">
                  <label class="control-label">Type Unite d'administrative</label>
                  <div class="controls">
                    <select v-model="formData.type_ua_id" class="span5">
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
                  <label class="control-label">Nature section</label>
                  <div class="controls">
                    <select v-model="formData.nature_section_id" class="span5">
                      <option
                        v-for="natsection in natures_sections"
                        :key="natsection.id"
                        :value="natsection.id"
                      >{{natsection.code}}-{{natsection.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
               <td>
              
               <div class="control-group">
                  <label class="control-label">Section</label>
                  <div class="controls">
                    <select v-model="formData.section_id" class="span5">
                      <option
                        v-for="sect in sectionDynamiques(formData.nature_section_id)"
                        :key="sect.id"
                        :value="sect.id"
                      >{{sect.code}}-{{sect.nom_section}}</option>
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
                  <label class="control-label">Service gestionnaire de crédit</label>
                  <div class="controls">
                    <select v-model="formData.servicegest_id" class="span5">
                      <option
                        v-for="servicegest in afficheServiceGestionnaireNiveau4"
                        :key="servicegest.id"
                        :value="servicegest.id"
                      >{{servicegest.code}}-{{servicegest.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
              <td>
                 <div class="control-group">
                  <label class="control-label">Localisation Geographique</label>
                  <div class="controls">
                    <select v-model="formData.localisationgeo_id" class="span5">
                      <option
                        v-for="localgeo in afficheLocalisationGeoNiveau5"
                        :key="localgeo.id"
                        :value="localgeo.id"
                      >{{localgeo.code}}-{{localgeo.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
               <td>
                  <div class="control-group">
                  <label class="control-label">Date création:</label>
                  <div class="controls">
                    <input type="date" v-model="formData.date_creation" class="span5" />
                  </div>
                </div>
              </td>
              
            </tr>
            <tr>
             
              <td>
                <div class="control-group">
                  <label class="control-label">Code Unité administrative:</label>
                
                  <div class="controls">
                    <input
                      type="text"
                     :value="codeuniteadministrative"
                      class="span5"
                      placeholder="Saisir le code"
                      readonly
                    />
                  </div>
                  </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Nom unité administrative:</label>
                    
               
                  <div class="controls">
                    <input
                      type="text"
                      v-model="formData.libelle"
                      class="span5"
                      placeholder="Saisir le Nom unite administrative"
                     
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
                     :value="codeuniteadministrative2"
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
    <!--///////////////////////////////////////// debut modal modification //////////////////////////////-->
    <div id="modificationModal" class="modal hide tailgrand">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier Unité d'Administrative</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          
            <tr>
              <td>
                <div class="control-group">
                  <label class="control-label">Type Unite d'administrative</label>
                  <div class="controls">
                    <select v-model="editUniteAdministrative.type_ua_id" class="span5">
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
                  <label class="control-label">Nature section</label>
                  <div class="controls">
                    <select v-model="editUniteAdministrative.nature_section_id" class="span5">
                      <option
                        v-for="natsection in natures_sections"
                        :key="natsection.id"
                        :value="natsection.id"
                      >{{natsection.code}}-{{natsection.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
             <td>
              
               <div class="control-group">
                  <label class="control-label">Section</label>
                  <div class="controls">
                    <select v-model="editUniteAdministrative.section_id" class="span5">
                      <option
                        v-for="sect in sectionDynamiques(editUniteAdministrative.nature_section_id)"
                        :key="sect.id"
                        :value="sect.id"
                      >{{sect.code}}-{{sect.nom_section}}</option>
                    </select>
                  </div>
                </div>
              </td>
              
            </tr>
            <tr>
               <td>
                 <div class="control-group">
                  <label class="control-label">Service gestionnaire de crédit</label>
                  <div class="controls">
                    <select v-model="editUniteAdministrative.servicegest_id" class="span5">
                      <option
                        v-for="servicegest in services_gestionnaires"
                        :key="servicegest.id"
                        :value="servicegest.id"
                      >{{servicegest.code}}-{{servicegest.libelle}}</option>
                    </select>
                  </div>
                </div>
               
              </td>
              <td>
                  <div class="control-group">
                  <label class="control-label">Localisation géographique</label>
                  <div class="controls">
                    <select v-model="editUniteAdministrative.localisationgeo_id" class="span5">
                      <option
                        v-for="localgeo in afficheLocalisationGeoNiveau5"
                        :key="localgeo.id"
                        :value="localgeo.id"
                      >{{localgeo.code}}-{{localgeo.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
               <td>
                <div class="control-group">
                  <label class="control-label">Date création:</label>
                  <div class="controls">
                    <input type="date" v-model="editUniteAdministrative.date_creation" class="span5" />
                  </div>
                </div>
              </td>
              
            </tr>
            <tr>
               <td>
                <div class="control-group">
                  <label class="control-label">Code Unite administrative:</label>
                  <div class="controls">
                    <input
                      type="text"
                     :value="codeuniteadministrativeModifier"
                      class="span5"
                      placeholder="Saisir le code"
                      readonly
                    />
                  </div>
                </div>
              </td>
              <td>
               <div class="control-group">
                  <label class="control-label">Nom unite administrative:</label>
                  <div class="controls">
                    <input
                      type="text"
                      v-model="editUniteAdministrative.libelle"
                      class="span5"
                      placeholder="Saisir le Nom unite administrative"
                     
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
                     :value="codeuniteadministrativeModifier2"
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
          @click.prevent="modifierUniteAdministrativeLocal(editUniteAdministrative)"
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
          <download-excel
            class="btn btn-success pull-right"
            style="cursor:pointer;"
            :fields="json_fields"
            title="Liste Unites administratives"
            :data="jointureUaChapitreSection"
            name="Liste Unites administratives"
            worksheet="Liste Unites administratives"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
         
          </download-excel>
          <div align="right" style="cursor:pointer;">
           <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
          </div>
          <div class="widget-box">
            <div class="widget-title">
                <div class="span6">
 <span class="icon">
                <i class="icon-th"></i>
              </span>
                    <h5>Liste des unité d'administrative </h5>
                </div>
                <div class="span6">
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
                </div>
                <div class="span4">
                    <br>
                    Afficher
                    <select name="pets" id="pet-select" v-model="size" class="span3">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                    Entrer
                </div>

            </div>

            <div
              class="widget-content nopadding"
              v-if="type_Unite_admins.length && sections.length && chapitres.length"
            >
              <table class="table table-bordered table-striped" id="Nature_section">
                <thead>
                  <tr>
                    <th title="type unite administrative">Type ua</th>
                    <th>nature Section</th>
                    <th>Section</th>
                    <th title="service gestionnaire">Service gest</th>
                     <th title="localisation geographique">Localisation geo</th>
                    <th>Code</th>
                    <th title="unite administrative">UA</th>
                    <th>Date création</th>

                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="(uniteadministrative, index) in partition(filtre_unite_admin,size)[page]"
                    :key="uniteadministrative.id"
                  >
                   
                   <!-- <template v-if="uniteadministrative.type_ua_id = type_Unite_admins.id"> -->
                    <td  @dblclick="afficherModalModifierUniteAdministrative(index)">{{libelleUa(uniteadministrative.type_ua_id)}}</td>
                      <td  @dblclick="afficherModalModifierUniteAdministrative(index)">{{libelleNatureSection(uniteadministrative.nature_section_id) }}</td>
                    <td  @dblclick="afficherModalModifierUniteAdministrative(index)">{{libelleSection(uniteadministrative.section_id)}}</td>
                    <td  @dblclick="afficherModalModifierUniteAdministrative(index)">{{libelleServiceGestionnaire(uniteadministrative.servicegest_id) }}</td>
                    <td  @dblclick="afficherModalModifierUniteAdministrative(index)">{{libelleLocalGeographie(uniteadministrative.localisationgeo_id) }}</td>
                    <td  @dblclick="afficherModalModifierUniteAdministrative(index)">{{uniteadministrative.code }}</td>
                    <td  @dblclick="afficherModalModifierUniteAdministrative(index)">{{uniteadministrative.libelle }}</td>
                    <td  @dblclick="afficherModalModifierUniteAdministrative(index)">{{ formaterDate(uniteadministrative.date_creation) }}</td>
                  
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
                        @click="supprimerUniteAdministrative(uniteadministrative.id)"
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
            <div v-else>
              <p style="text-align:center;font-size:20px;color:red;">Aucune Unite Administrative</p>
            </div>
          </div>
           <div class="pagination alternate">
                    <ul>
                        <li :class="{ disabled : page == 0 }"><a @click.prevent="precedent()" href="#">Précedent</a></li>
                        <li  v-for="(titre, index) in partition(filtre_unite_admin,size).length" :key="index" :class="{ active : active_el == index }">
                            <a @click.prevent="getDataPaginate(index)" href="#">{{index + 1}}</a></li>
                        <li :class="{ disabled : page == partition(filtre_unite_admin,size).length -1 }"><a @click.prevent="suivant()" href="#">Suivant</a></li>

                    </ul>
           </div>
        </div>
      </div>
    </div>

    <fab :actions="fabActions" @cache="afficherModalAjouterUniteAdministrative" main-icon="apps" bg-color="green"></fab>
        <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterUniteAdministrative()">Open</button>
  <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
  <notifications  />
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import {partition} from "../../Repositories/Repository"
// import { ModelListSelect } from "vue-search-select";
// import "vue-search-select/dist/VueSearchSelect.css";
import {admin,dcf,cf,noDCfNoAdmin} from "../../Repositories/Auth"
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
        page:0,
        size:10,
        active_el:0,
      formData: {
        code: "",
        libelle: "",
        section_id: "",
        localisationgeo_id: "",
        type_ua_id: "",
        date_creation: "",
        test: "",
        servicegest_id:"",
        nature_section_id:""
      },
      editUniteAdministrative: {
        code: "",
        libelle: "",
        section_id: "",
        localisationgeo_id: "",
        type_ua_id: "",
        date_creation: "",
        servicegest_id:"",
        nature_section_id:""
      },
      json_fields: {
        TYPE_UNIT_ADMINISTRATIVE: "typeua.libelle",
        SECTION: "secti.nom_section",
        SERVICE_GESTIONNAIRE: "servivegest.libelle",
        LOCALISATION_GEO: "localgeo.libelle",
        CODE: "code",
        LIBELLE: "libelle",
        DATE_CREATION: "date_creation"
      },
      search: ""
    };
  },
  
created() {
      console.log("INB")
      console.log(this.getterUniteAdministrativeByUser)
    console.log("INB14500")
},
    computed: {
    ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives"
      // "chapitres",
      // "sections"
    ]),
    ...mapGetters("parametreGenerauxAdministratif", [
      "chapitres",
      "sections",
      "type_Unite_admins",
      "services_gestionnaires",
      "localisations_geographiques",
      "afficheServiceGestionnaireNiveau4",
      "afficheLocalisationGeoNiveau5",
      "natures_sections"
    ]),
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "plans_fonctionnels"
     
    ]),
      admin:admin,
      dcf:dcf,
        cf:cf,
        noDCfNoAdmin:noDCfNoAdmin,
      ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
    libelleLocalGeographie() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.localisations_geographiques.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    libelleServiceGestionnaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.services_gestionnaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    libelleUa() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.type_Unite_admins.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
     libelleSection() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sections.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.nom_section;
      }
      return 0
        }
      };
    },
     libelleNatureSection() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.natures_sections.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    
    filtre_unite_admin() {
        
        if(this.noDCfNoAdmin){
            let colect=[];
            
            this.jointureUaChapitreSection.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect
        }
        return this.jointureUaChapitreSection

    },
   
    sectionDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.sections.filter(element => element.naturesection_id == id);
        }
      };
    },


// codeSectionNature(){
//       //  const section = this.sections.find(sect => sect.id == this.formData.section_id)
//       const natsect = this.natures_sections.find(natsect => natsect.id == this.formData.natsection_id)
//      const secti = this.sections.find(sect => sect.id == this.formData.section_id)
    
//      if(natsect && secti){
//        return natsect.code + secti.code 
//      }

//      return null
//    },


codeuniteadministrative2(){
      //  const section = this.sections.find(sect => sect.id == this.formData.section_id)
    
    const servgest = this.services_gestionnaires.find(serviceg => serviceg.id == this.formData.servicegest_id)
 const localisageo = this.localisations_geographiques.find(chap => chap.id == this.formData.localisationgeo_id)
     if(servgest && localisageo){
       return servgest.code + localisageo.code
     }

     return null
   },


 codeuniteadministrativeModifier2(){
      // const section = this.sections.find(sect => sect.id == this.editUniteAdministrative.section_id)
    
    const servgest = this.services_gestionnaires.find(serviceg => serviceg.id == this.editUniteAdministrative.servicegest_id)
 const localisageo = this.localisations_geographiques.find(chap => chap.id == this.editUniteAdministrative.localisationgeo_id)
     if(servgest && localisageo){
       return servgest.code + localisageo.code
     }

     return null
   },

    codeuniteadministrative(){
      //  const section = this.sections.find(sect => sect.id == this.formData.section_id)
      const natsect = this.natures_sections.find(natsect => natsect.id == this.formData.nature_section_id)
     const secti = this.sections.find(sect => sect.id == this.formData.section_id)
    const servgest = this.services_gestionnaires.find(serviceg => serviceg.id == this.formData.servicegest_id)
 const localisageo = this.localisations_geographiques.find(chap => chap.id == this.formData.localisationgeo_id)
     if(natsect && secti && servgest && localisageo){
       return natsect.code + secti.code + "-"+ servgest.code + "-"+ localisageo.code
     }

     return null
   },
   codeuniteadministrativeModifier(){
      // const section = this.sections.find(sect => sect.id == this.editUniteAdministrative.section_id)
     const natsect = this.natures_sections.find(natsect => natsect.id == this.editUniteAdministrative.nature_section_id)
     const secti = this.sections.find(sect => sect.id == this.editUniteAdministrative.section_id)
    const servgest = this.services_gestionnaires.find(serviceg => serviceg.id == this.editUniteAdministrative.servicegest_id)
 const localisageo = this.localisations_geographiques.find(chap => chap.id == this.editUniteAdministrative.localisationgeo_id)
     if(natsect && secti && servgest && localisageo){
       return natsect.code  + secti.code + "-" + servgest.code + "-" + localisageo.code
     }

     return null
   },
  },
  methods: {
    ...mapActions("uniteadministrative", [
      "getAllUniteAdministrative",
      "ajouterUniteAdministrative",
      "modifierUniteAdministrative",
      "supprimerUniteAdministrative"
    ]),

genererEnPdf(){
  var doc = new jsPDF('landscape')
  // doc.autoTable({ html: this.natures_sections })
  doc.text(98,10,"Listes Unites Administratives")
  doc.autoTable({ html: '#Nature_section'}),
  
doc.save('UniteAdministrative.pdf')
return 0
},

      partition:partition,
      getDataPaginate(index){
          this.active_el = index;
          this.page=index
      },
      precedent(){
          this.active_el--
          this.page --
      },
      suivant(){
          this.active_el++
          this.page ++
      },
    afficherModalAjouterUniteAdministrative() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterUniteAdministrativeLocal() {
      var nouvelObjet = {
        ...this.formData,
        code: this.codeuniteadministrative,
         code_ua: this.codeuniteadministrative2
       
      };
      this.ajouterUniteAdministrative(nouvelObjet);

      this.formData = {
        code: "",
        libelle: "",
        section_id: "",
        localisationgeo_id: "",
        type_ua_id: "",
        date_creation: "",
         code_ua: ""
      };
    },
    // fonction pour vider l'input modifier
    modifierUniteAdministrativeLocal() {
         var nouvelObjet = {
        ...this.editUniteAdministrative,
        code: this.codeuniteadministrativeModifier,
        code_ua: this.codeuniteadministrativeModifier2
      };
      this.modifierUniteAdministrative(nouvelObjet);
this.$("#modificationModal").modal('hide');
      // this.editUniteAdministrative = {
      //   code: "",
      //   libelle: "",
      //   section_id: "",
      //   localisationgeo_id: ""
      // };
    },
    // afficher modal de modification
    afficherModalModifierUniteAdministrative(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editUniteAdministrative = this.jointureUaChapitreSection[index];
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
<style>

.tailgrand{
  width: 88%;
  margin: 0 -42%;
}

</style>