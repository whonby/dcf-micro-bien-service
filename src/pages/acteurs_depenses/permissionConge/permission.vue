
<template>
   
<div>
    <div class="widget-box span6">
                                            <div class="widget-content nopadding">
                                               
                                                <table class="table table-bordered">
                                                    <thead>
                                                    <tr>
                                                        <th>Type congés</th>
                                                       
                                                        <th>Date debut</th>
                                                        <th>Date fin</th>
                                                         <th>Dure</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr v-for="(item,index) in afficheListePermission(acteurid)" :key="item.id" >
                                                        <td @dblclick="afficherModalModifierTypeTexte(index)">{{afficheTypeConge(item.typepermission) || "Pas de conge" }}</td>
                                                        
                                                        <td @dblclick="afficherModalModifierTypeTexte(index)">{{formaterDate(item.datedebut) }}</td>
                                                        <td @dblclick="afficherModalModifierTypeTexte(index)">{{formaterDate(item.datefin)  }}</td>
                                                        <td @dblclick="afficherModalModifierTypeTexte(index)">{{item.dure}}  Jour(s)</td>
                                                    <td>
                      <button class="btn btn-danger" @click="supprimerPermissionConge(item.id)">
                        <span>
                          <i class="icon icon-trash"></i>Supprimer
                        </span>
                      </button>
                    </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="span6">
                                            <div class="widget-box">
                                                <div class="widget-title"> <span class="icon"> <i class="icon-align-justify"></i> </span>
                                                    <h5>Ajouter Permission de congé</h5>
                                                </div>
                                                <div class="widget-content nopadding">
                                                    <form action="#" method="post"  enctype="multipart/form-data" class="form-horizontal">
                                                        <!-- <div class="control-group">
                                                            <label class="control-label">Code conge :</label>
                                                            <div class="controls">
                                                                <input type="text" v-model="conges.code" class="span11" placeholder="Entre le code congé">
                                                            </div>
                                                        </div> -->
                                                        <div class="control-group">
                                                            <label class="control-label">Type de congés</label>
                                                            <div class="controls">
                                                                <select v-model="permissionObjet.typepermission" class="span11">
                                                                    <option></option>
                                                                    <option v-for="varText in congeAnnuel" :key="varText.id"
                                          :value="varText.id">{{varText.libelle}}</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                         <div class="control-group">
                                                            <label class="control-label">Durée Permission</label>
                                                            <div class="controls">
                                                                <input type="text" class="span11" placeholder="Enter date" :value="afficheDureTypeConge(permissionObjet.typepermission)" readonly>
                                                            </div>
                                                        </div>
                                                        <div class="control-group">
                                                            <label class="control-label">Date début</label>
                                                            <div class="controls">
                                                                <input type="date" class="span11" placeholder="Enter date" v-model="permissionObjet.datedebut">
                                                            </div>
                                                        </div>

                                                        <div class="control-group">
                                                            <label class="control-label">Date fin</label>
                                                            <div class="controls">
                                                                <input type="date" class="span11" placeholder="Enter date" v-model="permissionObjet.datefin">
                                                            </div>
                                                        </div>
                                                     <div class="control-group">
                                                            <label class="control-label">Durée saisie</label>
                                                            <div class="controls">
                                                                <input type="text" class="span11" placeholder="Enter date" :value="DurePermission" readonly>
                                                            </div>
                                                        </div>
                                                        <div class="form-actions" >
 
                                                           
                                                            <a @click.prevent="ajouterTitreLocal" class="btn btn-success">Enregistre</a>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>


<div id="modificationModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier Permission de congé</h3>
      </div>
      <div class="modal-body">
         <form  class="form-horizontal">
                                                        <!-- <div class="control-group">
                                                            <label class="control-label">Code conge :</label>
                                                            <div class="controls">
                                                                <input type="text" v-model="conges.code" class="span11" placeholder="Entre le code congé">
                                                            </div>
                                                        </div> -->
                                                        <div class="control-group">
                                                            <label class="control-label">Type de congés</label>
                                                            <div class="controls">
                                                                <select v-model="editpermissionObjet.typepermission" class="span11">
                                                                    <option></option>
                                                                    <option v-for="varText in congeAnnuel" :key="varText.id"
                                          :value="varText.id">{{varText.libelle}}</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                         <div class="control-group">
                                                            <label class="control-label">Durée Permission</label>
                                                            <div class="controls">
                                                                <input type="text" class="span11" placeholder="Enter date" :value="afficheDureTypeConge(editpermissionObjet.typepermission)" readonly>
                                                            </div>
                                                        </div>
                                                        <div class="control-group">
                                                            <label class="control-label">Date debut</label>
                                                            <div class="controls">
                                                                <input type="date" class="span11" placeholder="Enter date" v-model="editpermissionObjet.datedebut">
                                                            </div>
                                                        </div>

                                                        <div class="control-group">
                                                            <label class="control-label">Date fin</label>
                                                            <div class="controls">
                                                                <input type="date" class="span11" placeholder="Enter date" v-model="editpermissionObjet.datefin">
                                                            </div>
                                                        </div>
                                                     <div class="control-group">
                                                            <label class="control-label">Durée saisie</label>
                                                            <div class="controls">
                                                                <input type="text" class="span11" placeholder="Enter date" :value="EditDurePermission" readonly>
                                                            </div>
                                                        </div>
                                                      
                                                    </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierTypeTexteLocal(editpermissionObjet)"
          class="btn btn-primary"
          href="#"
          
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
</div>
</template>

