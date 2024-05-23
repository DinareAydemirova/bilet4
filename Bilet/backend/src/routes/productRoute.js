const express = require("express")
const router = express.Router()
const prodController=require("./../controllers/productController")

router.get("/products",prodController.getAllData )
router.post("/products",prodController.postData )
router.get("/products/:id",prodController.getDataById )
router.delete("/products/:id",prodController.deleteDataById )
router.patch("/products/:id",prodController.patchDataById )
router.put("/products/:id",prodController.putDataById )






module.exports = router