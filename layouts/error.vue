<template>
  <div class="fixed inset-0">
    <div
      class="h-full w-full flex flex-col justify-center items-center space-y-5"
    >
      <h1 class="font-bold font-display text-7xl text-gray-600">
        {{ error.statusCode }}
      </h1>
      <h2 class="font-bold text-3xl text-gray-600">
        {{ error.message }}
      </h2>
      <nuxt-link to="/" class="underline">&larr; Home</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
};
</script>
