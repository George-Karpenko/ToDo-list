<script>
import { RouterView } from "vue-router";
import AppLayout from "./layouts/AppLayout.vue";
export default {
  components: { AppLayout, RouterView },
};
</script>

<template>
  <AppLayout>
    <RouterView />
  </AppLayout>
</template>
