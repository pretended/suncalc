<template>
  <v-layout column>
    <v-container class="d-flex align-center justify-center">
      <v-card width="500px" min-width="100px" class="pa-10">
        <v-row>
          <v-col>
            <div>Latitude</div>
            <v-text-field
              solo
              flat
              background-color="grey lighten-3"
              label="Latitude"
              v-model="latitude"
              single-line
              type="number"
            ></v-text-field>
            <div>Longitude</div>
            <v-text-field
              solo
              flat
              background-color="grey lighten-3"
              label="Longitude"
              v-model="longitude"
              single-line
              type="number"
            ></v-text-field>
            <div>
              <div class="d-flex flex-row">
                Sun Constant
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn v-on="on" v-bind="attrs" class="ml-1" text x-small>
                      <v-icon small color="grey">
                        mdi-help
                      </v-icon>
                    </v-btn>
                  </template>
                  <span
                    >On average the extraterrestrial irradiance is 1367
                    Watts/meter2 (W/m2). This value varies by + or - 3 percent
                    as the earth orbits the sun.</span
                  >
                </v-tooltip>
              </div>
            </div>
            <v-text-field
              solo
              flat
              background-color="grey lighten-3"
              label="Sun Constant"
              v-model="sunConstant"
              placeholder="label"
              single-line
              type="number"
            ></v-text-field>
            <div>Date Of Simulation</div>
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="Date of the simulation"
                  prepend-inner-icon="mdi-calendar"
                  solo
                  flat
                  background-color="grey lighten-3"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                ref="picker"
                v-model="date"
                :max="new Date().toISOString().substr(0, 10)"
                min="1950-01-01"
                @change="save"
              ></v-date-picker>
            </v-menu>
            <div>Time of Simulation</div>
            <v-menu
              ref="menu2"
              v-model="menuTime"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="time"
                  label="Time of the simulation"
                  prepend-inner-icon="mdi-clock"
                  solo
                  flat
                  background-color="grey lighten-3"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                v-model="time"
                ref="time"
                @change="saveTime"
              ></v-time-picker>
            </v-menu>
            <div class="d-flex justify-endi">
              <v-btn
                color="primary"
                class="font-weight-bold"
                outlined
                @click="calculate"
              >
                Calculate
              </v-btn>
            </div>
            <v-divider class="mt-4"></v-divider>
            <div class="mt-4">
              Result of the simulation [W/m2]
            </div>
            Extraterrestrial radiation: {{ extraterrestrialRadiation }}
          </v-col>
        </v-row>
      </v-card>
      <v-snackbar v-model="snackbar">
        {{ snacktext }}
        <template v-slot:action="{ attrs }">
          <v-btn
            color="teal"
            text
            class="font-weight-bold"
            v-bind="attrs"
            @click="snackbar = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-container>
    <Footer></Footer>
  </v-layout>
</template>

<script>
import { parseDate } from "@/functions/util";
import { getExtraterrestrialIrradiation } from "@/functions/sun";
import Footer from "@/views/Footer";

export default {
  name: "Calculator",
  components: { Footer },
  data() {
    return {
      latitude: 0,
      longitude: 0,
      sunConstant: 1367,
      date: null,
      menu: false,
      menuTime: false,
      time: null,
      snackbar: false,
      snacktext: "",
      extraterrestrialRadiation: ""
    };
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    }
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date);
    },
    saveTime(time) {
      this.$refs.menu2.save(time);
    },
    calculate() {
      try {
        let date = parseDate(this.date, this.time);
        let extraterrestrialRadiation = getExtraterrestrialIrradiation(
          date,
          this.latitude,
          this.longitude,
          this.sunConstant
        );
        this.extraterrestrialRadiation = extraterrestrialRadiation;
      } catch (e) {
        this.snackbar = true;
        this.snacktext = "Something went wrong";
      }
    }
  }
};
</script>

<style scoped></style>
