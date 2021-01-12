<template>
<div>
<<<<<<< HEAD



    <div class="container-fluid" style="height: 100em;">

        <div class="" >

            <div  class="row-fluid" v-if="affiche_filtre" style="margin-top: -20px">
                <div class="span1">

                </div>
                <div class="span10 " style="background: #f0c71d !important;">
                    <table class="table table-striped"  style="background: #f0c71d !important;">
                        <tbody>
                        <tr>
                            <td style="background: #f0c71d !important;" v-if="!noDCfNoAdmin">

                                <label>CF<a href="#" @click.prevent="videTypeCF()" v-if="controlleur_fin" style="color: red"><i class="fa fa-trash-o"></i></a></label>
                                <model-list-select style="background-color: #fff;"
                                                   class="wide"
                                                   :list="listeCF"
                                                   v-model="controlleur_fin"
                                                   option-value="id"
                                                   option-text="name"
                                                   placeholder="Controleur financier"
                                >

                                </model-list-select>
                            </td>
                            <td style="background: #f0c71d !important;">
                                <label>UA<a href="#" @click.prevent="videUniteAdmin()" v-if="unite_administrative_id" style="color: red"><i class="fa fa-trash-o"></i></a>
                                </label>
                                <model-list-select style="background-color: #fff;"
                                                   class="wide"
                                                   :list="filtre_unite_admin"
                                                   v-model="unite_administrative_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder="Unité administrative"
                                >

                                </model-list-select>
                            </td>
                            <td style="background: #f0c71d !important;">
                                <label>Regions <a href="#" @click.prevent="videRegions()" v-if="region" style="color: red"><i class="fa fa-trash-o"></i></a>
                                </label>
                                <model-list-select style="background-color: #fff;"
                                                   class="wide"
                                                   :list="regions"
                                                   v-model="region"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder="Regions"
                                >

                                </model-list-select>
                            </td>
                            <td style="background: #f0c71d !important;">
                                <label>Infrastructure <a href="#" @click.prevent="videInfrastructure()" v-if="infrastructure" style="color: red"><i class="fa fa-trash-o"></i></a>
                                </label>
                                <model-list-select style="background-color: #fff;"
                                                   class="wide"
                                                   :list="getterInfrastrucure"
                                                   v-model="infrastructure"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder="Infrastructure"
                                >
                                

                                </model-list-select>
                            </td>
                            <td style="background: #f0c71d !important;">
                                <label>Type Marché  <a href="#" @click.prevent="videTypeMarche()" v-if="type_marche" style="color: red"><i class="fa fa-trash-o"></i></a>
                                </label>
                                <model-list-select style="background-color: #fff;"
                                                   class="wide"
                                                   :list="typeMarches"
                                                   v-model="type_marche"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder="Type Marche"
                                >

                                </model-list-select>
                            </td>

                        </tr>

                        </tbody>
                    </table>

                </div>


            </div>

<hr v-if="affiche_filtre">
            <button class="btn btn-default" @click="generateReport()"><i class="icon-print"></i></button>
            <table class="table  table-striped" >
                <tbody >
                <tr>
                    <td style="background: #b4c6e7;border: 5px solid #fff; font-size: 15px"><b>TOTAL MARCHES PLANIFIES - EXERCICE {{anneeAmort}}</b></td>
                    <td style="background: #b4c6e7;border: 5px solid #fff;text-align: center !important;font-size: 15px"><b>{{nombreTotalMarche}} Marchés</b></td>
                    <td style="background: #b4c6e7;border: 5px solid #fff;text-align: center !important;font-size: 15px"><b>{{formatageSomme(montantTotaleMarchePlanifieContratuel)}} TTC</b></td>
                    <td style="background: #b4c6e7;border: 5px solid #fff;text-align: center !important;"><button class="btn btn-link" style="font-size: 15px;color: #000;" ><b>VOIR PPM</b></button></td>
                    <td style="background: #b4c6e7;border: 5px solid #fff;text-align: center !important;"><button class="btn btn-link" style="font-size: 15px;color: #000;" @click="click_cartographie()"><b>VOIR SITUATION GEOGRAPHIQUE</b></button></td>
