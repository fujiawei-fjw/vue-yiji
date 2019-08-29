<template>
  <div id="app" class="tab-box">
    <ul class="tabs">
      <li v-for="(tab,index) in tabsName" :key="tab.length" v-bind:class="{active:tab.isActive}">
        <span
          class="tab-link"
          @click="tabsSwitch(index)"
          v-bind:class="{active:tab.isActive}"
        >{{tab.name}}</span>
      </li>
    </ul>
    <div class="cards">
      <div class="tab-card" style="display: block;">
        <swiper :options="swiperOption" ref="mySwiper box" class="tab-swiper">
          <swiper-slide v-for="(item,index) in imges" :key="index" class="for-tab">
            <img :src="item.src" />
          </swiper-slide>
        </swiper>
        <!-- <div v-for="(item,index) in imges" :key="index" class="for-tab">
          <img :src="item.src" />
        </div>-->
      </div>
      <div class="tab-card">
        <swiper :options="swiperOption" ref="mySwiper box" class="tab-swiper">
          <swiper-slide v-for="(item,index) in imges1" :key="index" class="for-tab">
            <img :src="item.src" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        slidesPerView: 3
      },
      swiperOption1: {
        slidesPerView: 2.5,
        spaceBetween: 10
      },
      active: false,
      tabsName: [
        {
          name: "正在展出",
          isActive: true
        },
        {
          name: "即将展出",
          isActive: false
        }
      ],
      imges: [
        { src: require("../../img/zhanxun/展讯页-即将展出1_01.jpg") },
        { src: require("../../img/zhanxun/展讯页-即将展出2_03.jpg") },
        { src: require("../../img/zhanxun/展讯页-即将展出3_05.jpg") },
        { src: require("../../img/zhanxun/展讯页-即将展出4_05.jpg") },
        { src: require("../../img/zhanxun/展讯页-即将展出5_07.jpg") }
      ],
      imges1: [
        { src: require("../../img/zhanxun/u1.jpg") },
        { src: require("../../img/zhanxun/u2.jpg") },
        { src: require("../../img/zhanxun/u3.jpg") },
        { src: require("../../img/zhanxun/u4.jpg") },
        { src: require("../../img/zhanxun/u5.jpg") }
      ]
    };
  },
  methods: {
    // 选项卡 不影响多级data的for
    tabsSwitch: function(tabIndex) {
      var tabCardCollection = document.querySelectorAll(".tab-card"),
        len = tabCardCollection.length;

      for (var i = 0; i < len; i++) {
        tabCardCollection[i].style.display = "none";
        this.tabsName[i].isActive = false;
      }
      this.tabsName[tabIndex].isActive = true;
      tabCardCollection[tabIndex].style.display = "block";
    }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.tab-box {
  width: 100vw;
  /* height: 0.8rem; */
  /* border: 1px solid #000; */
}
.tab-box .tabs {
  width: 100%;
  display: flex;
  background: #ccc;
}
.tab-box .tabs li {
  width: 50%;
  height: 0.8rem;
  list-style: none;
  /* background-color: red; */
  display: flex;
  align-items: center;
  /* background-color: #ccc; */
}
.tab-box .tabs li:first-child {
  border-radius: 0 0.6rem 0.6rem 0;
  justify-content: flex-end;
}
.tab-box .tabs li:last-child {
  border-radius: 0.6rem 0 0 0.6rem;
  justify-content: flex-start;
}

.tab-box .tabs .tab-link {
  color: #000;
  font-size: 16px;
  display: block;
  margin: 0 0.4rem;
}

.tabs li.active:first-child {
  /* height: 47px; */
  /* background-color: red; */
  background: linear-gradient(left, #fff, red);
  transition: 0.3s;
}
.tabs li.active:last-child {
  /* height: 47px; */
  /* background-color: red; */
  background: linear-gradient(left, red, #fff);
  transition: 0.3s;
}

/* .cards {
  float: left;
} */

.cards .tab-card {
  height: 600px;
  display: none;
}
.for-tab {
  width: 100vw;
}
.for-tab img {
  width: 100%;
  display: block;
  margin-bottom: 0.4rem;
}
.for-tab:last-child img {
  margin-bottom: 0.8rem;
}
.tab-swiper {
  height: 600px;
}
</style>