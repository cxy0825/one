<template>
  <div id="tuijian2">
    <div class="title">视频推荐</div>
    <el-row justify="center">
      <el-col :sm="11" :md="13" class="video" style="margin-right: 10px">
        <el-row
          v-for="item in 6"
          :key="item"
          :class="{ item: true, reverse: item % 2 ? true : false }"
        >
          <el-col :xs="5" :sm="5" :md="4" :offset="0" class="img">
            <img
              src="https://i0.hdslb.com/bfs/archive/a4d48f374b9eb9baf23f4b1f1e307597eecb0e1f.jpg@400w_250h_1c.webp"
              alt=""
            />
          </el-col>
          <el-col :xs="19" :sm="19" :md="20" :offset="0" class="content">
            <a
              class="title"
              href="https://www.bilibili.com/video/BV1tP4y1G7qy?from=search&seid=5178384154002000526&spm_id_from=333.337.0.0"
              target="_blank"
            >
              【原神】角色up复刻预测分析
              钟离万叶会不会在2.5复刻？八重绫人什么时候出？
            </a>
            <div class="t">
              杂谈视频听一乐就行，虽然没有准确消息但基本不会差太多，
              视频里提到的角色估计都会在明年须弥前登场无非是顺序问题
              一切请以官方消息
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :sm="7" :md="7" class="paihang">
        <div class="ti">排行榜</div>
        <div class="more">
          <p>暂无排名</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="css" scoped>
#tuijian2 {
  margin-top: 20px;
}
#tuijian2 .title {
  margin-left: 10%;
  color: rgb(105, 105, 105);
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
}
.video .reverse {
  flex-direction: row-reverse !important;
}
.video .item {
  border-bottom: 1px solid #333;
  margin-bottom: 10px;
}
.video .item img {
  margin-bottom: 10px;
  width: 100%;
  object-fit: contain;
  border-radius: 6px;
  margin-right: 5px;
}

.video .item .content .title {
  display: block;
  width: 100%;
  margin: 5px !important;
  font-size: 16px !important;
  color: rgb(94, 43, 43) !important;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-decoration: none;
}
.video .item .content .title:hover {
  color: red !important;
}
.video .item .content .t {
  font-size: 13px;
  color: #333;
  text-indent: 2em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.paihang .ti {
  text-align: center;
  font-weight: 600;
  font-size: 22px;
}
.paihang .more {
  height: 100%;
  position: relative;
}
.paihang .more p {
  color: rgb(252 139 139);
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
}
</style>
