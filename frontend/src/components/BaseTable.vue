<script setup lang="ts">
import { Item, Header } from "@/@types";
import { PropType } from "vue";

defineProps({
  items: {
    type: Object as PropType<Item[]>,
    required: true,
  },
  header: {
    type: Object as PropType<Header>,
    required: true,
  },
  keyName: {
    type: String,
    required: true,
  },
  textWithEmptyItems: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <table class="table">
    <thead>
      <tr class="table__row table__row--header">
        <th
          v-for="headerItem in header"
          class="table__cell table__cell--header"
        >
          {{ headerItem.text }}
        </th>
      </tr>
    </thead>
    <tbody>
      <template v-if="items.length">
        <tr v-for="item in items" :key="item[keyName]" class="table__row">
          <td v-for="headerItem in header" class="table__cell">
            <template v-if="item[headerItem.value]">{{
              item[headerItem.value]
            }}</template>
            <slot v-else :name="headerItem.value" :item="item"></slot>
          </td>
        </tr>
      </template>
      <tr class="table__row">
        <td :colspan="header.length" class="table__cell">
          {{ textWithEmptyItems }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.table {
  width: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-collapse: collapse;
}

.table__cell {
  padding: 0.5rem 1rem;
  text-align: left;
}

.table__row {
  display: table-row;
  background: #f6f6f6;
}

.table__row:nth-of-type(odd) {
  background: #e9e9e9;
}
.table__row.table__row--header {
  background: var(--green);
  color: #fff;
}

@media (width >= 576px) {
  .table__cell {
    padding: 1rem 2rem;
  }
}
</style>
