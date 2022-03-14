export const initailState = {
  isLoggedIn:
    localStorage.getItem("authToken") == "" ||
    localStorage.getItem("authToken") == undefined
      ? false
      : true,
  authToken: localStorage.getItem("authToken") || "",
};
