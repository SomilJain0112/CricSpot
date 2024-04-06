import express from 'express'
const matchRouter = express.Router()
import {createMatch, getMatchSchedules, getMatchDetails} from "../controller/match.js"
import { auth } from '../middlewares/auth.js'

matchRouter.get("/:match_id", getMatchDetails)

matchRouter.get("/", getMatchSchedules)

matchRouter.post("/",auth, createMatch)


export {matchRouter}