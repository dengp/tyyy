<template>
  <div class="second">
    <div class="content_title">
      <h3>课程体系介绍阶梯式课程体系</h3>
      <p>4个级别 · 27个单元 · 每个单元50节课程，从零基础-初级-中级-高级，循序渐进</p>
    </div>
    <div class="lvList">
      <div class="lvItem" :class="{cur: index===cur}" v-for="(item, index) in lvList" :key="index" @click="lvClick(index)" @mouseenter="lvClick(index)">
        <div class="reqiqiu"></div>
        <div class="lv">
          <div :class="`lvblock lv${index+1}`">
            <p class="hoverCon" v-html="item.cnt"></p>
            <p>{{item.lv}}</p>
          </div>
          <span class="title">{{item.title}}</span>  
        </div>
      </div>
    </div>
    <div :class="`descBox descBox${cur+1}`">
      <div class="icon_j"></div>
      <span class="desc" v-html="lvList[cur].desc"></span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lvList: [
        {
          lv: '基础LV1',
          title: 'Beginner',
          desc: 'Beginner （LV1）零基础<br/>从零开始的英语启蒙，针对没有接触任何英语学习的低龄学员。全面倾听纯正英语对话，从戏剧场景中进行系统学习英语',
          cnt: '9个<br/>Program'
        },
        {
          lv: '初级LV2',
          title: 'Elementary',
          desc: 'Elementary （LV2）初级<br/>针对初级接触英语学习的低龄学员。全面倾听纯正英语对话，从戏剧场景中进行系统学习英语，针对初级接触英语学员。',
          cnt: '6个<br/>Program'
        },
        {
          lv: '中级LV3',
          title: 'Intermediate',
          desc: 'Intermediate （LV3）中级<br/>针对中级英语学习的学员。进行简单英语对话交流，识别单词达300以上。针对中级英语学习的学员。',
          cnt: '6个<br/>Program'
        },
        {
          lv: '高级LV4',
          title: 'Advanced',
          desc: 'Advanced （LV4）高级<br/>针对高级英语学习的学员。英语对话交流无障碍，识别单词达500以上。针对高级英语学习的学员。',
          cnt: '6个<br/>Program'
        }
      ],
      cur: 0
    }
  },
  methods: {
    lvClick(index) {
      this.cur = index;
    }
  }
};
</script>

<style lang="less" scoped>
.second {
  margin-top: -61px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  .lvList {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-top: 56px;
    .lvItem {
      margin: 0 25px;
      position: relative;
      .reqiqiu {
        width:204px;
        height: 244px;
        background:url("~assets/images/rqq.png");
        background-size: 100% 100%;
      }
      .lv {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        margin-top: -2px;
        .title {
          font-size:20px;
          font-weight:bold;
          color:rgba(51,51,51,1);
          margin-top: 15px;
        }
        .lvblock {
          width:90px;
          background:rgba(168,193,0,1);
          border-radius:15px;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          p {
            width:36px;
            height:40px;
            font-size:18px;
            font-weight:bold;
            color:rgba(255,255,255,1);
            line-height:24px;
            margin-bottom: 19px;
            text-align: center;
            &.hoverCon {
              display: none;
            }
          }
          &.lv1 {
            height:80px;
          }
          &.lv2 {
            height: 100px;
          }
          &.lv3 {
            height:120px;
          }
          &.lv4 {
            height:140px;
          }
        }
      }
      &.cur {
        .reqiqiu {
          background:url("~assets/images/rqq_xz.png");
          background-size: 100% 100%;
          
        }
        .lv {
          .lvblock {
            background: #F6B221;
            p {
              display: none;
              &.hoverCon {
                width: 100%;
                text-align: center;
                display: flex;
                justify-content: center;
              }
            }
          }
          .title {
            color: #F6B221;
          }
          .descBox {
            display: block;
          }
        } 
      }
    }
  }
  .descBox {
    margin-top: 10px;
    .icon_j {
      width: 30px;
      height: 20px;
      background: url("~assets/images/icon_j.png");
      background-size: 100% 100%;
      margin-left: 105px;
    }
    .desc {
      display: block;
      width: 1000px;
      background: #ffffff;
      border-radius:8px;
      font-size:18px;
      color:rgba(51,51,51,1);
      line-height:36px;
      padding: 30px 20px;
    }
    &.descBox2 {
      .icon_j {
        margin-left: 359px;
      }
    }
    &.descBox3 {
      .icon_j {
        margin-left: 612px;
      }
    }
    &.descBox4 {
      .icon_j {
        margin-left: 866px;
      }
    }
  }
}
@media screen and (max-width: 750px) {
  .second {
    padding-top: 0;
    margin-top: -0.5rem;
    .content_title {
      h3 {
        font-size:0.48rem;
      }
      p {
        width: 5.6rem;
        font-size:0.28rem;
        margin: 0.41rem auto 0;
      }
    }
    .lvList {
      width: 100%;;
      margin-top: 0.31rem;
      .lvItem {
        flex: 1;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        .reqiqiu {
          width: 1.64rem;
          height: 1.96rem;
        }
        .lv {
          .title {
            font-size:0.22rem;
            margin-top: 0.22rem;
          }
          .lvblock {
            width:1rem;
            border-radius:0.1rem;
            p {
              height: 0.5rem;
              font-size:0.2rem;
              line-height:0.25rem;
              margin-bottom: 0.1rem;
            }
            &.lv1 {
              height:0.8rem;
            }
            &.lv2 {
              height: 1.1rem;
            }
            &.lv3 {
              height:1.5rem;
            }
            &.lv4 {
              height:1.9rem;
            }
          }
        }
      }
    }
    .descBox {
      .icon_j {
        width: 0.59rem;
        height: 0.34rem;
        margin-left: 0.5rem;
      }
      .desc {
        width: 7.1rem;
        border-radius:0.16rem;
        font-size:0.24rem;
        line-height:0.36rem;
        padding: 0.3rem 0.17rem;
      }
      &.descBox2 {
        .icon_j {
          margin-left: 2.3rem;
        }
      }
      &.descBox3 {
        .icon_j {
          margin-left: 4.2rem;
        }
      }
      &.descBox4 {
        .icon_j {
          margin-left: 6.1rem;
        }
      }
    }
  }
}
</style>

