<template>
  <div class="content">
    <div class="register">
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
          <el-input v-model="formLabelAlign.email" placeholder="请输入邮箱" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            show-password
            v-model="formLabelAlign.password"
            placeholder="请输入密码"
          />
        </el-form-item>
        <el-form-item label="确认密码" prop="rePassword">
          <el-input
            type="password"
            show-password
            v-model="formLabelAlign.rePassword"
            placeholder="请输入密码"
          />
        </el-form-item>
        <div class="buttonBox">
          <el-button @click="submitForm(ruleFormRef)">注册</el-button>
        </div>
        <p class="info">
          已有账号?,去<el-button type="text" @click="toLogin">登录</el-button>
        </p>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
const router = useRouter();
const formLabelAlign = reactive({
  password: "",
  email: "",
  rePassword: "",
});
const ruleFormRef = ref();
const rules = reactive({
  email: [{ validator: checkUrl, trigger: ["input", "blur", "change"] }],
  password: [{ required: true, trigger: "blur", message: "请输入密码" }],
  rePassword: [{ required: true, trigger: "blur", message: "请输入确认密码" }],
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
  form.validate((valid) => {
    if (valid) {
      if (formLabelAlign.password !== formLabelAlign.rePassword) {
        console.log(7829);
        ElMessage({
          message: "两次输入的密码不一致",
        });
      } else {
        router.push({ name: "LoginView" });
      }
      console.log(789);
    }
  });
}
function toLogin() {
  router.push({ name: "LoginView" });
}
</script>

<style scoped>
.content {
  position: relative;
  height: 100vh;
  width: 100vw;
  background: white;
}
.form {
  flex: 2;
  height: 300px;
}
.buttonBox {
  display: flex;
  align-items: center;
  justify-content: center;
}
.info {
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.register {
  width: 300px;
  background-color: #fff;
  border-radius: 15px;
  padding: 30px 50px;
  border: #a6c1ee 1px solid;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
