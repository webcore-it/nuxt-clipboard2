import Vue from 'vue';
import VueClipboard from 'vue-clipboard2';

Vue.use(VueClipboard);

export default function (ctx, inject) {
  inject('copyText', Vue.copyText);
}