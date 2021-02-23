numeroOrdrePiece
<template>

<div class="container-fluid">
      <hr />
      <div  align="left" style="cursor:pointer;">
    <button class="btn btn-danger" @click.prevent="pagePrecedent">Page Précédente</button>
    
        </div>
      <div class="row-fluid">
        <div class="span12">
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Ajouter Liquidation</h5>
              <!-- <div align="right">
                Search:
                <input type="search" placeholder />
              </div>-->
            </div>

            <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#INFORMATIONUA">INFORMATION</a>
                      </li>
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                    <div id="INFORMATIONUA" class="tab-pane active">
                  <table class="table table-bordered table-striped" style="border:1px solid #000">
                      <tr>
                         <td>
              <div class="control-group">
                <label class="control-label">Numéro Demande</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData5.numeroDemande"
                   v-on:keyup="rechercheMembreCojo()"
                    class="span"
                     
                  />
                </div>
              </div>
              
            </td>
                          <td>
              <div class="control-group">
                <label class="control-label">Numéro de Liquidation</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="formaLiquidation.numero_liquidation"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Date de Liquidation</label>
                <div class="controls">
                  <input
                    type="date"
                    style="border:1px solid #000"
                    v-model="formaLiquidation.date_liquidation"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Imputation</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   :value="imputationBudgetaire(formData5.ligne_id)"
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
            </td>
                      </tr>
                  </table>
          <table class="table table-bordered table-striped" style="border:1px solid #000">
             
                    <tr>
                         <td>
              <div class="control-group">
                <label class="control-label">Ministère/Institution</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   :value="nomSection(formData5.section_id)"
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
            </td>
           
                 <td colspan="2">
              <div class="control-group">
                <label class="control-label">Programme/Dotation</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   :value="libelle_Programme(formData5.prog_id)"
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
           
            </td>
                    </tr>
                    <tr>
                        <td>
              <div class="control-group">
                <label class="control-label">Action</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   :value="libelle_Action(formData5.action_id)"
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
            </td>
             <td colspan="2">
              <div class="control-group">
                <label class="control-label">Activité</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   :value="libelle_Action(formData5.activite_id)"
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
            </td>
                    </tr>
                    <tr>
                        <td>
              <div class="control-group">
                <label class="control-label">Unite administrative</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   :value="libelleUniteAdministrative(formData5.ua_id)"
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
            </td>
             <td colspan="">
              <div class="control-group">
                <label class="control-label">Nature de depense</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                  :value="libelleGrandNature(formData5.nature_id)"
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
            </td>
            <td colspan="">
              <div class="control-group">
                <label class="control-label">Unité de cout</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                  v-model="formData5.odjetDepense"
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
            </td>
                    </tr>
                   
          </table>
                 <table class="table table-bordered table-striped" style="border:1px solid #000">
                      <tr>
                          <td>
              <div class="control-group">
                <label class="control-label">Réference engagement</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   
                    class="span"
                     readonly
                  />
                </div>
              </div>
              
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Montant engagé</label>
                <div class="controls">
                  <!-- <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData5.montant_engage"
                    class="span"
                    readonly
                  /> -->
                  <money v-model="formData5.montant_engage" readOnly style="text-align:left;color:red"  class="span"></money>
                </div>
              </div>
              
            </td>
                   
            <td colspan="2">
              <div class="control-group">
                <label class="control-label">Type de Procedure</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData5.typeProcedure_id"
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
            </td>
                      </tr>
                      
                  </table>  
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#INFORMATIONUA">CREANCIER</a>
                      </li>
                    </ul>
                  </div>
                 <table class="table table-bordered table-striped" style="border:1px solid #000">
             
                    <tr>
                         <td>
              <div class="control-group">
                <label class="control-label">Numéro cc</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData5.Numero_cc"
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
            </td>
               <td>
              <div class="control-group">
                <label class="control-label">Nom</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData5.nomEntreprise"
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
            </td>
             <td colspan="">
              <div class="control-group">
                <label class="control-label">Adresse</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                    v-model="formData5.adresse"
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
            </td>
                <td colspan="">
              <div class="control-group">
                <label class="control-label">Montant Liquidé</label>
                <div class="controls">
                  <!-- <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData5.montant_engage"
                    class="span"
                    readonly
                  /> -->
                   <money v-model="formData5.montant_engage" readOnly  style="text-align:left;color:red"  class="span"></money>
                </div>
              </div>
              
           
            </td>
                    </tr>
                    <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#INFORMATIONUA">ODJET DE LA DEPENSE</a>
                      </li>
                    </ul>
                  </div>
                    <tr>
                    
             
            <td colspan="4">
              <div class="control-group">
                <label class="control-label">Objet de la depense</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData5.odjetDepense"
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
            </td>
                    </tr>
                    <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#INFORMATIONUA">REGLEMENT</a>
                      </li>
                    </ul>
                  </div>
                    <tr>
                        
             <td colspan="">
              <div class="control-group">
                <label class="control-label">Mode de réglement</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                  :value="libelleModePaiement(formData5.mode_paiement_id)"
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
            </td>
            <td colspan="">
              <div class="control-group">
                <label class="control-label">Domiciliation bancaire</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                  
                  :value="libellebanqueEntreprise(banqueEntreprise(IdEntreprise(formData5.numeroDemande)))"
                    class="span"
                   readonly
                  />
                </div>
              </div>
              
            </td>
            <td colspan="2">
              <div class="control-group">
                <label class="control-label">Numéro de compte</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                  :value="CompteEntreprise(IdEntreprise(formData5.numeroDemande))"
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
            </td>
                    </tr>
                    <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#INFORMATIONUA">RENSEIGNEMENTS ANNEXES</a>
                      </li>
                    </ul>
                  </div>
                   <tr>
                       <td colspan="4">
                           <label class="control-label" style="font-size:14px;font-weight:bold;text-align:center">Pièce Justificative (Proforma)</label>

