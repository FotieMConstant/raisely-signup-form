<template>
  <v-card
    id="wrapper"
    class="pa-12 mx-auto mt-16 mb-9"
    elevation="12"
    height="580"
    max-width="500"
  >
    <v-card-title class="title font-weight-regular justify-space-between">
      <span class="ml-n5">Raisely Sign-up</span>
      <v-avatar
        color="rgba(97, 56, 216, 0.5)"
        class="subheading white--text"
        size="24"
      ></v-avatar>
    </v-card-title>

    <v-form
      @submit.prevent="signupUser"
      v-model="valid"
      :lazy-validation="lazy"
    >
      <v-text-field
        class="mb-9"
        v-model="signupInfo.fName"
        :rules="emailRules"
        label="First name"
        required
      ></v-text-field>

      <v-text-field
        class="mb-9"
        v-model="signupInfo.lName"
        :rules="emailRules"
        label="Last name"
        required
      ></v-text-field>

      <v-text-field
        class="mb-9"
        v-model="signupInfo.email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        class="mb-9"
        v-model="signupInfo.password"
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
          @submit.prevent="signupUser"
          >Let's do this</v-btn
        >
        <br />
      </div>
    </v-form>

    <v-snackbar
      color="deep-purple accent-4"
      v-if="signupInfo != null"
      v-model="snackbar"
      timeout="3000"
    >
      {{ signupInfo.error }}

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    snackbar: false,
    signupResponse: "",
    signupInfo: {
      fName: "",
      lName: "",
      password: "",
      error: null,
    },
  }),
  methods: {
    signupUser() {
      // Data to be sent to the endpoint
      const newUserDataObject = {
        campaignUuid: "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",
        data: {
          firstName: this.signupInfo.fName,
          lastName: this.signupInfo.lName,
          email: this.signupInfo.email,
          password: this.signupInfo.password,
        },
      };
      // checking the values in our object
      console.log(newUserDataObject);

      // For the Asynchronous request
      const checkEmail = {
        campaignUuid: "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",
        data: {
          email: this.signupInfo.email,
        },
      };

      const sendPostRequest = async () => {
        try {
          // first call to check email address
          let resp = await axios.post(
            `https://api.raisely.com/v3/check-user`,
            checkEmail
          );
          console.log("Data from the first Async =>" + resp.data.data.status);

          // Second request to signup user
          const signup = async () => {
            if (resp.data.data.status == "OK") {
              // do somthing if okay
              // second axios call to signup user
              let response = await axios.post(
                `https://api.raisely.com/v3/signup`,
                newUserDataObject
              );
              // setting my data
              this.signupResponse = response.data.detail;
              console.log(
                "Data from the second Async =>" +
                  JSON.stringify(response.data.message)
              );
              // Success message displayed to user
              this.signupInfo.error = response.data.message;
              this.snackbar = true;
            } else if (resp.data.data.status == "EXISTS") {
              // do something if exist
              this.signupInfo.error =
                "Invalid input, please enter a new email address";
              this.snackbar = true;
            }
          };
          signup();
        } catch (err) {
          // Handle Error Here
          // When we get a 400
          if (err.response.status == 400) {
            console.log("We have a 400 error " + this.signupResponse);
          }

          this.signupInfo.error = err;
          console.error("There was an error =>" + this.signupInfo.error);
          this.snackbar = true;
        }
      };
      sendPostRequest();
    },
  },
};
</script>

