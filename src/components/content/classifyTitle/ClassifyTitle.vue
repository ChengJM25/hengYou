<template>
  <div class="classify-title">
    <div class="classify-title-content">
      <div v-if="locationTitle.length > 0">{{getLocationTitle}}</div>
      <div v-if="industryTitle.length > 0">/{{getIndustryTitle}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClassifyTitle",
  props: {
    industryTitle: {
      type: Array,
      default() {
        return []
      }
    },
    locationTitle: {
      type: Array,
      default() {
        return []
      }
    }

},

  computed: {
    getLocationTitle() {
       return this.locationTitle.join("/")
    },
    getIndustryTitle() {
      return this.industryTitle.join("/")
    }
  }
}
</script>

<style scoped>
  .classify-title {
    display: flex;
    justify-content: space-between;

    width: 1180px;
    height: 50px;
    line-height: 50px;
    margin: auto;
    background-color: #eeeeee;
    border: 1px solid #545c64;
    padding-left: 20px;
    padding-right: 20px;
  }

  .classify-title-content {
    display: flex;
    width: 900px;
  }

  .classify-title-content > div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
