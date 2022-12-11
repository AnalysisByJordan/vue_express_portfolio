<template>
  <v-container fill-height fluid>
    <v-row justify="center">
      <v-col cols="5">
        <h1>Jordan Robey</h1>
        <i class="fa fa-github" style="font-size: 36px"></i>
        <i class="fa fa-linkedin-square" style="font-size: 36px"></i>
      </v-col>
      <v-col cols="5">
        <h1>About me:</h1>
        <p class="bio">
          Data professional with experience analyzing audience data in order to
          drive efficient advertisement spending - including developing data
          ingestion software and dashboards. I like fooling around with new
          technologies and building websites and applications which can be found
          in my 'Projects' section. In my spare time, I enjoy falling onto mats
          while bouldering and exploring local waterways in my kayak (which
          definitely doesn't have it's own name).
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.bio {
  width: 600px;
}
</style>
