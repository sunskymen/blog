<template>
  <div class="main">
    <!-- 搜索框 -->
    <div v-if="!isShowArticle" class="search">
      <div class="top">
        <input type="text" v-model="keyWord" placeholder="请输入标题" @input="handlerToSearch">
        <i class="iconfont icon-a-xSolid icon-remove" @click="removeKeyword"></i>
        <i class="iconfont icon-Search icon-search"></i>
        <div class="close" @click="isShowArticle = !isShowArticle"></div>
      </div>
      <!-- 搜索历史 -->
      <!-- <div class="history">
        <div class="history-head">
          <div>搜索历史</div>
          <span>清空</span>
        </div>
        <div class="history-tags">
          <span></span>
        </div>
      </div> -->
      <div class="floor">
        <div class="search-result" v-for="item in myList" :key="item.id" @click="selectArticle(item)">
          <div class="title">
            {{item.title}}
          </div>
          <div class="tags" v-for="(item, index) in item.tags" :key="index">
            <span>{{item}}</span>
          </div>
          <i class="iconfont icon-a-EyeOpened"></i>
        </div>
      </div>
    </div>
    <!-- 渲染文章 -->
    <div v-if="isShowArticle" class="Article">
      <TotalArticle :list="showList"></TotalArticle>
    </div>
  </div>
</template>

<script>
import TotalArticle from '@/views/TotalArticle/TotalArticle'
import { mapState } from 'vuex'
export default {
  name: 'SearchView',
  data () {
    return {
      isShowArticle: false,
      keyWord: '',
      myList: [],
      showList: []
    }
  },
  components: {
    TotalArticle
  },
  methods: {
    // 监听input事件, 过滤数组
    handlerToSearch () {
      if (this.keyWord !== '') {
        this.myList = this.totalList.filter(item => item.title.indexOf(this.keyWord) !== -1)
      } else {
        this.myList = []
      }
    },
    // 清空输入框
    removeKeyword () {
      this.keyWord = ''
      this.myList = []
    },
    // 选中文章
    selectArticle (item) {
      // 传递对象
      this.showList.push(item)
      // 关闭对话框
      this.isShowArticle = true
    }
  },
  computed: {
    ...mapState(['totalList'])
  }
}
</script>

<style lang="less" scoped>
  .main {

    .search {
      display: flex;
      flex-direction: column;
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      margin: auto;
      width: 500px;
      height: 500px;
      background-color: rgb(231, 228, 228);
      .top {
        position: relative;
        height: 70px;
        line-height: 70px;
        text-align: center;
        overflow: hidden;
        input {
          padding: 0 35px;
          width: 300px;
          height: 40px;
          border-radius: 5px;
          outline:none;
        }
        .icon-search {
          position: absolute;
          top: 2px;
          right: 370px;
          font-size: 25px;
          color: rgb(165, 165, 165);
        }
        .icon-remove {
          position: absolute;
          top: 2px;
          right: 110px;
          font-size: 20px;
          color: rgb(205, 204, 204);
        }
        .icon-remove:hover {
          color: rgb(158, 154, 154);
        }
        .close {
          position: absolute;
          top: -20px;
          right: -20px;
          width: 50px;
          height: 50px;
          border-radius: 25px;
          background-color: pink;
          cursor: pointer;
        }
      }
      .floor {
        flex: 1;
        width: 500px;
        overflow: scroll;
        .search-result{
          position: relative;
          display: flex;
          width: 450px;
          height: 50px;
          margin: 0 25px;
          padding: 0 5px;
          line-height: 50px;
          border: 1px solid rgb(232, 230, 230);
          background-color: white;
          .title {
            font-size: 25px;
            margin-right: 10px;
          }
          .tags {
            display: flex;
            align-items: center;
            span {
              height: 30px;
              line-height: 30px;
              margin: 0 5px;
              padding: 0 5px;
              border-radius: 10px;
              background-color: pink;
            }
          }
          i {
              position: absolute;
              top: 0px;
              right: 20px;
              font-size: 25px;
              opacity: 0.5;
            }
        }
      }
      .floor::-webkit-scrollbar {
        /*隐藏滚轮*/
        display: none;
      }
    }
  }
</style>