<!--                    <td> <button class="btn btn-default" @click="generateReport()"><i class="icon-print"></i></button></td>-->
                </tr>
                <tr>
                    <td style="background: #b4c6e7;border: 5px solid #fff;font-size: 15px"><b>TOTAL MARCHES HORS PPM - EXERCICE {{anneeAmort}}</b></td>
                    <td style="background: #b4c6e7;border: 5px solid #fff;text-align: center !important;font-size: 15px"><b>0 Marché</b></td>
                    <td style="background: #b4c6e7;border: 5px solid #fff;text-align: center !important;font-size: 15px"><b>{{formatageSomme(0)}} TTC</b> </td>

                    <td style="background: #b4c6e7;border: 5px solid #fff;text-align: center !important;"><button class="btn btn-link" style="font-size: 15px;color: #000;"><b>DETAIL</b></button></td>
                    <td style="background: #b4c6e7;border: 5px solid #fff;text-align: center !important;"><button class="btn btn-link" style="font-size: 15px;color: #000;"><b>VOIR SITUATION GEOGRAPHIQUE</b></button></td>
                </tr> <tr>
                    <td style="background: #2f5396;border: 5px solid #fff;color: #fff;font-size: 15px"><b>TOTAL GENERAL MARCHES - EXERCICE {{anneeAmort}}</b></td>
                    <td style="background: #2f5396;border: 5px solid #fff;color: #fff;text-align: center !important;font-size: 15px"><b>{{nombreTotalMarche}} Marchés</b></td>
                    <td style="background: #2f5396;border: 5px solid #fff;color: #fff;text-align: center !important;font-size: 15px"><b>{{formatageSomme(montantTotaleMarchePlanifieContratuel)}} TTC</b></td>
                    <!--<td v-if="status_marches==2">{{formatageSomme(montantApprouvePasUA(unite.id))}}</td>-->
                    <td style="background: #fff;border: 5px solid #fff;color: #fff;text-align: center !important;"></td>
                    <td style="background: #2f5396;border: 5px solid #fff;color: #fff;text-align: center !important;"><button style="font-size: 15px; color: #fff;" class="btn btn-link" @click="click_cartographie()"><b>VOIR SITUATION GEOGRAPHIQUE</b></button></td>
                </tr>

                </tbody> 
            </table>



            <nav aria-label="breadcrumb" class="main-breadcrumb" style="background: #806000">
                <ol class="breadcrumb" style="background: #806000 !important">
                    <li class="breadcrumb-item" style="color: #fff !important;" > INFORMATIONS GENERALES - MARCHES/CONTRATS&nbsp;&nbsp;&nbsp;&nbsp; / </li>
                    <li class="breadcrumb-item" style="color: #fff !important;" v-if="unite_administrative_id"> Situation {{nomUniteAdmin(unite_administrative_id)}} des marchés &nbsp;&nbsp;&nbsp;&nbsp; /</li>
                    <li class="breadcrumb-item"  style="color: #fff !important;" v-if="region"> Région {{nomRegions(region)}} &nbsp;&nbsp;&nbsp;&nbsp; /</li>
                    <li class="breadcrumb-item"  style="color: #fff !important;" v-if="infrastructure"> Infrastructutre {{nomInfrastructure(infrastructure)}} &nbsp;&nbsp;&nbsp;&nbsp; /</li>

                    <li class="breadcrumb-item"  style="color: #fff !important;" v-if="type_marche"> Type Marche {{nomTypeMarche(type_marche)}} &nbsp;&nbsp;&nbsp;&nbsp; /</li>
                    <li class="breadcrumb-item"  style="color: #fff !important;" v-if="info_status_marche" v-html="info_status_marche">  </li>
                    <!--<li class="breadcrumb-item"> <button class="btn btn-info" @click="print"><i class="icon-print"></i></button></li>-->
                </ol>
            </nav>




            <div class="">




                <div class="row-fluid" style="" id="printMe">
                    <div class="span2 vld-parent" style="width: 170px;margin-left: -3px !important;border-right: 10px solid #f9f9f9">
                        <loading :active.sync="isLoading"
                                 :can-cancel="true"
                                 :on-cancel="onCancel"
                                 :is-full-page="fullPage"></loading>
                        <div class="card-box bg-attente-contratualisation-hors-alert" style="height: 90px !important; cursor: grab !important;" @click="listeMarcheStatus('planifie')">
                            <div class="inner">
                                <p> <b> En attente de contractualisation
                                </b></p>
                                <h3>  </h3>

                            </div>
                            <div class="icon3">
                                {{nombreMarcheParStatue("planifie")}} Marché(s) / {{pourcentageMarchePasStatus("planifie")}}%
                            </div>
                            <div class="icon2">

                                {{formatageSomme(montantPasStatusContratPlanifie("planifie"))}} / {{pourcentageMontantPrevuePasSatus("planifie")}}%
                            </div>

                        </div>
                    </div>

                    <div class="span2 vld-parent" style="width: 170px;margin-left: -0.9px !important;border-right: 10px solid #f9f9f9">

                        <loading :active.sync="isLoading"
                                 :can-cancel="true"
                                 :on-cancel="onCancel"
                                 :is-full-page="fullPage"></loading>
                        <div @click="listeMarcheStatus(8)" class="card-box bg-attente-contratualisation-avec-alert" style="height: 90px !important; cursor: grab !important;">
                            <div class="inner">
                                <p><b>En attente de
                                    contractualisation
                                    Hors délai</b> </p>

                            </div>

                            <div class="icon3">

                                {{nombreMarcheParStatue(8)}} Marché(s) / {{pourcentageMarchePasStatus(8)}}%
                            </div>
                            <div class="icon2">

                                {{formatageSomme(montantPasStatusContratPlanifie(8))}} / {{pourcentageMontantPrevuePasSatus(8)}}%
                            </div>


                        </div>
                    </div>
                    <div class="span2 vld-parent" style="width: 170px;margin-left: -0.9px !important;border-right: 10px solid #f9f9f9">
                        <loading :active.sync="isLoading"
                                 :can-cancel="true"
                                 :on-cancel="onCancel"
                                 :is-full-page="fullPage"></loading>
                        <div @click="listeMarcheStatus(1)" class="card-box bg-en-contratualisation" style="height: 90px !important; cursor: grab !important;">
                            <div class="inner">
                                <p><b>En contractualisation</b>   </p>

                            </div>
                            <div class="icon3">
                                {{nombreMarcheParStatue(1)}} Marché(s) / {{pourcentageMarchePasStatus(1)}}%
                            </div>
                            <div class="icon2">
                                                               {{formatageSomme(montantPasStatusContratPlanifie(1))}}/{{pourcentageMontantPrevuePasSatus(1)}}%
                            </div>

                        </div>
                    </div>
                    <div class="span2 vld-parent" style="width: 170px; margin-left: -0.9px !important;border-right: 10px solid #f9f9f9">
                        <loading :active.sync="isLoading"
                                 :can-cancel="true"
                                 :on-cancel="onCancel"
                                 :is-full-page="fullPage"></loading>
                        <div @click="listeMarcheStatus(9)" class="card-box bg-en-contratualisation-hort-delais" style="height: 90px !important; cursor: grab !important;">
                            <div class="inner">
                                <p><b>En contractualisation
                                    Hors délai</b> </p>

                            </div>
                            <div class="icon3">

                                {{nombreMarcheParStatue(9)}} Marché(s) / {{pourcentageMarchePasStatus(9)}}%
                            </div>
                            <div class="icon2">

                                {{formatageSomme(montantPasStatusContratPlanifie(9))}} / {{pourcentageMontantPrevuePasSatus(9)}}%
                            </div>

                        </div>
                    </div>
                    <div class="span2 vld-parent" style="width: 170px; margin-left: -0.9px !important;border-right: 10px solid #fff">
                        <loading :active.sync="isLoading"
                                 :can-cancel="true"
                                 :on-cancel="onCancel"
                                 :is-full-page="fullPage"></loading>
                        <div @click="listeMarcheStatus(2)" class="card-box bg-en-execution" style="height: 90px !important; cursor: grab !important;">
                            <div class="inner">
                                <p><b>En exécution</b> </p>

                            </div>
                            <div class="icon3">

                                {{nombreMarcheParStatue(2)}} Marché(s) / {{pourcentageMarchePasStatus(2)}}%
                            </div>
                            <div class="icon2">

                                {{formatageSomme(montantPasStatusExecutionAcheve(2))}} / {{pourcentageMontantExcuteAcheve(2)}}%
                            </div>

                        </div>
                    </div>
                    <div class="span2 vld-parent" style="width: 170px; margin-left: -0.9px !important;border-right: 10px solid #fff">
                        <loading :active.sync="isLoading"
                                 :can-cancel="true"
                                 :on-cancel="onCancel"
                                 :is-full-page="fullPage"></loading>
                        <div @click="listeMarcheStatus(10)" class="card-box bg-en-execution-horts-delais" style="height: 90px !important; cursor: grab !important;">
                            <div class="inner">
                                <p><b>En Exécution Hors délai</b> </p>

                            </div>
                            <div class="icon3">

                                {{nombreMarcheParStatue(10)}} Marché(s) / {{pourcentageMarchePasStatus(10)}}%
                            </div>
                            <div class="icon2">

                                {{formatageSomme(montantPasStatusExecutionAcheve(10))}} / {{pourcentageMontantExcuteAcheve(10)}}%
                            </div>

                        </div>
                    </div>
                    <div class="span2 vld-parent" style="width: 170px; margin-left: -0.9px !important;border-right: 10px solid #fff">
                        <loading :active.sync="isLoading"
                                 :can-cancel="true"
                                 :on-cancel="onCancel"
                                 :is-full-page="fullPage"></loading>
                        <div @click="listeMarcheStatus(11)" class="card-box bg-acheve-hors-delais" style="height: 90px !important; cursor: grab !important;">
                            <div class="inner">
                                <p><b>Achevés dans le délai</b> </p>

                            </div>
                            <div class="icon3">

                                {{nombreMarcheParStatue(11)}} Marché(s) / {{pourcentageMarchePasStatus(11)}}%
                            </div>
                            <div class="icon2">
                                {{formatageSomme(montantPasStatusExecutionAcheve(11))}} / {{pourcentageMontantExcuteAcheve(11)}}%

                            </div>

                        </div>
                    </div>

                    <div class="span2 vld-parent" style="width: 170px ;margin-left: -0.9px !important;border-right: 10px solid #fff">
                        <loading :active.sync="isLoading"
                                 :can-cancel="true"
                                 :on-cancel="onCancel"
                                 :is-full-page="fullPage"></loading>
                        <div @click="listeMarcheStatus(12)" class="card-box bg-acheve-delais" style="height: 90px !important; cursor: grab !important;">
                            <div class="inner">
                                <p> Achevés Hors délai </p>

                            </div>
                            <div class="icon3">

                                {{nombreMarcheParStatue(12)}} Marché(s) / {{pourcentageMarchePasStatus(12)}}%
                            </div>
                            <div class="icon2">

                                {{formatageSomme(montantPasStatusExecutionAcheve(12))}} / {{pourcentageMontantExcuteAcheve(12)}}%
                            </div>

                        </div>
                    </div>
                    <div class="span2 vld-parent" style="width: 170px; margin-left: -0.9px !important;border-right: 10px solid #fff ">
                        <loading :active.sync="isLoading"
                                 :can-cancel="true"
                                 :on-cancel="onCancel"
                                 :is-full-page="fullPage"></loading>
                        <div @click="listeMarcheStatus(7)" class="card-box bg-en-souffrance" style="height: 90px !important; cursor: grab !important;">
                            <div class="inner">
                                <p> En souffrance </p>

                            </div>
                            <div class="icon3">

                                {{nombreMarcheParStatue(7)}} Marché(s) / {{pourcentageMarchePasStatus(7)}}%
                            </div>
                            <div class="icon2">

                                {{formatageSomme(montantPasStatusExecutionAcheve(7))}} / {{pourcentageMontantExcuteAcheve(7)}}%
                            </div>

                        </div>
                    </div>

                    <div class="span2 vld-parent" style="width: 170px; margin-left: -0.9px !important;border-right: 10px solid #fff ">
                        <loading :active.sync="isLoading"
                                 :can-cancel="true"
                                 :on-cancel="onCancel"
                                 :is-full-page="fullPage"></loading>
                        <div  class="card-box bg-en-avenant" style="height: 90px !important; cursor: grab !important;">
                            <div class="inner">
                                <p> Avenant </p>

                            </div>
                            <div class="icon3">

                                {{nbreAvenant}}
                            </div>
                            <div class="icon2">
                                {{formatageSomme(montantAvenant)}} / {{pourcentageMontantAvenant}}%
                            </div>

                        </div>
                    </div>

                </div>


                <div class="row-fluid" style="margin: 55px 2px 100px 4px">
                    <div class="span4" style="border: 2px dotted #ffffff;">
                        <apexchart type="pie" width="350" :options="chartOptions" :series="dataPourcentage"></apexchart>
                    </div>
                    <div class="span8" >
                        <nav aria-label="breadcrumb"  class="main-breadcrumb" v-if="info_status_marche">
                            <ol class="breadcrumb" :style="{background: getColorByStatus(status_marches)}">
                                <li class="breadcrumb-item"  v-html="info_status_marche">  </li>
                                <li class="breadcrumb-item" >
                                    <!--<a href="#" @click.prevent="afficherModalAjouterTitre()">Carte</a> -->
                                </li>

                            </ol>
                        </nav>
                        <table class="table   table-bordered table-striped" v-if="info_status_marche">
                            <thead>
                            <tr>
                                <th :style="{background: getColorByStatus(status_marches),color:'#fff'}">UA </th>
                                <th :style="{background: getColorByStatus(status_marches),color:'#fff'}">Nombre Marchés</th>
                                <th :style="{background: getColorByStatus(status_marches),color:'#fff'}">Taux Marche %</th>
                                <th :style="{background: getColorByStatus(status_marches),color:'#fff'}">Montant total</th>
                                <th :style="{background: getColorByStatus(status_marches),color:'#fff'}">TAUX FINANCIER</th>
                                <th :style="{background: getColorByStatus(status_marches),color:'#fff'}">Action</th>
                            </tr>
                            </thead>
                            <tbody >
                            <tr v-for="unite in listeUniteAdministrative" :key="unite.id">
                                <td>{{unite.libelle}}</td>
                                <td style="text-align: center !important;">{{nbrTotalMarchePasUA(unite.id)}} </td>
                                <td style="text-align: center !important;">{{tauxStatusMarchePasUniteAdministrative(unite.id)}}</td>
                                <td style="text-align: center !important;">{{formatageSomme(montantPrevuePasUA(unite.id))}}</td>
                                <td style="text-align: center !important;">{{tauxFinnancieStatusSelectionnerPasUA(unite.id,status_marches)}}</td>
                                <td>
                                    <a href="#" @click="selectionUnite(unite.id)" class="btn btn-default " title="Detail marches">
                                    <span class=""><i class="icon-folder-open"></i></span>
                                  </a>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <!--<td v-if="status_marches==2">{{formatageSomme(montantApprouvePasUA(unite.id))}}</td>-->
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <!--<td v-if="status_marches==2">{{formatageSomme(montantApprouvePasUA(unite.id))}}</td>-->
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr> <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <!--<td v-if="status_marches==2">{{formatageSomme(montantApprouvePasUA(unite.id))}}</td>-->
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr> <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <!--<td v-if="status_marches==2">{{formatageSomme(montantApprouvePasUA(unite.id))}}</td>-->
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr> <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <!--<td v-if="status_marches==2">{{formatageSomme(montantApprouvePasUA(unite.id))}}</td>-->
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr> <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <!--<td v-if="status_marches==2">{{formatageSomme(montantApprouvePasUA(unite.id))}}</td>-->
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr> <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <!--<td v-if="status_marches==2">{{formatageSomme(montantApprouvePasUA(unite.id))}}</td>-->
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>




                            </tbody>
                        </table>



                        <table class="table   table-bordered table-striped" v-if="!info_status_marche">
                            <thead>
                            <tr>
                                <th>UA </th>
                                <th>Nombre Marchés</th>
                                <th>Montant total</th>
                                <!--<th v-if="status_marches==2">Montant base</th>-->
                                <th>Taux</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody >
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <!--<td v-if="status_marches==2">{{formatageSomme(montantApprouvePasUA(unite.id))}}</td>-->
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <!--<td v-if="status_marches==2">{{formatageSomme(montantApprouvePasUA(unite.id))}}</td>-->
                                <td></td>
                                <td></td>
                            </tr> <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <!--<td v-if="status_marches==2">{{formatageSomme(montantApprouvePasUA(unite.id))}}</td>-->
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <!--<td v-if="status_marches==2">{{formatageSomme(montantApprouvePasUA(unite.id))}}</td>-->
                                <td></td>
                                <td></td>
                            </tr> <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <!--<td v-if="status_marches==2">{{formatageSomme(montantApprouvePasUA(unite.id))}}</td>-->
                                <td></td>
                                <td></td>
                            </tr> <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <!--<td v-if="status_marches==2">{{formatageSomme(montantApprouvePasUA(unite.id))}}</td>-->
                                <td></td>
                                <td></td>
                            </tr> <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <!--<td v-if="status_marches==2">{{formatageSomme(montantApprouvePasUA(unite.id))}}</td>-->
                                <td></td>
                                <td></td>
                            </tr>




                            </tbody>
                        </table>
                    </div>
                </div>




            </div>
            <!--------------------FIN TABLEAU BORD FIN ETAT MARCHE--------------->




        </div>
     </div>



    <fab v-if="affiche_boutton_filtre"
             :position="position"
            :bg-color="bgColor"
            :actions="fabActions"
             main-icon="format_indent_decrease"
             @cache="filter"

    ></fab>
    <fab v-if="!affiche_boutton_filtre"
         :position="position"
         :bg-color="bgColor"
         :actions="fabActions"
         main-icon="ballot"
         @cache="filter"

    ></fab>



    <vue-html2pdf
            :show-layout="false"
            :float-layout="true"
            :enable-download="true"
            :preview-modal="true"
            :paginate-elements-by-height="1400"
            filename="DCF"
            :pdf-quality="2"
            :manual-pagination="false"
            pdf-format="a4"
            pdf-orientation="landscape"
            pdf-content-width="1000px"

            @progress="onProgress($event)"
            @hasStartedGeneration="hasStartedGeneration()"
            @hasGenerated="hasGenerated($event)"
            ref="html2Pdf"
    >
        <section slot="pdf-content">

            <table class="table  table-striped" >
                <tbody >
                <tr>
                    <td style="background: #b4c6e7;border: 5px solid #fff; font-size: 15px"><b>TOTAL MARCHES PLANIFIES - EXERCICE {{anneeAmort}}</b></td>
                    <td style="background: #b4c6e7;border: 5px solid #fff;text-align: center !important;font-size: 15px"><b>{{nombreTotalMarche}} Marchés</b></td>
                    <td style="background: #b4c6e7;border: 5px solid #fff;text-align: center !important;font-size: 15px"><b>{{formatageSomme(montantTotaleMarchePlanifieContratuel)}} TTC</b></td>
                </tr>
                <tr>
                    <td style="background: #b4c6e7;border: 5px solid #fff;font-size: 15px"><b>TOTAL MARCHES HORS PPM - EXERCICE {{anneeAmort}}</b></td>
                    <td style="background: #b4c6e7;border: 5px solid #fff;text-align: center !important;font-size: 15px"><b>0 Marché</b></td>
                    <td style="background: #b4c6e7;border: 5px solid #fff;text-align: center !important;font-size: 15px"><b>{{formatageSomme(0)}} TTC</b> </td>


                </tr> <tr>
                    <td style="background: #2f5396;border: 5px solid #fff;color: #fff;font-size: 15px"><b>TOTAL GENERAL MARCHES - EXERCICE {{anneeAmort}}</b></td>
                    <td style="background: #2f5396;border: 5px solid #fff;color: #fff;text-align: center !important;font-size: 15px"><b>{{nombreTotalMarche}} Marchés</b></td>
                    <td style="background: #2f5396;border: 5px solid #fff;color: #fff;text-align: center !important;font-size: 15px"><b>{{formatageSomme(montantTotaleMarchePlanifieContratuel)}} TTC</b></td>
                    <!--<td v-if="status_marches==2">{{formatageSomme(montantApprouvePasUA(unite.id))}}</td>-->

                </tr>

                </tbody>
            </table>



            <nav aria-label="breadcrumb" class="main-breadcrumb" style="background: #806000">
                <ol class="breadcrumb" style="background: #806000 !important">
                    <li class="breadcrumb-item" style="color: #fff !important;" > INFORMATIONS GENERALES - MARCHES/CONTRATS&nbsp;&nbsp;&nbsp;&nbsp; / </li>
                    <li class="breadcrumb-item" style="color: #fff !important;" v-if="unite_administrative_id"> Situation {{nomUniteAdmin(unite_administrative_id)}} des marchés &nbsp;&nbsp;&nbsp;&nbsp; /</li>
                    <li class="breadcrumb-item"  style="color: #fff !important;" v-if="region"> Région {{nomRegions(region)}} &nbsp;&nbsp;&nbsp;&nbsp; /</li>
                    <li class="breadcrumb-item"  style="color: #fff !important;" v-if="infrastructure"> Infrastructutre {{nomInfrastructure(infrastructure)}} &nbsp;&nbsp;&nbsp;&nbsp; /</li>

                    <li class="breadcrumb-item"  style="color: #fff !important;" v-if="type_marche"> Type Marche {{nomTypeMarche(type_marche)}} &nbsp;&nbsp;&nbsp;&nbsp; /</li>
                    <li class="breadcrumb-item"  style="color: #fff !important;" v-if="info_status_marche" v-html="info_status_marche">  </li>
                    <!--<li class="breadcrumb-item"> <button class="btn btn-info" @click="print"><i class="icon-print"></i></button></li>-->
                </ol>
            </nav>




            <div class="">




                <div class="row-fluid" style="" >
                    <div class="span2" style="width: 170px;margin-left: -3px !important;border-right: 10px solid #f9f9f9">
                        <div class="card-box bg-attente-contratualisation-hors-alert" style="height: 90px !important; cursor: grab !important;" @click="listeMarcheStatus('planifie')">
                            <div class="inner">
                                <p> <b> En attente de contractualisation
                                </b></p>
                                <h3>  </h3>

                            </div>
                            <div class="icon3">
                                {{nombreMarcheParStatue("planifie")}} Marché(s) / {{pourcentageMarchePasStatus("planifie")}}%
                            </div>
                            <div class="icon2">

                                {{formatageSomme(montantPasStatusContratPlanifie("planifie"))}} / {{pourcentageMontantPrevuePasSatus("planifie")}}%
                            </div>

                        </div>
                    </div>

                    <div class="span2" style="width: 170px;margin-left: -0.9px !important;border-right: 10px solid #f9f9f9">
                        <div @click="listeMarcheStatus(8)" class="card-box bg-attente-contratualisation-avec-alert" style="height: 90px !important; cursor: grab !important;">
                            <div class="inner">
                                <p><b>En attente de
                                    contractualisation
                                    Hors délai</b> </p>

                            </div>

                            <div class="icon3">

                                {{nombreMarcheParStatue(8)}} Marché(s) / {{pourcentageMarchePasStatus(8)}}%
                            </div>
                            <div class="icon2">

                                {{formatageSomme(montantPasStatusContratPlanifie(8))}} / {{pourcentageMontantPrevuePasSatus(8)}}%
                            </div>


                        </div>
                    </div>
                    <div class="span2" style="width: 170px;margin-left: -0.9px !important;border-right: 10px solid #f9f9f9">
                        <div @click="listeMarcheStatus(1)" class="card-box bg-en-contratualisation" style="height: 90px !important; cursor: grab !important;">
                            <div class="inner">
                                <p><b>En contractualisation</b>   </p>

                            </div>
                            <div class="icon3">
                                {{nombreMarcheParStatue(1)}} Marché(s) / {{pourcentageMarchePasStatus(1)}}%
                            </div>
                            <div class="icon2">
                                {{formatageSomme(montantPasStatusContratPlanifie(1))}}/{{pourcentageMontantPrevuePasSatus(1)}}%
                            </div>

                        </div>
                    </div>
                    <div class="span2" style="width: 170px; margin-left: -0.9px !important;border-right: 10px solid #f9f9f9">
                        <div @click="listeMarcheStatus(9)" class="card-box bg-en-contratualisation-hort-delais" style="height: 90px !important; cursor: grab !important;">
                            <div class="inner">
                                <p><b>En contractualisation
                                    Hors délai</b> </p>

                            </div>
                            <div class="icon3">

                                {{nombreMarcheParStatue(9)}} Marché(s) / {{pourcentageMarchePasStatus(9)}}%
                            </div>
                            <div class="icon2">

                                {{formatageSomme(montantPasStatusContratPlanifie(9))}} / {{pourcentageMontantPrevuePasSatus(9)}}%
                            </div>

                        </div>
                    </div>
                    <div class="span2" style="width: 170px; margin-left: -0.9px !important;border-right: 10px solid #fff">
                        <div @click="listeMarcheStatus(2)" class="card-box bg-en-execution" style="height: 90px !important; cursor: grab !important;">
                            <div class="inner">
                                <p><b>En exécution</b> </p>

                            </div>
                            <div class="icon3">

                                {{nombreMarcheParStatue(2)}} Marché(s) / {{pourcentageMarchePasStatus(2)}}%
                            </div>
                            <div class="icon2">

                                {{formatageSomme(montantPasStatusExecutionAcheve(2))}} / {{pourcentageMontantExcuteAcheve(2)}}%
                            </div>

                        </div>
                    </div>
                    <div class="span2" style="width: 170px; margin-left: -0.9px !important;border-right: 10px solid #fff">
                        <div @click="listeMarcheStatus(10)" class="card-box bg-en-execution-horts-delais" style="height: 90px !important; cursor: grab !important;">
                            <div class="inner">
                                <p><b>En Exécution Hors délai</b> </p>

                            </div>
                            <div class="icon3">

                                {{nombreMarcheParStatue(10)}} Marché(s) / {{pourcentageMarchePasStatus(10)}}%
                            </div>
                            <div class="icon2">

                                {{formatageSomme(montantPasStatusExecutionAcheve(10))}} / {{pourcentageMontantExcuteAcheve(10)}}%
                            </div>

                        </div>
                    </div>
                    <div class="span2" style="width: 170px; margin-left: -0.9px !important;border-right: 10px solid #fff">
                        <div @click="listeMarcheStatus(11)" class="card-box bg-acheve-hors-delais" style="height: 90px !important; cursor: grab !important;">
                            <div class="inner">
                                <p><b>Achevés dans le délais</b> </p>

                            </div>
                            <div class="icon3">

                                {{nombreMarcheParStatue(11)}} Marché(s) / {{pourcentageMarchePasStatus(11)}}%
                            </div>
                            <div class="icon2">
                                {{formatageSomme(montantPasStatusExecutionAcheve(11))}} / {{pourcentageMontantExcuteAcheve(11)}}%

                            </div>

                        </div>
                    </div>

                    <div class="span2" style="width: 170px ;margin-left: -0.9px !important;border-right: 10px solid #fff">
                        <div @click="listeMarcheStatus(12)" class="card-box bg-acheve-delais" style="height: 90px !important; cursor: grab !important;">
                            <div class="inner">
                                <p> Achevés Hors délai </p>

                            </div>
                            <div class="icon3">

                                {{nombreMarcheParStatue(12)}} Marché(s) / {{pourcentageMarchePasStatus(12)}}%
                            </div>
                            <div class="icon2">

                                {{formatageSomme(montantPasStatusExecutionAcheve(12))}} / {{pourcentageMontantExcuteAcheve(12)}}%
                            </div>

                        </div>
                    </div>
                    <div class="span2" style="width: 170px; margin-left: -0.9px !important;border-right: 10px solid #fff ">
                        <div @click="listeMarcheStatus(7)" class="card-box bg-en-souffrance" style="height: 90px !important; cursor: grab !important;">
                            <div class="inner">
                                <p> En souffrance </p>

                            </div>
                            <div class="icon3">

                                {{nombreMarcheParStatue(7)}} Marché(s) / {{pourcentageMarchePasStatus(7)}}%
                            </div>
                            <div class="icon2">

                                {{formatageSomme(montantPasStatusExecutionAcheve(7))}} / {{pourcentageMontantExcuteAcheve(7)}}%
                            </div>

                        </div>
                    </div>

                </div>


                <div class="row-fluid" style="margin: 55px 2px 100px 4px">
                    <div class="span12" style="border: 2px dotted #ffffff;">
                        <apexchart type="pie" width="380" :options="chartOptions" :series="dataPourcentage"></apexchart>
                    </div>
                    <hr>
                    <div class="span12" >
                        <nav aria-label="breadcrumb"  class="main-breadcrumb" v-if="info_status_marche">
                            <ol class="breadcrumb" :style="{background: getColorByStatus(status_marches)}">
                                <li class="breadcrumb-item"  v-html="info_status_marche">  </li>
                                <li class="breadcrumb-item" >
                                    <!--<a href="#" @click.prevent="afficherModalAjouterTitre()">Carte</a> -->
                                </li>

                            </ol>
                        </nav>
                        <table class="table   table-bordered table-striped" v-if="info_status_marche">
                            <thead>
                            <tr>
                                <th>UA </th>
                                <th>Nombre Marchés</th>
                                <th>Montant total</th>
                                <th>Taux %</th>

                            </tr>
                            </thead>
                            <tbody >
                            <tr v-for="unite in listeUniteAdministrative" :key="unite.id">
                                <td>{{unite.libelle}}</td>
                                <td style="text-align: center !important;">{{nbrTotalMarchePasUA(unite.id)}} </td>
                                <td style="text-align: center !important;">{{formatageSomme(montantPrevuePasUA(unite.id))}}</td>
                                <td style="text-align: center !important;">{{tauxStatusMarchePasUniteAdministrative(unite.id)}}</td>

                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <!--<td v-if="status_marches==2">{{formatageSomme(montantApprouvePasUA(unite.id))}}</td>-->
                                <td></td>

                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <!--<td v-if="status_marches==2">{{formatageSomme(montantApprouvePasUA(unite.id))}}</td>-->
                                <td></td>

                            </tr> <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <!--<td v-if="status_marches==2">{{formatageSomme(montantApprouvePasUA(unite.id))}}</td>-->
                                <td></td>

                            </tr> <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <!--<td v-if="status_marches==2">{{formatageSomme(montantApprouvePasUA(unite.id))}}</td>-->
                                <td></td>

                            </tr> <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <!--<td v-if="status_marches==2">{{formatageSomme(montantApprouvePasUA(unite.id))}}</td>-->
                                <td></td>

                            </tr> <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <!--<td v-if="status_marches==2">{{formatageSomme(montantApprouvePasUA(unite.id))}}</td>-->
                                <td></td>

                            </tr> <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <!--<td v-if="status_marches==2">{{formatageSomme(montantApprouvePasUA(unite.id))}}</td>-->
                                <td></td>

                            </tr>




                            </tbody>
                        </table>



                        <table class="table   table-bordered table-striped" v-if="!info_status_marche">
                            <thead>
                            <tr>
                                <th>UA </th>
                                <th>Nombre Marchés</th>
                                <th>Montant total</th>
                                <!--<th v-if="status_marches==2">Montant base</th>-->
                                <th>Taux</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody >
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <!--<td v-if="status_marches==2">{{formatageSomme(montantApprouvePasUA(unite.id))}}</td>-->
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <!--<td v-if="status_marches==2">{{formatageSomme(montantApprouvePasUA(unite.id))}}</td>-->
                                <td></td>
                                <td></td>
                            </tr> <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <!--<td v-if="status_marches==2">{{formatageSomme(montantApprouvePasUA(unite.id))}}</td>-->
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <!--<td v-if="status_marches==2">{{formatageSomme(montantApprouvePasUA(unite.id))}}</td>-->
                                <td></td>
                                <td></td>
                            </tr> <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <!--<td v-if="status_marches==2">{{formatageSomme(montantApprouvePasUA(unite.id))}}</td>-->
                                <td></td>
                                <td></td>
                            </tr> <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <!--<td v-if="status_marches==2">{{formatageSomme(montantApprouvePasUA(unite.id))}}</td>-->
                                <td></td>
                                <td></td>
                            </tr> <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <!--<td v-if="status_marches==2">{{formatageSomme(montantApprouvePasUA(unite.id))}}</td>-->
                                <td></td>
                                <td></td>
                            </tr>




                            </tbody>
                        </table>
                    </div>
                </div>




            </div>
            <!--------------------FIN TABLEAU BORD FIN ETAT MARCHE--------------->


        </section>
    </vue-html2pdf>

    {{dataArrayPourcentage}}
