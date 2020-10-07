
<template>
  <div>
  <div class="container-fluid">
        <hr>
    <div class="row-fluid">
      <div class="span12">
           <div>
<!-- 
                                       <download-excel
                                            class="btn btn-success pull-right"
                                            style="cursor:pointer;"
                                              :fields = "json_fields"
                                              title="Liste des Missions "
                                              name ="Liste des missions"
                                              worksheet = "Missions"
                                            :data="categorieMissionFiltre">
                      <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel>  -->
                            <!-- <div align="right" style="cursor:pointer;">
                    <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
                        </div>  -->

                                     </div> <br>
                  
                     <div class="" align="right">
                   <router-link :to="{name:'ajouter_hors_sib'}" tag="a" data-toggle="modal" class="btn btn-success" align="rigth">Ajouter

                   </router-link>
                   </div>
              
                                    
        <div class="widget-box">
         
             <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
            <h5>Liste des catégories de missions</h5>
             <div align="right">
        Recherche: <input type="text" >

          </div>
             
          </div>
                       <!-- <div class="span4">
            <br>
          Afficher
         <select name="pets" id="pet-select" v-model="size" class="span3">
            <option value="10">10</option>
            <option value="25">25</option>
           <option value="50">50</option>
       <option value="100">100</option>
      </select>
           Entrer
        </div> -->
           <div class="widget-content nopadding">
         
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                    <th>Code</th>
                  <th>Libellé</th>
                   <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="activites  in  gettersMarcheHorsib"
                 :key="activites.id">
                  <td @dblclick="afficherModalModifierBudgetaire(activites.id)">
                      {{activites.code || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierBudgetaire(activites.id)">
                      {{activites.libelle || 'Non renseigné'}}</td>
                   
                  <td>



              <div class="btn-group">
              <button @click.prevent="supprimerCategorieMission(activites.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i></span></button>
             
            </div>

                  </td>
                </tr>
              </tbody>
              
            </table>
             <!-- <pagination :data="laravelData" @pagination-change-page="getCategorieMission()"></pagination> -->
          
          <!-- <div class="pagination alternate">
              <ul>
               
                <li v-for="(item, index) in 4" :key="item" @click.prevent="paginate(index + 1)"><a href="#" >{{index + 1}}</a></li>
               
                
              </ul>
            </div> -->
           
            <!-- <div v-if="categorieMissionFiltre.length">    
            </div>
            <div v-else>
              <div align="center">
                <h6 style="color:red;">Aucune categorie mission enregistrée </h6>
              </div>
            </div> -->
          </div>
        </div>

         <!-- <div class="pagination alternate">
             <ul>
           <li :class="{ disabled : page == 0 }"><a @click.prevent="precedent()" href="#">Précedent</a></li>
           <li  v-for="(titre, index) in partition(categorieMissionFiltre,size).length" :key="index" :class="{ active : active_el == index }">
           <a @click.prevent="getDataPaginate(index)" href="#">{{index + 1}}</a></li>
            <li :class="{ disabled : page == partition(categorieMissionFiltre,size).length -1 }"><a @click.prevent="suivant()" href="#">Suivant</a></li>
           </ul>
        </div> -->





      </div>
              </div>
            </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"
export default {
  data(){
    return{

    }
  },
  created(){

  },
  computed:{
 ...mapGetters("horSib", ["gettersMarcheHorsib"])
  },
  methods:{
...mapActions("horSib",[""])

  }
  
}
</script>