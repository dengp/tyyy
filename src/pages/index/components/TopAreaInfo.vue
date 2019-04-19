<template>
  <div class="TopAreaInfo">
    <div class="info">
      <div class="title">
        <h2 class="eng animated fadeInUp">Stage Your Future</h2>
        <h2 class="cn animated fadeInUp">展现你的未来</h2>
      </div>
      <div ref="wordpos"></div>
      <div class="icon animated fadeInUp">
        <div class="plam">
          <span class="ios"></span>
          <span class="android"></span>
        </div>
        <span class="wx" @click="showTopEwm"></span>
      </div>
      <div class="go" @click="go">
        <span></span>
      </div>
      <img class="mobile animated fadeInUp" src="../../../assets/images/iPhoneX.png" />
    </div>
  </div>
</template>
<script>
import { scrollTop } from '../scroll';
export default {
  methods: {
    go() {
      // document.body.style.overflow = 'scroll';
      const sTop = document.documentElement.scrollTop || document.body.scrollTop;
      scrollTop(window, sTop, document.body.clientHeight - 90, 500, 'linear');
    },
    showTopEwm() {
      this.$parent.$parent.showTopEwm = true;
    }
  }
};
</script>
<style lang="less" scoped>
.TopAreaInfo {
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  overflow: hidden;
  .info {
    min-width: 1240px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    position: relative;
    .title {
      h2 {
        font-size:48px;
        color:rgba(255,255,255,1);
        font-weight: 400;
        margin: 0 120px 17px 0;
        animation-delay: 1.5s;
        text-align: right;
        &.eng {
          font-size: 60px;
          animation-delay: 1s;
        }
      }
    }
    .icon {
      display: flex;
      margin: 42px 120px 110px 0;
      animation-delay: 2s;
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
    }
    .mobile {
      width: 252px;
      position: absolute;
      left: 222px;
      bottom: 10px;
      animation-duration: 2s;
    }
  }
}

@media screen and (max-width: 1025px) {
  .TopAreaInfo {
    .info {
      min-width: 100%;
      align-items: center;
      justify-content: flex-start;
      .title {
        h2 {
          font-size:0.48rem;
          margin: 0.3rem 0 0 0;
          text-align: center;          
          &.eng {
            font-size: 0.72rem;
            margin-top: 2rem;
          }
        }
      }
      .icon {
        display: none;
      }
      .go {
        display: none;
      }
      .mobile {
        width: 4.33rem;
        position: initial;
        margin-top: 0.6rem;
      }
    }
  }
}
</style>

