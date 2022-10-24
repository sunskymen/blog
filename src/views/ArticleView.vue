<template>
  <div class="main">
    <div class="head">
      <div class="head-date">
        <span>日期:</span>
        <input type="date" v-model="selectDate">
      </div>
      <div class="head-tag">
        <span>标签:</span>
        <input type="text" v-model="selectTag">
      </div>
      <div class="head-btn"><button @click="filterList">查询</button></div>
    </div>
    <div class="content">
      <TotalArticle :list="myList"></TotalArticle>
    </div>
  </div>
</template>

<script>
import TotalArticle from '@/views/TotalArticle/TotalArticle'
import { mapState } from 'vuex'
export default {
  name: 'ArticleView',
  components: {
    TotalArticle
  },
  data () {
    return {
      myList: [],
      selectDate: '',
      selectTag: '',
      totalList1: []
    }
  },
  mounted () {
  },
  methods: {
    // 查询过滤数据
    filterList () {
      // 判断是否存在日期
      if (this.selectDate) {
        // 判断是否存在标签
        if (this.selectTag) {
          // 同时存在
          this.myList = this.myList.filter(item => {
            if (this.selectDate === item.date && item.tags.indexOf(this.selectTag) !== -1) {
              return true
            }
            return false
          })
        } else {
          // 只有日期存在
          this.myList = this.myList.filter(item => this.selectDate === item.date)
        }
      } else {
        // 只有标签存在
        if (this.selectTag) {
          this.myList = this.myList.filter(item => item.tags.indexOf(this.selectTag) !== -1)
        } else {
          // 都不存在, 加载全部数据
          this.myList = this.totalList
        }
      }
    }
  },
  computed: {
    ...mapState(['totalList'])
  },
  watch: {
    totalList: {
      handler (news) {
        this.myList = news
      },
      immediate: true
    }
  }
}
</script>

<style lang="less" scoped>
  .main {
    .head {
      display: flex;
      justify-content: space-around;
      width: 80%;
      height: 50px;
      line-height: 50px;
      margin: 20px auto;
      border: 1px solid #999;
      background-color: rgb(243, 243, 243);
      border-radius: 25px;
      div {
        input {
          margin-left: 10px;
        }
      }
      .head-tag {
        display: flex;
        align-items: center;
        input {
          padding: 0 10px;
          height: 25px;
          width: 100px;
          outline: none;
        }
      }
      .head-btn {
        button {
          width: 60px;
          height: 30px;
          border-radius: 20px;
          border: 0;
          background-color: rgb(221, 221, 221);
          cursor: pointer;
        }
        button:hover {
          background-color: rgb(176, 173, 173);
        }
      }
    }
  }
</style>
