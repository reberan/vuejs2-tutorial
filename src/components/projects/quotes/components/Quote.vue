<template>
  <div class="col-sm-6 col-lg-3">
    <div class="panel panel-default">
      <div class="panel-body quote">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["quote"]
};
</script>

<style scoped lang="stylus">
.panel-body
    font-family 'Arizona', cursive
    font-size 24px
    color #6e6e6e
    &:hover
        background #ffe2e2
</style>
