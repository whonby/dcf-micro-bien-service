

             
             
        <template>
  <div >
    

            <!-- <div align="right" style="cursor:pointer;">
           <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
          </div> -->
           

 <div ref="document">

 <div class="span6" align="right">
                        <button class="btn btn-default" @click="tableToExcel('table', 'Contratualisation')">
                            <img style="width: 20px !important; height: 20px !important;" src="https://img.icons8.com/windows/64/000000/export-excel.png"/>
                        </button>
                    </div>
          <!--<table class="table table-bordered table-striped" id="Exo">
            <tr>
              <td>

              </td>
            </tr>
          </table>-->
     <h3 style="text-align:center">TABLEAU DE SUIVI DES DELAIS DES MARCHES :<span style="color: red;">{{23}}</span></h3>
           
              <table class="table table-bordered table-striped" id="titre" ref="table"  summary="lorem ipsum sit amet" rules="groups" frame="hsides" border="2">
                <thead>
                    
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                         <td colspan="2" style="background-color: orange;color: #FFFFFF;text-align:center">Date réception provisoire</td>
                        <td colspan="2" style="background-color: orange;color: #FFFFFF;text-align:center">Date réception définitive</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td style="color: #FFFFFF;width:2%;text-align:center;background-color: green !important;font-size:10px">N° </td>
                       <td colspan="" style="color: #FFFFFF;width:20%;text-align:center;background-color: green !important;font-size:10px">Objet du marché</td>
    <td style="color: #FFFFFF;width:5%;text-align:center;background-color: green !important;font-size:10px">Numéro du marché</td>
     <td style="color: #FFFFFF;width:5%;text-align:center;background-color: green !important;font-size:10px">Attribution</td>
      <td style="color: #FFFFFF;width:5%;text-align:center;background-color: green !important;font-size:10px">Montant de base marché</td>
                         <td style="color: #FFFFFF;width:5%;text-align:center;background-color: green !important;font-size:10px">Montant total avenant</td>
      <td style="color: #FFFFFF;width:5%;text-align:center;background-color: green !important;font-size:10px">  Montant total du marché y/c avenant</td>
      <td style="color: #FFFFFF;width:5%;text-align:center;background-color: green !important;font-size:10px">Durée contractuelle d'exécution</td>
       <td style="color: #FFFFFF;width:5%;text-align:center;background-color: green !important;font-size:10px">Durée de garantie</td>
      <td style="color: #FFFFFF;width:5%;text-align:center;background-color: green !important;font-size:10px">Date de l'OS</td>

      <td style="color: #FFFFFF;width:5%;text-align:center;background-color: green !important;font-size:10px">Date de début effectif d'exécution</td>
                        <td style="color: #FFFFFF;width:5%;text-align:center;background-color: green !important;font-size:10px">prévisionnelle</td>
                        <td style="color: #FFFFFF;width:5%;text-align:center;background-color: green !important;font-size:10px">Effective</td>
                                             <td style="color: #FFFFFF;width:5%;text-align:center;background-color: green !important;font-size:10px">prévisionnelle</td>
                        <td style="color: #FFFFFF;width:5%;text-align:center;background-color: green !important;font-size:10px">Effective</td>
        <td style="color: #FFFFFF;width:5%;text-align:center;background-color: green !important;font-size:10px">Durée d'exécution réelle</td>
          <td style="color: #FFFFFF;width:5%;text-align:center;background-color: green !important;font-size:10px">Ecart des délais</td>
                    </tr>
   
 </thead>
 <tbody>
                   
 <tr  class="odd gradeX" v-for="(activites,index) in afficherListeMarcheHorsSib" :key="activites.id" >
     <td>{{index+1}}</td>

  <td >{{activites.objet || 'Non renseigné'}}</td>
   <td >{{activites.numero_marche|| 'Non renseigné'}}</td>
   <td >{{attritaireMarche(activites.id)}}</td>
   <td>{{formatageSomme(parseFloat(montantBaseMarche(activites.id)))}}</td>
   <td>{{formatageSomme(parseFloat(montantAvenantMarche(activites.id)))}}</td>
   <td>{{formatageSomme(parseFloat(montantTotaMarche(activites.id)))}}</td>
   <td>{{durreExecutionContuelle(activites.id)}} Jours</td>
   <td>{{dureeGarantie(activites.id)}} Jours</td>
   <td>{{dateOs(activites.id)}}</td>
   <td>{{dateDebutExectionEffective(activites.id)}}</td>
   <td>{{dateProvisoirePrevisionnel(activites.id)}}</td>
   <td>{{dateProvisoireEffective(activites.id)}}</td>
   <td>{{dateDefinitivePrevisionnel(activites.id)}}</td>
   <td>{{dateReceptionEffective(activites.id)}}</td>
   <td></td>
   <td></td>
  
 </tr>
               

    </tbody>  
  </table>
                 




 </div>

       
  </div>
