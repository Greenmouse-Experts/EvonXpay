<template>
  <div></div>
</template>

<script>
import axios from "axios";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    onMounted(() => {
      let userId = route.query.userId;
      let token = route.query.token;
      console.log(userId, token);
      if (userId && token) {
        axios
          .get(
            `https://evonxpay-backend.herokuapp.com/api/email-verification?id=${userId}&token=${token}`
          )
          .then(() => {
            router.push({
              name: "Login",
              query: {
                message: "Your email has been successfully verified",
              },
            });
          });
      }
    });
  },
};
</script>

<style></style>
