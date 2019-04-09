<template>
  <div class="bannerBox" ref="bannerBox">
    <div class="banner" :style="{width: imgWidth, marginTop: -imgHeight/2, marginLeft: -imgWidth/2}" v-for="(item, index) in picList" :key="index" :class="{cur: cur === index}">
      <img :src="require(`../../../assets/images/banner${item}.jpg`)" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      picList: ['1', '2', '3'],
      cur: 0,
      imgWidth: 1440,
      imgHeight: 700
    };
  },
  created() {
    this.$nextTick(() => {
      this.imgHeight = this.$refs.bannerBox.offsetHeight;
      this.imgWidth = this.imgHeight * (1440 / 700);
    });
    window.onresize = () => {
      this.$nextTick(() => {
        this.imgHeight = this.$refs.bannerBox.offsetHeight;
        this.imgWidth = this.imgHeight * (1440 / 700);
      });
    }
  },
  mounted() {
    setInterval(() => {
      this.cur++;
      if (this.cur > this.picList.length - 1) {
        this.cur = 0;
      }
    }, 5000);
  }
};
</script>
<style lang="less" scoped>
.bannerBox {
  position: relative;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  .banner {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    left: 50%;
    top: 50%;
    overflow: hidden;
    opacity: 0;
    transition: opacity 2s ease-in-out;
    &.cur {
      opacity: 1;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>