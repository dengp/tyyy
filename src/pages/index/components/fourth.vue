<template>
  <div class="Fourth">
    <div class="content_title">
      <h3 class="animated" :class="{fadeIn: circleRoate}">课程体系介绍</h3>
      <div class="classList">
        <div class="classItem animated" :class="circleRoate ? `fadeInUp class${index + 1}` : `class${index + 1}`" v-for="(item, index) in classList" :key="index">
          <div class="intro">
            <div :class="`headerbox headerbox${index}`">
              <div class="header">
                <h2>{{item.title}}</h2>
                <span>{{item.desc}}</span>
              </div>
            </div>
            <div class="info gzh">
              <div class="label">
                <img src="../../../assets/images/wx.png" class="icon" />
                <span>公众号</span>
              </div>
              <p v-for="(v, i) in item.gzhtext" :key="i" :class="{dis: index === 0 && i === 2}">{{v}}</p>
            </div>
            <div class="info client">
              <div class="label">
                <img src="../../../assets/images/sj.png" class="icon" />
                <span>App客户端</span>
              </div>
              <p v-for="(v, i) in item.clienttext" :key="i" :class="{dis: index === 0 && (i === 2 || i === 5)}">{{v}}</p>
            </div>
            <div class="info kf">
              <div class="label">
                <img src="../../../assets/images/kf.png" class="icon" />
                <span>客服支持</span>
              </div>
              <p v-for="(v, i) in item.kftext" :key="i">{{v}}</p>
            </div>
            <span class="btn" @click="item.show = true">{{item.btn}}</span>
          </div>
          <div class="ewm pc" v-if="item.show" @click="item.show = false">
            <img :src="item.ewm" />
            <span>{{item.text1}}</span>
            <span class="big">{{item.text2}}</span>
          </div>
          <div class="ewm" v-if="item.show" @click="item.show = false">
            <img :src="item.ewm" />
            <span>{{item.text3}}</span>
            <span>{{item.text4}}</span>
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
      classList: [
        {
          title: '免费课程',
          desc: 'Free Curriculum',
          btn: '马上体验',
          ewm: require('../../../assets/images/ewm1.png'),
          text1: '微信订阅号',
          text2: '童言英语对话',
          text3: '长按保存图片，扫码识别二维码',
          text4: '微信订阅号：童言英语对话',
          show: false,
          gzhtext: ['童言有艺订阅号免费课程/体验课程', '童言有艺服务号免费课程/体验课程', '童言有艺服务号童言对话/JOJO奇遇记/一起表演'],
          clienttext: ['版块1：童言对话-配套文本概览', '版块2：JOJO奇遇记-部分音频/配套文本/人物介绍', '版块3：一起表演-音视频/图文形式表演说明', '版块4：语法与词汇', '版块5：句型结构', '版块6：评估与测试', '版块7：七天音乐剧训练营', '版块8：微信指导群入群资格'],
          kftext: ['微信客服入群咨询/指导/答疑']
        },
        {
          title: '付费课程',
          desc: 'VIP Curriculum',
          btn: '加入会员',
          ewm: require('../../../assets/images/ewm3.png'),
          text1: '微信服务号',
          text2: '童言有艺',
          text3: '长按保存图片，扫码识别二维码微',
          text4: '信服务号：童言有艺',
          show: false,
          gzhtext: ['童言有艺订阅号免费课程/体验课程', '童言有艺服务号免费课程/体验课程', '童言有艺服务号童言对话/JOJO奇遇记/一起表演'],
          clienttext: ['版块1：童言对话-配套文本概览', '版块2：JOJO奇遇记-部分音频/配套文本/人物介绍', '版块3：一起表演-音视频/图文形式表演说明', '版块4：语法与词汇', '版块5：句型结构', '版块6：评估与测试', '版块7：七天音乐剧训练营', '版块8：微信指导群入群资格'],
          kftext: ['微信客服一对一入群咨询/指导/答疑']
        }
      ],
      pos: 0,
      animate: true
    };
  },
  computed: {
    circleRoate() {
      const toAnimate = this.curTop >= this.pos + this.curHeight / 2 && this.curTop < this.pos + this.curHeight;;
      if (this.animate && toAnimate) {
        this.animate = false;
        return toAnimate;
      } else {
        return !this.animate;
      }
    }
  },
  mounted() {
    this.pos = document.querySelector('.fourth').offsetTop;
  }
}
</script>

