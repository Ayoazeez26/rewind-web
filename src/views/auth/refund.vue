<script setup>
import { ref } from "vue";
import { required } from "@/utils/input-validations";

const fullName = ref("");
const refCode = ref("");
const accNumber = ref("");
const bank = ref("");
const amount = ref("");

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
            <div class="col-6 q-ma-none">
              <BaseInput
                v-model="refCode"
                class="q-my-sm"
                label="Reference Code"
                lazy-rules
                :rules="required"
              />
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
        <div class="col-12 q-ma-none">
          <div class="row items-center justify-between q-gutter-sm">
            <div class="col-12 q-ma-none">
              <BaseAmount
                v-model="amount"
                class=""
                label="Enter Amount"
                lazy-rules
                :rules="required"
              />
            </div>
          </div>
        </div>
      </div>
    </q-form>
  </div>
</template>

<style lang="scss" scoped>
.refund {
  margin-top: 90px;
  background: #FFFFFF;
  box-shadow: 0px 4px 24px 4px rgba(74, 74, 74, 0.05);
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
  }
}
</style>
