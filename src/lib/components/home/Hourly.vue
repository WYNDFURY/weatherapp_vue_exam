<template>
          <section class="bg-white rounded-lg shadow p-5 mb-6">
        <h2 class="font-bold text-xl mb-4">Prochaines Heures</h2>
        <div class="overflow-x-auto">
          <div class="flex space-x-8">
            <!-- Blocs de prévisions horaires ici -->
            <div class="text-center" v-for="(hourly, index) in hourlyForecastsList" :key="index">
              <p class="text-lg">{{ hourly.dt_txt }}</p>
              <img :src="`https://openweathermap.org/img/wn/${hourly.weather[0].icon}@2x.png`" alt="">
              <p class="text-lg">{{ hourly?.main?.temp.toFixed(1) }}°C</p>
            </div>
          </div>
        </div>
      </section>
  </template>
  
  <script setup>
  const props = defineProps(["hourlyForecastsList"])
  </script>
  