<table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     <th style="font-size:14px;font-weight:bold">Numero Ordre</th>
                    <th style="font-size:14px;font-weight:bold">Nature de la pièce</th>
                   <th style="font-size:14px;font-weight:bold">Reference</th>
                   <th style="font-size:14px;font-weight:bold">Date de la pièce</th>
                  
                    
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(type) in listePieceJustificativeProforma(formData5.numeroDemande)" :key="type.id">
                    <td style="width:20%,text-align:center"
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{type.numero_ordre || 'Non renseigné'}}</td>
                    <td style="width:30%"
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{listePieceJustifica(type.libelle) || 'Non renseigné'}}</td>
                    <td style="width:20%"
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{type.reference || 'Non renseigné'}}</td>
                    <td style="width:15%"
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{formaterDate(type.date_piece) || 'Non renseigné'}}</td>

                    
                  </tr>
                </tbody>
              </table>

<label class="control-label" style="font-size:14px;font-weight:bold;text-align:center">Pièce Justificative (definitive)</label>

                           <div class="" align="right">
                   <button 
                        @click.prevent="afficherModalAjouterService"
                       class="btn  btn-success">
                <span >  <i class="icon icon-plus-sign">Ajouter pièces definitive</i></span>
       
                </button>

                   </div>
                    
 <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <tr>
                     <th style="font-size:14px;font-weight:bold">Numero Ordre</th>
                    <th style="font-size:14px;font-weight:bold">Nature de la pièce</th>
                   <th style="font-size:14px;font-weight:bold">Reference</th>
                   <th style="font-size:14px;font-weight:bold">Date de la pièce</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(type) in listePieceJustificativedefinitive(formData5.numeroDemande)" :key="type.id">
                    <td style="width:20%,text-align:center"
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{type.numero_ordre || 'Non renseigné'}}</td>
                    <td style="width:30%"
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{listePieceJustifica(type.libelle) || 'Non renseigné'}}</td>
                    <td style="width:20%"
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{type.reference || 'Non renseigné'}}</td>
                    <td style="width:15%"
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{formaterDate(type.date_piece) || 'Non renseigné'}}</td>

                    
                  </tr>
                </tbody>
              </table>
                       </td>
                      
                   </tr>
                   <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#INFORMATIONUA">SITUATION DE CREDITS</a>
                      </li>
                    </ul>
                  </div>
                   <tr>
                       <td colspan="">
              <div class="control-group">
                <label class="control-label">Crédit autorisé</label>
                <div class="controls">
                  <!-- <input
                    type="text"
                    style="border:1px solid #000"
                  
                    class="span"
                    readonly
                  /> -->
                   <money :value="CreditAutorise(formData5.ligne_id)" readOnly  style="text-align:left;color:red"  class="span"></money>
                </div>
              </div>
              
            </td>
             <td colspan="">
              <div class="control-group">
                <label class="control-label">Cumul engagement</label>
                <div class="controls">
                  <!-- <input
                    type="text"
                    style="border:1px solid #000"
                  calculCumul
                    class="span"
                    readonly
                  /> -->
                   <money :value="CumulDemande(this.formData5.ligne_id)" readOnly  style="text-align:left;color:red"  class="span"></money>
                </div>
              </div>
              
            </td>
             <td colspan="2">
              <div class="control-group">
                <label class="control-label">Cumul des liquidations</label>
                <div class="controls">
                  <!-- <input
                    type="text"
                    style="border:1px solid #000"
                  
                    class="span"
                    readonly
                  /> -->
                  <money :value="formData5.montant_engage" readOnly  style="text-align:left;color:red"  class="span"></money>
                </div>
              </div>
              
            </td>
                   </tr>
                   <tr>
                     <td>
                       <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#INFORMATIONUA">EMETTEUR</a>
                      </li>
                    </ul>
                  </div>
                  <div class="control-group">
                <label class="control-label">Date</label>
                <div class="controls">
                  <input
                    type="date"
                    style="border:1px solid #000"
                  
                    class="span"
                    
                  />
                </div>
              </div>
               <div class="control-group">
                <label class="control-label">Nom</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                  
                    class="span"
                    
                  />
                </div>
              </div>
                     </td>
                     <td colspan="2">
                       <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#INFORMATIONUA">Visa Controleur Financier</a>
                      </li>
                    </ul>
                  </div>
                   <div class="control-group">
                <label class="control-label">Date</label>
                <div class="controls">
                  <input
                    type="date"
                    style="border:1px solid #000"
                  
                    class="span"
                   
                  />
                </div>
              </div>
               <div class="control-group">
                <label class="control-label">Nom</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                  
                    class="span"
                    
                  />
                </div>
              </div>
                     </td>
                     <td>
                       <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#INFORMATIONUA">Signature Ordonnateur</a>
                      </li>
                    </ul>
                  </div>
                   <div class="control-group">
                <label class="control-label">Date</label>
                <div class="controls">
                  <input
                    type="date"
                    style="border:1px solid #000"
                  
                    class="span"
                    
                  />
                </div>
              </div>
               <div class="control-group">
                <label class="control-label">Nom</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                  
                    class="span"
                    
                  />
                </div>
              </div>
                     </td>
                   </tr>
          </table>
                    </div>
                  </div>
