<template>
    <div>

 <div id="ajouterObservationBailleur" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter le PV</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">

                    <!--  <div class="control-group">
                        <label class="control-label">Reference PV</label>
                        <div class="controls">
                            <input type="text" v-model="formPv.ref_pv" class="span">
                        </div>
                    </div>-->

                     <div class="control-group">
              <label class="control-label">Fichier joint:</label>
              <div class="controls">
                <input type="file"   @change="OnchangeFichier" />
              </div>
            </div>
                   

                    

                </form>
            </div>
            <div class="modal-footer">
                <a
                        @click.prevent="ajouterPV"
                        class="btn btn-primary"
                        href="#"

                >Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props:[''],

    created(){

    },
computed:{

},

methods:{


},

}
</script>