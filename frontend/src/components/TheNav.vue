<script setup lang="ts">
import BaseContainer from "@/components/BaseContainer.vue";

const links = [
  {
    name: "home",
    title: "Главная",
  },
  {
    name: "createTask",
    title: "Создать задачу",
  },
];
</script>

<template>
  <nav>
    <BaseContainer>
      <ul>
        <li v-for="link in links">
          <router-link :to="{ name: link.name }" activeClass="active">{{
            link.title
          }}</router-link>
        </li>
      </ul>
    </BaseContainer>
  </nav>
</template>

<style scoped>
nav {
  background-color: #333;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}

.active {
  background-color: var(--green);
}
</style>
