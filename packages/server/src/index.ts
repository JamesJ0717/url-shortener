import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import shortenUrl from "./api/shortenUrl";

import UrlSchema from "./api/models/url";
import { Url } from "./api/types/url";

const app = express();

mongoose.connect("mongodb://mongo/urls");
let db = mongoose.connection;
db.on("error", console.error.bind(console, "DB Conn. error"));

app.use(morgan("common"));

app.use("/api/shortenUrl", shortenUrl);

app.get("/api/:slug", (req, res) => {
  let slug = req.params.slug;
  console.log(slug);
  let dbUrl = mongoose.model("Url", UrlSchema);
  dbUrl.find({ slug: slug }, (err, row) => {
    if (row.length > 0) {
      let url = (row[0] as unknown) as Url;
      if (url.url.includes("http") || url.url.includes("https")) return res.redirect(url.url);
      else return res.redirect(`http://${url.url}`);
    }
  });
});

app.get("/api", (req, res) => res.send("Hello World!"));

const port = 80;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
