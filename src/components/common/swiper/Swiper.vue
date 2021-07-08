<template>
  <div class="swiper">
    <el-carousel height="500px" class="swiper-content">
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
  .swiper-content {
    width: 1180px;
    margin: auto;
    text-align: center;
  }

  .swiper-content img {
    width: 100%;
  }
</style>
