<template>
  <div class="banner">
    <img v-for="(item, index) in picList" :key="index" :class="{cur: cur === index}" :src="require(`../../../assets/images/banner${item}.png`)" />
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
.banner {
  position: relative;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    opacity: 0;
    transition: opacity 2s ease-in-out;
    &.cur {
      opacity: 1;
    }
  }
}
</style>