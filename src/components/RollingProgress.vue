<template>
  <div class="scroll">
    <i class="iconfont icon-xiangshangjiantoucuxiao"></i>
    <span>{{ percent }} %</span>
  </div>
</template>

<script>
export default {
  name: 'RollingProgress',
  data () {
    return {
      percent: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll) // 监听页面滚动
  },
  methods: {
    // 获取页面滚动距离
    handleScroll (e) {
      setTimeout(() => {
        const scrollTop = window.pageYOffset
        this.percent = Math.ceil((scrollTop / 581) * 100)
        console.log(this.percent)
      }, 100)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.scroll {
  display: flex;
  position: fixed;
  right: 10px;
  bottom: 20px;
  width: 60px;
  height: 25px;
  color: white;
  font-size: 12px;
  background-color: #888;
  text-align: center;
  line-height: 25px;
  i {
    margin-right: 8px;
  }
  span {
    width: 100px;
  }
}
</style>
