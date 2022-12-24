import mongoose from "mongoose";

const con = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.MONGO, {
      dbName: "merng-1",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB successfully");
    })
    .catch(() => {
      console.log(`Error connecting to MongoDB,${err}`);
    });
};
export default con;
