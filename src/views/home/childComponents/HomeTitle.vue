<template>
  <div class="home-title">
    <span class="home-title-item">{{title}}</span>
  </div>
</template>

<script>
export default {
  name: "HomeTitle",
  props: {
    title: String,
    default() {
      return ''
    }
  }
}
</script>

<style scoped>
  .home-title {
    width: 1180px;
    margin: 30px auto 20px auto;
  }

  .home-title-item {
    font-size: 20px;
    padding: 10px 10px 10px 10px;
    margin-left: 20px;
    background-color: #545c64;
    color: white;
    border-radius: 10px;
  }
</style>
