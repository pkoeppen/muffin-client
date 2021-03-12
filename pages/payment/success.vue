<template>
  <div>
    <main class="max-w-2xl p-3 mx-auto flex flex-col">
      <!-- Brand -->
      <section id="brand" class="text-center">
        <lottie
          :options="animationOptions"
          :height="220"
          @animCreated="handleAnimation"
        />
        <h1 class="font-display text-6xl -mt-4">Order Placed</h1>
      </section>

      <hr class="border-2 mt-12 mb-10" />

      <!-- Place Order -->
      <section id="order" class="flex flex-col gap-5 mb-10">
        <h2 class="font-bold text-lg text-center">
          <i class="fas fa-cookie-bite mr-2" />Your order has been placed!
        </h2>
        <p class="leading-loose text-center mb-5">
          Your Chocolate Chip Muffins are on their way into the oven, then to
          {{ address }}, then into {{ name }}. Try not to get too excited.
        </p>
        <div class="text-center">
          <nuxt-link
            to="/"
            class="w-auto py-3 px-5 font-bold font-bold rounded bg-green-500 text-white hover:bg-green-600"
            @click="redirectToStripe()"
          >
            Back to Home
          </nuxt-link>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import * as muffinAnimation from '~/assets/lottie/muffin-trimmed.json';

export default {
  async asyncData({ store, route }) {
    const data = await store.dispatch('api/getPaymentSuccessDetails', {
      session_id: route.query.session_id,
    });
    return {
      animationOptions: {
        animationData: muffinAnimation.default,
        loop: false,
      },
      name: `${data.name}'s mouth` || 'your mouth',
      address: data.address || 'your house',
    };
  },
};
</script>