<script>
import moment from "moment";
    import {mapGetters, mapActions} from 'vuex'
      
  
    export default {

        data() {
            return {
               
                
               
               permissionObjet:{
                    	typepermission: "",
                    datedebut: "",
                    datefin: "",
                    dure: "",
                    acteurdepense_id: "",
                },

              editpermissionObjet:{
                    	typepermission: "",
                    datedebut: "",
                    datefin: "",
                    dure: "",
                    acteurdepense_id: "",
                },

            };
        },
 props:["acteurid"],
        created() {
          //  this.getTypeContrat()
            //  console.log(this.fonctions)
            // console.log(this.getFonction)
        },
        computed: {
// methode pour maper notre guetter
           ...mapGetters('parametreGenerauxFonctionnelle', ['Typeconges']),

             ...mapGetters('personnelUA', ['getterpermissionConge']),

             congeAnnuel(){
   
            return this.Typeconges.filter(element =>element.statutconge != 3)
    
},
afficheListePermission() {
      return id => {
        if (id != null && id != "") {
          return this.getterpermissionConge.filter(
            element => element.acteurdepense_id == id
          );
        }
      };
    },
 afficheTypeConge() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.Typeconges.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
afficheDureTypeConge() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.Typeconges.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.dure;
      }
      return 0
        }
      };
    },
DurePermission(){
                let vM=this;
    const permiCong = vM.permissionObjet
    if(permiCong.datedebut == permiCong.datefin &&  permiCong.datefin !=="" && permiCong.datedebut !=="") return 1
     if(permiCong.datefin =="" && permiCong.datedebut =="") return null

       var dateF = new Date(permiCong.datefin).getTime()
        var dateO = new Date(permiCong.datedebut).getTime()
           var resultat = dateF - dateO

             var diffJour =  resultat / (1000 * 3600 * 24)

               if(isNaN(diffJour)) return null

               if(parseFloat(diffJour) < 0 ) return "durée invalide"
    vM.permissionObjet.dure=diffJour
                  return  diffJour;
   
},


EditDurePermission(){
                let vM=this;
    const editpermiCong = vM.editpermissionObjet
    if(editpermiCong.datedebut == editpermiCong.datefin &&  editpermiCong.datefin !=="" && editpermiCong.datedebut !=="") return 1
     if(editpermiCong.datefin =="" && editpermiCong.datedebut =="") return null

       var dateF = new Date(editpermiCong.datefin).getTime()
        var dateO = new Date(editpermiCong.datedebut).getTime()
           var resultat = dateF - dateO

             var diffJour =  resultat / (1000 * 3600 * 24)

               if(isNaN(diffJour)) return null

               if(parseFloat(diffJour) < 0 ) return "durée invalide"
    vM.editpermissionObjet.dure=diffJour
                  return  diffJour;
   
},
        },
        methods: {
            // methode pour notre action
            ...mapActions('personnelUA', ['ajouterPermissionConge',"modifierPermissionConge","supprimerPermissionConge"]),
           
             ajouterTitreLocal () {
                 if(this.afficheDureTypeConge(this.permissionObjet.typepermission) < this.DurePermission){
                     alert("Vérifier la duree de saisie svp")
                 }
                 else{
 var nouveauObjet={
                     ...this.permissionObjet,
                     acteurdepense_id:this.acteurid,
                     dure:this.DurePermission
                 };
                this.ajouterPermissionConge(nouveauObjet)

                this.permissionObjet={

                    typepermission: "",
                    datedebut: "",
                    datefin: "",
                    dure: "",
                    acteurdepense_id: "",
                }
                 }
                
            },
             afficherModalModifierTypeTexte(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

     
      this.editpermissionObjet = this.afficheListePermission(this.acteurid)[index];
    },
    // fonction pour vider l'input modification
    modifierTypeTexteLocal() {
         if(this.afficheDureTypeConge(this.editpermissionObjet.typepermission) < this.EditDurePermission){
                     alert("Vérifier la duree de saisie svp")
                 }
                 else{
      this.modifierPermissionConge(this.editpermissionObjet);
this.$("#modificationModal").modal('hide');
       this.editpermissionObjet={

                    typepermission: "",
                    datedebut: "",
                    datefin: "",
                    dure: "",
                    acteurdepense_id: "",
                }
                 }
       
    },
                  formaterDate(date) {
            return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
        },
        }
    };
</script>

