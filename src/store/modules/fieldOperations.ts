import createWhere from 'filter-where';
import _orderBy from 'lodash/orderBy';
import _toPairs from 'lodash/toPairs';
import _unzip from 'lodash/unzip';
import { ActionContext } from 'vuex';
import FieldOperation from '@/types/FieldOperation';
import FieldService from '@/FieldService';
import { formatOperation } from '@/utils/formatOperation';

export const types = {
  CHANGE_STATUS: 'change_status',
  FILTER: 'filter',
  SORT: 'sort',
  LOAD: 'load',
  CREATE: 'create',
  UPDATE: 'update',
};

interface Order {
  [key: string]: 'asc' | 'desc' | undefined;
}

interface Status {
  loading: boolean;
  error: boolean;
}

interface OperationsState extends Status {
  where: Partial<FieldOperation>;
  order: Order;
  items: FieldOperation[];
}

type OperationsContext = ActionContext<OperationsState, object>;

interface LoadPayload {
  items: FieldOperation[];
}

interface OrderPayload {
  order: Order;
}

interface FilterPayload {
  where: Partial<FieldOperation>;
}

interface StatusPayload {
  status: Partial<Status>;
}

const fieldService = new FieldService();

const fieldOperations = {
  namespaced: true,
  state(): OperationsState {
    return {
      loading: false,
      error: false,
      where: {},
      order: {},
      items: [],
    };
  },
  getters: {
    order(state: OperationsState): Order {
      return state.order;
    },

    where(state: OperationsState): Partial<FieldOperation> {
      return state.where;
    },

    items(state: OperationsState): FieldOperation[] {
      let { items } = state;

      if (Object.keys(state.where).length) {
        items = items.filter(createWhere(state.where));
      }

      if (Object.keys(state.order).length) {
        items = _orderBy(items, ...(_unzip(_toPairs(state.order)))) as FieldOperation[];
      }
      return items;
    },
  },
  mutations: {
    [types.CHANGE_STATUS](state: OperationsState, payload: StatusPayload) {
      Object.assign(state, payload.status);
    },

    [types.SORT](state: OperationsState, payload: OrderPayload) {
      state.order = payload.order || {};
    },

    [types.FILTER](state: OperationsState, payload: FilterPayload) {
      state.where = payload.where || {};
    },

    [types.LOAD](state: OperationsState, payload: LoadPayload) {
      state.items = payload.items;
    },
  },
  actions: {
    async load(context: OperationsContext) {
      context.commit(types.CHANGE_STATUS, { status: { loading: true } });
      try {
        const items = (await fieldService.getOperations()).map(formatOperation);
        context.commit(types.CHANGE_STATUS, { status: { loading: false } });
        return context.commit(types.LOAD, { items });
      } catch (e) {
        context.commit(types.CHANGE_STATUS, { status: { loading: false, error: true } });
        throw e;
      }
    },

    sort(context: OperationsContext, order: Order | string) {
      return context.commit(types.SORT, { order });
    },

    toggleOrder(context: OperationsContext, field: string) {
      let direction = context.state.order[field];
      switch (direction) {
        case 'asc':
          direction = 'desc';
          break;
        case 'desc':
          direction = undefined;
          break;
        default:
          direction = 'asc';
      }
      return context.commit(types.SORT, { order: { [field]: direction } });
    },

    filter(context: OperationsContext, where: Partial<FieldOperation>) {
      return context.commit(types.FILTER, { where });
    },
  },
};

export default fieldOperations;
