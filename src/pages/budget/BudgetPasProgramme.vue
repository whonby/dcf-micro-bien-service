

             
             
        <template>
  <div >
    

            <!-- <div align="right" style="cursor:pointer;">
           <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
          </div> -->
           

 <div ref="document">


          <!--<table class="table table-bordered table-striped" id="Exo">
            <tr>
              <td>

              </td>
            </tr>
          </table>-->
     <h3 style="text-align:center">BUDGET OPERATIONNEL DE PROGRAMME (BOP) :<span style="color: red;">{{23}}</span></h3>
           
              <table class="table table-bordered table-striped" id="titre">
                <thead>
                   <tr style="background-color: green;color: #FFFFFF;">
    <!-- <td style="width:10%;text-align:center">LIGNE BUDGETAIRE</td> -->
    <td style="width:12%;"></td>
     <td style="width:12%;text-align:center;font-size:15px">EXECUTION BUDGETAIRE 2020 ACTUALISE </td>
     <td colspan="5" style="width:20%;text-align:center;font-size:15px"> EXERCICE BUDGETAIRE 2021</td>
    <!-- <td style="width:12%;text-align:center">EXECUTE</td>
     <td style="width:12%;text-align:center">DISPONIBLE</td> -->
      <!-- <td style="width:12%;text-align:center">MODIFICATION BUDGETAIRE</td>
      <th style="width:12%;text-align:center">TOTAL</th> -->
 </tr>
 </thead>
 <tbody>
                    <tr>
    <td height="10px" rowspan="3" style="text-align:center;">SECTION</td>
    <td colspan="" height="10px">Dépenses exécutées  </td>
     <!-- <td style="width:12%">ETAT</td> -->
     <td height="10px" style="text-align:center;font-size:12px">Programmation des ressources notifiées  <code>(0)</code></td>
   <td height="10px" style="text-align:center;font-size:12px">Dépenses obligatiores <code>(1)</code> </td>
     <td height="10px" style="text-align:center;font-size:12px">Dépénses Inéluctables <code>(2)</code>  </td> 
     <td height="10px" style="text-align:center;font-size:12px">Autres Dépenses <code>(3)</code>  </td> 
     <td height="10px" style="text-align:center;font-size:12px"> Contröle de cohérence du BOP A.1
         [(1) +(2) +(3)]-(0) 
         </td> 
  
 </tr>
                    <tr>
   


    <td colspan="" height="10px">AE  </td>
      <td height="10px"></td>
      <td height="10px" style="text-align:center;font-size:12px"></td>
    <td height="10px" style="text-align:center;font-size:12px"></td>
 <td height="10px" style="text-align:center;font-size:12px"></td>
      <!-- <td height="20px">6</td>
      <th height="20px" style="text-align:center;background-color: orange;color: #FFFFFF;font-size:14px">7</th> -->
 </tr>
                    <tr>
    
    <td colspan="" height="10px">CP</td>
     <td height="10px"></td>
      <td height="10px" style="text-align:center;font-size:12px"></td>
 <td height="10px" style="text-align:center;font-size:12px"></td>
<td height="10px" style="text-align:center;font-size:12px"></td>
     <!-- <td height="20px">10</td>
      <th height="20px" style="text-align:center;background-color: orange;color: #FFFFFF;font-size:14px">11</th> -->
 </tr>
                    <tr style="margin-left:-20px;">
    <th colspan="7" height="20px"  style="font-size:14px" title="">PROGRAMME</th>
    
 </tr>                
   
  <tr>
   <td colspan="2"  rowspan=""  style="text-align:center;background-color: orange;color: #000000;">ACTION A.1 / BOP A.1</td>
   <td style="width:0%;background-color: orange;color: #000000 " >  </td>
    <td style="width:0%;background-color: orange;color: #000000" ></td>
    <td  style="text-align:center;width:0%;background-color: orange;color: #000000"></td>
    <td  style="text-align:center;width:0%;background-color: orange;color: #000000"></td>
    <td  style="text-align:center;width:0%;background-color: orange;color: #000000"></td>
    
<!--     
     <td style="width:12%">96</td>
     <th style="width:12%;text-align:center;background-color: orange;color: #FFFFFF;font-size:14px">56</th> -->
</tr>
  <tr>
   <td  colspan="2" rowspan="" style="text-align:center;width:12%">Unité Opérationnelle 1</td>
   <td style="width:12%" ></td>
    <td style="width:12%" ></td>
    <td  style="text-align:center;width:12%"></td>
    <td  style="text-align:center;width:12%"></td>
    <td  style="text-align:center;width:12%"></td>
