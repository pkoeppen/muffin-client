<template>
  <main class="flex justify-center items-center p-3">
    <!-- Recent Orders -->
    <section id="recent" class="flex flex-col items-center gap-5">
      <h2 class="font-bold text-lg text-center">Orders ({{ count }})</h2>
      <div>
        <button
          class="w-40 py-3 px-5 font-bold font-bold rounded bg-green-500 text-white hover:bg-green-600"
          @click="showModal({ modal: 'addOrder', data: {} })"
        >
          Add Order
        </button>
      </div>
      <table v-if="orders.length" class="table-auto w-full">
        <thead>
          <tr
            class="bg-gray-200 text-gray-600 uppercase text-xs leading-normal"
          >
            <th class="py-3 px-3 sm:px-6 text-left">Item</th>
            <th class="py-3 px-3 sm:px-6 text-left">Placed</th>
            <th class="py-3 px-3 sm:px-6 text-left">Name</th>
            <th class="py-3 px-3 sm:px-6 text-left">Address</th>
            <th class="py-3 px-3 sm:px-6 text-left">Email</th>
            <th class="py-3 px-3 sm:px-6 text-left">Total</th>
            <th class="py-3 px-3 sm:px-6 text-left">Paid</th>
            <th class="py-3 px-3 sm:px-6 text-right">Delivered</th>
            <th></th>
          </tr>
        </thead>
        <tbody class="text-gray-600 text-xs font-light divide-y">
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
                <span>{{ order.item }}</span>
              </div>
            </td>
            <td class="py-3 px-3 sm:px-6 sm:whitespace-nowrap">
              {{ formatDate(order.created) }}
            </td>
            <td class="py-3 px-3 sm:px-6 sm:whitespace-nowrap">
              {{ order.name || '(none)' }}
            </td>
            <td class="py-3 px-3 sm:px-6">
              <div>{{ order.address.line1 }}</div>
              <div v-if="order.address.line2">{{ order.address.line2 }}</div>
              <div>
                {{ order.address.city }}, {{ order.address.state }}
                {{ order.address.postal_code }}
              </div>
            </td>
            <td class="py-3 px-3 sm:px-6">
              {{ order.email || '(none)' }}
            </td>
            <td class="py-3 px-3 sm:px-6 font-bold text-green-500 text-center">
              {{ order.total }}
            </td>
            <td class="py-3 px-3 sm:px-6 text-center text-sm">
              <i
                :class="
                  order.paid
                    ? 'fas fa-check-circle text-green-500'
                    : 'fas fa-clock text-gray-500'
                "
                class="cursor-pointer"
                :title="order.paid ? 'Mark Pending' : 'Mark Paid'"
                @click="updateOrder({ id: order._id, paid: !order.paid })"
              />
            </td>
            <td class="py-3 px-3 sm:px-6 text-center text-sm">
              <i
                :class="
                  order.delivered
                    ? 'fas fa-check-circle text-green-500'
                    : 'fas fa-clock text-gray-500'
                "
                class="cursor-pointer"
                :title="order.delivered ? 'Mark Pending' : 'Mark Delivered'"
                @click="
                  updateOrder({ id: order._id, delivered: !order.delivered })
                "
              />
            </td>
            <td class="py-3 px-3 sm:px-6 text-center text-sm">
              <i
                class="fas fa-trash-alt cursor-pointer text-gray-500 hover:text-red-500"
                title="Delete Order"
                @click="deleteOrder({ id: order._id })"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else class="text-gray-500 text-center">No orders yet.</div>
    </section>
  </main>
</template>

<script>
import { mapMutations } from 'vuex';
import * as dateFormat from 'dateformat';
export default {
  middleware: ['auth'],
  async fetch() {
    const { orders, count } = await this.$store.dispatch('api/listOrders', {
      limit: 500,
    });
    this.orders = orders;
    this.count = count;
  },
  data() {
    return {
      orders: [],
      count: 0,
    };
  },
  methods: {
    ...mapMutations(['showModal']),
    formatDate(timestamp) {
      return dateFormat(timestamp, 'mmm d, h:MM TT');
    },
    async updateOrder({ id, ...updates }) {
      const order = this.orders.find((order) => order._id === id);
      await this.$store.dispatch('api/updateOrder', { id, ...updates });
      for (const key in updates) {
        order[key] = updates[key];
      }
    },
    async deleteOrder({ id }) {
      if (confirm('Are you sure you want to delete this order?')) {
        await this.$store.dispatch('api/deleteOrder', { id });
      }
    },
  },
  head: {
    title: 'Admin Dashboard',
  },
};
</script>
