<template>
    <div>
        <div class="container">
           <div class="mt-8 d-flex justify-context-center">
                <h4>Nom de l'Agent : DCF</h4>
                Date: 05/02/2000
                 <p class="text-secondary mb-1">Distance :
                    <b>8.52°</b>
                </p>

               <div id="tab2" class="tab-pane">
                    <table class="table">
                        <tr>
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Libelle</label>
                                    <div class="controls">
                                        <input
                                            type="text"
                                        />
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Observation</label>
                                    <div class="controls">
                                        <input
                                                type="text"
                                                
                                        />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <vue-dropzone
                            ref="myVueDropzone"
                            id="dropzone"
                            :options="dropzoneOptions"
                            :useCustomSlot="true"
                            v-on:vdropzone-sending="sendingEvent"
                            v-on:vdropzone-success="uploadSuccess"
                            v-on:vdropzone-error="uploadError"
                            v-on:vdropzone-removed-file="fileRemoved">
                        <div class="dropzone-custom-content">
                            <h3 class="dropzone-custom-title">
                                Faites glisser et déposez pour chargé l'image</h3>
                            <div class="subtitle">...ou cliquez pour sélectionner un fichier sur votre ordinateur</div>
                        </div>
                    </vue-dropzone>
                </div> <br> <br>
                <button class="btn btn-primary">Enregistrer</button>
           </div>
        </div>
                
    </div>
</template>
<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
export default {
    components:{
        vueDropzone: vue2Dropzone
    },
    data(){
        return {
            dropzoneOptions: {
                url: process.env.VUE_APP_BIEN_SERVICE_URL+"/image_marche2",
                addRemoveLinks: true,
                maxFiles: 1
            },
        }
    }
}
</script>