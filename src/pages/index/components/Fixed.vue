<template>
  <div class="fixedBox">
    <div class="goTop" @click="toTop">
      <div class="icon_top"></div>
    </div>
    <div class="ewmBox" @click="showTopEwm">
      <div class="ewm"></div>
    </div>
  </div>
</template>
<script>
import { scrollTop } from '../scroll';
export default {
  methods: {
    toTop() {
      const sTop = document.documentElement.scrollTop || document.body.scrollTop;
      scrollTop(window, sTop, 0, 500, 'linear');
    },
    showTopEwm() {
      this.$parent.showTopEwm = true;
    }
  }
};
</script>

<style lang="less" scoped>
.fixedBox {
  position: fixed;
  bottom: 100px;
  right: 50px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  .goTop {
    width: 50px;
    height: 50px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 20px 0px rgba(0, 0, 0, 0.05);
    border-radius:8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .icon_top {
      width: 27px;
      height: 27px;
      background: url("~assets/images/icon_top.png");
      background-size: 100%;
    }
  }
  .ewmBox {
    width: 50px;
    height: 50px;
    margin-top: 20px;
    cursor: pointer;
    .ewm {
      width: 50px;
      height: 50px;
      background: url("~assets/images/icon_wx.png");
      background-size: 100%;
    }
  }
}
</style>

