import Vue from 'vue'
import Vuex from 'vuex'
import { reqMyArticleList, reqTotalList } from '@/api/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    MyArticleList: [],
    totalList: []
  },
  getters: {
  },
  mutations: {
    // 存储我的文章
    GETMYARTICLELIST (state, data) {
      state.MyArticleList = data.myArticleList
    },
    // 存储全部文章
    GETTOTALLIST (state, data) {
      state.totalList = data.totalList
    },
    // 添加新文章
    addArticle (state, data) {
      state.MyArticleList.unshift(data)
      state.totalList.unshift(data)
    },
    // 更新评论
    updateComment (state, data) {
      state.MyArticleList.forEach(item => {
        if (item.id === data.id && item.comment.indexOf(data.value) === -1) {
          item.comment.push(data.value)
        }
      })
      state.totalList.forEach(item => {
        if (item.id === data.id && item.comment.indexOf(data.value) === -1) {
          item.comment.push(data.value)
        }
      })
    }
  },
  actions: {
    // 请求本地我的文章
    async getMyArticleList ({ commit }) {
      const dataList = await reqMyArticleList()
      commit('GETMYARTICLELIST', dataList.data)
    },
    // 请求本地全部文章
    async getTotalList ({ commit }) {
      const dataList = await reqTotalList()
      commit('GETTOTALLIST', dataList.data)
    }
  }
})
