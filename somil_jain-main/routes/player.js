import express from 'express'
const playerRouter = express.Router()
import { addTeamMemberToSquad, getPlayerStats} from "../controller/player.js"
import { auth } from '../middlewares/auth.js'


playerRouter.get("/:player_id/stats",getPlayerStats)

playerRouter.post("/createPlayer",auth, addTeamMemberToSquad)

export {playerRouter}