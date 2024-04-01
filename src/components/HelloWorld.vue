<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1>汇总</h1>
    <h1 class="green">{{ msg }}</h1>
    <h3>我是一个需要上班的傻逼</h3>
  </div>
</template>

<style lang="less">
@w: 37.5rem;
h1 {
  font-weight: 500;
  font-size: (28 / @w);
  position: relative;
  top: -10px;
}
</style>
