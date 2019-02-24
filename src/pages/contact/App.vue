<template>
  <div class="main">
    <Header :current="2" />
    <div class="con">
      <div class="titleBox">
        <h1>联系我们</h1>
      </div>
      <div class="conWrap">
        <h3>童演童语（北京）教育科技有限公司</h3>
        <p>
          <span>地址：北京市朝阳区望京西路锐创国际中心B座</span>
          <span>邮编：10010</span>
        </p>
        <h4>客服电话：</h4>
        <a href="tel:400-666-8888">400-666-8888</a>
        <h4>客服邮箱：</h4>
        <a href="mailto:kefu@stagekids.com.cn">kefu@stagekids.com.cn</a>
        <span class="line"></span>
        <h2>市场部：</h2>
        <p>
          <span>电话：010-XXX-XXX</span>
          <span>邮箱：marketing@stagekids.com.cn</span>
          <span>微信号：xxxxx</span>
          <span>(添加微信好友时请注明“合作类型”获得验证)</span>
        </p>
        <h2 class="product">课程部：</h2>
        <p>
          <span>电话：010-XXX-XXX</span>
          <span>邮箱：product@stagekids.com.cn</span>
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
        background:url("~assets/images/contact/titlePic.png");
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
        .line {
          display: block;
          height:0.02rem;
          background:rgba(216,216,216,1);
          margin-top: 0.4rem;
        }
        h2 {
          font-size:0.32rem;
          font-weight:500;
          color:rgba(51,51,51,1);
          line-height:0.45rem;
          padding: 0.4rem 0 0.1rem 0;
          &.product {
            padding-top: 0.5rem;
          }
        }
        h3 {
          font-size:0.28rem;
          font-weight:500;
          color:rgba(51,51,51,1);
          line-height:0.4rem;
          padding-bottom: 0.2rem;
        }
        h4 {
          font-size:0.28rem;
          font-weight:500;
          color:rgba(51,51,51,1);
          line-height:0.4rem;
          margin-top: 0.4rem;
        }
        p {
          font-size:0.26rem;
          color:rgba(51,51,51,1);
          line-height:0.37rem;
          span {
            display: block;
          }
        }
        a {
          font-size: 0.3rem;
          line-height: 0.42rem;
          color: rgba(0, 161, 223, 1);
        }
      }
    }
  }
}
</style>