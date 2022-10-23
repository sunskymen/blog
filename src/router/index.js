import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

// 重写原型对象push, replace方法
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function (option, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, option, resolve, reject)
  } else {
    originPush.call(this, option, () => { }, () => { })
  }
}
VueRouter.prototype.replace = function (option, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, option, resolve, reject)
  } else {
    originReplace.call(this, option, () => { }, () => { })
  }
}

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

export default router