=======
<tableau-bord-marche :sib="1"></tableau-bord-marche>
>>>>>>> 1e79d662c2c081268d3d5560c3fcc98c0f38ff4a
</div>
</template>

<script>
   // import Loading from 'vue-loading-overlay';
    // Import stylesheet
   import TableauBordMarche from "./composant/TableauBordMarche"

    export default {
        name: "TableauBordGestionMarche",
        components: {
            TableauBordMarche
        },

    }
</script>

<style scoped>
    .grdirModalActeEffet{
        width: 1200px;
        margin: 0 -530px;
        height: 550px;

    }
    .tailgrand{
        width: 50%;
        margin: 0 -25%;
    }
    .tailAvenant{
        width: 75%;
        margin: 0 -40%;
    }
    .avatar1 {

        width: 50%;
        height: 50%;

    }




    .center_image {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        height: 250px;
    }



    .main-body {
        padding: 15px;
    }
    .card {
        box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
    }

    .card {
        position: relative;
        display: flex;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-color: #fff;
        background-clip: border-box;
        border: 0 solid rgba(0,0,0,.125);
        border-radius: .25rem;
    }

    .card-body {
        flex: 1 1 auto;
        min-height: 1px;
        padding: 1rem;
    }

    .gutters-sm {
        margin-right: -8px;
        margin-left: -8px;
    }

    .gutters-sm>.col, .gutters-sm>[class*=col-] {
        padding-right: 8px;
        padding-left: 8px;
    }
    .mb-3, .my-3 {
        margin-bottom: 1rem!important;
    }

    .bg-gray-300 {
        background-color: #e2e8f0;
    }
    .h-100 {
        height: 100%!important;
    }
    .shadow-none {
        box-shadow: none!important;
    }


    .JesterBox div {
        visibility: hidden;
        position: fixed;
        top: 5%;
        right: 5%;
        bottom: 5%;
        left: 5%;
        z-index: 75;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .JesterBox div:before {
        content: '';
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 74;
        background-color: rgba(0, 0, 0, 0);
        transition: all 0.5s ease-out;
    }

    .JesterBox div img {
        position: relative;
        z-index: 77;
        max-width: 100%;
        max-height: 100%;
        margin-left: -9999px;
        opacity: 0;
        transition-property: all, opacity;
        transition-duration: 0.5s, 0.2s;
        transition-timing-function: ease-in-out, ease-out;
    }

    .JesterBox div:target { visibility: visible; }

    .JesterBox div:target:before { background-color: rgba(0, 0, 0, 0.7); }

    .JesterBox div:target img {
        margin-left: 0px;
        opacity: 1;
    }



    .card-box {
        position: relative;
        color: #fff;
        padding: 10px 10px 30px;
        margin: 10px 0px;
        height: 55px !important;
        font-size: 13px !important;
    }
    .card-box:hover {
        text-decoration: none;
        color: #f1f1f1;
    }

    .card-box .inner {
        padding: 5px 10px 0 10px;
        font-size: 5em !important;
    }
    .card-box h3 {
        font-size: 12px;
        font-weight: bold;
        margin: 0 0 8px 0;
        white-space: nowrap;

        text-align: left;
    }
    .card-box p {
        font-size: 14px;
    }
    .card-box .icon {
        position: absolute;
        top: auto;
        bottom: 3px;
        right: 3px;
        z-index: 0;
        font-size: 50px;
        color: rgba(0, 0, 0, 0.15);
    }
    .card-box .icon3 {
        position: absolute;
        top: auto;
        bottom: 35px;
        right: 3px;
        z-index: 0;
        font-size: 13px;
        color: #f2f2f2;
    }

    .card-box .icon2 {
        position: absolute;
        top: auto;
        bottom: 5px;
        right: 3px;
        z-index: 0;
        font-size: 10px;
        color: #f2f2f2;
    }

    .card-box .card-box-footer {
        position: absolute;
        left: 0px;
        bottom: 0px;
        text-align: center;
        padding: 3px 0;
        color: rgba(255, 255, 255, 0.8);
        background: rgba(0, 0, 0, 0.1);
        width: 100%;
        text-decoration: none;
    }
    .card-box:hover .card-box-footer {
        background: rgba(0, 0, 0, 0.3);
    }
    .bg-prevision{

        background-color: #3a373b !important;
    }
    .bg-blue {
        background-color: #00c0ef !important;
    }
    .bg-green {
        background-color: #00a65a !important;
    }
    .bg-orange {
        background-color: #f39c12 !important;
    }
    .bg-red {
        background-color: #d9534f !important;
    }
    .bg-base {
        background-color: #a62f59 !important;
    }
    .bg-taux {
        background-color: #ba7024 !important;
    }
    .bg-restant {
        background-color: #154282 !important;
    }


    .bg-attente-contratualisation-hors-alert {

        background-color: #8ea9db !important;
    }
    .bg-attente-contratualisation-avec-alert {
        background-color: #f4b084 !important;
    }
    .bg-en-contratualisation {
        background-color: #92d050 !important;
    }

    .bg-en-contratualisation-hort-delais {
        background-color: #652b92 !important;
    }
    .bg-en-execution {
        background-color: #d7b755 !important;
    }

    .bg-en-execution-horts-delais {
        background-color: #d36f2b !important;
    }

    .bg-acheve-hors-delais {
        background-color: #00b04f !important;
    }

    .bg-en-souffrance {
        background-color: red !important;
    }
    .bg-en-avenant{
        background-color: #ff6c1d !important;
    }
    .bg-acheve-delais {
        background-color: #757171 !important;
    }
    .bg-horts-ppm{
        background-color: #ffb62f !important;
    }

    .red {
        color: #fff !important;
        background-color: #892e6a !important;
    }

    .red_type_marche {
        color: #fff !important;
        background-color: #892e6a !important;
    }










    .card {
        background-color: #fff;
        border-radius: 10px;
        border: none;
        position: relative;
        margin-bottom: 30px;
        box-shadow: 0 0.46875rem 2.1875rem rgba(90,97,105,0.1), 0 0.9375rem 1.40625rem rgba(90,97,105,0.1), 0 0.25rem 0.53125rem rgba(90,97,105,0.12), 0 0.125rem 0.1875rem rgba(90,97,105,0.1);
    }
    .l-bg-cherry {
        background: linear-gradient(to right, #493240, #f09) !important;
        color: #fff;
    }

    .l-bg-blue-dark {
        background: linear-gradient(to right, #373b44, #4286f4) !important;
        color: #fff;
    }

    .l-bg-green-dark {
        background: linear-gradient(to right, #0a504a, #38ef7d) !important;
        color: #fff;
    }

    .l-bg-orange-dark {
        background: linear-gradient(to right, #a86008, #ffba56) !important;
        color: #fff;
    }

    .card .card-statistic-3 .card-icon-large .fas, .card .card-statistic-3 .card-icon-large .far, .card .card-statistic-3 .card-icon-large .fab, .card .card-statistic-3 .card-icon-large .fal {
        font-size: 110px;
    }

    .card .card-statistic-3 .card-icon {
        text-align: center;
        line-height: 50px;
        margin-left: 15px;
        color: #000;
        position: absolute;
        right: -5px;
        top: 20px;
        opacity: 0.1;
    }

    .l-bg-cyan {
        background: linear-gradient(135deg, #289cf5, #84c0ec) !important;
        color: #fff;
    }

    .l-bg-green {
        background: linear-gradient(135deg, #23bdb8 0%, #43e794 100%) !important;
        color: #fff;
    }

    .l-bg-orange {
        background: linear-gradient(to right, #f9900e, #ffba56) !important;
        color: #fff;
    }

    .l-bg-cyan {
        background: linear-gradient(135deg, #289cf5, #84c0ec) !important;
        color: #fff;
    }





    #footer {
        position:relative;
        height:20px;
        width:100%;
        background:transparent;

    }



    .card-1 {
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    }

    /*.card-1:hover {*/
        /*box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);*/
    /*}*/

    .card-2 {
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }

    .card-3 {
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    }

    .card-4 {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }

    .card-5 {
        box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    }






    /*
 CSS for the main interaction
*/
    .tabset1 > input[type="radio"] {
        position: absolute;
        left: -200vw;
    }

    .tabset1 .tab-panel {
        display: none;
    }

    .tabset1 > input:first-child:checked ~ .tab-panels > .tab-panel:first-child,
    .tabset1 > input:nth-child(3):checked ~ .tab-panels > .tab-panel:nth-child(2),
    .tabset1 > input:nth-child(5):checked ~ .tab-panels > .tab-panel:nth-child(3),
    .tabset1 > input:nth-child(7):checked ~ .tab-panels > .tab-panel:nth-child(4),
    .tabset1 > input:nth-child(9):checked ~ .tab-panels > .tab-panel:nth-child(5),
    .tabset1 > input:nth-child(11):checked ~ .tab-panels > .tab-panel:nth-child(6) {
        display: block;
    }



    .tabset1 > label {
        position: relative;
        display: inline-block;
        padding: 15px 15px 25px;
        border: 1px solid transparent;
        border-bottom: 0;
        cursor: pointer;
        font-weight: 600;
    }

    .tabset1 > label::after {
        content: "";
        position: absolute;
        left: 15px;
        bottom: 10px;
        width: 22px;
        height: 4px;
        background: #8d8d8d;
    }

    .tabset1 > label:hover,
    .tabset1 > input:focus + label {
        color: #06c;
    }

    .tabset1 > label:hover::after,
    .tabset1 > input:focus + label::after,
    .tabset1 > input:checked + label::after {
        background: #06c;
    }

    .tabset1 > input:checked + label {
        border-color: #ccc;
        border-bottom: 1px solid #fff;
        margin-bottom: -1px;
    }

    .tab-panel {
        padding: 30px 0;
        border-top: 1px solid #ccc;
    }



    .tabset1 {
        max-width: 65em;
    }

    body {
        background: #f9f9f9 !important;
    }
</style>