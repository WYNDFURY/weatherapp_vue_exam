<template>
  <div class="mx-auto p-4 min-h-screen flex flex-col pb-16" :style="`background: url('../../src/assets/backgrounds/${background}.jpg'); background-size: cover;`">
    <Current :current-date="currentDate" :current-hour="currentHour" :current-weather="currentWeather" />
    <Hourly :hourly-forecasts-list="hourlyForecastsList"/>
    <Daily :daily-forecasts-list="dailyForecastsList"/>
    <router-link to="/favorites" class="fixed inset-x-0 bottom-0 pb-4 flex justify-center">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white h-16 w-16 leading-8 rounded-full shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out text-4xl">+</button>
    </router-link>
  </div>
</template>

<script setup>

import Current from "@/lib/components/home/Current.vue";
import Hourly from "@/lib/components/home/Hourly.vue";
import Daily from "@/lib/components/home/Daily.vue";
import { RouterLink, useRoute } from 'vue-router';
import { useCoordsServices } from '@/lib/services/weathers/coords'

const { params: { city } } = useRoute();
const { 
  setCityLocationCoordinates,
  background,
  currentDate, 
  currentHour, 
  currentWeather,
  dailyForecastsList,
  hourlyForecastsList
} = useCoordsServices()


setCityLocationCoordinates(city);


</script>

<style>

</style>