<template>
  <section class="layout">
    <header></header>
    <main>
      <slot />
    </main>
  </section>
</template>

<script>
export default {
  name: 'Default',
};
</script>

<style scoped>
.layout {
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;

  background-color: #F9F9F9;
}

header {
  height: 80px;
  background-color: #091C28;
}

main {
  width: 870px;
  margin: 0 auto;
  background: #FFFFFF;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  padding: 25px 30px;
}
</style>
