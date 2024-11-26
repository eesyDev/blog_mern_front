import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const createRequest = (url, method, data) => ({
    url, method, body: data
});

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:4444',
    prepareHeaders: (headers) => {
        const token = localStorage.getItem('token');
        console.log(token)
        if (token) {
            headers.set('Authorization', token)
        }
        return headers
    }
})

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery,
    endpoints: (builder) => ({
        createPost: builder.mutation({
            query: (data) => createRequest('/post/create', 'POST', data)
        })
    })
})

export const { useCreatePostMutation } = postApi