<template>
  <div id="home">
    <div class="top">
      <el-row :span="24">
        <el-col :md="6" :offset="0"
          ><el-link type="primary" href="./home.html" target="_self"
            >首页</el-link
          >
        </el-col>
        <el-col :md="6" :offset="0"
          ><el-link type="primary" href="./home.html" target="_self"
            >Home</el-link
          ></el-col
        >
      </el-row>
    </div>
    <lunbo></lunbo>
    <tuijian></tuijian>
    <vi></vi>
    <tuijian2></tuijian2>
  </div>
</template>

<script>
import lunbo from "./components/lunbo.vue";
import tuijian from "./components/tuijian.vue";
import tuijian2 from "./components/tuijian2.vue";
import vi from "./components/video.vue";
export default {
  name: "home",
  components: {
    lunbo,
    tuijian,
    tuijian2,
    vi,
  },
};
</script>

<style scoped>
.top {
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  height: 50px;
  z-index: 10000;
}
.el-col {
  height: 50px;
}
.el-col >>> .el-link {
  color: white;
  line-height: 50px;
  width: 100%;
}
.el-col >>> .el-link:hover {
  color: cornflowerblue;
}
</style>
