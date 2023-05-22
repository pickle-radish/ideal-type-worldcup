import Vue from 'vue';
import Vuex from 'vuex';

import common from '@/store/modules/common';
import koreawoman from '@/store/modules/koreawoman';
import worldwoman from '@/store/modules/worldwoman';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    common,
    koreawoman,
    worldwoman,
  }
});