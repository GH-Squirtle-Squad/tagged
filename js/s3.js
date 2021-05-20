import { BUCKET_NAME, REGION, KEY, SECRET } from "@env"

import { RNS3 } from "react-native-aws3"

const options = {
  keyPrefix: "uploads/",
  bucket: BUCKET_NAME,
  region: REGION,
  accessKey: KEY,
  secretKey: SECRET,
  successActionStatus: 201
}

export const uploadImage = async file => {
  try {
    const res = await RNS3.put(file, options)
    return res
  } catch (err) {
    console.log("Failed to load image to S3")
  }
  // RNS3.put(file, options).then(response => {
  //   if (response.status !== 201) throw new Error("Failed to upload image to S3")
  //   console.log(response)
  // })
}

// const AWS = require("aws-sdk")
// const RNFS = require("react-native-fs")

// const bucket = BUCKET_NAME
// const region = REGION
// const key = KEY
// const secret = SECRET

// console.log("values: ", bucket, region, key, secret)

// const s3 = new AWS.S3({
//   accessKeyId: key,
//   secretAccessKey: secret
// })

// function uploadImage(file) {
//   const image = RNFS.readFileSync(file.path)

//   const params = {
//     Bucket: bucket,
//     Body: image,
//     Key: file.filename
//   }
//   console.log("params: ", params)
//   return s3.upload(params).promise()
// }

// export default uploadImage
