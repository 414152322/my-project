<template>
  <div id="app">
    <navlistviwe></navlistviwe>
    <router-view/>
  </div>
</template>

<script>
import navlist from '@/components/navlist';
export default {
  name: 'App',
  components:{
      'navlistviwe':navlist
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

* { margin:0; padding:0;}
ul,li{ list-style:none}
body{ font-size:12px; font-family: "微软雅黑"; color:#575757;}
a{ text-decoration:none;color:#575757;}
input{ border:none}
</style>
