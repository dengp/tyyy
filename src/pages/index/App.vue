<template>
  <div class="main">
    <Banner />
    <div class="area_top">
      <Header :current="0" />
      <TopAreaInfo />
    </div>
    <Content />
    <Footer />
  </div>
</template>
<script>
import Header from '../../components/Header';
import Banner from './components/Banner';
import TopAreaInfo from './components/TopAreaInfo';
import Content from './components/Content';
import Footer from '../../components/Footer';
export default {
  components: {
    Header,
    Banner,
    TopAreaInfo,
    Content,
    Footer
  },
  created() {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
  }
};
</script>
<style lang="less" scoped>
.main {
  min-width: 1440px;
  height: 100%;
  position: relative;
  margin: 0 auto;
  .area_top {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 1;
  }
}
</style>

