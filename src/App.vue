<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <CounterVue v-bind:start="100" /> -->
  <!-- Si envio solo el start , sin nada mas por defecto le está enviando al prop un string vacio -->
  <!-- <CounterVue start /> -->
  <!-- <CounterVue /> -->
  <!-- <HelloWorld msg="Hola mundo"/> -->

  <Indecision />
</template>

<script>
import Indecision from './components/Indecision.vue'
// import HelloWorld from '@/components/HelloWorld.vue'
//  import CounterComponent from '@/components/Counter.vue'
/* Tengo que importar el componente y despues exportarlo
  Decirle al componente (APP) que usaré este componente
*/

export default {
  name: 'App',
  components: {
    Indecision
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
