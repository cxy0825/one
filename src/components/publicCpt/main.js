let time = null; //用来存放定时器的返回值
let alist = []; //用来存放实例
let list = []; //存放要绘制的数据的大小
let listTip = ["第一", "第二", "第三", "第四", "第五", "第六", "第七", "第八"];
let bigsize = 240;
let bisesize = 200;
let num = 4; //请求的数量
let temp = "";
let selectI = -1; //哪一个被选中 -1代表没有被鼠标选中
let canvas = document.querySelector(".canvas");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
ctx.textAlgin = "center";
ctx.font = "24px 微软雅黑";
ctx.fillText("正在获取数据中....", canvas.width / 2 - 80, canvas.height / 2);

getdata();

//从服务器获得数据
function getdata() {
  fetch("http://101.132.242.117/api/rand.php?num=" + num + "", {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      let sum = 0;
      //计算总和
      res.forEach((value, i) => {
        sum += value;
        //计算百分比保留小数点后三位
        if (i == res.length - 1) {
          res.forEach((value2, i2) => {
            res[i2] = (value2 / sum).toFixed(3);
          });
        }
      });
      list = res;
    })
    .then(() => {
      arc();
      draw(0, 0);
      canvas.addEventListener("mousemove", move);
    });
}
//创建一个绘画扇形的类
class _arc {
  constructor(x, y, r, star, end) {
    //是否被选中
    this.flag = false;
    this.hover = "red";
    this.x = x;
    this.y = y;
    this.r = r;
    this.star = star;
    this.end = end;
    this.color1 =
      "rgb(" +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      ")";
  }
  arc(x, y) {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.arc(this.x, this.y, this.r, this.star, this.end, false);
    if (ctx.isPointInPath(x, y)) {
      this.r = bigsize;
      this.color = this.hover;
      canvas.style.cursor = "pointer";
    } else {
      this.r = bisesize;
      this.color = this.color1;
      canvas.style.cursor = "auto";
    }
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  rect() {
    ctx.beginPath();
    ctx.rect(10, 20 + 50 * this.index, 60, 40);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.font = "24px 微软雅黑";
    ctx.fillText(listTip[this.index], 80, 50 + 50 * this.index);
  }
  line() {
    ctx.beginPath();
    //旋转然后划线
    let rotate = (this.end - this.star).toFixed(2);
    ctx.save();
    ctx.translate(this.x, this.y);
    let ro = (this.star + rotate / 2).toFixed(2);
    let ro2 = ((360 * ro) / 6.28).toFixed(0);
    ctx.rotate(this.star + rotate / 2);
    ctx.moveTo(0, 0);
    ctx.lineTo(300, 0);
    ctx.lineWidth = 3;
    ctx.strokeStyle = this.color;
    ctx.stroke();
    if (0 <= ro2 && ro2 < 90) {
      ctx.beginPath();
      ctx.arc(340, 0, 40, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.restore();
      //写字
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.star + rotate / 2);
      ctx.translate(325, 0);
      ctx.rotate(-this.star - rotate / 2);
      ctx.font = "30px 微软雅黑";
      ctx.fillText(listTip[this.index], -20, 20);
      ctx.restore();
    } else if (90 <= ro2 && ro2 < 180) {
      ctx.beginPath();
      ctx.arc(340, 0, 40, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.restore();
      //写字
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.star + rotate / 2);
      ctx.translate(320, 0);
      ctx.rotate(-this.star - rotate / 2);
      ctx.font = "30px 微软雅黑";
      ctx.fillText(listTip[this.index], -40, 20);
      ctx.restore();
    } else if (180 <= ro2 && ro2 < 270) {
      ctx.beginPath();
      ctx.arc(340, 0, 40, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.restore();
      //写字
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.star + rotate / 2);
      ctx.translate(325, 0);
      ctx.rotate(-this.star - rotate / 2);
      ctx.font = "30px 微软雅黑";
      ctx.fillText(listTip[this.index], -40, 0);
      ctx.restore();
    } else if (270 <= ro2 && ro2 <= 360) {
      ctx.beginPath();
      ctx.arc(340, 0, 40, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.restore();
      ctx.restore();
      //写字
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.star + rotate / 2);
      ctx.translate(325, 0);
      ctx.rotate(-this.star - rotate / 2);
      ctx.font = "30px 微软雅黑";
      ctx.fillText(listTip[this.index], -20, 6);
      ctx.restore();
    }
  }
}

//创建元素的个数
function arc() {
  let star = 0;
  for (let i = 0; i < list.length; i++) {
    let end = Math.PI * 2 * list[i];
    let a = new _arc(500, 500, bisesize, star, end + star);
    star += end;
    // 添加编号
    a.index = i;
    a.title = (list[i] * 100).toFixed(1) + "%";
    alist.push(a);
  }
}

//绘制元素
function draw(x, y) {
  ctx.clearRect(0, 0, 10000, 10000);

  alist.forEach((value) => {
    if (x == undefined && y == undefined) {
      value.arc();
    } else {
      value.arc(x, y);
    }

    value.line();
    value.rect(x, y);
  });
}

//鼠标是否在元素内部
function ispos(e) {
  return {
    x: e.offsetX * 2,
    y: e.offsetY * 2,
  };
}
//鼠标移动事件
function move(e) {
  //是否在元素内部
  let { x, y } = ispos(e);
  draw(x, y);
}
