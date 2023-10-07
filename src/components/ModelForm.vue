<template>
    <section>
        <h1>Formulario</h1>
        <form>
            <label for="dni">DNI:</label>
            <input type="text" id="dni" name="dni" v-model="persona.dni"/><br><br>

            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" v-model="persona.nombre"/><br><br>

            <label for="apellido">Apellido:</label>
            <input type="text" id="apellido" name="apellido" v-model="persona.apellido"/><br><br>

            <label for="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" v-model="persona.email"/><br><br>

            <label for="pais">País:</label>
            <select id="pais" name="pais" v-model="persona.pais">
                <option value="0" selected="selected">Seleccione País</option>
                <option value="España">España</option>
                <option value="Mexico">México</option>
                <option value="Estados Unidos">Estados Unidos</option>
                <option value="Canada">Canadá</option>
            </select><br><br>

            <label for="skills">Skills:</label>
            <input type="text" id="skills" name="skills" v-model="skill"/><button type="button" @click="handleSkill()">Agregar Skill</button><br><br>
            <div>
                <ul>
                    <li v-for="(habilidad, index) in persona.skills" v-bind:key="index">{{ habilidad }}</li>
                </ul>
            </div>

            <label>Autorización de terminos y condiciones:</label><br>
            <input type="checkbox" id="autorizacion" name="autorizacion" value="autorizado" v-model="persona.agree"/>
            <label for="autorizacion">Acepto los terminos y condiciones</label><br><br>

            
            <button type="button" @click="handleAddPerson()">Registrar</button>
        </form>
    </section>

    <section>
        <h2>Listado Personas</h2>
        <table class="default">
            <tr>
                <th>DNI</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Pais</th>
                <th>Consentimiento</th>
            </tr>
            <tr v-for="elem in personas" :key="elem.dni">
                <td>{{elem.dni}}</td>
                <td>{{elem.nombre}}</td>
                <td>{{elem.apellido}}</td>
                <td>{{elem.email}}</td>
                <td>{{elem.pais}}</td>
                <td>
                    <ul>
                        <li v-for="(item, index) in elem.skills" :key="index">{{ item }}</li>
                    </ul>
                </td>
                <td v-if="elem.agree">Aceptada</td>
                <td v-else>No aceptada</td>
            </tr>
        </table>
    </section>
</template>

<script>
export default {
  name: "ModelForm",
  data() {
    return {
      persona: {
        dni: "",
        nombre: "",
        apellido: "",
        email: "",
        pais: "",
        skills: [],
        agree: false,
      },
      personas: [],
      skill: "",
    };
  },
  methods: {
    handleSkill() {
      this.persona.skills.push(this.skill);
      this.skill = "";
    },
    handleAddPerson() {
      this.personas.push({ ...this.persona });
      // Restablecer valores
      this.persona = {
        dni: "",
        nombre: "",
        apellido: "",
        email: "",
        pais: "",
        skills: [],
        agree: false,
      };
    },
  },
};
</script>

<!-- Composition API
<script setup>
    
    import {ref} from 'vue';

    let persona = ref({
        dni:'',
        nombre:'',
        apellido:'',
        email:'',
        pais:'',
        skills:[],
        agree:false
    });

    let personas = ref([]);

    let skill = ref('');

    const handleSkill = ()=>{
        persona.value.skills.push(skill.value);
        skill.value = "";
    }

    const handleAddPerson = ()=>{
        personas.value.push({
            dni: persona.value.dni,
            nombre: persona.value.nombre,
            apellido: persona.value.apellido,
            email:persona.value.email,
            pais:persona.value.pais,
            skills:persona.value.skills,
            agree:persona.value.agree

        });
        persona.value.dni = "";
        persona.value.nombre = "";
        persona.value.apellido = "";
        persona.value.email = "";
        persona.value.pais = "";
        persona.value.skills = [];
        persona.value.agree = false;
    }

</script>
-->
<style scoped>

</style>