<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="line-div">
        <h4 class="hey">
          {{ title }}
          <span> {{ currentDate() }} </span>
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: ["title"],
  setup() {
    const currentDate = () => {
      return moment().format("L");
    };
    return {
      currentDate,
    };
  },
};
</script>

<style></style>