<style lang="less" scoped>
.fourth {
  margin-top: 100px;
  position: relative;
  z-index: 2;
  padding-bottom: 100px;
  overflow: hidden;
  .content_title {
    text-align: center;
    h3 {
      font-size:36px;
      color: #333333;
      opacity: 0;
    }
  }
  .classList {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    .classItem {
      margin: 0 20px;
      position: relative;
      background:rgba(255,255,255,1);
      box-shadow:0px 0px 20px 0px rgba(0, 0, 0, 0.1);
      border-radius:8px;
      opacity: 0;
      overflow: hidden;
      .intro {
        width: 480px;
        height: 650px;
        .headerbox {
          height: 105px;
          &.headerbox0 {
            background: rgba(168, 193, 0, 1);
          }
          &.headerbox1 {
            background: rgba(237, 92, 52, 1);
          }
          .header {
            height: 105px;
            background: url("~assets/images/fourthHeaderbig.png");
            background-size: 100% 100%; 
            display: flex;
            flex-direction: column;
            justify-content: center;
            h2 {
              font-size:24px;
              font-weight:bold;
              color:rgba(255,255,255,1);
            }
            span {
              font-size:16px;
              color:rgba(255,255,255,1);
              padding-top: 8px;
            }
          }
        }
        .info {
          padding: 0 40px;
          .label {
            margin-bottom: 6px;
          }
          p {
            font-size:16px;
            color:rgba(51,51,51,1);
            line-height:24px;
            text-align: left;
            &.dis {
              color: rgba(217, 217, 217, 1);
            }
          }
        }
        .gzh {
          margin-top: 26px;
          .label {
            width: 105px;
          }
        }
        .client {
          margin-top: 16px;
          .label {
            width: 140px;
          }
        }
        .kf {
          margin-top: 15px;
          .label {
            width: 120px;
          }
        }
        .label {
          height:27px;
          border-radius:3px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .icon {
            width: 27px;
            height: 27px;
            margin-left: 5px;
          }
          span {
            font-size:16px;
            font-weight:bold;
            color:rgba(255,255,255,1);
            line-height:23px;
            margin-left: 4px;
          }
        }
        .btn {
          display: block;
          width: 140px;
          height: 50px;
          line-height: 46px;
          border-radius:8px;
          font-size:18px;
          cursor: pointer;
          margin: 20px 0 0 173px;
        }
      }
      &.class1 {
        .intro {
          .label {
            background:rgba(168,193,0,1);
          }
          .btn {
            color: #A8C100;
            border: 2px solid #A8C100;
          }
        }
      }
      &.class2 {
        animation-delay: 0.5s;
        .intro {
          .label {
            background:rgba(237, 92, 52, 1);
          }
          .btn {
            color: #ED5C34;
            border: 2px solid #ED5C34;
          }
        }
      }
      .ewm {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        border-radius:8px;
        position: absolute;
        left: 0;
        top: 0;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        display: none;
        &.pc {
          display: flex;
        }
        img {
          width: 258px;
          height: 258px;
          padding: 5px;
          background: #ffffff;
          border-radius: 8px;
          margin-bottom: 20px;
        }
        span {
          font-size:20px;
          font-weight:bold;
          color:rgba(255,255,255,1);
          line-height:36px;
          &.big {
            font-size: 24px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 896px) {
  .fourth {
    margin-top: 1.19rem;
    padding-bottom: 0;
    .content_title {
      h3 {
        font-size:0.48rem;
        font-weight:bold;
      }
    }
    .classList {
      margin-top: 0.06rem;
      flex-direction: column;
      align-items: center;
      .classItem {
        width: 6.7rem;
        height: auto;
        padding-bottom: 0.5rem;
        margin: 0.4rem 0 0 0;
        box-shadow:0 0 0.2rem 0 rgba(0, 0, 0, 0.1);
        border-radius:0.08rem;
        .intro {
          width: 6.7rem;
          height: auto;
          .headerbox {
            height: 1.47rem;
            &.headerbox0 {
              background: rgba(168, 193, 0, 1);
            }
            &.headerbox1 {
              background: rgba(237, 92, 52, 1);
            }
            .header {
              height: 1.47rem;
              background: url("~assets/images/fourthHeaderbig.png");
              background-size: 100% 100%; 
              h2 {
                font-size:0.34rem;
              }
              span {
                font-size:0.24rem;
                padding-top: 0.12rem;
              }
            }
          }
          .info {
            padding: 0 0.25rem;
            .label {
              margin-bottom: 0.15rem;
            }
            p {
              font-size:0.28rem;
              line-height:0.42rem;
            }
          }
          .gzh {
            margin-top: 0.3rem;
            .label {
              width: 1.8rem;
            }
          }
          .client {
            margin-top: 0.3rem;
            .label {
              width: 2.4rem;
            }
          }
          .kf {
            margin-top: 0.29rem;
            .label {
              width: 2.1rem;
            }
          }
          .label {
            height:0.5rem;
            border-radius:0.06rem;
            .icon {
              width: 0.5rem;
              height: 0.5rem;
              margin-left: 0.12rem;
            }
            span {
              font-size:0.28rem;
              line-height:0.39rem;
              margin-left: 0;
            }
          }
          .btn {
            width: 2.8rem;
            height: 1rem;
            line-height: 0.92rem;
            border-radius:0.16rem;
            font-size:0.36rem;
            margin: 0.3rem 0 0 1.95rem;
          }
        }
        &.class1 {
          .intro {
            .btn {
              border: 0.04rem solid #A8C100;
            }
          }
        }
        &.class2 {
          .intro {
            .btn {
              border: 0.04rem solid #ED5C34;
            }
          }
        }
        .ewm {
          display: flex;
          &.pc {
            display: none;
          }
          img {
            width: 4.3rem;
            height: 4.3rem;
            padding: 0 0.1rem;
            border-radius: 0.16rem;
            margin-bottom: 0.1rem;
          }
          span {
            font-size:0.22rem;
            line-height:0.3rem;
          }
        }
      }
    }
  }
}
</style>

