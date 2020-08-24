<template>
  <table class="table">
    <slot/>
  </table>
</template>

<script>
export default {
  name: 'UITable',
};
</script>

<style>
.table {
  width: 100%;
}

.table th, .table td {
  padding-left: 10px;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: -0.33px;
}

.table th {
  height: 40px;
  background-color: #EDEEEE;
  text-align: left;
  font-weight: 500;
  font-size: 11px;
  line-height: 13px;
}

.table td {
  height: 49px;
  border-bottom: 1px solid #EDEEEE;
}
</style>
