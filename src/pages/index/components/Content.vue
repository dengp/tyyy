<template>
  <div class="content">
    <div class="first">
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
    <div class="second">
      <div class="content_title">
        <h3>课程体系介绍阶梯式课程体系</h3>
        <p>4个级别 · 27个单元 · 每个单元50节课程，从零基础-初级-中级-高级，循序渐进</p>
      </div>
      <div class="lvList">
        <div class="lvItem" v-for="(item, index) in lvList" :key="index">
          <div class="lv">
            <div :class="`lv${index+1}`"></div>
            <span>{{item.title}}</span>
          </div>
          <div :class="`lvcon lvcon${index}`">
            <span class="cnt" v-html="item.cnt"></span>
            <span class="desctitle">{{item.hoverTitle}}</span>
            <div class="descBox">
              <div class="icon_j"></div>
              <span class="desc" v-html="item.desc"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="third">
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
    <div class="Fourth">
      <div class="content_title">
        <h3>课程体系介绍</h3>
        <div class="classList">
          <div class="classItem" :class="`class${index + 1}`" v-for="(item, index) in classList" :key="index">
            <div class="intro">
              <span >{{item}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fifth">
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
      lvList: [
        {
          title: 'Beginner',
          hoverTitle: 'Beginner （LV1）',
          desc: 'Beginner （LV1）零基础<br/>从零开始的英语启蒙，针对没有接触任何英语学习的低龄学员。全面倾听纯正英语对话，从戏剧场景中进行系统学习英语',
          cnt: '9个<br/>Program'
        },
        {
          title: 'Elementary',
          hoverTitle: 'Elementary （LV2）',
          desc: 'Elementary （LV2）初级<br/>针对初级接触英语学习的低龄学员。全面倾听纯正英语对话，从戏剧场景中进行系统学习英语，针对初级接触英语学员。',
          cnt: '6个<br/>Program'
        },
        {
          title: 'Intermediate',
          hoverTitle: 'Intermediate （LV3）',
          desc: 'Intermediate （LV3）中级<br/>针对中级英语学习的学员。进行简单英语对话交流，识别单词达300以上。针对中级英语学习的学员。',
          cnt: '6个<br/>Program'
        },
        {
          title: 'Advanced',
          hoverTitle: 'Advanced （LV4）',
          desc: 'Advanced （LV4）高级<br/>针对高级英语学习的学员。英语对话交流无障碍，识别单词达500以上。针对高级英语学习的学员。',
          cnt: '6个<br/>Program'
        }
      ],
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
      classList: ['马上体验', '加入会员'],
      cur: 0,
      timer: null
    };
  },
  mounted() {
    this.startAni();
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
    }
  }
};
</script>
<style lang="less" scoped>
.content {
  width: 1440px;
  margin: 0 auto;
  .content_title {
    text-align: center;
    h3 {
      font-size:40px;
      color: #333333;
    }
    p {
      font-size:18px;
      color: #666666;
      margin-top: 20px;
    }
  }
  .first {
    width: 1440px;
    height: 1438px;
    background: url("~assets/images/bg_conten1.png");
    background-size: 100%;
    padding-top: 100px;
    position: relative;
    .cardList {
      display: flex;
      justify-content: center;
      margin-top: 40px;
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
            font-size:30px;
            color: #333333;
            margin-top: 27px;
          }
          &.desc {
            font-size:18px;
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
        &:hover {
          .details {
            display: block;
          }
        }
      }
    }
    .intro {
      width: 548px;
      color: #ffffff;
      position: absolute;
      right: 45px;
      bottom: 230px;
      h4 {
        font-size:40px;
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
  .second {
    padding-top: 39px;
    .lvList {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      margin-top: 56px;
      .lvItem {
        margin: 0 20px;
        position: relative;
        &:hover {
          .lv {
            visibility: hidden;
          } 
          .lvcon {
            display: block !important;
          }
          .desctitle {
            color: #F6B221 !important;
          }
        }
        .lv {
          span {
            color: #333333;
            font-size:24px;
            margin-top: 12px;
            display: block;
            text-align: center;
          }
          .lv1 {
            width: 221px;
            height: 141px;
            background: url("~assets/images/lv1.png");
            background-size: 100%;
          }
          .lv2 {
            width: 221px;
            height: 201px;
            background: url("~assets/images/lv2.png");
            background-size: 100%;
          }
          .lv3 {
            width: 221px;
            height: 291px;
            background: url("~assets/images/lv3.png");
            background-size: 100%;
          }
          .lv4 {
            width: 221px;
            height: 361px;
            background: url("~assets/images/lv4.png");
            background-size: 100%;
          }
        }
        .lvcon {
          width: 221px;
          position: absolute;
          top: 0px;
          left: 0px;
          display: none;
          .cnt {
            width: 220px;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            padding-bottom: 37px;
            font-size:30px;
            font-weight:bold;
            color:rgba(51,51,51,1);
            line-height:36px;
            text-align: center;
          }
          .desctitle {
            color: #333333;
            font-size:24px;
            margin-top: 12px;
            display: block;
            text-align: center;
            white-space:nowrap; 
          }
          .descBox {
            .icon_j {
              width: 30px;
              height: 20px;
              background: url("~assets/images/icon_j.png");
              background-size: 100%;
              margin-left: 95px;
            }
            .desc {
              width: 1000px;
              height: 100px;
              background: #ffffff;
              border-radius:8px;
              display: block;
              font-size:18px;
              color:rgba(51,51,51,1);
              line-height:36px;
              padding: 20px 0 0 20px;
            }
          }
          &.lvcon0 {
            .cnt {
              background: #FBCD6A;
              height: 141px;
            }
          }
          &.lvcon1 {
            .cnt {
              background: #f1c25f;
              height: 201px;
            }
            .descBox {
              .desc {
                margin-left: -260px;
              }
            }
          }
          &.lvcon2 {
            .cnt {
              background: #efbb52;
              height: 291px;
            }
            .descBox {
              .desc {
                margin-left: -520px;
              }
            }
          }
          &.lvcon3 {
            .cnt {
              background: #ecb446;
              height: 361px;
            }
            .descBox {
              .desc {
                margin-left: -780px;
              }
            }
          }
        }
      }
    }
  }
  .third {
    width: 1440px;
    height: 1136px;
    background: url("~assets/images/bg_content2.png");
    background-size: 100%;
    padding-top: 400px;
    .con {
      width: 516px;
      color: #ffffff;
      margin-left: 100px;
      h3 {
        font-size:40px;
      }
      .desc {
        display: block;
        font-size:18px;
        line-height:30px;
        margin-top: 48px;
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
              border: 50%;
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
  }
  .fourth {
    margin-top: -57px;
    .classList {
      margin-top: 40px;
      display: flex;
      justify-content: center;
      .classItem {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 15px;
        .intro {
          width: 485px;
          height: 680px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          span {
            width: 140px;
            height: 50px;
            line-height: 46px;
            border-radius:8px;
            font-size:18px;
            cursor: pointer;
            margin-bottom: 30px;
          }
        }
        &.class1 {
          .intro {
            background: url("~assets/images/free.png");
            background-size: 100%;
            span {
              color: #A8C100;
              border: 2px solid #A8C100;
            }
          }
        }
        &.class2 {
          .intro {
            background: url("~assets/images/vip.png");
            background-size: 100%;
            span {
              color: #ED5C34;
              border: 2px solid #ED5C34;
            }
          }
        }
      }
    }
  }
  .fifth {
    width: 1440px;
    height: 941px;
    background: url("~assets/images/bg_content3.png");
    background-size: 100%;
    padding-top: 39px;
    position: relative;
    .intro {
      width: 451px;
      color: #ffffff;
      position: absolute;
      right: 140px;
      bottom: 221px;
      h4 {
        font-size:40px;
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

