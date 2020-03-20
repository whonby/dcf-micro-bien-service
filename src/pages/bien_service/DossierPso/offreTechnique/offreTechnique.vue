
<template>
    <div>

                
                <!-- <h4>Liste des offres</h4> -->
                <table class="table table-bordered table-striped" v-if="macheid">
                    <thead>
                   <tr>
                        <th>Date lettre</th>
                        <th>Ref lettre </th>
                        <th>Destinataire</th>
                        <th>Objet de la lettre</th>
                        <th>Fichier</th>
                        <th>Date cojo</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                  <tr class="odd gradeX" v-for="(appelOffre,index) in lettreInvitationAMarche(macheid)"
                        :key="appelOffre.id">
                        <td @click="afficheBouttonTechFinInvitation(index)">
                           {{formaterDate(appelOffre.date_lettre) || 'Non renseigné'}}</td>
                        <td @click="afficheBouttonTechFinInvitation(index)">
                            {{appelOffre.ref_lettre || 'Non renseigné'}}</td>
                        <td @click="afficheBouttonTechFinInvitation(index)">
                            {{appelOffre.destination || 'Non renseigné'}}</td>
                         <td @click="afficheBouttonTechFinInvitation(index)">
                            {{appelOffre.objet_lettre || 'Non renseigné'}}</td>
                        <td>
                            <a v-if="appelOffre.fichier" :href="appelOffre.fichier" class="btn btn-default" target="_blank">
                                <span class=""><i class="icon-book"></i>
                                </span>
                            </a>
                        </td>
                        <td @click="afficheBouttonTechFinInvitation(index)">
                            {{formaterDate(appelOffre.date_cojo )|| 'Non renseigné'}}
                        </td>
                        <div class="btn-group">
                            <button @click.prevent="supprimerLettreInvitation(appelOffre.id)"  class="btn btn-danger " title="Supprimer">
                                <span class=""><i class="icon-trash"></i></span></button>
                        </div>
                    </tr>
                    </tbody>
                </table>

              
     
<!-- debut ajout acte effet financier --->



<div id="ajouterLettreInvitation" class="modal hide grdirModalActeEffet">
             <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter Lettre d'invitation</h3>
            </div>
            <div class="modal-body">

                    <table class="table table-bordered table-striped">
                        <tr>
                <td>
                    <div class="control-group">
                        <label>Offre</label>
                        <div class="controls">
                            <select v-model="formLot.appel_offre_id" class="span" disabled>
                                <option v-for="varText in listeAppelOffre(marcheid)" :key="varText.id"
                                        :value="varText.id">{{varText.ref_appel}}</option>
                            </select>
                        </div>
                    </div>
                </td>
            <!--  <td>
                <div class="control-group">
              
                  <label>Liste lot</label>
                                <div class="controls">
                                    <select v-model="formOffreFinanciere.numero_lot" class="span">
                                        <option v-for="varText in listeLots(marcheid)" :key="varText.numero_lot"
                                                :value="varText.id">{{varText.numero_lot}}</option>
                                    </select>
                                </div>
                </div>
              </td>-->
             <!-- <td colspan="2">
                <div class="control-group">
                    <label class="control-label">Designation :</label>
                            <div class="controls">
                                <input type="text"  readonly   class="span6" placeholder="Designation" :value="libelleLot">
                            </div>
                </div>
              </td>-->
                <td>

                    <div class="control-group">
                        <label class="control-label">Quantite :</label>
                        <div class="controls">
                            <input type="number" class="span" placeholder="quantite" v-model="formOffreFinanciere.quantite">
                        </div>
                    </div>

                </td>
                <td>

                    <div class="control-group">
                        <label class="control-label">Prix unitaire :</label>
                        <div class="controls">
                            <input type="number" class="span" placeholder="prix unitaire" v-model="formOffreFinanciere.prix_unitaire">
                        </div>
                    </div>
                </td>
            </tr>
            <tr>

              <td>
                  <div class="control-group">
                            <label class="control-label">Taux</label>
                            <div class="controls">
                                <input type="text" readonly  class="span" :value="affcherTauxEnCours">
                                 <input
                    type="hidden"
                    :value="tauxArrondit"
                   
                    class="span3"
                   
                  />
                            </div>
                        </div>
              </td>

                <td>
                    <div class="control-group">
                        <label class="control-label">Tva</label>
                        <div class="controls">
                            <input type="number" readonly :value="montantTva" class="span" />
                        </div>
                    </div>
                </td>
                <td>
                    <div class="control-group">
                        <label class="control-label">Montant total ht :</label>
                        <div class="controls">
                            <input type="text"   readonly  class="span" placeholder="Montant total HT" :value="montantHT">
                        </div>
                    </div>
                </td>
            </tr>
            <tr>

              <td>
                <div class="control-group">
                            <label class="control-label">Montant totat ttc :</label>
                            <div class="controls">
                                <input type="text"  readonly  class="span" placeholder="Montant total ttc" :value="montantHTt">
                            </div>
                        </div>
              </td>
              
            </tr>
          
                    </table>  

                   

                
            </div>
            <div class="modal-footer">
                <a  @click.prevent="ajouterOffreF()"
                        class="btn btn-primary"
                        href="#"
                >Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
        </div>



