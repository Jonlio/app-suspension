<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  transition: 'default'
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition-duration: 0.7s;
  transition-property: height, opacity, transform;
  overflow: hidden;
}

.page-leave-to {
  opacity: 0;
  transform: translate(10em, 0);
}

.page-enter {
  opacity: 0;
  transform: translate(10em, 0);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
