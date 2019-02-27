<template>
  <div class="main">
    <Header :current="1" />
    <div class="con">
      <div class="titleBox">
        <h1>关于我们</h1>
        <img src="../../assets/images/titlePicAboutBig.png" />
      </div>
      <div class="conWrap">
        <h3>品牌故事</h3>
        <p>
          <span>未来的舞台是一个没有边界的舞台。 </span>
          <span>唯一的限制是想象力，甚至是一个小小的声音，都可以在全球范围内，制造巨大的涟漪。</span> 
          <span class="onpos"></span>
          <span>由Stagekids培育的孩子们已经准备好面对全球性的未来。</span>
          <span>通过艺术教育的旅程，他们敢于去梦想、去发现，成为有创意、有自信的沟通者。</span>
        </p>
        <img src="../../assets/images/pic.png" />
        <h3>品牌愿景</h3>
        <p>
          <span>培养儿童成为全球沟通者/传播者。 通过艺术教育的乐趣与心灵的启迪之旅，学生可以获得流利的英语语言能力。</span>
          <span>艺术开启了一个充满想象力的世界，让学生从不同的角度学习 - 使他们能够发展价值和技能，为他们征服世界舞台做好准备。</span>
        </p>
        <h3 class="top40">我们的与众不同</h3>
        <p>
          <span>· 第一个原创英文音频对话节目 · 纯正欧美成人与双语儿童主播</span>
          <span>· 海量对话和儿童剧音频节目，原创音频剧[Jojo奇遇记]重磅推出</span>
          <span>· 定制化的配套双语文本 · 高质量的互动型亲子活动与游戏</span>
          <span>· 无需拥有英语基础，从零开始的孩子无障碍开启</span>
          <span>· 不同的级别适应各年龄段孩子需求</span>
          <span>· 支持在线和缓存模式，可在任何智能设备上收听，全平台覆盖。收听时间和空间不受限制，随时随地，无需预约</span>
        </p>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from '../../components/Header';
import Footer from '../../components/Footer';
export default {
  components: {
    Header,
    Footer
  }
};
</script>
<style lang="less" scoped>
.main {
  width: 100%;
  color:rgba(51,51,51,1);
  padding-top: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  background: #f0f0f0;
  .con {
    padding-bottom: 50px;
    .titleBox {
      width:100%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;  
      img {
        height: 180px;
      }
      h1 {
        position: absolute;
        font-size:42px;
        font-weight:400;
        line-height:59px;
        color: #ffffff;
      }
    }
    .conWrap {
      position: relative;
      margin: -20px 15.28% 0;
      background: #ffffff;
      box-shadow:0px 0px 20px 0px rgba(0,0,0,0.05);
      border-radius:6px;
      padding: 50px 50px 61px 50px;
      h3 {
        font-size:18px;
        font-weight:500;
        line-height:25px;
        padding-bottom: 12px;
        &.top40 {
          margin-top: 40px;
        }
      }
      img {
        width: 50%;
        display: block;
        margin: 25px auto;
      }
      p {
        font-size:14px;
        span {
          min-height: 20px;
          line-height:20px;
          display: block;
        }
      }
    }
  }
}
@media screen and (max-width: 750px) {
  .main {
    padding-top: 1.2rem;
    background: #ffffff;
    .con {
      padding-bottom: 0.5rem;
      .titleBox {
        height:1.8rem;
        background:url("~assets/images/titlePicAbout.png");
        background-size: 100%;
        h1 {
          font-size: 0.42rem;
          line-height: 1.8rem;
        }
        img {
          display: none;
        }
      }
      .conWrap {
        margin: 0;
        padding: 0.3rem 0.4rem 0;
        background: none;
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.05);
        h3 {
          font-size:0.28rem;
          line-height:0.4rem;
          padding-bottom: 0.2rem;
          &.top40 {
            margin-top: 0.4rem;
          }
        }
        p {
          font-size:0.26rem;
          span {
            line-height:0.37rem;
            min-height: 0;
            .onpos {
              display: none;
            }
          }
        }
        img {
          width: 5rem;
          height: 2.8rem;
          margin: 0.3rem auto 0.4rem;
        }
      }
    }
  }
}
</style>