<div align="right">
                    <div class="controls">
                      <div data-toggle="buttons-checkbox" class="btn-group">
                        <a
                          class="btn btn-primary"
                          @click.prevent="AjouterLiquidation"
                        >Valider</a>
                        <a
                          @click.prevent="pagePrecedent()"
                          class="btn"
                          href="#"
                        >Fermer</a>
                      </div>
                    </div>
                  </div>
                  
                  <br />
                  
                </div>
              </table>
            </div>
          </div>
        </div>
      </div>
      <notifications/>
      <div id="exampleModal" class="modal hide taille">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter pièces justificatives</h3>
      </div>
      <div class="modal-body">
      <table class="table table-bordered table-striped">
          
          <tr>
            <td>
              <div class="control-group">
            <label class="control-label">Numéro ordre</label>
            <div class="controls">
              <input
                type="text"
               :value="numeroOrdrePiece(formData5.numeroDemande)"
                class="span5"
                placeholder="Saisir le libellé"
                readonly
              />
            </div>
          </div>
            </td>
            <td>
              <div class="control-group">
                                                    <label class="control-label">Nature de la pièce <code style="color:red;font-size:16px">*</code></label>
                                                    <div class="controls">
                                                        <select v-model="formData1.libelle" class="span5" style="border:1px solid #000">
                                                            <option></option>
                                                            <option
                        v-for="typeFact in typeFactures"
                        :key="typeFact.id"
                        :value="typeFact.id"
                      >{{typeFact.libelle}}</option>
                                                        </select>
                                                        <code style="color:red;font-size:12px" v-if="formData1.libelle.length>0">Veuillez renseigner ce champ</code>
                                                    </div>
                                                </div>
              
            </td>
            <td>
              <div class="control-group">
            <label class="control-label">Reference de la pièce <code style="color:red;font-size:16px">*</code></label>
            <div class="controls">
              <input
                type="text"
                v-model="formData1.reference"
                class="span5"
                placeholder="Saisir la reference"
              />
              <code style="color:red;font-size:12px" v-if="formData1.reference==''">Veuillez renseigner ce champ</code>
            </div>
          </div>
            </td>
           
          </tr>
          <tr>
             <td>
              <div class="control-group">
            <label class="control-label">Date de la pièce <code style="color:red;font-size:16px">*</code></label>
            <div class="controls">
              <input
                type="date"
                v-model="formData1.date_piece"
                class="span5"
                
              />
               <code style="color:red;font-size:12px" v-if="formData1.date_piece==''">Veuillez renseigner ce champ</code>
            </div>
          </div>
            </td>
            <td colspan="">
              <div class="control-group">
                <label class="control-label">Pièces justificatives </label>
                <div class="controls">
                  <input
                    type="file"
                    style="border:1px solid #000"
                   @change="OnchangeFichier"
                    class="span"
                    
                  />
                  <code v-if="info_pdf">Le fichier doit etre un pdf</code>
                </div>
              </div>
              
            </td>
            <td>
                <div class="control-group">
                <label class="control-label">Exonéré</label>
                <div class="controls">
                  <select v-model="formData9.exonere" class="span5">
                  
                    <option value="0">Oui</option>
                     <option value="1">Non</option>
                  </select>
                
                </div>
              </div>
              </td>
          </tr>
           
         
      </table>
       
      </div>    
 
  <div>
    <div class="modal-footer">
      <a
                          class="btn btn-primary"
                          @click.prevent="AjoutePieceJustific" v-if="formData1.reference !='' && formData1.date_piece !=''"
                        >Valider</a>
        
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
        <div align="left">

      <button class="btn btn-info"  @click.prevent="apercuFactureliquidation">Aperçu de la facture</button>


                            </div>

   <table class="table table-bordered table-striped" >
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#BONCOMMANDE1" v-if="formData1.libelle == 1">  Facture Définitive</a>
                      </li>
                      
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                    <div id="BONCOMMANDE1" class="tab-pane active">
                  <div class="widget-content nopadding">
                      <div class="" align="right" v-if="formData1.libelle == 1">
                   <button 
                        @click.prevent="afficherModalAjouterFacture"
                       class="btn  btn-success">
                <span >  <i class="icon icon-plus-sign">Ajouter Facture</i></span>
       
                </button>
                

                   </div>
                   <div id="printMe">
              <table class="table table-bordered table-striped" v-if="formData1.libelle == 1">
                <thead>
                  <tr>
                    <th>Designation</th>
                    <th>Quantité</th>
                    <th>Prix unitaire</th>
                     <th>Total</th>
                   <th style="width:10px">Supprimer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(type, index) in listeFacturePiece(formData5.numeroDemande)" :key="type.id">
                    <td 
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{type.designation || 'Non renseigné'}}</td>
                    <td style="text-align:center;font-weight:bold;"
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{type.quantite || 'Non renseigné'}}</td>
                    <td style="text-align:center;font-weight:bold;"
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{formatageSomme(parseFloat(type.prix_unitaire)) || 'Non renseigné'}}</td>
<td style="text-align:center;font-weight:bold;"
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{formatageSomme(parseFloat(type.total_facture_ht)) || 'Non renseigné'}}</td>
                    <td>
                      <button class="btn btn-danger" @click="supprimerDossierFacture(type.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">Montant Ht</td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">{{formatageSomme(parseFloat(SommeDesDmdParBonCommande(formData5.numeroDemande)))}}</td>
                 <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">Taux</td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">{{afficherEnorere}}</td>
                  <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">Tva</td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">{{formatageSomme(parseFloat(parseFloat((SommeDesDmdParBonCommande(formData5.numeroDemande)))*afficherEnorere))}} </td>
                  <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">Montant Ttc</td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">{{formatageSomme(parseFloat(parseFloat((SommeDesDmdParBonCommande(formData5.numeroDemande)))+parseFloat((SommeDesDmdParBonCommande(formData5.numeroDemande)*afficherEnorere))))}} </td>
                  <td></td>
                  </tr>
                </tbody>
              </table>
                   </div>
              </div>
                    </div>
               
                    
                 

                      
                      
      </div>
         


       </div>
     
              </table>
  </div>
   
      
    </div>


    <div id="facturedefinitive" class="modal hide tailles">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Facture</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
             <td colspan="3">
              <div class="control-group">
            <label class="control-label">Désignation</label>
            <div class="controls">
              <input
                type="text"
                v-model="FormDataFacture.designation"
                class="span12"
                
              />
            </div>
          </div>
            </td>
          </tr>
           <tr>
           
            <td>
              <div class="control-group">
            <label class="control-label">Quantite</label>
            <div class="controls">
              <input
                type="number"
                v-model="FormDataFacture.quantite"
                class="span4"
                
              />
            </div>
          </div>
            </td>
            <td>
              <div class="control-group">
            <label class="control-label">Prix Unitaire</label>
            <div class="controls">
              <!-- <input
                type="number"
                v-model="FormDataFacture.prix_unitaire"
                class="span4"
                
              /> -->
              <money v-model="FormDataFacture.prix_unitaire"  style="text-align:left;color:red"  class="span4"></money>
            </div>
          </div>
            </td>
            <td>
              <div class="control-group">
            <label class="control-label">Total</label>
            <div class="controls">
              <!-- <input
                type="text"
                :value="MontantFactureHt"
                class="span4"
                readonly
              /> -->
               <money :value="MontantFactureHt"  style="text-align:left;color:red"  class="span4"></money>
            </div>
          </div>
            </td>
          </tr>
          
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterFacture()"
          class="btn btn-primary"
          href="#"
          
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
<div id="ApercuFactureliquidation" class="modal hide ApercuFactureliquidation1">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Aperçu Facture</h3>
      </div>
      <div>
       <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Designation</th>
                    <th>Quantité</th>
                    <th>Prix unitaire</th>
                     <th>Total</th>
                   
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(type, index) in listeFacturePiece(formData5.numeroDemande)" :key="type.id">
                    <td 
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{type.designation || 'Non renseigné'}}</td>
                    <td style="text-align:center;font-weight:bold;"
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{type.quantite || 'Non renseigné'}}</td>
                    <td style="text-align:center;font-weight:bold;"
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{formatageSomme(parseFloat(type.prix_unitaire)) || 'Non renseigné'}}</td>
<td style="text-align:center;font-weight:bold;"
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{formatageSomme(parseFloat(type.total_facture_ht)) || 'Non renseigné'}}</td>
                    
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">Montant Ht</td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">{{formatageSomme(parseFloat(SommeDesDmdParBonCommande(formData5.numeroDemande)))}}</td>
                
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">Taux</td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">{{afficherEnorere}}</td>
                  
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">Tva</td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">{{formatageSomme(parseFloat(parseFloat((SommeDesDmdParBonCommande(formData5.numeroDemande)))*afficherEnorere))}} </td>
                  
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">Montant Ttc</td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">{{formatageSomme(parseFloat(parseFloat((SommeDesDmdParBonCommande(formData5.numeroDemande)))+parseFloat((SommeDesDmdParBonCommande(formData5.numeroDemande)*afficherEnorere))))}} </td>
                  
                  </tr>
                </tbody>
              </table>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
      
      
    </div>
    </div>
