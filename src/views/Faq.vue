<template>
  <!--BreadCrumb-->
  <bread-crumb
    title="Frequently Asked Questions (FAQs)"
    description="Below are our frequently asked questions."
  />
  <!--BreadCrumb Ends-->
  <section class="faqPage">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="question-div">
            <div class="quenum text-center">
              <i class="bi bi-question-circle-fill"></i>
              <small>Question 1</small>
            </div>
            <div class="quetext">
              <p>What is e-Currency?</p>
            </div>
            <div class="clear"></div>
          </div>
          <div class="answer-div">
            <p>
              E-currency is money that is exchanged on computers. "E" is the
              first letter of the word "electronic" and "currency" is a money
              system. You can think of e-currency as Internet money. Buying and
              selling products and services on the Internet is possible because
              of e-currency.
            </p>
          </div>
        </div>
        <div class="col-md-12">
          <div class="question-div">
            <div class="quenum text-center">
              <i class="bi bi-question-circle-fill"></i>
              <small>Question 2</small>
            </div>
            <div class="quetext">
              <p>I have bitcoins or Perfect Money, how can i sell to you?</p>
            </div>
            <div class="clear"></div>
          </div>
          <div class="answer-div">
            <p>
              After succesful registration, on your dashboard click "sell now",
              select e currency (BTC). Then fill the below form to place an
              order.
            </p>
          </div>
        </div>
        <div class="col-md-12">
          <div class="question-div">
            <div class="quenum text-center">
              <i class="bi bi-question-circle-fill"></i>
              <small>Question 3</small>
            </div>
            <div class="quetext">
              <p>How can i buy bitcoins or perfect money?</p>
            </div>
            <div class="clear"></div>
          </div>
          <div class="answer-div">
            <p>
              Register, Click "Buy Now", select your preferred e currency then
              fill the form below to place a buy order. make payments to the
              Account details as displayed in the order process. Alternatively,
              check transaction details sent to your email.
            </p>
          </div>
        </div>
        <div class="col-md-12">
          <div class="question-div">
            <div class="quenum text-center">
              <i class="bi bi-question-circle-fill"></i>
              <small>Question 4</small>
            </div>
            <div class="quetext">
              <p>How long does it take to fund my Account?</p>
            </div>
            <div class="clear"></div>
          </div>
          <div class="answer-div">
            <p>
              After a successful sell order, your account will be funded within
              24 hours after we confirm your transaction.
            </p>
          </div>
        </div>
        <div class="col-md-12">
          <div class="question-div">
            <div class="quenum text-center">
              <i class="bi bi-question-circle-fill"></i>
              <small>Question 5</small>
            </div>
            <div class="quetext">
              <p>What is the minimum buy or sell order?</p>
            </div>
            <div class="clear"></div>
          </div>
          <div class="answer-div">
            <p>The minimum buy or sell order is $10.</p>
          </div>
        </div>
        <div class="col-md-12">
          <div class="question-div">
            <div class="quenum text-center">
              <i class="bi bi-question-circle-fill"></i>
              <small>Question 6</small>
            </div>
            <div class="quetext">
              <p>What are your business hours?</p>
            </div>
            <div class="clear"></div>
          </div>
          <div class="answer-div">
            <p>
              We work Mondays to Saturdays 7am to 9pm, Saturdays 9am to 4pm,
              Sundays 12pm to 4pm.
            </p>
          </div>
        </div>
        <div class="col-md-12">
          <div class="question-div">
            <div class="quenum text-center">
              <i class="bi bi-question-circle-fill"></i>
              <small>Question 7</small>
            </div>
            <div class="quetext">
              <p>Other issues?</p>
            </div>
            <div class="clear"></div>
          </div>
          <div class="answer-div">
            <p>
              Kindly use the
              <RouterLink to="/contact">contact form</RouterLink> or send a mail
              to us at
              <a href="mailto:contact@evonexpay.com">contact@evonexpay.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

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
export default {};
</script>

<style></style>
