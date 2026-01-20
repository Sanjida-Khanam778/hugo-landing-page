import { api } from "./api";

export const authapi = api.injectEndpoints({
    endpoints: (builder) => ({
        createProgram: builder.mutation({
            query: (data) => ({
                url: "/programs/add/",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["uni_users"],
        }),

        programUpdate: builder.mutation({
            query: (data) => {
                const id = data instanceof FormData ? data.get('id') : data.id;
                return {
                    url: `/programs/edit/${id}/`,
                    method: "PATCH",
                    body: data,
                };
            },
            invalidatesTags: ["uni_users"],
        }),

        getAllPrograms: builder.query({
            query: () => "/programs/",
            providesTags: ["uni_users"],
        }),

        getProgramById: builder.query({
            query: (id) => `/program/${id}/`,
            providesTags: (result, error, id) => [{ type: "Program", id }],
        }),

        deleteProgram: builder.mutation({
            query: (id) => ({
                url: `/programs/delete/${id}/`,
                method: "DELETE",
            }),
            invalidatesTags: ["uni_users"],
        }),
    }),
});

export const {
    useCreateProgramMutation,
    useGetAllProgramsQuery,
    useProgramUpdateMutation,
    useDeleteProgramMutation,
    useGetProgramByIdQuery,
} = authapi;
