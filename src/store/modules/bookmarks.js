/* eslint-disable no-shadow */
const state = {
  list: [],
  isFetching: false,
  error: '',
};

const mutations = {
  FETCHING_BOOKMARKS(state) {
    state.isFetching = true;
  },

  FETCHED_BOOKMARKS(state, { data }) {
    state.list = data;
    state.isFetching = false;
  },

  ADD_BOOKMARK(state, { data }) {
    state.list.unshift(data);
  },

  UPDATE_BOOKMARK(state, { data }) {
    state.list = state.list.map((item) => {
      if (item.id === data.id) return data;
      return item;
    });
  },

  DELETE_BOOKMARK(state, { id }) {
    state.list = state.list.filter(item => item.id !== id);
  },
};

const actions = {
  fetchBookmarksList: ({ commit }) =>
    /*
    * Для примера написал как может выглядеть асинхронный запрос к API
    * */
    new Promise((resolve) => {
      commit('FETCHING_BOOKMARKS');
      setTimeout(() => {
        commit('FETCHED_BOOKMARKS', { data: [
          { id: 1, name: 'Google', url: 'http://google.com' },
          { id: 2, name: 'YouTube', url: 'http://youtube.com' },
          { id: 3, name: 'Yandex', url: 'http://yandex.ru' },
        ] });
        resolve();
      }, 1000);
    }),
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
