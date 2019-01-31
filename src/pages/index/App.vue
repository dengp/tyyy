<template>
  <div class="main">
    <Banner />
    <div class="area_top">
      <Header :current="0" bg='no' />
      <TopAreaInfo />
    </div>
    <TopEwm v-if="showTopEwm" />
    <Content />
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
export default {
  components: {
    Header,
    Banner,
    TopAreaInfo,
    TopEwm,
    Content,
    Footer,
    Fixed
  },
  data() {
    return {
      showTopEwm: false,
      showFixed: false
    }
  },
  created() {
    window.onscroll = () => {
      const curTop = document.documentElement.scrollTop || document.body.scrollTop;
      const curHeight = document.documentElement.clientHeight || document.body.clientHeight;
      console.log(curTop>=curHeight)
      if(curTop >= curHeight){
        this.showFixed = true;
      } else {
        this.showFixed = false;
      }
    }
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

