import express, { Express } from "express";

import loader from "./loader";
import indexRouter from "./routes/index";
import usersRouter from "./routes/users";
import { errorHandler, unknownPageHandler } from "./middlewares";

export const app: Express = express();

const port = 3000;

(async () => {
  await loader(app);

  app.use("/", indexRouter);
  app.use("/users", usersRouter);

  app.use(unknownPageHandler);
  app.use(errorHandler);
})();

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
