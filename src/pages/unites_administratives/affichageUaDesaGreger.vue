<template>
<div>

        <div class="accordion" id="collapse-group">
          <div class="accordion-group widget-box">
            <div class="accordion-heading">
              <div class="widget-title"> <a data-parent="#collapse-group" href="#collapseGOne" data-toggle="collapse"> <span class="icon"><i class="icon-ok"></i></span>
                <h5>Sections</h5>
                </a> </div>
            </div>
            <div class="collapse in accordion-body" id="collapseGOne">
              <div class="widget-content"> 
                  
                    <table class="table table-bordered table-striped" id="Nature_section">
             
              <thead>
                
                <tr>
                  
                  <th>Libellé</th>
                   <th>Action</th>
                </tr>
              </thead>
              
              <tbody>
                <tr class="odd gradeX" v-for="nature_section in filtre_unite_admin" :key="nature_section.id">
                  <td @dblclick="afficherModalModifierTitre(nature_section.id)">{{afficherLibelle(nature_section.section_id) || 'Non renseigné'}}</td>
                
                  <td>



              <div class="btn-group">
              <button @click.prevent="supprimerNatureSection(nature_section.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"> Supprimer</i></span></button>
             
            </div>

                  </td>
                </tr>
              </tbody>
            </table>
             </div>
            </div>
          </div>

          <div class="accordion-group widget-box">
            <div class="accordion-heading">
              <div class="widget-title"> <a data-parent="#collapse-group" href="#collapseGTwo" data-toggle="collapse"> <span class="icon"><i class="icon-circle-arrow-right"></i></span>
                <h5>Programme</h5>
                </a> </div>
            </div>
            <div class="collapse accordion-body" id="collapseGTwo">
              <div class="widget-content"> 
                
                <table class="table table-bordered table-striped" id="">
             
              <thead>
                
                <tr>
                  
                  <th>Libellé</th>
                   <th>Action</th>
                </tr>
              </thead>
              
              <tbody>
                <tr class="odd gradeX" v-for="prog in filtre_unite_admin" :key="prog.id">
                  <td @dblclick="afficherModalModifierTitre(prog.id)">{{afficherLibellePrograme(prog.program_id) || 'Non renseigné'}}</td>
                
                  <td>



              <div class="btn-group">
              <button @click.prevent="supprimerNatureSection(prog.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"> Supprimer</i></span></button>
             
            </div>

                  </td>
                </tr>
              </tbody>
            </table>
                
                 </div>
            </div>
          </div>

          <div class="accordion-group widget-box">
            <div class="accordion-heading">
              <div class="widget-title"> <a data-parent="#collapse-group" href="#collapseGThree" data-toggle="collapse"> <span class="icon"><i class="icon-eye-open"></i></span>
                <h5>Unité operationnelle</h5>
                </a> </div>
            </div>
            <div class="collapse accordion-body" id="collapseGThree">
              <div class="widget-content"> 
                
                  <table class="table table-bordered table-striped" id="">
             
              <thead>
                
                <tr>
                  
                  <th>Libellé</th>
                   <th>Action</th>
                </tr>
              </thead>
              
              <tbody>
                <tr class="odd gradeX" v-for="progUa in filtre_unite_admin" :key="progUa.id">
                  <td @dblclick="afficherModalModifierTitre(progUa.id)">{{afficherLibelleUa(progUa.ua_id) || 'Non renseigné'}}</td>
                
                  <td>



              <div class="btn-group">
              <button @click.prevent="supprimerNatureSection(progUa.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"> Supprimer</i></span></button>
             
            </div>

                  </td>
                </tr>
              </tbody>
            </table>
                 </div>
            </div>
          </div>

           <!-- <div class="accordion-group widget-box">
            <div class="accordion-heading">
              <div class="widget-title"> <a data-parent="#collapse-group" href="#collapseGThree" data-toggle="collapse"> <span class="icon"><i class="icon-chevron-right"></i></span>
               <h5>Unité operationnelle</h5>
                </a> </div>
            </div>
            <div class="collapse accordion-body" id="collapseGThree">
              <div class="widget-content">yyyyyyyyy </div>
            </div>
          </div> -->
        </div>
        
        </div>
</template>
<script>
import {mapGetters} from 'vuex'
import {admin,dcf,cf,noDCfNoAdmin} from "../../Repositories/Auth"
export default {
    data() {
        return{

        }
        
    },
    created(){

    },
    computed:{
    //...mapGetters('parametreGenerauxAdministratif', ['natures_sections']) ,
    ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
      ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetEclate",
      "getPersonnaliseBudgetGeneral",
       "budgetGeneral"
      // "chapitres",
      // "sections"
    ]),
    
      ...mapGetters('parametreGenerauxAdministratif', ['natures_sections', 
  'sections','structures_programmes','plans_programmes']) ,

  //afficher libelle section
  afficherLibelle(){
      return id=>{
          if(id!=null && id!=""){
              let objet= this.sections.find(item=>item.id==id)
              if(objet){
                  return objet.nom_section
              }
              return 0
          }
      }
  },
  
   afficherLibelleUa(){
      return id=>{
          if(id!=null && id!=""){
              let objet= this.uniteAdministratives.find(item=>item.id==id)
              if(objet){
                  return objet.libelle
              }
              return 0
          }
      }
  },


   afficherLibellePrograme(){
      return id=>{
          if(id!=null && id!=""){
              let objet= this.plans_programmes.find(item=>item.id==id)
              if(objet){
                  return objet.libelle
              }
              return 0
          }
      }
  },

 admin:admin,
      dcf:dcf,
        cf:cf,
        noDCfNoAdmin:noDCfNoAdmin,
      filtre_unite_admin() {
        
        if(this.noDCfNoAdmin){
            let colect=[];
            
            this.getPersonnaliseBudgetGeneral.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect
        }
        return this.getPersonnaliseBudgetGeneral

    },
    },

    methods:{}
}
</script>