<!--     
     <td style="width:12%">96</td>
     <th style="width:12%;text-align:center;background-color: orange;color: #FFFFFF;font-size:14px">56</th> -->
</tr>

        <tr>
   <td colspan="2"  rowspan="" style="text-align:center;width:12%">Dépenses de biens et services</td>
   <td style="width:12%;background-color:green;color: #00ffff;" >  </td>
    <td style="width:12%;background-color:green;color: #00ffff;" ></td>
    <td  style="text-align:center;width:12%;background-color: green;color: #00ffff;"></td>
    <td  style="text-align:center;width:12%;background-color: green;color: #00ffff;"></td>
    <td  style="text-align:center;width:12%;background-color: green;color: #00ffff;"></td>
<!--     
     <td style="width:12%">96</td>
     <th style="width:12%;text-align:center;background-color: green;color: #FFFFFF;font-size:14px">56</th> -->
</tr>
  <tr>
   <td  colspan="2" rowspan="" style="text-align:center;width:12%">Activité A.1.1</td>
   <td style="width:12%" ></td>
    <td style="width:12%" ></td>
    <td  style="text-align:center;width:12%"></td>
    <td  style="text-align:center;width:12%"></td>
    <td  style="text-align:center;width:12%"></td>
<!--     
     <td style="width:12%">96</td>
     <th style="width:12%;text-align:center;background-color: orange;color: #FFFFFF;font-size:14px">56</th> -->
</tr>  
<tr>
   <td colspan="2"  rowspan="" style="text-align:center;width:12%">Activité A.1.2</td>
   <td style="width:12%" ></td>
    <td style="width:12%" ></td>
    <td  style="text-align:center;width:12%"></td>
    <td  style="text-align:center;width:12%"></td>
    <td  style="text-align:center;width:12%"></td>
<!--     
     <td style="width:12%">96</td>
     <th style="width:12%;text-align:center;background-color: orange;color: #FFFFFF;font-size:14px">56</th> -->
</tr>  
<tr>
   <td  colspan="2" rowspan="" style="text-align:center;width:12%">Dépenses de transferts courants</td>
   <td style="width:12%" ></td>
    <td style="width:12%" ></td>
    <td  style="text-align:center;width:12%"></td>
    <td  style="text-align:center;width:12%"></td>
    <td  style="text-align:center;width:12%"></td>
<!--     
     <td style="width:12%">96</td>
     <th style="width:12%;text-align:center;background-color: orange;color: #FFFFFF;font-size:14px">56</th> -->
</tr>  

<tr>
   <td  colspan="2" rowspan="" style="text-align:center;width:12%">Dépenses de transferts courants</td>
   <td style="width:12%" ></td>
    <td style="width:12%" ></td>
    <td  style="text-align:center;width:12%"></td>
    <td  style="text-align:center;width:12%"></td>
    <td  style="text-align:center;width:12%"></td>
<!--     
     <td style="width:12%">96</td>
     <th style="width:12%;text-align:center;background-color: orange;color: #FFFFFF;font-size:14px">56</th> -->
</tr> 
<tr>
   <td  colspan="2" rowspan="" style="text-align:center;width:12%">Activité A.1.3</td>
   <td style="width:12%" ></td>
    <td style="width:12%" ></td>
    <td  style="text-align:center;width:12%"></td>
    <td  style="text-align:center;width:12%"></td>
    <td  style="text-align:center;width:12%"></td>
<!--     
     <td style="width:12%">96</td>
     <th style="width:12%;text-align:center;background-color: orange;color: #FFFFFF;font-size:14px">56</th> -->
</tr> 
<tr>
   <td  colspan="2" rowspan="" style="text-align:center;width:12%">Activité A.1.4</td>
   <td style="width:12%" ></td>
    <td style="width:12%" ></td>
    <td  style="text-align:center;width:12%"></td>
    <td  style="text-align:center;width:12%"></td>
    <td  style="text-align:center;width:12%"></td>
<!--     
     <td style="width:12%">96</td>
     <th style="width:12%;text-align:center;background-color: orange;color: #FFFFFF;font-size:14px">56</th> -->
</tr> 
        
      <tr>
   <td colspan="2"  rowspan="" style="text-align:center;width:12%">Dépenses d'investissement</td>
   <td style="width:12%" ></td>
    <td style="width:12%" ></td>
    <td  style="text-align:center;width:12%"></td>
    <td  style="text-align:center;width:12%"></td>
    <td  style="text-align:center;width:12%"></td>
