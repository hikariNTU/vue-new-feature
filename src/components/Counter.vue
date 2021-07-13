<template>
  <div class="m-8 flex flex-col flex-grow" role="application">
    <div class="text-sm text-warm-gray-600 text-center">
      <code class="bg-light-700 py-1 px-2 rounded inline-flex mb-1">
        Counter.vue
      </code>
      <p>Setup script with vue3</p>
    </div>

    <div
      class="
        flex flex-grow
        justify-center
        items-center
        text-9xl
        font-black
        my-4
        mx-2
        text-gray-600
      "
    >
      {{ count }}
    </div>

    <div class="flex gap-4 mt-4">
      <button @click="addCount" class="btn-count text-gray-500">ADD</button>
      <button
        @click="reset"
        class="btn-count border-yellow-300 text-yellow-600"
      >
        RESET
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, unref } from "vue";

const count = ref(0);
const addCount = () => {
  count.value = unref(count) + 1;
};
const reset = () => {
  count.value = 0;
};
</script>

<style>
.btn-count {
  touch-action: manipulation;
  @apply border-[0.3rem] border-gray-300 rounded-[0.5rem] h-[4rem] flex-grow text-2xl font-bold;
  @apply transition tracking-wider shadow-md;
  @apply hover:bg-light-400 select-none;
  @apply focus-visible:ring ring-gray-700 focus:outline-none;
  @apply active:(bg-light-800 shadow-sm);
}
</style>
