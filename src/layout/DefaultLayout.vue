<template lang="pug">
main(
  class="xl:(container mx-auto) m-0 px-5 lg:px-10 py-10 flex flex-col items-center min-h-screen"
)
  slot
  div(
    aria-hidden="true",
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
