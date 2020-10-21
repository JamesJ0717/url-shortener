import express from "express";
import shortid from "shortid";
import { Url } from "./types/url";
import UrlSchema from "./models/url";
import mongoose from "mongoose";
import { config } from "dotenv";

config();
let router = express.Router();

export default router.get("/", (req, res) => {
  let url = req.query.url;
  console.log(url);
  if (url === "") return res.json({ message: "Missing URL", error: true });

  let row: Url;
  let slug: string;
  let dbUrl = mongoose.model("Url", UrlSchema);

  try {
    dbUrl.find({ url: url }, (err, urls) => {
      if (err) throw new Error(err.message);
      if (urls.length > 0) {
        console.log(urls);
        row = (urls[0] as unknown) as Url;
        console.log(row);
        slug = row.slug;
      } else {
        slug = shortid.generate();
        console.log(url, slug);
        dbUrl.create({ url: url, slug: slug });
      }
      res.statusCode = 200;
      res.json({ output: process.env.PROD_SITE + "/api/" + slug });
    });
  } catch (error) {
    console.log(error);
  }
});
