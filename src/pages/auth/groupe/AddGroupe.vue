<template>
    <div>
        <div class="container-fluid">

            <div class="row-fluid">
                <div class="span12">

                    <div class="widget-box">
                        <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                            <h5>Ajouter un groupe</h5>


                        </div>
                        <div class="widget-content nopadding">
                     <div class="row-fluid">
                         <div class="span4">
                             <div class="widget-box">
                                 <div class="widget-title"> <span class="icon"> <i class="icon-align-justify"></i> </span>
                                     <h5>Information groupe</h5>
                                 </div>
                                 <div class="widget-content nopadding">
                                     <form action="#" method="get" class="form-horizontal">
                                         <div class="control-group">
                                             <label class="control-label">Nom Groupe:</label>
                                             <div class="controls">
                                                 <input type="text" class="span11" placeholder="First name">
                                             </div>
                                         </div>


                                         <div class="control-group">
                                             <label class="control-label">Description</label>
                                             <div class="controls">
                                                 <textarea class="span11"></textarea>
                                             </div>
                                         </div>

                                     </form>
                                 </div>
                             </div>
                         </div>
                         <div class="span8">
                             <div class="widget-box">
                                 <div class="widget-title"> <span class="icon"> <i class="icon-align-justify"></i> </span>
                                     <h5>Transfere</h5>
                                 </div>
                                 <div class="widget-content nopadding">
                                     <div class="widget-box">
                                         <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
                                             <h5>Transfere</h5>
                                         </div>
                                         <div class="widget-content">

                                            </div>
                                     </div>


                                 </div>
                             </div>
                         </div>
                     </div>
                            <div class="row-fluid">
                                <div class="span6">
                                    <div class="widget-box">
                                        <div class="widget-title"> <span class="icon"> <i class="icon-align-justify"></i> </span>
                                            <h5>PARAMETRES GENERAUX</h5>
                                        </div>
                                        <div class="widget-content nopadding">
                                            <div class="widget-box">
                                                <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
                                                    <h5>ADMINISTRATIFS</h5>
                                                </div>
                                                <div class="widget-content">

                                                    <table class="table table-bordered table-striped">
                                                        <thead>
                                                        <tr>
                                                            <th>Fonctions</th>
                                                            <th>Ajouter</th>
                                                            <th>Mofications</th>
                                                            <th>Consulter</th>
                                                            <th>Imprimer</th>
                                                            <th>Suppimer</th>
                                                            <th>Exporter</th>
                                                            <th>Importer</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr class="odd gradeX">
                                                            <td>Exercices </td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="exercice.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="exercice.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="exercice.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="exercice.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="exercice.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="exercice.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="exercice.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="even gradeC">
                                                            <td>Nature section</td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="nature_section.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="nature_section.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="nature_section.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="nature_section.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="nature_section.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="nature_section.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="nature_section.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="even gradeC">
                                                            <td>Sections</td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="sections.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="sections.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="sections.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="sections.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="sections.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="sections.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="sections.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="odd gradeA">
                                                            <td>Grandes natures  depense</td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="grand_nature_depense.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="grand_nature_depense.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="grand_nature_depense.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="grand_nature_depense.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="grand_nature_depense.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="grand_nature_depense.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="grand_nature_depense.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="even gradeA">
                                                            <td>Type UA</td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="type_unite_administrative.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="type_unite_administrative.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="type_unite_administrative.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="type_unite_administrative.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="type_unite_administrative.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="type_unite_administrative.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="type_unite_administrative.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="even gradeA">
                                                            <td>Gestion Des CF</td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="gestion_cf.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="gestion_cf.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="gestion_cf.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="gestion_cf.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="gestion_cf.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="gestion_cf.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="gestion_cf.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div class="widget-box">
                                                <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
                                                    <h5>BAILLEURS</h5>
                                                </div>
                                                <div class="widget-content">
                                                    <table class="table table-bordered table-striped">
                                                        <thead>
                                                        <tr>
                                                            <th>Fonctions</th>
                                                            <th>Ajouter</th>
                                                            <th>Mofications</th>
                                                            <th>Consulter</th>
                                                            <th>Imprimer</th>
                                                            <th>Suppimer</th>
                                                            <th>Exporter</th>
                                                            <th>Importer</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr class="odd gradeX">
                                                            <td>Type Financement </td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="type_finnancements.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="type_finnancements.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="type_finnancements.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="type_finnancements.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="type_finnancements.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="type_finnancements.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="type_finnancements.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="even gradeC">
                                                            <td>Source Finnancement</td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="source_finnancement.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="source_finnancement.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="source_finnancement.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="source_finnancement.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="source_finnancement.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="source_finnancement.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="source_finnancement.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            <div class="widget-box">
                                                <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
                                                    <h5>STRUCTURES</h5>
                                                </div>
                                                <div class="widget-content">
                                                    <table class="table table-bordered table-striped">
                                                        <thead>
                                                        <tr>
                                                            <th>Fonctions</th>
                                                            <th>Ajouter</th>
                                                            <th>Mofications</th>
                                                            <th>Consulter</th>
                                                            <th>Imprimer</th>
                                                            <th>Suppimer</th>
                                                            <th>Exporter</th>
                                                            <th>Importer</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr class="odd gradeX">
                                                            <td>Structure fonctionnelle </td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="structure_fonctionnelle.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="structure_fonctionnelle.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="structure_fonctionnelle.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="structure_fonctionnelle.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="structure_fonctionnelle.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="structure_fonctionnelle.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="structure_fonctionnelle.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="even gradeC">
                                                            <td>Structure Programmes</td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="structure_programme.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="structure_programme.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="structure_programme.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="structure_programme.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="structure_programme.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="structure_programme.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="structure_programme.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="odd gradeX">
                                                            <td>Structure Programmatique </td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="structure_programmatique.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="structure_programmatique.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="structure_programmatique.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="structure_programmatique.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="structure_programmatique.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="structure_programmatique.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="structure_programmatique.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="odd gradeX">
                                                            <td>Structure Administrative </td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="structure_administrative.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="structure_administrative.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="structure_administrative.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="structure_administrative.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="structure_administrative.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="structure_administrative.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="structure_administrative.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="odd gradeX">
                                                            <td>Structure Geographique </td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="structure_geographique.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="structure_geographique.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="structure_geographique.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="structure_geographique.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="structure_geographique.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="structure_geographique.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="structure_geographique.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="even gradeC">
                                                            <td>Structure Economique</td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="structure_economique.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="structure_economique.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="structure_economique.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="structure_economique.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="structure_economique.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="structure_economique.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="structure_economique.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="odd gradeX">
                                                            <td>Structure decissionnelles </td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="structure_decisionnelle.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="structure_decisionnelle.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="structure_decisionnelle.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="structure_decisionnelle.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="structure_decisionnelle.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="structure_decisionnelle.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="structure_decisionnelle.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="even gradeC">
                                                            <td>Structure des actes</td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="structure_acte.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="structure_acte.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="structure_acte.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="structure_acte.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="structure_acte.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="structure_acte.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="structure_acte.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div class="widget-box">
                                                <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
                                                    <h5>PLANS</h5>
                                                </div>
                                                <div class="widget-content">
                                                    <table class="table table-bordered table-striped">
                                                        <thead>
                                                        <tr>
                                                            <th>Fonctions</th>
                                                            <th>Ajouter</th>
                                                            <th>Mofications</th>
                                                            <th>Consulter</th>
                                                            <th>Imprimer</th>
                                                            <th>Suppimer</th>
                                                            <th>Exporter</th>
                                                            <th>Importer</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr class="odd gradeX">
                                                            <td>Plan fonctionnel </td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="plan_fonctionnel.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="plan_fonctionnel.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="plan_fonctionnel.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="plan_fonctionnel.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="plan_fonctionnel.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="plan_fonctionnel.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="plan_fonctionnel.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="even gradeC">
                                                            <td>Plan programme</td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="plan_programme.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="plan_programme.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="plan_programme.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="plan_programme.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="plan_programme.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="plan_programme.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="plan_programme.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="odd gradeX">
                                                            <td>Plan Programmatique </td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="plan_programmatique.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="plan_programmatique.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="plan_programmatique.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="plan_programmatique.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="plan_programmatique.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="plan_programmatique.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="plan_programmatique.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="odd gradeX">
                                                            <td>Service Gestion Crédit </td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="service_gestionnairee_credit.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="service_gestionnairee_credit.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="service_gestionnairee_credit.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="service_gestionnairee_credit.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="service_gestionnairee_credit.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="service_gestionnairee_credit.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="service_gestionnairee_credit.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="odd gradeX">
                                                            <td>Localisation Geographique </td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="localisation_geographique.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="localisation_geographique.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="localisation_geographique.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="localisation_geographique.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="localisation_geographique.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="localisation_geographique.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="localisation_geographique.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="even gradeC">
                                                            <td>Plan Economique</td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="plan_economique.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="plan_economique.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="plan_economique.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="plan_economique.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="plan_economique.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="plan_economique.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="plan_economique.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="odd gradeX">
                                                            <td>Plan decissionnelles </td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="plan_decisionnel.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="plan_decisionnel.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="plan_decisionnel.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="plan_decisionnel.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="plan_decisionnel.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="plan_decisionnel.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="plan_decisionnel.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="even gradeC">
                                                            <td>Plan des actes</td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="plan_acte.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="plan_acte.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="plan_acte.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="plan_acte.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="plan_acte.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="plan_acte.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="plan_acte.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div class="widget-box">
                                                <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
                                                    <h5>CODIFICATIONS</h5>
                                                </div>
                                                <div class="widget-content">
                                                    <table class="table table-bordered table-striped">
                                                        <thead>
                                                        <tr>
                                                            <th>Fonctions</th>
                                                            <th>Ajouter</th>
                                                            <th>Mofications</th>
                                                            <th>Consulter</th>
                                                            <th>Imprimer</th>
                                                            <th>Suppimer</th>
                                                            <th>Exporter</th>
                                                            <th>Importer</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr class="odd gradeX">
                                                            <td>Pays </td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="pays.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="pays.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="pays.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="pays.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="pays.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="pays.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="pays.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="even gradeC">
                                                            <td>Ville</td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="ville.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="ville.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="ville.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="ville.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="ville.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="ville.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="ville.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="odd gradeX">
                                                            <td>Commune </td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="commune.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="commune.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="commune.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="commune.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="commune.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="commune.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="commune.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="odd gradeX">
                                                            <td>Type candidat </td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="type_candidat.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="type_candidat.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="type_candidat.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="type_candidat.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="type_candidat.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="type_candidat.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="type_candidat.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="even gradeC">
                                                            <td>Type de facture</td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="type_facture.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="type_facture.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="type_facture.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="type_facture.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="type_facture.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="type_facture.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="type_facture.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="odd gradeX">
                                                            <td>Ligne exemptée </td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="ligne_exempte.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="ligne_exempte.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="ligne_exempte.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="ligne_exempte.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="ligne_exempte.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="ligne_exempte.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="ligne_exempte.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="even gradeC">
                                                            <td>Type analyse</td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="type_analyse.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="type_analyse.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="type_analyse.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="type_analyse.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="type_analyse.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="type_analyse.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="type_analyse.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div class="widget-box">
                                                <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
                                                    <h5>FOURNISSEURS</h5>
                                                </div>
                                                <div class="widget-content">
                                                    <table class="table table-bordered table-striped">
                                                        <thead>
                                                        <tr>
                                                            <th>Fonctions</th>
                                                            <th>Ajouter</th>
                                                            <th>Mofications</th>
                                                            <th>Consulter</th>
                                                            <th>Imprimer</th>
                                                            <th>Suppimer</th>
                                                            <th>Exporter</th>
                                                            <th>Importer</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr class="odd gradeX">
                                                            <td>Banque </td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="banques.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="banques.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="banques.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="banques.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="banques.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="banques.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="banques.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="even gradeC">
                                                            <td>Agence Banque</td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="agence_banque.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="agence_banque.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="agence_banque.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="agence_banque.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="agence_banque.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="agence_banque.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="agence_banque.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>

                                                        <tr class="odd gradeX">
                                                            <td>Secteur Activite </td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="secteur_activite.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="secteur_activite.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="secteur_activite.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="secteur_activite.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="secteur_activite.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="secteur_activite.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="secteur_activite.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="even gradeC">
                                                            <td>Entreprises</td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="entreprise.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="entreprise.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="entreprise.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="entreprise.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="entreprise.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="entreprise.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="entreprise.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="odd gradeX">
                                                            <td>Mode de Paiement </td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="mode_paiement.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="mode_paiement.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="mode_paiement.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="mode_paiement.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="mode_paiement.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="mode_paiement.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="mode_paiement.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div class="widget-box">
                                                <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
                                                    <h5>MARCHES</h5>
                                                </div>
                                                <div class="widget-content">
                                                    <table class="table table-bordered table-striped">
                                                        <thead>
                                                        <tr>
                                                            <th>Fonctions</th>
                                                            <th>Ajouter</th>
                                                            <th>Mofications</th>
                                                            <th>Consulter</th>
                                                            <th>Imprimer</th>
                                                            <th>Suppimer</th>
                                                            <th>Exporter</th>
                                                            <th>Importer</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr class="odd gradeX">
                                                            <td>Type Marché </td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="type_marche.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="type_marche.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="type_marche.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="type_marche.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="type_marche.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="type_marche.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="type_marche.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="even gradeC">
                                                            <td>Famille Procedure</td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="fammille_procedure.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="fammille_procedure.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="fammille_procedure.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="fammille_procedure.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="fammille_procedure.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="fammille_procedure.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="fammille_procedure.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>

                                                        <tr class="odd gradeX">
                                                            <td>Procedure Passation </td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="procedure_passation.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="procedure_passation.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="procedure_passation.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="procedure_passation.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="procedure_passation.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="procedure_passation.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="procedure_passation.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="even gradeC">
                                                            <td>Role Membre Cojo</td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="role_membre_cojo.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="role_membre_cojo.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="role_membre_cojo.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="role_membre_cojo.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="role_membre_cojo.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="role_membre_cojo.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="role_membre_cojo.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>


                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div class="widget-box">
                                                <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
                                                    <h5>PERSONNELS</h5>
                                                </div>
                                                <div class="widget-content">
                                                    <table class="table table-bordered table-striped">
                                                        <thead>
                                                        <tr>
                                                            <th>Fonctions</th>
                                                            <th>Ajouter</th>
                                                            <th>Mofications</th>
                                                            <th>Consulter</th>
                                                            <th>Imprimer</th>
                                                            <th>Suppimer</th>
                                                            <th>Exporter</th>
                                                            <th>Importer</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr class="odd gradeX">
                                                            <td>Structure Matrimoniale </td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="situation_matrimoniale.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="situation_matrimoniale.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="situation_matrimoniale.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="situation_matrimoniale.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="situation_matrimoniale.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="situation_matrimoniale.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="situation_matrimoniale.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="even gradeC">
                                                            <td>Categorie Grade</td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="categorie_grade.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="categorie_grade.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="categorie_grade.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="categorie_grade.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="categorie_grade.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="categorie_grade.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="categorie_grade.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="odd gradeX">
                                                            <td>Grade </td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="grades.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="grades.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="grades.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="grades.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="grades.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="grades.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="grades.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="odd gradeX">
                                                            <td>Service </td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="services.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="services.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="services.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="services.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="services.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="services.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="services.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="odd gradeX">
                                                            <td>Fonction Budgetaire </td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="fonction_budgetaire.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="fonction_budgetaire.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="fonction_budgetaire.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="fonction_budgetaire.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="fonction_budgetaire.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="fonction_budgetaire.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="fonction_budgetaire.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="even gradeC">
                                                            <td>Fonction Administrative</td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="fonction_administrative.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="fonction_administrative.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="fonction_administrative.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="fonction_administrative.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="fonction_administrative.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="fonction_administrative.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="fonction_administrative.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="odd gradeX">
                                                            <td>Famille d'emploi </td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="famille_emploi.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="famille_emploi.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="famille_emploi.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="famille_emploi.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="famille_emploi.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="famille_emploi.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="famille_emploi.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="even gradeC">
                                                            <td>Classification Grade et Emplois</td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="classification_grade_emploi.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="classification_grade_emploi.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="classification_grade_emploi.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="classification_grade_emploi.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="classification_grade_emploi.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="classification_grade_emploi.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="classification_grade_emploi.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="even gradeC">
                                                            <td>Type Acte</td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="type_acte.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="type_acte.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="type_acte.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="type_acte.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="type_acte.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="type_acte.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="type_acte.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="odd gradeX">
                                                            <td>Type conges </td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="type_conges.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="type_conges.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="type_conges.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="type_conges.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="type_conges.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="type_conges.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="type_conges.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="even gradeC">
                                                            <td>Niveau d'etude</td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="niveau_etude.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="niveau_etude.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="niveau_etude.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="niveau_etude.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="niveau_etude.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="niveau_etude.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="niveau_etude.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="even gradeC">
                                                            <td>Type de salarie</td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="type_salarie.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="type_salarie.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="type_salarie.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="type_salarie.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="type_salarie.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="type_salarie.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="type_salarie.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="odd gradeX">
                                                            <td>Type de contrat </td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="type_contrat.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="type_contrat.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="type_contrat.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="type_contrat.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="type_contrat.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="type_contrat.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="type_contrat.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div class="widget-box">
                                                <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
                                                    <h5>IMMOBILISATIONS</h5>
                                                </div>
                                                <div class="widget-content">
                                                    <table class="table table-bordered table-striped">
                                                        <thead>
                                                        <tr>
                                                            <th>Fonctions</th>
                                                            <th>Ajouter</th>
                                                            <th>Mofications</th>
                                                            <th>Consulter</th>
                                                            <th>Imprimer</th>
                                                            <th>Suppimer</th>
                                                            <th>Exporter</th>
                                                            <th>Importer</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr class="odd gradeX">
                                                            <td>Nature Entree </td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="nature_entree.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="nature_entree.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="nature_entree.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="nature_entree.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="nature_entree.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="nature_entree.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="nature_entree.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="even gradeC">
                                                            <td>Cause Inactivite</td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="cause_inactivite.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="cause_inactivite.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="cause_inactivite.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="cause_inactivite.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="cause_inactivite.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="cause_inactivite.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="cause_inactivite.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="odd gradeX">
                                                            <td>Etat Immobilisation </td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="etat_immobilisation.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="etat_immobilisation.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="etat_immobilisation.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="etat_immobilisation.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="etat_immobilisation.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="etat_immobilisation.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="etat_immobilisation.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="odd gradeX">
                                                            <td>Groupe Equipement </td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="groupe_equipement.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="groupe_equipement.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="groupe_equipement.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="groupe_equipement.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="groupe_equipement.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="groupe_equipement.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="groupe_equipement.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="odd gradeX">
                                                            <td>Famille equipement </td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="famille_equipement.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="famille_equipement.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="famille_equipement.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="famille_equipement.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="famille_equipement.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="famille_equipement.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="famille_equipement.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="even gradeC">
                                                            <td>Rederentiel des prix</td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="reference_prix.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="reference_prix.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="reference_prix.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="reference_prix.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="reference_prix.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="reference_prix.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="reference_prix.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="odd gradeX">
                                                            <td>Taux </td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="taux.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="taux.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="taux.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="taux.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="taux.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="taux.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="taux.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>
                                                        <tr class="even gradeC">
                                                            <td>Equipement type</td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%);  "  v-model="equipement_type.ajouter" >
                                                                <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "    v-model="equipement_type.modifier" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="equipement_type.consulter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="equipement_type.imprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="equipement_type.supprimer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); " v-model="equipement_type.exporter" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                            <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="danger" toggle style="transform: scale(0.9) translate(-10%, -95%); "  v-model="equipement_type.importer" >
                                                                <label slot="off-label"></label>
                                                            </p-check></td>
                                                        </tr>


                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div class="widget-box">
                                                <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
                                                    <h5>MISSIONS</h5>
                                                </div>
                                                <div class="widget-content">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="span6">
                                    <div class="widget-box">
                                        <div class="widget-title"> <span class="icon"> <i class="icon-align-justify"></i> </span>
                                            <h5>Transfere</h5>
                                        </div>
                                        <div class="widget-content nopadding">
                                            <div class="widget-box">
                                                <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
                                                    <h5>Transfere</h5>
                                                </div>
                                                <div class="widget-content">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>









    </div>