</div>
</template>
<script>

    import {mapGetters,mapActions} from 'vuex'
    import {admin,dcf,noDCfNoAdmin} from "@/Repositories/Auth"
    import { formatageSomme } from "@/Repositories/Repository";
    // import {  ModelListSelect } from 'vue-search-select'
    import moment from 'moment';
   // import 'vue-search-select/dist/VueSearchSelect.css'
    export default {
components: {
    
     //ModelListSelect,
     
  },
        data() {
            return {
                fabActions: [
                    {
                        name: 'cache',
                        icon: 'add'
                    },

                ],
                liste:[],
                
          info_pdf:false,
                formData:{
                 
                },
                
                editpiece:{},
                FormDataFacture:{},
                formData5:{
                  numeroDemande:""
                },
                 formData9:{
                exonere : 1
                },
 formaLiquidation:{
                 
                },
                formData2:{
                 
                },
                formData1:{
              date_piece:"" ,
              reference:""  ,
              libelle:""
                },
                message_mandater:""
            };
        },

        created() {
          
        },
        computed: {
           admin:admin,
      dcf:dcf,
      noDCfNoAdmin:noDCfNoAdmin,
 ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
            ...mapGetters('personnelUA', ["salairesActeur","personnaliseActeurDepense","personnaFonction","afficheNombrePersonnelRecuActeNormination","fonctionBudgetaire","type_salaries","type_contrats","acte_personnels","type_acte_personnels","fonctions","grades","niveau_etudes",
                "nbr_acteur_actredite_taux","all_acteur_depense","personnaliseActeurFinContrat",
                "totalActeurEnctivite","totalActeurDepense","totalActeurAccredite","tauxActeurAccredite","totalActeurNonAccredite","affichePersonnelRecuActeNormination"]),
             ...mapGetters("uniteadministrative", ["budgetGeneral","fonctionsua","servicesua","directions","uniteZones","uniteAdministratives","getPersonnaliseBudgetGeneralParPersonnel"]),
            // ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires"]),
            ...mapGetters("parametreGenerauxBudgetaire", ["plans_budgetaires"]),
 ...mapGetters("SuiviImmobilisation", ["services"]),

...mapGetters("bienService", ["gettersDossierFacturePiece","typeFactures","gettersDemandeEngagement","gettersnomPieceJustificative","modepaiements","gettersCotationPersonnaliser","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots","villes","communes","pays","modePassations", "procedurePassations","getterDossierCandidats","marches","gettersPersonnaliserRapportJugement",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","selectionner_candidats",
                "getActeEffetFinancierPersonnaliserContrat", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
 ...mapGetters("gestionMarche", [ 'groupeVille','entreprises','banques','comptes','getCompte', 'getEntreptise','getPersonnaliseAgence','agenceBanques']),
   ...mapGetters('parametreGenerauxFonctionnelle', ['structureActe','planActe']),
...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
   ...mapGetters("parametreGenerauxAdministratif", [
      "services_gestionnaires",
      "sections",
      "taux",
      "type_Unite_admins",
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "afficheNiveauPlanProg",
      "exercices_budgetaires",
      "afficheLocalisationGeoNiveau5"
    ]),
      ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements']),

      IdEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.numero_dmd_combine == id );

      if (qtereel) {
       
           return qtereel.entreprise_id;
      }
      return ""
        }
      };
    },
    libellebanqueEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.banques.find(qtreel => qtreel.id == id );

      if (qtereel) {
       
           return qtereel.libelle;
      }
      return ""
        }
      };
    },
    banqueEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.comptes.find(qtreel => qtreel.entrepse_id == id );

      if (qtereel) {
       
           return qtereel.banq_id;
      }
      return ""
        }
      };
    },
    CompteEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.comptes.find(qtreel => qtreel.entrepse_id == id );

      if (qtereel) {
       
           return qtereel.rib;
      }
      return ""
        }
      };
    },
       anneeAmort() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },
