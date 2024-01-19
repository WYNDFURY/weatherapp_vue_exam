<template>
  <div class="mx-auto p-4 min-h-screen flex flex-col"
  :style="`background: url(${sunny}); background-size: cover;`">
    <div class="fixed top-2 right-5 text-4xl">
      <a href="" class="text-white">x</a>
    </div>
    <Add @add-city="addCity" />
    <List 
    :favorites-cities="favoritesCities"
    @delete-favorite-city="deleteCity"
    />
  </div>
</template>
  
<script setup>
import Add from "@/lib/components/favorites/Add.vue";
import List from "@/lib/components/favorites/List.vue";
import sunny from "@/assets/backgrounds/sunny_day.jpg";
import { ref } from "vue";


const favoritesCities = ref(JSON.parse(localStorage.getItem("favoritesCities")) || []) ;

const addCity = (cityName) => {
  favoritesCities.value.push(cityName);
  localStorage.setItem("favoritesCities", JSON.stringify(favoritesCities.value));
}

const deleteCity = (deletedCity) => {
  favoritesCities.value = favoritesCities.value.filter((city) => city !== deletedCity)
  localStorage.setItem("favoritesCities", JSON.stringify(favoritesCities.value))
}

</script>
  
<style></style>