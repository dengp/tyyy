<template>
  <div class="third">
    <div class="yf">
      <div class="yf01 animated" :class="{'yf01animate slideInLeft': circleRoate}"></div>
      <div class="yf02-s-box" :class="{animated: circleRoate}">
        <div class="yf02-s animated delay-2s" :class="{'slideInRight': circleRoate}"></div>
      </div>
      <h3 class="animated" :class="{fadeIn: circleRoate}">不一样的主播</h3>
    </div>
    <div class="border-big-w"></div>
    <div class="border-big">
      <div class="wrapper right">
        <div class="circle" :class="{rightcircle: circleRoate}"></div>
      </div>
      <div class="wrapper left">
        <div class="circle" :class="{leftcircle: circleRoate}"></div>
      </div>
    </div>
    <div class="conBox pc">
      <div class="border-min"></div>
      <div class="yf-x-box" :class="{animated: circleRoate}">
        <div class="yf-x animated delay-1s" :class="{slideInLeft: circleRoate}"></div>
      </div>
      <div class="con">
        <h3 class="animated" :class="{fadeIn: circleRoate}">不一样的主播</h3>
        <span class="desc animated delay-1s" :class="{fadeIn: circleRoate}">欧美成人与双语儿童主播，无需拥有英语基础，从零开始的孩子无障碍开启</span>
        <div class="anchor animated delay-2s" :class="{fadeIn: circleRoate}">
          <div class="anchorList" :class="`pos${cur}`"  @mouseenter="enter" @mouseleave="leave">
            <div class="anchorItem" v-for="(item, index) in anchorList" :key="index">
              <img :src="item.pic" />
              <div class="intro">
                <span class="name">{{item.name}}</span>
                <span class="info">{{item.info}}</span>
              </div>
            </div>
          </div>
          <div class="btnList">
            <span v-for="(item, index) in anchorList" :key="index" :class="{cur: index === cur}" @mouseenter="enter(index)" @mouseleave="leave(index)"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="conBox">
      <div class="descBox">
        <div class="yf-x-box" :class="{animated: circleRoate}">
          <div class="yf-x animated delay-1s" :class="{slideInLeft: circleRoate}"></div>
        </div>
        <div class="border-min"></div>
        <span class="desc animated delay-1s" :class="{fadeIn: circleRoate}">欧美成人与双语儿童主播，无需拥有英语基础，从零开始的孩子无障碍开启</span>
      </div>
      <div class="con">
        <div class="anchor animated delay-2s" :class="{fadeIn: circleRoate}">
          <div class="anchorList" :class="`pos${cur}`"  @mouseenter="enter" @mouseleave="leave">
            <div class="anchorItem" v-for="(item, index) in anchorList" :key="index">
              <img :src="item.pic" />
              <span class="name">{{item.name}}</span>
              <span class="info">{{item.info}}</span>
            </div>
          </div>
        </div>
        <div class="left animated delay-2s" :class="{fadeIn: circleRoate}" @click="prev"></div>
        <div class="right animated delay-2s" :class="{fadeIn: circleRoate}" @click="next"></div>
      </div>
    </div>
    <div class="videoBoxa">
      <div class="videoBox">
        <div class="videoCover animated" :class="{'videoBoxanimate slideInRight': circleRoate}" v-if="!playVideo">
          <img src="../../../assets/images/img02.jpg" />
          <div class="play" @click="play"></div>
        </div>
        <video v-else class="video" ref="videoa" controls="controls">
          <source src="../../../assets/images/cg_v1.mp4" type="video/mp4" />
        </video>
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
      anchorList: [
        {
          name: 'NOORLINAH MOHAMED',
          info: 'Noorlinah是一名屡获殊荣的女演员、教学艺术家和新加坡公共参与艺术项目的创造者，自1998年以来，她与新加坡多家戏剧公司以及亚洲、欧洲和美国进行过演出。她拥有华威大学艺术教育学博士学位，在学校担任实习工作，为艺术教育学领域的艺术家和教师开发课程和专业发展。此外，Noorlinah是国家艺术委员会艺术课程教学的首席实践者和顾问，也是O.P.E.的主任这是新加坡国际艺术节的创意展前活动。',
          pic: require('../../../assets/images/tx01.jpg')
        },
        {
          name: 'NOORLINAH MOHAMED11111',
          info: 'Noorlinah是一名屡获殊荣的女演员、教学艺术家和新加坡公共参与艺术项目的创造者，自1998年以来，她与新加坡多家戏剧公司以及亚洲、欧洲和美国进行过演出。她拥有华威大学艺术教育学博士学位，在学校担任实习工作，为艺术教育学领域的艺术家和教师开发课程和专业发展。此外，Noorlinah是国家艺术委员会艺术课程教学的首席实践者和顾问，也是O.P.E.的主任这是新加坡国际艺术节的创意展前活动。',
          pic: require('../../../assets/images/tx02.jpg')
        },
        {
          name: 'NOORLINAH MOHAMED22222',
          info: 'Noorlinah是一名屡获殊荣的女演员、教学艺术家和新加坡公共参与艺术项目的创造者，自1998年以来，她与新加坡多家戏剧公司以及亚洲、欧洲和美国进行过演出。她拥有华威大学艺术教育学博士学位，在学校担任实习工作，为艺术教育学领域的艺术家和教师开发课程和专业发展。此外，Noorlinah是国家艺术委员会艺术课程教学的首席实践者和顾问，也是O.P.E.的主任这是新加坡国际艺术节的创意展前活动。',
          pic: require('../../../assets/images/tx03.jpg')
        }
      ],
      cur: 0,
      timer: null,
      pos: 0,
      playVideo: false,
      animate: true
    };
  },
  computed: {
    circleRoate() {
      const toAnimate = this.curTop >= this.pos + this.curHeight / 3 && this.curTop < this.pos + this.curHeight;
      if (this.animate && toAnimate) {
        this.animate = false;
        return toAnimate;
      } else {
        return !this.animate;
      }
    }
  },
  mounted() {
    // this.startAni();
    this.pos = document.querySelector('.third').offsetTop;
  },
  methods: {
    startAni() {
      this.timer = setInterval(() => {
        this.cur++;
        if (this.cur > this.anchorList.length - 1) {
          this.cur = 0;
        }
      }, 3000);
    },
    stopAni() {
      clearInterval(this.timer);
    },
    enter(index) {
      // this.stopAni();
      (index >= 0) && (this.cur = index);
    },
    leave(index) {
      // this.startAni();
      (index >= 0) && (this.cur = index);
    },
    prev() {
      if (this.cur > 0) {
        this.cur--;
      } else {
        this.cur = this.anchorList.length - 1;
      }
    },
    next() {
      if (this.cur < this.anchorList.length - 1) {
        this.cur++;
      } else {
        this.cur = 0;
      }
    },
    play() {
      this.playVideo = true;
      this.$nextTick(() => {
        this.$refs.videoa.play();
      });
    }
  }
};
</script>

