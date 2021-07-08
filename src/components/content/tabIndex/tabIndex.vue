<template>
  <div class="tab-index">
    <div class="tab-index-content">
      <div class="tabindex-content-left">
        <a href="#"><span>佛山市恒有展览有限公司</span></a>
        <span class="tabindex-line">|</span>
        <span>国际展览</span>
      </div>
      <div class="tabindex-content-right">
        <div>全球展览咨询电话:
          <span id="tabindex-phone">13703010208</span>
        </div>
        <div><span class="tabindex-line">|</span></div>
        <div id="tabindex-login-register">
          <div>您好！请先</div>
          <a href="#"><div id="tabindex-login">登录</div></a>
          <div>或者</div>
          <a href="#"><div id="tabindex-register">注册</div></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabIndex"
}
</script>

<style scoped>
  .tab-index {
    width: 100%;
    background-color: #f4f4f4;
  }

  .tab-index-content {
    display: flex;
    justify-content: space-between;

    margin-left: auto;
    margin-right: auto;

    height: 30px;
    line-height: 30px;
    font-size: 12px;
    width: 1180px;
    background-color: #f4f4f4;
  }

  .tabindex-line {
    display: inline-block;
    margin: 0 10px 0 10px;
  }

  .tabindex-content-right {
    height: 30px;
    display: flex;
  }

  #tabindex-login-register {
    display: flex;
    align-items: center;
  }

  #tabindex-login,
  #tabindex-register {
    padding: 0 5px 0 5px;
    margin: 0 5px 0 5px;

    height: 20px;
    line-height: 20px;
    background-color: #545c64;
    color: white;
    border-radius: 15%;
  }

  #tabindex-phone {
    font-weight: bold;
    color: cornflowerblue;
  }


</style>
