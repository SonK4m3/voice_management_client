import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cdrApi = createApi({
    reducerPath: 'cdrApi',
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
    tagTypes: ['Cdr'],
    endpoints: (builder) => ({
        getCdrs: builder.query({
            query: ({ start, limit }) => ({
                url: `cdr?start=${start}&limit=${limit}`,
            }),
        }),
    }),
});

export const { useGetCdrsQuery } = cdrApi;