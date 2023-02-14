import express from "express";
import authenticateToken from "../authToken.js";
const router = express.Router();
import {splashScreenController } from "../controllers/splashscreenController.js";
import multer from 'multer';
import path from "path";
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'document')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = new Date().getFullYear() + '_' + Math.round(Math.random() * 1E5)
    cb(null, uniqueSuffix+'-'+ file.originalname )
    }
  });
var upload = multer({ storage: storage,
    limits: {
        fields: 5,
        fieldNameSize: 50,
        fieldSize: 20000,
        fileSize: 10000000,
    },
    fileFilter: function(_req, file, cb){
        checkFileType(file, cb);
      } 
    }).single('file');
    function checkFileType(file, cb){
        const filetypes = /jpeg|jpg|png|gif/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);
        if(mimetype && extname){
          return cb(null,true);
        } else {
          cb('Error: Only .png, .jpg .jpeg and .gif format allowed!');
        }
      }
//propertyImage Managemet
router.post('/', upload, splashScreenController.saveImage);
router.get('/', splashScreenController.findAll);
// router.get('/:image_id', splashScreenController.findById);
// router.put('/:image_id',  splashScreenController.update);
// router.delete('/:image_id', splashScreenController.delete);

export default router;