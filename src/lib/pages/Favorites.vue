<template>
  <div class="mx-auto p-4 min-h-screen flex flex-col"
    style="background: url('backgrounds/rain.jpg'); background-size: cover">

    <div class="fixed top-2 right-5 text-4xl">
      <a href="" class="text-white">x</a>
    </div>
    <Add />
    <List />


  </div>
</template>
  
<script setup>
import Add from "@/lib/components/favorites/Add.vue";
import List from "@/lib/components/favorites/List.vue";

</script>
  
<style></style>