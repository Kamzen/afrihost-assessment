<template>
  <div class="place">
    <p>Places To Visit</p>
    <div class="bg">
      <h4>Mexico City</h4>
      <p>Morbi urna elit, porta vitae convallis non, bibendum nec diam.</p>
    </div>
    <br />
    <PlacesComp v-for="(d,i) in data" :key="i" :data="d" />
    <div class="featured-see-all bd">
      <p class="bd"><span>Sell All</span><img :src="arrow"></p>
    </div>
    <div class="footer">
      <div class="input">
        <input type="text" placeholder="Email Address">
        <div><img :src="pin"></div>
      </div>
    </div>
  </div>
</template>

<script>
import PlacesComp from "@/components/placesComp";
import data from '../data.json';
import arrow from '../assets/images/arrow-more.svg';
import pin from '../assets/images/send.svg';
export default {
  name: 'PlacesToVisit',
  components:{
    PlacesComp
  },
  data(){
    return{
      data : data.places.other,
    }
  },
  setup(){
    return{
      arrow,
      pin
    }
  }
}
</script>

<style scoped lang="scss">
  .place {
    background: rgba(250, 250, 250, 1);
    .bg{
      height: 221px;
      width: 100%;
      border-radius: 10px;
      background-size: 100% 100%;
      background: rgba(233, 72, 109, 1) url("../assets/images/bg.png") no-repeat center;
      background-origin: content-box;
      opacity: 0.4;
    }
    .featured-see-all{
      width: 100%;
      text-align: center;
      margin-top: 10px;
      p{
        width: fit-content;
        color: #FFFFFF;
        background: rgba(244, 50, 127, 1);
        padding: 6px;
        border-radius: 30px;
        margin: auto;
        img{
          width: 20px;
          height: 20px;
        }
      }
    }
    .footer{
      width: 100%;
      height: 221px;
      background: rgba(233, 72, 109, 1);
      margin-top: 10px;
      position: relative;
      .input{
        position: absolute;
        bottom: 10%;
        display: grid;
        grid-template-columns: 5fr 1fr;
        input{
          height: 40px;
          border-radius: 10px;
          width: 332px;
          margin: auto;
          &::placeholder{
            font-family: Medium,sans-serif;
          }
        }
        div {
          background: #FFFFFF;
          text-align: center;
          width: 60%;
          border-radius: 50%;
          position: relative;
          right: 10px;
          img {
            width: 20px;
            height: 20px;
            margin-top: 10px;
            //padding: 10px;
            //border-radius: 50%;
          }
        }
      }
    }
  }
</style>
