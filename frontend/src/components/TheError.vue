<script setup lang="ts">
import BaseContainer from "@/components/BaseContainer.vue";
import router from "@/router";

defineProps({
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const { href } = router.resolve({
  name: "home",
});
</script>

<template>
  <BaseContainer tagName="main">
    <div class="error">
      <h1 class="error__title">{{ title }}</h1>
      <div class="error__message">
        <p>{{ message }}</p>
        <p>
          Давай вернемся на
          <a :href="href"> главную страницу</a>
          и попробуем оттуда.
        </p>
      </div>
    </div>
  </BaseContainer>
</template>

<style scoped>
main {
  display: flex;
  height: 100vh;
}

.error {
  max-width: 500px;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  margin: auto;
}
.error__title {
  font-size: 2em;
}
.error__message {
  font-size: 1.5em;
}
</style>
