
<template>
    

<div>
        <div class="container-fluid">
            


            <div class="widget-box">
              
                <div class="widget-content">
                    <div class="widget-content nopadding">
                        <table class="table table-striped table-bordered" v-if="detail_marche">
                            <thead>
                            <tr>
                                <th>Code</th>
                                <th>Libelle</th>
                                <th>Sigle</th>
                                
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-if="detail_marche">
                                
                                 <td class="taskOptions">
                                    {{detail_marche.code}}
                                </td>
                               
                                <td class="taskDesc">{{detail_marche.libelle}}</td>
                                <td class="taskStatus">{{detail_marche.sigle}}</td>
                            </tr>
                            </tbody>
                        </table>             

                    </div>
                </div>
            </div> 
      

     <template >
            <div class="widget-title">
            <ul class="nav nav-tabs">
             <!-- <li class="active"><a data-toggle="tab" href="#tab0074">Attribution</a></li> -->
             <li class="active"><a data-toggle="tab" href="#tab00214">Guichet</a></li>
        </ul>
          </div>
    <div class="widget-content tab-content">
<!-- <div id="tab0074" class="tab-pane active">
<executionLigneExempte :bailleurid="detail_marche.id"></executionLigneExempte>
    </div> -->


       <div id="tab00214" class="tab-pane active" >
                <div align="right">
             <div class="widget-content">
                 <a href="#addBailleurMarche" data-toggle="modal" class="btn btn-success">Ajouter</a>
                    </div>
                </div>
                <guichet :bailleurid="detail_marche.id"></guichet>
                </div>
    </div>
    
        </template>
              

           
              <!-- <div class="modal-footer">
        
        <a data-dismiss="modal" class="btn btn-danger" @click.prevent="retourListeEntreprise" href="#">Voir Tableau Marché</a>
       
      </div> -->
        </div>
          

</div>

</template>

<script>
import guichet from "../../../pages/parametres_generaux/source_financement/ComponentGuichet/guichet"
    import { mapGetters} from "vuex";
    
    export default {
       
        components:{
         
        guichet

        },
        data() {
            return {
                fabActions: [
                    {
                        name: "cache",
                        icon: "add"
                    }

                ],
                    
              bailleurid:"",
              detail_marche:""
            };
        },
created() {
            this.marcheid=this.$route.params.id
   this.detail_marche = this.sources_financements.find(
       idmarche => idmarche.id == this.$route.params.id
   )
  /*  this.appel_offre_marche=this.appelOffres.filter( idmarche => idmarche.marche.id == this.$route.params.id)
    console.log(this.appel_offre_marche)*/
},
        computed: {

    
            ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
                'types_financements']) ,
                
   


        },
        
        methods: {
         
          


//formatageSomme:formatageSomme,




    //            ajouterEtatLocal(){
    //      this.ajouterEtatProcedure(this.formEtat)
    //      this.formEtat={
    //          date_realisation:"",
    //          libelle_etat:"reception de la cotation"
    //      }
    //  },

              retourListeEntreprise(){
                 this.$router.push({ name: 'marche' })
            },
           
           
      
        }
    };
</script>
