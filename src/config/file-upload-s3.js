import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";

aws.config.update({
  region: "ap-south-1",
  secretAccessKey: "sIagDDbDU27M24yeVKNL/3fn8F4v1iO/qZHvOVNB",
  accessKeyId: "AKIAV3JICST3R7CQ6AH5",
});

const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "twitterbucketabhi",
    acl: "public-read",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString());
    },
  }),
});

export default upload;
