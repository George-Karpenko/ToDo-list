<script setup lang="ts">
defineProps({
  tagName: {
    type: String,
    default: "div",
  },
});
</script>

<template>
  <component :is="tagName" class="container">
    <slot></slot>
  </component>
</template>

<style scoped>
.container {
  margin: auto;
  width: 100%;
  padding: 0 8px;
}

@media (width >= 576px) {
  .container {
    width: 540px;
    padding: 0px;
  }
}

@media (width >= 768px) {
  .container {
    width: 720px;
  }
}

@media (width >= 992px) {
  .container {
    width: 960px;
  }
}
</style>
