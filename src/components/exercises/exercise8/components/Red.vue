<template>
  <div>
    <h1>Red</h1>
    <slot name="a"></slot>
    <slot name="d"></slot>
    <slot></slot>
  </div>
</template>

<script></script>

<style scoped>
div {
  border: 1px solid red;
  background-color: lightcoral;
  padding: 30px;
  margin: 20px auto;
  text-align: center;
}
</style>
