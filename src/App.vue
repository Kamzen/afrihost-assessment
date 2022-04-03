<template>
  <TopNavigation />
  <SlideShow />
</template>

<script>
import TopNavigation from '@/components/topNavigation';
import SlideShow from "@/components/slideShow";

export default {
  name: 'App',
  components: {
    TopNavigation,
    SlideShow
  }
}
</script>

<style>

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