<div id="modificationModal" class="modal hide grdirModalActeEffet">
           <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modification  offre</h3>
            </div>
            <div class="modal-body">

                <table class="table table-bordered table-striped">
                
                             <tr>
                    <td>
                        <div class="control-group">
                            <label>Offre</label>
                            <div class="controls">
                                <select v-model="formLot.appel_offre_id" class="span" disabled>
                                    <option v-for="varText in listeAppelOffre(marcheid)" :key="varText.id"
                                            :value="varText.id">{{varText.ref_appel}}</option>
                                </select>
                            </div>
                        </div>
                    </td>
                    <!--  <td>
                        <div class="control-group">
                          <label>Liste lot</label>
                                        <div class="controls">
                                            <select v-model="formOffreFinanciere.numero_lot" class="span">
                                                <option v-for="varText in listeLots(marcheid)" :key="varText.numero_lot"
                                                        :value="varText.id">{{varText.numero_lot}}</option>
                                            </select>
                                        </div>
                        </div>
                      </td>-->
                    <!-- <td colspan="2">
                       <div class="control-group">
                           <label class="control-label">Designation :</label>
                                   <div class="controls">
                                       <input type="text"  readonly   class="span6" placeholder="Designation" :value="libelleLot">
                                   </div>
                       </div>
                     </td>-->
                    <td>

                        <div class="control-group">
                            <label class="control-label">Quantite :</label>
                            <div class="controls">
                                <input type="number" class="span" placeholder="quantite" v-model="modification_offre_finnancier_recupere.quantite">
                            </div>
                        </div>

                    </td>
                    <td>

                        <div class="control-group">
                            <label class="control-label">Prix unitaire :</label>
                            <div class="controls">
                                <input type="number" class="span" placeholder="prix unitaire" v-model="modification_offre_finnancier_recupere.prix_unitaire">
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>

                    <td>
                        <div class="control-group">
                            <label class="control-label">Taux</label>
                            <div class="controls">
                                <input type="text" readonly  class="span" :value="affcherTauxEnCours">
                                <input
                                        type="hidden"
                                        :value="tauxArrondit"

                                        class="span3"

                                />
                            </div>
                        </div>
                    </td>

                    <td>
                        <div class="control-group">
                            <label class="control-label">Tva</label>
                            <div class="controls">
                                <input type="number" readonly :value="montantTvaEdite" class="span" />
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="control-group">
                            <label class="control-label">Montant total ht :</label>
                            <div class="controls">
                                <input type="text"   readonly  class="span" placeholder="Montant total HT" :value="montantHTEdite">
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>

                    <td>
                        <div class="control-group">
                            <label class="control-label">Montant totat ttc :</label>
                            <div class="controls">
                                <input type="text"  readonly  class="span" placeholder="Montant total ttc" :value="montantHTtEdite">
                            </div>
                        </div>
                    </td>

                </tr>

                </table>


              


            </div>
             <div class="modal-footer">
                <a
                        @click.prevent="modificationOffreFin"
                        class="btn btn-primary"
                        href="#"

                >Modifier</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
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
        
          formLettre: {
                    appel_offre_id:"",
                    objet_lettre:"",
                    date_lettre:"",
                    ref_lettre:"",
                    destination:"",
                    date_cojo:""
                },
        edite_Lettre_invitation:{
             	ref_appel:"",
                    type_appel:"",
                    financement:"",
                    nom_bailleurs:"",
                    date_emission:"",
                    date_limite:"",
                    objet_lettre:"",
                    imputation:"",
                    marche_id:"",
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
      
lettreInvitationAMarche: function () {
                return id => {
                    if (id != "") {
                        //console.log("Marche lettre inviation marche")
                        return this.getterLettreInvitation.filter(idmarche => idmarche.appel_offre.marche_id == id)
                    }
                }
            },
listeAppelOffre() {
      return id => {
        if (id != null && id != "") {
          return this.appelOffres.filter(
            element => element.marche_id == id
          );
        }
      };
    },

affichierReferenceAppelOffre() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.appelOffres.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.ref_appel;
      }
      return 0
        }
      };
    },
