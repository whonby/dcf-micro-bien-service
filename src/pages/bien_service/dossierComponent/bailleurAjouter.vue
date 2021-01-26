<template>
    <div > 
             <!-- modal  d'ajout  de bailleur  --->
      <div id="addBailleurMarche" class="modal hide" aria-hidden="true" style="display: none;">
                                    <div class="modal-header">
                                        <button data-dismiss="modal" class="close" type="button">×</button>
                                        <h3>Ajouter bailleur </h3>
                                    </div>
                                    <div class="modal-body">

                                        <form action="#" method="get" v-if="macheid">
                                            <label>Bailleur</label>
                                            <div class="controls">
                                                <select v-model="formBailleur.bailleur_id" class="span" >
                                                    <option v-for="varText in sources_financements" :key="varText.id"
                                                            :value="varText.id">{{varText.libelle}}</option>
                                                </select>
                                            </div>
                                            <label>Type finnancement <code>*</code> </label>
                                            <div class="controls">

                                                <select v-model="formBailleur.type_finnancement_id" class="span">
                                                    <option v-for="varText in types_financements" :key="varText.id"
                                                            :value="varText.id">{{varText.libelle}}</option>
                                                </select>
                                            </div>
                                            <div class="control-group">
                                                <label class="control-label">Montant <code>*</code> :</label>
                                                <div class="controls">
                                                    <input type="text" class="span5" placeholder="Libelle lot" v-model="formBailleur.montant">
                                                </div>
                                                <div class="controls" v-if="macheid">
                                                    <code>Reste bailleur : {{parseFloat(macheid.montant_marche)-montantBailleurMarcheCompare(macheid.id)}}</code>
                                                    <code v-if="montantBailleurMarcheCompare(macheid.id)>=parseFloat(macheid.montant_marche)">
                                                        Le montant total des bailleurs ne toi etre supperier au montant du marche
                                                    </code>
                                                </div>
                                            </div>
                                        </form>
                                        <div class="modal-footer" v-if="macheid">
                                            <button @click.prevent="ajouterBailleur" class="btn btn-primary" v-if="montantBailleurMarcheCompare(macheid.id)<=parseFloat(macheid.montant_marche)">Valider</button>
                                            <button data-dismiss="modal" class="btn" href="#">Fermer</button>
                                        </div>
                                    </div>
                                </div>

                                <!--fin de modal d'ajou bailleur    -->


                                        <!-- debut de modification de bailleur -->
                   <div id="editBailleuMarche" class="modal hide" aria-hidden="true" style="display: none;">
                                    <div class="modal-header">
                                        <button data-dismiss="modal" class="close" type="button">×</button>
                                        <h3>Modification </h3>
                                    </div>
                                    <div class="modal-body">

                                        <form action="#" method="get" v-if="macheid">
                                            <label>Bailleur</label>
                                            <div class="controls">
                                                <select v-model="edit_bailleur_marche.bailleur_id" class="span" >
                                                    <option v-for="varText in sources_financements" :key="varText.id"
                                                            :value="varText.id">{{varText.libelle}}</option>
                                                </select>
                                            </div>
                                            <label>Type finnancement <code>*</code> </label>
                                            <div class="controls">

                                                <select v-model="edit_bailleur_marche.type_finnancement_id" class="span">
                                                    <option v-for="varText in types_financements" :key="varText.id"
                                                            :value="varText.id">{{varText.libelle}}</option>
                                                </select>
                                            </div>
                                            <div class="control-group">
                                                <label class="control-label">Montant <code>*</code> :</label>
                                                <div class="controls">
                                                    <input type="text" class="span5" placeholder="Libelle lot" v-model="edit_bailleur_marche.montant">
                                                </div>
                                            </div>
                                        </form>
                                        <div class="modal-footer">
                                            <button @click.prevent="modificationBailleurMarche" class="btn btn-primary">Modification</button>
                                            <button data-dismiss="modal" class="btn" href="#">Fermer</button>
                                        </div>
                                    </div>
                                </div>
                                <!--fin de modification bailleur  -->
                            


                                  <h4>Liste des bailleurs du marché</h4>

                                <table class="table table-bordered table-striped" v-if="macheid">
                                    <thead>
                                    <tr>
                                        <th>Bailleur</th>
                                        <th>Type finanncement</th>
                                        <th>Montant</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr class="odd gradeX" v-for="appelOffre in listeBailleurMarche(macheid.id)"
                                        :key="appelOffre.id">
                                        <td @dblclick="editeMarcheBailleur(appelOffre.id)">
                                            {{appelOffre.bailleur.libelle || 'Non renseigné'}}</td>
                                        <td @dblclick="editeMarcheBailleur(appelOffre.id)">
                                            {{appelOffre.typeFinnancement.libelle || 'Non renseigné'}}</td>
                                        <td @dblclick="editeMarcheBailleur(appelOffre.id)">
                                            {{appelOffre.montant || 'Non renseigné'}}</td>
                                        <div class="btn-group">
                                            <button @click.prevent="supprimerMarcheBailleur(appelOffre.id)"  class="btn btn-danger ">
                                                <span class=""><i class="icon-trash"></i>Supprimer</span></button>
                                        </div>

                                    </tr>
                                    </tbody>
                                </table>

