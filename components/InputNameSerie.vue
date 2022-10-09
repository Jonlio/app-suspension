<template>
  <div class="mb-8 text-xl md:text-2xl text-white text-center font-bold">
    <span class="text-white mr-3">{{ title }} </span>
    <input
    v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
      class="
        form-input
        mt-1
        w-2/3
        bg-white
        text-xl
        md:text-2xl
        text-gray-800
        font-bold
        text-center
      "
    >
  </div>
</template>

<script>
export default {
  props: ['title', 'value']
}
</script>

<style scoped>
</style>
