<template>
  <!--BreadCrumb-->
  <bread-crumb
    title="Send Money"
    description="We simplify sending money from one African country to another and Global Remittance to Africa."
  />
  <!--BreadCrumb Ends-->
  <!--Alert-->
  <div class="alert text-center alert-sendmoney" role="alert">
    Sending money is just a few clicks away. Evonex Pay makes it easy to send
    online with confidence.
    <RouterLink to="/auth/login"
      >Send Money Online Now <i class="bi bi-arrow-bar-right"></i
    ></RouterLink>
  </div>
  <!--Alert Ends-->

  <!--Send Money Page-->
  <section class="sendMoneyPage">
    <div class="container firstCont">
      <div class="row">
        <div class="col-md-5">
          <img src="@/assets/images/send-money-img1.jpg" />
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-6">
          <h1>Status Updates 24/7</h1>
          <div class="line-hr"></div>
          <p>
            You’ll always know where your money is with text updates, email
            notifications, and online access 24/7.
          </p>
          <ul>
            <li>
              Instantly deposit money into your loved one's account, 24/7/365.
              Supports all major banks.
            </li>
            <li>
              Contact us to get the answers and information you need. We’re here
              to help.
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container secondCont">
      <div class="row">
        <div class="col-md-6">
          <h1>Send money online</h1>
          <div class="line-hr"></div>
          <p>
            With Evonex Pay, money transfers are reliable, fast and your loved
            ones have funds deposited into their bank or mobile accounts.
          </p>
          <ul>
            <li>
              Regiser/loign: Enter your information so that we can verify your
              identity.
            </li>
            <li>
              Receiver: Tell us who you are sending to, how they want to receive
              the money and how much you want to send.
            </li>
            <li>
              How to pay: You can either pay with your credit or debit card, or
              directly from your bank account.
            </li>
          </ul>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-5">
          <img src="@/assets/images/welcomescreenimg.png" />
        </div>
      </div>
    </div>
    <div class="container thirdCont">
      <div class="row justify-content-center">
        <div class="col-md-10 text-center">
          <span>SEND, RECEIVE, AND SAVE</span>
          <h1>Evonex Pay Myway</h1>
          <div class="line-hr"></div>
          <p>
            With so many options to send and receive money, through bank
            accounts, mobile accounts and other options, Evonex Pay lets you
            discover your way.
          </p>
        </div>
      </div>
    </div>
  </section>
  <!--Send Money Page Ends-->

  <!--Slider-->
  <section class="slider-send-money">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h1>
            At <span>Evonex Pay</span>, You Can Send, Receive & Save Money
          </h1>
          <div
            class="main-carousel"
            data-flickity='{ "groupCells": true, "prevNextButtons": false, "freeScroll": true,
          "wrapAround": false }'
          >
            <div class="carousel-cell text-center">
              <img src="@/assets/images/slider-usa.png" />
              <p>Dollar USD</p>
            </div>
            <div class="carousel-cell text-center">
              <img src="@/assets/images/slider-ghana.png" />
              <p>Ghana Cedi</p>
            </div>
            <div class="carousel-cell text-center">
              <img src="@/assets/images/slider-nigeria.png" />
              <p>Nigeria Naria</p>
            </div>
            <div class="carousel-cell text-center">
              <img src="@/assets/images/slider-kenya.png" />
              <p>Kenya Shillings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Slider Ends-->

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
          <RouterLink to="/auth/signup" class="btn1"
            ><img src="@/assets/images/btn-app-store.svg"
          /></RouterLink>
          <RouterLink to="/auth/signup" class="btn2"
            ><img src="@/assets/images/btn-google-playstore.svg"
          /></RouterLink>
        </div>
      </div>
    </div>
  </section>
  <!--Call To Action Ends-->
</template>

<script>
export default {
  setup() {
    const recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"
    );
    document.head.appendChild(recaptchaScript);
  },
};
</script>

<style></style>
