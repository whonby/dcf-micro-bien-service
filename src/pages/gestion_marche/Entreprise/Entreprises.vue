
<template>
    <div>
 <div id="exampleModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>SANCTION</h3>
      </div>
      <div class="modal-body">
           <table class="table table-bordered table-striped">
         <tr>
             <td>
                  <div class="control-group">
            <label class="control-label">Entreprise</label>
            <div class="controls">
              <input type="text" :value="entrepriseSetect.raison_sociale" class="span5" readonly />
            </div>
          </div>
             </td>
         </tr>
          <tr>
              <td>
                  <div class="control-group">
            <label class="control-label">Date debut sanction</label>
            <div class="controls">
              <input
                type="date"
               :value="getDateDebuSanction(entrepriseSetect.id)"
                class="span5"
                readonly
              />
            </div>
          </div>
              </td>
          </tr>
          <tr>
              <td>
                  <div class="control-group">
            <label class="control-label">Date fin sanction{{entrepriseSetect.id}}</label>
            <div class="controls">
              <input
                type="date"
               :value="getDateFinSanction(entrepriseSetect.id)"
                class="span5"
                readonly
              />
            </div>
          </div>
              </td>
          </tr>
          <tr>
              <td>
                  <div class="control-group">
            <label class="control-label">Cause</label>
            <div class="controls">
                <textarea readonly :value="getDateMotifSanction(entrepriseSetect.id)" cols="2" rows="2" class="span5"></textarea>
              
            </div>
          </div>
              </td>
          </tr>
           </table>
      </div>
      <div class="modal-footer">
       
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
        <div class="container-fluid">
            <hr>














            <div class="widget-box">
                <div class="widget-title">
                    <ul class="nav nav-tabs">
                        <li class="active"><a data-toggle="tab" href="#tab1">LISTE DE TOUTE LES ENTREPRISES  <span class="badge badge-inverse">{{nbreEntreprise}}</span></a></li>
                        <li><a data-toggle="tab" href="#tab2">ENTREPRISE NON SANCTIONNEE  <span class="badge badge-inverse">{{nbreEntrepriseNonSanctionner}}</span></a></li>
                        <li><a data-toggle="tab" href="#tab3">ENTREPRISE SANCTIONNEE  <span class="badge badge-inverse">{{nbreEntrepriseSanctionner}}</span></a></li>
                    </ul>
                </div>
                <div class="widget-content tab-content">
                    <div id="tab1" class="tab-pane active">
                        <div class="row-fluid" style="margin: 0px !important;">
                            <div class="span12">
                                 <div>

                                        <download-excel
                                            class="btn btn-success pull-right"
                                            style="cursor:pointer;"
                                              :fields = "json_fields"
                                              title="Liste des entreprises "
                                              name ="Liste des entreprises"
                                              worksheet = "entreprise"
                                            :data="titreFiltres">
                    <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel> 
                       <div  align="right" style="cursor:pointer;">
           <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
               </div> 
                                     </div>
                                <div class="widget-box">
                                    <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                                        <h5>Toute les entreprises</h5>
                                        <div align="right">
                                            Search: <input type="text" v-model="search">
                                        </div>

                                    </div>
                                      <div class="span4">
                                        <br>
                                    Afficher
                                    <select name="pets" id="pet-select" v-model="size" class="span3">
                                        <option value="10">10</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                    </select>
                                    Entrer

                                   
                                </div>
<div  align="right">
     <span style="color:#FF0000;text-align:center;font-size:14px;font-weight: bold;">ES:Entreprise Sanctionné</span> 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span style="color:#006400;text-align:center;font-size:14px;font-weight: bold;">ENS:Entreprise Non Sanctionné</span> 
