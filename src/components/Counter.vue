/* Podemos definir las 3 secciones , template , script y style*/
// Usamos el shortcut
/* Vue -> estructura basica de un componente */
<template>
    <h2>{{ getCustomTitle }} </h2>
    <p> {{ counter }} <sup>2</sup> = {{ getSquareCounter }}</p>

    <p data-testid="counter"> {{ counter }} </p>
    <div>
        <!-- v-on:click ==== @click -->
        <button @click="increase"> +1 </button>
        <button @click="decrease"> -1 </button>
    </div>
</template>

<script>
/* Las props estan previamente definidas en una de las opciones del OPTIONS API */
/* El attr no está definido */
export default {
    name : 'CounterComponent',
    // props : [ 'title' , 'start'],
    props : {
        title : String,
        start : {
            type : Number,
            default : 100,
            validator( currentValue ){
                return currentValue >= 100
            }
            // required : true
        },
    },
    data(){
        return { counter : this.start  }
    },
    methods: {
        getSquareValue(){
            return Math.pow(this.counter,2);
        },
        increase(){
            this.counter++;
        },
        decrease(){
            this.counter--;
        },
    },
    computed: {

        /* 
            Es una propiedad!! se llama como propiedad
            Las propiedades computadas tienen ventaja
            Las propiedades computadas de guardan en caché , entonces acelera el proceso
        */
        //La propiedad será un getter , entonces ya está calculado

        //Computed en vez de los watch
        //Por la computada ya conoce las dependencias que cambian y en base a eso se vuele a recalcular el valor
        getSquareCounter(){
            // console.log('Computed square');
            return Math.pow(this.counter,2);
        },
        getCustomTitle (){
            return this.title || 'Counter'
            // return this.title ? this.title : 'Counter';
        }
    }
}
</script>

<style>

button {
    background-color: #64BB87;
    border : 1px solid #FFFFFF;
    border-radius : 5px;
    color : #FFFFFF;
    cursor : pointer;
    margin : 0 5px;
    padding :5px 15px;
    transition : 0.3s ease-in-out;
}

button:hover {
    background-color: #5aa67b;
    transition : 0.3s
}
</style>