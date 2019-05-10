<template>
  <div class="third">
    <div class="yf">
      <div class="yf01 animated" :class="{'yf01animate slideInLeft': circleRoate}"></div>
      <div class="yf02-s-box" :class="{animated: circleRoate}">
        <div class="yf02-s animated delay-2s" :class="{'slideInRight': circleRoate}"></div>
      </div>
      <h3 class="animated" :class="{fadeIn: circleRoate}">不一样的主播|剧中角色|老师</h3>
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
        <h3 class="animated" :class="{fadeIn: circleRoate}">不一样的主播|剧中角色|老师</h3>
        <span class="desc animated delay-1s" :class="{fadeIn: circleRoate}">纯正欧美成人与华裔儿童双语主播组合<br/>真实展现生活场景中对话+音频剧的创新节目<br/>国内第1个[原创]的英文对话音频节目 + 孩童成长的音频家庭情景剧</span>
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
          name: 'Jojo',
          info: 'She is a curious little girl in our drama. She is four years old. Listeners follow her adventures as she learns about life’s important lesson and values her parents pass on to her. She sometimes makes mistakes, but is always willing to learn. “Never fear mistakes. You can always learn from mistakes,” her mother often says to her. “Keep trying and keep learning.”她是我们音频情景剧中的主人公，她是一个好奇的小女孩。 她今年四岁啦。 听众们跟随她的成长经历，来了解到她的父母如何传递给孩子重要的教育引导和价值观。Jojo有时会犯错误，但总是愿意学做很多事情，改正自己的错误。 “永远不要害怕错误，你总能从错误中吸取教训，“她的母亲经常对她说。 “继续努力并继续多学学吧。”',
          pic: require('../../../assets/images/tx01.jpg')
        },
        {
          name: 'Jill',
          info: 'Jill is Jojo’s mother. Jojo calls her Mummy. She works as a florist and loves arranging flowers. She is a good cook. Jojo loves her food. She is patient and kind. But sometimes, she can become angry when Jojo is naughty.Jill是Jojo的母亲。 Jojo称呼她为妈妈。 她是一名花匠，喜欢插花。 她也是个好厨师，Jojo喜欢她做的各种食物。 Jill很有耐心、非常善良，但有时候，当Jojo顽皮时，她当然也会生气。',
          pic: require('../../../assets/images/tx02.jpg')
        },
        {
          name: 'Tom',
          info: 'Tom is Jojo’s father. Jojo calls him Daddy. He works as an engineer in an Aeroplane manufacturing company. He brings back toy planes or helps Jojo make paper aeroplane. He is funny, loves to laugh, and is sometimes forgetful.Tom是Jojo的父亲。 Jojo称呼他为爸爸。 他在一家飞机制造公司担任工程师。 他带回玩具飞机，或者帮助Jojo叠纸飞机。 Tom很有趣，喜欢笑，有时也很健忘。',
          pic: require('../../../assets/images/tx03.jpg')
        },
        {
          name: 'Noorlinah Mohamed',
          info: 'An award-winning actress, teaching artist and creator of public engagement arts projects in Singapore, Noorlinah has performed with various Singapore theatre companies, as well as in Asia, Europe and the US since 1998. With a PhD in Arts Education from the University of Warwick she undertakes residencies in schools and develops curriculum and professional development for teaching artists and teachers in arts pedagogy. In addition, Noorlinah is  the Lead Practitioner and Consultant for the National Art Council’s Teaching Through the Arts Programme and the Director of  The O.P.E.N, a pre-festival of ideas of Singapore International Festival of Arts.作为新加坡屡获殊荣的女演员，教学艺术家和公共参与艺术项目的创造者，Noorlinah自1998年以来一直与多家新加坡戏剧公司以及亚洲、欧洲和美国合作。她拥有华威大学的艺术教育博士学位，在学校任职，并为艺术教育学的教学艺术家和教师开发课程和专业发展。此外，Noorlinah还是国家艺术委员会通过艺术项目教学和O.P.E.N主任的首席执业者和顾问，这是新加坡国际艺术节的预热创意活动。',
          pic: require('../../../assets/images/tx03.jpg')
        },
        {
          name: 'Rosemary Mcgowan',
          info: 'Rosie has been creating theatre with students for over 10 years, using theatre as a tool for expression and dialogue. She is the co-director of Theatre: Connect, an international, cross-cultural youth theatre that creates relevant and issue-based work with, by and for young people. She has taught drama at numerous schools and has run projects both in Singapore and in London. Rosie is currently a full-time addiction counsellor and a theatre practitioner, facilitator and educator.罗西与学生共同创作了超过10年的戏剧，将戏剧作为表达和对话的工具。她是Theatre：Connect的联合主任，这是一个国际化的跨文化青年剧场，为年轻人创造相关的，基于问题的工作。她曾在众多学校教授戏剧，并在新加坡和伦敦开展过同类课程与项目。 Rosie目前是一名全职顾问和戏剧从业者、推动者和教育者。',
          pic: require('../../../assets/images/tx03.jpg')
        },
        {
          name: 'Tatiana Krasheninnikova',
          info: 'Tanya is a graduate of the Vienna Music and Arts University in music education and is an accomplished concert musician playing piano and clarinet. She also has a Master’s Degree in Linguistics and obtained Distinctions in Acting and Musical Theatre Grade 8 from London Academy of Music and Dramatic Arts. Tanya was most recently teaching musical theatre, music and dance to children in Singapore at Kids Performing Academy of the Arts.Tanya毕业于维也纳音乐艺术大学音乐教育专业，是一位演奏钢琴和单簧管的音乐会音乐家。她还拥有语言学硕士学位，并获得伦敦音乐与戏剧艺术学院8级表演和音乐剧的优异成绩。 Tanya最近在新加坡儿童表演艺术学院为儿童教授音乐剧、音乐和舞蹈。',
          pic: require('../../../assets/images/tx03.jpg')
        },
        {
          name: 'Justin Lee',
          info: 'Since moving to Singapore from England in 1994, Justin has served as an instructor for enrichment companies, focusing on areas such as drama, public speaking and creative writing at local primary and secondary schools. In addition, he has been a drama instructor at several international schools and has lectured at LASALLE College of the Arts and NAFA, amongst others.自1994年从英国搬到新加坡以来，Justin一直担任？公司的讲师，专注于当地中小学的戏剧、公共演讲和创意写作等领域。此外，他还曾在多所国际学校担任戏剧讲师，并在LASALLE艺术学院和NAFA等讲学。',
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
    padding-bottom: 45px;
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
        width: 3612px;
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
        &.pos3 {
          transform: translateX(-1548px);
        }
        &.pos4 {
          transform: translateX(-2064px);
        }
        &.pos5 {
          transform: translateX(-2580px);
        }
        &.pos6 {
          transform: translateX(-3096px);
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
        display: flex;
        justify-content: flex-start;
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
      padding-bottom: 0;
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
          width: 41.3rem;
          &.pos0 {
            transform: translateX(0)
          }
          &.pos1 {
            transform: translateX(-5.9rem);
          }
          &.pos2 {
            transform: translateX(-11.8rem);
          }
          &.pos3 {
            transform: translateX(-17.7rem);
          }
          &.pos4 {
            transform: translateX(-23.6rem);
          }
          &.pos5 {
            transform: translateX(-29.5rem);
          }
          &.pos6 {
            transform: translateX(-35.4rem);
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

