<template>
  <div class="floor">
    <div class="content">
      <P>© 2014 – 2022  NexT</P>
      <P>Powered by Hexo & NexT.Gemini</P>
      <P>Website source code here</P>
      </div>
  </div>
</template>

<script>
export default {
  name: 'FloorView'
}
</script>

<style scoped lang="less">
.floor {
  width: 1200px;
  height: 100px;
  margin: 0 auto;
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 500px;
    height: 100px;
    text-align: center;
    margin: 10px auto;
    color: rgb(39, 36, 36);
    font-size: 13px;
  }
}
</style>
