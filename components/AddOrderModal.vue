<template>
  <div
    v-show="visible"
    class="fixed inset-0 overflow-auto bg-black bg-opacity-80 z-40"
  >
    <!-- Overlay -->
    <div
      class="absolute inset-0 z-40"
      @click="hideModal({ modal: 'addOrder' })"
    />

    <div class="h-full w-full flex flex-col items-center p-10">
      <div
        class="relative z-50 w-full max-w-sm p-6 bg-white rounded"
        style="margin: auto 0"
      >
        <!-- Close Modal -->
        <div
          class="absolute top-0 -right-9 h-8 w-8 rounded bg-white bg-opacity-0 hover:bg-opacity-20 cursor-pointer"
          @click="hideModal({ modal: 'addOrder' })"
        >
          <div class="flex items-center justify-center p-2 text-white">
            <i class="fas fa-times" />
          </div>
        </div>

        <!-- Header -->
        <div class="flex items-center justify-center">
          <h2 class="text-xl font-bold">Add Order</h2>
        </div>

        <!-- Form -->
        <form
          class="flex flex-col text-sm"
          spellcheck="false"
          @submit.prevent="addOrder()"
        >
          <!-- Item -->
          <div class="mb-4">
            <div class="font-bold mb-1">
              <label for="item">Item</label>
            </div>
            <input
              :value="data.item"
              class="outline-none px-3 py-1 w-full rounded bg-gray-200 focus:bg-white border-2 border-gray-200 hover:border-gray-300 focus:border-blue-300"
              type="text"
              name="item"
              @input="
                (e) =>
                  setModalData({
                    modal: 'addOrder',
                    data: { item: e.target.value },
                  })
              "
            />
          </div>

          <!-- Name -->
          <div class="mb-4">
            <div class="font-bold mb-1">
              <label for="name">Name</label>
            </div>
            <input
              :value="data.name"
              class="outline-none px-3 py-1 w-full rounded bg-gray-200 focus:bg-white border-2 border-gray-200 hover:border-gray-300 focus:border-blue-300"
              type="text"
              name="name"
              @input="
                (e) =>
                  setModalData({
                    modal: 'addOrder',
                    data: { name: e.target.value },
                  })
              "
            />
          </div>

          <!-- Address: Line 1 -->
          <div class="mb-4">
            <div class="font-bold mb-1">
              <label for="address-line1">Address Line 1</label>
            </div>
            <input
              :value="data.address_line1"
              class="outline-none px-3 py-1 w-full rounded bg-gray-200 focus:bg-white border-2 border-gray-200 hover:border-gray-300 focus:border-blue-300"
              type="text"
              name="address-line1"
              @input="
                (e) =>
                  setModalData({
                    modal: 'addOrder',
                    data: { address_line1: e.target.value },
                  })
              "
            />
          </div>

          <!-- Address: Line 2 -->
          <div class="mb-4">
            <div class="font-bold mb-1">
              <label for="address-line2">Address Line 2</label>
            </div>
            <input
              :value="data.address_line2"
              class="outline-none px-3 py-1 w-full rounded bg-gray-200 focus:bg-white border-2 border-gray-200 hover:border-gray-300 focus:border-blue-300"
              type="text"
              name="address-line2"
              @input="
                (e) =>
                  setModalData({
                    modal: 'addOrder',
                    data: { address_line2: e.target.value },
                  })
              "
            />
          </div>

          <!-- City -->
          <div class="mb-4">
            <div class="font-bold mb-1">
              <label for="address-city">City</label>
            </div>
            <input
              :value="data.address_city"
              class="outline-none px-3 py-1 w-full rounded bg-gray-200 focus:bg-white border-2 border-gray-200 hover:border-gray-300 focus:border-blue-300"
              type="text"
              name="address-city"
              @input="
                (e) =>
                  setModalData({
                    modal: 'addOrder',
                    data: { address_city: e.target.value },
                  })
              "
            />
          </div>

          <!-- State -->
          <div class="mb-4">
            <div class="font-bold mb-1">
              <label for="address-state">State</label>
            </div>
            <input
              :value="data.address_state"
              class="outline-none px-3 py-1 w-full rounded bg-gray-200 focus:bg-white border-2 border-gray-200 hover:border-gray-300 focus:border-blue-300"
              type="text"
              name="address-state"
              @input="
                (e) =>
                  setModalData({
                    modal: 'addOrder',
                    data: { address_state: e.target.value },
                  })
              "
            />
          </div>

          <!-- Postal Code -->
          <div class="mb-4">
            <div class="font-bold mb-1">
              <label for="address-postal-code">Postal Code</label>
            </div>
            <input
              :value="data.address_postal_code"
              class="outline-none px-3 py-1 w-full rounded bg-gray-200 focus:bg-white border-2 border-gray-200 hover:border-gray-300 focus:border-blue-300"
              type="text"
              name="address-postal-code"
              @input="
                (e) =>
                  setModalData({
                    modal: 'addOrder',
                    data: { address_postal_code: e.target.value },
                  })
              "
            />
          </div>

          <!-- Email -->
          <div class="mb-4">
            <div class="font-bold mb-1">
              <label for="email">Email</label>
            </div>
            <input
              :value="data.email"
              class="outline-none px-3 py-1 w-full rounded bg-gray-200 focus:bg-white border-2 border-gray-200 hover:border-gray-300 focus:border-blue-300"
              type="email"
              name="email"
              @input="
                (e) =>
                  setModalData({
                    modal: 'addOrder',
                    data: { email: e.target.value },
                  })
              "
            />
          </div>

          <!-- Total -->
          <div class="mb-4">
            <div class="font-bold mb-1">
              <label for="total">Total</label>
            </div>
            <input
              :value="data.total"
              class="outline-none px-3 py-1 w-full rounded bg-gray-200 focus:bg-white border-2 border-gray-200 hover:border-gray-300 focus:border-blue-300"
              type="text"
              name="total"
              @input="
                (e) =>
                  setModalData({
                    modal: 'addOrder',
                    data: { total: e.target.value },
                  })
              "
            />
          </div>

          <!-- Paid -->
          <div class="mb-4 flex items-center space-x-3">
            <div class="font-bold mb-1">
              <label for="paid">Paid</label>
            </div>
            <div>
              <input
                v-model="data.paid"
                class="outline-none"
                type="checkbox"
                name="paid"
                @input="
                  (e) =>
                    setModalData({
                      modal: 'addOrder',
                      data: { paid: e.target.value },
                    })
                "
              />
            </div>
          </div>

          <!-- Delivered -->
          <div class="mb-4 flex items-center space-x-3">
            <div class="font-bold mb-1">
              <label for="delivered">Delivered</label>
            </div>
            <div>
              <input
                v-model="data.delivered"
                class="outline-none"
                type="checkbox"
                name="delivered"
                @input="
                  (e) =>
                    setModalData({
                      modal: 'addOrder',
                      data: { delivered: e.target.value },
                    })
                "
              />
            </div>
          </div>

          <!-- Submit -->
          <button
            :class="
              data.loading ? 'bg-blue-200 pointer-events-none' : 'bg-blue-400'
            "
            class="w-full text-white hover:bg-blue-500 rounded px-3 py-2 font-bold"
            type="submit"
          >
            <i v-if="data.loading" class="fas fa-asterisk animate-spin" />
            <span v-else>Add Order</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  computed: {
    ...mapState({
      visible: (state) => state.modals.addOrder.visible,
      data: (state) => state.modals.addOrder.data,
    }),
  },
  methods: {
    ...mapMutations(['setModalData', 'showModal', 'hideModal']),

    /*
     * Call the API to login.
     */
    async addOrder() {
      if (this.data.loading) return;
      this.setModalData({ modal: 'addOrder', data: { loading: true } });
      await this.$store.dispatch('api/addOrder', this.data);
      this.hideModal({ modal: 'addOrder' });
    },
  },
};
</script>
