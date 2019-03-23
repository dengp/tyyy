<template>
  <div class="first">
    <div class="fc-big"></div>
    <div class="fc-min"></div>
    <div class="content_title">
      <h3>三个核心版块</h3>
      <p>StageKids提供多个延伸支持版块，鼓励父母参与到孩子的亲子陪伴类活动中</p>
    </div>
    <div class="cardList pc">
      <div class="card" v-for="(item, index) in cardList" :key="index">
        <img :src="item.pic" />
        <span class="cardTitle">{{item.title}}</span>
        <span class="desc">{{item.desc}}</span>
        <p class="details" :class="`details${index}`">{{item.details}}</p>
      </div>
    </div>
    <div class="cardList">
      <swiper ref="mySwiper" :options="swiperOption" @slideChangeTransitionEnd="slideChangeTransitionEnd">
        <swiper-slide v-for="(item, index) in cardList" :key="index">
          <div class="card">
            <img :src="item.pic" />
            <span class="cardTitle">{{item.title}}</span>
            <span class="desc">{{item.desc}}</span>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="cardintrobox" :class="`detials${cur}`">
      <div class="jiao"></div>
      <div class="cardintro">
        <p>{{cardList[cur].details}}</p>
      </div>
    </div>
    <div class="introArea">
      <h3>我们的与众不同</h3>
      <div class="introAreaCon">
        <div class="border-big-w"></div>
        <div class="border-big">
          <div class="wrapper right">
            <div class="circle" :class="{rightcircle: circleRoate}"></div>
          </div>
          <div class="wrapper left">
            <div class="circle" :class="{leftcircle: circleRoate}"></div>
          </div>
        </div>
        <img class="img01" src="../../../assets/images/img01.png" />
        <div class="introBox">
          <div class="border-min"></div>
          <div class="intro">
            <h4>我们的与众不同</h4>
            <ul>
              <li>o 第一个原创英文音频对话节目</li>
              <li>o 纯正欧美成人与双语儿童主播</li>
              <li>o 海量对话和儿童剧音频节目，原创音频剧【JOJO奇遇记】重磅推出</li>
              <li>o 定制化的配套双语文本</li>
              <li>o 高质量的互动型亲子活动与游戏</li>
              <li>o 无需拥有英语基础，从零开始的孩子无障碍开启</li>
              <li>o 不同的级别适应各年龄段孩子需求</li>
              <li>o 支持在线和缓存模式，可在任何智能设备上收听，全平台覆盖。收听时间和空间不受限制，随时随地，无需预约</li>
            </ul>
          </div>
        </div>
        <div class="qiqiu"></div>
      </div>
    </div>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props: [
    'curTop',
    'curHeight'
  ],
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      cardList: [
        {
          pic: require('../../../assets/images/card3.png'),
          title: '一起来表演',
          desc: 'Show time',
          details: '一起表演相应文字描述，一起表演相应文字描述，一起表演相应文字描述，一起表演相应文字描述，一起表演相应文字描述，一起表演相应文字描述，一起表演相应文字描述，一起表演相应文字描述，一起表演相应文字描述，一起表演相应文字描述，100字左右'
        },
        {
          pic: require('../../../assets/images/card1.png'),
          title: '童言对话',
          desc: 'Conversation',
          details: '童言对话相应文字描述，童言对话相应文字描述，童言对话相应文字描述，童言对话相应文字描述，童言对话相应文字描述，童言对话相应文字描述，童言对话相应文字描述，童言对话相应文字描述，童言对话相应文字描述，童言对话相应文字描述100字左右'
        },
        {
          pic: require('../../../assets/images/card2.png'),
          title: 'JOJO奇遇记',
          desc: 'JOJO Stories',
          details: '原创音频剧“Jojo奇遇记”重磅推出，宝儿们可以听到主角Jojo犯错误或失败的故事，真实、生动、轻松，让我们的孩子学会乐观地看待自己的失误甚至失败。通过听音频剧，与Jojo共同成长，帮助孩子提升适应各种环境与团队的能力；课后互动游戏，提高孩子独立思考与分析的能力。'
        }
      ],
      introAreaPos: 0,
      cur: 1,
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 16,
        initialSlide: 1,//默认第二个
        centeredSlides: true//居中
      },
      animate: true
    }
  },
  computed: {
    circleRoate() {
      const toAnimate = this.curTop >= this.introAreaPos && this.curTop < this.introAreaPos + this.curHeight;
      if (this.animate && toAnimate) {
        setTimeout(() => {
          this.animate = false;
        }, 2000);
        return toAnimate;
      } else {
        return !this.animate;
      }
    }
  },
  mounted() {
    this.introAreaPos = document.querySelector('.introArea').offsetTop;
  },
  methods: {
    slideChangeTransitionEnd() {
      this.cur = this.$refs.mySwiper.swiper.activeIndex;
    }
  }
};
</script>

