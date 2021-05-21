import { RNS3 } from "react-native-aws3"
import axios from "axios"
const SERVERURL = "https://tagged-backend.herokuapp.com/"

const getOptions = async () => {
  const { data } = await axios.get(`${SERVERURL}api/tags/s3`)
  return data
}

export const uploadImage = async file => {
  const options = await getOptions()
  try {
    const res = await RNS3.put(file, options)
    return res
  } catch (err) {
    console.log("Failed to load image to S3")
  }
}
