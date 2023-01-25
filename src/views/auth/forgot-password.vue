<script setup>
import { ref } from "vue";
import { required, email } from "../../utils/input-validations";

import { useRouter } from 'vue-router';

const router = useRouter();

const emailAddress = ref("");

const handlePasswordReset = () => {
  // const data = {
  //   email: emailAddress.value
  // };

  localStorage.setItem('user-email', emailAddress.value);
  router.push('verify-otp');
};

</script>
<template>
  <div class="login">
    <h2 class="login__title">
      Get Your <span class="text-secondary">Access</span> Back
    </h2>
    <p class="login__desc">
      Enter your registered email.
    </p>
    <q-form
      ref="createloginForm"
      @submit.prevent="handlePasswordReset"
    >
      <div class="row justify-center">
        <div class="col-12">
          <div class="row items-center justify-between q-gutter-sm">
            <div class="col-12 q-ma-none">
              <BaseInput
                v-model="emailAddress"
                class="q-my-sm"
                label="Enter Email"
                lazy-rules
                :rules="[required, email]"
              />
            </div>
          </div>
        </div>
        <div class="col-12 q-ma-none">
          <div class="row items-center justify-between q-gutter-sm">
            <div class="col-12 q-ma-none">
              <BaseButton
                label="Request OTP"
                unelevated
                no-caps
                class="bg-black full-width mt-46"
                type="submit"
              ></BaseButton>
            </div>
          </div>
        </div>
        <p class="login__forget">
          Don't have this? <span class="text-secondary">Try another method</span>
        </p>
      </div>
    </q-form>
  </div>
</template>

<style lang="scss" scoped>
.login {
  // margin-top: 90px;
  // margin-bottom: 40px;
  background: #FFFFFF;
  box-shadow: 0px 4px 24px 4px rgba(74, 74, 74, 0.05);
  -webkit-box-shadow: 0px 4px 24px 4px rgba(74, 74, 74, 0.05);
  -moz-box-shadow: 0px 4px 24px 4px rgba(74, 74, 74, 0.05);
  border-radius: 15px;
  padding: 47px 55px 45px;
  width: 100%;
  max-width: 498px;
  &__title {
    font-size: 32px;
    font-weight: 700;
  }
  &__desc {
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 40px;
  }
  &__forget {
    font-size: 18px;
    margin-top: 28px;
    text-align: center;
  }
}
.mt-46 {
  margin-top: 46px;
}

</style>
