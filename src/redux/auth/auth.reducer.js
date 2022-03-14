import { initailState } from "./auth.constants";

export const authReducer = (state = initailState, { type, payload }) => {
  switch (type) {
    case "LogIn": {
      return { ...state, authToken: payload, isLoggedIn: true };
    }
    case "LogOut": {
      localStorage.setItem("authToken", "");
      return { ...state, authToken: "", isLoggedIn: false };
    }
    default: {
      return { ...state };
    }
  }
};
