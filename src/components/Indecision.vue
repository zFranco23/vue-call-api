<template>
    <img v-if="image" :src="image" alt="bg">
    <div class="bg-dark"></div>

    <div class="indecision-container">
        <input 
            type="text" 
            placeholder="Hazme una pregunta"
            v-model.trim="question"
        >
        <p>Recuerda terminar con un signo de interrogación (?)</p>

        <div v-if="isValidQuestion">
            <h2>{{ question }}</h2>
            <h1>{{ answer }} </h1>
        </div>
    </div>
</template>

<script>
export default {
    name : 'IndecisionComponent',
    data(){
        return { 
            question : null , 
            answer : null , 
            image: null ,
            isValidQuestion : false
        }
    },
    methods : {
        async getAnswer(){
            /* Mientras espero la respuesta */
            this.answer = 'Pensando ....';

            try{
                const res = await fetch('https://yesno.wtf/api');
                const { answer , image} = await res.json();
    
                switch (answer) {
                    case 'yes':
                        this.answer='Si!';
                        break;
                    case 'no':
                        this.answer='No!';
                        break;
                    case 'maybe':
                        this.answer="Puede ser mi king!!"
                }
                this.image = image;

            }catch(err){
                this.answer = 'No se puede cargar del API',
                this.img =null;
            }
        }
    },
    watch : {
        question( value , oldValue) {
            //Reaccionan a los cambios en la propiedad que se llama igual que el nombre de esta funcion
            this.isValidQuestion = false; //Recien empieza a escribir
            // console.log( { value , oldValue});

            console.log({ value });
            const length = value.length;
            if(value[length-1] !== '?') return;

            this.isValidQuestion = true;
            this.getAnswer();
            // console.log('Enviando pregunta mi king...');
            
            
        }
    }
}
</script>

/* Este css solo es aplicado a este componente */
<style scoped>

    img, .bg-dark {
        height: 100vh;
        left: 0px;
        max-height: 100%;
        max-width: 100%;
        position: fixed;
        top: 0px;
        width: 100vw;
    }

    .bg-dark {
        background-color: rgba(0, 0, 0, 0.4);
    }

    .indecision-container {
        position: relative;
        z-index: 99;
    }
    
    input {
        width: 250px;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
    }
    input:focus {
        outline: none;
    }

    p {
        color: white;
        font-size: 20px;
        margin-top: 0px;
    }

    h1, h2 {
        color: white;
    }
    
    h2 {
        margin-top: 150px;
    }

</style>