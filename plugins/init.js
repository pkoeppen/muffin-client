import Vue from 'vue';
import Simplebar from 'simplebar-vue';
import { loadStripe } from '@stripe/stripe-js';

Vue.component('simplebar', Simplebar);

export default async function ({ store }, inject) {
  if (process.browser) {
    await store.dispatch('nuxtClientInit');
    const stripe = await loadStripe(process.env.STRIPE_API_KEY);
    inject('stripe', stripe);
  }
}
