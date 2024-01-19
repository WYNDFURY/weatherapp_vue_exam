<template>
  <section class="bg-white bg-opacity-75 rounded-lg shadow p-5 mb-6 grow flex flex-col" style="flex-grow: 1">
    <header class="mb-4">
      <h2 class="font-bold text-xl">Current Weather</h2>
    </header>
    <article class="flex items-center justify-between grow" style="flex-grow: 1">
      <div>
        <h3 class="text-5xl font-semibold">{{ currentWeather?.name }}</h3>
        <br>
        <time class="text-xl text-gray-600" datetime="2023-01-01T10:00">{{ currentHour }}<br />{{ currentDate }}</time>
      </div>
      <div class="flex">
        <div class="text-right">
          <p class="text-5xl"> {{ currentWeather?.main?.temp.toFixed(1) }}°C</p>
          <p class="text-lg text-gray-600">{{ currentWeather?.weather[0].description }}</p>
        </div>
        <!-- Icône météo (à remplacer par une vraie image) -->
        <img :src="`https://openweathermap.org/img/wn/${currentWeather?.weather[0].icon}@2x.png`" alt="">
      </div>
    </article>
  </section>


</template>
  
<script setup>

const props = defineProps([
  "currentDate",
  "currentHour",
  "currentWeather"
])

// const { currentDate, currentHour, currentWeather, setCurrentWeather } = useWeatherLocationServices(props?.coords?.value);
// setCurrentWeather(props.coords.value);


</script>