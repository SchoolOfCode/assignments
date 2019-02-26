const createError = require("http-errors");
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");

const indexRouter = require("./routes/index");
const postsRouter = require("./routes/posts");
const usersRouter = require("./routes/users");
const commentsRouter = require("./routes/comments");

const app = express();
const PORT = 5000;

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const dbURL = "mongodb://forumAdmin:forumAdmin1@ds111425.mlab.com:11425/forum";
mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  connectTimeoutMS: 5000
});

app.use("/", indexRouter);
app.use("/posts", postsRouter);
app.use("/users", usersRouter);
app.use("/comments", commentsRouter);

// catch 404 and forward to error handler
app.use((_req, _res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(PORT, () => console.log(`I'm listening on ${PORT}`));
