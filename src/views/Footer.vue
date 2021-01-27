<template>
  <v-layout class="secondary mt-16">
    <v-container class="d-flex justify-center ma-16 row" fluid>
      <header class="font-weight-bold primary--text" style="font-size: 27px">
        An online extraterrestrial radiation
      </header>
      <WhatIs
        v-for="(item, index) in whatIs"
        :key="index"
        :title="item.title"
        :description="item.description"
      ></WhatIs>
    </v-container>
  </v-layout>
</template>

<script>
import WhatIs from "@/components/WhatIs";
export default {
  name: "Footer",
  components: { WhatIs },
  data() {
    return {
      whatIs: [
        {
          title: "What is SunCalc?",
          description:
            "Sun Calc is a customizable sun calculation for a given latitude and a longitude. The aim of this app is to fill the gap in terms of sun calculations on the internet. This app is inspired by PySolar which is a python library."
        },
        {
          title: "What is Extraterrestrial Radiation?",
          description:
            "The solar radiation (or irradiance) at the top of the earth's atmosphere is called extraterrestrial radiation and the current accepted value for this “solar constant” (now referred to as the total sky irradiance) is 1366 W/m2."
        },
        {
          title: "About this software",
          description:
            "While every effort has been made to ensure the formulae used in this calculator are correct, this free software service is provided 'as-is' and without warranty or guarantee to the extent of the applicable law."
        }
      ]
    };
  }
};
</script>

<style scoped></style>
