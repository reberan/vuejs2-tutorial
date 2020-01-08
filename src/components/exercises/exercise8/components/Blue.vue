<template>
  <div>
    <h1>Blue</h1>
    <slot name="a"></slot>
    <slot></slot>
    <slot name="b"></slot>
    <slot></slot>
    <slot name="c"></slot>
    <slot></slot>
    <slot name="d"></slot>
    <slot></slot>
  </div>
</template>

<script></script>

<style scoped>
div {
  border: 1px solid blue;
  background-color: lightblue;
  padding: 30px;
  margin: 20px auto;
  text-align: center;
}
</style>
