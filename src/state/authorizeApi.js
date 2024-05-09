import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authorizeApi = createApi({
    reducerPath: 'authorizeApi',
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
    tagTypes: ['Authorize'],
    endpoints: (builder) => ({
        getRoles: builder.query({
            query: () => ({
                url: 'roles'
            }),
        }),
        createRole: builder.mutation({
            query: (role) => ({
                method: 'POST',
                url: 'roles',
                body: role
            })
        }),
        updateActiveRoles: builder.mutation({
            query: (roles) => ({
                method: 'PUT',
                url: 'roles/active',
                body: roles
            })
        })
    }),
});

export const { useGetRolesQuery, useUpdateActiveRolesMutation, useCreateRoleMutation } = authorizeApi;