import express from "express";

const router = express.Router();

router.get("/", (req, res, next) => {
  setTimeout(() => {
    return res.send("Hello World!");
  }, 3000);
});

export default router;
