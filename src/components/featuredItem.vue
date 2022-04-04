<template>
  <div class="featured-item">
<!--    data.images[145]-->
    <img :src="item" alt="'" class="bd">
    <div class="name-more">
      <p>{{ data.title}}</p>
      <img :src="more">
    </div>
    <p> ${{data.price}} <span>&#183;</span> {{ data.location }}</p>
    <div class="footer">
      <div class="left">
        <img :src="data.meta.weather.conditions==='Sunny' ? sun : rain">
        <div>
          <p>{{data.meta.weather.temperature}}&#176; <span>{{ data.meta.weather.conditions }}</span></p>
        </div>
      </div>
      <div class="right">
        <div><img :src="heart"></div>
        <div><p>{{data.meta.likes}}</p></div>
      </div>
    </div>
  </div>
</template>

<script>
import arrow from '../assets/images/arrow-more.svg';
import item from '../assets/images/item.png';
import more from '../assets/images/more.svg';
import sun from '../assets/images/sun.svg';
import rain from '../assets/images/icon.svg';
import heart from '../assets/images/love.svg';
export default {
  name: 'FeaturedItem',
  props : {
    data : []
  },
  setup(){
    return{
      arrow,
      item,
      more,
      sun,
      heart,
      rain
    }
  },
}
</script>

<style scoped lang="scss">
  .featured-item{
    width: 100%;
    height: 300px;
    background: #FFFFFF;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 3px 10px rgba(0 ,0, 0 ,0.2);
    img{
      width: 100%;
      height: 125px;
    }
    .name-more{
      display: grid;
      grid-template-columns: 4fr 1fr;
      height: 30px;
      p{
        font-size: 12px;
        font-family: SemiBold,sans-serif;
      }
      img{
        width: 17px;
        height: 17px;
        margin-top: 3px;
      }
    }
    .footer{
      display: grid;
      grid-template-columns: 1fr 1fr;
      .left{
        display: grid;
        grid-template-columns: 1fr 1fr;
        img{
          width: 20px;
          height: 20px;
          margin-top: 20px;
        }
        .span{
          font-size: 10px;
        }
      }
      .right{
        display: grid;
        grid-template-columns: 1fr 1fr;
        div {
          text-align: center;
          img {
            width: 20px;
            height: 20px;
            margin-top: 20px;
          }
          p{
            padding-top: 5px;
          }
        }
      }
    }
  }
</style>
