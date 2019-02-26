const express = require("express");
const router = express.Router();

const Post = require("../models/post");

router.get("/:topicId", (req, res) => {
  try {
    const { topicId } = req.params;
    Post.find({ topicId }, null, { sort: { timestamp: 1 } }, (err, posts) => {
      if (err) {
        throw Error(err);
      }
      return res.json({ payload: { posts } });
    });
  } catch (error) {
    res.status(500).json({ ...error, message: error.message });
  }
});

router.post("/", (req, res) => {
  console.log(req.body);

  try {
    Post.create(req.body, (err, post) => {
      if (err) {
        throw Error(err);
      }
      return res.json({ payload: { post } });
    });
  } catch (error) {
    res.status(500).json({ ...error, message: error.message });
  }
});

router.patch("/:id", (req, res) => {
  try {
    const { id } = req.params;
    Post.findOneAndUpdate({ _id: id }, req.body, { new: true }, (err, post) => {
      if (err) {
        console.log(err);

        throw Error(err);
      }
      return res.json({ payload: { post } });
    });
  } catch (error) {
    res.status(500).json({ ...error, message: error.message });
  }
});

router.delete("/:id", (req, res) => {
  try {
    const { id } = req.params;
    Post.findOneAndDelete({ _id: id }, (err, post) => {
      if (err) {
        throw Error(err);
      }
      return res.json({ payload: { post } });
    });
  } catch (error) {
    res.status(500).json({ ...error, message: error.message });
  }
});

module.exports = router;
