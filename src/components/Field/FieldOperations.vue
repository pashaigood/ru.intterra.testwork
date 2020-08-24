<template>
  <section class="field_operations">
    <h1 class="header">Операции на поле 112</h1>
    <section class="tools">
      <UINav class="filter">
        <UINavItem
          :active="notAssessment"
          @click.native.stop="filterNotAssessment"
        >
          Запланированные операции
        </UINavItem>
        <UINavItem
          :active="assessment"
          @click.native.stop="filterAssessment"
        >
          Выполненные операции
        </UINavItem>
      </UINav>
      <section class="add_btn">
        <UIButton><UIIcon><AddIcon/></UIIcon> Добавить операцию</UIButton>
      </section>
    </section>
    <section>
      <UITable>
        <UITableHead :order="order" @sort="toggleOrder">
          <UITableHeadColumn name="timestamp" width="80px">Дата</UITableHeadColumn>
          <UITableHeadColumn name="localeName" width="380px">Операция</UITableHeadColumn>
          <UITableHeadColumn width="200px">Культура</UITableHeadColumn>
          <UITableHeadColumn name="assessment">Качество</UITableHeadColumn>
        </UITableHead>
        <UITableRow :key="operation.id" v-for="operation in items">
          <UITableColumn class="field_operation_date">{{formatDate(operation.date)}}</UITableColumn>
          <UITableColumn class="field_operation_name">{{operation.localeName}}</UITableColumn>
          <UITableColumn><FieldCulture/></UITableColumn>
          <UITableColumn>
            <FieldQuality :assessment="formatAssessment(operation.assessment)"/>
          </UITableColumn>
        </UITableRow>
      </UITable>
    </section>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import {
  formatOperationAssessment,
  formatOperationDate,
} from '@/utils/formatOperation';
import UITable from '@/components/UI/UITable/UITable.vue';
import UITableHead from '@/components/UI/UITable/UITableHead.vue';
import UITableHeadColumn from '@/components/UI/UITable/UITableHeadColumn.vue';
import UITableRow from '@/components/UI/UITable/UITableRow.vue';
import UITableColumn from '@/components/UI/UITable/UITableColumn.vue';
import UIIcon from '@/components/UI/UIIcon.vue';
import AddIcon from '@/components/Icons/AddIcon.vue';
import UINav from '@/components/UI/UINav/UINav.vue';
import UINavItem from '@/components/UI/UINav/UINavItem.vue';
import UIButton from '@/components/UI/UIButton.vue';
import FieldCulture from '@/components/Field/FieldCulture.vue';
import FieldQuality from '@/components/Field/FieldQuality.vue';

export default {
  name: 'TableView',
  components: {
    UITableColumn,
    UITableRow,
    FieldQuality,
    FieldCulture,
    UITableHeadColumn,
    UINavItem,
    UINav,
    UITableHead,
    UITable,
    UIIcon,
    AddIcon,
    UIButton,
  },
  computed: {
    assessment() {
      return this.where['!assessment'] === null;
    },

    notAssessment() {
      return this.where.assessment === null;
    },

    ...mapGetters('fieldOperations', ['items', 'where', 'order']),
  },
  methods: {
    filterAssessment() {
      if (this.assessment) {
        this.filter(null);
      } else {
        this.filter({ '!assessment': null });
      }
    },

    filterNotAssessment() {
      if (this.notAssessment) {
        this.filter(null);
      } else {
        this.filter({ assessment: null });
      }
    },

    formatAssessment(assessment) {
      return formatOperationAssessment(assessment);
    },

    formatDate(date) {
      return formatOperationDate(date);
    },

    ...mapActions('fieldOperations', ['load', 'filter', 'sort', 'toggleOrder']),
  },
  created() {
    this.load();
    this.sort({ timestamp: 'asc' });
  },
};
</script>

<style scoped>
.field_operations {
  display: grid;
  grid-template-rows: auto auto 1fr;
}

.field_operations .header {
  margin: 0 0 10px 0;
  font-weight: 500;
  font-size: 25px;
  line-height: 31px;
  letter-spacing: -1.25px;
}

.field_operations .tools {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 10px;
}

.field_operations .filter {
  display: flex;
  padding: 0;
  margin: 0;
  font-weight: 500;
  letter-spacing: -0.7px;
  text-transform: uppercase;
}

.field_operations .add_btn .btn {
  transform: translate(0, -6px);
}

.field_operations .filter .nav_item {
  margin-right: 18px;
}

.field_operations .field_operation_date {
  font-weight: 500;
  letter-spacing: -0.8px;
  text-transform: uppercase;
  opacity: 0.8;
}
.field_operations .field_operation_name {
  font-weight: 500;
  font-size: 13px;
  line-height: 13px;
  letter-spacing: -0.47px;
}
</style>
