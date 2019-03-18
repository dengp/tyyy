<template>
  <div class="TopAreaInfo">
    <div class="info">
      <div class="title">
        <h2 class="eng animated bounce">Stage Your Future</h2>
        <h2 class="cn animated bounce">展现你的未来</h2>
      </div>
      <div class="icon">
        <div class="plam">
          <span class="ios"></span>
          <span class="android"></span>
        </div>
        <span class="wx" @click="showTopEwm"></span>
      </div>
      <div class="go" @click="go">
        <span></span>
      </div>
      <div class="mobile animated bounceInUp"></div>
      <div class="choose">
        <div class="appDown">
          <div class="icona"></div>
          <span>APP下载</span>
        </div>
        <div class="gzgzh">
          <div class="icona"></div>
          <span>关注公众号</span>
        </div>
      </div>
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
        font-family:MicrosoftYaHei;
        font-weight: 400;
        margin: 0 120px 17px 0;
        animation-duration: 1s;
        &.eng {
          font-size: 60px;
        }
      }
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
      height: 500px;
      background: url("~assets/images/iPhoneX.png");
      background-size: 100% 100%;
      position: absolute;
      left: 222px;
      bottom: 10px;
    }
    .choose {
      display: none;
    }
  }
}

@media screen and (max-width: 750px) {
  .TopAreaInfo {
    .info {
      min-width: 100%;
      align-items: center;
      justify-content: space-between;
      .title {
        h2 {
          font-size:0.48rem;
          margin: 0.28rem 0 0 0;
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
        width: 4.34rem;
        height: 7.9rem;
        position: initial;
        background: url("~assets/images/iPhone.png");
        background-size: 100% 100%;
      }
      .choose {
        width: 7.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 1rem;
        background:linear-gradient(150deg,rgba(255,149,92,1),rgba(255,106,101,1));
        box-shadow:0px -5px 5px 0px rgba(0, 0, 0, 0.15);
        position: absolute;
        bottom: 0;
        span {
          font-size:0.3rem;
          font-family:PingFangSC-Medium;
          font-weight:500;
          color:rgba(255,255,255,1);
        }
        .icona {
          width: 0.48rem;
          height: 0.48rem;
          margin-right: 0.22rem;
        }
        .appDown {
          display: flex;
          align-items: center;
          .icona {
            background: url("~assets/images/download_icon.png");
            background-size: 100%;
          }
        }
        .gzgzh {
          display: flex;
          align-items: center;
          margin-left: 1.71rem;
          .icona {
            background: url("~assets/images/erweima_icon.png");
            background-size: 100%;
          }
        }
      }
    }
  }
}
</style>

