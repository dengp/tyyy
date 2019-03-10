<template>
  <div class="fifth">
    <div class="border-big-w"></div>
    <div class="border-big">
      <div class="wrapper right">
        <div class="circle" :class="{rightcircle:  circleRoate}"></div>
      </div>
      <div class="wrapper left">
        <div class="circle" :class="{leftcircle:  circleRoate}"></div>
      </div>
    </div>
    <img class="img03" src="../../../assets/images/img03.png" />
    <div class="introBox">
      <div class="border-min"></div>
      <div class="intro">
        <h4>关于我们</h4>
        <div class="text">
          <span>未来的舞台是一个没有边界的舞台。唯一的限制是想象力，甚至是一个小小的声音，都可以在全球范围内，制造巨大的涟漪。</span>
          <span>由StageKids培育的孩子们已经准备好面对全球性的未来。通过艺术教育的旅程，他们敢于去梦想、去发现，成为有创意、有自信的沟通者。</span>
        </div>
        <a href="./about.html" class="btn">了解更多</a>
      </div>
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
      introBoxPos: 0
    }
  },
  computed: {
    circleRoate() {
      console.log(this.curTop, this.introBoxPos)
      return this.curTop >= this.introBoxPos;
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
  width: 1440px;
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin-top: 100px;
  padding-bottom: 70px;
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
    z-index: 1;
  }
  .img03 {
    width:800px;
    height:600px;
    position: absolute;
    left: 0;
    bottom: 0px;
    z-index: 1;
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
        font-size:36px;
      }
      .text {
        height: 234px;
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
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
      }
    }
  }
}
</style>

