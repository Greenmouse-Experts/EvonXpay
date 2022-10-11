<template>
  <div>
    <!--Footer-->
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-2">
            <div class="logo-area">
              <img src="@/assets/images/logo.png" alt="Evonex Pay Logo" />
            </div>
          </div>
          <div class="col-md-5 mt-3">
            <div class="contact-area">
              <h4>Contact Info</h4>
              <p>
                <i class="bi bi-geo-alt"></i> Grace of God Plaza, Along Ifite
                road , Aroma Junction. Awka, Anambra State. Nigeria.
              </p>
              <p><i class="bi bi-telephone"></i> +2348082268957</p>
              <p><i class="bi bi-envelope"></i> contact@evonexpay.com</p>
            </div>
          </div>
          <div class="col-md-3 mt-3">
            <div class="ft-link">
              <h4>Stay Connected</h4>
              <p>
                <a href="#"><i class="bi bi-facebook"></i> Facebook</a>
              </p>
              <p>
                <a href="#"><i class="bi bi-twitter"></i> Twitter</a>
              </p>
              <p>
                <a href="#"><i class="bi bi-instagram"></i> Instagram</a>
              </p>
              <p>
                <a href="#"><i class="bi bi-whatsapp"></i> WhatsApp</a>
              </p>
            </div>
          </div>
          <div class="col-md-2 mt-3">
            <div class="ft-link">
              <h4>Resources</h4>
              <p><RouterLink to="/terms">Terms & Conditions</RouterLink></p>
              <p><RouterLink to="/privacy">Privacy Policy</RouterLink></p>
              <p><RouterLink to="/contact">Contact Us</RouterLink></p>
              <p><RouterLink to="/faq">FAQs</RouterLink></p>
            </div>
          </div>
        </div>
      </div>
      <div class="container copyright">
        <div class="row">
          <div class="col-lg-12 text-center">
            <p>
              Copyright &copy;
              {{ getFullYear }}
              Evonex Pay - All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
    <!--Footer Ends-->
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      getFullYear: ref(new Date().getFullYear()),
    };
  },
};
</script>

<style></style>
