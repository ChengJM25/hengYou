<template>
  <el-select :selecters="cityOptions"></el-select>
  <el-select :selecters="industryOptions"></el-select>
  <interval></interval>
</template>

<script>
import elSelect from "@/components/common/elSelect/elSelect";
import Interval from "@/components/content/interval/Interval";

export default {
  name: "Emphasis",
  components: {
    elSelect,
    Interval
  },
  data() {
    return {
      cityOptions: ['马来西亚', '肯尼亚', '缅甸', '泰国', '印度'],
      industryOptions: ['建材', '婴童', '家居', '家电', '灯具', '防疫', '食品', '运动',]
    }
  }
}
</script>

<style scoped>

</style>
