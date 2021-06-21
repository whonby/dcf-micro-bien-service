<template>
    <div>
  <h4>Liste des entreprises Restreint</h4>
                <table class="table table-bordered table-striped" v-if="macheid">
                    <thead>
                    <tr>
                      
                        
                        <th>Entreprise  </th>
                       <div class="span5" align="right" >

                 <button data-toggle="modal" class="btn btn-primary" v-show="attribue.length >0"  @click.prevent="affectationLocal">Valider</button></div>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="odd gradeX" v-for="(appelOffre, index) in listeCotation(macheid)"
                        :key="appelOffre.id">
                         
                             
                          
                        <td @click="afficherCandidatSelectionner(index)">
                            {{afficherLibelleEntreprise(appelOffre.entreprise_id) || 'Non renseigné'}}</td>
                       
                          <!-- <td @click="afficherCandidatSelectionner(index)">
                            {{afficherNomCandidat(afficherCandidatId(appelOffre.candidat_selection_id)) || 'Non renseigné'}}</td> -->
                        
                        
                        <!--<td @click="afficherCandidatSelectionner(index)">
                            <button class="btn btn-info btn-mini" v-if="avisPv(appelOffre.reference_pv)==null">En attende</button>
                            <button class="btn btn-success btn-mini" v-else-if="avisPv(appelOffre.reference_pv)== 1">Non Objection</button>
                            <button class="btn btn-danger btn-mini" v-else>Objection</button>
                        </td>-->   
                

                            <div class="btn-group">
                             
                             
                                <div v-if="verificationTacheExiste(appelOffre.id)" >
                                  	<td style="text-align:cent">
									     <input type="checkbox" v-model="attribue" :value="appelOffre.id"  checked  disabled="disabled" />
									     </td>

                                             <!-- <p-check class="pretty p-image p-plain "  checked   disabled style=" width: 100%; font-size: 20px !important;" v-model="attribue" :value="appelOffre.id">
                                             <img slot="extra" class="image" src="../../../../assets/004.png">
                                             <p style="color: red"></p>
                                                </p-check> -->

                    
                     <!-- <span>{{item.name || 'Non renseigné'}} </span>
                     <input type="checkbox" id="jack"  v-model="attribue" :value="item.id" checked disabled  ../../assets/002.png />
                        
                      <label for="jack"></label> -->
                        </div>

                          <div v-else>
                          	<td style="text-align:cent" >
								         	<input type="checkbox" v-model="attribue"  :value="appelOffre.id"/>
									       </td>
                            <!-- <p-check class="pretty p-image p-plain "  style=" width: 100%; font-size: 20px !important;" v-model="attribue" :value="appelOffre.id">
                            <img slot="extra" class="image" src="../../../../assets/001.png">
                            <p style=""></p>
                             </p-check> -->
                        <!-- <span>{{item.name || 'Non renseigné'}} </span>  
                         <input type="checkbox" id="jack"  v-model="attribue" :value="item.id" />
                      
                      <label for="jack"></label> -->
                      
                        </div>
                        </div>


                        <!-- <td @click="afficherCandidatSelectionner(index)">

                            {{appelOffre.affichierReferenceAppelOffre|| 'Non renseigné'}}</td> -->
                        

                        

                    </tr>
                    </tbody>
                </table>
    </div>
</template>
<script>
import {mapGetters, mapActions} from "vuex"
export default {
    props:["macheid"],
    data() {
        return{
   checked:true,

    attribue:[],

    formAffectation:{
     entreprise_id:""
    }
        }
        
    },
    created(){


    },
    computed:{
   ...mapGetters("bienService",['gettersEntreprisePreselectionner',
   'gettersPersonnaliserRapportJugement','gettersCotationPersonnaliser','gettersEntreprisePreselectionner']),
 ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises']),
   
  listeCotation () {
                return id => {
                    if (id != "") {
                        // console.log("Marche lettre inviation marche")
                        return this.gettersCotationPersonnaliser.filter(idmarche => idmarche.marche_id == id)
                     }
             }
            },

           

            verificationTacheExiste(){
						return id => {
						if(id){
						let objet = this.gettersEntreprisePreselectionner.find(item =>{
						if(item.entreprise_id == id){
						return item
						}
						})
						if(objet){
						return true
						}
						return false	
						}
						}	
                        },
                afficherLibelleEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.raison_sociale;
      }
      return 0
        }
      };
    },
    //      afficherCandidatSelectionnerAtrribue() {
    //   return id => {
    //     if (id != null && id != "") {
    //        const qtereel = this.gettersPersonnaliserRapportJugement.find(qtreel => qtreel.id == id);

    //   if (qtereel) {
    //     return qtereel.attribue;
    //   }
    //   return 0
    //     }
    //   };
    // },
    },
    methods:{
    ...mapActions("bienService",["ajouterEntreSelectionner"]),

 affectationLocal(){

          	this.formAffectation={
						marche_id:this.macheid,
						attribue:this.attribue
                        }
                        this.ajouterEntreSelectionner(this.formAffectation)
                        // this.getAffectationGroupeUser();
                        this.formAffectation={
                            // user_id:"",
                            entreprise_id:""
                            //   groupe_id:""
                        }
      }
    }
}
</script>