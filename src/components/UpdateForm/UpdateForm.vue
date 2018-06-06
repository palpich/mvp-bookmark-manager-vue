<template>
  <div class="updateForm">
    <div class="form">
      <input
        class="inputForm"
        @input="isError = false"
        v-model="name"
        placeholder="Название закладки"
      >
      <input
        class="inputForm"
        @input="isError = false"
        v-model="url"
        placeholder="URl"
      >
    </div>
    <div class="interface">
      <div
        v-if="isError"
        class="error"
      >
        Заполните пожайлуста поля
      </div>
      <div class="buttons">
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
    </div>
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
.updateForm
  padding: 18px

.form
  text-align: center

.inputForm
  padding: 5px
  border-radius: 5px
  width: 40%

.interface
  display: flex
  justify-content: space-between
  margin-top: 15px

.buttons
  margin-left: auto

</style>
