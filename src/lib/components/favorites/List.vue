<template>
      <!-- Liste des localisations favorites -->
      <section class="bg-white rounded-lg shadow p-5">
        <h2 class="font-bold text-xl mb-4">Vos Localisations Favorites</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <!-- Exemple de localisation favorite -->
          <div
            class="bg-gray-200 hover:bg-blue-500 hover:text-white rounded-lg p-4 flex justify-between items-center"
          >
            <span>Paris, France</span>
            <div>
              <button
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Supprimer
              </button>
            </div>
          </div>
          <div
            class="bg-blue-500 text-white rounded-lg p-4 flex justify-between items-center"
          >
            <span>Paris, France</span>
            <div>
              <button
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Supprimer
              </button>
            </div>
          </div>
          <div
            class="bg-gray-200 hover:bg-blue-500 hover:text-white rounded-lg p-4 flex justify-between items-center"
          >
            <span>Paris, France</span>
            <div>
              <button
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>