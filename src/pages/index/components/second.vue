<template>
  <div class="second">
    <div class="content_title">
      <h3>课程体系介绍阶梯式课程体系</h3>
      <p>4个级别 · 27个单元 · 每个单元50节课程，从零基础-初级-中级-高级，循序渐进</p>
    </div>
    <div class="lvList">
      <div class="lvItem" v-for="(item, index) in lvList" :key="index">
        <div class="reqiqiu"></div>
        <div class="lv">
          <div :class="`lvblock lv${index+1}`">
            <p class="hoverCon" v-html="item.cnt"></p>
            <p>{{item.lv}}</p>
          </div>
          <span class="title">{{item.title}}</span>
          <div :class="`descBox descBox${index+1}`">
            <div class="icon_j"></div>
            <span class="desc" v-html="item.desc"></span>
          </div>
        </div>
      </div>
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
      ]
    }
  }
};
</script>

<style lang="less" scoped>
.second {
  padding-top: 39px;
  position: relative;
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
        background-size: 100%;
        animation:balloon 6s ease-in-out infinite;
        transform-origin:bottom center;
      }
      @keyframes balloon {
        0%,100% {
          transform:translateY(0) rotate(4deg);
        }
        50% {
          transform:translateY(0) rotate(-4deg);
        }
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
      .descBox {
        position: absolute;
        bottom: -127px;
        left: -18px;
        display: none;
        .icon_j {
          width: 30px;
          height: 20px;
          background: url("~assets/images/icon_j.png");
          background-size: 100%;
          margin-left: 105px;
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
        &.descBox2 {
          left: -272px;
          .icon_j {
            margin-left: 359px;
          }
        }
        &.descBox3 {
          left: -525px;
          .icon_j {
            margin-left: 612px;
          }
        }
        &.descBox4 {
          left: -778px;
          .icon_j {
            margin-left: 866px;
          }
        }
      }
      &:hover {
        .reqiqiu {
          background:url("~assets/images/rqq_xz.png");
          background-size: 100%;
          
        }
        .lv {
          .lvblock {
            background: #F6B221;
            p {
              display: none;
              &.hoverCon {
                width: 100%;
                text-align: center;
                display: block;
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
}
</style>

