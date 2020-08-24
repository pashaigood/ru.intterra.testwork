<template>
  <DefaultLayout>
    <FieldOperations/>
  </DefaultLayout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DefaultLayout from '@/layouts/Default.vue';
import FieldOperations from '@/components/Field/FieldOperations.vue';

@Component({
  components: {
    FieldOperations,
    DefaultLayout,
  },
})
export default class Home extends Vue {}
</script>
