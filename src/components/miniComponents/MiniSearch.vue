<template>
  <div class="main">
    <div class="head">
      Tips
    </div>
    <div class="content">
      <span>You can search for published articles</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MiniHome'
}
</script>

<style scoped lang="less">
  .main {
    width: 230px;
    height: 300px;
    color: rgb(167, 164, 164);
    // background-color: rgb(220, 218, 218);
    .head {
      width: 200px;
      height: 50px;
      line-height: 50px;
      margin: 10px auto ;
      font-size: 30px;
      text-align: center;
    }
    .content {
      width: 200px;
      height: 200px;
      text-align: center;
      margin: 50px auto ;
    }
  }
</style>
