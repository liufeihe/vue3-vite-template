<template>
  <button @click="addCount">count is: {{ count }}</button>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup: () => {
    const count = ref(0)
    
    const addCount = () => {
      count.value = count.value +1
      setTimeout(()=>{
        count.value = count.value +1
      }, 0)
    }
    return { count, addCount }
  }
})
</script>
<style lang="scss" scoped>
button{
  font-size: 24px;
}
</style>
