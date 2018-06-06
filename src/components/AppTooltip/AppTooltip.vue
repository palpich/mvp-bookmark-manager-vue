<template>
  <div class="appTooltip" >
    <div @click="toggle">···</div>
    <ul class="menu" v-if="isOpen" v-click-outside="hide">
      <li @click="deleteBookmark({ id })">Удалить</li>
      <router-link
        :to="{ path: `${id}` }"
        tag="li"
        @click.native="toggle"
      >
        Изменить
      </router-link>
      <li @click="toggle" :data-clipboard-text="link">Копировать URL</li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import ClickOutside from 'vue-click-outside';
import ClipboardJS from 'clipboard';

/* eslint-disable no-new */
new ClipboardJS('li');

export default {
  props: {
    id: {
      type: Number,
      default: -1,
    },
    link: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      isOpen: false,
    };
  },

  methods: {
    ...mapMutations({
      deleteBookmark: 'DELETE_BOOKMARK',
    }),

    toggle() {
      this.isOpen = !this.isOpen;
    },

    hide() {
      this.isOpen = false;
    },
  },

  directives: {
    ClickOutside,
  },
};
</script>

<style lang='sass' scoped>
.appTooltip
  position: relative

.menu
  position: absolute
  top: 14px
  left: -123px
  width: 140px
  padding: 10px
  text-align: right
  font-size: 12px
  list-style-type: none
  box-shadow: 0 8px 48px 0 rgba(0, 3, 9, 0.48)
  background: white
  z-index: 1
  text-transform: uppercase

  & > li
    padding: 5px 0

</style>
