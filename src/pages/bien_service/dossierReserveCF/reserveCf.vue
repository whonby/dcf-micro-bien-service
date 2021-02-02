gettersReserveCf
<template>
    <div>
        <div align="right">
    <div class="widget-content">
      <a href="#ajouterReserveCf" data-toggle="modal" class="btn btn-primary">Ajouter</a>
    </div>
  </div>
  <table class="table table-bordered table-striped">
     <thead>
    <tr>
      <th>Ref offre</th>
      <th>Numéro du lot</th>
      <th>Lots</th>
      <th>Date</th>
      <th>Observation</th>
     

    </tr>
    </thead>
        <tbody>
        <tr v-for="(item,index) in afficherListeReseveCf(macheid)" :key="item.id">
          <td @click="afficherModificationReserveCf(index)">{{item.ref_offre}}</td>
           <td @click="afficherModificationReserveCf(index)">{{afficherNumeroLot(item.lot_id)}}</td>
          <td @click="afficherModificationReserveCf(index)">{{afficherListeLot(item.lot_id)}}</td>
          <td @click="afficherModificationReserveCf(index)">{{formaterDate(item.date)}}</td>
          <td @click="afficherModificationReserveCf(index)">{{item.objet_reserve}}</td>
         <div class="btn-group">
          <button @click.prevent="supprimerReserveCf(item.id)"  class="btn btn-danger " title="Supprimer">
            <span class=""><i class="icon-trash"></i>Supprimer</span></button>
            </div>
         
        </tr>
        </tbody>
      </table>

  <div id="ajouterReserveCf" class="modal hide grdirModalAnalyse">
    <div class="modal-header">
      <button data-dismiss="modal" class="close" type="button">×</button>
      <h3>Reserve du CF</h3>
    </div>
    <div class="modal-body">
      <table class="table table-bordered table-striped">
        <tr>
          <td>
            <div class="control-group">
              <label class="control-label">Réference offre</label>
              <div class="controls">
                <input
                    type="text"
                    :value="affichierReferenceAppelOffre(macheid)"
                    class="span"
                    readonly
                />
              </div>
            </div>
          </td>
          <td>
            <div class="control-group">
              <label>Lot  </label>
              <div class="controls">
                <select v-model="formeReserve.lot_id" class="span" >
                  <option v-for="varText in getLotMarche" :key="varText.id"
                          :value="varText.id"> {{varText.objet}}</option>
                </select>
              </div>
            </div>
          </td>
        </tr>
        <tr>
         
          <td colspan="">
            <div class="control-group">
              <label class="control-label">Date</label>
              <div class="controls">
                <input type="date"
                       v-model="formeReserve.date"
                       class="span"
                       placeholder="date"
                />
              <!--  <input type="hidden"
              v-model="formeReserve.difference_personnel_bienService">-->
              </div>
            </div>
          </td>
          <td>
                 <div class="control-group">
          <label class="control-label">Observation:</label>
            <div class="controls">
              <textarea v-model="formeReserve.objet_reserve"   class="textarea_editor span"   rows="2" placeholder="Entrer  le text ..."></textarea>
            </div>
          
        </div>
          </td>
        </tr>

      </table>
      
    </div>


    <div class="modal-footer">
      <a data-dismiss="modal"  class="btn btn-primary" @click.prevent="ajouterReserveCfLocal"  href="#">Valider</a>
      <a data-dismiss="modal" class="btn" href="#">Cancel</a>
    </div>
  </div>
  <!-- fin formulaire ajout analyse  -->

   <div id="modifierReserveCf" class="modal hide grdirModalAnalyse">
    <div class="modal-header">
      <button data-dismiss="modal" class="close" type="button">×</button>
      <h3> Modification Reserve du CF</h3>
    </div>
    <div class="modal-body">
      <table class="table table-bordered table-striped">
        <tr>
          <td>
            <div class="control-group">
              <label class="control-label">Reference offre</label>
              <div class="controls">
                <input
                    type="text"
                    :value="affichierReferenceAppelOffre(macheid)"
                    class="span"
                    readonly
                />
              </div>
            </div>
          </td>
          <td>
            <div class="control-group">
              <label>Lot  </label>
              <div class="controls">
                <select v-model="editReserve.lot_id" class="span" >
                  <option v-for="varText in getLotMarche" :key="varText.id"
                          :value="varText.id"> {{varText.objet}}</option>
                </select>
              </div>
            </div>
          </td>
        </tr>
        <tr>
         
          <td colspan="">
            <div class="control-group">
              <label class="control-label">Date</label>
              <div class="controls">
                <input type="date"
                       v-model="editReserve.date"
                       class="span"
                       placeholder="date"
                />
              <!--  <input type="hidden"
              v-model="formeReserve.difference_personnel_bienService">-->
              </div>
            </div>
          </td>
          <td>
                 <div class="control-group">
          <label class="control-label">Observation:</label>
            <div class="controls">
              <textarea v-model="editReserve.objet_reserve"   class="textarea_editor span"   rows="2" placeholder="Entrer  le text ..."></textarea>
            </div>
          
        </div>
          </td>
        </tr>

      </table>
      
    </div>


    <div class="modal-footer">
      <a data-dismiss="modal"  class="btn btn-primary" @click.prevent="modifierReserveCfLocal"  href="#">Modifier</a>
      <a data-dismiss="modal" class="btn" href="#">Cancel</a>
    </div>
  </div>
  <notifications/>
    </div>
