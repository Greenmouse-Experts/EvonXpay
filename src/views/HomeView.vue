<template>
  <div>
    <!--Welcome Screen-->
    <section class="welcome-screen">
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <h1>Crypto transactions with ease and speed!</h1>
            <p>
              At <span>Evonex Pay,</span> we buy, sell and provide instant
              exchange of different E-currency at an excellent rate and speed.
            </p>
            <div class="btn-div">
              <h4>Download Our Mobile App</h4>
              <a href="auth/signup.html" class="btn1"
                ><img src="@/assets/images/btn-app-store.svg"
              /></a>
              <a href="auth/signup.html" class="btn2"
                ><img src="@/assets/images/btn-google-playstore.svg"
              /></a>
            </div>
          </div>
          <div class="col-md-5 img-area">
            <img src="@/assets/images/welcomescreenimg.png" />
          </div>
        </div>
      </div>
    </section>
    <!--Welcome Screen Ends-->

    <!--Why Choose-->
    <section class="why-choose">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10 text-center header-sec mb-5 pb-1">
            <h1>Why People Choose Evonex Pay</h1>
            <p>We make cryptocurrency transations easy and fast for you</p>
          </div>
          <div class="col-md-3 text-center">
            <div class="choose-box">
              <img src="@/assets/images/chooseicon1.png" />
              <h3>Amazing Rates</h3>
              <p>
                We do our best to offer the most competitive rates. All fees are
                inclusive in the rate so you do not pay any extra charges. Thank
                us later!!!
              </p>
            </div>
          </div>
          <div class="col-md-3 text-center">
            <div class="choose-box">
              <img src="@/assets/images/chooseicon2.png" />
              <h3>Instant Funding</h3>
              <p>
                Timely delivery is very important to us. One thing customers
                appriciate is that we process orders with speed, Orders are
                completed within minutes.
              </p>
            </div>
          </div>
          <div class="col-md-3 text-center">
            <div class="choose-box">
              <img src="@/assets/images/chooseicon3.png" />
              <h3>Point System</h3>
              <p>
                Get points on every transaction done through your link. Share
                your referral links and earn commission each time anyone you
                refer to us completes an order.
              </p>
            </div>
          </div>
          <div class="col-md-3 text-center">
            <div class="choose-box">
              <img src="@/assets/images/chooseicon4.png" />
              <h3>Bill Payments</h3>
              <p>
                Use crypto to pay home bills and more ranging from airtime,
                electricity, internet data, tv subscription, and every other
                bill you need sorted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Why Choose Ends-->

    <!--Buy Sell Crypto-->
    <section class="buy-sell-crypto">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 buy-box">
            <div class="circle"></div>
            <div class="main-box">
              <div class="row">
                <div class="col-xl-12 text-center logo-area mb-4">
                  <img src="@/assets/images/logo.png" />
                </div>
                <div class="col-xl-12">
                  <ul
                    class="nav nav-pills nav-fill mb-4 mt-2 justify-content-center"
                    id="pills-tab"
                    role="tablist"
                  >
                    <!--Buy-->
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link active tabs-button"
                        id="pills-buy-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-buy"
                        type="button"
                        role="tab"
                        aria-controls="pills-buy"
                        aria-selected="true"
                      >
                        Buy
                      </button>
                    </li>
                    <!--Sell-->
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link tabs-button"
                        id="pills-sell-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-sell"
                        type="button"
                        role="tab"
                        aria-controls="pills-sell"
                        aria-selected="false"
                      >
                        Sell
                      </button>
                    </li>
                    <!--Exchange-->
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link tabs-button"
                        id="pills-exchange-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-exchange"
                        type="button"
                        role="tab"
                        aria-controls="pills-exchange"
                        aria-selected="false"
                      >
                        Exchange
                      </button>
                    </li>
                  </ul>
                  <div class="tab-content" id="pills-tabContent">
                    <!--Buy-->
                    <div
                      class="tab-pane fade show active"
                      id="pills-buy"
                      role="tabpanel"
                      aria-labelledby="pills-buy-tab"
                    >
                      <form>
                        <div class="row">
                          <div class="col-xl-12 mt-3">
                            <label>You have</label>
                            <select>
                              <option>NGN</option>
                              <option>USD</option>
                              <option>EUR</option>
                            </select>
                            <input type="number" />
                          </div>
                          <div class="col-xl-12 mt-4">
                            <label>You Get</label>
                            <select>
                              <option>BTC</option>
                              <option>ETH</option>
                              <option>USDT</option>
                            </select>
                            <input type="number" />
                          </div>
                          <div class="col-xl-12 mt-3 text-center">
                            <button type="submit">Buy Now</button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <!--Sell-->
                    <div
                      class="tab-pane fade"
                      id="pills-sell"
                      role="tabpanel"
                      aria-labelledby="pills-sell-tab"
                    >
                      <form>
                        <div class="row">
                          <div class="col-xl-12 mt-3">
                            <label>You Sell</label>
                            <select>
                              <option>BTC</option>
                              <option>ETH</option>
                              <option>USDT</option>
                            </select>
                            <input type="number" />
                          </div>
                          <div class="col-xl-12 mt-4">
                            <label>You Get</label>
                            <select>
                              <option>NGN</option>
                              <option>USD</option>
                              <option>EUR</option>
                            </select>
                            <input type="number" />
                          </div>
                          <div class="col-xl-12 mt-3 text-center">
                            <button type="submit">Sell Now</button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <!--Exchange-->
                    <div
                      class="tab-pane fade"
                      id="pills-exchange"
                      role="tabpanel"
                      aria-labelledby="pills-exchange-tab"
                    >
                      <form>
                        <div class="row">
                          <div class="col-xl-12 mt-3">
                            <label>You have</label>
                            <select>
                              <option>BTC</option>
                              <option>ETH</option>
                              <option>USDT</option>
                            </select>
                            <input type="number" />
                          </div>
                          <div class="col-xl-12 mt-4">
                            <label>Exchange with</label>
                            <select>
                              <option>BTC</option>
                              <option>ETH</option>
                              <option>USDT</option>
                            </select>
                            <input type="number" />
                          </div>
                          <div class="col-xl-12 mt-3 text-center">
                            <button type="submit">Exchange Now</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-2"></div>
          <div class="col-lg-6 text-area">
            <h1>Buy, Sell and Exchange Crypto Instantly</h1>
            <p>
              Evonex pay is the quickest way to go about your cyrpto
              transactions
            </p>
            <a href="auth/signup.html">Get Started</a>
          </div>
        </div>
      </div>
    </section>
    <!--Buy Sell Crypto Ends-->

    <!--E-currencies-->
    <section class="e-currencies">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h1>Awesome Rates and Variety of Supported E-currencies</h1>
            <p>
              Evonex pay offers the best and most competetive rates in the
              market.
            </p>
            <a href="auth/signup.html">Create Account</a>
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-5 currency-img">
            <img src="@/assets/images/ecurrenciesimg.png" />
          </div>
        </div>
      </div>
    </section>
    <!--E-currencies Ends-->

    <!--Testimonial-->
    <section class="testimonial">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10 text-center header-sec mb-5 pb-1">
            <h1>Words From Our Clients</h1>
            <p>Dont just trust our word for it, hear from our client also</p>
          </div>
          <div class="col-md-12">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="row">
                    <div class="col-md-4 img-area">
                      <img src="@/assets/images/testimonialimg.png" />
                    </div>
                    <div class="col-md-1"></div>
                    <div class="col-md-7 testimony">
                      <img src="@/assets/images/testimonyicon.png" />
                      <div class="text">
                        <p>
                          “I've seen alot of e currency platform, but ive not
                          seen one like this, trust me, this is AWESOME!!”
                        </p>
                        <h5>A.O Samson</h5>
                        <span>Tech Guru</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row">
                    <div class="col-md-4 img-area">
                      <img src="@/assets/images/testimonialimg.png" />
                    </div>
                    <div class="col-md-1"></div>
                    <div class="col-md-7 testimony">
                      <img src="@/assets/images/testimonyicon.png" />
                      <div class="text">
                        <p>
                          “I've seen alot of e currency platform, but ive not
                          seen one like this, trust me, this is AWESOME!!”
                        </p>
                        <h5>A.O Samson</h5>
                        <span>Tech Guru</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <i class="bi bi-caret-left-fill"></i>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <i class="bi bi-caret-right-fill"></i>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Testimonial Ends-->

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
            <a href="auth/signup.html" class="btn1"
              ><img src="@/assets/images/btn-app-store.svg"
            /></a>
            <a href="auth/signup.html" class="btn2"
              ><img src="@/assets/images/btn-google-playstore.svg"
            /></a>
          </div>
        </div>
      </div>
    </section>
    <!--Call To Action Ends-->

    <!--Subscribe Newsletter-->
    <section class="subscribe-form">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6 text-center">
            <h1>Join Our Mailing List</h1>
            <form>
              <i class="bi bi-envelope"></i>
              <input type="email" placeholder="Your Email Address" required />
              <button>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!--Subscribe Newsletter Ends-->
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
