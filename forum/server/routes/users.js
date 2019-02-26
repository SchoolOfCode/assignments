const express = require("express");
const router = express.Router();

const User = require("../models/user");

router.get("/:id", (req, res) => {
  try {
    const { id } = req.params;
    User.findById({ _id: id }, null, { lean: 1 }, (err, user) => {
      if (err) {
        throw Error(err);
      }
      const { password, ...restUser } = user;
      return res.json({ payload: { user: restUser } });
    });
  } catch (error) {
    res.status(500).json({ ...error, message: error.message });
  }
});

router.post("/", (req, res) => {
  try {
    User.create(req.body, (err, user) => {
      if (err) {
        throw Error(err);
      }
      return res.json({ payload: { user } });
    });
  } catch (error) {
    res.status(500).json({ ...error, message: error.message });
  }
});

router.patch("/:id", (req, res) => {
  try {
    const { id } = req.params;
    User.findOneAndUpdate({ _id: id }, req.body, { new: true }, (err, user) => {
      if (err) {
        console.log(err);

        throw Error(err);
      }
      return res.json({ payload: { user } });
    });
  } catch (error) {
    res.status(500).json({ ...error, message: error.message });
  }
});

router.delete("/:id", (req, res) => {
  try {
    const { id } = req.params;
    User.findOneAndDelete({ _id: id }, (err, user) => {
      if (err) {
        throw Error(err);
      }
      return res.json({ payload: { user } });
    });
  } catch (error) {
    res.status(500).json({ ...error, message: error.message });
  }
});

module.exports = router;
