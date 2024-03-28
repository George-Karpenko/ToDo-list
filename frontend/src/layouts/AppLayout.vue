<script setup lang="ts">
import { useRoute } from "vue-router";
import { useErrorStore } from "@/store/error";
import TheError from "@/components/TheError.vue";
import AppLayoutError from "@/layouts/AppLayoutError.vue";
import { storeToRefs } from "pinia";

const route = useRoute();
const errorStore = useErrorStore();
const { errorTitle, errorMessage } = storeToRefs(errorStore);
</script>

<template>
  <component v-if="!errorTitle" :is="route.meta.layoutComponent">
    <slot></slot>
  </component>
  <AppLayoutError v-else
    ><TheError :title="errorTitle" :message="errorMessage"
  /></AppLayoutError>
</template>

<style scoped></style>
