<template>
  <div class="fifth">
    <h4 class="animated" :class="{fadeIn: circleRoate}">关于我们</h4>
    <div class="fifthCon">
      <div class="border-big-w"></div>
      <div class="border-big">
        <div class="wrapper right">
          <div class="circle" :class="{rightcircle: circleRoate}"></div>
        </div>
        <div class="wrapper left">
          <div class="circle" :class="{leftcircle: circleRoate}"></div>
        </div>
      </div>
      <div class="over">
        <img class="img03 animated" :class="{'img3animate slideInLeft': circleRoate}" src="../../../assets/images/img03.jpg" />
        <img class="img04 animated delay-4s" :class="{'img04animate slideInRight': circleRoate}" src="../../../assets/images/ren.png" />
        <div class="introBox">
          <div class="border-min"></div>
          <div class="intro">
            <h4 class="animated delay-1s" :class="{fadeIn: circleRoate}">关于我们</h4>
            <div class="text animated delay-2s" :class="{fadeIn: circleRoate}">
              <span>未来的舞台是一个没有边界的舞台。唯一的限制是想象力，甚至是一个小小的声音，都可以在全球范围内，制造巨大的涟漪。</span>
              <span>由StageKids培育的孩子们已经准备好面对全球性的未来。通过艺术教育的旅程，他们敢于去梦想、去发现，成为有创意、有自信的沟通者。</span>
            </div>
            <a href="./about.html" class="btn animated delay-3s" :class="{fadeIn: circleRoate}">了解更多</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    'curTop',
    'curHeight'
  ],
  data() {
    return {
      introBoxPos: 0,
      animate: true,
    }
  },
  computed: {
    circleRoate() {
      const toAnimate = this.curTop >= this.introBoxPos + this.curHeight / 3 && this.curTop < this.introBoxPos + this.curHeight;
      if (this.animate && toAnimate) {
        this.animate = false;
        return toAnimate;
      } else {
        return !this.animate;
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.introBoxPos = document.querySelector('.fifth').offsetTop;
    })
  }
};
</script>

<style lang="less" scoped>
.fifth {
  h4 {
    display: none;
  }
  .over {
    width: 100%;
    height: 710px;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: flex-end;
  }
  .fifthCon {
    position: relative;
    display: flex;
    justify-content: flex-end;
    .border-big {
      width: 280px;
      height : 280px;
      position: absolute;
      top: -139px;
      left: 0px;
      z-index: 1;
      .wrapper{
        width: 140px;
        height: 280px;
        position: absolute;
        top:0;
        overflow: hidden;
      }
      .right{
        right:0;
      }
      .left{
        left:0;
      }
      .circle{
        width: 280px;
        height: 280px;
        border:30px solid transparent;
        border-radius: 50%;
        position: absolute;
        top:0;
        transform : rotate(0deg);
      }
      .rightcircle{
        border-top:30px solid #1CBCF9;
        border-left:30px solid #1CBCF9;
        right:0px;
        transform: rotate(-45deg);
        animation: circle_right 1s linear forwards;
        animation-delay: 6s;
      }
      .leftcircle{
        border-bottom:30px solid #1CBCF9;
        border-left:30px solid #1CBCF9;
        left:0;
        animation: circle_left 1s linear forwards;
        transform: rotate(-135deg);
        animation-delay: 5s;

      }
      @keyframes circle_right{
        0%{
          transform: rotate(-45deg);
        }
        50%,100%{
          transform: rotate(45deg);
        }
      }
      @keyframes circle_left{
        0%,50%{
          transform: rotate(-135deg);
        }
        100%{
          transform: rotate(45deg);
        }
      }
    }
    .border-big-w {
      width:280px;
      height:280px;
      border:30px solid #ffffff;
      border-radius:50%;
      position: absolute;
      top: -139px;
      left: 0px;
      z-index: 1;
    }
    .img03 {
      width:800px;
      height:600px;
      position: absolute;
      left: -800px;
      bottom: 0px;
      z-index: 1;
      &.img3animate {
        left: 0;
      }
    }
    .img04 {
      width:275px;
      height:150px;
      position: absolute;
      right: -275px;
      bottom: 0;
      z-index: 1;
      &.img04animate {
        right: -40px;
      }
    }
    .introBox {
      width:1300px;
      height:640px;
      background:rgba(28,188,249,1);
      z-index: 0;
      display: flex;
      justify-content: flex-end;
      position: relative;
      .border-min {
        width:280px;
        height:280px;
        border:30px solid rgba(255,255,255,1);
        border-radius:50%;
        position: absolute;
        top: -139px;
        left: -140px;
      }
      .intro {
        width: 451px;
        color: #ffffff;
        margin: 133px 140px 0 0;
        h4 {
          display: block;
          font-size:36px;
          opacity: 0;
        }
        .text {
          height: 234px;
          margin-top: 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          opacity: 0;
          span {
            font-size: 18px;
            line-height:36px;
          }
        }
        .btn {
          display: block;
          width:140px;
          height:50px;
          background:rgba(255,255,255,1);
          border-radius:8px;
          line-height: 50px;
          font-size:18px;
          font-weight:bold;
          color:rgba(28,188,249,1);
          text-align: center;
          cursor: pointer;
          margin-top: 43px;
          opacity: 0;
        }
      }
    }
  }
}
@media screen and (max-width: 1025px) {
  .fifth {
    margin-top: 0.6rem;
    flex-direction: column;
    .over {
      height: auto;
      padding-bottom: 0.55rem;
    }
    h4 {
      font-size:0.48rem;
      font-weight:bold;
      color:rgba(51,51,51,1);
      line-height:0.36rem;
      display: block;
      margin-bottom: 0.41rem;
      text-align: center;
      opacity: 0;
    }
    .fifthCon {
      padding-bottom: 0;
      .border-big {
        width: 1.2rem;
        height: 1.2rem;
        top: -0.6rem;
        .wrapper{
          width: 0.6rem;
          height: 1.2rem;
        }
        .circle{
          width: 1.2rem;
          height: 1.2rem;
          border:0.15rem solid transparent;
        }
        .rightcircle{
          border-top:0.15rem solid #1CBCF9;
          border-left:0.15rem solid #1CBCF9;
          animation-delay: 4s;
        }
        .leftcircle{
          border-bottom:0.15rem solid #1CBCF9;
          border-left:0.15rem solid #1CBCF9;
          animation-delay: 3s;
        }
      }
      .border-big-w {
        width:1.2rem;
        height:1.2rem;
        border:0.15rem solid #ffffff;
        top: -0.6rem;
      }
      .img03 {
        width:6.4rem;
        height:4.8rem;
        top: 0.4rem;
      }
      .img04 {
        width:2.75rem;
        height:1.5rem;
        animation-delay: 2s;
        right: -2.75rem;
        &.img04animate {
          right: -0.4rem;
        }
      }
      .introBox {
        width:7.1rem;
        height:auto;
        margin-left: 0.4rem;
        padding-bottom: 0.81rem;
        .border-min {
          width:1.2rem;
          height:1.2rem;
          border:0.15rem solid rgba(255,255,255,1);
          top: -0.6rem;
          left: -0.4rem;
        }
        .intro {
          width: 6.04rem;
          margin: 5.3rem auto 0;
          h4 {
            display: none;
          }
          .text {
            height: auto;
            margin-top: 0;
            animation-delay: 1s;
            span {
              font-size:0.28rem;
              line-height:0.42rem;
              margin-top: 0.42rem;
            }
          }
          .btn {
            display: none;
          }
        }
      }
    }
  }
}
</style>

