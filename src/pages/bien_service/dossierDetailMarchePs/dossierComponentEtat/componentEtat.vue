<template>
    <div >
        <table  >
          <tr  class="odd gradeX">
              <td colspan="" width="250">
        <div class="control-group" align="left">
            <label class="label-control">Reception de la cotation</label>
            <div class="controls">
                <input type="text" class="span" v-model="formEtat.libelle_etat" readonly>
            </div>
        </div>
              </td>
              <td colspan="1" width="250">
        <div class="control-group" >
            <label class="label-control"> Date de demarrage</label>
            <div class="controls">
                <input type="date" class="span" v-model="formEtat.date_realisation"
                />
            </div>
        </div>
              </td>
              <td  colspan="" width="">
                 <div class="modal-footer" style="width:70px;">
                <a class="btn btn-primary" @click.prevent="ajouterEtatLocal()">Valider</a>
                 </div>
              </td>
              <!-- <td colspan="" width="550">
              </td> -->
          </tr>
        </table>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
    data(){
        return{
            formEtat:{
                date_realisation:"",
                libelle_etat:"reception de la cotation"
            }

        }
    },
    props:["macheid"],

    created(){


    },
    computed:{
        ...mapGetters('bienService',['gettersEtatProcedurePersonnaliser','gettersEtatProcedure']),



    // afficherDate() {
    //   return this.formEtat.libelle_etat == this.formEtat.date_realisation ;
    // },
    },
    methods:{
        ...mapActions('bienService', ['ajouterEtatProcedure']),
     ajouterEtatLocal(){
         this.ajouterEtatProcedure(this.formEtat)
         this.formEtat={
             date_realisation:"",
             libelle_etat:"reception de la cotation"
         }
     }
    
    }

}
</script>