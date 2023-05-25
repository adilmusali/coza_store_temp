const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const DB = process.env.DB_URL;
mongoose.connect(DB, { useNewUrlParser: true });

const { Schema } = mongoose;

const storeSchema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Store = mongoose.model("store", storeSchema);

app.get("/store", async(req,res) => {
    const store = await Store.find({})
    res.send(store)
})

app.get("/store/:id", async(req,res) => {
  const findId = req.params.id;
  const store = await Store.findById(findId);
  res.send(store)
})

app.post("/store", async(req,res) => {
    const uploadData = req.body;
    const store = new Store(uploadData);
    store.save()
    res.send(store)
})

app.delete("/store/:id", async(req,res) => {
    const findId = req.params.id;
    await Store.findByIdAndDelete(findId);
    res.send({message: "Successfully Deleted!"})
})


PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running port ${PORT}`);
});
