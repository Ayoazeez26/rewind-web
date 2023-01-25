<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VerifyOtp',
  created() {
    const email = localStorage.getItem('user-email');
    if (!email) {
      this.$router.push('login');
    }
  },
});
</script>

<script setup>
import { onMounted, ref } from 'vue';
import { errorToast, successToast } from '@/plugins/notify';
import { resendVerification, verifyOtp } from '@/services/AuthService';
import { getErrorMessage } from '@/utils/get-error-message';
import { useRouter } from 'vue-router';

const router = useRouter();

const time = ref(60);
const requestingCode = ref(false);
const verifyingCode = ref(false);
let timer;
const savedEmail = localStorage.getItem('user-email');

const otpKeys = Array(6);

const handleKeyEntered = (event, index) => {
  otpKeys[index] = event.target.value.toString();
  //  Focus on next input field
  if (index < 5) {
    const nextField = document.querySelector(
      `#otp-field-${index + 1} input`
    );

    //Select the text in the input field if it has a number in it
    if (nextField?.value) {
      nextField?.select();
    }
    nextField?.focus();
  } else {
    // Focus on verify otp button
    const button =
      document.querySelector('#verify-otp-btn');
    button?.focus();
  }
};

const clearField = (index ) => {
  const element = document.querySelector(
    `#otp-field-${index} input`
  );
  element?.select();
};

const startTimer = () => {
  timer = setInterval(() => {
    time.value -= 1;
    if (time.value <= 0) {
      clearInterval(timer);
      time.value = 0;
    }
  }, 1000);
};

const handleOtpVerification = () => {
  const otp = otpKeys.join('');

  if (otp.length === 6) {
    verifyingCode.value = true;
    const data = {
      email: localStorage.getItem('user-email'),
      confirmationCode: otp,
    };
    verifyOtp(data)
      .then((res) => {
        localStorage.removeItem('user-email');
        successToast('OTP verified successfully');
        router.push('login');
        startTimer();
      })
      .catch((err) => {
        const errorMessage = getErrorMessage(err);
        errorToast(errorMessage);
      })
      .finally(() => {
        verifyingCode.value = false;
      });
  } else {
    return;
  }
};

const requestNewCode = () => {
  const email = localStorage.getItem('user-email');
  if (email) {
    requestingCode.value = true;
    const data = {
      email,
    };
    resendVerification(data)
      .then((res) => {
        successToast('We just sent a 6-digits OTP to your email address');
        startTimer();
      })
      .catch((err) => {
        const errorMessage = getErrorMessage(err);
        errorToast(errorMessage);
      })
      .finally(() => {
        requestingCode.value = false;
      });
  }
};

onMounted(() => {
  startTimer();
});
</script>

<template>
  <div class="verify-otp text-center">
    <h1 class="verify-otp__title">Confirm Your Email</h1>
    <p class="verify-otp__subtitle text-grey">
      We sent a 6 digits OTP code to
      <span class="text-blue-1">{{ savedEmail }}</span
      >. Kindly check your email and type the code in the boxes below before it
      expires
    </p>
    <div class="verify-otp-form">
      <q-form>
        <div class="row q-col-gutter-md">
          <BaseInput
            v-for="(n, i) in 6"
            :id="`otp-field-${i}`"
            :key="i"
            class="otp col-2"
            type="text"
            mask="#"
            @click="clearField(i)"
            @input="handleKeyEntered($event, i)"
          />
        </div>
        <BaseButton
          id="verify-otp-btn"
          class="full-width q-my-md"
          label="Verify OTP"
          color="primary"
          :loading="verifyingCode"
          :disable="verifyingCode"
          no-caps
          unelevated
          @click="handleOtpVerification"
        />
      </q-form>
    </div>
    <!-- <div v-if="time > 0" class="request-new">
      <p class="text-grey q-my-sm">Request new code in</p>
      <p class="countdown">{{ time }}s</p>
    </div> -->
    <BaseButton
      flat
      color="primary"
      no-caps
      unelevated
      label="Request New Code"
      :loading="requestingCode"
      :disable="requestingCode"
      @click="requestNewCode"
    />
  </div>
</template>

<style lang="scss" scoped>
.verify-otp {
  width: 450px;
  margin: 0 auto;
  max-width: 100%;

  &__title {
    font-size: 30px;
    font-weight: 500;
    margin: 10px 0;
    line-height: 1;
  }

  &__subtitle {
    font-size: 16px;
    margin: 20px 0;
  }

  &-form {
    margin-top: 50px;
  }

  .otp {
    :deep(.q-field__prepend) {
      display: none;
    }

    :deep(input) {
      font-size: 24px;
      text-align: center;
    }
  }

  .request-new {
    .countdown {
      font-size: 18px;
      font-weight: 500;
    }
  }
}
</style>
