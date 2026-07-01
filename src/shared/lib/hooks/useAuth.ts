import { authStore } from "../stores/auth.store";

export const useAuth = () => {
  const isLoggedIn = authStore.isLoggedIn;
  const login = () => authStore.login();
  const logout = () => authStore.logout();

  return {
    isLoggedIn,
    login,
    logout,
  }

};