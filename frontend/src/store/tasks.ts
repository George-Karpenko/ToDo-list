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
      this.tasks.filter((task) => task._id !== id);
    },
    async taskIsDoneTrue(id: string): Promise<void> {
      const upTask: Item = await updateTask(id, { isDone: true });
      this.tasks = this.tasks.map((task) => {
        if (task._id === id) {
          return upTask;
        }
        return task;
      });
    },
    async saveTask(task: any): Promise<void> {
      const promise: Promise<Item> = createTask(task);
      const newTask = await promise;
      this.tasks.unshift(newTask);
    },
  },
});
