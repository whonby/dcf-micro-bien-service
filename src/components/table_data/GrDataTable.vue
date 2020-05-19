<template>
    <div>
         <table class="table table-bordered table-striped">
            <thead>
            <tr>
                <th :for="key in columns"
                    @click="sortBy(key)"
                    :class="{ active: sortKey == key }">
                    {{ key | capitalize }}
                    <i class="icon-caret-down" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
              </i>
                </th>
            </tr>
            </thead>
            <tbody>
            <slot></slot>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
   props: {
            //heroes: Array,
            columns: Array,
            //filterKey: String
        },
        data() {
            let sortOrders = {};
            this.columns.forEach(function(key) {
                sortOrders[key] = 1;
            });
            return {
                sortKey: "",
                sortOrders: sortOrders
            };
        },

        created() {

        },
        computed: {

        },
        filters: {
            capitalize: function(str) {
                return str.charAt(0).toUpperCase() + str.slice(1);
            }
        },
        methods: {
            sortBy: function(key) {
                this.sortKey = key;
                this.sortOrders[key] = this.sortOrders[key] * -1;
            },
            partition(items, size) {
                let result = _.groupBy(items, function(item, i) {
                    return Math.floor(i/size);
                });
                return _.map(result, function(val, key) {
                    return val;
                });
            }

        } 
}
</script>