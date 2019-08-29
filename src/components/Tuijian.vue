<template>
  <div class="wrap">
    <div>
      <Top />
    </div>
    <div>
      <Tab />
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Top from "./zujian/Top";
import Footer from "./zujian/Footer";
import Tab from "./home/Tab";
export default {
  name: "home",
  components: {
    Top,
    Footer,
    Tab
  }
};
</script>

<style>
</style>