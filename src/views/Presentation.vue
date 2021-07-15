<template lang="pug">
DefaultLayout
  div(
    class="flex flex-col justify-center items-center px-12 py-6",
    class="rounded-lg shadow-xl bg-gradient-to-t from-gray-100 to-white"
  )
    h1(
      class="text-gray-700 text-2xl font-bold"
    ) Async Presentation page
    PlaceHolder(
      class="m-8"
    )
</template>

<script setup>
import DefaultLayout from "/@/layout/DefaultLayout.vue";
import PlaceHolder from "../components/PlaceHolder.vue";
</script>
