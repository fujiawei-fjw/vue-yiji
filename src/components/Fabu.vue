<template>
  <div class="wrap">
    <div>
      <Top />
    </div>
    <span>fabu</span>
    <div>
      <footer>
        <ul>
          <li>
            <router-link
              to="/home"
              :class="$route.path === '/home' || $route.path.indexOf('welcome') != -1 ? 'nav-active' : ''"
            >展讯</router-link>
          </li>
          <li>
            <router-link to="tuijian" active-class="nav-active">推荐</router-link>
          </li>
          <li>
            <router-link to="fabu" active-class="nav-active">发布</router-link>
          </li>
          <li>
            <router-link to="Geren" active-class="nav-active">个人</router-link>
          </li>
        </ul>
      </footer>
    </div>
  </div>
</template>

<script>
import Top from "./zujian/Top";
import Footer from "./zujian/Footer";
export default {
  name: "home",
  components: {
    Top,
    Footer
  }
};
</script>

<style>
</style>