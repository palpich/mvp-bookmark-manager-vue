import Vue from 'vue';
import Vuex from 'vuex';

// Modules
import bookmarks from './modules/bookmarks';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    bookmarks,
  },
});
