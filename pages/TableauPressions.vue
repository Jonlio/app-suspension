<template>
  <!-- REGLAGE PRESSIONS -->
  <div class="p-3 sm:p-10 py-8 w-full">
    <div>
      <h2 class="text-center font-bold text-2xl sm:text-4xl text-gray-600">
        Réglage Pressions
      </h2>
      <h2
        v-if="serie !== 'X 73500'"
        class="text-center font-bold text-md sm:text-xl text-blue-800"
      >
        (P1+P4) - (P2+P3) ≤ 0,3 bar
      </h2>
      <h2 v-else class="text-center font-bold text-md sm:text-xl text-blue-800">
        (P1+P4) - (P2+P3) ≤ 0,2 bar
      </h2>
      <div class="mx-auto space-y-6 py-8">
        <!-- PRESSIONS AVANT REGLAGE -->
        <div
          class="flex justify-center space-x-10 font-bold text-xs sm:text-lg"
        >
          <div
            class="w-1/3 shadow overflow-hidden rounded border-b border-gray-200"
          >
            <table class="bg-white">
              <thead class="bg-gray-800 text-white">
                <tr>
                  <th class="w-1/3 text-center py-3 px-4 uppercase">
                    Pressions Initiales
                  </th>
                </tr>
              </thead>
              <tbody class="text-gray-700">
                <tr>
                  <td class="w-1/3 text-center py-3 px-4">
                    P1: {{ P1Degonf }}
                  </td>
                </tr>
                <tr class="bg-gray-100">
                  <td class="w-1/3 text-center py-3 px-4">
                    P2: {{ P2Degonf }}
                  </td>
                </tr>
                <tr>
                  <td class="w-1/3 text-center py-3 px-4">
                    P3: {{ P3Degonf }}
                  </td>
                </tr>
                <tr class="bg-gray-100">
                  <td class="w-1/3 text-center py-3 px-4">
                    P4: {{ P4Degonf }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- RESULTATS AVANT REGLAGE -->
          <div
            class="w-1/3 shadow overflow-hidden rounded border-b border-gray-200"
          >
            <table class="bg-white h-full">
              <tbody class="text-gray-700">
                <tr>
                  <td class="w-1/3 text-center py-3 px-4 text-yellow-500">
                    P1 + P4: {{ P1P4avreg.toFixed(2) }}
                  </td>
                </tr>
                <tr class="bg-gray-100">
                  <td class="w-1/3 text-center py-3 text-pink-500 px-4">
                    P2 + P3: {{ P2P3avreg.toFixed(2) }}
                  </td>
                </tr>
                <!--DELTA SI 21500/72500-->
                <tr v-if="serie !== 'X 73500'">
                  <td
                    v-if="
                      deltaPavreg.toFixed(2) > 0.3 ||
                        deltaPavreg.toFixed(2) < -0.3
                    "
                    class="text-red-500 font-bold text-center py-3 px-4"
                  >
                    DELTA P: {{ deltaPavreg.toFixed(2) }}
                  </td>
                  <td
                    v-else
                    class="text-green-600 font-bold text-center py-3 px-4"
                  >
                    DELTA P: {{ deltaPavreg.toFixed(2) }}
                  </td>
                </tr>
                <!--DELTA SI 73500-->
                <tr v-else>
                  <td
                    v-if="
                      deltaPavreg.toFixed(2) > 0.2 ||
                        deltaPavreg.toFixed(2) < -0.2
                    "
                    class="text-red-500 font-bold text-center py-3 px-4"
                  >
                    DELTA P: {{ deltaPavreg.toFixed(2) }}
                  </td>
                  <td
                    v-else
                    class="text-green-600 font-bold text-center py-3 px-4"
                  >
                    DELTA P: {{ deltaPavreg.toFixed(2) }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!--AVERTISSEUR INITIALE C/NC SI 72500/21500-->
        <div v-if="serie !== 'X 73500'" class="mb-10">
          <div
            class="p-5 m-10 border-double border-4 border-light-blue-500 mx-auto font-bold shadow-xl"
          >
            <div
              v-if="
                deltaPavreg.toFixed(2) > 0.3 || deltaPavreg.toFixed(2) < -0.3
              "
            >
              <p class="text-center text-red-500 text-xl sm:text-2xl">
                Delta Pressions initiales non conforme
              </p>
            </div>
            <div v-else>
              <p class="text-center text-green-500 text-xl sm:text-2xl">
                Delta Pressions initiales conforme
              </p>
            </div>
          </div>
        </div>
        <!--AVERTISSEUR INITIALE C/NC SI 73500-->
        <div v-else class="mb-10">
          <div
            class="p-5 m-10 border-double border-4 border-light-blue-500 mx-auto font-bold shadow-xl"
          >
            <div
              v-if="
                deltaPavreg.toFixed(2) > 0.2 || deltaPavreg.toFixed(2) < -0.2
              "
            >
              <p class="text-center text-red-500 text-2xl">
                Delta Pressions initiales non conforme
              </p>
            </div>
            <div v-else>
              <p class="text-center text-green-500 text-2xl">
                Delta Pressions initiales conforme
              </p>
            </div>
          </div>
        </div>
        <!-- PRESSIONS APRES REGLAGE -->
        <!-- SI PRESSIONS INITIALES MODIFIEES -->
        <div
          v-if="
            (serie != 'X 73500' && deltaPavreg >= 0.31) ||
              deltaPavreg < -0.3 ||
              (serie === 'X 73500' && deltaPavreg >= 0.21) ||
              deltaPavreg < -0.2 ||
              P1Degonf != P1Gonf ||
              P2Degonf != P2Gonf ||
              P3Degonf != P3Gonf ||
              P4Degonf != P4Gonf
          "
        >
          <div
            class="flex justify-center space-x-10 font-bold text-xs sm:text-lg"
          >
            <div
              class="w-1/3 shadow overflow-hidden rounded border-b border-gray-200"
            >
              <table class="bg-white">
                <thead class="bg-gray-800 text-white">
                  <tr>
                    <th class="w-1/3 text-center py-3 px-4 uppercase">
                      Pressions après réglage
                    </th>
                  </tr>
                </thead>
                <tbody class="text-gray-700">
                  <tr>
                    <td class="w-1/3 text-center py-3 px-4">
                      P1:
                      <input
                        v-model.number="P1Gonf"
                        type="number"
                        class="w-1/4 text-center"
                      >
                    </td>
                  </tr>
                  <tr class="bg-gray-100">
                    <td class="w-1/3 text-center py-3 px-4">
                      P2:
                      <input
                        v-model.number="P2Gonf"
                        type="number"
                        class="w-1/4 text-center"
                      >
                    </td>
                  </tr>
                  <tr>
                    <td class="w-1/3 text-center py-3 px-4">
                      P3:
                      <input
                        v-model.number="P3Gonf"
                        type="number"
                        class="w-1/4 text-center"
                      >
                    </td>
                  </tr>
                  <tr class="bg-gray-100">
                    <td class="w-1/3 text-center py-3 px-4">
                      P4:
                      <input
                        v-model.number="P4Gonf"
                        type="number"
                        class="w-1/4 text-center"
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- RESULTATS APRES REGLAGE -->
            <div
              class="w-1/3 shadow overflow-hidden rounded border-b border-gray-200"
            >
              <table class="h-full bg-white">
                <tbody class="text-gray-700">
                  <tr>
                    <td class="w-1/3 text-center py-3 px-4 text-yellow-500">
                      P1 + P4: {{ P1P4apreg.toFixed(2) }}
                    </td>
                  </tr>
                  <tr class="bg-gray-100">
                    <td class="w-1/3 text-center py-3 px-4 text-pink-500">
                      P2 + P3: {{ P2P3apreg.toFixed(2) }}
                    </td>
                  </tr>
                  <!--DELTA SI 72500/21500-->
                  <tr v-if="serie !== 'X 73500'">
                    <td
                      v-if="
                        deltaPapreg.toFixed(2) > 0.3 ||
                          deltaPapreg.toFixed(2) < -0.3
                      "
                      class="text-red-500 font-bold text-center py-3 px-4"
                    >
                      DELTA P: {{ deltaPapreg.toFixed(2) }}
                    </td>
                    <td
                      v-else
                      class="text-green-600 font-bold text-center py-3 px-4"
                    >
                      DELTA P: {{ deltaPapreg.toFixed(2) }}
                    </td>
                  </tr>
                  <!--DELTA SI 73500-->
                  <tr v-else>
                    <td
                      v-if="
                        deltaPapreg.toFixed(2) > 0.2 ||
                          deltaPapreg.toFixed(2) < -0.2
                      "
                      class="text-red-500 font-bold text-center py-3 px-4"
                    >
                      DELTA P: {{ deltaPapreg.toFixed(2) }}
                    </td>
                    <td
                      v-else
                      class="text-green-600 font-bold text-center py-3 px-4"
                    >
                      DELTA P: {{ deltaPapreg.toFixed(2) }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!--AVERTISSEURS HAUTEURS/PRESSIONS APRES REGLAGE-->
          <div
            class="m-10 border-double border-4 border-light-blue-500 w-2/3 mx-auto font-bold shadow-xl"
          >
            <div class="p-5 flex flex-col justify-center content-center">
              <!--AVERT HAUTEURS SI MOTRICE 21500/72500-->
              <div v-if="picked === 'motrice'" class="border-b-2 mb-3 p-3">
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
                  <p
                    v-else
                    key="2"
                    class="text-center text-green-500 text-xl sm:text-2xl"
                  >
                    Delta Hauteurs conforme
                  </p>
                </transition>
              </div>
              <!--SI REMORQUE OU 73500-->
              <div v-else class="border-b-2 mb-3 p-3">
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
                  <p
                    v-else
                    key="2"
                    class="text-center text-green-500 text-xl sm:text-2xl"
                  >
                    Delta Hauteurs conforme
                  </p>
                </transition>
              </div>
              <!--AVERT PRESSIONS SI MOTRICE 21500/72500-->
              <div v-if="serie != 'X 73500'">
                <div
                  v-if="
                    P1Gonf != null &&
                      P2Gonf != null &&
                      P3Gonf != null &&
                      P4Gonf != null
                  "
                >
                  <transition name="fade" mode="out-in">
                    <p
                      v-if="
                        deltaPapreg.toFixed(2) > 0.3 ||
                          deltaPapreg.toFixed(2) < -0.3
                      "
                      key="1"
                      class="text-center text-red-500 text-xl sm:text-2xl"
                    >
                      Delta Pressions non conforme <br>
                      ({{ deltaPapreg.toFixed(2) }} bar)
                    </p>
                    <p
                      v-else
                      key="2"
                      class="text-center text-green-500 text-xl sm:text-2xl"
                    >
                      Delta Pressions conforme <br>
                      ({{ deltaPapreg.toFixed(2) }} bar)
                    </p>
                  </transition>
                </div>
              </div>
              <!--AVERT PRESSIONS SI 73500-->
              <div v-else>
                <div
                  v-if="
                    P1Gonf != null &&
                      P2Gonf != null &&
                      P3Gonf != null &&
                      P4Gonf != null
                  "
                >
                  <transition name="fade" mode="out-in">
                    <p
                      v-if="
                        deltaPapreg.toFixed(2) > 0.2 ||
                          deltaPapreg.toFixed(2) < -0.2
                      "
                      key="1"
                      class="text-center text-red-500 text-xl sm:text-2xl"
                    >
                      Delta Pressions non conforme <br>
                      ({{ deltaPapreg.toFixed(2) }} bar)
                    </p>
                    <p
                      v-else
                      key="2"
                      class="text-center text-green-500 text-xl sm:text-2xl"
                    >
                      Delta Pressions conforme <br>
                      ({{ deltaPapreg.toFixed(2) }} bar)
                    </p>
                  </transition>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--TIPS REGLAGE Z1500/72500-->
      <transition name="page" mode="out-in">
        <div
          v-if="
            serie != 'X 73500' &&
              (deltaPapreg.toFixed(2) > 0.3 || deltaPapreg.toFixed(2) < -0.3)
          "
          class="text-center mb-12 font-bold text-gray-600 text-xl"
        >
          <p class="text-gray-800 text-2xl">
            Aide au réglage:
          </p>
          <p>
            Augmentez, sur la diagonale la plus faible, la pression du coussin
            qui présente la pression la plus faible.
          </p>
          <p class="text-gray-800">
            Diagonale la plus faible:
            <span
              v-if="P1P4apreg < P2P3apreg"
              class="text-yellow-500 text-2xl"
            >P1 + P4</span>
            <span
              v-else-if="P1P4apreg > P2P3apreg"
              class="text-pink-500 text-2xl"
            >P2 + P3</span>
            <span v-else>Les diagonales sont identiques</span>
          </p>

          <p class="text-gray-800">
            Pression la plus faible:
            <span
              v-if="P1P4apreg < P2P3apreg && P1Gonf < P4Gonf"
              class="text-yellow-500 text-2xl"
            >P1</span>
            <span
              v-else-if="P1P4apreg < P2P3apreg && P1Gonf > P4Gonf"
              class="text-yellow-500 text-2xl"
            >P4</span>
            <span
              v-else-if="P1P4apreg > P2P3apreg && P2Gonf < P3Gonf"
              class="text-pink-500 text-2xl"
            >P2</span>
            <span
              v-else-if="P1P4apreg > P2P3apreg && P2Gonf > P3Gonf"
              class="text-pink-500 text-2xl"
            >P3</span>
            <span v-else>Les pressions de cette diagonale sont identiques</span>
          </p>
        </div>
      </transition>
      <!--TIPS REGLAGE X73500-->
      <transition name="page" mode="out-in">
        <div
          v-if="
            serie === 'X 73500' &&
              (deltaPapreg.toFixed(2) > 0.2 || deltaPapreg.toFixed(2) < -0.2)
          "
          class="text-center mb-12 font-bold text-gray-600 text-xl"
        >
          <p class="text-gray-800 text-2xl">
            Aide au réglage
          </p>
          <p>
            Augmentez, sur la diagonale la plus faible, la pression du coussin
            qui présente la pression la plus faible.
          </p>
          <p class="text-gray-800">
            Diagonale la plus faible:
            <span
              v-if="P1P4apreg < P2P3apreg"
              class="text-yellow-500"
            >P1 + P4</span>
            <span
              v-else-if="P1P4apreg > P2P3apreg"
              class="text-pink-500"
            >P2 + P3</span>
            <span v-else>Les diagonales sont identiques</span>
          </p>

          <p class="text-gray-800">
            Pression la plus faible:
            <span
              v-if="P1P4apreg < P2P3apreg && P1Gonf < P4Gonf"
              class="text-xl text-yellow-500"
            >P1</span>
            <span
              v-else-if="P1P4apreg < P2P3apreg && P1Gonf > P4Gonf"
              class="text-xl text-yellow-500"
            >P4</span>
            <span
              v-else-if="P1P4apreg > P2P3apreg && P2Gonf < P3Gonf"
              class="text-xl text-pink-500"
            >P2</span>
            <span
              v-else-if="P1P4apreg > P2P3apreg && P2Gonf > P3Gonf"
              class="text-xl text-pink-500"
            >P3</span>
            <span v-else>Les pressions de cette diagonale sont identiques</span>
          </p>
        </div>
      </transition>
      <!--VUE FROM TOP-->
      <div class="flex text-xl sm:text-3xl font-black text-gray-600">
        <div class="flex flex-col justify-around mx-auto">
          <div>
            <InputP v-model="P1Gonf" roue="P1" class="mb-5" />
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
          </div>
          <div>
            <InputP2 v-model="P3Gonf" roue="P3" class="mb-5" />
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
            <InputP2 v-model="P2Gonf" roue="P2" class="mb-5" />
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
          </div>
          <div>
            <InputP v-model="P4Gonf" roue="P4" class="mb-5" />
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
      </div>
    </div>
    <div class="p-10">
      <nuxt-link to="/Assiette">
        <button
          class="block mx-auto px-6 py-2 sm:text-lg font-black leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
        >
          Contrôle de l'assiette
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
    // ENREGISTREMENT PRESSIONS GONFLEES SI INITIALES OK
    if (this.deltaPavreg < 0.31 || this.deltaPavreg > -0.31) {
      this.P1Gonf = this.P1Degonf
      this.P2Gonf = this.P2Degonf
      this.P3Gonf = this.P3Degonf
      this.P4Gonf = this.P4Degonf
    }
  }
}
</script>

<style scoped>
</style>
