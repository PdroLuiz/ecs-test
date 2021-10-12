require("dotenv/config");
const express = require('express');

const app = express();


app.get("/", (req, res) => {
  return res.status(200).send("Hello from AWS ECS");
});



const PORT = process.env.PORT;
if (PORT != null) {
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
} else {
  throw new Error("PORT is undefined");
}

