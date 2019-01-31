<template>
  <div class="main">
    <Header />
    <div class="con"></div>
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
  min-width: 1440px;
  height: 100%;
  .con {
    width: 1440px;
    height: 810px;
    background: url("~assets/images/protocol.png");
    background-size: 100%;
    margin: 0 auto 40px;
  }
}
</style>

