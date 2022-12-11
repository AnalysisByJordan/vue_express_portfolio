<template>
  <v-form ref="form" v-model="valid" @submit.prevent="submit">
    <v-container fluid>
      <v-alert v-model="success" border="left" type="success" dismissible>
        Thanks for the message!
      </v-alert>
      <v-row justify="center">
        <v-col cols="4">
          <v-text-field
            v-model="fullname"
            :rules="nameRules"
            :counter="50"
            label="Full Name"
            required
          ></v-text-field>

          <v-textarea
            v-model="message"
            :rules="messageRules"
            :counter="500"
            label="Message"
            required
          ></v-textarea>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-btn class="mr-4" :disabled="!valid" color="success" @click="submit">
          submit
        </v-btn>
        <v-btn @click="clear"> clear </v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import PostService from "@/helpers/PostService";
export default {
  name: "ContactView",
  data: () => ({
    valid: false,
    success: false,
    fullname: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length > 1 || "Name must be more than 1 character.",
    ],
    message: "",
    messageRules: [
      (v) => !!v || "A message is required",
      (v) => v.length > 1 || "Message must be more than 1 character.",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid (like john@email.com)",
    ],
  }),
  methods: {
    async submit() {
      this.$refs.form.validate();
      if (this.valid) {
        await PostService.insertPost(this.fullname, this.email, this.message);
        this.success = true;
      }

      this.valid = false;
    },
    clear() {
      this.fullname = "";
      this.message = "";
      this.email = "";
    },
  },
  mounted() {
    console.log(this.valid, this.fullname);
  },
  updated() {
    console.log(this.valid, this.fullname);
  },
};
</script>