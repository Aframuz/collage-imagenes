/*=============================================
=                IMPORT MODULES               =
=============================================*/
// Core modules
const path = require("path")
const fsp = require("fs").promises

/*=============================================
=                   VARIABLES                 =
=============================================*/
const rootPath = path.resolve(__dirname, "..")
const imgsPath = path.join(rootPath, "public", "uploads")

/*=============================================
=                   HANDLERS                  =
=============================================*/
const uploadImg = async (req, res) => {
   if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({
         error: "No files were uploaded",
      })
   }

   const { position } = req.body
   const image = req.files.file
   const { name } = image
   const imgPath = path.join(imgsPath, name)

   image.mv(imgPath, (err) => {
      if (err) {
         return res.status(500).json({
            error: "Error uploading image",
         })
      }
      return res.status(200).json({
         message: "Image uploaded",
         imgName: name,
         position,
      })
   })
}

const deleteImg = async (req, res) => {
   const { name } = req.params
   try {
      const imgPath = path.join(imgsPath, name)
      await fsp.unlink(imgPath)
      return res.status(200).json("Image deleted")
   } catch (error) {
      console.log(error)
      return res.status(500).json("Error deleting image")
   }
}

/*=============================================
=                   EXPORTS                   =
=============================================*/
module.exports = {
   uploadImg,
   deleteImg,
}
