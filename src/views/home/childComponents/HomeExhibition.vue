<template>
  <div class="home-exhibition">
    <exhibition-item></exhibition-item>
    <exhibition-item></exhibition-item>
    <exhibition-item></exhibition-item>
    <exhibition-item></exhibition-item>
  </div>
</template>

<script>
import ExhibitionItem from "@/components/content/ExhibitionItem/ExhibitionItem";

export default {
  name: "HomeExhibition",
  components: {
    ExhibitionItem
  },
  props: {
    exhibitionList: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .home-exhibition {
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
