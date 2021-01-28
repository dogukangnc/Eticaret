<template>
  <div id="app">
    <header><Navbar /></header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    Navbar,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "montserrat", sans-serif;
}
header {
  width: 100%;
  background-color: rgb(251 217 217);
  padding-top: 25px;
}
main {
  margin-top: 20px;
  width: 100%;
   
}
</style>