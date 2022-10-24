<template>
  <div class="main">
    <div v-for="item in list" :key="item.id" class="item" >
      <div class="item-title">
        {{item.title}}
      </div>
      <div class="item-date">
        {{item.date}}
      </div>
      <div class="item-tags" >
        <span v-for="(item,index) in item.tags" :key="index">
          {{item}}
        </span>
      </div>
      <div class="item-content">
        {{item.content}}
      </div>
            <div class="comment-outside">
        <div class="comment" v-for="(item, index) in item.comment" :key="index">
          <i class="iconfont icon-xiezuoren"></i>
          <div class="comment-text">
            <span>游客:</span>
            <span>{{item}}</span>
          </div>
      </div>
      </div>
      <div class="addComment">
        <div class="addComment-item">
          <input type="text" placeholder="请输入回车留下你的评论..." @keydown.enter="addComment(item.id, $event)">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MyArticle',
  data () {
    return {
    }
  },
  props: ['list'],
  methods: {
    // 添加评论处理函数
    addComment (id, e) {
      // 整理参数
      const obj = {
        id,
        value: e.target.value
      }
      // 通知仓库vuex更新评论
      this.$store.commit('updateComment', obj)
      // 清空输入框
      e.target.value = ''
    }
  }
}
</script>

<style scoped lang="less">
.main {
  width: 100%;
  margin-top: 50px;
  .item {
    position: relative;
    height: 400px;
    border-radius: 30px;
    border: 1px solid #999;
    margin: 10px;
    .item-title {
    height: 50px;
    margin: 5px auto;
    line-height: 50px;
    font-size: 25px;
    text-align: center;
    }
    .item-date {
      height: 50px;
      font-size: 15px;
      color: #999;
      text-align: center;
    }
    .item-tags {
      display: flex;
      justify-content: space-around;
      margin: 0 auto;
      width: 50%;
      height: 40px;
      text-align: center;
      span {
        width: 100px;
        height: 30px;
        line-height: 30px;
        border-radius: 20px;
        color: white;
        background-color: rgb(144, 201, 243);
      }
    }
    .item-content {
      width: 600px;
      height: 90px;
      margin: 20px auto;
    }
    .comment-outside {
      width: 600px;
      height: 90px;
      margin: 3px auto;
      overflow: scroll;
      .comment {
        display: flex;
        width: 600px;
        align-items: center;
        font-size: 12px;
        span {
          margin-left: 5px;
        }
      }
    }
    .comment-outside::-webkit-scrollbar {
      /*隐藏滚轮*/
      display: none;
    }

    .addComment {
      position: absolute;
      left: 160px;
      bottom: 2px;
      input {
        width: 600px;
        height: 30px;
        padding: 0 10px;
        font-size: 17px;
        box-shadow: 1px 1px 1px rgb(246, 245, 245);
        outline:none;
      }
    }
  }
}
</style>
