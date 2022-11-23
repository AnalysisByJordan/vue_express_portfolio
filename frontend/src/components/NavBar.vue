<template>
  <div>
    <v-app-bar>
      <v-spacer></v-spacer>
      <v-toolbar-title>Jordan Robey</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-slot:extension>
        <v-tabs centered>
          <v-tab to="/">Home</v-tab>
          <v-tab to="/projects">Projects</v-tab>
          <v-tab to="/contact">Contact</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>