&nbsp;&nbsp;&nbsp;
</div>
                                    <div class="widget-content nopadding">
                                        <table class="table table-bordered table-striped">
                                            <thead>
                                            <tr>
                                                <th>IDU</th>
                                                <th>Raison social </th>
                                                <th>Compte contribuable</th>
                                                <th>Registe commerce </th>
                                                <th>Secteur activite</th>
                                                <th>Pays </th>
                                                <th>Ville</th>
                                                <th>Email </th>
                                                <th>Telephone</th>
                                                <th>Statut</th>
                                                <th>Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr class="odd gradeX" v-for="item in partition (titreFiltres,size)[page]" :key="item.id">
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.numero_idu || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.raison_sociale || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.numero_cc || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.numero_rc || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{getSecteurActivite(item.secteur_activite_id) || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{getPays(item.pays )|| 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{getVille(item.ville) || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.email || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.telephone || 'Non renseigné'}}</td>
                                                <td v-if="item.active == 1" style="color:#006400;text-align:center;font-size:14px;font-weight: bold;">ENS</td>
                                                 <td v-else  style="color:#FF0000;text-align:center;font-size:14px;font-weight: bold;">ES</td>  
                                                <!-- <td @dblclick="afficherModalModifierTitre(item.id)">{{item.banque || 'Non renseigné'}}</td> -->
                                                <td>
                                                    <div class="btn-group">

                                   <router-link :to="{ name: 'DetaillEntreprise', params: { id: item.id }}" 
                                    class="btn btn-default " title="Detail entreprise ">
                                   <span class=""><i class="icon-folder-open"></i></span>
                                         </router-link> 
                                                        <a href="#myModal2" data-toggle="modal" class="btn btn-info" @click.prevent="showEntreprise(item.id)"><i class="icon-lock"></i></a>
                                                        <button @click.prevent="supprimerEntreprise(item.id)"  class="btn btn-danger ">
                                                            <span class=""><i class="icon-trash"></i></span></button>

                                                    </div>

                                                </td>
                                            </tr>
                                            <tr v-if="titreFiltres.length==0" align="right">
                                                <h6>Pas de donnée disponible</h6>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="pagination alternate">
                                <ul>
                                    <li :class="{ disabled : page == 0 }"><a @click.prevent="precedent()" href="#">Précedent</a></li>
                                    <li  v-for="(titre, index) in partition(titreFiltres,size).length" :key="index" :class="{ active : active_el == index }">
                                    <a @click.prevent="getDataPaginate(index)" href="#">{{index + 1}}</a></li>
                                    <li :class="{ disabled : page == partition(titreFiltres,size).length -1 }"><a @click.prevent="suivant()" href="#">Suivant</a></li>

                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div id="tab2" class="tab-pane">

                        <div class="row-fluid" style="margin: 0px !important;">
                            <div class="span12">
                                 <div>

                                        <download-excel
                                            class="btn btn-success pull-right"
                                            style="cursor:pointer;"
                                              :fields = "json_fields"
                                              title="Liste des entreprises non sanctionner "
                                              name ="Liste des entreprises non sanctionner"
                                              worksheet = "entreprise non sanctionner"
                                            :data="S">
                    <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel> 
                       <div  align="right" style="cursor:pointer;">
           <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
               </div> 
                                     </div>
                                <div class="widget-box">
                                    <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                                        <h5>Toute les entreprises non sanctionner</h5>
                                        <div align="right">
                                            Search: <input type="text" v-model="search1">
                                        </div>

                                    </div>
                                     <div class="span4">
                                        <br>
                                    Afficher
                                    <select name="pets" id="pet-select" v-model="size" class="span3">
                                        <option value="10">10</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                    </select>
                                    Entrer
                                </div>
                                    <div class="widget-content nopadding"><table class="table table-bordered table-striped">
                                        <thead>
                                        <tr>
                                            <th>IDU</th>
                                            <th>Raison social </th>
                                            <th>Compte contribuable</th>
                                            <th>Registe commerce </th>
                                            <th>Secteur activite</th>
                                            <th>Pays </th>
                                            <th>Ville</th>
                                            <th>Email </th>
                                            <th>Telephone</th>
                                            <th>Statut</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr class="odd gradeX" v-for="item in partition (S,size)[page]" :key="item.id">
                                             <td @dblclick="afficherModalModifierTitre(item.id)">{{item.numero_idu || 'Non renseigné'}}</td>
                                            <td @dblclick="afficherModalModifierTitre(item.id)">{{item.raison_sociale || 'Non renseigné'}}</td>
                                            <td @dblclick="afficherModalModifierTitre(item.id)">{{item.numero_cc || 'Non renseigné'}}</td>
                                            <td @dblclick="afficherModalModifierTitre(item.id)">{{item.numero_rc || 'Non renseigné'}}</td>
                                            <td @dblclick="afficherModalModifierTitre(item.id)">{{getSecteurActivite(item.secteur_activite_id) || 'Non renseigné'}}</td>
                                             <td @dblclick="afficherModalModifierTitre(item.id)">{{getPays(item.pays )|| 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{getVille(item.ville) || 'Non renseigné'}}</td>
                                            <td @dblclick="afficherModalModifierTitre(item.id)">{{item.email || 'Non renseigné'}}</td>
                                            <td @dblclick="afficherModalModifierTitre(item.id)">{{item.telephone || 'Non renseigné'}}</td>
                                            <!-- <td @dblclick="afficherModalModifierTitre(item.id)">{{item.banque || 'Non renseigné'}}</td> -->
                                           <td v-if="item.active == 1" style="color:#006400;text-align:center;font-size:14px;font-weight: bold;">ENS</td>
                                                 
                                            <td>
                                                <div class="btn-group">
                                                    <a href="#myModal2" data-toggle="modal" class="btn btn-info" @click.prevent="showEntreprise(item.id)"><i class="icon-lock"></i></a>
                                                    <button @click.prevent="supprimerEntreprise(item.id)"  class="btn btn-danger ">
                                                        <span class=""><i class="icon-trash"></i></span></button>
                                                </div>

                                            </td>
                                        </tr>
                                        <tr v-if="titreFiltres.length==0" align="right">
                                            <h6>Pas de donnée disponible</h6>
                                        </tr>
                                        </tbody>
                                    </table></div>
                                </div>
                                 <div class="pagination alternate">
                                <ul>
                                    <li :class="{ disabled : page == 0 }"><a @click.prevent="precedent()" href="#">Précedent</a></li>
                                    <li  v-for="(titre, index) in partition(S,size).length" :key="index" :class="{ active : active_el == index }">
                                    <a @click.prevent="getDataPaginate(index)" href="#">{{index + 1}}</a></li>
                                    <li :class="{ disabled : page == partition(S,size).length -1 }"><a @click.prevent="suivant()" href="#">Suivant</a></li>

                                </ul>
                            </div>
                            </div>
                        </div>


                    </div>
                    <div id="tab3" class="tab-pane">
                        <div class="row-fluid" style="margin: 0px !important;">
                            <div class="span12">
                                <div>

                                        <download-excel
                                            class="btn btn-success pull-right"
                                            style="cursor:pointer;"
                                              :fields = "json_fields"
                                              title="Liste des entreprises  sanctionner "
                                              name ="Liste des entreprises sanctionner"
                                              worksheet = "entreprise sanctionner"
                                            :data="sanctionner">
                    <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel> 
                       <div  align="right" style="cursor:pointer;">
           <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
               </div> 
                                     </div>
                                <div class="widget-box">
                                    <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                                        <h5>Toute les entreprises sanctionner</h5>
                                        <div align="right">
                                            Search: <input type="text" v-model="search2">
                                        </div>

                                    </div>
                                     <div class="span4">
                                        <br>
                                    Afficher
                                    <select name="pets" id="pet-select" v-model="size" class="span3">
                                        <option value="10">10</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                    </select>
                                    Entrer
                                </div>
                                    <div class="widget-content nopadding">
                                        <table class="table table-bordered table-striped">
                                            <thead>
                                            <tr>
                                                <th>IDU</th>
                                                <th>Raison sociale </th>
                                                <th>Compte contribuable</th>
                                                <th>Registe commerce </th>
                                                <th>Secteur activite</th>
                                                <th>Pays </th>
                                                <th>Ville</th>
                                                <th>Email </th>
                                                <th>Telephone</th>
                                               <th>Statut</th>
                                                <th colspan="3">Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr class="odd gradeX" v-for="item in  partition(sanctionner,size)[page]" :key="item.id">
                                                 <td @dblclick="afficherModalModifierTitre(item.id)">{{item.numero_idu || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.raison_sociale || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.numero_cc || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.numero_rc || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{getSecteurActivite(item.secteur_activite_id) || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{getPays(item.pays )|| 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{getVille(item.ville) || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.email || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.telephone || 'Non renseigné'}}</td>
                                                <!-- <td @dblclick="afficherModalModifierTitre(item.id)">{{item.banque || 'Non renseigné'}}</td> -->
                                                <td v-if="item.active == 0" style="color:#FF0000;text-align:center;font-size:14px;font-weight: bold;">ES</td>
        <td>
  <a href="#exampleModal" data-toggle="modal" class="btn btn-info" @click.prevent="showEntreprise(item.id)"><i class="icon-eye-open" title="Voir la Cause"></i></a>
</td>
<td> <button @click.prevent="modifierModalActeEffetFinancierLocal2(item.id)"  class="btn btn-info"  title="Retirer la sanction">
                <span class=""><i class="icon-unlock" ></i></span></button> </td>
                                                <td>
                                                    <div class="btn-group">
                                                        <button @click.prevent="supprimerEntreprise(item.id)"  class="btn btn-danger ">
                                                            <span class=""><i class="icon-trash"></i></span></button>

                                                    </div>

                                                </td>
                                            </tr>
                                            <tr v-if="titreFiltres.length==0" align="right">
                                                <h6>Pas de donnée disponible</h6>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div class="pagination alternate">
                                <ul>
                                    <li :class="{ disabled : page == 0 }"><a @click.prevent="precedent()" href="#">Précedent</a></li>
                                    <li  v-for="(titre, index) in partition(sanctionner,size).length" :key="index" :class="{ active : active_el == index }">
                                    <a @click.prevent="getDataPaginate(index)" href="#">{{index + 1}}</a></li>
                                    <li :class="{ disabled : page == partition(sanctionner,size).length -1 }"><a @click.prevent="suivant()" href="#">Suivant</a></li>

                                </ul>
                            </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>

       <fab :actions="fabActions"
             main-icon="apps"
             @cache="afficherModalAjouterTitre"
             bg-color="green"
        ></fab>

        <!----- ajouter modal   ---->
        <div id="myModal2" class="modal hide" aria-hidden="true" style="display: none;">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Formulaire de sanction pour {{entrepriseSetect.raison_sociale}}</h3>
            </div>
            <form @submit.prevent="addSanctionner" enctype="multipart/form-data" class="form-horizontal">
            <div class="modal-body">

                    <div class="control-group">
                        <label class="control-label">Date debut sanction :</label>
                        <div class="controls">
                            <input type="date" v-model="sanction.debut_sanction"  placeholder="Date debut sanction">
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Date fin sanction :</label>
                        <div class="controls">
                            <input type="date"  placeholder="Date fin sanction" v-model="sanction.fin_sanction">
                        </div>
                    </div>
                     
                      <div class="control-group">
                        <label class="control-label">Motif de sanction:</label>
                        <div class="controls">
                        <textarea   placeholder="Saisir le motif" v-model="sanction.motif" class="span2.5"></textarea>
                        </div>
                    </div>


                    <div class="control-group">
                        <label class="control-label">Degré sanction</label>
                        <div class="controls">
                            <input  type="file" @change="OnchangeFichier" >
                            <code v-if="info_pdf">Le fichier doit etre un pdf</code>
                        </div>
                    </div>



            </div>
            <div class="modal-footer">
                <button type="submit" class="btn btn-success" >Valider la sanction</button>
                <a data-dismiss="modal" class="btn btn-inverse" href="#">Cancel</a> </div>
            </form>
        </div>

    </div>

</template>

<script>

    import {mapGetters, mapActions} from 'vuex'
    import {partition} from '../../../../src/Repositories/Repository'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
    export default {

        data() {
            return {
                        page:0,
                       size:10,
                        active_el:0,

                json_fields:{
                'N° IDU':'numero_idu',
                 'N° CC ':'numero_cc',
                  'N° RC':'numero_rc',
                  'RAISON SOCIALE':'raison_sociale',
                  'SIGLE':'sigle',
                  'FORME JURIDIQUE':'forme_juridique',
                  'CENTRE IMPOT':'centre_impot',
                  'CAPITAL SOCIAL':'capitale_sociale',
                  'IMMATRICULATION CNPS':'immatriculation_cnps',
                  'E-MAIL':'email'
                },
                fabActions: [
                    {
                        name: 'cache',
                        icon: 'add'
                    },
                ],
                search:"",
                search1:"",
                search2:"",
                liste:[],
                selectedFile:"",
                selectedImage:"",
                image: "",
                imagePDF: "",
                namePDF: "",
                fichierPDF: "",
                info_pdf:"",
                sanction: {
                    entreprise_id: "",
                    debut_sanction: "",
                    fin_sanction:"",
                    motif:""
                },
                entrepriseSetect:'',
entrepre:""
            };
        },

        created() {
            // this.getFonctions()
            //  console.log(this.fonctions)
            // console.log(this.getFonction)
this.getEntreprise()
        },
        computed: {
// methode pour maper notre guetter
            ...mapGetters('gestionMarche', ['entreprises',"secteur_activites","sanctions"]),
            ...mapGetters("bienService", ['villes','pays']),
            titreFiltres() {

                const searchTerm = this.search.toLowerCase();
                return this.entreprises.filter((item) => {

                      return item.raison_sociale.toLowerCase().includes(searchTerm)
                            || item.numero_rc.toLowerCase().includes(searchTerm)
                            || item.numero_cc.toLowerCase().includes(searchTerm)
                            
                            || item.telephone.toLowerCase().includes(searchTerm)
                            || item.email.toLowerCase().includes(searchTerm)
                            || item.banque.toLowerCase().includes(searchTerm)

                    }
                )

            },
            S() {
                const searchTerm = this.search1.toLowerCase();
                let ObjetEntreprise=this.entreprises.filter((idm)=>idm.active===1)
                return ObjetEntreprise.filter((item) => {

                        return item.raison_sociale.toLowerCase().includes(searchTerm)
                            || item.numero_rc.toLowerCase().includes(searchTerm)
                            || item.numero_cc.toLowerCase().includes(searchTerm)
                           
                            || item.telephone.toLowerCase().includes(searchTerm)
                            || item.email.toLowerCase().includes(searchTerm)
                            || item.banque.toLowerCase().includes(searchTerm)


                    }
                )

            },
            sanctionner() {
                const searchTerm = this.search2.toLowerCase();
                let ObjetEntreprise=this.entreprises.filter((idm)=>idm.active===0)
                return ObjetEntreprise.filter((item) => {
                        return item.raison_sociale.toLowerCase().includes(searchTerm)
                            || item.numero_rc.toLowerCase().includes(searchTerm)
                            || item.numero_cc.toLowerCase().includes(searchTerm)
                           
                            || item.telephone.toLowerCase().includes(searchTerm)
                            || item.email.toLowerCase().includes(searchTerm)
                            || item.banque.toLowerCase().includes(searchTerm)


                    }
                )

            },
nbreEntrepriseSanctionner(){
return this.sanctionner.length;
},
nbreEntrepriseNonSanctionner(){
return this.S.length;
},
nbreEntreprise(){
return this.entreprises.length;
},

 getDateDebuSanction() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sanctions.find(qtreel => qtreel.entreprise_id == id);

      if (qtereel) {
        return qtereel.debut_sanction;
      }
      return 'Non renseignÃ©'
        }
      };
    },
getDateFinSanction() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sanctions.find(qtreel => qtreel.entreprise_id == id);

      if (qtereel) {
        return qtereel.fin_sanction;
      }
      return 'Non renseignÃ©'
        }
      };
    },
    getDateMotifSanction() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sanctions.find(qtreel => qtreel.entreprise_id == id);

      if (qtereel) {
        return qtereel.motif;
      }
      return 'Non renseignÃ©'
        }
      };
    },




             getSecteurActivite() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.secteur_activites.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
     getPays() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.pays.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
     getVille() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.villes.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
        },
        methods: {
            // methode pour notre action
            ...mapActions('gestionMarche', ['getEntreprise',"ajouterEntreprise","supprimerEntreprise","modifierEntreprise","ajouterSanction"]),
           
           
           
                
           // pagination
   partition:partition,
       getDataPaginate(index){
          this.active_el = index;
          this.page=index
      },
      precedent(){
          this.active_el--
          this.page --
      },
      suivant(){
          this.active_el++
          this.page ++
      },
          
          // exportation en pdf
         genererEnPdf(){
  var doc = new jsPDF()
  // doc.autoTable({ html: this.natures_sections })
   var data = this.entreprises;
    doc.text(98,10,"Liste des entreprises")
  doc.autoTable(this.getColumns(),data)
doc.save('entreprise.pdf')
return 0
},
getColumns() {
    return [
        
        {title: "N°.IDU", dataKey: "numero_idu"},
         {title: "N°.CC", dataKey: "numero_cc"},
          {title: "N°.RC", dataKey: "numero_rc"},
           {title: "R.SOCIALE", dataKey: "raison_sociale"},
            {title: "SIGLE", dataKey: "sigle"},
        {title: "F.JURIDIQUE", dataKey: "forme_juridique"}, 
          {title: "C.IMPOT", dataKey: "centre_impot"},
        {title: "C.SOCIAL", dataKey: "centre_impot"}, 
          {title: "SIGLE", dataKey: "sigle"},
        {title: "I.CNPS", dataKey: "immatriculation_cnps"}, 
         {title: "E-MAIL", dataKey: "email"},  
    ];  
   
},
       
       



       
           
           afficherModalAjouterTitre(){
                this.$router.push({ name: 'AjouterEntreprise' })
            },
            // fonction pour vider l'input
            ajouterTitreLocal () {
                this.ajouterEntreprise(this.formData)

            },
// afficher modal
            afficherModalModifierTitre(index){

                this.$router.push({ name: 'EditeEntreprise', params: { id: index } })
            },

            
            modifier(){
                this.modifierEntreprise(this.editTitre)
                //this.getFonctions()
            },
            showEntreprise(id){
                this.entrepriseSetect=this.entreprises.find(entre=>entre.id===id);
            },
            OnchangeFichier(e) {
                const files = e.target.files;
                this.selectedFile = event.target.files[0];
                Array.from(files).forEach(file => this.addFichierPDF(file));
            },
            addFichierPDF(file) {
                if (!file.type.match("application/pdf")) {
                    this.info_pdf=true;
                    console.log(`${file.name} le fichier doit etre un PDF`);
                    return;
                }
                this.info_pdf=false;
                let reader = new FileReader();
                let vm = this;
                reader.onload = e => {
                    vm.imagePDF = "pdf.png";
                    vm.namePDF = file.name;
                    vm.fichierPDF = e.target.result;
                };
                reader.readAsDataURL(file);
            },

            addSanctionner(){
                const formData = new FormData();
                formData.append('file', this.selectedFile, this.selectedFile.name);
                formData.append('entreprise_id', this.entrepriseSetect.id);
                formData.append('debut_sanction', this.sanction.debut_sanction);
                formData.append('fin_sanction', this.sanction.fin_sanction);
                formData.append('motif', this.sanction.motif);

                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
                this.ajouterSanction(formData,config)
                
                this.sanction= {
                    entreprise_id: "",
                        debut_sanction: "",
                        fin_sanction:"",
                        motif:""
                }
                this.getEntreprise()

            },
            modifierModalActeEffetFinancierLocal2(id){
   
    if ( confirm( "voulez-vous retirer la sanction ?") ) {
// this.entrepriseSetect=this.entreprises.find(entre=>entre.id===id);
this.entrepriseSetect=this.sanctionner.find(entre=>entre.id===id);
      let decisionEntreprise = this.entreprises.find(marche=>marche.id==this.entrepriseSetect.id)
         decisionEntreprise.active = 1

    this.modifierEntreprise(decisionEntreprise)
     this.getEntreprise()
    }
else{
 // Code à éxécuter si l'utilisateur clique sur "Annuler" 
}
    }
   
   
   
   
   
},

        
    };
</script>

