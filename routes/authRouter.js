import express from "express";

import authtenticate from "../middlewares/authtenticate.js";

import authController from "../controllers/authController.js";

import validateBody from "../decorators/validateBody.js";

import { signupSchema, signinSchema } from "../schemas/usersSchemas.js";

const authRouter = express.Router();

authRouter.post("/signup", validateBody(signupSchema), authController.signup);

authRouter.post("/signin", validateBody(signinSchema), authController.signin);

authRouter.get("/current", authtenticate, authController.getCurrent);

authRouter.post("/signout", authtenticate, authController.signout);

export default authRouter;