affcherTauxEnCours() {
      
      
      const norme = this.taux.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.libelle;
      }
      return 0
    },
tauxArrondit() {
      
      const norme = this.taux.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.arrondit;
      }
      return 0
    },

montantTva() {
      const val =   parseFloat(this.totalMontantHT) * parseFloat(this.afficherEnorere2);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
afficherEnorere(){
if(this.formData9.exonere == 0){
  return 0
}
else {
  return this.tauxArrondit
  
}
},
       SommeDesDmdParBonCommande() {
      return id => {
        if (id != null && id != "") {
           return this.gettersDossierFacturePiece.filter(qtreel => qtreel.numero_dmd_engagement == id && qtreel.etat_acticle=="definitive").reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_facture_ht), 0).toFixed(0);

        }
      };
    },
      listeFacturePiece() {
      return id => {
        if (id != null && id != "") {
           return this.gettersDossierFacturePiece.filter(qtreel => qtreel.numero_dmd_engagement == id && qtreel.etat_acticle == "definitive");

      
        }
      };
    },
MontantFactureHt() {
      const val =  parseFloat(this.FormDataFacture.prix_unitaire) * parseFloat(this.FormDataFacture.quantite);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
 calculCumul() { 
      const val =  parseFloat(this.CumulDemande(this.formData5.ligne_id)) ;
      return parseFloat(val).toFixed(0);
      
    },
CumulDemande: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.gettersDemandeEngagement.filter(normeEquipe => normeEquipe.ligne_economique_id == id).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.total_general)
                        },valInite);
                    }
                }
            },


     CreditAutorise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.economique_id == id && qtreel.actived==1);

      if (qtereel) {
       
           return qtereel.Dotation_Initiale;
      }
      return ""
        }
      };
    },
      listePieceJustificativeProforma() {
      return id => {
        if (id != null && id != "") {
           return this.gettersnomPieceJustificative.filter(qtreel => qtreel.numero_dmd_combine == id && qtreel.etat_piece=="proforma");

      
        }
      };
    },
    listePieceJustificativedefinitive() {
      return id => {
        if (id != null && id != "") {
           return this.gettersnomPieceJustificative.filter(qtreel => qtreel.numero_dmd_combine == id && qtreel.etat_piece=="definitive");

      
        }
      };
    },
      libelleModePaiement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.modepaiements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
     
     listePieceJustifica() {
      return (id) => {
        if (id != null && id != "" ) {
           const qtereel = this.typeFactures.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return ""
        }
      };
    },
     
     codeUa() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.services_gestionnaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code;
      }
      return 0
        }
      };
    },
