<template>
    <div>
        <hr>
       <div id="tab2" class="tab-pane">

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
                 
                    
                     <td>{{item.nom_groupe || 'Non renseigné'}} </td>
                        <input type="checkbox" id="jack"  v-model="attribue" :value="item.id">
                      <label for="jack"></label>
                                                       
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

                                                        <a href="#myAlert" data-toggle="modal" class="btn btn-primary" >Valider</a></div>

                                                </div>
                                                <div class="widget-content">
                                          <tr class="odd gradeX" v-for="(item,index)  in getterUtilisateur" :key="index+458000000000000">
                 
                    
                     <td>{{item.name || 'Non renseigné'}} </td>
                        <input type="checkbox" id="jack"  v-model="attribue" :value="item.id">
                      <label for="jack"></label>
                                                       
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
import {mapGetters} from "vuex";
export default {
    data(){
        return{

        }
    },
    created(){

    },
    computed:{
...mapGetters('Utilisateurs', ['getterGroupe','gettersMenu','getterUtilisateur']),
    },
    methods:{

    }
}
</script>
<style scoped>
.widget-content{
    margin-left: auto; 
     margin-right: auto;
}
</style>