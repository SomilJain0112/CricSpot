import express from "express";
import { Sequelize } from "sequelize";
import bodyParser from "body-parser";
const app = express();
const PORT = 8000;
import {authRouter} from "./routes/auth.js";
import { matchRouter } from "./routes/match.js";
import { playerRouter } from "./routes/player.js";
app.use(bodyParser.json());



app.listen(PORT, async (req, res) => {
  console.log("listening at " + PORT);
});

app.get("/", (req,res)=>{
    res.json({"ok":"something"})
})
app.use("/api/admin", authRouter);
app.use("/api/matches",matchRouter);
app.use("/api/players", playerRouter)

