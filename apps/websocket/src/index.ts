import WebSocket from "ws";
import PrismaClientApp  from '@repo/prisma/client'
const wss = new WebSocket.Server({ port: 8080 });
interface User {
    name: string,
    email: string
}
wss.on('connection', (ws) => {
    ws.on('message', async (data) => {
        try {
            const user: User = JSON.parse(data as any)
            const newUser = await PrismaClientApp.user.create({
                data: {
                    name: user.name,
                    email: user.email,
                },
            });
            console.log('User created:', user);
        } catch (error) {
            console.error('Error creating user: \n\n', error);
        }

    });

    ws.send("Welcome to the club");
});


console.log("Process Reached!!")