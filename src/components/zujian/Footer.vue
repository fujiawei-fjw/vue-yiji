<template>
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
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 9999;
}
footer,
footer ul {
  width: 100vw;
  height: 0.8rem;
  background-color: #000;
}
footer ul {
  display: flex;
  list-style: none;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  align-items: center;
}
footer ul li {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
footer ul li a {
  color: #ccc;
  font-size: 16px;
}
.nav-active {
  color: red;
}
</style>