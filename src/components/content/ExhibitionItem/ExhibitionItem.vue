<template>
  <div class="exhibition-item">
    <div class="exhibition-item-img">
      <img src="@/assets/dev/banner/1.png" alt="">
    </div>
    <div class="exhibition-item-text">
      <div class="exhibition-item-title">名称&nbsp:&nbsp广东马来西亚商品展</div>
      <div class="exhibition-item-industry">行业&nbsp:&nbsp建材、家居</div>
      <div class="exhibition-item-location">时间&nbsp:&nbsp2021年11月15日</div>
      <div class="exhibition-item-time">地点&nbsp:&nbsp马来西亚吉隆坡世贸中心ascjasbckjasbcbaascbjsackscbasac</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExhibitionItem",
  props: {
    exhibition: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .exhibition-item {
    height: 300px;
    width: 260px;
    background-color: #ffffff;
    padding: 10px;
  }

  .exhibition-item-img {
    height: 180px;
  }


  .exhibition-item img {
    width: 100%;
    height: 100%;
  }

  .exhibition-item:hover {
    box-shadow: 0 0 10px rgba(100,100,100,1);
  }

  .exhibition-item-text {
    margin-top: 10px;
  }

  .exhibition-item-text > div {
    margin-bottom: 10px;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
