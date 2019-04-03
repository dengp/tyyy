<template>
  <div class="header" :class="{hasBg: !bg || hasBg, menuOpen: menuOpen}">
    <div class="head">
      <a class="logo" href="./index.html"></a>
      <div class="menu" @click="menu"></div>
      <ul class="nav">
        <li v-for="(item, index) in navList" :key="index" :class="{current: current === index}"><a :href="`./${item.page}.html`">{{item.title}}</a></li>
        <li><a href="http://www.stagekids.com/"><span>CN&nbsp;</span>/&nbsp;EN</a></li>
      </ul>
    </div>
    <div class="splice" @click="menu"></div>
    <ul class="nav" v-if="menuOpen">
      <li v-for="(item, index) in navList" :key="index" :class="{current: current === index}"><a :href="`./${item.page}.html`">{{item.title}}</a></li>
      <li><a href="http://www.stagekids.com/"><span>CN&nbsp;</span>/&nbsp;EN</a></li>
    </ul>
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
    },
    hasBg: {
      type: Boolean,
      default: false
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
      ],
      menuOpen: false
    };
  },
  methods: {
    menu() {
      this.menuOpen = !this.menuOpen;
      // if (this.menuOpen) {
      //   document.documentElement.style.overflow = document.body.style.overflow = 'hidden';
      //   document.documentElement.style.height = document.body.style.height = '100%';
      // } else {
      //   document.body.removeAttribute('style');
      //   document.documentElement.style.overflow = document.documentElement.style.height = '';
      // }
    }
  }
};
</script>
<style lang="less" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 90px;
  .head {
    padding: 0 5.8%;
    height: 100%;
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
    box-shadow:0px 5px 20px 0px rgba(0,0,0,0.05);
    background: #ffffff;
    .head {
      .logo {
        background: url("~assets/images/logo_black.png");
        background-size: 100%;
      }
      .nav {
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
@media screen and (max-width: 896px) {
  .header {
    height: 1.2rem;
    &.menuOpen {
      height: 100%;
      background: none;
      .head {
        background: #ffffff;
        box-shadow: 0 0.05rem 0.2rem 0 rgba(0,0,0,0.05);
        .menu {
          background: url("~assets/images/icon_menu.png");
          background-size: 100%;
        }
        .logo {
          background: url("~assets/images/logo_black.png");
          background-size: 100%;
        }
      }
      .splice {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        position: absolute;
        top: 0px;
        left: 0px;
      }
    }
    .head {
      height: 1.2rem;
      padding: 0 0.4rem;
      .logo {
        width: 1.7rem;
        height: 0.6rem;
      }
      .menu {
        width: 0.5rem;
        height: 0.5rem;
        background: url("~assets/images/icon_menu_white.png");
        background-size: 100%;
      }
      .nav {
        display: none;
      }
    }
    .nav {
      width: 100%;
      position: absolute;
      top: 1.2rem;
      left: 0;
      display: flex;
      flex-direction: column;
      background: #ffffff;
      li {
        height: 0.9rem;
        padding: 0 0.4rem;
        font-size:0.28rem;
        line-height:0.9rem;
        border-bottom: 1px solid #e5e5e5;
        a {
          width: 100%;
          display: block;
          color: #333333;
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
    &.hasBg {
      .head {
        background: #ffffff;
        box-shadow: 0 0.05rem 0.2rem 0 rgba(0,0,0,0.05);
        .menu {
          background: url("~assets/images/icon_menu.png");
          background-size: 100%;
        }
      }
      .nav {
        background: #ffffff;
        li {
          border-bottom: 1px solid #e5e5e5;
          a {
            color: #333333;
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
  }
}
</style>

