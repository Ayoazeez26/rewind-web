<script setup>
import { ref } from "vue";
import { required } from "../../utils/input-validations";
import info from '../../assets/icons/info-icon.svg';

const fullName = ref("");
const refCode = ref("");
const accNumber = ref("");
const bank = ref("");
const amount = ref("");
const date = ref("");
const infoIcon = ref(false);

const banks = ref([
  'GTB',
  'First Bank',
  'Access Bank',
  'UBA',
  'Fidelity Bank'
]);

</script>
<template>
  <div class="refund">
    <h2 class="refund__title">
      Get Refunded In <span class="text-secondary">Minutes</span>
    </h2>
    <p class="refund__desc">
      Input your information below to get refunded.
    </p>
    <q-form
      ref="createRefundForm"
      @submit.prevent="getRefund"
    >
      <div class="row">
        <div class="col-12">
          <div class="row items-center justify-between q-gutter-sm">
            <div class="col-5 q-ma-none">
              <BaseInput
                v-model="fullName"
                class="q-my-sm"
                label="Full Name"
                lazy-rules
                :rules="required"
              />
            </div>
            <div class="col-6 q-ma-none relative">
              <BaseInput
                v-model="refCode"
                class="q-my-sm"
                label="Reference Code"
                lazy-rules
                :rules="required"
              />
              <img svg-inline class="icon info-icon" :src="info" alt="info icon" @click="infoIcon = true" />
            </div>
          </div>
        </div>
        <div class="col-12 q-ma-none">
          <div class="row items-center justify-between q-gutter-sm">
            <div class="col-12 q-ma-none">
              <BaseInput
                v-model="accNumber"
                class=""
                label="Account Number"
                lazy-rules
                :rules="required"
              />
            </div>
          </div>
        </div>
        <div class="col-12 q-ma-none">
          <div class="row items-center justify-between q-gutter-sm">
            <div class="col-12 q-ma-none">
              <BaseSelect
                v-model="bank"
                class=""
                label="Bank"
                autocomplete="email"
                lazy-rules
                :options="banks"
                :rules="required"
              />
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="row items-center justify-between q-gutter-sm">
            <div class="col-5 q-ma-none">
              <BaseAmount
                v-model="amount"
                class=""
                label="Enter Amount"
                lazy-rules
                :rules="required"
              />
            </div>
            <div class="col-6 q-ma-none">
              <BaseDatePicker
                v-model="date"
                class="q-my-sm"
                label="Date"
                lazy-rules
                :rules="required"
                mask="DD-MM-YYYY"
              />
            </div>
          </div>
        </div>
        <div class="col-12 q-ma-none">
          <div class="row items-center justify-between q-gutter-sm">
            <div class="col-12 q-ma-none">
              <BaseButton
                label="Submit"
                unelevated
                no-caps
                class="bg-black full-width mt-64"
                type="submit"
              ></BaseButton>
            </div>
          </div>
        </div>
      </div>
    </q-form>
    <q-dialog
      v-model="infoIcon"
    >
      <q-card style="width: 300px">

        <q-card-section class="q-pt-sm">
          Ref No. is a unique number sometimes combined with letters, that is used to identify the invoice for a payment.
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn color="secondary" flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<style lang="scss" scoped>
.refund {
  // margin-top: 90px;
  // margin-bottom: 40px;
  background: #FFFFFF;
  box-shadow: 0px 4px 24px 4px rgba(74, 74, 74, 0.05);
  -webkit-box-shadow: 0px 4px 24px 4px rgba(74, 74, 74, 0.05);
  -moz-box-shadow: 0px 4px 24px 4px rgba(74, 74, 74, 0.05);
  border-radius: 15px;
  padding: 46px 91px 60px;
  width: 100%;
  max-width: 984px;
  &__title {
    font-size: 36px;
    font-weight: 700;
  }
  &__desc {
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 40px;
  }
}
.mt-64 {
  margin-top: 64px;
}
.info-icon {
  position: absolute;
  top: 45px;
  right: -30px;
}
</style>
