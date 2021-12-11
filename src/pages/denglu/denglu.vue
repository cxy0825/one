<template>
  <div id="denglu">
    <div class="logo">
      <el-link type="primary" href="./home/home.html">Home</el-link>
    </div>
    <transition>
      <component :is="com" @c="change()"></component>
    </transition>
  </div>
</template>
<script>
import login from "./components/login.vue";
import re from "./components/re.vue";
export default {
  name: "denglu",
  data() {
    return {
      flag: true,
      com: "login",
    };
  },
  methods: {
    change() {
      if (this.com == "login") {
        this.com = "re";
      } else {
        this.com = "login";
      }
    },
  },
  components: {
    login,
    re,
  },
};
</script>
<style lang="css" scoped>
.logo a {
  position: absolute;
  left: 5%;
  top: 40px;
  font-size: 28px;
  font-family: Georgia, "Times New Roman", Times, serif;
}
.logo >>> span {
  text-decoration: underline !important;
}
#denglu {
  width: 100vw;
  height: 100vh;
  background-image: url("~@/assets/bg.jpg");
  display: flex;
  justify-content: center;
  align-items: center;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
.v-enter-to,
.v-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.v-enter-active,
.v-leave-active {
  position: absolute;
  transition: all 0.5s ease-in;
}
</style>
