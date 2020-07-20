
<template>
  <div>
  
       
    
      <!-- End Page Header -->
            <!-- Default Light Table -->
           <div class="container-fluid">
        <hr>
    <div class="row-fluid">
      <div class="span12">
         <div>


                                        <download-excel
                                            class="btn btn-success pull-right"
                                            style="cursor:pointer;"
                                              :fields = "json_fields"
                                              title="Liste plan Organigramme Ua "
                                              name ="Liste plan Organigramme Ua"
                                              worksheet = "plan Organigramme Ua"
                                            :data="getterplanOrganisationUa">
                     <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel> 
                                                        <div  align="right" style="cursor:pointer;">
           <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
               </div> 
                                     </div> <br>
        <div class="widget-box">
             <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
            <h5>Organigramme De l'Unité d'Administrative</h5>
             <!-- <div align="right">
        Rechercher: <input type="text" v-model="search">

          </div> -->
             
          </div>
         
          <div class="widget-content"> 
            <!-- <table class="table table-bordered table-striped">
              <thead>
                <tr>

                  <th>Code</th>
                  <th>Libelle</th>
                  <th>Structure pays</th>
                   <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="(plan_pays, index) in localisationsFiltre" 
                :key="plan_pays.id">
                  <td @dblclick="afficherModalmodifierPlanOrganigrammeUa(index)">
                    {{plan_pays.code || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalmodifierPlanOrganigrammeUa(index)">
                    {{plan_pays.libelle || 'Non renseigné'}}</td>
                  <td>
                       {{plan_pays.structure_pays.libelle || 'Non renseigné'}}</td>
                  <td>



              <div class="btn-group">
              <button @click.prevent="supprimerPlanOrganigrammeUa(plan_pays.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i></span></button>
             
            </div>

                  </td>
                </tr>
              </tbody>
            </table> -->
                 <ul id="demo">
            <Tree class="item" v-for="plan in lesPlansParents"
            :key="plan.id" :item="plan"   
              @ajouterElementEnfant="ajouterElementEnfant" 
              @supprimer="supprimerPlanOrganigrammeUaLocal"
              @modifier="afficherModalmodifierPlanOrganigrammeUa"></Tree>
          </ul>
            <div v-if="lesPlansParents.length">
            </div>
            <div v-else>
              <div align="center">
              <h4 style="color:red;">Aucun plan Organigramme Ua trouvé</h4>
              </div>
          </div>
           </div>
        </div>
      </div>
              </div>
            </div>

       

<!----- ajouter modal   ---->


 <div id="exampleModal" class="modal hide">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter plan Organigramme Ua</h3>
              </div>
              <div class="modal-body">
                <table class="table table-bordered table-striped">

               <div class="control-group">
              <label class="control-label">Structure Organigramme Ua:</label>
              <div class="controls">
              <select v-model="formData.structure_organigramme_ua_id" class="span5">
                <option v-for="structure in getterstructuresOrganisationUa " :key="structure.id" 
                 :value="structure.id">{{structure.libelle}} </option>
              </select>
            </div>
            </div>

<!-- <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="formData.libelle" class="span5" placeholder="Saisir le libelle" />
              </div>
            </div> -->
             <div class="control-group">
                  <label class="control-label">Unite d'administrative</label>
                  <div class="controls">
                     <select v-model="formData.libelle" class="span5">
                                                            <option></option>
                                                            <option v-for="item in afficherUAParDroitAccess" :key="item.id" :value="item.libelle">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
                  
                  </div>
                </div>
            <div class="control-group">
              <label class="control-label">Code</label>
              <div class="controls">
                <input type="text" :value="afficherCodeUa(formData.libelle)" class="span5" placeholder="" readonly/>
              </div>
            </div>
            
           
          </table>              
          </div>
           <div class="modal-footer"> 
             <button 
              @click.prevent="ajouetpaysLocal" class="btn btn-primary"
              href="#">Valider</button>
              <a data-dismiss="modal" class="btn" href="#">Fermer</a> </div>
            </div>

<!----- fin modal  ajouter  ---->

<!----- ajouter modal ajouter element enfant   ---->


 <div id="modalAjouterElementEnfant" class="modal hide">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter plan Organigramme Ua</h3>
              </div>
              <div class="modal-body">
                <table class="table table-bordered table-striped">

                   <div class="control-group">
              <label class="control-label">Code parent:</label>
              <div class="controls">
                <input type="text" readonly :value="parentDossier.code" class="span5"  />
              </div>
            </div>

             <div class="control-group">
              <label class="control-label">Libéllé parent:</label>
              <div class="controls">
                <input type="text" readonly :value="parentDossier.libelle" class="span5"  />
              </div>
            </div>

               <div class="control-group">
              <label class="control-label">Structure Organigramme Ua</label>
              
              <div class="controls">
              <select v-model="nouvelElementEnfant.structure_organigramme_ua_id" class="span5">
                <option v-for="structure in getterstructuresOrganisationUa " :key="structure.id" 
                 :value="structure.id">{{structure.libelle}} </option>
              </select>
            </div>
            </div>


            <div class="control-group">
              <label class="control-label">Code</label>
              <div class="controls">
                <input type="text" v-model="parentDossier.code" class="span5" placeholder="Saisir le code" />
              </div>
            </div>
            <!-- <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="nouvelElementEnfant.libelle" class="span5" placeholder="Saisir le libelle" />
              </div>
            </div> -->
            <template v-if="afficherIdStructureOrganigramme(nouvelElementEnfant.structure_organigramme_ua_id) == 2">
                <div class="control-group" >
                  <label class="control-label">Service</label>
                  <div class="controls">
                    <select v-model="nouvelElementEnfant.libelle" class="span5" >
                      <option
                        v-for="typeUniteA in groupeServiceNorme"
                        :key="typeUniteA[0].id"
                        :value="typeUniteA[0].libelle"
                      >{{afficheServiceLibelle(typeUniteA[0].service_id)}}</option>
                    </select>
                  </div>
                </div>
            </template>
            <template v-else-if="afficherIdStructureOrganigramme(nouvelElementEnfant.structure_organigramme_ua_id) == 3">
 <div class="control-group" >
                  <label class="control-label">Fonction</label>
                  <div class="controls">
                    <select v-model="nouvelElementEnfant.libelle" class="span5">
                      <option
                        v-for="typeUniteA in groupeFonctionNormeEquipe"
                        :key="typeUniteA[0].id"
                        :value="typeUniteA[0].libelle"
                      >{{afficheFonctionLibelle(typeUniteA[0].fonction_id)}}</option>
                    </select>
                  </div>
                </div>
            </template>
            <template v-else>
                
            </template>
                 
               
              
          </table>              
          </div>
           <div class="modal-footer"> 
             <button 
              @click.prevent="ajouterpaysLocalEnfant()" class="btn btn-primary"
              >Valider</button>
              <a data-dismiss="modal" class="btn" href="#">Fermer</a> </div>
            </div>

<!----- fin modal  ajouter element enfant ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier plan Organigramme Ua</h3>
              </div>
              <div class="modal-body">
                  <table class="table table-bordered table-striped">

                   <!-- <div class="control-group">
              <label class="control-label">Code parent:</label>
              <div class="controls">
                <input type="text" readonly :value="parentDossier.code" class="span5"  />
              </div>
            </div>

             <div class="control-group">
              <label class="control-label">Libéllé parent:</label>
              <div class="controls">
                <input type="text" readonly :value="parentDossier.libelle" class="span5"  />
              </div>
            </div> -->

               <div class="control-group">
              <label class="control-label">Structure Organigramme Ua</label>
              
              <div class="controls">
              <select v-model="editPlanOrganigrammeUa.structure_organigramme_ua_id" class="span5">
                <option v-for="structure in getterstructuresOrganisationUa " :key="structure.id" 
                 :value="structure.id">{{structure.libelle}} </option>
              </select>
            </div>
            </div>


            <div class="control-group" v-if="editPlanOrganigrammeUa.structure_organigramme_ua_id == 1">
              <label class="control-label">Code</label>
              <div class="controls">
                
                <input type="text"  :value="afficherCodeUa(editPlanOrganigrammeUa.libelle)" class="span5" placeholder="Saisir le code" readonly/>
              </div>
            </div>
           <div class="control-group" v-if="editPlanOrganigrammeUa.structure_organigramme_ua_id == 1">
              <label class="control-label">Libelle</label>
              <div class="controls">
                 <select v-model="editPlanOrganigrammeUa.libelle" class="span5">
                                                            <option></option>
                                                            <option v-for="item in afficherUAParDroitAccess" :key="item.id" :value="item.libelle">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
                <!-- <input type="text" v-model="editPlanOrganigrammeUa.libelle" class="span5" placeholder="Saisir le code" /> -->
              </div>
            </div>
           
            <template v-if="afficherIdStructureOrganigramme(editPlanOrganigrammeUa.structure_organigramme_ua_id) == 2">
               <div class="control-group">
              <label class="control-label">Code</label>
              <div class="controls">
                
                <input type="text" v-model="editPlanOrganigrammeUa.code" class="span5" placeholder="Saisir le code" />
              </div>
            </div>
                <div class="control-group" >
                  <label class="control-label">Service</label>
                  <div class="controls">
                    <select v-model="editPlanOrganigrammeUa.libelle" class="span5" >
                      <option
                        v-for="typeUniteA in groupeServiceNorme"
                        :key="typeUniteA[0].id"
                        :value="typeUniteA[0].libelle"
                      >{{afficheServiceLibelle(typeUniteA[0].service_id)}}</option>
                    </select>
                  </div>
                </div>
            </template>
            <template v-else-if="afficherIdStructureOrganigramme(editPlanOrganigrammeUa.structure_organigramme_ua_id) == 3">
 <div class="control-group">
              <label class="control-label">Code</label>
              <div class="controls">
                
                <input type="text" v-model="editPlanOrganigrammeUa.code" class="span5" placeholder="Saisir le code" />
              </div>
            </div>
 
 <div class="control-group" >
                  <label class="control-label">Fonction</label>
                  <div class="controls">
                    <select v-model="editPlanOrganigrammeUa.libelle" class="span5">
                      <option
                        v-for="typeUniteA in groupeFonctionNormeEquipe"
                        :key="typeUniteA[0].id"
                        :value="typeUniteA[0].libelle"
                      >{{afficheFonctionLibelle(typeUniteA[0].fonction_id)}}</option>
                    </select>
                  </div>
                </div>
            </template>
            <template v-else>
                
            </template>
                 
               
              
          </table>             
             </div>
           <div class="modal-footer"> 
             <button  v-show="editPlanOrganigrammeUa.code.length && editPlanOrganigrammeUa.libelle.length && 
             editPlanOrganigrammeUa.structure_organigramme_ua_id"
              @click.prevent="modifierPlanOrganigrammeUaLocal(editPlanOrganigrammeUa)" class="btn btn-primary"
              >Modifier</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>


<!----- fin modifier modal  ---->


<button style="display:none;" v-shortkey.once="['ctrl', 'f']"
  @shortkey="afficherModalajouterPlanOrganigrammeUa()">Open</button>

 <fab :actions="fabActions"
                main-icon="apps"
          @cache="afficherModalajouterPlanOrganigrammeUa"
        bg-color="green"

  ></fab>

<notifications  />


  </div>
  
</template>
   
<script>
//import axios from '../../../../urls/api_parametrage/api'
import {mapGetters, mapActions} from 'vuex'
import {admin,dcf,cf,noDCfNoAdmin} from '../../../Repositories/Auth';
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import Tree from './Tree'
export default {
  components: {
    Tree
  },
  data() {
    return { 
      json_fields:{
        'Code':'code',
        'Libelle':'libelle',
        
      },

      parentDossier: {},
      nouvelElementEnfant: {
         code: "",
             libelle: "",
          structure_organigramme_ua_id:""
      },

        fabActions: [
              {
                  name: 'cache',
                  icon: 'add'
              },
              // {
              //     name: 'alertMe',
              //     icon: 'add_alert'
              // }
          ],
     
        formData : {
                code: "",
             libelle: "",
          structure_organigramme_ua_id:""
        },

        editPlanOrganigrammeUa: {
            code: "",
             libelle: "",
          structure_organigramme_ua_id:""

        },
        search:""
 
    };
  },
 
  created() {
    //this.getPlanPays()
    //console.log(this.lesPlansParents)
  },
  computed: {
       ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetGeneral",
      "getPersonnaliseBudgetGeneral",
      "montantBudgetGeneral",
      "uniteZones",
      "getPersonnaliseBudgetGeneralParTransfert",
      "transferts",
      "afficheTransfertValider",
      "getPersonnaliseTransfert"
      
    ]),
    ...mapGetters("SuiviImmobilisation", [
      
      "normeImmo",
      "groupeServiceNorme",
      "groupeFonctionNormeEquipe",
      "services",
      
      
      ]),
// methode pour maper notre guetter
...mapGetters('personnelUA', ['all_acteur_depense','fonctions']),
   ...mapGetters('parametreGenerauxAdministratif', [ 'getterstructuresOrganisationUa',
    'getterplanOrganisationUa']) ,
dcf:dcf,
cf:cf,
admin:admin,
noDCfNoAdmin:noDCfNoAdmin,
...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),

 afficherUAParDroitAccess() {
       // const st = this.search.toLowerCase();
        if (this.cf){
            let colect=[];
            this.uniteAdministratives.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
             return colect;
            
        }

        return this.uniteAdministratives;
        
        

    },
//        localisationsFiltre(){

//      const searchTerm = this.search.toLowerCase();

// return this.getterplanOrganisationUa.filter((item) => {
  
//     return item.code.toLowerCase().includes(searchTerm) 
//     || item.libelle.toLowerCase().includes(searchTerm) 
  

//    }
// )
//    },

  //  lesPlansParents(){
  //    return this.getterplanOrganisationUa.filter(plan => plan.parent == null)
  //  },

lesPlansParents() {
       // const st = this.search.toLowerCase();
        if (this.noDCfNoAdmin){
            let colect=[];
            this.getterplanOrganisationUa.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
             return colect.filter(plan => plan.parent == null);
            
        }

        return this.getterplanOrganisationUa.filter(plan1 => plan1.parent == null);
        
        

    },

   afficherIdUaparDossierParent(){
  return id =>{
        if(id!=null && id!=""){
          const objet = this.getterplanOrganisationUa.find(item => item.libelle==id)
          if(objet) 
          return objet.ua_id
        }
        return null
      }
},
afficherCodeUa(){
  return id =>{
        if(id!=null && id!=""){
          const objet = this.uniteAdministratives.find(item => item.libelle==id)
          if(objet) 
          return objet.code
        }
        return null
      }
},
afficherIdStructureOrganigramme(){
  return id =>{
        if(id!=null && id!=""){
          const objet = this.getterstructuresOrganisationUa.find(item => item.id==id)
          if(objet) 
          return objet.niveau
        }
        return null
      }
},
afficheServiceLibelle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.services.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    afficheidServiceLibelle() {
      return id1 => {
        if (id1 != null && id1 != "") {
           const qtereel = this.services.find(qtreel => qtreel.libelle == id1);

      if (qtereel) {
        return qtereel.id;
      }
      return 0
        }
      };
    },

      afficheFonctionLibelle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.fonctions.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    afficheIdFonctionLibelle() {
      return id1 => {
        if (id1 != null && id1 != "") {
           const qtereel = this.fonctions.find(qtreel => qtreel.libelle == id1);

      if (qtereel) {
        return qtereel.id;
      }
      return 0
        }
      };
    },
    afficherIdUniteAdministrative(){
  return id =>{
        if(id!=null && id!=""){
          const objet = this.uniteAdministratives.find(item => item.libelle==id)
          if(objet) 
          return objet.id
        }
        return null
      }
},
normeDuService() {
      return id => {
        if (id != null && id != "") {
          return this.normeImmo.filter(element => element.service_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.norme),0).toFixed(0);
        }
      };
    },
    montantPourEtreEquipe() {
      return id => {
        if (id != null && id != "") {
          return this.normeImmo.filter(element => element.service_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total), 0).toFixed(0);
        }
      };
    },
    

  },
  methods: {
    // methode pour notre action
   ...mapActions('parametreGenerauxAdministratif', ['getPlanPays', 
   'ajouterPlanOrganigrammeUa','modifierPlanOrganigrammeUa','supprimerPlanOrganigrammeUa']), 
   
   

        genererEnPdf(){
  var doc = new jsPDF()
  // doc.autoTable({ html: this.natures_sections })
   var data = this.getterplanOrganisationUa;
    doc.setFontSize(8)
    doc.text(78,10,"LISTE DES PLANS ORGANIGRAMMES DES UA")
  doc.autoTable(this.getColumns(),data)
doc.save('PlanOrganigrammeUa.pdf')
return 0
},
getColumns() {
    return [
        
        {title: "CODE", dataKey: "code"},
        {title: "LIBELLE", dataKey: "libelle"},
     
        
    ];
},
   
    afficherModalajouterPlanOrganigrammeUa(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
   // fonction pour vider l'input
    ajouetpaysLocal () {
         var nouvelObjet = {
        ...this.formData,
        code: this.afficherCodeUa(this.formData.libelle),
        ua_id:this.afficherIdUniteAdministrative(this.formData.libelle)
        
       
      };
      this.ajouterPlanOrganigrammeUa(nouvelObjet)
this.$("#exampleModal").modal('hide');
        this.formData = {
                code: "",
             libelle: "",
          structure_organigramme_ua_id:""
        }
    },

     ajouterpaysLocalEnfant () {
      
       if(this.afficherIdStructureOrganigramme(this.nouvelElementEnfant.structure_organigramme_ua_id) == 2){
 var nouvelObjet = {
        ...this.nouvelElementEnfant,
       normeequipement:this.normeDuService(this.afficheidServiceLibelle(this.nouvelElementEnfant.libelle)),
       historiqueequipement:this.normeDuService(this.afficheidServiceLibelle(this.nouvelElementEnfant.libelle)),
       montantequipement:this.montantPourEtreEquipe(this.afficheidServiceLibelle(this.nouvelElementEnfant.libelle)),
      serviceua_id:this.afficheidServiceLibelle(this.nouvelElementEnfant.libelle),
       ua_id:this.afficherIdUniteAdministrative(this.parentDossier.libelle),
       code:this.parentDossier.code
      };
       this.ajouterPlanOrganigrammeUa(nouvelObjet)
this.$("#modalAjouterElementEnfant").modal('hide');
        this.nouvelElementEnfant = {
                code: "",
             libelle: "",
          structure_organigramme_ua_id:""
        }
       }

      // console.log(this.nouvelElementEnfant)
     else{
        var nouvelObjet2 = {
        ...this.nouvelElementEnfant,
      
      fonction_id:this.afficheIdFonctionLibelle(this.nouvelElementEnfant.libelle),
       serviceua_id:this.afficheidServiceLibelle(this.parentDossier.libelle),
       ua_id:this.afficherIdUaparDossierParent(this.parentDossier.libelle),
         code:this.parentDossier.code
      };
       this.ajouterPlanOrganigrammeUa(nouvelObjet2)
this.$("#modalAjouterElementEnfant").modal('hide');
        this.nouvelElementEnfant = {
                code: "",
             libelle: "",
          structure_organigramme_ua_id:""
        }
     }
    },

    supprimerPlanOrganigrammeUaLocal(item){
      this.supprimerPlanOrganigrammeUa(item.id)
    },
// afficher modal

 //afficher modal pour ajouter element enfant
	 ajouterElementEnfant(item) {
    this.parentDossier = this.getterplanOrganisationUa.find(plan => plan.id == item.id)
    // this.nouvelElementEnfant.code = this.parentDossier.code
     this.nouvelElementEnfant.parent = this.parentDossier.id

      this.$('#modalAjouterElementEnfant').modal({
              backdrop: 'static',
              keyboard: false
             });

    },

 // fin

afficherModalmodifierPlanOrganigrammeUa(item){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.editPlanOrganigrammeUa = this.getterplanOrganisationUa.find(plan => plan.id == item.id);


        
 },

 
 // vider l'input de modifier
 modifierPlanOrganigrammeUaLocal(){

this.modifierPlanOrganigrammeUa(this.editPlanOrganigrammeUa)
  this.$("#modifierModal").modal('hide');
this.editPlanOrganigrammeUa = {
  code:"",
  libelle:"",
  structure_organigramme_ua_id:""
}
 }


  }
};
</script>

