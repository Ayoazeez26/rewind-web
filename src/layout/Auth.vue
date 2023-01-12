<script setup>
import { ref } from "vue";
// import { RouterView } from 'vue-router'
</script>
<template>
  <div class="main">
    <img src="@/assets/images/Logo.png" alt="Logo" class="logo" />
    <div class="main-content">
      <RouterView />
    </div>
  </div>
</template>


<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  flex: 1 0;
  .logo {
    max-width: fit-content;
    margin-top: 40px;
    margin-bottom: 40px;
  }
  &-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    flex: 0 0;
    border-top: 1px solid $grey-3;
  }
}
</style>