<style lang="less" scoped>
.first {
  width: 1440px;
  padding-top: 100px;
  position: relative;
  overflow: hidden;
  .content_title {
    text-align: center;
    h3 {
      font-size:36px;
      color: #333333;
    }
    p {
      font-size:18px;
      color: #666666;
      margin-top: 20px;
    }
  }
  .fc-big {
    width: 234px;
    height: 240px;
    background: url("~assets/images/fc-big.png");
    background-size: 100%;
    position: absolute;
    right: 0px;
    top: 0;
    animation: rotation 3s linear infinite;
  }
  .fc-min {
    width: 53px;
    height: 53px;
    background: url("~assets/images/fc-min.png");
    background-size: 100%;
    position: absolute;
    top: 185px;
    right: 150px;
    animation: rotation 1s linear infinite;
  }
  @keyframes rotation {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
  }
  .cardList {
    display: none;
    justify-content: center;
    margin-top: 40px;
    position: relative;
    z-index: 1;
    &.pc {
      display: flex;
    }
    .card {
      width: 320px;
      height: 360px;
      background:rgba(255,255,255,1);
      box-shadow:0px 0px 20px 0px rgba(0, 0, 0, 0.05);
      border-radius: 8px;
      overflow: hidden;
      margin: 0 10px;
      position: relative;
      img {
        width: 320px;
        height: 250px;
      }
      span {
        display: block;
        width: 320px;
        text-align: center;
        &.cardTitle {
          font-size:20px;
          color: #333333;
          margin-top: 27px;
        }
        &.desc {
          font-size:16px;
          color: #999999;
          margin-top: 15px;
        }
      }
      .details {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        font-size:18px;
        color:rgba(255,255,255,1);
        line-height:30px;
        display: none;
        padding: 28px 30px 0;
        &.details0 {
          background: #F6B221;
        }
        &.details1 {
          background: #1CBCF9;
        }
        &.details2 {
          background: #A8C100;
        }
      }
      &:hover, &:active {
        .details {
          display: block;
        }
      }
    }
  }
  .cardintrobox {
    display: none;
  }
  .introArea {
    margin-top: 100px;
    z-index: 0;
    h3 {
      display: none;
    }
    .introAreaCon {
      display: flex;
      justify-content: flex-end;
      position: relative;
      padding-bottom: 219px;
      .border-big {
        width: 280px;
        height : 280px;
        position: absolute;
        top: -139px;
        left: 0px;
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
          border-top:30px solid #ED5C34;
          border-left:30px solid #ED5C34;
          right:0px;
          transform: rotate(-45deg);
          animation: circle_right 1s linear forwards;
          animation-delay: 1s;
        }
        .leftcircle{
          border-bottom:30px solid #ED5C34;
          border-left:30px solid #ED5C34;
          left:0;
          animation: circle_left 1s linear forwards;
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
      }
      .img01 {
        width:800px;
        height:600px;
        position: absolute;
        left: 0;
        bottom: 149px;
        z-index: 1;
      }
      .introBox {
        width:1300px;
        height:640px;
        background:rgba(237,92,52,1);
        position: relative;
        display: flex;
        justify-content: flex-end;
        overflow: hidden;
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
          width: 548px;
          color: #ffffff;
          margin: 133px 45px 0 0;
          h4 {
            font-size:36px;
          }
          ul {
            margin-top: 40px;
            li {
              font-size: 18px;
              line-height: 36px;
            }
          }
        }
      }
      .qiqiu {
        width: 177px;
        height: 321px;
        position: absolute;
        bottom: 0px;
        right: 0;
        background: url("~assets/images/qiqiu.png");
        background-size: 100% 100%;
      }
    }
  }
}
@media screen and (max-width: 750px) {
  .main {
    .first {
      width: 100%;
      padding-top: 0.6rem;
      .content_title {
        h3 {
          font-size:0.48rem;
        }
        p {
          font-size:0.28rem;
          margin-top: 0.39rem;
          padding: 0 1.24rem;
          line-height:0.38rem;
        }
      }
      .fc-big {
        width: 1.58rem;
        height: 1.6rem;
      }
      .fc-min {
        width: 0.36rem;
        height: 0.36rem;
        top: 1.22rem;
        right: 1.01rem;
      }
      .cardList {
        display: flex;
        height: 5.41rem;
        &.pc {
          display: none;
        }
        .card {
          width: 4.8rem;
          height: 5.41rem;
          box-shadow:0 0 0.2rem 0 rgba(0, 0, 0, 0.05);
          border-radius: 0.08rem;
          margin: 0;
          img {
            width: 4.8rem;
            height: 4.06rem;
          }
          span {
            width: 4.8rem;
            &.cardTitle {
              font-size:0.3rem;
              margin-top: 0.37rem;
            }
            &.desc {
              font-size:0.24rem;
              margin-top: 0.12rem;
            }
          }
        }
      }
      .cardintrobox {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 0.28rem;
        &.detials0 {
          .jiao {
            border-color: transparent transparent #A8C100 transparent;
          }
          .cardintro {
            background: #A8C100;
          }
        }
        &.detials1 {
          .jiao {
            border-color: transparent transparent #F6B221 transparent;
          }
          .cardintro {
            background: #F6B221;
          }
        }
        &.detials2 {
          .jiao {
            border-color: transparent transparent #1CBCF9 transparent;
          }
          .cardintro {
            background: #1CBCF9;
          }
        }
        .jiao {
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0 0.2rem 0.24rem 0.2rem;
        }
        .cardintro {
          margin-top: -1px;
          width:7.5rem;
          height:3.6rem;
          box-shadow:0px 0px 40px 0px rgba(0, 0, 0, 0.05);
          display: flex;
          justify-content: center;
          align-items: center;
          p {
            width:6.7rem;
            height:2.39rem;
            font-size:0.28rem;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height:0.42rem;
          }
        }
      }
      .introArea {
        display: flex;
        margin-top: 0.59rem;
        flex-direction: column;
        padding-bottom: 1.39rem;
        h3 {
          width: 100%;
          font-size:0.48rem;
          font-weight:bold;
          color:rgba(51,51,51,1);
          line-height:0.36rem;
          text-align: center;
          margin: 0 0 0.4rem 0;
          display: block
        }
        .introAreaCon {
          display: flex;
          justify-content: flex-end;
          position: relative;
          padding: 0;
          .border-big {
            width: 1.2rem;
            height : 1.2rem;
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
              border-top:0.15rem solid #ED5C34;
              border-left:0.15rem solid #ED5C34;
            }
            .leftcircle{
              border-bottom:0.15rem solid #ED5C34;
              border-left:0.15rem solid #ED5C34;
            }
          }
          .border-big-w {
            width:1.2rem;
            height:1.2rem;
            border:0.15rem solid #ffffff;
            top: -0.6rem;
          }
          .img01 {
            width:6.4rem;
            height:4.8rem;
            top: 0.4rem;
          }
          .introBox {
            width:7.1rem;
            height:11rem;
            .border-min {
              width:1.2rem;
              height:1.2rem;
              border:0.15rem solid rgba(255,255,255,1);
              left: -0.4rem;
              top: -0.6rem;
            }
            .intro {
              width: 6.25rem;
              margin: 5.72rem 0.4rem 0 0;
              h4 {
                display: none;
              }
              ul {
                margin-top: 0;
                li {
                  font-size:0.28rem;
                  line-height:0.42rem;
                }
              }
            }
          }
          .qiqiu {
            width: 1.4rem;
            height: 2.57rem;
            bottom: -1.39rem;
          }
        }
      }
    }
  }
}
.swiper-slide {
  width: 4.8rem;
}

</style>

