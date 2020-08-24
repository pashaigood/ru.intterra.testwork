<template>
  <button class="btn"><slot /></button>
</template>

<script>
export default {
  name: 'UIButton',
};
</script>

<style>
.btn {
  display: flex;
  height: 40px;
  line-height: 40px;
  border-radius: 25px;
  padding: 0 15px;
  background: #FFFFFF;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1));
  border: none;
  outline: none;
  font-size: 13px;
  letter-spacing: -0.8px;
  color: #333333;
}
.btn .icon:first-child {
  margin-right: 7px;
}
</style>
