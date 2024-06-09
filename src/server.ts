import express from "express";
import "dotenv/config";
// ENV
const { PORT } = process.env;
// App Initialize
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// SERVER
app.listen(PORT, () => {
   console.log(`Server running on: ${PORT}`);
 });