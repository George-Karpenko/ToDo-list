import { Item } from "@/@types";
import { createTask, deleteTask, tasks, updateTask } from "@/api";
import { defineStore } from "pinia";

type State = {
  tasks: Item[];
};

export const useTasks = defineStore("tasks", {
  state: (): State => ({
    tasks: [],
  }),
  getters: {
    allTasks({ tasks }) {
      return tasks;
    },
  },
  actions: {
    async fetchTasks(): Promise<void> {
      const promise: Promise<Item[]> = tasks();

      this.tasks = await promise;
    },
    async destroyTask(id: string): Promise<void> {
      await deleteTask(id);
      this.fetchTasks();
      // console.log(this.tasks, id);
      this.tasks.filter((task) => task._id !== id);
    },
    async taskIsDoneTrue(id: string): Promise<void> {
      const upTask: Item = await updateTask(id, { isDone: true });
      this.tasks = this.tasks.map((task) => {
        console.log(task._id === id);
        if (task._id === id) {
          return upTask;
        }
        return task;
      });
      console.log(this.tasks);
    },
    async saveTask(task: any): Promise<void> {
      const promise: Promise<Item> = createTask(task);
      const newTask = await promise;
      this.tasks.unshift(newTask);
    },
  },
});
