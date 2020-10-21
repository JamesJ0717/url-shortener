import { Schema } from "mongoose";

let UrlSchema = new Schema(
  {
    url: { type: String, required: true },
    slug: { type: String, required: true },
  },
  { timestamps: true }
);

export default UrlSchema;
