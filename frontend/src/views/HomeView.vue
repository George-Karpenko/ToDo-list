<script setup lang="ts">
import BaseTable from "@/components/BaseTable.vue";
import BaseTaskActions from "@/components/BaseTaskActions.vue";
import BaseTaskStatus from "@/components/BaseTaskStatus.vue";
import BaseContainer from "@/components/BaseContainer.vue";
import { useTasks } from "@/store/tasks";
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { Status } from "@/@types";

const tasksStore = useTasks();
const { fetchTasks } = tasksStore;
const { allTasks } = storeToRefs(tasksStore);
const status = ref(Status.LOADING);

onMounted(async () => {
  await fetchTasks();
  status.value = Status.OK;
});

const header = [
  { text: "Название задачи", value: "title" },
  { text: "Статус задачи", value: "task_status" },
  { text: "", value: "actions" },
];
</script>

<template>
  <BaseContainer tagName="main">
    <h1>Список задач</h1>
    <BaseTable
      v-if="status === Status.OK"
      :header="header"
      :items="allTasks"
      textWithEmptyItems="Задач нет"
      keyName="_id"
    >
      <template #actions="{ item }">
        <BaseTaskActions :item="item" />
      </template>
      <template #task_status="{ item }">
        <BaseTaskStatus :item="item" />
      </template>
    </BaseTable>
    <p v-else>Список загружается</p>
  </BaseContainer>
</template>

<style scoped></style>
@/store/task/tasks
