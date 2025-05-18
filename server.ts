import express, { Request, Response } from "express";
import cors from "cors";
import axios from "axios";

const app = express();

app.use(cors());
app.get("/*splat", async (req: Request, res: Response) => {
  try {
    console.log("get request recieved");
    const url = req.originalUrl.slice(1);
    console.log(url);
    const response = await axios.get(url);
    res.status(200).send(response.data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
