<template>
  <div class="main">
    <Header />
    <div class="con">
      <div class="titleBox">
        <h1>用户协议</h1>
      </div>
      <div class="conWrap">
        <h3>1、使用协议的接受</h3>
        <p>使用协议的接受内容使用协议的接受内容使用协议的接受内容使用协议的接受内容使用协议的接受内容使用协议的接受内容使用协议的接受内容使用协议的接受内容使用协议的接受内容使用协议的接受内容使用协议的接受内容使用协议的接受内容使用协议的接受内容使用协议的接受内容使用协议的接受内容使用协议的接受内容使用协议的接受内容使用协议的接受内容使用协议的接受内容使用协议的接受内容使用协议的接受内容使用协议的接受内容使用协议的接受内容使用协议的接受内容使用协议的接受内容使用协议的接受内容使用协议的接受内容使用协议的接受内容使用协议的接受内容使用协议的接受内容使用协议的接受内容使用协议的接受内容使用协议的接受内容使用协议的接受内容使用协议的接受内容使用协议的接受内容使用协议的接受内容使用协议的接受内容</p>
        <h3>2、本协议的变更和修改</h3>
        <p>本协议的变更和修改本协议的变更和修改本协议的变更和修改本协议的变更和修改本协议的变更和修改本协议的变更和修改本协议的变更和修改本协议的变更和修改本协议的变更和修改本协议的变更和修改本协议的变更和修改本协议的变更和修改本协议的变更和修改本协议的变更和修改本协议的变更和修改</p>
        <h3>3、服务说明</h3>
        <p>服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容服务说明内容</p>
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
    color:rgba(51,51,51,1);
    .con {
      background: #ffffff;
      .titleBox {
        margin: 0 0.4rem;
        height:1.17rem;
        border-bottom: 0.02rem solid #d8d8d8;
        h1 {
          font-size: 0.42rem;
          font-weight:400;
          color:rgba(51,51,51,1);
          line-height: 1.17rem;
          text-align: center;
        }
      }
      .conWrap {
        padding: 0.3rem 0.4rem 0.1rem 0.4rem;
        h3 {
          font-size:0.28rem;
          font-weight:500;
          line-height:0.4rem;
          margin-bottom: 0.1rem;
        }
        p {
          font-size:0.26rem;
          line-height:0.37rem;
          margin-bottom: 0.4rem;
        }
      }
    }
  }
}
</style>