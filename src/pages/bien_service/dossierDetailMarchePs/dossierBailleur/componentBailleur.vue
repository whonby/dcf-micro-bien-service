
<template>
    <div>

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
                                    <tr class="odd gradeX" v-for="appelOffre in listeBailleurMarche(macheid)"
                                        :key="appelOffre.id">
                                        <td @dblclick="editeMarcheBailleur(appelOffre.id)">
                                            {{appelOffre.bailleur.libelle || 'Non renseigné'}}</td>
                                        <td @dblclick="editeMarcheBailleur(appelOffre.id)">
                                            {{appelOffre.typeFinnancement.libelle || 'Non renseigné'}}</td>
                                        <td @dblclick="editeMarcheBailleur(appelOffre.id)">
                                            {{formatageSomme(parseFloat(appelOffre.montant ))|| 'Non renseigné'}}</td>
                                        <div class="btn-group">
                                            <button @click.prevent="supprimerMarcheBailleur(appelOffre.id)"  class="btn btn-danger ">
                                                <span class=""><i class="icon-trash"></i></span></button>
                                        </div>

                                    </tr>
                                    </tbody>
                                </table>
              
     




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
                                                    <input type="text" class="span5" placeholder="Montant" v-model="formBailleur.montant">
                                                </div>
                                                
                                            </div>
                                        </form>
                                        <div class="modal-footer" >
                                            <button @click.prevent="ajouterBailleur" class="btn btn-primary" >Valider</button>
                                            <button data-dismiss="modal" class="btn" href="#">Fermer</button>
                                        </div>
                                    </div>
                                </div>

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

<!--- fin modifier acte effet financier  -->
  <notifications/>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import { formatageSomme } from '../../../../../src/Repositories/Repository';
import moment from 'moment';
export default {
    
    data(){
        return{
        
          formBailleur: {
                    type_finnancement_id:"",
                    bailleur_id:"",
                   
                    montant:"",
                    
                },
        edit_bailleur_marche:{
             type_finnancement_id:"",
                    bailleur_id:"",
                    montant:"",

        }

        }
    },
    props:["macheid"],
    created(){},

       computed: {

            ...mapGetters("bienService", [ "typeTypeProcedures","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots",
                "modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
            ...mapGetters('personnelUA', ['acteur_depenses']),


                ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises']),
            ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
                'types_financements']) ,
                
    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),
      
listeBailleurMarche: function () {
                return macheid => {
                    if (macheid != "") {
                        //console.log("Marche lettre inviation marche")
                        return this.personnaliseGetterMarcheBailleur.filter(idmarche => idmarche.marche_id == macheid)
                    }
                }
            },



      
      },

      methods:{ 

          ...mapActions("bienService", [
               "ajouterMarcherBailleur",
                "modificationMarcheBailleur","supprimerMarcheBailleur"
            
            ]),

            //  afficherModalModifierTransmission(index){
            //     this.$('#modificationAajouterAnalys01').modal({
            //         backdrop: 'static',
            //         keyboard: false
            //     });
            //     this.edit_transmission = this.listetransmissionDao(this.macheid.id)[index];
            // },

        editeMarcheBailleur(index){
                this.$('#editBailleuMarche').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.edit_bailleur_marche = this.personnaliseGetterMarcheBailleur.find(item =>item.id==index)
              //  console.log(this.edit_bailleur_marche)
            },

         ajouterBailleur(){
                this.formBailleur.marche_id=this.macheid
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






 
    


formatageSomme:formatageSomme,

 formaterDate(date) {
              return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },
            
             
      }
}
</script>

<style scoped>
.grdirModalActeEffet{
     width: 900px;
 margin: 0 -430px;
 

}
</style>