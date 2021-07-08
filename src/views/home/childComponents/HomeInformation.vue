<template>
  <div class="home-information">
    <swiper2 :banner="banners"></swiper2>
    <information-item title="补贴资讯" information-type="补贴" path="/information"></information-item>
    <information-item title="供需资讯" information-type="供需" path="/supply"></information-item>
  </div>
</template>

<script>
import InformationItem from "@/components/content/InformationItem/InformationItem";
import Swiper2 from "@/components/common/swiper/Swiper2";


/*临时代替数据*/
import img1 from "@/assets/dev/banner/1.png";
import img2 from "@/assets/dev/banner/2.png";
import img3 from "@/assets/dev/banner/3.png";
import img4 from "@/assets/dev/banner/4.png";

export default {
  name: "HomeInformation",
  components: {
    InformationItem,
    Swiper2
  },
  data() {
    return {
      /*临时代替数据*/
      banners: [img1,img2,img3,img4],
    }
  }
}
</script>

<style scoped>
.home-information {
  background-color: #f4f4f4;
  width: 1180px;
  margin: 5px auto;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 30px;
  padding-bottom: 30px;
  font-size: 14px;
}
</style>
