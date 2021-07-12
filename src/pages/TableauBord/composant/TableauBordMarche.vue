<template>
  <div>
    <div class="container-fluid" style="height: 100em">
      <div class="">
        <div class="row-fluid" v-if="affiche_filtre" style="margin-top: -20px">
          <div class="span1"></div>
          <div class="span10" style="background: #f0c71d !important">
            <table
              class="table table-striped"
              style="background: #f0c71d !important"
            >
              <tbody>
                <tr>
                  <td
                    style="background: #f0c71d !important"
                    v-if="!noDCfNoAdmin"
                  >
                    <label
                      >CF
                      <a
                        href="#"
                        @click.prevent="videTypeCF()"
                        v-if="controlleur_fin"
                        style="color: red"
                      >
                        <i class="fa fa-trash-o"></i></a
                    ></label>
                    <model-list-select
                      style="background-color: #fff"
                      class="wide"
                      :list="listeCF"
                      v-model="controlleur_fin"
                      option-value="id"
                      option-text="name"
                      placeholder="Controleur financier"
                    >
                    </model-list-select>
                  </td>
                  <td style="background: #f0c71d !important">
                    <label
                      >UA<a
                        href="#"
                        @click.prevent="videUniteAdmin()"
                        v-if="unite_administrative_id"
                        style="color: red"
                        ><i class="fa fa-trash-o"></i
                      ></a>
                    </label>
                    <model-list-select
                      style="background-color: #fff"
                      class="wide"
                      :list="filtre_unite_admin"
                      v-model="unite_administrative_id"
                      option-value="id"
                      option-text="libelle"
                      placeholder="Unité administrative"
                    >
                    </model-list-select>
                  </td>
                  <td style="background: #f0c71d !important">
                    <label
                      >Regions
                      <a
                        href="#"
                        @click.prevent="videRegions()"
                        v-if="region"
                        style="color: red"
                        ><i class="fa fa-trash-o"></i
                      ></a>
                    </label>
                    <model-list-select
                      style="background-color: #fff"
                      class="wide"
                      :list="regions"
                      v-model="region"
                      option-value="id"
                      option-text="libelle"
                      placeholder="Regions"
                    >
                    </model-list-select>
                  </td>
                  <td style="background: #f0c71d !important">
                    <label
                      >Infrastructure
                      <a
                        href="#"
                        @click.prevent="videInfrastructure()"
                        v-if="infrastructure"
                        style="color: red"
                        ><i class="fa fa-trash-o"></i
                      ></a>
                    </label>
                    <model-list-select
                      style="background-color: #fff"
                      class="wide"
                      :list="getterInfrastrucure"
                      v-model="infrastructure"
                      option-value="id"
                      option-text="libelle"
                      placeholder="Infrastructure"
                    >
                    </model-list-select>
                  </td>
                  <td style="background: #f0c71d !important">
                    <label
                      >Type Marché
                      <a
                        href="#"
                        @click.prevent="videTypeMarche()"
                        v-if="type_marche"
                        style="color: red"
                        ><i class="fa fa-trash-o"></i
                      ></a>
                    </label>
                    <model-list-select
                      style="background-color: #fff"
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

        <hr v-if="affiche_filtre" />
        <button class="btn btn-default" @click="generateReport()">
          <i class="icon-print"></i>
        </button>
        <table class="table table-striped">
          <tbody>
            <tr>
              <td
                style="
                  background: #b4c6e7;
                  border: 5px solid #fff;
                  font-size: 15px;
                "
              >
                <b>TOTAL MARCHES PLANIFIES - EXERCICE {{ anneeAmort }}</b>
              </td>
              <td
                style="
                  background: #b4c6e7;
                  border: 5px solid #fff;
                  text-align: center !important;
                  font-size: 15px;
                "
              >
                <b v-if="nombreTotalMarche==0">{{ nombreTotalMarche }} Marché</b>
                  <b v-else>{{ nombreTotalMarche }} Marchés</b>
              </td>
              <td
                style="
                  background: #b4c6e7;
                  border: 5px solid #fff;
                  text-align: center !important;
                  font-size: 15px;
                "
              >
                <b>{{ formatageSomme(montantMarchePPM) }} TTC</b>
              </td>
              <td
                style="
                  background: #b4c6e7;
                  border: 5px solid #fff;
                  text-align: center !important;
                "
              >
                <button
                  class="btn btn-link"
                  style="font-size: 15px; color: #000"
                >
                  <b>VOIR PPM</b>
                </button>
              </td>
              <td
                style="
                  background: #b4c6e7;
                  border: 5px solid #fff;
                  text-align: center !important;
                "
              >
                <button
                  class="btn btn-link"
                  style="font-size: 15px; color: #000"
                  @click="click_cartographie('ppm')"
                >
                  <b>VOIR SITUATION GEOGRAPHIQUE</b>
                </button>
              </td>
              <!--                    <td> <button class="btn btn-default" @click="generateReport()"><i class="icon-print"></i></button></td>-->
            </tr>
            <tr>
              <td
                style="
                  background: #b4c6e7;
                  border: 5px solid #fff;
                  font-size: 15px;
                "
              >
                <b>TOTAL MARCHES HORS PPM - EXERCICE {{ anneeAmort }}</b>
              </td>
              <td class="annimB"
                style="
                  background: #b4c6e7;
                  border: 5px solid #fff;
                  text-align: center !important;
                  font-size: 15px;
                "
              >
                <b v-if="nombreMarcheHPPM==0">{{ nombreMarcheHPPM }}  Marché </b>
                  <b v-else>{{ nombreMarcheHPPM }} Marchés </b>
              </td>
              <td
                style="
                  background: #b4c6e7;
                  border: 5px solid #fff;
                  text-align: center !important;
                  font-size: 15px;
                "
              >
                <b>{{ formatageSomme(montantMarcheHPM) }} TTC</b>
              </td>

              <td
                style="
                  background: #b4c6e7;
                  border: 5px solid #fff;
                  text-align: center !important;
                "
              >
                <button
                  class="btn btn-link"
                  style="font-size: 15px; color: #000"
                >
                  <b>DETAIL</b>
                </button>
              </td>
              <td
                style="
                  background: #b4c6e7;
                  border: 5px solid #fff;
                  text-align: center !important;
                "
              >
                <button
                  class="btn btn-link"
                  style="font-size: 15px; color: #000"
                  @click="click_cartographie('hp_ppm')"
                >
                  <b>VOIR SITUATION GEOGRAPHIQUE</b>
                </button>
              </td>
            </tr>
            <tr>
              <td
                style="
                  background: #2f5396;
                  border: 5px solid #fff;
                  color: #fff;
                  font-size: 15px;
                "
              >
                <b>TOTAL GENERAL MARCHES - EXERCICE {{ anneeAmort }}</b>
              </td>
              <td
                style="
                  background: #2f5396;
                  border: 5px solid #fff;
                  color: #fff;
                  text-align: center !important;
                  font-size: 15px;
                "
              >
                <b v-if="nbrTotalMarcheGeneral==0">{{ nbrTotalMarcheGeneral }} Marché</b>
                  <b v-else>{{ nbrTotalMarcheGeneral }} Marchés</b>
              </td>
              <td
                style="
                  background: #2f5396;
                  border: 5px solid #fff;
                  color: #fff;
                  text-align: center !important;
                  font-size: 15px;
                "
              >
                <b>{{ formatageSomme(montantTotalGeneral) }} TTC</b>
              </td>
              <!--<td v-if="status_marches==2">{{formatageSomme(montantApprouvePasUA(unite.id))}}</td>-->
              <td
                style="
                  background: #fff;
                  border: 5px solid #fff;
                  color: #fff;
                  text-align: center !important;
                "
              ></td>
              <td
                style="
                  background: #2f5396;
                  border: 5px solid #fff;
                  color: #fff;
                  text-align: center !important;
                "
              >
                <button
                  style="font-size: 15px; color: #fff"
                  class="btn btn-link"
                  @click="click_cartographie('total')"
                >
                  <b>VOIR SITUATION GEOGRAPHIQUE</b>
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <nav
          aria-label="breadcrumb"
          class="main-breadcrumb"
          style="background: #806000"
        >
          <ol class="breadcrumb" style="background: #111111 !important">
            <li class="breadcrumb-item" style="color: #fff !important">
             <h3> INFORMATIONS GENERALES - MARCHES/CONTRATS&nbsp;&nbsp;&nbsp;&nbsp;
                 /</h3>
            </li>
            <li
              class="breadcrumb-item"
              style="color: #fff !important"
              v-if="unite_administrative_id"
            >
                <h3> Situation {{ nomUniteAdmin(unite_administrative_id) }} des marchés
              &nbsp;&nbsp;&nbsp;&nbsp; / </h3>
            </li>
            <li
              class="breadcrumb-item"
              style="color: #fff !important"
              v-if="region"
            >
                <h3> Région {{ nomRegions(region) }} &nbsp;&nbsp;&nbsp;&nbsp;/</h3>
            </li>
            <li
              class="breadcrumb-item"
              style="color: #fff !important"
              v-if="infrastructure"
            >
                <h3> Infrastructutre
              {{ nomInfrastructure(infrastructure) }} &nbsp;</h3>
            </li>

            <li
              class="breadcrumb-item"
              style="color: #fff !important"
              v-if="type_marche"
            >
                <h2>  Type Marche {{ nomTypeMarche(type_marche) }} </h2>
            </li>
            <li
              class="breadcrumb-item"
              style="color: #fff !important;"
              v-if="info_status_marche"
              v-html="info_status_marche"
            ></li>
            <!--<li class="breadcrumb-item"> <button class="btn btn-info" @click="print"><i class="icon-print"></i></button></li>-->
          </ol>
        </nav>

        <div class="">
          <div class="row-fluid" style="" id="printMe">
            <div
              class="span2 vld-parent"
              style="
                width: 170px;
                margin-left: -3px !important;
                border-right: 10px solid #f9f9f9;
              "
            >
              <loading
                :active.sync="isLoading"
                :can-cancel="true"
                :on-cancel="onCancel"
                :is-full-page="fullPage"
              ></loading>
              <div
                class="card-box bg-attente-contratualisation-hors-alert"
                style="height: 90px !important; cursor: grab !important"
                v-scroll-to="{ element: '#table_resultat', duration: 5000 }"
                @click="listePlanifierMarcheStatus('planifie')"
              >
                <div class="inner">
                  <p><b> En attente de contractualisation </b></p>
                  <h3></h3>
                </div>
                <div class="icon3">
                  {{ nombreMarchePasStaturePlanifier("planifie") }} Marché(s) /
                  {{ pourcentageMarchePasStatusPlanifier("planifie") }}%
                </div>
                <div class="icon2">
                  {{
                    formatageSomme(montantPasStatusContratPlanifie("planifie"))
                  }}
                  / {{ pourcentageMontantPrevuePasSatus("planifie") }}%
                </div>
              </div>
            </div>

            <div
              class="span2 vld-parent"
              style="
                width: 170px;
                margin-left: -0.9px !important;
                border-right: 10px solid #f9f9f9;
              "
            >
              <loading
                :active.sync="isLoading"
                :can-cancel="true"
                :on-cancel="onCancel"
                :is-full-page="fullPage"
              ></loading>
              <div
                      v-scroll-to="{ element: '#table_resultat', duration: 5000 }"
                @click="listePlanifierMarcheStatus(8)"
                class="card-box bg-attente-contratualisation-avec-alert"
                style="height: 90px !important; cursor: grab !important"
              >
                <div class="inner">
                  <p><b>En attente de contractualisation Hors délai</b></p>
                </div>

                <div class="icon3">
                  {{ nombreMarchePasStaturePlanifier(8) }} Marché(s) /
                  {{ pourcentageMarchePasStatusPlanifier(8) }}%
                </div>
                <div class="icon2">
                  {{ formatageSomme(montantPasStatusContratPlanifie(8)) }} /
                  {{ pourcentageMontantPrevuePasSatus(8) }}%
                </div>
              </div>
            </div>
            <div
              class="span2 vld-parent"
              style="
                width: 170px;
                margin-left: -0.9px !important;
                border-right: 10px solid #f9f9f9;
              "
            >
              <loading
                :active.sync="isLoading"
                :can-cancel="true"
                :on-cancel="onCancel"
                :is-full-page="fullPage"
              ></loading>
              <div
                @click="listePlanifierMarcheStatus(1)"
                class="card-box bg-en-contratualisation"
                style="height: 90px !important; cursor: grab !important"
                v-scroll-to="{ element: '#table_resultat', duration: 5000 }"
              >
                <div class="inner">
                  <p>
                    <b>En contractualisation</b>
                  </p>
                </div>
                <div class="icon3">
                  {{ nombreMarchePasStaturePlanifier(1) }} Marché(s) /
                  {{ pourcentageMarchePasStatusPlanifier(1) }}%
                </div>
                <div class="icon2">
                  {{ formatageSomme(montantPasStatusContratPlanifie(1)) }}/{{
                    pourcentageMontantPrevuePasSatus(1)
                  }}%
                </div>
              </div>
            </div>
            <div
              class="span2 vld-parent"
              style="
                width: 170px;
                margin-left: -0.9px !important;
                border-right: 10px solid #f9f9f9;
              "
            >
              <loading
                :active.sync="isLoading"
                :can-cancel="true"
                :on-cancel="onCancel"
                :is-full-page="fullPage"
              ></loading>
              <div
                @click="listePlanifierMarcheStatus(9)"
                class="card-box bg-en-contratualisation-hort-delais"
                style="height: 90px !important; cursor: grab !important"
                v-scroll-to="{ element: '#table_resultat', duration: 5000 }"
              >
                <div class="inner">
                  <p><b>En contractualisation Hors délai</b></p>
                </div>
                <div class="icon3">
                  {{ nombreMarchePasStaturePlanifier(9) }} Marché(s) /
                  {{ pourcentageMarchePasStatusPlanifier(9) }}%
                </div>
                <div class="icon2">
                  {{ formatageSomme(montantPasStatusContratPlanifie(9)) }} /
                  {{ pourcentageMontantPrevuePasSatus(9) }}%
                </div>
              </div>
            </div>
            <div
              class="span2 vld-parent"
              style="
                width: 170px;
                margin-left: -0.9px !important;
                border-right: 10px solid #fff;
              "
            >
              <loading
                :active.sync="isLoading"
                :can-cancel="true"
                :on-cancel="onCancel"
                :is-full-page="fullPage"
              ></loading>
              <div
                @click="listeMarcheStatus(2)"
                class="card-box bg-en-execution"
                style="height: 90px !important; cursor: grab !important"
                v-scroll-to="{ element: '#table_resultat', duration: 5000 }"
              >
                <div class="inner">
                  <p><b>En exécution dans le délai</b></p>
                </div>
                <div class="icon3">
                  {{ nombreMarcheParStatue(2) }} Marché(s) /
                  {{ pourcentageMarcheExecuteAcheve(2) }}%
                </div>
                <div class="icon2">
                  {{ formatageSomme(montantPasStatusExecutionAcheve(2)) }} /
                  {{ pourcentageMontantExcuteAcheve(2) }}%
                </div>
              </div>
            </div>
            <div
              class="span2 vld-parent"
              style="
                width: 170px;
                margin-left: -0.9px !important;
                border-right: 10px solid #fff;
              "
            >
              <loading
                :active.sync="isLoading"
                :can-cancel="true"
                :on-cancel="onCancel"
                :is-full-page="fullPage"
              ></loading>
              <div
                @click="listeMarcheStatus(10)"
                class="card-box bg-en-execution-horts-delais"
                style="height: 90px !important; cursor: grab !important"
                v-scroll-to="{ element: '#table_resultat', duration: 5000 }"
              >
                <div class="inner">
                  <p><b>En Exécution Hors délai</b></p>
                </div>
                <div class="icon3">
                  {{ nombreMarcheParStatue(10) }} Marché(s) /
                  {{ pourcentageMarcheExecuteAcheve(10) }}%
                </div>
                <div class="icon2">
                  {{ formatageSomme(montantPasStatusExecutionAcheve(10)) }} /
                  {{ pourcentageMontantExcuteAcheve(10) }}%
                </div>
              </div>
            </div>
            <div
              class="span2 vld-parent"
              style="
                width: 170px;
                margin-left: -0.9px !important;
                border-right: 10px solid #fff;
              "
            >
              <loading
                :active.sync="isLoading"
                :can-cancel="true"
                :on-cancel="onCancel"
                :is-full-page="fullPage"
              ></loading>
              <div
                @click="listeMarcheStatus(11)"
                class="card-box bg-acheve-hors-delais"
                style="height: 90px !important; cursor: grab !important"
                v-scroll-to="{ element: '#table_resultat', duration: 5000 }"
              >
                <div class="inner">
                  <p><b>Achevé dans le délai</b></p>
                </div>
                <div class="icon3">
                  {{ nombreMarcheParStatue(11) }} Marché(s) /
                  {{ pourcentageMarcheExecuteAcheve(11) }}%
                </div>
                <div class="icon2">
                  {{ formatageSomme(montantPasStatusExecutionAcheve(11)) }} /
                  {{ pourcentageMontantExcuteAcheve(11) }}%
                </div>
              </div>
            </div>
            <div
              class="span2 vld-parent"
              style="
                width: 170px;
                margin-left: -0.9px !important;
                border-right: 10px solid #fff;
              "
            >
              <loading
                :active.sync="isLoading"
                :can-cancel="true"
                :on-cancel="onCancel"
                :is-full-page="fullPage"
              ></loading>
              <div
                @click="listeMarcheStatus(12)"
                class="card-box bg-acheve-delais"
                style="height: 90px !important; cursor: grab !important"
                v-scroll-to="{ element: '#table_resultat', duration: 5000 }"
              >
                <div class="inner">
                  <p>Achevé Hors délai</p>
                </div>
                <div class="icon3">
                  {{ nombreMarcheParStatue(12) }} Marché(s) /
                  {{ pourcentageMarcheExecuteAcheve(12) }}%
                </div>
                <div class="icon2">
                  {{ formatageSomme(montantPasStatusExecutionAcheve(12)) }} /
                  {{ pourcentageMontantExcuteAcheve(12) }}%
                </div>
              </div>
            </div>
            <div
              class="span2 vld-parent"
              style="
                width: 170px;
                margin-left: -0.9px !important;
                border-right: 10px solid #fff;
              "
            >
              <loading
                :active.sync="isLoading"
                :can-cancel="true"
                :on-cancel="onCancel"
                :is-full-page="fullPage"
              ></loading>
              <div
                @click="listeMarcheStatus(7)"
                class="card-box bg-en-souffrance"
                style="height: 90px !important; cursor: grab !important"
                v-scroll-to="{ element: '#table_resultat', duration: 5000 }"
              >
                <div class="inner">
                  <p>En souffrance</p>
                </div>
                <div class="icon3">
                  {{ nombreMarcheParStatue(7) }} Marché(s) /
                  {{ pourcentageMarcheExecuteAcheve(7) }}%
                </div>
                <div class="icon2">
                  {{ formatageSomme(montantPasStatusExecutionAcheve(7)) }} /
                  {{ pourcentageMontantExcuteAcheve(7) }}%
                </div>
              </div>
            </div>
            <div
              class="span2 vld-parent"
              style="
                width: 170px;
                margin-left: -0.9px !important;
                border-right: 10px solid #fff;
              "
            >
              <loading
                :active.sync="isLoading"
                :can-cancel="true"
                :on-cancel="onCancel"
                :is-full-page="fullPage"
              ></loading>
              <div
                class="card-box bg-en-avenant"
                style="height: 90px !important; cursor: grab !important"
              >
                <div class="inner">
                  <p>Avenant</p>
                </div>
                <div class="icon3">
                  {{ nbreAvenant }}
                </div>
                <div class="icon2">
                  {{ formatageSomme(montantAvenant) }} /
                  {{ pourcentageMontantAvenant }}%
                </div>
              </div>
            </div>
          </div>

          <div class="row-fluid" style="margin: 55px 2px 100px 4px">
            <div class="span6"  style="border: 1px solid;padding: 10px;box-shadow: 1px 0px 2px 0px #000;">
              <apexchart
                      type="pie"
                      width="560"
                      :options="chartOptions"
                      :series="dataPourcentage"
              ></apexchart>
              <h3>Projet de marchés {{nomUniteAdmiSelection(unite_administrative_id)}} {{nomTypeMarche(type_marche)}} {{nomInfrastructure(infrastructure)}} {{nomRegions(region)}}</h3>
            </div>

            <div class="span6" style="border: 1px solid;padding: 10px;box-shadow: 1px 0px 2px 0px #000;" >
              <apexchart
                      type="pie"
                      width="495"
                      :options="chartOptions2"
                      :series="dataPourcentage2"
              ></apexchart>
              <h3>Marchés approuvés {{nomUniteAdmiSelection(unite_administrative_id)}} {{nomTypeMarche(type_marche)}} {{nomInfrastructure(infrastructure)}} {{nomRegions(region)}}</h3>
            </div>

            <div class="span11" id="table_resultat">
              <br>
              <nav
                aria-label="breadcrumb"
                class="main-breadcrumb"
                v-if="info_status_marche"
              >
                <ol
                  class="breadcrumb"
                  :style="{ background: getColorByStatus(status_marches) }"
                >
                  <li class="breadcrumb-item" v-html="info_status_marche"></li>
                  <li class="breadcrumb-item">
                    <!--<a href="#" @click.prevent="afficherModalAjouterTitre()">Carte</a> -->
                  </li>
                </ol>
              </nav>
              <transition  name="slide-fade" >
              <table
                class="table table-bordered table-striped"
                v-if="info_status_marche"

              >
                <thead>
                  <tr>
                    <th
                      :style="{
                        background: getColorByStatus(status_marches),
                        color: '#fff',
                      }"
                    >
                      UA
                    </th>
                    <th
                      :style="{
                        background: getColorByStatus(status_marches),
                        color: '#fff',
                      }"
                    >
                      Nombre Marchés
                    </th>
                    <th
                      :style="{
                        background: getColorByStatus(status_marches),
                        color: '#fff',
                      }"
                    >
                      Taux Marché %
                    </th>
                    <th
                      :style="{
                        background: getColorByStatus(status_marches),
                        color: '#fff',
                      }"
                    >
                      Montant total
                    </th>
                    <th
                      :style="{
                        background: getColorByStatus(status_marches),
                        color: '#fff',
                      }"
                    >
                      Taux Financier
                    </th>
                    <th
                      :style="{
                        background: getColorByStatus(status_marches),
                        color: '#fff',
                      }"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="unite in listeUniteAdministrative" :key="unite.id">
                    <td>{{ unite.libelle }}</td>
                    <td style="text-align: center !important">
                      {{ nbrTotalMarchePasUA(unite.id) }}
                    </td>
                    <td style="text-align: center !important">
                      {{ tauxStatusMarchePasUniteAdministrative(unite.id) }}
                    </td>
                    <td style="text-align: center !important">
                      {{ formatageSomme(montantPrevuePasUA(unite.id)) }}
                    </td>
                    <td style="text-align: center !important">
                      {{
                        tauxFinnancieStatusSelectionnerPasUA(
                          unite.id,
                          status_marches
                        )
                      }}
                    </td>
                    <td>
                      <a
                        href="#"
                        @click="selectionUnite(unite.id)"
                        class="btn btn-default"
                        title="Detail marches"
                      >
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
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <!--<td c v-if="status_marches==2">{{formatageSomme(montantApprouvePasUA(unite.id))}}</td>-->
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
                </tbody>
              </table>
              </transition>
              <table
                class="table table-bordered table-striped"
                v-if="!info_status_marche"
              >
                <thead>
                  <tr>
                    <th>UA</th>
                    <th>Nombre Marchés</th>
                    <th>Montant total</th>
                    <!--<th v-if="status_marches==2">Montant base</th>-->
                    <th>Taux</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
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
                  </tr>
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
                  </tr>
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
                  </tr>
                  <tr>
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

    <fab
      v-if="affiche_boutton_filtre"
      :position="position"
      :bg-color="bgColor"
      :actions="fabActions"
      main-icon="format_indent_decrease"
      @cache="filter"
    ></fab>
    <fab
      v-if="!affiche_boutton_filtre"
      :position="position"
      :bg-color="bgColor"
      :actions="fabActions"
      main-icon="ballot"
      @cache="filter"
    ></fab>


    {{ dataArrayPourcentage }}
      {{dataArrayPourcentage2}}
  </div>
