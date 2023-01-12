<script>
export default {
  name: "BaseInput",
};
</script>

<script setup>
import { ref } from "vue";

const inputContent = ref("");
</script>

<template>
  <div>
    <q-input
      :model-value="inputContent"
      v-bind="$attrs"
      outlined
      class="base-input"
      stack-label
      @update:model-value="inputContent = $event"
    >
      <template #prepend>
        <slot name="prepend" />
      </template>
      <template #append>
        <slot name="append" />
      </template>
      <slot />
    </q-input>
  </div>
</template>

<style lang="scss" scoped>
.base-input {
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

        &::placeholder {
          color: #cdd3db;
        }
      }

      .q-field__prefix {
        padding: 0;
        margin-right: 10px;
        color: $grey-2;
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
