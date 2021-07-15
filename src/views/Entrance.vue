<template lang="pug">
DefaultLayout
  h1(
    class="text-gray-700 text-4xl text-center font-black",
    class="font-family-handwriting"
  ) Vue New Feature
  hr(
    class="border-none h-3 bg-yellow-300 min-w-72 rounded-lg flex-shrink-0"
  )
  span(
    class="text-gray-400 font-bold"
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
      RouterLink(
        to="/presentation",
        title="Presentation demo for new features",
        class="block text-xl text-center m-2 p-2 border rounded-xl text-dark-100 font-thin"
      ) Presentation Page
</template>

<script setup>
import DefaultLayout from "/@/layout/DefaultLayout.vue";
import Counter from "/@/components/Counter.vue";
import FieldCard from "/@/components/FieldCard.vue";
import EnvironmentChunk from "/@/components/EnvironmentChunk.vue";
import ToolTag from "/@/components/ToolTag.vue";
import PlaceHolder from "/@/components/PlaceHolder.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap");

.font-family-handwriting {
  font-family: "Nothing You Could Do", cursive;
}
</style>
