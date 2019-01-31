<template>
  <div class="topEwm" @click="hideEwm">
    <img src="../../../assets/images/ewm1.png" />
    <img src="../../../assets/images/ewm3.png" />
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
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
  img {
    width: 280px;
    height: 372px;
    margin: 0 90px;
  }
}
</style>

