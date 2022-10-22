<template>
  <div id="app">
<!--     <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/> -->
    <IndexPage></IndexPage>
  </div>
</template>

<script>
import IndexPage from '@/components/IndexPage'

export default {
  components: {
    IndexPage
  }
}
</script>
<style lang="less">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
ul, ol {
  list-style: none;
}
a {
  text-decoration: none;
}
.clearfix::before,
.clearfix::after {
  content: "";
  display: table;
}
.clearfix::after {
  clear: both;
}
</style>
