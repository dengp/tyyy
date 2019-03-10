<template>
  <div class="main">
    <Header :current="0" bg='no' :hasBg="showHeaderBg" />
    <Parallax :fixed="true">
      <Banner />
      <div class="area_top">
        <TopAreaInfo />
      </div>
    </Parallax>
    <TopEwm v-if="showTopEwm" />
    <Content :curTop="curTop" />
    <Footer />
    <Fixed v-if="showFixed" />
  </div>
</template>
<script>
import Header from '../../components/Header';
import Banner from './components/Banner';
import TopAreaInfo from './components/TopAreaInfo';
import TopEwm from './components/TopEwm';
import Content from './components/Content';
import Footer from '../../components/Footer';
import Fixed from './components/Fixed';
import Parallax from 'vue-parallaxy';
export default {
  components: {
    Header,
    Banner,
    TopAreaInfo,
    TopEwm,
    Content,
    Footer,
    Fixed,
    Parallax
  },
  data() {
    return {
      showTopEwm: false,
      showFixed: false,
      showHeaderBg: false,
      curTop: 0
    }
  },
  created() {
    window.onscroll = () => {
      const curTop = document.documentElement.scrollTop || document.body.scrollTop;
      const curHeight = document.documentElement.clientHeight || document.body.clientHeight;
      const pos = curHeight - 90;
      this.curTop = curTop;
      if(curTop >= pos){
        this.showFixed = true;
      } else {
        this.showFixed = false;
      }
      if(curTop >= pos){
        this.showHeaderBg = true;
      } else {
        this.showHeaderBg = false;
      }
    }
  }
};
</script>
<style>
body {
  background: #f0f0f0;
}
</style>
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

