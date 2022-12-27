<template>
  <v-footer padless>
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} — <strong>Made by Jordan</strong> | Code
      for This Website
      <i class="fa-solid fa-arrow-right-to-bracket"></i>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "FooterBar",
};
</script>