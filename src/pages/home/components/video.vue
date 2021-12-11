<template>
  <div id="vi">
    <div class="pp">国际大奖</div>
    <div class="content">
      <video
        src="https://webstatic.mihoyo.com/upload/static-resource/2021/12/10/c6bf92351a028e1012ce2bd4bc833e95_6218302398870607175.mp4"
        poster="https://uploadstatic.mihoyo.com/contentweb/20211210/2021121019444711311.jpg"
        controls
      ></video>
      <video
        src="https://webstatic.mihoyo.com/upload/static-resource/2021/12/10/c6bf92351a028e1012ce2bd4bc833e95_6218302398870607175.mp4"
        poster="https://uploadstatic.mihoyo.com/contentweb/20211210/2021121019444711311.jpg"
        controls
      ></video>
    </div>
  </div>
</template>
<style lang="css" scoped>
#vi {
  width: 100%;
  background-color: rgb(54, 86, 100);
}
.pp {
  width: 100%;
  text-align: center;
  font-size: 24px;
  color: white;
  margin-top: 10px;
  padding-top: 10px;
}
video {
  width: 50%;
  height: 300px;
}
#vi .content {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
