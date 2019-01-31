<template>
  <div class="header" :class="{hasBg: !bg}">
    <div class="head">
      <div class="logo"></div>
      <ul class="nav">
        <li v-for="(item, index) in navList" :key="index" :class="{current: current === index}"><a :href="`./${item.page}.html`">{{item.title}}</a></li>
        <li><a href="http://www.stagekids.com/"><span>CN&nbsp;</span>/&nbsp;EN</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    current: {
      type: Number,
      default: -1
    },
    bg: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      navList: [
        {
          title: '首页',
          page: 'index'
        },
        {
          title: '关于我们',
          page: 'about'
        },
        {
          title: '联系我们',
          page: 'contact'
        },
        {
          title: '加入我们',
          page: 'join'
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  height: 90px;
  .head {
    max-width: 1240px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 1;
    margin: 0 auto;
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
        font-size:18px;
        a {
          color: #ffffff;
          span {
            color: #FF6A65;
          }
        }
        &.current {
          a {
            color: #FF6A65;
          }
        }
      }
    }
  }
  &.hasBg {
    background: #ffffff;
    .head {
      .logo {
        background: url("~assets/images/logo_black.png");
        background-size: 100%;
      }
      .nav {
        display: flex;
        li {
          a {
            color: #333333;
          }
          &.current {
            a {
              color: #FF6A65;
            }
          }
        }
      }
    }
    
  }
}
</style>

