<template>
  <div>
    <bookmarks-item
      v-for="bookmark in bookmarkList"
      :key="bookmark.id"
      :bookmark="bookmark"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import BookmarksItem from '../BookmarksItem/BookmarksItem';

export default {
  components: {
    BookmarksItem,
  },

  created() {
    this.fetchBookmarksList();
  },

  computed: {
    ...mapState({
      bookmarkList: state => state.bookmarks.list,
    }),
  },

  methods: {
    ...mapActions(['fetchBookmarksList']),

  },
};
</script>

<style lang='sass' scoped>

</style>
