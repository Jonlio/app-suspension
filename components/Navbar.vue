<template>
  <nav class="w-screen h-16 pr-8">
    <div class="flex items-center justify-between">
      <!-- Mobile toggle -->
      <div class="2xl:hidden p-5">
        <button @click="drawer">
          <svg
            class="h-10 sm:h-16 fill-current font-bold text-blue-700"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <!-- Navbar -->
      <div class="hidden 2xl:block">
        <ul class="flex space-x-8 font-bold font-sans text-gray-800 text-2xl">
          <li>
            <nuxt-link to="/" class="transition duration-500 ease-in-out" @click.native="handler">
              Nouveau réglage
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/Recapitulatif" class="transition duration-500 ease-in-out">
              Tableau Récapitulatif
            </nuxt-link>
          </li>
        </ul>
      </div>

      <!-- Dark Background Transition -->
      <transition
        enter-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-to-class="opacity-0"
      >
        <div v-show="isOpen" class="z-10 fixed inset-0 transition-opacity" @keydown.esc="isOpen = false">
          <div class="absolute inset-0 bg-black opacity-50" tabindex="0" @click="isOpen = false" />
        </div>
      </transition>

      <!-- Drawer Menu -->
      <aside class="p-5 transform top-0 left-0 w-2/3 h-52 bg-blue-700 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30" :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
        <div class="close">
          <button class="absolute top-0 right-0 mt-4 mr-4 text-white" @click="isOpen = false">
            <svg
              class="h-6 sm:h-12"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ul class="divide-y mt-10">
          <li @click="drawer">
            <nuxt-link @click.native="open" to="/" class="my-4 inline-block font-bold text-xl sm:text-3xl text-white">
              Nouveau réglage
            </nuxt-link>
          </li>
          <li @click="drawer">
            <nuxt-link to="/Recapitulatif" class="my-4 inline-block font-bold text-xl sm:text-3xl text-white" @click="isOpen = true">
              Tableaux récapitulatifs
            </nuxt-link>
          </li>
        </ul>
      </aside>
    </div>
  </nav>
</template>

<style scoped>
.disabled {
  pointer-events: none;
}

</style>

<script>
export default {
  data () {
    return {
      isOpen: false,
      test: '/'
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler (isOpen) {
        if (process.client) {
          if (isOpen) { document.body.style.setProperty('overflow', 'hidden') } else { document.body.style.removeProperty('overflow') }
        }
      }
    }
  },
  mounted () {
    document.addEventListener('keydown', (e) => {
      // eslint-disable-next-line eqeqeq
      if (e.keyCode == 27 && this.isOpen) { this.isOpen = false }
    })
  },
  methods: {
    drawer () {
      this.isOpen = !this.isOpen
    },
    open () {
      this.$confirm('Cette action supprimera votre réglage en cours. Continuer?', 'Attention', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Annuler',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: 'Fichier supprimé'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Suppression annulée'
        })
      })
    }
  }
}
</script>
