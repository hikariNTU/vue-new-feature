<template lang="pug">
li(
  class="tool-tag"
)
  span(
    class="ml-4"
  )
    slot
</template>

<style>
.tool-tag {
  @apply inline-flex bg-light-700 pr-5 py-2 m-1 ml-4 rounded-lg h-8 place-items-center;
  @apply text-gray-800 font-semibold;
  @apply before:(content absolute block ml-[-7.5px] h-5 w-5 bg-light-700);
  @apply before:(absolute transform rotate-45 rounded-bl-md);
}
</style>
