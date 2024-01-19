<template>
>      <!-- Formulaire d'ajout de localisation -->
      <section class="bg-white bg-opacity-75 rounded-lg shadow p-5 mb-6 mt-12">
        <h2 class="font-bold text-xl mb-4">Ajouter une Localisation</h2>
        <form @submit.prevent="addCity" >
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="location"
            >
              Nom de la Localisation
            </label>
            <input 
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="location"
              type="text"
              placeholder="Paris, France"
              v-model="cityName"
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Ajouter
            </button>
          </div>
        </form>
      </section>
</template>

<script setup>
import { ref } from 'vue';


const cityName = ref();
const emit = defineEmits(['addCity'])

const addCity = () => {
  emit('addCity', cityName.value)
  cityName.value="";
}

</script>

<style lang="scss" scoped>

</style>