const express = require("express");
const router = express.Router();

const Topic = require("../models/topic");

router.get("/:id", (req, res) => {
  try {
    const { id } = req.params;
    Topic.findById({ _id: id }, (err, topic) => {
      if (err) {
        throw Error(err);
      }
      return res.json({ payload: { topic } });
    });
  } catch (error) {
    res.status(500).json({ ...error, message: error.message });
  }
});

router.get("/", (_req, res, next) => {
  try {
    Topic.find({}, (err, topics) => {
      if (err) {
        throw Error(err);
      }
      return res.json({ payload: { topics } });
    });
  } catch (error) {
    res.status(500).json({ ...error, message: error.message });
  }
});

router.post("/", (req, res) => {
  try {
    Topic.create(req.body, (err, topic) => {
      if (err) {
        throw Error("Fail to make topic");
      }
      return res.json({ payload: { topic } });
    });
  } catch (error) {
    res.status(500).json({ ...error, message: error.message });
  }
});

router.patch("/:id", (req, res) => {
  try {
    const { id } = req.params;
    Topic.findOneAndUpdate(
      { _id: id },
      req.body,
      { new: true },
      (err, topic) => {
        if (err) {
          console.log(err);

          throw Error(err);
        }
        return res.json({ payload: { topic } });
      }
    );
  } catch (error) {
    res.status(500).json({ ...error, message: error.message });
  }
});

router.delete("/:id", (req, res) => {
  try {
    const { id } = req.params;
    Topic.findOneAndDelete({ _id: id }, (err, topic) => {
      if (err) {
        throw Error(err);
      }
      return res.json({ payload: { topic } });
    });
  } catch (error) {
    res.status(500).json({ ...error, message: error.message });
  }
});

// /* GET home page. */
// router.get("/", (_req, res) => {
//   res.render("index", { title: "ASH" });
// });

module.exports = router;
