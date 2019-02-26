const express = require("express");
const router = express.Router();

const Comment = require("../models/comment");

router.get("/:postId", (req, res) => {
  try {
    const { postId } = req.params;
    Comment.find(
      { postId },
      null,
      { sort: { timestamp: 1 } },
      (err, comments) => {
        if (err) {
          throw Error(err);
        }
        return res.json({ payload: { comments } });
      }
    );
  } catch (error) {
    res.status(500).json({ ...error, message: error.message });
  }
});

router.post("/", (req, res) => {
  try {
    Comment.create(req.body, (err, comment) => {
      if (err) {
        throw Error(err);
      }
      return res.json({ payload: { comment } });
    });
  } catch (error) {
    res.status(500).json({ ...error, message: error.message });
  }
});

router.patch("/:id", (req, res) => {
  try {
    const { id } = req.params;
    Comment.findOneAndUpdate(
      { _id: id },
      req.body,
      { new: true },
      (err, comment) => {
        if (err) {
          console.log(err);

          throw Error(err);
        }
        return res.json({ payload: { comment } });
      }
    );
  } catch (error) {
    res.status(500).json({ ...error, message: error.message });
  }
});

router.delete("/:id", (req, res) => {
  try {
    const { id } = req.params;
    Comment.findOneAndDelete({ _id: id }, (err, comment) => {
      if (err) {
        throw Error(err);
      }
      return res.json({ payload: { comment } });
    });
  } catch (error) {
    res.status(500).json({ ...error, message: error.message });
  }
});

module.exports = router;
