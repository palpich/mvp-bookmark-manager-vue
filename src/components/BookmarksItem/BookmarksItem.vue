<template>
  <div class="bookmarksItem">
    <div class="title">{{bookmark.name}}</div>
    <div class="url">{{bookmark.url}}</div>
    <div class="dots">
      <app-tooltip
        :link="bookmark.url"
        :id="bookmark.id"
      />
    </div>
  </div>
</template>

<script>
import AppTooltip from '../AppTooltip/AppTooltip';

export default {
  props: {
    bookmark: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  components: {
    AppTooltip,
  },
};
</script>

<style lang='sass' scoped>
.bookmarksItem
  display: flex
  align-items: center
  justify-content: space-between
  width: 100%
  padding: 18px
  border-bottom: 1px solid gray

.title
  flex: 0 0 25%
  padding-right: 18px
  font-weight: bold

.url
  flex: 0 0 72%
  padding-right: 18px

.dots
  display: flex
  justify-content: center
  flex: 0 0 3%
  padding: 0 5px

  &:hover
    cursor: pointer

</style>
