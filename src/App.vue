<template>
  <TopNavigation />
  <SlideShow />
  <FeaturedComp />
  <br />
  <hr>
  <br />
  <PlacesToVisit />
  <br />
  <br />
  <br />
</template>

<script>
import TopNavigation from '@/components/topNavigation';
import SlideShow from "@/components/slideShow";
import FeaturedComp from "@/components/featuredComp";
import PlacesToVisit from "@/components/placesToVisit";
export default {
  name: 'App',
  components: {
    TopNavigation,
    SlideShow,
    FeaturedComp,
    PlacesToVisit
  }
}
</script>

<style>
  template{
    background: rgba(250, 250, 250, 1);
  }
  *{
    box-sizing: border-box;
  }
  .bd{
    border : 0.05em solid rgba(211,211,211,.275);
  }
  @font-face {
    font-family: Medium;
    src: url("./assets/fonts/Montserrat/Montserrat-Medium.ttf");
  }
  @font-face {
    font-family: SemiBold;
    src: url("./assets/fonts/Montserrat/Montserrat-SemiBold.ttf");
  }

</style>
