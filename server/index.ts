import createError from "http-errors";
import express, { Express, ErrorRequestHandler } from "express";

import loader from "./loader";
import indexRouter from "./routes/index";
import usersRouter from "./routes/users";

const app: Express = express();

const port = 3000;

(async () => {
  await loader(app);
})();

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.use((req, res, next) => {
  next(createError(404));
});

app.use(((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
}) as ErrorRequestHandler);

app.listen(port, () => {
  console.log(`[server]: Server is running at <https://localhost>:${port}`);
});
