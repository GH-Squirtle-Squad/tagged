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
}
