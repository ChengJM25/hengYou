<template>
  <div class="nav-menu-content">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">

      <el-menu-item index="/home">首&nbsp&nbsp&nbsp&nbsp页</el-menu-item>
      <el-menu-item index="/emphasis">政府重点</el-menu-item>
      <el-menu-item index="/foreign">国外展览</el-menu-item>
      <el-menu-item index="/domestic">国内展览</el-menu-item>
      <el-menu-item index="/retrospectives">精彩回顾</el-menu-item>
      <el-menu-item index="/information">补贴咨询</el-menu-item>
      <el-menu-item index="/company">企业信息</el-menu-item>
      <el-menu-item index="/supply">供需发布</el-menu-item>
      <el-menu-item index="/about">关于我们</el-menu-item>
    </el-menu>
  </div>
</template>

<script>


export default {
  name: "navMenu",
  data() {
    return {
      activeIndex: '1',
    }
  },
  methods: {
    handleSelect(index) {
/*      console.log(index, path);*/
      this.$router.push(index)

    }
  }
}
</script>

<style scoped>
  .nav-menu-content {
    width: 1180px;
    margin: auto;
  }

  .el-menu-demo {
    display: flex;
    justify-content: space-between;
  }
</style>
