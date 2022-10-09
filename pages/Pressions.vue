<template>
  <!-- PRISE HAUTEURS GonfLEES -->
  <div class="flex flex-col justify-center items-center ssm:w-24 p-5">
    <div class="sm:p-10 py-8 w-full text-gray-600 text-xl sm:text-4xl font-black">
      <h2 class="text-center font-bold text-2xl sm:text-4xl mb-16 ssm:w-24">
        Relevé des pressions (bar)
      </h2>
      <div class="flex">
        <div class="flex flex-col justify-around mx-auto">
          <div>
            <InputP v-model="P1Degonf" roue="P1" />
          </div>
          <div>
            <InputP2 v-model="P3Degonf" roue="P3" />
          </div>
        </div>
        <!--Image-->
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
          <InputP2 v-model="P2Degonf" roue="P2" />
          <InputP v-model="P4Degonf" roue="P4" />
        </div>
      </div>
    </div>
    <transition name="fade">
      <div
        v-if="
          P1Degonf > 0.1 && P2Degonf > 0.1 && P3Degonf > 0.1 && P4Degonf > 0.1
        "
        class="p-10"
      >
        <nuxt-link to="/TableauPressions">
          <button
            class="block w-full mx-auto px-4 sm:px-6 py-2 sm:py-4 text-sm sm:text-lg font-black leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
            @click="vider"
          >
            Valider Pressions
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
      P1Degonf: null,
      P2Degonf: null,
      P3Degonf: null,
      P4Degonf: null,
      P1Gonf: null,
      P2Gonf: null,
      P3Gonf: null,
      P4Gonf: null,
      picked: ''
    }
  },
  watch: {
    P1Degonf (newName) {
      localStorage.P1Degonf = newName
    },
    P2Degonf (newName) {
      localStorage.P2Degonf = newName
    },
    P3Degonf (newName) {
      localStorage.P3Degonf = newName
    },
    P4Degonf (newName) {
      localStorage.P4Degonf = newName
    }
  },
  mounted () {
    if (localStorage.picked) {
      this.picked = localStorage.picked
    }
  },
  methods: {
    vider () {
      localStorage.removeItem('P1Gonf')
      localStorage.removeItem('P2Gonf')
      localStorage.removeItem('P3Gonf')
      localStorage.removeItem('P4Gonf')
    }
  }
}
</script>

<style>
</style>
