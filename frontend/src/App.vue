<template>
  <v-app>
    <nav-bar app></nav-bar>
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
    <footer-bar app></footer-bar>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar";
import FooterBar from "@/components/FooterBar";
export default {
  name: "App",
  components: { NavBar, FooterBar },
};
</script>


<style lang="scss">
</style>
