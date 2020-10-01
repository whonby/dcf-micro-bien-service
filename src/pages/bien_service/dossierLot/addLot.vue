
<template>
    <div>

<!--  -->


        <div id="addLot" class="modal hide" aria-hidden="true" style="display: none;">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter lot </h3>
            </div>
            <div class="modal-body">
                <div class="widget-box">
                    <form action="#" method="get" v-if="macheid">

                 <table class="table table-bordered table-striped"> 
                     <tr>
                         <td>
                        <div class="control-group">
                        <label>Offre</label>
                        <div class="controls">
                            <!-- <select v-model="formLot.appel_offre_id" class="span" disabled>
                                <option v-for="varText in listeAppelOffre(macheid)" :key="varText.id"
                                        :value="varText.id">{{varText.ref_appel}}</option>
                            </select> -->
                             <input type="text" class="span" :value="listeAppelOffre(macheid)" readonly>
                        </div>
                        </div>
                         </td>

                     </tr>
                     <tr>
                         

                         <td>

                         <div class="control-group">
            
                            <label class="control-label">Numero lot <code>*</code> :</label>
                           <div class="control-group">
                       <input type="text" class="span" placeholder="Numero lo" v-model="formLot.numero_lot">
                            </div>
                        </div>

                         
                         </td>
                     </tr>
                     <tr>
                         
                         <td colspan="2">

                        <div class="control-group">

                            <label class="control-label">Libellé lot <code>*</code> :</label>

                            <div class="controls">
                                <input type="text" class="span" row="2" placeholder="Libellé lot"  v-model="formLot.libelle_lot">
                            </div>
                        </div>
                         </td>
                     </tr>
                     <tr>
                         <td colspan="3">
                        <div class="control-group">

                        
                            <label class="control-label">Montant lot <code>*</code> :</label>

                            <div class="controls">
                                <input type="text" class="span" placeholder="Montant lot" v-model="formLot.montant_lot">
                            </div>
                        </div>
                         </td>
                     </tr>
                 </table>

                        
                       

                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <a class="btn btn-primary" @click.prevent="ajouterL()">Ajouter</a>
                <a data-dismiss="modal" class="btn btn-inverse" href="#">Cancel</a>
            </div>
        </div>
