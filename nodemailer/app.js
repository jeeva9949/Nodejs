// const express = require("express")
// const app = express();
// const sendMail = require("./controller/sendmail")
// let port = 5000

// app.get("/", (req, res) => {
//     res.send("this is server")
// })
// app.get("/mail", sendMail)

// const start = () => {
//     try {
//         app.listen(port, () => {
//             console.log(`i am from the port no ${port}` )
//         })
        
//     } catch (error) {
        
//     }
// }
// start()



// practice second time

const express = require("express")
const app = express()
const sendMail = require("./controller/sendmail")

app.get("/", (req, res) => {
    res.send("i am server")
})

app.get("/mail", sendMail)
const start = () => {
    try {
        app.listen(5000, () => {
            console.log("i am listing from the port no 5000")
        })
    } catch (error) {
        
    }
}
start()