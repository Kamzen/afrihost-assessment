<template>
  <div class="slider bd">
    <div class="slider-head">
      <div class="slider-head-p bd" :class="isDiscoverActive ? 'active' : ''" @click="isLinkActive('discover')">
        <p class="">DISCOVER</p>
      </div>
      <div class="slider-head-p bd" :class="isActivitiesActive ? 'active' : ''" @click="isLinkActive('activities')">
        <p class="">ACTIVITIES</p>
      </div>
    </div>
    <div class="slider-imgs bd">
      <div>
        <transition-group name="fade" tag="div">
          <div v-for="i in [currentIndex]" :key="i">
            <img :src="currentImg" class="img"/>
          </div>
        </transition-group>
<!--        <a class="prev" @click="prev" href="#">&#10094; Previous</a>-->
<!--        <a class="next" @click="next" href="#">&#10095; Next</a>-->
      </div>
      <div class="dots bd" :style="{display : 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))'}">
        <div class="dot bd"></div>
        <div class="dot bd"></div>
        <div class="dot bd"></div>
        <div class="dot bd"></div>
        <div class="dot bd"></div>
      </div>
    </div>
  </div>
</template>

<script>
import imgSlide1 from '../assets/images/c51cd2bee0acf4991b06e4601a5a64a39c78a323.png';
import imgSlide2 from '../assets/images/8ea18bb356e804c7f4a126c3ddb2316b90fb003b.png';
import slideImg3 from '../assets/images/357a392872f46bd42efeea6055141a2b6449f900.png';
import slideImg4 from '../assets/images/9dc7e7c65582b12d8e33617c91de4d5cc8343653.png';
import slideImg5 from '../assets/images/720df72c33ed72edcace74d68095359fbb1f1488.png';
import slideImg6 from '../assets/images/720df72c33ed72edcace74d68095359fbb1f1488.png';
import slideImg7 from '../assets/images/c51cd2bee0acf4991b06e4601a5a64a39c78a323.png';


export default {
  name: 'SlideShow',
  data() {
    return {
      isDiscoverActive: true,
      isActivitiesActive: false,
      images: [
        imgSlide1,
        imgSlide2,
        slideImg3,
        slideImg4,
        slideImg5,
        slideImg6,
        slideImg7
      ],
      timer: null,
      currentIndex: 0
    }
  },
  methods: {
    isLinkActive: function (linkName) {
      if (linkName === 'discover') {
        this.isDiscoverActive = true;
        this.isActivitiesActive = false;
      }
      if (linkName === 'activities') {
        this.isDiscoverActive = false;
        this.isActivitiesActive = true;
      }
    },
    startSlide: function () {
      this.timer = setInterval(this.next, 4000);
    },
    next: function () {
      this.currentIndex += 1;
    },
    prev: function () {
      this.currentIndex -= 1;
    },
  },
  mounted : function(){
    this.startSlide()
  },
  computed : {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  },
  setup() {
    return {
      imgSlide1
    }
  },

}
</script>

<style scoped lang="scss">
.slider {
  .slider-head {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .active {
    border-bottom: 0.2em solid rgba(244, 50, 127, 1);
  }

  p {
    font-family: SemiBold, serif;
    text-align: center;
  }

  .slider-imgs {
    height: 268px;
    width: 100%;
    position: relative;

    .img {
      width: 100%;
      height: 268px;
    }

    .dots {
      position: absolute;
      bottom: 10%;
      left: 35%;
      background: rgba(44, 44, 45, 0.8);
      height: 21px;
      width: auto;
      border-radius: 10px;
      text-align: center;
      padding-top: 5px;

      .dot {
        height: 8px;
        width: 8px;
        margin: 2px 2px;
        background-color: rgba(255, 255, 255, 0.25098039215686274);
        border-radius: 50%;

        &:active {
          background: #FFFFFF;
        }
      }
    }
  }
}
</style>