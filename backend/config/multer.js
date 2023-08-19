const multer = require("multer");

const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    if (file.fieldname === "modelPicture") {
      callback(null, "pictures/modelcars");
    } else {
      callback(null, "pictures/users");
    }
  },

  filename: (req, file, callback) => {
    const fileExtension = MIME_TYPES[file.mimetype];
    let fileName = "";
    if (file.fieldname === "modelPicture") {
      fileName = req.body.modelCarsId + "_" + Date.now() + "." + fileExtension;
    } else {
      fileName = req.body.avatar //+ "." + fileExtension;
    }
    callback(null, fileName);
  },
});

module.exports = multer({ storage: storage }).fields([
  { name: "modelPicture", maxCount: 1 },
  { name: "profileFile", maxCount: 1 },
]);
