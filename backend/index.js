const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config()
const cors = require("cors");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const posts = require("./routes/api/posts");
const projects = require("./routes/api/projects");

app.use("/api/posts", posts);
app.use("/api/projects", projects);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
