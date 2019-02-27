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
      height: 160px;
      h1 {
        font-size:42px;
        font-weight:400;
        line-height:160px;
        text-align: center;
      }
    }
    .conWrap {
      position: relative;
      margin: 0 15.28%;
      background: #ffffff;
      box-shadow:0px 0px 20px 0px rgba(0,0,0,0.05);
      border-radius:6px;
      padding: 50px 50px 26px 50px;
      h3 {
        font-size:18px;
        font-weight:500;
        line-height:25px;
        margin-bottom: 12px;
      }
      p {
        font-size:14px;
        line-height:20px;
        margin-bottom: 24px;
      }
    }
  }
}
@media screen and (max-width: 750px) {
  .main {
    padding-top: 1.2rem;
    background: #ffffff;
    .con {
      padding: 0;
      .titleBox {
        margin: 0 0.4rem;
        height:1.17rem;
        border-bottom: 0.02rem solid #d8d8d8;
        h1 {
          font-size: 0.42rem;
          line-height: 1.17rem;
        }
      }
      .conWrap {
        margin: 0;
        padding: 0.3rem 0.4rem 0.1rem 0.4rem;
        background: none;
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.05);
        h3 {
          font-size:0.28rem;
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