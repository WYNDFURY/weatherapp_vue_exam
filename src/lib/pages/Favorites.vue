<template>
  <div class="mx-auto p-4 min-h-screen flex flex-col"
  :style="`background: url(${clear}); background-size: cover;`">
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
import clear from "@/assets/backgrounds/clear.jpg";
import {useFavoritesServices} from "@/lib/services/favorites/favorites";

const { addCity, deleteCity, favoritesCities } = useFavoritesServices();



</script>
  
<style></style>