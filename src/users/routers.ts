import { Hono } from "hono";
import { getUser,createUser,updateUser,deleteUser } from "./controller"
import { zValidator } from "@hono/zod-validator";
import { userSchema } from "../validator";

export const userRouter = new Hono();

//get a single user    api/users/1
userRouter.get("/users/:id", getUser)

// create a user 
userRouter.post("/users", zValidator('json', userSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400)
    }
}), createUser);

//update a user
userRouter.put("/users/:id", updateUser)
// delete user
userRouter.delete("/users/:id", deleteUser)
