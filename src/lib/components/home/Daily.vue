<template>
  <section class="bg-white rounded-lg shadow p-5">

    <h2 class="font-bold text-xl mb-4">Prochains Jours</h2>
    <div class="overflow-x-auto">
      <div class="flex space-x-8">
        <div class="text-center" v-for="(daily, index) in dailyForecastsList" :key="index">
          <p class="text-lg">{{ daily.weekDay }}</p>
          <img :src="`https://openweathermap.org/img/wn/${daily.icon}@2x.png`" alt="">
          <p class="text-sm text-blue-500">{{ daily.minTemp.toFixed(1) }}°C</p>
          <p class="text-sm text-red-600">{{ daily.maxTemp.toFixed(1) }}°C</p>
        </div>
      </div>
    </div>
  </section>

  
</template>
  
<script setup>

const props = defineProps(["dailyForecastsList"])

console.log(props?.dailyForecastsList);

</script>
