<template>
          <section class="bg-white rounded-lg shadow p-5 mb-6">
        <h2 class="font-bold text-xl mb-4">Prochaines Heures</h2>
        <div class="overflow-x-auto">
          <div class="flex space-x-8">
            <!-- Blocs de prévisions horaires ici -->
            <div class="text-center" v-for="(hourly, index) in hourlyForecastsList" :key="index">
              <p class="text-lg">{{ hourly.dt_txt }}</p>
              <div
                class="w-10 h-10 bg-blue-300 rounded-full mx-auto my-2"
              ></div>
              <p class="text-lg">{{ hourly?.main?.temp.toFixed(1) }}°C</p>
            </div>
          </div>
        </div>
      </section>
  </template>
  
  <script setup>
  import { useLocationServices } from "@/lib/services/weathers/location.js";

  const {getNavigatorHourlyForecastsList, hourlyForecastsList } = useLocationServices();
  getNavigatorHourlyForecastsList();
  </script>
  