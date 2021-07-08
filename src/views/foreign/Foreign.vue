<template>
  <el-select :selecters="cityOptions" @classifyTitle="getLocationTitle"></el-select>
  <el-select :selecters="industryOptions" @classifyTitle="getIndustryTitle"></el-select>
  <interval></interval>
  <classify-title :industry-title="industryTitle" :location-title="locationTitle"></classify-title>
  <li>{1}</li>
  <li>{2}</li>
  <li>{3}</li>
  <li>{4}</li>
  <li>{5}</li>
  <li>{6}</li>
  <li>{7}</li>
  <li>{8}</li>
  <li>{9}</li>
  <li>{10}</li>
  <li>{11}</li>
  <li>{12}</li>
  <li>{13}</li>
  <li>{14}</li>
  <li>{15}</li>
  <li>{16}</li>
  <li>{17}</li>
  <li>{18}</li>
  <li>{19}</li>
  <li>{20}</li>
  <li>{21}</li>
  <li>{22}</li>
  <li>{23}</li>
  <li>{24}</li>
  <li>{25}</li>
  <li>{26}</li>
  <li>{27}</li>
  <li>{28}</li>
  <li>{29}</li>
  <li>{30}</li>
  <li>{31}</li>
  <li>{32}</li>
  <li>{33}</li>
  <li>{34}</li>
  <li>{35}</li>
  <li>{36}</li>
  <li>{37}</li>
  <li>{38}</li>
  <li>{39}</li>
  <li>{40}</li>
  <li>{41}</li>
  <li>{42}</li>
  <li>{43}</li>
  <li>{44}</li>
  <li>{45}</li>
  <li>{46}</li>
  <li>{47}</li>
  <li>{48}</li>
  <li>{49}</li>
  <li>{67}</li>
  <li>{68}</li>
  <li>{69}</li>
  <li>{70}</li>
  <li>{71}</li>
  <li>{72}</li>
  <li>{73}</li>
  <li>{74}</li>
  <li>{75}</li>
  <li>{76}</li>
  <li>{77}</li>
  <li>{78}</li>
  <li>{79}</li>
  <li>{80}</li>
  <li>{81}</li>
  <li>{82}</li>
  <li>{83}</li>
  <li>{84}</li>
  <li>{85}</li>
  <li>{86}</li>
  <li>{87}</li>
  <li>{88}</li>
  <li>{89}</li>
  <li>{90}</li>
  <li>{91}</li>
  <li>{92}</li>
  <li>{93}</li>
  <li>{94}</li>
  <li>{95}</li>
  <li>{96}</li>
  <li>{97}</li>
  <li>{98}</li>
  <li>{99}</li>
  <li>{100}</li>
</template>

<script>
import elSelect from "@/components/common/elSelect/elSelect";
import Interval from "@/components/content/interval/Interval";
import ClassifyTitle from "@/components/content/classifyTitle/ClassifyTitle";

export default {
  name: "Foreign",
  components: {
    elSelect,
    Interval,
    ClassifyTitle
  },
  data() {
    return {
      cityOptions: ['马来西亚', '肯尼亚', '德国', '美国', '印度尼西亚', '缅甸', '泰国', '印度'],
      industryOptions: ['建材', '婴童', '家居', '家电', '灯具', '防疫', '食品', '运动',],
      industryTitle: [],
      locationTitle: []
    }
  },
  methods: {
    getIndustryTitle(data){
      this.industryTitle = data
      console.log(data);
    },
    getLocationTitle(data){
      this.locationTitle = data
      console.log(data);
    }
  }
}
</script>

<style scoped>

</style>
