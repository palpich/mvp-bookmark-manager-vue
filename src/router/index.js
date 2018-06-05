import Vue from 'vue';
import Router from 'vue-router';
import BookmarksList from '../components/TheBookmarksList/TheBookmarksList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BookmarksList',
      component: BookmarksList,
    },
  ],
});
