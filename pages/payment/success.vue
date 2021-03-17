<template>
  <div>
    <main class="max-w-2xl p-3 mx-auto flex flex-col">
      <!-- Brand -->
      <section id="brand" class="text-center">
        <lottie :options="animationOptions" :height="220" />
        <h1 class="font-display text-5xl sm:text-6xl -mt-4">Order Placed</h1>
      </section>

      <div class="border-b-4 mt-12" />

      <div
        v-if="inclementWeather"
        class="mt-3 py-2 px-3 bg-red-500 text-white w-full flex items-center justify-center text-xs font-bold rounded"
      >
        <i class="fas fa-exclamation-triangle mr-2" /><span
          >Adverse
          <a
            href="https://www.google.com/search?q=weather+fort+wayne"
            class="underline outline-none"
            target="_blank"
            >weather conditions</a
          >
          might delay your delivery.</span
        >
      </div>

      <!-- Place Order -->
      <section id="order" class="flex flex-col my-10">
        <h2 class="font-bold text-lg text-center mb-5">
          <i class="fas fa-cookie-bite mr-2" />Your order has been placed!
        </h2>
        <p class="leading-loose text-center mb-8">
          Thanks{{ name }}! Your Chocolate Chip Muffins are on their way into
          the oven, then to {{ address }}, then into your mouth. Try not to get
          too excited.
        </p>
        <div
          class="flex flex-col sm:flex-row items-center sm:space-x-3 sm:space-y-0 space-y-3"
        >
          <div class="relative w-full flex-grow">
            <input
              v-model="phoneNumber"
              type="tel"
              placeholder="Mobile number"
              class="w-full h-12 outline-none px-3 py-1 rounded bg-gray-200 focus:bg-white border-2 border-gray-200 focus:border-blue-300"
            />
            <div
              :class="errored ? 'sm:absolute' : 'hidden'"
              class="left-0 -bottom-5 text-red-500 text-xs text-center sm:text-left pt-1 sm:pt-0 sm:pl-3"
            >
              Invalid phone number
            </div>
          </div>
          <button
            to="/"
            class="w-48 h-12 py-3 px-5 font-bold font-bold rounded text-white whitespace-nowrap"
            :class="{
              'pointer-events-none': loading || success,
              'bg-green-500': success,
              'bg-blue-500 hover:bg-blue-600': !success,
            }"
            @click="submitPhoneNumber()"
          >
            <span v-if="loading" class="animate-spin fas fa-asterisk" />
            <span v-else-if="success" class="fas fa-check-circle" /><span v-else
              >Get Text Updates</span
            >
          </button>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import * as phone from 'phone';
import * as muffinAnimation from '~/assets/lottie/muffin-trimmed.json';

export default {
  async asyncData({ store, route, $axios }) {
    const data = await store.dispatch('api/getPaymentSuccessDetails', {
      session_id: route.query.session_id,
    });

    // Get weather data.
    let inclementWeather = false;
    try {
      const { data: weatherData } = await $axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=41.0793&lon=-85.1394&exclude=minutely,hourly&appid=f062d12796334b2a7a0536829ae817df`
      );
      const currentId = weatherData.current.weather.shift().id;
      const forecastId = weatherData.daily.shift().weather.shift().id;

      /*
       * https://openweathermap.org/weather-conditions
       */
      if (
        (currentId >= 200 && currentId < 400) ||
        (currentId >= 500 && currentId < 700) ||
        (forecastId >= 200 && forecastId < 400) ||
        (forecastId >= 500 && forecastId < 700)
      ) {
        inclementWeather = true;
      }
    } catch (error) {}

    return {
      loading: false,
      errored: false,
      success: false,
      phoneNumber: '',
      animationOptions: {
        animationData: muffinAnimation.default,
        loop: false,
      },
      name: `, ${data.name}`,
      address: data.address || 'your house',
      inclementWeather,
    };
  },
  methods: {
    async submitPhoneNumber() {
      const [phoneNumber] = phone(this.phoneNumber);
      if (!phoneNumber) {
        this.errored = true;
      } else {
        this.loading = true;
        this.success = await this.$store.dispatch('api/submitPhoneNumber', {
          orderId: this.$route.query.session_id,
          phone: phoneNumber,
        });
        this.loading = false;
        if (this.success) {
          setTimeout(() => {
            this.$router.push('/');
          }, 3000);
        }
      }
    },
  },
  head: {
    title: 'Order Confirmation',
  },
};
</script>
