import express from 'express'
const authRouter = express.Router()
import {signupController,loginController} from "../controller/auth.js"


authRouter.post("/signup", signupController)
authRouter.post("/login", loginController)

export {authRouter}