libelleGrandNature() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.grandes_natures.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
libelleUniteAdministrative() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return this.codeUa(qtereel.servicegest_id).concat("  ",qtereel.libelle);
      }
      return 0
        }
      };
    },
    imputationBudgetaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.economique_id == id);

      if (qtereel) {
        return qtereel.codebudget;
      }
      return 0
        }
      };
    },
    nomSection() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sections.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code_section.concat("  ",qtereel.nom_section);
      }
      return 0
        }
      };
    },
    libelle_Programme() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_programmes.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat("  ",qtereel.libelle);
      }
      return 0
        }
      };
    },
     numeroOrdrePiece() {
      return id => {
        if (id != null && id != "") {
           return this.gettersnomPieceJustificative.filter(qtreel => qtreel.numero_demande_engagement == id && qtreel.etat_piece=="definitive").length + 1 ;

      
        }
      };
    },
    libelle_Action() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_activites.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat("  ",qtereel.libelle);
      }
      return 0
        }
      };
    },

recupereIdDemandeEngagement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.numero_dmd_combine == id);

      if (qtereel) {
        return qtereel.id;
      }
      return 0
        }
      };
    },
        },

methods: {
    ...mapActions("bienService", [
      "ajouterPieceJustificative",
      "modifierPieceJustificative",
      "supprimerPieceJustificative",
      "ajouterDemandeEngagement",
      "ajouterDossierLiquidation",
      "modifierDossierLiquidation",
      "supprimerDossierLiquidation",
      "ajouterDossierFacture",
      "modifierDossierFacture",
      "supprimerDossierFacture"
     
    ]),
   
      ...mapActions('personnelUA', ["ajouterFichierJointDmd"]),
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

   
pagePrecedent(){
                window.history.back()
            },
rechercheMembreCojo(){
      console.log(this.formData5.numeroDemande)

      let objetMandater=this.gettersDemandeEngagement.filter(item=>item.numero_dmd_combine==this.formData5.numeroDemande)
      console.log(objetMandater)
      if(objetMandater!=undefined){
        if (objetMandater.length==1){
          let acteur= this.gettersDemandeEngagement.find(item=>item.numero_dmd_combine==this.formData5.numeroDemande)
          this.formData5.ligne_id=acteur.ligne_economique_id,
          this.formData5.section_id=acteur.section_id,
        this.formData5.prog_id=acteur.programme_id,
        this.formData5.action_id=acteur.action_id,
        this.formData5.activite_id=acteur.activite_id,
        this.formData5.ua_id=acteur.ua_id,
        this.formData5.nature_id=acteur.grd_nature_id,
        this.formData5.odjetDepense=acteur.objet_depense,
        this.formData5.montant_engage=acteur.total_general,
        this.formData5.typeProcedure_id=acteur.type_procedure_id

         this.formData5.Numero_cc=acteur.numero_cc_autre,
         this.formData5.nomEntreprise=acteur.nom_autre,
        this.formData5.adresse=acteur.adresse,
        this.formData5.mode_paiement_id=acteur.mode_paiement_id
        this.formData5.adresse=acteur.Reference_bancaires
        //   this.message_mandater=" "

        }
        else{
          // this.message_mandater="Ce Numero cc  n'existe pas dans notre base de donnée "
          this.formData5.ligne_id=""
        }
      }
      if(this.formData2.Numéro_cc_fournisseur==""){
        this.formData2.numero_cc_fournisseur_nom=""
        this.message_mandater=" "
      }
    },
    ajouterFacture(){
              // this.intitule=this.anneeAmort + "" + this.formData5.numeroDemande
              var NouveauObjet = {
        ...this.FormDataFacture,
          total_facture_ht:this.MontantFactureHt,
        	numero_dmd_engagement:this.formData5.numeroDemande,
          // numero_dmd:this.formData5.numeroDemande,
          etat_acticle:"definitive"
      };
    
      this.ajouterDossierFacture(NouveauObjet)
       this.FormDataFacture={
    designation:"",
    quantite:"0",
    prix_unitaire:"0",
    total_facture_ht:"0"
  }
            },
            AjoutePieceJustific() {
     
      var nouvelObjet = {
        
        	numero_ordre:this.numeroOrdrePiece(this.formData5.numeroDemande),
      // numero_demande_engagement:this.formData5.numeroDemande,
      numero_dmd_combine:this.formData5.numeroDemande,
      libelle:this.formData1.libelle,
      reference:this.formData1.reference,
      date_piece:this.formData1.date_piece,
      etat_piece:"definitive"
      };
    
      this.ajouterPieceJustificative(nouvelObjet)
      this.ajouterFichierJoin()
   this.$('#exampleModal').modal('hide');
       this.formData1 = {
        
       libelle:"",
      reference:"",
      date_piece:"",
      
      };
    },
AjouterLiquidation() {
         var nouvelObjet = {
        ...this.formaLiquidation,
        dmd_engagement_id: this.recupereIdDemandeEngagement(this.formData5.numeroDemande),
        
        
      };
      this.ajouterDossierLiquidation(nouvelObjet);
this.$("#modificationModal").modal('hide');
      this.formData5 = {
        numeroDemande: "",
        
      };
    },
afficherModalAjouterFacture() {
      this.$("#facturedefinitive").modal({
        backdrop: "static",
        keyboard: false
      });
    },
formatageSomme:formatageSomme,
    formaterDate(date) {
              return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },
            afficherModalListePersonnel(){
                this.$router.push({ name: 'ListeUaExecutionBudgetaire' })
            },
            afficherModalAjouterService() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
}


    };
</script>


<style scoped>
.taille{
  width: 80%;
  margin: 0 -40%;
  height: 50%;
}
.tailles{
   width: 64%;
  margin: 0 -30%;
  
}
.ApercuFactureliquidation1{
 width: 64%;
  margin: 0 -30%;
  
  border: 2px solid #000;

}
</style>
