<template>
  <v-app>
    <v-app-bar app color="rgb(97, 56, 216)" dark>
      <div class="d-flex align-center">Raisely</div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/FotieMConstant/raisely-signup-form"
        target="_blank"
        text
      >
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <Header />
    <v-main id="wrapper">
      <Signup />
    </v-main>
  </v-app>
</template>

<script>
import Signup from "./components/Signup";
import Header from "./components/Header";

export default {
  name: "App",

  components: {
    Signup,
    Header,
  },

  data: () => ({
    //
  }),
};
</script>


<style lang="scss" scoped>
#wrapper {
  margin-top: -29%;
}
</style>