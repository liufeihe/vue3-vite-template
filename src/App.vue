<template>
  <Web></Web>
</template>

<script lang="ts">
import Web from './layout/web.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
    Web
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  min-height: calc(100vh)
}
</style>
