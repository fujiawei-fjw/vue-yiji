<template>
  <div>
    <div class="ownSwiper ydswiper">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide>
          <img src="../img/yindao-denglu/yindao1.jpg" alt />
        </swiper-slide>
        <swiper-slide>
          <img src="../img/yindao-denglu/yindao2.jpg" alt />
        </swiper-slide>
        <swiper-slide>
          <img src="../img/yindao-denglu/yindao3.jpg" alt />
        </swiper-slide>
        <swiper-slide>
          <img src="../img/yindao-denglu/yindao4.jpg" alt />
        </swiper-slide>
        <swiper-slide>
          <img src="../img/yindao-denglu/huanying.jpg" alt />

          <div class="swiper-button-next">></div>
        </swiper-slide>
        <swiper-slide>
          <img src="../img/yindao-denglu/denglu.jpg" alt />
          <div class="firstdemo">
            <el-form ref="form" :model="form" label-width="100px">
              <!-- <el-row type="flex" justify="center">
                <el-col :span="5">
                  <el-form-item label-width="70px">
                    <span>
                      <font color="pink" size="3">注册登录页面</font>
                    </span>
                  </el-form-item>
                </el-col>
              </el-row>-->
              <el-row type="flex" justify="center" class="zhanghu">
                <el-form-item label prop="name">
                  <el-input v-model="form.name" size="small" placeholder="请输入帐号/手机号"></el-input>
                </el-form-item>
              </el-row>
              <el-row type="flex" justify="center" class="mima">
                <el-form-item label prop="password">
                  <el-input
                    type="password"
                    v-model="form.password"
                    size="small"
                    placeholder="请输入密码"
                  ></el-input>
                </el-form-item>
              </el-row>
              <el-row type="flex" justify="center" class="dl">
                <el-form-item>
                  <div @click="submit" class="denglu-dl"></div>
                  <!-- <el-button type="primary"></el-button> -->
                  <!-- <el-button @click="register">注册</el-button> -->
                </el-form-item>
              </el-row>
            </el-form>
          </div>
          <!-- <router-link exact to="/home">
            <a class="denglu" href="#"></a>
          </router-link>-->
        </swiper-slide>
        <!-- <router-view></router-view> -->
      </swiper>
    </div>
  </div>

  <!-- <div v-else>
    <Home />
  </div>-->
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Home from "./Home";
// import Denglu from "./yindao/Denglu";
export default {
  name: "yindao",
  data() {
    return {
      swiperOption: {
        // loop: true,
        slidesPerView: 1,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      // element 登录密码
      form: {
        name: "",
        password: ""
      }
    };
  },
  methods: {
    // 判断提交的函数
    submit: function() {
      if (this.form.name === "111111" && this.form.password === "111111") {
        alert("登陆成功");
        this.$router.push("/home");
      } else alert("账号或密码错误");
    },
    register: function() {}
  },
  components: {
    swiper,
    swiperSlide,
    Home
  }
};
</script>

<style>
.ydswiper {
  width: 100vw;
  height: 100vh;
}
.ydswiper img {
  width: 100%;
}
.ydswiper img:last-child {
  position: relative;
}
.denglu {
  position: absolute;
  width: 0.8rem;
  height: 0.6rem;
  background-color: #444;
  display: block;
  left: 1.8rem;
  top: 7.2rem;
}
.swiper-button-next {
  display: none;
}
.firstdemo {
  position: absolute;
  left: 0;
  top: 0;
}
.firstdemo input {
  width: 4rem;
  height: 0.4rem;
  outline: none;
}
.firstdemo .zhanghu {
  position: absolute;
  /* left: 0.1rem; */
  top: 4.7rem;
  /* width: 2rem; */
}
.firstdemo .mima {
  position: absolute;
  /* left: 0.1rem; */
  top: 5.7rem;
  /* width: 2rem; */
}
.firstdemo .dl {
  /* background-color: red; */
  position: absolute;
  /* left: 1.8rem; */
  top: 7.2rem;
}
.firstdemo .dl .denglu-dl {
  /* background-color: red; */
  width: 0.8rem;
  height: 0.6rem;
}
.firstdemo .dl button span {
  display: block;
  width: 0.8rem;
  height: 0.6rem;
}
</style>