</template>     
    

<script>
    import { mapGetters, mapActions } from "vuex";
    import { formatageSomme } from "../../Repositories/Repository";
     import {admin,dcf,noDCfNoAdmin} from "../../Repositories/Auth"
    //import UploadExcelComponent from '@/components/UploadExcel/index.vue'
    //import ProgressBar from "../component/ProgressBar"
     //import {formatageSomme} from '../../Repositories/Repository'
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
                uri :'data:application/vnd.ms-excel;charset=UTF-8;base64,',
                template:'<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
                base64: function(s){ return window.btoa(unescape(encodeURIComponent(s))) },
                format: function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) },
                 formData:{
                     programme_id:""
                 }

            };
        },
        created() {
console.log(this.getActeEffetFinancierPersonnaliser)
        },
        computed: {
            ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
            ...mapGetters("uniteadministrative", [
                "acteCreations",
                "typeTextes",
                "uniteAdministratives",
                "getterBudgeCharge"
            ]),
            ...mapGetters("bienService",["getActeEffetFinancierPersonnaliser","avenants"]),
            ...mapGetters("parametreGenerauxAdministratif", [
                "sections",
                "type_Unite_admins",
                "plans_programmes",
                "natures_sections",
                "grandes_natures",
                "afficheNiveauPlanProg",
                "exercices_budgetaires"
            ]),
            
    ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises','banques','comptes','getCompte']),
            ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements']),
            ...mapGetters("horSib", ["gettersMarcheHorsib"]),

 admin:admin,
      dcf:dcf,
      noDCfNoAdmin:noDCfNoAdmin,

      listeActeEffectFinnancier: function () {
      return macheid => {
        if (macheid != "") {
            console.log("....................")
           console.log(macheid)
          return this.getActeEffetFinancierPersonnaliser.find(idmarche => idmarche.marche_id == macheid)
        }
      }
    },
    attritaireMarche(){
           return marche_id=>{
               let objet=this.listeActeEffectFinnancier(marche_id)
              console.log(objet)
               if(objet!=undefined){
                   if(objet.varObjetEntreprise){
                       let entre=this.entreprises.find(item=>item.id==objet.entreprise_id)
                        return entre.raison_sociale
                   }
                   return null
               }
                        
               return null
           }
    },
     montantBaseMarche(){
         return marche_id=>{
               let objet=this.listeActeEffectFinnancier(marche_id)
              console.log(objet)
               if(objet!=undefined){
                  
                   return objet.montant_act
               }
                        
               return 0
           }
     },
      durreExecutionContuelle(){
         return marche_id=>{
               let objet=this.listeActeEffectFinnancier(marche_id)
              console.log(objet)
               if(objet!=undefined){
                  
                   return objet.duree
               }
                        
               return 0
           }
     },
      dureeGarantie(){
         return marche_id=>{
               let objet=this.listeActeEffectFinnancier(marche_id)
              console.log(objet)
               if(objet!=undefined){
                   if(objet.durre_garantie==null) return 0

                   return objet.durre_garantie
               }
                        
               return 0
           }
     },
    dateOs(){
         return marche_id=>{
               let objet=this.listeActeEffectFinnancier(marche_id)
              console.log(objet)
               if(objet!=undefined){
                  
                   return objet.date_odre_service
               }
                        
               return 0
           }
     },
      dateProvisoirePrevisionnel(){
         return marche_id=>{
               let objet=this.listeActeEffectFinnancier(marche_id)
              console.log(objet)
               if(objet!=undefined){
                  
                   return objet.date_reception
               }
                        
               return 0
           }
     },
       dateProvisoireEffective(){
         return marche_id=>{
               let objet=this.listeActeEffectFinnancier(marche_id)
              console.log(objet)
               if(objet!=undefined){
                  
                   return objet.date_debut_exectuion_definitif
               }
                        
               return 0
           }
     },
      
     dateDefinitivePrevisionnel(){
         return marche_id=>{
               let objet=this.listeActeEffectFinnancier(marche_id)
              console.log(objet)
               if(objet!=undefined){
                  
                   return objet.date_fin_exe
               }
                        
               return 0
           }
     },
     dateDebutExectionEffective(){
         return marche_id=>{
               let objet=this.listeActeEffectFinnancier(marche_id)
              console.log(objet)
               if(objet!=undefined){
                  
                   return objet.date_debut_exectuion_definitif
               }
                        
               return 0
           }
     },
     dateReceptionEffective(){
         return marche_id=>{
               let objet=this.listeActeEffectFinnancier(marche_id)
              console.log(objet)
               if(objet!=undefined){
                  
                   return objet.date_reception_definitive
               }
                        
               return 0
           }
     },
     montantTotaMarche(){
       return marche_id=>{
          return  parseFloat(this.montantBaseMarche(marche_id)) + parseFloat(this.montantAvenantMarche(marche_id))
       }
     },
     montantAvenantMarche(){
      return marche_id=>{
           let objetAvenant=this.avenants.filter(item=>item.marche_id==marche_id)
                        if(objetAvenant!=undefined){
                            let initeVal = 0;
                            return objetAvenant.reduce(function (total, currentValue) {
                                return total + parseFloat(currentValue.montant_avenant) ;
                            }, initeVal);
                        }
                        return 0
      }
     },
     afficherEntrepriseID(){
         return id=>{
             if(id!=null && id!=""){
                 let objet=this.getActeEffetFinancierPersonnaliser.filter(item => item.marche_id==id)
                 if(objet){
                     return objet.entreprise_id
                 }
                 return 0
             }
         }
     },
      afficherEntrepriseID1(){
         return id=>{
             if(id!=null && id!=""){
                 let objet=this.getActeEffetFinancierPersonnaliser.filter(item => item.id==id)
                 if(objet){
                     return objet.marche_id
                 }
                 return 0
             }
         }
     },


                afficherListeMarcheHorsSib() {
       // const st = this.search.toLowerCase();
        if (this.noDCfNoAdmin){
            let colect=[];
            this.gettersMarcheHorsib.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(element =>   element.parent_id != null && element.sib==1 && element.attribue==2)
            // return colect.filter(items => {
            //     return (
            //         items.secti.nom_section.toLowerCase().includes(st) ||
            //         items.libelle.toLowerCase().includes(st)
            //     );
            // }); 
        }

        return this.gettersMarcheHorsib.filter(element =>   element.parent_id != null && element.sib==1 && element.attribue==2)
            // return (
            //     items.secti.nom_section.toLowerCase().includes(st) ||
            //     items.libelle.toLowerCase().includes(st)
            // );
        

    },

    //          affichierIdActeFinancierDansActePlan() {
    //   const qtereel = this.plans_programmes.find(
    //       qtreel => qtreel.code == "2",
    //   );

    //   if (qtereel) {
    //     return qtereel.id;
    //   }
    //   return 0
    // },

    // AffichierElementParent() {

    //   return id => {
    //     if (id != null && id != "") {
    //       return this.plans_programmes.filter(element => element.parent == id);
    //     }
    //   };
    // },
    //         anneeAmort() {
    //             const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

    //             if (norme) {
    //                 let vM=this;
    //                 vM.exercice_budget=norme.annee;
    //                 return norme.annee;
    //             }
    //             return 0
    //         },
    //         varition_bugetaire(){
    //             return id=>{
    //                 if(id!=""){
    //                     let objet =this.getterBudgeCharge.find(item=>item.id==id)

    //                     if(objet!="undefined"){
    //                         if(objet.status=="init"){
    //                             return 0;
    //                         }
    //                         if(objet.status=="actu"){
    //                             let ancien_version=objet.version - 1;
    //                             let encien_budjet=this.getterBudgeCharge.find(item=>item.version==ancien_version)
    //                             let montant_ancien_budget=this.montantGlobale(encien_budjet.id)
    //                             let montant_budget_actuel=this.montantGlobale(objet.id)

    //                             let variation=montant_budget_actuel-montant_ancien_budget;
    //                             // console.log(variation)
    //                             return variation;
    //                         }

    //                     }

    //                 }
    //             }
    //         },
    //         montantGlobale(){
    //             return id =>{
    //                 if (id!="") {
    //                     let objet =this.getterBudgeCharge.find(item=>item.id==id)

    //                     let initialValue = 0;

    //                     if (objet!="undefined") {
    //                         return objet.budget_general.reduce(function (total, currentValue) {
    //                             return total + parseFloat(currentValue.Dotation_Initiale) ;
    //                         }, initialValue);
    //                     }
    //                 }


    //             }
    //         },
    //         etatSFNonEnregistre(){
    //             return code=>{
    //                 let objet=this.sources_financements.find(item=>item.code==code)
    //                 if(objet==undefined){
    //                     return false
    //                 }

    //                 return true
    //             }
    //         },
    //         etatNonEnregistre(){
    //             return code=>{
    //                 let objet=this.uniteAdministratives.find(item=>item.code==code)

    //                 if(objet==undefined){
    //                     return false
    //                 }

    //                 return true
    //             }
    //         }
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
 tableToExcel(table, name){
                if (!table.nodeType) table = this.$refs.table
                var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
                window.location.href = this.uri + this.base64(this.format(this.template, ctx))
            }

         
            // OnchangeFichier(e) {
            //     const files = e.target.files;
            //     this.selectedFile = event.target.files[0];
            //     console.log(this.selectedFile)
            //     Array.from(files).forEach(file => this.addFichier(file));
            // },
            // beforeUpload(file) {
            //     const isLt1M = file.size / 1024 / 1024 < 1

            //     if (isLt1M) {
            //         return true
            //     }

            //     this.$message({
            //         message: 'Please do not upload files larger than 1m in size.',
            //         type: 'warning'
            //     })
            //     return false
            // },
            // handleSuccess({ results, header }) {
            //     // console.log(results[0]["GRANDE NATURE DE DEPENSE"])
            //     this.tableData = results
            //     this.tableHeader = header

            //     if(this.tableData.length>0){
            //         let vm=this;

            //         this.tableData.forEach(function (value) {
            //             console.log(value)
            //             //recherche de nouvelle source de financement
            //             let section=value['SECTION'].split(" ")
            //             let localisation=value['ZONE'].split(" ")
            //             let array_source=value['SOURCE FINANCEMENT'].split(" ")
            //             let array_unite_ua=value['UA'].split(" ")
            //             console.log(array_unite_ua[0])
            //             let code_ua=section[0]+'-'+array_unite_ua[0]+'-'+localisation[0]
            //             console.log(code_ua)
            //             let sourceFinancement=vm.sources_financements.find(item=>item.code==array_source[0])
            //             let sourceUA=vm.uniteAdministratives.find(item=>item.code==code_ua)
            //             if(sourceFinancement==undefined){
            //                 let libelle="";
            //                 let j=0;
            //                 array_source.forEach(function (val) {
            //                     if(j>0){
            //                         libelle=libelle+" "+val
            //                     }
            //                     j++
            //                 })

            //                 let objet={
            //                     code:array_source[0],
            //                     libelle:libelle,
            //                     sigle:array_source[0]
            //                 }
            //                 let isExiste=vm.source_financement_detecter.find(item=>item.code==array_source[0])
            //                 if(isExiste==undefined){
            //                     vm.source_financement_detecter.push(objet)
            //                     vm.ajouterSourceFinancement(objet)
            //                 }

            //             }


            //             //Recherche de nouvelle UA
            //             if(sourceUA==undefined){
            //                 let libelle_ua="";
            //                 let i=0;
            //                 array_unite_ua.forEach(function (val) {
            //                     if(i>0){
            //                         libelle_ua=libelle_ua+" "+val
            //                     }
            //                     i++
            //                 })

            //                 let objet={
            //                     section:value['SECTION'],
            //                     zone:value['ZONE'],
            //                     code_g:array_unite_ua[0],
            //                     code:code_ua,
            //                     libelle:libelle_ua,
            //                 }

            //                 let isExisteUA=vm.unite_admin_dettecte.find(item=>item.code==code_ua)
            //                 if(isExisteUA==undefined){
            //                     vm.unite_admin_dettecte.push(objet)
            //                 }
            //             }
            //             // console.log(value['SOURCE FINANCEMENT'])
            //             // console.log(value['UA'])
            //         })
            //     }
            // },
            // addFichier(file) {
            //     let reader = new FileReader();
            //     let vm = this;
            //     reader.onload = e => {
            //         vm.imagePDFDemandeAno = "pdf.png";
            //         vm.namePDFDemandeAno = file.name;
            //         vm.fichierPDFDemandeAno = e.target.result;
            //     };
            //     reader.readAsDataURL(file);
            // }
            // ,
            // afficherModalAjouterStock() {
            //     this.$("#exampleModal").modal({
            //         backdrop: "static",
            //         keyboard: false
            //     });
            // },
            // ajouterFichier(){
            //     /* const formData = new FormData();
            //      formData.append('fichier', this.selectedFile, this.selectedFile.name);
            //      formData.append('exercicebudget_id', this.exercice_budget);
            //      let config = {
            //          header : {
            //              'Content-Type' : 'multipart/form-data'
            //          }
            //      }*/
            //     let config = {
            //         header : {
            //             'Content-Type' : 'multipart/form-data'
            //         }
            //     }
            //     let formData={
            //         exercicebudget_id:this.exercice_budget,
            //         dataExcel:this.tableData
            //     }

            //     this.i= this.i+10;
            //     this.bgWidth=this.i+"%"
            //     this.$("#exampleModal").modal('hide');
            //     this.ajouterBudgetCharge(formData,config).then(data=>{
            //         console.log(data)
            //         this.tableData=[]
            //     }).catch(erro=>{
            //         console.log(erro)
            //         this.getAllBudgetGeneral()
            //         this.getAllUniteAdministrative()
            //         // router.push({ path: 'budgetGenerals' })
            //     })

            // },

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



