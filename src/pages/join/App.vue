<template>
  <div class="main">
    <Header :current="3" />
    <div class="con">
      <div class="titleBox">
        <h1>加入我们</h1>
        <img src="../../assets/images/titlePicJoinBig.png" />
      </div>
      <div class="conWrap">
        <div class="departmentList">
          <div class="departmentItem" v-for="(departmentItem, i) in departmentList" :key="i">
            <div class="departmentItemTitle" @click="department(i)">
              <span class="departmentItemName">{{departmentItem.name}}</span>
              <span class="icon_close" :class="{icon_open: departmentItem.flag}"></span>
            </div>
            <div class="positionList" v-if="departmentItem.flag">
              <div class="positionItem" v-for="(positionItem, j) in departmentItem.list" :key="j">
                <div class="positionItemTitle" @click="position(i, j)">
                  <span class="positionItemName" :class="{active: positionItem.flag}">{{positionItem.name}}</span>
                  <span class="positionItemInfo">{{positionItem.local}} | {{positionItem.num}}名 | {{positionItem.time}}</span>
                </div>
                <div class="detail" v-if="positionItem.flag">
                  <h3>工作职责:</h3>
                  <p>
                    <span>{{positionItem.work}}</span>
                  </p>
                  <h3>工作要求:</h3>
                  <span>{{positionItem.request}}</span>
                  <a :href="`mailto:${positionItem.mailbox}`">投递简历</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { request } from '../../api/request';
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      departmentList: []
    };
  },
  mounted() {
    request({
      url: 'https://lsfh.vtanet.com.cn/StageKids/client/content.php?act=getrecruitments',
    }).then((response) => {
      this.departmentList = response.data.departmentList;
      this.initDeparmentList();
    });
  },
  methods: {
    department(i) {
      this.departmentList.forEach((element, index) => {
        if (i === index) {
          element.flag = !element.flag;
        } else {
          element.flag = false;
        }
      });
    },
    position(i, j) {
      this.departmentList.forEach((element, index1) => {
        if (i === index1) {
          element.list.forEach((item, index2) => {
            if (j === index2) {
              item.flag = !item.flag;
            } else {
              item.flag = false;
            }
          });
        }
      });
    },
    initDeparmentList() {
      const list = [];
      this.departmentList.forEach((element, i) => {
        const arr = [];
        element.list.forEach((thisItem, index) => {
          let flag = false;
          if (index === 0) {
            flag = true;
          }
          const obj = Object.assign({flag}, thisItem);
          arr.push(obj);
        });
        element.list = arr;
        let flag = false;
        if (i === 0) {
          flag = true;
        }
        const item = Object.assign({flag}, element);
        list.push(item);
      });
      this.departmentList = list;
    }
  }
};
</script>
<style lang="less" scoped>
.main {
  width: 100%;
  color:rgba(51,51,51,1);
  padding-top: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  background: #f0f0f0;
  .con {
    padding-bottom: 50px;
    .titleBox {
      width:100%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;  
      img {
        height: 180px;
      }
      h1 {
        position: absolute;
        font-size:42px;
        font-weight:400;
        line-height:59px;
        color: #ffffff;
      }
    }
    .conWrap {
      position: relative;
      margin: -20px 15.28% 0;
      background: #ffffff;
      box-shadow:0px 0px 20px 0px rgba(0,0,0,0.05);
      border-radius:6px;
      padding: 0 30px;
      .departmentList {
        .departmentItem {
          &:last-child {
            .positionList {
              padding-bottom: 30px;
            }
          }
          .departmentItemTitle {
            padding: 0 20px 0 10px;
            height: 80px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #e5e5e5;
            .departmentItemName {
              font-size: 20px;
              font-weight: 500;
            }
            .icon_close {
              width: 36px;
              height: 36px;
              background: url("~assets/images/icon_close.png");
              background-size: 100%;
            }
            .icon_open {
              background: url("~assets/images/icon_open.png");
              background-size: 100%;
            }
          }
          &:last-child {
            .departmentItemTitle {
              border: 0px;
            }
          }
          .positionList {
            user-select: none;
            .positionItem {
              .positionItemTitle {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 20px;
                height: 60px;
                background: rgba(250, 250, 250, 1);
                border-bottom: 1px solid #e5e5e5;
                .positionItemName {
                  font-size: 18px;
                  &.active {
                    color: #00A1DF;
                  }
                }
                .positionItemInfo {
                  font-size: 14px;
                }
              }
              .detail {
                background: #ffffff;
                padding: 0 20px;
                border-bottom: 1px solid #e5e5e5;
                font-size:14px;
                line-height:20px;
                padding-bottom: 23px;
                h3 {
                  font-weight: 500;
                  padding: 20px 0 10px 0;
                  user-select: text;
                }
                span {
                  display: block;
                  user-select: text;
                }
                a {
                  display: block;
                  width:140px;
                  height:50px;
                  background:rgba(255,255,255,1);
                  border-radius:8px;
                  border: 2px solid rgba(0,161,223,1);
                  margin-top: 19px;
                  font-size:18px;
                  color:rgba(0,161,223,1);
                  line-height:50px;
                  text-align: center;
                }
              }
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 750px) {
  .main {
    padding-top: 1.2rem;
    background: #ffffff;
    .con {
      padding-bottom: 0;
      .titleBox {
        height:1.8rem;
        background:url("~assets/images/titlePicJoin.png");
        background-size: 100%;
        h1 {
          font-size: 0.42rem;
          line-height: 1.8rem;
        }
        img {
          display: none;
        }
      }
      .conWrap {
        margin: 0;
        padding: 0;
        background: none;
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.05);
        .departmentList {
          .departmentItem {
            &:last-child {
              .positionList {
                padding-bottom: 0.3rem;
              }
            }
            .departmentItemTitle {
              padding: 0 0.4rem;
              height: 1rem;
              .departmentItemName {
                font-size:0.28rem;
                font-weight: 600;
              }
              .icon_close {
                width: 0.36rem;
                height: 0.36rem;
              }
            }
            &:last-child {
              .departmentItemTitle {
                border-bottom: 1px solid #e5e5e5;
              }
            }
            .positionList {
              .positionItem {
                .positionItemTitle {
                  padding: 0 0.4rem;
                  height: 1rem;
                  .positionItemName {
                    font-size:0.3rem;
                  }
                  .positionItemInfo {
                    font-size:0.24rem;
                  }
                }
                .detail {
                  padding: 0 0.4rem;
                  font-size:0.26rem;
                  line-height:0.37rem;
                  padding-bottom: 0.5rem;
                  h3 {
                    font-weight: 500;
                    padding: 0.3rem 0 0.1rem 0;
                  }
                  a {
                    width:2.4rem;
                    height:0.8rem;
                    border-radius:0.08rem;
                    margin-top: 0.5rem;
                    font-size:0.3rem;
                    line-height:0.8rem;
                    border: 0.02rem solid rgba(0,161,223,1);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>