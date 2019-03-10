<template>
  <div class="topEwm" @click="hideEwm">
    <div class="ewm">
      <img src="../../../assets/images/ewm1.png" />
      <span>微信订阅号</span>
      <span class="big">童言英语对话</span>
    </div>
    <div class="ewm">
      <img src="../../../assets/images/ewm3.png" />
      <span>微信服务号</span>
      <span class="big">童言有艺</span>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    hideEwm() {
      this.$parent.showTopEwm = false;
    }
  }
};
</script>

<style lang="less" scoped>
.topEwm {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 99;
  background: rgba(0, 0, 0, 0.5);
  .ewm {
    margin: 0 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 258px;
      height: 258px;
      padding: 0 5px;
      background: #ffffff;
      border-radius: 8px;
      margin-bottom: 20px;
    }
    span {
      font-size:20px;
      font-weight:bold;
      color:rgba(255,255,255,1);
      line-height:36px;
      &.big {
        font-size: 24px;
      }
    }
  }
}
</style>

