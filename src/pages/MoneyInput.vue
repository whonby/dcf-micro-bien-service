<template>
    <div>
        <input type="text" placeholder="montant" v-model="displayValue" @blur="isInputActive = false" @focus="isInputActive = true"/>
    </div>
</template>

<script>
    export default {
        name:'money-input',
        props: ["value"],
        data() {
            return{
                isInputActive: false
            }
        },

        computed: {
            displayValue: {
                get: function() {
                    if (this.isInputActive) {
                        // Le curseur se trouve dans le champ de saisie. valeur d'affichage non formatée pour l'utilisateur
                        return this.value.toString()
                    } else {
                        // L'utilisateur ne modifie pas maintenant. Format de la valeur d'affichage de l'interface utilisateur
                        return "XOF " + this.value.toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")
                    }
                },
                set: function(modifiedValue) {
                    // Recalculer la valeur après avoir ignoré "$" et "," dans l'entrée utilisateur
                    // eslint-disable-next-line no-useless-escape
                    let newValue = parseFloat(modifiedValue.replace(/[^\d\.]/g, ""))
                    // Ensure that it is not NaN
                    if (isNaN(newValue)) {
                        newValue = 0
                    }
                    // Note: we cannot set this.value as it is a "prop". It needs to be passed to parent component
                    // $emit the event so that parent component gets it
                    this.$emit('input', newValue)
                }
            }
        },
        methods: {

        }
    };
</script>
