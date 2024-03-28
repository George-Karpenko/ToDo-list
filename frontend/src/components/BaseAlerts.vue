<template>
  <div class="box">
    <transition-group name="item" tag="div">
      <div class="item" v-for="alert in alerts" :key="alert.id">
        {{ alert.text }}
        <p v-if="alert.critical">
          Ошибка не позволит сайту работать,
          <a href="#" @click="location.reload()">перезагрузите страницу</a>
        </p>
      </div>
    </transition-group>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import "./alerts-critical.css";

export default {
  computed: {
    ...mapGetters("alerts", { alerts: "all" }),
    location() {
      return window.location;
    },
  },
};
</script>
<style scoped>
.item {
  margin: 0 0 10px 0;
  background: #444;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 20px;
  padding: 10px;
}

.item-enter-active {
  animation: fadeIn 0.5s;
}

.item-leave-active {
  animation: fadeOut 0.5s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
