<script>
export default {
  name: 'BaseDatePicker',
  inheritAttrs: false,
};
</script>

<script setup>
import { ref } from 'vue';
import calendar from '../../assets/icons/calendar.svg';
const emit = defineEmits(['update:modelValue']);

const inputContent = ref('');
// const date = ref('');
const qDateProxy = ref(null);

const hidePopup = (e) => {
  emit('update:modelValue', e);
  qDateProxy.value.hide();
};
</script>

<template>
  <div>
    <q-input
      :model-value="inputContent"
      v-bind="$attrs"
      readonly
      class="base-date"
      outlined
      mask="date"
      :rules="['date']"
    >
      <template #append>
        <img svg-inline class="icon" :src="calendar" alt="calendar icon" />
      </template>
      <q-popup-proxy
        ref="qDateProxy"
        cover
        transition-show="scale"
        transition-hide="scale"
      >
        <q-date minimal v-model="inputContent" @update:model-value="hidePopup">
          <div class="row items-center justify-end">
            <q-btn v-close-popup label="Close" color="primary" flat />
          </div>
        </q-date>
      </q-popup-proxy>
    </q-input>
  </div>
</template>

<style lang="scss" scoped>
.base-date {
  :deep(.q-field__inner) {
    padding-top: 20px;

    .q-field__control {
      color: $yellow;
      border-radius: 50px;
      height: 54px;

      &::before {
        border: 1px solid $grey-3;
      }

      position: relative;

      &-container {
        position: unset;
      }

      .q-field__native {
        padding-top: 0;
        padding-bottom: 0;
      }
    }

    .q-field__append {
      svg {
        width: 20px;
        height: 20px;
        color: $yellow;
      }
    }
  }

  &.q-field--float {
    :deep(.q-field__label) {
      font-size: 18px;
      top: -10px;
    }
  }

  &.q-field--focused.q-field--outlined {
    :deep(.q-field__control) {
      &::before {
        border-color: $yellow;
      }
    }

    :deep(.q-field__label) {
      color: $grey;
      top: 0px;
    }

    :deep(.q-field__append) {
      & svg {
        color: $yellow;
      }
    }
  }

  &.q-field--disabled {
    :deep(.q-field__control) {
      background-color: $primary;
    }
  }

  &.q-field--float {
    :deep(.q-field__label) {
      font-size: 20px;
      top: 1px;
    }
  }

  :deep(.q-field__label) {
    // font-size: 20px;
    color: $grey;
    top: -10px;
    left: 19px;
    background-color: white;
    padding: 0 10px;
    z-index: 2;
  }
}
</style>
