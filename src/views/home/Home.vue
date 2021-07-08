<template>
  <swiper :banner="banners"></swiper>
  <home-title title="最新资讯"></home-title>
  <home-information></home-information>
  <home-title title="热展推荐"></home-title>
  <home-exhibition :exhibition-list="exhibitions"></home-exhibition>
  <home-title title="近期展览"></home-title>
  <home-exhibition :exhibition-list="exhibitions"></home-exhibition>
</template>

<script>
import Swiper from "@/components/common/swiper/Swiper";
import HomeTitle from "@/views/home/childComponents/HomeTitle";
import HomeInformation from "@/views/home/childComponents/HomeInformation";
import HomeExhibition from "@/views/home/childComponents/HomeExhibition";
/*临时代替数据*/
import img1 from "@/assets/dev/banner/1.png";
import img2 from "@/assets/dev/banner/2.png";
import img3 from "@/assets/dev/banner/3.png";
import img4 from "@/assets/dev/banner/4.png";

export default {
  name: "Home",
  components: {
    Swiper,
    HomeInformation,
    HomeExhibition,
    HomeTitle
  },
  data() {
    return {
      /*临时代替数据*/
      banners: [img1,img2,img3,img4],
      exhibitions: []
    }
  }
}
</script>

<style scoped>

</style>
