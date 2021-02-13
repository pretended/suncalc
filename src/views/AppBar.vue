<template>
  <v-app-bar app color="background" elevation="0">
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        :src="require('../../public/Happy-Sun-drawing.png')"
        transition="scale-transition"
        width="40"
      />
      <span class="overline">Sun Calculation</span>
    </div>

    <v-spacer></v-spacer>
    <v-btn href="https://github.com/pretended" target="_blank" text rounded>
      <v-icon>mdi-github</v-icon>
    </v-btn>
    <v-btn href="https://pretended.github.io/" target="_blank" text rounded>
      <v-icon>
        mdi-web
      </v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar"
};
</script>

<style scoped></style>
