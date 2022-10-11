<template>
  <section class="breadcrumbPages about-breadcrumbPages">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h1>{{ title }}</h1>
          <div class="line-hr"></div>
          <p>{{ description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["title", "description"],
};
</script>

<style></style>
