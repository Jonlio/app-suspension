<template>
  <div class="p-3 sm:p-10 py-8 w-full">
    <!-- REGLAGE ASSIETTE -->
    <div>
      <h2 class="text-center text-gray-600 font-bold text-2xl sm:text-4xl">
        Réglage de l'assiette (cotes H)
      </h2>
      <h2 class="text-center font-bold text-base sm:text-xl text-blue-800">
        (H1 + H3)/2 - (H2 + H4)/2 ≤ 3 mm
      </h2>
    </div>
    <!--Avertissements Valeurs-->
    <div
      class="space-y-3 p-8 mt-10 sm:mt-16 mb-10 border-double border-4 border-light-blue-500 w-2/3 mx-auto font-bold shadow-xl"
    >
      <!--Avertissements HAUTEURS SI MOTRICE 21500/72500-->
      <div v-if="picked === 'motrice'" class="border-b-2 pb-3">
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
      <!--Avertissements HAUTEURS SI REMORQUE OU 73500-->
      <div v-else class="border-b-2 pb-3">
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
      <!--Avertissements PRESSIONS SI MOTRICE 21500/72500-->
      <div v-if="serie != 'X 73500'" class="border-b-2 pb-4">
        <transition name="fade" mode="out-in">
          <p
            v-if="deltaPapreg.toFixed(2) > 0.3 || deltaPapreg.toFixed(2) < -0.3"
            key="1"
            class="text-center text-red-500 text-xl sm:text-2xl"
          >
            Delta Pressions non conforme <br> ({{ deltaPapreg.toFixed(2) }} bar)
          </p>
          <p v-else key="2" class="text-center text-green-500 text-xl sm:text-2xl">
            Delta Pressions conforme <br> ({{ deltaPapreg.toFixed(2) }} bar)
          </p>
        </transition>
      </div>
      <!--Avertissements PRESSIONS SI REMORQUE OU 73500-->
      <div v-else class="border-b-2 pb-4">
        <transition name="fade" mode="out-in">
          <p
            v-if="deltaPapreg.toFixed(2) > 0.2 || deltaPapreg.toFixed(2) < -0.2"
            key="1"
            class="text-center text-red-500 text-xl sm:text-2xl"
          >
            Delta Pressions non conforme <br> ({{ deltaPapreg.toFixed(2) }} bar)
          </p>
          <p v-else key="2" class="text-center text-green-500 text-xl sm:text-2xl">
            Delta Pressions conforme <br> ({{ deltaPapreg.toFixed(2) }} bar)
          </p>
        </transition>
      </div>
      <!--Avertissements ASSIETTE-->
      <transition name="fade" mode="out-in">
        <p
          v-if="
            moyenneGauche - moyenneDroite <= 3 &&
              moyenneDroite - moyenneGauche <= 3
          "
          key="1"
          class="text-center text-green-500 text-xl sm:text-2xl"
        >
          Assiette conforme <br> ({{ deltaAssiette }} mm)
        </p>
        <p v-else key="2" class="text-center text-red-500 text-xl sm:text-2xl">
          Assiette non conforme <br> ({{ deltaAssiette }} mm)
        </p>
      </transition>
    </div>
    <!--AFFICHAGE MOYENNES GAUCHE/DROITE-->
    <div class="flex justify-around text-gray-600 text-md sm:text-xl font-bold mt-20">
      <div class="text-center">
        <p class="text-gray-700">
          Moyenne Gauche:
        </p>
        <p
          v-if="
            moyenneGauche - moyenneDroite <= 3 &&
              moyenneDroite - moyenneGauche <= 3
          "
          class="text-green-500 text-2xl sm:text-3xl"
        >
          {{ moyenneGauche }}
        </p>
        <p v-else class="text-red-500 text-2xl sm:text-3xl">
          {{ moyenneGauche }}
        </p>
      </div>
      <div class="text-center">
        <p class="text-gray-700">
          Moyenne Droite:
        </p>
        <p
          v-if="
            moyenneGauche - moyenneDroite <= 3 &&
              moyenneDroite - moyenneGauche <= 3
          "
          class="text-green-500 text-2xl sm:text-3xl"
        >
          {{ moyenneDroite }}
        </p>
        <p v-else class="text-red-500 text-2xl sm:text-3xl">
          {{ moyenneDroite }}
        </p>
      </div>
    </div>
    <!--VUE FROM TOP-->
    <div class="flex text-xl sm:text-3xl font-black text-gray-600">
      <div class="flex flex-col justify-around mx-auto">
        <div>
          <div>
            <InputH v-model="H1Gonf" roue="H1" />
            <div v-if="picked === 'motrice'">
              <p
                v-if="deltaH1 > 38 || deltaH1 < 32"
                class="text-red-500 text-base sm:text-2xl text-right mb-5 clignote"
              >
                D: {{ deltaH1 }}
              </p>
              <p v-else class="text-green-500 text-base sm:text-2xl text-right mb-5">
                D: {{ deltaH1 }}
              </p>
            </div>
            <div v-else>
              <p
                v-if="deltaH1 > 33 || deltaH1 < 27"
                class="text-red-500 text-base sm:text-2xl text-right mb-5 clignote"
              >
                D: {{ deltaH1 }}
              </p>
              <p v-else class="text-green-500 text-base sm:text-2xl text-right mb-5">
                D: {{ deltaH1 }}
              </p>
            </div>
            <InputP v-model="P1Gonf" roue="P1" />
          </div>
        </div>
        <div>
          <div>
            <InputH v-model="H3Gonf" roue="H3" />
            <div v-if="picked === 'motrice'">
              <p
                v-if="deltaH3 > 38 || deltaH3 < 32"
                class="text-red-500 text-base sm:text-2xl text-right mb-5 clignote"
              >
                D: {{ deltaH3 }}
              </p>
              <p v-else class="text-green-500 text-base sm:text-2xl text-right mb-5">
                D: {{ deltaH3 }}
              </p>
            </div>
            <div v-else>
              <p
                v-if="deltaH3 > 33 || deltaH3 < 27"
                class="text-red-500 text-base sm:text-2xl text-right mb-5 clignote"
              >
                D: {{ deltaH3 }}
              </p>
              <p v-else class="text-green-500 text-base sm:text-2xl text-right mb-5">
                D: {{ deltaH3 }}
              </p>
            </div>
          </div>
          <InputP2 v-model="P3Gonf" roue="P3" />
        </div>
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
        <div>
          <div>
            <InputH v-model="H2Gonf" roue="H2" />
            <div v-if="picked === 'motrice'">
              <p
                v-if="deltaH2 > 38 || deltaH2 < 32"
                class="text-red-500 text-base sm:text-2xl text-right mb-5 clignote"
              >
                D: {{ deltaH2 }}
              </p>
              <p v-else class="text-green-500 text-base sm:text-2xl text-right mb-5">
                D: {{ deltaH2 }}
              </p>
            </div>
            <div v-else>
              <p
                v-if="deltaH2 > 33 || deltaH2 < 27"
                class="text-red-500 text-base sm:text-2xl text-right mb-5 clignote"
              >
                D: {{ deltaH2 }}
              </p>
              <p v-else class="text-green-500 text-base sm:text-2xl text-right mb-5">
                D: {{ deltaH2 }}
              </p>
            </div>
          </div>
          <InputP2 v-model="P2Gonf" roue="P2" />
        </div>
        <div>
          <div>
            <InputH v-model="H4Gonf" roue="H4" />
            <div v-if="picked === 'motrice'">
              <p
                v-if="deltaH4 > 38 || deltaH4 < 32"
                class="text-red-500 text-base sm:text-2xl text-right mb-5 clignote"
              >
                D: {{ deltaH4 }}
              </p>
              <p v-else class="text-green-500 text-base sm:text-2xl text-right mb-5">
                D: {{ deltaH4 }}
              </p>
            </div>
            <div v-else>
              <p
                v-if="deltaH4 > 33 || deltaH4 < 27"
                class="text-red-500 text-base sm:text-2xltext-right mb-5 clignote"
              >
                D: {{ deltaH4 }}
              </p>
              <p v-else class="text-green-500 text-base sm:text-2xl text-right mb-5">
                D: {{ deltaH4 }}
              </p>
            </div>
          </div>
          <InputP v-model="P4Gonf" roue="P4" />
        </div>
      </div>
    </div>
    <!--BOUTON NAV-->
    <div class="p-10">
      <nuxt-link to="/Recapitulatif">
        <button
          class="block mx-auto px-4 sm:px-6 py-2 sm:py-2 text-base sm:text-lg font-black leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
        >
          Tableaux récapitulatifs
        </button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      H1Degonf: null,
      H2Degonf: null,
      H3Degonf: null,
      H4Degonf: null,
      H1Gonf: null,
      H2Gonf: null,
      H3Gonf: null,
      H4Gonf: null,
      P1Degonf: null,
      P2Degonf: null,
      P3Degonf: null,
      P4Degonf: null,
      P1Gonf: null,
      P2Gonf: null,
      P3Gonf: null,
      P4Gonf: null,
      H1Final: null,
      H2Final: null,
      H3Final: null,
      H4Final: null,
      picked: '',
      serie: ''
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
      return parseFloat(this.H1Degonf) + 35
    },
    valAtH2 () {
      return parseFloat(this.H2Degonf) + 35
    },
    valAtH3 () {
      return parseFloat(this.H3Degonf) + 35
    },
    valAtH4 () {
      return parseFloat(this.H4Degonf) + 35
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
    },
    P1P4avreg () {
      return parseFloat(this.P1Degonf) + parseFloat(this.P4Degonf)
    },
    P2P3avreg () {
      return parseFloat(this.P2Degonf) + parseFloat(this.P3Degonf)
    },
    deltaPavreg () {
      return parseFloat(this.P1P4avreg) - parseFloat(this.P2P3avreg)
    },
    P1P4apreg () {
      return parseFloat(this.P1Gonf) + parseFloat(this.P4Gonf)
    },
    P2P3apreg () {
      return parseFloat(this.P2Gonf) + parseFloat(this.P3Gonf)
    },
    deltaPapreg () {
      return parseFloat(this.P1P4apreg) - parseFloat(this.P2P3apreg)
    },
    moyenneGauche () {
      return (parseFloat(this.H1Gonf) + parseFloat(this.H3Gonf)) / 2
    },
    moyenneDroite () {
      return (parseFloat(this.H2Gonf) + parseFloat(this.H4Gonf)) / 2
    },
    finalMoyenneGauche () {
      return (this.H1Final + this.H3Final) / 2
    },
    finalMoyenneDroite () {
      return (this.H2Final + this.H4Final) / 2
    },
    deltaAssiette () {
      return this.moyenneGauche - this.moyenneDroite
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
    },
    P1Gonf (newName) {
      localStorage.P1Gonf = newName
    },
    P2Gonf (newName) {
      localStorage.P2Gonf = newName
    },
    P3Gonf (newName) {
      localStorage.P3Gonf = newName
    },
    P4Gonf (newName) {
      localStorage.P4Gonf = newName
    }
  },
  mounted () {
    if (localStorage.serie) {
      this.serie = localStorage.serie
    }
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
    if (localStorage.P1Gonf) {
      this.P1Gonf = localStorage.P1Gonf
    }
    if (localStorage.P2Gonf) {
      this.P2Gonf = localStorage.P2Gonf
    }
    if (localStorage.P3Gonf) {
      this.P3Gonf = localStorage.P3Gonf
    }
    if (localStorage.P4Gonf) {
      this.P4Gonf = localStorage.P4Gonf
    }
    if (localStorage.P1Degonf) {
      this.P1Degonf = localStorage.P1Degonf
    }
    if (localStorage.P2Degonf) {
      this.P2Degonf = localStorage.P2Degonf
    }
    if (localStorage.P3Degonf) {
      this.P3Degonf = localStorage.P3Degonf
    }
    if (localStorage.P4Degonf) {
      this.P4Degonf = localStorage.P4Degonf
    }
  }
}
</script>

<style scoped>
</style>
