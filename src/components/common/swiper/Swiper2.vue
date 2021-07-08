<template>
  <div class="swiper2">
    <el-carousel height="300px" class="swiper2-content">
      <el-carousel-item v-for="item in banner" :key="item">
        <a href="#">
          <img :src="item" alt="">
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>

export default {
  name: "Swiper",
  props: {
    banner: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .swiper2 {
    position: relative;
  }

  .swiper2-content {
    width: 400px;
  }

  .swiper2-content img {
    width: 100%;
    height: 100%;
  }

</style>
