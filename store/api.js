import * as querystring from 'querystring';

export const state = () => ({
  authenticating: false,
  admin: null,
});

export const actions = {
  /*
   * Log in.
   */
  logIn(context, params) {
    context.commit('setAuthenticating', true);
    return this.$axios
      .post(`/admin/login`, params)
      .then(({ data }) => {
        context.commit('setAdmin', data);
        return true;
      })
      .catch(this.$catch)
      .finally(() => context.commit('setAuthenticating', false));
  },

  /*
   * Log out.
   */
  logOut(context) {
    return this.$axios
      .post(`/admin/logout`)
      .then(() => {
        context.commit('setAdmin', null);
        return true;
      })
      .catch(this.$catch);
  },

  /*
   * Fetch a Stripe Checkout session.
   */
  createCheckoutSession(context, params) {
    return this.$axios
      .post(`/payment/checkout?${querystring.stringify(params)}`)
      .then(({ data }) => data)
      .catch(this.$catch);
  },

  /*
   * Get successful payment details.
   */
  getPaymentSuccessDetails(context, params) {
    return this.$axios
      .get(`/payment/success?${querystring.stringify(params)}`)
      .then(({ data }) => data)
      .catch(this.$catch);
  },

  /*
   * List all orders (admin).
   */
  listOrders(context, params) {
    return this.$axios
      .get(`/orders?${querystring.stringify(params)}`)
      .then(({ data }) => data)
      .catch(this.$catch);
  },

  /*
   * List recent orders.
   */
  listRecentOrders(context) {
    return this.$axios
      .get(`/orders`)
      .then(({ data }) => data)
      .catch(this.$catch);
  },

  /*
   * Update an order.
   */
  updateOrder(context, { id, ...updates }) {
    return this.$axios
      .post(`/orders/${id}`, updates)
      .then(({ data }) => data)
      .catch(this.$catch);
  },

  /*
   * Add a custom order.
   */
  addOrder(context, params) {
    return this.$axios
      .put(`/orders/custom`, params)
      .then(({ data }) => data)
      .catch(this.$catch);
  },

  /*
   * Delete an order.
   */
  deleteOrder(context, { id }) {
    return this.$axios
      .delete(`/orders/${id}`)
      .then(({ data }) => data)
      .catch(this.$catch);
  },

  /*
   * List all messages (admin).
   */
  listMessages(context, params) {
    return this.$axios
      .get(`/sms?${querystring.stringify(params)}`)
      .then(({ data }) => data)
      .catch(this.$catch);
  },

  /*
   * Delete a message.
   */
  deleteMessage(context, { id }) {
    return this.$axios
      .delete(`/sms/${id}`)
      .then(({ data }) => data)
      .catch(this.$catch);
  },
};

export const mutations = {
  setAuthenticating(_state, authenticating) {
    _state.authenticating = authenticating;
  },
  setAdmin(_state, admin) {
    _state.admin = admin;
    if (process.browser && !admin) {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++)
        clearCookie(cookies[i].split('=')[0]);
    }
  },
};

function clearCookie(name, domain = document.domain, path = '/') {
  document.cookie = `${name}=; expires=${+new Date()}; domain=${domain}; path=${path}`;
}
