<template>
  <!--BreadCrumb-->
  <bread-crumb
    title="About Us"
    description="Thirst for convenience and fast services."
  />
  <!--BreadCrumb Ends-->

  <!--About Page-->
  <section class="aboutPage">
    <div class="container firstCont">
      <div class="row">
        <div class="col-md-6">
          <h1>Who We Are!</h1>
          <div class="line-hr"></div>
          <p>
            <RouterLink to="/">Evonexpay.com</RouterLink> is a product of Evonex
            Global Services Limited designed to serve the need of our age; the
            thirst for convenience and fast services
          </p>
          <p>
            We are into buying, selling and exchange of cryptoCurrency and
            e-Currencies such as Bitcoin, Ethereum, Ripple, Perfect money,
            Paypal, Skrill, Neteller, Advcash and Payeer into different
            currencies such as Nigeria naira, Kenya shillings and Ghana cedis.
            We also offer exchange of iTunes cards to cash.
          </p>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-5">
          <img src="@/assets/images/ecurrenciesimg.png" />
        </div>
      </div>
    </div>
    <div class="container secondCont">
      <div class="row justify-content-center">
        <div class="col-md-10 text-center">
          <h1>Why Us?</h1>
          <div class="line-hr"></div>
          <p>
            <RouterLink to="/">Evonexpay.com</RouterLink> prides itself on
            offering the best competitive rate in the market. the constant zeal
            to satisfy our esteem customers is our greatest drive to succeed
            knowing fully well that we are nothing without them. we look forward
            to not just meeting your expectations but going beyond them. we
            intend to keep looking for innovative ways to meet the ever
            increasing demands of our client base of both big and small
            companies as quick as possible.
          </p>
          <h1 class="mt-5">Development Team</h1>
          <div class="line-hr"></div>
          <p>
            Evonex Pay's development team is working for the continuous
            improvement of the website and new features are introduced
            periodically to give users a more enjoyable experience.
          </p>
        </div>
      </div>
    </div>
  </section>
  <!--About Page Ends-->

  <!--Call To Action-->
  <section class="call-action">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-9 text-center">
          <h1>
            Join our many clients to enjoy the benefit of using Evonex Pay
          </h1>
          <p>
            You can download our mobile app on App Store and Google Play Store
          </p>
          <a to="/auth/signup" class="btn1"
            ><img src="@/assets/images/btn-app-store.svg"
          /></a>
          <a to="/auth/signup" class="btn2"
            ><img src="@/assets/images/btn-google-playstore.svg"
          /></a>
        </div>
      </div>
    </div>
  </section>
  <!--Call To Action Ends-->
</template>

<script>
export default {};
</script>

<style></style>
