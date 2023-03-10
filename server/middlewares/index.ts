import createError from "http-errors";
import { Request, Response, NextFunction, ErrorRequestHandler } from "express";

export const unknownPageHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  next(createError(404));
};

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
};
