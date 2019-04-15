<template>
  <div class="footer">
    <div class="foot pc">
      <p>©2019 童演童语（北京）教育科技有限公司 版权所有 | 京ICP备13005700</p>
      <div class="list">
        <a href="./about.html">关于我们</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="./contact.html">联系我们</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="./join.html">加入我们</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="./protocol.html">用户协议</a>
      </div>
      <p>技术支持：北京启航视讯科技有限公司</p>
    </div>
    <div class="foot">
      <p>©2019 童演童语（北京）教育科技有限公司 版权所有
        <span>京ICP备13005700</span>
      </p>
      <div class="list">
        <a href="./about.html">关于我们</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="./contact.html">联系我们</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="./join.html">加入我们</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="./protocol.html">用户协议</a>
      </div>
      <p>技术支持：北京启航视讯科技有限公司</p>
    </div>
  </div>
</template>
<style lang="less" scoped>
.footer {
  width: 100%;
  background: #ffffff;
  position: relative;
  z-index: 1;
  .foot {
    padding: 34px 5.8%;
    display: none;
    &.pc {
      display: block;
    }
    .list {
      color:rgba(102,102,102,1);
      margin: 14px 0;
      a {
        font-size:14px;
        color:rgba(102,102,102,1);
      }
    }
    p {
      font-size:12px;
      color:rgba(102,102,102,1);
      display: block;
      line-height:17px;
      span {
        display: block;
      }
    }
  }
}
@media screen and (max-width: 1025px) {
  .footer {
    width:7.5rem;
    padding: 0 0.4rem;
    background:rgba(247,247,247,1);
    .foot {
      padding: 0.3rem 0 0.5rem 0;
      display: block;
      &.pc {
        display: none;
      }
      .list {
        a {
          font-size:0.24rem;
        }
      }
      p {
        font-size: 0.2rem;
        line-height: 0.28rem;
        color:rgba(102,102,102,1);
        margin-top: 0.16rem;
        span {
          margin-top: 0.05rem;
        }
      }
    }
  }
}
</style>

