import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { TIUser,TSUser, users } from "../drizzle/schema";

export const getUserService = async (id: number): Promise<TSUser | undefined> => {
    return await db.query.users.findFirst({
        where: eq(users.id, id)
    })
}

export const createUserService = async (user: TIUser) => {
    await db.insert(users).values(user)
    return "User created successfully";
}

export const updateUserService = async (id: number, user: TIUser) => {
    await db.update(users).set(user).where(eq(users.id, id))
    return "User updated successfully";
}

export const deleteUserService = async (id: number) => {
    await db.delete(users).where(eq(users.id, id))
    return "User deleted successfully";
}