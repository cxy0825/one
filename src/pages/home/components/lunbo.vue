<template>
  <div id="lunbo">
    <el-carousel class="carousel" :interval="2000">
      <el-carousel-item v-for="item in list" :key="item">
        <div class="content">
          <img :src="item" />
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        require("@/assets/home/lb1.jpg"),
        require("@/assets/home/lb2.png"),
        "https://shp.qpic.cn/cfwebcap/0/e9ef001e2ec8ecc117f0f9456f5cb053/0/?width=1920&height=818",
        "https://shp.qpic.cn/cfwebcap/0/1f3ba523da668f1905ac4826312a8e7c/0/?width=1920&height=1080",
      ],
    };
  },
};
</script>
<style lang="css" scoped>
#lunbo {
  position: relative;
  overflow: hidden;
  margin: 0;
}
.carousel {
  height: 80vh;
}
.content {
  height: 100%;
}
.content img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
#lunbo >>> .el-carousel__container {
  height: 100%;
}
#lunbo >>> .el-carousel__button {
  height: 6px;
  background-color: rgb(0, 0, 0);
  border-radius: 4px;
}
</style>
