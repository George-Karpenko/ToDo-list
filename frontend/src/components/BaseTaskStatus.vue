<script setup lang="ts">
import { Item } from "@/@types";
import useDifferenceTime from "@/composables/useDifferenceTime";
import { PropType, computed, onBeforeUnmount } from "vue";

const props = defineProps({
  item: {
    type: Object as PropType<Item>,
    required: true,
  },
});

const { differenceInSeconds, time } = useDifferenceTime(
  new Date(),
  new Date(props.item.overdueAt)
);

const counterTime = setInterval(() => {
  if (differenceInSeconds.value > 0) {
    differenceInSeconds.value--;
  }
}, 1000);

onBeforeUnmount(() => {
  clearInterval(counterTime);
});

const status = computed(() => {
  if (props.item.isDone) {
    return "Выполнена задача";
  }
  if (differenceInSeconds.value <= 0) {
    return "Просрочена задача";
  }
  return `Осталось врением ${time.value}`;
});
</script>

<template>
  <div>{{ status }}</div>
</template>

<style scoped></style>
