<template>
  <button
    @click="$emit('click')"
    :class="[
      'root',
      { opacity: opacity }
    ]"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    opacity: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang='sass' scoped>
.root
  font-weight: bold
  padding: 10px 20px
  border-radius: 5px
  text-transform: uppercase
  color: #fff
  outline: none
  border: 1px solid #58a5ff
  background: #58a5ff
  box-shadow: 0 5px 20px 0 rgba(#431eff, 0.28)
  transition: .3s
  &:hover
    box-shadow: none
    cursor: pointer


.opacity
  background: transparent
  color: black
</style>
