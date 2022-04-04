<template>
  <div class="comp">
    <img src="">
    <div class="right">
      <div class="heading bd">
        <p>Place Name</p>
        <img :src="more">
      </div>
      <div class="icons">
        <div><p>Chiggago</p></div>
        <div><img :src="heart" ></div>
        <div><img :src="chats"></div>
      </div>
    </div>
  </div>
</template>

<script>
import more from '../assets/images/more.svg';
import heart from '../assets/images/love.svg';
import chats from '../assets/images/chat.svg';
export default {
  name: 'PlacesComp',
  setup(){
    return{
      more,
      heart,
      chats
    }
  }
}
</script>

<style scoped lang="scss">
.comp{
  display: grid;
  grid-template-columns: 1fr 4fr;
  padding: 10px;
  background: #FFFFFF;
  box-shadow: 0 3px 10px rgba(0 ,0, 0 ,0.2);
  border-radius: 10px;
  img{
    width: 100px;
    height: 100px;
  }
  .right{
    .heading {
      display: grid;
      grid-template-columns: 4fr 1fr;
      text-align: center;
      img{
        width: 20px;
        height: 20px;
        margin-top: 20px;
      }
    }
    .icons{
      display: grid;
      grid-template-columns: 3fr 1fr 1fr;
      text-align: center;
      img{
        width: 25px;
        height: 25px;
        margin-top: 10px;
      }
    }
  }
}
</style>
