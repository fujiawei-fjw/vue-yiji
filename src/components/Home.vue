<template>
  <div class="wrap home">
    <Top />
    <div class="onswiper">
      <div class="ownSwiper">
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide>
            <img src="../img/yindao-denglu/u62.jpg" alt />
          </swiper-slide>
          <swiper-slide>
            <img src="../img/yindao-denglu/u65.jpg" alt />
          </swiper-slide>
          <swiper-slide>
            <img src="../img/yindao-denglu/u68.jpg" alt />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
    <div class="toswiper">
      <div class="ownSwiper">
        <swiper :options="swiperOption1" ref="mySwiper box">
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

    <Tab />

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
import Tab from "./home/Tab";
export default {
  name: "home",

  data() {
    return {
      swiperOption: {
        // loop: true,
        slidesPerView: 1,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        pagination: {
          el: ".swiper-pagination"
        }
      },
      swiperOption1: {
        slidesPerView: 2.5,
        spaceBetween: 10
      }
    };
  },
  components: {
    Top,
    Footer,
    swiper,
    swiperSlide,
    Tab
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>

<style>
.wrap,
.home {
  width: 100vw;
  height: 100vh;
  /* position: relative; */
}
.home .onswiper .ownSwiper,
.home .toswiper .ownSwiper {
  width: 100%;
}
.home .onswiper .ownSwiper img,
.home .toswiper .ownSwiper img {
  width: 100%;
  /* display: block; */
}
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 0.1rem;
}
.home .onswiper .swiper-container {
  height: 3.9rem;
}
.home .swiper-slide {
  height: 2em;
}
</style>