</template>



<script>

    import {mapGetters, mapActions} from 'vuex'
    export default {

        data() {
            return {
              exercice:{
                  code:"EXERCICES_BUDGETAIRES",
                  ajouter:false,
                  modifier:false,
                  consulter:false,
                  imprimer:false,
                  supprimer:false,
                  exporter:false,
                  importer:false,
              },

                nature_section:{
                    code:"NATURE_SECTION",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                },
                sections:{
                    code:"SECTIONS",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                },
                grand_nature_depense:{
                    code:"GRANDES_NATURES_DEPENSES",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                },
                type_unite_administrative:{
                    code:"TYPE_UA",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                gestion_cf:{
                    code:"GESTION_CF",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                },
                type_finnancements:{
                    code:"TYPE_FINANCEMENT",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                },
                source_finnancement:{
                    code:"SOURCE_FINANCEMENT",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                structure_fonctionnelle:{
                    code:"STRUCTURE_FONCTIONNELLE",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                },
                structure_programme:{
                    code:"STRUCTURE_PROGRAMME",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                },
                structure_geographique:{
                    code:"STRUCTURE_GEOGRAPHIQUE",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                structure_programmatique:{
                    code:"STRUCTURE_PROGRAMMATIQUE",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                structure_administrative:{
                    code: "STRUCTURE_ADMINISTRATIVE",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                structure_economique:{
                    code:"STRUCTURE_ECONOMIQUE",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                structure_decisionnelle:{
                    code:"STRUCTURE_DECISIONNELLE",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }

                ,
                structure_acte:{
                    code:"STRUCTURE_ACTE",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                },
                plan_fonctionnel:{
                    code:"PLAN_FONCTIONNEL",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                plan_programme:{
                    code:"PLAN_PROGRAMME",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                plan_programmatique:{
                    code:"PLAN_PROGRAMMATIQUE",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                service_gestionnairee_credit:{
                    code: "SERVICE_GESTIONNAIRE_CREDIT",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                localisation_geographique:{
                    code:"LOCALISATION_GEOGRAPHIQUE",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                plan_economique:{
                    code:"PLAN_ECONOMIQUE",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                plan_decisionnel:{
                    code:"PLAN_DECISIONNEL",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                plan_acte:{
                    code:"PLAN_ACTE",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,

                pays:{
                    code:"PAYS",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                ville:{
                    code:"VILLE",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                },
                commune:{
                    code:"COMMUNE",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                type_candidat:{
                    code:"TYPE_CANDIDAT",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                type_facture:{
                    code:"TYPE_FACTURE",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                ligne_exempte:{
                    code:"LIGNE_EXEMPTEE",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                type_analyse:{
                    code:"TYPE_ANALYSE",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                banques:{
                    code:"BANQUES",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                agence_banque:{
                    code:"AGENCE_BANQUE",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                secteur_activite:{
                    code:"SECTEUR_ACTIVITE",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                entreprise:{
                    code:"ENTREPRISE",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                mode_paiement:{
                    code: "MODE_PAIEMENT",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                type_marche:{
                    code: "TYPE_MARCHE",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                fammille_procedure:{
                    code: "FAMILLE_PROCEDURE",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                procedure_passation:{
                    code: "PROCEDURE_PASSATION",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                role_membre_cojo:{
                    code: "ROLE_MEMBRE_COJO",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                situation_matrimoniale:{
                    code: "SITUATION_MATRIMONIALE",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                categorie_grade:{
                    code: "CATEGORIE_GRADE",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                grades:{
                    code: "GRADES",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                services:{
                    code: "SERVICE",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                fonction_budgetaire:{
                    code: "FONCTION_BUDGETAIRE",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,

                fonction_administrative:{
                    code: "FONCTION_ADMINISTRATIVE",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                famille_emploi:{
                    code: "FAMILLE_EMPLOI",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                classification_grade_emploi:{
                    code: "CLASSIFICATION_GRADE_EMPLOI",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                type_acte:{
                    code: "TYPE_ACTE",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                type_conges:{
                    code: "TYPE_CONGES",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                niveau_etude:{
                    code: "NIVEAU_ETUDE",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                type_salarie:{
                    code: "TYPE_SALARIE",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                type_contrat:{
                    code: "TYPE_SALARIE",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                nature_entree:{
                    code: "NATURE_ENTREE",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                cause_inactivite:{
                    code: "CAUSE_INACTIVITE",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                etat_immobilisation:{
                    code: "ETAT_IMMOBILISATION",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                groupe_equipement:{
                    code: "GROUPE_EQUIPEMENT",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                famille_equipement:{
                    code: "FAMILLE_EQUIPEMENT",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                reference_prix:{
                    code: "REFERENCE_PRIX",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                taux:{
                    code: "TAUX",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                equipement_type:{
                    code: "EQUIPEMENT_TYPE",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }
                ,
                norme_mission:{
                    code: "NORME_MISSION",
                    ajouter:false,
                    modifier:false,
                    consulter:false,
                    imprimer:false,
                    supprimer:false,
                    exporter:false,
                    importer:false,
                }



            };
        },

        created() {

        },
        computed: {

            ...mapGetters('Utilisateurs', ['getterGroupe']),

        },
        methods: {
            // methode pour notre action
            ...mapActions('personnelUA', ['getTypeSalarie',"ajouterTypeSalarie","supprimerTypeSalarie","modifieTypeSalaire"]),


        }
    };
</script>


<style scoped>
    legend {
        background-color: #000;
        color: #fff;
        font-size: 1em;
        padding: 3px 6px;
    }

    fieldset{
        border: 1px #ccc solid !important;
    }
    .output {
        font: 1rem 'Fira Sans', sans-serif;
    }
</style>