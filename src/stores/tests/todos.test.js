import { expect, describe, beforeAll, it } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useTodosStore } from "../todos";

describe("test todos", () => {
  let store;
  beforeAll(() => {
    setActivePinia(createPinia());
    store = useTodosStore();
  });
  it("设置初始todos", async () => {
    await store.setTodos([
      {
        id: 0,
        title: "测试",
        finished: false,
        date: 1664985600,
        repeate: false,
        describe: "测试描述文本",
        type: "type1",
      },
    ]);
    expect(store.todos).toStrictEqual([
      {
        id: 0,
        title: "测试",
        finished: false,
        date: 1664985600,
        repeate: false,
        describe: "测试描述文本",
        type: "type1",
      },
    ]);
  });
  it("测试完成todo", async () => {
    await store.changeTodoStatus(store.todos[0]);
    expect(store.filterTodos()).toStrictEqual([]);
  });
  it("添加todo", async () => {
    await store.addTodos({
      id: 1,
      title: "测试",
      finished: false,
      date: 1664985600,
      repeate: false,
      describe: "测试描述文本",
      type: "type2",
    });
    expect(store.todos.length).equals(2);
  });
  it("测试获取类别", async () => {
    expect(store.getAllTypes()).toStrictEqual(["type1", "type2"]);
  });

  it("测试删除", async () => {
    await store.deleteTodo(1);
    expect(store.todos.length).equals(1);
  });
});
