<template>
  <div>
    <input
      @input="isError = false"
      v-model="name"
    >
    <input
      @input="isError = false"
      v-model="url"
    >

    <div
      v-if="isError"
      class="error"
    >
      Заполните пожайлуста поля
    </div>
    <app-button
      @click="$router.push({ path: '/' })"
      opacity
    >
      Отменить
    </app-button>
    <app-button
      @click="handleButton"
    >
      Сохранить
    </app-button>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import AppButton from '../AppButton/AppButton';

export default {
  components: {
    AppButton,
  },

  data() {
    return {
      name: '',
      url: '',
      isError: false,
    };
  },

  watch: {
    findBookmarkById() {
      this.name = this.findBookmarkById.name;
      this.url = this.findBookmarkById.url;
    },
  },

  computed: {
    ...mapGetters(['bookmarksList']),

    findBookmarkById() {
      const { id } = this.$route.params;

      return this.bookmarksList.find(item => item.id === Number(id));
    },
  },

  methods: {
    ...mapMutations({
      addBookmark: 'ADD_BOOKMARK',
      updateBookmark: 'UPDATE_BOOKMARK',
    }),

    handleAddBookmark() {
      if (this.name.length && this.url.length) {
        this.addBookmark({
          name: this.name,
          url: this.url,
        });
        this.name = '';
        this.url = '';
      } else {
        this.isError = true;
      }
    },

    handleUpdateBookmark() {
      const { id } = this.$route.params;

      if (this.name.length && this.url.length) {
        this.updateBookmark({
          id,
          name: this.name,
          url: this.url,
        });
      } else {
        this.isError = true;
      }
    },

    handleButton() {
      const { id } = this.$route.params;

      return id === 'new' ? this.handleAddBookmark() : this.handleUpdateBookmark();
    },
  },
};
</script>

<style lang='sass' scoped>

</style>
