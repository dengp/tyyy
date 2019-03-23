<template>
  <div class="bannerBox">
    <div class="banner" v-for="(item, index) in picList" :key="index" :class="{cur: cur === index}">
      <img :src="require(`../../../assets/images/banner${item}.png`)" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      picList: ['1', '2', '3', '4'],
      cur: 0
    };
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
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    opacity: 0;
    transition: opacity 2s ease-in-out;
    &.cur {
      opacity: 1;
    }
    img {
      height: 100%;
    }
  }
}
</style>