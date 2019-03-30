<template>
  <div class="main">
    <loading v-if="loading" />
    <Header />
    <div class="con">
      <div class="titleBox">
        <h1>用户协议</h1>
      </div>
      <div class="conWrap" v-html="content">
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { request } from '../../api/request';
import loading from '../../components/loading';
export default {
  components: {
    Header,
    Footer,
    loading
  },
  data() {
    return {
      content: '',
      loading: true
    };
  },
  mounted() {
    request({
      url: 'https://lsfh.vtanet.com.cn/StageKids/client/content.php?act=getwebcontent',
      data: {
      'contentid': 8
      }
    }).then((response) => {
      this.content = response.data.rows[0].content;
      this.loading = false;
    }).catch(() => {
      this.loading = false;
    });
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