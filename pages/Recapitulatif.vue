<template>
  <div>
    <div id="pdfDom">
      <div class="mx-auto p-3 sm:p-10 space-y-16 w-full font-bold">
        <div>
          <!-- RECAPITULATIFS SERIE/ENGINS/NOM -->
          <div class="text-center">
            <h1 class="text-blue-900 font-bold text-2xl sm:text-3xl">
              Réglage suspension
            </h1>
            <h2 class="text-2xl sm=text-3xl text-blue-900">
              {{ numero }}
            </h2>
            <h3 v-if="picked === 'motrice'" class="text-xl text-blue-900">
              {{ cote }}
            </h3>
            <h3 v-else-if="serie != 'X 73500'" class="text-xl text-blue-900">
              Remorque
            </h3>
            <p class="text-lg text-gray-700 mt-5">
              Réalisé par: {{ nom }}
            </p>
            <p class="text-lg mb-10 text-gray-700">
              Le: {{ date }}
            </p>
          </div>
          <!-- RECAPITULATIFS HAUTEURS-->
          <h2 class="text-center text-blue-900 font-bold text-2xl sm:text-3xl mb-5">
            Hauteurs
          </h2>
          <div class="shadow overflow-hidden rounded border-b border-gray-200 text-xs sm:text-base">
            <table class="min-w-full bg-white">
              <thead class="bg-blue-700 text-white">
                <tr>
                  <th class="w-1/3 text-center py-3 px-4 uppercase">
                    Hauteurs dégonflées
                  </th>
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
              <!--TABLEAU HAUTEURS SI MOTRICE 72500/21500-->
              <tbody v-if="picked === 'motrice'" class="text-gray-700">
                <tr>
                  <td class="w-1/3 text-center py-3 px-4">
                    D1:
                    <input
                      v-model.number="H1Degonf"
                      type="number"
                      min="0"
                      max="999"
                      class="w-1/4 text-center"
                    >
                  </td>
                  <td class="w-1/3 text-center py-3">
                    <input
                      v-model.number="H1Gonf"
                      type="number"
                      class="w-1/4 text-center font-bold"
                    >
                  </td>
                  <td
                    v-if="deltaH1 > 38 || deltaH1 < 32"
                    class="text-red-500 font-bold text-center py-3 px-4"
                  >
                    {{ deltaH1 }}
                  </td>
                  <td
                    v-else
                    class="text-green-600 font-bold text-center py-3 px-4"
                  >
                    {{ deltaH1 }}
                  </td>
                  <td class="text-center font-black py-3 px-4">
                    {{ valAtH1 }} mm
                  </td>
                </tr>
                <tr class="bg-gray-100">
                  <td class="w-1/3 text-center py-3 px-4">
                    D2:
                    <input
                      v-model.number="H2Degonf"
                      type="number"
                      class="w-1/4 text-center"
                    >
                  </td>
                  <td class="w-1/3 text-center py-3">
                    <input
                      v-model.number="H2Gonf"
                      type="number"
                      class="w-1/4 text-center font-bold"
                    >
                  </td>
                  <td
                    v-if="deltaH2 > 38 || deltaH2 < 32"
                    class="text-red-500 font-bold text-center py-3 px-4"
                  >
                    {{ deltaH2 }}
                  </td>
                  <td
                    v-else
                    class="text-green-600 font-bold text-center py-3 px-4"
                  >
                    {{ deltaH2 }}
                  </td>
                  <td class="text-center font-black py-3 px-4">
                    {{ valAtH2 }} mm
                  </td>
                </tr>
                <tr>
                  <td class="w-1/3 text-center py-3 px-4">
                    D3:
                    <input
                      v-model.number="H3Degonf"
                      type="number"
                      class="w-1/4 text-center"
                    >
                  </td>
                  <td class="w-1/3 text-center py-3">
                    <input
                      v-model.number="H3Gonf"
                      type="number"
                      class="w-1/4 text-center font-bold"
                    >
                  </td>
                  <td
                    v-if="deltaH3 > 38 || deltaH3 < 32"
                    class="text-red-500 font-bold text-center py-3 px-4"
                  >
                    {{ deltaH3 }}
                  </td>
                  <td
                    v-else
                    class="text-green-600 font-bold text-center py-3 px-4"
                  >
                    {{ deltaH3 }}
                  </td>
                  <td class="text-center font-black py-3 px-4">
                    {{ valAtH3 }} mm
                  </td>
                </tr>
                <tr class="bg-gray-100">
                  <td class="w-1/3 text-center py-3 px-4">
                    D4:
                    <input
                      v-model.number="H4Degonf"
                      type="number"
                      class="w-1/4 text-center"
                    >
                  </td>
                  <td class="w-1/3 text-center py-3">
                    <input
                      v-model.number="H4Gonf"
                      type="number"
                      class="w-1/4 text-center font-bold"
                    >
                  </td>
                  <td
                    v-if="deltaH4 > 38 || deltaH4 < 32"
                    class="text-red-500 font-bold text-center py-3 px-4"
                  >
                    {{ deltaH4 }}
                  </td>
                  <td
                    v-else
                    class="text-green-600 font-bold text-center py-3 px-4"
                  >
                    {{ deltaH4 }}
                  </td>
                  <td class="text-center font-black py-3 px-4">
                    {{ valAtH4 }} mm
                  </td>
                </tr>
              </tbody>
              <!--TABLEAU HAUTEURS SI REMORQUE OU 73500-->
              <tbody v-else class="text-gray-700">
                <tr>
                  <td class="w-1/3 text-center py-3 px-4">
                    D1:
                    <input
                      v-model.number="H1Degonf"
                      type="number"
                      min="0"
                      max="999"
                      class="w-1/4 text-center"
                    >
                  </td>
                  <td class="w-1/3 text-center py-3 px-4">
                    <input
                      v-model.number="H1Gonf"
                      type="number"
                      class="w-1/4 text-center font-bold"
                    >
                  </td>
                  <td
                    v-if="deltaH1 > 33 || deltaH1 < 27"
                    class="text-red-500 font-bold text-center py-3 px-4"
                  >
                    {{ deltaH1 }}
                  </td>
                  <td
                    v-else
                    class="text-green-600 font-bold text-center py-3 px-4"
                  >
                    {{ deltaH1 }}
                  </td>
                  <td class="text-center font-black py-3 px-4">
                    {{ valAtH1Rem }} mm
                  </td>
                </tr>
                <tr class="bg-gray-100">
                  <td class="w-1/3 text-center py-3 px-4">
                    D2:
                    <input
                      v-model.number="H2Degonf"
                      type="number"
                      class="w-1/4 text-center"
                    >
                  </td>
                  <td class="w-1/3 text-center py-3 px-4">
                    <input
                      v-model.number="H2Gonf"
                      type="number"
                      class="w-1/4 text-center font-bold"
                    >
                  </td>
                  <td
                    v-if="deltaH2 > 33 || deltaH2 < 27"
                    class="text-red-500 font-bold text-center py-3 px-4"
                  >
                    {{ deltaH2 }}
                  </td>
                  <td
                    v-else
                    class="text-green-600 font-bold text-center py-3 px-4"
                  >
                    {{ deltaH2 }}
                  </td>
                  <td class="text-center font-black py-3 px-4">
                    {{ valAtH2Rem }} mm
                  </td>
                </tr>
                <tr>
                  <td class="w-1/3 text-center py-3 px-4">
                    D3:
                    <input
                      v-model.number="H3Degonf"
                      type="number"
                      class="w-1/4 text-center"
                    >
                  </td>
                  <td class="w-1/3 text-center py-3 px-4">
                    <input
                      v-model.number="H3Gonf"
                      type="number"
                      class="w-1/4 text-center font-bold"
                    >
                  </td>
                  <td
                    v-if="deltaH3 > 33 || deltaH3 < 27"
                    class="text-red-500 font-bold text-center py-3 px-4"
                  >
                    {{ deltaH3 }}
                  </td>
                  <td
                    v-else
                    class="text-green-600 font-bold text-center py-3 px-4"
                  >
                    {{ deltaH3 }}
                  </td>
                  <td class="text-center font-black py-3 px-4">
                    {{ valAtH3Rem }} mm
                  </td>
                </tr>
                <tr class="bg-gray-100">
                  <td class="w-1/3 text-center py-3 px-4">
                    D4:
                    <input
                      v-model.number="H4Degonf"
                      type="number"
                      class="w-1/4 text-center"
                    >
                  </td>
                  <td class="w-1/3 text-center py-3 px-4">
                    <input
                      v-model.number="H4Gonf"
                      type="number"
                      class="w-1/4 text-center font-bold"
                    >
                  </td>
                  <td
                    v-if="deltaH4 > 33 || deltaH4 < 27"
                    class="text-red-500 font-bold text-center py-3 px-4"
                  >
                    {{ deltaH4 }}
                  </td>
                  <td
                    v-else
                    class="text-green-600 font-bold text-center py-3 px-4"
                  >
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
        <!-- RECAPITULATIF PRESSIONS -->
        <div>
          <h2 class="text-center text-blue-900 font-bold text-2xl sm:text-3xl">
            Pressions
          </h2>
          <!--Tolerance si 72/21500-->
          <h2 v-if="serie != 'X 73500'" class="text-center font-bold text-base sm:text-xl text-indigo-700">
            (P1+P4) - (P2+P3) ≤ 0,3 bar
          </h2>
          <!--Tolerance si 73500-->
          <h2 v-else class="text-center font-bold text-base sm:text-xl text-indigo-700">
            (P1+P4) - (P2+P3) ≤ 0,2 bar
          </h2>
          <div class="mx-auto space-y-6 py-8">
            <!-- PRESSIONS AVANT REGLAGE -->
            <div class="flex justify-center space-x-10 text-xs sm:text-lg">
              <div
                class="w-1/3 shadow overflow-hidden rounded border-b border-gray-200"
              >
                <table class="bg-white">
                  <thead class="bg-gray-800 text-white">
                    <tr>
                      <th class="w-1/3 text-center py-3 px-4 uppercase">
                        Pressions avant réglage
                      </th>
                    </tr>
                  </thead>
                  <tbody class="text-gray-700">
                    <tr>
                      <td class="w-1/3 text-center py-3 px-4">
                        P1:
                        <input
                          v-model.number="P1Degonf"
                          type="number"
                          class="w-1/4 text-center"
                        >
                      </td>
                    </tr>
                    <tr class="bg-gray-100">
                      <td class="w-1/3 text-center py-3 px-4">
                        P2:
                        <input
                          v-model.number="P2Degonf"
                          type="number"
                          class="w-1/4 text-center"
                        >
                      </td>
                    </tr>
                    <tr>
                      <td class="w-1/3 text-center py-3 px-4">
                        P3:
                        <input
                          v-model.number="P3Degonf"
                          type="number"
                          class="w-1/4 text-center"
                        >
                      </td>
                    </tr>
                    <tr class="bg-gray-100">
                      <td class="w-1/3 text-center py-3 px-4">
                        P4:
                        <input
                          v-model.number="P4Degonf"
                          type="number"
                          class="w-1/4 text-center"
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- RESULTATS AVANT REGLAGE PRESSIONS -->
              <div
                class="w-1/3 shadow overflow-hidden rounded border-b border-gray-200"
              >
                <table class="bg-white h-full">
                  <tbody class="text-gray-700">
                    <tr>
                      <td class="w-1/3 text-center py-3 px-4">
                        P1 + P4: {{ P1P4avreg.toFixed(2) }}
                      </td>
                    </tr>
                    <tr class="bg-gray-100">
                      <td class="w-1/3 text-center py-3 px-4">
                        P2 + P3: {{ P2P3avreg.toFixed(2) }}
                      </td>
                    </tr>
                    <!--DELTA PRESSIONS AVANT REGLAGE SI 72/21500-->
                    <tr v-if="serie != 'X 73500'">
                      <td
                        v-if="deltaPavreg > 0.30 || deltaPavreg < -0.3"
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
                    <!--DELTA PRESSIONS AVANT REGLAGE SI 73500-->
                    <tr v-else>
                      <td
                        v-if="deltaPavreg > 0.2 || deltaPavreg < -0.2"
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
            <!-- PRESSIONS APRES REGLAGE -->
            <div class="flex justify-center space-x-10 text-xs sm:text-lg">
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
                      <td class="w-1/3 text-center py-3 px-4">
                        P1 + P4: {{ P1P4apreg.toFixed(2) }}
                      </td>
                    </tr>
                    <tr class="bg-gray-100">
                      <td class="w-1/3 text-center py-3 px-4">
                        P2 + P3: {{ P2P3apreg.toFixed(2) }}
                      </td>
                    </tr>
                    <!--DELTA APRES REGLAGE SI 72/21500-->
                    <tr v-if="serie != 'X 73500'">
                      <td
                        v-if="deltaPapreg > 0.30 || deltaPapreg < -0.30"
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
                    <!--DELTA APRES REGLAGE SI 73500-->
                    <tr v-else>
                      <td
                        v-if="deltaPapreg > 0.20 || deltaPapreg < -0.20"
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
          </div>
        </div>
        <!-- REGLAGE ASSIETTE -->
        <div>
          <h2 class="text-center text-blue-900 font-bold text-2xl sm:text-3xl">
            Assiette
          </h2>
          <h2 class="text-center font-bold text-base sm:text-xl text-indigo-700">
            (H1 + H3)/2 - (H2 + H4)/2 ≤ 3 mm
          </h2>
          <div class="mx-auto space-y-6 py-8 text-xs sm:text-lg">
            <!-- Hauteurs H gonflées -->
            <div class="flex justify-center space-x-10">
              <div
                class="w-1/3 shadow overflow-hidden rounded border-b border-gray-200"
              >
                <table class="bg-white">
                  <thead class="bg-blue-700 text-white">
                    <tr>
                      <th class="w-1/3 text-center py-3 px-4 uppercase">
                        Hauteurs H gonflées
                      </th>
                    </tr>
                  </thead>
                  <tbody class="text-gray-700">
                    <tr>
                      <td class="w-1/3 text-center py-3 px-4">
                        H1: {{ H1Gonf }}
                      </td>
                    </tr>
                    <tr class="bg-gray-100">
                      <td class="w-1/3 text-center py-3 px-4">
                        H2: {{ H2Gonf }}
                      </td>
                    </tr>
                    <tr>
                      <td class="w-1/3 text-center py-3 px-4">
                        H3: {{ H3Gonf }}
                      </td>
                    </tr>
                    <tr class="bg-gray-100">
                      <td class="w-1/3 text-center py-3 px-4">
                        H4: {{ H4Gonf }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- RESULTATS ASSIETTE -->
              <div
                class="w-1/3 shadow overflow-hidden rounded border-b border-gray-200"
              >
                <table class="h-full bg-white">
                  <tbody class="text-gray-700">
                    <tr>
                      <td class="w-1/3 text-center py-3 px-4">
                        Moyenne Gauche:
                        <span
                          v-if="
                            moyenneGauche - moyenneDroite <= 3 &&
                              moyenneDroite - moyenneGauche <= 3
                          "
                          class="text-green-500"
                        >{{ moyenneGauche }}</span>
                        <span v-else class="text-red-500">{{
                          moyenneGauche
                        }}</span>
                      </td>
                    </tr>
                    <tr class="bg-gray-100">
                      <td class="w-1/3 text-center py-3 px-4">
                        Moyenne Droite:
                        <span
                          v-if="
                            moyenneGauche - moyenneDroite <= 3 &&
                              moyenneDroite - moyenneGauche <= 3
                          "
                          class="text-green-500"
                        >{{ moyenneDroite }}</span>
                        <span v-else class="text-red-500">{{
                          moyenneDroite
                        }}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--BOUTON PDF-->
    <div class="text-center p-6 sm:p-10">
      <button
        class="inline-block px-6 py-2 font-black leading-7 text-center text-indigo-700 uppercase transition bg-transparent border-2 border-indigo-700 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-100 focus:outline-none"
        @click="getPdf(htmlTitle)"
      >
        Télécharger PDF
      </button>
    </div>
    <!--BOUTON NAV-->
    <div class="p-6 sm:p-10">
      <nuxt-link to="/CheckboxFinal">
        <button
          class="block mx-auto px-6 py-2 text-lg font-black leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
        >
          Opérations finales
        </button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      picked: '',
      serie: '',
      nom: '',
      numero: '',
      cote: '',
      htmlTitle: 'reglage susp',
      date: this.$moment().format('DD/MM/Y'),
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
      H4Final: null
    }
  },
  computed: {
    computedDate () {
      return this.$moment(new Date()).format('LL')
    },
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
      return parseFloat(this.H1Degonf) + 30
    },
    valAtH2Rem () {
      return parseFloat(this.H2Degonf) + 30
    },
    valAtH3Rem () {
      return parseFloat(this.H3Degonf) + 30
    },
    valAtH4Rem () {
      return parseFloat(this.H4Degonf) + 30
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
    if (localStorage.picked) {
      this.picked = localStorage.picked
    }
    if (localStorage.numero) {
      this.numero = localStorage.numero
    }
    if (localStorage.nom) {
      this.nom = localStorage.nom
    }
    if (localStorage.cote) {
      this.cote = localStorage.cote
    }
    if (localStorage.serie) {
      this.serie = localStorage.serie
    }
  }
}
</script>

<style scoped>
</style>
