<script setup lang="ts">
import BaseButton from "@/components/BaseButton.vue";
import BaseIconCarrier from "@/components/BaseIconCarrier.vue";
import BaseIconRemove from "@/components/BaseIconRemove.vue";
import { Item } from "@/@types";
import { PropType, computed, ref } from "vue";
import { useTasks } from "@/store/tasks";

defineProps({
  item: {
    type: Object as PropType<Item>,
    required: true,
  },
});

const tasksStore = useTasks();
const isUpdated = ref(false);
const isDeleted = ref(false);

const isDisabledUpdateIsDone = computed(() => {
  return isUpdated.value || isDeleted.value;
});
const isDisabledDestroy = computed(() => {
  return isDeleted.value;
});

async function taskIsDoneTrue(id: string) {
  isUpdated.value = true;
  await tasksStore.taskIsDoneTrue(id);
  isUpdated.value = false;
}

async function destroyTask(id: string) {
  isDeleted.value = true;
  await tasksStore.destroyTask(id);
  isDeleted.value = false;
}
</script>

<template>
  <div class="actions">
    <BaseButton
      v-if="!item.isDone"
      @click="taskIsDoneTrue(item._id)"
      :disabled="isDisabledUpdateIsDone"
      variant="success"
    >
      <BaseIconCarrier iconColor="#fff" />
    </BaseButton>
    <BaseButton variant="danger">
      <BaseIconRemove
        @click="destroyTask(item._id)"
        :disabled="isDisabledDestroy"
        iconColor="#fff"
      />
    </BaseButton>
  </div>
</template>

<style scoped>
.actions {
  display: flex;
  justify-content: end;
  gap: 8px;
}
@media (width >= 576px) {
  .actions {
    gap: 12px;
  }
}
</style>
@/store/task/tasks
