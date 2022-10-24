<template>
  <div class="home">
    <div class="head">
      <span>我的文章</span>
      <i class="iconfont icon-Edit" @click="addArticle"></i>
    </div>
    <!-- 文章组件 -->
    <div v-if="!isShowDialog" class="content">
      <MyArticle :list='myList' :pageCurrent="pageCurrent" :pageSize="pageSize"></MyArticle>
    </div>

    <!-- 弹出框,添加文章 -->
    <div v-else class="dialog">
      <form class="form">
        <div class="title">
          <span>文章标题</span>
          <input type="text" v-model="saveTitle">
        </div>
        <div class="date">
          <span>日期</span>
          <input type="date" v-model="saveDate">
        </div>
        <div class="tags">
          <span>添加标签</span>
          <input type="text"  v-model="saveTags">
          <button @click.prevent="addTags">添加</button>
        </div>
        <div class="tag">
          <div class="tag-item" v-for="(item, index) in tagsList" :key="index">
              <span>{{item}}</span>
              <i class="iconfont icon-a-xSolid" :value="item" @click.prevent="removeTag(item)"></i>
          </div>
        </div>
        <div class="text">
          <span>内容</span>
          <textarea v-model="saveContent"></textarea>
        </div>
        <div class="btn">
          <button @click.prevent="submit">提交</button>
          <button @click.prevent="keepAddArticle">保存草稿</button>
          <button @click.prevent="cancelAddArticle">取消</button>
        </div>
      </form>
    </div>

    <!-- 分页器 -->
    <div v-show="!isShowDialog" class="pagination">
      <button v-show="pageCurrent!==1" @click="SubPageCurrent">上一页</button>
      <button v-for="(item, index) in pageCount" :key="index" @click="changePageCurrent(item)" :class="{ active: item == pageCurrent }">{{item}}</button>
      <button v-show="pageCurrent!==pageCount" @click="AddPageCurrent">下一页</button>
      <button>共{{pageTotal}}条数据</button>
    </div>
  </div>
</template>

<script>
import MyArticle from '@/views/MyArticle/MyArticle'
import { mapState } from 'vuex'
export default {
  name: 'HomeView',
  data () {
    return {
      myList: [],
      isShowDialog: false,
      saveTitle: '',
      saveTags: '',
      saveDate: '',
      saveContent: '',
      tagsList: [],
      pageTotal: '',
      pageCurrent: 1,
      pageSize: 2,
      pageCount: '',
      paginationActive: 0
    }
  },
  mounted () {
  },
  computed: {
    ...mapState(['MyArticleList'])
  },
  methods: {
    // 点击添加文章
    addArticle () {
      // 显示对话框
      this.isShowDialog = true
    },
    // 取消添加文章
    cancelAddArticle () {
      this.isShowDialog = false
      this.saveTitle = ''
      this.saveTags = ''
      this.saveDate = ''
      this.saveContent = ''
      this.tagsList = []
    },
    // 点击保存草稿
    keepAddArticle () {
      this.isShowDialog = false
    },
    // 点击添加标签
    addTags () {
      if (this.saveTags.trim() !== '') {
        this.tagsList.push(this.saveTags)
      }
    },
    // 删除标签
    removeTag (e) {
      const index = this.tagsList.indexOf(e)
      this.tagsList.splice(index, 1)
    },
    // 提交文章
    submit () {
      // 收集参数对象
      const obj = {}
      obj.id = Date.now()
      obj.title = this.saveTitle
      obj.date = this.saveDate
      obj.tags = this.tagsList
      obj.content = this.saveContent
      obj.comment = []
      // 通知仓库添加数据
      this.$store.commit('addArticle', obj)
      // 关闭对话框
      this.isShowDialog = false
      this.saveTitle = ''
      this.saveTags = ''
      this.saveDate = ''
      this.saveContent = ''
      this.tagsList = []
    },
    // 点击页码切换
    changePageCurrent (index) {
      this.pageCurrent = index
    },
    // 点击上一页
    SubPageCurrent () {
      this.pageCurrent = this.pageCurrent - 1
    },
    // 点击下一页
    AddPageCurrent () {
      this.pageCurrent = this.pageCurrent + 1
    }
  },
  watch: {
    // 立即监听vuex中MyArticleList的数据
    MyArticleList: {
      handler (news) {
        this.myList = news
        this.pageTotal = this.myList.length
        this.pageCount = Math.ceil(this.pageTotal / this.pageSize)
      },
      immediate: true
    }
  },
  components: {
    MyArticle
  }
}
</script>

<style scoped lang='less'>
@keyframes iconMove
    {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.2);
    }
}
.head {
  position: relative;
  margin-top: 20px;
  text-align: center;
  color: #888;
  span {
    font-size: 50px;
    transform: 0.3s;
  }
  span:hover {
    border-bottom: 1px solid #888;
  }
  i {
    position: absolute;
    top: 10px;
    right: 30px;
    font-size: 50px;
    cursor: pointer;
  }
  i:hover {
    color: pink;
    animation: iconMove 1s infinite;
  }
}
.dialog {
  width: 800px;
  height: 800px;
  margin: 50px auto;
  padding: 30px 50px;
  border-radius: 20px;
  box-shadow: 2px 2px 5px #888;
  background-color: rgb(201, 198, 198);
  .form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 25px;
    .title {
      height: 60px;
      line-height: 60px;
      input {
        padding: 0 20px;
        width: 300px;
        height: 35px;
        margin-left: 30px;
        font-size: 20px;
        text-align: center;
      }
    }
    .date {
      height: 60px;
      line-height: 60px;
      input {
        text-align: center;
        padding: 0 20px;
        width: 300px;
        height: 35px;
        margin-left: 80px;
        font-size: 20px;
      }
    }
    .tags {
      display: flex;
      align-items: center;
      height: 60px;
      line-height: 60px;
      input {
        width: 300px;
        height: 35px;
        padding: 0 20px;
        margin-left: 30px;
        text-align: center;
      }
      button {
        width: 50px;
        height: 30px;
        margin-left: 10px;
      }
    }
    .tag {
        display: flex;
        height: 30px;
        line-height: 30px;
        margin: 10px 20px;
        .tag-item {
          display: flex;
          justify-content: space-between;
          margin-left: 10px;
          padding: 0 5px;
          border-radius: 10px;
          background-color: rgb(245, 244, 244);
          span {
            font-size: 16px;
          }
          i {
            margin-left: 5px;
            color: rgb(211, 207, 207);
          }
          i:hover {
            color: rgb(247, 190, 190);
          }
        }
      }
    .text {
      display: flex;
      height: 300px;
      line-height: 60px;
      span {
        width: 100px;
      }
      textarea {
        width: 500px;
        height: 300px;
        margin-left: 30px;
        padding: 20px;
        font-size: 20px;
        outline: none;
      }
    }
    .btn {
      text-align: center;
      margin: 10px;
      button {
        width: 100px;
        height: 30px;
        margin: 30px 10px;
      }
    }
  }

}
.home {
  position: relative;
  height: 97%;
}
.pagination {
  position: absolute;
  left: 330px;
  bottom: 2px;
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    text-align: center;
    border: 0;
    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
.active {
  background-color: skyblue;
}
</style>
