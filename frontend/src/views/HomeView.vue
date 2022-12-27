<template>
  <v-container fill-height fluid>
    <v-row justify="center">
      <v-col cols="4" class="d-flex flex-column justify-center align-center">
        <animated-shape></animated-shape>
        <h1>Jordan Robey</h1>
        <div class="links">
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
      <v-col cols="4">
        <h1>About me:</h1>
        <p>
          Software Engineer currently working on a SaaS platform built on
          <span
            ><a
              style="text-decoration: none"
              href="https://vuejs.org/"
              target="_blank"
              >Vue.js</a
            ></span
          >, which helps clients improve advertisement spend by visualizing
          robust audience data. I also work with Python and AWS in the creation
          of internal API's and pipeline infrustructure. <br /><br />
          I like fooling around with new technologies and building applications
          that interest me (see
          <span
            ><router-link style="text-decoration: none" to="/projects"
              >Projects</router-link
            ></span
          >
          section). <br /><br />
          In my spare time, I enjoy falling onto mats while attempting to
          boulder and exploring local waterways in my kayak (which definitely
          doesn't have it's own name). <br /><br />
          <span style="color: grey"
            >“Everything should be made as simple as possible, but no simpler” -
            Albert Einstein</span
          >
        </p>
        <div class="logos">
          <v-img
            :src="require('../assets/js_logo.png')"
            class="logo"
            contain
            max-height="40"
            max-width="40"
          />
          <v-img
            :src="require('../assets/vue_logo.png')"
            class="logo"
            contain
            max-height="40"
            max-width="40"
          />
          <v-img
            :src="require('../assets/python_logo.png')"
            class="logo"
            contain
            max-height="40"
            max-width="40"
          />
          <v-img
            :src="require('../assets/git_logo.png')"
            class="logo"
            contain
            max-height="90"
            max-width="90"
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
h1 {
  font-size: 50px;
}
p {
  font-size: 20px;
}
.links {
  margin-top: 15px;
}
.logos {
  display: flex;
}
.logo {
  margin-right: 40px;
}
.bio {
  width: 600px;
}
.git-linked-symbols {
  color: rgb(255, 255, 255);
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
