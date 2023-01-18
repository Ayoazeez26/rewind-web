<script>
export default {
  name: "BaseAmount",
};
</script>

<script setup>
import { ref } from "vue";

const inputContent = ref("");
const model = props.options[0];
const props = defineProps({
  options: {
    type: Array,
    default: () => ['USD'],
  },
});

</script>

<template>
  <div>
    <q-input
      :model-value="inputContent"
      v-bind="$attrs"
      outlined
      class="base-input text-lg"
      stack-label
      @update:model-value="inputContent = $event"
    >
      <template #prepend>
        <q-select borderless v-model="model" :options="props.options" label="" class="drop" style="max-width: 300px" />
        <q-separator vertical class="separate" />
        <!-- <slot name="prepend" /> -->
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

      .q-field__prepend {
        label.drop {
          font-size: 18px;
          :deep(.q-field__inner) {
            :deep(.q-field__control::before) {
              border: none !important;
              border-width: 0 !important;
              border-radius: 0 !important;
            }
          } 
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
      .q-field__prepend {
        label.drop {
          :deep(.q-field__inner) {
            :deep(.q-field__control) {
              border: none !important;
              border-width: 0 !important;
              border-radius: 0 !important;
            }
          } 
        }
      }
    }
  }

  .drop {
    :deep(.q-field__inner) {
      :deep(.q-field__control) {
        border: none;
        border-width: 0;
        border-radius: 0;
      }
    } 
  }

  .q-field__prepend label.drop {
    :deep(.q-field__inner) {
      padding-top: 0;
    }

    :deep(.q-field__control::before) {
      border: none;
      border-width: 0;
      border-radius: 0;
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
    .q-field__prepend label.drop.q-field--focused.q-field--highlighted {
      :deep(.q-field__control::before) {
        border: none;
        border-width: 0;
        border-radius: 0;
      }
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
.separate {
  height: 80%;
  margin-top: 10px;
}
</style>
