<template>
  <div class="information-item">
    <div class="information-item-title">
      <div><h2>{{title}}</h2></div>
      <div id="more" @click="moreClick">更多 ></div>
    </div>
    <div class="information-item-content">
      <ul>
        <li v-for="(item,index) in infor"
            class="information-content-item"
            :class="{'isActive': index === currentIndex}"
            :key="index"
            @mouseover = "currentIndex = index"
            @mouseout = "currentIndex = -1">
          <span id="subidy">{{informationType}}</span>
          <span>{{index}}{{item}}</span>
        </li>


      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "InformationItem",
  props: {
    path: String,
    title: {
      type: String,
      default() {
        return ''
      }
    },
    informationType: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
      infor: [
        'ajbkabkcbaksbcbaskbckasbcaacas 就爱看设备擦拭布擦撒撒擦撒擦三次s',
        'abcashchjasvchvasvcja按上次你卡死奴才卢卡斯那里参数六年级啊svjc',
        '啊u巴萨叉烧包插画按市场卡刷包擦上插上擦v擦拭剧场师擦肩是成本价洒出',
        'abcashchjasvchvasvcja按上次你卡死奴才卢卡斯那里参数六年级啊svjc',
        'abcashchjasvchvasvcja按上次你卡死奴才卢卡斯那里参数六年级啊svjc',
        'abcashchjasvchvasvcja按上次你卡死奴才卢卡斯那里参数六年级啊svjc',
        ],
      currentIndex: -1
    }
  },
  methods: {
    moreClick() {
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
  .information-item {
    height: 300px;
    width: 300px;
    background-color: #ffffff;
    padding: 10px;
  }

  .information-item-title {
    display: flex;
    justify-content: space-between;

    font-size: 12px;
    border-bottom: 2px solid #eeeeee;
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    padding-right: 10px;
  }

  .information-item-content{
    padding: 0 10px 10px 10px;
  }

  .information-content-item {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 20px;
  }

  #subidy {
    display: inline-block;
    background-color: orange;
    color: white;
    padding: 2px;
    border-radius: 5px;
    margin-right: 5px;
  }

  .isActive {
    color: orange;
  }

  #more:hover {
    color: orange;
  }
</style>
