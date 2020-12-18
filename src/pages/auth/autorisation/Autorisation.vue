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
                                                    <div  v-for="listeM in getterGroupe" :key="listeM.id" >
                                                           <div >
                                                               <p-check class="pretty p-image p-plain "  checked   disabled style=" width: 100%; font-size: 20px !important;" >
                                                                   <!-- <img slot="extra" class="image" src="../../assets/002.png"> -->
                                                                  <p style="color: red">{{ listeM.libelle }}</p>
                                                               </p-check>
                                                           </div>
                                                        <div >
                                                            <p-check class="pretty p-image p-plain "  style=" width: 100%; font-size: 20px !important;"  >
                                                                <!-- <img slot="extra" class="image" src="../../assets/004.png"> -->
                                                                
                                                            </p-check>
                                                        </div>


                                                    </div>
                                                    
                                                   </div>
                                            </div>





                                        </div>
                                        <div class="span6">
                                            <div class="widget-box">
                                                <div class="widget-title">

                                                    <div class="span7">
                                                        <span class="icon">
                                                    <i class="icon-list"></i> </span> <h5>Unite administrative selectionné <code></code></h5>
                                                    </div>
                                                    <div class="span5" align="right" >

                                                        <a href="#myAlert" data-toggle="modal" class="btn btn-primary" >Valider</a></div>

                                                </div>
                                                <div class="widget-content">
                                                    <div   >

                                                        <p-check class="pretty p-image p-plain"
                                                                 style=" width: 100%; font-size: 20px !important;" >
                                                            <!-- <img slot="extra" class="image" src="../../assets/003.png"> -->
                                                          
                                                        </p-check>

                                                    </div>
                                                    
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
...mapGetters('Utilisateurs', ['getterGroupe','gettersMenu']),
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