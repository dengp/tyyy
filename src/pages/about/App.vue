<template>
  <div class="main">
    <Header :current="1" />
    <div class="con">
      <div class="titleBox">
        <h1>关于我们</h1>
      </div>
      <div class="conWrap">
        <h3>品牌故事</h3>
        <p>未来的舞台是一个没有边界的舞台。 唯一的限制是想象力，甚至是一个小小的声音，都可以在全球范围内，制造巨大的涟漪。 由Stagekids培育的孩子们已经准备好面对全球性的未来。 通过艺术教育的旅程，他们敢于去梦想、去发现，成为有创意、有自信的沟通者。</p>
        <img src="../../assets/images/about/pic.png" />
        <h3>品牌愿景</h3>
        <p>培养儿童成为全球沟通者/传播者。 通过艺术教育的乐趣与心灵的启迪之旅，学生可以获得流利的英语语言能力。 艺术开启了一个充满想象力的世界，让学生从不同的角度学习 - 使他们能够发展价值和技能，为他们征服世界舞台做好准备。</p>
        <h3>我们的与众不同</h3>
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
}
@media screen and (max-width: 750px) {
  .main {
    width: 100%;
    padding-top: 1.2rem;
    .con {
      padding-bottom: 0.5rem;
      background: #ffffff;
      .titleBox {
        width:7.5rem;
        height:1.8rem;
        background:url("~assets/images/about/titlePic.png");
        background-size: 100%;
        h1 {
          font-weight:400;
          color:rgba(51,51,51,1);
          line-height: 1.8rem;
          text-align: center;
          margin-bottom: 0.2rem;
        }
      }
      .conWrap {
        padding: 0.3rem 0.4rem 0;
        h3 {
          font-size:0.28rem;
          font-weight:500;
          color:rgba(51,51,51,1);
          line-height:0.4rem;
          padding-bottom: 0.2rem;
        }
        p {
          font-size:0.26rem;
          color:rgba(51,51,51,1);
          line-height:0.37rem;
          span {
            display: block;
          }
        }
        img {
          width: 5rem;
          height: 2.8rem;
          display: block;
          margin: 0.3rem auto 0.4rem;
        }
      }
    }
  }
}
</style>


