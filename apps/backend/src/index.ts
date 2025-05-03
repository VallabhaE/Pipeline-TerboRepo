import express from 'express'
import PrismaClientApp from '@repo/prisma/client'

const app = express()



app.get("/", async (req, res) => {

    const  result = await PrismaClientApp.user.create({
        data: {
            name: req.query.name as string,
            email: req.query.email as string
        }
    })

    res.json({
        success: "TRUE",
        result
    })
})

app.listen(8082, () => {
    console.log("Listening at 8082")
})



