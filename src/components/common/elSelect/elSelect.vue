<template>
  <div class="select">
    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
    <div style="margin: 15px 0;"></div>

    <el-checkbox-group v-model="checkedSelects" @change="handleCheckedSelectsChange">
      <el-checkbox v-for="select in selecters" :label="select" :key="select">{{select}}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>

export default {
  name: "Select",
  data() {
    return {
      checkAll: false,
      checkedCities: [],
      checkedSelects: [],
      isIndeterminate: true
    }
  },
  props: {
    selecters: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedSelects = val ? this.selecters : [];
      this.isIndeterminate = false;
      /*val是全选的true或false*/
      this.$emit('classifyTitle', this.checkedSelects = val ? this.selecters : [])
    },
    handleCheckedSelectsChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.selecters.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.selecters.length;
      /*value是选中的数组*/
      this.$emit('classifyTitle', value)
    }
  }
}


</script>

<style scoped>
  .select {
    width: 1180px;
    background-color: #f4f4f4;
    border: 1px solid #545c64;
    margin: auto;
    padding: 10px;
  }
</style>