</template>
<script>
import {mapGetters, mapActions} from "vuex"
import moment from "moment";
export default {
    data(){
        return{
  formeReserve:{
date:"",
lot_id:"",
objet_reserve:""
  },
  editReserve:{

  },
  marche_id:""
        }
    },
    props:["macheid"],
    created() {
    this.lot=this.getMarchePersonnaliser.filter(item=>item.parent_id==this.macheid)
    //this.detail_marche=this.getMarchePersonnaliser.find(item=>item.id==this.macheid)
  //console.log(this.lot)
  },
    computed:{
  ...mapGetters("bienService", ["gettersReserveCf","appelOffres","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots",
      "modePassations", "procedurePassations","getterDossierCandidats","marches", "gettersCotations",
      "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation",
      "getterMandate","getterCojos","getterAnalyseDossiers","typeAnalyses", "analyseDossiers","text_juridiques"
    ]),
    
   
   
    
     
afficherListeReseveCf() {
      return id => {
        if (id != null && id != "") {
          return this.gettersReserveCf.filter(
            element => element.marche_id == this.macheid
          );
        }
      };
    },

         affichierReferenceAppelOffre() {
      return id => {
        if (id != null && id != "") {
          const qtereel = this.appelOffres.find(qtreel => qtreel.marche_id == id);

          if (qtereel) {
            return qtereel.ref_appel;
          }
          return 0
        }
      };
    },
      getLotMarche(){
      return this.getMarchePersonnaliser.filter(item=>item.parent_id==this.macheid);
    },

    afficherListeLot(){
      return id1 =>{
        if(id1!=null && id1!=""){
          const objetAnswer = this.getMarchePersonnaliser.find(item=>item.id==id1)
          if(objetAnswer)   return objetAnswer.objet
         
          
        }
      }
    },
     afficherNumeroLot(){
      return id1 =>{
        if(id1!=null && id1!=""){
          const objetAnswer = this.getMarchePersonnaliser.find(item=>item.id==id1)
          if(objetAnswer)   return objetAnswer.numero_lot
         
          
        }
      }
    }
 
    //  listeLot(){
    //   return (marche_id)=>{
    //     if(marche_id!=""){
    //       let seft=this;

    //       let lot_marche=this.getMarchePersonnaliser.filter(item=>item.parent_id==marche_id)
    //       let collection=[];

    //       if (lot_marche.length>0){

    //         lot_marche.forEach(function (value) {
    //           let objet=seft.getterAnalyseDossiers.filter(item=>{
    //             if(item.marche_id==value.id){
    //               return item
    //             }
    //           })
    //           if(objet.length==0){
    //             collection.push(value)
    //           }
    //         })
    //         return collection
    //       }
    //       return null
    //     }
    //   }
    // },

    },
    methods:{
...mapActions("bienService",['ajouterReserveCf', 'modifierReserveCf','supprimerReserveCf']),

  afficherModificationReserveCf(index){
                this.$('#modifierReserveCf').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.editReserve = this.afficherListeReseveCf(this.macheid)[index];
            },
   ajouterReserveCfLocal(){

     var nouvelObjet={
       ...this.formeReserve,
       ref_offre:this.affichierReferenceAppelOffre(this.macheid),
       marche_id:this.macheid

     }
     this.ajouterReserveCf(nouvelObjet)
     this.formeReserve={
         date:"",
         objet_reserve:""
     }

   },
   modifierReserveCfLocal(){
     var objetModifi={
       ...this.editReserve,
        ref_offre:this.affichierReferenceAppelOffre(this.macheid),
        marche_id:this.macheid
     }
     this.modifierReserveCf(objetModifi)
     this.$('#modifierReserveCf').modal('hide');

     
   },

    formaterDate(date) {
              return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },

    }
    
}
</script>
<style scoped>
.grdirModalAnalyse{
  width: 1000px;
  margin: 0 -500px;
  height: 400px;
}
</style>