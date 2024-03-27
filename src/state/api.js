import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const blogApi = createApi({
    reducerPath: 'blogApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.BASE_URL,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ['Posts'],
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => '/posts',
            providesTags: ['Posts'],
        }),
    }),
});

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://10.144.13.87:8686/api",
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: '/auth/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        signup: builder.mutation({
            query: (credentials) => ({
                url: '/auth',
                method: 'POST',
                body: credentials,
            }),
        }),
        oauth: builder.mutation({
            query: (props) => ({
                url: props.provider === 'fb' ? '/auth/facebook' : '/auth/google',
                method: 'POST',
                body: props.credentials,
            }),
        }),
        // ... other endpoints
    }),
});

export const { useGetPostsQuery } = blogApi;
export const { useLoginMutation, useSignupMutation, useOauthMutation } = authApi;