<template>
  <!--BreadCrumb-->
  <bread-crumb title="Contact Us" description="Drop us a message below." />
  <!--BreadCrumb Ends-->
  <!--Contact Page-->
  <section class="contactPage">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <form>
            <div class="row">
              <div class="col-lg-12">
                <h1>Message Us</h1>
                <div class="line-hr"></div>
              </div>
              <div class="col-lg-6 mb-4">
                <label>Name</label>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div class="col-lg-6 mb-4">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div class="col-lg-6 mb-4">
                <label>Telephone Number</label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div class="col-lg-6 mb-4">
                <label>Subject</label>
                <input type="text" placeholder="Enter subject" required />
              </div>
              <div class="col-lg-12 mb-4">
                <label>Message</label>
                <textarea
                  cols="30"
                  rows="5"
                  placeholder="Enter your message..."
                  required
                ></textarea>
              </div>
              <div class="col-lg-12 mb-1">
                <button type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!--Contact Page Ends-->
</template>

<script>
export default {};
</script>

<style></style>
