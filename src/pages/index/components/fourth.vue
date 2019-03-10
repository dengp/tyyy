<template>
  <div class="Fourth">
    <div class="content_title">
      <h3>课程体系介绍</h3>
      <div class="classList">
        <div class="classItem" :class="`class${index + 1}`" v-for="(item, index) in classList" :key="index">
          <div class="intro">
            <span @click="item.show = true">{{item.btn}}</span>
          </div>
          <div class="ewm" v-if="item.show" @click="item.show = false">
            <img :src="item.ewm" />
            <span>{{item.text1}}</span>
            <span class="big">{{item.text2}}</span>
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
      classList: [
        {
          btn: '马上体验',
          ewm: require('../../../assets/images/ewm1.png'),
          text1: '微信订阅号',
          text2: '童言英语对话',
          show: false
        },
        {
          btn: '加入会员',
          ewm: require('../../../assets/images/ewm3.png'),
          text1: '微信服务号',
          text2: '童言有艺',
          show: false
        }
      ]
    };
  }
}
</script>

<style lang="less" scoped>
.fourth {
  margin-top: 100px;
  position: relative;
  z-index: 2;
  .content_title {
    text-align: center;
    h3 {
      font-size:36px;
      color: #333333;
    }
  }
  .classList {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    .classItem {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 15px;
      position: relative;
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
      .ewm {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        border-radius:8px;
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img {
          width: 258px;
          height: 258px;
          padding: 0 5px;
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
</style>

