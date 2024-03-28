<script setup lang="ts">
import TheError from "@/components/TheError.vue";
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route);
</script>

<template>
  <TheError
    title="Ошибка 404"
    :message="`Страница с адресом ${route.params.catchAll} не найдена.`"
  />
</template>
