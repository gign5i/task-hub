import { TokenService, token } from "@/shared/model/services/token-service";
import { makeAutoObservable } from "mobx";

export class AuthStore {
  isLoggedIn = !!TokenService.get(token.accessToken);

  constructor() {
    makeAutoObservable(this)
  }

  login() {
    TokenService.set(token.accessToken, 'mockAccessToken');
    this.isLoggedIn = true
  }

  logout() {
    TokenService.remove(token.accessToken)
    this.isLoggedIn = false
  }
}

export const authStore = new AuthStore()