<template>
  <div class="main">
    <Header :current="3" />
    <div class="con">
      <div class="titleBox">
        <h1>加入我们</h1>
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
      .titleBox {
        width:7.5rem;
        height:1.8rem;
        background:url("~assets/images/about/titlePic.png");
        background-size: 100%;
        h1 {
          font-size:0.42rem;
          font-weight:400;
          color:rgba(51,51,51,1);
          line-height: 1.8rem;
          text-align: center;
        }
      }
    }
  }
}
</style>