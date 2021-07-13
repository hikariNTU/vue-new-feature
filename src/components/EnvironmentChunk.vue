<template lang="pug">
section(
  class="m-4"
)
  h2(
    class="m-2 mt-0 font-semibold text-gray-700 text-xl"
  ) {{ title }}
  ul
    slot
</template>

<script setup>
defineProps({
  title: {
    default: "Section",
    type: String,
  },
})
</script>
