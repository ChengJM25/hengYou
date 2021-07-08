<template>
  <div class="search">
    <input value="请输入您要搜索的内容" type="text">
    <button class="search-button"><i class="fa fa-search"></i></button>
  </div>
</template>

<script>

export default {
  name: "cjmSearch",
}
</script>

<style scoped>
  .search {
    margin-top: 30px;
    position: relative;
    margin-right: 50px;
  }

  input {
    height: 30px;
    width: 250px;
    border-color: black;
    border-radius: 35px;
    outline: 0;
    background-color: #ffffff;
    padding: 20px 20px 20px 40px;

  }

  button {
    height: 30px;
    width: 30px;
    background: none;
    border: none;
    color: black;
    font-weight: bold;
    position: absolute;
    left: 10px;
    top: 8px;
  }
</style>
