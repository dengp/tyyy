<template>
  <div class="loading">
    <div class="icon">
      <div class="splice"></div>
    </div>
    <p>--------  英语小舞台，人生大未来  --------</p>
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
.loading {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  z-index: 99;
  background: rgba(247, 247, 247, 1);
  .icon {
    width: 90px;
    height: 120px;
    background: url("~assets/images/loading.png") no-repeat;
    background-size: 100%;
    margin-top: 250px;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    display: flex;
    align-items: flex-end;
    .splice {
      width: 90px;
      background: rgba(247, 247, 247, 1);
      animation: heightFn 3s linear infinite;
    }
    @keyframes heightFn {
      0% {
        height: 120px;
      }
      100% {
        height: 0px;
      }
    }
  }
  p {
    font-size:14px;
    font-weight:400;
    color:rgba(153,153,153,1);
    margin-bottom: 50px;
  }
}
</style>

