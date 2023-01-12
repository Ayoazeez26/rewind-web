<script lang="ts">
export default {
  name: "BaseButton",
};
</script>

<script setup lang="ts">
defineProps({
  reduced: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <q-btn
    v-bind="$attrs"
    class="base-button"
    :class="reduced ? 'base-button--reduced' : null"
    :disable="$attrs.loading === true"
  >
    <template #loading>
      <q-spinner-gears class="q-mr-lg" />
      Loading ...
    </template>
    <slot name="content" />
    <slot name="icon" />
  </q-btn>
</template>

<style lang="scss" scoped>
.base-button {
  font-weight: 500;
  font-size: 16px;
  &:not(.q-btn--round) {
    border-radius: 40px;
  }
  min-height: 64px;
  justify-content: center;

  &--reduced {
    min-height: 42px;
    font-size: 16px;
  }

  :deep(.q-btn__content) {
    color: $secondary;
    justify-content: center;
    padding-left: 10px;
    padding-right: 10px;
  }

  :deep(.on-left) {
    margin-right: 0;
    position: absolute;
    left: 20px;
    top: 48%;
    transform: translateY(-50%);
  }

  :deep(.on-right) {
    margin-right: 0;
    position: absolute;
    right: 20px;
    top: 48%;
    transform: translateY(-50%);
  }
  &.q-btn--outline {
    &::before {
      border-color: $grey-7;
    }
  }
  &.disabled:not(.q-btn--outline) {
    background-color: $grey-2 !important;
    color: $grey-8 !important;
    opacity: 1 !important;
  }
  &.disabled.q-btn--outline {
    border-color: $grey-3 !important;
    color: $grey-4 !important;
    opacity: 1 !important;
  }
}
</style>
