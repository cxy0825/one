<template>
  <div id="login">
    <el-row justify="center" align="middle" style="height: 100%">
      <el-col :span="20" class="content">
        <div class="title">
          <h2>登录</h2>
          <p>诶嘿！派蒙在这里等你呦</p>
        </div>
        <el-row>
          <el-col
            :span="10"
            class="pic hidden-xs-only"
            align="middle"
            hidden-sm-and-down
          >
            <img src="@/assets/login.png" />
          </el-col>
          <el-col :span="11" :xs="22" :offset="1" class="input">
            <el-input
              type="text"
              v-model="uerName"
              placeholder="输入用户名"
              maxlength="12"
              show-word-limit
            ></el-input>
            <el-input
              type="password"
              v-model="password"
              placeholder="密码"
              show-password
            ></el-input>

            <div class="remebr">
              <div class="ck">
                <el-checkbox v-model="checked1" label="记住我"></el-checkbox>
              </div>
              <div class="ms">
                <el-link type="danger">忘记密码</el-link>
              </div>
            </div>
            <div class="btn">
              <el-button type="primary" @click="login()">登录</el-button>
              <el-button type="success" size="small" @click="F_change()"
                >注册</el-button
              >
            </div>
          </el-col>
        </el-row>
        <div class="foot">
          <p style="text-align: center; font-size: 12px; color: #636363">
            加入我们发现更多精彩
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      uerName: "",
      password: "",
      checked1: "",
    };
  },
  methods: {
    F_change() {
      this.$emit("c");
    },
    login() {
      let formDate = new FormData();
      formDate.append("UID", this.uerName);
      formDate.append("passWord", this.password);
      this.axios.post("login.php", formDate).then((res) => {
        console.log(res.data);
        if (res.data) {
          window.open("http://101.132.242.117/wy/#/al");
        } else {
          alert("用户名或者密码错误");
        }
      });
    },
  },
};
</script>

<style>
.title h2 {
  margin-left: 20px;
  margin-bottom: 20px;
  font-weight: 500;
}
.title p {
  color: #626262;
  font-size: 13px;
  margin-left: 20px;
  margin-bottom: 20px;
}
.content {
  background-color: #fff;
  border-radius: 8px;
  padding: 10px 15px;
}
.pic {
  padding: 5px;
  border-radius: 8px;
  overflow: hidden;
}
.pic img {
  width: 100%;
  object-fit: cover;
  max-width: 300px;
}
.input input[type="text"] {
  margin-bottom: 10px;
}
.input input[type="password"] {
  margin-bottom: 10px;
}
.remebr::after {
  content: "";
  display: block;
  clear: both;
}
.remebr .ck {
  float: left;
}
.remebr .ms {
  float: right;
  line-height: 40px;
}
.btn {
  margin-bottom: 10px;
}
.btn::after {
  content: "";
  display: block;
  clear: both;
}
.btn .el-button--primary {
  width: 70% !important;
  display: block;
  margin: 0 auto;
}
.btn .el-button--success {
  margin-top: 10px !important;
  display: block;
  margin: 0 auto;
}
</style>
