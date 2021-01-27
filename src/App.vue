<template>
  <v-app>
    <AppBar></AppBar>
    <v-main class="background">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "@/views/AppBar";
export default {
  name: "App",
  components: { AppBar },
  data: () => ({
    //
  })
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

html,
* {
  font-family: "Poppins", sans-serif !important;
}
</style>