<!-- end   -->


  <div id="modificationModal1" class="modal hide taillemodal">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modification de lot</h3>
            </div>
            <div class="modal-body">
                <div class="widget-box">
                    <form action="#" method="get">

                     <table class="table table-bordered table-striped"> 

                         <tr>
                         

                       <td>
                        <div class="control-group">
                        <label>Offre</label>
                        <div class="controls">
                            <!-- <select v-model="edite_lot.appel_offre_id" class="span" disabled>
                                <option v-for="varText in listeAppelOffre(macheid)" :key="varText.id"
                                        :value="varText.id">{{varText.ref_appel}}</option>
                            </select> -->
                             <input type="text" class="span" :value="listeAppelOffre(macheid)" readonly>
                        </div>
                        </div>
                         </td>



                           
                         </tr>
                          <tr>
                         

                      



                            <td>
                        <div class="control-group">
                            <label class="control-label">Numero lot :</label>
                            <div class="controls">
                                <input type="text" class="span" placeholder="Numero lo" v-model="edite_lot.numero_lot">
                            </div>
                        </div>
                            </td>
                         </tr>
                         <tr>
                             <td colspan="2">
                        <div class="control-group">
                            <label class="control-label">Libellé lot :</label>
                            <div class="controls">
                                <input type="text" class="span" placeholder="Libellé lot" v-model="edite_lot.libelle_lot">
                            </div>
                        </div>
                             </td>
                         </tr>
                         <tr>
                             <td colspan="3">
                        <div class="control-group">
                            <label class="control-label">Montant lot :</label>
                            <div class="controls">
                                <input type="text" class="span" placeholder="Montant lot" v-model="edite_lot.montant_lot">
                            </div>
                        </div>
                             </td>
                         </tr>
                     </table>
                        
                        <!-- <label>Mode de passation</label>
                        <div class="controls">
                            <select v-model="edite_lot.mode_passation_id" class="span">
                                <option v-for="varText in modePassations" :key="varText.id"
                                        :value="varText.id">{{varText.libelle}}</option>
                            </select>
                        </div> -->

                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <a class="btn btn-primary" @click.prevent="modficationsLot()">Modifier</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
        </div>












    <!--bigin of list lot  -->
      <!-- <h5>Liste des Lots</h5> -->

                            <table class="table table-bordered table-striped" v-if="macheid">
                                            <thead>
                                            <tr>
                                                <th>Numero lot </th>
                                                <th>Libellé</th>
                                                <th>Montant</th>
                                                <th>Offre</th>
                                                <th>Action</th>
                                                 </tr>
                                            </thead>
                                            <tbody>
                                            <tr class="odd gradeX" v-for="(lot_marche,index) in listeLots(macheid)"
                                                :key="lot_marche.id">
                                                <td @dblclick="afficherModaleModifier(index)">
                                                    {{lot_marche.numero_lot || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModaleModifier(index)">
                                                    {{lot_marche.libelle_lot || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModaleModifier(index)">
                                                    {{formatageSomme(parseFloat(lot_marche.montant_lot)) || 0}}</td>
                                             
                                                <td @dblclick="afficherModaleModifier(index)">
                                                    {{listeAppelOffreLibelle(lot_marche.appel_offre_id) || 'Non renseigné'}}
                                                </td>

                                                <div class="btn-group">
                                                    <button @click.prevent="supprimerLot(lot_marche.id)"  class="btn btn-danger ">
                                                        <span class=""><i class="icon-trash"></i></span></button>

                                                </div>

                                            </tr>
                                            </tbody>
                                        </table>
    <!--  end -->
    </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
   import { formatageSomme } from "../../../../src/Repositories/Repository";
export default {
    props:["macheid"],
    data(){
        return{


           
                 formLot:{
                   numero_lot:"",
                   libelle_lot:"",
                   montant_lot:"",
                   marche_id:"",
                   appel_offre_id:"",
                  // mode_passation_id:""
               },

               edite_lot:{
                    numero_lot:"",
                   libelle_lot:"",
                   montant_lot:"",
                   marche_id:"",
                   appel_offre_id:"",
                  // mode_passation_id:""

               },

            

        }
        
    },
    created(){

    },
    computed:{
        ...mapGetters('bienService', ['lots','appelOffres']),

        listeLots(){
                return  marche_id=>{
                    if (marche_id!="") {
                        //console.log("Marche lots")
                       // let listeLotMarche =this.lots.filter( idmarche => idmarche.marche.id == marche_id)
                       // const searchTerm = this.search.toLowerCase();
                        //return this.lots.filter( idmarche => idmarche.marche.id == marche_id)
                        return this.lots.filter( idmarche => idmarche.marche_id == marche_id)
                    }
                }

                
            },
            // listeAppelOffre: function () {
            //     return id => {
            //         if (id != "") {
            //             //console.log("Marche lettre inviation marche")
            //             return this.appelOffres.filter(idmarche => idmarche.marche_id == id)
            //         }
            //     }
            // },

            // listeAppelOffre(){
            //     return  id=>{
            //         if (id!="") {
                        
            //            const vM=this;
            //             let Objet=this.appelOffres.find( idmarche => idmarche.marche_id == id)
            //            console.log(Objet)
            //             if(Objet!=undefined){
            //                 // vM.formDossierCadidature.appel_offre_id=Objet.id;
            //                 // vM.formAnalyseDossier.appel_offre_id = Objet.id;
            //                 vM.formLot.appel_offre_id=Objet.id;
            //                 // vM.formAno.appel_offre_id = Objet.id
            //                 // vM.formLettre.appel_offre_id=Objet.id;
            //                 // vM.formDataCojo.num_dossier_appel_offre=Objet.ref_appel;
            //             }
                       
            //         return this.appelOffres.filter( idmarche => idmarche.marche_id == id)
            //         }
            //     }

            // },
            listeAppelOffre() {
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
       listeAppelOffreId() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.appelOffres.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.id;
      }
      return 0
        }
      };
    },
     listeAppelOffreLibelle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.appelOffres.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.ref_appel;
      }
      return 0
        }
      };
    },
    },
    methods:{
        ...mapActions("bienService", [ "ajouterLot","modifierLot","supprimerLot"]),
formatageSomme:formatageSomme,
         ajouterL(){
                this.formLot.marche_id=this.macheid
                this.formLot.appel_offre_id=this.listeAppelOffreId(this.macheid)
                this.ajouterLot(this.formLot)
                this.formLot={
                    numero_lot:"",
                        libelle_lot:"",
                        montant_lot:"",
                        marche_id:"",
                        appel_offre_id:"",
                        //mode_passation_id:""
                }
            },

            // fonction pour afficher le modal de  la modification

             afficherModaleModifier(index){
               
                this.$('#modificationModal1').modal({
                    backdrop: 'static',
                    keyboard: false
                });

             this.edite_lot = this.listeLots(this.macheid)[index];
                //this.edite_lot.appel_offre_id=this.edite_lot.
            },
 
             modficationsLot(){
                  this.edite_lot.marche_id=this.macheid
                this.edite_lot.appel_offre_id=this.listeAppelOffreId(this.macheid)
                this.modifierLot(this.edite_lot)
                this.$('#modificationModal1').modal('hide');
            },
    }

    
    
}
</script>