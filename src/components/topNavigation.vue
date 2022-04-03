<template>
  <div class="top-nav">
    <div class="bd top-nav-left-icon">
      <img class="bd" :src="slideList" alt="'" />
    </div>
    <div class="bd top-nav-text">
      <p>Explore</p>
    </div>
    <div class="bd top-nav-right-icon">
      <img class="bd" :src="notificationIcon" alt="" />
      <img class="bd" :src="searchIcon" alt="" />
    </div>
  </div>
</template>


<script>

import slideList from '../assets/images/sidelist.svg';
import notificationIcon from '../assets/images/notification-icon.svg';
import searchIcon from '../assets/images/search-icon.svg';

export default {
  name: 'TopNavigation',
  props: {
    msg: String
  },
  setup(){
    return{
      slideList, notificationIcon, searchIcon
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.top-nav {
  height: 60px;
  width: 100%;
  background-color: white;
  padding: 0;
  margin: 0mm;
  display: grid;
  grid-template-columns: 1fr 5fr 2fr;

  .top-nav-text {
    font-family: Medium;
    text-align: center;
    color: #222222;
  }
  .top-nav-left-icon{
    text-align: center;
    padding-top: 15px;
    img{
      width: 27px;
      height: 27px;
    }
  }
  .top-nav-right-icon{
    display: grid;
    grid-template-columns: 1fr 1fr;
    img{
      width: 27px;
      height: 27px;
      margin: auto;
    }
  }

}
</style>
