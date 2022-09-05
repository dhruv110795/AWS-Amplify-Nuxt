<template>
  <main>
    <section id="main">
      <video
        class="hero-video"
        src="~/assets/videos/Exite.mp4"
        autoplay
        muted
      ></video>
    </section>
    <div class="video-container position-relative" id="contact-us">
      <video
        src="~/assets/videos/particles.mp4"
        autoplay
        muted
        loop
        class="container-fluid d-none d-lg-block"
      ></video>
      <section class="container contact-form wrapper d-block d-lg-flex">
        <div class="row inner">
          <div class="col-12 col-lg-6">
            <form action="">
              <h3 class="text-left text-color-primary text-shadow">
                Fly With Us
              </h3>
              <p class="text-left text-color-primary p-0">
                3x10<sup>8</sup> m/s<sup>2</sup>
              </p>
              <validation-observer
                id="rfi_observer"
                ref="observer"
                v-slot="{ handleSubmit, invalid }"
              >
                <b-form
                  ref="rfi_form"
                  @submit.stop.prevent="handleSubmit(onSubmit)"
                >
                  <div class="row">
                    <div class="col-lg-12 pt-space-sm">
                      <base-input
                        id="name"
                        v-model="form.name"
                        :label="'Name'"
                        name="name"
                        type="name"
                        :rules="{ required: true }"
                        placeholder="Your Name"
                      />
                    </div>

                    <div class="col-lg-12 pt-space-sm">
                      <base-input
                        id="email"
                        v-model="form.email"
                        :label="'Email'"
                        name="Email"
                        type="email"
                        :rules="{ required: true, email: true }"
                        placeholder="Your Email"
                      />
                    </div>
                    <div class="col-lg-12 pt-space-sm">
                      <vue-phone-number-input
                        v-model="form.phone"
                        :no-example="true"
                        @update="validationCheck"
                        label="Your Phonenumber"
                        placeholder="Your Phonenumber"
                        default-country-code="IN"
                        dark
                      ></vue-phone-number-input>
                    </div>
                  </div>
                  <button
                    id="submitButton"
                    type="submit"
                    class="float-left px-space-md mt-lg-space-xl mt-space-lg text-large rounded-0 font-weight-bold border-0 form-button"
                    :disabled="invalid"
                  >
                    Fly Now
                  </button>
                  <div
                    id="submitSuccess"
                    style="display: none !important"
                    class="pt-lg-space-xl pt-space-md pb-lg-space-lg pb-space-sm d-flex flex-column align-items-center"
                  >
                    <div class="pb-lg-space-xxl pt-space-md pt-md-3">
                      <p class="h2-small pb-space-sm text-left">
                        Thank you! Your information has been submitted.
                      </p>
                    </div>
                  </div>
                </b-form>
              </validation-observer>
            </form>
          </div>
          <div
            class="col-12 col-lg-6 mt-5 mt-lg-0 d-flex justify-content-center align-items-center"
          >
            <p class="text-center text-lg-left">
              Making Space Exploration accessible to all... Join forces with us
              as we guide you to the Infinitude of possibilities with EXiO8, the
              world's first Virtual Space Shuttle. Come, take a quantum leap
              into an alternate dimension with
            </p>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import { ValidationObserver } from "vee-validate";
import BaseInput from "../components/BaseInput.vue";
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
import axios from "axios";

export default {
  name: "IndexPage",
  components: {
    "validation-observer": ValidationObserver,
    "base-input": BaseInput,
    "vue-phone-number-input": VuePhoneNumberInput,
  },
  data() {
    return {
      form: {
        name: "",
        lastName: "",
        email: "",
        phone: "",
      },
    };
  },
  methods: {
    randomGenerateCode() {
      var characters = "abcdefghijklmnopqrstuvwxyz0123456789";
      var result = "";
      var charactersLength = characters.length;
      for (var i = 0; i < 5; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    },
    onSubmit(event) {
      console.log("event", event);
      this.submitRFI(event);
    },
    async submitRFI(event) {
      console.log(">Data", event);
      var myDate = new Date();
      var timestamp =
        myDate.getFullYear() +
        "/" +
        ("0" + (myDate.getMonth() + 1)).slice(-2) +
        "/" +
        ("0" + myDate.getDate()).slice(-2) +
        " " +
        myDate.getHours() +
        ":" +
        ("0" + myDate.getMinutes()).slice(-2) +
        ":" +
        myDate.getSeconds();

      const formdata = new FormData();
      formdata.append("Date", timestamp);
      formdata.append("Origin", window.location.href);
      formdata.append("Name", this.form.name);
      formdata.append("Email", this.form.email);
      formdata.append("Phone", this.form.phone);
      formdata.append("Code", this.randomGenerateCode());
      console.log("RFI Form Submitted", formdata);

      await axios
        .post(
          "https://script.google.com/macros/s/AKfycbxOooAJH7qYk4H0mk0F-T2TmM3bzSZufDzNzNbhIjVLceIHSfzqEg85jQn2MEdVEGpZ/exec",
          formdata,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        )
        .then(function (response) {
          // handle success
          console.log("RFI Form Submitted succesfully", response);
          document.getElementById("submitButton").style.display = "none";
          document.getElementById("submitSuccess").style.display = "";
        })
        .catch(function (response) {
          // handle error
          console.log(response);
        });

      this.resetRfiForm();
    },
    resetRfiForm() {
      this.$refs.observer.reset();
      this.$nextTick(() => {
        this.$refs.rfi_form.reset();
      });
    },
    validationCheck({ isValid, formatInternational }) {
      this.phone = {
        isValid,
        formatInternational,
      };
    },
  },
};
</script>
<style scoped lang="scss">
.hero-video {
  width: 100%;
  height: 100%;
}
.contact-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
@media only screen and (max-width: 767px) {
  .contact-form {
    position: relative;
    top: unset;
    left: unset;
    transform: unset;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .contact-form {
    position: relative;
    top: unset;
    left: unset;
    transform: unset;
  }
}
</style>
