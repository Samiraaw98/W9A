<template>
  <div id="app">
    <img alt="Twitter logo" src="./assets/icons8-twitter-48.png">
    <!-- step 3 use  -->
    <TweetComp/>
  </div>
</template>

<script>
//step 1 import 
import TweetComp from '@/components/TweetComp.vue'

export default {
  name: 'App',
  components: {
    //step 2 regster
    TweetComp
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
html{
  background-color: rgb(244, 233, 217);
}
</style>