<style lang="less" scoped>
.third {
  position: relative;
  padding-bottom: 70px;
  overflow: hidden;
  .border-big {
    width: 280px;
    height : 280px;
    position: absolute;
    top: 60px;
    right: 0px;
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
      border-top:30px solid #A8C100;
      border-left:30px solid #A8C100;
      right:0px;
      transform: rotate(-45deg);
      animation: circle_right 1s linear forwards;
      animation-delay: 4s;
    }
    .leftcircle{
      border-bottom:30px solid #A8C100;
      border-left:30px solid #A8C100;
      left:0;
      animation: circle_left 1s linear forwards;
      animation-delay: 3s;
      transform: rotate(-135deg);
    }
    @keyframes circle_right{
      0%{
        transform: rotate(-45deg);
      }
      50%,100%{
        transform: rotate(135deg);
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
    top: 60px;
    right: 0px;
  }
  .yf {
    display: flex;
    align-items: flex-end;
    margin-top: 27px;
    h3 {
      display: none;
    }
    .yf01 {
      width: 200px;
      height: 200px;
      background: url("~assets/images/yf01.png");
      background-size: 100% 100%;
      margin-left: -200px;
      &.yf01animate {
        margin-left: 0px;
      }
    }
    .yf02-s-box {
      opacity: 0;
      &.animated {
        animation: opacityFn 0.1s forwards;
        animation-delay: 2s;
      }
      .yf02-s {
        width: 60px;
        height: 54px;
        background: url("~assets/images/yf02-s.png");
        background-size: 100% 100%;
        margin-left: 1px;
      }
    }
  }
  .conBox {
    display: none;
    width:1300px;
    height:640px;
    background:rgba(168,193,0,1);
    position: relative;
    overflow: hidden;
    z-index: 1;
    &.pc {
      display: block;
    }
    .border-min {
      width:280px;
      height:280px;
      border: 30px solid rgba(255,255,255,1);
      border-radius: 50%;
      position: absolute;
      top: -167px;
      right: -140px;
    }
    .yf-x-box {
      opacity: 0;
      &.animated {
        animation: opacityFn 0.1s forwards;
        animation-delay: 1s;
      }
      .yf-x {
        width: 60px;
        height: 54px;
        background: url("~assets/images/yf-x.png");
        background-size: 100% 100%;
        margin-left: 201px;
      }
    }
  }
  @keyframes opacityFn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .con {
    width: 516px;
    color: #ffffff;
    margin: 79px 0 0 100px;
    h3 {
      font-size:36px;
      font-weight:bold;
      line-height:18px;
      opacity: 0;
    }
    .desc {
      display: block;
      font-size:18px;
      line-height:30px;
      margin-top: 49px;
      opacity: 0;
    }
    .anchor {
      width: 516px;
      overflow: hidden;
      opacity: 0;
      .anchorList {
        margin-top: 29px;
        width: 1548px;
        display: flex;
        transition: transform 0.5s ease-in-out;
        &.pos0 {
          transform: translateX(0)
        }
        &.pos1 {
          transform: translateX(-516px);
        }
        &.pos2 {
          transform: translateX(-1032px);
        }
        .anchorItem {
          width: 516px;
          display: flex;
          img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
          }
          .intro {
            width: 397px;
            margin-left: 19px;
            span {
              display: block;
              &.name {
                font-size:18px;
                margin-top: 20px;
              }
              &.info {
                margin-top: 21px;
                font-size: 14px;
                line-height:24px;
              }
            }
          }
        }
      }
      .btnList {
        width: 106px;
        display: flex;
        justify-content: center;
        margin-top: 69px;
        span {
          width: 8px;
          height: 8px;
          background: #ffffff;
          border-radius: 4px;
          margin-right: 10px;
          cursor: pointer;
          transition: width 0.5s ease-in-out;
          &.cur {
            width: 60px;
          }
        }
      }
    }
  }
  .videoBoxa {
    .videoBox {
      position: absolute;
      right: 0px;
      bottom: 0;
      width: 800px;
      height: 600px;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      z-index: 2;
      .videoCover {
        position: absolute;
        top: 0;
        right: -800px;
        animation-delay: 3s;
        &.videoBoxanimate {
          right: 0;
        }
        img {
          width: 800px;
        }
        .play {
          position: absolute;
          width: 80px;
          height: 80px;
          background: url("~assets/images/palyvido.png");
          background-size: 100% 100%;
          left: 50%;
          top: 50%;
          margin: -40px 0 0 -40px;
        }
      }
      .video {
        width: 800px;
        height: 600px;
        position: relative;
        z-index: 3;
      }
    }
  }
}
@media screen and (max-width: 1025px) {
  .third {
    padding-bottom: 0;
    overflow: inherit;
    .border-big {
      width: 1.2rem;
      height : 1.2rem;
      top: 1rem;
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
        border-top:0.15rem solid #A8C100;
        border-left:0.15rem solid #A8C100;
      }
      .leftcircle{
        border-bottom:0.15rem solid #A8C100;
        border-left:0.15rem solid #A8C100;
      }
    }
    .border-big-w {
      width:1.2rem;
      height:1.2rem;
      border:0.15rem solid #ffffff;
      top: 1rem;
    }
    .yf {
      margin-top: 0.6rem;
      position: relative;
      .yf01 {
        width: 1.6rem;
        height: 1.6rem;
      }
      .yf02-s-box {
        .yf02-s {
          width: 0.4rem;
          height: 0.35rem;
          margin-left: -0.16rem;
        }
      }
      h3 {
        width: 100%;
        display: block;
        font-size:0.48rem;
        font-weight:bold;
        position: absolute;
        left: 0;
        top: 0.72rem;
        text-align: center;
        opacity: 0;
      }
    }
    .descBox {
      width: 7.1rem;
      padding-bottom: 0.2rem;
      background:rgba(168,193,0,1);
      position: relative;
      overflow: hidden;
      .desc {
        display: block;
        width:5.86rem;
        height:0.66rem;
        font-size:0.28rem;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:0.38rem;
        text-align: center;
        margin: 0.24rem auto 0;
        opacity: 0;
      }
      .border-min {
        width:1.2rem;
        height:1.2rem;
        border: 0.15rem solid rgba(255,255,255,1);
        position: absolute;
        top: -0.6rem;
        right: -0.4rem;
      }
      .yf-x-box {
        .yf-x {
          width: 0.4rem;
          height: 0.35rem;
          margin-left: 1.44rem;
        }
      }
    }
    .conBox {
      width:100%;
      height:auto;
      display: block;
      background: none;
      overflow: inherit;
      &.pc {
        display: none;
      }
    }
    .con {
      background:rgba(168,193,0,1);
      width: 100%;
      margin: -1px 0 0 0;
      .anchor {
        width: 5.9rem;
        margin: 0 auto;
        .anchorList {
          margin-top: 0.6rem;
          width: 17.7rem;
          &.pos0 {
            transform: translateX(0)
          }
          &.pos1 {
            transform: translateX(-5.9rem);
          }
          &.pos2 {
            transform: translateX(-11.8rem);
          }
          .anchorItem {
            display: flex;
            flex-direction: column;
            width: 5.9rem;
            img {
              width: 2rem;
              height: 2rem;
              margin: 0 auto;
            }
            span {
              &.name {
                font-size:0.3rem;
                line-height:0.6rem;
                margin-top: 0.3rem;
                text-align: center;
              }
              &.info {
                font-size:0.24rem;
                line-height:0.36rem;
                margin-top: 0.35rem;
              }
            }
          }
        }
      }
      .left {
        width: 0.34rem;
        height: 0.6rem;
        background: url("~assets/images/arrows_l.png");
        background-size: 100% 100%;
        position: absolute;
        top: 50%;
        left: 0.17rem;
        margin-top: -0.3rem;
        opacity: 0;
      }
      .right {
        width: 0.34rem;
        height: 0.6rem;
        background: url("~assets/images/arrows_r.png");
        background-size: 100% 100%;
        position: absolute;
        top: 50%;
        right: 0.17rem;
        margin-top: -0.3rem;
        opacity: 0;
      }
    }
    .videoBoxa {
      background-color: #A8C100;
      margin: -1px 0 0.6rem 0;
      .videoBox {
        width: 100%;
        height: 4.8rem;
        position: relative;
        overflow: hidden;
        top: 0.6rem;
        left: 0;
        overflow: hidden;
        .videoCover {
          width: 100%;
          position: absolute;
          text-align: center;
          right: -10rem;
          animation-delay: 3s;
          img {
            width: 6.4rem;
            height: 4.8rem;
          }
          &.videoBoxanimate {
            right: 0;
          }
          .play {
            width: 0.8rem;
            height: 0.8rem;
            margin: -0.4rem 0 0 -0.4rem;
          }
        }
        .video {
          width: 6.4rem;
        }
      }
    }
  }
}
@media screen and (min-width: 1026px) and (max-width: 1439px) {
  .videoBox, .videoCover img, .video {
    width:660px !important;
    height: 495px !important;
  }
  .conBox {
    width: 1160px !important;
  }
}
</style>

