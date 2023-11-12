import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import requests from 'services/network/http'

import { IAuth, IUser } from './../../../index.d'

const initialState = {
  token: '',
  authStatus: 'idle',
} as IAuth

export const signinUser = createAsyncThunk(
  'user/signin',
  async (body: IUser) => {
    const response = await requests.post('/auth/login-user', body)
    return { token: response.token }
  }
)

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    logout(state) {
      delete state?.token
      window.location.reload()
    },
    resetAuthStatus(state) {
      state.authStatus = 'idle'
    },
  },
  extraReducers(builder) {
    builder.addCase(signinUser.fulfilled, (state, action) => {
      state.token = action.payload.token
      state.authStatus = 'idle'
    }),
      builder.addCase(signinUser.pending, (state) => {
        state.authStatus = 'pending'
      }),
      builder.addCase(signinUser.rejected, (state) => {
        state.authStatus = 'error'
      })
  },
})

export const { logout, resetAuthStatus } = authSlice.actions
export default authSlice.reducer
