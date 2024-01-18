<template>
  <section class="bg-white rounded-lg shadow p-5">

    <h2 class="font-bold text-xl mb-4">Prochains Jours</h2>
    <div class="overflow-x-auto">
      <div class="flex space-x-8">
        <div class="text-center" v-for="(daily, index) in dailyForecastsList" :key="index">
          <p class="text-lg">{{ daily.weekDay }}</p>
          <div class="w-10 h-10 bg-gray-300 rounded-full mx-auto my-2"></div>
          <p class="text-sm text-blue-500">{{ daily.minTemp.toFixed(1) }}°C</p>
          <p class="text-sm text-red-600">{{ daily.maxTemp.toFixed(1) }}°C</p>
        </div>
      </div>
    </div>
  </section>

  
</template>
  
<script setup>
import { useLocationServices } from "@/lib/services/weathers/location.js";

const { getNavigatorDailyForecastsList, dailyForecastsList } = useLocationServices();
getNavigatorDailyForecastsList();

</script>
