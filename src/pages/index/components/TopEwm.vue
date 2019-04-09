<template>
  <div class="topEwm" @click="hideEwm">
    <div class="ewm">
      <img src="../../../assets/images/ewm_dyh.jpg" />
      <span class="pc">微信订阅号</span>
      <span class="big pc">童言英语对话</span>
      <span>长按保存图片，扫码识别二维码</span>
      <span>微信订阅号：童言英语对话</span>
    </div>
    <div class="ewm">
      <img src="../../../assets/images/ewm_fwh.jpg" />
      <span class="pc">微信服务号</span>
      <span class="big pc">童言有艺</span>
      <span>长按保存图片，扫码识别二维码</span>
      <span>微信服务号：童言有艺</span>
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
      padding: 5px;
      background: #ffffff;
      border-radius: 8px;
      margin-bottom: 20px;
    }
    span {
      font-size:20px;
      font-weight:bold;
      color:rgba(255,255,255,1);
      line-height:36px;
      display: none;
      &.pc {
        display: block;
      }
      &.big {
        font-size: 24px;
      }
    }
  }
}
@media screen and (max-width: 1025px) {
  .topEwm {
    flex-direction: column;
    .ewm {
      margin: 0.22rem 0;
      img {
        width: 4rem;
        height: 4rem;
        padding: 0 0.1rem;
        border-radius: 0.16rem;
        margin-bottom: 0.1rem;
      }
      span {
        font-size:0.22rem;
        line-height:0.3rem;
        display: block;
        &.pc {
          display: none;
        }
      }
    }
  }
}
</style>

