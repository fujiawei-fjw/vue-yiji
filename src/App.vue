<template>
  <div id="app">
    <!-- <Yindao />
    <Home />-->
    <router-view></router-view>
  </div>
</template>

<script>
// import Home from "./components/Home";
// import Yindao from "./components/Yindao";
export default {
  name: "app",
  components: {
    // Yindao,
    // Home
  }
};
</script>

<style>
body {
  margin: 0;
  border: 0;
}
a {
  text-decoration: none;
}
</style>
