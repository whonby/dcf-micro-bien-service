<template>
    <div class="DetailCF">
        <div class="container-fluid" v-if="detail">
            <div class="row-fluid">
                <div class="span12">
                    <div class="widget-box">
                        <div class="widget-title" >
                            
                            <div class="span6">
                                <span class="icon"> <i class="icon-th" ></i></span>
                                <!-- <h5>{{detail.name}}</h5> -->
                            </div>
                           
                        </div>
                        <div class="widget-content nopadding" ref="content">
                            <table class="table table-bordered table-striped">
                                <thead>
                                <tr>
                                    <th>Code</th>
                                    <th>Nom du groupe</th>
                                    <th>Description</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="odd gradeX">
                                    <td>{{detail.code || 'Non renseigné'}}</td>
                                    <td  >{{detail.nom_groupe || 'Non renseigné'}}</td>
                                    <td >{{detail.description}}</td>
                                </tr>
                                </tbody>
                            </table>
                            <table class="table table-bordered table-striped">
                                                        <thead>
                                                        <tr>
                                                            <th>Fonctions</th>
                                                            <th>Ajouter</th>
                                                            <th>Modifications</th>
                                                            <th>Consulter</th>
                                                            <th>Imprimer</th>
                                                            <th>Supprimer</th>
                                                            <th>Exporter</th>
                                                            <th>Importer</th>
                                                        </tr>
                                                        </thead>
                                                         <tbody>
                <tr class="odd gradeX" v-for="item  in gettersMenu" :key="item.id">
                 
                    
                     <td>{{item.libelle || 'Non renseigné'}} </td>
                    <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="" toggle style="transform: scale(0.9) translate(-10%, -95%);  " v-model="attribue" :value="item.id" >
                      <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                        <label for="exercice" slot="off-label"></label>
                        </p-check></td>
                        
                    <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="" toggle style="transform: scale(0.9) translate(-10%, -95%);  " v-model="attribue" :value="item.id" >
                      <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                        <label for="exercice" slot="off-label"></label>
                        </p-check></td>
                        <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="" toggle style="transform: scale(0.9) translate(-10%, -95%);  " v-model="attribue" :value="item.id" >
                      <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                        <label for="exercice" slot="off-label"></label>
                        </p-check></td>
                        <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="" toggle style="transform: scale(0.9) translate(-10%, -95%);  " v-model="attribue" :value="item.id" >
                      <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                        <label for="exercice" slot="off-label"></label>
                        </p-check></td>
                        <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="" toggle style="transform: scale(0.9) translate(-10%, -95%);  " v-model="attribue" :value="item.id" >
                      <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                        <label for="exercice" slot="off-label"></label>
                        </p-check></td>
                        <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="" toggle style="transform: scale(0.9) translate(-10%, -95%);  " v-model="attribue" :value="item.id" >
                      <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                        <label for="exercice" slot="off-label"></label>
                        </p-check></td>
                        <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="" toggle style="transform: scale(0.9) translate(-10%, -95%);  " v-model="attribue" :value="item.id" >
                      <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                        <label for="exercice" slot="off-label"></label>
                        </p-check></td>
                        
                       
                

                 
                                                           
                                                       
                </tr>
             
              </tbody>
                                                    </table>


                        </div>
                        
                    </div>


                </div>
                <button @click.prevent="AllerAPageListe" class="icon-arrow-left" style="color:red" title="retour"></button>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters} from "vuex";
  /*  import { formatageSomme } from "../../Repositories/Repository";
    import {  ModelListSelect } from 'vue-search-select'
    import 'vue-search-select/dist/VueSearchSelect.css'
    ";*/
    import moment from "moment"
   // import {partition} from "../../Repositories/Repository"

    //import ProgressBar from "../component/ProgressBar"
    export default {
        name: 'budget',
        props: ['marche'],
        components:{
            //ProgressBar
        },
        data() {
            return {
                attribue:true,
                search:"",
                fabActions: [
                    {
                        name: "cache",
                        icon: "add"
                    }

                ],
              
                active_el:0,
                page:0,
                size:10,
                detail:"",
               
            };
        },
        created() {
            this.detail=this.getterGroupe.find(item=>item.id==this.$route.params.id)
            //this.detailAffectation=this.getterAffectation.filter(item=>item.user_id==this.$route.params.id)

          //  console.log(this.detail)
        },
        computed: {
            ...mapGetters("Utilisateurs", ["getterGroupe","gettersMenu"]),
           
        },
        methods: {
            
            formaterDate(date) {
                return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },
            AllerAPageListe(){
  
    this.$router.push({
        name: 'groupe'
    })
    },
            //partition:partition,
            // getDataPaginate(index){
            //     this.active_el = index;
            //     this.page=index
            // },
            // precedent(){
            //     this.active_el--
            //     this.page --
            // },
            // suivant(){
            //     this.active_el++
            //     this.page ++
            // },
          
           
         
      
            
           
           
           
        }
    };
</script>
<style scoped>

</style>
