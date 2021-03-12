export default function ({ store, redirect, route }) {
  const admin = store.state.api.admin;
  const redirectPath = `/login`;
  if (!admin) {
    redirect(redirectPath);
  } else if (admin.expires < Date.now()) {
    store.commit('api/setAdmin', null);
    redirect(redirectPath);
  }
}
