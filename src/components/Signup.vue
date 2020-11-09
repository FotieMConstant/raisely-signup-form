<template>
  <v-card
    id="wrapper"
    class="pa-12 mx-auto mt-16 mb-9"
    elevation="12"
    height="580"
    max-width="500"
  >
    <v-card-title class="title font-weight-regular justify-space-between">
      <span>Sign-up</span>
      <v-avatar
        color="secondary lighten-2"
        class="subheading white--text"
        size="24"
      ></v-avatar>
    </v-card-title>

    <v-form @submit.prevent="signUp" v-model="valid" :lazy-validation="lazy">
      <v-text-field
        class="mb-9"
        v-model="fName"
        :rules="emailRules"
        label="First name"
        required
      ></v-text-field>

      <v-text-field
        class="mb-9"
        v-model="lName"
        :rules="emailRules"
        label="Last name"
        required
      ></v-text-field>

      <v-text-field
        class="mb-9"
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        class="mb-9"
        v-model="password"
        :counter="10"
        :rules="passwordRules"
        label="Password"
        required
        type="password"
      ></v-text-field>

      <div class="text-center mt-n5">
        <v-btn
          type="submit"
          class="mx-auto white--text"
          color="rgb(97, 56, 216)"
          @submit.prevent="signUp"
          >Let's do this</v-btn
        >
        <br />
      </div>
    </v-form>

    <v-snackbar color="error" v-if="error" v-model="snackbar" :timeout="5000">
      {{ error }}
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false"
          >Close</v-btn
        >
      </template>
    </v-snackbar>
  </v-card>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
// #wrapper {
//   margin-top: 16%;
// }
</style>