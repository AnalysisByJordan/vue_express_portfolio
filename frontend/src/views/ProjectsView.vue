<template>
  <v-container fill-height fluid>
    <v-row justify="center">
      <v-carousel v-model="model">
        <v-carousel-item v-for="project in projects" :key="project.name">
          <v-sheet :color="project.color" height="100%" tile>
            <v-row class="fill-height" align="center" justify="center">
              <v-card class="mx-auto" max-width="344"
                ><a :href="project.site" target="_blank"
                  ><v-img
                    v-bind:src="require('../assets/' + project.image)"
                    contain="True"
                  ></v-img>
                </a>
                <v-card-title>
                  {{ project.name }}
                </v-card-title>
                <v-card-subtitle>
                  {{ project.description }}
                </v-card-subtitle>
                <a :href="project.code" target="_blank"
                  ><v-btn color="orange lighten-2" text> Code </v-btn></a
                >
              </v-card>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-row>
  </v-container>
</template>
  
<script>
export default {
  name: "ProjectView",
  data: () => ({
    model: 0,
    projects: [
      {
        name: "Food Compare App",
        color: "rgb(68, 68, 68)",
        site: "https://food-compare.herokuapp.com/",
        code: "https://github.com/AnalysisByJordan/food_compare_app",
        image: "food-compare.jpg",
        description:
          "A web application built using Flask, takes in general food items as inputs and returns nutrional information to compare.",
      },
      {
        name: "Budget App",
        color: "rgb(136, 135, 135)",
        site: "https://budget-analytics.herokuapp.com/",
        code: "https://github.com/AnalysisByJordan/budget_dashboard",
        image: "budget-app.jpg",
        description:
          "A web application built using Dash, showcases a sample personal finance dashboard.",
      },
    ],
  }),
};
</script>

<style scoped>
.v-carousel {
  width: 900px;
}
.project {
  display: flex;
  flex-direction: row;
}
</style>
  