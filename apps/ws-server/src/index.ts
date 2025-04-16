import { WebSocketServer } from "ws"
import { prisma } from "@repo/db/index"

const server = new WebSocketServer({
    port: 3002
}, () => console.log("ws server started!"))

server.on("connection", async (socket) => {
    await prisma.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })
    socket.send("hi you're connected to ws server")
})