<template>
  <div>
    <!-- REGLAGE HAUTEUR -->
    <div class="p-3 sm:p-10 py-8 w-full">
      <h2 class="text-center font-bold text-2xl sm:text-4xl mb-10 md:mb-16 sm:mb-20 text-gray-600">
        Réglage Hauteurs
      </h2>
      <!--TABLEAU HAUTEURS-->
      <div
        class="shadow overflow-hidden rounded border-b border-gray-200 text-xs sm:text-lg font-bold"
      >
        <table class="min-w-full bg-white">
          <thead class="bg-blue-700 text-white">
            <tr>
              <th class="w-1/3 text-center py-3 px-4 uppercase">
                Hauteurs gonflées
              </th>
              <th
                v-if="picked === 'motrice'"
                class="text-center py-3 px-4 uppercase"
              >
                Delta D (35 +- 3mm)
              </th>
              <th v-else class="text-center py-3 px-4 uppercase">
                Delta D (30 +- 3mm)
              </th>
              <th class="text-center py-3 px-4 uppercase">
                Valeurs à atteindre
              </th>
            </tr>
          </thead>
          <tbody class="text-gray-700">
            <!--H1 SI MOTRICE-->
            <tr v-if="picked === 'motrice'">
              <td class="w-1/3 text-center py-3 px-4">
                H1:
                <input
                  v-model.number="H1Gonf"
                  class="w-1/4 text-center font-bold"
                >
              </td>
              <td
                v-if="deltaH1 > 38 || deltaH1 < 32"
                class="text-red-500 font-bold text-center py-3 px-4"
              >
                {{ deltaH1 }}
              </td>
              <td v-else class="text-green-600 font-bold text-center py-3 px-4">
                {{ deltaH1 }}
              </td>
              <td class="text-center font-black py-3 px-4">
                {{ valAtH1 }} mm
              </td>
            </tr>
            <!--H1 SI REMORQUE OU 73500-->
            <tr v-else>
              <td class="w-1/3 text-center py-3 px-4">
                H1:
                <input
                  v-model.number="H1Gonf"
                  class="w-1/4 text-center font-bold"
                >
              </td>
              <td
                v-if="deltaH1 > 33 || deltaH1 < 27"
                class="text-red-500 font-bold text-center py-3 px-4"
              >
                {{ deltaH1 }}
              </td>
              <td v-else class="text-green-600 font-bold text-center py-3 px-4">
                {{ deltaH1 }}
              </td>
              <td class="text-center font-black py-3 px-4">
                {{ valAtH1Rem }} mm
              </td>
            </tr>
            <!--H2 SI MOTRICE-->
            <tr v-if="picked === 'motrice'" class="bg-gray-100">
              <td class="w-1/3 text-center py-3 px-4">
                H2:
                <input
                  v-model.number="H2Gonf"
                  class="w-1/4 text-center font-bold"
                >
              </td>
              <td
                v-if="deltaH2 > 38 || deltaH2 < 32"
                class="text-red-500 font-bold text-center py-3 px-4"
              >
                {{ deltaH2 }}
              </td>
              <td v-else class="text-green-600 font-bold text-center py-3 px-4">
                {{ deltaH2 }}
              </td>
              <td class="text-center font-black py-3 px-4">
                {{ valAtH2 }} mm
              </td>
            </tr>
            <!--H2 SI REMORQUE OU 73500-->
            <tr v-else class="bg-gray-100">
              <td class="w-1/3 text-center py-3 px-4">
                H2:
                <input
                  v-model.number="H2Gonf"
                  class="w-1/4 text-center font-bold"
                >
              </td>
              <td
                v-if="deltaH2 > 33 || deltaH2 < 27"
                class="text-red-500 font-bold text-center py-3 px-4"
              >
                {{ deltaH2 }}
              </td>
              <td v-else class="text-green-600 font-bold text-center py-3 px-4">
                {{ deltaH2 }}
              </td>
              <td class="text-center font-black py-3 px-4">
                {{ valAtH2Rem }} mm
              </td>
            </tr>
            <!--H3 SI MOTRICE-->
            <tr v-if="picked === 'motrice'">
              <td class="w-1/3 text-center py-3 px-4">
                H3:
                <input
                  v-model.number="H3Gonf"
                  class="w-1/4 text-center font-bold"
                >
              </td>
              <td
                v-if="deltaH3 > 38 || deltaH3 < 32"
                class="text-red-500 font-bold text-center py-3 px-4"
              >
                {{ deltaH3 }}
              </td>
              <td v-else class="text-green-600 font-bold text-center py-3 px-4">
                {{ deltaH3 }}
              </td>
              <td class="text-center font-black py-3 px-4">
                {{ valAtH3 }} mm
              </td>
            </tr>
            <!--H3 SI REMORQUE OU 73500-->
            <tr v-else>
              <td class="w-1/3 text-center py-3 px-4">
                H3:
                <input
                  v-model.number="H3Gonf"
                  class="w-1/4 text-center font-bold"
                >
              </td>
              <td
                v-if="deltaH3 > 33 || deltaH3 < 27"
                class="text-red-500 font-bold text-center py-3 px-4"
              >
                {{ deltaH3 }}
              </td>
              <td v-else class="text-green-600 font-bold text-center py-3 px-4">
                {{ deltaH3 }}
              </td>
              <td class="text-center font-black py-3 px-4">
                {{ valAtH3Rem }} mm
              </td>
            </tr>
            <!--H4 SI MOTRICE-->
            <tr v-if="picked === 'motrice'" class="bg-gray-100">
              <td class="w-1/3 text-center py-3 px-4">
                H4:
                <input
                  v-model.number="H4Gonf"
                  class="w-1/4 text-center font-bold"
                >
              </td>
              <td
                v-if="deltaH4 > 38 || deltaH4 < 32"
                class="text-red-500 font-bold text-center py-3 px-4"
              >
                {{ deltaH4 }}
              </td>
              <td v-else class="text-green-600 font-bold text-center py-3 px-4">
                {{ deltaH4 }}
              </td>
              <td class="text-center font-black py-3 px-4">
                {{ valAtH4 }} mm
              </td>
            </tr>
            <!--H4 SI Remorque ou 73500-->
            <tr v-else class="bg-gray-100">
              <td class="w-1/3 text-center py-3 px-4">
                H4:
                <input
                  v-model.number="H4Gonf"
                  class="w-1/4 text-center font-bold"
                >
              </td>
              <td
                v-if="deltaH4 > 33 || deltaH4 < 27"
                class="text-red-500 font-bold text-center py-3 px-4"
              >
                {{ deltaH4 }}
              </td>
              <td v-else class="text-green-600 font-bold text-center py-3 px-4">
                {{ deltaH4 }}
              </td>
              <td class="text-center font-black py-3 px-4">
                {{ valAtH4Rem }} mm
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!--CADRE AVERTISSEMENTS C/NC-->
    <!--SI MOTRICE-->
    <div
      v-if="picked === 'motrice'"
      class="p-5 mb-10 border-double border-4 border-light-blue-500 w-2/3 mx-auto font-bold shadow-xl"
    >
      <transition name="fade" mode="out-in">
        <p
          v-if="
            deltaH1 > 38 ||
              deltaH1 < 32 ||
              deltaH2 > 38 ||
              deltaH2 < 32 ||
              deltaH3 > 38 ||
              deltaH3 < 32 ||
              deltaH4 > 38 ||
              deltaH4 < 32
          "
          key="1"
          class="text-center text-red-500 text-xl sm:text-2xl"
        >
          Delta Hauteurs non conforme
        </p>
        <p v-else key="2" class="text-center text-green-500 text-xl sm:text-2xl">
          Delta Hauteurs conforme
        </p>
      </transition>
    </div>
    <!--SI REMORQUE OU 73500-->
    <div
      v-else
      class="p-5 mb-10 border-double border-4 border-light-blue-500 w-2/3 mx-auto font-bold"
    >
      <transition name="fade" mode="out-in">
        <p
          v-if="
            deltaH1 > 33 ||
              deltaH1 < 27 ||
              deltaH2 > 33 ||
              deltaH2 < 27 ||
              deltaH3 > 33 ||
              deltaH3 < 27 ||
              deltaH4 > 33 ||
              deltaH4 < 27
          "
          key="1"
          class="text-center text-red-500 text-xl sm:text-2xl"
        >
          Delta Hauteurs non conforme
        </p>
        <p v-else key="2" class="text-center text-green-500 text-xl sm:text-2xl">
          Delta Hauteurs conforme
        </p>
      </transition>
    </div>
    <!--VUE FROM TOP-->
    <div class="flex text-xl sm:text-3xl font-black text-gray-600">
      <div class="flex flex-col justify-around mx-auto">
        <div>
          <InputH v-model="H1Gonf" roue="H1" />
          <div v-if="picked === 'motrice'">
            <p
              v-if="deltaH1 > 38 || deltaH1 < 32"
              class="text-red-500 text-xl sm:text-2xl text-right clignote"
            >
              D: {{ deltaH1 }}
            </p>
            <p v-else class="text-green-500 text-xl sm:text-2xl text-right">
              D: {{ deltaH1 }}
            </p>
          </div>
          <div v-else>
            <p
              v-if="deltaH1 > 33 || deltaH1 < 27"
              class="text-red-500 text-xl sm:text-2xl text-right clignote"
            >
              D: {{ deltaH1 }}
            </p>
            <p v-else class="text-green-500 text-xl sm:text-2xl text-right">
              D: {{ deltaH1 }}
            </p>
          </div>
        </div>
        <div>
          <InputH v-model="H3Gonf" roue="H3" />
          <div v-if="picked === 'motrice'">
            <p
              v-if="deltaH3 > 38 || deltaH3 < 32"
              class="text-red-500 text-xl sm:text-2xl text-right clignote"
            >
              D: {{ deltaH3 }}
            </p>
            <p v-else class="text-green-500 text-xl sm:text-2xl text-right">
              D: {{ deltaH3 }}
            </p>
          </div>
          <div v-else>
            <p
              v-if="deltaH3 > 33 || deltaH3 < 27"
              class="text-red-500 text-xl sm:text-2xl text-right clignote"
            >
              D: {{ deltaH3 }}
            </p>
            <p v-else class="text-green-500 text-xl sm:text-2xl text-right">
              D: {{ deltaH3 }}
            </p>
          </div>
        </div>
      </div>
      <!--IMAGE-->
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
      <img v-else src="~/assets/73500.png" class="mx-auto" alt="">
      <div class="flex flex-col justify-around mx-auto">
        <div>
          <InputH v-model="H2Gonf" roue="H2" />
          <div v-if="picked === 'motrice'">
            <p
              v-if="deltaH2 > 38 || deltaH2 < 32"
              class="text-red-500 text-xl sm:text-2xl text-right clignote"
            >
              D: {{ deltaH2 }}
            </p>
            <p v-else class="text-green-500 text-xl sm:text-2xl text-right">
              D: {{ deltaH2 }}
            </p>
          </div>
          <div v-else>
            <p
              v-if="deltaH2 > 33 || deltaH2 < 27"
              class="text-red-500 text-xl sm:text-2xl text-right clignote"
            >
              D: {{ deltaH2 }}
            </p>
            <p v-else class="text-green-500 text-xl sm:text-2xl text-right">
              D: {{ deltaH2 }}
            </p>
          </div>
        </div>
        <div>
          <InputH v-model="H4Gonf" roue="H4" />
          <div v-if="picked === 'motrice'">
            <p
              v-if="deltaH4 > 38 || deltaH4 < 32"
              class="text-red-500 text-xl sm:text-2xl text-right clignote"
            >
              D: {{ deltaH4 }}
            </p>
            <p v-else class="text-green-500 text-xl sm:text-2xl text-right">
              D: {{ deltaH4 }}
            </p>
          </div>
          <div v-else>
            <p
              v-if="deltaH4 > 33 || deltaH4 < 27"
              class="text-red-500 text-xl sm:text-2xl text-right clignote"
            >
              D: {{ deltaH4 }}
            </p>
            <p v-else class="text-green-500 text-xl sm:text-2xl text-right">
              D: {{ deltaH4 }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <!--BOUTON NAVIGATION-->
    <div class="p-12">
      <nuxt-link to="/Pressions">
        <button
          class="block mx-auto px-6 py-2 sm:text-lg font-black leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
        >
          Relever pressions
        </button>
      </nuxt-link>
    </div>
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
      H1Degonf: null,
      H2Degonf: null,
      H3Degonf: null,
      H4Degonf: null,
      picked: ''
    }
  },
  computed: {
    deltaH1 () {
      return this.H1Gonf - this.H1Degonf
    },
    deltaH2 () {
      return this.H2Gonf - this.H2Degonf
    },
    deltaH3 () {
      return this.H3Gonf - this.H3Degonf
    },
    deltaH4 () {
      return this.H4Gonf - this.H4Degonf
    },
    valAtH1 () {
      return parseInt(this.H1Degonf) + 35
    },
    valAtH2 () {
      return parseInt(this.H2Degonf) + 35
    },
    valAtH3 () {
      return parseInt(this.H3Degonf) + 35
    },
    valAtH4 () {
      return parseInt(this.H4Degonf) + 35
    },
    valAtH1Rem () {
      return parseInt(this.H1Degonf) + 30
    },
    valAtH2Rem () {
      return parseInt(this.H2Degonf) + 30
    },
    valAtH3Rem () {
      return parseInt(this.H3Degonf) + 30
    },
    valAtH4Rem () {
      return parseInt(this.H4Degonf) + 30
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
    if (localStorage.H1Degonf) {
      this.H1Degonf = localStorage.H1Degonf
    }
    if (localStorage.H2Degonf) {
      this.H2Degonf = localStorage.H2Degonf
    }
    if (localStorage.H3Degonf) {
      this.H3Degonf = localStorage.H3Degonf
    }
    if (localStorage.H4Degonf) {
      this.H4Degonf = localStorage.H4Degonf
    }
    if (localStorage.H1Gonf) {
      this.H1Gonf = localStorage.H1Gonf
    }
    if (localStorage.H2Gonf) {
      this.H2Gonf = localStorage.H2Gonf
    }
    if (localStorage.H3Gonf) {
      this.H3Gonf = localStorage.H3Gonf
    }
    if (localStorage.H4Gonf) {
      this.H4Gonf = localStorage.H4Gonf
    }
  }
}
</script>

<style>
</style>
