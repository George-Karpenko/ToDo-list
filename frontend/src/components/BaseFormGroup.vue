<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<template>
  <div class="form__group">
    <label v-bind="$attrs" class="form__label">{{ text }}</label>
    <slot></slot>
  </div>
</template>

<style scoped>
.form__group {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.form__group--error :deep(.form-control) {
  border-color: brown;
}

.form__label {
  --padding: 0.25rem;
  align-self: start;
  margin: 0 calc(2rem - var(--padding));
  padding: var(--padding);
}

.form__label:hover {
  cursor: pointer;
}
</style>