<!--     
     <td style="width:12%">96</td>
     <th style="width:12%;text-align:center;background-color: orange;color: #FFFFFF;font-size:14px">56</th> -->
</tr>    
<tr>
   <td colspan="2"  rowspan="" style="text-align:center;width:12%">projet A.1.1</td>
   <td style="width:12%" ></td>
    <td style="width:12%" ></td>
    <td  style="text-align:center;width:12%"></td>
    <td  style="text-align:center;width:12%"></td>
    <td  style="text-align:center;width:12%"></td>
<!--     
     <td style="width:12%">96</td>
     <th style="width:12%;text-align:center;background-color: orange;color: #FFFFFF;font-size:14px">56</th> -->
</tr> 
    
  <tr>
   <td colspan="2"  rowspan="" style="text-align:center;width:12%">projet A.1.2</td>
   <td style="width:12%" ></td>
    <td style="width:12%" ></td>
    <td  style="text-align:center;width:12%"></td>
    <td  style="text-align:center;width:12%"></td>
    <td  style="text-align:center;width:12%"></td>
<!--     
     <td style="width:12%">96</td>
     <th style="width:12%;text-align:center;background-color: orange;color: #FFFFFF;font-size:14px">56</th> -->
</tr>   

          



         

      












  <!-- <tr>
   <th style="width:10%;font-size:14px;font-weight: bold;">TOTAL</th>
   <td style="width:12%"> CONTREPARTIE </td>
    <td style="width:12%">ETAT</td>
    <td width="12%" style="text-align:center"></td>
   <td width="12%" style="text-align:center"></td>
    
</tr> -->
  

                   <!-- <tr>
   <th height="20px" colspan="2" style="color: #000000;font-size:14px">TOTAL GENERAL </th>
   
    <td height="20px"></td>
    <td height="20px" style="text-align:center;background-color: green;color: #FFFFFF;font-size:14px"></td>
    <td height="20px" style="text-align:center;background-color: green;color: #FFFFFF;font-size:14px"></td>
     <td height="20px" style="text-align:center;background-color: green;color: #FFFFFF;font-size:14px"></td>
     
</tr>                                        -->
                  </tbody>  
              </table>
                 




 </div>

            <!-- <div v-else> -->
              <!-- <p style="text-align:center;font-size:20px;color:red;">Aucune Unite Administrative</p> -->
            <!-- </div> -->
          <!-- </div> -->
        <!-- </div>
      </div> -->
    <!-- </div> -->

    <!-- <fab :actions="fabActions" @cache="afficherModalAjouterpaiementPersonnel" main-icon="apps" bg-color="green"></fab>
        <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterpaiementPersonnel()">Open</button>
  <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
  <notifications  /> -->


    <!-- <div class="control-group">
                <label class="control-label">programme</label>
                <div class="controls">
                  <select v-model="formData.programme_id" class="span">
                    <option v-for="varText in AffichierElementParent(affichierIdActeFinancierDansActePlan)" :key="varText.id"
                            :value="varText.id">{{varText.libelle}}</option>
                </select>

                </div>
              </div> -->
  </div>
</template>     
    

