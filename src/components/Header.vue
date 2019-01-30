<template>
  <div class="header">
    <div class="logo"></div>
    <ul class="nav">
      <li v-for="(item, index) in navList" :key="index" :class="{current: current === index}">{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    current: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      navList: ['首页', '关于我们', '联系我们', '加入我们']
    };
  }
};
</script>
<style lang="less" scoped>
.header {
  max-width: 1240px;
  height: 90px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  .logo {
    width: 141px;
    height: 50px;
    background: url("~assets/images/logo.png");
    background-size: 100%;
  }
  .nav {
    display: flex;
    li {
      margin-left: 41px;
      color: #ffffff;
      font-size:18px;
      cursor: pointer;
      &.current {
        color: #FF6A65;
      }
    }
  }
}
</style>

