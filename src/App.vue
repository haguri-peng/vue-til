<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <hello-world msg="Welcome to Your Vue.js App"></hello-world>
    <app-header></app-header>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import AppHeader from './components/common/AppHeader.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    AppHeader,
  },
  created() {
    // eslint-disable-next-line
		var a = 10;

    console.log('created!!');
  },
};
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
