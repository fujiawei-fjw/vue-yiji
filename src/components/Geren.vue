<template>
  <div class="geren">
    <div class="gr-zy">
      <img src="../img/geren/geren-1_03.png" alt />
      <!-- 点击弹出 -->
      <span @click="changeStyleGo"></span>
    </div>
    <div class="yx">
      <span>艺象云集</span>
      <div>
        <span>All</span>
        <span>></span>
      </div>
    </div>
    <div class="toswiper">
      <div class="ownSwiper">
        <swiper :options="swiperOption" ref="mySwiper box">
          <swiper-slide>
            <img src="../img/yindao-denglu/u97_03.jpg" alt />
          </swiper-slide>
          <swiper-slide>
            <img src="../img/yindao-denglu/u98_03.jpg" alt />
          </swiper-slide>
          <swiper-slide>
            <img src="../img/yindao-denglu/u99_03.jpg" alt />
          </swiper-slide>
          <swiper-slide>
            <img src="../img/yindao-denglu/u100_03.jpg" alt />
          </swiper-slide>
          <swiper-slide>
            <img src="../img/yindao-denglu/u101_03.jpg" alt />
          </swiper-slide>
          <swiper-slide>
            <img src="../img/yindao-denglu/u102_03.jpg" alt />
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div :style="{'transform':transform }" class="tanchu">
      <img src="../img/geren/u358.jpg" alt />
      <!-- 点击回去 -->
      <span @click="changeStyle"></span>
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Top from "./zujian/Top";
import Footer from "./zujian/Footer";
export default {
  name: "home",
  components: {
    Footer,
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 8
      },
      // 点击弹出
      transform: "translateX(100%)"
    };
  },
  methods: {
    changeStyleGo() {
      this.transform = "translateX(-100vw)";
    },
    changeStyle() {
      this.transform = "translateX(100vw)";
    }
  }
};
</script>

<style scoped>
.geren {
  width: 100vw;
  position: relative;
}
.geren .gr-zy img {
  width: 100%;
  display: block;
}
.gr-zy {
  position: relative;
}
.gr-zy span {
  width: 0.6rem;
  height: 0.6rem;
  display: block;
  /* background-color: #ccc; */
  position: absolute;
  right: 0.3rem;
  top: 0.4rem;
}
.geren .yx {
  height: 0.8rem;
  padding-left: 0.4rem;
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  align-items: center;
}
.geren .yx > div {
  font-size: 14px;
  width: 1.4rem;
  height: 0.5rem;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 0.4rem 0 0 0.4rem;
}
.geren .yx > div span:first-child {
  padding-right: 0.2rem;
}
.ownSwiper img {
  width: 100%;
}
.tanchu {
  width: 100vw;
  position: fixed;
  left: 100vw;
  top: 0;
  z-index: 100;
  /* display: none; */
}
.tanchu img {
  width: 100%;
  display: block;
}
.slide-fade-enter-active {
  /* transition: all 1s linear; */
}
.tanchu span {
  width: 0.6rem;
  height: 0.6rem;
  display: block;
  /* background-color: #ccc; */
  position: absolute;
  left: 0.3rem;
  top: 0.4rem;
}
.tanchu {
  /* transform: translateX(-100%); */
  /* opacity: 1; */
  transition: all 0.8s linear;
}
</style>