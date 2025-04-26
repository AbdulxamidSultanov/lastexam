"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Job, jobsType, UserResponse } from "../../tools/types";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const jobApi = createApi({
  reducerPath: "jobApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    postJob: builder.mutation<any, Job>({
      query: (jobData) => ({
        url: "api/jobs/",
        method: "post",
        body: jobData,
      }),
    }),
    putJob: builder.mutation<any, { id: number; jobData: Job }>({
      query: ({ id, jobData }) => ({
        url: `api/jobs/${id}`,
        method: "PUT",
        body: jobData,
      }),
    }),
    deleteJob: builder.mutation<any, string>({
      query: (id) => ({
        url: `api/jobs/${id}`,
        method: "DELETE",
      }),
    }),
    getUsers: builder.query<any, void>({
      query: () => "api/users/",
    }),
    postUser: builder.mutation<UserResponse, { name: string; email: string }>({
      query: (userData) => ({
        url: "api/users/",
        method: "POST",
        body: userData,
      }),
    }),
    putUser: builder.mutation<
      UserResponse,
      { id: string; userData: { name: string; email: string } }
    >({
      query: ({ id, userData }) => ({
        url: `api/users/${id}`,
        method: "PUT",
        body: userData,
      }),
    }),
    deleteUser: builder.mutation<any, string>({
      query: (id) => ({
        url: `api/users/${id}`,
        method: "DELETE",
      }),
    }),
    login: builder.mutation<
      any,
      { username: string; password: string | number }
    >({
      query: ({ username, password }) => ({
        url: "api/login/",
        method: "POST",
        body: { username, password },
      }),
    }),
    register: builder.mutation<
      any,
      { username: string; password: string | number }
    >({
      query: ({ username, password }) => ({
        url: "api/register/",
        method: "POST",
        body: { username, password },
      }),
    }),
    loginWithToken: builder.mutation<
      any,
      { username: string; password: string | number }
    >({
      query: ({ username, password }) => ({
        url: "api/token/",
        method: "POST",
        body: { username, password },
      }),
    }),
    refreshToken: builder.mutation<any, { refreshToken: string }>({
      query: (refreshToken) => ({
        url: "api/token/refresh",
        method: "POST",
        body: { refreshToken },
      }),
    }),
    getJobs: builder.query<any, jobsType>({
      query: () => "api/jobs/",
    }),
  }),
});

export const {
  useGetJobsQuery,
  useGetUsersQuery,
  usePostJobMutation,
  usePostUserMutation,
  usePutJobMutation,
  usePutUserMutation,
  useDeleteJobMutation,
  useDeleteUserMutation,
  useLoginMutation,
  useRegisterMutation,
  useLoginWithTokenMutation,
  useRefreshTokenMutation,
} = jobApi;
export default jobApi;
