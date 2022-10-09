<template>
  <!-- PRISE HAUTEURS DEGONFLEES -->
  <div class="flex flex-col justify-center items-center sm:mt-20 p-5">
    <div class="sm:p-10 py-8 w-full text-gray-600 text-xl sm:text-4xl font-black">
      <h2 class="text-center font-bold text-xl sm:text-4xl mb-16 sm:mb-20">
        Relevé des Hauteurs Dégonflées (mm)
      </h2>
      <div class="flex">
        <div class="flex flex-col justify-around mx-auto">
          <InputH v-model="H1Degonf" roue="D1" />
          <InputH v-model="H3Degonf" roue="D3" />
        </div>
        <img
          v-if="picked === 'motrice'"
          src="~/assets/m1.png"
          class="mx-auto"
          alt=""
        >
        <img
          v-else-if="picked === 'remorque'"
          src="~/assets/remorque.png"
          class="mx-auto"
          alt=""
        >
        <img
          v-else
          src="~/assets/73500.png"
          class="mx-auto"
          alt=""
        >
        <div class="flex flex-col justify-around mx-auto">
          <InputH v-model="H2Degonf" roue="D2" />
          <InputH v-model="H4Degonf" roue="D4" />
        </div>
      </div>
    </div>
    <transition name="fade">
      <div
        v-show="
          checkValues
        "
        class="mt-8"
      >
        <nuxt-link to="/HauteursGonf">
          <button
            class="block w-3/4 mx-auto px-4 sm:px-6 py-2 sm:py-4 text-sm sm:text-lg font-black leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
          >
            Remise en service des suspensions
          </button>
        </nuxt-link>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    value: String
  },
  data () {
    return {
      H1Degonf: null,
      H2Degonf: null,
      H3Degonf: null,
      H4Degonf: null,
      picked: ''
    }
  },
  computed: {
    checkValues () {
      return this.H1Degonf > 100 && this.H2Degonf > 100 && this.H3Degonf > 100 && this.H4Degonf > 100
    }
  },
  watch: {
    H1Degonf (newName) {
      localStorage.H1Degonf = newName
    },
    H2Degonf (newName) {
      localStorage.H2Degonf = newName
    },
    H3Degonf (newName) {
      localStorage.H3Degonf = newName
    },
    H4Degonf (newName) {
      localStorage.H4Degonf = newName
    }
  },
  mounted () {
    if (localStorage.picked) {
      this.picked = localStorage.picked
    }
  }
}
</script>

<style>
</style>
