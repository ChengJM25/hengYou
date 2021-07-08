<template>
  <div class="foot-Copyright">
    <div class="foot-Copyright-content">
      <div>Copyright Reserved 2021-2022 © 佛山市恒有展览有限公司</div>
      <div class="footCopyright-content-logo">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footCopyright"
}
</script>

<style scoped>
  .foot-Copyright {
    width: 100%;
    height: 150px;
    background-color: #eee;
    position: relative;
  }

  .foot-Copyright-content {
    position: absolute;
    height: 80px;
    width: 1180px;
    text-align: center;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
  }

  .footCopyright-content-logo {
    display: flex;
    justify-content: space-evenly;
    margin: 30px auto 0 auto;
  }

</style>
