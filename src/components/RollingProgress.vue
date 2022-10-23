<template>
  <div :class=" isshow ? 'show' : 'main'">
    <div class="scroll" >
      <i class="iconfont icon-xiangshangjiantoucuxiao"></i>
      <span>{{ percent }} %</span>
    </div>
  </div>

</template>

<script>
export default {
  name: 'RollingProgress',
  data () {
    return {
      percent: 0,
      isshow: false // 控制组件显示与隐藏
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll) // 监听页面滚动
  },
  methods: {
    // 获取页面滚动距离
    handleScroll () {
      const scrollTop = window.pageYOffset
      this.isshow = true
      if (scrollTop === 0) {
        this.isshow = false
      }
      this.percent = Math.ceil((scrollTop / 581) * 100)
    }
  }
}
</script>

<style scoped lang="less">
.main {
  visibility: hidden;
}
.show {
  visibility: visible;
}
.scroll {
  display: flex;
  position: fixed;
  right: 10px;
  bottom: 50px;
  width: 60px;
  height: 25px;
  color: white;
  font-size: 12px;
  background-color: #888;
  text-align: center;
  line-height: 25px;
  i {
    margin-right: 0px;
  }
  span {
    width: 80px;
  }
}
</style>
