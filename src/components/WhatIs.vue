<template>
  <v-container class="mt-2">
    <v-layout row>
      <div style="font-size: 26px; font-weight: 800" class="primary--text">
        {{ title }}
        <hr class="mt-1" />
      </div>

      <div class="mt-2 primary--text">
        {{ description }}
      </div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "WhatIs",
  props: {
    title: String,
    description: String
  }
};
</script>

<style scoped>
hr {
  width: 40px;
  border-bottom: 3px solid #64c6ff;
  opacity: 0.6;
}
</style>
