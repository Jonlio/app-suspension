<template>
  <!-- PRISE HAUTEURS GonfLEES -->
  <div class="flex flex-col justify-center items-center sm:mt-20 p-5">
    <div class="sm:p-10 py-8 w-full text-gray-600 text-xl sm:text-4xl font-black">
      <h2 class="text-center font-bold text-xl sm:text-4xl mb-16 sm:mb-20">
        Relevé des Hauteurs Gonflées (mm)
      </h2>
      <div class="flex">
        <div class="flex flex-col justify-around mx-auto">
            <InputH roue="H1" v-model="H1Gonf" />
            <InputH roue="H3" v-model="H3Gonf" />
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
            <InputH roue="H2" v-model="H2Gonf" />
            <InputH roue="H4" v-model="H4Gonf" />
        </div>
      </div>
    </div>
    <transition name="fade">
      <div
        v-if="checkValues"
        class="mt-8"
      >
        <nuxt-link to="/TableauHauteurs">
          <button
            class="block w-full mx-auto px-4 sm:px-6 py-2 sm:py-4 text-sm sm:text-lg font-black leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
          >
            Valider les valeurs
          </button>
        </nuxt-link>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      H1Gonf: null,
      H2Gonf: null,
      H3Gonf: null,
      H4Gonf: null,
      picked: ''
    }
  },
  computed: {
    checkValues () {
      return this.H1Gonf > 100 && this.H2Gonf > 100 && this.H3Gonf > 100 && this.H4Gonf > 100
    }
  },
  watch: {
    H1Gonf (newName) {
      localStorage.H1Gonf = newName
    },
    H2Gonf (newName) {
      localStorage.H2Gonf = newName
    },
    H3Gonf (newName) {
      localStorage.H3Gonf = newName
    },
    H4Gonf (newName) {
      localStorage.H4Gonf = newName
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
