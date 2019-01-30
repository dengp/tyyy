<template>
  <div class="main">
    <Banner />
    <div class="area_top">
      <Header :current="0" />
      <TopAreaInfo />
    </div>
    <div class="content">
    </div>
  </div>
</template>
<script>
import Header from '../../components/Header';
import Banner from './components/Banner';
import TopAreaInfo from './components/TopAreaInfo';
export default {
  components: {
    Header,
    Banner,
    TopAreaInfo
  },
  created() {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
  }
};
</script>
<style lang="less" scoped>
.main {
  min-width: 1240px;
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
  .content {
    height: 2000px;
    background: red;
  }
}
</style>

