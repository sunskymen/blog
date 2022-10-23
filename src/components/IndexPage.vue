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
        <router-view></router-view>
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
export default {
  name: 'IndexPage',
  methods: {
    // 跳转home路由
    handleToHome () {
      this.$router.push({
        name: 'home'
      })
    },
    // 跳转article路由
    handleToArticle () {
      this.$router.push({
        name: 'article'
      })
    },
    // 跳转search路由
    handleToSearch () {
      this.$router.push({
        name: 'search'
      })
    }
  },
  components: {
    RollingProgress,
    FloorView
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
        background-color: pink;
      }
    }
    .right {
      flex: 1;
      margin-left: 10px;
      height: 1000px;
      background-color: aqua;
    }
  }
</style>
