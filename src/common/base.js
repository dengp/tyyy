import Vue from 'vue';
import './base.less';
import animate from 'animate.css';
Vue.use(animate);
// import VueLazyload from 'vue-lazyload';
// Vue.use(VueLazyload, {
//   preLoad: 1.3,
//   error: require('../assets/images/def270.png'),
//   loading: require('../assets/images/def270.png'),
//   slient: false
// });
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper);
(function () {
    function resize() {
        const deviceWidth  = document.documentElement.clientWidth;
        document.documentElement.style.fontSize = (deviceWidth / 7.5) +'px';
    }
    resize();
    window.onresize = resize;
})();