<template>
  <div>
    <h1>hfhfhf</h1>
  </div>
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
      let trxref = route.query.tx_ref;
      let reference = route.query.transaction_id;
      console.log(trxref, reference);
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
