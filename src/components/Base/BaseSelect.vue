<script lang="ts">
export default {
  name: 'BaseSelect'
};
</script>

<script setup lang="ts">
import { ref } from 'vue';

// defineEmits(['virtual-scroll']);

const inputContent = ref<any>('');
</script>

<template>
  <div>
    <q-select
      :model-value="inputContent"
      v-bind="$attrs"
      outlined
      class="base-select"
      stack-label
      behavior="menu"
      @update:model-value="inputContent = $event; $emit('change', $event)"
    >
      <template #prepend>
        <slot name="prepend"/>
      </template>
      <template #append>
        <slot name="append"/>
      </template>
    </q-select>
  </div>
</template>

<style lang="scss" scoped>
.base-select {
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
        padding-top: 0;
      }

      .q-field__native {
        padding-top: 0;
        padding-bottom: 0;

        &::placeholder {
          color: #cdd3db;
        }
        .q-chip {
          text-transform: capitalize;
        }
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
    }
  }

  // &.q-field--focused.q-field--outlined {
  //   :deep(.q-field__control) {
  //     &::before {
  //       border-color: $yellow;
  //     }
  //   }
  // }

  &.q-field--disabled {
    :deep(.q-field__control) {
      background-color: $primary;
    }
  }

  :deep(.q-field__label) {
    font-size: 20px;
    color: $grey;
    top: 2px;
    left: 19px;
    background-color: white;
    padding: 0 10px;
    z-index: 2;
  }
}
</style>
