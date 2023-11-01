<template>
    <div>
        <p v-custom-font.xxl.blue>Titulo del componente usando custom fint con modificadores</p>
        <input v-custom-color:green type="text" v-model="message" />
        <h3>{{ message }}</h3>
        <h3> {{ reverse }}</h3>
        <input type="number" v-model="subtotal" />
        <h3 v-font-size>Total impuestos a pagar (21%): {{ porcentaje }}</h3>
        <p v-custom-size="100">Probando mi directiva personalizada custom size a 100</p>
        <p v-custom-size="50">Probando mi directiva personalizada custom size a 50</p>
        <p v-custom-color:red>Probando mi directiva personalizada con argumento - color</p>
    </div>
</template>

<script>
import { defineComponent } from 'vue';


    export default defineComponent({
        name: 'ComputedExample',
        data(){
            return {
                message: '',
                iva: 21,
                subtotal: 0
            }
        },
        computed: {
            reverse(){
                return this.message.split('').reverse().join('');
            },

            porcentaje(){
                return ((this.subtotal * this.iva)/100);
            }
        }
    })
</script>

<style scoped>

</style>