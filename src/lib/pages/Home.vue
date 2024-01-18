<template>
    <div class="mx-auto p-4 min-h-screen flex flex-col pb-16" :style="`background: url(${sunny}); background-size: cover;`">
      <Current />
      <Hourly />
      <Daily />
      <router-link to="/favorites" class="fixed inset-x-0 bottom-0 pb-4 flex justify-center">
        <button class="bg-blue-500 hover:bg-blue-700 text-white h-16 w-16 leading-8 rounded-full shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out text-4xl">+</button>
      </router-link>
    </div>
  </template>
  
  <script setup>
  
  import Current from "@/lib/components/home/Current.vue";
  import Hourly from "@/lib/components/home/Hourly.vue";
  import Daily from "@/lib/components/home/Daily.vue";
  import sunny from "@/assets/backgrounds/sunny_day.jpg";
  import { RouterLink } from 'vue-router';

  
  
  </script>
  
  <style>
  
  </style>