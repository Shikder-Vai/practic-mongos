import mongoose from "mongoose";
import app from "./app";

const port = 5000;

async function mongosConnect() {
  await mongoose.connect("mongodb://127.0.0.1:27017/mongos-practic");
  try {
    console.log(`Database successfuly connected`);
    app.listen(port, () => {
      console.log(`mongos practice listening on port ${port}`);
    });
  } catch (err) {
    console.log(`Database not connected`, err);
  }
}
mongosConnect();
