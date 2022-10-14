const router = require('express').Router();
const fs = require("fs");
const {Image} = require("../models");
const { upload} = require("")


router.post('/', upload.single('file'), async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }

    // Image.create({
    //   type: req.file.mimetype,
    //   name: req.file.originalname,
    //   img_url: fs.readFileSync(
    //     __basedir + "/resources/static/assets/uploads/" + req.file.filename
    //   ),
    // }).then((image) => {
    //   fs.writeFileSync(
    //     __basedir + "/resources/static/assets/tmp/" + image.name,
    //     image.data
    //   );

    //   return res.send(`File has been uploaded.`);
    // });
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
});

module.exports = router;