<template lang="pug">
main(
  class="xl:(container mx-auto) m-0 px-5 lg:px-10 py-10 flex flex-col items-center min-h-screen"
)
  h1(
    class="text-gray-700 text-4xl text-center font-black"
  ) Vue New Feature
  hr(
    class="border-none h-4 bg-yellow-300 min-w-72 mt-2 rounded-lg flex-shrink-0"
  )
  span(
    class="text-gray-500"
  ) Next-gen vue experience

  div(
    class="w-[100%] lg:m-12 m-4 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1",
    class="gap-4 md:gap-6 lg:gap-8"
  )
    FieldCard(title="Introduce")
      EnvironmentChunk(title="New Feature")
        ToolTag Reactive vue
        ToolTag Composition API
        ToolTag Setup Lifecycle
        ToolTag Fragments
      EnvironmentChunk(title="VS Code Extension")
        ToolTag Volar
        ToolTag WindiCSS
        ToolTag Prettier
        ToolTag
          s eslint
      EnvironmentChunk(title="Structure")
        ToolTag Vite
        ToolTag Vue3
        ToolTag WindiCSS
        ToolTag Pug(Jade)
        ToolTag SCSS
        ToolTag setup script

    FieldCard(title="Counter") 
      Counter
    FieldCard(title="Start form here")
      PlaceHolder
  div(
    aria-hidden,
    class="flex-grow"
  )
  footer(
    class="text-gray-600 mt-4"
  )
    | Dennis Chung @
    a(
      class="text-cool-gray-700 font-bold underline underline-gray-400",
      title="Hikari's github",
      href="https://github.com/hikariNTU",
      target="_blank",
      rel="noopener"
    ) Github
</template>

<script setup>
import Counter from "/@/components/Counter.vue";
import FieldCard from "/@/components/FieldCard.vue";
import EnvironmentChunk from "/@/components/EnvironmentChunk.vue";
import ToolTag from "/@/components/ToolTag.vue";
import PlaceHolder from "/@/components/PlaceHolder.vue";
</script>
