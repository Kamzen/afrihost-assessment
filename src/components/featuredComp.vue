<template>
  <div class="featured">
    <div class="featured-header">
      <div class="featured-title">
        <p>Featured</p>
      </div>
      <div class="featured-see-all">
        <p class="bd"><span>Sell All</span><img :src="arrow"></p>
      </div>
    </div>
    <div class="featured-body">
      <FeaturedItem v-for="(d ,i) in data" :key="i" :data="d"/>
    </div>
    <div class="featured-bottom-nav">
      <div><img :src="travels"></div>
      <div><img :src="explore"></div>
      <div><img :src="saved"></div>
      <div><img :src="chats"></div>
      <div><img :src="profile"></div>
    </div>
  </div>
</template>

<script>
import arrow from '../assets/images/arrow-more.svg';
import FeaturedItem from "@/components/featuredItem";

import travels from '../assets/images/travels.svg';
import explore from '../assets/images/explore.svg';
import saved from '../assets/images/saved.svg';
import chats from '../assets/images/chat.svg';
import profile from '../assets/images/profile.svg';
// import axios from "axios";

import data from '../data.json';

export default {
  name: 'FeaturedComp',
  setup(){
    return{
      arrow,
      travels,
      saved,
      chats,
      explore,
      profile,
    }
  },
  data(){
    return{
      data : data.featured
    }
  },
  components:{
    FeaturedItem
  },
  methods : {
    // fetchData : async function(){
    //   await axios.get('https://www.afrihost.com/resources/fedev/places.json',
    //   ).then(resp=>{
    //     console.log(resp)
    //   })
    // }
  },
  mounted() {
    // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    // this.fetchData()
  }
}
</script>

<style scoped lang="scss">
  .featured{
    background: rgba(250, 250, 250, 1);;
    .featured-header{
      display: grid;
      grid-template-columns: 5fr 3fr;
      .featured-title{
        p{
          font-family: Medium,sans-serif;
          padding-top:  10px;
          padding-left: 20px;
        }
      }
      .featured-see-all{
        text-align: end;
        p{
          width: fit-content;
          color: #FFFFFF;
          background: rgba(244, 50, 127, 1);
          padding: 10px;
          border-radius: 30px;
          margin-left: 50px;
          img{
            width: 20px;
            height: 20px;
          }
        }
      }
    }
    .featured-body{
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 15px;
      padding: 10px;
      grid-row-gap: 10px;
    }
    .featured-bottom-nav{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      padding-top: 10px;
      padding-bottom: 10px;
      background: #FFFFFF;
      box-shadow: 0 3px 10px rgba(0 ,0, 0 ,0.2);
      div {
        text-align: center;
        img {
          width: 30px;
          height: 30px;
          &:hover{
            background: rgba(233, 72, 109, 1);
          }
        }
      }
    }
  }
</style>
