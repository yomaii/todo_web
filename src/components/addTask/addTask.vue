<template>
  <el-dialog
    v-model="dialogVisible"
    title="新增事项"
    :before-close="handleClose"
    width="27%"
  >
    <div>
      <el-form
        class="form"
        label-position="top"
        label-width="100px"
        ref="ruleFormRef"
        :rules="rules"
        :model="data"
        style="max-width: 460px"
        hide-required-asterisk="true"
      >
        <el-form-item prop="title">
          <el-input
            class="rule-input"
            v-model="data.title"
            placeholder="任务名称"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            class="rule-input"
            v-model="data.describe"
            placeholder="描述"
            type="textarea"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-date-picker
            v-model="data.date"
            type="date"
            placeholder="选择日期"
            :shortcuts="shortcuts"
            value-format="x"
          />
        </el-form-item>
        <el-form-item>
          <el-time-picker v-model="data.time" placeholder="提醒时间" />
        </el-form-item>
        <el-form-item label="预计耗费时长">
          <el-input-number
            v-model="data.costTime"
            :min="0.1"
            :max="24"
            @change="handleChange"
          />
        </el-form-item>
      </el-form>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button type="primary" @click="submitForm(ruleFormRef)"
          >添加</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { toRefs, defineProps, reactive, ref } from "vue";
import { defineEmits } from "vue";
import { useTodosStore } from "../../stores/todos";
const todos = useTodosStore();
//import { ElMessageBox } from 'element-plus'
const ruleFormRef = ref();
const emit = defineEmits(["clickChild"]);
const props = defineProps({
  //子组件接收父组件传递过来的值
  dialogVisible: String,
});
const rules = reactive({
  title: [
    { required: true, trigger: ["blur", "change"], message: "请输入任务名称" },
  ],
});
const data = reactive({
  id: "",
  title: "",
  describe: "",
  costTime: 1,
  date: "",
  time: "",
  finished: false,
  type: "",
  repeate: false,
});
const shortcuts = [
  {
    text: "今天",
    value: new Date(),
  },
  {
    text: "明天",
    value: () => {
      const date = new Date();
      date.setTime(date.getTime() + 3600 * 1000 * 24);
      return date;
    },
  },
];

const { dialogVisible } = toRefs(props);
function handleClose() {
  emit("clickChild");
}
function guid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function submitForm(form) {
  console.log("123", data.password);
  form.validate((valid) => {
    if (valid) {
      data.id = guid();
      data.date = data.date / 1000 || "";
      console.log(789);
      todos.addTodos(data);
      emit("clickChild");
    }
  });
}
</script>

<style>
.rule-input {
  margin-bottom: 10px;
}
.time {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
