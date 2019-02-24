<template>
  <div class="main">
    <Header :current="2" />
    <div class="con">
      <div class="titleBox">
        <h1>联系我们</h1>
        <img src="../../assets/images/contact/titlePicBig.png" />
      </div>
      <div class="conWrap">
        <h3>童演童语（北京）教育科技有限公司</h3>
        <p>
          <span>地址：北京市朝阳区望京西路锐创国际中心B座</span>
          <span>邮编：10010</span>
        </p>
        <div class="contact tel">
          <h4>客服电话：</h4>
          <a href="tel:400-666-8888">400-666-8888</a>
        </div>
        <div class="contact mail">
          <h4>客服邮箱：</h4>
          <a href="mailto:kefu@stagekids.com.cn">kefu@stagekids.com.cn</a>
        </div>
        <span class="line"></span>
        <h2 class="sc">市场部：</h2>
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
  color:rgba(51,51,51,1);
  .con {
    background: #f0f0f0;
    padding-bottom: 50px;
    .titleBox {
      width:100%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;  
      img {
        width: 1440px;
        height: 180px;
      }
      h1 {
        position: absolute;
        font-size:42px;
        font-weight:400;
        line-height:59px;
      }
    }
    .conWrap {
      position: relative;
      margin: -20px 15.28% 0;
      background: #ffffff;
      box-shadow:0px 0px 20px 0px rgba(0,0,0,0.05);
      border-radius:6px;
      padding: 50px 50px 161px 50px;
      h2,h3,h4 {
        font-size:18px;
        font-weight:500;
        line-height:25px;
        padding-bottom: 12px;
      }
      h2 {
        margin-top: 40px;
        &.sc {
          margin-top: 50px;
        }
      }
      .contact {
        display: flex;
        align-items: center;
        &.tel {
          margin-top: 14px;
        }
        &.mail {
          margin-top: 8px;
        }
      }
      h4 {
        font-size:18px;
        font-weight:400;
        line-height:25px;
        padding: 0;
      }
      p {
        font-size:14px;
        line-height:20px;
        span {
          display: block;
        }
      }
      a {
        font-size:24px;
        color:rgba(51,51,51,1);
        line-height:33px;
      }
    }
  }
}
@media screen and (max-width: 750px) {
  .main {
    padding-top: 1.2rem;
    .con {
      padding-bottom: 0.5rem;
      background: #ffffff;
      .titleBox {
        height:1.8rem;
        background:url("~assets/images/contact/titlePic.png");
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
        .line {
          display: block;
          height:0.02rem;
          background:rgba(216,216,216,1);
          margin-top: 0.4rem;
        }
        h2 {
          font-size:0.32rem;
          font-weight:500;
          line-height:0.45rem;
          padding: 0.4rem 0 0.1rem 0;
          margin: 0;
          &.sc {
            margin: 0;
          }
          &.product {
            padding-top: 0.5rem;
          }
        }
        h3 {
          font-size:0.28rem;
          line-height:0.4rem;
          padding-bottom: 0.2rem;
        }
        .contact {
          display: block;
        }
        h4 {
          font-size:0.28rem;
          font-weight:500;
          line-height:0.4rem;
          margin-top: 0.4rem;
        }
        p {
          font-size:0.26rem;
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