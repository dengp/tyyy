<template>
  <div>
    <loading v-if="loading" />
    <div class="main" v-else>
      <Header class="header" :current="0" bg='no' :hasBg="showHeaderBg" />
      <Parallax :fixed="true">
        <Banner />
        <div class="area_top">
          <TopAreaInfo />
        </div>
      </Parallax>
      <TopEwm v-if="showTopEwm" />
      <Content :curTop="curTop" :curHeight="curHeight" />
      <Footer />
      <Fixed class="fixedbox" v-if="showFixed" />
    </div>
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
import loading from '../../components/loading';
export default {
  components: {
    Header,
    Banner,
    TopAreaInfo,
    TopEwm,
    Content,
    Footer,
    Fixed,
    Parallax,
    loading
  },
  data() {
    return {
      showTopEwm: false,
      showFixed: false,
      showHeaderBg: false,
      curTop: 0,
      curHeight: 0,
      loading: true
    }
  },
  mounted() {
    this.imgLoad();
    window.onscroll = () => {
      const curTop = document.documentElement.scrollTop || document.body.scrollTop;
      const curHeight = document.documentElement.clientHeight || document.body.clientHeight;
      const pos = curHeight - document.querySelector('.header').offsetHeight;
      this.curTop = curTop;
      this.curHeight = curHeight;
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
  },
  methods: {
    imgLoad() {
      let mulitImg = [
        'https://lsfh.vtanet.com.cn/WebStie/static/images/banner1.png',
        'https://lsfh.vtanet.com.cn/WebStie/static/images/banner2.png',
        'https://lsfh.vtanet.com.cn/WebStie/static/images/banner3.png',
        'https://lsfh.vtanet.com.cn/WebStie/static/images/banner4.png'
      ];
      let promiseAll = [], img = [], imgTotal = mulitImg.length;
      for(let i = 0 ; i < imgTotal ; i++){
          promiseAll[i] = new Promise((resolve, reject)=>{
              img[i] = new Image()
              img[i].src = mulitImg[i]
              img[i].onload = function(){
                    //第i张加载完成
                    resolve(img[i])
              }
          })
      }
      Promise.all(promiseAll).then((img)=>{
        this.loading = false;
      });
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
  .fixedbox {
    display: block;
  }
}
@media screen and (max-width: 750px) {
  .main {
    min-width: 100%;
    .fixedbox {
      display: none;
    }
  }
}
</style>

