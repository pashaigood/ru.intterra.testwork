import Vue from 'vue';
import VueI18n from 'vue-i18n';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import ru from './locales/intterra-ru-RU.json';

const LOCALE = 'ru';
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: LOCALE, // set locale
  messages: { ru }, // set locale messages
});

dayjs.locale(LOCALE);

export default i18n;
