<template>
  <div class="TopAreaInfo">
    <h2>Stage Your Future</h2>
    <h2>展现你的未来</h2>
    <div class="icon">
      <div class="plam">
        <span class="ios"></span>
        <span class="android"></span>
      </div>
      <span class="wx"></span>
    </div>
    <div class="go" @click="go">
      <span></span>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    go() {
      // document.body.style.overflow = 'scroll';
      document.documentElement.scrollTop = document.body.scrollTop = document.body.clientHeight;
    }
  }
};
</script>
<style lang="less" scoped>
.TopAreaInfo {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  h2 {
    font-size:72px;
    font-weight:bold;
    color:rgba(255,255,255,1);
    font-family: MicrosoftYaHei-Bold;
    margin: 0 120px 17px 0;
  }
  .icon {
    display: flex;
    margin: 42px 120px 110px 0;
    .plam {
      display: flex;
      width: 300px;
      height: 50px;
      background: url("~assets/images/icon_plam.png");
      background-size: 100%;
      span {
        width: 140px;
        height: 50px;
        cursor: pointer;
        &.android {
          margin-left: 20px;
        }
      }
    }
    .wx {
      width: 50px;
      height: 50px;
      background: url("~assets/images/icon_wx.png");
      background-size: 100%;
      margin-left: 20px;
      cursor: pointer;
    }
  }
  .go {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    span {
      width: 40px;
      height: 40px;
      background: url("~assets/images/icon_go.png");
      background-size: 100%;
      animation: myfirst 2s ease-in-out infinite;
      cursor: pointer;
    }
  }
}
@keyframes myfirst {
  0% {
    transform: translate(0px, 0px);
  }
  50% {
    transform: translate(0px, -10px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
</style>

