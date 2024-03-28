<template>
  <form class="form">
    <slot></slot>
  </form>
</template>

<style scoped>
.form {
  display: grid;
  gap: 1rem;
  width: 100%;
}
</style>
