<template>
    <div class="DetailCF">
        <div class="container-fluid" v-if="detail">
            <div class="row-fluid">
                <div class="span12">
                    <div class="widget-box">
                        <div class="widget-title">
                            <div class="span6">
                                <span class="icon"> <i class="icon-th"></i> </span>
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


                        </div>
                        
                    </div>


                </div>
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
            ...mapGetters("Utilisateurs", ["getterGroupe"]),
           
        },
        methods: {
            
            formaterDate(date) {
                return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
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
