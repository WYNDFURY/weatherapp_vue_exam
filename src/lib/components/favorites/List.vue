<template>
      <!-- Liste des localisations favorites -->
      <section class="bg-white rounded-lg shadow p-5">
        <h2 class="font-bold text-xl mb-4">Vos Localisations Favorites</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <!-- Exemple de localisation favorite -->
          <router-link 
            :to="`/favorites/${favoriteCity}`"
            class="bg-gray-200 hover:bg-blue-500 hover:text-white rounded-lg p-4 flex justify-between items-center"
            v-for="favoriteCity in favoritesCities"
          
          >
            <span>{{ favoriteCity }}</span>
            <div>
              <button @click.prevent="deleteFavoriteCity(favoriteCity)"
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Supprimer
              </button>
            </div>
          </router-link>
        </div>
      </section>
</template>

<script setup>

const props = defineProps(["favoritesCities"])
const emit = defineEmits(["deleteFavoriteCity"])
const deleteFavoriteCity = (favoriteCity) => {
  emit('deleteFavoriteCity', favoriteCity);
}

</script>

<style lang="scss" scoped>

</style>