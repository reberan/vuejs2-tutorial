<template>
  <div>
    <h1>Green</h1>
    <slot></slot>
    <slot name="c"></slot>
    <slot name="d"></slot>
    <slot></slot>
  </div>
</template>

<script></script>

<style scoped>
div {
  border: 1px solid green;
  background-color: lightgreen;
  padding: 30px;
  margin: 20px auto;
  text-align: center;
}
</style>
