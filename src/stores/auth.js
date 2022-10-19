import { defineStore } from "pinia";
//import { ref, computed } from "vue";

export const AuthData = defineStore("auth", {
  //Composition Api
  /* //State
  const user = ref(null)
  const loggedInUser = ref(localStorage.getItem("accessKey") || null)

  //Getters
  const userLogin = computed(() => {
    return user.value
  })

  //Actions
  const logUser = (payload) => {
    user.value = payload
    localStorage.setItem("accessKey", payload.token)
  }


  return{
    user,
    loggedInUser,
    logUser,
    userLogin
  } */
  state: () => ({
    counter: 0,
    userData: "",
    loggedUser: localStorage.getItem("userData") || null,
  }),
  getters: {
    user: (state) => state.userData,
    loggedInUser: (state) => state.loggedUser,
  },
  actions: {
    logUser(payload) {
      this.userData = payload;
      localStorage.setItem("userData", JSON.stringify(payload.data));
    },
    signOut() {
      this.loggedUser = null;
      localStorage.removeItem("userData");
    },
  },

  persist: true,
});
