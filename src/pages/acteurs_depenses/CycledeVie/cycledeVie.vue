
<template>
  <div>
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->


    <!--///////////////////////////////////////// fin modal de modification //////////////////////////////-->
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <!-- <download-excel
            class="btn btn-default pull-right"
            style="cursor:pointer;"
            :fields="json_fields"
            title="Liste Types équipements"
            :data="filtre_equipement"
            name="Liste des types équipements"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel> -->
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Cycle de vie</h5>
              <div align="right">
                Search:
                <input type="search" placeholder v-model="search" />
              </div>
            </div>
            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Exercice_Bugétaire</th>
                    <th>Réference du marché</th>
                    <th>Autorité Contractante</th>
                     <th>Activité</th>
                     <th>Ligne Budgétaire</th>
                     <th>Objet</th>
                    <th>Type de marché</th>
                    <th>Type de passation</th>
                  </tr>
                </thead>
                <tbody>
                 
                </tbody>
              </table>
              
              <br/>
              
            </div>
            
          </div>

             <div class="widget-box">
     <div class="widget-content nopadding">
       <table class="table table-bordered table-striped">
         <thead>
           <tr>
             <th>Type de financement</th>
             <th>Nom(s) du/des Bailleur(s)</th>
              <th>Volet/Composante</th>
              <th>Don/Emprunt/N-A</th>
              <th>Pourcentage(%)</th>
             <th>Montant HT FCFA</th>
             <th>Montant TTC FCFA</th>
             <th>Montant total du marché</th>
             <th>Agent CF de suivi</th>
           </tr>
         </thead>
         <tbody>
          
         </tbody>
       </table>
       
       <br/>
       
     </div>
     
   </div>
               <div class="widget-box">
    <div class="widget-content nopadding">
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Etat de Contractualisation</th>
            <th>Type de reference de la procédure </th>
             <th>Nature des prix</th>
             <th>Date d'ouverture(OF/OT)</th>
             <th>Montant confidentiel FCFA</th>
            <th>Date de Jugement(OF/OT)</th>
            <th>Date d'envoi Demande d'ANO</th>
            <th>Date retour Demande d'ANO</th>
            <th>Resultat et Observation de l'ANO</th>
            <th>Date d'attribution definitive</th>
          </tr>
        </thead>
        <tbody>
         
        </tbody>
      </table>
      
      <br/>
      
    </div>
    
  </div>
              <div class="widget-box">
    <div class="widget-content nopadding">
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Entreprise Attributaire</th>
            <th>N° Compte Contribuable</th>
             <th>Autorité Approbatrice du Marché/Contrat</th>
             <th>Date d'approbation</th>
             <th>Numéro de Marché</th>
            <th>Cautionnement(%,HT,TTC)</th>
            <th>Retenue Garantie(%,HT,TTC)</th>
            <th>Avance de Demarrage(%,HT,TTC)</th>
            <th>Date de Notification de l'ordre de service</th>
            <th>Date Prévisionnelle de demarrage des travaux</th>
          </tr>
        </thead>
        <tbody>
         
        </tbody>
      </table>
      
      <br/>
      
    </div>
    
  </div>
              <div class="widget-box">
    <div class="widget-content nopadding">
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Délai d'exécution</th>
            <th>Date Prévisionnelle de fin des travaux</th>
             <th>Durée Totale de la Contractualisation</th>
             <th>Situation D'exécution</th>
             <th>DATE Effective de Démarrage des travaux</th>
            <th>Remboursement avance de Demarrage(%,HT,TTC)</th>
            <th>Niveau d'engagement du Cautionnement</th>
            <th>Niveau d'engagement de la retenue de Garantie</th>
          </tr>
        </thead>
        <tbody>
         
        </tbody>
      </table>
      
      <br/>
      
    </div>
    
  </div>
      <div class="widget-box">
     <div class="widget-content nopadding">
       <table class="table table-bordered table-striped">
         <thead>
           <tr>
             <th>Avenant(s) Approuve(s)</th>
             <th>Nombre:1ou2ou3(%,HT,TTC)</th>
              <th>Montant Total Du Marché après Avenant(s)FCFA(HT,TTC)</th>
           </tr>
         </thead>
         <tbody>
          
         </tbody>
       </table>
       
       <br/>
       
     </div>
     
   </div>
      <div class="widget-box">
  <div class="widget-content nopadding">
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Decompte(s) Visé(s)</th>
          <th>Date</th>
           <th>DERNIER / NUMERO:(%,HT,TTC) </th>
           <th>CUMUL / NOMBRE :(%,HT,TTC) </th>
        </tr>
      </thead>
      <tbody>
       
      </tbody>
    </table>
    
    <br/>
    
  </div>
  
</div>
      <div class="widget-box">
     <div class="widget-content nopadding">
       <table class="table table-bordered table-striped">
         <thead>
           <tr>
             <th>SITUATION FINANCIERE DU MARCHE/CONTRAT</th>
             <th>Date</th>
              <th>TOTAL PAIEMENT  EXECUTE(%,HT,TTC)</th>
              <th>PART ETAT(%,HT,TTC)</th>
              <th>PART BAILLEUR(%,HT,TTC)</th>
             <th>TOTAL RESTE A PAYER</th>
             <th>PART ETAT(%,HT,TTC)</th>
             <th>PART BAILLEUR(%,HT,TTC)</th>
             <th>DATE DE FIN D'EXECUTION DES TRAVAUX</th>
             <th>DATE RECEPTION PROVISOIRE</th>
             <th>DATE RECEPTION DEFINITIVE</th>
             <th>AUTRES</th>
           </tr>
         </thead>
         <tbody>
          
         </tbody>
       </table>
       
       <br/>
       
     </div>
     
   </div>
      <div class="widget-box">
     <div class="widget-content nopadding">
       <table class="table table-bordered table-striped">
         <thead>
           <tr>
             <th>OBJECTIFS DU MARCHE/CONTRAT / LIVRABLES ATTENDUS </th>
             <th>OBSERVATIONS</th>
              <th>Validation Contrôleur Financier</th>

           </tr>
         </thead>
         <tbody>
          
         </tbody>
       </table>
       
       <br/>
       
     </div>
     
   </div>
        </div>
      </div>
    </div>

    <fab :actions="fabActions" @cache="afficherModalAjouterTitre" main-icon="apps" bg-color="green"></fab>
 <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterTitre()">Open</button>
      <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
<!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
<notifications  />
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name:'lot',
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }

        // {
        //   name: "alertMe",
        //   icon: "add_alert",
        //   class: ""
        // }
      ],
    //   json_fields: {
    //     CODE: "code",
    //     LIBELLE: "libelle"
    //   },

      formData: {
        
      },
      editEquipement: {
     
      },
      search: ""
    };
  },

  computed: {
     ...mapGetters("bienService", []),
    // filtre_equipement() {
    //   const st = this.search.toLowerCase();
    //   return this.equipements.filter(type => {
    //     return (
          
    //       type.libelle.toLowerCase().includes(st)
    //     );
    //   });
    // }
  },
  methods: {
    ...mapActions("bienService", [
     
    ]),
    //afiicher modal ajouter
    afficherModalAjouterTitre() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    
    // afficher modal de modification
    // afficherModalModifierFamille(index) {
    //   this.$("#modificationModal").modal({
    //     backdrop: "static",
    //     keyboard: false
    //   });

    //   this.editEquipement = this.equipements[index];
    // },
    // fonction pour vider l'input modification
    
    alert() {
      console.log("ok");
    },
     ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>

