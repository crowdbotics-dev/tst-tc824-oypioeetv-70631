import axios from "axios"
import {
  QA_CONNECTOR_USERNAME,
  QA_CONNECTOR_PASSWORD
} from "react-native-dotenv"
const qAconnector = axios.create({
  baseURL: "https://youtube.com",
  auth: { username: QA_CONNECTOR_USERNAME, password: QA_CONNECTOR_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function qaconnector_patch__partial_update(payload) {
  return qAconnector.patch(`/`, payload.data)
}
export const apiService = { qaconnector_patch__partial_update }
