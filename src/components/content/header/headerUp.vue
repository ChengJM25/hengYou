<template>
  <div class="head">
    <div class="head-left"><logo-cube :show-img="showImage"/></div>
    <div class="head-center">
      <slot><img src="~assets/img/header.jpg" alt=""></slot>
    </div>
    <div class="head-right">
      <cjm-search></cjm-search>
    </div>
  </div>
</template>

<script>
import logoCube from "@/components/common/logoCube/logoCube";
import img1 from "@/assets/img/logo.jpg"
import cjmSearch from "@/components/common/search/cjmSearch";

export default {
  name: "headerUp",
  data() {
    return {
      showImage: [img1, img1, img1, img1, img1, img1]
    }
  },
  components: {
    logoCube,
    cjmSearch
  }
}
</script>

<style scoped>
  .head {
    display: flex;
    justify-content: space-between;

    width: 1180px;
    height: 100px;
    margin-left: auto;
    margin-right: auto;
  }

  .head-left {
    margin-left: 80px;
    margin-top: 30px;
  }


  .head-center img {
    height: 100px;
  }
</style>
