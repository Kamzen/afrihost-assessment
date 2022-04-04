<template>
  <div class="place">
    <p>Places To Visit</p>
    <div class="bg">
      <h4>Mexico City</h4>
      <p>Morbi urna elit, porta vitae convallis non, bibendum nec diam.</p>
    </div>
    <br />
    <PlacesComp />
  </div>
</template>

<script>
import PlacesComp from "@/components/placesComp";
export default {
  name: 'PlacesToVisit',
  components:{
    PlacesComp
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
  }
</style>
