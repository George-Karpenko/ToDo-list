<script setup lang="ts">
defineProps<{
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

function updateInput(event: Event) {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
}
</script>

<template>
  <input @input="updateInput" class="form__control" />
</template>

<style scoped>
.form__control {
  border-radius: 9999px;
  border: 2px solid #32a1ce;
  padding: 1rem 2rem;
}
</style>
