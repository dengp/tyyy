<template>
  <div class="first">
    <div class="fc-big" :class="{animated: firstAnimate}"></div>
    <div class="fc-min" :class="{animated: firstAnimate}"></div>
    <div class="content_title" :class="{'animated fadeIn': firstAnimate}">
      <h3>三个核心版块</h3>
      <p>StageKids提供多个延伸支持版块，鼓励父母参与到孩子的亲子陪伴类活动中</p>
    </div>
    <div class="cardList pc">
      <div class="card" :class="firstAnimate ? `animated fadeInUp card${index+1}` : `card${index+1}`" v-for="(item, index) in cardList" :key="index">
        <img :src="item.pic" />
        <span class="cardTitle">{{item.title}}</span>
        <span class="desc">{{item.desc}}</span>
        <p class="details" :class="`details${index}`" v-html="item.details"></p>
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
      <h3 :class="{'animated fadeIn': circleRoate}">我们的与众不同</h3>
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
        <img class="img01 animated" :class="{'img01animate slideInLeft': circleRoate}" src="../../../assets/images/img01.jpg" />
        <div class="introBox">
          <div class="border-min"></div>
          <div class="intro">
            <h4 :class="{'animated fadeIn': circleRoate}">我们的与众不同</h4>
            <ul :class="{'animated fadeIn': circleRoate}">
              <li><span>o&nbsp;</span><span>第一个原创英文音频对话节目</span></li>
              <li><span>o&nbsp;</span><span>纯正欧美成人与双语儿童主播</span></li>
              <li><span>o&nbsp;</span><span>海量对话和儿童剧音频，原创音频剧【JOJO奇遇记】重磅推出</span></li>
              <li><span>o&nbsp;</span><span>定制化的配套双语文本</span></li>
              <li><span>o&nbsp;</span><span>高质量的互动型亲子活动与游戏</span></li>
              <li><span>o&nbsp;</span><span>无需拥有英语基础，从零开始的孩子无障碍开启</span></li>
              <li><span>o&nbsp;</span><span>不同的级别适应各年龄段孩子需求</span></li>
              <li><span>o&nbsp;</span><span>支持在线和缓存模式，可在任何智能设备上收听，全平台覆盖。收听时间和空间不受限制，随时随地，无需预约</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="qiqiu" :class="{'animated fadeInUp delay-3s': circleRoate}"></div>
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
          pic: require('../../../assets/images/card1.jpg'),
          title: '童言对话',
          desc: 'Conversations',
          details: '<strong>此版块带给大家完整的节目和课程：</strong><br/>1.首次由纯正欧美成人与华裔儿童双语主播组合，通过对话的形式展现真实生活场景对话<br/>2.涵盖Jojo 奇遇记-国内第1个[原创]的音频家庭情景剧<br/>3.双语主播在对话中预告音频剧内容，华裔儿童的中文讲解核心句式和词汇，有助于无英语基础的孩子理解<br/>4.公众号和APP提供配套文本，免费课程提供简版，收费课程提供完整版'
        },
        {
          pic: require('../../../assets/images/card2.jpg'),
          title: 'JOJO奇遇记',
          desc: 'JOJO’s Adventures',
          details: '<strong>此版块将每期的原创音频剧“Jojo奇遇记”单独分享给大家：</strong><br/>1.宝儿们可以听到主角Jojo犯错误或失败的故事<br/>2.真实、生动、轻松，让我们的孩子学会乐观地看待自己的失误甚至失败<br/>3.听音频剧，与Jojo共同成长，帮助孩子提升适应各种环境与团队的能力<br/>4.有趣的课后互动游戏，检验收听和学习效果，提高孩子独立思考与分析的能力'
        },
        {
          pic: require('../../../assets/images/card3.jpg'),
          title: '一起来表演',
          desc: 'Show time',
          details: '<strong>此版块提供收听/学习效果评估：</strong><br/>1.为已收听了节目和课程的孩子，配备课后跟读练习<br/>2.提供效果评分'
        }
      ],
      firstPos: 0,
      introAreaPos: 0,
      cur: 0,
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 16,
        initialSlide: 0,//默认第二个
        centeredSlides: true//居中
      },
      animatefirst: true,
      animate: true
    }
  },
  computed: {
    firstAnimate() {
      const toAnimate = this.curTop >= this.firstPos + this.curHeight / 3 && this.curTop < this.firstPos + this.curHeight;
      if (this.animatefirst && toAnimate) {
        this.animatefirst = false;
        return toAnimate;
      } else {
        return !this.animatefirst;
      }
    },
    circleRoate() {
      const toAnimate = this.curTop >= this.introAreaPos + this.curHeight / 3 && this.curTop < this.introAreaPos + this.curHeight;
      if (this.animate && toAnimate) {
        this.animate = false;
        return toAnimate;
      } else {
        return !this.animate;
      }
    }
  },
  mounted() {
    this.introAreaPos = document.querySelector('.introArea').offsetTop;
    this.firstPos = document.querySelector('.first').offsetTop;
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
  padding-top: 100px;
  position: relative;
  .content_title {
    text-align: center;
    opacity: 0;
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
    opacity: 0;
    &.animated {
      animation: rotation 1s linear forwards;
      animation-delay: 1.5s;
    }
  }
  .fc-min {
    width: 53px;
    height: 53px;
    background: url("~assets/images/fc-min.png");
    background-size: 100%;
    position: absolute;
    top: 185px;
    right: 150px;
    opacity: 0;
    &.animated {
      animation: rotation 1s linear forwards;
      animation-direction: 1s;
      animation-delay: 2s;
    }
  }
  @keyframes rotation {
    from {
      transform: rotate(0deg) scale(0);
      opacity: 0;
    }
    to {
      transform: rotate(-90deg) scale(1);
      opacity: 1;
    }
  }
  .cardList {
    display: none;
    justify-content: center;
    margin-top: 40px;
    position: relative;
    z-index: 1;
    &.pc {
      display: flex;
      padding-bottom: 100px;
      overflow: hidden;
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
      opacity: 0;
      animation-duration: 1s;
      &.card2 {
        animation-delay: 0.5s
      }
      &.card3 {
        animation-delay: 1s
      }
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
    z-index: 0;
    h3 {
      display: none;
    }
    .introAreaCon {
      display: flex;
      justify-content: flex-end;
      position: relative;
      padding-bottom: 219px;
      overflow: hidden;
      padding-top: 140px;
      margin-top: -140px;
      .border-big {
        width: 280px;
        height : 280px;
        position: absolute;
        top: 0;
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
          animation-delay: 5s;
        }
        .leftcircle{
          border-bottom:30px solid #ED5C34;
          border-left:30px solid #ED5C34;
          left:0;
          animation: circle_left 1s linear forwards;
          animation-delay: 4s;
          transform: rotate(-135deg);
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
        top: 0;
        left: 0px;
      }
      .img01 {
        width: 800px;
        position: absolute;
        left: -800px;
        bottom: 149px;
        z-index: 1;
        &.img01animate{
          left: 0;
        }
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
            animation-delay: 1s;
            opacity: 0;
          }
          ul {
            margin-top: 40px;
            animation-delay: 2s;
            opacity: 0;
            li {
              font-size: 18px;
              line-height: 36px;
              display: flex;
            }
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
      opacity: 0;
    }
  }
}
@media screen and (max-width: 1025px) {
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
          opacity: 1;
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
          display: block;
          opacity: 0;
        }
        .introAreaCon {
          display: flex;
          justify-content: flex-end;
          position: relative;
          padding: 0;
          margin:0;
          overflow: inherit;
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
                animation-delay: 1s;
                li {
                  font-size:0.28rem;
                  line-height:0.42rem;
                }
              }
            }
          }
        }
        .qiqiu {
          width: 1.4rem;
          height: 2.57rem;
        }
      }
    }
  }
}
@media screen and (min-width: 1026px) and (max-width: 1439px) {
  .introBox {
    width:1160px !important;
  }
  .img01 {
    width: 660px !important;
  }
}
.swiper-slide {
  width: 4.8rem;
}

</style>