<script>
    import { mapGetters, mapActions } from "vuex";
    import { formatageSomme } from "../../Repositories/Repository";
    //import UploadExcelComponent from '@/components/UploadExcel/index.vue'
    //import ProgressBar from "../component/ProgressBar"
    export default {
        name: 'BudgetPasProgramme',
        components:{
          //  UploadExcelComponent
        },
        data() {
            return {
                fabActions: [
                    {
                        name: "cache",
                        icon: "add"
                    }

                ],
                tableData: [],
                tableHeader: [],
                progress:0,
                bgWidth: '0%',
                bgHeight: '30px',
                exercice_budget:"",
                message_mandater:'',
                i:0,
                isOffreTechniqueFinancier:false,
                namePDF: "",
                uploadPercentage:0,
                fichierPDF: "",
                imagePDF:"",
                selectedFile:"",
                resultaAnalysePv:[],
                resultaFinalCandidat:[],
                entreprise_vainqueur:"",
                registrecc_vainqueur:"",
                identreprise_vainqueur:"",
                message_setion_vainqueur:"",
                info_avis_bailleur:"",
                namePDFDemandeAno: "",
                fichierPDFDemandeAno: "",
                imagePDFDemandeAno:"",
                source_financement_detecter:[],
                unite_admin_dettecte:[],

                 formData:{
                     programme_id:""
                 }

            };
        },
        created() {

        },
        computed: {
            ...mapGetters("uniteadministrative", [
                "acteCreations",
                "typeTextes",
                "uniteAdministratives",
                "getterBudgeCharge"
            ]),
            ...mapGetters("parametreGenerauxAdministratif", [
                "sections",
                "type_Unite_admins",
                "plans_programmes",
                "natures_sections",
                "grandes_natures",
                "afficheNiveauPlanProg",
                "exercices_budgetaires"
            ]),
            ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements']),

             affichierIdActeFinancierDansActePlan() {
      const qtereel = this.plans_programmes.find(
          qtreel => qtreel.code == "2",
      );

      if (qtereel) {
        return qtereel.id;
      }
      return 0
    },

    AffichierElementParent() {

      return id => {
        if (id != null && id != "") {
          return this.plans_programmes.filter(element => element.parent == id);
        }
      };
    },
            anneeAmort() {
                const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

                if (norme) {
                    let vM=this;
                    vM.exercice_budget=norme.annee;
                    return norme.annee;
                }
                return 0
            },
            varition_bugetaire(){
                return id=>{
                    if(id!=""){
                        let objet =this.getterBudgeCharge.find(item=>item.id==id)

                        if(objet!="undefined"){
                            if(objet.status=="init"){
                                return 0;
                            }
                            if(objet.status=="actu"){
                                let ancien_version=objet.version - 1;
                                let encien_budjet=this.getterBudgeCharge.find(item=>item.version==ancien_version)
                                let montant_ancien_budget=this.montantGlobale(encien_budjet.id)
                                let montant_budget_actuel=this.montantGlobale(objet.id)

                                let variation=montant_budget_actuel-montant_ancien_budget;
                                // console.log(variation)
                                return variation;
                            }

                        }

                    }
                }
            },
            montantGlobale(){
                return id =>{
                    if (id!="") {
                        let objet =this.getterBudgeCharge.find(item=>item.id==id)

                        let initialValue = 0;

                        if (objet!="undefined") {
                            return objet.budget_general.reduce(function (total, currentValue) {
                                return total + parseFloat(currentValue.Dotation_Initiale) ;
                            }, initialValue);
                        }
                    }


                }
            },
            etatSFNonEnregistre(){
                return code=>{
                    let objet=this.sources_financements.find(item=>item.code==code)
                    if(objet==undefined){
                        return false
                    }

                    return true
                }
            },
            etatNonEnregistre(){
                return code=>{
                    let objet=this.uniteAdministratives.find(item=>item.code==code)

                    if(objet==undefined){
                        return false
                    }

                    return true
                }
            }
        },
        methods: {
            ...mapActions("uniteadministrative", [
                "getAllActeCreation",
                "ajouterActeCreation",
                "modifierActeCreation",
                "supprimerActeCreation",
                "importBudget",
                "getAllTypeTextes",
                "getAllUniteAdministrative",
                "getAllArchivageDocument",
                "ajouterBudgetCharge",
                "getAllBudgetGeneral",
                "getAllHistoriqueBudgetGeneral",
                "modifierLigneExempter",
            ]),
            ...mapActions('parametreGenerauxSourceDeFinancement', ['getSourceFinancement', 'ajouterSourceFinancement',
                'modifierFinancement',
                'supprimerSourceFinancement']),
            formatageSomme:formatageSomme,
            OnchangeFichier(e) {
                const files = e.target.files;
                this.selectedFile = event.target.files[0];
                console.log(this.selectedFile)
                Array.from(files).forEach(file => this.addFichier(file));
            },
            beforeUpload(file) {
                const isLt1M = file.size / 1024 / 1024 < 1

                if (isLt1M) {
                    return true
                }

                this.$message({
                    message: 'Please do not upload files larger than 1m in size.',
                    type: 'warning'
                })
                return false
            },
            handleSuccess({ results, header }) {
                // console.log(results[0]["GRANDE NATURE DE DEPENSE"])
                this.tableData = results
                this.tableHeader = header

                if(this.tableData.length>0){
                    let vm=this;

                    this.tableData.forEach(function (value) {
                        console.log(value)
                        //recherche de nouvelle source de financement
                        let section=value['SECTION'].split(" ")
                        let localisation=value['ZONE'].split(" ")
                        let array_source=value['SOURCE FINANCEMENT'].split(" ")
                        let array_unite_ua=value['UA'].split(" ")
                        console.log(array_unite_ua[0])
                        let code_ua=section[0]+'-'+array_unite_ua[0]+'-'+localisation[0]
                        console.log(code_ua)
                        let sourceFinancement=vm.sources_financements.find(item=>item.code==array_source[0])
                        let sourceUA=vm.uniteAdministratives.find(item=>item.code==code_ua)
                        if(sourceFinancement==undefined){
                            let libelle="";
                            let j=0;
                            array_source.forEach(function (val) {
                                if(j>0){
                                    libelle=libelle+" "+val
                                }
                                j++
                            })

                            let objet={
                                code:array_source[0],
                                libelle:libelle,
                                sigle:array_source[0]
                            }
                            let isExiste=vm.source_financement_detecter.find(item=>item.code==array_source[0])
                            if(isExiste==undefined){
                                vm.source_financement_detecter.push(objet)
                                vm.ajouterSourceFinancement(objet)
                            }

                        }


                        //Recherche de nouvelle UA
                        if(sourceUA==undefined){
                            let libelle_ua="";
                            let i=0;
                            array_unite_ua.forEach(function (val) {
                                if(i>0){
                                    libelle_ua=libelle_ua+" "+val
                                }
                                i++
                            })

                            let objet={
                                section:value['SECTION'],
                                zone:value['ZONE'],
                                code_g:array_unite_ua[0],
                                code:code_ua,
                                libelle:libelle_ua,
                            }

                            let isExisteUA=vm.unite_admin_dettecte.find(item=>item.code==code_ua)
                            if(isExisteUA==undefined){
                                vm.unite_admin_dettecte.push(objet)
                            }
                        }
                        // console.log(value['SOURCE FINANCEMENT'])
                        // console.log(value['UA'])
                    })
                }
            },
            addFichier(file) {
                let reader = new FileReader();
                let vm = this;
                reader.onload = e => {
                    vm.imagePDFDemandeAno = "pdf.png";
                    vm.namePDFDemandeAno = file.name;
                    vm.fichierPDFDemandeAno = e.target.result;
                };
                reader.readAsDataURL(file);
            }
            ,
            afficherModalAjouterStock() {
                this.$("#exampleModal").modal({
                    backdrop: "static",
                    keyboard: false
                });
            },
            ajouterFichier(){
                /* const formData = new FormData();
                 formData.append('fichier', this.selectedFile, this.selectedFile.name);
                 formData.append('exercicebudget_id', this.exercice_budget);
                 let config = {
                     header : {
                         'Content-Type' : 'multipart/form-data'
                     }
                 }*/
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
                let formData={
                    exercicebudget_id:this.exercice_budget,
                    dataExcel:this.tableData
                }

                this.i= this.i+10;
                this.bgWidth=this.i+"%"
                this.$("#exampleModal").modal('hide');
                this.ajouterBudgetCharge(formData,config).then(data=>{
                    console.log(data)
                    this.tableData=[]
                }).catch(erro=>{
                    console.log(erro)
                    this.getAllBudgetGeneral()
                    this.getAllUniteAdministrative()
                    // router.push({ path: 'budgetGenerals' })
                })

            },

        }
    };
</script>
<style scoped>

    .taillemodal {
        width: 800px;
        margin: 0 -380px;
    }
    .gdmodelfour
    {
        width: 1000px;
        margin: 0 -580px;
        height: 500px;
    }
    .grdirModalActeEffet
    {

        width: 1200px;
        margin: 0 -530px;
        height: 550px;

    }
    .grdirModalAnalyse{
        width: 1000px;
        margin: 0 -530px;
        height: 350px;
    }
    .tlAviBailleur{
        width: 1000px;
        margin: 0 -530px;
        height: 450px;

    }
    .tlDossierCandidat{
        width: 1000px;
        margin: 0 -530px;
        height: 500px;

    }

    .tlg{
        width: 900px;
        margin: 0 -450px;
        height: 500px;
    }
    .sommecolor{
        background-color: red;
        color:red;
        font-size: 120%;
        text-align: center;
        font-weight:bold;
    }
    .modaloffreFin{
        width: 850px;
        margin: 0 -480px;
    }
    .tailDMP{
        width: 850px;
        margin: 0 -490px;
    }
    .tailleModalOffre{
        width: 1200px;
        margin: 0 -490px;
    }
    .tailleModalOffre2{
        width: 1300px;
        margin: 0 -690px;
    }
</style>



