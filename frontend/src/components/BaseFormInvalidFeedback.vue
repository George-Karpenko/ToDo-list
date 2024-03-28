<script setup lang="ts">
import { ErrorObject } from "@vuelidate/core";

defineProps<{
  errors: ErrorObject[];
}>();
</script>

<template>
  <ul class="errors">
    <li class="errors__item" v-for="error in errors">
      {{ error.$message }}
    </li>
  </ul>
</template>

<style scoped>
.errors {
  color: brown;
  font-size: 0.75rem;
  margin: 0;
}
</style>
