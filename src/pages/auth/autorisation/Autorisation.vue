<template>
    <div>
        <hr>
       <div id="tab2" class="tab-pane">
        <h4 align="center"> AFFECTATION </h4>
                                    <div class="row-fluid">
                                        <div class="span6" >


                                            <div class="widget-box">
                                                <div class="widget-title">
                                                    <div class="span6">
                                                        <span class="icon"> <i class="icon-list"></i> </span>
                                                        <h5>liste des groupe</h5>
                                                    </div>
                  

                                                </div>
                                                <div class="widget-content">
                                          <tr class="odd gradeX" v-for="item  in getterGroupe" :key="item.id">
                                            <!-- <td style="margin-left:-200px;">
                                            <div @click.prevent="activationUserLocal(item.id)" v-if="item.actived==0">
                                             <p-check class="pretty p-image p-plain "   style=" width: 100%; font-size: 20px !important;" >
                                                <img slot="extra" class="image" src="../../../assets/001.png">
                                                  </p-check>
                                            </div>

                                            <div @click.prevent="activationUserLocal(item.id)" v-if="item.actived==1">
                                             <p-check class="pretty p-image p-plain " style=" width: 100%; font-size: 20px !important;" v-model="item.actived" :value="item.id">
                                                <img slot="extra" class="image" src=" ../../../assets/004.png">
                                                  </p-check>
                                            </div>
                                    </td> -->
                    	            
                                    <td style="margin-left:-200px;">
                                     <div @click.prevent="activationUserLocal(item.id)" v-if="item.actived==0" >
								
							<input type="checkbox" style="margin-rigth:-50px;" />
                                 </div>
							<div @click.prevent="activationUserLocal(item.id)" v-if="item.actived==1"  >
							
							<input type="checkbox" v-model="item.actived" :value="item.id" />
							</div>
									</td>
                     
                     
                     
                            <td style="margin-left:-50px;">{{item.nom_groupe || 'Non renseigné'}} </td>
                        
                                                       
                </tr>                                  
                 </div>
             </div>





                                        </div>
                                        <div class="span6">
                                            <div class="widget-box">
                                                <div class="widget-title">

                                                    <div class="span7">
                                                        <span class="icon">
                                                    <i class="icon-list"></i> </span> <h5>USERS/CF <code>({{getterUtilisateur.length}})</code></h5>
                                                    </div>
                                                    <div class="span5" align="right" >

                                                        <button data-toggle="modal" class="btn btn-primary" v-show="attribue.length >0"  @click.prevent="affectationLocal">Valider</button></div>

                                                </div>
                                                <div class="widget-content">
                                          <tr class="odd gradeX" v-for="item  in getterUtilisateur" :key="item.id">
                                         <div v-if="verificationTacheExiste(item.id)" >

                                             <p-check class="pretty p-image p-plain "  checked   disabled style=" width: 100%; font-size: 20px !important;" v-model="attribue" :value="item.id">
                                             <img slot="extra" class="image" src="../../../assets/001.png">
                                             <p style="color: red">{{ item.name}}</p>
                                                </p-check>
                    
                     <!-- <span>{{item.name || 'Non renseigné'}} </span>
                     <input type="checkbox" id="jack"  v-model="attribue" :value="item.id" checked disabled  ../../assets/002.png />
                        
                      <label for="jack"></label> -->
                        </div>
                        <div v-else>
                            <p-check class="pretty p-image p-plain "  style=" width: 100%; font-size: 20px !important;" v-model="attribue" :value="item.id">
                            <img slot="extra" class="image" src="../../../assets/001.png">
                            <p style="">{{ item.name}}</p>
                             </p-check>
                        <!-- <span>{{item.name || 'Non renseigné'}} </span>  
                         <input type="checkbox" id="jack"  v-model="attribue" :value="item.id" />
                      
                      <label for="jack"></label> -->
                        </div>
                                                      
                </tr>                                  
                 </div>
                 <div v-if="!getterUtilisateur.length">
                     pas de Controleur financier
                 </div>
                </div>

            </div>

             </div>
            </div>
    </div>
</template>
<script>
import {mapGetters, mapActions} from "vuex";
export default {
    data(){
        return{
            actived:false,
            checked:true,

            attribue:[],
            formAffectation:{
                user_id:"",
                groupe_id:""
            }


        }
    },
    created(){

    },
    computed:{
...mapGetters('Utilisateurs', ['getterGroupe','gettersMenu','getterUtilisateur','getterAffectation']),

verificationTacheExiste(){
						return id => {
						if(id){
						let objet = this.getterAffectation.find(item =>{
						if(item.user_id == id && item.role_id==null){
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
                        recuperationIDGroupe(){
					// return id =>{
					// if(id!=null && id!=""){
					let objet = this.getterGroupe.find(item =>item.actived==1)
					if(objet){
					return objet.id
					}
					return null
					
					},
    },
    methods:{
   ...mapActions("Utilisateurs",["activationGroupe","ajouterAffectationMultiple","getAffectationGroupeUser"]),     
      activationUserLocal(id){this.activationGroupe(id)},
      affectationLocal(){

          	this.formAffectation={
						groupe_id:this.recuperationIDGroupe,
						attribue:this.attribue
                        }
                        this.ajouterAffectationMultiple(this.formAffectation)
                         this.getAffectationGroupeUser();
                        this.formAffectation={
                            user_id:"",
                              groupe_id:""
                        }
      }
      
    }
}
</script>
<style scoped>
.widget-content{
    margin-left: auto; 
     margin-right: auto;
}
</style>