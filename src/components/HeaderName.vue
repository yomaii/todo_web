<template>
  <div>
    <div class="title">
      <div class="left">
        <el-button :link="true" @click="hideLeft()">
          <el-icon :size="30" style="margin: 0 10px">
            <Menu></Menu>
          </el-icon>
        </el-button>
        <el-button :link="true" @click="goHome()">
          <el-icon :size="30" style="margin: 0 15px">
            <House />
          </el-icon>
        </el-button>
        <el-input placeholder="Search"> </el-input>
      </div>
      <div class="right">
        <el-button :link="true" @click="add">
          <el-icon :size="30" style="margin: 0 10px">
            <Plus />
          </el-icon>
        </el-button>
        <!--  :isShowUser="true" -->
        <el-button :link="true" @click="showUser()">
          <el-icon :size="30" style="margin: 0 10px">
            <User />
          </el-icon>
        </el-button>
      </div>
    </div>
    <div class="con" id="con" style="display: none">
      <div class="account">
        <el-icon>
          <UserFilled />
        </el-icon>
        <span style="margin-left: 5px">
          {{ account }}
        </span>
      </div>
      <div>
        <el-icon>
          <Coordinate />
        </el-icon>
        <span style="margin-left: 6px">
          {{ nickname }}
        </span>
      </div>
      <div class="unlogin">
        <el-button :link="true" @click="logout">
          <el-icon>
            <Close />
          </el-icon>
          <span>退出登录</span>
        </el-button>
      </div>
    </div>
    <addTask
      v-if="show"
      :dialogVisible="show"
      @clickChild="clickEven"
    ></addTask>
  </div>
</template>
<script setup>
import { ref } from "vue";
//import { Search } from '@element-plus/icons-vue'
import emitter from "../untils/eventBus";
import { useRouter } from "vue-router";
import addTask from "./addTask/addTask.vue";
let account = 123456;
let nickname = "Happy";
//let isShowLeft = true;
//let isShowUser = true;
const $router = useRouter();
let show = ref(false);
function add() {
  if (localStorage.getItem("isLogin")) {
    show.value = true;
  }
}
function clickEven() {
  show.value = false;
}
function goHome() {
  $router.push("home");
}
function hideLeft() {
  emitter.emit("hidelist");
}
function logout() {
  localStorage.removeItem("isLogin");
  $router.push({ name: "LoginView" });
}
function showUser() {
  const con = document.getElementById("con");
  if (con.style.display === "none") {
    con.style.display = "block";
  } else {
    con.style.display = "none";
  }
}
</script>
<style scoped>
.con {
  float: right;
  width: 150px;
  height: 100px;
  text-align: center;
  color: black;
  padding-top: -20px;
  border: 1px;
  font-size: 16px;
}

.con div {
  height: 30px;
}

.con div:hover {
  background-color: bisque;
}

.title {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(219, 76, 63);
}

.title el-button {
  height: 30px;
  width: 30px;
  margin: 0 10px;
  color: aliceblue;
}

.left {
  height: 50px;
  width: 500px;
  margin-left: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: aliceblue;
}

.right {
  height: 50px;
  width: 300px;
  margin-right: 50px;
  display: inline-flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
}
</style>
