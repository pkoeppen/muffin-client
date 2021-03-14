<template>
  <div>
    <div
      class="h-12 bg-gray-800 text-white flex items-center justify-center w-full text-xs sm:text-base"
    >
      <span
        >Now delivering within
        <a
          href="https://www.google.com/maps/place/Fort+Wayne,+IN"
          target="_blank"
          ><i class="fas fa-map-marker-alt mr-1" /><span
            class="font-bold underline"
            >Fort Wayne</span
          ></a
        >
        city limits!</span
      >
    </div>
    <main class="max-w-2xl p-3 mx-auto flex flex-col">
      <!-- Brand -->
      <section id="brand" class="text-center -mt-4">
        <lottie :options="animationOptions" :height="220" />
        <h1 class="font-display text-5xl sm:text-6xl -mt-8 whitespace-nowrap">
          Muffin Quest
        </h1>
      </section>

      <div class="border-b-4 mt-16 mb-10" />

      <!-- View Details -->
      <section id="order" class="flex flex-col space-y-5">
        <h2 class="font-bold text-lg text-center">
          <i class="fas fa-cookie-bite mr-2" />Select Your Muffins
        </h2>
        <div class="flex flex-wrap justify-center">
          <div class="m-1.5">
            <button
              class="p-3 border-2 border-gray-600 bg-gray-100 text-gray-600 hover:border-blue-400 hover:bg-blue-100 hover:text-blue-500 font-bold rounded"
              :class="{
                'border-blue-500 hover:border-blue-500 bg-blue-100 text-blue-500':
                  selected === 1,
              }"
              @click="selected = 1"
            >
              Chocolate Chip
            </button>
          </div>
          <div class="m-1.5">
            <button
              class="p-3 border-2 border-gray-600 bg-gray-100 text-gray-600 hover:border-blue-400 hover:bg-blue-100 hover:text-blue-500 font-bold rounded relative"
              :class="{
                'border-blue-500 hover:border-blue-500 bg-blue-100 text-blue-500':
                  selected === 2,
              }"
              @click="selected = 2"
            >
              <i
                title="Most Popular"
                class="fas fa-certificate absolute -top-2 -right-3 w-6"
                :class="{
                  'text-yellow-400': selected === 2,
                }"
              />
              Chocolate Chip (Keto)
            </button>
          </div>
          <div class="m-1.5">
            <button
              class="p-3 border-2 border-gray-600 bg-gray-100 text-gray-600 hover:border-blue-400 hover:bg-blue-100 hover:text-blue-500 font-bold rounded"
              :class="{
                'border-blue-500 hover:border-blue-500 bg-blue-100 text-blue-500':
                  selected === 3,
              }"
              @click="selected = 3"
            >
              Chocolate Chip (Gluten-Free)
            </button>
          </div>
        </div>
        <div class="text-center">
          <button
            class="w-40 py-3 px-5 font-bold font-bold rounded bg-green-300 text-gray-100"
            :class="{
              'bg-green-500 text-white hover:bg-green-600': selected,
              'pointer-events-none': !selected || loading,
            }"
            @click="redirectToStripe()"
          >
            <i v-if="loading" class="fas fa-asterisk animate-spin" /><span
              v-else
              >View Details</span
            >
          </button>
        </div>
      </section>

      <div class="border-b-4 mt-12 mb-10" />

      <!-- Recent Orders -->
      <section id="recent" class="flex flex-col items-center space-y-5">
        <h2 class="font-bold text-lg text-center">Recent Orders</h2>
        <table v-if="orders.length" class="table-auto w-full">
          <thead>
            <tr
              class="bg-gray-200 text-gray-600 uppercase text-xs sm:text-sm leading-normal"
            >
              <th class="py-3 px-3 sm:px-6 text-left">Item</th>
              <th class="py-3 px-3 sm:px-6 text-left">Placed</th>
              <th class="py-3 px-3 sm:px-6 text-left hidden sm:table-cell">
                Location
              </th>
              <th class="py-3 px-3 sm:px-6 text-right">Total</th>
            </tr>
          </thead>
          <tbody class="text-gray-600 text-xs sm:text-sm font-light divide-y">
            <tr v-for="(order, n) of orders" :key="n" class="border-gray-200">
              <td class="py-3 px-3 sm:px-6 sm:whitespace-nowrap">
                <div class="flex items-center">
                  <div class="mr-2">
                    <svg
                      id="Layer_1"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      width="24"
                      height="24"
                      viewBox="0 0 289.939 289.939"
                      style="enable-background: new 0 0 289.939 289.939"
                      xml:space="preserve"
                    >
                      <g>
                        <path
                          style="fill: #d07c40"
                          d="M36.242,158.561h217.455l-27.182,126.848H63.424L36.242,158.561z"
                        />
                        <path
                          style="fill: #cd9770"
                          d="M140.159,285.409h9.341l4.53-117.788h-18.121L140.159,285.409z M108.727,285.409h9.061V167.621
		H99.667L108.727,285.409z M63.424,167.621l18.121,117.788h9.061l-9.061-117.788H63.424z M172.152,285.409h9.061l9.061-117.788
		h-18.121v117.788H172.152z M208.394,167.621l-9.061,117.788h9.061l18.121-117.788H208.394z"
                        />
                        <path
                          style="fill: #c1733b"
                          d="M27.182,158.561l27.191,126.848h72.449l126.876-126.848H27.182z"
                        />
                        <g>
                          <polygon
                            style="fill: #bf8c68"
                            points="154.03,167.621 135.909,167.621 139.687,272.543 150.406,261.824 		"
                          />
                          <polygon
                            style="fill: #bf8c68"
                            points="99.667,167.621 108.727,285.409 117.788,285.409 117.788,167.621 		"
                          />
                          <polygon
                            style="fill: #bf8c68"
                            points="190.273,167.621 172.152,167.621 172.152,240.088 185.742,226.497 		"
                          />
                          <polygon
                            style="fill: #bf8c68"
                            points="63.424,167.621 81.545,285.409 90.606,285.409 81.545,167.621 		"
                          />
                          <polygon
                            style="fill: #bf8c68"
                            points="226.515,167.621 208.394,167.621 205.377,206.872 223.226,189.031 		"
                          />
                        </g>
                        <path
                          style="fill: #f4b459"
                          d="M289.939,136.181c0-29.429-29.257-30.38-29.257-30.38l0.236-5.083
		c0-41.942-31.023-78.211-71.071-78.211c-7.013,0-15.231,3.371-21.673,5.328C160.735,13.99,146.727,4.53,130.464,4.53
		c-18.955,0-34.068,12.785-40.021,30.507l-3.461-0.118c-32.02,0-59.963,24.654-59.963,55.406c0,5.273,2.8,10.637,4.222,15.485
		h-2.247C12.975,105.81,0,119.41,0,136.19v10.121c0,16.789,12.984,30.09,28.994,30.09c8.553,0,16.155-2.827,21.465-8.988h15.05
		c5.31,6.17,12.92,8.988,21.465,8.988c8.553,0,16.155-2.827,21.465-8.988h15.059c5.31,6.17,12.911,8.988,21.465,8.988
		c8.553,0,16.155-2.827,21.465-8.988h15.05c5.319,6.17,12.911,8.988,21.465,8.988c8.544,0,16.155-2.827,21.465-8.988h15.041
		c5.31,6.17,12.92,8.988,21.465,8.988c16.019,0,29.003-13.31,29.003-30.09C289.912,146.311,289.939,136.181,289.939,136.181z"
                        />
                        <path
                          style="fill: #c39047"
                          d="M77.015,113.258c-7.502,0-13.591,6.08-13.591,13.591c0,7.511,6.089,13.591,13.591,13.591
		s13.591-6.089,13.591-13.591S84.517,113.258,77.015,113.258z M104.197,67.955c-7.502,0-13.591,6.08-13.591,13.591
		s6.089,13.591,13.591,13.591c7.502,0,13.591-6.08,13.591-13.591S111.699,67.955,104.197,67.955z M181.212,58.894
		c-10.003,0-18.121,8.118-18.121,18.121c0,10.012,8.118,18.121,18.121,18.121s18.121-8.109,18.121-18.121
		C199.333,67.012,191.215,58.894,181.212,58.894z M221.985,113.258c-7.502,0-13.591,6.089-13.591,13.591s6.089,13.591,13.591,13.591
		s13.591-6.089,13.591-13.591S229.487,113.258,221.985,113.258z M144.97,113.258c-5.011,0-9.061,4.059-9.061,9.061
		c0,5.011,4.05,9.061,9.061,9.061s9.061-4.05,9.061-9.061C154.03,117.308,149.98,113.258,144.97,113.258z"
                        />
                      </g>
                    </svg>
                  </div>
                  <span>{{ truncateName(order.item) }}</span>
                </div>
              </td>
              <td class="py-3 px-3 sm:px-6 sm:whitespace-nowrap">
                <span class="hidden sm:inline">{{
                  formatDate(order.created)
                }}</span>
                <span class="inline">{{ formatTime(order.created) }}</span>
              </td>
              <td
                class="py-3 px-3 sm:px-6 sm:whitespace-nowrap hidden sm:table-cell"
              >
                Fort Wayne
              </td>
              <td class="py-3 px-3 sm:px-6 font-bold text-green-500 text-right">
                {{ order.total }}
              </td>
            </tr>
          </tbody>
        </table>
        <div v-else class="text-gray-500 text-center">
          No orders yet. Be the first!
        </div>
      </section>

      <div class="border-b-4 mt-12 mb-10" />

      <!-- About -->
      <section id="about" class="flex flex-col space-y-5 mb-8">
        <h2 class="text-center">
          <span class="font-bold text-lg">About&nbsp;</span
          ><span class="font-display text-2xl">Muffin Quest</span>
        </h2>
        <p
          class="text-center sm:text-left leading-relaxed text-sm sm:text-base sm:leading-loose"
        >
          <a
            href="https://instagram.com/muffin.quest"
            class="text-blue-600 underline"
            target="_blank"
            >Muffin Quest</a
          >
          &ndash; formerly known as MotoMuffins &ndash; began as one man's dream
          to bequeath to his home town the tastiest of muffins. Said man has a
          motorcycle, too. (Said man is me.) Muffins delivered by motorcycle are
          made even more delicious by the fresh air and freedom that wash over
          them en route to their destination. Don't take my word for it:
          <span
            class="text-blue-600 underline cursor-pointer"
            @click="
              selected = 2;
              redirectToStripe();
            "
            >Try them for yourself.</span
          >
        </p>
        <p
          class="text-center sm:text-left leading-relaxed text-sm sm:text-base sm:leading-loose"
        >
          Questions? Concerns? Reach out to me at
          <a
            href="mailto:peter@muffin.quest"
            class="text-blue-600 underline"
            target="_blank"
            >peter@muffin.quest</a
          >
          for incredibly subpar customer service. Don't forget to tip!
        </p>
      </section>
      <section class="text-center text-xs text-gray-400 mb-8">
        &copy;{{ new Date().getFullYear() }} Peter Koeppen
      </section>
    </main>
  </div>
