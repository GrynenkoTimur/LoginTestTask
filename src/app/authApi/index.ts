import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  LoginInput,
  ForgotPasswordInput,
  SetNewPasswordInput,
  BaseResponse,
  LoginResponse,
} from "../../types";
import { ENDPOINTS } from "../endpoints";

export const authApi = createApi({
  reducerPath: "auth/api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_VERSION}`,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  }),
  endpoints: (build) => ({
    login: build.mutation<LoginResponse, LoginInput>({
      query: (body) => ({
        url: ENDPOINTS.AUTH.LOGIN,
        method: "POST",
        body,
      }),
    }),
    forgotPassword: build.mutation<BaseResponse, ForgotPasswordInput>({
      query: (body) => ({
        url: ENDPOINTS.AUTH.FORGOT_PASSWORD,
        method: "POST",
        body,
      }),
    }),
    setNewPassword: build.mutation<BaseResponse, SetNewPasswordInput>({
      query: (body) => ({
        url: ENDPOINTS.AUTH.SET_PASSWORD,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useForgotPasswordMutation,
  useSetNewPasswordMutation,
} = authApi;
