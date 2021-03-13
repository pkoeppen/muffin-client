<template>
  <div
    class="fixed inset-0 flex flex-col justify-center items-center space-y-5"
  >
    <div class="font-display text-2xl">Muffin Quest</div>
    <form
      class="p-5 border rounded flex flex-col space-y-3"
      @submit.prevent="login()"
    >
      <input
        v-model="form.username"
        class="outline-none py-2 px-3 mr-4 w-full text-sm rounded"
        placeholder="Username"
      />
      <input
        v-model="form.password"
        class="outline-none py-2 px-3 mr-4 w-full text-sm rounded"
        placeholder="Password"
        type="password"
      />
      <div>
        <button
          class="px-3 py-2 text-sm text-center w-full bg-gray-500 hover:bg-gray-600 text-white rounded font-bold mt-2"
          type="submit"
        >
          Login
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    async login() {
      const params = {
        username: this.form.username,
        password: this.form.password,
      };
      const success = await this.$store.dispatch('api/logIn', params);
      if (success) this.$router.push('/admin');
    },
  },
  head: {
    title: 'Login',
  },
};
</script>
