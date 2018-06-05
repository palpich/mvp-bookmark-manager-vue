<template>
  <div class="appTooltip" >
    <div @click="isOpen = !isOpen">···</div>
    <ul class="menu" v-if="isOpen" v-click-outside="hide">
      <li>Удалить</li>
      <li>Изменить</li>
      <li>Копировать URL</li>
    </ul>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside';

export default {
  data() {
    return {
      isOpen: false,
    };
  },

  methods: {
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
