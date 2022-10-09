<template>
  <div>
    {{ roue }}
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
      type="number"
      min="0"
      max="999"
      class="text-center w-16 sm:w-24 ml-1 rounded bg-pink-500 text-white font-bold"
    >
  </div>
</template>

<script>
export default {
  props: ['roue', 'value']
}
</script>

<style>

</style>
