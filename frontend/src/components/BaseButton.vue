<script setup lang="ts">
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: "secondary",
  },
});
const classes = [
  "button--" + props.variant,
  props.disabled && "button--disabled",
];
</script>

<template>
  <button :class="classes" class="button" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<style>
.button {
  --hue: 30;
  --saturation: 7%;
  --lightness: 50%;
  background: hsl(var(--hue), var(--saturation), var(--lightness));
  position: relative;
  display: block;
  min-width: 30px;
  height: 30px;
  display: grid;
  place-content: center;
  border: none;
  border-radius: 20px;
  color: #ffffff;
  cursor: pointer;
  z-index: 0;
}
.button--success {
  --saturation: 55%;
  --hue: 120;
}
.button--danger {
  --saturation: 55%;
  --hue: 0;
}
.button--disabled {
  background: transparent;
  border: 2px solid hsla(0, 0%, 59%, 0.3);
  color: #acacac;
  mix-blend-mode: normal;
  cursor: not-allowed;
}

@media (hover: hover) {
  .button:hover {
    --lightness: 40%;
  }
}

.button:active {
  --lightness: 60%;
}

@media (width >= 576px) {
  .button {
    min-width: 40px;
    height: 40px;
  }
}
</style>
