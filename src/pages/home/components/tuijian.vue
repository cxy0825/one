<template>
  <div id="tuijian">
    <el-row justify="center" class="header">
      <el-col :span="24" :offset="0">
        <div class="t">为你推荐一些你感兴趣的</div>
        <div class="t2">根据你所想，为你提供更多的可能</div>
      </el-col>
    </el-row>

    <el-row justify="center" class="body">
      <el-col :md="9" style="margin-right: 20px">
        <div class="content">
          <img
            src="https://uploadstatic.mihoyo.com/contentweb/20211210/2021121019444711311.jpg"
            alt=""
          />
          <div class="text">
            <p class="title">《原神》获得了"TGA 2021 最佳移动游戏"奖项</p>
            <p class="t">
              《原神》是由米哈游自研的一款全新开放世界冒险RPG。你将在游戏中探索一个被称作「提瓦特」的幻想世界。
            </p>
          </div>
        </div>
      </el-col>
      <el-col :md="9">
        <div class="content">
          <img
            src="	https://shp.qpic.cn/cfwebcap/0/daa0e6c9f9f5e93f2a0c50d539ad4408/0/?width=686&height=368"
            alt=""
          />
          <div class="text">
            <p class="title">执事系列皮肤与执事通行证即将上线</p>
            <p class="t">
              昼之奢华，夜之优雅。12月10日10：00，执事系列新皮肤上线召唤师峡谷，欢迎加入这个充满权力和财富的执事世界
            </p>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row justify="center" class="footer">
      <el-col :md="6" style="margin-right: 10px">
        <div class="content">
          <img
            src="https://webstatic.mihoyo.com/upload/static-resource/2021/12/10/9d12f8c8a125dcb63057fc4af6503119_5821776486510294126.jpg"
            alt=""
          />
          <div class="text">
            <p class="title">晨练时间到了，要和我一起去登山吗？</p>
            <p class="t">
              海祇岛军的大将，被将士们称为「常胜的尖耳将军」的——五郎！一起来了解了解他吧。
            </p>
          </div>
        </div>
      </el-col>
      <el-col :md="6" style="margin-right: 10px">
        <div class="content">
          <img
            src="https://ossweb-img.qq.com/upload/adw/image/977/20211210/cd27b6d0734bddb766435ccf4498815d.jpeg"
            alt=""
          />
          <div class="text">
            <p class="title">激战全明星赢图标奖励</p>
            <p class="t">激战全明星赢图标奖励!</p>
          </div>
        </div>
      </el-col>
      <el-col :md="6">
        <div class="content">
          <img
            src="	https://ossweb-img.qq.com/upload/adw/image/977/20211209/70047a64e9bf40e1e9aea619759b4c70.jpeg"
            alt=""
          />
          <div class="text">
            <p class="title">LPL全明星周末</p>
            <p class="t">LPL全明星周末,全明星</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#tuijian {
  width: 100%;
  margin-top: 20px;
}
.header .t {
  text-align: center;
  font-size: 22px;
  font-weight: 900;
  font-family: 楷体;
  letter-spacing: 1px;
}
.header .t2 {
  text-align: center;
  font-size: 12px;
  color: rgb(134, 134, 134);
}
.body {
  margin-top: 20px;
}

.content img {
  width: 100%;
  height: 240px;
  /* object-fit: contain; */
}
.content .text {
  width: 90%;
  box-shadow: 0px 5px 8px rgb(0 0 0 / 50%);
  background-color: #fff;
  padding: 10px 15px;
  margin: 0 auto;
  transform: translateY(-25px);
  cursor: pointer;
  min-height: 90px;
}
.content .text .title {
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  cursor: pointer;
}
.content .text .t {
  margin-top: 10px;
  font-size: 12px;
  color: #333;
}
@media screen and (min-width: 768px) and(max-width:992px) {
  img {
    width: 60% !important;
    display: block;
    margin: 0 auto;
  }
  .content .text {
    width: 80% !important;
  }
}
</style>
