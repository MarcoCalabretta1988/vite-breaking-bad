<script>
export default {
  name: 'Simple Pagination',
  props: {
    prevDisabled: Boolean,
    nextDisabled: Boolean,
  },
  emits: ['page-changed']
}
</script>

<template>
  <nav>
    <ul class="pagination">
      <li class="page-item" :class="{ 'disabled': prevDisabled }" @click="$emit('page-changed', 'prev')">&#11013;</li>
      <li class="page-item" :class="{ 'disabled': nextDisabled }" @click="$emit('page-changed', 'next')">&#10145;</li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
ul {
  display: flex;
  justify-content: center;
  gap: 20px;
  font-size: 30px;
  cursor: pointer;
}
</style>