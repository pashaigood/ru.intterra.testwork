<template>
  <section class="field_culture">
    <UIIcon><CropWheatIcon/></UIIcon><div class="label">Пшеница озимая</div>
  </section>
</template>

<script>
import UIIcon from '@/components/UI/UIIcon.vue';
import CropWheatIcon from './icons/CropWheatIcon.vue';

export default {
  name: 'FieldCulture',
  components: { UIIcon, CropWheatIcon },
};
</script>

<style scoped>
.field_culture {
  display: flex;
  align-items: flex-start;
}

.field_culture .icon {
  margin-right: 10px;
}

.field_culture .label {
  margin-top: 6px;
}
</style>
