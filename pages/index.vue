<template>
  <div class="p-6 sm:p-10 text-center">
    <div>
      <img src="~/static/icon.png" alt="" class="mx-auto w-1/2 mt:8 sm:mt-16">
      <h1 class="title text-4xl sm:text-6xl font-bold text-gray-800 mt-5">
        Réglage Suspension
      </h1>
      <!--SELECT SERIE-->
      <label class="flex items-baseline w-1/2 mx-auto mt-6">
        <select
          v-model="serie"
          class="form-select block mx-auto mt-1 bg-gray-200 text-md sm:text-3xl font-bold text-gray-800 text-center"
        >
          <option disabled value="">Série</option>
          <option>Z 21500</option>
          <option>X 72500</option>
          <option>X 73500</option>
        </select>
      </label>
      <transition name="page" mode="out-in">
        <p
          v-if="serie === 'Z 21500' || serie === 'X 72500'"
          key="1"
          class="font-bold text-sm sm:text-xl mt-6 w-2/3 sm:w-1/2 mx-auto text-gray-800 border-4 border-light-blue-500 p-3"
        >
          Document à appliquer:<br>
          VR5 504 - Fascicule 13
        </p>
        <p
          v-else-if="serie === 'X 73500'"
          key="2"
          class="font-bold text-sm sm:text-xl mt-6 w-2/3 sm:w-1/2 mx-auto text-gray-800 border-4 border-light-blue-500 p-3"
        >
          Document à appliquer:<br>
          VR5 504 - Fascicule 16
        </p>
      </transition>
      <!--SELECT NOM ET SERIE-->
      <div class="bg-gray-800 rounded-2xl p-8 mt-16">
        <InputNameSerie v-model="nom" title="Réalisé par:" />
        <InputNameSerie v-model="numero" title="Numéro d'engin:" />
        <transition name="fade">
          <div
            v-if="serie === 'X 72500' || serie === 'Z 21500'"
            class="flex justify-center text-xl md:text-2xl font-bold mt-10"
          >
            <div class="flex items-center mb-2 mr-4 p-6">
              <input
                id="motrice"
                v-model="picked"
                type="radio"
                name="radio"
                value="motrice"
                class="form-radio h-6 w-6"
              >
              <label for="motrice" class="inline-flex items-center">
                <span class="ml-3 text-xl md:text-2xl text-white">Motrice</span>
              </label>
            </div>
            <div class="flex items-center mb-2 p-6">
              <input
                id="remorque"
                v-model="picked"
                type="radio"
                name="radio"
                value="remorque"
                class="form-radio h-6 w-6"
              >
              <label
                for="remorque"
                class="ml-3 text-2xl text-white"
              >Remorque</label>
            </div>
          </div>
        </transition>
        <!--SELECTION M1/M2-->
        <transition name="fade">
          <div
            v-if="picked === 'motrice' && serie !== 'X 73500'"
            class="flex flex-col justify-center items-center text-xl font-bold"
          >
            <div class="flex items-center mb-5">
              <input
                id="M1"
                v-model="cote"
                type="radio"
                name="radi"
                value="M1"
                class="form-radio h-6 w-6"
              >
              <label for="M1" class="inline-flex items-center">
                <span class="ml-3 ttext-xl md:text-2xl text-white">Motrice 1</span>
              </label>
            </div>
            <div class="flex items-center">
              <input
                id="M2"
                v-model="cote"
                type="radio"
                name="radi"
                value="M2"
                class="form-radio h-6 w-6"
              >
              <label for="M2" class="ml-3 text-xl md:text-2xl text-white">Motrice 2</label>
            </div>
          </div>
        </transition>
      </div>
      <!--BOUTON COMMENCER-->
      <transition name="fade">
        <div
          v-if="
            (picked === 'motrice' ||
              picked === 'remorque' ||
              serie === 'X 73500') &&
              nom.length > 1 &&
              numero.length > 4
          "
          class="mt-20"
        >
          <nuxt-link to="/Checkbox">
            <button
              class="block w-2/3 mx-auto px-6 py-2 sm:text-lg font-black leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
              @click="vider"
            >
              Commencer le réglage
            </button>
          </nuxt-link>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bobo: '',
      serie: '',
      numero: '',
      nom: '',
      picked: '',
      cote: ''
    }
  },
  watch: {
    serie (newName) {
      localStorage.serie = newName
    },
    picked (newName) {
      localStorage.picked = newName
    },
    nom (newName) {
      localStorage.nom = newName
    },
    numero (newName) {
      localStorage.numero = newName
    },
    cote (newName) {
      localStorage.cote = newName
    }
  },
  mounted () {
    localStorage.clear()
  },
  methods: {
    vider () {
      if (this.serie === 'X 73500') {
        localStorage.removeItem('picked')
        localStorage.removeItem('cote')
      }
      if (this.picked === 'remorque') {
        localStorage.removeItem('cote')
      }
    }
  }
}
</script>
<style>
</style>
