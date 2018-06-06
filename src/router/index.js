import Vue from 'vue';
import Router from 'vue-router';
import BookmarksList from '../components/TheBookmarksList/TheBookmarksList';
import UpdateForm from '../components/UpdateForm/UpdateForm';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BookmarksList',
      component: BookmarksList,
      children: [
        {
          path: 'new',
          component: UpdateForm,
        },
      ],
    },
  ],
});
