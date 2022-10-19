<template>
  <div></div>
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const user = ref(JSON.parse(localStorage.getItem("userData")));
    onMounted(() => {
      let trxref = route.query.trxref;
      let reference = route.query.reference;
      //console.log(userId, token);
      if (trxref && reference) {
        axios
          .post(
            `https://evonxpay-backend.herokuapp.com/api/api/pay/verify/?trxref=${trxref}&reference=${reference}`,
            {
              headers: {
                Authorization: `${user.value.access_token}`,
              },
            }
          )
          .then(() => {
            router.push({
              name: "UserWallet",
              query: {
                message: "Deposit Completed",
              },
            });
          });
      }
    });
    return {
      user,
    };
  },
};
</script>

<style></style>
