<template>
  <thead>
  <tr><slot/></tr>
  </thead>
</template>

<script>
export default {
  name: 'UITableHead',
  props: {
    order: Object,
    sort: Function,
  },
};
</script>

<style scoped>

</style>
