/* eslint-disable no-unused-vars */
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

//el: etiqueta donde se esta montando el componente, binding: datos que recibimos en esta directiva
app.directive('font-size', {
    beforeMount: (el) => { el.style.fontSize = "50px" },
    updated: () =>{ }
}) //nombre de la directiva, objeto con las diferentes acciones o comportamientos que estamos realizando. v- se añade por defecto
//clave-valor , primero:  momento del ciclo de vida de nuestra aplicacion donde nuestra directiva actua
//              segundo: funcion-la actuacion que debe realizar cuando esto ocurra

app.directive('custom-size', {
    beforeMount: (el, binding) =>{ el.style.fontSize = binding.value + "px"}
})

app.directive('custom-color', {
    beforeMount: (el, binding) =>{ 
       let color = 'blue'; 
       switch(binding.arg){
        case 'red': 
            color='red'
            break
        case 'pink': 
            color='pink'
            break
        case 'green': 
            // eslint-disable-next-line no-unused-vars
            color='green'
            break
       }
       el.style.color = color;
    }
})

//Con modificadores

app.directive('custom-font', {
    // eslint-disable-next-line no-unused-vars
    beforeMount: (el, binding) =>{
        let size = 18
        
        if(binding.modifiers.sm){
            size = 10
        }else if(binding.modifiers.lg){
            size = 20
        }else if(binding.modifiers.xxl){
            size = 30
        }

        el.style.fontSize = size + "px"
        
        if(binding.modifiers.red){
            el.style.color = 'red'
        }else if(binding.modifiers.green){
            el.style.color = '#00ff00'
        }else if(binding.modifiers.blue){
            el.style.color = '#0000ff'
        }
    }
})



app.mount('#app')
