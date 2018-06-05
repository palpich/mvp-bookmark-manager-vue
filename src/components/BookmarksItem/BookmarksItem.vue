<template>
  <div class="bookmarksItem">
    <div class="title">Google</div>
    <div class="url">http://google.ru</div>
    <div class="dots">
      <app-tooltip />
    </div>
  </div>
</template>

<script>
import AppTooltip from '../AppTooltip/AppTooltip';

export default {
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
