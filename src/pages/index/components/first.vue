<template>
  <div class="first">
    <div class="fc-big"></div>
    <div class="fc-min"></div>
    <div class="content_title">
      <h3>三个核心版块</h3>
      <p>StageKids提供多个延伸支持版块，鼓励父母参与到孩子的亲子陪伴类活动中</p>
    </div>
    <div class="cardList">
      <div class="card" v-for="(item, index) in cardList" :key="index">
        <img :src="item.pic" />
        <span class="cardTitle">{{item.title}}</span>
        <span class="desc">{{item.desc}}</span>
        <p class="details" :class="`details${index}`">{{item.details}}</p>
      </div>
    </div>
    <div class="introArea">
      <div class="border-big-w"></div>
      <div class="border-big">
        <div class="wrapper right">
          <div class="circle" :class="{rightcircle:  circleRoate}"></div>
        </div>
        <div class="wrapper left">
          <div class="circle" :class="{leftcircle:  circleRoate}"></div>
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
</template>
<script>
export default {
  props: [
    'curTop'
  ],
  data() {
    return {
      cardList: [
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
        },
        {
          pic: require('../../../assets/images/card3.png'),
          title: '一起来表演',
          desc: 'Show time',
          details: '一起表演相应文字描述，一起表演相应文字描述，一起表演相应文字描述，一起表演相应文字描述，一起表演相应文字描述，一起表演相应文字描述，一起表演相应文字描述，一起表演相应文字描述，一起表演相应文字描述，一起表演相应文字描述，100字左右'
        }
      ],
      introAreaPos: 0
    }
  },
  computed: {
    circleRoate() {
      return this.curTop >= this.introAreaPos;
    }
  },
  mounted() {
    this.introAreaPos = document.querySelector('.introArea').offsetTop;
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
    display: flex;
    justify-content: center;
    margin-top: 40px;
    position: relative;
    z-index: 1;
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
  .introArea {
    position: relative;
    display: flex;
    justify-content: flex-end;
    margin-top: 100px;
    padding-bottom: 119px;
    z-index: 0;
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
      bottom: 49px;
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
      bottom: 0;
      right: 0;
      background: url("~assets/images/qiqiu.png");
      background-size: 100%;
      animation:balloon 6s ease-in-out infinite;
      transform-origin:bottom center;
    }
    @keyframes balloon {
      0%,100% {
        transform:translateY(0) rotate(-6deg);
      }
      50% {
        transform:translateY(-20px) rotate(8deg);
      }
    }
  }
}
</style>