</template>

<script>
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";
import VueApexCharts from "vue-apexcharts";
import { mapGetters, mapActions } from "vuex";
import { noDCfNoAdmin, dcf } from "../../../Repositories/Auth";
import { formatageSomme } from "../../../Repositories/Repository";
import { ModelListSelect } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";
// import DraggableDiv from '../../components/DraggableDiv/DraggableDiv'
export default {
  name: "TableauBordMarche",
  props: ["sib"],
  components: {
    apexchart: VueApexCharts,
    ModelListSelect,
    Loading,
    //  DraggableDiv
  },
  data() {
    return {
      isLoading: false,
      fullPage: false,
      controlleur_fin: "",
      status_marches: "",
      unite_administrative_id: "",
      infrastructure: "",
      type_marche: "",
      region: "",
      info_status_marche: "",
      tableMarcheStatue: "",
      listeDesMarchePasStatus: "",
      affiche_filtre: false,
      affiche_boutton_filtre: true,
      status_marche: "",
      bgColor: "#171b39",
      position: "bottom-right",
      fabActions: [
        {
          name: "cache",
          icon: "cached",
        },
      ],
      dataPourcentage: [],
      chartOptions: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: [
          "En Attente de contractualisation.",
          "En attente de contractualisation H.D",
          "En Contractualisation.",
          "En Contractualisation H.D",
        ],
        colors: [
          "#8ea9db",
          "#f4b084",
          "#92d04f",
          "#632990",
        ],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },


      dataPourcentage2: [],
      chartOptions2: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: [
          "En Execution dans délai",
          "Execution hors delai",
          "Achévé dans le delai.",
          "Achévé hors delai",
          "En souffrance",
        ],
        colors: [
          "#ffbd3d",
          "#d36f2a",
          "#00b04f",
          "#757171",
          "#ff0000",
        ],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },


        series: [44, 55, 13, 43, 22],
        chartOptions1: {
            chart: {
                width: 380,
                type: 'pie',
            },
            labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },
    };
  },
  created() {

  },
  computed: {
    ...mapGetters("uniteadministrative", [
      "acteCreations",
      "typeTextes",
      "uniteAdministratives",
      "getterBudgeCharge",
      "decomptefactures",
    ]),
    ...mapGetters("Utilisateurs", [
      "getterUtilisateur",
      "getterAffectation",
      "getterUniteAdministrativeByUser",
    ]),
    ...mapGetters("parametreGenerauxAdministratif", [
      "structures_geographiques",
      "localisations_geographiques",
      "getterLocalisationGeoAll",
      "getterInfrastrucure",
      "exercices_budgetaires",
      "sections",
      "type_Unite_admins",
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
    ]),

    ...mapGetters("bienService", [
      "marches",
      "engagements",
      "getMandatPersonnaliserVise",
      "getterImageMarche",
      "acteEffetFinanciers",
      "getActeEffetFinancierPersonnaliser45",
      "getActeEffetFinancierPersonnaliser",
      "typeMarches",
      "avenants", "gettersgestionOrdrePaiement"
    ]),
    ...mapGetters("Utilisateurs", ["getterUtilisateur", "getterRoles"]),
    listeCF() {
      return this.getterUtilisateur.filter((item) => {
        if (item.user_role) {
          if (
            item.user_role.role.code_role == "DCF" ||
            item.user_role.role.code_role == "CF"
          ) {
            return item;
          }
        }
      });
    },
    noDCfNoAdmin: noDCfNoAdmin,
    dcf: dcf,
    regions() {
      // console.log(this.localisations_geographiques.filter(item=>item.structure_localisation_geographique.niveau==2))
      return this.localisations_geographiques.filter((item) => {
        if (
          item.longitude != null &&
          item.structure_localisation_geographique.niveau == 2
        ) {
          return item;
        }
      });
    },
    filtre_unite_admin() {
      if (this.noDCfNoAdmin) {
        let colect = [];
        let vM = this;
        this.uniteAdministratives.filter((item) => {
          if (vM.getterUniteAdministrativeByUser.length > 0) {
            let val = vM.getterUniteAdministrativeByUser.find(
              (row) => row.unite_administrative_id == item.id
            );
            if (val != undefined) {
              colect.push(item);
              return item;
            }
          }
        });
        return colect;
      }
      return this.uniteAdministratives;
    },
    listeMarcheUniteAdmin() {
      let colect = [];
      let vM = this;
      this.filtre_unite_admin.forEach(function (value) {
        let objet = vM.marches.filter((item) => {
          if (
            item.parent_id != null &&
            item.unite_administrative_id == value.id &&
            item.sib == vM.sib
          ) {
            //  console.log(item.parent_id)
            return item;
          }
        });
        if (objet != undefined) {
          objet.forEach(function (val) {
            let objet = colect.find((item) => item.id == val.id);
            if (objet == undefined) {
              colect.push(val);
            }
          });
        }
      });
      return colect;
    },
    listeMarchePlanifier() {
      let colect = [];
      let vM = this;
      this.filtre_unite_admin.forEach(function (value) {
        let objet = vM.marches.filter((item) => {
          if (
            item.parent_id == null &&
            item.unite_administrative_id == value.id &&
            item.sib == vM.sib
          ) {
            //  console.log(item.parent_id)
            return item;
          }
        });
        if (objet != undefined) {
          objet.forEach(function (val) {
            let objet = colect.find((item) => item.id == val.id);
            if (objet == undefined) {
              colect.push(val);
            }
          });
        }
      });
      return colect;
    },
    anneeAmort() {
      const norme = this.exercices_budgetaires.find(
        (normeEquipe) => normeEquipe.encours == 1
      );

      if (norme) {
        let vM = this;
        vM.exercice_budget = norme.annee;
        return norme.annee;
      }
      return 0;
    },
     opDejaVie(){
      let objet=this.gettersgestionOrdrePaiement.filter(item=>{
        if(item.type_ordre_paiement==1 || item.type_ordre_paiement==4){
          return item
        }
      })
       if(objet.length<1) return []
       return objet.filter(item=>{
         if(item.decision_cf==8 || item.decision_cf==9){
           return item
         }
       });
     },
    objetMarchePasUniteOuRegion() {
      let vM = this;
      let objet = this.listeMarcheUniteAdmin.filter(
        (item) => item.parent_id != ""
      );

      //retourne les marches d'une region selectionner
      if (
        vM.region != "" &&
        vM.unite_administrative_id == "" &&
        vM.infrastructure == "" &&
        vM.type_marche == ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.localisation_geographie_id == vM.region &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'une unite administrative selectionner
      if (
        vM.unite_administrative_id != "" &&
        vM.region == "" &&
        vM.infrastructure == "" &&
        vM.type_marche == ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'une une infrastucture selectionner
      if (
        vM.infrastructure != "" &&
        vM.unite_administrative_id == "" &&
        vM.region == "" &&
        vM.type_marche == ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.infrastructure_id == vM.infrastructure &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'un type de marché selectionner
      if (
        vM.infrastructure == "" &&
        vM.unite_administrative_id == "" &&
        vM.region == "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (item.type_marche_id == vM.type_marche && item.parent_id != "") {
            return item;
          }
        });
      }

      //retourne les marches de region et unite adminstrative selectionner
      if (
        vM.unite_administrative_id != "" &&
        vM.region != "" &&
        vM.infrastructure == "" &&
        vM.type_marche == ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.localisation_geographie_id == vM.region &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'une infrastructure et unite adminstrative selectionner

      if (
        vM.unite_administrative_id != "" &&
        vM.region == "" &&
        vM.infrastructure != "" &&
        vM.type_marche == ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.infrastructure_id == vM.infrastructure &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'un type marche et unite adminstrative selectionner

      if (
        vM.unite_administrative_id != "" &&
        vM.region == "" &&
        vM.infrastructure != "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.type_marche_id == vM.type_marche &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'une region et infrastructure selectionner
      if (
        vM.unite_administrative_id == "" &&
        vM.region != "" &&
        vM.infrastructure != "" &&
        vM.type_marche == ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.infrastructure_id == vM.infrastructure &&
            item.localisation_geographie_id == vM.region &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'une infrasture et type marche selectionner
      if (
        vM.unite_administrative_id == "" &&
        vM.region == "" &&
        vM.infrastructure != "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.infrastructure_id == vM.infrastructure &&
            item.type_marche_id == vM.type_marche &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'un type marche et regions selectionner
      if (
        vM.unite_administrative_id == "" &&
        vM.region != "" &&
        vM.infrastructure == "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.localisation_geographie_id == vM.region &&
            item.type_marche_id == vM.type_marche &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourn les marches d'une UA, REGION et INFRASTRUCTURE

      if (
        vM.unite_administrative_id != "" &&
        vM.region != "" &&
        vM.infrastructure != "" &&
        vM.type_marche == ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.infrastructure_id == vM.infrastructure &&
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.localisation_geographie_id == vM.region &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourn les marches d'une UA, REGION et TYPE MARCHE
      if (
        vM.unite_administrative_id != "" &&
        vM.region != "" &&
        vM.infrastructure == "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.type_marche_id == vM.type_marche &&
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.localisation_geographie_id == vM.region &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourn les marches d'une UA, INFRA et TYPE MARCHE
      if (
        vM.unite_administrative_id != "" &&
        vM.region == "" &&
        vM.infrastructure != "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.type_marche_id == vM.type_marche &&
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.infrastructure_id == vM.infrastructure &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourn les marche INFRA, REGIONS,TYPE MARCHE
      if (
        vM.unite_administrative_id == "" &&
        vM.region != "" &&
        vM.infrastructure != "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.type_marche_id == vM.type_marche &&
            item.localisation_geographie_id == vM.region &&
            item.infrastructure_id == vM.infrastructure &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourn les marche INFRA, REGIONS,TYPE MARCHE,UA
      if (
        vM.unite_administrative_id != "" &&
        vM.region != "" &&
        vM.infrastructure != "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.type_marche_id == vM.type_marche &&
            item.localisation_geographie_id == vM.region &&
            item.infrastructure_id == vM.infrastructure &&
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      return objet;
    },
    objetMarchePlanierPasUiteOuRegion() {
      let vM = this;
      let objet = this.listeMarchePlanifier.filter(
        (item) => item.parent_id == null
      );

      //retourne les marches d'une region selectionner
      if (
        vM.region != "" &&
        vM.unite_administrative_id == "" &&
        vM.infrastructure == "" &&
        vM.type_marche == ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.localisation_geographie_id == vM.region &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'une unite administrative selectionner
      if (
        vM.unite_administrative_id != "" &&
        vM.region == "" &&
        vM.infrastructure == "" &&
        vM.type_marche == ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'une une infrastucture selectionner
      if (
        vM.infrastructure != "" &&
        vM.unite_administrative_id == "" &&
        vM.region == "" &&
        vM.type_marche == ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.infrastructure_id == vM.infrastructure &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'un type de marché selectionner
      if (
        vM.infrastructure == "" &&
        vM.unite_administrative_id == "" &&
        vM.region == "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (item.type_marche_id == vM.type_marche && item.parent_id != "") {
            return item;
          }
        });
      }

      //retourne les marches de region et unite adminstrative selectionner
      if (
        vM.unite_administrative_id != "" &&
        vM.region != "" &&
        vM.infrastructure == "" &&
        vM.type_marche == ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.localisation_geographie_id == vM.region &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'une infrastructure et unite adminstrative selectionner

      if (
        vM.unite_administrative_id != "" &&
        vM.region == "" &&
        vM.infrastructure != "" &&
        vM.type_marche == ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.infrastructure_id == vM.infrastructure &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'un type marche et unite adminstrative selectionner

      if (
        vM.unite_administrative_id != "" &&
        vM.region == "" &&
        vM.infrastructure != "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.type_marche_id == vM.type_marche &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'une region et infrastructure selectionner
      if (
        vM.unite_administrative_id == "" &&
        vM.region != "" &&
        vM.infrastructure != "" &&
        vM.type_marche == ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.infrastructure_id == vM.infrastructure &&
            item.localisation_geographie_id == vM.region &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'une infrasture et type marche selectionner
      if (
        vM.unite_administrative_id == "" &&
        vM.region == "" &&
        vM.infrastructure != "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.infrastructure_id == vM.infrastructure &&
            item.type_marche_id == vM.type_marche &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'un type marche et regions selectionner
      if (
        vM.unite_administrative_id == "" &&
        vM.region != "" &&
        vM.infrastructure == "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.localisation_geographie_id == vM.region &&
            item.type_marche_id == vM.type_marche &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourn les marches d'une UA, REGION et INFRASTRUCTURE

      if (
        vM.unite_administrative_id != "" &&
        vM.region != "" &&
        vM.infrastructure != "" &&
        vM.type_marche == ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.infrastructure_id == vM.infrastructure &&
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.localisation_geographie_id == vM.region &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourn les marches d'une UA, REGION et TYPE MARCHE
      if (
        vM.unite_administrative_id != "" &&
        vM.region != "" &&
        vM.infrastructure == "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.type_marche_id == vM.type_marche &&
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.localisation_geographie_id == vM.region &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourn les marches d'une UA, INFRA et TYPE MARCHE
      if (
        vM.unite_administrative_id != "" &&
        vM.region == "" &&
        vM.infrastructure != "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.type_marche_id == vM.type_marche &&
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.infrastructure_id == vM.infrastructure &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourn les marche INFRA, REGIONS,TYPE MARCHE
      if (
        vM.unite_administrative_id == "" &&
        vM.region != "" &&
        vM.infrastructure != "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.type_marche_id == vM.type_marche &&
            item.localisation_geographie_id == vM.region &&
            item.infrastructure_id == vM.infrastructure &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourn les marche INFRA, REGIONS,TYPE MARCHE,UA
      if (
        vM.unite_administrative_id != "" &&
        vM.region != "" &&
        vM.infrastructure != "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.type_marche_id == vM.type_marche &&
            item.localisation_geographie_id == vM.region &&
            item.infrastructure_id == vM.infrastructure &&
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      return objet;
    },

    getMarcheStatus() {
      return (status) => {
        if (status == "planifie") {
          status = 0;
          return this.objetMarchePasUniteOuRegion.filter(
            (item) => item.attribue == 0
          );
        }

        if (status != "") {
          return this.objetMarchePasUniteOuRegion.filter(
            (item) => item.attribue == status
          );
        } else {
          return this.objetMarchePasUniteOuRegion;
        }
      };
    },
    //objetMarchePlanierPasUiteOuRegion
    nombreMarcheParStatue() {
      return (status) => {
        if (status != "") {

          let nombre = this.listeMarchStatueExecuteAcheve.filter((item) => {
              if (
                  item.attribue == status
              ) {
                  return item;
              }
          }).length;

          return nombre;
        }
      };
    },
    nombreMarchePasStaturePlanifier() {
      return (status) => {
        if (status != "") {
          if (status == "planifie") {
            status = 0;
          }

          let nombre = 0;

          if (this.infrastructure != "" && this.type_marche == "") {
            nombre = this.objetMarchePlanierPasUiteOuRegion.filter((item) => {
              if (
                item.attribue == status &&
                item.infrastructure_id == this.infrastructure
              ) {
                return item;
              }
            }).length;
          }

          if (this.infrastructure == "" && this.type_marche != "") {
            nombre = this.objetMarchePlanierPasUiteOuRegion.filter((item) => {
              if (
                item.attribue == status &&
                item.type_marche_id == this.type_marche
              ) {
                return item;
              }
            }).length;
          }

          if (this.infrastructure != "" && this.type_marche != "") {
            nombre = this.objetMarchePlanierPasUiteOuRegion.filter((item) => {
              if (
                item.attribue == status &&
                item.type_marche_id == this.type_marche &&
                item.infrastructure_id == this.infrastructure
              ) {
                return item;
              }
            }).length;
          }

          if (this.infrastructure == "" && this.type_marche == "") {
            //
            nombre = this.objetMarchePlanierPasUiteOuRegion.filter(
              (item) => item.attribue == status
            ).length;
          }

          return nombre;
        }
      };
    },

    marcheUniteRegion() {
      let vM = this;
      let objet = this.listeMarcheUniteAdmin.filter(
        (item) => item.parent_id != ""
      );
      if (vM.region != "" && vM.unite_administrative_id == "") {
        objet = this.marches.filter((item) => {
          if (
            item.localisation_geographie_id == vM.region &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      if (vM.unite_administrative_id != "" && vM.region == "") {
        objet = this.listeMarcheUniteAdmin.filter((item) => {
          if (
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      if (vM.unite_administrative_id != "" && vM.region != "") {
        objet = this.listeMarcheUniteAdmin.filter((item) => {
          if (
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.localisation_geographie_id == vM.region &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }
      return objet;
    },
    //nombreMarchePasStaturePlanifier
    pourcentageMarchePasStatus() {
      return (status) => {
        if (this.nombreTotalExecutionMarche == 0) {
          return 0.0;
        }
        if (status == "planifie") {
          status = "planifie";
          let taux =
            (this.nombreMarcheParStatue(status) * 100) /
            this.nombreTotalExecutionMarche;
          return taux.toFixed(2);
        }
        let nombre = this.nombreMarcheParStatue(status);
        if (status == 7) {
          nombre = nombre + this.nombreMarcheParStatue(3);
        }

        let taux = (nombre * 100) / this.nombreTotalExecutionMarche;
        return taux.toFixed(2);
      };
    },
    nbrTotalMarchePlanier(){
      return this.listeMarchStatuePlanifieContratualisation.length
    },
    pourcentageMarchePasStatusPlanifier() {
      return (status) => {
        if (this.nbrTotalMarcheGeneral == 0) {
          return 0.0;
        }
        if (status == "planifie") {
          status = "planifie";
          let taux = (this.nombreMarchePasStaturePlanifier(status) * 100) / this.nbrTotalMarchePlanier;
          console.log(taux)
          return taux.toFixed(2);
        }
        let nombre = this.nombreMarchePasStaturePlanifier(status);

        let taux = (nombre * 100) / this.nbrTotalMarchePlanier;
             if (taux=="NaN")  return 0.0;
        console.log(taux)
        return taux.toFixed(2);
      };
    },

    /**
     * Calcule de montant prevue
     */
    montantPrevue() {
      let initeVal = 0;
      let montant_prevue = this.objetMarchePasUniteOuRegion.reduce(function (
        total,
        currentValue
      ) {
        return total + parseFloat(currentValue.montant_marche);
      },
      initeVal);
      return montant_prevue;
    },

    montantApprouveMarche() {
      if (this.objetMarchePasUniteOuRegion.length > 0) {
        //acteEffetFinanciers
        let vm = this;
        let montantTotal = 0;
        this.objetMarchePasUniteOuRegion.forEach(function (val) {
          let objetAct = vm.getActeEffetFinancierPersonnaliser45.find(
            (item) => item.marche_id == val.id
          );
          let montant_avenant = 0;
          let objetAvenant = vm.avenants.filter(
            (item) => item.marche_id == val.id
          );
          if (objetAvenant != undefined) {
            let initeVal = 0;
            montant_avenant = objetAvenant.reduce(function (
              total,
              currentValue
            ) {
              return total + parseFloat(currentValue.montant_avenant);
            },
            initeVal);
          }
          if (objetAct != undefined) {
            //  console.log(objetAct)
            montantTotal =
              parseFloat(montantTotal) +
              parseFloat(objetAct.montant_act) +
              parseFloat(montant_avenant);
          }
        });
        return montantTotal;
      }
      return 0;
    },

    nbreAvenant() {
      if (this.listeMarchStatueExecuteAcheve.length > 0) {
        let vm = this;
        let nbr = 0;
        this.listeMarchStatueExecuteAcheve.forEach(function (val) {
          let objetAvenant = vm.avenants.filter(
            (item) => item.marche_id == val.id
          ).length;

          if (objetAvenant != undefined) {
            nbr = nbr + objetAvenant;
          }
        });
        return nbr;
      }
      return 0;
    },
    montantAvenant() {
      if (this.listeMarchStatueExecuteAcheve.length > 0) {
        //acteEffetFinanciers
        let vm = this;
        //let montantTotal=0;
        let montant_tatal = 0;
        this.listeMarchStatueExecuteAcheve.forEach(function (val) {
          let montant_avenant = 0;
          let objetAvenant = vm.avenants.filter(
            (item) => item.marche_id == val.id
          );
          if (objetAvenant != undefined) {
            let initeVal = 0;
            montant_avenant = objetAvenant.reduce(function (
              total,
              currentValue
            ) {
              return total + parseFloat(currentValue.montant_avenant);
            },
            initeVal);
          }
          montant_tatal =
            parseFloat(montant_tatal) + parseFloat(montant_avenant);
        });
        return montant_tatal;
      }
      return 0;
    },
    pourcentageMontantAvenant() {
      let taux = (this.montantAvenant * 100) / this.montantApprouveMarche;

      return taux.toFixed(2);
    },
    montantExecute() {
      if (this.objetMarchePasUniteOuRegion.length > 0) {
        let montant_execute = 0;
        let vm = this;

        this.objetMarchePasUniteOuRegion.forEach(function (val) {
          let initeVal = 0;
          let montant = vm.opDejaVie
            .filter((item) => item.marche_id == val.id)
            .reduce(function (total, currentValue) {
              return total + parseFloat(currentValue.montant_ordre_paiement);
            }, initeVal);
          montant_execute = parseFloat(montant_execute) + parseFloat(montant);
        });

        return montant_execute;
      }
      return 0;
    },

    montantRestant() {
      return this.montantApprouveMarche - this.montantExecute;
    },
    tauxExecution() {
      if (this.montantExecute) {
        let taux = (this.montantExecute * 100) / this.montantApprouveMarche;
        if (taux == Infinity) {
          return 0;
        }
        return taux.toFixed(2);
      }
      return 0;
    },
    dataArrayPourcentage() {
      let vm = this;

      if (vm.dataPourcentage.length > 0) {
        vm.dataPourcentage = [];
      }
      vm.dataPourcentage.push(
        parseFloat(this.nombreMarchePasStaturePlanifier("planifie"))
      );
      vm.dataPourcentage.push(parseFloat(this.nombreMarchePasStaturePlanifier(8)));
      vm.dataPourcentage.push(parseFloat(this.nombreMarchePasStaturePlanifier(1)));
      vm.dataPourcentage.push(parseFloat(this.nombreMarchePasStaturePlanifier(9)));
      return "";
    },

      dataArrayPourcentage2() {
          let vm = this;

          if (vm.dataPourcentage2.length > 0) {
              vm.dataPourcentage2 = [];
          }
          vm.dataPourcentage2.push(
              parseFloat(this.nombreMarcheParStatue(2))
          );
          vm.dataPourcentage2.push(parseFloat(this.nombreMarcheParStatue(10)));
          vm.dataPourcentage2.push(parseFloat(this.nombreMarcheParStatue(11)));
          vm.dataPourcentage2.push(parseFloat(this.nombreMarcheParStatue(12)));
          vm.dataPourcentage2.push(parseFloat(this.nombreMarcheParStatue(7)));

          return "";
      },
    nombreTotalMarche() {
      return this.objetMarchePlanierPasUiteOuRegion.filter(
        (item) => item.plan_passation_marche_id != null
      ).length;
    },
    nombreMarcheHPPM() {
      let objet = this.objetMarchePlanierPasUiteOuRegion.filter(
        (item) => item.plan_passation_marche_id == null
      );
      return objet.length;
    },
    montantMarcheHPM() {
      let objet = this.objetMarchePlanierPasUiteOuRegion.filter(
        (item) => item.plan_passation_marche_id == null
      );
      if (objet.length > 0) {
        let initeVal = 0;
        return objet.reduce(function (total, currentValue) {
          return total + parseFloat(currentValue.montant_marche);
        }, initeVal);
      }
      return 0;
    },
    montantMarchePPM() {
      let objet = this.objetMarchePlanierPasUiteOuRegion.filter(
        (item) => item.plan_passation_marche_id != null
      );
      if (objet.length > 0) {
        let initeVal = 0;
        return objet.reduce(function (total, currentValue) {
          return total + parseFloat(currentValue.montant_marche);
        }, initeVal);
      }
      return 0;
    },
    nbrTotalMarcheGeneral() {
      return this.objetMarchePlanierPasUiteOuRegion.length;
    },
    montantTotalGeneral() {
      //  let objet=this.objetMarchePlanierPasUiteOuRegion.filter(item=>item.plan_passation_marche_id!=null)
      if (this.objetMarchePlanierPasUiteOuRegion.length > 0) {
        let initeVal = 0;
        return this.objetMarchePlanierPasUiteOuRegion.reduce(function (
          total,
          currentValue
        ) {
          return total + parseFloat(currentValue.montant_marche);
        },
        initeVal);
      }
      return 0;
    },
    nombreTotalExecutionMarche() {
      return this.listeMarchStatueExecuteAcheve.length;
    },
      pourcentageMarcheExecuteAcheve(){
        return status=>{
            if(!status) return 0;
            let taux=(this.nombreMarcheParStatue(status) * 100) /this.nombreTotalExecutionMarche
            if(taux=="NaN") return 0;
            return taux.toFixed(2)
        }
      },
    objetListeMarcheInfoUnite() {
      return this.listeMarcheUniteAdmin.filter((item) => item.parent_id != "");
    },
    listeUniteAdministrative() {
      let vm = this;
      let collect = [];
      if (vm.tableMarcheStatue.length > 0) {
        vm.tableMarcheStatue.forEach(function (val) {
          let objet = vm.uniteAdministratives.find((item) => item.id == val);
          collect.push(objet);
        });
        console.log(collect);
        return collect;
      }

      return collect;
    },
    nbrTotalMarchePasUA() {
      return (unite) => {
        let vm = this;
        return vm.listeDesMarchePasStatus.filter(
          (item) => item.unite_administrative_id == unite
        ).length;
      };
    },

    montantPrevuePasUA() {
      return (unite) => {
        let vm = this;
        let initeVal = 0;
          let objet= vm.listeDesMarchePasStatus.filter((item) => item.unite_administrative_id == unite)

          if (
              vm.status_marches == 0 ||
              vm.status_marches == 8 ||
              vm.status_marches == 1 ||
              vm.status_marches == 9
          ) {
              return objet.reduce(function (total, currentValue) {
                      return total + parseFloat(currentValue.montant_marche);
                  }, initeVal);

          }

          if (
              this.status_marches == 2 ||
              this.status_marches == 10 ||
              this.status_marches == 11 ||
              this.status_marches == 12 ||
              this.status_marches == 12
          ) {
              let montant_total=0;
              let vm=this;
              objet.forEach(function (value) {
                  let objet_act= vm.acteEffetFinanciers.filter(item=>item.marche_id==value.id)
                  let montant=0;
                  if(objet_act==undefined){
                      montant=0
                  }else{
                      let initeVal = 0;
                      montant =objet_act.reduce(function (total, currentValue) {
                          if(currentValue.montant_act=='') currentValue.montant_act=0;
                          return total + parseFloat(currentValue.montant_act);
                      }, initeVal)
                  }

                  montant_total=parseFloat(montant_total) + parseFloat(montant)
              })
              return montant_total
          }


        return 0
      };
    },

    /**
     * Calcule de taux financier pas unite administrative en fonction des etats des marchés
     * @returns {Function}
     */
    tauxFinnancieStatusSelectionnerPasUA() {
      return (unite, status) => {
        console.log(status);
        if (status == 0) {
          let taux =
            (this.montantPrevuePasUA(unite) * 100) /
            this.montantStatusSelectionnerPrevueTotal;
          return taux.toFixed(2);
        }
        if (unite != "" && status != "") {
          if (status == 0 || status == 8 || status == 1 || status == 9) {
            console.log(unite);
            let taux =
              (this.montantPrevuePasUA(unite) * 100) /
              this.montantStatusSelectionnerPrevueTotal;
            return taux.toFixed(2);
          }

          if (
            status == 2 ||
            status == 10 ||
            status == 11 ||
            status == 12 ||
            status == 12
          ) {
            let taux2 =
              (this.montantApprouvePasUA(unite) * 100) /
              this.montantApprouveStatusSelectionneTotal;
            return taux2.toFixed(2);
          }
        }
      };
    },
    /**
     * Calcule de montant prevue fonction des etats des marchés
     * @returns {Function}
     */
    montantStatusSelectionnerPrevueTotal() {
      let initeVal = 0;
      let vm = this;
      return vm.listeDesMarchePasStatus.reduce(function (total, currentValue) {
        return total + parseFloat(currentValue.montant_marche);
      }, initeVal);
    },
    /**
     * Calcule de montant approuve fonction des etats des marchés
     * @returns {Function}
     */
    montantApprouveStatusSelectionneTotal() {
      let vm = this;
      let montantTotal = 0;
      vm.listeDesMarchePasStatus.forEach(function (val) {
        let objetAct = vm.getActeEffetFinancierPersonnaliser45.find(
          (item) => item.marche_id == val.id
        );
        let montant_avenant = 0;
        let objetAvenant = vm.avenants.filter(
          (item) => item.marche_id == val.id
        );
        if (objetAvenant != undefined) {
          let initeVal = 0;
          montant_avenant = objetAvenant.reduce(function (total, currentValue) {
            return total + parseFloat(currentValue.montant_avenant);
          }, initeVal);
        }
        if (objetAct != undefined) {
          //  console.log(objetAct)
          montantTotal =
            parseFloat(montantTotal) +
            parseFloat(objetAct.montant_act) +
            parseFloat(montant_avenant);
        }
      });
      return montantTotal;
    },
    montantApprouvePasUA() {
      return (unite) => {
        let vm = this;
        let montantTotal = 0;
        vm.listeDesMarchePasStatus
          .filter((item) => item.unite_administrative_id == unite)
          .forEach(function (val) {
            let objetAct = vm.getActeEffetFinancierPersonnaliser45.find(
              (item) => item.marche_id == val.id
            );
            let montant_avenant = 0;
            let objetAvenant = vm.avenants.filter(
              (item) => item.marche_id == val.id
            );
            if (objetAvenant != undefined) {
              let initeVal = 0;
              montant_avenant = objetAvenant.reduce(function (
                total,
                currentValue
              ) {
                return total + parseFloat(currentValue.montant_avenant);
              },
              initeVal);
            }
            if (objetAct != undefined) {
              //  console.log(objetAct)
              montantTotal =
                parseFloat(montantTotal) +
                parseFloat(objetAct.montant_act) +
                parseFloat(montant_avenant);
            }
          });
        return montantTotal;
      };
    },
    tauxStatusMarchePasUniteAdministrative() {
      return (unite) => {
        let vm = this;
        if (vm.listeDesMarchePasStatus.length > 0) {
          let taux =
            (vm.nbrTotalMarchePasUA(unite) * 100) /
            vm.listeDesMarchePasStatus.length;
          return taux.toFixed(2);
        }
        return 0;
      };
    },
    nomUniteAdmin() {
      return (id) => {
        if (id != "") {
          let objet = this.uniteAdministratives.find((item) => item.id == id);
          return objet.libelle;
        }
        return "";
      };
    },
    nomTypeMarche() {
      return (id) => {
        if (id != "") {
          let objet = this.typeMarches.find((item) => item.id == id);
          return "/"+objet.libelle;
        }
        return "";
      };
    },
    nomInfrastructure() {
      return (id) => {
        if (id != "") {
          let objet = this.getterInfrastrucure.find((item) => item.id == id);
          return "/"+objet.libelle;
        }
        return "";
      };
    },
    nomRegions() {
      return (id) => {
        if (id != "") {
          let objet = this.localisations_geographiques.find(
            (item) => item.id == id
          );
          return "/"+objet.libelle;
        }
        return "";
      };
    },
    infoEtatMarche() {
      return (status) => {
        if (status == 0) {
          //  colors:['#410041', '#e81776', '#FF00FF',"#008000","#b5160e"]
          return "<font color='#fff'><h3>En attente de contractualisation</h3> </font>";
        }
        if (status == 8) {
          return "<font color='#fff'><h3>En attente de contractualisation hors délai</h3></font>";
        }
        if (status == 1) {
          return "<font color='#fff'><h3>En contractualisation</h3></font>";
        }
        if (status == 9) {
          return "<font color='#fff'><h3>En contractualisation Hors délai</h3></font>";
        }

        if (status == 2) {
          return "<font color='#fff'><h3>En exécution</h3></font>";
        }
        if (status == 10) {
          return "<font color='#fff'><h3>En exécution Hors délai</h3></font>";
        }

        if (status == 11) {
          return "<font color='#fff'><h3>Acheve dans le délai</h3></font>";
        }
        if (status == 12) {
          return "<font color='#fff'><h3>Acheve hors délai</h3></font>";
        }

        if (status == 7) {
          return "<font color='#fff'><h3>En suffrance</h3></font>";
        }
        return null;
      };
    },
    getColorByStatus() {
      return (status) => {
        if (status == 0) {
          //  colors:['#410041', '#e81776', '#FF00FF',"#008000","#b5160e"]
          return "#8ea9db !important";
        }
        if (status == 8) {
          return "#f4b084 !important";
        }
        if (status == 1) {
          return "#92d04f !important";
        }
        if (status == 9) {
          return "#632990 !important";
        }

        if (status == 2) {
          return "#ffbd3d !important";
        }
        if (status == 10) {
          return "#d36f2a !important";
        }

        if (status == 11) {
          return "#00b04f !important";
        }
        if (status == 12) {
          return "#757171 !important";
        }

        if (status == 7) {
          return "#ff0000 !important";
        }
        return null;
      };
    },
    montantPasStatusContratPlanifie() {
      return (status) => {
        if (status == "planifie") {
          status = 0;
        }
        let initeVal = 0;
        let montant_prevue = this.listeMarchStatuePlanifieContratualisation
          .filter((item) => item.attribue == status)
          .reduce(function (total, currentValue) {
            return total + parseFloat(currentValue.montant_marche);
          }, initeVal);
        return montant_prevue;
      };
    },
    pourcentageMontantPrevuePasSatus() {
      return (status) => {
        let taux =
          (this.montantPasStatusContratPlanifie(status) * 100) / this.montantTotaleMarchePlanifieContratuel;
        return taux.toFixed(2);
      };
    },
    pourcentageMontantExcuteAcheve() {
      return (status) => {
        let taux = (this.montantPasStatusExecutionAcheve(status) * 100) / this.montantTotalMarcheEnExecution;
        return taux.toFixed(2);
      };
    },

      //calcul de montant des marche en execution pas staturs
    montantPasStatusExecutionAcheve() {
      return (status) => {
          if(this.listeMarchStatueExecuteAcheve.length==0) return 0

          let montant_total=0;
          let vm=this;
          this.listeMarchStatueExecuteAcheve.filter(item=>item.attribue == status).forEach(function (value) {
              let objet_act= vm.acteEffetFinanciers.filter(item=>item.marche_id==value.id)
              let montant=0;
              if(objet_act==undefined){
                  montant=0
              }else{
                  let initeVal = 0;
                  montant =objet_act.reduce(function (total, currentValue) {
                      if(currentValue.montant_act=='') currentValue.montant_act=0;
                      return total + parseFloat(currentValue.montant_act);
                  }, initeVal)
              }

              montant_total=parseFloat(montant_total) + parseFloat(montant)
          })
          return montant_total
      };
    },

    montantTotaleMarchePlanifieContratuel() {
      let initeVal = 0;
      let montant_prevue = this.listeMarchStatuePlanifieContratualisation.reduce(
        function (total, currentValue) {
          return total + parseFloat(currentValue.montant_marche);
        },
        initeVal
      );
      return montant_prevue;
    },

    montantTotaleMarcheExecutionAcheve() {
      if (this.listeMarchStatueExecuteAcheve.length > 0) {
        let montant_execute = 0;
        let vm = this;

        this.listeMarchStatueExecuteAcheve.forEach(function (val) {
          let initeVal = 0;

            // let _objet=vm.listeActeEffectFinnancier(val.id)


          let montant = vm.acteEffetFinanciers.filter((item) => item.marche_id == val.id)
            .reduce(function (total, currentValue) {

              return total + parseFloat(currentValue.montant_act);
             }, initeVal);

           montant_execute = parseFloat(montant_execute) + parseFloat(montant);
        });

        return montant_execute;
      }
      return 0;
    },

    listeMarchStatuePlanifieContratualisation() {
      let objet4 = this.objetMarchePlanierPasUiteOuRegion.filter((item) => {
        if (
          item.attribue == 9 ||
          item.attribue == 1 ||
          item.attribue == 8 ||
          item.attribue == 0
        ) {
          return item;
        }
      });

      return objet4;
    },
      //calcule du totale des montants de base de marchés
      montantTotalMarcheEnExecution(){
        if(this.listeMarchStatueExecuteAcheve.length==0) return 0
          let montant_total=0;
           let vm=this;
          this.listeMarchStatueExecuteAcheve.forEach(function (value) {
              let objet_act= vm.acteEffetFinanciers.filter(item=>item.marche_id==value.id)
              let montant=0;
              if(objet_act==undefined){
                montant=0
               }else{
                    let initeVal = 0;
                    montant =objet_act.reduce(function (total, currentValue) {
                        if(currentValue.montant_act=='') currentValue.montant_act=0;
                          return total + parseFloat(currentValue.montant_act);
                      }, initeVal)
              }

            montant_total=parseFloat(montant_total) + parseFloat(montant)
          })
          return montant_total
      },
    listeMarchStatueExecuteAcheve() {
      let objet4 = this.objetMarchePasUniteOuRegion.filter((item) => {
        if (
          item.attribue == 2 ||
          item.attribue == 10 ||
          item.attribue == 11 ||
          item.attribue == 7 ||
          item.attribue == 3
        ) {
          return item;
        }
      });
      let vm=this;
   let collect=[]
    objet4.forEach(function (value) {
            let obj=vm.listeActeEffectFinnancier(value.id)
        let date_debut_exectuion_definitif=""
        let date_fin_exe=""
        let date_reception_provisoire_definitif=""
        let garantie=""
        let date_reception_definitive=""
        if(obj){
             date_debut_exectuion_definitif=obj.date_debut_exectuion_definitif
             date_fin_exe=obj.date_fin_exe
             date_reception_provisoire_definitif=obj.date_reception_provisoire_definitif
             garantie=obj.garantie
             date_reception_definitive=obj.date_reception_definitive
        }
        value.attribue=vm.durreStatusMarche(value.id)
             let obje={
                 ...value,
                 date_debut_exectuion_definitif:date_debut_exectuion_definitif,
                 date_fin_exe:date_fin_exe,
                 date_reception_provisoire_definitif:date_reception_provisoire_definitif,
                 garantie:garantie,
                 date_reception_definitive:date_reception_definitive,
             }

          collect.push(obje)
      })

      return collect;
    },

      listeActeEffectFinnancier: function () {
          return macheid => {
              if (macheid != "") {
                  return this.acteEffetFinanciers.find(idmarche => idmarche.marche_id == macheid)
              }
          }
      },

      durreStatusMarche(){
          return marche_id=>{
              if(marche_id){

                  let objet=this.listeActeEffectFinnancier(marche_id)
                if(objet){
                  // console.log(objet.date_reception)


                  if(objet.date_odre_service!=null && objet.date_fin_exe!=null && objet.date_reception_provisoire_definitif==null){
                    let jour=this.nombreDejourCalculeSansDateDuJOUR(objet.date_odre_service,objet.date_fin_exe)
                    if(jour<1){
                      return 2
                    }
                    if(jour==0) return 11
                    return 10
                  }

                  if(objet.garantie=="oui" && objet.date_reception_provisoire_definitif==null){
                    let jour=this.nombreDejourCalculeSansDateDuJOUR(objet.date_odre_service,objet.date_reception_definitive)
                    if(jour<1){
                      return 11
                    }
                    return 12
                  }

                  if(objet.date_reception_provisoire_definitif==null){
                    let jour=this.nombreDejourCalculeSansDateDuJOUR(objet.date_odre_service,objet.date_reception_definitive)
                    if(jour<1){
                      return 11
                    }
                    return 12
                  }
                  //let jour=this.nombreDejourCalculeSansDateDuJOUR(objet.date_debut_exectuion_definitif,objet.date_fin_exe)
                  let jour=this.nombreDejourCalculeSansDateDuJOUR(objet.date_odre_service,objet.date_reception_provisoire_definitif)
                  //return jour;
                  if(jour<1){
                    return 11
                  }
                  return 12

                }
                  return 2
              }
          }
      },
      nombreDejourCalcule(){
          return (date1,date2)=>{
              if(!date2){
                  let date_day=new Date()
                  date2= this.formatDate(date_day)
                  console.log(date2)
              }
              if(date1==null) return null;

              let date_debut=new Date(date1)
              let date_fin = new Date(date2)
              // let diffDays = date_fin.getDate() - date_debut.getDate();
              var timeDiff = date_fin.getTime() - date_debut.getTime();
              var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

              if (isNaN(diffDays)) return null;
              if (parseFloat(diffDays) <0 ) return diffDays

              return diffDays
          }

      },
      nombreDejourCalculeSansDateDuJOUR(){

          return (date1,date2)=>{
              if(date1==null) return null;

              let date_debut=new Date(date1)
              let date_fin = new Date(date2)
              // let diffDays = date_fin.getDate() - date_debut.getDate();
              var timeDiff = date_fin.getTime() - date_debut.getTime();
              var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

              if (isNaN(diffDays)) return null;
              if (parseFloat(diffDays) <0 ) return diffDays

              return diffDays
          }


      },

    nomUniteAdmiSelection(){
      return unite_id=>{
        if(!unite_id) return "";
         let objet=this.uniteAdministratives.find(item=>item.id==unite_id)
        if(objet==undefined) return ""
        return objet.libelle
      }
    },

  },
  methods: {
    ...mapActions("bienService", [
      "ajouterTableauBordFiltre",
      "ajouterInfoTableauBordFiltre",
    ]),
    onCancel() {
      console.log("User cancelled the loader.");
    },
    selectionUnite(id) {
      let stat = "pl";
      if (this.status_marches == "planifie") {
        this.status_marches = 0;
        stat = "planifier";
      }
      let objet = {
        status_marche: this.status_marches,
        infrastructure: this.infrastructure,
        unite_administrative: id,
        type_marche: this.type_marche,
        region: this.region,
        stat: stat,
      };



      let objetMarche = "";
      if (
        this.status_marches == 0 ||
        this.status_marches == 8 ||
        this.status_marches == 1 ||
        this.status_marches == 9
      ) {
        objetMarche = this.objetMarchePlanierPasUiteOuRegion.filter((item) => {
          if (
            item.unite_administrative_id == id &&
            item.attribue == this.status_marches
          ) {
            return item;
          }
        });
      }

      if (
        this.status_marches == 2 ||
        this.status_marches == 10 ||
        this.status_marches == 11 ||
        this.status_marches == 12 ||
        this.status_marches == 7
      ) {
        objetMarche = this.objetMarchePasUniteOuRegion.filter((item) => {
          if (
            item.unite_administrative_id == id &&
            item.attribue == this.status_marches
          ) {
            return item;
          }
        });
      }

      this.ajouterTableauBordFiltre(objetMarche);
      this.ajouterInfoTableauBordFiltre(objet);

      this.$router.push({
        name: "DetailInforTableBordUniteAd",
        params: { id: id },
      });
    },
    videUniteAdmin() {
      this.unite_administrative_id = "";
    },
    videRegions() {
      this.region = "";
    },
    videInfrastructure() {
      this.infrastructure = "";
    },
    videTypeMarche() {
      this.type_marche = "";
    },
    videTypeCF() {
      this.controlleur_fin = "";
    },
    filter() {
      this.affiche_filtre = !this.affiche_filtre;
      this.affiche_boutton_filtre = !this.affiche_boutton_filtre;
      this.videUniteAdmin();
      this.videRegions();
      this.videInfrastructure();
      this.videTypeMarche();
    },
    formatageSomme: formatageSomme,

    listeMarcheStatus(status) {
      if (status == "planifie") {
        status = 0;
      }
      this.tableMarcheStatue = "";

      this.info_status_marche = this.infoEtatMarche(status);
      let vM = this;
      let objet = this.objetListeMarcheInfoUnite.filter((item) => {
        if (item.parent_id != "" && item.attribue == status) {
          return item;
        }
      });

      if (
        vM.region != "" &&
        vM.unite_administrative_id == "" &&
        vM.infrastructure == "" &&
        vM.type_marche == ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.localisation_geographie_id == vM.region &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'une unite administrative selectionner
      if (
        vM.unite_administrative_id != "" &&
        vM.region == "" &&
        vM.infrastructure == "" &&
        vM.type_marche == ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'une une infrastucture selectionner
      if (
        vM.infrastructure != "" &&
        vM.unite_administrative_id == "" &&
        vM.region == "" &&
        vM.type_marche == ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.infrastructure_id == vM.infrastructure &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'un type de marché selectionner
      if (
        vM.infrastructure == "" &&
        vM.unite_administrative_id == "" &&
        vM.region == "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (item.type_marche_id == vM.type_marche && item.parent_id != "") {
            return item;
          }
        });
      }

      //retourne les marches de region et unite adminstrative selectionner
      if (
        vM.unite_administrative_id != "" &&
        vM.region != "" &&
        vM.infrastructure == "" &&
        vM.type_marche == ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.localisation_geographie_id == vM.region &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'une infrastructure et unite adminstrative selectionner

      if (
        vM.unite_administrative_id != "" &&
        vM.region == "" &&
        vM.infrastructure != "" &&
        vM.type_marche == ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.infrastructure_id == vM.infrastructure &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'un type marche et unite adminstrative selectionner

      if (
        vM.unite_administrative_id != "" &&
        vM.region == "" &&
        vM.infrastructure != "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.type_marche_id == vM.type_marche &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'une region et infrastructure selectionner
      if (
        vM.unite_administrative_id == "" &&
        vM.region != "" &&
        vM.infrastructure != "" &&
        vM.type_marche == ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.infrastructure_id == vM.infrastructure &&
            item.localisation_geographie_id == vM.region &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'une infrasture et type marche selectionner
      if (
        vM.unite_administrative_id == "" &&
        vM.region == "" &&
        vM.infrastructure != "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.infrastructure_id == vM.infrastructure &&
            item.type_marche_id == vM.type_marche &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'un type marche et regions selectionner
      if (
        vM.unite_administrative_id == "" &&
        vM.region != "" &&
        vM.infrastructure == "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.localisation_geographie_id == vM.region &&
            item.type_marche_id == vM.type_marche &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourn les marches d'une UA, REGION et INFRASTRUCTURE

      if (
        vM.unite_administrative_id != "" &&
        vM.region != "" &&
        vM.infrastructure != "" &&
        vM.type_marche == ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.infrastructure_id == vM.infrastructure &&
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.localisation_geographie_id == vM.region &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourn les marches d'une UA, REGION et TYPE MARCHE
      if (
        vM.unite_administrative_id != "" &&
        vM.region != "" &&
        vM.infrastructure == "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.type_marche_id == vM.type_marche &&
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.localisation_geographie_id == vM.region &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourn les marches d'une UA, INFRA et TYPE MARCHE
      if (
        vM.unite_administrative_id != "" &&
        vM.region == "" &&
        vM.infrastructure != "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.type_marche_id == vM.type_marche &&
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.infrastructure_id == vM.infrastructure &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourn les marche INFRA, REGIONS,TYPE MARCHE
      if (
        vM.unite_administrative_id == "" &&
        vM.region != "" &&
        vM.infrastructure != "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.type_marche_id == vM.type_marche &&
            item.localisation_geographie_id == vM.region &&
            item.infrastructure_id == vM.infrastructure &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourn les marche INFRA, REGIONS,TYPE MARCHE,UA
      if (
        vM.unite_administrative_id != "" &&
        vM.region != "" &&
        vM.infrastructure != "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.type_marche_id == vM.type_marche &&
            item.localisation_geographie_id == vM.region &&
            item.infrastructure_id == vM.infrastructure &&
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }
      this.status_marches = status;
      this.listeDesMarchePasStatus = objet;
      let distinct = [
        ...new Set(objet.map((item) => item.unite_administrative_id)),
      ];
      this.tableMarcheStatue = distinct;
    },
    listePlanifierMarcheStatus(status) {
      // console.log(this.objetMarchePlanierPasUiteOuRegion)
      if (status == "planifie") {
        status = 0;
      }
      this.tableMarcheStatue = "";

      this.info_status_marche = this.infoEtatMarche(status);
      let vM = this;
      let objet = this.objetMarchePlanierPasUiteOuRegion.filter((item) => {
        if (item.parent_id == null && item.attribue == status) {
          return item;
        }
      });

      if (
        vM.region != "" &&
        vM.unite_administrative_id == "" &&
        vM.infrastructure == "" &&
        vM.type_marche == ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.localisation_geographie_id == vM.region &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'une unite administrative selectionner
      if (
        vM.unite_administrative_id != "" &&
        vM.region == "" &&
        vM.infrastructure == "" &&
        vM.type_marche == ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'une une infrastucture selectionner
      if (
        vM.infrastructure != "" &&
        vM.unite_administrative_id == "" &&
        vM.region == "" &&
        vM.type_marche == ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.infrastructure_id == vM.infrastructure &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'un type de marché selectionner
      if (
        vM.infrastructure == "" &&
        vM.unite_administrative_id == "" &&
        vM.region == "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (item.type_marche_id == vM.type_marche && item.parent_id != "") {
            return item;
          }
        });
      }

      //retourne les marches de region et unite adminstrative selectionner
      if (
        vM.unite_administrative_id != "" &&
        vM.region != "" &&
        vM.infrastructure == "" &&
        vM.type_marche == ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.localisation_geographie_id == vM.region &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'une infrastructure et unite adminstrative selectionner

      if (
        vM.unite_administrative_id != "" &&
        vM.region == "" &&
        vM.infrastructure != "" &&
        vM.type_marche == ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.infrastructure_id == vM.infrastructure &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'un type marche et unite adminstrative selectionner

      if (
        vM.unite_administrative_id != "" &&
        vM.region == "" &&
        vM.infrastructure != "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.type_marche_id == vM.type_marche &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'une region et infrastructure selectionner
      if (
        vM.unite_administrative_id == "" &&
        vM.region != "" &&
        vM.infrastructure != "" &&
        vM.type_marche == ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.infrastructure_id == vM.infrastructure &&
            item.localisation_geographie_id == vM.region &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'une infrasture et type marche selectionner
      if (
        vM.unite_administrative_id == "" &&
        vM.region == "" &&
        vM.infrastructure != "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.infrastructure_id == vM.infrastructure &&
            item.type_marche_id == vM.type_marche &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'un type marche et regions selectionner
      if (
        vM.unite_administrative_id == "" &&
        vM.region != "" &&
        vM.infrastructure == "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.localisation_geographie_id == vM.region &&
            item.type_marche_id == vM.type_marche &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourn les marches d'une UA, REGION et INFRASTRUCTURE

      if (
        vM.unite_administrative_id != "" &&
        vM.region != "" &&
        vM.infrastructure != "" &&
        vM.type_marche == ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.infrastructure_id == vM.infrastructure &&
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.localisation_geographie_id == vM.region &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourn les marches d'une UA, REGION et TYPE MARCHE
      if (
        vM.unite_administrative_id != "" &&
        vM.region != "" &&
        vM.infrastructure == "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.type_marche_id == vM.type_marche &&
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.localisation_geographie_id == vM.region &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourn les marches d'une UA, INFRA et TYPE MARCHE
      if (
        vM.unite_administrative_id != "" &&
        vM.region == "" &&
        vM.infrastructure != "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.type_marche_id == vM.type_marche &&
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.infrastructure_id == vM.infrastructure &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourn les marche INFRA, REGIONS,TYPE MARCHE
      if (
        vM.unite_administrative_id == "" &&
        vM.region != "" &&
        vM.infrastructure != "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.type_marche_id == vM.type_marche &&
            item.localisation_geographie_id == vM.region &&
            item.infrastructure_id == vM.infrastructure &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourn les marche INFRA, REGIONS,TYPE MARCHE,UA
      if (
        vM.unite_administrative_id != "" &&
        vM.region != "" &&
        vM.infrastructure != "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.type_marche_id == vM.type_marche &&
            item.localisation_geographie_id == vM.region &&
            item.infrastructure_id == vM.infrastructure &&
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }
      this.status_marches = status;
      this.listeDesMarchePasStatus = objet;
      let distinct = [
        ...new Set(objet.map((item) => item.unite_administrative_id)),
      ];
      this.tableMarcheStatue = distinct;

        // document.getElementById("#table_resultat").scrollIntoView({
        //     behavior: "smooth"
        // });
    },
    afficherModalAjouterTitre() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false,
      });
    },
    print() {
      // Pass the element id here
      this.$htmlToPaper("printMe");
    },
    click_cartographie(type) {
        let stat = "pl";
        if (this.status_marches == "planifie") {
            this.status_marches = 0;
            stat = "planifier";
        }


        let objet = {
            status_marche: this.status_marches,
            infrastructure: this.infrastructure,
            unite_administrative: this.unite_administrative_id,
            type_marche: this.type_marche,
            region: this.region,
            stat: stat,
        };
        let objetMarche = this.objetMarchePasUniteOuRegion;

        if(type=="total"){
            objetMarche=this.objetMarchePasUniteOuRegion
        }
        if(type=="hp_ppm"){
            objetMarche=objetMarche.filter(
                (item) => item.plan_passation_marche_id == null
            );
        }
        if(type=="ppm"){
            objetMarche=objetMarche.filter(
                (item) => item.plan_passation_marche_id != null
            );
        }


        console.log(objetMarche)
        this.ajouterTableauBordFiltre(objetMarche);
        this.ajouterInfoTableauBordFiltre(objet);

      this.$router.push({
        name: "DetailCarteMarche",
      });
    },
    generateReport() {
      this.$refs.html2Pdf.generatePdf();
    },
  },
  watch: {
    type_marche: function (value) {
      console.log(value);

      this.isLoading = true;
      // simulate AJAX
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);

      if (this.info_status_marche != "") {
        this.listeMarcheStatus(this.status_marches);
      }
    },

    infrastructure: function (value) {
      console.log(value);
      this.isLoading = true;
      // simulate AJAX
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
      if (this.info_status_marche != "") {
        this.listeMarcheStatus(this.status_marches);
      }
    },
    region: function (value) {
      console.log(value);
      this.isLoading = true;
      // simulate AJAX
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
      if (this.info_status_marche != "") {
        this.listeMarcheStatus(this.status_marches);
      }
    },
    unite_administrative_id: function (value) {
      console.log(value);
      this.isLoading = true;
      // simulate AJAX
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
      if (this.info_status_marche != "") {
        this.listeMarcheStatus(this.status_marches);
      }
    },
  },
};
</script>

<style scoped>
.grdirModalActeEffet {
  width: 1200px;
  margin: 0 -530px;
  height: 550px;
}
.tailgrand {
  width: 50%;
  margin: 0 -25%;
}
.tailAvenant {
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
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
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

.gutters-sm > .col,
.gutters-sm > [class*="col-"] {
  padding-right: 8px;
  padding-left: 8px;
}
.mb-3,
.my-3 {
  margin-bottom: 1rem !important;
}

.bg-gray-300 {
  background-color: #e2e8f0;
}
.h-100 {
  height: 100% !important;
}
.shadow-none {
  box-shadow: none !important;
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
  content: "";
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

.JesterBox div:target {
  visibility: visible;
}

.JesterBox div:target:before {
  background-color: rgba(0, 0, 0, 0.7);
}

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
.bg-prevision {
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
  background-color: #ffbd3d !important;
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
.bg-en-avenant {
  background-color: #ff6c1d !important;
}
.bg-acheve-delais {
  background-color: #757171 !important;
}
.bg-horts-ppm {
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
  box-shadow: 0 0.46875rem 2.1875rem rgba(90, 97, 105, 0.1),
    0 0.9375rem 1.40625rem rgba(90, 97, 105, 0.1),
    0 0.25rem 0.53125rem rgba(90, 97, 105, 0.12),
    0 0.125rem 0.1875rem rgba(90, 97, 105, 0.1);
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

.card .card-statistic-3 .card-icon-large .fas,
.card .card-statistic-3 .card-icon-large .far,
.card .card-statistic-3 .card-icon-large .fab,
.card .card-statistic-3 .card-icon-large .fal {
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
  position: relative;
  height: 20px;
  width: 100%;
  background: transparent;
}

.card-1 {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

/*.card-1:hover {*/
/*box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);*/
/*}*/

.card-2 {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.card-3 {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.card-4 {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.card-5 {
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
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

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.annimB{
    font-weight: bold;
    color:rgb(221, 30, 30);
    animation:blinkButton 1s infinite;  
}

@keyframes blinkButton {
    10%{opacity:0.1;}
    50%{opacity:1; box-shadow: 1px 0px 30px rgb(41, 43, 42);}
    100%{
        opacity:0.1;
    }
    
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
