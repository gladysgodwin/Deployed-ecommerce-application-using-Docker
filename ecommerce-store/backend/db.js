require('dotenv').config();
const mongoose = require("mongoose");
console.log(process.env.DATABASE_URL)
const db = process.env.URI
return mongoose.connect(
  "process.env.DB_CONNECTION",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("conected to db")
);
