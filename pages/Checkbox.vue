<template>
  <div
    class="flex flex-col justify-center items-center font-medium w-10/12 mx-auto p-6 sm:p-12"
  >
    <div class="block mb-12 sm:mb-20 sm:mt-10">
      <span
        class="text-blue-800 text-xl sm:text-4xl font-bold"
      >Vérifications préliminaires</span>
      <div class="mt-10 sm:mt-20">
        <div class="mt-3">
          <label class="inline-flex items-center">
            <input type="checkbox" class="form-checkbox h-6 w-6 sm:h-10 sm:w-10">
            <span class="ml-4 text-base sm:text-2xl">Protection de la rame</span>
          </label>
        </div>
      </div>
      <div class="mt-8 sm:mt-12">
        <div class="mt-3">
          <label class="inline-flex items-center">
            <input type="checkbox" class="form-checkbox h-6 w-6 sm:h-10 sm:w-10">
            <span
              class="ml-4 text-base sm:text-2xl"
            >Contrôle de la conformité de la voie</span>
          </label>
        </div>
      </div>
      <div class="mt-8 sm:mt-12">
        <div class="mt-3">
          <label class="inline-flex items-center">
            <input type="checkbox" class="form-checkbox h-6 w-6 sm:h-10 sm:w-10">
            <span
              class="ml-4 text-base sm:text-2xl"
            >Isolement de la rame (frein + suspension)</span>
          </label>
        </div>
      </div>
      <div class="mt-8 sm:mt-12">
        <div class="mt-3">
          <label class="inline-flex items-center">
            <input type="checkbox" class="form-checkbox h-6 w-6 sm:h-10 sm:w-10">
            <span
              v-if="serie !== 'X 73500'"
              class="ml-4 text-base sm:text-2xl"
            >Dégonflage des suspensions des véhicules adjacents</span>
            <span
              v-else
              class="ml-4 text-base sm:text-2xl"
            >Déconnexion des bielles de barre anti roulis</span>
          </label>
        </div>
      </div>
      <div class="mt-8 sm:mt-12">
        <div class="mt-3">
          <label class="inline-flex items-center">
            <input type="checkbox" class="form-checkbox h-6 w-6 sm:h-10 sm:w-10">
            <span
              class="ml-4 text-base sm:text-2xl"
            >Mise en place des cales de centrage du pivot</span>
          </label>
        </div>
      </div>
      <div class="mt-8 sm:mt-12">
        <div class="mt-3">
          <label for="checkbox" class="inline-flex items-center">
            <input
              v-model="checked"
              type="checkbox"
              class="form-checkbox h-6 w-6 sm:h-10 sm:w-10"
            >
            <span class="ml-4 text-base sm:text-2xl">Mise en place des mètres</span>
          </label>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div v-if="checked === true">
        <nuxt-link to="/HauteursDeg">
          <button
            class="block mx-auto px-6 sm:px-8 py-2 sm:py-4 text-sm sm:text-xl font-black leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
          >
            Prise cotes basses
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
      checked: false,
      serie: ''
    }
  },
  watch: {
    serie (newName) {
      localStorage.serie = newName
    }
  },
  mounted () {
    if (localStorage.serie) {
      this.serie = localStorage.serie
    }
  }
}
</script>

<style>
</style>
