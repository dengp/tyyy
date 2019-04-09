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
      <Footer class="footer" />
      <Fixed class="fixedbox" v-if="showFixed" />
      <div class="choose">
        <div class="appDown">
          <div class="icona"></div>
          <span>APP下载</span>
        </div>
        <div class="gzgzh" @click="showTopEwmFn">
          <div class="icona"></div>
          <span>关注公众号</span>
        </div>
      </div>
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
      loading: false
    }
  },
  mounted() {
    // this.imgLoad();
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
        'https://lsfh.vtanet.com.cn/WebStie/static/images/loading.png',
        'https://lsfh.vtanet.com.cn/WebStie/static/images/banner1.png'
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
    },
    showTopEwmFn() {
      this.showTopEwm = true;
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
  .choose {
    display: none;
  }
}
@media screen and (max-width: 1025px) {
  .main {
    min-width: 100%;
    .fixedbox {
      display: none;
    }
    .choose {
      width: 7.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 1rem;
      background:linear-gradient(150deg,rgba(255,149,92,1),rgba(255,106,101,1));
      box-shadow:0px -5px 5px 0px rgba(0, 0, 0, 0.15);
      position: fixed;
      bottom: 0;
      z-index: 1;
      span {
        font-size:0.3rem;
        font-weight:500;
        color:rgba(255,255,255,1);
      }
      .icona {
        width: 0.48rem;
        height: 0.48rem;
        margin-right: 0.22rem;
      }
      .appDown {
        display: flex;
        align-items: center;
        .icona {
          background: url("~assets/images/download_icon.png");
          background-size: 100%;
        }
      }
      .gzgzh {
        display: flex;
        align-items: center;
        margin-left: 1.71rem;
        .icona {
          background: url("~assets/images/erweima_icon.png");
          background-size: 100%;
        }
      }
    }
    .footer {
      padding-bottom: 1rem;
    }
  }
}
</style>

