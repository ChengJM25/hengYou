<template>
  <div class="logo-cube">
    <div class="logo-cube-box1">
      <img :src="showImg[0]" alt="">
    </div>
    <div class="logo-cube-box2">
      <img :src="showImg[1]" alt="">
    </div>
    <div class="logo-cube-box3">
      <img :src="showImg[2]" alt="">
    </div>
    <div class="logo-cube-box4">
      <img :src="showImg[3]" alt="">
    </div>
    <div class="logo-cube-box5">
      <img :src="showImg[4]" alt="">
    </div>
    <div class="logo-cube-box6">
      <img :src="showImg[5]" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "logoCube",
  props: {
    /*设置一个变量，储存使用组件时传入的数据*/
    showImg: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .logo-cube {
    width: 50px;
    height: 50px;
    /*设置3D变形，否则正方体旋转之后还是一个平面*/
    transform-style: preserve-3d;
    transform: rotateX(45deg) rotateZ(45deg);
    /*设置运动属性*/
    animation: rotate 20s infinite linear;
  }

  .logo-cube > div {
    width: 50px;
    height: 50px;
/*    opacity: 0.7;*/
    position: absolute;
  }

  .logo-cube img {
    height: 50px;
    width: 50px;
  }

  /*第一张图片沿Y轴旋转90度，图片会垂直竖起来，
  这时再平移图片宽度的一半，就得到一个面了*/
  .logo-cube-box1 {
    transform: rotateY(90deg) translateZ(25px);

  }
  /*第二张图片沿Y轴反着旋转90度，图片会垂直竖起来，
  这时再平移图片宽度的一半，就得到竖着的另一个面了*/
  .logo-cube-box2 {
    transform: rotateY(-90deg) translateZ(25px);
  }
  /*第三张图片沿X轴旋转90度，图片会水平横着，
  这时再平移图片宽度的一半，就得到上面*/
  .logo-cube-box3 {
    transform: rotateX(90deg) translateZ(25px)
  }
  /*第四张图片沿X轴旋转90度，图片会水平横着，
  这时再平移图片宽度的一半，就得到下面*/
  .logo-cube-box4 {
    transform: rotateX(-90deg) translateZ(25px)
  }
  /*第五张图片沿Y轴旋转180度，图片会翻过去，
  这时再平移图片宽度的一半，就得到后面*/
  .logo-cube-box5 {
    transform: rotateY(180deg) translateZ(25px);
  }
  /*第六张图片不转，
  也再平移图片宽度的一半，就得到前面*/
  .logo-cube-box6 {
    transform: rotateY(0deg) translateZ(25px);
  }

  /*设置关键帧*/
  @keyframes rotate {
    from {
      transform: rotateX(0) rotateZ(0);
    }
    to {
      transform: rotateX(1turn) rotateZ(1turn);
    }
  }
</style>
