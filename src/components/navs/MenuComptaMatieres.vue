<template>
    <!--top-Header-menu-->
    <div id="user-nav" class="navbar navbar-inverse">
        <ul class="nav">

            <li title="Stock">
                <router-link :to="{name:'StockArticles'}" tag="a">
                    <!-- <i class="icon-list"></i> -->
                    <span class="text">GESTIONS DE STOCK</span>

                </router-link>
            </li>

            <li>
                <router-link :to="{name:'immobilisation'}" tag="a">
                    <!-- <i class="icon-money"></!-->
                    <span class="text">AFFECTATION</span>
                </router-link>
            </li>
            <li title="Immobilisation">
                <router-link :to="{name:'historisqueAffection'}" tag="a">
                    <!-- <i class="icon-list"></i> -->
                    <span class="text">DEMANDE EQUIPEMENT</span>

                </router-link>
            </li>

            <li>
                <router-link :to="{name:'simulationAmortissement'}" tag="a">
                    <!-- <i class="icon-table"></i> -->
                    <span class="text">SIMULATION AMORTISSEMENT</span>
                </router-link>
            </li>

        </ul>
    </div>
</template>

<script>


    export default {

    };
</script>
