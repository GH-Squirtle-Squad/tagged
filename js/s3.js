import { BUCKET_NAME, REGION, KEY, SECRET } from "@env"

import { RNS3 } from "react-native-aws3"

const options = function () {
const { data } = await axios.get(`${SERVERURL}api/tags/s3`)
console.log(data)
return data;
}

export const uploadImage = async file => {
  const options = options()
  try {
    const res = await RNS3.put(file, options)
    return res
  } catch (err) {
    console.log("Failed to load image to S3")
  }
}
