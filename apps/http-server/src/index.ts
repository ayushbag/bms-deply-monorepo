import express from "express"
import { prisma } from "@repo/db/index"

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
    res.send("hi there!")
})

app.post("/signup",async (req, res) => {
    const username = req.body.username
    const password = req.body.password

    if (username || password) {
        await prisma.user.create({
            data: {
                username,
                password
            }
        }).then(() => {
            return res.status(201).json({
                message: "Content Added!"
            })
        }).catch((error: any) => {
            console.log(error)
        })
    } else {
        res.status(204).json({
            messsage: "Give proper inputs!"
        })
    }
})

app.listen(3001, () => console.log("Server Started on PORT 3000"))