<template>
  <th :width="width" @click="click">
    <div class="table_head_column">
      <slot/>
      <UIIcon
        v-if="sort"
        class="sort"
        :class="direction"
      >
        <SortIcon
          :active="active"
        />
      </UIIcon>
    </div>
  </th>
</template>

<script>
import UIIcon from '@/components/UI/UIIcon.vue';
import SortIcon from '@/components/Icons/SortIcon.vue';

export default {
  name: 'UITableHeadColumn',
  props: {
    width: [Number, String],
    name: {
      type: String,
    },
    sort: {
      type: Boolean,
      default: true,
    },
  },
  components: { SortIcon, UIIcon },
  computed: {
    direction() {
      return this.$parent.order[this.name];
    },

    active() {
      return this.$parent.order[this.name] !== undefined;
    },
  },
  methods: {
    click() {
      this.$parent.$emit('sort', this.name);
    },
  },
};
</script>

<style scoped>
.table_head_column {
  user-select: none;
  display: flex;
  cursor: pointer;
}

.table_head_column .sort {
  display: block;
  margin-left: 5px;
  height: 15px;
}

.table_head_column .sort.desc {
  transform: scale(1 , -1);
  transform-origin: center;
}
</style>