</template>

<script>
import * as dateFormat from 'dateformat';
import Lottie from '~/node_modules/vue-lottie/src/lottie.vue';
import * as motorcycleAnimation from '~/assets/lottie/motorcycle.json';

export default {
  components: {
    Lottie,
  },
  async asyncData({ store }) {
    const orders = await store.dispatch('api/listRecentOrders');
    return {
      loading: false,
      orders: orders.data || [],
      animationOptions: {
        animationData: motorcycleAnimation.default,
      },
      selected: null,
    };
  },
  methods: {
    formatDate(timestamp) {
      return dateFormat(timestamp, 'mmm d, ');
    },
    formatTime(timestamp) {
      return dateFormat(timestamp, 'h:MM TT');
    },
    truncateName(item) {
      return item
        .replace(/muffins\s/i, '')
        .split(' + ')
        .shift();
    },
    async redirectToStripe() {
      this.loading = true;
      let item;
      switch (this.selected) {
        case 1:
          item = 'chocolate_chip_regular';
          break;
        case 2:
          item = 'chocolate_chip_keto';
          break;
        case 3:
          item = 'chocolate_chip_glutenfree';
          break;
        default:
          return;
      }
      const data = await this.$store.dispatch('api/createCheckoutSession', {
        item,
      });

      await this.$stripe.redirectToCheckout({ sessionId: data.id });
    },
  },
};
</script>
