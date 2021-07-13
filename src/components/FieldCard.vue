<template lang="pug">
article(
  class="flex flex-col",
  class="bg-white min-h-[24rem] rounded-xl shadow-md border border-true-gray-200",
  class="hover:shadow-xl transform hover:translate-y-[-0.2rem] transition"
)
  h2(
    class="text-center mx-2 my-4 text-[1.5rem] text-cool-gray-600 font-black"
  )
    | {{ title }}
  hr(
    class="border-none bg-blue-gray-200 h-1 mx-4 rounded-full"
  )
  slot
</template>

<script>
export default {
  name: "FieldCard",
  props: {
    title: {
      default: "Play Ground",
      type: String,
    },
  },
}
</script>
