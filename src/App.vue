<template>
  <v-app>
    <v-app-bar app color="rgb(97, 56, 216)" dark>
      <div class="d-flex align-center">Raisely Signup-form</div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <Signup />
    </v-main>
  </v-app>
</template>

<script>
import Signup from "./components/Signup";

export default {
  name: "App",

  components: {
    Signup,
  },

  data: () => ({
    //
  }),
};
</script>
