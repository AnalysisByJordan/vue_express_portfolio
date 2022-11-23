const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

const handleResponse = (res, data) => res.status(200).send(data);
const handleError = (res, err) => res.status(500).send(err);

// Get Projects
router.get("/", async (req, res) => {
  const projects = await loadProjectsCollection();
  res.status(200).send(await projects.find({}).toArray());
});

// Add Project
router.post("/", async (req, res) => {
  const projects = await loadProjectsCollection();
  await projects
    .insertOne({
      title: req.body.title,
      description: req.body.description,
      github_link: req.body.github_link,
      img: req.body.img,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    .then((data) => handleResponse(res, data))
    .catch((err) => handleError(res, err));
});

// Update Project
router.put("/:id", async (req, res) => {
  const projects = await loadProjectsCollection();
  var updateObj = {};
  if (req.body.title) {
    updateObj.title = req.body.title;
  }
  if (req.body.description) {
    updateObj.description = req.body.description;
  }
  if (req.body.github_link) {
    updateObj.github_link = req.body.github_link;
  }
  if (req.body.img) {
    updateObj.img = req.body.img;
  }
  updateObj.updatedAt = new Date();
  await projects
    .updateOne(
      {
        _id: mongodb.ObjectId(req.params.id),
      },
      {
        $set: updateObj,
      }
    )
    .then((data) => handleResponse(res, data))
    .catch((err) => handleError(res, err));
});

// Delete Project
router.delete("/:id", async (req, res) => {
  const projects = await loadProjectsCollection();
  await projects
    .deleteOne({
      _id: mongodb.ObjectId(req.params.id),
    })
    .then((data) => handleResponse(res, data))
    .catch((err) => handleError(res, err));
});

async function loadProjectsCollection() {
  const client = await mongodb.MongoClient.connect(
    process.env.MongoDB,
    { useNewUrlParser: true }
  );

  return client.db("vue_portfolio").collection("projects");
}

module.exports = router;
