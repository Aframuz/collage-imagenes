/*=============================================
=               IMPORT MODULES                =
=============================================*/
// 3rd party modules
const express = require("express")
const fileUpload = require("express-fileupload")
// Local modules
const imageRoute = require("./routes/image-route")
// Core modules
const path = require("path")

/*=============================================
=                 VARIABLES                   =
=============================================*/
const PUBLIC_DIR = path.join(__dirname, "public")
const PORT = process.env.PORT || 3000

const app = express()

/*=============================================
=          APP CONFIG & MIDDLEWARE            =
=============================================*/
app.use(express.static(PUBLIC_DIR))
app.use(express.json())

app.use(
   fileUpload({
      limits: { fileSize: 5 * 1024 * 1024 },
      abortOnLimit: true,
      responseOnLimit: "File too large",
   })
)

app.set("view engine", "pug")
/*=============================================
=                   ROUTES                    =
=============================================*/
app.get("/", (req, res) => {
   res.render("index")
})

app.use("/images", imageRoute)

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
