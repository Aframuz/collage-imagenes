/*=============================================
=                IMPORT MODULES               =
=============================================*/
// 3rd party modules
const express = require("express")
// Local modules
const imageCtrl = require("../controllers/image-controller")

/*=============================================
=                 VARIABLES                   =
=============================================*/
const router = express.Router()

/*=============================================
=                  ROUTES                     =
=============================================*/
router.delete("/:name", imageCtrl.deleteImg)
router.post("/", imageCtrl.uploadImg)

/*=============================================
=                   EXPORTS                   =
=============================================*/
module.exports = router
