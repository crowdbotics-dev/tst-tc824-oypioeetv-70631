import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const qaconnector_patch__partial_update = createAsyncThunk(
  "qaconnector_response_patch_Newdatacalls/qaconnector_patch__partial_update",
  async payload => {
    const response = await apiService.qaconnector_patch__partial_update(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const qaconnector_response_patch_NewdatacallsSlice = createSlice({
  name: "qaconnector_response_patch_Newdatacalls",
  initialState,
  reducers: {},
  extraReducers: {
    [qaconnector_patch__partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [qaconnector_patch__partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [qaconnector_patch__partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  qaconnector_patch__partial_update,
  slice: qaconnector_response_patch_NewdatacallsSlice
}