affichierAppelOffreid() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.appelOffres.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.id;
      }
      return 0
        }
      };
    },



affichierObjetMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.objet;
      }
      return 0
        }
      };
    },






  procedurePassation_id() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.procedure_passation_id;
      }
      return 0
        }
      };
    },

typeProcedure_id() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.procedurePassations.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.type_procedure_id;
      }
      return 0
        }
      };
    },

typeProcedureLibelle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.typeTypeProcedures.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },

      
      },

      methods:{ 

          ...mapActions("bienService", [
               "ajouterLettreInvitation",
                "modifierLettreInvitation","supprimerLettreInvitation"
            
            ]),



        afficheBouttonTechFinInvitation(index){
                this.$('#modificationModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.edite_Lettre_invitation = this.lettreInvitationAMarche(this.macheid)[index];
            },







           
  ajouterOffreF(){
                 var nouvelObjet = {
      ...this.formOffreFinanciere,
      montant_total_ht :this.montantHT,
       montant_total_ttc :this.montantHTt,
        	taux :this.affcherTauxEnCours,
         	tva :this.montantTva,
          designation:"",
          dossier_candidat_id : this.edite_offre_financiere.id
       };
                // console.log(this.edite_offre_financiere.id) editeOffreT
                // this.formOffreFinanciere.dossier_candidat_id=this.edite_offre_financiere.id
                this.ajouterOffreFinancier(nouvelObjet)
                this.formOffreFinanciere={
                        numero_lot:"",
                        designation:"",
                        unite:"",
                        quantite:"",
                        prix_unitaire:"",
                        montant_total_ht:"",
                        montant_total_ttc:"",
                }
            },
            modificationOffreFin(){
                this.modification_offre_finnancier_recupere.montant_total_ht=this.montantHTEdite
                this.modification_offre_finnancier_recupere.montant_total_ttc=this.montantHTtEdite
                this.modification_offre_finnancier_recupere.taux=this.affcherTauxEnCourse
                this.modification_offre_finnancier_recupere.tva=this.affcherTauxEnCours
                this.modifierOffreFinancier(this.modification_offre_finnancier_recupere)
                this.$('#modificationOffre').modal('hide');
            },








formatageSomme:formatageSomme,

 formaterDate(date) {
              return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },
             OnchangeFichier(e) {
                const files = e.target.files;
                this.selectedFile = event.target.files[0];
                console.log(this.selectedFile)
                Array.from(files).forEach(file => this.addFichierPDF(file));
            },
            addFichierPDF(file) {
                let reader = new FileReader();
                let vm = this;
                reader.onload = e => {
                    vm.imagePDF = "pdf.png";
                    vm.namePDF = file.name;
                    vm.fichierPDF = e.target.result;
                };
                reader.readAsDataURL(file);
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