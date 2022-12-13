<template>
  <v-container fill-height fluid>
    <v-row justify="center">
      <v-col cols="5" class="d-flex flex-column justify-center align-center">
        <animated-shape class="shape"></animated-shape>
        <div v-html="html"></div>
        <h1>Jordan Robey</h1>
        <div>
          <a
            class="git-linked-symbols"
            href="https://github.com/AnalysisByJordan"
            target="_blank"
            ><i class="fa fa-github" style="font-size: 50px"></i
          ></a>
          <a
            class="git-linked-symbols"
            href="https://www.linkedin.com/in/jordan-robey/"
            target="_blank"
            ><i class="fa fa-linkedin-square" style="font-size: 50px"></i
          ></a>
        </div>
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
        <div>
          <v-img
            :src="require('../assets/logo.png')"
            class="my-3"
            contain
            height="200"
          />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AnimatedShape from "../components/AnimatedShape.vue";
export default {
  name: "HomeView",
  components: { AnimatedShape },
};
</script>
  

<style scoped>
.bio {
  width: 600px;
}
.git-linked-symbols {
  color: rgb(255, 255, 255);
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
