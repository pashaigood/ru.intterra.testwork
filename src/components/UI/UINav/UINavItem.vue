<template>
  <li class="nav_item" :class="{ active }"><slot/></li>
</template>

<script>
export default {
  name: 'UINavItem',
  props: {
    active: Boolean,
  },
};
</script>

<style>
.nav_item {
  user-select: none;
  cursor: pointer;
}

.nav_item.active {
  color: #3399FF;
}
</style>
