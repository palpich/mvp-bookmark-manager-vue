<template>
  <div>
    <bookmarks-item
      v-for="bookmark in bookmarksList"
      :key="bookmark.id"
      :bookmark="bookmark"
    />
    <router-view />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import BookmarksItem from '../BookmarksItem/BookmarksItem';

export default {
  components: {
    BookmarksItem,
  },

  created() {
    this.fetchBookmarksList();
  },

  computed: {
    ...mapGetters(['bookmarksList']),
  },

  methods: {
    ...mapActions(['fetchBookmarksList']),
  },
};
</script>

<style lang='sass' scoped>

</style>
