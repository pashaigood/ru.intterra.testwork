<template>
  <section class="field_quality" :class="className">
    <div class="indicator"/><div class="label">{{$t(assessment) || 'Нет оценки'}}</div>
  </section>
</template>

<script>
export default {
  name: 'FieldQuality',
  props: {
    assessment: String,
  },
  computed: {
    className() {
      return this.assessment?.toLowerCase() || 'default';
    },
  },
};
</script>

<style scoped>
.field_quality {
  display: flex;
  align-items: center;
}

.field_quality .indicator {
  width: 20px;
  height: 10px;
  border-radius: 5px;
  margin-right: 10px;
  background-color: #EDEEEE;
}

.field_quality .label {
  font-size: 11px;
  line-height: 19px;
  letter-spacing: -0.6px;
  color: #333333;
}

.field_quality.default .label {
  opacity: .3;
}

.field_quality.excellent .indicator {
  background-color: #66CC66;
}

.field_quality.satisfactorily .indicator {
  background-color: #FFE06D;
}

.field_quality.badly .indicator {
  background-color: #FF7360;
}
</style>