<!-- 
                 <fab :actions="fabActions" @cache="afficherModalAjouterTitre" main-icon="apps" bg-color="green"></fab>
 <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterTitre()">Open</button>
      <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button> -->
<!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
<notifications  />               

    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    data(){
        return{
             fabActions: [
        {
          name: "cache",
          icon: "add"
        },
      ],
       formBailleur:{
                    type_finnancement_id:"",
                    montant:0,
                    marche_id:"",
                    bailleur_id:"",
                
                },
                edit_bailleur_marche:"",
                detail_marche:""

        }
    },

props:["macheid"],


 computed:{
     ...mapGetters('bienService',['personnaliseGetterMarcheBailleur']),

            ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
                'types_financements']) ,

listeBailleurMarche(){
                return  marche_id=>{
                    if (marche_id!="") {
                      // console.log(this.marche_id)
                        return this.personnaliseGetterMarcheBailleur.filter( idmarche => idmarche.marche_id == marche_id)
                    }
                }


            },

            montantBailleurMarcheCompare(){
                return  marche_id=>{
                    if (marche_id!="") {
                        let initialValue = 0;
                        let vM=this;
                      //  let montantSaisie=parseFloat(vM.formBailleur.montant)
                        let ObjetMontant =this.personnaliseGetterMarcheBailleur.filter( idmarche => idmarche.marche_id == marche_id).reduce(function (total, currentValue) {
                                 return total + parseFloat(currentValue.montant) ;
                        }, initialValue);
                        let montantConbiner=parseFloat(vM.formBailleur.montant) + parseFloat(ObjetMontant)

                        return parseFloat(montantConbiner);
                    }
                }


            }
 } ,
 
 methods:
 {
     ...mapActions('bienService',['ajouterMarcherBailleur', 'supprimerMarcheBailleur', 'modificationMarcheBailleur']),



 ajouterBailleur(){
                this.formBailleur.marche_id=this.macheid.id
               this.ajouterMarcherBailleur(this.formBailleur)
                this.formBailleur={
                      type_finnancement_id:"",
                        montant:0,
                        marche_id:"",
                        bailleur_id:"",
                }
            },


       modificationBailleurMarche(){
                this.modificationMarcheBailleur(this.edit_bailleur_marche)
                this.$('#editBailleuMarche').modal('hide');
            },
            editeMarcheBailleur(index){
                this.$('#editBailleuMarche').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.edit_bailleur_marche = this.personnaliseGetterMarcheBailleur.find(item=>item.id==index)
              //  console.log(this.edit_bailleur_marche)
            },

 }
}


</script>