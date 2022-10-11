<template>
  <!--BreadCrumb-->
  <bread-crumb title="Blog" description="Our Lastest news and updates" />
  <!--BreadCrumb Ends-->

  <!--Blog Page-->
  <section class="blogPage">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <img src="@/assets/images/blogimg.jpg" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">Blog Title</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium iusto illum doloribus sapiente labore commodi,
                voluptates eius quis ipsum quia rem harum nobis temporibus quos
                libero? Saepe in voluptatem aspernatur, facilis veritatis, illum
                sed officia libero doloribus odio quia reiciendis...
              </p>
              <RouterLink :to="'/blogContent/' + '123'">Read More</RouterLink>
              <p class="card-text mt-3">
                <small class="text-muted"
                  >February 18, 2019 06:51:17 AM • By admin</small
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Blog Page Ends-->
</template>

<script>
export default {};
</script>

<style></style>
