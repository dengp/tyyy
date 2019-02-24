<template>
  <div class="main">
    <Header :current="3" />
    <div class="con">
      <div class="titleBox">
        <h1>加入我们</h1>
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
                    <span v-for="(workItem, n) in positionItem.work" :key="n">{{n+1}}、{{workItem}}</span>
                  </p>
                  <h3>工作要求:</h3>
                  <span v-for="(requestItem, m) in positionItem.request" :key="m">{{m+1}}、{{requestItem}}</span>
                  <a href="javascript:;">投递简历</a>
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
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      departmentList: [
        {
          name: '技术部',
          list: [
            {
              name: 'iOS工程师',
              local: '北京',
              num: '3',
              time: '2019-01-01',
              work: [
                '负责核心项目的开发和维护',
                '负责APP开发过程中的资源调整，和产品评审',
                '负责团队内技术辅导和团队内成员成长'
              ],
              request: [
                '3年以上iOS开发经验，有大型互联网工作经验者优先',
                '对网络框架AFNetworking, SDWebImage有一定的了解；对设计模式MVC, MVVM有自己的理解',
                '对APP性能检测，Crash方案，无埋点方案有一定的认知；对APP架构，解耦方案等有一定的认知'
              ]
            },
            {
              name: 'Android工程师',
              local: '北京',
              num: '3',
              time: '2019-01-01',
              work: [
                '负责核心项目的开发和维护',
                '负责APP开发过程中的资源调整，和产品评审',
                '负责团队内技术辅导和团队内成员成长'
              ],
              request: [
                '3年以上iOS开发经验，有大型互联网工作经验者优先',
                '对网络框架AFNetworking, SDWebImage有一定的了解；对设计模式MVC, MVVM有自己的理解',
                '对APP性能检测，Crash方案，无埋点方案有一定的认知；对APP架构，解耦方案等有一定的认知'
              ]
            },
            {
              name: 'Java工程师',
              local: '四川成都',
              num: '若干',
              time: '2019-01-01',
              work: [
                '负责核心项目的开发和维护',
                '负责APP开发过程中的资源调整，和产品评审',
                '负责团队内技术辅导和团队内成员成长'
              ],
              request: [
                '3年以上iOS开发经验，有大型互联网工作经验者优先',
                '对网络框架AFNetworking, SDWebImage有一定的了解；对设计模式MVC, MVVM有自己的理解',
                '对APP性能检测，Crash方案，无埋点方案有一定的认知；对APP架构，解耦方案等有一定的认知'
              ]
            },
            {
              name: 'PHP工程师',
              local: '北京',
              num: '10',
              time: '2019-01-01',
              work: [
                '负责核心项目的开发和维护',
                '负责APP开发过程中的资源调整，和产品评审',
                '负责团队内技术辅导和团队内成员成长'
              ],
              request: [
                '3年以上iOS开发经验，有大型互联网工作经验者优先',
                '对网络框架AFNetworking, SDWebImage有一定的了解；对设计模式MVC, MVVM有自己的理解',
                '对APP性能检测，Crash方案，无埋点方案有一定的认知；对APP架构，解耦方案等有一定的认知'
              ]
            }
          ]
        },
        {
          name: '人力资源部',
          list: [
            {
              name: 'iOS工程师',
              local: '北京',
              num: '3',
              time: '2019-01-01',
              work: [
                '负责核心项目的开发和维护',
                '负责APP开发过程中的资源调整，和产品评审',
                '负责团队内技术辅导和团队内成员成长'
              ],
              request: [
                '3年以上iOS开发经验，有大型互联网工作经验者优先',
                '对网络框架AFNetworking, SDWebImage有一定的了解；对设计模式MVC, MVVM有自己的理解',
                '对APP性能检测，Crash方案，无埋点方案有一定的认知；对APP架构，解耦方案等有一定的认知'
              ]
            },
            {
              name: 'Android工程师',
              local: '北京',
              num: '3',
              time: '2019-01-01',
              work: [
                '负责核心项目的开发和维护',
                '负责APP开发过程中的资源调整，和产品评审',
                '负责团队内技术辅导和团队内成员成长'
              ],
              request: [
                '3年以上iOS开发经验，有大型互联网工作经验者优先',
                '对网络框架AFNetworking, SDWebImage有一定的了解；对设计模式MVC, MVVM有自己的理解',
                '对APP性能检测，Crash方案，无埋点方案有一定的认知；对APP架构，解耦方案等有一定的认知'
              ]
            },
            {
              name: 'Java工程师',
              local: '四川成都',
              num: '若干',
              time: '2019-01-01',
              work: [
                '负责核心项目的开发和维护',
                '负责APP开发过程中的资源调整，和产品评审',
                '负责团队内技术辅导和团队内成员成长'
              ],
              request: [
                '3年以上iOS开发经验，有大型互联网工作经验者优先',
                '对网络框架AFNetworking, SDWebImage有一定的了解；对设计模式MVC, MVVM有自己的理解',
                '对APP性能检测，Crash方案，无埋点方案有一定的认知；对APP架构，解耦方案等有一定的认知'
              ]
            },
            {
              name: 'PHP工程师',
              local: '北京',
              num: '10',
              time: '2019-01-01',
              work: [
                '负责核心项目的开发和维护',
                '负责APP开发过程中的资源调整，和产品评审',
                '负责团队内技术辅导和团队内成员成长'
              ],
              request: [
                '3年以上iOS开发经验，有大型互联网工作经验者优先',
                '对网络框架AFNetworking, SDWebImage有一定的了解；对设计模式MVC, MVVM有自己的理解',
                '对APP性能检测，Crash方案，无埋点方案有一定的认知；对APP架构，解耦方案等有一定的认知'
              ]
            }
          ]
        },
        {
          name: '市场部',
          list: [
            {
              name: 'iOS工程师',
              local: '北京',
              num: '3',
              time: '2019-01-01',
              work: [
                '负责核心项目的开发和维护',
                '负责APP开发过程中的资源调整，和产品评审',
                '负责团队内技术辅导和团队内成员成长'
              ],
              request: [
                '3年以上iOS开发经验，有大型互联网工作经验者优先',
                '对网络框架AFNetworking, SDWebImage有一定的了解；对设计模式MVC, MVVM有自己的理解',
                '对APP性能检测，Crash方案，无埋点方案有一定的认知；对APP架构，解耦方案等有一定的认知'
              ]
            },
            {
              name: 'Android工程师',
              local: '北京',
              num: '3',
              time: '2019-01-01',
              work: [
                '负责核心项目的开发和维护',
                '负责APP开发过程中的资源调整，和产品评审',
                '负责团队内技术辅导和团队内成员成长'
              ],
              request: [
                '3年以上iOS开发经验，有大型互联网工作经验者优先',
                '对网络框架AFNetworking, SDWebImage有一定的了解；对设计模式MVC, MVVM有自己的理解',
                '对APP性能检测，Crash方案，无埋点方案有一定的认知；对APP架构，解耦方案等有一定的认知'
              ]
            },
            {
              name: 'Java工程师',
              local: '四川成都',
              num: '若干',
              time: '2019-01-01',
              work: [
                '负责核心项目的开发和维护',
                '负责APP开发过程中的资源调整，和产品评审',
                '负责团队内技术辅导和团队内成员成长'
              ],
              request: [
                '3年以上iOS开发经验，有大型互联网工作经验者优先',
                '对网络框架AFNetworking, SDWebImage有一定的了解；对设计模式MVC, MVVM有自己的理解',
                '对APP性能检测，Crash方案，无埋点方案有一定的认知；对APP架构，解耦方案等有一定的认知'
              ]
            },
            {
              name: 'PHP工程师',
              local: '北京',
              num: '10',
              time: '2019-01-01',
              work: [
                '负责核心项目的开发和维护',
                '负责APP开发过程中的资源调整，和产品评审',
                '负责团队内技术辅导和团队内成员成长'
              ],
              request: [
                '3年以上iOS开发经验，有大型互联网工作经验者优先',
                '对网络框架AFNetworking, SDWebImage有一定的了解；对设计模式MVC, MVVM有自己的理解',
                '对APP性能检测，Crash方案，无埋点方案有一定的认知；对APP架构，解耦方案等有一定的认知'
              ]
            }
          ]
        },
        {
          name: '销售管理部',
          list: [
            {
              name: 'iOS工程师',
              local: '北京',
              num: '3',
              time: '2019-01-01',
              work: [
                '负责核心项目的开发和维护',
                '负责APP开发过程中的资源调整，和产品评审',
                '负责团队内技术辅导和团队内成员成长'
              ],
              request: [
                '3年以上iOS开发经验，有大型互联网工作经验者优先',
                '对网络框架AFNetworking, SDWebImage有一定的了解；对设计模式MVC, MVVM有自己的理解',
                '对APP性能检测，Crash方案，无埋点方案有一定的认知；对APP架构，解耦方案等有一定的认知'
              ]
            },
            {
              name: 'Android工程师',
              local: '北京',
              num: '3',
              time: '2019-01-01',
              work: [
                '负责核心项目的开发和维护',
                '负责APP开发过程中的资源调整，和产品评审',
                '负责团队内技术辅导和团队内成员成长'
              ],
              request: [
                '3年以上iOS开发经验，有大型互联网工作经验者优先',
                '对网络框架AFNetworking, SDWebImage有一定的了解；对设计模式MVC, MVVM有自己的理解',
                '对APP性能检测，Crash方案，无埋点方案有一定的认知；对APP架构，解耦方案等有一定的认知'
              ]
            },
            {
              name: 'Java工程师',
              local: '四川成都',
              num: '若干',
              time: '2019-01-01',
              work: [
                '负责核心项目的开发和维护',
                '负责APP开发过程中的资源调整，和产品评审',
                '负责团队内技术辅导和团队内成员成长'
              ],
              request: [
                '3年以上iOS开发经验，有大型互联网工作经验者优先',
                '对网络框架AFNetworking, SDWebImage有一定的了解；对设计模式MVC, MVVM有自己的理解',
                '对APP性能检测，Crash方案，无埋点方案有一定的认知；对APP架构，解耦方案等有一定的认知'
              ]
            },
            {
              name: 'PHP工程师',
              local: '北京',
              num: '10',
              time: '2019-01-01',
              work: [
                '负责核心项目的开发和维护',
                '负责APP开发过程中的资源调整，和产品评审',
                '负责团队内技术辅导和团队内成员成长'
              ],
              request: [
                '3年以上iOS开发经验，有大型互联网工作经验者优先',
                '对网络框架AFNetworking, SDWebImage有一定的了解；对设计模式MVC, MVVM有自己的理解',
                '对APP性能检测，Crash方案，无埋点方案有一定的认知；对APP架构，解耦方案等有一定的认知'
              ]
            }
          ]
        },
        {
          name: '产品运营部',
          list: [
            {
              name: 'iOS工程师',
              local: '北京',
              num: '3',
              time: '2019-01-01',
              work: [
                '负责核心项目的开发和维护',
                '负责APP开发过程中的资源调整，和产品评审',
                '负责团队内技术辅导和团队内成员成长'
              ],
              request: [
                '3年以上iOS开发经验，有大型互联网工作经验者优先',
                '对网络框架AFNetworking, SDWebImage有一定的了解；对设计模式MVC, MVVM有自己的理解',
                '对APP性能检测，Crash方案，无埋点方案有一定的认知；对APP架构，解耦方案等有一定的认知'
              ]
            },
            {
              name: 'Android工程师',
              local: '北京',
              num: '3',
              time: '2019-01-01',
              work: [
                '负责核心项目的开发和维护',
                '负责APP开发过程中的资源调整，和产品评审',
                '负责团队内技术辅导和团队内成员成长'
              ],
              request: [
                '3年以上iOS开发经验，有大型互联网工作经验者优先',
                '对网络框架AFNetworking, SDWebImage有一定的了解；对设计模式MVC, MVVM有自己的理解',
                '对APP性能检测，Crash方案，无埋点方案有一定的认知；对APP架构，解耦方案等有一定的认知'
              ]
            },
            {
              name: 'Java工程师',
              local: '四川成都',
              num: '若干',
              time: '2019-01-01',
              work: [
                '负责核心项目的开发和维护',
                '负责APP开发过程中的资源调整，和产品评审',
                '负责团队内技术辅导和团队内成员成长'
              ],
              request: [
                '3年以上iOS开发经验，有大型互联网工作经验者优先',
                '对网络框架AFNetworking, SDWebImage有一定的了解；对设计模式MVC, MVVM有自己的理解',
                '对APP性能检测，Crash方案，无埋点方案有一定的认知；对APP架构，解耦方案等有一定的认知'
              ]
            },
            {
              name: 'PHP工程师',
              local: '北京',
              num: '10',
              time: '2019-01-01',
              work: [
                '负责核心项目的开发和维护',
                '负责APP开发过程中的资源调整，和产品评审',
                '负责团队内技术辅导和团队内成员成长'
              ],
              request: [
                '3年以上iOS开发经验，有大型互联网工作经验者优先',
                '对网络框架AFNetworking, SDWebImage有一定的了解；对设计模式MVC, MVVM有自己的理解',
                '对APP性能检测，Crash方案，无埋点方案有一定的认知；对APP架构，解耦方案等有一定的认知'
              ]
            }
          ]
        }
      ]
    };
  },
  mounted() {
    this.initDeparmentList();
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
      this.departmentList.forEach(element => {
        const arr = [];
        element.list.forEach(thisItem => {
          const obj = Object.assign({flag: false}, thisItem);
          arr.push(obj);
        });
        element.list = arr;
        const item = Object.assign({flag: false}, element);
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
}
@media screen and (max-width: 750px) {
  .main {
    width: 100%;
    padding-top: 1.2rem;
    .con {
      background: #ffffff;
      .titleBox {
        width:7.5rem;
        height:1.8rem;
        background:url("~assets/images/join/titlePic.png");
        background-size: 100%;
        h1 {
          font-size: 0.42rem;
          font-weight:400;
          color:rgba(51,51,51,1);
          line-height: 1.8rem;
          text-align: center;
          margin-bottom: 0.2rem;
        }
      }
      .conWrap {
        .departmentList {
          .departmentItem {
            color: rgba(51, 51, 51, 1);
            .departmentItemTitle {
              padding: 0 0.4rem;
              height: 1rem;
              display: flex;
              justify-content: space-between;
              align-items: center;
              border-bottom: 1px solid #e5e5e5;
              .departmentItemName {
                font-size:0.28rem;
                font-weight: 600;
              }
              .icon_close {
                width: 0.36rem;
                height: 0.36rem;
                background: url("~assets/images/join/icon_close.png");
                background-size: 100%;
              }
              .icon_open {
                background: url("~assets/images/join/icon_open.png");
                background-size: 100%;
              }
            }
            .positionList {
              .positionItem {
                .positionItemTitle {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  padding: 0 0.4rem;
                  height: 1rem;
                  background: rgba(250, 250, 250, 1);
                  border-bottom: 1px solid #e5e5e5;
                  .positionItemName {
                    font-size:0.3rem;
                    &.active {
                      color: #00A1DF;
                    }
                  }
                  .positionItemInfo {
                    font-size:0.24rem;
                  }
                }
                .detail {
                  background: #ffffff;
                  padding: 0 0.4rem;
                  border-bottom: 1px solid #e5e5e5;
                  font-size:0.26rem;
                  line-height:0.37rem;
                  padding-bottom: 0.5rem;
                  h3 {
                    font-weight: 500;
                    padding: 0.3rem 0 0.1rem 0;
                  }
                  span {
                    display: block;
                  }
                  a {
                    display: block;
                    width:2.4rem;
                    height:0.8rem;
                    background:rgba(255,255,255,1);
                    border-radius:0.08rem;
                    border: 0.02rem solid rgba(0,161,223,1);
                    margin-top: 0.5rem;
                    font-size:0.3rem;
                    color:rgba(0,161,223,1);
                    line-height:0.8rem;
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
}
</style>