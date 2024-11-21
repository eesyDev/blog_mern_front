import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const createRequest = (url, method, data) => ({
    url, method, body: data
});

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:4444',
    prepareHeaders: (headers) => {
        return headers
    }
})

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery,
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (user) => createRequest('/profile/registration', 'POST', user)
        })
    })
});

export const { useRegisterMutation } = authApi;