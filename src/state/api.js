import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const blogApi = createApi({
    reducerPath: 'blogApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('accessToken');
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
        baseUrl: process.env.REACT_APP_API_URL,
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
                url: '/auth/signup',
                method: 'POST',
                body: credentials,
            }),
        }),
        // ... other endpoints
    }),
});

export const fooApi = createApi({
    reducerPath: 'fooApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('accessToken');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ['Foo'],
    endpoints: (builder) => ({
        getParamById: builder.query({
            query: ({ ids, id }) => ({
                url: `foo/param/${ids}?id=${id}`,
            }),
        }),
        getAdminParamById: builder.query({
            query: ({ ids, id }) => ({
                url: `foo/admin/param/${ids}?id=${id}`,
            }),
        }),
    }),
});

export const { useGetAdminParamByIdQuery, useGetParamByIdQuery } = fooApi;
export const { useGetPostsQuery } = blogApi;
export const { useLoginMutation, useSignupMutation } = authApi;