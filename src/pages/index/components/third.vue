<template>
  <div class="third">
    <div class="yf">
      <div class="yf01 animated" :class="{slideInLeft:  circleRoate}"></div>
      <div class="yf02-s animated" :class="{slideInLeft:  circleRoate}"></div>
    </div>
    <div class="border-big-w"></div>
    <div class="border-big">
      <div class="wrapper right">
        <div class="circle" :class="{rightcircle:  circleRoate}"></div>
      </div>
      <div class="wrapper left">
        <div class="circle" :class="{leftcircle:  circleRoate}"></div>
      </div>
    </div>
    <div class="conBox">
      <div class="border-min"></div>
      <div class="yf-x animated" :class="{slideInLeft:  circleRoate}"></div>
      <div class="con">
        <h3>不一样的主播</h3>
        <span class="desc">欧美成人与双语儿童主播，无需拥有英语基础，从零开始的孩子无障碍开启</span>
        <div class="anchor">
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
    <div class="videoBox">
      <div class="videoCover" v-if="!playVideo">
        <img src="../../../assets/images/img02.png" />
        <div class="play" @click="play"></div>
      </div>
      <video v-else class="video" ref="videoa" width="800" controls="controls">
        <source src="../../../assets/images/cg_v1.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    'curTop'
  ],
  data() {
    return {
      anchorList: [
        {
          name: 'NOORLINAH MOHAMED',
          info: 'Noorlinah是一名屡获殊荣的女演员、教学艺术家和新加坡公共参与艺术项目的创造者，自1998年以来，她与新加坡多家戏剧公司以及亚洲、欧洲和美国进行过演出。她拥有华威大学艺术教育学博士学位，在学校担任实习工作，为艺术教育学领域的艺术家和教师开发课程和专业发展。此外，Noorlinah是国家艺术委员会艺术课程教学的首席实践者和顾问，也是O.P.E.的主任这是新加坡国际艺术节的创意展前活动。',
          pic: require('../../../assets/images/headpic.png')
        },
        {
          name: 'NOORLINAH MOHAMED11111',
          info: 'Noorlinah是一名屡获殊荣的女演员、教学艺术家和新加坡公共参与艺术项目的创造者，自1998年以来，她与新加坡多家戏剧公司以及亚洲、欧洲和美国进行过演出。她拥有华威大学艺术教育学博士学位，在学校担任实习工作，为艺术教育学领域的艺术家和教师开发课程和专业发展。此外，Noorlinah是国家艺术委员会艺术课程教学的首席实践者和顾问，也是O.P.E.的主任这是新加坡国际艺术节的创意展前活动。',
          pic: require('../../../assets/images/headpic.png')
        },
        {
          name: 'NOORLINAH MOHAMED22222',
          info: 'Noorlinah是一名屡获殊荣的女演员、教学艺术家和新加坡公共参与艺术项目的创造者，自1998年以来，她与新加坡多家戏剧公司以及亚洲、欧洲和美国进行过演出。她拥有华威大学艺术教育学博士学位，在学校担任实习工作，为艺术教育学领域的艺术家和教师开发课程和专业发展。此外，Noorlinah是国家艺术委员会艺术课程教学的首席实践者和顾问，也是O.P.E.的主任这是新加坡国际艺术节的创意展前活动。',
          pic: require('../../../assets/images/headpic.png')
        }
      ],
      cur: 0,
      timer: null,
      pos: 0,
      playVideo: false
    };
  },
  computed: {
    circleRoate() {
      return this.curTop > this.pos;
    }
  },
  mounted() {
    this.startAni();
    this.pos = document.querySelector('.third').offsetTop + 300;
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
      this.stopAni();
      (index >= 0) && (this.cur = index);
    },
    leave(index) {
      this.startAni();
      (index >= 0) && (this.cur = index);
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
  width: 1440px;
  position: relative;
  padding-bottom: 70px;
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
      animation-delay: 1s;
    }
    .leftcircle{
      border-bottom:30px solid #A8C100;
      border-left:30px solid #A8C100;
      left:0;
      animation: circle_left 1s linear forwards;
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
    .yf01 {
      width: 200px;
      height: 200px;
      background: url("~assets/images/yf01.png");
      background-size: 100%;
    }
    .yf02-s {
      width: 60px;
      height: 54px;
      background: url("~assets/images/yf02-s.png");
      background-size: 100%;
      margin-left: 1px;
    }
  }
  .conBox {
    width:1300px;
    height:640px;
    background:rgba(168,193,0,1);
    position: relative;
    overflow: hidden;
    z-index: 1;
    .border-min {
      width:280px;
      height:280px;
      border-bottom: 30px solid rgba(255,255,255,1);
      border-left: 30px solid rgba(255,255,255,1);
      border-radius: 50%;
      position: absolute;
      top: -140px;
      right: -140px;
    }
    .yf-x {
      width: 60px;
      height: 54px;
      background: url("~assets/images/yf-x.png");
      background-size: 100%;
      margin-left: 201px;
    }
  }
  .con {
    width: 516px;
    color: #ffffff;
    margin: 79px 0 0 100px;
    h3 {
      font-size:36px;
      font-family:MicrosoftYaHei-Bold;
      font-weight:bold;
      line-height:18px;
    }
    .desc {
      display: block;
      font-size:18px;
      line-height:30px;
      margin-top: 49px;
    }
    .anchor {
      width: 516px;
      overflow: hidden;
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
  .videoBox {
    position: absolute;
    right: 0;
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
      left: 0;
      img {
        width: 800px;
        height: 600px;
      }
      .play {
        position: absolute;
        width: 80px;
        height: 80px;
        background: url("~assets/images/palyvido.png");
        background-size: 100%;
        left: 50%;
        top: 50%;
        margin: -40px 0 0 -40px;
      }
    }
    .video {
      width: 800px;
      position: relative;
      z-index: 3;
    }
  }
}
</style>

