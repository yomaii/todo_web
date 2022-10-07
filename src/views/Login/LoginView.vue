<template>
  <div class="container">
    <div class="content">
      <div class="login">
        <el-tabs
          v-model="activeName"
          type="border-card"
          class="demo-tabs"
          @tab-click="handleClick"
          stretch="true"
        >
          <el-tab-pane label="账号密码登录" name="passWord">
            <el-form
              class="form"
              label-position="top"
              label-width="100px"
              ref="ruleFormRef"
              :rules="rules"
              :model="formLabelAlign"
              style="max-width: 460px"
              hide-required-asterisk="true"
            >
              <el-form-item label="邮箱" prop="email">
                <el-input
                  v-model="formLabelAlign.email"
                  placeholder="请输入邮箱"
                />
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input
                  type="password"
                  show-password
                  v-model="formLabelAlign.password"
                  placeholder="请输入密码"
                />
              </el-form-item>
              <div class="buttonBox">
                <el-button type="primary" @click="submitForm(ruleFormRef)"
                  >登录</el-button
                >
                <el-button @click="toRegister">注册</el-button>
              </div>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="微信扫码登录" name="weChat">
            <div class="image">
              <img class="img" src="../../assets/QR.png" alt="" />
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
let activeName = ref("passWord");
const formLabelAlign = reactive({
  password: "",
  email: "",
});
const ruleFormRef = ref();
const rules = reactive({
  email: [{ validator: checkUrl, trigger: "blur" }],
  password: [{ required: true, trigger: "blur", message: "请输入密码" }],
});
function checkUrl(r, v, callback) {
  console.log(r, v);
  if (!v) {
    return callback("请输入邮箱");
  }
  const reg =
    /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
  if (reg.test(v)) {
    return callback();
  } else {
    return callback("请输入正确的邮箱");
  }
}
function submitForm(form) {
  console.log("123", formLabelAlign.password);
  form.validate((valid) => {
    if (valid) {
      localStorage.isLogin = true;
      router.push({ name: "test" });
    }
  });
}
function toRegister() {
  router.push({ name: "RegisterView" });
}
</script>

<style scoped>
.content {
  position: relative;
  /* width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to right, #fbc2eb, #a6c1ee); */
}
.form {
  height: 200px;
  width: 300px;
}
.image {
  height: 200px;
  width: 300px;
}
.buttonBox {
  display: flex;
  align-items: center;
  justify-content: center;
}
.login {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.img {
  height: 150px;
  width: 150px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
