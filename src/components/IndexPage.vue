<template>
<div class="main">
  <div class="index">
    <div class="left">
      <div class="top">
        <div class="text">
          <div><a>个人博客</a></div>
          <div>Programming is an art</div>
        </div>
        <div class="nav clearfix">
          <ul class="menu">
            <li class="menu-item" @click="handleToHome">
              <a><i class="iconfont icon-kehuleixing"></i>个人中心</a>
            </li>
            <li class="menu-item" @click="handleToArticle">
              <a><i class="iconfont icon-Bars"></i>文章</a>
            </li>
            <li class="menu-item" @click="handleToSearch">
              <a><i class="iconfont icon-Search"></i>搜索</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="floor">
        <MiniHome v-if="showMiniComponents === 0"></MiniHome>
        <MiniArticle v-if="showMiniComponents === 1"></MiniArticle>
        <MiniSearch v-if="showMiniComponents === 2"></MiniSearch>
      </div>
    </div>
    <div class="right">
        <router-view></router-view>
    </div>
  </div>
  <RollingProgress></RollingProgress>
  <FloorView></FloorView>
</div>
</template>

<script>
import RollingProgress from '@/components/RollingProgress.vue'
import FloorView from '@/components/FloorView.vue'
import MiniHome from '@/components/miniComponents/MiniHome.vue'
import MiniArticle from '@/components/miniComponents/MiniArticle'
import MiniSearch from '@/components/miniComponents/MiniSearch.vue'
export default {
  name: 'IndexPage',
  data () {
    return {
      showMiniComponents: 0 // 控制小组件显示与隐藏
    }
  },
  mounted () {
    // 请求数据存储vuex中
    this.$store.dispatch('getTotalList')
    this.$store.dispatch('getMyArticleList')
  },
  methods: {
    // 跳转home路由
    handleToHome () {
      this.showMiniComponents = 0
      this.$router.push({
        name: 'home'
      })
    },
    // 跳转article路由
    handleToArticle () {
      // miniArticle小组件显示
      this.showMiniComponents = 1
      this.$router.push({
        name: 'article'
      })
    },
    // 跳转search路由
    handleToSearch () {
      // miniSearch小组件显示
      this.showMiniComponents = 2
      this.$router.push({
        name: 'search'
      })
    }
  },
  components: {
    RollingProgress,
    FloorView,
    MiniSearch,
    MiniHome,
    MiniArticle
  }
}
</script>

<style lang="less" scoped>
  .index {
    display: flex;
    width: 1200px;
    margin: 0 auto;
    .left {
      width: 230px;
      .top {
        width: 230px;
        height: 300px;
        box-shadow: 1px 1px 5px rgb(212, 212, 212);
        .text {
          height: 110px;
          padding-top: 10px;
          background-color: #222;
          div {
            height: 40px;
            line-height: 50px;
            text-align: center;
            font-size: 16px;
            color: #ddd;
          }
          div:nth-child(1) {
            color: #fff;
            font-size: 25px;
          }
        }
        .nav {
          height: 200px;
          // background-color: pink;
          .menu {
            height: 100px;
            margin: 40px 0;
            .menu-item {
              height: 40px;
              line-height: 40px;
              padding-left: 20px;
              color: #222;
              a i {
                margin-right: 10px;
              }
            }
            .menu-item:hover {
              background-color: rgb(237, 234, 234);
              cursor: pointer;
            }
          }
        }
      }
      .floor {
        position: sticky;
        top: 10px;
        height: 300px;
        width: 230px;
        box-shadow: 1px 1px 5px rgb(212, 212, 212);
        margin-top: 10px;
        // background-color: #999;
      }
    }
    .right {
      flex: 1;
      margin-left: 10px;
      height: 1000px;
      background-color: white;
      box-shadow: 1px 1px 5px #888;
      overflow: scroll;
    }
    .right::-webkit-scrollbar {
      /*隐藏滚轮*/
      display: none;
    }
  }
</style>
